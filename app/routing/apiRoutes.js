var friendsData = require('../data/friends.js');

module.exports = function(app){

    app.get('/api/friendslist', function(req, res){
        res.json(friendsData);
    });

    app.post('/api/friendslist', function(req, res){
        //Make sure there is data to compare against
        if(friendsData.length < 1)
            return res.json(false);
        
        //Find match
        var diff = [10];
        var diffArray = [];
        for(var i=0;i<friendsData.length;i++){
            for(var j=0;j<10;j++){
              diff[j] = Math.abs(req.body.scores[j] - friendsData[i].scores[j]);
              //console.log("Friend " + i + ": newFriend score=" + req.body.scores[j] + " friend score=" + friendsData[i].scores[j]);

            }
            
            diffArray.push(diff.reduce(function(a, b) { return a + b; }, 0));
        }
        //console.log(diffArray);

        var match = 0;
        for(var i=1;i<diffArray.length;i++){
            if(diffArray[i] < diffArray[match]){
                match = i;
                //console.log(diffArray[match] + " > " + diffArray[i-1]);
            }
        }

        //console.log("API Your match is " + match);
        //console.log(friendsData[match].name);
        //console.log(friendsData[match].photo);
        //console.log(friendsData);
        friendsData.push(req.body);
        res.json(friendsData[match]);
    });
    
}