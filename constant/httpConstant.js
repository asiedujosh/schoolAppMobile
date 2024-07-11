export const TIMEOUT = {timeout: 10000};
export const URL = process.env.API_URL;
// export const URL = 'https://studentappapi.awesomehandsacademy.com';
// export const URL = 'https://192f-102-214-88-11.ngrok-free.app';
export const POLICYURL = 'http://policy.nunyaexam.com';

//System Responses

//Status Code
export const SUCCESS_STATUS = 200;
export const BAD_REQUEST_STATUS = 400;

//defining custom errors
export const UNEXPECTEDERR = 301;
export const NETWORKERR = 302;
export const RETRYERR = 303;
export const SIGNINERR = 401;
export const NOTFOUND = 404;
export const TIMEEXCEED = 405;
export const UNHANDLEERR = 406;
