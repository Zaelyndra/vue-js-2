<template>
  <div class="game">
    <img :src="`${gameBoxArtUrl}`" alt="">
    <div class="game__details">
      <div class="game__detailsText">
        <h4>{{ gameName }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: {
    gameName: String,
    gameBoxArtUrl: String
  }
}
</script>

<style lang="scss" scoped>
.game {
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  width: 240px;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 20px;

  &__details {
    display: flex;
    margin-top: 25px;

    & > img {
      object-fit: contain;
      height: 60px;
      margin-right: 10px;
    }
  }
}
</style>