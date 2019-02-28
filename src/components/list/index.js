import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, WhiteSpace, Tag } from 'antd-mobile';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <Link to={'/detail/' + list.get('id')}>
          <Card full>
            <Card.Header
              thumb={list.get('images').get('small')}
              thumbStyle={{width: 100}}
              extra={
                <div>
                  <p style={{color: "#000", fontWeight: "bold", fontSize: 20}}>{list.get('title')}</p>
                  <p style={{color: "#FA8B60", fontWeight: "bold", fontSize: 14}}>评分:{list.get('rating').get('average')}</p>
                  {
                    list.get("genres").map((item) => (
                      <Tag style={{marginLeft: 5}} small key={item}>{item}</Tag>
                    ))
                  }
                </div>
              }
            />
          </Card>
        </Link>
        <WhiteSpace size="xs" />
      </Fragment>
    );
  }
}

export default List;