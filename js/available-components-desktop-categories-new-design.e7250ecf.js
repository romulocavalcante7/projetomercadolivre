"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3521],{61678:(e,t,n)=>{n.d(t,{Ay:()=>N,Wu:()=>b,Zp:()=>N,wL:()=>k});var r=n(58168),a=n(80045),c=n(96540),o=n(46942),s=n.n(o),i=n(69247),l=n(73620);const d="default",m="accent",u="green",h="orange",f="none";var p=e=>{switch(e){case d:return;case m:case"neutral":return m;case"red":case"error":return"red";case h:case"warning":return h;case u:case"success":return u;case f:return f;default:return}};var v=e=>{switch(e){case"default":case"16":return 16;case"0":return 0;case"24":return 24;case"32":return 32;default:return e}};const A="andes-card",y=("".concat(A,"--secondary"),"".concat(A,"__header"),"".concat(A,"__content")),g="".concat(A,"__footer"),w=["animated","borderColor","children","className","color","component","id","paddingSize","shadow"];var N=function(){const e=(0,c.forwardRef)(((e,t)=>{let{animated:n=!1,borderColor:o,children:l,className:m,color:u,component:h="div",id:f,paddingSize:y=16,shadow:g="flat"}=e,N=(0,a.A)(e,w);const b=(0,c.useMemo)((()=>p(u||o)),[u,o]),_=(0,c.useMemo)((()=>v(y)),[y]),k=(0,i.Bi)(f),C=void 0===b&&void 0!==u&&u!==d,E=s()(A,m,"".concat(A,"--").concat(g),{["".concat(A,"--").concat(b)]:b,["".concat(A,"--padding-").concat(_)]:"number"==typeof _,["".concat(A,"--secondary-color")]:C,["".concat(A,"--animated")]:n});return c.createElement(h,(0,r.A)({style:(()=>{if(C)return{"--background-secondary-color":u}})()},N,{className:E,id:k,ref:t}),l)}));return e.displayName="Card",e}();var b=function(){const e=(0,c.forwardRef)(((e,t)=>{let{children:n,className:r,component:a="div"}=e;return c.createElement(a,{className:s()(y,r),ref:t},n)}));return e.displayName="CardContent",e}();const _=["href","icon","onClick","text","title"];var k=function(){const e=(0,c.forwardRef)(((e,t)=>{let{border:n,children:o,className:i,component:d="div",link:m={},showBorder:u=!0}=e;const h=Object.keys(m).length>0,f=void 0!==n?n:u,p=s()(g,i,{["".concat(g,"--common")]:h,["".concat(g,"--border")]:f}),{href:v,icon:A,onClick:y,text:w,title:N}=m,b=(0,a.A)(m,_);if(w){if(v){const e=t,n=s()(p,"".concat(g,"--link"));return c.createElement("a",(0,r.A)({href:v,className:n,onClick:y,title:N,ref:e},b),w,A&&(0,l.A)("span",{className:"".concat(g,"-arrow")}))}if(y){const e=s()(p,"".concat(g,"--button")),n=t,a=b;return c.createElement("button",(0,r.A)({className:e,onClick:y,ref:n},a),w,A&&(0,l.A)("span",{className:"".concat(g,"-arrow")}))}}return c.createElement(d,{className:p,ref:t},o)}));return e.displayName="CardFooter",e}()},54812:(e,t,n)=>{n.d(t,{h:()=>r});const r=e=>{}},3959:(e,t,n)=>{n.d(t,{Hg:()=>h,ZL:()=>d,_V:()=>l,s6:()=>u});var r=n(73620),a=n(96540),c=n(40961),o=n(58168),s=(n(46942),n(80045)),i=n(54812);n(50411);var l=e=>{let{className:t,width:n,height:a,src:c,src2x:o,title:s}=e;return(0,r.A)("img",{className:t,width:n,height:a,src:c,alt:s,srcSet:o&&"".concat(c," 1x, ").concat(o," 2x")})};a.Component;var d=e=>{let{children:t,container:n,onMounted:r,className:o=""}=e;const s=(0,a.useRef)(),i=(0,a.useRef)(),[l,d]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{l&&"function"==typeof r&&r(!0)}),[l]),(0,a.useEffect)((()=>{var e,t;return s.current=document.createElement("div"),null===(e=s.current)||void 0===e||e.setAttribute("class",o),i.current=n||document.body,null===(t=i.current)||void 0===t||t.appendChild(s.current),d(!0),()=>{s.current&&setTimeout((()=>{var e;null===(e=i.current)||void 0===e||e.removeChild(s.current)}),0)}}),[]),l&&s.current?(0,c.createPortal)(t,s.current):""};const m=["children","component"];var u=e=>{let{children:t,component:n="span"}=e,r=(0,s.A)(e,m);return a.createElement(n,(0,o.A)({className:"andes-visually-hidden"},r),t)};var h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};class n extends a.PureComponent{constructor(n){super(n),"undefined"==typeof window&&n.extend&&(0,i.h)({type:"headless",component:t.name||e.displayName})}render(){const{forwardedRef:t}=this.props;return a.createElement(e,(0,o.A)({},this.props,{ref:t}))}}return a.forwardRef(((e,t)=>a.createElement(n,(0,o.A)({},e,{forwardedRef:t}))))}},67627:(e,t,n)=>{var r;function a(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=a;else if(o>1){for(var s=Array(o),i=0;i<o;i++)s[i]=arguments[i+3];t.children=s}if(t&&c)for(var l in c)void 0===t[l]&&(t[l]=c[l]);else t||(t=c||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,{_:()=>a})},82212:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(89379),a=n(73620),c=n(80045),o=(n(96540),n(74848));const s=["label","target","htmlTarget","accesibilityText"];function i(e){let{label:t,target:n,htmlTarget:i,accesibilityText:l}=e,d=(0,c.A)(e,s);return(0,o.jsxs)("a",(0,r.A)((0,r.A)({href:n,target:i},d),{},{children:[t,l&&(0,a.A)("span",{className:"andes-visually-hidden"},void 0,l)]}))}i.defaultProps={htmlTarget:null,accesibilityText:null};const l=i},43982:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(73620),a=(n(96540),n(61678)),c=n(46942),o=n.n(c),s=n(24503);const i="card-grid",l=e=>{var t;let{item:n,className:c,shadow:l,preload:d}=e;return(0,r.A)(a.Zp,{className:o()(c,"".concat(i,"-item")),shadow:l,paddingSize:8},void 0,(0,r.A)(a.Wu,{className:o()("".concat(i,"-container-image"))},void 0,(0,r.A)(s.A,{src:null==n||null===(t=n.picture)||void 0===t?void 0:t.src,alt:"".concat(n.title),preload:d,ariaHidden:"true"})),(0,r.A)(a.wL,{className:o()("".concat(i,"-footer"))},void 0,(0,r.A)("p",{className:o()("".concat(i,"-item__title"))},void 0,(0,r.A)("a",{className:o()("".concat(i,"-anchor")),href:n.target||n.permalink},void 0,n.title))))}},57951:(e,t,n)=>{function r(e){return e.displayName||e.name||"Component"}function a(e,t){const n=r(e),a=r(t);return"".concat(n,"(").concat(a,")")}n.d(t,{A:()=>a})},6295:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(89379),a=n(96540),c=n(40961),o=n(74629),s=n(57951),i=n(74848);const l=n.g.requestIdleCallback?requestIdleCallback:setTimeout;const d=function(e){if(!n.g.IntersectionObserver)return e;class t extends a.Component{constructor(e){super(e),this.track=this.track.bind(this)}componentDidMount(){this.element=c.findDOMNode(this),this.element&&(this.observer=new IntersectionObserver(this.track,{threshold:.5}),this.observer.observe(this.element))}track(e){const{track:t}=this.props;e[0].isIntersecting&&(this.observer.unobserve(this.element),this.observer.disconnect(),l((()=>{o.A.notifyPrint(t)})))}render(){return(0,i.jsx)(e,(0,r.A)({},this.props))}}return t.displayName=(0,s.A)(t,e),t.defaultProps={track:null,className:""},t}},13269:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(89379),a=n(73620),c=n(96540),o=n(37492),s=n(79013),i=n(82212),l=n(2105),d=n(43982),m=n(6295),u=n(22819),h=n(74848);const f=3;function p(e){let{elements:t}=e;const n=f-t.length,r=Array.from({length:n},((e,t)=>(0,a.A)("div",{className:"filler"},t)));return(0,a.A)("div",{className:"category-column"},void 0,t.map((e=>(0,c.createElement)(d.A,{item:e,key:e.id}))),r)}const v=(0,s.injectI18n)((0,m.A)((function(e){let{title:t,elements:n,type:c,view_more_action:s}=e;const d=(0,u.A)(n,f);return(0,a.A)(l.A,{type:c},void 0,(0,a.A)("div",{className:"row container"},void 0,(0,a.A)("div",{className:"wrapper"},void 0,(0,a.A)("div",{className:"section-header"},void 0,(0,a.A)("h2",{},void 0,t),(0,h.jsx)(i.A,(0,r.A)((0,r.A)({},s),{},{id:null}))),(0,a.A)(o.G,{slidesPerView:4,spacing:20,pagination:{position:"top",mode:"light"}},void 0,d.map((e=>(0,a.A)(o.j5,{},e.id,(0,h.jsx)(p,(0,r.A)({},e)))))))))})))},22819:(e,t,n)=>{function r(e,t){const n=[];for(let r=0,a=e.length/t;r<a;r+=1){const a=e.slice(t*r,t*(r+1));n.push({elements:a,id:a.map((e=>e.id)).join("-")})}return n}n.d(t,{A:()=>r})},74629:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(89379);const a=class{static notifyPrint(e){this.notify(e,"print")}static notify(e,t){const n={};melidata("createEventTrack",n),melidata("withPath","/component",n),melidata("withData",(0,r.A)({c_event:t},e),n),melidata("sendTrack",n,"component_prints")}static trackRecommendations(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"print",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;const{event_data:c,experiments:o,experiment:s}=e,i={};"function"==typeof melidata&&(melidata("print"===t?"createEventTrack":"createViewTrack",i),r?melidata("withPath",r,i):n?melidata("withPath","/recommendations/".concat(t),i):melidata("withPath","/recommendations",i),melidata("withData",c,i),(s||o)&&melidata("withExperiments",s||o,i),n&&melidata("withStream","recommendations",i),a&&(i.useBeacon=!0),melidata("sendTrack",i))}}}}]);
//# sourceMappingURL=available-components-desktop-categories-new-design.e7250ecf.js.map