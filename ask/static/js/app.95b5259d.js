(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"2a02":function(t,e,s){"use strict";s("f0d5")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("vue-particles",{staticClass:"bg",attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),s("el-button",{staticClass:"change",attrs:{type:"text"},on:{click:t.change}},[t._v(t._s(t.changeName)),s("i",{staticClass:"el-icon-arrow-right el-icon--right"})]),s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated zoomInDown","leave-active-class":"animated zoomOutUp"}},[s("QuestionCard",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"qc"})],1),s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated zoomInUp","leave-active-class":"animated zoomOutUp"}},[s("QuestionEditor",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"qe"})],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{"body-style":{padding:"0px"}}},[s("el-row",{staticClass:"ButtonGroup",attrs:{type:"flex",justify:"space-between"}},[s("el-col",{staticStyle:{"text-align":"left"},attrs:{span:3}},[s("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left",circle:""},on:{click:t.prev}})],1),s("el-col",{staticStyle:{"text-align":"right"},attrs:{span:3}},[s("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-right",circle:""},on:{click:t.next}})],1)],1),s("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutLeft"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"CardApp"},[s("div",[s("div",{staticClass:"Before",class:t.isTop?"contain-Before":"",on:{click:t.handleBefore}},[s("el-card",{staticClass:"card",attrs:{shadow:"hover"}},[s("el-divider",[t._v("问")]),s("p",[t._v(t._s(t.question))]),s("div",{staticClass:"bottom clearfix"},[s("p",{staticClass:"tip"},[t._v(" *点击卡片以获取答案 ")])])],1)],1)]),s("div",{staticClass:"After",class:t.isTop?"contain-After":"",on:{click:t.handleAfter}},[s("el-card",{staticClass:"card",staticStyle:{"text-align":"left"},attrs:{shadow:"hover"}},[s("el-divider",[t._v("告诉你答案吧")]),s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[s("el-col",{attrs:{span:20}},[s("span",{staticStyle:{"text-align":"left"},domProps:{innerHTML:t._s(t.answer)}})])],1),s("div",{staticClass:"bottom clearfix"},[s("p",{staticClass:"tip"},[s("el-button",{attrs:{type:"text"},on:{click:[function(t){t.stopPropagation()},t.haveProblem]}},[t._v("有疑问？")]),s("br"),t._v(" *点击卡片以获取答案 ")],1)])],1)],1)])])],1)},r=[],c={name:"",props:{msg:String},data:function(){return{currentDate:new Date,isTop:!1,show:!0,question:"",answer:""}},created:function(){this.fetchData()},methods:{fetchData:function(){this.getOneQuestion()},handleBefore:function(){this.isTop||(this.isTop=!0)},handleAfter:function(){this.isTop&&(this.isTop=!1)},prev:function(){this.$message({message:"暂不支持此功能",type:"warning"})},next:function(){var t=this;this.show=!this.show,setTimeout((function(){t.handleAfter()}),100),setTimeout((function(){t.show=!t.show,t.getOneQuestion()}),500)},getOneQuestion:function(){var t=this;this.axios.get("/question/getOneQuestion").then((function(e){t.question=e.data.data.content,t.answer=e.data.data.answer}))},haveProblem:function(){this.$message({message:"憋着",type:"error"})}}},l=c,u=(s("7bc3"),s("2877")),d=Object(u["a"])(l,o,r,!1,null,"3c9b2813",null),h=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-card",{staticClass:"QACard",attrs:{shadow:"hover","body-style":{padding:"30px"}}},[s("div",{staticClass:"title qat",staticStyle:{}},[t._v("问题")]),s("div",{staticClass:"QEditor"},[s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入问题",clearable:""},on:{input:t.checkAndOpenSubmit},model:{value:t.question,callback:function(e){t.question=e},expression:"question"}},[s("el-select",{staticStyle:{width:"130px"},attrs:{slot:"prepend",placeholder:"请选择学科","allow-create":"",filterable:"","default-first-option":""},on:{change:t.checkAndOpenSubmit},slot:"prepend",model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}},t._l(t.subjects,(function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1),s("div",{staticClass:"title qat"},[t._v("解答")]),s("div",{staticClass:"AnsEditor"},[s("quill-editor",{ref:"myTextEditor",staticClass:"editor",attrs:{value:t.answer,options:t.editorOption},on:{change:t.onEditorChange}}),s("div",{staticClass:"output ql-snow"},[s("div",{staticClass:"title"},[s("i",{staticClass:"el-icon-view"}),t._v("预览")]),s("div",{staticClass:"ql-editor",domProps:{innerHTML:t._s(t.answer)}})])],1),s("div",{staticClass:"bottom"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-s-promotion",disabled:!t.canSubmit,round:""},on:{click:t.submit}},[t._v("提交")])],1)])],1)},f=[],m=(s("d3b7"),s("159b"),s("1487")),v=s.n(m),b=s("b047"),g=s.n(b),w=s("953d"),y=(s("0dbe"),s("a753"),s("8096"),{name:"quill-example-snow",title:"Theme: snow",components:{quillEditor:w["quillEditor"]},data:function(){return{editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{size:["small",!1,"large","huge"]}],[{color:[]},{background:[]}],[{align:[]}],["link"]],syntax:{highlight:function(t){return v.a.highlightAuto(t).value}}}},subjects:[],subject:"",question:"",answer:"",canSubmit:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.axios.get("/course/all").then((function(e){var s=e.data.code;200==s&&e.data.data.forEach((function(e){t.subjects.push(e.courseName)}))}))},onEditorChange:g()((function(t){this.answer=t.html,this.checkAndOpenSubmit()}),466),checkAndOpenSubmit:function(){""!==this.subject&&""!==this.question&&""!==this.answer?this.canSubmit=!0:this.canSubmit=!1},submit:function(){console.log(this.subject+" "+this.question+" "+this.answer);var t=this;this.axios.post("/question/insertOneQuestion",{courseName:this.subject,content:this.question,answer:this.answer}).then((function(e){console.log(e);var s=e.data.code,n=e.data.msg;200==s?t.$message({message:n,type:"success"}):t.$message({message:n+" 错误代码："+s,type:"error"})})).catch((function(e){console.log(e);var s=e.data.msg;t.$message({message:s,type:"error"})})),this.subject="",this.question="",this.answer=""}},computed:{editor:function(){return this.$refs.myTextEditor.quill},answerCode:function(){return v.a.highlightAuto(this.content).value}},mounted:function(){console.log("this is Quill instance:",this.editor)}}),x=y,C=(s("2a02"),Object(u["a"])(x,p,f,!1,null,"54ada234",null)),O=C.exports,_={name:"App",components:{QuestionCard:h,QuestionEditor:O},data:function(){return{show:!0,changeName:"我要新增题目"}},methods:{change:function(){this.show=!this.show,this.show?this.changeName="我要新增题目":this.changeName="我要做题"}}},j=_,k=(s("034f"),Object(u["a"])(j,a,i,!1,null,null,null)),q=k.exports,S=s("5c96"),T=s.n(S),E=(s("0fae"),s("77ed")),A=s.n(E),P=s("bc3a"),Q=s.n(P),N=s("98c9");n["default"].config.productionTip=!1,Q.a.defaults.baseURL="http://8.140.180.184:8081",n["default"].prototype.axios=Q.a,n["default"].use(T.a),n["default"].use(A.a),n["default"].use(N["a"]),new n["default"]({render:function(t){return t(q)}}).$mount("#app")},"7bc3":function(t,e,s){"use strict";s("ac60")},"85ec":function(t,e,s){},ac60:function(t,e,s){},f0d5:function(t,e,s){}});