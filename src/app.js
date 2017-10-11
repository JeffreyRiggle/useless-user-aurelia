import {UserManager} from './usermanager';
import {style} from './app.less';

export class App {
    constructor() {
        this.usermanager = new UserManager();
    }
}