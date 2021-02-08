import React from 'react';
import { pushData } from "../actions";
import { connect } from 'react-redux';


class AddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newSmurf: {
                name: "",
                nickname: "",
                position: "",
                description: ""
            }
        };
    }

    handleChange = (e) => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value 
            }
        });
        console.log(`ab: AddForm.js: form: ${e.target.name}:`, e.target.value, this.state.newSmurf)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`ab: AddForm.js: handleSubmit: newSmurf:`, this.state.newSmurf)
        this.props.pushData(this.state.newSmurf);
        this.setState({
            newSmurf: {
                name: "",
                nickname: "",
                position: "",
                description: ""
            }
        });
    }

    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text"  value={this.state.newSmurf.name} onChange={this.handleChange} name="name" id="name" required />

                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input type="text" value={this.state.newSmurf.nickname} onChange={this.handleChange} name="nickname" id="nickname" required />

                    <label htmlFor="position">Position:</label><br/>
                    <input type="text" value={this.state.newSmurf.position} onChange={this.handleChange} name="position" id="position" required />

                    <label htmlFor="description">Description:</label><br/>
                    <input type="text" value={this.state.newSmurf.description} onChange={this.handleChange} name="description" id="description" required />
                </div>

                {this.props.error && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error:{this.props.error} </div>}
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    };
};

export default connect( mapStateToProps, { pushData })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.X
//2. Connect all needed redux state props and action functions to the component before exporting.X
//3. Add state holding name, position, nickname and description to component.X
//4. Build form DOM to include inputs for name X, position X and description X of the component.
//      - an array of smurfsX
//      - a boolean indicating if the app is loadingX
//      - error textX
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.X
//5. Build eventhandler and listener needed to change the state.X
//6. Build eventhandlerX and listenerX needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.