var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('bio', {
        title: "Bio",
        Name: 'Jarvis Jackson.',
        birthCity: 'Fayette, Ms.',
        address: '511 East Arkansas Lane.',
        favoriteColor: 'Blue.',
        DOB: "july 26 1988",
        school: 'Jefferson County High School.',
        hobbies: 'hunting, fishing, and video games.',
        date: new Date,

    });
  });

module.exports = router;