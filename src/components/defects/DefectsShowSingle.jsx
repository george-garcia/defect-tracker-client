import React from 'react';
import { connect } from 'react-redux';
import { fetchDefect } from "../../actions";
import Navigation from "../Navigation";

class DefectsShowSingle extends React.Component{
    componentDidMount() {
        if(!this.props.defect){
            this.props.fetchDefect(this.props.match.params.id);
        }
    }

    renderContent() {

        if(!this.props.defect){
            return (
                <div>
                    Loading...
                </div>
            );
        }

        console.log(this.props.defect);


        return (
            <div className="section-show-single-defect">
                <div className="show-single-defect__main">
                    <div className="show-single-defect__heading u-margin-bottom-small">
                        <span className="show-single-defect__bug-id">{this.props.defect.bugId}</span>
                        <span className="show-single-defect__created">
                            Created by {this.props.defect.createdBy} on {this.props.defect.created}
                        </span>
                    </div>
                    <div className="show-single-defect__title u-margin-bottom-medium">
                        {this.props.defect.title}
                    </div>
                    <div className="show-single-defect__description">
                        {this.props.defect.description}
                    </div>
                </div>

                <div className="show-single-defect__details-box">
                    <ul className="show-single-defect__list">
                        <li className="show-single-defect__list--item">Project
                            <span className="show-single-defect__list--item-right">
                                {this.props.defect.project} </span> </li>
                        <li className="show-single-defect__list--item">Type
                            <span className="show-single-defect__list--item-right">
                                {this.props.defect.type} </span> </li>
                        <li className="show-single-defect__list--item">Priority
                            <span className="show-single-defect__list--item-right">
                                {this.props.defect.priority} </span> </li>
                        <li className="show-single-defect__list--item">State
                            <span className="show-single-defect__list--item-right">
                                {this.props.defect.state} </span> </li>
                        <li className="show-single-defect__list--item">Assigned
                            <span className="show-single-defect__list--item-right">
                                {this.props.defect.assigned} </span> </li>
                        <li className="show-single-defect__list--item">Version
                            <span className="show-single-defect__list--item-right">
                                {this.props.defect.version} </span> </li>
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Navigation content={this.renderContent()}/>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {

    return { defect: state.defects[ownProps.match.params.id] }

};

export default connect(mapStateToProps, { fetchDefect })(DefectsShowSingle);

// "id": "1",
//     "project": "Defect Tracker",
//     "bugId": "DEF-1",
//     "created": "12/8/2019 ",
//     "createdBy": "George Garcia",
//     "type": "Feature",
//     "priority": "Major",
//     "state": "Completed",
//     "assigned": "George Garcia",
//     "title": "Start working on the project!",
//     "description": "This is the first ticket to get it all started. I better get to work!",
//     "version": "1.0.0"