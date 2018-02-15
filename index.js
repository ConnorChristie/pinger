const app = require('express')();

process.exit(1);

app.get('/ping', (req, res) => {
	res.sendFile(__dirname + '/ping.png');
});

app.listen(3000);