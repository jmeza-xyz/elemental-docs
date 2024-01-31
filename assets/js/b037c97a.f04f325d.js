"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2923],{8821:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(5893),s=t(1151);function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{TabItem:t,Tabs:a}=n;return t||l("TabItem",!0),a||l("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"install-elemental-operator",children:"Install Elemental Operator"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"elemental-operator"})," is the management endpoint, running the management\ncluster and taking care of creating inventories, registrations for machines and much more."]}),"\n",(0,i.jsx)(n.p,{children:"We will use the Helm package manager to install the elemental-operator chart into our cluster."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.suse.com/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.suse.com/rancher/elemental-operator-chart\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now after a few seconds you should see the operator pod appear on the ",(0,i.jsx)(n.code,{children:"cattle-elemental-system"})," namespace:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl get pods -n cattle-elemental-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nelemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Helm v3.8.0+ required",type:"info",children:(0,i.jsx)(n.p,{children:"The Elemental Operator chart is distributed via an OCI registry: Helm correctly supports OCI based registries starting from the v3.8.0 release."})}),"\n",(0,i.jsx)(n.admonition,{title:"Swap charts installation order when upgrading from elemental-operator release < 1.2.4",type:"warning",children:(0,i.jsx)(n.p,{children:"When upgrading from an elemental-operator release embedding the Elemental CRDs (version < 1.2.4) the elemental-operator-crds chart installation will fail.\nYou will need to upgrade the elemental-operator chart first, and only then install the elemental-operator-crds chart."})}),"\n",(0,i.jsx)(n.h3,{id:"non-stable-installations",children:"Non-stable installations"}),"\n",(0,i.jsxs)(n.p,{children:["Besides the Helm charts listed above, there are two other ",(0,i.jsx)(n.code,{children:"non-stable"}),"\nversions available."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Staging:"})," refers to the latest tagged release from Github. This is documented in the ",(0,i.jsx)(n.a,{href:"quickstart-ui",children:"Next"})," pages."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Development:"})," refers to the 'tip of HEAD' from Github. This is the ongoing development version and changes constantly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)(t,{value:"stagingOperator",label:"Staging version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.opensuse.org/isv/rancher/elemental/staging/charts/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/staging/charts/rancher/elemental-operator-chart\n"})})}),(0,i.jsxs)(t,{value:"develOperator",label:"Development version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,children:[(0,i.jsx)(n.admonition,{title:"Reminder",type:"warning",children:(0,i.jsx)(n.p,{children:"The development version is not recommended for production environments. We welcome feedback via Slack or Github issues, but it could be unstable and contain experimental features that can be dropped without notice."})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install --set image.imagePullPolicy=Always elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-chart\n"})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"installation-options",children:"Installation options"}),"\n",(0,i.jsxs)(n.p,{children:["There are a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/elemental-operator/blob/main/charts/operator/values.yaml",children:"values.yaml"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6265:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(5893),s=t(1151);function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A Rancher server (v2.7.0 or later) configured (server-url set)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To configure the Rancher ",(0,i.jsx)(n.code,{children:"server-url"})," please check the ",(0,i.jsx)(n.a,{href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/#first-log-in",children:"Rancher docs"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["A machine (bare metal or virtualized) with TPM 2.0","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Hint 1: Libvirt allows setting virtual TPMs for virtual machines ",(0,i.jsx)(n.a,{href:"tpm#add-tpm-module-to-virtual-machine",children:"example here"})]}),"\n",(0,i.jsxs)(n.li,{children:["Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module ",(0,i.jsx)(n.a,{href:"tpm#add-tpm-emulation-to-bare-metal-machine",children:"example here"})]}),"\n",(0,i.jsx)(n.li,{children:"Hint 3: Make sure you're using UEFI (not BIOS) on x86-64, or the ISO won't boot"}),"\n",(0,i.jsxs)(n.li,{children:["Hint 4: A minimum volume size of 25 GB is recommended. See the ",(0,i.jsx)(n.a,{href:"installation#deployed-elemental-teal-partition-table",children:"Elemental Teal partition table"})," for more details"]}),"\n",(0,i.jsxs)(n.li,{children:["Hint 5: CPU and RAM requirements depend on the Kubernetes version installed, for example ",(0,i.jsx)(n.a,{href:"https://docs.k3s.io/installation/requirements#hardware",children:"K3s"})," or ",(0,i.jsx)(n.a,{href:"https://docs.rke2.io/install/requirements#hardware",children:"RKE2"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Helm Package Manager (",(0,i.jsx)(n.a,{href:"https://helm.sh/",children:"https://helm.sh/"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["For ARM (aarch64) - One SD-card (32 GB or more, must be ",(0,i.jsx)(n.strong,{children:"fast"})," - 40MB/s write speed is acceptable) and a USB-stick for installation"]}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=t(5893),s=t(1151),a=t(6265),r=t(8821);const l={sidebar_label:"Elemental the visual way",title:""},o="Elemental the visual way",c={id:"quickstart-ui",title:"",description:"This quickstart will show you how to deploy the Elemental plugin into an existing Rancher Manager instance.",source:"@site/versioned_docs/version-1.3/quickstart-ui.md",sourceDirName:".",slug:"/quickstart-ui",permalink:"/quickstart-ui",draft:!1,unlisted:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Elemental the visual way",title:""},sidebar:"docs",previous:{title:"Overview",permalink:"/"},next:{title:"Elemental the command line way",permalink:"/quickstart-cli"}},h={},d=[{value:"Enable the Rancher Manager Extensions Support",id:"enable-the-rancher-manager-extensions-support",level:2},{value:"Install the elemental plugin",id:"install-the-elemental-plugin",level:2},{value:"Add a Machine Registration Endpoint",id:"add-a-machine-registration-endpoint",level:2},{value:"Preparing the installation (seed) image",id:"preparing-the-installation-seed-image",level:2},{value:"Machine Inventory",id:"machine-inventory",level:2},{value:"Create your first Elemental Cluster",id:"create-your-first-elemental-cluster",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Head:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/quickstart-ui"})}),"\n","\n","\n",(0,i.jsx)(n.h1,{id:"elemental-the-visual-way",children:"Elemental the visual way"}),"\n",(0,i.jsx)(n.p,{children:"This quickstart will show you how to deploy the Elemental plugin into an existing Rancher Manager instance."}),"\n",(0,i.jsx)(n.p,{children:"Once installed, you'll be able to provision a new Elemental cluster based on RKE2 or K3s."}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"enable-the-rancher-manager-extensions-support",children:"Enable the Rancher Manager Extensions Support"}),"\n",(0,i.jsx)(n.p,{children:"In order to enable the Rancher Manager Extensions Support, you'll need to follow the steps below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open a web browser, connect and login to your Rancher Manager instance"}),"\n",(0,i.jsxs)(n.li,{children:["Click on the top left menu ",(0,i.jsx)(n.code,{children:"a"})," and click on ",(0,i.jsx)(n.code,{children:"Extensions"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rancher Manager menu",src:t(7652).Z+"",width:"279",height:"545"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Enable"})," button to install the ",(0,i.jsx)(n.code,{children:"Extension Operator"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable Rancher Manager Extensions Operator",src:t(6814).Z+"",width:"1107",height:"420"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A popup will appear, click on the ",(0,i.jsx)(n.code,{children:"OK"})," button to continue and install the Rancher Manager Extensions repository"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add Rancher Manager Extensions repository",src:t(576).Z+"",width:"1212",height:"586"})}),"\n",(0,i.jsx)(n.h2,{id:"install-the-elemental-plugin",children:"Install the elemental plugin"}),"\n",(0,i.jsxs)(n.p,{children:["After the Rancher Manager Extensions Support is enabled, you can install the ",(0,i.jsx)(n.code,{children:"elemental"})," plugin as follow:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Under the ",(0,i.jsx)(n.code,{children:"Available"})," tab you will see ",(0,i.jsx)(n.code,{children:"elemental"})," plugin available"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rancher Manager Available plugins",src:t(5426).Z+"",width:"620",height:"296"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"Available"})," tab shows no entries, refresh the page. The ",(0,i.jsx)(n.code,{children:"elemental"})," plugin will then appear."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Install"})," button, a popup will appear and click on ",(0,i.jsx)(n.code,{children:"Install"})," again to continue."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Elemental plugin install",src:t(1709).Z+"",width:"1215",height:"598"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On the ",(0,i.jsx)(n.code,{children:"Installed"})," tab, the ",(0,i.jsx)(n.code,{children:"elemental"})," plugin is now listed."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"elemental"})," plugin is listed and the status stays at ",(0,i.jsx)(n.code,{children:"Installing..."}),", refresh the page. The ",(0,i.jsx)(n.code,{children:"elemental"})," plugin will display correctly."]})}),"\n",(0,i.jsxs)(n.p,{children:["Once the ",(0,i.jsx)(n.code,{children:"elemental"})," plugin installed, you can see the ",(0,i.jsx)(n.code,{children:"OS Manamagent"})," option in the Rancher Manager menu."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rancher Manager OS Management menu",src:t(8054).Z+"",width:"278",height:"579"})}),"\n",(0,i.jsx)(n.h2,{id:"add-a-machine-registration-endpoint",children:"Add a Machine Registration Endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["In the OS Management dashboard, click the ",(0,i.jsx)(n.code,{children:"Create Registration Endpoint"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OS Management registration endpoints",src:t(867).Z+"",width:"766",height:"307"})}),"\n",(0,i.jsx)(n.p,{children:"Now here either you can enter each detail in its respective places or you can edit this as YAML and create the endpoint in one go. Here we'll edit every fields."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create a Registration Endpoint with UI",src:t(1312).Z+"",width:"953",height:"1524"})}),"\n",(0,i.jsxs)(n.admonition,{title:"main options",type:"info",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name: elemental-cluster1"}),": change this as per your need"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"device: /dev/sda"}),': make sure your target device is "sda". Otherwise find out how the disk device is named and change it here. For example, in Raspberry Pi it could be "mmblk"']}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"emulate-tpm: true"}),": use this only if your target device doesn't have a TPM device and you have a way of emulating TPM like in VMware or KVM"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"emulated-tpm-seed: 1"}),": increase this by 1 for every new machine. If this value is not set, each machine will receive the same TPM hash and it won't show up under the machine inventory."]})]}),"\n",(0,i.jsx)(n.admonition,{title:"attention",type:"danger",children:(0,i.jsxs)(n.p,{children:["Emulated TPM is only for non-production usage like for testing as it beats the purpose of security. So in production usage use the code above without the ",(0,i.jsx)(n.code,{children:"emulate-tpm"})," and ",(0,i.jsx)(n.code,{children:"emulate-tpm-seed"})]})}),"\n",(0,i.jsx)(n.p,{children:"Once you create the machine registration end point it should show up as active."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine registered in Registration Endpoints",src:t(9538).Z+"",width:"572",height:"376"})}),"\n",(0,i.jsx)(n.h2,{id:"preparing-the-installation-seed-image",children:"Preparing the installation (seed) image"}),"\n",(0,i.jsx)(n.p,{children:"Now this is the last step, you need to prepare an Elemental Teal seed image that includes the initial registration config, so\nit can be auto registered, installed and fully deployed as part of your cluster. The contents of the file are nothing\nmore than the registration URL that the node needs to register and the proper server certificate, so it can connect securely."}),"\n",(0,i.jsx)(n.p,{children:"This seed image can then be used to provision an infinite number of machines."}),"\n",(0,i.jsxs)(n.p,{children:["The seed image is created as a Kubernetes resource above and can be built using the ",(0,i.jsx)(n.code,{children:"Build ISO"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Build ISO in Registration Endpoints",src:t(2233).Z+"",width:"1247",height:"435"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the build is done, ISO can be downloaded using the ",(0,i.jsx)(n.code,{children:"Download ISO"})," button:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Download ISO in Registration Endpoints",src:t(3783).Z+"",width:"1247",height:"435"})}),"\n",(0,i.jsx)(n.p,{children:"You can now boot your nodes with this image and they will:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Register with the registrationURL given and create a per-machine ",(0,i.jsx)(n.code,{children:"MachineInventory"})]}),"\n",(0,i.jsx)(n.li,{children:"Install Elemental Teal to the given device"}),"\n",(0,i.jsx)(n.li,{children:"Reboot"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"machine-inventory",children:"Machine Inventory"}),"\n",(0,i.jsxs)(n.p,{children:["When nodes are booting up for the first time, they connect to Rancher Manager and a ",(0,i.jsx)(n.a,{href:"architecture#machineinventory",children:(0,i.jsx)(n.code,{children:"Machine Inventory"})})," is created for each node."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Inventory menu",src:t(7050).Z+"",width:"1673",height:"574"})}),"\n",(0,i.jsxs)(n.p,{children:["Custom columns are based on ",(0,i.jsx)(n.code,{children:"Machine Inventory Labels"})," which you can add when you create your ",(0,i.jsx)(n.code,{children:"Machine Registration Endpoint"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Registration Endpoint Hardware Labels",src:t(493).Z+"",width:"1665",height:"1368"})}),"\n",(0,i.jsxs)(n.p,{children:["On the following screenshot, ",(0,i.jsx)(n.a,{href:"hardwarelabels#hardware-labels",children:(0,i.jsx)(n.code,{children:"Hardware Labels"})})," are used as custom columns:"]}),"\n",(0,i.jsx)(n.p,{children:"You can also add custom columns by clicking on the three dots menu."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Inventory custom columns",src:t(761).Z+"",width:"1672",height:"734"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, you can also filter your ",(0,i.jsx)(n.code,{children:"Machine Inventory"})," using those labels."]}),"\n",(0,i.jsxs)(n.p,{children:["For instance if you only want to see your AMD machines, you can filter on ",(0,i.jsx)(n.code,{children:"CPUModel"})," like below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Machine Inventory filtering",src:t(9017).Z+"",width:"1672",height:"734"})}),"\n",(0,i.jsx)(n.h2,{id:"create-your-first-elemental-cluster",children:"Create your first Elemental Cluster"}),"\n",(0,i.jsxs)(n.p,{children:["Now let's use those ",(0,i.jsx)(n.code,{children:"Machine Inventory"})," to create a cluster by clicking on ",(0,i.jsx)(n.code,{children:"Create Elemental Cluster"})," :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create Elemental Cluster button",src:t(2919).Z+"",width:"1663",height:"854"})}),"\n",(0,i.jsx)(n.p,{children:"For your Elemental cluster, you can either choose K3s or RKE2 for Kubernetes."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Elemental Cluster Creation Screen",src:t(571).Z+"",width:"1677",height:"1374"})}),"\n",(0,i.jsxs)(n.p,{children:["Most of the options are coming from Rancher, that's why we will not detail all the possibilities.\nFeel free to check the ",(0,i.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/rancher-server-configuration",children:"Rancher Manager documentation"})," if you want to know more."]}),"\n",(0,i.jsxs)(n.p,{children:["However, it is important to highlight the ",(0,i.jsx)(n.code,{children:"Inventory of Machines Selector Template"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["It lets you choose which ",(0,i.jsx)(n.code,{children:"Machine Inventory"})," you want to use to create your Elemental cluster using the previously defined ",(0,i.jsx)(n.code,{children:"Machine Inventory Labels"})," :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Use Machine Inventory Selector Template",src:t(5348).Z+"",width:"1359",height:"547"})}),"\n",(0,i.jsxs)(n.p,{children:["As our three Machine Inventories contain the label ",(0,i.jsx)(n.code,{children:"CPUVendor"})," with the key ",(0,i.jsx)(n.code,{children:"AuthenticAMD"}),", the three machines will be used to create the Elemental cluster."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},2919:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-create-cluster-button-e1d0392a7278e6de17a5fbe26b77b5eb.png"},5348:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-create-cluster-machine-selector-template-a114d9eb08cb6423423a79c94900afd1.png"},571:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-create-cluster-standard-screen--fdccedc04c52226c9b621f580de28f85.png"},1709:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-elemental-plugin-install-ecdc4ce7ce04426c02ff914ecf13d906.png"},8054:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-elemental-plugin-menu-0e0659f62678b700aa7d7341284fd9a5.png"},6814:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-extension-enable-86662009426b5220cab5c9f72a71ea4b.png"},576:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-extension-repository-84e4ca717832fe04524f71741750f69c.png"},5426:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-extensions-available-31f7812c57abc824b1337bd8ae3d6247.png"},761:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-machine-inventory-custom-columns-120ed1afa8effc83540bb72631623aa7.png"},9017:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-machine-inventory-filtering-b7918cd6394c1d0aa8158adbc7d6039b.png"},7050:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-machine-inventory-menu-e868fad782ec36416690986b9a0ee4b9.png"},7652:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-menu-62e787746510862a9bc32b4ac1d65213.png"},2233:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-build-ISO-e3e6386d33bb61f4c45bfd261000cdc5.png"},9538:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-complete-7c3686ae051927fdb9cec1ee38a8eb58.png"},1312:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-create-details-5954e7fe1555060b20987c13a0978cd8.png"},867:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-create-f687c90235eea798645d699b6bbd8d23.png"},3783:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-download-ISO-d9eccf8bb5bdc387fecfa757df572815.png"},493:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/quickstart-ui-registration-endpoint-hardware-labels-d96f34687fee37f7f1438e21508cacce.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);