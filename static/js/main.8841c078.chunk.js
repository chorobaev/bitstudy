(this["webpackJsonpbit-study"]=this["webpackJsonpbit-study"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/car.311692cf.png"},30:function(e,t,a){e.exports=a(52)},35:function(e,t,a){},4:function(e,t,a){e.exports=a.p+"static/media/logo-big.0babc352.png"},41:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/whatsapp-512.6db49ff4.png"},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(35),a(53)),s=a(3),i=Object(s.a)(),m=a(25);function u(e){var t=e.component,a=(e.isPrivate,Object(m.a)(e,["component","isPrivate"]));return r.a.createElement(o.a,Object.assign({},a,{component:t}))}u.defaultProps={isPrivate:!1};var p=a(6),h=a(7),d=a(9),v=a(8),b=a(10),f=a(4),E=a.n(f),g=a(29),y=(a(21),a(28)),N=a.n(y);function k(e){var t=Math.round(e.percentage);t<0&&(t=0),t>100&&(t=100);var a=.88*t+12;return r.a.createElement("div",{className:"progress-track"},r.a.createElement("div",{className:"track"},r.a.createElement(w,{percentage:a})),r.a.createElement("div",{className:"progress-wrapper"},r.a.createElement("span",{className:"progress"},t,"%")))}function w(e){return r.a.createElement("div",{className:"car-engine",style:{width:"".concat(e.percentage,"%")}},r.a.createElement("img",{className:"car",src:N.a,alt:"car"}))}function O(e){return r.a.createElement("div",{className:"number-wrapper"},r.a.createElement("span",{className:"number"}," = ",e.value))}function C(e){var t=function(e){var t=Math.floor(e/60);e%=60;var a="";return a+=t.toString().length<2?"0".concat(t,":"):"".concat(t,":"),a+=e.toString().length<2?"0".concat(e):e.toString()}(e.time);return r.a.createElement("div",{className:"timer-wrapper"},r.a.createElement("span",{className:"timer"},t))}function j(e){return r.a.createElement("button",{className:"three-d",onClick:e.onClick},e.text)}var A=["#de3f2e","#008aca","#c3b82c","#e95d24","#fbbc33","#de3f2e","#008aca","#c3b82c"],S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this,e))).handleBitClick=function(e){console.log(e);var t=a.state.bits;t[e]=0===t[e]?1:0,a.setState({bits:t}),function(e,t){var a=M(e);return console.log("Actual num: ".concat(t,",  From bytes: ").concat(a)),t===a}(a.state.bits,a.props.value)&&(a.props.onSolved(),a.setState({bits:new Array(8).fill(0)})),a.props.onAction()},a.state={bits:new Array(8).fill(0)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=[];this.state.bits.forEach((function(a,n){t.push(r.a.createElement(x,{key:n,value:a,onClick:function(){return e.handleBitClick(n)},color:A[n]}))}));var a=this.props.calcOn?M(this.state.bits):this.props.value;return r.a.createElement("div",{className:"byte"},t,r.a.createElement(O,{value:a}))}}]),t}(r.a.Component);function x(e){return r.a.createElement("button",{className:"bit",onClick:e.onClick,style:{backgroundColor:e.color}},e.value)}function M(e){var t=Object(g.a)(e),a=0;return t.reverse().forEach((function(e,t){a+=e*Math.pow(2,t)})),a}a(22),a(41);var B=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handlePlay",value:function(){i.push({pathname:"/bitstudy/game",state:{}})}},{key:"handleHelp",value:function(){i.push("/bitstudy/help")}},{key:"handleAbout",value:function(){i.push("/bitstudy/about")}},{key:"render",value:function(){return r.a.createElement("header",{className:"main"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement(j,{onClick:this.handlePlay,text:"Play"}),r.a.createElement("div",{className:"separator-margin"}),r.a.createElement(j,{onClick:this.handleHelp,text:"Help"}),r.a.createElement("div",{className:"separator-margin"}),r.a.createElement(j,{onClick:this.handleAbout,text:"About"}))}}]),t}(r.a.Component),P=a(16),z=a.n(P);a(50);z.a.setAppElement("#root");var F={content:{top:"50%",left:"50%",right:"auto",width:"70%",maxWidth:"400px",bottom:"auto",backgroundColor:"#282c34",borderRadius:"16px",marginRight:"-50%",transform:"translate(-50%, -50%)"}};function I(e){var t=e.time,a=Math.floor(t/60),n=t%60,c="".concat(0!==a?"".concat(a," minutes and "):"").concat(0===n&&a>0?"":n," seconds");return r.a.createElement(z.a,{isOpen:e.opened,onAfterOpen:function(){},onRequestClose:e.onClose,style:F,contentLabel:"Finished Dialog",shouldCloseOnOverlayClick:!1},r.a.createElement("div",{className:"dialog"},r.a.createElement("div",null,r.a.createElement("div",{className:"dialog"},r.a.createElement("h2",{className:"white"},"You won!")),r.a.createElement("p",{className:"white"},"Your time penalty is ",c,"."),r.a.createElement("div",{className:"dialog-content"},r.a.createElement("button",{className:"btn-restart",onClick:function(){e.onClose()}},"Restart")))))}a(51);var H=function(e,t){return Math.floor(Math.random()*(t-e))+e},R=function(e){for(var t=[],a=0;a<e;a++){var n=Math.floor(255/e),r=a*n,c=(a+1)*n+255%e;t.push(H(r,c))}return t},T=10,q=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this,e))).startTimer=function(){var e=setInterval((function(){a.isFinished()?clearInterval(e):a.setState((function(e){return{time:e.time+1}}))}),1e3)},a.isFinished=function(){return a.state.level>=a.state.size},a.handleSolved=function(){a.setState((function(e){return{level:e.level+1}}))},a.restart=function(){a.setState({time:0,level:0,problems:R(a.state.size)})},a.handleByteClick=function(){0===a.state.time&&a.startTimer()},a.state={time:0,size:T,level:0,problems:R(T)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.restart()}},{key:"render",value:function(){var e=100*this.state.level/this.state.size,t=this.state.problems[this.state.level],a=this.isFinished();return r.a.createElement("div",{className:"main"},r.a.createElement(I,{time:this.state.time,opened:a,onClose:this.restart}),r.a.createElement("div",null,r.a.createElement(C,{time:this.state.time}),r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"})),r.a.createElement("div",{className:"game"},r.a.createElement(k,{percentage:e}),r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"controller"},r.a.createElement(S,{value:t,onSolved:this.handleSolved,onAction:this.handleByteClick,calcOn:a}))))}}]),t}(r.a.Component);function W(){return r.a.createElement("div",{className:"main"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("h3",{className:"title"},"Help"),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Tha aim of this game is to equalize a given bite in binary number system to a decimal number that is on the right side of the equality sign."),r.a.createElement("p",null,"In order to win, you have to solve 10 problems step by step. Given problems will get harder as you solve a problem."),r.a.createElement("p",null,"An indicator of your success is the timer which determines your problem solving speed.")))}function D(e){return r.a.createElement("div",{className:"main"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("h3",{className:"title"},"About"),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"This game was created to heps students who are new in binary world."),r.a.createElement("p",null,"Bit Study is steel being developed."),r.a.createElement("p",null,"If you have any suggestions you can reach me at",r.a.createElement("a",{href:"https://gmail.com",style:{color:"white"}}," chorobaev.nurbol@gmail.com"))))}function J(){return r.a.createElement(o.c,null,r.a.createElement(u,{path:"/",exact:!0,component:B}),r.a.createElement(u,{path:"/bitstudy/help",component:W}),r.a.createElement(u,{path:"/bitstudy/game",component:q}),r.a.createElement(u,{path:"/bitstudy/about",component:D}),r.a.createElement(u,{component:B}))}var Y=function(){return r.a.createElement(o.b,{history:i},r.a.createElement("div",{className:"App"},r.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.8841c078.chunk.js.map