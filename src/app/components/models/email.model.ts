export interface IEmail {
    name?: string;
    telNumber?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export class Email implements IEmail {
    constructor(
        public name?: string,
        public telNumber?: string,
        public email?: string,
        public subject?: string,
        public message?: string) {

        }
}