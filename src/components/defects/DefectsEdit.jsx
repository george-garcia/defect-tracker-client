import React from 'react';
import { connect } from 'react-redux';
import { editDefect, fetchDefect } from '../../actions';
import DefectsForm from "./DefectsForm";
import _ from 'lodash';

class DefectsEdit extends React.Component{

    componentDidMount() {
        this.props.fetchDefect(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    };


    render() {

        if(!this.props.defect) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        return (
            <div>
                <DefectsForm initialValues={_.pick(this.props.defect,
                    'project', 'version', 'type', 'created', 'priority', 'state', 'assigned')}
                             onSubmit={this.onSubmit}
                             //readOnly should be set to false as items should be editable
                            //they should not be readOnly if they are editable
                             readOnly={false} bugId={this.props.defect.bugId}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { defect: state.defects[ownProps.match.params.id]}
};

export default connect(mapStateToProps, { editDefect, fetchDefect })(DefectsEdit);