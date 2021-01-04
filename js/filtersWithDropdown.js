function init(){
	console.log('inside init');
	let loadedList = localStorage.getItem('itemList');

	app.list = JSON.parse(loadedList);
}

init();