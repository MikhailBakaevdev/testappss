const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
  return sleep(200)
    .then(() => {
      if (values.username > 10) {
        throw { username: 'That username is taken' }
      }
    })
}

export default asyncValidate
