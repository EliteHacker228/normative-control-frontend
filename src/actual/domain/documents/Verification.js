// TODO: Переписать полей в верхний регистр
export default class Verification {
    static _ok = 'OK';
    static _error = 'ERROR';
    static _pending = 'PENDING';

    static _statuses = new Set([this._ok, this._pending, this._error]);

    static get ok() {
        return this._ok;
    }

    static get error() {
        return this._error;
    }

    static get pending() {
        return this._pending;
    }

    static get statuses() {
        return this._statuses;
    }
}