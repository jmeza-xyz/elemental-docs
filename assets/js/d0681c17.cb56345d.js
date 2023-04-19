"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[4859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1671:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(7462),i=(n(7294),n(3905));const l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},r=l("Tabs"),o=l("TabItem"),s={toc:[{value:"Install Elemental Operator",id:"install-elemental-operator",level:2}]},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install-elemental-operator"},"Install Elemental Operator"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"elemental-operator")," is the management endpoint, running the management\ncluster and taking care of creating inventories, registrations for machines and much more."),(0,i.kt)("p",null,"We will use the Helm package manager to install the elemental-operator chart into our cluster."),(0,i.kt)(r,{mdxType:"Tabs"},(0,i.kt)(o,{value:"stableOperator",label:"Stable version (x86-64 only)",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\n"))),(0,i.kt)(o,{value:"develOperator",label:"Development version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,mdxType:"TabItem"},(0,i.kt)("admonition",{title:"Reminder",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The development version is 'best effort' supported. We welcome feedback via Slack or Github issues. But it might be a bit rough as we move the stack forward.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install --set image.imagePullPolicy=Always elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-chart\n")))),(0,i.kt)("p",null,"There is a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-operator/blob/main/chart/values.yaml"},"values.yaml")),(0,i.kt)("p",null,"Now after a few seconds you should see the operator pod appear on the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-elemental-system")," namespace."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl get pods -n cattle-elemental-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nelemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s\n")))}c.isMDXComponent=!0},7586:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),i=(n(7294),n(3905));const l={toc:[{value:"Prerequisites",id:"prerequisites",level:2}]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(r,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Rancher server (v2.7.0) configured (server-url set)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To configure the Rancher ",(0,i.kt)("inlineCode",{parentName:"li"},"server-url")," please check the ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/#first-log-in"},"Rancher docs")))),(0,i.kt)("li",{parentName:"ul"},"A machine (bare metal or virtualized) with TPM 2.0",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hint 1: Libvirt allows setting virtual TPMs for virtual machines ",(0,i.kt)("a",{parentName:"li",href:"tpm/#add-tpm-module-to-virtual-machine"},"example here")),(0,i.kt)("li",{parentName:"ul"},"Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module ",(0,i.kt)("a",{parentName:"li",href:"tpm/#add-tpm-emulation-to-bare-metal-machine"},"example here")),(0,i.kt)("li",{parentName:"ul"},"Hint 3: Make sure you're using UEFI (not BIOS) on x86-64, or the ISO won't boot"))),(0,i.kt)("li",{parentName:"ul"},"Helm Package Manager (",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"https://helm.sh/"),")"),(0,i.kt)("li",{parentName:"ul"},"For ARM (aarch64) - One SD-card (32 GB or more, must be ",(0,i.kt)("strong",{parentName:"li"},"fast")," - 40MB/s write speed is acceptable) and a USB-stick for installation")))}o.isMDXComponent=!0},2081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),l=n(7586),r=n(1671);const o={sidebar_label:"Elemental the visual way",title:""},s="Elemental the visual way",p={unversionedId:"quickstart-ui",id:"quickstart-ui",title:"",description:"This quickstart will show you how to deploy the Elemental plugin into an existing Rancher Manager instance.",source:"@site/docs/quickstart-ui.md",sourceDirName:".",slug:"/quickstart-ui",permalink:"/next/quickstart-ui",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Elemental the visual way",title:""},sidebar:"docs",previous:{title:"Overview",permalink:"/next/"},next:{title:"Elemental the command line way",permalink:"/next/quickstart-cli"}},c={},u=[{value:"Enable the Rancher Manager Extensions Support",id:"enable-the-rancher-manager-extensions-support",level:2},{value:"Install the elemental plugin",id:"install-the-elemental-plugin",level:2},{value:"Add a Machine Registration Endpoint",id:"add-a-machine-registration-endpoint",level:2},{value:"Preparing the installation (seed) image",id:"preparing-the-installation-seed-image",level:2},{value:"Machine Inventory",id:"machine-inventory",level:2}],m={toc:u},d="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"elemental-the-visual-way"},"Elemental the visual way"),(0,i.kt)("p",null,"This quickstart will show you how to deploy the Elemental plugin into an existing Rancher Manager instance."),(0,i.kt)("p",null,"Once installed, you'll be able to provision a new Elemental cluster based on RKE2 or K3s."),(0,i.kt)(l.ZP,{mdxType:"Prereqs"}),(0,i.kt)(r.ZP,{mdxType:"Operator"}),(0,i.kt)("h2",{id:"enable-the-rancher-manager-extensions-support"},"Enable the Rancher Manager Extensions Support"),(0,i.kt)("p",null,"In order to enable the Rancher Manager Extensions Support, you'll need to follow the steps below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open a web browser, connect and login to your Rancher Manager instance"),(0,i.kt)("li",{parentName:"ul"},"Click on the top left menu ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Extensions"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rancher Manager menu",src:n(2631).Z,width:"279",height:"545"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Enable")," button to install the ",(0,i.kt)("inlineCode",{parentName:"li"},"Extension Operator"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Enable Rancher Manager Extensions Operator",src:n(4030).Z,width:"1107",height:"420"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A popup will appear, click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," button to continue and install the Rancher Manager Extensions repository")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Rancher Manager Extensions repository",src:n(5256).Z,width:"1212",height:"586"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#install-the-elemental-plugin"},"next section")),(0,i.kt)("h2",{id:"install-the-elemental-plugin"},"Install the elemental plugin"),(0,i.kt)("p",null,"After the Rancher Manager Extensions Support is enabled, you can install the ",(0,i.kt)("inlineCode",{parentName:"p"},"elemental")," plugin as follow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Under the ",(0,i.kt)("inlineCode",{parentName:"li"},"Available")," tab you will see ",(0,i.kt)("inlineCode",{parentName:"li"},"elemental")," plugin available")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rancher Manager Available plugins",src:n(401).Z,width:"620",height:"296"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Available")," tab shows no entries, refresh the page. The ",(0,i.kt)("inlineCode",{parentName:"p"},"elemental")," plugin will then appear.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Install")," button, a popup will appear and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Install")," again to continue.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Elemental plugin install",src:n(3733).Z,width:"1215",height:"598"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the ",(0,i.kt)("inlineCode",{parentName:"li"},"Installed")," tab, the ",(0,i.kt)("inlineCode",{parentName:"li"},"elemental")," plugin is now listed.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"elemental")," plugin is listed and the status stays at ",(0,i.kt)("inlineCode",{parentName:"p"},"Installing..."),", refresh the page. The ",(0,i.kt)("inlineCode",{parentName:"p"},"elemental")," plugin will display correctly.")),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"elemental")," plugin installed, you can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"OS Manamagent")," option in the Rancher Manager menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rancher Manager OS Management menu",src:n(7432).Z,width:"278",height:"579"})),(0,i.kt)("h2",{id:"add-a-machine-registration-endpoint"},"Add a Machine Registration Endpoint"),(0,i.kt)("p",null,"In the OS Management dashboard, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Registration Endpoint")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OS Management registration endpoints",src:n(700).Z,width:"766",height:"307"})),(0,i.kt)("p",null,"Now here either you can enter each detail in its respective places or you can edit this as YAML and create the endpoint in one go. Here we'll edit every fields."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a Registration Endpoint with UI",src:n(5262).Z,width:"953",height:"1524"})),(0,i.kt)("admonition",{title:"main options",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"name: elemental-cluster1"),": change this as per your need"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"device: /dev/sda"),': make sure your target device is "sda". Otherwise find out how the disk device is named and change it here. For example, in Raspberry Pi it could be "mmblk"'),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"emulate-tpm: true"),": use this only if your target device doesn't have a TPM device and you have a way of emulating TPM like in VMware or KVM"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"emulated-tpm-seed: 1"),": increase this by 1 for every new machine. If this value is not set, each machine will receive the same TPM hash and it won't show up under the machine inventory.")),(0,i.kt)("admonition",{title:"attention",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Emulated TPM is only for non-production usage like for testing as it beats the purpose of security. So in production usage use the code above without the ",(0,i.kt)("inlineCode",{parentName:"p"},"emulate-tpm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"emulate-tpm-seed"))),(0,i.kt)("p",null,"Once you create the machine registration end point it should show up as active."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Machine registered in Registration Endpoints",src:n(7666).Z,width:"572",height:"376"})),(0,i.kt)("h2",{id:"preparing-the-installation-seed-image"},"Preparing the installation (seed) image"),(0,i.kt)("p",null,"Now this is the last step, you need to prepare an Elemental Teal seed image that includes the initial registration config, so\nit can be auto registered, installed and fully deployed as part of your cluster. The contents of the file are nothing\nmore than the registration URL that the node needs to register and the proper server certificate, so it can connect securely."),(0,i.kt)("p",null,"This seed image can then be used to provision an infinite number of machines."),(0,i.kt)("p",null,"The seed image is created as a Kubernetes resource above and can be built using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Build ISO")," button:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build ISO in Registration Endpoints",src:n(4080).Z,width:"1247",height:"435"})),(0,i.kt)("p",null,"Once the build is done, ISO can be downloaded using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Download ISO")," button:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Download ISO in Registration Endpoints",src:n(6950).Z,width:"1247",height:"435"})),(0,i.kt)("p",null,"You can now boot your nodes with this image and they will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Register with the registrationURL given and create a per-machine ",(0,i.kt)("inlineCode",{parentName:"li"},"MachineInventory")),(0,i.kt)("li",{parentName:"ul"},"Install Elemental Teal to the given device"),(0,i.kt)("li",{parentName:"ul"},"Reboot")),(0,i.kt)("h2",{id:"machine-inventory"},"Machine Inventory"),(0,i.kt)("p",null,"When nodes are booting up for the first time, they connect to Rancher Manager and a ",(0,i.kt)("a",{parentName:"p",href:"https://elemental.docs.rancher.com/architecture#machineinventory"},(0,i.kt)("inlineCode",{parentName:"a"},"Machine Inventory"))," is created for each node."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Machine Inventory menu",src:n(3349).Z,width:"1673",height:"574"})),(0,i.kt)("p",null,"Custom columns are based on ",(0,i.kt)("inlineCode",{parentName:"p"},"Machine Inventory Labels")," which you can add when you create your ",(0,i.kt)("inlineCode",{parentName:"p"},"Machine Registration Endpoint"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Machine Registration Endpoint Hardware Labels",src:n(4736).Z,width:"1665",height:"1368"})),(0,i.kt)("p",null,"On the following screenshot, ",(0,i.kt)("a",{parentName:"p",href:"https://elemental.docs.rancher.com/hardwarelabels/#hardware-labels"},(0,i.kt)("inlineCode",{parentName:"a"},"Hardware Labels"))," are used as custom columns:"),(0,i.kt)("p",null,"You can also add custom columns by clicking on the three dots menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Machine Inventory custom columns",src:n(9313).Z,width:"1672",height:"734"})),(0,i.kt)("p",null,"Finally, you can also filter your ",(0,i.kt)("inlineCode",{parentName:"p"},"Machine Inventory")," using those labels."),(0,i.kt)("p",null,"For instance if you only want to see your AMD machines, you can filter on ",(0,i.kt)("inlineCode",{parentName:"p"},"CPUModel")," like below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Machine Inventory filtering",src:n(2679).Z,width:"1672",height:"734"})))}h.isMDXComponent=!0},3733:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-elemental-plugin-install-ecdc4ce7ce04426c02ff914ecf13d906.png"},7432:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-elemental-plugin-menu-0e0659f62678b700aa7d7341284fd9a5.png"},4030:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-extension-enable-86662009426b5220cab5c9f72a71ea4b.png"},5256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-extension-repository-84e4ca717832fe04524f71741750f69c.png"},401:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-extensions-available-31f7812c57abc824b1337bd8ae3d6247.png"},9313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-machine-inventory-custom-columns-120ed1afa8effc83540bb72631623aa7.png"},2679:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-machine-inventory-filtering-b7918cd6394c1d0aa8158adbc7d6039b.png"},3349:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-machine-inventory-menu-e868fad782ec36416690986b9a0ee4b9.png"},2631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-menu-62e787746510862a9bc32b4ac1d65213.png"},4080:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-registration-endpoint-build-ISO-e3e6386d33bb61f4c45bfd261000cdc5.png"},7666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-registration-endpoint-complete-7c3686ae051927fdb9cec1ee38a8eb58.png"},5262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-registration-endpoint-create-details-5954e7fe1555060b20987c13a0978cd8.png"},700:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-registration-endpoint-create-f687c90235eea798645d699b6bbd8d23.png"},6950:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-registration-endpoint-download-ISO-d9eccf8bb5bdc387fecfa757df572815.png"},4736:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-ui-registration-endpoint-hardware-labels-d96f34687fee37f7f1438e21508cacce.png"}}]);