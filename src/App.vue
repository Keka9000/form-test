<template>
  <v-app>
    <v-layout fill-height row pb-2>

      <sidebar/>

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

import Sidebar from '@/components/sidebar'

export default {
  name: 'App',

  components: {

    'sidebar': Sidebar

  },

  data: () => ({

    valid: true,
    orders: [],
    rules: {
      required: value => !!value || 'Пожалуйста, заполните поле',
      string: value => (typeof value === 'string') || 'Пожалуйста, введите строку',
      num: value => !isNaN(value) || 'Пожалуйста, введите числовое значение'
    },

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
