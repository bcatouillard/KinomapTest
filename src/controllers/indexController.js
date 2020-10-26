const dotenv = require('dotenv').config().parsed
const fetch = require('node-fetch');

module.exports = {
    fillCarousel: function(req){
        fetch(dotenv.API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
}