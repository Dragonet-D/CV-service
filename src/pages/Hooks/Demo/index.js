import React, { useState, useEffect, useContext } from 'react';
import { Row } from 'components/common';
import { ThemeContext, LocaleContext } from 'utils/context';

function Demo() {
  const firstName = useFormInput('Harry');
  const lastName = useFormInput('Potter');
  const [width, setWidth] = useState(window.innerWidth);
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <section className={theme}>
      <Row label="First Name">
        <input type="text" {...firstName} />
      </Row>
      <Row label="Last Name">
        <input type="text" {...lastName} />
      </Row>
      <Row label="Width">{width}</Row>
      <Row label="Lang">{locale}</Row>
    </section>
  );
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

export default Demo;
