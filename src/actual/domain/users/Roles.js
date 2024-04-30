export default class Roles {
    static _student = 'STUDENT';
    static _normocontroller = 'NORMOCONTROLLER';
    static _admin = 'ADMIN';

    static _roles = new Set([this._student, this._admin, this._normocontroller]);

    static get STUDENT() {
        return this._student;
    }

    static get NORMOCONTROLLER() {
        return this._normocontroller;
    }

    static get ADMIN() {
        return this._admin;
    }

    static get roles() {
        return this._roles;
    }
}