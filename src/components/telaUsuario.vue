<template>
    <div style="padding:10px">

    <b-card header="Pesquisar Usuário" style="margin-bottom:10px">
        <b-form inline>
            <b-form-group
                
                label="Matrícula:"
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

            <b-form-group
                    
                    label="Nome:"
                    label-for="filterInput"
                    class="form-field"
                    label-cols-lg="0" 
                >
                <b-form-input
                        variant="light"
                        v-model="filter"
                        type="search"
                        class="mb-1"
                ></b-form-input>
            </b-form-group>
            <b-form-group >
                <b-button variant="outline-primary" class="mb-3 search-button" type="submit" id="search"><b-icon icon="search" aria-hidden="true" ></b-icon></b-button> 
            </b-form-group>
        </b-form>

        <div>
            <b-table sticky-header hover :items="items" :fields="fields" head-variant = "light">
                
            <template v-slot:cell(Acoes)>
                <router-link to="/editarusuario">
                    <b-button variant="primary" class="icon-acao">
                    <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
                    </b-button>
                </router-link>

                <router-link to="/alterarsenha">
                    <b-button variant="warning" class="icon-acao">
                    <b-icon icon="key-fill" aria-hidden="true"></b-icon>
                    </b-button>
                 </router-link>

                 <b-button variant="danger" class="icon-acao">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                </b-button>
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
          { código: 40, matricula: 20144, Nome: 'Gizele', Setor: 'SUDEC'},
          { código: 21, matricula: 20144, Nome: 'João', Setor: 'SUDEC'},
          { código: 89, matricula: 20144, Nome: 'Maria', Setor: 'SUDEC'},
          { código: 38, matricula: 20144, Nome: 'Camila', Setor: 'SUDEC'}
        ]
        ,fields : [
          {key:"matricula",label:"Matrícula"},
          {key:"Nome",label:"Nome"},
          {key:"Acoes", label:"Ações"}
        ]
      }
    }  
}
</script>

<style scoped>
    .form-field{
        padding: 0 1% 1% 0;
    }
    @media (max-width: 784px) {
        .form-field{
            margin-right: 50%;
        }
    }
    .icon-acao{
        margin: 0 0.5% 0% 0;
    }
    @media (max-width: 400px) {
        .search-button{
            margin-top: 120%;
        }
    }
    @media (max-width: 578px) {
        .search-button{
            margin-top:115%;
        }
    }
    @media (max-width: 630px) {
        .search-button{
            margin-right: 20%;
            margin-top:60%;
        }
    }
    @media (max-width: 992px) {
        .search-button{
            margin-top:10%;
        }
    }
    
</style>