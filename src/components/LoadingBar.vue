<template>
  <div class="loading-bar app-loading"></div>
</template>
<style>
.loading-bar {
  display: block;
  -webkit-animation: shift-rightwards 1s ease-in-out infinite;
  -moz-animation: shift-rightwards 1s ease-in-out infinite;
  -ms-animation: shift-rightwards 1s ease-in-out infinite;
  -o-animation: shift-rightwards 1s ease-in-out infinite;
  animation: shift-rightwards 1s ease-in-out infinite;
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  -o-animation-delay: 0.4s;
  animation-delay: 0.4s;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  z-index: 800;
  background: #60d778;
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
}

@-webkit-keyframes shift-rightwards {
  0% {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  40% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  60% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  100% {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@-moz-keyframes shift-rightwards {
  0% {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  40% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  60% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  100% {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@-o-keyframes shift-rightwards {
  0% {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  40% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  60% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  100% {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@keyframes shift-rightwards {
  0% {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  40% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  60% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  100% {
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>
