"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[9328],{47940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(17624),r=t(4552),s=t(7576);const o={sidebar_label:"SMBIOS",title:""},i=void 0,l={id:"smbios",title:"",description:"SMBIOS Template Variables have been deprecated: please use the new",source:"@site/docs/smbios.md",sourceDirName:".",slug:"/smbios",permalink:"/next/smbios",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"SMBIOS",title:""}},c={},d=[{value:"SMBIOS Template Variables",id:"smbios-template-variables",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components},{CodeBlock:t,Head:o}=n;return t||u("CodeBlock",!0),o||u("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/smbios"})}),"\n","\n","\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsxs)(n.p,{children:["SMBIOS Template Variables have been deprecated: please use the new\n",(0,a.jsx)(n.a,{href:"label-templates#label-templates-variables",children:"Label Templates' Variables"})," when possible."]}),(0,a.jsxs)(n.p,{children:["Check the ",(0,a.jsx)(n.a,{href:"label-templates-deprecated",children:"deprecated variables page"})," and the\n",(0,a.jsx)(n.a,{href:"label-templates-deprecated#smbios-labels-to-new-label-templates-variable-table",children:"conversion table"}),"\nfor a smooth transition."]})]}),"\n",(0,a.jsx)(n.h2,{id:"smbios-template-variables",children:"SMBIOS Template Variables"}),"\n",(0,a.jsx)(n.p,{children:"The System Management BIOS (SMBIOS) specification defines data structures (and access methods) that can be used to read management information produced by the BIOS of a computer."}),"\n",(0,a.jsx)(n.p,{children:"This allows us to gather hardware information about the running system and use that as part of our labels."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"architecture-components#elemental-register-command-line-tool",children:"Elemental Register Client"})," gathers SMBIOS data running the ",(0,a.jsx)(n.code,{children:"dmidecode"})," binary during the initial registration of the machine and\nsends that data to the ",(0,a.jsx)(n.a,{href:"architecture-components#elemental-operator-daemon",children:"Elemental Operator"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["That data is used to render the ",(0,a.jsx)(n.a,{href:"label-templates#label-template-variables",children:"template label variables"})," in the ",(0,a.jsx)(n.a,{href:"machineinventory-reference",children:"MachineInventory"})," associated to that machine."]}),"\n",(0,a.jsxs)(n.admonition,{title:"Example",type:"note",children:[(0,a.jsx)(n.p,{children:"Having the following SMBIOS data:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",metastring:"showLineNumbers",children:"System Information\n\tManufacturer: My manufacturer\n\tProduct Name: Awesome PC\n\tVersion: Not Specified\n\tSerial Number: THX1138\n\tFamily: Toretto\n"})}),(0,a.jsxs)(n.p,{children:["And setting the ",(0,a.jsx)(n.code,{children:"machineName"})," to ",(0,a.jsx)(n.code,{children:"serial-${System Information/Serial Number}"})," would result in the final value of ",(0,a.jsx)(n.code,{children:"serial-THX1138"})]})]}),"\n",(0,a.jsx)(n.p,{children:"A good use of SMBIOS data is to set up different labels for all your machines and get those values from the hardware directly."}),"\n",(0,a.jsxs)(n.p,{children:["Having your ",(0,a.jsx)(n.code,{children:"machineInventoryLabels"})," on the ",(0,a.jsx)(n.a,{href:"/next/machineregistration-reference",children:"machineRegistration"})," set to SMBIOS data would allow\nyou to use selectors down the line to select similar machines."]}),"\n",(0,a.jsxs)(n.p,{children:["For example using the following label ",(0,a.jsx)(n.code,{children:'cpuFamily: "${Processor Information/Family}'})," would allow you to use a selector to search for i7 cpus in your machine fleet."]}),"\n",(0,a.jsx)(t,{language:"yaml",title:"registration example with SMBIOS template variables",showLineNumbers:!0,children:s.c})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7576:(e,n,t)=>{t.d(n,{c:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    element: fire\n    manufacturer: "${Product/Vendor}"\n    productName: "${Product/Name}"\n    serialNumber: "${Product/Serial Number}"\n    machineUUID: "${Product/UUID}"'},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>o});var a=t(11504);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);