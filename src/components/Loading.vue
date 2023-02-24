<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
    .spin {
        display: block;
        width: 40px;
        height: 40px;
        margin: 30px auto;
        border: 3px solid transparent;
        border-radius: 50%;
        border-top-color: teal;
        animation-name: spin; 
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }

    @keyframes spin {
        to { transform: rotateZ(360deg); }
    }
</style>