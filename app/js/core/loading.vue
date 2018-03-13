<template lang="html">
  <div :class="$style.loading">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" module>
@-webkit-keyframes loading{
  50%{
    transform: scale(0.4);
    opacity: 0.3;
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }
}
.loading{
  position: fixed;
  top: 50%;
  left: 50%;
  i{
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    background: #3e78c1;
    border-radius: 50%;
    &:nth-child(1){
      top: 25px;
      left: 0;
      -webkit-animation:loading 1s ease 0s infinite;
    }
    &:nth-child(2){
      top: 17px;
      left: 17px;
      -webkit-animation:loading 1s ease -0.12s infinite;
    }
    &:nth-child(3){
      top: 0;
      left: 25px;
      -webkit-animation:loading 1s ease -0.24s infinite;
    }
    &:nth-child(4){
      top: -17px;
      left: 17px;
      -webkit-animation:loading 1s ease -0.36s infinite;
    }
    &:nth-child(5){
      top: -25px;
      left: 0;
      -webkit-animation:loading 1s ease -0.48s infinite;
    }
    &:nth-child(6){
      top: -17px;
      left: -17px;
      -webkit-animation:loading 1s ease -0.6s infinite;
    }
    &:nth-child(7){
      top: 0;
      left: -25px;
      -webkit-animation:loading 1s ease -0.72s infinite;
    }
    &:nth-child(8){
      top: 17px;
      left: -17px;
      -webkit-animation:loading 1s ease -0.84s infinite;
    }
  }
}
</style>
