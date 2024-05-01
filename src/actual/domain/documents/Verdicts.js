export default class Verdicts {
    static _NOT_CHECKED = 'NOT_CHECKED';
    static _ACCEPTED = 'ACCEPTED';
    static _REJECTED = 'REJECTED';

    static _statuses = new Set([this._NOT_CHECKED, this._ACCEPTED, this._REJECTED]);

    static fromSting(verdictStrig) {
        switch (verdictStrig) {
            case this._NOT_CHECKED:
                return this._NOT_CHECKED;
            case this._ACCEPTED:
                return this._ACCEPTED;
            case this._REJECTED:
                return this._REJECTED;
            default:
                throw new Error('Unknown verdict type');
        }
    }

    static get NOT_CHECKED() {
        return this._NOT_CHECKED;
    }

    static get ACCEPTED() {
        return this._ACCEPTED;
    }

    static get REJECTED() {
        return this._REJECTED;
    }

    static get statuses() {
        return this._statuses;
    }
}