const initialState = {
	items: [],
	item: null
}

export const dataReducer = (state=initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				items: [...state.items, action.payload],
				item: action.payload
			}
		case "FIND_ITEM":
			const finder = state.items.filter(item=>item.name.includes(action.payload) || item.description.includes(action.payload))
			return {
				items: [...finder]
			}
		case "PICK_ITEM":
			const indexPickItem = state.items.findIndex(item=>item.id === action.payload)
			const pickItem = state.items.filter(item=>item.id === action.payload)
			state.items.splice(indexPickItem,1)
			return {
				...state,
				item: pickItem,
				items: [...pickItem,...state.items]
			}
		case "REMOVE_ITEM":
			const deleteItem = state.items.findIndex(item=>item.id === action.payload)
			state.items.splice(deleteItem,1)
			return {
				...state
			}
		default:
			return state;
	}
}