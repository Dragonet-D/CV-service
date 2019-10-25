import React, { Component } from 'react';
import { Row } from 'components/common';
import { ThemeContext, LocaleContext } from 'utils/context';

class Demo extends Component {
  state = {
    firstName: 'Harry',
    lastName: 'Potter',
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  handleFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  render() {
    const { firstName, lastName, width } = this.state;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <section className={theme}>
            <Row label="First Name">
              <input type="text" value={firstName} onChange={this.handleFirstNameChange} />
            </Row>
            <Row label="Last Name">
              <input type="text" value={lastName} onChange={this.handleLastNameChange} />
            </Row>
            <Row label="Width">{width}</Row>
            <LocaleContext.Consumer>
              {locale => <Row label="Lang">{locale}</Row>}
            </LocaleContext.Consumer>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Demo;
