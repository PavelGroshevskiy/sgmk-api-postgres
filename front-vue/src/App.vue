<template>
  <div>
    <button @click="fetchTable"></button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async fetchTable() {
      try {
        const response = await axios.get("localhost:5001/contacts/");
        console.log(response);
      } catch (e) {
        alert("Something go wromg");
      }
    },
  },
};
</script>

<style></style>
