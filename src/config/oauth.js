import axios from 'axios'
import { oauth2Resource, oauth2UserName, oauth2Password } from './endpoints'

var qs = require('qs')

//Oauth2 flow. We have to get an authorization token in order to use Blizzard's APIs
let url = oauth2Resource,

    data = {
        grant_type: 'client_credentials'
    },

    auth = {
        username: oauth2UserName,
        password: oauth2Password
    },

    options = {
        method: 'post',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data),
    auth: auth,
    url
}

let getOauthToken = axios(options)

export { getOauthToken }