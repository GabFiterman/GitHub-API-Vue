<template>
  <RouterView />
  <!-- <h1>teste</h1> -->

</template>

<script>


export default{
  name: 'App',
  methods: {
    test(){
    }
  },
  mounted(){
    this.test();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root{
  --color-background: #302E37;
  --color-destaque-escuro: #0B0A0D;
  --color-destaque-claro: #C4C4C4;
  --color-branco: #EAEAEA;
  --color-contraste: #00E676;
  --color-contraste-claro:#5CFEAF;
  --color-contraste-escuro: #02793F;
}

body{
  font-family: 'Poppins';
  font-size: 16px;
  margin: 4% 12%;
  color: var(--color-branco);
}

button{
  border: none;
  border-radius: 2rem;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0.75rem 1.55rem;
  background-color: var(--color-branco);
  color: var(--color-background);
  transition: all 0.75s;
}

button:hover{
  cursor: pointer;
  filter: brightness(1.25);
}

.button-contrast{
  background-color: var(--color-contraste);
  color: var(--color-destaque-escuro);
}
</style>