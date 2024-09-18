"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[9985],{29103:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>m});var t=i(17624),s=i(4552),r=i(44668);const a='apiVersion: ipam.cluster.x-k8s.io/v1alpha2\nkind: InClusterIPPool\nmetadata:\n  name: elemental-inventory-pool\n  namespace: fleet-default\nspec:\n  addresses:\n    - 192.168.122.150-192.168.122.200\n  prefix: 24\n  gateway: 192.168.122.1\n---\napiVersion: ipam.cluster.x-k8s.io/v1alpha2\nkind: InClusterIPPool\nmetadata:\n  name: elemental-secondary-pool\n  namespace: fleet-default\nspec:\n  addresses:\n    - 172.16.0.150-172.16.0.200\n  prefix: 24\n  gateway: 172.16.0.1\n---\napiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  machineName: m-${System Information/UUID}\n  config:\n    network:\n      configurator: nmc\n      ipAddresses:\n        inventory-ip:\n          apiGroup: ipam.cluster.x-k8s.io\n          kind: InClusterIPPool\n          name: elemental-inventory-pool\n        secondary-ip:\n          apiGroup: ipam.cluster.x-k8s.io\n          kind: InClusterIPPool\n          name: elemental-secondary-pool\n      config:\n        dns-resolver:\n          config:\n            server:\n            - 192.168.122.1\n            search: []\n        routes:\n          config:\n          - destination: 0.0.0.0/0\n            next-hop-interface: enp1s0\n            next-hop-address: 192.168.122.1\n            metric: 150\n            table-id: 254\n          - destination: 172.16.0.1/24\n            next-hop-interface: enp8s0\n            next-hop-address: 172.16.0.1\n            metric: 150\n            table-id: 254\n        interfaces:\n          - name: enp1s0\n            type: ethernet\n            description: Main-NIC\n            state: up\n            ipv4:\n              enabled: true\n              dhcp: false\n              address:\n              - ip: "{inventory-ip}"\n                prefix-length: 24\n            ipv6:\n              enabled: false\n          - name: enp8s0\n            type: ethernet\n            description: Secondary-NIC\n            state: up\n            ipv4:\n              enabled: true\n              dhcp: false\n              address:\n              - ip: "{secondary-ip}"\n                prefix-length: 24\n            ipv6:\n              enabled: false\n',o='apiVersion: ipam.cluster.x-k8s.io/v1alpha2\nkind: InClusterIPPool\nmetadata:\n  name: elemental-inventory-pool\n  namespace: fleet-default\nspec:\n  addresses:\n    - 192.168.122.150-192.168.122.200\n  prefix: 24\n  gateway: 192.168.122.1\n---\napiVersion: ipam.cluster.x-k8s.io/v1alpha2\nkind: InClusterIPPool\nmetadata:\n  name: elemental-secondary-pool\n  namespace: fleet-default\nspec:\n  addresses:\n    - 172.16.0.150-172.16.0.200\n  prefix: 24\n  gateway: 172.16.0.1\n---\napiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  machineName: m-${System Information/UUID}\n  config:\n    network:\n      configurator: nmstate\n      ipAddresses:\n        inventory-ip:\n          apiGroup: ipam.cluster.x-k8s.io\n          kind: InClusterIPPool\n          name: elemental-inventory-pool\n        secondary-ip:\n          apiGroup: ipam.cluster.x-k8s.io\n          kind: InClusterIPPool\n          name: elemental-secondary-pool\n      config:\n        dns-resolver:\n          config:\n            server:\n            - 192.168.122.1\n            search: []\n        routes:\n          config:\n          - destination: 0.0.0.0/0\n            next-hop-interface: enp1s0\n            next-hop-address: 192.168.122.1\n            metric: 150\n            table-id: 254\n          - destination: 172.16.0.1/24\n            next-hop-interface: enp8s0\n            next-hop-address: 172.16.0.1\n            metric: 150\n            table-id: 254\n        interfaces:\n          - name: enp1s0\n            type: ethernet\n            description: Main-NIC\n            state: up\n            ipv4:\n              enabled: true\n              dhcp: false\n              address:\n              - ip: "{inventory-ip}"\n                prefix-length: 24\n            ipv6:\n              enabled: false\n          - name: enp8s0\n            type: ethernet\n            description: Secondary-NIC\n            state: up\n            ipv4:\n              enabled: true\n              dhcp: false\n              address:\n              - ip: "{secondary-ip}"\n                prefix-length: 24\n            ipv6:\n              enabled: false\n',l='apiVersion: ipam.cluster.x-k8s.io/v1alpha2\nkind: InClusterIPPool\nmetadata:\n  name: elemental-inventory-pool\n  namespace: fleet-default\nspec:\n  addresses:\n    - 192.168.122.150-192.168.122.200\n  prefix: 24\n  gateway: 192.168.122.1\n---\napiVersion: ipam.cluster.x-k8s.io/v1alpha2\nkind: InClusterIPPool\nmetadata:\n  name: elemental-secondary-pool\n  namespace: fleet-default\nspec:\n  addresses:\n    - 172.16.0.150-172.16.0.200\n  prefix: 24\n  gateway: 172.16.0.1\n---\napiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  machineName: test-${System Information/UUID}\n  config:\n    network:\n      configurator: "nmconnections"\n      ipAddresses:\n        inventory-ip:\n          apiGroup: ipam.cluster.x-k8s.io\n          kind: InClusterIPPool\n          name: elemental-inventory-pool\n        secondary-ip:\n          apiGroup: ipam.cluster.x-k8s.io\n          kind: InClusterIPPool\n          name: elemental-secondary-pool\n      config:\n        enp1s0: |\n          [connection]\n          id=Wired connection 1\n          type=ethernet\n          interface-name=enp1s0\n          [ipv4]\n          address1={inventory-ip}/24,192.168.1.1\n          dns=192.168.122.1;\n          method=manual\n          route1=0.0.0.0/0,192.168.122.1\n          [ipv6]\n          method=disabled\n        enp8s0: |\n          [connection]\n          id=Wired connection 2\n          type=ethernet\n          interface-name=enp8s0\n          [ipv4]\n          address1={secondary-ip}/24,172.16.0.1\n          method=manual\n          route1=172.16.0.0/24,172.16.0.1,150\n          [ipv6]\n          method=disabled\n',c={sidebar_label:"IPAM Driven Networking",title:""},d=void 0,h={id:"networking",title:"",description:"Network configuration with Elemental",source:"@site/docs/networking.md",sourceDirName:".",slug:"/networking",permalink:"/next/networking",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"IPAM Driven Networking",title:""},sidebar:"docs",previous:{title:"Deprecated Variables",permalink:"/next/label-templates-deprecated"},next:{title:"Static Configuration",permalink:"/next/networking-static"}},p={},m=[{value:"Network configuration with Elemental",id:"network-configuration-with-elemental",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"How to install the CAPI IPAM Provider",id:"how-to-install-the-capi-ipam-provider",level:3},{value:"Without Rancher Turtles",id:"without-rancher-turtles",level:4},{value:"Configuring Network",id:"configuring-network",level:3},{value:"Claimed IPAddresses",id:"claimed-ipaddresses",level:3},{value:"Configurators",id:"configurators",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components},{CodeBlock:i,Details:c,Head:d,TabItem:h,Tabs:p}=n;return i||x("CodeBlock",!0),c||x("Details",!0),d||x("Head",!0),h||x("TabItem",!0),p||x("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/networking"})}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"network-configuration-with-elemental",children:"Network configuration with Elemental"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"machineregistration-reference",children:"MachineRegistration"})," supports Declarative Networking and integration with ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20220125-ipam-integration.md#ipam-provider",children:"CAPI IPAM Providers"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A DHCP server is still required for the first boot registration and reset of machines. For this reason Lease Time can be kept minimal, as for the entire lifecycle of the machine, the IPAM driven IP Addresses will be used."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An IPAM Provider of your choice is installed on the Rancher management cluster.",(0,t.jsx)(n.br,{}),"\n","For example the ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster",children:"InCluster IPAM Provider"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://networkmanager.dev",children:"NetworkManager"})," needs to be installed on OS images and it can be directly configured using the ",(0,t.jsx)(n.code,{children:"nmconnections"})," network ",(0,t.jsx)(n.a,{href:"#configurators",children:"configurator"}),".",(0,t.jsx)(n.br,{}),"\n","Already included in Elemental provided images."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(optionally) ",(0,t.jsx)(n.a,{href:"https://github.com/suse-edge/nm-configurator/releases",children:"nmc"})," can be used with ",(0,t.jsx)(n.code,{children:"nmc"})," network ",(0,t.jsx)(n.a,{href:"#configurators",children:"configurator"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(optionally) ",(0,t.jsx)(n.a,{href:"https://github.com/nmstate/nmstate/releases",children:"nmstatectl"})," can be used with ",(0,t.jsx)(n.code,{children:"nmstate"})," network ",(0,t.jsx)(n.a,{href:"#configurators",children:"configurator"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-install-the-capi-ipam-provider",children:"How to install the CAPI IPAM Provider"}),"\n",(0,t.jsxs)(n.p,{children:["The recommended way to install any CAPI Provider into Rancher is to use ",(0,t.jsx)(n.a,{href:"https://turtles.docs.rancher.com",children:"Rancher Turtles"}),".",(0,t.jsx)(n.br,{}),"\n","Rancher Turtles will allow the user to install and manage the lifecycle of any CAPI Provider.",(0,t.jsx)(n.br,{}),"\n","To install it on your system please follow the ",(0,t.jsx)(n.a,{href:"https://turtles.docs.rancher.com/getting-started/install-rancher-turtles/using_helm",children:"documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Once Rancher Turtles is installed, installing an IPAM CAPI Provider, for example the ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster",children:"InCluster IPAM Provider"}),", can be accomplished applying the following resource:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'kind: CAPIProvider\nmetadata:\n  name: in-cluster\n  namespace: default\nspec:\n  name: in-cluster\n  type: ipam\n  fetchConfig:\n    url: "https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster/releases"\n  version: v0.1.0\n'})}),"\n",(0,t.jsx)(n.h4,{id:"without-rancher-turtles",children:"Without Rancher Turtles"}),"\n",(0,t.jsxs)(n.p,{children:["An alternative option to install a CAPI IPAM Provider is to directly apply the manifest in the Rancher cluster.",(0,t.jsx)(n.br,{}),"\n","Note that this solution may eventually lead to conflicts with the applied CRDs and resources, as they need to be applied and maintained manually."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ipaddresses.ipam.cluster.x-k8s.io"})," and ",(0,t.jsx)(n.code,{children:"ipaddressclaims.ipam.cluster.x-k8s.io"})," CRDs must be installed on the Rancher management cluster:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/cluster-api/main/config/crd/bases/ipam.cluster.x-k8s.io_ipaddressclaims.yaml\nkubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/cluster-api/main/config/crd/bases/ipam.cluster.x-k8s.io_ipaddresses.yaml\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"info",type:"info",children:(0,t.jsxs)(n.p,{children:["These CRDs are expected to eventually be part of Rancher, not requiring manual installation.",(0,t.jsx)(n.br,{}),"\n","See: ",(0,t.jsx)(n.a,{href:"https://github.com/rancher/rancher/issues/46385",children:"https://github.com/rancher/rancher/issues/46385"})]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster",children:"InCluster IPAM Provider"})," from the released manifest:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster/releases/download/v0.1.0/ipam-components.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configuring-network",children:"Configuring Network"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"network"})," section of the ",(0,t.jsx)(n.code,{children:"MachineRegistration"})," allows users to define:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"A map of IPPool references."}),"\n",(0,t.jsxs)(n.li,{children:["A network config template (in this case ",(0,t.jsx)(n.code,{children:"nmc"})," configurator is in use)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(i,{language:"yaml",title:"example MachineRegistration using Declarative Networking",showLineNumbers:!0,children:r.c}),"\n",(0,t.jsxs)(n.p,{children:["Here we can observe that one ",(0,t.jsx)(n.code,{children:"InClusterIPPool"})," has been defined, since we are using the ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster",children:"InCluster IPAM Provider"})," for this example."]}),"\n",(0,t.jsxs)(n.p,{children:["Next we are going to reference this IPPool in the ",(0,t.jsx)(n.code,{children:"MachineRegistration"}),". The key for this reference is ",(0,t.jsx)(n.code,{children:"inventory-ip"}),", and we are only going to need one IP per registered Machine. If your machine has more than one NIC, you can define more references, and use different IPPools as well, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"ipAddresses:\n  main-nic-ip:\n    apiGroup: ipam.cluster.x-k8s.io\n    kind: InClusterIPPool\n    name: elemental-inventory-pool\n  secondary-nic-ip:\n    apiGroup: ipam.cluster.x-k8s.io\n    kind: InClusterIPPool\n    name: elemental-inventory-pool\n  private-nic-ip:\n    apiGroup: ipam.cluster.x-k8s.io\n    kind: InClusterIPPool\n    name: elemental-private-pool\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each defined IPPool reference key can be used for the network config template:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'config:\n  dns-resolver:\n    config:\n      server:\n      - 192.168.122.1\n      search: []\n  routes:\n    config:\n    - destination: 0.0.0.0/0\n      next-hop-interface: enp1s0\n      next-hop-address: 192.168.122.1\n      metric: 150\n      table-id: 254\n  interfaces:\n    - name: enp1s0\n      type: ethernet\n      description: Main-NIC\n      state: up\n      ipv4:\n        enabled: true\n        dhcp: false\n        address:\n        - ip: "{inventory-ip}"\n          prefix-length: 24\n      ipv6:\n        enabled: false\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The snippet above is almost 1:1 ",(0,t.jsx)(n.a,{href:"https://github.com/suse-edge/nm-configurator?tab=readme-ov-file#unified-configurations",children:"nm-configurator syntax"}),", with the only exception of the ",(0,t.jsx)(n.code,{children:"{inventory-ip}"})," placeholder.",(0,t.jsx)(n.br,{}),"\n","During the installation or reset phases of Elemental machines, the ",(0,t.jsx)(n.code,{children:"elemental-operator"})," will claim one IP Address from the referenced IP Pool, and substitute the ",(0,t.jsx)(n.code,{children:"{inventory-ip}"})," placeholder with a real IP Address."]}),"\n",(0,t.jsx)(n.h3,{id:"claimed-ipaddresses",children:"Claimed IPAddresses"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IPAddressClaim"})," will follow the entire lifecycle of the ",(0,t.jsx)(n.code,{children:"MachineInventory"}),", ensuring that each registered machine will be assigned unique IPs.",(0,t.jsx)(n.br,{}),"\n","Each claim is named after the ",(0,t.jsx)(n.code,{children:"MachineInventory"})," that uses it, as ",(0,t.jsx)(n.code,{children:"$MachineIventoryName-$IPPoolRefKey"}),", for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: ipam.cluster.x-k8s.io/v1beta1\nkind: IPAddressClaim\nmetadata:\n  finalizers:\n    - ipam.cluster.x-k8s.io/ReleaseAddress\n  name: m-e5331e3b-1e1b-4ce7-b080-235ed9a6d07c-inventory-ip\n  namespace: fleet-default\n  ownerReferences:\n    - apiVersion: elemental.cattle.io/v1beta1\n      kind: MachineInventory\n      name: m-e5331e3b-1e1b-4ce7-b080-235ed9a6d07c\nspec:\n  poolRef:\n    apiGroup: ipam.cluster.x-k8s.io\n    kind: InClusterIPPool\n    name: elemental-inventory-pool\nstatus:\n  addressRef:\n    name: m-e5331e3b-1e1b-4ce7-b080-235ed9a6d07c-inventory-ip\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Whenever a ",(0,t.jsx)(n.code,{children:"MachineInventory"})," is deleted, the default (DHCP) network configuration will be restored and the IPs assigned will be released."]}),"\n",(0,t.jsxs)(n.p,{children:["For more information and details on how troubleshoot issues, please consult the ",(0,t.jsx)(n.a,{href:"/next/troubleshooting-network",children:"documentation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"configurators",children:"Configurators"}),"\n",(0,t.jsxs)(n.p,{children:["On the Elemental machine, ",(0,t.jsx)(n.code,{children:"elemental-register"})," can configure the ",(0,t.jsx)(n.code,{children:"NetworkManager"})," in different ways.",(0,t.jsx)(n.br,{}),"\n","The configurator in use is defined in the ",(0,t.jsx)(n.a,{href:"/next/machineregistration-reference#confignetwork",children:"MachineRegistration.spec.network"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/suse-edge/nm-configurator",children:"nmc"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://nmstate.io/",children:"nmstate"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nm-settings-keyfile.html",children:"nmconnections"})}),"\n"]}),"\n",(0,t.jsxs)(p,{children:[(0,t.jsxs)(h,{value:"nmc",label:"nmc",default:!0,children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"nmc"})," configurator uses the ",(0,t.jsx)(n.a,{href:"https://github.com/suse-edge/nm-configurator?tab=readme-ov-file#unified-configurations",children:"nm-configurator unified syntax"})," to generate NetworkManager's connection files."]}),(0,t.jsxs)(c,{children:[(0,t.jsx)("summary",{children:"example MachineRegistration using nmc configurator"}),(0,t.jsx)(i,{language:"yaml",showLineNumbers:!0,children:a})]})]}),(0,t.jsxs)(h,{value:"nmstate",label:"nmstate",default:!0,children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"nmstate"})," configurator uses ",(0,t.jsx)(n.a,{href:"https://nmstate.io/examples.html",children:"nmstate syntax"})," to generate NetworkManager's connection files.",(0,t.jsx)(n.br,{}),"\n","Note that ",(0,t.jsx)(n.a,{href:"https://github.com/nmstate/nmstate/releases",children:"nmstatectl"})," needs to be installed on the Elemental system to use this configurator. This is not included by default in Elemental images, but can be installed when building a ",(0,t.jsx)(n.a,{href:"/next/custom-images",children:"custom image"}),"."]}),(0,t.jsxs)(c,{children:[(0,t.jsx)("summary",{children:"example MachineRegistration using nmstate configurator"}),(0,t.jsx)(i,{language:"yaml",showLineNumbers:!0,children:o})]})]}),(0,t.jsxs)(h,{value:"nmconnections",label:"nmconnections",default:!0,children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"nmconnections"})," configurator is the simplest option available and allows the user to directly write ",(0,t.jsx)(n.code,{children:"nmconnection"})," files.",(0,t.jsx)(n.br,{}),"\n","Defining these files for complex network setups may be challenging, but it's always possible to use ",(0,t.jsx)(n.a,{href:"https://networkmanager.dev/docs/api/latest/nmcli.html",children:"nmcli"}),", or even ",(0,t.jsx)(n.a,{href:"https://nmstate.io",children:"nmstate"}),", or ",(0,t.jsx)(n.a,{href:"https://github.com/suse-edge/nm-configurator",children:"nm-configurator"}),", and use the generated ",(0,t.jsx)(n.code,{children:"nmconnection"})," files as a template.",(0,t.jsx)(n.br,{}),"\n","This configurator only needs ",(0,t.jsx)(n.code,{children:"NetworkManager"}),", without any extra dependency."]}),(0,t.jsxs)(c,{children:[(0,t.jsx)("summary",{children:"example MachineRegistration using nmconnections configurator"}),(0,t.jsx)(i,{language:"yaml",showLineNumbers:!0,children:l})]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44668:(e,n,i)=>{i.d(n,{c:()=>t});const t='apiVersion: ipam.cluster.x-k8s.io/v1alpha2\nkind: InClusterIPPool\nmetadata:\n  name: elemental-inventory-pool\n  namespace: fleet-default\nspec:\n  addresses:\n    - 192.168.122.150-192.168.122.200\n  prefix: 24\n  gateway: 192.168.122.1\n---\napiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  machineName: m-${Product/UUID}\n  config:\n    network:\n      configurator: nmc\n      ipAddresses:\n        inventory-ip:\n          apiGroup: ipam.cluster.x-k8s.io\n          kind: InClusterIPPool\n          name: elemental-inventory-pool\n      config:\n        dns-resolver:\n          config:\n            server:\n            - 192.168.122.1\n            search: []\n        routes:\n          config:\n          - destination: 0.0.0.0/0\n            next-hop-interface: enp1s0\n            next-hop-address: 192.168.122.1\n            metric: 150\n            table-id: 254\n        interfaces:\n          - name: enp1s0\n            type: ethernet\n            description: Main-NIC\n            state: up\n            ipv4:\n              enabled: true\n              dhcp: false\n              address:\n              - ip: "{inventory-ip}"\n                prefix-length: 24\n            ipv6:\n              enabled: false\n'},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>a});var t=i(11504);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);