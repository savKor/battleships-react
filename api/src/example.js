function a(lifecycle, arg1, cell, index) {
	console.log('Первый игрок теперь ходит');
	const dataOfThePlayer = arg1;
	dataOfThePlayer.arrayOfMissedShot.push(cell);
	turn = playersData[index].username;
	const objectForUsers = getDataObjectForClient();
	wss.clients.forEach(function each(client) {
		client.send(JSON.stringify(objectForUsers));
	});
}

const b = (lifecycle, arg1, cell) => {
	const index = 0;

	a(lifecycle, arg1, cell, index);
};
