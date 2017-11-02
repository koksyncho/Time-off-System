export class URLs {
	
	serverURL = "http://localhost:8080"

	loginURL = this.serverURL+"/login" ;
	getAllUsersURL = this.serverURL+"/all";
	registerURL = this.serverURL+"/register";
	deleteUserURL = this.serverURL+"/delete/"; //IF u use this URL add the id of the user!!!!!
	getIDbyUsernameURL = this.serverURL+"/id-of-";  //IF u use this URL add the name of the user!!!!!
	getUserByIDURL = this.serverURL+"/get/"; //IF u use this URL add the id of the user!!!!!


}