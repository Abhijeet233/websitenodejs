var express = require('express');
var router = express.Router();
var dataFile = require('../data/data.json');


router.get('/friends', function(req,res){
  var info='';
  dataFile.friends.forEach(function(item){
    info +=`
    <li>
    <h1>${item.name}</h2>
    <h2>${item.title}</h2>
    <img src="/images/friends/${item.shortname}.jpg"
    alt="friend" style="height:100px;">
    </li>
    `;
  });

  res.send(`
    <link rel="stylesheet" type="text/css" 
    href="/css/style.css">
    
    ${info}
    <script src="/reload/reload.js"></script

    `);
});

router.get('/friends/:friendid', function(req,res){
  var friend = dataFile.friends[req.params.friendid];


  res.send(`
    <link rel="stylesheet" type="text/css" 
    href="/css/style.css">
    <h1>${friend.title}</h1>
    <img src="/images/friends/${friend.shortname}.jpg"
    alt="friend" style="height:450px;">
    <h2>${friend.name}</h2>
    <p>${friend.description}</p>
    <script src="/reload/reload.js"></script

    

    `);
});


module.exports =router;