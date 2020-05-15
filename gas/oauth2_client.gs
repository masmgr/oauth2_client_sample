//
// This is oauth2 client sample by 
// Another way is to use oauth library.
// 

// for production
const APP_ID = ''; // Application ID
const APP_PASS = ''; // Application Pass
const HOST_NAME = ''; // ServerName
const APP_NAME = ''; // AppName
const SCOPE = 'openid';
const USERNAME = '';
const PASSWORD = '';

// API
const handleSubmitApi = () => {
    const uri = ``;

    const requestBody = `grant_type=password&username=${encodeURIComponent(USERNAME)}&password=${encodeURIComponent(PASSWORD)}&scope=${SCOPE}&client_id=${APP_ID}&client_secret=${encodeURIComponent(APP_PASS)}`;
    Logger.log(requestBody);

    const options = {
        'method': 'post',
        'contentType': 'application/x-www-form-urlencoded',
        'payload': requestBody,
        'muteHttpExceptions': true
    };

    const apiURI = `${uri}`;

    Logger.log(apiURI);

    const response = UrlFetchApp.fetch(apiURI, options);

    Logger.log(response);
};
