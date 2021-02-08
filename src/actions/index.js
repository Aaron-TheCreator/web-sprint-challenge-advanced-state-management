import axios from 'axios';

export const IS_LOADING = "IS_LOADING";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const PUSH_DATA = "PUSH_DATA";
export const ERROR = "ERROR";

const apiURL = `http://localhost:3333/smurfs`;

export const loadSmurfDisplay = () => (dispatch) => {
    // transition to IS_LOADING action.type
    dispatch({ type: IS_LOADING });

    // const getURL = `http://localhost:3333/smurfs`;

    axios
        .get(apiURL)
        .then( (res) => {
            console.log(`ab: actions.index: loadSmurfDisplay: axios.then: res:`, res)
            dispatch({ type: LOAD_SUCCESS, payload: res.data})
        })
        .catch( (err) => {
            console.log(`ab: actions.index: loadSmurfDisplay: axios.catch: err:`, err)
        })
}

export const pushData = (data) => (dispatch) => {
    dispatch({ type: IS_LOADING });

    axios
        .post(apiURL, data)
        .then( (res) => {
            console.log(`ab: actions.index: pushData: axios.then: res:`, res)
            dispatch({ type: LOAD_SUCCESS, payload: res.data })
        })
        .catch( (err) => {
            console.error(`ab: actions.index: pushData: axios.catch: err:`, err)
        })
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.

// Add in cases to your reducer to handle:
//      - The start of an api call "IS_LOADING""is_loading:true"
//      - The end of an api call "LOAD_SUCCESS" "is_loading:false, smurflist: action.payload", error: ""
//      - The adding a smurf to the smurf list when added into payload "PUSH_DATA" "is_loading: true, error: "" "
//      - Setting Error Text "ERROR" "is_loading:false, error: "action.payload" "
//      - Any other state changes you see as necessary