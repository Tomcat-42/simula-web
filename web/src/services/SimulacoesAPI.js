import api from './api';

class simulacoesAPI {
    static all() {
        return new Promise((resolve, reject)=>{
            api.get("simulacoes", {headers:{"Content-Type" : "application/json"}})
            .then(({data})=>{
                resolve(data);
            })
            .catch((err)=>{
                console.log(err);
                reject(err);
            })
        })
    }

    static index(file) {
        return new Promise((resolve, reject)=>{
            api.get(`simulacoes/${file}`, {headers:{"Content-Type" : "application/json"}})
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

export default simulacoesAPI;
