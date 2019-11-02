const state = { menuItems: {
    1: {
      name: "Margherita1234",
      description:
        "A delicious tomato based pizza topped with mozzarella",
      options: [
        {
          size: 9,
          price: 6.95
        },
        {
          size: 12,
          price: 10.95
        }
      ]
    },
    2: {
      name: "Peparoni",
      description:
        "A delicious tomato based pizza topped with mozzarella",
      options: [
        {
          size: 9,
          price: 6.95
        },
        {
          size: 12,
          price: 10.95
        }
      ]
    },
    3: {
      name: "4 formaggi",
      description:
        "A delicious tomato based pizza topped with mozzarella",
      options: [
        {
          size: 9,
          price: 6.95
        },
        {
          size: 12,
          price: 10.95
        }
      ]
    }
  }
}

const getters = {
    getMenuItems: state => state.menuItems //can access to getter in the menuItems
}

const mutations = {

}

const actions = {

}

export default {
    state,
    mutations,
    getters,
    actions
}