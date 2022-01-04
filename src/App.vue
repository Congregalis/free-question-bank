<template>
  <div id="app">
    <!-- <vue-particles class="bg" color="#dedede" :bg="true">
    </vue-particles> -->
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="bg"
    >
    </vue-particles>
    <el-button type="text" @click="change" class="change"
      >{{ changeName }}<i class="el-icon-arrow-right el-icon--right"></i
    ></el-button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated zoomInDown"
      leave-active-class="animated zoomOutUp"
    >
      <QuestionCard class="qc" v-show="show" />
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated zoomInUp"
      leave-active-class="animated zoomOutUp"
    >
      <QuestionEditor class="qe" v-show="!show" />
    </transition>
  </div>
</template>

<script>
import QuestionCard from "./components/QuestionCard.vue";
import QuestionEditor from "./components/QuestionEditor.vue";

export default {
  name: "App",
  components: {
    QuestionCard,
    QuestionEditor,
  },
  data() {
    return {
      show: true,
      changeName: "我要新增题目"
    };
  },
  methods: {
    change() {
      this.show = !this.show;
      if (this.show)
        this.changeName = "我要新增题目";
      else
        this.changeName = "我要做题";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.bg {
  width: 100%;
  position: absolute;
  z-index: 0;
}
.qc {
  position: relative;
  z-index: 1;
}
.qe {
  position: relative;
  z-index: 1;
}
.change {
  left: 20px;  
  position: relative;
  z-index: 1;
}
</style>
