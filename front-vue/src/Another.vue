<template>
  <v-app>
    <div id="app">
      <v-data-table
        v-if="!isContactsLoading"
        :headers="headers"
        :items="contacts"
        :sortBy="item"
        :items-per-page="4"
        item-key="name"
        class="elevation-1"
        :search="search"
        :custom-filter="filterText"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
        }"
      >
        <template #header> </template>
      </v-data-table>

      <div v-else>
        <template>
          <v-data-table
            item-key="name"
            class="elevation-1"
            loading
            loading-text="Loading... Please wait"
          ></v-data-table>
        </template>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  data() {
    return {
      headers: [
        { text: "id", value: "id" },
        { text: "Name", value: "name" },
        { text: "Surname", value: "surname" },
        { text: "Description", value: "description" },
        { text: "Phone", value: "phone" },
      ],
      contacts: [],
      isContactsLoading: false,
    };
  },
  methods: {
    async getContacts() {
      try {
        this.isContactsLoading = true;
        const response = await axios.get(
          // "https://jsonplaceholder.typicode.com/posts"
          "http://localhost:5002/contacts/"
        );
        response.data.forEach((e) => {
          this.contacts.push(e);
        });

        // this.name = response.data;
        // console.log(response.data);
      } catch (e) {
        alert("Something went wrong");
      } finally {
        this.isContactsLoading = false;
      }
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>
