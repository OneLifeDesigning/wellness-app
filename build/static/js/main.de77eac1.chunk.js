(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{210:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(0),c=n.n(a),i=n(35),o=n.n(i),s=(n(210),n(52)),d=n.n(s),u=n(139),l=n(75),j=n(51),b=n(72),m=n(202),p=n(387),h=n(390),O=n(388),f=n(48),x=n(391),g=n(386),y=Object(a.createContext)(),v=function(){return Object(a.useContext)(y)},w=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(j.a)(n,2),i={data:c[0],setData:c[1]};return Object(r.jsx)(y.Provider,{value:i,children:t})},C=n(175),I=n.n(C).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"http://localhost:3010/",withCredentials:!0});I.interceptors.response.use((function(e){return e.data}),(function(e){var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&(localStorage.clear(),window.location.assign("/")),Promise.reject(e)}));var S=function(){return I.get("/data")},k=function(e,t){return I.patch("/data/".concat(e),t)},F=n(389),T=n(392),B=n(393),D=n(50),E=function(e){var t=e.handleSubmit,n=e.handleAdd,c=function(){var e=Object(l.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.validateFields();case 2:n=e.sent,(r=Object.values(n).some((function(e){return!e})))?u(r):t(n),setTimeout((function(){u(!1)}),3500);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=Object(a.useState)(!1),o=Object(j.a)(i,2),s=o[0],u=o[1],b=p.a.useForm(),m=Object(j.a)(b,1)[0];return Object(r.jsxs)("div",{children:[s&&Object(r.jsx)(F.a,{style:{marginBottom:5},message:"All inputs is required",type:"error"}),Object(r.jsxs)(p.a,{form:m,style:{display:"flex",justifyContent:"space-between",width:"100%",backgroundColor:"#eaeaea",margin:0,padding:10},children:[Object(r.jsx)(p.a.Item,{style:{marginBottom:0,marginRight:5},children:Object(r.jsx)(f.a,{onClick:n,type:"dashed",danger:!0,shape:"circle",icon:Object(r.jsx)(T.a,{})})}),Object(r.jsx)(p.a.Item,{type:"date",name:"date",style:{marginBottom:0},children:Object(r.jsx)(O.a,{placeholder:"Date",style:{width:"95%"}})}),Object(r.jsx)(p.a.Item,{name:"hours",style:{marginBottom:0},children:Object(r.jsx)(h.a,{placeholder:"Hours",style:{width:"95%",marginBottom:0}})}),Object(r.jsx)(p.a.Item,{name:"consumition",style:{marginBottom:0},children:Object(r.jsx)(h.a,{placeholder:"Consumition",style:{width:"95%"}})}),Object(r.jsx)(p.a.Item,{name:"price",style:{marginBottom:0},children:Object(r.jsx)(h.a,{placeholder:"Price",style:{width:"95%"}})}),Object(r.jsx)(p.a.Item,{name:"cost",style:{marginBottom:0},children:Object(r.jsx)(h.a,{placeholder:"Cost",style:{width:"95%"}})}),Object(r.jsx)(p.a.Item,{style:{marginBottom:0},children:Object(r.jsxs)(f.a,{style:{backgroundColor:D.green[6],borderColor:D.green[6],color:"#FFF"},onClick:c,children:[Object(r.jsx)(B.a,{})," Save"]})})]})]})},N=n(118),P=n.n(N),_=n(394),A=n(395),R=function(e){var t=e.editing,n=e.dataIndex,a=(e.title,e.inputType,e.record,e.index,e.children),c=Object(m.a)(e,["editing","dataIndex","title","inputType","record","index","children"]);return Object(r.jsx)("td",Object(b.a)(Object(b.a)({},c),{},{children:t?"date"!==n?Object(r.jsx)(p.a.Item,{name:n,style:{margin:0},children:Object(r.jsx)(h.a,{min:0,style:{width:"100%"}})}):Object(r.jsx)(p.a.Item,{name:n,style:{margin:0},type:"date",children:Object(r.jsx)(O.a,{style:{width:"100%"}})}):a}))},L=function(){var e=v(),t=e.data,n=e.setData,c=p.a.useForm(),i=Object(j.a)(c,1)[0],o=Object(a.useState)(""),s=Object(j.a)(o,2),m=s[0],h=s[1],O=Object(a.useState)(!1),y=Object(j.a)(O,2),w=y[0],C=y[1],S=function(e){return e.id===m},F=function(){h("")},N=function(e){var r=t.filter((function(t){return e!==t.id}));n(r),function(e){I.delete("/data/".concat(e))}(e),h("")},L=function(){C((function(e){return!e}))},H=function(){var e=Object(l.a)(d.a.mark((function e(r){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i=r,I.post("/data/",i);case 2:return a=e.sent,c=Object(u.a)(t),e.next=6,P()(a.date).format("L");case 6:a.date=e.sent,c.unshift(a),h(""),n(c),setTimeout((function(){C((function(e){return!e}))}),500);case 11:case"end":return e.stop()}var i}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(d.a.mark((function e(r){var a,c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.validateFields();case 3:a=e.sent,c=Object(u.a)(t),(o=c.findIndex((function(e){return r===e.id})))>-1?(s=c[o],c.splice(o,1,Object(b.a)(Object(b.a)({},s),a)),n(c),h("")):(c.push(a),n(c),h("")),k(r,a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Validate Failed:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),U=[{title:"Date",dataIndex:"date",width:"16%",editable:!0,key:"date",sorter:{compare:function(e,t){return new Date(e.date)-new Date(t.date)}}},{title:"Hours",dataIndex:"hours",key:"hours",width:"12%",editable:!0,sorter:{compare:function(e,t){return Number(e.hours)-Number(t.hours)}}},{title:"Consumition",dataIndex:"consumition",key:"consumition",width:"12%",editable:!0,sorter:{compare:function(e,t){return Number(e.consumition)-Number(t.consumition)}}},{title:"Price",dataIndex:"price",key:"price",width:"12%",editable:!0,sorter:{compare:function(e,t){return Number(e.price)-Number(t.price)}}},{title:"Cost",dataIndex:"cost",key:"cost",width:"18%",editable:!0,sorter:{compare:function(e,t){return Number(e.cost)-Number(t.cost)}}},{title:"Operation",dataIndex:"operation",key:"operation",width:"15%",render:function(e,t){return S(t)?Object(r.jsxs)("span",{children:[Object(r.jsx)(f.a,{type:"primary",onClick:function(){return K(t.id)},shape:"circle",icon:Object(r.jsx)(B.a,{}),style:{backgroundColor:D.green[6],borderColor:D.green[6],color:"#FFF",marginRight:5}}),Object(r.jsx)(x.a,{title:"Sure to delete?",onConfirm:function(){return N(t.id)},children:Object(r.jsx)(f.a,{type:"danger",shape:"circle",icon:Object(r.jsx)(_.a,{}),style:{marginRight:5}})}),Object(r.jsx)(x.a,{title:"Sure to cancel?",onConfirm:F,children:Object(r.jsx)(f.a,{type:"dashed",shape:"circle",icon:Object(r.jsx)(T.a,{})})})]}):Object(r.jsxs)(f.a,{type:"primary",disabled:""!==m,onClick:function(){return function(e){i.setFieldsValue(Object(b.a)({date:"",hours:"",consumition:"",price:"",cost:""},e)),h(e.id)}(t)},children:[Object(r.jsx)(A.a,{})," Edit"]})}}].map((function(e){return e.editable?Object(b.a)(Object(b.a)({},e),{},{onCell:function(t){return{record:t,inputType:"date"===e.dataIndex?"date":"number",dataIndex:e.dataIndex,title:e.title,editing:S(t)}}}):e}));return Object(r.jsxs)("div",{style:{width:"100%"},children:[w?Object(r.jsx)("div",{style:{display:"flex",marginTop:16,marginBottom:16},children:Object(r.jsx)(E,{handleSubmit:H,handleAdd:L})}):Object(r.jsx)(f.a,{onClick:L,type:"primary",style:{marginBottom:16,marginTop:16},children:"Add a new"}),Object(r.jsx)(p.a,{form:i,component:!1,children:Object(r.jsx)(g.a,{components:{body:{cell:R}},rowKey:function(e){return e.id},bordered:!0,dataSource:t,columns:U,rowClassName:"editable-row",pagination:{onChange:F}})})]})},H=function(e,t){var n=Object(a.useState)({loading:!0,data:null,error:null}),r=Object(j.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){return e(t).then(function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===t||void 0===t?void 0:t.map((function(e){return e.date=P()(e.date).format("L")}));case 2:i({loading:!1,data:t,error:null});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){i({loading:!1,data:null,error:e})})),function(){}}),[e,t]),{loading:c.loading,data:c.data,error:c.error}},K=n(396),U=function(){return Object(r.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[Object(r.jsx)(K.a,{style:{fontSize:"80px",color:D.blue[9]}}),Object(r.jsx)("br",{}),"Cargando..."]})},V=n(195);var W=function(){var e=H(S),t=e.data,n=e.loading,c=v().setData;return Object(a.useEffect)((function(){return t&&c(t),function(){}}),[t,c]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(V.Content,{style:{backgroundColor:"#f4f3ef",padding:"50px",width:"100vw",minHeight:"100vh",display:"flex",alignContent:"stretch",alignItems:"center"},children:n?Object(r.jsx)(U,{}):Object(r.jsx)(L,{data:t})})})},J=n(198),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,397)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J.a,{children:Object(r.jsx)(w,{children:Object(r.jsx)(W,{})})})}),document.getElementById("root")),q()}},[[384,1,2]]]);
//# sourceMappingURL=main.de77eac1.chunk.js.map