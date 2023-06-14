import { ADD_FAV, FILTER, REMOVE_FAV, ORDER, RESET } from "./actions";

let initialState = {myFavorites:[],allCharacters:[]}

function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            const added=[...state.myFavorites, action.payload]
            return {
                ...state,
                myFavorites: [...added],
                allCharacters: [...added]
            }

        case REMOVE_FAV:
            const remove = state.myFavorites.filter(character => character.id !== Number(action.payload))
            return {
                //...state,
                myFavorites: [...remove],
            }

        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharacters.filter(
                    (character)=>character.gender===action.payload
                ),
            }

        case ORDER:
            let ordenados=[];
            if(action.payload ==='Ascendente'){
                ordenados=state.myFavorites.sort((a,b)=>a.id>b.id ? 1 : -1)
            } else if(action.payload ==='Descendente'){
                ordenados=state.myFavorites.sort((a,b)=>a.id<b.id ? -1 : 1)
            }
            return{
                ...state,
                myFavorites: [...ordenados],
            }

        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters,
            }

        default:
            return {...state};
    };
}

export default rootReducer;