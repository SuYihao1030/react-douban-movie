import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SearchBar } from 'antd-mobile';
import { actionCreators } from './store';

class Search extends Component {
  render() {
    const { searchKey, changeSearchValue, clearSearchValue, history } = this.props;
    return (
      <SearchBar
        placeholder="搜索全网电影" 
        showCancelButton
        value={searchKey}
        onChange={(val) => {changeSearchValue(val)}}
        onSubmit={(val) => {history.push("/result/" + val); clearSearchValue()}}
      />
    );
  }
}

const mapState = (state) => ({
  searchKey: state.getIn(['search', 'searchKey'])
})

const mapDispatch = (dispatch) => ({
  changeSearchValue(value) {
    dispatch(actionCreators.ChangeSearchValue(value));
  },
  clearSearchValue() {
    dispatch(actionCreators.clearSearchValue())
  }
})

export default connect(mapState, mapDispatch)(withRouter(Search));