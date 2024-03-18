"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[6520],{97484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(17624),l=t(4552),r=t(10108);const i={sidebar_label:"Cluster reference",title:""},s="Cluster reference",a={id:"cluster-reference",title:"",description:"A Cluster definition includes a kubernetesVersion and a list of machinePools to deploy the cluster to.",source:"@site/docs/cluster-reference.md",sourceDirName:".",slug:"/cluster-reference",permalink:"/next/cluster-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Cluster reference",title:""},sidebar:"docs",previous:{title:"ManagedOSImage reference",permalink:"/next/managedosimage-reference"},next:{title:"SeedImage reference",permalink:"/next/seedimage-reference"}},c={},d=[{value:"rkeConfig.machinePools",id:"rkeconfigmachinepools",level:2},{value:"machinePools Spec Reference",id:"machinepools-spec-reference",level:2},{value:"machineConfigRef Spec Reference",id:"machineconfigref-spec-reference",level:2},{value:"Example",id:"example",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.M)(),...e.components},{CodeBlock:t,Details:i,Head:s}=n;return t||p("CodeBlock",!0),i||p("Details",!0),s||p("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/cluster-reference"})}),"\n","\n","\n",(0,o.jsx)(n.h1,{id:"cluster-reference",children:"Cluster reference"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"Cluster"})," definition includes a ",(0,o.jsx)(n.code,{children:"kubernetesVersion"})," and a list of ",(0,o.jsx)(n.code,{children:"machinePools"})," to deploy the cluster to."]}),"\n",(0,o.jsxs)(n.p,{children:["For how to select a ",(0,o.jsx)(n.code,{children:"kubernetesVersion"})," please check our ",(0,o.jsx)(n.a,{href:"/next/kubernetesversions",children:"Kubernetes Versions"})," page."]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"machinePool"})," is a bundle of configuration with a ",(0,o.jsx)(n.code,{children:"ObjectReference"})," so the cluster is deployed to those ",(0,o.jsx)(n.code,{children:"machinePools"}),"\nwith the proper roles (etcd, control-plane, worker) with a quantity (how many nodes to deploy from this pool) and some extra configurations (rolling update config, max unhealthy nodes, etc...)."]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Example"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: ...\n  namespace: ...\nspec:\n  rkeConfig:\n    machinePools:\n      - name: ...\n        controlPlaneRole: ...\n        etcdRole: ...\n        workerRole: ...\n        quantity: ...\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: ...\n      - name: ...\n        controlPlaneRole: ...\n        etcdRole: ...\n        workerRole: ...\n        quantity: ...\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: ...\n"})})]}),"\n",(0,o.jsxs)(n.p,{children:["It's also possible to disable cluster components via the ",(0,o.jsx)(n.code,{children:"Cluster"})," object in ",(0,o.jsx)(n.code,{children:"spec.rkeConfig.machineGlobalConfig"}),", for example:"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Service Disabling Example"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: ...\n  namespace: ...\nspec:\n  rkeConfig:\n    machinePools:\n      - name: ...\n        controlPlaneRole: ...\n        etcdRole: ...\n        workerRole: ...\n        quantity: ...\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: ...\n    machineGlobalConfig:\n      disable:\n        - servicelb\n        - ...\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"rkeconfigmachinepools",children:"rkeConfig.machinePools"}),"\n",(0,o.jsxs)(n.p,{children:["A list of ",(0,o.jsx)(n.code,{children:"machinePools"}),". A minimum of 1 ",(0,o.jsx)(n.code,{children:"machinePools"})," is required for the cluster to be deployed to."]}),"\n",(0,o.jsx)(n.h2,{id:"machinepools-spec-reference",children:"machinePools Spec Reference"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Key"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Default value"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"controlPlaneRole"}),(0,o.jsx)(n.td,{children:"bool"}),(0,o.jsx)(n.td,{children:"false"}),(0,o.jsx)(n.td,{children:"Set machines in this pool as control-plane"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"etcdRole"}),(0,o.jsx)(n.td,{children:"bool"}),(0,o.jsx)(n.td,{children:"false"}),(0,o.jsx)(n.td,{children:"Set machines in this pool as etcd"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"workerRole"}),(0,o.jsx)(n.td,{children:"bool"}),(0,o.jsx)(n.td,{children:"false"}),(0,o.jsx)(n.td,{children:"Set machines in this pool as worker"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"name"}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"nil"}),(0,o.jsx)(n.td,{children:"Name for this pool"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"quantity"}),(0,o.jsx)(n.td,{children:"int"}),(0,o.jsx)(n.td,{children:"nil"}),(0,o.jsx)(n.td,{children:"Number of machines to deploy from this pool"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"unhealthyNodeTimeout"}),(0,o.jsx)(n.td,{children:"int"}),(0,o.jsx)(n.td,{children:"nil"}),(0,o.jsx)(n.td,{children:"Timeout for unhealthy node health checks"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"machineConfigRef"}),(0,o.jsx)(n.td,{children:"int"}),(0,o.jsx)(n.td,{children:"ObjectReference"}),(0,o.jsx)(n.td,{children:"Reference to an object used to know what nodes are part of this pool"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["A minimum of ",(0,o.jsx)(n.code,{children:"quantity"})," set to one is required for this pool to be used.\nBasically translates to how many nodes from this pool are going to be setup for this cluster."]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Example"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: cluster-example\n  namespace: example-default\nspec:\n  rkeConfig:\n    machinePools:\n      - name: examplePool \n        controlPlaneRole: true\n        etcdRole: true\n        workerRole: false\n        quantity: 3\n        unhealthyNodeTimeout: 0s\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: exampleSelector\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"machineconfigref-spec-reference",children:"machineConfigRef Spec Reference"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"machineConfigRef"})," is a generic k8s ",(0,o.jsx)(n.code,{children:"ObjectReference"})," which usually contain a\n",(0,o.jsx)(n.code,{children:"kind"})," ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"apiVersion"})," to point to a different object."]}),"\n",(0,o.jsxs)(n.p,{children:["In Elemental, we set this to a ",(0,o.jsx)(n.a,{href:"/next/machineinventoryselectortemplate-reference",children:"MachineInventorySelectorTemplate"}),".\nThis allows us to point to more than one object by using the selector."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["The example below creates a cluster that uses 2 different ",(0,o.jsx)(n.code,{children:"machinePool"}),"'s to set different nodes to control-plane and workers nodes,\nbased on 2 different ",(0,o.jsx)(n.code,{children:"MachineInventorySelectorTemplate"})," that select their nodes based on a ",(0,o.jsx)(n.code,{children:"MachineInventory"})," label (location):"]}),"\n",(0,o.jsxs)(n.admonition,{title:"warning",type:"warning",children:[(0,o.jsx)(n.p,{children:"The labels for the example are manual set labels, they are not set by Elemental automatically.."}),(0,o.jsxs)(n.p,{children:["For automatic labels generated by Elemental please check the ",(0,o.jsx)(n.a,{href:"/next/smbios",children:"SMBIOS"})," page."]})]}),"\n",(0,o.jsx)(t,{language:"yaml",title:"Example of a cluster with more than one machinePool",showLineNumbers:!0,children:r.c})]})}function m(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},10108:(e,n,t)=>{t.d(n,{c:()=>o});const o="kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: cluster-machinepools\n  namespace: fleet-default\nspec:\n  rkeConfig:\n    machinePools:\n      - name: controlPlanePool\n        controlPlaneRole: true\n        etcdRole: true\n        workerRole: false\n        quantity: 3\n        unhealthyNodeTimeout: 0s\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: selectorControlPlanes\n      - name: workersPool\n        controlPlaneRole: false\n        etcdRole: false\n        workerRole: true\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: selectorWorkers\n  kubernetesVersion: v1.23.7+k3s1\n---\napiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: selectorControlPlanes\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchLabels:\n          location: server-room-1\n---\napiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: selectorWorkers\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchLabels:\n          location: server-room-2"},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>i});var o=t(11504);const l={},r=o.createContext(l);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);