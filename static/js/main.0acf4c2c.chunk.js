(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),d=(n(12),n(0)),h=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.tick()}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.clockName,n=this.props.clockName;if(t!==n){var c="Renamed from ".concat(t," to ").concat(n);console.log(c)}}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"tick",value:function(){var e=new Date;console.log(e.toLocaleTimeString()),this.setState({date:e})}},{key:"render",value:function(){var e=this.state.date.toLocaleTimeString(),t=this.props.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e})]})]})}}]),n}(u.a.Component);function m(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var k=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:m()},e.timerId=0,e.handleRightClick=function(){e.setState({hasClock:!1})},e.handleLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick),this.timerId=window.setInterval((function(){e.setState({clockName:m()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleLeftClick),window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsx)(h,{clockName:n})})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0acf4c2c.chunk.js.map