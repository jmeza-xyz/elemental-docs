"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[1328],{24340:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=r(17624),a=r(4552);const s={sidebar_label:"ManagedOSVersionChannel reference",title:""},i="ManagedOSVersionChannel reference",c={id:"managedosversionchannel-reference",title:"",description:"The ManagedOSVersionChannel resource is responsible of defining OS image channel.",source:"@site/docs/managedosversionchannel-reference.md",sourceDirName:".",slug:"/managedosversionchannel-reference",permalink:"/next/managedosversionchannel-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ManagedOSVersionChannel reference",title:""},sidebar:"docs",previous:{title:"ManagedOSImage reference",permalink:"/next/managedosimage-reference"},next:{title:"ManagedOSVersion reference",permalink:"/next/managedosversion-reference"}},d={},o=[{value:"ManagedOSVersionChannelSpec reference",id:"managedosversionchannelspec-reference",level:4},{value:"upgradeContainer",id:"upgradecontainer",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.M)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/managedosversionchannel-reference"})}),"\n",(0,t.jsx)(n.h1,{id:"managedosversionchannel-reference",children:"ManagedOSVersionChannel reference"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ManagedOSVersionChannel"})," resource is responsible of defining OS image channel."]}),"\n",(0,t.jsxs)(n.p,{children:["There are several keys that can be configured under a ",(0,t.jsx)(n.code,{children:"ManagedOSVersionChannel"})," resource spec."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="managedosversionchannel-example.yaml" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-channel\n  namespace: fleet-default\nspec:\n  options:\n    image: registry.suse.com/rancher/elemental-channel:1.4.2\n  syncInterval: 1h\n  type: custom\n"})}),"\n",(0,t.jsx)(n.h4,{id:"managedosversionchannelspec-reference",children:"ManagedOSVersionChannelSpec reference"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsx)(n.td,{children:"Defines the optional informations that can be added in an OS channel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"syncInterval"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsx)(n.td,{children:"Defines when to update the OS channel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsxs)(n.td,{children:["Defines the channel type, only ",(0,t.jsx)(n.code,{children:"custom"})," is supported now"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"upgradeContainer"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["An upgrade container that can be defined. See ",(0,t.jsx)(n.a,{href:"#upgradecontainer",children:"reference"})]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"upgradecontainer",children:"upgradeContainer"}),"\n",(0,t.jsxs)(n.p,{children:["This allows to overwrite the default ",(0,t.jsx)(n.code,{children:"upgrade"})," field of System Upgrade Controller plans (see ",(0,t.jsx)(n.a,{href:"/next/upgrade-lifecycle#components",children:"upgrade compontents"}),") based on this ManagedOSVersion.\nThese keys are translated by the System Upgrade Controller to a Kubernetes ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container",children:"container"})," specification.\nThis is the container responsible of running an OS upgrade."]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>i});var t=r(11504);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);