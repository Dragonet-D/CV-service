import React, { memo } from 'react';
import { Button } from 'components/common';
import styles from './Child.module.less';

const Child = memo(({ config, onButtonClick }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.count}>{config.count}</div>
      <Button onClick={() => onButtonClick()}>Add</Button>
    </div>
  );
});

Child.defaultProps = {
  config: {
    count: 0
  },
  onButtonClick: () => {}
};

export default Child;
