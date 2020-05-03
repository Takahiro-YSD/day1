(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(t,e,n){t.exports=n.p+"img/be70d7d.jpg"},221:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},[e("img",{staticClass:"card-img-top",attrs:{src:n(217),alt:"Card image cap",height:"500",width:"auto"}}),this._v(" "),e("div",{staticClass:"col-md-6 px-0"},[e("h1",{staticClass:"display-4 font-italic"},[this._v("axiosの使い方")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron jumbotron-fluid p-0"},[e("pre",[this._v("            "),e("code",[this._v("\n    async asyncData() {\n      const url = 'https://jsonplaceholder.typicode.com/users'\n      const { data } = await axios.get(url)\n      return {\n        items: data,\n      }\n    }\n            ")]),this._v("\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("id")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("name")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron jumbotron-fluid p-0"},[e("pre",[this._v("                "),e("code",[this._v("\n    async asyncData() {\n      const url = 'https://jsonplaceholder.typicode.com/users'\n      const params = {\n          'id' : '123',\n          'name' : 'Yoshida',\n      }\n      const res = await axios.post(url,params)\n      return {\n          item: res.data\n      }\n                ")]),this._v("\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("id")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("name")])])])}],o=(n(52),n(19)),c=n(62),l=n.n(c),_={data:function(){return{message:"テスト"}},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,r,data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://jsonplaceholder.typicode.com/users?ID=12345",n={id:"123",name:"Yoshida"},t.next=4,l.a.get(e);case 4:return r=t.sent,data=r.data,t.next=8,l.a.post(e,n);case 8:return o=t.sent,t.abrupt("return",{items:data,item:o.data});case 10:case"end":return t.stop()}}),t)})))()}},v=n(44),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("main",{attrs:{role:"main"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 blog-main"},[n("h3",{staticClass:"pb-4 mb-4 font-italic border-bottom"},[t._v("\n          axios.getとaxios.post\n        ")]),t._v(" "),n("div",{staticClass:"blog-post"},[n("h2",[t._v("axios.get")]),t._v(" "),n("p",[t._v("データを取得するAPIで使用")]),t._v(" "),n("p",[t._v("今回は、ブラウザからhttps://jsonplaceholder.typicode.com/usersにアクセスしusersのデータを所得")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("データからidとnameをBootstrapのTablesを使用して表示")]),t._v(" "),n("table",{staticClass:"table table-hover table-striped"},[t._m(2),t._v(" "),n("tbody",t._l(t.items,(function(e,i){return n("tr",{key:1},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))])])})),0)]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("h2",[t._v("axios.post")]),t._v(" "),n("p",[t._v("POSTメソッドを使うと新規にデータを登録することが可能")]),t._v(" "),n("p",[t._v("ブラウザからhttps://jsonplaceholder.typicode.com/usersにアクセスしusersのデータを所得。POSTメソッドによりid, nameの項目を持つデータを追加")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("登録したidとnameをBootstrapのTablesを使用して表示")]),t._v(" "),n("table",{staticClass:"table table-hover table-striped"},[t._m(4),t._v(" "),n("tbody",[n("th",{attrs:{scope:"row"}},[t._v(t._s(t.item.id))]),t._v(" "),n("td",[t._v(t._s(t.item.name))])])])])])])])])}),r,!1,null,null,null);e.default=component.exports}}]);