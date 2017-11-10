export class Request {
    constructor(
    	public owner: string,
        public type: string,
        public days: string,
        public dates: string,
        public reason: string,
        public note: string,
        public submit: string,
        public status: string,
    	public id?: string
    ) {}
}