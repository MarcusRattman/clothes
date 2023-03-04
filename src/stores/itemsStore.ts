import { defineStore } from 'pinia'

interface IItem {
  id: number,
  name: string,
}

export const useItemsStore = defineStore('items', {
  state: () => ({
    itemsLeft: Array<IItem>(
      {
        id: 1,
        name: "Shoes 1"
      },
      {
        id: 2,
        name: "Shoes 2"
      },
      {
        id: 3,
        name: "Shoes 3"
      },
      {
        id: 4,
        name: "Shoes 4"
      },
      {
        id: 5,
        name: "T-shirt 1"
      },
      {
        id: 6,
        name: "T-shirt 2"
      },
      {
        id: 7,
        name: "T-shirt 3"
      },
      {
        id: 8,
        name: "T-shirt 4"
      }),
    chosenLeft: Array<IItem>(),
    
    itemsRight: Array<IItem>(
      {
        id: 11,
        name: "Jacket 1"
      },
      {
        id: 12,
        name: "Jacket 2"
      },
      {
        id: 13,
        name: "Jacket 3"
      },
      {
        id: 14,
        name: "Jacket 4"
      },
      {
        id: 15,
        name: "Hoodie 1"
      },
      {
        id: 16,
        name: "Hoodie 2"
      },
      {
        id: 17,
        name: "Hoodie 3"
      },
      {
        id: 18,
        name: "Hoodie 4"
      }),
    chosenRight: { id: 0, name: "" },
  }),

  getters: {
    getLeft(state): IItem[] {
      return state.itemsLeft
    },
    getRight(state): IItem[] {
      return state.itemsRight
    },
    getChLeft(state): IItem[] {
      return state.chosenLeft
    },
    getChRight(state): IItem {
      return state.chosenRight as IItem
    }
  },

  actions: {
    chooseLeft(id: number) {
      if(this.getChLeft.length < 6) {
        const item = this.getLeft.find((it) => it.id == id)
        this.itemsLeft = this.itemsLeft.filter((it) => it.id != id)
        this.chosenLeft.push(item!)
      }
    },
    chooseRight(id: number) {
      if(!this.getChRight.id) {
        const item = this.getRight.find((it) => it.id == id)
        this.itemsRight = this.itemsRight.filter((it) => it.id != id)
        this.chosenRight = item!
      }
    },
    removeChLeft(id: number) {
      const item = this.getChLeft.find((it) => it.id == id)
      this.chosenLeft = this.chosenLeft.filter((it) => it.id != id)
      this.itemsLeft.push(item!)
    },
    removeChRight() {
      const item = this.getChRight
      this.chosenRight = { id: 0, name: ""}
      this.itemsRight.push(item!)
    },
  },
})
