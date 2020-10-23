import { http } from './config.js'
export default {
   
    listar:(filtro) =>{

        return http.get(`usuario/?nome=${filtro.nome}&matricula=${filtro.matricula}`)
    },

    recuperarUsuarioID:(id) =>{
        return http.get(`usuario/${id}`)
    }
}