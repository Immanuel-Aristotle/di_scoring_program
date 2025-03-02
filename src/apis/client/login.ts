// apis/client/login.ts


// Define the function to handle login
export const validateEmpty = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('The value should not be empty.'))
  } else {
    callback()
  }
}

export const validateEmail = (rule: any, email: string, callback: any) => {
  const ifValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!ifValid) {
    callback(new Error('The email is not valid'))
  } else {
    callback()
  }
};
