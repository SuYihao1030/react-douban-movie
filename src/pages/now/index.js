import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';
import Search from '../../components/search';
import List from '../../components/list';
import { actionCreators } from './store';

class Now extends Component {
  componentDidMount() {
    (this.props.list.size === 0) && this.props.getNowMovieList();
  }
  render() {
    return (
      <Fragment>
        <NavBar
          mode='light'
        >
          正在上映
        </NavBar>
        <Search />
        {
          this.props.list.map((item) => (
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
  list: state.getIn(['now', 'list'])
})

const mapDispatch = (dispatch) => ({
  getNowMovieList() {
    dispatch(actionCreators.getNowMovie());
  }
})

export default connect(mapState, mapDispatch)(Now);