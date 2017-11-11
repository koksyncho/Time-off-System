export class URLs {
	
	serverURL = "http://localhost:8080"

	serverURLforUsers = this.serverURL+"/users"
	serverURLforRequests = this.serverURL+"/requests"
	serverURLforAdmin = this.serverURL+"/admin";

	loginURL = this.serverURLforUsers+"/login" ;
	getAllUsersURL = this.serverURLforUsers+"/all";
	registerURL = this.serverURLforUsers+"/register";
	deleteUserURL = this.serverURLforUsers+"/delete/"; //IF u use this URL add the id of the user!!!!!
	getIDbyUsernameURL = this.serverURLforUsers+"/id-of-";  //IF u use this URL add the name of the user!!!!!
	getUserByIDURL = this.serverURLforUsers+"/get/"; //IF u use this URL add the id of the user!!!!!
	getAllRequestURL = this.serverURLforRequests+"/all";
	addNewRequestURL = this.serverURLforRequests+"/add";
	updateRequestURL = this.serverURLforRequests+"/update/"; // add the id of the request
	deleteRequestURL = this.serverURLforRequests+"/delete/"; // add the id of the request
	approveRequestURL = this.serverURLforAdmin+"/approve-request/"; //add the id of the request
	disapproveRequestURL = this.serverURLforAdmin+"/disapprove-request/"; //add the id of the request
}