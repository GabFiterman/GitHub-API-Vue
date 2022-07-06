<template>
  <header>
    <img class="img-Destaque" :src="imgDestaque" :alt='altDestaque' />
    <div class="title-info">
      <h1>{{ tituloPrincipal }}</h1>
      <p>Developed by: <span>{{ autor }}</span></p>
    </div>
  </header>
  <FormularioBusca />    
</template>

<script>
import FormularioBusca from '../components/FormularioBusca.vue';

export default {
  name: 'Home',
  components: {
    FormularioBusca
  },
  data() {
    return {
      imgDestaque: '/image/Mascote_GitHub.png',
      altDestaque: 'Octocat, mascote do GitHub',
      tituloPrincipal: 'API GitHub com Vue',
      autor: 'Gabriel Fiterman'
    }
  }
}
</script>

<style>
body {
  background-color: #302E37;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-info {
  line-height: 0.5rem;
  margin-left: 2rem;
}

.title-info h1 {
  font-size: 3.5rem;
  text-transform: uppercase;
}

.title-info p {
  letter-spacing: 0.32rem;
}

.title-info span {
  color: var(--color-contraste);
}

.img-Destaque{
  max-width: 15rem;
}

</style>
