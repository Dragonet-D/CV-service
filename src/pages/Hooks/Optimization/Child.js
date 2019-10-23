import React from 'react';
import { Button } from 'components/common';

function Child({ config }) {
  return (
    <>
      <div>{config.count}</div>
      <Button>Add</Button>
    </>
  );
}

Child.defaultProps = {
  config: {
    count: 0
  }
};

export default Child;
