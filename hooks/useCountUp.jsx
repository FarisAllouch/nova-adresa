import { useEffect, useState } from "react";

export default function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMilSecDur = duration;
    let incrementTime = 15;

    const timer = setInterval(() => {
      start += end / (totalMilSecDur / incrementTime);
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}
