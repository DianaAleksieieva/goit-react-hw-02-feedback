(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a,c,o=n(1),d=n.n(o),r=n(9),i=n.n(r),s=(n(16),n(2)),b=n(3),l=n(5),u=n(4),j=n(7),h=n(8),g=h.a.div(a||(a=Object(j.a)(["\npadding:50px\n"]))),O=h.a.button(c||(c=Object(j.a)(["\nmargin: 20px;\npadding: 10px;\npadding-right:20px;\npadding-left: 20px;\n"]))),p=n(0),v=function(e){var t=e.title,n=e.good,a=e.neutral,c=e.bad,o=e.total,d=e.goodFeedbackPercent;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:t}),Object(p.jsxs)("p",{children:["Good: ",n]}),Object(p.jsxs)("p",{children:["Neutral: ",a]}),Object(p.jsxs)("p",{children:["Bad: ",c]}),Object(p.jsxs)("p",{children:["Total: ",o]}),Object(p.jsxs)("p",{children:["Positive feedback: ",d,"%"]})]})},k=function(e){var t=e.AddFeedback;return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{type:"button",name:"good",onClick:t,children:"Good"}),Object(p.jsx)(O,{type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(p.jsx)(O,{type:"button",name:"bad",onClick:t,children:"Bad"})]})},f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.feedbackOption,n=e.statistic,a=e.title;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:a}),Object(p.jsx)("div",{children:t}),Object(p.jsx)("div",{children:n})]})}}]),n}(d.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0,visible:!1},e.addFeedback=function(t){switch(t.target.name){case"good":e.setState((function(e){return{good:e.good+1}}));break;case"neutral":e.setState((function(e){return{neutral:e.neutral+1}}));break;case"bad":e.setState((function(e){return{bad:e.bad+1}}));break;default:return console.log("error")}e.countTotalFeedback(),e.countPositiveFeedbackPercentage(),e.showStatistic()},e.countTotalFeedback=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state,n=t.good,a=t.neutral,c=t.bad;return e.total=n+a+c+1,e.total},e.countPositiveFeedbackPercentage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state,n=t.good;return e.goodFeedbackPercent=((n+1)/e.total*100).toFixed(0),e.goodFeedbackPercent},e.showStatistic=function(){if(0!==e.total)return console.log(0!==e.total),void e.setState({visible:!0})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.good,n=e.neutral,a=e.bad;return Object(p.jsx)(g,{children:Object(p.jsx)(f,{title:"Please leave feadback",feedbackOption:Object(p.jsx)(k,{AddFeedback:this.addFeedback}),statistic:this.state.visible?Object(p.jsx)(v,{title:"Statistics",good:t,neutral:n,bad:a,total:this.total,goodFeedbackPercent:this.goodFeedbackPercent}):Object(p.jsx)("h2",{children:"No feedback given"})})})}}]),n}(d.a.Component);x.defaultProps={total:0,goodFeedbackPercent:0},i.a.render(Object(p.jsx)(d.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d8a1a3ac.chunk.js.map