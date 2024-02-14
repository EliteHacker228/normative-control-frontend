import {v4 as getUUID} from 'uuid';
import AuthService from "../auth/AuthService.js";

export default class StudworkService {
    static uploadForAnonymousVerification(file, onProgressUpdate, onProgressComplete){
        let socket = new WebSocket("ws://localhost:8080/student/document/verify");
        let delay = 30;
        let savedStart = 0;

        let initMessage = {
            'fingerprint' : getUUID(),
            'length' : file.size
        };

        socket.onopen = function(e) {
            console.log("[open] Соединение установлено");
            console.log("Инициирую сессию анонимной проверку");
            console.log(initMessage);
            socket.send(JSON.stringify(initMessage));
            socket.send(file);
        };

        socket.onmessage = function(event) {
            console.log(`[message] Данные получены с сервера: ${event.data}`);
            try {
                let responseJson = JSON.parse(event.data);
                if ('value' in responseJson) {
                    let percents = Math.floor(Number(responseJson.value) * 100);
                    for(let start = savedStart; start <= percents; start++) {
                        setTimeout(() => onProgressUpdate(start), delay);
                        delay += 30;
                        console.log(start, delay);
                    }
                    savedStart = percents + 1;
                }

                if ('id' in responseJson) {
                    onProgressComplete(responseJson.id, initMessage.fingerprint);
                }
            }catch(e){
                console.log(e);
            }
        };

        socket.onclose = function(event) {
            if (event.wasClean) {
                console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
            } else {
                // например, сервер убил процесс или сеть недоступна
                // обычно в этом случае event.code 1006
                console.log('[close] Соединение прервано');
            }
        };

        socket.onerror = function(error) {
            console.log(`[error] ${error}`);
        };
    }

    static uploadForAuthedVerification(file, onProgressUpdate, onProgressComplete){
        let socket = new WebSocket("ws://localhost:8080/student/document/verify");
        let delay = 30;
        let savedStart = 0;

        let initMessage = {
            'token' : AuthService.getAccessToken(),
            'length' : file.size
        };

        socket.onopen = function(e) {
            console.log("[open] Соединение установлено");
            console.log("Инициирую сессию авторизованной проверку");
            console.log(initMessage);
            socket.send(JSON.stringify(initMessage));
            socket.send(file);
        };

        socket.onmessage = function(event) {
            console.log(`[message] Данные получены с сервера: ${event.data}`);
            try {
                let responseJson = JSON.parse(event.data);
                if ('value' in responseJson) {
                    let percents = Math.floor(Number(responseJson.value) * 100);
                    for(let start = savedStart; start <= percents; start++) {
                        setTimeout(() => onProgressUpdate(start), delay);
                        delay += 30;
                        console.log(start, delay);
                    }
                    savedStart = percents + 1;
                }

                if ('id' in responseJson) {
                    onProgressComplete(responseJson.id);
                }
            }catch(e){
                console.log(e);
            }
        };

        socket.onclose = function(event) {
            if (event.wasClean) {
                console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
            } else {
                // например, сервер убил процесс или сеть недоступна
                // обычно в этом случае event.code 1006
                console.log('[close] Соединение прервано');
            }
        };

        socket.onerror = function(error) {
            console.log(`[error] ${error}`);
        };
    }

    static async getResultOfAnonymousVerification(resultId, fingerprint){
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        try {
            let response = await fetch(`http://localhost:8080/student/document/render?documentId=${resultId}&fingerprint=${fingerprint}`, requestOptions);
            let responseHtml = await response.text();
            return responseHtml;
        } catch (e) {
            console.log(e);
        }
    }

    static async getResultOfAuthedVerification(resultId){
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            let response = await fetch(`http://localhost:8080/student/document/render?documentId=${resultId}`, requestOptions);
            let responseHtml = await response.text();
            return responseHtml;
        } catch (e) {
            console.log(e);
        }
    }

    static async getResultOfAuthedVerificationByInspector(resultId){
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            let response = await fetch(`http://localhost:8080/inspector/document/render?documentId=${resultId}`, requestOptions);
            let responseHtml = await response.text();
            return responseHtml;
        } catch (e) {
            console.log(e);
        }
    }

    static async getListOfAuthedVerifications(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let response = await fetch("http://localhost:8080/student/document/list", requestOptions);
        let responseJson = await response.json();
        return responseJson;
    }

    static async getListOfVerificationsByStudentsEmail(email){
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let result = await fetch(`http://localhost:8080/inspector/students/find?email=${email}`, requestOptions);
        if(result.ok) {
            let resultJson = await result.json();
            return resultJson;
        }
        return [];
    }
}
