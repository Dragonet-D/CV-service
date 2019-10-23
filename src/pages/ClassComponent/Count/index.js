import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'dva';

class Count extends Component {
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
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeClassComponentCount'
    });
  };

  render() {
    const { global } = this.props;
    return (
      <>
        <div>{global.classComponentCount}</div>
        <Button color="secondary" variant="contained" onClick={this.handleCountChange}>
          Click
        </Button>
      </>
    );
  }
}

export default connect(({ global }) => ({ global }))(Count);
