/*! For license information please see e92a335d9feda75ff61071bfc6514114905c36e8-fe1b70b6884f0ab0dbb7.js.LICENSE.txt */
(self.webpackChunksod=self.webpackChunksod||[]).push([[737],{5900:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)o.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},587:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var o,r=n(7326),i=n(4578),a=n(7294),c=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return c(t,e),t}(Error);function s(e,t){if(!e)throw new l(t)}function u(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var d=n(5900),h=n.n(d),p=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),f=function(){return f=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f.apply(this,arguments)},w=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(t){i(t)}}function c(e){try{l(o.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))},m=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},v=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},y=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},g=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function E(e,t,n){var o=t.height,r=t.width,i=b(t,["height","width"]),a=f({height:o,width:r,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,o=n.onShareWindowClose,r=n.windowHeight,i=void 0===r?400:r,a=n.windowPosition,c=void 0===a?"windowCenter":a,l=n.windowWidth,s=void 0===l?550:l;E(e,f({height:i,width:s},"windowCenter"===c?y(s,i):g(s,i)),o)},t.handleClick=function(e){return w(t,void 0,void 0,(function(){var t,n,o,r,i,a,c,l,s,u;return m(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,o=t.disabled,r=t.networkLink,i=t.onClick,a=t.url,c=t.openShareDialogOnClick,l=t.opts,s=r(a,l),o?[2]:(e.preventDefault(),n?(u=n(),v(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return p(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,o=e.disabled,r=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,b(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=h()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},n),p=f(f(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),o&&r);return a.createElement("button",f({},u,{"aria-label":u["aria-label"]||c,className:d,onClick:this.handleClick,ref:i,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(a.Component),O=k,S=function(){return S=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},S.apply(this,arguments)};var C=function(e,t,n,o){function r(r,i){var c=n(r),l=S({},r);return Object.keys(c).forEach((function(e){delete l[e]})),a.createElement(O,S({},o,l,{forwardedRef:i,networkName:e,networkLink:t,opts:n(r)}))}return r.displayName="ShareButton-"+e,(0,a.forwardRef)(r)};var x=C("facebook",(function(e,t){var n=t.quote,o=t.hashtag;return s(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+u({u:e,quote:n,hashtag:o})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});var _=C("twitter",(function(e,t){var n=t.title,o=t.via,r=t.hashtags,i=void 0===r?[]:r,a=t.related,c=void 0===a?[]:a;return s(e,"twitter.url"),s(Array.isArray(i),"twitter.hashtags is not an array"),s(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+u({url:e,text:n,via:o,hashtags:i.length>0?i.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});var B=C("whatsapp",(function(e,t){var n=t.title,o=t.separator;return s(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+u({text:n?n+o+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),N=n(9507),P=n(1938),j=n(9486),T=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={copySnippetText:n.translate("copySnippet")},n}(0,i.Z)(t,e);var n=t.prototype;return n.declareTranslateCollection=function(){return"embedModal"},n.onCopySnippet=function(){var e=this,t=this.props.embeddedLink,n="<iframe src="+(window.location.protocol+"//"+window.location.host+t)+' width="370" height="370" frameBorder="0"></iframe>';navigator.clipboard.writeText(n).then((function(){e.setState({copySnippetText:e.translate("copied")})}))},n.onDownloadImageClick=function(){var e=this.props.imageSource;window.open(e,"_blank").focus()},n.render=function(){var e=this,t=this.props,n=t.closeEmbedModal,o=t.showModal,r=t.embeddedLink,i=o?"c-modal display-block":"c-modal display-none",c="";"undefined"!=typeof document&&(o?document.getElementsByTagName("html")[0].classList.add("is-fixed"):document.getElementsByTagName("html")[0].classList.remove("is-fixed"),c=window.location.protocol+"//"+window.location.host+r);var l="<iframe src="+c+' width="370" height="370" frameBorder="0"></iframe>';return a.createElement("div",{className:i},a.createElement("div",{className:"c-modal-main"},a.createElement("div",{className:"c-state-info-section"},a.createElement("iframe",{src:r,width:"358",height:"500",frameBorder:"0"})),a.createElement("div",{className:"c-embed-section"},a.createElement("div",{className:"c-embed__head"},a.createElement("h3",{className:"c-embed__title"},this.translate("embeddedPreview")),a.createElement("button",{onClick:n,"aria-label":"Close"},a.createElement(P.Z,{width:"32",viewBox:"0 0 32 32",circles:[{cx:"16",cy:"16",r:"16",fill:"#fff"}],paths:[{command:j.Y.CLOSE,fill:"#4B4950"}]}))),a.createElement("div",{className:"c-embed-iframe"},a.createElement("textarea",{readOnly:!0},l)),a.createElement("div",{className:"row c-embed-btn__wrap"},a.createElement("div",{className:"col-md-6 c-embed-btn__col"},a.createElement("button",{className:"c-btn is-purple has-left-icon",onClick:function(){e.onCopySnippet()}},a.createElement(P.Z,{width:"21",viewBox:"0 0 21 20",paths:[{command:j.Y.COPY_SNIPPET,fill:"#fff"}]}),this.state.copySnippetText)),a.createElement("div",{className:"col-md-6 c-embed-btn__col"},a.createElement("button",{className:"c-btn is-white has-left-icon",onClick:function(){e.onDownloadImageClick()}},a.createElement(P.Z,{width:"20",viewBox:"0 0 20 20",paths:[{command:j.Y.DOWNLOAD,fill:"#4A1D96"}]}),this.translate("downloadImage")))))))},t}(N.Z),A=n(3089),R=n(5208),L=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isShareBoxOpen:!1,isEmbedModelOpen:!1,copyLinkText:n.translate("copy")},n.onEmbedButtonClick=n.onEmbedButtonClick.bind((0,r.Z)(n)),n}(0,i.Z)(t,e);var n=t.prototype;return n.declareTranslateCollection=function(){return"share"},n.onShareButtonClick=function(){this.setState({isShareBoxOpen:!this.state.isShareBoxOpen})},n.onCopyClick=function(){var e=this,t=this.props.absoluteLink,n=window.location.protocol+"//"+window.location.host+"/"+t;navigator.clipboard.writeText(n).then((function(){e.setState({copyLinkText:e.translate("copied")})}))},n.onEmbedButtonClick=function(){this.setState({isEmbedModelOpen:!this.state.isEmbedModelOpen})},n.getResourcesPath=function(){return""},n.render=function(){var e=this,t=this.props,n=t.absoluteLink,o=t.imageResourceFileName,r=t.embeddedLink,i=t.description,c=this.state.isShareBoxOpen,l="";"undefined"!=typeof window&&(l=window.location.protocol+"//"+window.location.host+"/"+n);var s=["c-share__box",c?"is-show":"is-hide"].join(" ");return a.createElement("div",{className:"c-share"},a.createElement(T,{closeEmbedModal:this.onEmbedButtonClick,showModal:this.state.isEmbedModelOpen,embeddedLink:r,imageSource:this.getResourcesPath()+"/"+o}),a.createElement(A.Z,{colorSchema:R.c.WHITE,onClick:function(){e.onShareButtonClick()}},this.translate("share"),a.createElement(P.Z,{width:"20",viewBox:"0 0 20 21",paths:[{command:j.Y.SHARE,fill:"#4A1D96"}]})),a.createElement("div",{className:s},a.createElement("div",{className:"c-share-arrow"}),a.createElement(x,{url:l,quote:i},a.createElement(P.Z,{width:"24",height:"24",viewBox:"0 0 24 24",paths:[{command:j.Y.FACEBOOK,fill:"#1877F2"}]}),a.createElement("span",null,"Facebook")),a.createElement(_,{url:l},a.createElement(P.Z,{width:"24",height:"24",viewBox:"0 0 24 24",paths:[{command:j.Y.TWITTER,fill:"#1DA1F2"}]}),a.createElement("span",null,"Twitter")),a.createElement(B,{url:l},a.createElement(P.Z,{width:"24",height:"24",viewBox:"0 0 24 24",paths:[{command:j.Y.WHATSAPP,fill:"#25D366",fillRule:"evenodd",clipRule:"evenodd"}]}),a.createElement("span",null,"WhatsApp")),a.createElement("button",{className:"react-share__ShareButton is-copy",onClick:function(){e.onCopyClick()}},a.createElement(P.Z,{width:"24",height:"24",viewBox:"0 0 24 24",paths:[{command:j.Y.COPY,fillRule:"evenodd",clipRule:"evenodd",fill:"#000"}]}),a.createElement("span",null,this.state.copyLinkText)),r?a.createElement("button",{className:"react-share__ShareButton",onClick:function(){e.onEmbedButtonClick()}},a.createElement(P.Z,{width:"24",height:"24",viewBox:"0 0 24 24",paths:[{command:j.Y.EMBED,fillRule:"evenodd",clipRule:"evenodd",fill:"#000"}]}),a.createElement("span",null,this.translate("embed"))):a.createElement(a.Fragment,null)))},t}(N.Z)},5208:function(e,t,n){"use strict";var o;n.d(t,{c:function(){return o}}),function(e){e.PURPLE="purple",e.WHITE="white",e.TRANSPARENT="transparent"}(o||(o={}))},3089:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(4578),r=n(7294),i=n(9507),a=n(5208),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props.colorSchema,t=["c-btn","is-"+(void 0===e?a.c.PURPLE:e)].join(" ");return r.createElement("button",{className:t,type:"button",onClick:this.props.onClick},this.props.children)},t}(i.Z)}}]);
//# sourceMappingURL=e92a335d9feda75ff61071bfc6514114905c36e8-fe1b70b6884f0ab0dbb7.js.map