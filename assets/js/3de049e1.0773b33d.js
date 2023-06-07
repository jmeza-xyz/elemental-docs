"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),h=r,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6505:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(7462),r=(n(7294),n(3905));const i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},o=i("Tabs"),l=i("TabItem"),s={toc:[{value:"Install Elemental Operator",id:"install-elemental-operator",level:2}]},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install-elemental-operator"},"Install Elemental Operator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"elemental-operator")," is the management endpoint, running the management\ncluster and taking care of creating inventories, registrations for machines and much more."),(0,r.kt)("p",null,"We will use the Helm package manager to install the elemental-operator chart into our cluster."),(0,r.kt)("admonition",{title:"Helm v3.8.0+ required",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Elemental Operator chart is distributed via an OCI registry: Helm correctly supports OCI based registries starting from the v3.8.0 release.")),(0,r.kt)(o,{mdxType:"Tabs"},(0,r.kt)(l,{value:"stableOperator",label:"Stable version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart\n"))),(0,r.kt)(l,{value:"develOperator",label:"Development version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{title:"Reminder",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The development version is 'best effort' supported. We welcome feedback via Slack or Github issues. But it might be a bit rough as we move the stack forward.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"helm upgrade --create-namespace -n cattle-elemental-system --install --set image.imagePullPolicy=Always elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-chart\n")))),(0,r.kt)("p",null,"There is a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-operator/blob/main/charts/operator/values.yaml"},"values.yaml")),(0,r.kt)("p",null,"Now after a few seconds you should see the operator pod appear on the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-elemental-system")," namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl get pods -n cattle-elemental-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nelemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s\n")))}p.isMDXComponent=!0},5220:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={toc:[{value:"Prerequisites",id:"prerequisites",level:2}]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Rancher server (v2.7.0) configured (server-url set)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To configure the Rancher ",(0,r.kt)("inlineCode",{parentName:"li"},"server-url")," please check the ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/#first-log-in"},"Rancher docs")))),(0,r.kt)("li",{parentName:"ul"},"A machine (bare metal or virtualized) with TPM 2.0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hint 1: Libvirt allows setting virtual TPMs for virtual machines ",(0,r.kt)("a",{parentName:"li",href:"tpm/#add-tpm-module-to-virtual-machine"},"example here")),(0,r.kt)("li",{parentName:"ul"},"Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module ",(0,r.kt)("a",{parentName:"li",href:"tpm/#add-tpm-emulation-to-bare-metal-machine"},"example here")),(0,r.kt)("li",{parentName:"ul"},"Hint 3: Make sure you're using UEFI (not BIOS) on x86-64, or the ISO won't boot"))),(0,r.kt)("li",{parentName:"ul"},"Helm Package Manager (",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"https://helm.sh/"),")"),(0,r.kt)("li",{parentName:"ul"},"For ARM (aarch64) - One SD-card (32 GB or more, must be ",(0,r.kt)("strong",{parentName:"li"},"fast")," - 40MB/s write speed is acceptable) and a USB-stick for installation")))}l.isMDXComponent=!0},8169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>T,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),i=n(6854),o=n(4713),l=n(8260),s=n(3367),m=n(5220),p=n(6505),c=n(5974);const u={sidebar_label:"Elemental the command line way",title:""},h="Elemental the command line way",d={unversionedId:"quickstart-cli",id:"version-Stable/quickstart-cli",title:"",description:"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher",source:"@site/versioned_docs/version-Stable/quickstart-cli.md",sourceDirName:".",slug:"/quickstart-cli",permalink:"/quickstart-cli",draft:!1,tags:[],version:"Stable",frontMatter:{sidebar_label:"Elemental the command line way",title:""},sidebar:"docs",previous:{title:"Elemental the visual way",permalink:"/quickstart-ui"},next:{title:"Architecture",permalink:"/architecture"}},k={},g=[{value:"Prepare your kubernetes resources",id:"prepare-your-kubernetes-resources",level:2},{value:"Preparing the installation (seed) image",id:"preparing-the-installation-seed-image",level:2},{value:"Retrieving the prebuilt seed image",id:"retrieving-the-prebuilt-seed-image",level:4},{value:"Verifying the download",id:"verifying-the-download",level:5},{value:"Injecting the registration information",id:"injecting-the-registration-information",level:4},{value:"Writing the seed image to a USB stick",id:"writing-the-seed-image-to-a-usb-stick",level:4},{value:"Booting the Raspberry Pi",id:"booting-the-raspberry-pi",level:4},{value:"Selecting the right machines to join a cluster",id:"selecting-the-right-machines-to-join-a-cluster",level:3},{value:"How can I choose the kubernetes version and deployer for the cluster?",id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster",level:2},{value:"How can I follow what is going on behind the scenes?",id:"how-can-i-follow-what-is-going-on-behind-the-scenes",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},y=f("Tabs"),b=f("TabItem"),w=f("CodeBlock"),v={toc:g},N="wrapper";function T(e){let{components:t,...n}=e;return(0,r.kt)(N,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elemental-the-command-line-way"},"Elemental the command line way"),(0,r.kt)("p",null,"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher\nwith the only help of an Elemental Teal iso"),(0,r.kt)(m.ZP,{mdxType:"Prereqs"}),(0,r.kt)(p.ZP,{mdxType:"Operator"}),(0,r.kt)("h2",{id:"prepare-your-kubernetes-resources"},"Prepare your kubernetes resources"),(0,r.kt)("p",null,"Node deployment starts with a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration"),", identifying a set of machines sharing the same configuration (disk drives, network, etc.)"),(0,r.kt)("p",null,"Then it continues with having a Cluster resource that uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," to know which machines are for that cluster."),(0,r.kt)("p",null,"This selector is a simple matcher based on labels set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),", so if your selector is matching the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-id")," key with a value ",(0,r.kt)("inlineCode",{parentName:"p"},"myId"),"\nand your ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," has that same key with that value, it will match and be bootstrapped as part of the cluster."),(0,r.kt)(y,{mdxType:"Tabs"},(0,r.kt)(b,{value:"manualYaml",label:"Manually creating the resource yamls",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"You will need to create the following files."),(0,r.kt)(w,{language:"yaml",title:"selector.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},s.Z),(0,r.kt)("p",null,"As you can see this is a very simple selector that checks the key ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," for the value ",(0,r.kt)("inlineCode",{parentName:"p"},"europe")),(0,r.kt)(w,{language:"yaml",title:"cluster.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},i.Z),(0,r.kt)("p",null,"As you can see we are setting that our ",(0,r.kt)("inlineCode",{parentName:"p"},"machineConfigRef")," is of Kind ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"my-machine-selector"),", which matches the selector we created."),(0,r.kt)("p",null,"You can get more informations about some cluster options like ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineglobalconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"machineGlobalConfig"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineselectorconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"machineSelectorConfig"))," directly in Rancher Manager documentation."),(0,r.kt)(y,{mdxType:"Tabs"},(0,r.kt)(b,{value:"normalRegistration",label:"Registration",default:!0,mdxType:"TabItem"},(0,r.kt)(w,{language:"yaml",title:"registration.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},o.Z)),(0,r.kt)(b,{value:"rpiRegistration",label:"Registration for Raspberry Pi",default:!0,mdxType:"TabItem"},(0,r.kt)(w,{language:"yaml",title:"rpi-registration.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},l.Z),(0,r.kt)("p",null,"For deployment on Raspberry Pi, you need to enable emulated TPM\n(except you have ",(0,r.kt)("a",{parentName:"p",href:"https://thepihut.com/products/letstrust-tpm-for-raspberry-pi"},"a hardware TPM for Raspberry Pi"),").\nYou also need to disable writing to the EFI store (since Raspberry Pi doesn't have one) via ",(0,r.kt)("inlineCode",{parentName:"p"},"disable-boot-entry: true"),"."))),(0,r.kt)("p",null,"This creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineRegistration")," which will provide a unique URL which we will use with ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-register")," to register\nthe node during installation, so the operator can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," which will be using to bootstrap the node.\nSee that we set the label that match our selector here already, although it can always be added later to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory"),"."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to modify the registration.yaml above to set the proper install device to point to a valid device based on your node configuration (i.e. /dev/sda, /dev/vda, /dev/nvme0, etc...)."),(0,r.kt)("p",{parentName:"admonition"},"The SD-card on a Raspberry Pi is usually ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/mmcblk0"),".")),(0,r.kt)(y,{mdxType:"Tabs"},(0,r.kt)(b,{value:"seedImagex86",label:"Seed Image (x86_64)",default:!0,mdxType:"TabItem"},(0,r.kt)(w,{language:"yaml",title:"seedimage.yaml",showLineNumbers:!0,mdxType:"CodeBlock"},c.Z),(0,r.kt)("p",null,"Now that we have all the configuration to create the proper resources in Kubernetes just apply them"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f selector.yaml \nkubectl apply -f cluster.yaml \nkubectl apply -f registration.yaml\nkubectl apply -f seedimage.yaml\n"))),(0,r.kt)(b,{value:"seedImagerpi",label:"Seed Image for Raspberry Pi",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The seed image is not yet used for Raspberry Pi and will have to be generated manually in the ",(0,r.kt)("a",{parentName:"p",href:"/quickstart-cli#preparing-the-installation-seed-image"},"next section")),(0,r.kt)("p",null,"Now that we have all the configuration to create the proper resources in Kubernetes just apply them"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f selector.yaml \nkubectl apply -f cluster.yaml \nkubectl apply -f registration.yaml\n"))))),(0,r.kt)(b,{value:"repofiles",label:"Using quickstart files from Elemental docs repo directly",mdxType:"TabItem"},(0,r.kt)("p",null,"You can directly apply the quickstart example resource files from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-docs"},"Elemental docs repository")),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This assumes that your Node will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sda")," disk available as that is the default device selected in those files.\nIf your node doesnt have that device you will have to manually create the registration.yaml file or download the one from the repo and modify before applying")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/selector.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/cluster.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/registration.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/seedimage.yaml (not for aarch64 yet)\n")))),(0,r.kt)("h2",{id:"preparing-the-installation-seed-image"},"Preparing the installation (seed) image"),(0,r.kt)("admonition",{title:"note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The initial registration config is the file generated when you create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Machine Registration"),"."),(0,r.kt)("p",{parentName:"admonition"},"You can download it with:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'wget --no-check-certificate `kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"` -O initial-registration.yaml\n'))),(0,r.kt)("p",null,"Now this is the last step, you need to prepare an Elemental Teal seed image that includes automatically (not for aarch64 yet) the initial registration config, so\nit can be auto registered, installed and fully deployed as part of your cluster. The contents of the file are nothing\nmore than the registration URL that the node needs to register and the proper server certificate, so it can connect securely."),(0,r.kt)("p",null,"This seed image can then be used to provision an infinite number of machines."),(0,r.kt)(y,{mdxType:"Tabs"},(0,r.kt)(b,{value:"download",label:"Downloading the quickstart ISO",mdxType:"TabItem"},(0,r.kt)("p",null,"The seed image is created as a Kubernetes resource above and can be downloaded as an ISO using the following script which first waits for the ISO to be built:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'kubectl wait --for=condition=ready pod -n fleet-default my-img\nwget --no-check-certificate `kubectl get seedimage -n fleet-default my-img -o jsonpath="{.status.downloadURL}"` -O elemental-teal.x86_64.iso\n')),(0,r.kt)("p",null,"This will generate an ISO on the current directory with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-teal-x86_64.iso"),".")),(0,r.kt)(b,{value:"manual",label:"Preparing the seed image (aarch64) manually",mdxType:"TabItem"},(0,r.kt)("p",null,"Elemental's support for Raspberry Pi is primarily for demonstration purposes at this point. Therefore the installation\nprocess is modelled similar to x86-64. You boot from a seed image (USB stick in this case) and install to a storage medium (SD-card for Raspberry Pi)."),(0,r.kt)("h4",{id:"retrieving-the-prebuilt-seed-image"},"Retrieving the prebuilt seed image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable:/Teal53/images/rpi.raw\n")),(0,r.kt)("h5",{id:"verifying-the-download"},"Verifying the download"),(0,r.kt)("p",null,"In order to verify the integrity of the downloaded artifacts, you\nshould do a checksum verification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable:/Teal53/images/rpi.raw.sha256\nsha256sum -c rpi.raw.sha256\n")),(0,r.kt)("p",null,"This should print ",(0,r.kt)("inlineCode",{parentName:"p"},"rpi.raw: OK")," as output."),(0,r.kt)("h4",{id:"injecting-the-registration-information"},"Injecting the registration information"),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml")," isn't scripted yet. This is still a manual process:"),(0,r.kt)("p",null,"The written USB stick will have two partitions. ",(0,r.kt)("inlineCode",{parentName:"p"},"RPI_BOOT")," contains the boot loader files and ",(0,r.kt)("inlineCode",{parentName:"p"},"COS_LIVE")," the Elemental files.\nMount the ",(0,r.kt)("inlineCode",{parentName:"p"},"COS_LIVE")," partition and write ",(0,r.kt)("inlineCode",{parentName:"p"},"initial-registration.yaml")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"livecd-cloud-config.yaml")," to this partition."),(0,r.kt)("p",null,"If you've mounted the USB stick with a file manager, this command should work to copy the registration information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"sudo cp initial-registration.yaml /run/media/$USER/COS_LIVE/livecd-cloud-config.yaml\n")),(0,r.kt)("p",null,"If you prefer using some CLI tools:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"IMAGE=rpi.raw\nDEST=$(mktemp -d)\n\nSECTORSIZE=$(sfdisk -J ${IMAGE} | jq '.partitiontable.sectorsize')\nDATAPARTITIONSTART=$(sfdisk -J ${IMAGE} | jq '.partitiontable.partitions[1].start')\nsudo mount -o rw,loop,offset=$((${SECTORSIZE}*${DATAPARTITIONSTART})) ${IMAGE} ${DEST}\nsudo cp initial-registration.yaml ${DEST}/livecd-cloud-config.yaml\nsudo umount ${DEST}\nrmdir ${DEST}\n")),(0,r.kt)("h4",{id:"writing-the-seed-image-to-a-usb-stick"},"Writing the seed image to a USB stick"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".raw")," image needs to be written to a USB stick to boot from. This can be done with ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," on the Linux command line if you're comfortable with this command.\n",(0,r.kt)("a",{parentName:"p",href:"https://www.opensuse.org"},"openSUSE")," has nice instructions on how to write an image to a storage medium for ",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Live_USB_stick"},"Linux"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_Windows"},"Windows"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_macOS"},"OS X"),"."),(0,r.kt)("h4",{id:"booting-the-raspberry-pi"},"Booting the Raspberry Pi"),(0,r.kt)("p",null,"Now unmount the USB stick and plug it into your Raspberry Pi."),(0,r.kt)("p",null,"Plug a large (32 GB or more) and ",(0,r.kt)("strong",{parentName:"p"},"fast")," (!!) micro SD-card into the respective slot."),(0,r.kt)("p",null,"Connect the system to ethernet."),(0,r.kt)("p",null,"A powercycle will reboot the Pi. Everything else is identical to x86-64."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the micro SD-card is unpartitioned. Otherwise the Pi bootloader will try to boot from it and fail.")))),(0,r.kt)("p",null,"You can now boot your nodes with this image and they will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register with the registrationURL given and create a per-machine ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineInventory")),(0,r.kt)("li",{parentName:"ul"},"Install Elemental Teal to the given device"),(0,r.kt)("li",{parentName:"ul"},"Reboot")),(0,r.kt)("h3",{id:"selecting-the-right-machines-to-join-a-cluster"},"Selecting the right machines to join a cluster"),(0,r.kt)("p",null,"In order for the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventorySelectorTemplate")," to select the nodes, a location label to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MachineInventory")," is now needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'kubectl -n fleet-default label machineinventory $(kubectl get machineinventory -n fleet-default --no-headers -o custom-columns=":metadata.name") location=europe\n')),(0,r.kt)("p",null,"After the label has been applied the machines will auto-deploy the cluster via the chosen provider (k3s/rke)."),(0,r.kt)("p",null,"After a few minutes your new cluster will be fully provisioned!!"),(0,r.kt)("h2",{id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster"},"How can I choose the kubernetes version and deployer for the cluster?"),(0,r.kt)("p",null,"In your cluster.yaml file there is a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetesVersion"),". That sets the version and deployer that will be used for the cluster,\nfor example for rke ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8")," while for rke2 would be ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8+rke2r1")," and for k3s ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.24.8+k3s1")),(0,r.kt)("p",null,"To see all compatible versions check the ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"Rancher Support Matrix")," PDF for rke/rke2/k3s versions and their components."),(0,r.kt)("p",null,"You can also check our ",(0,r.kt)("a",{parentName:"p",href:"/kubernetesversions"},"Version doc")," to know how to obtain those versions."),(0,r.kt)("p",null,"Check our ",(0,r.kt)("a",{parentName:"p",href:"/cluster-reference"},"Cluster Spec")," page for more info about the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,r.kt)("h2",{id:"how-can-i-follow-what-is-going-on-behind-the-scenes"},"How can I follow what is going on behind the scenes?"),(0,r.kt)("p",null,"You should be able to follow along what the machine is doing via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During ISO boot:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ssh into the machine (user/pass: root/ros):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -t elemental")," will show you the output of the elemental-register and the elemental install"))))),(0,r.kt)("li",{parentName:"ul"},"Once the system is installed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On the Rancher UI -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Cluster Management")," you should see your new cluster and be able to see the ",(0,r.kt)("inlineCode",{parentName:"li"},"Provisioning Log")," in the cluster details"),(0,r.kt)("li",{parentName:"ul"},"ssh into the machine (user/pass: Whatever your configured on the registration.yaml under ",(0,r.kt)("inlineCode",{parentName:"li"},"Spec.config.cloud-config.users"),"):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u elemental-system-agent")," will show the output of the initial elemental config and install of ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-system-agent")),(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u rancher-system-agent")," will show the output of the boostrap of cluster components like k3s"),(0,r.kt)("li",{parentName:"ul"},"running ",(0,r.kt)("inlineCode",{parentName:"li"},"journalctl -f -u k3s")," will show the logs of the k3s deployment")))))))}T.isMDXComponent=!0},6854:(e,t,n)=>{n.d(t,{Z:()=>a});const a="kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: my-cluster\n  namespace: fleet-default\nspec:\n  rkeConfig:\n    machineGlobalConfig:\n      etcd-expose-metrics: false\n      profile: null\n    machinePools:\n      - controlPlaneRole: true\n        etcdRole: true\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: my-machine-selector\n        name: pool1\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        workerRole: true\n    machineSelectorConfig:\n      - config:\n          protect-kernel-defaults: false\n    registries: {}\n  kubernetesVersion: v1.24.8+k3s1\n"},4713:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'},8260:(e,t,n)=>{n.d(t,{Z:()=>a});const a='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/mmcblk0\n        debug: true\n        disable-boot-entry: true\n      registration:\n        emulate-tpm: true\n  machineInventoryLabels:\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'},5974:(e,t,n)=>{n.d(t,{Z:()=>a});const a="apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: my-img\n  namespace: fleet-default\nspec:\n  baseImage: https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable:/Teal53/media/iso/elemental-teal.x86_64.iso\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: my-nodes\n    namespace: fleet-default\n"},3367:(e,t,n)=>{n.d(t,{Z:()=>a});const a="apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: my-machine-selector\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchExpressions:\n          - key: location\n            operator: In\n            values: [ 'europe' ]\n"}}]);