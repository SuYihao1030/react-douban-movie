import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { NavBar, Icon, WhiteSpace, Button } from 'antd-mobile';
import List from '../../components/list';

class Result extends Component {
  componentDidMount() {
    const { list, start, searchMovie, match } = this.props;
    (list.size === 0) && searchMovie(match.params.key, start);
  }
  componentWillUnmount() {
    this.props.clearSearchInfo();
  }
  render() {
    const { title, list, start, total, searchMovie, match } = this.props;
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
        <WhiteSpace size="lg"/>
        {
          (list) && (list.size !== 0) && (
            <Button 
              type="primary"  
              size="small" 
              style={{width: "100px", margin: "0 auto"}}
              ref={(more) => {this.more = more}}
              onClick={() => {searchMovie(match.params.key, start + 10);}}
              disabled={ list.size >= total ? true : false }
            >
              { list.size >= total ? "到底了" : "更多" }
            </Button>
          )
        }
        <WhiteSpace size="lg"/>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  title: state.getIn(['result', 'title']),
  list: state.getIn(['result', 'list']),
  total: state.getIn(['result', 'total']),
  start: state.getIn(['result', 'start'])
})

const mapDispatch = (dispatch) => ({
  searchMovie(key, start) {
    dispatch(actionCreators.searchMovie(key, start));
  },
  clearSearchInfo() {
    dispatch(actionCreators.clearSearchInfo());
  }
})

export default connect(mapState, mapDispatch)(withRouter(Result));