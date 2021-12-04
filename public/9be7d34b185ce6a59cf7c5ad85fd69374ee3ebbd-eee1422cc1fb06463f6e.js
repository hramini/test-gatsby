"use strict";(self.webpackChunksod=self.webpackChunksod||[]).push([[776],{2872:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(4578),n=a(7294),c=a(9507),l=a(4618),i=a(393),s=a(2021),o=a(4562),m=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"criteriaGrade"},a.render=function(){var e=this.props,t=e.descriptions,a=void 0===t?["description"]:t,r=e.averageScore,c=e.averagePercent,m=e.cycleScores,d=e.overallGrade,u=e.overallPercentage,p=e.overallScore,E=e.title,v=e.isDecimal,f=e.simpleMode,h=void 0!==f&&f,_=["row c-criteria-grade__container",h?"is-simple":""].join(" "),N=m.map((function(e){return{cycle:e.cycle,score:e.score,weight:e.weight}}));return n.createElement("div",{className:"c-criteria-grade"},n.createElement("h3",{className:"c-score__title"},E),n.createElement("div",{className:_},n.createElement("div",{className:"col-md-4 c-criteria-grade__col"},n.createElement("div",{className:"c-criteria-grade__wrap"},n.createElement(i.Z,{grade:d,size:s.P.LARGE}),n.createElement("div",{className:"c-criteria__info"},n.createElement("span",{className:"c-criteria-grade__overall"},p),n.createElement("span",{className:"c-criteria-grade__average"},this.translate("avg")+":"+r)))),n.createElement("div",{className:"col-md-7 offset-md-1 c-criteria-grade__col"},n.createElement("div",{"data-name":"chart",className:"c-criteria-grade__chart"},n.createElement(l.Z,{overallGrade:d,chartPoints:N})))),!h&&n.createElement("div",{className:"row c-criteria-grade__container c-criteria--raw"},n.createElement("div",{className:"col-md-4 c-criteria-grade__col"},n.createElement("div",{className:"c-criteria-grade__wrap"},n.createElement(o.Z,{boxValue:u,isDecimal:v}),n.createElement("div",{className:"c-criteria__info"},n.createElement("span",{className:"c-criteria-grade__overall"},this.translate("rawScore")),n.createElement("span",{className:"c-criteria-grade__average"},this.translate("avg")+":"+c+(v?" ":" %"))))),n.createElement("div",{className:"col-md-7 offset-md-1 c-criteria-grade__col"},a.map((function(e){return n.createElement(n.Fragment,null,n.createElement("p",{className:"c-criteria-grade__desc"},e),n.createElement("br",null))})))))},t}(c.Z)},3898:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(4578),n=a(7294),c=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"detailsContainer"},a.render=function(){var e=this.props.children;return n.createElement("div",{className:"c-box-wrap"},n.createElement("div",{className:"c-section"},n.createElement("h3",{className:"c-section__title"},this.translate("title"))),n.createElement("div",{className:"c-overall-score"},n.createElement("div",{className:"c-overall-score__head"},n.createElement("div",{className:"c-overall-score__title"},this.translate("component")),n.createElement("div",{className:"c-overall-score__title"},this.translate("description")),n.createElement("div",{className:"c-overall-score__title"},this.translate("electionCycles")))),n.createElement("div",{className:"c-overall-score__body"},e))},t}(a(9507).Z)},6254:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(4578),n=a(7294),c=a(9507),l=a(926),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.chartPoints.map((function(e){return{x:e.cycle,y:e.percent}}));return n.createElement(l.Z,{gradientColorStops:["#C7AFF0","#4A1D96"],height:200,width:400,lineChartSerie:{name:"CyclePercent",chartData:e},onToolTipShow:function(t){return'<div class="c-cycle-percent-tooltip">\n                     <p>\n                     Value: <strong>'+e[t].y+"</strong>\n                    </p>\n              </div>"}})},t}(c.Z),s=a(4562),o=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"detailItems"},a.render=function(){var e=this.props,t=e.item,a=e.showAverage,r=void 0===a||a,c=t.value,l=t.averageValue,o=t.isPercent,m=void 0===o||o,d=t.title,u=t.description,p=t.chartData;return n.createElement("div",{className:"row c-overall-score__row"},n.createElement("div",{className:"col-lg-3 c-overall__col"},n.createElement("div",{className:"c-criteria-grade__wrap"},n.createElement(s.Z,{boxValue:c,isDecimal:!m}),n.createElement("div",{className:"c-criteria__info"},n.createElement("span",{className:"c-criteria-grade__overall"},d),r&&n.createElement("span",{className:"c-criteria-grade__average"},this.translate("average")+":"+l+(m?" %":" "))))),n.createElement("div",{className:"col-lg-4 c-overall__col"},n.createElement("div",{className:"c-details__desc"},u)),n.createElement("div",{className:"col-lg-5 c-overall__col"},n.createElement("div",{className:"c-score__chart"},n.createElement(i,{chartPoints:p}),n.createElement("div",{className:"c-overall__sub"},"Last 5 Election Cycles"))))},t}(c.Z)},683:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(4578),n=a(5444),c=a(3403),l=a(7294),i=a(9507),s=a(3049),o=a(1938),m=a(9486),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.menuItems;return l.createElement("footer",{className:"o-section c-section--footer"},l.createElement("div",{className:"o-section__wrapper"},l.createElement("div",{className:"c-footer"},l.createElement("ul",{className:"s-nav-footer"},e.map((function(e,t){return l.createElement("li",{key:t},l.createElement(n.Link,{to:e.path},e.title))}))),l.createElement("div",{className:"row c-footer__info"},l.createElement("div",{className:"col-lg-4 order-lg-first order-2 c-footer__details"},l.createElement("div",{className:"c-footer__logo"},l.createElement(n.Link,{to:s.A.HOME},l.createElement(o.Z,{width:"208",viewBox:"0 0 208 44",paths:[{command:m.Y.STATE_OF_DEMOCRACY,fill:"#fff"},{fillRule:"evenodd",clipRule:"evenodd",command:m.Y.LOGO_EAST,fill:"#EDE6FA"},{fillRule:"evenodd",clipRule:"evenodd",command:m.Y.LOGO_WEST,fill:"#8F60E1"}]}))),l.createElement("div",{className:"c-footer__copyright"},l.createElement("ul",{className:"s-nav-secondary"},l.createElement("li",null,l.createElement(n.Link,{to:s.A.CONTACT},"Contact")),l.createElement("li",null,l.createElement(n.Link,{to:s.A.PRIVACY_POLICY},"Privacy Policy"))))),l.createElement("div",{className:"col-lg-6 offset-lg-2 c-footer-partners"},l.createElement("div",{className:"c-footer__partners"},l.createElement("div",{className:"c-footer-partners__title"},"Project Partners"),l.createElement("div",{className:"c-partners"},l.createElement(c.M,{href:"https://fixusnow.org/","aria-label":"FixUS"},l.createElement("img",{width:"57",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAABHCAMAAADstONRAAAAh1BMVEUAAAD////////////////////////////////////////9/f3////////////////////////+/v7////////////////////////////////////////////////////////////////////////////+/v7g4OD////////o6OjX19fs7OwfNI3kAAAALXRSTlMAgFQ4fDBxPEMtdUx4MygJRwJAZ2oObVxRIARYFl8kNmRhEhwQB1tAGE9QMGAiKjfAAAAEOElEQVRYw+2Y2ZLaMBBF2/u+YmPwgjHgyZDk/78vjHbLEpCkKg8p34cZlww6VvdVqw1s2rRp06ZNv6siq+sZqO6mTgG81En9wQANW4B18RrXtu3YbbxrAQ+Fhk7ma6SFPpiDJB8Nd+j6drcNrn1ZA7haZP4aOaIP+k+QnrykA8BOi7ReIxM1smRROqxm9QD2WmTw90hvPWvKkfZD8UM88td3kd90yE8yWRh5VlSRWVlgB8HR7fzw9KUv/hjpYWRRYWCKZ8q+8mrXDNnAWn+JPJxw+Hi0atMIW4AzRn78EdJRIy2M7NC/aPGMXwaZMLJbFYzEeiiFwrG+lLQg6GahmwTpaZAhWuQFZA2afd+GJN4ldRoV8/7xOdJEf11YqXmFzGLZX5DZOBc65IgDh+vNGvmBkd/VyI4lzK6l6hJf6C1L7So8c5itkJ0GWbgsxY3k6U+bgoJnSBPPnKyQ5EakRprILLwa8cDsWj3yB57SQHKz30dSB8Xkuw7ZbQyZqJH5RJifsFSkOzYQ8gBIO8FBl5jX1TVSGM4DWkuj5UK/v4NMhbQMxBSvkfyUcp1ivUpfjbwvTLbPqDUceI30oednxO60Qsb7anc+D8Nw3lV7N6wK2Isprl2ccXIxgLh6R0amdBUnzjQ6VmtzQyUblkhIiGsPKKy3N5GQik0BTamvRLoA1SLFxYSDQcrNu0i4DOKs/RPkRFzKXdXzm7t2mbRg1fiJB4wTG0xxQPfcWgeKlJJOyvnvIKGwQp4whyOnKMrz3Pfz6GCaXZNgpGjkLGSPw+RokFK1n3ObrbMG8NTtHDm7y4X1sUa5mKYg6bg6YPqGeYghEzXymzgRf1Cq8V0kFNS7dg2WoXYdTBIyY+3nXTqLgxVSFbiLSxvZEV/8WCF/Sk/qcw/0y1Um6lyOIDFtYoXkTeRN8PowL+zjq8/LQP3eUIGly+XHMjgDWp/PHcSX04DydLqq4+3qHdsshh2MarHzwprESt1roKzb8ih84kJCU+Q9R2YhqUl9LO7NOVSFsCcBVK/SpGW91OaSH15xT0oHr0Cmqtc44AwfqxuIIqhRf14OAjIQIlGh6zMgeYpvW8TWoxEu0lnjkPRw0HUFZ06ZEWZqaUb4Rs7o62/L9nxp45YSxcNj45A1tJvp1O0Wr7E0mDENk8drEN+trn+sAbJjWZG9e8FBr0qyia9nlpGG9bEq2+W8b3X4+oX+vt1rX8EJw6iisswr4QeISbdKlw3vJAMecehO2J6xijgUaIKVqhnNh+l6pIUCJTajpnhSnxRTdzPArHiWKUMG1L3s0aayjldR6G2xfNwmaeIQ5yCVY26XBUmZumi1IVn8XfGW+LGoQZCiUDEj3fgvUWITYl7pcIp0XK0ycB46wux8SToSbw5Sz9c93qe9uz+b5bEFQdmp7KowdnfmeIF/qCJrYdOmTZs2/a/6BUbXO+a23aS+AAAAAElFTkSuQmCC",alt:"FixUs Logo"})),l.createElement(c.M,{href:"https://freedomhouse.org/","aria-label":"Freedom House"},l.createElement(o.Z,{width:"96",viewBox:"0 0 96 43",paths:[{command:m.Y.FREEDOM_HOUSE,fill:"#fff",fillOpacity:".5"}]})),l.createElement(c.M,{href:"https://represent.us/","aria-label":"RepresentUs"},l.createElement(o.Z,{width:"146",viewBox:"0 0 146 35",paths:[{command:m.Y.REPRESENT_US_1,fill:"#fff",fillOpacity:".65"},{command:m.Y.REPRESENT_US_2,fill:"#fff",fillOpacity:".65"},{command:m.Y.REPRESENT_US_3,fill:"#fff",fillOpacity:".65"}]})),l.createElement(c.M,{href:"https://www.uniteamericainstitute.org/","aria-label":"Unite America Institute"},l.createElement(o.Z,{width:"142",viewBox:"0 0 142 31",paths:[{command:m.Y.INSTITUTE_1,fill:"#fff",fillOpacity:".5"},{command:m.Y.INSTITUTE_2,fill:"#fff",fillRule:"evenodd",clipRule:"evenodd",fillOpacity:".65"}]})))))))))},t}(i.Z)},3673:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(4578),n=a(7294),c=a(9507),l=a(3089),i=a(5208),s=a(1938),o=a(9486),m=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"improveBox"},a.render=function(){var e=this.props.improveBoxItems,t=e.title,a=e.description,r=e.items;return n.createElement("div",{className:"c-box-wrap"},n.createElement("div",{className:"row c-improve-box"},n.createElement("div",{className:"col-lg-6 c-improve-box__col"},n.createElement("div",{className:"c-improve-box__wrap"},n.createElement("h3",{className:"c-score__title"},t),n.createElement("p",null,a))),n.createElement("div",{className:"col-lg-6 c-improve-box__col"},n.createElement("ul",{className:"c-improve__list"},r.map((function(e,t){return n.createElement("li",{className:"c-improve-list__items",key:t},n.createElement("span",null,t+1),n.createElement("span",null,e))}))))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12 c-improve-box__cta"},n.createElement(l.Z,{colorSchema:i.c.PURPLE},this.translate("callToAction"),n.createElement(s.Z,{width:"20",viewBox:"0 0 20 14",paths:[{command:o.Y.ARROW_RIGHT,fill:"#4A1D96"}]})))))},t}(c.Z)},7070:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(4578),n=a(5444),c=a(7294),l=a(9507),i=a(8809),s=a(6657),o=function(e){function t(t){var a;return(a=e.call(this,t)||this).selected=function(e){a.setState({activeItemIndex:e})},a.componentDidMount=function(){a.selected(a.props.selectedItemIndex)},a.state={activeItemIndex:-1},a}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.items;return c.createElement("div",{className:"c-tab"},c.createElement(s.t,{modules:[i.W_],spaceBetween:0,slidesPerView:3,preventClicksPropagation:!1,preventClicks:!1,navigation:!0,breakpoints:{640:{slidesPerView:4,spaceBetween:0},992:{slidesPerView:7,spaceBetween:0}},onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)}},t.map((function(t,a){var r,l,i,o=["c-tab__items",(null!==(r=null===(l=(i=e.props).isActive)||void 0===l?void 0:l.call(i,t))&&void 0!==r?r:t.isActive)?"is-active":""].join(" ");return c.createElement(s.o,{key:a,className:o},c.createElement(n.Link,{to:t.path},t.title))}))))},t}(l.Z)},4562:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(4578),n=a(7294),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.boxValue,a=e.isDecimal,r=void 0!==a&&a;return n.createElement("div",{className:"c-percent-box"},n.createElement("div",{className:"c-percent-box__percent"},t+(r?" ":"%")))},t}(a(9507).Z)},802:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(4578),n=a(7294),c=a(5741),l=a(9507),i=a(4780),s=a(3049),o=a(683),m=a(7616),d=a(5444),u=a(1938),p=a(9486),E=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.crumbItems;return n.createElement("ul",{className:"c-breadcrumb"},e.map((function(e,t){return n.createElement("li",{key:t},n.createElement(d.Link,{to:e.location}," ",e.label," "),n.createElement(u.Z,{width:"6",height:"10",viewBox:"0 0 6 10",paths:[{command:p.Y.CHEVRON_RIGHT,fill:"#0D0C0D"}]}))})))},t}(l.Z),v=a(4471),f=a(7070),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).pathname="",a.state={isMobileNavOpen:!1},a}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"stateHeader"},a.componentDidMount=function(){this.pathname=window.location.pathname},a.onHamburgerClick=function(){this.setState({isMobileNavOpen:!this.state.isMobileNavOpen})},a.render=function(){var e=this,t=this.props,a=t.image,r=t.title,c=t.menuItems,l=t.breadCrumbItems,i=["s-nav js-nav",this.state.isMobileNavOpen?"is-open":""].join(" ");return n.createElement(n.Fragment,null,n.createElement("header",{className:"o-section c-section--header"},n.createElement("div",{className:"o-section__wrapper"},n.createElement("div",{className:"c-header"},n.createElement("div",{className:"c-header__col"},n.createElement("div",{className:"c-logo"},n.createElement(d.Link,{to:s.A.HOME,className:"c-link c-link--logo","aria-label":"State of Democracy"},n.createElement(u.Z,{width:"208",viewBox:"0 0 208 44",paths:[{command:p.Y.STATE_OF_DEMOCRACY,fill:"#fff"},{fillRule:"evenodd",clipRule:"evenodd",command:p.Y.LOGO_EAST,fill:"#EDE6FA"},{fillRule:"evenodd",clipRule:"evenodd",command:p.Y.LOGO_WEST,fill:"#8F60E1"}]})))),n.createElement("div",{className:"c-header__col"},n.createElement("div",{className:"c-hamburger__wrap"},n.createElement("div",{className:"c-hamburger",onClick:function(){e.onHamburgerClick()}},n.createElement("input",{className:"c-hamburger__checkbox js-hamburger",type:"checkbox","aria-label":"Menu"}),n.createElement("span",{className:"c-hamburger__icon"}),n.createElement("span",{className:"c-hamburger__icon"}),n.createElement("span",{className:"c-hamburger__icon"}))),n.createElement("ul",{className:i},n.createElement("li",null,n.createElement(d.Link,{to:s.A.ABOUT},this.translate("about"))),n.createElement("li",null,n.createElement(d.Link,{to:s.A.MEDIA},this.translate("media"))),n.createElement("li",null,n.createElement(d.Link,{to:s.A.TAKE_ACTION},this.translate("takeAction")))))))),n.createElement(v.Z,{className:"c-section--single"},n.createElement(E,{crumbItems:l}),n.createElement("div",{className:"c-state-details"},n.createElement("div",{className:"c-state-details__img"},n.createElement("img",{className:"c-state-details__icon",width:64,src:a,alt:r})),n.createElement("h1",{className:"c-state-details__title"},r)),n.createElement(f.Z,{items:c,selectedItemIndex:0,isActive:function(t){return e.checkMenuActivity(t)}})))},a.checkMenuActivity=function(e){return(this.pathname.endsWith("/")?this.pathname.slice(0,-1):this.pathname)===(e.path.endsWith("/")?e.path.slice(0,-1):e.path)},t}(l.Z),_=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"layout"},a.render=function(){var e=this.props,t=e.image,a=e.state,r=e.title,l=e.children,d=e.breadCrumbItems;return n.createElement(n.Fragment,null,n.createElement(m.Z,{pageTitle:this.translate("siteName")+" - "+r,description:"Page Description",keywords:["state","democracy"],language:i.S.EN_US}),n.createElement(h,{image:t,title:a,breadCrumbItems:d,menuItems:[{title:this.translate("overall"),path:"/state/"+(0,c.generateUrlForStates)(a)+s.A.OVERALL},{title:this.translate("participation"),path:"/state/"+(0,c.generateUrlForStates)(a)+s.A.PARTICIPATION},{title:this.translate("competition"),path:"/state/"+(0,c.generateUrlForStates)(a)+s.A.COMPETITION},{title:this.translate("representation"),path:"/state/"+(0,c.generateUrlForStates)(a)+s.A.REPRESENTATION},{title:this.translate("polarization"),path:"/state/"+(0,c.generateUrlForStates)(a)+s.A.POLARIZATION}]}),l,n.createElement(o.Z,{menuItems:[{title:this.translate("about"),path:s.A.ABOUT},{title:this.translate("media"),path:s.A.MEDIA},{title:this.translate("takeAction"),path:s.A.TAKE_ACTION},{title:this.translate("readTheReport"),path:s.A.READ_THE_REPORT},{title:this.translate("methodology"),path:s.A.METHODOLOGY},{title:this.translate("stateOfReform"),path:s.A.STATE_OF_REFORM}]}))},t}(l.Z)},743:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(4578),n=a(7294),c=a(9507),l=a(1249),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.item,a=e.isActive,r=["c-similar-box",void 0!==a&&a?"is-active":""].join(" ");return n.createElement("div",{className:r,style:{backgroundColor:l.F[t.grade]}},n.createElement("div",{className:"c-similar-box__info"},n.createElement("div",null,t.abbreviation),n.createElement("div",null,t.title)),n.createElement("div",{className:"c-similar-box__rate"},t.score))},t}(c.Z),s=a(6657),o=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"similarState"},a.render=function(){var e=this.props,t=e.lesserScoreStates,a=e.activeState,r=e.greaterScoreStates;return n.createElement("div",{className:"c-box-wrap c-similar-states"},n.createElement("div",{className:"c-section"},n.createElement("h3",{className:"c-section__title"},this.translate("similarState"))),n.createElement(s.t,{className:"c-similar__states",spaceBetween:16,slidesPerView:3,preventClicksPropagation:!1,preventClicks:!1,breakpoints:{480:{slidesPerView:4},768:{slidesPerView:6},992:{slidesPerView:6,spaceBetween:23}},onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)}},t.reverse().map((function(e,t){return n.createElement(s.o,{className:"c-similar-state__items",key:t},n.createElement(i,{item:e}))})),n.createElement(s.o,{className:"c-similar-state__items"},n.createElement(i,{item:a,isActive:!0})),r.map((function(e,t){return n.createElement(s.o,{className:"c-similar-state__items",key:t},n.createElement(i,{item:e}))}))))},t}(c.Z)},3403:function(e,t,a){var r=a(5318);t.M=void 0;var n=r(a(7154)),c=r(a(7316)),l=r(a(7294)),i=r(a(5697)),s=["children"],o=l.default.forwardRef((function(e,t){var a=e.children,r=(0,c.default)(e,s);return l.default.createElement("a",(0,n.default)({ref:t},r,{onClick:function(e){"function"==typeof r.onClick&&r.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),r.target&&"_self"!==r.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:r.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=r.href)}}):t&&(document.location=r.href),!1}}),a)}));t.M=o,o.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func}}}]);
//# sourceMappingURL=9be7d34b185ce6a59cf7c5ad85fd69374ee3ebbd-eee1422cc1fb06463f6e.js.map