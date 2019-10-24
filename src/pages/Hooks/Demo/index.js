import React, { useContext } from 'react';
import { Row } from 'components/common';
import { ThemeContext, LocaleContext } from 'utils/context';

function Demo() {
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);
  return (
    <section className={theme}>
      <Row label="First Name">Harry</Row>
      <Row label="Language">{locale}</Row>
    </section>
  );
}

export default Demo;
