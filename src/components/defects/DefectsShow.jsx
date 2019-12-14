import React from 'react';
import { connect } from 'react-redux';
import { fetchAllDefects } from "../../actions";
import axios from 'axios';
import Navigation from "../Navigation";
import {Link} from "react-router-dom";

class DefectsShow extends React.Component {

    componentDidMount() {
        this.props.fetchAllDefects();
    }

    renderDefects(){
        return this.props.defects.map(defect => {
            return (
                <div className="section-defects-show" key={defect.id}>
                    <div className="defect">
                        <div className="defect__heading">
                            <Link to={`/defects/show/${defect.id}`} className="defect__id">{defect.bugId}</Link>
                            <Link to={`/defects/show/${defect.id}`} className="defect__title">{defect.title}</Link>
                        </div>
                        <div className="defect__details">
                            <span className="defect__details--left">
                                <span className="defect__priority">{defect.priority}</span>
                                <span className="defect__type">{defect.type}</span>
                                <span className="defect__version">{defect.version}</span>
                                <span className="defect__state">{defect.state}</span>
                                <span className="defect__assigned">{defect.assigned}</span>
                            </span>
                            <span className="defect__details--right">
                                <span className="defect__createdBy">{defect.createdBy}</span>
                                <span className="defect__created">{defect.created}</span>
                            </span>
                        </div>
                    </div>

                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <Navigation content={this.renderDefects()}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return { defects: Object.values(state.defects) }

};

export default connect(mapStateToProps, { fetchAllDefects } )(DefectsShow);