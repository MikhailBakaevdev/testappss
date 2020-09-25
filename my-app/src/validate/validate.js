const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username > 10){
        errors.username = 'Until 10 characters'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }
  
  export default validate
  