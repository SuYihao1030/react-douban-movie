import { combineReducers } from 'redux-immutable';
import { reducer as searchReducer } from '../components/search/store';
import { reducer as resultReducer } from '../pages/result/store';
import { reducer as nowReducer } from '../pages/now/store';
import { reducer as detailReducer } from '../pages/detail/store';

const reducer = combineReducers({
  search: searchReducer,
  result: resultReducer,
  now: nowReducer,
  detail: detailReducer
});

export default reducer;