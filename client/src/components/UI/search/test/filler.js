const fs = require('fs');

const titles = ['abiturients', 'hello', 'test', 'hehe']
const links = ['/', '/about', '/index', '/abit']

var data = ""

for (let i = 0; i < titles.length; i++) {
    data += `
    {
        "id": "${i}",
        "title": "${titles[i]}",
        "link": "${links[i]}"
    },\n`
}

try {
    fs.writeFileSync('./test-data.json', data);
    // file written successfully
} catch (err) {
    console.error(err);
}