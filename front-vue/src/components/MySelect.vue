<template>
  <v-select :items="headers" v-model="headers.id" label="label"></v-select>
</template>

<script>
export default {
  name: "my-select",
};
</script>

<style></style>
