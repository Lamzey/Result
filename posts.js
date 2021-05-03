const fs = require('fs');
const http = require('http');
const axios = require('axios');



/*axios.get('http://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    response.data(fs.createWriteStream('post.json'));
    console.log('File Created Successfully');
  });*/

  var config = {
      responseType: 'stream'
  };

  let url = 'http://jsonplaceholder.typicode.com/posts';

  async function getPost() {

      let resp = await axios.get(url, config);
      resp.data.pipe(fs.createWriteStream('post.json'));
      console.log("Your File Has Been Created Successfully!");
  }

  getPost();
