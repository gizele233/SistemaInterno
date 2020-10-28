<template>
  <div style="padding: 10px">
    <b-card header="Editar Grupos" style="margin-bottom: 10px">
      <b-form inline>
        <b-form-group label-cols-sm="11" label="Nome:" label-for="Nome">
        </b-form-group>
        <b-form-group label-cols-sm="0" label-for="Nome">
          {{ usuario.servidor.nome }}
        </b-form-group>
      </b-form>
      <b-form inline class="container-info">
        <b-form-group label-cols-sm="11" label-for="Matrícula">
          <b-form-group
            label-cols-sm="0"
            label="Matrícula:"
            label-for="Matrícula"
          >
            {{ usuario.matricula }}
          </b-form-group>
        </b-form-group>
      </b-form>

      <!-- selects -->
      <div>
        <b-form inline>
          <b-form-group
            class="label-select"
            label-cols-sm="0"
            label="Sistema:"
            label-for="filterInput"
          >
            <b-form-select
              class="container-select w-50"
              v-model="sistemaSelecionado"
              :options="sistemaOptions"
              @change="selectChange()"
            >
            <template v-slot:first>
                <b-form-select-option value></b-form-select-option>
            </template>
        </b-form-select>
             
        
            
                Selected: {{ sistemaSelecionado }}
                
            
          </b-form-group>
          <b-form-group
            class="label-select"
            label-cols-mb="0"
            label="Grupo:"
            label-for="filterInput"
          >
            <b-form-select
              class="container-select w-20"
              v-model="selectGrupo"
             
              :options="grupoOptions"
            >
            <template v-slot:first>
                <b-form-select-option value></b-form-select-option>
            </template>
            </b-form-select>
          </b-form-group>
          <b-button
            variant="primary"
            class="container-select"
            type="submit"
            id="search"
            >Adicionar</b-button
          >

        </b-form>
      </div>
      <div class="mt-3">
        <b-table
          sticky-header
          hover
          :items="grupos"
          :fields="fields"
          head-variant="light"
        >
          <template v-slot:cell(Remover)>
            <b-button variant="danger" class="icon-acao">
              <b-icon icon="x" aria-hidden="true"></b-icon>
            </b-button>
          </template>
        </b-table>
      </div>
      <div>
        <b-form-group class="col">
          <b-button variant="primary" class="mr-2" type="submit" id="search"
            >Salvar</b-button
          >
          <router-link to="/usuario">
            <b-button variant="primary" class="mb-0" type="submit" id="search"
              >Voltar</b-button
            >
          </router-link>
        </b-form-group>
      </div>
    </b-card>
  </div>
</template>

<script>
import Usuarios from "@/services/usuarios.js";
import Grupos from "@/services/grupo.js";
import Sistemas from "@/services/sistema.js";
export default {
  data() {
    return {
      usuarioId: this.$route.params.usuarioId,
      usuario: {},
      sistemaSelecionado:{},
      grupos: [],
      grupo: [],
      sistemas: [],
      sistema: [],
      selectGrupo: "",
      selectedId: {},
      gruposSistema: [],
      fields: [
        { key: "grupoUsuario.sistema.nome", label: "Sistema" },
        { key: "grupoUsuario.nome", label: "Grupo" },
        { key: "Remover", label: "Remover Grupo" },
      ],
    };
  },
  methods: {
    selectChange() {
      Grupos.recuperarGrupoPorSistema(1).then(result =>{
          console.log("teste: " + this.sistemaSelecionado);
          this.gruposSistema = result.data
      });
    },
  },

  computed: {
    sistemaOptions() {
      return this.sistemas.map((s) => ({ text: s.nome, value: s.sistemaId }));
    },
    grupoOptions() {
      return this.gruposSistema.map((g) => ({
        text: g.nome,
        value: g.grupoUsuarioId,
      }));
    },
  },
  created() {

    Usuarios.recuperarUsuarioID(this.usuarioId).then((result) => {
      this.usuario = result.data;
      Grupos.recuperarGrupo(this.usuarioId).then((result) =>{
          (this.grupos = result.data)
      });
    });
    Sistemas.recuperarSistemas().then((result) => {
      this.sistemas = result.data;
    });
    console.log(this.sistemaOptions)
  },
};
</script>

<style scoped>
.container-info {
  padding: 0 0 1% 0;
}
.container-select {
  margin: 0 0% 1% 1%;
}
.label-select {
  margin: 0 12% 1% 2%;
}
</style>