(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aec5e810"],{"63e3":function(t,e,i){"use strict";var s=i("ac1c"),a=i.n(s);a.a},a8be:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[this.$route.params.id?i("router-view"):i("newmvchild")],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"filter_bar"},[i("div",{staticClass:"secition_bar"},[i("span",{staticClass:"secition"},[t._v("地区：")]),i("ul",{staticClass:"secition_tabs"},t._l(t.secitionData,(function(e,s){return i("li",{key:s,staticClass:"item",class:t.defaultSecition===e?"actived":"",on:{click:function(e){return t.isActivedSecition(s)}}},[t._v(t._s(e))])})),0)]),i("div",{staticClass:"type_bar"},[i("span",{staticClass:"type"},[t._v("类型：")]),i("ul",{staticClass:"type_tabs"},t._l(t.typeData,(function(e,s){return i("li",{key:s,staticClass:"item",class:t.defaultType===e?"actived":"",on:{click:function(e){return t.isActivedType(s)}}},[t._v(t._s(e))])})),0)]),i("div",{staticClass:"order_bar"},[i("span",{staticClass:"order"},[t._v("排序：")]),i("ul",{staticClass:"order_tabs"},t._l(t.orderData,(function(e,s){return i("li",{key:s,staticClass:"item",class:t.defaultOrder===e?"actived":"",on:{click:function(e){return t.isActivedOrder(s)}}},[t._v(t._s(e))])})),0)])]),i("div",{staticClass:"newmvs"},[i("div",{staticClass:"newmv_items"},t._l(t.mvsData,(function(e,s){return i("div",{key:s,staticClass:"mv_item"},[i("div",{staticClass:"mv_img",on:{click:function(i){return t.goMvDetail(e.id)}}},[i("img",{attrs:{src:e.cover}}),i("div",{staticClass:"mv_num"},[i("span",{staticClass:"iconfont"},[t._v("")]),i("span",[t._v(t._s(e.playCount))])])]),i("div",{staticClass:"mv_info"},[i("div",{staticClass:"name"},[t._v(t._s(e.name))])])])})),0),i("el-pagination",{attrs:{"current-page":t.pagenum,"page-sizes":[8,12,16],"page-size":t.pagesize,layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},c=[],u=i("2353"),l={name:"Newmvchild",data:function(){return{mvsData:[],secitionData:["全部","内地","港台","欧美","日本","韩国"],typeData:["全部","官方版","原声","现场版","网易出品"],orderData:["上升最快","最热","最新"],defaultSecition:"全部",defaultType:"全部",defaultOrder:"上升最快",pagesize:12,pagenum:1,total:0}},computed:{offset:function(){return(this.pagenum-1)*this.pagesize}},created:function(){this._getMV(this.defaultSecition,this.defaultType,this.defaultOrder,this.pagesize,this.offset)},methods:{_getMV:function(t,e,i,s,a){var n=this,c="https://autumnfish.cn/mv/all";Object(u["b"])(c,t,e,i,s,a).then((function(t){"OK"===t.statusText&&(t.data.count?(n.total=t.data.count,n.mvsData=t.data.data):n.mvsData=t.data.data)}))},isActivedSecition:function(t){this.defaultSecition=this.secitionData[t]},isActivedType:function(t){this.defaultType=this.typeData[t]},isActivedOrder:function(t){this.defaultOrder=this.orderData[t]},handleSizeChange:function(t){this.pagesize=t,this._getMV(this.defaultSecition,this.defaultType,this.defaultOrder,this.pagesize,this.offset),this.$message({message:"已切换当前显示条数",type:"success",showClose:!0})},handleCurrentChange:function(t){this.pagenum=t,this._getMV(this.defaultSecition,this.defaultType,this.defaultOrder,this.pagesize,this.offset)},goMvDetail:function(t){this.$router.push({path:"/newmv/".concat(t)})}},watch:{defaultSecition:function(t){this._getMV(t,this.defaultType,this.defaultOrder,this.pagesize,this.offset)},defaultType:function(t){this._getMV(this.defaultSecition,t,this.defaultOrder,this.pagesize,this.offset)},defaultOrder:function(t){this._getMV(this.defaultSecition,this.defaultType,t,this.pagesize,this.offset)}}},r=l,o=(i("63e3"),i("2877")),d=Object(o["a"])(r,n,c,!1,null,"33c5970c",null),f=d.exports,h={name:"Newmv",components:{Newmvchild:f}},p=h,v=Object(o["a"])(p,s,a,!1,null,"672abe66",null);e["default"]=v.exports},ac1c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-aec5e810.29b7d123.js.map