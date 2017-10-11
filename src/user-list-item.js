import {inject, bindable, customElement} from 'aurelia-framework';

@customElement('user-list-item')
@bindable('user')
export class UserListItem {
    constuctor() {
        this.isFemale = false;
    }

    userChanged(newValue, oldValue) {
        this.isFemale = newValue.gender === 'f';
    }
}