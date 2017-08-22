var friendsData = require('../data/friends.js');

module.exports = function(app){

    app.get('/api/friendslist', function(req, res){
        res.json(friendsData);
    });

    app.post('/api/friendslist', function(req, res){
        friendsData.push(req.body);
        res.json(true);
    });
    
}