import React, { useState, useEffect, useRef, useContext } from 'react';
import { Button, Row } from 'components/common';
import { connect } from 'dva';
import { ThemeContext, LocaleContext } from 'utils/context';

function Count(props) {
  const { dispatch, global } = props;
  const { hooksCount } = global;
  const countRef = useRef(null);
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  const [stateCount, setStateCount] = useState(0);
  const [firstName, setFirstName] = useState('Harry');
  const [lastName, setLastName] = useState('Potter');
  countRef.current = stateCount;

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.title = `${firstName}  ${lastName}`;
  }, [firstName, lastName]);

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

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <section className={theme}>
        <Row label="First Name">
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </Row>
        <Row label="Last Name">
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </Row>
        <Row label="Width">{width}</Row>
        <Row label="Language">{locale}</Row>
      </section>
      <Button onClick={handleCountChange}>{`props count is ${hooksCount}`}</Button>
      <Button onClick={handleStateCountChange}>{`state count is ${stateCount}`}</Button>
      <Button onClick={alertCount}>Alert Count</Button>
    </>
  );
}

export default connect(({ global }) => ({ global }))(Count);
