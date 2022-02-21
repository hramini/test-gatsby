"use strict";(self.webpackChunksod=self.webpackChunksod||[]).push([[543],{7758:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(4578),r=a(7294),l=a(8463),c=a(9507),i=a(1249),o=a(549),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.currentStateData;return r.createElement("div",{className:"sor-map-tooltip"},r.createElement("div",{className:"sor-map-tooltip__title"},e.state))},t}(c.Z),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={},a}(0,n.Z)(t,e);var a=t.prototype;return a.getSORColorData=function(e){switch(e){default:return i.$.LOW;case 1:return i.$.MEDIUM;case 2:return i.$.HIGH}},a.setTooltipContent=function(e){this.setState({currentStateData:e})},a.removeTooltipContent=function(){this.setState({currentStateData:void 0})},a.render=function(){var e=this,t=this.props,a=t.data,n=t.isTooltip,c=t.dataType,i=this.state.currentStateData,m=a.all.nodes;return r.createElement(o.Z,{isTooltip:n,tooltipBody:function(){return i?r.createElement(s,{currentStateData:i,dataType:c,removeTooltipContent:function(){e.removeTooltipContent()}}):""}},(function(t){return t.geographies.map((function(t){var a=m.find((function(e){return e.state===t.properties.name}));return console.log(c),r.createElement(r.Fragment,{key:t.rsmKey},r.createElement(l.Geography,{geography:t,stroke:"#fff",onMouseEnter:function(t){n&&e.setTooltipContent(a),t.currentTarget.getBoundingClientRect()},onMouseLeave:function(){n&&e.removeTooltipContent()},onTouchStart:function(){e.setTooltipContent(a)},style:{default:{fill:e.getSORColorData(Number(null==a?void 0:a[c])),outline:"none"},hover:{fill:"current",outline:"none",cursor:"default",strokeWidth:2,opacity:1,position:"relative",zIndex:9},pressed:{fill:"#E42",outline:"none"}}}))}))}))},t}(c.Z)},5904:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(4578),r=a(7294),l=a(9507),c=a(7758),i=a(4471),o=a(5695),s=a(5414),m=a(4780),h=a(3049),u=a(7616),p=a(5444),d=a(1938),v=a(9486),f=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"stateOfReformFooter"},a.render=function(){this.props.menuItems;return r.createElement("footer",{className:"o-section c-section--footer"},r.createElement("div",{className:"o-section__wrapper"},r.createElement("div",{className:"c-footer"},r.createElement("div",{className:"row c-footer__info"},r.createElement("div",{className:"col-sm-6 c-footer__details"},r.createElement("div",{className:"c-footer__logo"},r.createElement(p.Link,{to:h.n.HOME},r.createElement(d.Z,{width:"99",viewBox:"0 0 99 54",paths:[{command:v.Y.STATE_OF_REFORM,fill:"white"}]})))),r.createElement("div",{className:"col-sm-6 c-footer__sod"},r.createElement(p.Link,{to:h.A.HOME},r.createElement("svg",{width:"312",viewBox:"0 0 312 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fill:"#fff",d:"M0 0h240v72H0z"}),r.createElement("path",{className:"sod_bg",fill:"#EDE6FA",d:"M240 0h72v72h-72z"}),r.createElement("path",{d:"m279 29-1.41 1.41 4.58 4.59H266v2h16.17l-4.59 4.59L279 43l7-7-7-7z",className:"sod_arrow",fill:"#4A1D96"}),r.createElement("g",{clipPath:"url(#a)"},r.createElement("path",{d:"M90.258 21.992c1.337 0 1.862.626 1.963 1.862h2.014c-.085-2.285-1.388-3.639-3.977-3.639-2.64 0-3.825 1.354-3.825 3.216 0 1.794.813 2.606 2.945 3.384l1.168.423c1.421.542 1.828.914 1.828 1.862 0 1.032-.542 1.523-1.896 1.523-1.49 0-2.115-.558-2.335-1.861h-2.014c.288 2.555 1.81 3.638 4.35 3.638 2.74 0 3.976-1.218 3.976-3.402 0-1.743-.677-2.623-3.012-3.503l-1.236-.474c-1.252-.473-1.675-.778-1.675-1.658 0-.795.44-1.37 1.726-1.37zm13.883.17v-1.777h-8.834v1.776h3.402v10.07h2.047V22.16h3.385zm7.857 10.069h2.216l-4.213-11.846h-2.167l-4.23 11.846h2.149l.863-2.539h4.518l.864 2.539zm-1.439-4.316h-3.401l1.709-5.026 1.692 5.026zm11.943-5.753v-1.777h-8.834v1.776h3.401v10.07h2.048V22.16h3.385zm1.821 10.069h7.684v-1.777h-5.636V27h4.705v-1.776h-4.705V22.16h5.636v-1.776h-7.684V32.23zm18.742.169c2.843 0 4.671-1.557 4.671-4.468v-3.249c0-2.894-1.828-4.468-4.671-4.468s-4.671 1.574-4.671 4.485v3.232c0 2.911 1.828 4.468 4.671 4.468zm0-10.408c1.76 0 2.589 1.083 2.589 2.759v3.114c0 1.675-.829 2.758-2.589 2.758s-2.589-1.083-2.589-2.742v-3.113c0-1.693.829-2.776 2.589-2.776zm13.718 5.314V25.53H152.4v-3.367h5.314v-1.777h-7.362V32.23h2.048v-4.925h4.383zm-69.876 23.54h4.316c2.724 0 4.45-1.472 4.45-4.214v-3.401c0-2.708-1.692-4.231-4.518-4.231h-4.248v11.846zm4.096-10.07c1.76 0 2.572.982 2.572 2.522v3.267c0 1.556-.745 2.504-2.555 2.504h-2.065v-8.292h2.048zm7.274 10.07h7.684V49.07h-5.635v-3.452h4.704V43.84h-4.704v-3.063h5.635V39h-7.683v11.846zm15.195-1.912h1.743l3.25-6.482v8.394h1.997V39h-2.319l-3.723 7.598L110.799 39h-2.556v11.846h1.98v-8.394l3.249 6.482zm14.289 2.081c2.843 0 4.671-1.557 4.671-4.467v-3.25c0-2.893-1.828-4.467-4.671-4.467s-4.67 1.574-4.67 4.484v3.233c0 2.91 1.827 4.467 4.67 4.467zm0-10.407c1.76 0 2.59 1.083 2.59 2.758v3.114c0 1.675-.83 2.758-2.59 2.758-1.76 0-2.589-1.083-2.589-2.741v-3.114c0-1.692.829-2.775 2.589-2.775zm11.502 10.407c2.454 0 4.079-1.421 4.197-3.943h-2.014c-.118 1.49-.88 2.166-2.301 2.166-1.608 0-2.437-1.083-2.437-2.741v-3.114c0-1.692.829-2.775 2.454-2.775 1.421 0 2.132.744 2.284 2.166h2.014c-.169-2.336-1.625-3.943-4.349-3.943-2.657 0-4.485 1.574-4.485 4.484v3.233c0 2.91 1.811 4.467 4.637 4.467zm8.493-4.586h1.658l2.454 4.417h2.319l-2.793-4.755c1.49-.474 2.319-1.54 2.319-3.046v-.627c0-2.183-1.472-3.418-4.265-3.418h-3.74v11.846h2.048V46.43zm1.574-5.652c1.624 0 2.284.677 2.284 1.71v.473c0 1.032-.727 1.692-2.284 1.692h-1.574v-3.875h1.574zm13.983 10.07h2.216L161.316 39h-2.167l-4.23 11.846h2.149l.863-2.538h4.518l.864 2.538zm-1.439-4.316h-3.401l1.709-5.026 1.692 5.026zm9.483 4.484c2.454 0 4.078-1.421 4.197-3.943h-2.014c-.118 1.49-.88 2.166-2.302 2.166-1.607 0-2.436-1.083-2.436-2.741v-3.114c0-1.692.829-2.775 2.453-2.775 1.422 0 2.133.744 2.285 2.166h2.014c-.169-2.336-1.625-3.943-4.349-3.943-2.657 0-4.485 1.574-4.485 4.484v3.233c0 2.91 1.811 4.467 4.637 4.467zm11.117-.169v-4.552L186.518 39h-2.2l-2.809 5.348L178.683 39h-2.302l4.045 7.26v4.586h2.048z",fill:"#0D0C0D"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M52.41 22.923a.847.847 0 0 1-.846.846H19.017a.846.846 0 1 1 0-1.693h32.547a.846.846 0 0 1 .846.846v.001zm6.76 3.387a.849.849 0 0 1-.846.846H17.747a.847.847 0 0 1 0-1.694h40.578a.846.846 0 0 1 .846.847h-.001zm.844 3.382a.846.846 0 0 1-.846.846H16.9a.845.845 0 0 1-.599-1.445.846.846 0 0 1 .599-.248h42.268a.846.846 0 0 1 .846.847zM42.263 53.385a.843.843 0 0 1 .843-.847h1.692a.845.845 0 0 1 .323 1.628.843.843 0 0 1-.324.065h-1.692a.838.838 0 0 1-.842-.846zm22.396 0a.848.848 0 0 1 .846-.847h1.692a.845.845 0 0 1 .324 1.628.847.847 0 0 1-.324.065h-1.693a.845.845 0 0 1-.846-.846h.001zm-.416-23.693a.847.847 0 0 1 .846-.848h8.03a.847.847 0 0 1 0 1.694h-8.03a.847.847 0 0 1-.846-.846zm7.607-6.769a.847.847 0 0 1 .842-.847h1.693a.845.845 0 1 1 0 1.693h-1.693a.84.84 0 0 1-.842-.846zm1.689 3.387a.848.848 0 0 1-.847.846h-4.647a.847.847 0 0 1 0-1.694h4.647a.846.846 0 0 1 .847.847zm-.847-6.771a.847.847 0 0 1 .847-.847h.846a.847.847 0 0 1 0 1.694h-.847a.846.846 0 0 1-.846-.847zm-2.958 13.54a.844.844 0 0 1-.843.843h-51.99a.845.845 0 0 1-.496-1.567.846.846 0 0 1 .495-.122h51.991a.842.842 0 0 1 .843.846zm-.422 3.383a.847.847 0 0 1-.846.847h-50.3a.847.847 0 0 1 0-1.694h50.3a.846.846 0 0 1 .846.847zm.845 3.382a.847.847 0 0 1-.846.847H20.28a.844.844 0 0 1-.83-1.181.847.847 0 0 1 .83-.508h49.032a.84.84 0 0 1 .846.842zm-3.38 3.387a.847.847 0 0 1-.842.847H24.512a.847.847 0 0 1 0-1.693h41.424a.843.843 0 0 1 .843.846h-.001zm-2.115 3.383a.848.848 0 0 1-.846.846H35.072a.846.846 0 1 1 0-1.692h28.744a.844.844 0 0 1 .846.846zM39.726 50a.847.847 0 0 1 .846-.846h6.763a.846.846 0 1 1 0 1.693h-6.763a.846.846 0 0 1-.846-.846V50zm22.401 0a.846.846 0 0 1 .846-.846h3.38a.845.845 0 0 1 .6 1.445.846.846 0 0 1-.6.248h-3.38a.846.846 0 0 1-.846-.846V50zM19.016 19.539a.847.847 0 0 1 .846-.847h8.876a.847.847 0 0 1 0 1.694h-8.876a.846.846 0 0 1-.846-.847z",fill:"#C7AFF0"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.687 22.923a.847.847 0 0 1-.846.846H19.017a.846.846 0 1 1 0-1.693h22.824a.846.846 0 0 1 .846.846v.001zM32.54 26.31a.846.846 0 0 1-.846.846H17.746a.847.847 0 0 1 0-1.694h13.948a.846.846 0 0 1 .846.847zm5.07 3.382a.846.846 0 0 1-.846.846H16.9a.845.845 0 0 1-.598-1.445.846.846 0 0 1 .598-.248h19.865a.846.846 0 0 1 .846.847zm4.653 23.693a.848.848 0 0 1 .846-.847h1.688a.846.846 0 1 1 0 1.693h-1.688a.846.846 0 0 1-.846-.846zm5.07-20.306a.842.842 0 0 1-.846.843H16.901a.845.845 0 0 1-.496-1.567.847.847 0 0 1 .496-.122h29.588a.846.846 0 0 1 .846.846h-.001zm-4.65 3.383a.846.846 0 0 1-.847.847h-23.67a.847.847 0 0 1 0-1.694h23.67a.846.846 0 0 1 .846.847zm9.3 3.382a.847.847 0 0 1-.846.847h-30.86a.845.845 0 1 1 0-1.69h30.86a.84.84 0 0 1 .846.843zm-11.835 3.387a.845.845 0 0 1-.843.847H24.512a.847.847 0 0 1 0-1.693h14.794a.842.842 0 0 1 .843.846zm6.339 3.383a.847.847 0 0 1-.846.846H35.073a.846.846 0 1 1 0-1.692H45.64a.846.846 0 0 1 .846.846zM39.726 50a.847.847 0 0 1 .846-.846h3.38a.845.845 0 0 1 .597 1.445.846.846 0 0 1-.597.248h-3.38a.846.846 0 0 1-.847-.846V50zm-20.71-30.462a.846.846 0 0 1 .846-.847h8.876a.847.847 0 0 1 0 1.694H19.86a.846.846 0 0 1-.846-.847z",fill:"#4A1D96"})),r.createElement("defs",null,r.createElement("clipPath",{id:"a"},r.createElement("path",{fill:"#fff",transform:"translate(16 17)",d:"M0 0h176v37.231H0z"}))))))))))},t}(l.Z),E=a(8809),w=a(175),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).selected=function(e){a.setState({activeItemIndex:e})},a.componentDidMount=function(){a.selected(a.props.selectedItemIndex)},a.state={activeItemIndex:-1},a}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.items;return r.createElement("div",{className:"c-tab"},r.createElement(w.t,{modules:[E.W_],spaceBetween:0,slidesPerView:2,preventClicksPropagation:!1,preventClicks:!1,navigation:!0,centerInsufficientSlides:!0,breakpoints:{640:{slidesPerView:3,spaceBetween:0},992:{slidesPerView:4,spaceBetween:0}},onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)}},t.map((function(t,a){var n,l,c,i=["c-tab__items",(null!==(n=null===(l=(c=e.props).isActive)||void 0===l?void 0:l.call(c,t))&&void 0!==n?n:t.isActive)?"is-active":""].join(" ");return r.createElement(w.o,{key:a,className:i},r.createElement(p.Link,{to:t.path},t.title))}))))},t}(l.Z),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).pathname="",a.state={isMobileNavOpen:!1},a}(0,n.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"stateOfReformHeader"},a.componentDidMount=function(){this.pathname=window.location.pathname},a.onHamburgerClick=function(){this.setState({isMobileNavOpen:!this.state.isMobileNavOpen})},a.render=function(){var e=this,t=this.props.menuItems,a=["s-nav js-nav",this.state.isMobileNavOpen?"is-open":""].join(" ");return r.createElement(r.Fragment,null,r.createElement("header",{className:"o-section c-section--header"},r.createElement("div",{className:"o-section__wrapper"},r.createElement("div",{className:"c-header"},r.createElement("div",{className:"c-header__col"},r.createElement("div",{className:"c-logo"},r.createElement(p.Link,{to:h.n.HOME,className:"c-link c-link--logo","aria-label":"State of Democracy"},r.createElement(d.Z,{width:"99",viewBox:"0 0 99 44",paths:[{command:v.Y.STATE_OF_REFORM,fill:"white"}]})))),r.createElement("div",{className:"c-header__col"},r.createElement("div",{className:"c-hamburger__wrap"},r.createElement("div",{className:"c-hamburger",onClick:function(){e.onHamburgerClick()}},r.createElement("input",{className:"c-hamburger__checkbox js-hamburger",type:"checkbox","aria-label":"Menu"}),r.createElement("span",{className:"c-hamburger__icon"}),r.createElement("span",{className:"c-hamburger__icon"}),r.createElement("span",{className:"c-hamburger__icon"}))),r.createElement("ul",{className:a},r.createElement("li",null,r.createElement(p.Link,{to:h.A.HOME},this.translate("stateOfDemocracy"),r.createElement(d.Z,{width:"18",viewBox:"0 0 18 18",paths:[{command:v.Y.STATE_OF_D_link,fill:"white"}]})))))))),r.createElement(i.Z,{className:"c-section--tab"},r.createElement(g,{items:t,selectedItemIndex:0,isActive:function(t){return e.checkMenuActivity(t)}})))},a.checkMenuActivity=function(e){return e.path===this.pathname||e.path+"/"===this.pathname},t}(l.Z),_=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"sorLayout"},a.render=function(){var e=this.props,t=e.title,a=e.children;return r.createElement(r.Fragment,null,r.createElement(s.q,null,r.createElement("body",{className:"t-sor"})),r.createElement(u.Z,{pageTitle:this.translate("siteName")+" - "+t,description:"Page Description",keywords:["state","reform"],language:m.S.EN_US}),r.createElement(N,{menuItems:[{title:this.translate("voteAtHome"),path:h.n.HOME},{title:this.translate("rankedChoiceVoting"),path:h.n.RANKED_CHOICE_VOTING},{title:this.translate("openPrimaries"),path:h.n.OPEN_PRIMARIES},{title:this.translate("independentRedistricting"),path:h.n.INDEPENDENT_REDISTRICTING}]}),a,r.createElement(f,{menuItems:[{title:this.translate("about"),path:h.n.ABOUT},{title:this.translate("contact"),path:h.n.CONTACT},{title:this.translate("privacyPolicy"),path:h.n.PRIVACY_POLICY}]}))},t}(l.Z),z=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"whatSORMeans"},a.render=function(){var e=this.props.items;return r.createElement("div",{className:"c-what-todo"},r.createElement("div",{className:"c-section"},r.createElement("h2",{className:"c-section__title"},this.translate("whatSORMeansTitle"))),r.createElement("ul",{className:"c-list"},e.map((function(e,t){return r.createElement("li",{className:"c-list__items",key:t},r.createElement("h5",{className:"c-list__title"},r.createElement(d.Z,{width:"31",viewBox:"0 0 31 31",circles:[{cx:"15.5",cy:"15.5",r:"15.5",fill:"#ADEBD4"}]}),e.title),r.createElement("p",{className:"c-list__text"},e.description))}))))},t}(l.Z),T=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.declareTranslateCollection=function(){return"stateOfReform"},a.render=function(){var e=this.props,t=e.data,a=e.pageContext,n=a.dataType,l=a.routeName,s=a.pageContent;return console.log("route name: ",l),r.createElement(_,{title:s.title},r.createElement(i.Z,{className:"c-section--map",id:"map"},r.createElement("div",{className:"row c-map-details"},r.createElement("div",{className:"col-md-8 c-map-info"},r.createElement("span",null,"Key"),r.createElement("span",null,r.createElement("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"10.584",cy:"10.5",r:"10",fill:"#ADEBD4"})),s.keyOne),r.createElement("span",null,r.createElement("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"10.584",cy:"10.5",r:"10",fill:"#2EB88A"})),s.keyTwo),r.createElement("span",null,r.createElement("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"10.584",cy:"10.5",r:"10",fill:"#248F76"})),s.keyThree)),r.createElement("div",{className:"col-md-4 c-map-share u-hide-mobile"},r.createElement(o.Z,{absoluteLink:"/state-of-reform"+l,embeddedLink:"/embedded/sor"+l,imageResourceFileName:"embedded-sor-"+n+"-map.png"}))),r.createElement(c.Z,{data:t,dataType:n,isTooltip:!0}),r.createElement("div",{className:"c-tab__subtitle"},r.createElement(d.Z,{width:"20",viewBox:"0 0 20 20",paths:[{command:v.Y.SUBTITLE,fill:"#4B4950"}]}),r.createElement("span",null,this.translate("mapDescription"))),r.createElement("div",{className:"c-map-share is-full u-hide-desktop"},r.createElement(o.Z,{absoluteLink:"/state-of-reform"+l,embeddedLink:"/embedded/sor"+l,imageResourceFileName:"embedded-sor-"+n+"-map.png"}))),r.createElement(i.Z,{className:"c-section--todo"},r.createElement(z,{items:[{title:s.whatSectionOneTitle,description:s.whatSectionOneDescription},{title:s.whatSectionTwoTitle,description:s.whatSectionTwoDescription},{title:s.whatSectionThreeTitle,description:s.whatSectionThreeDescription}]})))},t}(l.Z)},7326:function(e,t,a){function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-templates-state-of-reform-state-of-reform-tsx-ce363baf501685de37ca.js.map