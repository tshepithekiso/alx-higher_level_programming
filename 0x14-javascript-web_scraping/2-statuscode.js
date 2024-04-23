#!/usr/bin/node
// Status Of Get request

const request = require('request');

const url = 'https://alx-intranet.hbtn.io/status';

axios.get(url)
  .then((response) => {
    console.log('Status Code:', response.status);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

