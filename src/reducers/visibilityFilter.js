import { VisibilityFilters } from "../actions";
// Reducer Template
// const reducerName = (state = defaultValue, action) => {
		// switch (action.type) {
		// 	case 'ACTION_TYPE':
		// 		return action.data
		// 	default:
		// 		return state
		// }
// }

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter;