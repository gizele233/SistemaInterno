<template>
  <div id="app">   
    <b-card style="margin-bottom:10px" title="Card Title" class="font-weight-bold" no-body>
      <b-navbar class="color-nav">
        <b-navbar-nav inline >
          <b-nav-item href="#" >Home</b-nav-item>
          <b-nav-item :to="{name:'telaUsuario'}">Usuário</b-nav-item>
          <b-nav-item :to="{name:'telaSistema'}">Sistema</b-nav-item>
          <b-nav-item :to="{name:'#'}">Sair</b-nav-item> 
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
