// retrieve CLI arguments for webpage and save path
const args = process.argv.slice(2);
// require request
const request = require('request');
// require fs such that we may use writeFile
const fs = require('fs');

// function to clean up URL to be suitable for filenames
const trimLink = (link) => {
  // find index of : in http://
  const indexOfColon = link.lastIndexOf(':');
  // trim out http: from all URL
  const noHttp = link.substring(indexOfColon + 1);
  // replace '.' with % and remove '/'
  const trimmed = noHttp.replace(/\./g, '%').replace(/\//g, '');

  return trimmed;
};

// function for checking if last character of directory is /
// writes / to the directory if not
const addSlash = (directory) => {
  if (directory[directory.length - 1] === "/") {
    return directory;
  }
  return directory + "/";
};

// write filename based on URL
const filename = trimLink(args[0]);
const directory = addSlash(args[1]);

request(args[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statuscode:', response && response.statusCode);
  // call writefile using filepath, and filename
  fs.writeFile(`${directory}${filename}.html`, body, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${directory}${filename}.html`);
  });
});