import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import eng from './translate/eng.json'
import ru from './translate/ru.json'


import './App.css'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength10 = maxLength(10)
const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const validate  = values => {
    const errors = {}
    return errors
  }
  const renderInput = ({ input, meta : { touched, error, warning }, label }) => 
    (<div>
        <label>
            {label}
        </label>
        <input className="form__text-input"  {...input}/>
        {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
    )

class Form extends Component {
    constructor() {
        super ();
         this.state = {
            label: eng.firstName,
            send: eng.send,
            password: eng.lastName,
         };
    }
    russianLang = () => this.setState({
        label: ru.firstName,
        send: ru.send,
        password: ru.lastName,
    })
    englishLang = () => this.setState({
        label: eng.firstName,
        send: eng.send,
        password: eng.lastName,
    })
    render(){
        const {handleSubmit} = this.props;

        const submit = (values) => console.log(values);

        return (
            <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="select-language">
                <button type="button" onClick={this.russianLang}>RU</button>
                <button type="button" onClick={this.englishLang}>EN</button>
            </div>
                <Field  component={renderInput} label={this.state.label} name="userName" type="text" validate={[required,maxLength10]} />
                <Field  component={renderInput} label={this.state.password} name="password" type="password" validate={[required]}/>
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