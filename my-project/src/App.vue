<template>
  <v-app>
    <v-app-bar
      app
      class="grey darken-4"
      dark
    >
      <v-toolbar-title>Ryota ポートフォリオサイト</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          text
          small
        >
          <v-icon small >{{ item.icon }}</v-icon>
            {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
      height="400px"
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          >
          <v-list-item-icon left>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      
    <v-main>
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'mdi-home' },
        { title: 'Works', link: './works', icon: 'mdi-wrench' },
        { title: 'About', link: './about', icon: 'mdi-account' },
        { title: 'Contact', link: './contact', icon: 'mdi-email' },
      ]
    }
  },
};
</script>