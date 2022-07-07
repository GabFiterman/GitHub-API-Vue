<!-- Primeiro ponto de renderização do projeto -->
<template>
  <header>
    <!-- lembrando que ':' é o mesmo que utilizar v-bind, permitindo associar o valor 
    de propriedades à variáveis -->
    <img class="img-Destaque" :src="imgDestaque" :alt='altDestaque' />
    <div class="title-info">
      <!-- se a variável for utilizada diretamente como valor da tag, e não propriedade,
      basta colocar entre {{ var }} -->
      <h1>{{ tituloPrincipal }}</h1>
      <p>Developed by: <span>{{ autor }}</span></p>
    </div>
  </header>
  <!-- renderização do componente FormulárioBusca -->
  <FormularioBusca />    
</template>

<script>
// importação do componente
import FormularioBusca from '../components/FormularioBusca.vue';

export default {
  name: 'Home',
  // declaração dos componentes utilizados
  components: {
    FormularioBusca
  },
  data() {
    return {
      // variáveis do componente
      imgDestaque: '/image/Mascote_GitHub.png',
      altDestaque: 'Octocat, mascote do GitHub',
      tituloPrincipal: 'API GitHub com Vue',
      autor: 'Gabriel Fiterman'
    }
  }
}
</script>

<style>

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
