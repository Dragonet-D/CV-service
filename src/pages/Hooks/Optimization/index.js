import React, { useState, useCallback, useMemo, useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Child from './Child';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    default:
      return state;
  }
}

function Optimization() {
  const [value, setValue] = useState('');
  const [count, dispatchCount] = useReducer(reducer, 0);

  const config = useMemo(() => ({ count }), [count]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const handleAdd = useCallback(() => {
    dispatchCount({ type: 'add' });
  }, []);

  return (
    <div style={{ margin: '10px auto', width: '50%' }}>
      <TextField fullWidth label="Name" type="text" onChange={handleChange} value={value} />
      <Child onButtonClick={handleAdd} config={config} />
    </div>
  );
}

export default Optimization;
