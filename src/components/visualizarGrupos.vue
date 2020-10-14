
<template>
    <div style="padding:10px">
        <b-card header="Grupos" style="margin-bottom:10px">
            <b-form inline>
                <b-form-group
                label-cols-sm="13"
                label="Nome:"
                label-for="Nome"
                ></b-form-group>
                <b-form-group
                label-cols-mb="0"
                label="[nome do sistema]"
                label-for="Nome"
                ></b-form-group>
            </b-form>
            <b-form inline class="container-info">
                <b-form-group
                label-cols-sm="13"
                label="Sigla:"
                label-for=""
                ></b-form-group>
                <b-form-group
                label-cols-mb="0"
                label="[sigla do sistema]"
                label-for="Nome"
                ></b-form-group>
            </b-form>

            <b-form inline class="mt-4">
                <b-form-group
                    
                    label="Grupo:"
                    label-for="filterInput" 
                    id="field"
                    class="form-field"
                    label-cols-lg="2" 
                >
                    <b-form-input
                            variant="light"
                            v-model="filter"
                            type="search"
                            class="mb-1"
                    />
                </b-form-group> 
                <b-form-group >
                    <b-button class="mb-3 search-button" variant="primary" type="submit" id="search">Adicionar</b-button> 
                </b-form-group>
            </b-form>
            

            <div class="mt-4 mb-3">
                <b-table sticky-header hover :items="items" :fields="fields" head-variant = "light">
                    <template v-slot:cell(Remover)>
                        <b-button variant="danger" class="icon-acao">
                        <b-icon icon="x" aria-hidden="true"></b-icon>
                        </b-button>
                    </template>
                </b-table> 
            </div>
            <div>
                <b-form-group class="col">
                    <b-button variant="primary" class="mb-0 space-botao" type="submit" id="search">Salvar</b-button>
                    <router-link to="/sistema">
                        <b-button variant="primary" class="mb-0" type="submit" id="search">Voltar</b-button>
                    </router-link>     
                </b-form-group>
            </div>
        </b-card>  
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {Grupo: 'Usuario'},
          {Grupo: 'Administrador'},
          {Grupo: 'Usuario'},
          {Grupo: 'Usuario'}
        ]
        ,fields : [{key:"Grupo",label:"Grupo"}, {key:"Remover",label:"Remover"}]
      }
    }
}
</script>

<style scoped>
.space-botao{
    margin: 0% 1% 0 0%;
}
</style>