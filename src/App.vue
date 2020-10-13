<template>
  <div id="app">   
    <b-card style="margin-bottom:10px" title="Card Title" no-body>
      <b-navbar class="color-nav">
        <b-navbar-nav inline >
          <b-nav-item href="#" active>Home</router-link></b-nav-item>
          <b-nav-item :to="{name:'telaUsuario'}" active>Usuário</b-nav-item>
          <b-nav-item :to="{name:'telaSistema'}" active>Sistema</b-nav-item>
          <b-nav-item :to="{name:'#'}">Sair</b-nav-item>
            <b-button class="icon-acao button-sair">
              <b-icon icon="x" aria-hidden="true"></b-icon>
            </b-button>
          
        </b-navbar-nav>
      </b-navbar>
    </b-card>   
    <router-view/>
  </div>
</template>

<style scoped>
  .color-nav{
    background: #F7F7F7;
    color: black;
  }

  .button-sair{
    margin-left: 448%;
  }
  @media (max-width: 360px) {
    .button-sair{
      margin-left: 30%;
    }
  }
 
</style>
