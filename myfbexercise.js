var database = [

	{
		username: "Ibrahim89",
		password: "Oyelola27"		
	},

	{

		username: "Ardor89",
		password: "Balmodupet"
	},

	{

		username: "Pagatech",
		password: "Orange77"
	},

];

var newsFeeds = [

		{
			username: "Sofiyyah13",
			timeline: " The name of my school is Crest International"
		},

		{
			username: "Marsofi15",
			timeline: " Marsofi Art and Craft is Open for Business",
		},
			
		{
			username: "Abdurrahman16",
			timeline: " He is a good Boy.lol...",
		},
];


function isUserValid(username, password) {

	
	for (i = 0; i < database.length; i++) {

		if(username === database[i].username && password === database[i].password){

				return true;

			}	
		} 

			return false;
}


function signIn(username, password){ 

		if(isUserValid(username, password)){

				console.log(newsFeeds);

		} else {

			alert("Sorry, wrong username and password");

		}
	}



var userNamePrompt = prompt("what is your username");
var passwordPrompt = prompt("what is your password");




signIn(userNamePrompt, passwordPrompt);

