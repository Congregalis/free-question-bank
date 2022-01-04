
<template>
  <div>
    <el-card class="QACard" shadow="hover" :body-style="{ padding: '30px' }">
      <div class="title qat" style="margin-botton=10px">问题</div>
      <div class="QEditor">
        <el-input
          placeholder="请输入问题"
          v-model="question"
          clearable
          @input="checkAndOpenSubmit"
          class="input-with-select"
        >
          <el-select
            v-model="subject"
            slot="prepend"
            placeholder="请选择学科"
            style="width: 130px"
            @change="checkAndOpenSubmit"
            allow-create
            filterable
            default-first-option
          >
            <el-option
              v-for="item in subjects"
              :key="item"
              :label="item"
              :value="item" />
          </el-select>
        </el-input>
      </div>
      <div class="title qat">解答</div>
      <div class="AnsEditor">
        <quill-editor
          class="editor"
          ref="myTextEditor"
          :value="answer"
          :options="editorOption"
          @change="onEditorChange"
        />
        <!-- <div class="output code">
        <code class="hljs" v-html="contentCode"></code>
      </div> -->
        <div class="output ql-snow">
          <div class="title"><i class="el-icon-view"></i>预览</div>
          <div class="ql-editor" v-html="answer"></div>
        </div>
      </div>
      <div class="bottom">
        <el-button type="primary" icon="el-icon-s-promotion" @click="submit" :disabled="!canSubmit" round>提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
// import dedent from "dedent";
import hljs from "highlight.js";
import debounce from "lodash/debounce";
import { quillEditor } from "vue-quill-editor";

// highlight.js style
import "highlight.js/styles/tomorrow.css";

// import theme style
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

export default {
  name: "quill-example-snow",
  title: "Theme: snow",
  components: {
    quillEditor,
  },
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ size: ["small", false, "large", "huge"] }],
            // [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["link"],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
      },
      subjects: [],
      subject: "",
      question: "",
      answer: "",
      canSubmit: false
    };
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.axios.get('/course/all')
      .then(response => {
        var code = response.data.code
        if (code == 200) {
          response.data.data.forEach(element => {
            this.subjects.push(element.courseName);
          });
        }
      });
    },
    onEditorChange: debounce(function (value) {
      this.answer = value.html;
      this.checkAndOpenSubmit();
    }, 466),
    // onEditorBlur(editor) {
    //   console.log("editor blur!", editor);
    // },
    // onEditorFocus(editor) {
    //   console.log("editor focus!", editor);
    // },
    // onEditorReady(editor) {
    //   console.log("editor ready!", editor);
    // },
    checkAndOpenSubmit() {
      if (this.subject !== "" && this.question !== "" && this.answer !== "")
        this.canSubmit = true;
      else
        this.canSubmit = false;
    },
    submit() {
      console.log(this.subject + " " + this.question + " " + this.answer);
      var that = this;
      this.axios.post('/question/insertOneQuestion', {
        courseName: this.subject,
        content: this.question,
        answer: this.answer
      })
      .then(function (response) {
        console.log(response);
        var code = response.data.code
        var msg = response.data.msg
        if (code == 200) {
          that.$message({
            message: msg,
            type: "success",
          });
        } else {
          that.$message({
            message: msg + " 错误代码：" + code,
            type: "error",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        var msg = error.data.msg
        that.$message({
          message: msg,
          type: "error",
        });
      });

      this.subject = "";
      this.question = "";
      this.answer = "";
    },
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    },
    answerCode() {
      return hljs.highlightAuto(this.content).value;
    },
  },
  mounted() {
    console.log("this is Quill instance:", this.editor);
  },
};
</script>

<style lang="scss" scoped>
.QACard {
  width: 70%;
  margin: auto;
  // margin-top: 35px;
}
.QEditor {
  margin-bottom: 3%;
}
.AnsEditor {
  display: flex;
  height: 30rem;
  overflow: hidden;
  margin-bottom: 3%;

  .editor,
  .output {
    width: 50%;
  }

  $toolbar-height: 65px;

  .editor {
    padding-bottom: $toolbar-height;
    border-bottom: 1px solid #ccc;

    .ql-custom-button {
      width: 100px;
    }
  }

  .output {
    border: 1px solid #ccc;
    border-left: none;

    .title {
      height: $toolbar-height;
      line-height: $toolbar-height;
      padding-left: 10px;
      border-bottom: 1px solid #ccc;
    }
  }
}
.title {
  font-family: Arial, sans-serif;
  font-size: 16px;
  // text-align: center;
}
.qat {
  margin-bottom: 10px;
}
.el-icon-view {
  margin-right: 6px;
}
.bottom {
  font-size: 13px;
  color: #999;
  text-align: right;
  margin-bottom: 0%;
}
</style>