import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  name: string;
}
const App = ({ name }: Props) => <h1>Hello {name}</h1>;
const mountNode = document.getElementById('root');
ReactDOM.render(<App name="Mario" />, mountNode);
