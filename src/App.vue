<template>
  <div class="app">
    <button
      @click="
        () => {
          addCount();
        }
      "
    >
      Counter: {{ counter }}
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0,
  }),

  methods: {
    addCount() {
      this.counter++;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    font-size: 30px;
    background: #050;
    color: #fff;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
}
</style>