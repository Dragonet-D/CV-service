import React, { memo } from 'react';
import { Button } from 'components/common';

const Child = memo(({ config, onButtonClick }) => {
  return (
    <>
      <div>{config.count}</div>
      <Button onClick={() => onButtonClick()}>Add</Button>
    </>
  );
});

Child.defaultProps = {
  config: {
    count: 0
  },
  onButtonClick: () => {}
};

export default Child;
