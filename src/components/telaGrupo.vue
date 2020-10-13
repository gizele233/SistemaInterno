<template>
    <div style="padding:10px">

    <b-card header="Grupos" style="margin-bottom:10px">
        <b-form inline>
            <b-form-group >
                <b-button variant="primary" class="mb-4 search-botton" type="submit" id="search">Adicionar</b-button> 
            </b-form-group>
        </b-form>

        <div>
            <b-table sticky-header hover :items="items" :fields="fields" head-variant = "light">
                
            <template v-slot:cell(Acoes)>
                <router-link to="/">
                    <b-button variant="primary" class="icon-acao">
                    <b-icon icon="eye" aria-hidden="true"></b-icon>
                    </b-button>
                </router-link>
            </template>
                
            </b-table> 
        </div>
        
    </b-card>  
    </div>

</template>

<script>
export default {
    data() {
      return {
        items: [
          { Nome: 'Almoxarifado', Sigla: 'ALMOX'},
          { Nome: 'Denuncia', Sigla: 'DEN'},
          { Nome: 'Almoxarifado', Sigla: 'ALMOX'},
          { Nome: 'Almoxarifado', Sigla: 'ALMOX'}
        ]
        ,fields : [{key:"Nome",label:"Nome"},{key:"Sigla",label:"Sigla"},{key:"Acoes", label:"Ações"}]
      }
    }
}

</script>
<style scoped>
    
</style>