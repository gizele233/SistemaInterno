import { http } from './config.js'
export default {
    recuperarGrupo:(id) =>{
        return http.get(`/usuarioGrupo/${id}`);
    },



    recuperarGrupoPorSistema:(id) =>{
        return http.get(`/grupo/sistema/${id}`);
    }
}