import { http } from './config.js'
export default {
    recuperar:(id) =>{


console.log('xxxxx'+id);

        return http.get(`/usuarioGrupo/${id}`);
    }
}