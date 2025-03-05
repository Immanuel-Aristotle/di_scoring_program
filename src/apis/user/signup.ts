import userTokens from '@/apis/user/tokens'

// Define the function to handle login
const validateEmpty = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('The value should not be empty.'))
  } else {
    callback()
  }
}

// Email regex from: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (rule: any, email: string, callback: any) => {
  const ifValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  if (!ifValid) {
    callback(new Error('The email is not valid'))
  } else {
    callback()
  }
}

// const emailDuplicate = (rule: any, email: string, callback: any) => {
  
// }

const validateToken = (rule: any, token: string, callback: any) => {
  let ifValid = false
  for (let prop in userTokens) {
    if (token == userTokens[prop]) {
      ifValid = true;
    };
  };
  if (!ifValid) {
    callback(new Error('The token you input is invalid'))
  } else {
    callback();
  }
}

export default {
  validateEmpty,
  validateEmail,
  validateToken
}