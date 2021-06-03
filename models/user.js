const axios = require('axios');
const url = 'https://www.openpowerlifting.org/api/rankings?start=1&end=100&lang=en&units=lbs';
const users = [];

class User {
    static async fetchAllUsers() {
        try {
            // fetch data from api
            const { data } = await axios(url);

            // iterate the the response
            for (let i of data.rows) {
                let instagram = i[4];

                // check to see if user has instagram
                // then only push if user has instagram handle
                if (instagram) {
                    // define user model
                    let profile = {
                        name: i[2],
                        instagram: i[4],
                        sex: i[13],
                        class: i[17],
                        weight: i[18],
                        squat: i[19],
                        bench: i[20],
                        deadlift: i[19],
                        total: i[22],
                    };

                    users.push(profile);
                }
            }

            return users;
        } catch (error) {
            console.log({ error: error });
        }
    }
}

module.exports = User;
