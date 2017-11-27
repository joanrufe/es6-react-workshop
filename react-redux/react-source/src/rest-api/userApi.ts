import { UserEntity } from '../model';
import { users } from './mockData';

export class UsersAPI {
    private users: UserEntity[];
    constructor() {
        this.users = users;
    }

    public getUsers(){
        return this.users;
    }
    // @TODO: fetch users from server
}
