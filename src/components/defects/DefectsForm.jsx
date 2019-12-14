import React from 'react';
import { Field, reduxForm } from "redux-form";
import Navigation from "../Navigation";

class DefectsForm extends React.Component {

    // state = { readOnly : this.props.readOnly };

    readOnly = this.props.readOnly;

    project = <option value="Defect Tracker">Defect Tracker</option>;
    version = <option value="1.0.0">1.0.0</option>;
    type = [
        <option key="Feature" value="Feature">Feature</option>,
        <option key="Bug" value="Bug">Bug (Issue)</option>
    ];

    priority = [
        <option key="Minor" value="Minor">Minor</option>,
        <option key="Major" value="Major">Major</option>,
        <option key="Critical" value="Critical">Critical</option>
    ];



    renderSelect = (formProps) => {
        return (
            <div>
                <label htmlFor={formProps.style}>{formProps.title}</label>

                <select id={formProps.style} onChange={formProps.input.onChange} value={formProps.input.value}>
                    <option>Please Select One</option>
                    {formProps.selectOption}
                </select>
            </div>
        );
    };

    renderInput = (formProps) => {

        return (
            <div>
                <label htmlFor={formProps.style}>{formProps.title}</label>

                <input id={formProps.style} onChange={formProps.input.onChange} value={formProps.input.value} {...formProps.readOnly} />
            </div>
        );
    };

    renderBugId = () => {
        if(!this.readOnly){
            return (
                <div>
                    <label htmlFor="input__bug">Bug ID</label>

                    <input id="input__bug" value={this.props.bugId} readOnly={true} />
                </div>
            );
        }

        return (
            <Field name="bugId" title="Bug ID" style="input__bug" component={this.renderInput}/>
        );

    };

    renderTitle = (formProps) => {
        return (
            <div>
                <label htmlFor={formProps.style}>{formProps.title}</label>
                <br/>
                <input id={formProps.style} onChange={formProps.input.onChange} value={formProps.input.value} />
            </div>
        );
    };

    renderDescription = (formProps) => {
        return (
            <div>
                <label htmlFor={formProps.style}>{formProps.title}</label>
                <br/>
                <textarea  rows={8} id={formProps.style} onChange={formProps.input.onChange} value={formProps.input.value} />
            </div>
        );
    };



    onSubmit = (formValues) => {

        this.props.onSubmit({...formValues});
        // console.log(formValues);
    };

    renderContent = () => {
        console.log(this.props);
        return (
            <div className="section-defects-create">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="defects-create__container">
                        <div className="col-left">
                            <ul className="defects-create__list--left">
                                <li className="defects-create__item">
                                    <Field name="project" selectOption={this.project} title="Project" style="input__bug" component={
                                        this.renderSelect}/></li>
                                <li className="defects-create__item">
                                    <Field name="version" title="Version" selectOption={this.version} style="input__bug" component={
                                        this.renderSelect}/></li>
                                <li className="defects-create__item">
                                    <Field name="type" title="Type" selectOption={this.type} style="input__bug" component={
                                        this.renderSelect}/></li>
                                <li className="defects-create__item">
                                    <Field name="priority" title="Priority"
                                           selectOption={this.priority} style="input__bug" component={this.renderSelect}/></li>
                            </ul>
                        </div>
                        <div className="col-right">
                            <ul className="defects-create__list--right">
                                <li className="defects-create__item">
                                    {this.renderBugId()}</li>
                                <li className="defects-create__item">
                                    <Field name="created" title="Submitted" style="input__bug" readOnly={{readOnly: 1}} component={
                                        this.renderInput}/></li>
                                <li className="defects-create__item">
                                    <Field name="state" title="State" style="input__bug" component={
                                        this.renderInput}/></li>
                                <li className="defects-create__item">
                                    <Field name="assigned" title="Assigned" style="input__bug" component={
                                        this.renderInput}/></li>
                            </ul>
                        </div>
                    </div>

                    <div className="defects-create__bottom">
                        <div className="defects-create__title u-margin-bottom-medium">
                            <Field name="title" title="Title" style="input__title" component={this.renderTitle} />
                        </div>

                        <div className="defects-create__description u-margin-bottom-small">
                            <Field name="description" title="Description" style="input__description" component={this.renderDescription}/>
                        </div>
                        <div className="defects-create__button">
                            <button className="input__button" type="submit">Submit</button>
                        </div>
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