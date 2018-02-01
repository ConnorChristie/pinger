const app = require('express')();

app.get('/ping', (req, res) => {
	res.json('ping');
});

app.listen(3000);