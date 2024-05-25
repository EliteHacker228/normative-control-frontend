export default class FeedbackService {
    static _isFeedbackShowedPath = 'isFeedbackShowed';

    static isFeedbackShowedBefore() {
        return localStorage.hasOwnProperty(this._isFeedbackShowedPath)
            && localStorage.getItem(this._isFeedbackShowedPath) === 'true';
    }

    static setFeedbackIsShowedBefore(){
        localStorage.setItem(this._isFeedbackShowedPath, 'true');
    }

    static setFeedbackIsNotShowedBefore(){
        localStorage.setItem(this._isFeedbackShowedPath, 'false');
    }
}