import React, { useState, useEffect } from 'react';
import { Root } from './styled';

const Main = () => {
  const [title, setTitle] = useState<String>("Main");
  useEffect(() => {
    setTitle("house title");
  }, []);
  return (
    <Root>
      <div>Main page</div>
      <div>{title}</div>
    </Root>
  );
};

export default Main;
