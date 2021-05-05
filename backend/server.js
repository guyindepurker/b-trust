const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 3030;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, 'build')));
} else {
	const corsOptions = {
		origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
		credentials: true,
	};
	app.use(cors(corsOptions));
}

const routesBtrust = require('./api/brtrust/btrust.routes')
app.use('/api/btrust',routesBtrust)

app.get('/**', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.listen(port, () => {
	console.log(`the server running in port ${port}`);
});
