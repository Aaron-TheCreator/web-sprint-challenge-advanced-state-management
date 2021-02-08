import React from 'react';
import { connect } from 'react-redux';
import Smurf from "./Smurf";
import { loadSmurfDisplay } from "../actions";
import { initialState } from "../reducers";

export class SmurfDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            smurfs: props.smurflist
        };
    }

    componentDidMount() {
        console.log(`ab: SmurfDisplay.js: CDM: `)
        this.setState({ smurfs: this.props.loadSmurfDisplay() });
    }
    render() {
        return(<div className="smurf-display">{
            this.props.is_loading ? (
                <div className="loading">
                    <h2>LOADING</h2>
                </div>
            ) : this.props.error ? (
                <div className="error">
                    <h4>{this.props.error}</h4>
                </div>
            ) : this.props.smurflist.map( (object) => {
                return <Smurf smurf={object} />
            })
        }</div>)
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.is_loading,
        smurflist: state.smurflist,
        error: state.error
    };
};

export default connect(mapStateToProps, { loadSmurfDisplay })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.