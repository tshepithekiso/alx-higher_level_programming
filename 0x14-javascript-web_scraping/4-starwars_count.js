#!/usr/bin/node

const request = require('request');

// API URL
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Function to count movies with Wedge Antilles
function countMoviesWithWedge(apiUrl, characterId) {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    
    if (response.statusCode !== 200) {
      console.error('Request failed with status code:', response.statusCode);
      return;
    }

    // Parse response body
    const films = JSON.parse(body).results;

    // Count movies with Wedge Antilles
    const moviesWithWedge = films.filter(film =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    console.log('Number of movies with Wedge Antilles:', moviesWithWedge.length);
  });
}

// Call the function
countMoviesWithWedge(apiUrl, characterId);

