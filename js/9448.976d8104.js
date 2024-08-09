"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9448],{93463:(e,t,n)=>{n.d(t,{a:()=>te});var o=n(58168),i=n(73620),a=n(89379),s=n(96540),l=n(46942),r=n.n(l);var c=n(50479);var d=(e,t)=>-1!==e.indexOf(t);const u=["STYLE","SCRIPT"],p=e=>{let{isOpen:t,portalSelector:n,portalContainer:o}=e;const[i,a]=(0,s.useState)([]),[l,r]=(0,s.useState)([]);(0,s.useEffect)((()=>{const{bodyElements:e,portalElements:t}=(e=>{var t,n;if("undefined"==typeof window||"undefined"==typeof document)return{bodyElements:[],portalElements:[]};const o=null!==(t=document)&&void 0!==t&&null!==(t=t.body)&&void 0!==t&&t.children?[].slice.call(document.body.children):[],i=null!==(n=document)&&void 0!==n&&n.querySelectorAll(e)?[].slice.call(document.querySelectorAll(e)):[];return{bodyElements:o.filter((e=>"true"!==e.getAttribute("aria-hidden")||!e.getAttribute("aria-hidden"))),portalElements:i}})(n);a(e),r(t)}),[n]),(0,s.useEffect)((()=>(t&&(e=>{let{outsideElements:t=[],portalContainer:n,portalElements:o=[]}=e;t.forEach((e=>{e&&(d(u,e.tagName)||o.length&&o.some((t=>t.isEqualNode(e)))||n&&e.contains(n)||e.setAttribute("aria-hidden","true"))}))})({outsideElements:i,portalContainer:o,portalElements:l}),()=>{(e=>{let{outsideElements:t=[]}=e;t.forEach((e=>{e&&(d(u,e.tagName)||e.getAttribute("aria-hidden")&&e.removeAttribute("aria-hidden"))}))})({outsideElements:i})})),[t,o,i,l])};var h=n(80045),v=n(69247);const b=()=>{var e,t;return"undefined"!=typeof MobileWebKit&&"function"==typeof MobileWebKit.executeNative&&void 0!==MobileWebKit.events&&"function"==typeof MobileWebKit.events.subscribeMethod&&"function"==typeof MobileWebKit.events.unsubscribe&&(null===(e=MobileWebKit)||void 0===e?void 0:e.engine)===(null===(t=MobileWebKit)||void 0===t||null===(t=t.Engines)||void 0===t?void 0:t.V200)};var m=n(85652),f=n(3959),g=n(43051),_=n(5987),E=n(58374),y=(n(40961),n(49953));const A=s.createContext(null);function w(){let e=(0,s.useContext)(A),t=null==e?void 0:e.setContain;(0,y.N)((()=>{null==t||t(!0)}),[t])}function C(e,t){let{role:n="dialog"}=e,o=(0,g.X1)();o=e["aria-label"]?void 0:o;let i=(0,s.useRef)(!1);return(0,s.useEffect)((()=>{if(t.current&&!t.current.contains(document.activeElement)){(0,E.l)(t.current);let e=setTimeout((()=>{document.activeElement===t.current&&(i.current=!0,t.current&&(t.current.blur(),(0,E.l)(t.current)),i.current=!1)}),500);return()=>{clearTimeout(e)}}}),[t]),w(),{dialogProps:{...(0,_.$)(e,{labelable:!0}),role:n,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||o,onBlur:e=>{i.current&&e.stopPropagation()}},titleProps:{id:o}}}var S=n(7049),M=n(24836);function N(e){let{ref:t,onInteractOutside:n,isDisabled:o,onInteractOutsideStart:i}=e,a=(0,s.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),l=(0,S.J)((e=>{n&&D(e,t)&&(i&&i(e),a.current.isPointerDown=!0)})),r=(0,S.J)((e=>{n&&n(e)}));(0,s.useEffect)((()=>{let e=a.current;if(o)return;const n=t.current,i=(0,M.T)(n);if("undefined"!=typeof PointerEvent){let n=n=>{e.isPointerDown&&D(n,t)&&r(n),e.isPointerDown=!1};return i.addEventListener("pointerdown",l,!0),i.addEventListener("pointerup",n,!0),()=>{i.removeEventListener("pointerdown",l,!0),i.removeEventListener("pointerup",n,!0)}}{let n=n=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&D(n,t)&&r(n),e.isPointerDown=!1},o=n=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&D(n,t)&&r(n),e.isPointerDown=!1};return i.addEventListener("mousedown",l,!0),i.addEventListener("mouseup",n,!0),i.addEventListener("touchstart",l,!0),i.addEventListener("touchend",o,!0),()=>{i.removeEventListener("mousedown",l,!0),i.removeEventListener("mouseup",n,!0),i.removeEventListener("touchstart",l,!0),i.removeEventListener("touchend",o,!0)}}}),[t,o,l,r])}function D(e,t){if(e.button>0)return!1;if(e.target){const t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target))return!1;if(e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}var L=n(59461);const R=[];function O(e,t){let{onClose:n,shouldCloseOnBlur:o,isOpen:i,isDismissable:a=!1,isKeyboardDismissDisabled:l=!1,shouldCloseOnInteractOutside:r}=e;(0,s.useEffect)((()=>(i&&R.push(t),()=>{let e=R.indexOf(t);e>=0&&R.splice(e,1)})),[i,t]);let c=()=>{R[R.length-1]===t&&n&&n()};N({ref:t,onInteractOutside:a&&i?e=>{r&&!r(e.target)||(R[R.length-1]===t&&(e.stopPropagation(),e.preventDefault()),c())}:null,onInteractOutsideStart:e=>{r&&!r(e.target)||R[R.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:d}=(0,L.R)({isDisabled:!o,onBlurWithin:e=>{e.relatedTarget&&!(0,m.Pu)(e.relatedTarget)&&(r&&!r(e.relatedTarget)||n())}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||l||e.nativeEvent.isComposing||(e.stopPropagation(),e.preventDefault(),c())},...d},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}var T=n(81023),x=n(83611);const P=e=>window.location.href===e,B=["innerRef","type"];var k=e=>{class t extends s.Component{constructor(e){super(e);const{isOpen:t,open:n}=this.props;this.state={isVisible:n||t||!1,isClosing:!1},this.handleOpen=this.handleOpen.bind(this),this.handleClose=this.handleClose.bind(this),this.closeModal=this.closeModal.bind(this),this.navigation=this.navigation.bind(this),this.hideTopbar=this.hideTopbar.bind(this),this.showTopbar=this.showTopbar.bind(this)}componentDidMount(){const{url:e=""}=this.props;var t;e&&(t=this.navigation,"function"==typeof window.history.pushState&&window.addEventListener("popstate",t)),this.handleOpen()}UNSAFE_componentWillReceiveProps(e){let{open:t,isOpen:n,onOpen:o}=e;const{isVisible:i}=this.state,a=t||n||!1;i!==a&&(a?("function"==typeof o&&o(),this.setState({isVisible:!0},this.handleOpen)):this.handleClose())}componentWillUnmount(){const{url:e=""}=this.props;var t;e&&(t=this.navigation,"function"==typeof window.history.pushState&&window.removeEventListener("popstate",t)),this.backEventSubscriptionId&&this.showTopbar({subscriptionIds:this.backEventSubscriptionId})}handleOpen(){const{isVisible:e}=this.state,{url:t="",title:n}=this.props;e?(this.backEventSubscriptionId=this.hideTopbar({onBack:this.handleClose}),t&&((e,t)=>{P(e)||("function"==typeof window.history.pushState?window.history.pushState(void 0,t,e):window.location=e)})(t,n)):t&&(this.showTopbar({subscriptionIds:this.backEventSubscriptionId}),(e=>{P(e)&&window.history.back()})(t))}handleClose(e){const{onClose:t}=this.props;e&&(e.preventDefault(),e.persist&&e.persist()),this.closeModal((()=>{"function"==typeof t&&t(e),this.handleOpen()}))}closeModal(e){this.setState({isClosing:!0}),this.showTopbar({subscriptionIds:this.backEventSubscriptionId}),setTimeout((()=>{this.setState({isVisible:!1,isClosing:!1},e)}),180)}navigation(){const{url:e=""}=this.props,{isVisible:t}=this.state;P(e)?this.handleOpen():t&&this.handleClose()}hideTopbar(e){const{type:t}=this.props;return"full"===t?(e=>{var t,n;let{onBack:o,animated:i=!0,duration:a=350}=e;if(!b())return;var s;return"function"==typeof(null===(t=MobileWebKit)||void 0===t||null===(t=t.topbar)||void 0===t?void 0:t.fullScreenMode)?MobileWebKit.topbar.fullScreenMode(!0,{animated:i,animation_duration:a}).catch((()=>{})):null===(s=MobileWebKit)||void 0===s||s.topbar.disable({opacity:.8,animated:i,duration:200}).catch((()=>{})),{backActionSubscriptionId:null===(n=MobileWebKit)||void 0===n?void 0:n.navigation.subscribeToBackAction(o)}})(e):(e=>{var t,n;let{onBack:o,opacity:i=.8,animated:a=!0,duration:s=200}=e;if(!b())return;return null===(t=MobileWebKit)||void 0===t||t.topbar.disable({opacity:i,animated:a,duration:s}).catch((()=>{})),{backActionSubscriptionId:null===(n=MobileWebKit)||void 0===n?void 0:n.navigation.subscribeToBackAction(o)}})(e)}showTopbar(e){const{type:t}=this.props;return"full"===t?function(){var e;let{animated:t=!0,duration:n=350,subscriptionIds:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(b()){var i,a;"function"==typeof(null===(e=MobileWebKit)||void 0===e||null===(e=e.topbar)||void 0===e?void 0:e.fullScreenMode)?MobileWebKit.topbar.fullScreenMode(!1,{animated:t,animation_duration:n}).catch((()=>{})):null===(i=MobileWebKit)||void 0===i||i.topbar.enable({animated:t,duration:200}).catch((()=>{})),null!=o&&o.backActionSubscriptionId&&(null===(a=MobileWebKit)||void 0===a||a.navigation.unsubscribeToBackAction(o.backActionSubscriptionId).catch((()=>{})))}}(e):function(){var e;let{animated:t=!0,duration:n=200,subscriptionIds:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var i;b()&&(null===(e=MobileWebKit)||void 0===e||e.topbar.enable({animated:t,duration:n}).catch((()=>{})),null!=o&&o.backActionSubscriptionId&&(null===(i=MobileWebKit)||void 0===i||i.navigation.unsubscribeToBackAction(o.backActionSubscriptionId).catch((()=>{}))))}(e)}render(){const{isVisible:t,isClosing:n}=this.state,i=this.props,{innerRef:a,type:l="small"}=i,r=(0,h.A)(i,B);return(t||n)&&s.createElement(e,(0,o.A)({ref:a,handleClose:this.handleClose},this.state,{type:l},r))}}return s.forwardRef(((e,n)=>{const i=(0,v.Bi)(e.id);return s.createElement(t,(0,o.A)({},e,{id:i,innerRef:n}))}))};const I="andes-modal",K={small:40,large:48,full:56,card:40},W={small:{initial:16,final:32},large:{initial:16,final:48},card:{initial:16,final:24},full:{initial:16,final:24}},H=(e,t,n)=>{e&&null!=t&&t.classList&&n&&t.classList[e](n)},U=e=>e.scrollHeight>e.clientHeight,V="".concat(I,"__actions");var F=s.forwardRef(((e,t)=>{let{children:n,fixed:o=!1}=e;const i=r()(V,{["".concat(V,"--fixed")]:o});return s.createElement("div",{className:i,ref:t},n)})),q={module:"@andes/modal",locale:"en-US",translations:{"andes-modalCerrar":[null,"Close"]}},z={module:"@andes/modal",locale:"es-AR",translations:{"andes-modalCerrar":[null,"Cerrar"]}},J={module:"@andes/modal",locale:"pt-BR",translations:{"andes-modalCerrar":[null,"Fechar"]}};const X="".concat(I,"__close-button");var Y=e=>{let{closeButtonSrLabel:t,onClose:n,color:o="rgba(0,0,0,0.55)",closeUrl:a=""}=e;const s=(0,v.UO)(v.Ri,q,z,J),l=e=>{"function"==typeof n&&n(e)},r=a?"a":"button";return(0,i.A)(r,{className:X,"aria-label":t||s.pgettext(I,"Cerrar"),onClick:l,onKeyDown:e=>{switch(e.code){case T.Fm:case T.t6:e.preventDefault(),l(e)}},href:a},void 0,(0,i.A)(x.A,{color:o}))};const Z="".concat(I,"__header");var $=s.forwardRef(((e,t)=>{let{children:n,onClose:o,centered:a=!1,showCloseButton:l=!0,closeButtonSrLabel:c,className:d,closeUrl:u}=e;const p=r()(Z,d),h=r()("".concat(Z,"__contents"),{["".concat(Z,"__contents--centered")]:a});return s.createElement("div",{className:p,ref:t},(0,i.A)("div",{className:h},void 0,n),l&&(0,i.A)(Y,{onClose:o,closeButtonSrLabel:c,closeUrl:u}))}));const j="".concat(I,"__title");var G=e=>{let{children:t,id:n}=e;return(0,i.A)("span",{id:"".concat(n,"-title"),role:"heading","aria-level":1,className:j},void 0,t)};const Q="".concat(I,"__content");var ee=s.forwardRef(((e,t)=>{let{children:n}=e;return s.createElement("div",{className:Q,ref:t},n)}));var te=k(function(){const e=(0,s.forwardRef)(((e,t)=>{var n,l;const{"aria-label":d,actions:u,children:h,className:b,closable:g=!0,closeButtonLabel:_,closeButtonSrLabel:E,closeUrl:y="",container:A,dialog:w,focusScope:S=!0,handleClose:M,id:N,isClosing:D,isVisible:L,maxHeight:R,maxWidth:T,media:x,srLabel:P,title:B,type:k="small"}=e,V=(0,s.useRef)(null),q=(0,s.useRef)(null),z=(0,s.useRef)(null),J=(0,s.useRef)(null),X=(0,s.useRef)(null),{device:Z}=(0,s.useContext)(v.Ri),j=(e=>{var t;return"iOS"===(null==e||null===(t=e.nativeApp)||void 0===t?void 0:t.os)})(Z),Q=g&&!w;(0,c.A)();const te=(0,s.useCallback)((()=>{const e=null==X?void 0:X.current;null!=u&&u.fixed&&e&&null!=J&&J.current&&U(null==J?void 0:J.current)&&H("add",e,"".concat(I,"__actions--border"))}),[u]);(0,s.useEffect)((()=>{setTimeout(te,0)}),[te]);const{overlayProps:ne}=O({onClose:M,isOpen:L||D,isKeyboardDismissDisabled:!Q,isDismissable:Q},V),{dialogProps:oe}=C((0,a.A)((0,a.A)({},e),{},{"aria-label":P||d,"aria-labelledby":P||d||"string"!=typeof B?void 0:"".concat(N,"-title")}),V);p({isOpen:L&&!D,portalSelector:".".concat(I,"__portal"),portalContainer:A});const ie="card"!==k&&Q,ae="card"===k&&Q,se=r()(I,b,{["".concat(I,"--").concat(k)]:k,["".concat(I,"--asset")]:null==x?void 0:x.asset,["".concat(I,"--fixed-actions")]:null==u?void 0:u.fixed,["".concat(I,"--closing")]:D}),le=r()("".concat(I,"__overlay"),{["".concat(I,"__overlay--").concat(k)]:k,["".concat(I,"__overlay--closing")]:D,["".concat(I,"__overlay--full-webview-ios")]:"full"===k&&j}),re={maxHeight:R?"min(100%, ".concat(R,"px)"):"100%",maxWidth:T?"min(100%, ".concat(T,"px)"):"100%"},ce={onClose:M,closeButtonSrLabel:E||_,closeUrl:y};return(0,i.A)(f.ZL,{className:"".concat(I,"__portal"),container:A},void 0,s.createElement("div",{className:le,ref:t},s.createElement(m.n1,(0,o.A)({},S?{contain:!0}:{},{restoreFocus:!0,autoFocus:!0}),s.createElement("div",(0,o.A)({},ne,oe,{className:se,style:re,"data-ismodal":!0,"aria-modal":!0,ref:V}),(0,i.A)("div",{tabIndex:0,className:"".concat(I,"__focus-retainer")}),ae&&(0,i.A)(Y,{onClose:M,closeButtonSrLabel:E||_,color:"white",closeUrl:y}),(null==x?void 0:x.asset)?s.createElement($,(0,o.A)({className:"".concat(I,"__header--secondary"),ref:q,showCloseButton:ie},ce),B&&(n||(n=(0,i.A)(G,{id:N},void 0,B)))):null,s.createElement("div",{className:"".concat(I,"__scroll"),onScroll:()=>{((e,t,n,o)=>{let{secondaryHeaderRef:i,headerRef:a,contentRef:s,actionsRef:l}=e;const r=null==i?void 0:i.current,c=null==a?void 0:a.current,d=null==s?void 0:s.current,u=null==l?void 0:l.current;if(d&&U(d)){const{scrollTop:e}=d;if(r&&K[t]){const o=K[t];H(n?e<35?"remove":"add":c&&e<c.clientHeight-o?"remove":"add",r,"".concat(I,"__header--show")),H(c&&e<c.clientHeight-o?"remove":"add",r,"".concat(I,"__header--show-title"))}else c&&H(e<c.clientHeight?"remove":"add",c,"".concat(I,"__header--sticky"));if(null!=o&&o.fixed&&u){const n=Math.trunc(d.scrollHeight-e)<=d.clientHeight;if(H(n?"remove":"add",u,"".concat(I,"__actions--border")),W[t]){const{initial:o,final:i}=W[t],a=d.scrollHeight-Math.abs(e)-d.clientHeight>i&&u.classList.contains("padding");n?(requestAnimationFrame((()=>{u.style.paddingBottom="".concat(i,"px")})),setTimeout((()=>H("add",u,"padding")),80)):a&&(requestAnimationFrame((()=>{u.style.paddingBottom="".concat(o,"px")})),setTimeout((()=>H("remove",u,"padding")),80))}}}})({secondaryHeaderRef:q,headerRef:z,contentRef:J,actionsRef:X},k,ie,u)},ref:J},(()=>{const e=null==x?void 0:x.asset;return B||e?s.createElement($,(0,o.A)({ref:z,centered:!!e||"card"===k,showCloseButton:!e&&ie},ce),e,B&&(l||(l=(0,i.A)(G,{id:N},void 0,B)))):null})(),h&&(0,i.A)(ee,{},void 0,h),u&&s.createElement(F,{fixed:u.fixed,ref:X},u.primary,u.secondary))))))}));return e.displayName="Modal",e}())},88430:(e,t,n)=>{n.d(t,{A:()=>p});var o,i,a=n(73620),s=n(96540),l=n(46942),r=n.n(l),c=n(88460);const d="andes-spinner";class u extends s.PureComponent{render(){(0,c.A)(!1,"This component has been migrated to ProgressIndicatorCircular.");const{size:e,show:t,modifier:n,className:s,label:l,highlight:u}=this.props,p=r()(d,"".concat(d,"--").concat(n),u&&"".concat(d,"--highlight"),s),h=r()("".concat(d,"__icon"),"".concat(d,"__icon--").concat(e)),v=r()("".concat(d,"__container"),"".concat(d,"__container--").concat(e),!l&&"".concat(d,"__container--").concat(e,"-notlabel")),b=r()("".concat(d,"__mask"),u&&"".concat(d,"__mask--highlight"));return t&&(0,a.A)("div",{className:p},void 0,(0,a.A)("div",{className:v},void 0,(0,a.A)("div",{className:h},void 0,o||(o=(0,a.A)("div",{className:"".concat(d,"__icon-right")},void 0,(0,a.A)("div",{className:"".concat(d,"__icon-border")}))),i||(i=(0,a.A)("div",{className:"".concat(d,"__icon-left")},void 0,(0,a.A)("div",{className:"".concat(d,"__icon-border")})))),(0,a.A)("span",{className:"".concat(d,"__label")},void 0,l)),(0,a.A)("div",{className:b}))}}u.defaultProps={className:"",size:"large",modifier:"fullscreen",show:!0,label:"",highlight:!1};const p=u}}]);
//# sourceMappingURL=9448.976d8104.js.map