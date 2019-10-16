import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 640px;
  height: 400px;
  border: solid red 1px;
  margin-left: 50px;
  margin-bottom: 50px;
`;

const Circle = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${props => props.x}px;
  bottom: ${props => props.y}px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: gray;

  &::after {
    display: block;
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    background-color: red;
  }
`;

export const CSSGraph = () => {
  return (
    <Wrapper>
      <Circle x={50} y={25} />
      <Circle x={100} y={67} />
      <Circle x={240} y={300} />
    </Wrapper>
  );
};
