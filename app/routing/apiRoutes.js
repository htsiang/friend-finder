var express = require("express");
var router = express.Router();
var path = require("path");

var friends = [{name: "May"}];

router.get("/api/friends", function(req, res) {
    res.send(friends);
});

router.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});

module.exports = router;