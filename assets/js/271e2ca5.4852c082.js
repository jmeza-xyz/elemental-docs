"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Rancher upgrades",title:""},i="Troubleshooting Rancher upgrades",l={unversionedId:"troubleshooting-rancher-upgrades",id:"version-Stable/troubleshooting-rancher-upgrades",title:"",description:"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see https://github.com/rancher/rancher/issues/41145).",source:"@site/versioned_docs/version-Stable/troubleshooting-rancher-upgrades.md",sourceDirName:".",slug:"/troubleshooting-rancher-upgrades",permalink:"/troubleshooting-rancher-upgrades",draft:!1,tags:[],version:"Stable",frontMatter:{sidebar_label:"Rancher upgrades",title:""},sidebar:"docs",previous:{title:"How to use Elemental with Rancher and VMware",permalink:"/rancher-vmware"},next:{title:"Restore",permalink:"/troubleshooting-restore"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting-rancher-upgrades"},"Troubleshooting Rancher upgrades"),(0,a.kt)("admonition",{title:"warning",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/41145"},"https://github.com/rancher/rancher/issues/41145"),").")),(0,a.kt)("p",null,"Note that the issue is present only if at least one Elemental cluster is defined."),(0,a.kt)("p",null,"To workaround the issue create an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamicschemas.management.cattle.io")," resource named ",(0,a.kt)("inlineCode",{parentName:"p"},"machineinventoryselectortemplate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f - <<EOF\nkind: DynamicSchema\napiVersion: management.cattle.io/v3\nmetadata:\n  name: machineinventoryselectortemplate\nEOF\n\n")),(0,a.kt)("p",null,"The crash loop will stop and Rancher upgrade will complete successfully."))}m.isMDXComponent=!0}}]);