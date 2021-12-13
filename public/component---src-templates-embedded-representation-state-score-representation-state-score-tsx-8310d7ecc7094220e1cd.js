"use strict";(self.webpackChunksod=self.webpackChunksod||[]).push([[865],{2872:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(4578),n=r(7294),c=r(9507),i=r(4618),l=r(393),o=r(2021),s=r(4562),d=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var r=t.prototype;return r.declareTranslateCollection=function(){return"criteriaGrade"},r.render=function(){var e=this.props,t=e.descriptions,r=e.averageScore,a=e.averagePercent,c=e.cycleScores,d=e.overallGrade,m=e.overallPercentage,u=e.overallScore,p=e.title,v=e.isDecimal,f=e.simpleMode,h=void 0!==f&&f,g=["row c-criteria-grade__container",h?"is-simple":""].join(" "),_=c.map((function(e){return{cycle:e.cycle,score:e.score,weight:e.weight}}));return n.createElement("div",{className:"c-criteria-grade"},n.createElement("h3",{className:"c-score__title"},p),n.createElement("div",{className:g},n.createElement("div",{className:"col-md-4 c-criteria-grade__col"},n.createElement("div",{className:"c-criteria-grade__wrap"},n.createElement(l.Z,{grade:d,size:o.P.LARGE}),n.createElement("div",{className:"c-criteria__info"},n.createElement("span",{className:"c-criteria-grade__overall"},u),n.createElement("span",{className:"c-criteria-grade__average"},this.translate("avg")+":"+r)))),n.createElement("div",{className:"col-md-7 offset-md-1 c-criteria-grade__col"},n.createElement("div",{"data-name":"chart",className:"c-criteria-grade__chart"},n.createElement(i.Z,{overallGrade:d,chartPoints:_})))),!h&&n.createElement("div",{className:"row c-criteria-grade__container c-criteria--raw"},n.createElement("div",{className:"col-md-4 c-criteria-grade__col"},n.createElement("div",{className:"c-criteria-grade__wrap"},n.createElement(s.Z,{boxValue:m,isDecimal:v}),n.createElement("div",{className:"c-criteria__info"},n.createElement("span",{className:"c-criteria-grade__overall"},this.translate("rawScore")),n.createElement("span",{className:"c-criteria-grade__average"},this.translate("avg")+":"+a+(v?" ":" %"))))),t&&t.length>0?n.createElement("div",{className:"col-md-7 offset-md-1 c-criteria-grade__col"},t.map((function(e,t){return n.createElement(n.Fragment,{key:t},n.createElement("p",{className:"c-criteria-grade__desc"},e),n.createElement("br",null))}))):n.createElement(n.Fragment,null)))},t}(c.Z)},4562:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(4578),n=r(7294),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.boxValue,r=e.isDecimal,a=void 0!==r&&r;return n.createElement("div",{className:"c-percent-box"},n.createElement("div",{className:"c-percent-box__percent"},t+(a?" ":"%")))},t}(r(9507).Z)},1716:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(5245),n=r(4578),c=r(7294),i=r(9507),l=["children","shareName"],o=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,r=e.shareName,n=(0,a.Z)(e,l);return c.createElement("div",Object.assign({"data-id":"share","data-name":r},n,{style:{pointerEvents:"none"}}),t)},t}(i.Z)},5294:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var a=r(4578),n=r(5444),c=r(7294),i=r(5741),l=r(9507),o=r(4471),s=r(2872),d=r(1716),m=r(2726),u=r(7897),p=r(1938),v=r(9486),f=r(4682),h=r(3049),g=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var r=t.prototype;return r.declareTranslateCollection=function(){return"stateRepresentationTemplate"},r.render=function(){var e=this.props.data.representationTotal,t=this.populateAverageData(f.D4.TOTAL).value,r=this.populateOverallData(f.D4.TOTAL),a=r.state,l=r.value,g=r.grade,_=r.score,E=e.nodes.map((function(e){var t=e.cycle,r=e.score,a=e.weight;return{cycle:t,score:Math.round(100*r),weight:a}}));return c.createElement(c.Fragment,null,c.createElement(m.Z,{type:u.a.SUMMARY,title:a+" "+this.translate("scoreTitle"),description:this.translate("firstScoreDescription"),imageResourceFileName:"embedded-representation-score-"+(0,i.generateUrlForStates)(a)+".png"}),c.createElement(o.Z,{className:"c-section--embed"},c.createElement(d.Z,{className:"c-embed__wrap",shareName:"representation-score-"+(0,i.generateUrlForStates)(a)},c.createElement("div",{className:"c-embed__box"},c.createElement("div",{className:"c-embed__state"},a),c.createElement(s.Z,{title:this.translate("scoreTitle"),averageScore:Math.round(100*t),averagePercent:Math.round(100*t),overallPercentage:Math.round(100*l),cycleScores:E,overallGrade:g,overallScore:Math.round(100*_)})),c.createElement("div",{className:"c-embed__logo"},c.createElement(n.Link,{to:h.A.HOME},c.createElement(p.Z,{width:"111",viewBox:"0 0 208 44",paths:[{command:v.Y.STATE_OF_DEMOCRACY,fill:"#0D0C0D"},{fillRule:"evenodd",clipRule:"evenodd",command:v.Y.LOGO_EAST,fill:"#C7AFF0"},{fillRule:"evenodd",clipRule:"evenodd",command:v.Y.LOGO_WEST,fill:"#4A1D96"}]}))))))},r.populateOverallData=function(e){var t;return null!==(t=this.props.data.overall.nodes.find((function(t){return t.component===e})))&&void 0!==t?t:{code:"NA",component:e,cycle:f.MM.OVERALL,grade:f.zu.GRADE_NA,measure:f.Ag.PARTICIPATION,score:-1,state:"NA",value:-1,weight:-1}},r.populateAverageData=function(e){var t;return null!==(t=this.props.data.average.nodes.find((function(t){return t.component===e})))&&void 0!==t?t:{code:"NA",component:e,cycle:f.MM.OVERALL,grade:f.zu.GRADE_NA,measure:f.Ag.PARTICIPATION,score:-1,state:"NA",value:-1,weight:-1}},t}(l.Z)},7326:function(e,t,r){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return a}})},5245:function(e,t,r){function a(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-templates-embedded-representation-state-score-representation-state-score-tsx-8310d7ecc7094220e1cd.js.map