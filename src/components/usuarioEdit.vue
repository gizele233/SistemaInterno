<template>
    <div style="padding:10px">
    <b-card header="Editar Grupos" style="margin-bottom:10px">
        <b-form inline >
            <b-form-group
                label-cols-sm="11"
                label="Nome:"
                label-for="Nome"
            ></b-form-group>
            </b-form>
            <b-form inline class="container-info">
            <b-form-group
                label-cols-sm="11"
                label="Matrícula:"
                label-for="Matrícula:"
            ></b-form-group>
        </b-form>

        <div>
            <b-form inline >
            <b-form-group
                class="label-select"
                label-cols-sm="0"
                label="Sistema:"
                label-for="filterInput"
            >
            <b-form-select class="container-select" v-model="sistema" :options="sistema"></b-form-select>
            </b-form-group>
            
            <b-form-group
                class="label-select"
                label-cols-mb="0"
                label="Grupo:"
                label-for="filterInput"
            >
            <b-form-select class="container-select" v-model="grupo" :options="grupo"></b-form-select>
            </b-form-group>
            <b-button variant="primary" class="container-select" type="submit" id="search">Adicionar</b-button>
        </b-form>
            
        </div>
        <div class="mt-3">
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
                <b-button variant="primary" class="mr-2" type="submit" id="search">Salvar</b-button>
                <router-link to="/usuario">
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
          { sistema: "Recursos Humanos", grupo: "usuário"},
          { sistema: "Transparência", grupo: "Administrador"},
          { sistema: "Transparência", grupo: "Administrador"},
          { sistema: "Recursos Humanos", grupo: "Administrador"}
        ],
        fields : [
            {key:"sistema",label:"Sistema"},
            {key:"grupo",label:"Grupo"},
            {key:"Remover", label:"Remover Grupo"}
        ],
        sistema: null,
        sistema: [
          { value: null, text: 'Recursos humanos' },
          { value: 'a', text: 'Transparência' },
          { value: 'b', text: 'Transparência' },
          { value: { C: '3PO' }, text: 'Opção com valor de objeto' },
          { value: 'd', text: 'Opção inativa', disabled: true }
        ],
        grupo: null,
        grupo: [
          { value: null, text: 'Transparência' },
          { value: 'a', text: 'Contratações públicas' },
          { value: 'b', text: 'Transparência' },
          { value: { C: '3PO' }, text: 'Opção com valor de objeto' },
          { value: 'd', text: 'Opção inativa', disabled: true }
        ]
      }
    }

}
</script>

<style scoped>
.container-info{
    padding: 0 0 1% 0;
}
.container-select{
    margin: 0 0% 1% 2%;
}
.label-select{
    margin: 0 12% 1% 2%;
}
</style>