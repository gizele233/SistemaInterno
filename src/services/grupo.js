import { http } from './config.js'
export default {
    recuperarGrupo:(id) =>{
        return http.get(`/usuarioGrupo/${id}`);
    }
}