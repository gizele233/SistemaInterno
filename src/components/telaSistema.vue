<template>
    <div style="padding:10px">

    <b-card header="Sistemas" style="margin-bottom:10px">
        <b-form inline>
            <b-form-group
                
                label="Nome:"
                label-for="filterInput" 
                id="field"
                class="form-field"
                label-cols-lg="0" 
            >
                <b-form-input
                        variant="light"
                        v-model="filter"
                        type="search"
                        class="mb-1"
                />
            </b-form-group> 
            <b-form-group >
                <b-button variant="outline-primary" class="mb-3 search-button" type="submit" id="search"><b-icon icon="search" aria-hidden="true" ></b-icon></b-button> 
            </b-form-group>
        </b-form>

        <router-link to="/editarsistema">
            <b-button variant="primary" class="w-10 mb-4 mt-4" type="submit" id="search">Adicionar Sistema</b-button>
        </router-link>
        
        <div>
            <b-table sticky-header hover :items="items" :fields="fields" head-variant = "light">
                
            <template v-slot:cell(Acoes)>
                <router-link to="/editarsistema">
                    <b-button variant="primary" class="icon-acao">
                    <b-icon icon="pencil" aria-hidden="true"></b-icon>
                    </b-button>
                </router-link>
                <router-link to="/visualizargrupo">
                    <b-button variant="secondary" class="icon-acao">
                    <b-icon icon="eye" aria-hidden="true"></b-icon>
                    </b-button>
                </router-link>
                <router-link to="">
                    <b-button variant="danger" class="icon-acao">
                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
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

<style>
    .icon-acao{
        margin: 0 0.5% 0% 0;
    }
    header{
        text-align: left;
    }
    .form-field{
        padding: 0 1% 1% 0;
    }
    .icon-acao{
        margin: 0 0.5% 0% 0;
    }
    .icon-acao{
        margin: 0 0.5% 0% 0;
    }
    @media (max-width: 570px) {
        .search-button{
            margin-top: 90%;
        }
    }
    
</style>