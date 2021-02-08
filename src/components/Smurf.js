import React from 'react';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(<div data-testid="smurf" className="card">
            <p className="card-label">
                Name
            </p>
            <h3>{smurf.name}</h3>
            <p className="card-label">
                Nickname
            </p>
            <h3>{smurf.nickname}</h3>
            <p className="card-label">
                Position
            </p>
            <h3>{smurf.position}</h3>
            <p className="card-label">
                Description
            </p>
            <h3>{smurf.description}</h3>
        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.