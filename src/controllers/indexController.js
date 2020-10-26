const dotenv = require('dotenv').config().parsed
const fetch = require('node-fetch');
const url = "http://62.210.247.201:9000/test"

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json
      } catch (error) {
        console.log(error);
      }
}

module.exports = {
    indexAction: async function(req, res){
        const data = await fetchData()
        res.render('default', {
            title:  'Carousel',
            description: 'Bienvenue sur le test Kinomap de Benjamin Catouillard',
            fetchedData: data
        });
    }
}