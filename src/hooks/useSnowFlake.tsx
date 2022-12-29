import React, { useEffect, useState } from 'react';
import SnowFlake, { MIN_DURATION } from '@/components/atoms/SnowFlake';

/**
 * TODO: 브라우저에서 너무 많은 자원을 소모하게 되는 문제가 있음
 * - 리팩터링 또는 라이브러리를 사용하자
 */
const useSnowFlake = () => {
  const [snowFlakes, setSnowFlakes] = useState<JSX.Element[]>([]);

  const makeSnowFlake = () => {
    const duration = Math.random() * 20 + MIN_DURATION;
    const delay = Math.random() * 10;

    setSnowFlakes((prev) => [
      ...prev,
      <SnowFlake
        key={(duration + delay) * new Date().getMilliseconds()}
        animationDelay={delay}
        animationDuration={duration}
      />,
    ]);

    setTimeout(() => {
      setSnowFlakes((prev) => prev.slice(1));
    }, (duration + delay) * 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      makeSnowFlake();
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return { snowFlakes };
};

export default useSnowFlake;
