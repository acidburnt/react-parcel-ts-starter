import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: green;
  background-color: gray;
`;

export const Greeter = ({ name }: { name: string }) => <Header>Hello {name}!</Header>;
