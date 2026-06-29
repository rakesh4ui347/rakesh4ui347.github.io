import { useEffect, useMemo, useRef, useState } from 'react';

export function parseCountValue(value) {
  const str = String(value).trim();
  const match = str.match(/^([\d,]+(?:\.\d+)?)([\s\S]*)$/);
  if (!match) {
    return null;
  }

  const suffix = match[2].trim();
  const allowedSuffix = suffix === '' || /^(\+|%|K|M|k|m)$/.test(suffix);
  if (!allowedSuffix) {
    return null;
  }

  const numericPart = match[1].replace(/,/g, '');

  return {
    target: parseFloat(numericPart),
    suffix: match[2],
    decimals: numericPart.includes('.') ? numericPart.split('.')[1].length : 0
  };
}

export default function useCountUp(value, { duration = 1800, startOnView = true, resetKey = '' } = {}) {
  const parsed = useMemo(() => parseCountValue(value), [value]);
  const [display, setDisplay] = useState(() => (parsed ? `0${parsed.suffix}` : value));
  const ref = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return undefined;
    }

    setDisplay(`0${parsed.suffix}`);

    const runAnimation = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      const start = performance.now();
      const { target, suffix, decimals } = parsed;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 4;
        const current = eased * target;
        const formatted = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
        setDisplay(`${formatted}${suffix}`);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          const finalValue = decimals > 0 ? target.toFixed(decimals) : target.toString();
          setDisplay(`${finalValue}${suffix}`);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const element = ref.current;

    if (!startOnView) {
      runAnimation();
      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
      };
    }

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      runAnimation();
    } else {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, duration, startOnView, resetKey, parsed, parsed?.target, parsed?.suffix, parsed?.decimals]);

  return { display, ref, isNumeric: Boolean(parsed) };
}
