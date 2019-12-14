import React from 'react';
import { Field, reduxForm } from "redux-form";
import Navigation from "../Navigation";

class DefectsForm extends React.Component {

    // state = { readOnly : this.props.readOnly };

    readOnly = this.props.readOnly;

    project = <option value="Defect Tracker">Defect Tracker</option>;
    version = <option value="1.0.0">1.0.0</option>;
    type = [
        <option value="Feature">Feature</option>,
        <option value="Bug">Bug</option>
    ];



    renderSelect = (formProps, selectOption, valueTitle) => {
        return (
            <div>
                <label htmlFor="input__select">{valueTitle}</label>

                <select id="input__select" onChange={formProps.input.onChange} value={formProps.input.value}>
                    <option>Please Select One</option>
                    {selectOption}
                </select>
            </div>
        );
    };

    renderInput = (formProps, valueTitle, readOnly) => {


        return (
            <div>
                <label htmlFor="input__bug">{valueTitle}</label>

                <input id="input__bug" onChange={formProps.input.onChange} value={formProps.input.value} {...readOnly} />
            </div>
        );
    };

    renderBugId(){
        if(!this.props.readOnly){
            return (
                <div>
                    <label htmlFor="input__bug">Bug ID</label>

                    <input id="input__bug" value={this.props.bugId} readOnly="true" />
                </div>
            );
        }

        return (
            <Field name="bugId" component={
                (formProps) => this.renderInput(formProps, "Bug ID")}/>
        );

    }

    onSubmit = (formValues) => {

        // this.props.onSubmit({...formValues});
        console.log(formValues);
    };

    renderContent = () => {
        return (
            <div className="section-defects-create">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="defects-create__container">
                    <div className="col-left">
                        <ul className="defects-create__list--left">
                            <li className="defects-create__item">
                                <Field name="project" component={
                                    (formProps) => this.renderSelect(formProps, this.project, "Project")}/></li>
                            <li className="defects-create__item">
                                <Field name="version" component={
                                    (formProps) => this.renderSelect(formProps, this.version, "Version")}/></li>
                            <li className="defects-create__item">
                                <Field name="type" component={
                                    (formProps) => this.renderSelect(formProps, this.type, "Type")}/></li>
                            <li className="defects-create__item">
                                <Field name="created" component={
                                    (formProps) => this.renderInput(formProps, "Submitted")}/></li>
                        </ul>
                    </div>
                    <div className="col-right">
                        <ul className="defects-create__list--right">
                            <li className="defects-create__item">
                                {this.renderBugId()}
                                </li>
                            <li className="defects-create__item">
                                <Field name="priority" component={
                                    (formProps) => this.renderInput(formProps, "Priority")}/></li>
                            <li className="defects-create__item">
                                <Field name="state" component={
                                    (formProps) => this.renderInput(formProps, "State")}/></li>
                            <li className="defects-create__item">
                                <Field name="assigned" component={(formProps) => this.renderInput
                                (formProps, "Assigned", {readOnly: this.props.readOnly})}/></li>
                            {/*<button type="submit">Submit</button>*/}
                        </ul>
                    </div>
                </form>
            </div>
        );
    };

    render() {

        return (
            <div>
                <Navigation content={this.renderContent()}/>
            </div>
        );
    }
}

export default reduxForm({form: 'DefectsForm'})(DefectsForm);


// const formWrapped = reduxForm({form: 'DefectsCreate'})(DefectsCreate);

// export default connect(null, { createDefect })(formWrapped);

// export default reduxForm({form: 'DefectsCreate'})(DefectsCreate);

// export default DefectsCreate;
/*
"id": "5",
    "project": "Defect Tracker",
    "bugId": "DEF-5",
    "created": "12/11/2019 ",
    "createdBy": "George Garcia",
    "type": "Feature",
    "priority": "Major",
    "state": "Assigned",
    "assigned": "George Garcia",
    "title": "Create a defect page isn't working",
    "description": "I will now begin formatting tickets as actual issues that need to be fixed.
    New Defect page is blank. There is currently no way to create a defect using the page.
    Input forms need to be created. They need to be connected to the redux store using redux forms.
    The page needs some basic HTML and CSS to look presentable. Creating tickets using this page should
    should be functional before this ticket is completed.",
    "version": "1.0.0"
 */