import {HttpClient, Headers} from 'aurelia-http-client';
import {User} from './user';

export class UserManager {
    constructor() {
        this.httpClient = new HttpClient();
        this.users = [];
        this._setup();
    }

    _setup() {
        this.httpClient.createRequest('/uug/v1/users')
            .asGet()
            .send()
            .then(data => {
                this._processUsers(JSON.parse(data.response));
            });
    }

    createUsers(number) {
        this.httpClient.createRequest('/uug/v1/create')
            .asPost()
            .withContent(
                { numbertocreate: number } 
            )
            .send()
            .then(data => {
                this._processUsers(JSON.parse(data.response));
            });
    }

    _processUsers(usrs) {
        usrs.forEach(usr => {
            const ind = this._userIndex(usr);
            const u = new User(usr.id, usr.firstname, usr.lastname, usr.occupation, usr.gender);
            if (ind === -1) {
                this.users.push(u);
                return;
            }

            this.users.splice(ind, 1, u);
        });
    }

    _userIndex(user) {
        let retVal = -1;

        this.users.forEach(usr => {
            if (usr.id === user.id) {
                retVal = this.users.indexOf(usr);
            }
        });

        return retVal;
    }

    updateUsers(number) {
        this.httpClient.createRequest('/uug/v1/updaterandom')
            .asPut()
            .withContent(
                { numbertoupdate: number }
            )
            .send()
            .then(data => {
                this._processUsers(JSON.parse(data.response));
            });
    }

    clearUsers() {
        this.httpClient.createRequest('/uug/v1/clear')
            .asDelete()
            .send()
            .then(data => {
                this.users = [];
            });
    }
}