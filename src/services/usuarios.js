import { http } from './config.js'
export default{
    listar:() => {
        return http.get('usuario/?nome=gizele')
    }
}