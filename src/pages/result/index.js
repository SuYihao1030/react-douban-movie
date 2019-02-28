import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { NavBar, Icon } from 'antd-mobile';
import List from '../../components/list';

class Result extends Component {
  componentDidMount() {
    this.props.searchMovie(this.props.match.params.key);
  }
  componentWillUnmount() {
    this.props.clearSearchInfo();
  }
  render() {
    const { title, list } = this.props;
    return (
      <Fragment>
        <NavBar
          mode='light'
          icon={<Icon type="left" />}
          onLeftClick={() => {this.props.history.goBack()}}
        >
          { title }
        </NavBar>
        {
          (list) && (list.size !== 0) && list.map((item) => (
            <List 
              list={item}
              key={item.get('id')}
            />
          ))
        }
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  title: state.getIn(['result', 'title']),
  list: state.getIn(['result', 'list'])
})

const mapDispatch = (dispatch) => ({
  searchMovie(key) {
    dispatch(actionCreators.searchMovie(key));
  },
  clearSearchInfo() {
    dispatch(actionCreators.clearSearchInfo());
  }
})

export default connect(mapState, mapDispatch)(withRouter(Result));