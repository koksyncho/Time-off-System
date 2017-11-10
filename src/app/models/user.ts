export class User {
	public id:number;
    constructor(
    	public admin:boolean,
        public name: string,
        public email: string,
        public password: string,
        public egn:number,
        public pto:number
    ) {}
}
