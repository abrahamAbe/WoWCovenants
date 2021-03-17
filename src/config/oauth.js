import axios from 'axios';
import { oauth2Resource, oauth2UserName, oauth2Password } from './endpoints';

var qs = require('qs');

type dataObject = {
    grant_type: string
};

type authObject = {
    username: string,
    password: string
};

type optionsObject = {
    method: string,
    headers: object,
    data: string,
    auth: object,
    url: string
};

//Oauth2 flow. We have to get an authorization token in order to use Blizzard's APIs
let url: string = oauth2Resource,

    data: dataObject = {
        grant_type: 'client_credentials',
    },

    auth: authObject = {
        username: oauth2UserName,
        password: oauth2Password
    },

    options: optionsObject = {
        method: 'post',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data),
    auth: auth,
    url
};

let getOauthToken = axios(options);

export { getOauthToken };