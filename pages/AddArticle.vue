<template>
  <div id="addArticle">
    <el-row :gutter="5">
      <el-col :span="12">
        <el-input v-model="title" placeholder="请输入文章标题"/>
      </el-col>
      <el-col :span="6">
        <el-input v-model="weather" placeholder="输入天气"/>
      </el-col>
      <el-col :span="6">
        <el-input v-model="location" placeholder="输入位置"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <quill-editor
          ref="editor"
          v-model="content"
          :options="editorOption" />
<!--          @blur="onEditorBlur($event)"-->
<!--          @focus="onEditorFocus($event)"-->
<!--          @ready="onEditorReady($event)"-->

      </el-col>
    </el-row>
    <el-row>
      <el-col style="text-align: center">
        <el-button size="small" type="success" @click="addDairy">保存</el-button>
      </el-col>
    </el-row>
    <el-upload
      v-show="false"
      class="upload-demo"
      action="/api/uploadImage"
      :on-success="handleSuccess"
      :auto-upload="true"
      multiple
      :limit="3"
      :show-file-list="false">
      <el-button size="small" type="primary" id="upload">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>


</template>

<script>
  export default {
    name: 'AddArticle',
    data() {
      return {
        title: "",
        content: '',
        location: "",
        weather: "",
        editorOption: {
          // Some Quill options...
          theme: 'snow',
          modules: {
            toolbar: {
              container: [
                ['bold', 'italic', 'underline', 'strike'],
                //加粗，斜体，下划线，删除线
                ['blockquote', 'code-block'],     //引用，代码块
                [{'header': 1}, {'header': 2}],        // 标题，键值对的形式；1、2表示字体大小
                [{'list': 'ordered'}, {'list': 'bullet'}],     //列表
                [{'indent': '-1'}, {'indent': '+1'}],     // 缩进
                [{'size': ['small', false, 'large', 'huge']}], // 字体大小
                [{'header': [1, 2, 3, 4, 5, 6, false]}],     //几级标题
                [{'color': []}, {'background': []}],     // 字体颜色，字体背景颜色
                [{'font': []}],     //字体
                [{'align': []}],    //对齐方式
                ['clean'],    //清除字体样式
                ['image']    //上传图片、上传视频
              ],
              handlers: {
                'image':function (value) {
                  if(value){
                    document.querySelector('#upload').click()
                  } else {
                    this.quill.format('image',false)
                  }

                }
              }
            }
          }
        }
      }
    },
    methods:{
      addDairy(){
        this.$store.dispatch('addDairy/addDairy',{ title: this.title, content: this.content, location: this.location, weather: this.weather});
      },
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      handleSuccess (res) {
        // 获取富文本组件实例
        let quill = this.$refs.editor.quill;
        // 如果上传成功
        if (res) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片，res为服务器返回的图片链接地址
          quill.insertEmbed(length, 'image', res)
          // 调整光标到最后
          quill.setSelection(length + 1)
        } else {
          // 提示信息，需引入Message
          Message.error('图片插入失败')
        }
      },
    },
    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
  #addArticle {
    padding: 50px 40px 50px 40px;
  }

  /deep/ .quill-editor {
    min-height: 500px;
    overflow-y: auto;
  }

  /deep/ .ql-editor {
    min-height: 500px;
    overflow-y: auto;
  }

  .el-row {
    margin-bottom: 20px;
  }


</style>
