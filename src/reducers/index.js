import { combineReducers } from 'redux';
import TagReducer from './TagReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	tags: TagReducer,
	selectedTagId: SelectionReducer
});