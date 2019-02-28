import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon, Card, WingBlank, WhiteSpace, Tag } from 'antd-mobile';
import { actionCreators } from './store';

class Detail extends Component {
  componentDidMount() {
    this.props.getMovieInfo(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.clearMovieInfo();
  }
  render() {
    const { title, images, genres, summary, rating } = this.props;
    return (
      <Fragment>
        <NavBar
          mode='light'
          icon={<Icon type="left" />}
          onLeftClick={() => { this.props.history.goBack() }}
        >
          {title}
        </NavBar>
        <WingBlank size="lg" style={{ backgroundImage: "url(" + images.get('large') + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
          <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
            <Card.Header
              thumb={images.get('small')}
              thumbStyle={{ width: 150 }}
              extra={
                <div>
                  <p style={{ color: "#333", fontWeight: "bold", fontSize: 20 }}>{title}</p>
                  <p style={{color: "#FA8B60", fontWeight: "bold", fontSize: 18}}>评分:{rating}</p>
                  {
                    genres.map((item) => (
                      <Tag style={{marginLeft: 5}} small key={item}>{item}</Tag>
                    ))
                  }
                </div>
              }
            />
          </Card>
        </WingBlank>
        <WingBlank size="lg">
          <Card full>
            <Card.Header
              title="简介"
            />
            <Card.Body>
              <div>{summary}</div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg"/>
        </WingBlank>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  images: state.getIn(['detail', 'images']),
  genres: state.getIn(['detail', 'genres']),
  summary: state.getIn(['detail', 'summary']),
  rating: state.getIn(['detail', 'rating'])
});

const mapDispatch = (dispatch) => ({
  getMovieInfo(id) {
    dispatch(actionCreators.getMovieInfo(id));
  },
  clearMovieInfo() {
    dispatch(actionCreators.clearMovieInfo())
  }
})

export default connect(mapState, mapDispatch)(Detail);