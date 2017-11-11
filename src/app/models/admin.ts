
import { User } from '../models/user';


export class Admin{
    
	private static admin:Admin;


    private username: string;
    private email: string;
    private password: string;


	public getInstance(): Admin
	{
		if(Admin.admin==null)
		{
			Admin.admin = new Admin();
		}
		return Admin.admin;
	}


    constructor() 
    {
    	this.username = "admin";
    	this.email = "";//??????
    	this.password = "12345678"
    }
}
