webpackJsonp([5],{rM9e:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={data:function(){return{content:"<p>hello world</p>",editorOption:{}}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},methods:{onEditorReady:function(t){},onEditorBlur:function(){},onEditorFocus:function(){},onEditorChange:function(){},saveHtml:function(t){console.log(this.content)}}},i={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"rich-text"},[o("div",{on:{click:t.saveHtml}},[t._v("保存")]),t._v(" "),o("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(n){return t.onEditorBlur(n)},focus:function(n){return t.onEditorFocus(n)},change:function(n){return t.onEditorChange(n)}},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)},staticRenderFns:[]},r=o("VU/8")(e,i,!1,null,null,null);n.default=r.exports}});
//# sourceMappingURL=5.283f69d300f410aa7045.js.map