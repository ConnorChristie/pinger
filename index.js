const app = require('express')();

app.get('/ping', (req, res) => {
	res.sendFile(__dirname + '/pong.png');
});

app.listen(3000);