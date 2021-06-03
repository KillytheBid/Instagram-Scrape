const User = require('../models/user.js');

// [2] = name
// [4] = instagram handle

exports.getIndex = (req, res, next) => {
    User.fetchAllUsers()
        .then((users) => {
            console.log(users);
            res.render('index.ejs', {
                list: users,
            });
        })
        .catch((err) => {
            console.log({ err: err });
        });
};
