import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'dva';

class Count extends Component {
  state = {
    stateCount: 0
  };

  componentDidMount() {
    const { global } = this.props;
    this.changeTitle(global.classComponentCount);
  }

  componentDidUpdate() {
    const { global } = this.props;
    const { classComponentCount } = global;
    this.changeTitle(classComponentCount);
  }

  componentWillUnmount() {
    const { dispatch, global } = this.props;
    dispatch({
      type: 'global/clearClassComponentCount'
    });
    document.title = global.classComponentCount;
    this.changeTitle();
  }

  changeTitle = (count = 0) => {
    document.title = count;
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

  render() {
    const { global } = this.props;
    const { stateCount } = this.state;
    return (
      <>
        <Button color="secondary" variant="contained" onClick={this.handleCountChange}>
          {`props count is ${global.classComponentCount}`}
        </Button>
        <Button color="secondary" variant="contained" onClick={this.handleStateCountChange}>
          {`state count is ${stateCount}`}
        </Button>
      </>
    );
  }
}

export default connect(({ global }) => ({ global }))(Count);
