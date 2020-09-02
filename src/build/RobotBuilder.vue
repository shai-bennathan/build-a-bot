<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[selectedHeadIndex].src" title="head"/>
        <button v-on:click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[selectedLeftArmIndex].src" title="left arm"/>
        <button v-on:click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[selectedTorseIndex].src" title="torso"/>
        <button v-on:click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[selectedRightArmIndex].src" title="right arm"/>
        <button v-on:click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="availableParts.bases[selectedBaseIndex].src" title="base"/>
        <button v-on:click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';

function prevIndex(curIndex, array) {
  return curIndex === 0 ? array.length - 1 : curIndex - 1;
}

function nextIndex(curIndex, array) {
  return curIndex === array.length - 1 ? 0 : curIndex + 1;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorseIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0,
    };
  },
  methods: {
    selectNextHead() {
      this.selectedHeadIndex = nextIndex(
        this.selectedHeadIndex, this.availableParts.heads,
      );
    },
    selectPreviousHead() {
      this.selectedHeadIndex = prevIndex(
        this.selectedHeadIndex, this.availableParts.heads,
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = nextIndex(
        this.selectedLeftArmIndex, this.availableParts.arms,
      );
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = prevIndex(
        this.selectedLeftArmIndex, this.availableParts.arms,
      );
    },
    selectNextTorso() {
      this.selectedTorseIndex = nextIndex(
        this.selectedTorseIndex, this.availableParts.torsos,
      );
    },
    selectPreviousTorso() {
      this.selectedTorseIndex = prevIndex(
        this.selectedTorseIndex, this.availableParts.torsos,
      );
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = nextIndex(
        this.selectedRightArmIndex, this.availableParts.arms,
      );
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = prevIndex(
        this.selectedRightArmIndex, this.availableParts.arms,
      );
    },
    selectNextBase() {
      this.selectedBaseIndex = nextIndex(
        this.selectedBaseIndex, this.availableParts.bases,
      );
    },
    selectPreviousBase() {
      this.selectedBaseIndex = prevIndex(
        this.selectedBaseIndex, this.availableParts.bases,
      );
    },
  },
};
</script>

<style>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>
