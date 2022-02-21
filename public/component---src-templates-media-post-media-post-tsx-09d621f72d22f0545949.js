"use strict";(self.webpackChunksod=self.webpackChunksod||[]).push([[808],{9401:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(4578),i=a(5444),r=a(7294),o=a(9507),c=a(1938),l=a(9486),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.crumbItems;return r.createElement("ul",{className:"c-breadcrumb"},e.map((function(e,t){return r.createElement("li",{key:t},r.createElement(i.Link,{to:e.location}," ",e.label," "),r.createElement(c.Z,{width:"6",height:"10",viewBox:"0 0 6 10",paths:[{command:l.Y.CHEVRON_RIGHT,fill:"#0D0C0D"}]}))})))},t}(o.Z)},6334:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(4578),i=a(7294),r=a(9507),o=a(4117),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.form;return i.createElement("div",{className:"c-joinus"},i.createElement("div",{className:"row c-joinus__wrapper"},i.createElement("div",{className:"col-lg-6 c-joinus__col"},i.createElement("h3",{className:"c-joinus__title"},"Join us"),i.createElement("p",{className:"c-joinus__text"},"Stay up to date on our movement, and learn how you can get involved and make a difference.")),i.createElement("div",{className:"col-lg-6 c-joinus__col"},i.createElement(o.Z,{form:e,formClassName:"c-form-newsletter"}))))},t}(r.Z)},9039:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(4578),i=a(7294),r=a(9507),o=a(7676),c=a(3089),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={latestIndex:t.showMoreCount>t.items.length?t.items.length:t.showMoreCount},a}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.items,n=t.showMoreCount,r=this.state.latestIndex,l=[];return r>=0&&(l=a.slice(0,r)),i.createElement("div",{className:"c-media-posts"},l.length>0&&i.createElement("div",{className:"row c-posts-all"},l.map((function(e,t){return i.createElement(o.Z,{item:e,key:t})}))),r<a.length-1&&i.createElement(c.Z,{onClick:function(){e.setState((function(e){return{latestIndex:e.latestIndex+n>a.length?a.length:e.latestIndex+n}}))}},"Show More"))},t}(r.Z)},7676:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(4578),i=a(5444),r=a(7294),o=a(9507),c=a(7535),l=a(9205),s=a(1938),d=a(9486),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={imageIsReady:!1},a}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e,t=this,a=new Image;a.onload=function(){return t.setState({imageIsReady:!0})},a.src=null===(e=this.props.item.featuredImage)||void 0===e?void 0:e.node.sourceUrl},a.render=function(){var e,t,a,n,o,m,u,v,h,p,f,g=this.props.item,E=this.state.imageIsReady;return r.createElement("div",{className:"col-lg-3 col-md-6 card c-card_items"},r.createElement("div",{className:"c-card__container"},r.createElement("div",{className:"media media--transparent media--card media--hover-effect c-card__img"},E?r.createElement("img",{srcSet:null===(e=g.featuredImage)||void 0===e?void 0:e.node.srcSet,sizes:"(min-width: 1504px) 702px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)",src:null===(t=g.featuredImage)||void 0===t?void 0:t.node.sourceUrl,alt:null===(a=g.featuredImage)||void 0===a?void 0:a.node.altText,loading:"lazy",width:null===(n=g.featuredImage)||void 0===n?void 0:n.node.mediaDetails.width,height:null===(o=g.featuredImage)||void 0===o?void 0:o.node.mediaDetails.height}):r.createElement("div",{className:"loading-overlay__spinner"},r.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"presentation",className:"spinner",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",cx:"33",cy:"33",r:"30"}))),r.createElement(i.Link,{className:"c-link",to:"/media"+(null===(m=g.categories)||void 0===m?void 0:m.nodes[0].uri)+g.slug}),r.createElement(c.Z,{to:"/media"+(null===(u=g.categories)||void 0===u?void 0:u.nodes[0].uri),colorSchema:l.a.HIGHLIGHTED},null===(v=g.categories)||void 0===v?void 0:v.nodes[0].name)),r.createElement("div",{className:"c-media-featured__wrapper"},r.createElement("div",{className:"c-card__details"},r.createElement("span",null,new Date(g.date).toDateString()),r.createElement("span",null,"BY ",null===(h=g.author)||void 0===h?void 0:h.node.name)),r.createElement("h6",{className:"c-card__title"},r.createElement(i.Link,{className:"c-link",to:"/media"+(null===(p=g.categories)||void 0===p?void 0:p.nodes[0].uri)+g.slug},g.title)),r.createElement(c.Z,{to:"/media"+(null===(f=g.categories)||void 0===f?void 0:f.nodes[0].uri)+g.slug,colorSchema:l.a.HIGHLIGHTED},"Read More",r.createElement(s.Z,{width:"13",viewBox:"0 0 20 14",paths:[{command:d.Y.ARROW_RIGHT,fill:"#4A1D96"}]})))))},t}(o.Z)},7897:function(e,t,a){var n;a.d(t,{a:function(){return n}}),function(e){e.SUMMARY="summary",e.SUMMARY_LARGE_IMAGE="summary_large_image",e.OBJECT="object"}(n||(n={}))},2726:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(4578),i=a(7294),r=a(5414),o=a(9507),c=a(7897),l=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.render=function(){var e=this.props,t=e.title,a=e.description,n=e.imageResourceFileName,o=e.type,l=this.getResourcesPath()+"/"+n;return i.createElement(r.q,{meta:[{property:"og:title",content:t},{property:"og:type",content:c.a.OBJECT},{property:"og:description",content:a},{property:"og:image",content:l},{name:"twitter:card",content:o},{name:"twitter:title",content:t},{name:"twitter:image:src",content:l},{name:"twitter:description",content:a}]})},a.getResourcesPath=function(){return"http://localhost:8000/static/images"},t}(o.Z)},9205:function(e,t,a){var n;a.d(t,{a:function(){return n}}),function(e){e.PURPLE="purple",e.WHITE="white",e.TRANSPARENT="transparent",e.HIGHLIGHTED="highlighted"}(n||(n={}))},7535:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(4578),i=a(5444),r=a(7294),o=a(9507),c=a(9205),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.colorSchema,a=void 0===t?c.a.PURPLE:t,n=e.to,o=["c-btn","is-"+a].join(" ");return r.createElement(i.Link,{className:o,to:n},this.props.children)},t}(o.Z)},3219:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(4578),i=a(7294),r=a(9507),o=a(9401),c=a(4471),l=a(6334),s=a(9039),d=a(5695),m=a(2726),u=a(7897),v=a(8965),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e,t,a,n,r,h,p,f,g,E,_,w,N,Z,y=this.props.data.form.nodes[0],I=this.props.data,x=I.post,R=I.relatedPosts;return i.createElement(v.Z,{title:x.title},i.createElement(m.Z,{type:u.a.SUMMARY,title:x.title,description:x.title,imageResourceFileName:null===(e=x.featuredImage)||void 0===e?void 0:e.node.sourceUrl}),i.createElement(c.Z,{className:"c-section--pageheader"},i.createElement("div",{className:"c-pageheader"},i.createElement(o.Z,{crumbItems:[{label:"State of Democracy",location:"/"},{label:"Media",location:"/media"},{label:null===(t=x.categories)||void 0===t?void 0:t.nodes[0].name,location:"/media"+(null===(a=x.categories)||void 0===a?void 0:a.nodes[0].uri)}]}),i.createElement("div",{className:"c-section"},i.createElement("h1",{className:"c-section__title"},x.title)))),i.createElement(c.Z,{className:"c-section--article u-media-width"},i.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},i.createElement("div",{className:"c-article__hero"},i.createElement("div",{className:"media media--transparent media--landscape"},i.createElement("img",{srcSet:null===(n=x.featuredImage)||void 0===n?void 0:n.node.srcSet,sizes:"(min-width: 1504px) 702px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)",src:null===(r=x.featuredImage)||void 0===r?void 0:r.node.sourceUrl,alt:null===(h=x.featuredImage)||void 0===h?void 0:h.node.altText,loading:"lazy",width:null===(p=x.featuredImage)||void 0===p?void 0:p.node.mediaDetails.width,height:null===(f=x.featuredImage)||void 0===f?void 0:f.node.mediaDetails.height}))),i.createElement("div",{className:"c-article__wrapper"},i.createElement("div",{className:"c-article__col"},i.createElement("div",{className:"c-article__share"},i.createElement("div",{className:"c-article-share__title"},"Share"),i.createElement(d.Z,{description:x.title,absoluteLink:"/media"+(null===(g=x.categories)||void 0===g?void 0:g.nodes[0].uri)+x.slug,imageResourceFileName:"",isExpanded:!0}))),i.createElement("div",{className:"c-article__col"},i.createElement("div",{className:"c-article__author"},i.createElement("img",{alt:null===(E=x.author)||void 0===E?void 0:E.node.name,src:null===(_=x.author)||void 0===_?void 0:_.node.avatar.url,width:null===(w=x.author)||void 0===w?void 0:w.node.avatar.width,height:null===(N=x.author)||void 0===N?void 0:N.node.avatar.height,loading:"lazy",className:"c-article__author-image"}),i.createElement("span",null,"BY "+(null===(Z=x.author)||void 0===Z?void 0:Z.node.name)),i.createElement("span",null,new Date(x.date).toDateString())),i.createElement("div",{className:"c-article__content s-content",dangerouslySetInnerHTML:{__html:x.content}}))))),i.createElement(c.Z,{className:"c-section--joinus u-media-width"},i.createElement(l.Z,{form:y})),i.createElement(c.Z,{className:"c-section--related u-media-width"},i.createElement("div",{className:"c-section"},i.createElement("h2",{className:"c-section__title"},"Related Articles")),i.createElement(s.Z,{items:null==R?void 0:R.nodes,showMoreCount:4})))},t}(r.Z)}}]);
//# sourceMappingURL=component---src-templates-media-post-media-post-tsx-09d621f72d22f0545949.js.map