/* Copyright © 2021 Akobuije GmbH
 * Autor: Bob-Anyeji Chukwunonso
 * Date: 07.05.2021
 * Discription: Node Server  
 * Document: Server.js 
 * Template: medium.com
 */

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const promisify = require('util').promisify;
const path = require('path');

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

const writeFilePromise = promisify(fs.writeFile);

WriteTextToFileAsync = async (contentToWrite) => {

    try {
	console.log('FilePath: ', path);
	console.log('dir Name: ', __dirname);
	const fpath = path.join(__dirname, 'Test.json');
	console.log('filepath', fpath);
	console.log(contentToWrite);
        await writeFilePromise(contentToWrite, fpath);
    } catch(err) {
	console.log('Async Write Error', err);
        throw new Error(err);
    }
}

// Default route
app.get('/', (req, res) => res.status(200).send({
    message : 'Akobuije/Slambase/herkunft Server is Up and Running'
}));

// Write route
app.use('/write/menu', async (req, res, next) => {
    // Basic File Read Example from W3school/nodejs/nodejs_filesystem template 
    fs.writeFile('./Menu/Menu.json', JSON.stringify(req.body), (err) => {
	if (err){	    
    	    logErr(err);
    	    return res.status(424).send('File Writing Failed');
	}
	console.log('/*************req***************/');
	console.log(req.body);
    	return res.status(200).send({ message: 'Configuration Updated' });
    });
});

// Read route
app.use('/read/menu', async (req, res, next) => {
    // Basic File Reading Example from Read Nodejs/learn/reading-files-with-nodejs
    fs.readFile('./Menu/Menu.json', 'utf8', (err, data) =>{
	if(err){
	    logErr(err);
	    return res.status(424).send('File Reading Failed');
	}
	console.log('**************data***************');
	console.log(data);
	return res.status(200).send(data);
    });
});

function logErr(err){
    console.log(';***************Server Error****************;');
    	console.log(err);
}

// Not-found route
app.use((req, res, next) => {
    res.status(404).send({ message: 'Could not find the specified route you requested!' });
});

app.listen(port, () =>
    console.log(`Server up and running and listening for incoming requests on port ${port}!`));
