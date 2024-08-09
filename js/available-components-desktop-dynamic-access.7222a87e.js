"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[141],{61678:(e,a,t)=>{t.d(a,{Ay:()=>f,Wu:()=>w,Zp:()=>f,wL:()=>b});var c=t(58168),s=t(80045),n=t(96540),o=t(46942),i=t.n(o),r=t(69247),l=t(73620);const d="default",m="accent",u="green",p="orange",v="none";var _=e=>{switch(e){case d:return;case m:case"neutral":return m;case"red":case"error":return"red";case p:case"warning":return p;case u:case"success":return u;case v:return v;default:return}};var A=e=>{switch(e){case"default":case"16":return 16;case"0":return 0;case"24":return 24;case"32":return 32;default:return e}};const h="andes-card",g=("".concat(h,"--secondary"),"".concat(h,"__header"),"".concat(h,"__content")),y="".concat(h,"__footer"),N=["animated","borderColor","children","className","color","component","id","paddingSize","shadow"];var f=function(){const e=(0,n.forwardRef)(((e,a)=>{let{animated:t=!1,borderColor:o,children:l,className:m,color:u,component:p="div",id:v,paddingSize:g=16,shadow:y="flat"}=e,f=(0,s.A)(e,N);const w=(0,n.useMemo)((()=>_(u||o)),[u,o]),x=(0,n.useMemo)((()=>A(g)),[g]),b=(0,r.Bi)(v),C=void 0===w&&void 0!==u&&u!==d,k=i()(h,m,"".concat(h,"--").concat(y),{["".concat(h,"--").concat(w)]:w,["".concat(h,"--padding-").concat(x)]:"number"==typeof x,["".concat(h,"--secondary-color")]:C,["".concat(h,"--animated")]:t});return n.createElement(p,(0,c.A)({style:(()=>{if(C)return{"--background-secondary-color":u}})()},f,{className:k,id:b,ref:a}),l)}));return e.displayName="Card",e}();var w=function(){const e=(0,n.forwardRef)(((e,a)=>{let{children:t,className:c,component:s="div"}=e;return n.createElement(s,{className:i()(g,c),ref:a},t)}));return e.displayName="CardContent",e}();const x=["href","icon","onClick","text","title"];var b=function(){const e=(0,n.forwardRef)(((e,a)=>{let{border:t,children:o,className:r,component:d="div",link:m={},showBorder:u=!0}=e;const p=Object.keys(m).length>0,v=void 0!==t?t:u,_=i()(y,r,{["".concat(y,"--common")]:p,["".concat(y,"--border")]:v}),{href:A,icon:h,onClick:g,text:N,title:f}=m,w=(0,s.A)(m,x);if(N){if(A){const e=a,t=i()(_,"".concat(y,"--link"));return n.createElement("a",(0,c.A)({href:A,className:t,onClick:g,title:f,ref:e},w),N,h&&(0,l.A)("span",{className:"".concat(y,"-arrow")}))}if(g){const e=i()(_,"".concat(y,"--button")),t=a,s=w;return n.createElement("button",(0,c.A)({className:e,onClick:g,ref:t},s),N,h&&(0,l.A)("span",{className:"".concat(y,"-arrow")}))}}return n.createElement(d,{className:_,ref:a},o)}));return e.displayName="CardFooter",e}()},45794:(e,a,t)=>{t.d(a,{A:()=>m});var c=t(89379),s=t(80045),n=(t(55081),t(96540)),o=t(46942),i=t.n(o),r=t(74848);const l=["id","title","height","onLoad","onMessage","scrolling","src","className"],d=e=>{let{id:a,title:t,height:o,onLoad:d,onMessage:m,scrolling:u,src:p,className:v}=e,_=(0,s.A)(e,l);const A=(0,n.useRef)(null);return(0,n.useEffect)((()=>{function e(e){m&&e.data&&e.data.type&&m(e.data.type,e.data,A.current)}return globalThis.addEventListener("message",e),()=>{globalThis.removeEventListener("message",e)}})),(0,r.jsx)("iframe",(0,c.A)({id:a,className:i()("ui-pdp-iframe",v),onLoad:d,title:t,src:p,frameBorder:"0",scrolling:u,style:o?{height:"".concat(o,"px")}:null,ref:A},_))};d.defaultProps={id:null,className:null,height:null,title:null,onLoad:null,onMessage:null,scrolling:"auto"};const m=n.memo(d)},15052:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ye});var c=t(73620),s=(t(23792),t(62953),t(96540)),n=t(37492),o=(t(74423),t(89463),t(46942)),i=t.n(o),r=t(37808),l=t(61678),d=t(93463),m=t(88430),u=t(6295),p=t(76957),v=t(18719),_=t(89379),A=t(5556),h=t(82212),g=t(74848);h.A.propTypes={cardName:A.string,modal:A.string,target:A.string,label:A.object,isCustomCard:A.bool,message:A.string,accesibilityText:A.string};const y=e=>{let{cardName:a,target:t,label:s,isCustomCard:n,message:o,actionProps:i,accesibilityText:l}=e;const d=()=>{window&&o&&window.freya.emit(o)};return n?(0,c.A)(r.$n,{hierarchy:"transparent",size:"small",fullWidth:!0,label:s,className:"".concat(a,"__action"),onClick:d},void 0,s,l&&(0,c.A)("span",{className:"andes-visually-hidden"},void 0,l)):(0,g.jsx)(h.A,(0,_.A)({label:s,target:t,accesibilityText:l},i))};var N=t(45794),f=t(80045);const w=e=>{let{onLoad:a,targetModal:t}=e;return(0,c.A)("iframe",{id:"payment-methods_v2",className:"payment-methods_v2",title:"payments-methods",onLoad:a,style:{border:"none",height:"80%"},width:"100%",src:t,scrolling:"yes"})};w.defaultProps={onLoad:null,targetModal:null};const x=s.memo(w),b=["cardId"],C=e=>{let{cardId:a}=e,t=(0,f.A)(e,b);return"payment_methods"===a?(0,g.jsx)(x,(0,_.A)({},t)):null};C.defaultProps={cardId:null};const k=s.memo(C);var z=t(41388),L=t(34883),I=t(52151),T=t(22084),M=t(26718),D=t(83467),E=t(50162);const P=e=>{let{className:a,deviceType:t,alt:s}=e;return(0,c.A)(E.Image,{className:i()("ui-homes-icon ui-homes-icon--da-payment-methods",a),src:"dynamic-access-".concat(t,"/payment-methods.svg"),alt:s,lazyload:"off",preload:!0})};P.defaultProps={className:null,deviceType:"desktop",alt:""};const S=s.memo(P);S.ICON_ID="home-da-payment-methods";const j=S,O=e=>{let{className:a,deviceType:t,alt:s}=e;return(0,c.A)(E.Image,{className:i()("ui-homes-icon ui-homes-icon--da-registration",a),src:"dynamic-access-".concat(t,"/registration-da.svg"),alt:s,lazyload:"off",preload:!0})};O.defaultProps={className:null,deviceType:"desktop",alt:""};const W=s.memo(O);W.ICON_ID="home-da-registration";const $=W,V=e=>{let{className:a,deviceType:t,alt:s}=e;return(0,c.A)(E.Image,{className:i()("ui-homes-icon ui-homes-icon--da-top-sales",a),src:"dynamic-access-".concat(t,"/top-sale.svg"),alt:s,lazyload:"off",preload:!0})};V.defaultProps={className:null,deviceType:"desktop",alt:""};const B=s.memo(V);B.ICON_ID="home-da-top-sales";const F=B,H=e=>{let{className:a,deviceType:t,alt:s}=e;return(0,c.A)(E.Image,{className:i()("ui-homes-icon ui-homes-icon--da-help",a),src:"dynamic-access-".concat(t,"/help-da.svg"),alt:s,lazyload:"off",preload:!0})};H.defaultProps={className:null,deviceType:"desktop",alt:""};const K=s.memo(H);K.ICON_ID="home-da-help";const R=K;var U=t(46819),Z=t(84680),q=t(9861);const J=e=>{let{className:a,deviceType:t,alt:s}=e;return(0,c.A)(E.Image,{className:i()("ui-homes-icon ui-homes-icon--da-sell-with-us",a),src:"dynamic-access-".concat(t,"/sell-with-us.svg"),alt:s,lazyload:"off",preload:!0})};J.defaultProps={className:null,deviceType:"desktop",alt:""};const G=s.memo(J);G.ICON_ID="home-da-sell-with-us";const Y=G;var Q=t(72294),X=t(61916),ee=t(1218);const ae=(0,X.A)([z.A,L.A,I.A,T.A,M.A,D.A,j,$,F,R,Z.A,U.A,q.A,Y,Q.A]),te="dynamic-access-card",ce=(0,u.A)((0,p.A)((e=>{let{card:a,track:t,type:n,sizeCard:o,isCardModal:u,isCustomCard:p,cardId:_}=e;const{title:A,picture:h,description:f,action:w,modal:x={},message:b=""}=a,{label:C,target:z}=w,{title_modal:L,text_close:I,target_modal:T,hash_url:M=""}=x,D=ee.oe.includes(_),E="".concat(te,"-ecosistemic"),P={className:"".concat(E,"__action"),onClick:()=>{(0,v.s)(t)}},[S,j]=(0,s.useState)(!1),[O,W]=(0,s.useState)(!1),$=e=>{if(!D){const a=e.target;if(a.style.height="".concat(a.contentWindow.document.body.scrollHeight,"px"),M&&a.contentWindow.document.querySelector(M)){document.querySelector(".andes-modal__scroll").scrollTop=a.contentWindow.document.querySelector(M).offsetTop}}W(!1)};return(0,c.A)(l.Zp,{className:i()(te,"dynamic-access-card-common","".concat(te,"__").concat(o),{"dynamic-access-card-icon":n===ee.bH,"dynamic-access-card-ilustrator":n===ee.uF})},void 0,(0,c.A)("div",{className:E},void 0,(0,c.A)("div",{className:"".concat(E,"-header")},void 0,A&&(0,c.A)("h2",{className:"".concat(E,"__title")},void 0,A.text)),h&&(0,c.A)("div",{className:"".concat(E,"-icon"),"aria-hidden":"true"},void 0,ae(h.id,{deviceType:"desktop",alt:null==A?void 0:A.text})),f&&(0,c.A)("div",{className:"".concat(E,"-description")},void 0,(0,c.A)("span",{className:"".concat(E,"__description")},void 0,f.text)),(0,c.A)("div",{className:"".concat(E,"-footer")},void 0,u?(0,g.jsxs)(g.Fragment,{children:[(0,c.A)(r.$n,{hierarchy:"transparent",size:"small",fullWidth:!0,label:C.text,className:"".concat(E,"__action"),onClick:e=>{e.ctrlKey||e.metaKey?window.open(z,"_blank"):(e.preventDefault(),j(!0),W(!0))}},void 0,C.text,A&&(0,c.A)("span",{className:"andes-visually-hidden"},void 0,A.text)),(0,c.A)(d.a,{open:S,onClose:()=>{j(!1)},type:"large",maxWidth:840,title:L,className:i()("modal",{iframeScroll:D}),closeButtonSrLabel:I,url:"#show-modal"},void 0,(0,c.A)(m.A,{modifier:"fullscreen",size:"large",show:O}),D?(0,c.A)(k,{targetModal:T,onLoad:$,cardId:_}):(0,c.A)(N.A,{title:L,src:T,onLoad:$,scrolling:"no"}))]}):(0,c.A)(y,{cardName:E,target:z,label:C.text,isCustomCard:p,message:b,actionProps:P,accesibilityText:null==A?void 0:A.text}))))})));var se=t(14269),ne=t(95074),oe=t(29122),ie=t(88372);const re="dynamic-access-card-item",le=(0,u.A)((0,p.A)((e=>{var a,t;let{card:s,track:n,sizeCard:o,index:r}=e;const{header:d,picture:m,name:u,permalink:p,price:A={},shipping:y={},action:N,tag:f,attributes:w,items_images:x,additional_items:b}=s,{original_price:C,current_value:k,discount:z}=A,{accessibility_text:L}=y,I=N||z||y&&y.text,T=x&&x.length<=ee.it?x.length:ee.it;return(0,c.A)(l.Zp,{className:i()("dynamic-access-card","dynamic-access-card__".concat(o),re)},void 0,d&&(0,c.A)("div",{className:"".concat(re,"-header")},void 0,(0,c.A)("h2",{className:"".concat(re,"__title")},void 0,d.text)),x&&(0,c.A)("div",{className:"".concat(re,"__items-images ").concat(re,"__items-images--").concat(T)},void 0,x.slice(0,4).map(((e,t)=>t!==ee.it-1?(0,c.A)("div",{className:"".concat(re,"__items-images-container")},e.picture.id,(0,c.A)(E.Image,{src:e.picture.src,alt:e.picture.alt,width:"100%",height:"100%",lazyload:r<6?ee.D$:ee.VM,preload:!0})):(0,c.A)("div",{className:"".concat(re,"__items-images--last-image ").concat(b?"".concat(re,"__items-images--additional_items"):"")},e.picture.id,(0,c.A)(E.Image,{src:e.picture.src,alt:e.picture.alt,width:"100%",height:"100%",lazyload:r<6?ee.D$:ee.VM,preload:!0}),b>0&&(a||(a=(0,c.A)("span",{className:"".concat(re,"__items-images__label")},void 0,"+",b))))))),!x&&(0,g.jsxs)(g.Fragment,{children:[m&&(0,c.A)("div",{className:i()("".concat(re,"__image"),{["".concat(re,"__image--").concat(m.format)]:m.format}),"aria-hidden":"true"},void 0,(0,c.A)(E.Image,{src:m.src,width:"100%",height:"100%",alt:u.text,lazyload:ee.D$,preload:!0})),(0,c.A)("div",{className:i()("".concat(re,"__item-description"),{["".concat(re,"__item-description--with-actions")]:N,["".concat(re,"__item-description--with-discount")]:z})},void 0,u&&(0,c.A)(h.A,{label:u.text,target:p,onClick:()=>{(0,v.s)(n)},className:"".concat(re,"__item-title")}),k&&(0,c.A)(se.$2,{previousValue:(0,ie.A)(C,12),currentValue:(0,ie.A)(k,18),discount:z&&(0,_.A)((0,_.A)({},z),{},{size:12}),className:"".concat(re,"__price")}),y&&(0,c.A)("div",{className:"".concat(re,"__container-shipping-free")},void 0,(0,g.jsx)(oe.A,(0,_.A)((0,_.A)({as:"span",text:(0,ne.A)(y.text,y.values,null,L)},y.styles),{},{children:y.text&&y.subText&&(null==y||null===(t=y.styles)||void 0===t?void 0:t.font_size)&&(0,c.A)("span",{className:"".concat(re,"__subtext font-size--").concat(y.styles.font_size)},void 0,y.subText)}))),!I&&(0,g.jsx)(g.Fragment,{children:f?(0,c.A)("div",{className:"".concat(re,"__container-tag")},void 0,(0,g.jsx)(oe.A,(0,_.A)({as:"span",text:(0,ne.A)(f.text,f.values)},f.styles))):w&&(0,c.A)("span",{className:"".concat(re,"__item-attributes")},void 0,w.text)}))]}),N&&(0,g.jsx)(oe.A,(0,_.A)((0,_.A)({as:"a",href:p},N.label),{},{accessibilityText:null==d?void 0:d.text,className:i()("".concat(re,"__buy-now"),{["".concat(re,"__buy-now--with-image")]:x,["".concat(re,"__buy-now--without-original-price")]:!C,["".concat(re,"__item-description--without-discount")]:!z})})))})));var de=t(57051);const me="dynamic-access-card-media-item",ue=(0,u.A)((0,p.A)((e=>{let{card:a,track:t,sizeCard:s,index:n}=e;const{header:o,picture:r,permalink:d,description:m,elapsed_percentage:u,remaining_time:p,title:_,icon:A}=a;return(0,c.A)(l.Zp,{className:i()("dynamic-access-card","dynamic-access-card__".concat(s),me)},void 0,o&&(0,c.A)("h2",{className:"".concat(me,"__title")},void 0,o.text),r&&r.url&&(0,c.A)("div",{className:"".concat(me,"__image"),"aria-hidden":"true"},void 0,(0,c.A)(E.Image,{src:r.url.src,width:"100%",height:"100%",lazyload:n<6?ee.D$:ee.VM,preload:n<6}),(0,c.A)("div",{className:"".concat(me,"__remaining-info ").concat(me,"__remaining-info--gradient")},void 0,A&&(0,c.A)("div",{className:"remaining-icon"},void 0,(0,c.A)(E.Image,{src:"play_icon.svg",width:"100%",height:"100%",lazyload:n<6?ee.D$:ee.VM,preload:n<6})),p&&(0,c.A)("div",{className:"remaining-time"},void 0,(0,c.A)("span",{},void 0," ",p.text," "))),(0,c.A)(de.Y,{className:"".concat(me,"__progress"),value:u,size:"small"})),m&&_&&(0,c.A)("div",{className:"".concat(me,"__info")},void 0,(0,c.A)("div",{className:"".concat(me,"__description-content")},void 0,(0,c.A)(h.A,{label:_.text,target:d,onClick:()=>{(0,v.s)(t)},className:"description-content__title-name"})),(0,c.A)("div",{className:"".concat(me,"__description")},void 0,(0,c.A)("span",{className:"description"},void 0," ",m.text))))}))),pe=e=>{let{card:a,sizeCard:t,index:s}=e;const{card_id:n,content:o,reco_track:i,track:r,type:l}=a,d=ee.ri.includes(n),m=ee.U3.includes(n);switch(l){case ee.NJ:case ee.bu:return(0,c.A)(le,{card:o,reco_track:i,track:r,sizeCard:t,index:s},n);case ee.bH:case ee.uF:return(0,c.A)(ce,{card:o,reco_track:i,track:r,cardId:n,isCardModal:d,isCustomCard:m,type:l,sizeCard:t},n);case ee.yK:return(0,c.A)(ue,{card:o,reco_track:i,track:r,isCardModal:d,isCustomCard:m,type:l,sizeCard:t},n);default:return null}};t(72712);const{SMALL:ve,MEDIUM:_e,LONG:Ae}=ee.pd,he=e=>{const a=e.filter((e=>e.type===ee.NJ||e.type===ee.bu)),{isLongPrince:t,isMedium:c}=a.reduce(((e,a)=>{if(a.type===ee.bu&&(e.isMedium=!0),a.type===ee.NJ){var t,c,s,n;(null!=a&&null!==(t=a.content)&&void 0!==t&&t.action||null!=a&&null!==(c=a.content)&&void 0!==c&&null!==(c=c.shipping)&&void 0!==c&&c.subText)&&(e.isMedium=!0);const o=null==a||null===(s=a.content)||void 0===s||null===(s=s.price)||void 0===s||null===(s=s.current_value)||void 0===s||null===(s=s.value)||void 0===s||null===(s=s.fraction)||void 0===s?void 0:s.length;e.isLongPrince=e.isLongPrince||(null==a||null===(n=a.content)||void 0===n||null===(n=n.price)||void 0===n?void 0:n.discount)&&o>=10}return e}),{isLongPrince:!1,isMedium:!1});return((e,a)=>e?Ae:a?_e:ve)(t,c)};var ge=t(82512);const ye=(0,u.A)((e=>{let{type:a,cards:t,deviceType:o,viewportWidth:i,title:r}=e;const l=(0,s.useMemo)((()=>he(t)),[t]),[d,m]=(0,s.useState)(i||6);return(0,s.useEffect)((()=>{m(window.innerWidth);const e=()=>{m(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,c.A)("section",{type:a,className:"dynamic-access"},void 0,(0,c.A)("div",{className:"container row"},void 0,(0,c.A)(n.G,{srLabel:r,slidesPerView:(0,ge.LI)(d),className:"carousel-dynamic-access-".concat(o),spacing:16,pagination:!1,lazyload:!1,arrows:!0},void 0,t.map(((e,a)=>(0,c.A)(n.j5,{},e.card_id,(0,c.A)(pe,{card:e,sizeCard:l,index:a})))))))}))},82512:(e,a,t)=>{t.d(a,{LI:()=>s,ag:()=>c});const c=(e,a)=>"desktop"===a?e?4:6:"tablet"===a&&e?3:5,s=e=>parseInt(e,10)>=1180?6:5}}]);
//# sourceMappingURL=available-components-desktop-dynamic-access.7222a87e.js.map