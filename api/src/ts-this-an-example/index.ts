// Boot Server
const port = process.env.PORT || config.port;

server.listen(port, () => {
	console.log('Server running on', port);
});
