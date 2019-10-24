import React, { Component } from 'react';
import { Row } from 'components/common';
import { ThemeContext, LocaleContext } from 'utils/context';

class Demo extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <section className={theme}>
            <Row label="First Name">Harry</Row>
            <Row label="Last Name">Potter</Row>
            <LocaleContext.Consumer>
              {locale => <Row label="Language">{locale}</Row>}
            </LocaleContext.Consumer>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Demo;
