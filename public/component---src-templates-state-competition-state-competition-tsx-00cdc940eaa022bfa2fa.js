"use strict";(self.webpackChunksod=self.webpackChunksod||[]).push([[358],{9456:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var r=a(4578),o=a(7294),n=a(5741),i=a(9507),c=a(4471),s=a(2872),l=a(3898),u=a(6254),p=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"competitionDetails"},a.render=function(){var e=this.props,t=e.overall,a=e.items;return o.createElement(l.Z,null,o.createElement("h3",{className:"c-score__title"},this.translate("overallTitle")),o.createElement(u.Z,{item:t}),o.createElement("h3",{className:"c-score__title"},this.translate("componentTitle")),a.map((function(e,t){return o.createElement(u.Z,{key:t,item:e})})))},t}(i.Z),m=a(3673),d=a(587),v=a(2726),h=a(7897),g=a(802),E=a(743),S=a(4682),T=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"stateCompetitionTemplate"},a.render=function(){var e=this.props,t=e.data,a=e.pageContext,r=t.competitionMarginOfVictory,i=t.competitionTotal,l=t.competitionUnCompetitive,u=t.competitionUnContested,T=t.competitionWinnersShare,M=t.lesserScoreSimilarStates,D=t.greaterScoreSimilarStates,C=t.icon,N=a.breadCrumbs,O=a.pageContent,I=O.competitionScoreDesc1,A=O.competitionScoreDesc2,f=O.improveCompetitionDesc,y=O.improveCompetitionSolution1,_=O.improveCompetitionSolution2,b=O.improveCompetitionSolution3,R=O.hvdScoreDesc,Z=O.winnersShareDesc,P=O.marginVictoryDesc,U=O.unContestedDesc,V=O.unCompetitiveDesc,L=this.populateAverageData(S.D4.TOTAL),k=this.populateAverageData(S.D4.COMPETITION_MARGIN_OF_VICTORY),F=this.populateAverageData(S.D4.COMPETITION_UNCOMPETITIVE_SEATS),w=this.populateAverageData(S.D4.COMPETITION_UNCONTESTED_RACES),x=this.populateAverageData(S.D4.COMPETITION_WINNERS_SHARE),G=this.populateOverallData(S.D4.TOTAL),W=this.populateOverallData(S.D4.COMPETITION_MARGIN_OF_VICTORY),Y=this.populateOverallData(S.D4.COMPETITION_UNCOMPETITIVE_SEATS),z=this.populateOverallData(S.D4.COMPETITION_UNCONTESTED_RACES),H=this.populateOverallData(S.D4.COMPETITION_WINNERS_SHARE),B=i.nodes.map((function(e){var t=e.cycle,a=e.score,r=e.grade,o=e.weight;return{cycle:t,score:Math.round(100*a),grade:r,weight:o}})),j=i.nodes.map((function(e){return{cycle:e.cycle,percent:Math.round(100*e.value)}})),q=T.nodes.map((function(e){return{cycle:e.cycle,percent:Math.round(100*e.value)}})),J=r.nodes.map((function(e){return{cycle:e.cycle,percent:Math.round(100*e.value)}})),K=u.nodes.map((function(e){return{cycle:e.cycle,percent:Math.round(100*e.value)}})),Q=l.nodes.map((function(e){return{cycle:e.cycle,percent:Math.round(100*e.value)}})),X=M.nodes.map((function(e){return{abbreviation:e.code,score:Math.round(100*e.score),title:e.state,grade:e.grade,itemLink:"/state/"+(0,n.generateUrlForStates)(e.state)+"/competition"}})),$=D.nodes.map((function(e){return{abbreviation:e.code,score:Math.round(100*e.score),title:e.state,grade:e.grade,itemLink:"/state/"+(0,n.generateUrlForStates)(e.state)+"/competition"}})),ee=(0,n.generateUrlForStates)(G.state),te=C.nodes[0].publicURL,ae=void 0===te?"":te;return o.createElement(g.Z,{title:this.translate("title")+"("+G.state+")",state:G.state,image:ae,breadCrumbItems:N},o.createElement(v.Z,{type:h.a.SUMMARY,title:G.state+" "+this.translate("title"),description:this.translate("firstScoreDescription"),imageResourceFileName:"embedded-competition-score-"+(0,n.generateUrlForStates)(G.state)+".png"}),o.createElement(c.Z,{className:"c-section--score is-criteria-grade",id:"competition"},o.createElement("div",{className:"c-score"},o.createElement(s.Z,{title:this.translate("scoreTitle"),averageScore:Math.round(100*L.score),averagePercent:Math.round(100*L.value),overallPercentage:Math.round(100*G.value),cycleScores:B,overallGrade:G.grade,overallScore:Math.round(100*G.score),descriptions:[I,A]}),o.createElement(d.Z,{absoluteLink:"/state/"+ee+"/competition/#competition",embeddedLink:"/embedded/competition/"+ee,imageResourceFileName:"embedded-competition-score-"+(0,n.generateUrlForStates)(G.state)+".png"}))),o.createElement(c.Z,{className:"c-section-box c-section--similar"},o.createElement(E.Z,{lesserScoreStates:X,greaterScoreStates:$,activeState:{abbreviation:G.code,grade:G.grade,score:Math.round(100*G.score),title:G.state,itemLink:"/state/"+(0,n.generateUrlForStates)(G.state)+"/competition"}})),o.createElement(c.Z,{className:"c-section-box c-section--improve"},o.createElement(m.Z,{improveBoxItems:{title:this.translate("improveCompetition"),description:f,items:[y,_,b]}})),o.createElement(c.Z,{className:"c-section-box c-section--details"},o.createElement(p,{overall:{title:this.translate("hvdScore"),description:R,value:Math.round(100*G.value),averageValue:Math.round(100*L.value),chartData:j},items:[{title:this.translate("winnersShare"),description:Z,value:Math.round(100*H.value),averageValue:Math.round(100*x.value),chartData:q},{title:this.translate("marginVictory"),description:P,value:Math.round(100*W.value),averageValue:Math.round(100*k.value),chartData:J},{title:this.translate("unContested"),description:U,value:Math.round(100*z.value),averageValue:Math.round(100*w.value),chartData:K},{title:this.translate("unCompetitive"),description:V,value:Math.round(100*Y.value),averageValue:Math.round(100*F.value),chartData:Q}]})))},a.populateOverallData=function(e){var t;return null!==(t=this.props.data.overall.nodes.find((function(t){return t.component===e})))&&void 0!==t?t:{code:"NA",component:e,cycle:S.MM.OVERALL,grade:S.zu.GRADE_NA,measure:S.Ag.PARTICIPATION,score:-1,state:"NA",value:-1,weight:-1}},a.populateAverageData=function(e){var t;return null!==(t=this.props.data.average.nodes.find((function(t){return t.component===e})))&&void 0!==t?t:{code:"NA",component:e,cycle:S.MM.OVERALL,grade:S.zu.GRADE_NA,measure:S.Ag.PARTICIPATION,score:-1,state:"NA",value:-1,weight:-1}},t}(i.Z)}}]);
//# sourceMappingURL=component---src-templates-state-competition-state-competition-tsx-00cdc940eaa022bfa2fa.js.map