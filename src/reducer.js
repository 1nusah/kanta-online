export const initialState = {
	basket: [],
	user: null,
	selectedItem: {
		id: 21668786,
		image:
			'images.asos-media.com/products/hearbreak-scoop-neck-tailored-mini-dress-in-black-and-red-plaid-co-ord/21668786-1-blackred',
		name:
			'Hearbreak scoop neck tailored mini dress in black and red plaid co-ord',
		price: '$29.00',
		quantity: 1,
	},
	searchResults: [],
};

export function reducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			// logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case 'REMOVE_FROM_BASKET':
			//logic for removing item from basket
			let newBasket = [...state.basket];
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			if (index >= 0) {
				//item exist in basket now remove it
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product id: ${action.id} as it is not in the basket`
				);
			}
			return { ...state, basket: newBasket };

		case 'SELECTED_ITEM':
			return {
				...state,
				selectedItem: action.items,
			};
		case 'CONFIRM_USER_DETAILS':
			return {
				...state,
				userDetails: action.userDeets,
			};
		case 'SEARCH_RESULTS':
			return {
				...state,
				searchResults: action.results,
			};
		default:
			return state;
	}
}
