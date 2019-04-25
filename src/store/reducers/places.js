import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';


const initialState = {
	places: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_PLACE:
			return {
				...state,
				places: state.places.concat({
					key: Math.random().toString(),
					name: action.placeName,
					image: {
						uri:'https://r.hswstatic.com/w_907/gif/before-big-bang-3.jpg'
					},
					location: action.location
				})
			};
		case DELETE_PLACE: 
			return {
				...state,
				places: state.places.filter(place => {
					return place.key !== action.placeKey;
				}),
			};
		default:
			return state;
	}
};

export default reducer;