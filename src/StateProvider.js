import React, { createContext, useContext, useReducer } from 'react';

// preparing for the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// hook that lets us pull data from the data layer
export const useStateValue = () => useContext(StateContext);
