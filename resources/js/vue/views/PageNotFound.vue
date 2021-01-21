<template>
  <div class="select-none">
    <the-shortcut />

    <p
      class="glitch text-base sm:text-2xl md:text-5xl leading-normal font-black"
      data-glitch="Unknown destination"
    >
      Unknown destination
    </p>

    <div
      class="px-16 pt-36 sm:px-36 sm:pt-48 md:px-36 md:py-52 text-lg sm:text-xl md:text-3xl leading-normal"
    >
      <p class="text-left tracking-wider leading-relaxed font-medium">
        Dear Explorer,
      </p>
      <p class="text-left tracking-wide leading-none">
        Navigation is quite easier with our navigation options. Kindly consider
        that.
      </p>
      <p class="text-right tracking-widest leading-loose font-bold">
        Warm Regards.
      </p>
    </div>

    <p
      class="fixed bottom-0 left-10 sm:left-1/4 md:left-1/3 text-xs sm:text-base leading-normal font-black"
    >
      We understand this is not where you want to be.
    </p>

    <div class="board-container">
      <div class="board">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TheShortcut from "../components/TheShortcut";

export default {
  components: {
    TheShortcut,
  },
};
</script>

<style scoped>
.glitch {
  text-decoration: none;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 25%;
  margin: 0;
  letter-spacing: 5px;
}

.glitch::before,
.glitch::after {
  display: block;
  content: attr(data-glitch);
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.8;
}

.glitch::after {
  color: #f0f;
  z-index: -2;
  animation: glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
    infinite;
}

.glitch::before {
  color: #0ff;
  z-index: -1;
  animation: glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}

@media only screen and (max-width: 768px) {
  .glitch {
    position: absolute;
    top: 0;
    left: 17.5%;
  }
}

@media only screen and (max-width: 420px) {
  .glitch {
    position: absolute;
    top: 0;
    left: 5%;
  }
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(-5px, -5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  80% {
    transform: translate(5px, -5px);
  }
  to {
    transform: translate(0);
  }
}

.board-container {
  position: absolute;
  bottom: -5%;
  left: 35%;
  display: grid;
  background: white;
  transform: scale(0.5);
  z-index: -100;
}

.board {
  margin: auto;
  height: 300px;
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.square:nth-child(even) {
  background: white;
  animation-delay: 1s;
}

.square:nth-child(odd) {
  background: #6d28d9;
  z-index: 1;
  position: relative;
}

.square:nth-child(5n + 1) {
  animation: rotate linear 5s infinite;
}

.square:nth-child(5n + 2) {
  animation: rotate linear 5s infinite;
  animation-delay: 0.25s;
}

.square:nth-child(5n + 3) {
  animation: rotate linear 5s infinite;
  animation-delay: 0.5s;
}

.square:nth-child(5n + 4) {
  animation: rotate linear 5s infinite;
  animation-delay: 0.75s;
}

.square:nth-child(5n + 5) {
  animation: rotate linear 5s infinite;
  animation-delay: 1s;
}

@keyframes rotate {
  10% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(45deg);
  }
  75% {
    transform: rotate(0);
  }
}

@media only screen and (max-width: 768px) {
  .board-container {
    position: absolute;
    left: 30%;
    transform: scale(0.4);
  }
}

@media only screen and (max-width: 420px) {
  .board-container {
    position: absolute;
    bottom: -12.5%;
    left: 12.5%;
    transform: scale(0.3);
  }
}
</style>
