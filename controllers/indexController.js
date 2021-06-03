const User = require('../models/user.js');

exports.getIndex = (req, res, next) => {
    User.fetchAllUsers()
        .then((users) => {
            res.render('index.ejs', {
                users: users,
            });
        })
        .catch((err) => {
            console.log({ err: err });
        });
};
