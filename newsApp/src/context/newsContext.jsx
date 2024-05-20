import React, { createContext, useReducer }  from "react";
import { SET_NEWS_DATA } from "./constants";

const initialState = {
    news_data: [],
}

export const NewsContext = createContext(initialState);

// TODO: useReducer, useContext, custom hooks!

const newsReducer = (state, action) => {
    switch(action.type){
        case SET_NEWS_DATA:
            return {
                ...state,
                news_data: action.payload,
            };
        default: 
            return state;
    }
};

const NewsProvider = (props) =>{
    const [state, dispatch] = useReducer(newsReducer);

    return(
        <NewsContext.Provider value={{...state, dispatch}}>
            {props.children}
        </NewsContext.Provider>
    );
}

export default NewsProvider;