## File downloader

This is a webpage html downloaded implemented by Denny Ng (@Desyn6) for Week 5 of Lighthouse Lab's Flex Web Development Program.

### Setup
1. Clone this repository to your working directory
2. run the following commands:

```
npm init
npm install request
```

### Download Webpages!
To download the HTML data of a webpage, type the following command:

```
node fetcher.js [website URL] [directory]
````

### Notes
This script will automatically replace `.` with `%` and remove all `/` characters.