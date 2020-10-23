import { http } from './config.js'
export default{
    recuperarSistemas: () =>{
        return http.get(`/sistema`)
    }
}