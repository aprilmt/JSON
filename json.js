localStorage.setItem('information', JSON.stringify({
	name: 'April Ma',
	email: 'mate419@gmail.com',
	CurrentCity: 'San Francisco',
	Zipcode: '94102'

}));

var information = JSON.parse(localStorage.getItem('information'));