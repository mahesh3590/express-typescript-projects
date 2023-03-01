import { v4 as uuidv4 } from 'uuid';
import { userProps } from "./user.props";

export class User {

    private _id: string;
    private _firstName: string;
    private _lastName: string;

    constructor(
        id: string,
        firstName: string,
        lastName: string
    ){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public create(userProps: userProps, id?: string){
        const userId = id ? id : uuidv4();
        const user = new User(
                userId, 
                userProps.firstName, 
                userProps.lastName
            );
        return user;

    }
}