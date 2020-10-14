<template>
    <div style="padding:10px">

    <b-card header="Alterar Senha de Usuário" style="margin-bottom:10px">
        <b-form inline >
            <b-form-group
            label-cols-sm="13"
            label="Nome:"
            label-for="Nome"
            ></b-form-group>
            <b-form-group
            label-cols-mb="0"
            label="[nome da pessoa]"
            label-for="Nome"
            ></b-form-group>
        </b-form>
        <b-form inline class="container-info">
            <b-form-group
            label-cols-sm="13"
            label="Matrícula:"
            label-for="Matrícula:"
            ></b-form-group>
            <b-form-group
            label-cols-mb="0"
            label="[matrícula da pessoa]"
            label-for="Nome"
            ></b-form-group>
        </b-form>

        <b-form inline >
            <b-form-group
            label-cols-sm="0"
            label="Alterar Senha:"
            class=" mt-3"
            > </b-form-group>
        </b-form>
        <b-form-group class="col">
            <b-form-input class="col-3 mb-4 mt-3" id="input-sm" placeholder="Nova senha"></b-form-input> 
            <b-form-input class="col-3 mb-4" id="input-sm" placeholder="Repita a nova senha"></b-form-input> 
        </b-form-group>

        <b-form-group inline class="col">
            <b-button variant="primary" class="mr-2" type="submit" id="search">Salvar</b-button>
            <router-link to="/usuario">
                <b-button variant="primary" class="mb-0" type="submit" id="search">Voltar</b-button>
            </router-link>     
        </b-form-group>
        
    </b-card>  
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .container-info{
        padding: 1% 0 1% 0;
    }
    .container-senha{
        margin: 2% 0% 0.1% 0;
    }
</style>