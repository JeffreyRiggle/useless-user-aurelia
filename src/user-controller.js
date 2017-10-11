import {inject, bindable} from 'aurelia-framework';
import {style} from 'user-controller.less';

@bindable('usermanager')
@bindable('userNumber')
export class UserController {
    constructor() {
        this.userNumber;
        this.valid = false;
    }

    userNumberChanged(newValue, oldValue) {
        this.valid = !isNaN(Number.parseInt(newValue))
    }

    createUsers() {
        this.usermanager.createUsers(Number.parseInt(this.userNumber));
    }

    updateUsers() {
        this.usermanager.updateUsers(Number.parseInt(this.userNumber));
    }

    clearUsers() {
        this.usermanager.clearUsers();
    }
}