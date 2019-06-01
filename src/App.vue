<template>
  <v-app>
    <v-layout fill-height row pb-2>

      <!-- левое меню -->
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


      <v-layout fill-height column ma-0>

        <v-toolbar dark color="secondary lighten-3">

          <v-toolbar-title class="white--text">Форма на основе полученных данных</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            :disabled="!valid"
            color="accent"
            @click="sendForm"
          >
            Сохранить
          </v-btn>

        </v-toolbar>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-container>
            <v-layout row ma-0>

              <v-flex xs3
                v-for="order in orders"
                :key="order.orderID"
              >
                <v-flex pb-2>

                  <span class="title">{{order.name}}</span>
                  <span class="title">{{order.orderID}}</span>

                </v-flex>

                <v-text-field
                  v-if="order.children"
                  v-for="field in order.children"
                  :key="field.id"
                  v-model="field.val"
                  :rules="field.validate ? [rules[field.validate], rules.required] : [rules.required]"
                  :label="field.name"
                  required
                ></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
        </v-form>

        <v-toolbar dark color="secondary lighten-3">

          <v-toolbar-title class="white--text">Данные из Vuex</v-toolbar-title>

        </v-toolbar>

        <v-layout column
          v-for="(order, index) in getOrdersFromStore"
          :key="index"
        >
          <v-flex xs1 pa-4>
            <span class="title">{{order.name}}: </span>
            <span class="title">{{order.orderID}}</span>
          </v-flex>

          <v-flex xs1 px-4 py-0
            v-for="field in order.children"
            :key="field.id"
          >
            <span class="subheading">{{field.name}}: </span>
            <span class="subheading">{{field.val}}</span>
          </v-flex>

        </v-layout>

      </v-layout>

    </v-layout>
  </v-app>
</template>

<script>

//импортирую структуру из тестового задания
import loadedFields from '@/assets/data/fields.js'

export default {
  name: 'App',

  data: () => ({

    valid: true,
    orders: [],
    rules: {
      required: value => !!value || 'Пожалуйста, заполните поле',
      string: value => (typeof value === 'string') || 'Пожалуйста, введите строку',
      num: value => !isNaN(value) || 'Пожалуйста, введите числовое значение'
    },
    search: ''

  }),

  computed: {

    getOrdersFromStore () {

      return this.$store.getters.getOrders

    },

  },

  created: function () {

    this.setup()

  },

  methods: {

    //пересобираю данные во вложенную структуру "parent-children"
    setup: function () {

      var _data = loadedFields,
      _orders = []

      _data.forEach((item) => {
        if(item.parent === 0) {
          let _group = item
          _group.children = []
          _data.forEach((child) => {
            if(child.orderID === _group.orderID && child.parent === 1) {
              _group.children.push(child)
            }
          })
          _orders.push(_group)
        }
      })

      this.orders = _orders

    },

    //сохраняю структуру во Vuex
    sendForm () {

        if (this.$refs.form.validate()) {

          let _orders = JSON.parse(JSON.stringify(this.orders[0]))
          this.$store.dispatch('addOrder', _orders)

        }

    },

  }

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
