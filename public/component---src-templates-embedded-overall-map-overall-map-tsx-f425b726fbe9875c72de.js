(self.webpackChunksod=self.webpackChunksod||[]).push([[305],{5279:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var a=n(4578),r=n(7294),o=n(8463),i=n(5741),l=n(9507),c=n(4682),s=n(1249),u=n(5444),p=n(4126),d=n(393),m=n(2021),E=n(1938),f=n(9486),_=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.currentStateData,a=t.competitionData,o=t.participationData,l=t.polarizationData,s=t.representationData,_=t.measure;return r.createElement("div",{className:"sod-map-tooltip"},r.createElement("div",{className:"sod-map-tooltip__title"},n.state,this.isMobileDevice()&&r.createElement("button",{type:"button","aria-label":"Close",onClick:function(){e.props.removeTooltipContent()}},p.Y)),r.createElement("div",{className:"sod-map-tooltip__body"},r.createElement("div",{className:"sod-map-tooltip__grade"+(_===c.Ag.GRAND_TOTAL?" grade--overall":"")},r.createElement(d.Z,{grade:n.grade,size:m.P.MEDIUM}),r.createElement("div",{className:"sod-map-tooltip__text"},"Overall")),r.createElement("div",{className:"sod-map-tooltip__grade"+(_===c.Ag.PARTICIPATION?" grade--overall":"")},r.createElement(d.Z,{grade:null==o?void 0:o.grade,size:m.P.MEDIUM}),r.createElement("div",{className:"sod-map-tooltip__text"},"Participation")),r.createElement("div",{className:"sod-map-tooltip__grade"+(_===c.Ag.COMPETITION?" grade--overall":"")},r.createElement(d.Z,{grade:null==a?void 0:a.grade,size:m.P.MEDIUM}),r.createElement("div",{className:"sod-map-tooltip__text"},"Competition")),r.createElement("div",{className:"sod-map-tooltip__grade"+(_===c.Ag.REPRESENTATION?" grade--overall":"")},r.createElement(d.Z,{grade:null==s?void 0:s.grade,size:m.P.MEDIUM}),r.createElement("div",{className:"sod-map-tooltip__text"},"Representation")),r.createElement("div",{className:"sod-map-tooltip__grade"+(_===c.Ag.POLARIZATION?" grade--overall":"")},r.createElement(d.Z,{grade:null==l?void 0:l.grade,size:m.P.MEDIUM}),r.createElement("div",{className:"sod-map-tooltip__text"},"Polarization"))),r.createElement("div",{className:"sod-map-tooltip__footer",onTouchStart:function(){window.location.href="/state/"+(0,i.generateUrlForStates)(n.state)}},r.createElement(u.Link,{to:"/state/"+(0,i.generateUrlForStates)(n.state)},"Click to learn more",r.createElement(E.Z,{width:"14",viewBox:"0 0 14 10",paths:[{command:f.Y.M9_ARROW_RIGHT,fill:"#000"}]}))))},t}(l.Z),A=n(549),T=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}(0,a.Z)(t,e);var n=t.prototype;return n.findTooltipData=function(e,t){return e.find((function(e){return e.code===t}))},n.setTooltipContent=function(e,t){var n=e.allParticipation.nodes,a=e.allCompetition.nodes,r=e.allRepresentation.nodes,o=e.allPolarization.nodes,i=t.code,l=this.findTooltipData(n,i),c=this.findTooltipData(a,i),s=this.findTooltipData(o,i),u=this.findTooltipData(r,i);this.setState({currentStateData:t,participationData:l,representationData:u,polarizationData:s,competitionData:c})},n.removeTooltipContent=function(){this.setState({currentStateData:void 0})},n.render=function(){var e=this,t=this.props,n=t.measure,a=t.data,l=t.isTooltip,u=this.state,p=u.currentStateData,d=u.competitionData,m=u.participationData,E=u.polarizationData,f=u.representationData,T=a.all.nodes,R=a.overallData;return r.createElement(A.Z,{isTooltip:l,tooltipBody:function(){return p?r.createElement(_,{currentStateData:p,competitionData:d,participationData:m,polarizationData:E,representationData:f,measure:n,removeTooltipContent:function(){e.removeTooltipContent()}}):""}},(function(t){return t.geographies.map((function(t){var u,p=T.find((function(e){return e.state===t.properties.name}));if(R)var d=R.nodes.find((function(e){return e.state===t.properties.name}));else d=T.find((function(e){return e.state===t.properties.name}));return r.createElement(r.Fragment,{key:t.rsmKey},r.createElement(o.Geography,{geography:t,stroke:"#fff",onMouseEnter:function(t){l&&e.setTooltipContent(a,d);t.currentTarget.getBoundingClientRect()},onMouseLeave:function(){l&&e.removeTooltipContent()},onClick:function(){if(!e.isMobileDevice()){var a=t.properties.name;window.location.href="/state/"+(0,i.generateUrlForStates)(a)+"/"+(n===c.Ag.GRAND_TOTAL?"overall":n.toLocaleLowerCase())}},onTouchStart:function(t){e.setTooltipContent(a,d)},style:{default:{fill:null!==(u=s.F[null==p?void 0:p.grade])&&void 0!==u?u:"#eee",outline:"none"},hover:{fill:"current",outline:"none",cursor:"pointer",strokeWidth:2,opacity:1,position:"relative",zIndex:9},pressed:{fill:"#E42",outline:"none"}}}))}))}))},t}(l.Z)},2021:function(e,t,n){"use strict";var a;n.d(t,{P:function(){return a}}),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(a||(a={}))},393:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(4578),r=n(7294),o=n(9507),i=n(1249),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.grade,n="c-grade--"+e.size,a="c-grade "+n,o=n+"__symbol";return r.createElement("div",{className:a,style:{backgroundColor:i.F[t]}},r.createElement("div",{className:o},t))},t}(o.Z)},1716:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(5245),r=n(4578),o=n(7294),i=n(9507),l=["children","shareName"],c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.shareName,r=(0,a.Z)(e,l);return o.createElement("div",Object.assign({"data-id":"share","data-name":n},r),t)},t}(i.Z)},7897:function(e,t,n){"use strict";var a;n.d(t,{a:function(){return a}}),function(e){e.SUMMARY="summary",e.SUMMARY_LARGE_IMAGE="summary_large_image",e.OBJECT="object"}(a||(a={}))},2726:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(4578),r=n(7294),o=n(5414),i=n(9507),l=n(7897),c=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.title,n=e.description,a=e.imageResourceFileName,i=e.type,c=this.getResourcesPath()+"/"+a;return r.createElement(o.q,{meta:[{property:"og:title",content:t},{property:"og:type",content:l.a.OBJECT},{property:"og:description",content:n},{property:"og:image",content:c},{name:"twitter:card",content:i},{name:"twitter:title",content:t},{name:"twitter:image:src",content:c},{name:"twitter:description",content:n}]})},n.getResourcesPath=function(){return"https://anapano.ir"},t}(i.Z)},4682:function(e,t,n){"use strict";var a,r,o,i,l;n.d(t,{D4:function(){return a},OK:function(){return r},MM:function(){return o},Ag:function(){return i},zu:function(){return l}}),function(e){e.COMPETITION_WINNERS_SHARE="Winner's Share",e.COMPETITION_MARGIN_OF_VICTORY="Margin of Victory",e.COMPETITION_UNCOMPETITIVE_SEATS="Uncompetetive Seats",e.COMPETITION_UNCONTESTED_RACES="Uncontested Races",e.PARTICIPATION_PRIMARY_ELECTION="Primary",e.PARTICIPATION_GENERAL_ELECTION="General",e.POLARIZATION_HOUSE="House",e.POLARIZATION_SENATE="Senate",e.REPRESENTATION_SEX="Sex",e.REPRESENTATION_RACE="Race",e.REPRESENTATION_NON_WHITE="NonWhite",e.REPRESENTATION_FEMALE="Female",e.TOTAL="Total"}(a||(a={})),function(e){e.REPRESENTATION_PARITY="Parity",e.REPRESENTATION_POPULATION="Population",e.REPRESENTATION_LEGISLATURE="Legislature"}(r||(r={})),function(e){e.YEAR_2012="2012",e.YEAR_2014="2014",e.YEAR_2016="2016",e.YEAR_2018="2018",e.YEAR_2020="2020",e.OVERALL="Overall"}(o||(o={})),function(e){e.COMPETITION="Competition",e.REPRESENTATION="Representation",e.PARTICIPATION="Participation",e.POLARIZATION="Polarization",e.GRAND_TOTAL="GrandTotal"}(i||(i={})),function(e){e.GRADE_A_PLUS="A+",e.GRADE_A="A",e.GRADE_A_MINUS="A-",e.GRADE_B_PLUS="B+",e.GRADE_B="B",e.GRADE_B_MINUS="B-",e.GRADE_C_PLUS="C+",e.GRADE_C="C",e.GRADE_C_MINUS="C-",e.GRADE_D_PLUS="D+",e.GRADE_D="D",e.GRADE_D_MINUS="D-",e.GRADE_F_PLUS="F+",e.GRADE_F="F",e.GRADE_F_MINUS="F-",e.GRADE_NA="NA"}(l||(l={}))},2838:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(4578),r=n(5444),o=n(7294),i=n(9507),l=n(3049),c=n(4471),s=n(1716),u=n(2726),p=n(7897),d=n(1938),m=n(9486),E=n(4682),f=n(5279),_=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.declareTranslateCollection=function(){return"overallMapTemplate"},n.render=function(){var e=this.props.data;return o.createElement(o.Fragment,null,o.createElement(u.Z,{type:p.a.SUMMARY,title:this.translate("title"),description:this.translate("description"),imageResourceFileName:"embedded-overall-map.png"}),o.createElement(c.Z,{className:"c-section--embed"},o.createElement(s.Z,{className:"c-embed__wrap",shareName:"overall-map"},o.createElement("div",{className:"c-embed__box"},o.createElement("h2",{className:"c-score__title"},this.translate("title")),o.createElement(f.Z,{data:e,measure:E.Ag.GRAND_TOTAL})),o.createElement("div",{className:"c-embed__logo"},o.createElement(r.Link,{to:l.A.HOME},o.createElement(d.Z,{width:"111",viewBox:"0 0 208 44",paths:[{command:m.Y.STATE_OF_DEMOCRACY,fill:"#0D0C0D"},{fillRule:"evenodd",clipRule:"evenodd",command:m.Y.LOGO_EAST,fill:"#C7AFF0"},{fillRule:"evenodd",clipRule:"evenodd",command:m.Y.LOGO_WEST,fill:"#4A1D96"}]}))))))},t}(i.Z)},5741:function(e){e.exports={generateUrlForStates:function(e){return e.toLowerCase().replace(" ","-")}}},5671:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return a}})},3144:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,{Z:function(){return r}})},4942:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return a}})},5245:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-templates-embedded-overall-map-overall-map-tsx-f425b726fbe9875c72de.js.map