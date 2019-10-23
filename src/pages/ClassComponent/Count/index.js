import React, { Component } from 'react';
import { Button, Row } from 'components/common';
import { connect } from 'dva';
import { ThemeContext, LocaleContext } from 'utils/context';

class Count extends Component {
  state = {
    stateCount: 0,
    firstName: 'Harry',
    lastName: 'Potter',
    width: window.innerWidth
  };

  componentDidMount() {
    this.changeTitle();
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    this.changeTitle();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  changeTitle = () => {
    const { firstName, lastName } = this.state;
    document.title = `${firstName}  ${lastName}`;
  };

  handleCountChange = () => {
    const { dispatch, global } = this.props;
    const { classComponentCount } = global;
    dispatch({
      type: 'global/changeClassComponentCount',
      payload: {
        count: classComponentCount + 1
      }
    });
  };

  handleStateCountChange = () => {
    this.setState(prevState => ++prevState.stateCount);
  };

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    const { global } = this.props;
    const { stateCount, firstName, lastName, width } = this.state;
    return (
      <>
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
                {local => <Row label="Name">{local}</Row>}
              </LocaleContext.Consumer>
            </section>
          )}
        </ThemeContext.Consumer>
        <Button onClick={this.handleCountChange}>
          {`props count is ${global.classComponentCount}`}
        </Button>
        <Button onClick={this.handleStateCountChange}>{`state count is ${stateCount}`}</Button>
      </>
    );
  }
}

export default connect(({ global }) => ({ global }))(Count);
