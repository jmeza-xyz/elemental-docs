"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7812],{46484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(17624),r=t(4552);const s={sidebar_label:"Upgrade",title:""},o="Troubleshooting upgrade",l={id:"troubleshooting-upgrade",title:"",description:"Upgrade Flow",source:"@site/versioned_docs/version-1.4/troubleshooting-upgrade.md",sourceDirName:".",slug:"/troubleshooting-upgrade",permalink:"/troubleshooting-upgrade",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"Upgrade",title:""},sidebar:"docs",previous:{title:"Restore",permalink:"/troubleshooting-restore"},next:{title:"Reset",permalink:"/troubleshooting-reset"}},i={},c=[{value:"Rancher side",id:"rancher-side",level:2},{value:"Elemental Cluster side",id:"elemental-cluster-side",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components},{Details:s,Head:o}=n;return s||u("Details",!0),o||u("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/troubleshooting-upgrade"})}),"\n",(0,a.jsx)(n.h1,{id:"troubleshooting-upgrade",children:"Troubleshooting upgrade"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Upgrade Flow",src:t(43772).c+"",width:"883",height:"831"})}),"\n",(0,a.jsx)(n.p,{children:"For a high level overview of the upgrade workflow, please refer to the image above."}),"\n",(0,a.jsx)(n.h2,{id:"rancher-side",children:"Rancher side"}),"\n",(0,a.jsx)(n.p,{children:"In this example we upgraded the cluster nodes with the following ManagedOSImage definition:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name: my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new Elemental version you would like to upgrade to or track the latest tag\n  osImage: "registry.suse.com/rancher/elemental-teal/5.4:latest"\n  clusterTargets:\n    - clusterName: my-cluster\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Once the ",(0,a.jsx)(n.code,{children:"ManagedOSImage"})," is applied, the ",(0,a.jsx)(n.code,{children:"elemental-operator"})," will verify it and generate a related ",(0,a.jsx)(n.code,{children:"Bundle"}),".",(0,a.jsx)(n.br,{}),"\n","The ",(0,a.jsx)(n.code,{children:"Bundle"})," name will be prefixed with ",(0,a.jsx)(n.code,{children:"mos"})," and then the ",(0,a.jsx)(n.code,{children:"ManagedOSImage"})," name. In this case ",(0,a.jsx)(n.code,{children:"mos-my-upgrade"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"Bundle"})," definition, you will find the details about the upgrade plan and the desired target.",(0,a.jsx)(n.br,{}),"\n","For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl -n fleet-default get bundle mos-my-upgrade -o yaml\n"})}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"Example"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: fleet.cattle.io/v1alpha1\nkind: Bundle\nmetadata:\n  creationTimestamp: "2023-06-16T09:01:47Z"\n  generation: 1\n  name: mos-my-upgrade\n  namespace: fleet-default\n  ownerReferences:\n  - apiVersion: elemental.cattle.io/v1beta1\n    controller: true\n    kind: ManagedOSImage\n    name: my-upgrade\n    uid: e468ed21-23bb-487a-a022-dbc7ef753720\n  resourceVersion: "1038645"\n  uid: 35e83fc4-28c8-4b10-8059-cae6cdff2cda\nspec:\n  resources:\n  - content: \'{"kind":"ClusterRole","apiVersion":"rbac.authorization.k8s.io/v1","metadata":{"name":"os-upgrader-my-upgrade","creationTimestamp":null},"rules":[{"verbs":["update","get","list","watch","patch"],"apiGroups":[""],"resources":["nodes"]},{"verbs":["list"],"apiGroups":[""],"resources":["pods"]}]}\'\n    name: ClusterRole--os-upgrader-my-upgrade-296a3abf3451.yaml\n  - content: \'{"kind":"ClusterRoleBinding","apiVersion":"rbac.authorization.k8s.io/v1","metadata":{"name":"os-upgrader-my-upgrade","creationTimestamp":null},"subjects":[{"kind":"ServiceAccount","name":"os-upgrader-my-upgrade","namespace":"cattle-system"}],"roleRef":{"apiGroup":"rbac.authorization.k8s.io","kind":"ClusterRole","name":"os-upgrader-my-upgrade"}}\'\n    name: ClusterRoleBinding--os-upgrader-my-upgrade-f63eaecde935.yaml\n  - content: \'{"kind":"ServiceAccount","apiVersion":"v1","metadata":{"name":"os-upgrader-my-upgrade","namespace":"cattle-system","creationTimestamp":null}}\'\n    name: ServiceAccount-cattle-system-os-upgrader-my-upgrade-ce93d-01096.yaml\n  - content: \'{"kind":"Secret","apiVersion":"v1","metadata":{"name":"os-upgrader-my-upgrade","namespace":"cattle-system","creationTimestamp":null},"data":{"cloud-config":""}}\'\n    name: Secret-cattle-system-os-upgrader-my-upgrade-a997ee6a67ef.yaml\n  - content: \'{"kind":"Plan","apiVersion":"upgrade.cattle.io/v1","metadata":{"name":"os-upgrader-my-upgrade","namespace":"cattle-system","creationTimestamp":null},"spec":{"concurrency":1,"nodeSelector":{},"serviceAccountName":"os-upgrader-my-upgrade","version":"latest","secrets":[{"name":"os-upgrader-my-upgrade","path":"/run/data"}],"tolerations":[{"operator":"Exists"}],"cordon":true,"upgrade":{"image":"registry.suse.com/rancher/elemental-teal/5.4","command":["/usr/sbin/suc-upgrade"]}},"status":{}}\'\n    name: Plan-cattle-system-os-upgrader-my-upgrade-273c2c09afca.yaml\n  targets:\n  - clusterName: my-cluster\n.\n.\n.\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"elemental-cluster-side",children:"Elemental Cluster side"}),"\n",(0,a.jsxs)(n.p,{children:["Any Elemental Teal node correctly registered and part of the target cluster will fetch the bundle and start applying it.",(0,a.jsx)(n.br,{}),"\n","This operation is performed by the Rancher's ",(0,a.jsx)(n.code,{children:"system-upgrade-controller"})," running on the Elemental Cluster.",(0,a.jsx)(n.br,{}),"\n","To monitor the correct operation of this controller, you can read its logs:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl -n cattle-system logs deployment/system-upgrade-controller\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If everything is correct, the ",(0,a.jsx)(n.code,{children:"system-upgrade-controller"})," will create an upgrade job for each targeted machine.",(0,a.jsx)(n.br,{}),"\n","The job names will use the Plan name (",(0,a.jsx)(n.code,{children:"os-upgrader-my-upgrade"}),") and the target machine hostname (",(0,a.jsx)(n.code,{children:"my-host"}),") for easy discoverability.",(0,a.jsx)(n.br,{}),"\n","For example: ",(0,a.jsx)(n.code,{children:"apply-os-upgrader-my-upgrade-on-my-host-7a25e"}),(0,a.jsx)(n.br,{}),"\n","You can monitor these jobs with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl -n cattle-system get jobs\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Each job will use a ",(0,a.jsx)(n.code,{children:"privileged: true"})," container with the Elemental Teal image specified in the ",(0,a.jsx)(n.code,{children:"ManagedOSImage"})," definition. This container will try to upgrade the system and perform a reboot."]}),"\n",(0,a.jsx)(n.p,{children:"If the job fails, you can check its status by examining the logs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl -n cattle-system logs job.batch/apply-os-upgrader-my-upgrade-on-my-host-7a25e\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Two stages job process",type:"info",children:[(0,a.jsxs)(n.p,{children:["Note that the upgrade process is performed in two stages.",(0,a.jsx)(n.br,{}),"\n","You will notice that the same job is ran twice and the first one ends with the ",(0,a.jsx)(n.code,{children:"Uknown"})," Status and will not complete.",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"This is to be expected"}),", as Elemental Teal relies on the job to be ran again after the machine restarts, so that it can verify the new version was installed correctly.",(0,a.jsx)(n.br,{}),"\n","You will notice a second run of the job, this time completing correctly."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl -n cattle-system get jobs \nNAMESPACE       NAME                                            COMPLETIONS   DURATION   AGE\ncattle-system   apply-os-upgrader-my-upgrade-on-my-host-0b392   1/1           2m34s      6m23s\ncattle-system   apply-os-upgrader-my-upgrade-on-my-host-7a25e   0/1           6m23s      6m23s\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl -n cattle-system get pods \nNAME                                            READY   STATUS      RESTARTS      AGE\napply-os-upgrader-my-upgrade-on-my-host-zbkrh   0/1     Completed   0             9m40s\napply-os-upgrader-my-upgrade-on-my-host-zvrff   0/1     Unknown     0             12m\n"})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},43772:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/troubleshooting-upgrade-d04ebc28593991d53a8c0e59bb2a666b.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var a=t(11504);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);