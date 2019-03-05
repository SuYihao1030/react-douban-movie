## React-douban-movie

基于React全家桶的练习demo

### 部署步骤

```
git clone https://github.com/SuYihao1030/react-douban-movie.git
cd react-douban-movie
yarn install
yarn start
```

### 前言

由于豆瓣api的缘故，该项目并没有完成，后改为 `https://douban.uieee.com` ，但搜索 api 获取到的结果为空。故搜索功能无法使用。

在此简单记录一下自己对 React 全家桶的学习。

### React

> React 用于构建用户界面的 JavaScript 库

#### Virtual Dom

当 `React` 中组件的 `props` 或 `state` 数据发生改变时，组件的 `render` 函数就会重新执行，组件就会重新渲染。而在 `React` 中重新渲染的性能是十分高的，就是因为引入了一个虚拟 DOM。

传统 WEB 应用中，每次数据更新，需要更新页面时，都需要去对 DOM 进行更新，但是对 DOM 操作是十分昂贵的，为了减少对于真实 DOM 的操作，所以便出现了 虚拟 DOM。

React WEB 应用中，每次数据更新，就会重新生成虚拟 DOM，和上一次生产的虚拟 DOM 做比对，对发生了变化的部分进行更新。这样减少了很多不必要的更新，大大提升了性能。

步骤可以概括成如下：

 	1. 出现 state 数据
 	2. 出现 JSX 模板
 	3. 生成虚拟 DOM
 	4. 数据 + 模版 结合，生成真实的 DOM，在页面上显示
 	5. state 数据发生改变
 	6. 生成新的虚拟 DOM
 	7. 比较原始虚拟DOM 和 新的虚拟 DOM 的区别
 	8. 直接操作真实 DOM，更改第7步找到的区别部分

#### 生命周期函数

- getDerivedStateFromProps
  - 触发时间：组件每次被 rerender 的时候，包括在组件构建之后（render 之前最后执行），每次获取新的 props 或 state 之后
  - 每次接受新的 props 之后都会返回一个对象作为新的 state，返回 null 则说明不需要更新 state
  - 配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法
- render
- componentDidMount
  - 请求异步加载的数据
  - 添加事件监听
- shouldComponentUpdata
  - 防止父组件渲染导致子组件做不需要的渲染
  - PureComponent替代Component      需要(immutable.js)
- getSnapshotBeforeUpdate
  - 触发时间:  update 发生的时候，在 render 之后，在组件 dom 渲染之前
  - 返回一个值，作为componentDidUpdate的第三个参数
  - 配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法
- componentDidUpdata
- componentWillUnmount

> 在 v16.3 之后，取消了以下三个生命周期：
>
> * componentWillMount
> * componentWillReceiveProps
> * componentWillUpdate
>
> 当然，在整个16版本中，还是可以使用这三个周期的，但会标记为 unsafe

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
    4. Updating state based on props
    7. Fetching external data when props change
  }
  constructor() {
	1. Initializing state
  }
  componentWillMount() {
  	// 1. Initializing state
  	// 2. Fetching external data
  	// 3. Adding event listeners (or subscriptions)
  }
  componentDidMount() {
	2. Fetching external data
	3. Adding event listeners (or subscriptions)
  }
  componentWillReceiveProps() {
  	// 4. Updating state based on props
  	// 6. Side effects on props change
  	// 7. Fetching external data when props change
  }
  shouldComponentUpdate() {
  }
  componentWillUpdate(nextProps, nextState) {
  	// 5. Invoking external callbacks
  	// 8. Reading DOM properties before an update
  	
  }
  render() {
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
	8. Reading DOM properties before an update
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
	5. Invoking external callbacks
	6. Side effects on props change
  }
  
  componentWillUnmount() {
  }
```



### Redux



### React-router



