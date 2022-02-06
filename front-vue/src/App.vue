<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="contacts"
      item-key="id"
      class="elevation-1"
      :search="search"
      :custom-filter="filteText"
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
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>
