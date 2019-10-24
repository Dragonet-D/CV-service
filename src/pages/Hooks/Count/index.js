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
  const firstName = useFormInput('Harry');
  const lastName = useFormInput('Potter');
  countRef.current = stateCount;

  const width = useWindowWidth();

  useDocumentTitle(`${firstName.value}  ${lastName.value}`);

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
      <section className={theme}>
        <Row label="First Name">
          <input type="text" {...firstName} />
        </Row>
        <Row label="Last Name">
          <input type="text" {...lastName} />
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

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
}

export default connect(({ global }) => ({ global }))(Count);
