const initialState = {
	modal: false
}

export const uiReducer = (state=initialState, action) => {
	switch (action.type) {
		case "OPEN_MODAL":
			return {
				...state,
				modal: true
			}
		case "CLOSE_MODAL":
			return {
				...state,
				modal: false
			}
		default:
			return state
	}
}