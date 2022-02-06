<template>
  <div>
    <v-data-table
      v-if="!isContactsLoading"
      :headers="headers"
      :items="contacts"
      :items-per-page="10"
      item-key="id"
      class="elevation-1"
      :search="search"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="ml-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

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

<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      id: "",
      contacts: [],
    };
  },
  computed: {
    headers() {
      return [
        { text: "id", value: "id" },
        { text: "Name", value: "name" },
        { text: "Surname", value: "surname" },
        { text: "Description", value: "description" },
        { text: "Phone", value: "phone" },
      ];
    },
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
