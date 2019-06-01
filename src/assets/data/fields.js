export default [
    {

      "id": "1", // id поля

      "name": "Заказ", // название

      "code": "order", // код, в input используется как name

      "type": "group", // тип поля. group для группировки всех поля

      "orderID": 1, // сортировка

      "parent": 0, // этот параметр говорит какое поля родительское. 0 это верхний уровень

      "val": "all" // значение, в input используется как value

    },

    {

        "id": "2",

        "name": " Габаритность ",

        "code": "gab",

        "type": "input",

        "orderID": 1,

        "parent": 1,

        "val": "rps",

    },

    {

        "id": "3",

        "name": " тоннажность ",

        "code": "ton",

        "type": "input",

        "orderID": 1,

        "parent": 1,

        "val": 2,

        "validate": "num"

    },

    {

        "id": "4",

        "name": "Станция",

        "code": "station",

        "type": "input",

        "orderID": 1,

        "parent": 1,

        "val": 2,

        "validate": "string"

    }
  ]
