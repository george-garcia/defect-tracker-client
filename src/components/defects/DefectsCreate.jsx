import React from 'react';
import { Field, reduxForm } from "redux-form";
import Navigation from "../Navigation";
import { createDefect } from "../../actions";
import { connect } from "react-redux";




class DefectsCreate extends React.Component {

    project = <option value="Defect Tracker">Defect Tracker</option>;
    version = <option value="1.0.0">1.0.0</option>;
    type = [
        <option key="Feature" value="Feature">Feature</option>,
        <option key="Bug" value="Bug">Bug</option>
    ];

    renderInput = (formProps) => {

        console.log(formProps);

        return (
            <div>
                <label htmlFor="input__bug">{formProps.title}</label>

                <input id="input__bug" onChange={formProps.input.onChange} value={formProps.input.value} {...formProps.readOnly} />
            </div>
        );
    };

    renderSelect = (formProps) => {
        return (
            <div>
                <label htmlFor="input__select">{formProps.title}</label>

                <select id="input__select" onChange={formProps.input.onChange} value={formProps.input.value}>
                    <option>Please Select One</option>
                    {formProps.selectOption}
                </select>
            </div>
        );
    };





    onSubmit = (formValues) => {

        this.props.createDefect({...formValues});
    };

    renderContent = () => {
        return (
            <div className="section-defects-create">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="defects-create__container">
                        <div className="col-left">
                            <ul className="defects-create__list--left">
                                <li className="defects-create__item">
                                    <Field name="project" selectOption={this.project} title="Project" component={
                                        this.renderSelect}/></li>
                                <li className="defects-create__item">
                                    <Field name="version" title="Version" selectOption={this.version} component={
                                        this.renderSelect}/></li>
                                <li className="defects-create__item">
                                    <Field name="type" title="Type" selectOption={this.type} component={
                                        this.renderSelect}/></li>
                                <li className="defects-create__item">
                                    <Field name="submitted" title="Submitted" component={
                                        this.renderInput}/></li>
                            </ul>
                        </div>
                        <div className="col-right">
                            <ul className="defects-create__list--right">
                                <li className="defects-create__item">
                                    <Field name="bugId" title="Bug ID" component={
                                        this.renderInput}/></li>
                                <li className="defects-create__item">
                                    <Field name="priority" title="Priority" readOnly={{readOnly: 0}} component={this.renderInput}/></li>
                                <li className="defects-create__item">
                                    <Field name="state" title="State" component={
                                        this.renderInput}/></li>
                                <li className="defects-create__item">
                                    <Field name="assigned" title="Assigned" component={
                                        this.renderInput}/></li>
                                <button type="submit">Submit</button>
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

const formWrapped = reduxForm({form: 'DefectsCreate'})(DefectsCreate);

export default connect(null, { createDefect })(formWrapped);

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