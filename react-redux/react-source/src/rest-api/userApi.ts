import { UserEntity } from '../model';
import { users } from './mockData';

class UsersAPI {
    private users: UserEntity[];
    constructor() {
        this.users = users;
    }

    public getUsers(n: number = 0){
        return n===0? this.users : this.users.slice(0, n);
    }
    // @TODO: fetch users from server
}

export const usersApi = new UsersAPI();