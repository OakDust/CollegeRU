import { publicRoutes } from '../../../../routes.js';
import fs from 'fs';

// USAGE:
// 1. comment all the components in routes.js and all the .jsx extensional imports

// 2. node filler.js

// 3. add [] to Links.json and delete a ,
// P.S. added type module into package.json in client

const titles = []
const links = []

var data = ""

for (let i = 0; i < publicRoutes.length; i++) {
    titles[i] = publicRoutes[i].title
    links[i] = publicRoutes[i].path
}

for (let i = 0; i < titles.length; i++) {
    data += `
    {
        "id": "${i}",
        "title": "${titles[i]}",
        "link": "${links[i]}"
    },\n`
}

try {
    fs.writeFileSync('./Links.json', data);
    // file written successfully
} catch (err) {
    console.error(err);
}