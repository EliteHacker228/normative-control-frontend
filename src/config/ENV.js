export default class ENV {
    static #API_URL = import.meta.env.VITE_REACT_API_URL;
    static #WEB_PREFIX = import.meta.env.VITE_REACT_WEB_PREFIX;

    static get API_URL(){
        return this.#API_URL;
    }

    static get WEB_PREFIX(){
        return this.#WEB_PREFIX;
    }
}