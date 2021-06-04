const axios = require('axios').default;
const config = require('../../config/config.js');

var options = {
    method: 'GET',
    url: `https://instagram85.p.rapidapi.com/account/thejaww/info`,
    headers: {
        'x-rapidapi-key': config.instagram_api_key,
        'x-rapidapi-host': 'instagram85.p.rapidapi.com',
    },
};

axios
    .request(options)
    .then((res) => {
        console.log(res.data.data.profile_picture.hd);
    })
    .catch((err) => {
        console.error(err);
    });
