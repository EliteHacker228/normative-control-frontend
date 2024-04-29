export default class ENV {
    static #API_URL = import.meta.env.VITE_REACT_API_URL;
    static get API_URL(){
        return this.#API_URL;
    }
}