import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'dva';

function Count(props) {
  const { dispatch, global } = props;
  const { hooksCount } = global;

  function handleCountChange() {
    dispatch({
      type: 'global/changeHooksCount'
    });
  }

  return (
    <>
      <div>{hooksCount}</div>
      <Button color="secondary" variant="contained" onClick={handleCountChange}>
        Click
      </Button>
    </>
  );
}

export default connect(({ global }) => ({ global }))(Count);
