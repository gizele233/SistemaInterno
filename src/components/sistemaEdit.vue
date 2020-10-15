<template>
    <div style="padding:10px">
        <b-card header="Editar Sistema" style="margin-bottom:10px">
            <b-form inline>
                <b-form-group class="col">
                    <b-form-group
                        label-cols-lg="0"
                        label-for="filterInput" 
                        id="field"
                        label="Nome:"
                    > </b-form-group>
                    <b-form-input style="width: 300px" class="xs-12 col-9 mb-4" id="input-sm" size="5"></b-form-input>

                    <b-form-group
                        label-cols-lg="0"
                        label="Sigla:"
                        label-for="filterInput" 
                        id="field"
                    > </b-form-group>
                    <b-form-input style="width: 300px" class="xs-12 col-9 mb-4" id="input-sm"></b-form-input>
                </b-form-group>
                
            </b-form>
            <div>
                <b-form-group class="col">
                    <b-button variant="primary" class="mr-2" type="submit" id="search">Salvar</b-button>
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
    
}
</script>

<style scoped>
    @media (max-width: 400px) {
        .form-input{
            width: 300%;
        }
    }
</style>