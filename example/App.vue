<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
          v-for="item in list"
          :key="item.path"
          :to="item.path"
          v-model="active"
          link
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{description}}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import routes from '@/routes'
  import 'highlight.js/styles/dark.css'
  export default Vue.extend({
    data: () => {
      return {
        drawer: true,
        list: routes,
        active: "1"
      }
    },
    computed: {
      description (): string {
        const routeItem = this.list.find(item => item.path === this.$route.path)
        return routeItem ? routeItem.des : ''
      }
    }
  })
</script>
<style>
  .v-application code {
    background: none;
    box-shadow: none;
    color: #fff;
  }
  .v-application code:after, .v-application code:before, .v-application kbd:after, .v-application kbd:before {
    content: "";
    letter-spacing: -1px;
  }
</style>
