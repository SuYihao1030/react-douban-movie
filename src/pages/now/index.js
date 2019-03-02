import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavBar, WhiteSpace, Button } from 'antd-mobile';
import Search from '../../components/search';
import List from '../../components/list';
import { actionCreators } from './store';

class Now extends Component {
  componentDidMount() {
    const { list, start, getNowMovieList } = this.props;
    (list.size === 0) && getNowMovieList(start);
  }
  
  render() {
    const { list, start, total, getNowMovieList } = this.props;
    return (
      <Fragment>
        <NavBar
          mode='light'
        >
          正在上映
        </NavBar>
        <Search />
        {
          list.map((item) => (
            <List 
              list={item}
              key={item.get('id')}
            />
          ))
        }
        <WhiteSpace size="lg"/>
        {
          (list.size !== 0) && (
            <Button 
              type="primary"  
              size="small" 
              style={{width: "100px", margin: "0 auto"}}
              ref={(more) => {this.more = more}}
              onClick={() => {getNowMovieList(start + 10)}}
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
  list: state.getIn(['now', 'list']),
  total: state.getIn(['now', 'total']),
  start: state.getIn(['now', 'start'])
})

const mapDispatch = (dispatch) => ({
  getNowMovieList(start) {
    dispatch(actionCreators.getNowMovie(start));
  }
})

export default connect(mapState, mapDispatch)(Now);