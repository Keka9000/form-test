<template>

  <v-navigation-drawer
    permanent
    flat
    width="400"
  >
    <v-layout fill-height column ma-0 justify-space-between>

      <v-flex xs12 pa-4>

        <v-layout px-2 my-4>

          <v-flex xs6 px-1 align-self-end>
            <v-layout ma-0>
              <v-flex xs7 class="error"></v-flex>
              <v-flex px-1>
                <span class="body-2">Федеральная грузовая компания</span>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-divider vertical></v-divider>

          <v-layout align-center justify-space-around >
            <span class="subheading font-weight-bold">ДВИЖУЩАЯ СИЛА</span>
          </v-layout>

        </v-layout>

        <v-text-field
          v-model="search"
          prepend-inner-icon="search"
          label="Поиск"
          single-line
          hide-details
          class="pa-3"
        ></v-text-field>

        <v-list>
          <v-list-tile avatar v-ripple style="cursor: pointer">
            <v-list-tile-avatar>
              <v-icon class="error">query_builder</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Договоры</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar v-ripple style="cursor: pointer">
            <v-list-tile-avatar>
              <v-icon class="error">swap_vertical_circle</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Оперирование</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-flex>

      <v-layout column fill-height ma-0 px-4 align-center justify-space-between>

        <v-flex xs2 class="banner mx-4 px-0 py-2">

          <v-layout column fill-height ma-0 pa-2 align-center justify-space-between>

            <v-flex px-3 pt-2 pb-0 align-self-start>
              <div>
                <span class="title font-weight-bold">Зимой дешевле</span>
              </div>

              <div>
                <span class="body-2 font-weight-regular">Закажи вагон зимой, чтобы сэкономить весной</span>
              </div>
            </v-flex>

            <v-spacer></v-spacer>

            <v-btn
              block
              color="error"
              @click=""
            >
              Создать заявку
            </v-btn>

          </v-layout>

        </v-flex>

        <v-flex xs2 class="menu__footer px-0 py-2">

          <v-layout column fill-height ma-0 px-4 align-center justify-space-between>

            <v-flex pa-0 pt-2 mx-4 align-self-start>

              <v-icon x-large class="grey--text text--lighten-1">public</v-icon>
              <v-icon x-large class="grey--text text--lighten-1">public</v-icon>
              <v-icon x-large class="grey--text text--lighten-1">public</v-icon>
              <v-icon x-large class="grey--text text--lighten-1">public</v-icon>

            </v-flex>

            <v-flex pa-0 mx-4 align-self-start>

              <div>
                <span class="body-2 font-weight-regular grey--text text--lighten-1">&#169 2019 АО &#171 Федеральная грузовая компания &#187</span>
              </div>

            </v-flex>

          </v-layout>

        </v-flex>

      </v-layout>

    </v-layout>

  </v-navigation-drawer>

</template>

<script>

  export default {

    data: () => ({

      search: ''

    })

  }

</script>

<style>

  .banner {

    min-height: 200px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;

  }

  .menu__footer {

    min-height: 100px;
    box-sizing: border-box;

  }

</style>
