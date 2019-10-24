import React, { useState, useCallback } from 'react';
import { Input } from 'antd';

function sum(a, b) {
  console.log('sum() ran');
  return a + b;
}

function Test() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [name, setName] = useState('Jim');

  const result = useCallback(sum(val1, val2), [val1, val2]);

  return (
    <>
      <Input value={val1} onChange={({ target }) => setVal1(parseInt(target.value || 0, 10))} />
      <Input value={val2} onChange={({ target }) => setVal2(parseInt(target.value || 0, 10))} />
      <Input placeholder="Name" value={name} onChange={({ target }) => setName(target.value)} />
      <p>{result}</p>
    </>
  );
}

export default Test;
