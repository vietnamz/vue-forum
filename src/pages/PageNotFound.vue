<template>
    <div class="col-full"
          :class="$style.centered">
      <h1 :class="$style.headerLarge">Not Found</h1>
      <p :class="$style.textLarge">
        Ooops, We counldn't find what you're looking for.
        Why don't you <router-link :to="{name: 'Home'}"> go home instead?</router-link>
      </p>
    </div>
</template>

<script>
  export default {
    created () {
      this.$emit('ready')
    }
  }
</script>

<style module>
  .headerLarge {
    font-size: 100px;
  }
   .textLarge {
    font-size: 50px ;
    font-weight: lighter;
    }
  .centered {
    text-align: center;
  }
</style>
