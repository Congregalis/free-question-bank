<template>
  <div :body-style="{ padding: '0px' }">
    <el-row type="flex" class="ButtonGroup" justify="space-between">
      <el-col :span="3" style="text-align: left;">
        <el-button type="primary" icon="el-icon-arrow-left" @click="prev" circle></el-button>
      </el-col>
      <el-col :span="3" style="text-align: right;">
        <el-button type="primary" icon="el-icon-arrow-right" @click="next" circle></el-button>
      </el-col>
    </el-row>
    <transition 
        name="custom-classes-transition"
        enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutLeft">
      <div class="CardApp" v-show = "show">
        <div>
          <div class="Before" :class="isTop  ? 'contain-Before' : ''" @click="handleBefore">
            <el-card shadow="hover" class="card">
                <!-- <span>问</span>  -->
                <el-divider>问</el-divider>
                <p>{{ question }}</p>
                <div class="bottom clearfix">
                    <!-- <time class="time">{{ currentDate }}</time> -->
                    <p class="tip"> *点击卡片以获取答案 </p>
                    <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                </div>
            </el-card>
          </div>
        </div>
        <div class="After" :class="isTop  ? 'contain-After' : ''" @click="handleAfter">
          <el-card shadow="hover" class="card" style="text-align: left">
              <!-- <span>告诉你答案吧</span> -->
              <el-divider>告诉你答案吧</el-divider>
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="20">
                  <span v-html="answer" style="text-align: left"></span>
                </el-col>
              </el-row>
              <div class="bottom clearfix">
                  <p class="tip">
                    <el-button type="text" @click.stop @click="haveProblem">有疑问？</el-button><br>
                     *点击卡片以获取答案 
                  </p>
                  <!-- <el-button type="text" class="button">操作按钮</el-button> -->
              </div>
          </el-card>
        </div>
      </div>
    </transition>
    <!-- <el-row class="ButtonGroup">
      <el-col :span="16"></el-col>
      <el-col :span="6">
        <el-button type="text">有疑问？</el-button>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    msg: String
  },
  data() {
    return {
      currentDate: new Date(),
      isTop:false,
      show: true,
      question: "",
      answer: ""
    };
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.getOneQuestion();
    },
    handleBefore(){
      if(!this.isTop){
            this.isTop = true
        }
    },
    handleAfter(){
      if(this.isTop){
          this.isTop = false
      }
    },
    prev() {
      this.$message({
        message: '暂不支持此功能',
        type: 'warning'
      });
    },
    next() {
      this.show = !this.show
      // do get next...
      setTimeout(() => {
        this.handleAfter()
      }, 100);
      setTimeout(() => {
        this.show = !this.show
        this.getOneQuestion()
      }, 500);
    },
    getOneQuestion() {
      this.axios.get('/question/getOneQuestion')
      .then(response => {
        this.question = response.data.data.content;
        this.answer = response.data.data.answer;
      });
    },
    haveProblem() {
      this.$message({
        message: '憋着',
        type: 'error'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .tip {
    font-size: 13px;
    color: #999;
    text-align: right;
    margin-bottom: 0%;
  }

  .ButtonGroup {
    width: 85%;
    left: 0; right: 0; top: 0; bottom: 0;
    margin: auto;
    margin-top: 55px;
    text-align: right;
    position: absolute;
  }

  .button {
    padding: 0;
  }


  /* .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  } */

.CardApp{
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* margin-top: 1%; */
  box-sizing: border-box;
}
.card {
  padding: 0px;
  text-align: center;
  /* padding-bottom: 7px; */
}
.Before{
  width: 70%;
  position: absolute;
  left:0; right:0; top:0; bottom:0;
  margin:auto;
  background-repeat: no-repeat;
  background-position: center center;
  backface-visibility: hidden;
  transition: 1.5s;
}
.After{
  width: 70%;
  position: absolute;
  left:0; right:0; top:0; bottom:0;
  margin:auto;
  color: #fff;
  background-color:#fff;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: 1.5s;
}
.CardApp .contain-Before{
    transform: rotateY(180deg);
}
.CardApp .contain-After{
    transform: rotateY(0deg);
}
</style>
