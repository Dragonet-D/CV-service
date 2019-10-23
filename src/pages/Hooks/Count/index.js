import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'dva';

function Count(props) {
  const { dispatch, global } = props;
  const { hooksCount } = global;
  const countRef = useRef(null);

  const [stateCount, setStateCount] = useState(0);
  countRef.current = stateCount;

  useEffect(() => {
    return () => {
      dispatch({
        type: 'global/clearHooksCount'
      });
    };
  }, [dispatch]);

  useEffect(() => {
    document.title = hooksCount;
  }, [dispatch, hooksCount]);

  function handleCountChange() {
    dispatch({
      type: 'global/changeHooksCount'
    });
  }

  function handleStateCountChange() {
    setStateCount(stateCount + 1);
  }

  const alertCount = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 2000);
  };

  return (
    <>
      <Button color="secondary" variant="contained" onClick={handleCountChange}>
        {`props count is ${hooksCount}`}
      </Button>
      <Button color="secondary" variant="contained" onClick={handleStateCountChange}>
        {`state count is ${stateCount}`}
      </Button>
      <Button color="secondary" variant="contained" onClick={alertCount}>
        Alert Count
      </Button>
    </>
  );
}

export default connect(({ global }) => ({ global }))(Count);
