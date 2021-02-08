import { IS_LOADING, LOAD_SUCCESS, PUSH_DATA, ERROR } from "../actions";

export const initialState = {

    is_loading: false,
    smurflist: [],
    error: ""
};

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case IS_LOADING: {
            return {
                ...state,
                is_loading: true
            };
        }
        case LOAD_SUCCESS : {
            return {
                ...state,
                is_loading: false,
                smurflist: action.payload,
                error: ""
            };
        }
        case PUSH_DATA : {
            return {
                ...state,
                error: ""
            }
        }
        case ERROR : {
            return {
                ...state,
                is_loading: false,
                error: action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      X- an array of smurfs
//      X- a boolean indicating if the app is loading
//      X- error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call "IS_LOADING""is_loading:true"
//      - The end of an api call "LOAD_SUCCESS" "is_loading:false, smurflist: action.payload", error: ""
//      - The adding a smurf to the smurf list when added into payload "PUSH_DATA" "is_loading: true, error: "" "
//      - Setting Error Text "ERROR" "is_loading:false, error: "action.payload" "
//      - Any other state changes you see as necessary