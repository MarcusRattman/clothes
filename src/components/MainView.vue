<script setup lang="ts">
  import { useItemsStore } from '../stores/itemsStore'

  const store = useItemsStore()
</script>

<template>
  <div class="container">
    <div class="content-left">
      <div class="choice-container">
        <div class="card" v-if="store.getChLeft.length == 0">
          None Selected
        </div>
        <div class="card" v-for="el in store.getChLeft" v-bind:key="el.id" v-on:click="store.removeChLeft(el.id)">
          ➖{{ el.name }}
        </div>
      </div>

      Selected {{ store.getChLeft.length }}/6

      <div class="left-container">
        <div class="card" v-for="el in store.getLeft" v-bind:key="el.id" v-on:click="store.chooseLeft(el.id)">
          ➕{{ el.name }}
        </div>
      </div>
    </div>

    <div class="content-right">
      <div class="card" v-if="!store.getChRight.id">
        None Selected
      </div>

      <div class="card" v-on:click="store.removeChRight" v-if="store.getChRight.id">
        ➖{{ store.getChRight.name }}
      </div>

      <div class="right-container">
        <div class="card" v-for="el in store.getRight" v-bind:key="el.id" v-on:click="store.chooseRight(el.id)">
          ➕{{ el.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 1rem;
  width: 60vw;
  grid-template-areas: "left right";
  grid-template-columns: 500px 500px;
}

.content-left, .content-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.left-container, .right-container, .choice-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.card {
  cursor: pointer;
  user-select: none;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  width: max-content;
  height: max-content;
}
.card:hover {
  border-color: var(--color-border-hover);
}

</style>
