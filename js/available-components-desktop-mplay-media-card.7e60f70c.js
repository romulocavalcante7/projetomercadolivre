"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[280],{57951:(t,i,n)=>{function e(t){return t.displayName||t.name||"Component"}function l(t,i){const n=e(t),l=e(i);return"".concat(n,"(").concat(l,")")}n.d(i,{A:()=>l})},6295:(t,i,n)=>{n.d(i,{A:()=>c});var e=n(89379),l=n(96540),o=n(40961),a=n(74629),r=n(57951),d=n(74848);const s=n.g.requestIdleCallback?requestIdleCallback:setTimeout;const c=function(t){if(!n.g.IntersectionObserver)return t;class i extends l.Component{constructor(t){super(t),this.track=this.track.bind(this)}componentDidMount(){this.element=o.findDOMNode(this),this.element&&(this.observer=new IntersectionObserver(this.track,{threshold:.5}),this.observer.observe(this.element))}track(t){const{track:i}=this.props;t[0].isIntersecting&&(this.observer.unobserve(this.element),this.observer.disconnect(),s((()=>{a.A.notifyPrint(i)})))}render(){return(0,d.jsx)(t,(0,e.A)({},this.props))}}return i.displayName=(0,r.A)(i,t),i.defaultProps={track:null,className:""},i}},47776:(t,i,n)=>{n.r(i),n.d(i,{default:()=>u});var e,l=n(89379),o=n(73620),a=(n(23792),n(33110),n(62953),n(96540)),r=n(24386),d=n(2105),s=n(6295),c=n(74848);const u=(0,s.A)((function(t){var i,n,s,u,v,_,m,h,p,g,f,k,b,y,A,w,x,N;let{content:O}=t;const[D]=null==O||null===(i=O.fast_loading)||void 0===i?void 0:i.items,{event_tracking:S,content:{actions:E,images:P,texts:C,video:J,wrapper_content:L}}=D,T={primary_title:null==C?void 0:C.primary_title,wrapper_banner_primary_title:null==L||null===(n=L.texts)||void 0===n?void 0:n.primary_title,wrapper_banner_secondary_title:null==L||null===(s=L.texts)||void 0===s?void 0:s.secondary_title,badge_text:null==L||null===(u=L.badge)||void 0===u?void 0:u.text,badge_background_color:null==L||null===(v=L.badge)||void 0===v?void 0:v.background,badge_icon:null==L||null===(_=L.badge)||void 0===_?void 0:_.icon_id,finished_overlay_button_text:null==J||null===(m=J.finished_overlay)||void 0===m||null===(m=m.texts)||void 0===m?void 0:m.button,video_title:null==J||null===(h=J.texts)||void 0===h?void 0:h.title,cta:null==C?void 0:C.cta,destination_url:null==E||null===(p=E.content_link)||void 0===p?void 0:p.link,finished_overlay_destination_url:null==J||null===(g=J.finished_overlay)||void 0===g||null===(g=g.actions)||void 0===g||null===(g=g.content_link)||void 0===g?void 0:g.link,video_destination_url:null==J||null===(f=J.actions)||void 0===f||null===(f=f.content_link)||void 0===f?void 0:f.link,video_dash_url:null==J||null===(k=J.url)||void 0===k?void 0:k.dash,video_hls_url:null==J||null===(b=J.url)||void 0===b?void 0:b.hls,audio_lang:JSON.stringify(null==J||null===(y=J.config)||void 0===y?void 0:y.audio_languages),thumbnail:null==J||null===(A=J.images)||void 0===A?void 0:A.thumbnail,picture:null==P?void 0:P.picture,primary_logo:null==L||null===(w=L.images)||void 0===w?void 0:w.primary_logo,print_url:JSON.stringify(null==S?void 0:S.print),click_url:JSON.stringify(null==S?void 0:S.click),view_url:JSON.stringify(null==S?void 0:S.view),finished_overlay_click_url:JSON.stringify(null==J||null===(x=J.finished_overlay)||void 0===x||null===(x=x.event_tracking)||void 0===x?void 0:x.click),video_click_url:JSON.stringify(null==J||null===(N=J.event_tracking)||void 0===N?void 0:N.click)};return(0,o.A)(d.A,{type:"adn",className:"ad_adn_video_banner"},void 0,(0,o.A)(a.Fragment,{},void 0,e||(e=(0,o.A)(r.Script,{src:"https://http2.mlstatic.com/frontend-assets/adn-frontend-library/video-simple-banner.1.5.0.js"})),(0,c.jsx)("video-simple-banner",(0,l.A)({},T))))}))},74629:(t,i,n)=>{n.d(i,{A:()=>l});var e=n(89379);const l=class{static notifyPrint(t){this.notify(t,"print")}static notify(t,i){const n={};melidata("createEventTrack",n),melidata("withPath","/component",n),melidata("withData",(0,e.A)({c_event:i},t),n),melidata("sendTrack",n,"component_prints")}static trackRecommendations(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"print",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],e=arguments.length>3?arguments[3]:void 0,l=arguments.length>4?arguments[4]:void 0;const{event_data:o,experiments:a,experiment:r}=t,d={};"function"==typeof melidata&&(melidata("print"===i?"createEventTrack":"createViewTrack",d),e?melidata("withPath",e,d):n?melidata("withPath","/recommendations/".concat(i),d):melidata("withPath","/recommendations",d),melidata("withData",o,d),(r||a)&&melidata("withExperiments",r||a,d),n&&melidata("withStream","recommendations",d),l&&(d.useBeacon=!0),melidata("sendTrack",d))}}}}]);
//# sourceMappingURL=available-components-desktop-mplay-media-card.7e60f70c.js.map