import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Child from './Child';

function Optimization() {
  const [value, setValue] = useState('');

  const config = { count: 0 };

  function handleChange(e) {
    setValue(e.target.value);
  }

  const handleAdd = () => {};

  return (
    <div style={{ margin: '10px auto', width: '50%' }}>
      <TextField fullWidth label="Name" type="text" onChange={handleChange} value={value} />
      <Child onButtonClick={handleAdd} config={config} />
    </div>
  );
}

export default Optimization;
