import React from 'react';
import styled from 'styled-components';

interface SnowFlakeProps {
  left?: number;
  initialOpacity?: number;
  animationDelay?: number;
  animationDuration?: number;
}
const SnowFlakeDiv = styled.div<SnowFlakeProps>`
  position: absolute;
  top: -8px;
  left: ${(props) => props.left}px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  opacity: ${(props) => props.initialOpacity || 1};
  animation: fall 10s linear;
  animation-delay: ${(props) => props.animationDelay}s;
  animation-duration: ${(props) => props.animationDuration || 10}s;

  @keyframes fall {
    from {
    }
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;

export const MIN_DURATION = 10;

const SnowFlake = ({
  left = Math.random() * window.screen.width,
  initialOpacity = Math.random(),
  animationDelay = Math.random() * 10,
  animationDuration = Math.random() * 20 + MIN_DURATION,
}: SnowFlakeProps) => {
  return (
    <SnowFlakeDiv
      left={left}
      animationDelay={animationDelay}
      initialOpacity={initialOpacity}
      animationDuration={animationDuration}
    />
  );
};

export default SnowFlake;
