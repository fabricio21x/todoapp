import express from 'express';
import db from './db/db';

const app = express();

app.get('/api/v1/list', (req, res) => {
	res.status(200).send({
		success: 'true',
		message: 'ToDo list received successfuly',
		todos: db
	});
});

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
