import api from './api';

class logsAPI {
    static index() {
        return new Promise((resolve, reject)=>{
            api.get("logs", {headers:{"Content-Type" : "application/json"}})
            .then(({data})=>{
                resolve(data);
            })
            .catch((err)=>{
                console.log(err);
                reject(err);
            })
        })
    }

    static show(file) {
        return new Promise((resolve, reject)=>{
            api.get(`logs/${file}`, {headers:{"Content-Type" : "application/json"}})
            .then(({data})=>{
                resolve(data);
            })
            .catch((err)=>{
                console.log(err);
                reject(err);
            })
        })
    }
}

export default logsAPI;
