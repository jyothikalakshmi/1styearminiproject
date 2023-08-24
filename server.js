const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const issue = req.body.issue;
    const contactnumber = req.body.contactnumber;

    const data = `Name: ${name}\nEmail: ${email}\nissue: ${issue}\ncontactnumber: ${contacrnumber}\n\n`;

    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error storing data.');
        } else {
            console.log('Data stored successfully.');
            res.send('Data stored successfully.');
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
