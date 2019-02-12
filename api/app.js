import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 } from 'uuid';
import db from './db/db';

const app = express();
const PORT = process.env.PORT || 2400;

// Config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
var router = express.Router();

// Return the current state of the to do list
router.get('/list', (req, res) => {
	res.status(200).send({
		items: db
	});
});

// Add a new element to the to do list
router.post('/item', (req, res) => {
	let desc = req.body.description;

	db.push({
		id: v4(),
		description: desc,
		status: 0
	});

	console.log(req.body);
	console.log('POST request - Item added');

	res.end('yes');
});

// Update an item from the list
router.put('/item/:id', (req, res) => {
	let id = req.params.id;
	let idx = db.findIndex(el => el.id === id);

	db[idx].description = req.body.description;
	db[idx].status = req.body.status;

	console.log(req.body);
	console.log('PUT request - Item updated');
	res.end('yes');
});

// Delete an item from the list
router.delete('/item/:id', (req, res) => {
	let id = req.params.id;
	let idx = db.findIndex(el => el.id === id);

	db.splice(idx, 1);

	console.log('DELETE request - item deleted');
	res.end('yes');
});

app.use('/api/v1', router);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
