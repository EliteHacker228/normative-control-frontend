export default class ApiUrlResolver {
    static getApiUrl(){
        return import.meta.env.VITE_REACT_API_URL;
    }
}