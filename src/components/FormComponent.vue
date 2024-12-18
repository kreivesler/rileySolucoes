<scrip setup>

</scrip>

<template>
<form>
  <label for="">Nome da empresa:</label>
  <input type="text" required >

  <label for="">CNPJ:</label>
  <input type="text" required >

  <label for="">Nome do responsável:</label>
  <input type="text" name="" id="" required >

  <label for="">Informe seu email:</label>
  <input type="email" required>

  <label for="">Informe seu celular:</label>
  <input type="tel" id="" pattern="[0-9]{3}-[0-9]{1}-[0-9]{4}-[0-9]{4}" required >

  <label for="services">Selecione o serviço:</label>
  <input list="listaServicos" id="services" type="text">
  <datalist id="listaServicos">
    <option value="Site Institucional"></option>
    <option value="Landing Page"></option>
    <option value="Otimização de Site"></option>
    <option value="Consultoria e Suporte"></option>
    <option value="Outros"></option>
  </datalist>

</form>
</template>

<style scoped>

</style>
