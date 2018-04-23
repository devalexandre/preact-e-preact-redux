import { createStore } from 'redux';
import { COUTER } from './contador'

const  ACTIONS = {
    COUTER
}

const INITIAL = {
	contador: 0
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);