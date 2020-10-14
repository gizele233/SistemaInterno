<template>
    <div style="padding:10px">
        <b-card header="Editar Sistema" style="margin-bottom:10px">
            <b-form-group class="col">
                <b-form-group
                    label-cols-sm="0"
                    label="Nome:"
                > </b-form-group>
                <b-form-input class="col-3 mb-4" id="input-sm"></b-form-input>

                <b-form-group
                    label-cols-sm="0"
                    label="Sigla:"
                > </b-form-group>
                <b-form-input class="col-3 mb-4" id="input-sm"></b-form-input>
            </b-form-group>
            
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
    .container-info{
        padding: 0 0 1% 0;
    }
    .container-select{
        margin: 0 0% 1% 2%;
    }
    .label-select{
        margin: 0 12% 1% 2%;
    }
    .container-senha{
        margin: 2% 0% 0.1% 0;
    }
</style>