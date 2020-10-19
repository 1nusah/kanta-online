// setup data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from 'react';

//This is the data layer
export const stateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
	<stateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</stateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(stateContext);
