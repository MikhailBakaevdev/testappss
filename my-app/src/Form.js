import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import eng from './translate/eng.json'


import './App.css'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength10 = maxLength(10)
const validate  = values => {
    const errors = {}
    if (!values.userName) {
      errors.userName = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }
  const renderInput = ({ input, meta, label ,}) => 
    <div>
        <label>
            {label}
        </label>
        <input className="form__text-input"  {...input}/>
        {meta.error &&
        <span>
            {meta.error}
        </span>}
    </div>






class Form extends Component {
    constructor() {
        super ();
        this.state = {
            label: eng.name,
            send: eng.send,
            password: eng.password
         };
      }
    render(){
        const {handleSubmit} = this.props;

        const submit = (values) => console.log(values);

        return (
            <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="select-language">
                <button type="button">EN</button>
                <button type="button">RU</button>
            </div>
                <Field  component={renderInput} label={this.state.label} name="userName" type="text" validate={maxLength10} />
                <Field  component={renderInput} label={this.state.password} name="password" type="password"/>
                <div>
                    <button className="form__button" type="submit">{this.state.send}</button>
                </div>
            </form>
        );
    }
}
Form = reduxForm({
    form: 'post',
    validate,
    destroyOnUnmount: false

})(Form);

export default Form;