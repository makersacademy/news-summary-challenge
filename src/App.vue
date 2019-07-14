<template>
  <v-app light>
  <!--The Side Menu component go here -->  
  <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
    <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">News Summary App</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <!--The Main Content component go here-->  
    </v-container>
   </v-content>
   <v-footer class="secondary" app>
<v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made by
             <a class="white--text" href="https://github.com/petraartep" target="_blank">Petra</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>

</template>
<script>
export default {
  data () {
    return {
      drawer: true,
    }
  },
}
</script>