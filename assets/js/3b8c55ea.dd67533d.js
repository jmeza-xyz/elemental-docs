"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3217],{6995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(5893),l=n(1151);const s={sidebar_label:"Installation",title:""},r="Installation",a={id:"installation",title:"",description:"Overview",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/next/installation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Installation",title:""},sidebar:"docs",previous:{title:"Architecture",permalink:"/next/architecture"},next:{title:"Upgrade",permalink:"/next/upgrade"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Elemental Operator Installation",id:"elemental-operator-installation",level:2},{value:"Prepare Kubernetes Resources",id:"prepare-kubernetes-resources",level:2},{value:"Prepare Installation Media",id:"prepare-installation-media",level:2},{value:"Start Installation Process",id:"start-installation-process",level:2},{value:"Deployed Elemental Teal Partition Table",id:"deployed-elemental-teal-partition-table",level:2},{value:"Elemental Teal Immutable Root",id:"elemental-teal-immutable-root",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{Head:n,Vars:s}=t;return n||x("Head",!0),s||x("Vars",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/installation"})}),"\n",(0,i.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Elemental stack provides OS management using OCI containers and Kubernetes. The Elemental\nstack installation encompasses the installation of the ",(0,i.jsx)(s,{name:"elemental_operator_name"})," into the\nmanagement cluster and the creation and use of Elemental Teal installation media to\nprovide the OS into the Cluster Nodes. See ",(0,i.jsx)(t.a,{href:"/next/architecture",children:"Architecture"})," section to read about the\ninteraction of the components."]}),"\n",(0,i.jsxs)(t.p,{children:["The installation configuration is mostly applied and set as part of the registration process.\nThe registration process is done by the ",(0,i.jsx)(t.code,{children:"elemental-register"})," (the ",(0,i.jsx)(s,{name:"elemental_operator_name"})," client part)\nwho is the responsible to register nodes in a Rancher management cluster and fetch the installation configuration."]}),"\n",(0,i.jsxs)(t.p,{children:["Please refer to the ",(0,i.jsx)(t.a,{href:"/next/quickstart-cli",children:"Quick Start"})," guide for simple step by step deployment instructions."]}),"\n",(0,i.jsx)(t.h2,{id:"elemental-operator-installation",children:"Elemental Operator Installation"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(s,{name:"elemental_operator_name"})," is responsible for managing the Elemental versions and\nmaintaining a machine inventory to assist with edge or bare metal installations. ",(0,i.jsx)(s,{name:"elemental_operator_name"}),"\nrequires a cluster including the Rancher Manager and it can be installed with a helm chart."]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(s,{name:"elemental_operator_name"})," ",(0,i.jsx)(t.a,{href:"/next/elementaloperatorchart-reference",children:"helm chart reference"})," for install,\nuninstall, upgrade and configuration details."]}),"\n",(0,i.jsx)(t.h2,{id:"prepare-kubernetes-resources",children:"Prepare Kubernetes Resources"}),"\n",(0,i.jsxs)(t.p,{children:["Once the ",(0,i.jsx)(s,{name:"elemental_operator_name"})," is up and running within the management cluster a couple of kubernetes\nresources are required in order to prepare an Elemental based cluster deployment."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/next/machineinventoryselectortemplate-reference",children:"MachineInventorySelectorTemplate"}),":\nThis resource identifies the criteria to match registered boxes (listed as part of the MachineInventory)\nagainst available Rancher 2.6 Clusters. As soon as there is a match the selected kubernetes cluster takes\nownership of the registered box."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/next/machineregistration-reference",children:"MachineRegistration"}),":\nThis resource defines OS deployment details for any machine attempting to register. The machine\nregistration is the entrance for Elemental nodes as it handles the authentication (based on TPM),\nthe Elemental Teal deployment and the node inclusion into to the MachineInventory so it can be added\nto a cluster when there is a match based on a MachineInventorySelectorTemplate. The MachineRegistration\nobject includes the machine registration URL that nodes use to register against it."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["A Rancher Cluster resource is also required to deploy Elemental, it can be manually created as exemplified in\nthe ",(0,i.jsx)(t.a,{href:"/next/quickstart-cli",children:"Quick Start"})," guide or created from the Rancher 2.6 UI."]}),"\n",(0,i.jsx)(t.h2,{id:"prepare-installation-media",children:"Prepare Installation Media"}),"\n",(0,i.jsxs)(t.p,{children:["The installation media is the media that will be used to kick start an Elemental Teal deployment. Currently\nthe supported media is a live ISO. The live ISO must include the registration configuration yaml hence it must\ncrafted once the MachineRegistration is created. The installation\nmedia is created by using the ",(0,i.jsx)(t.a,{href:"https://github.com/rancher/elemental/blob/main/.github/elemental-iso-add-registration",children:(0,i.jsx)(t.code,{children:"elemental-iso-add-registration"})}),"\nhelper script (see ",(0,i.jsx)(t.a,{href:"quickstart-cli#preparing-the-installation-seed-image",children:"quick start"})," guide)\nor by using the ",(0,i.jsx)(t.code,{children:"elemental build-iso"})," command line utility included as part of the ",(0,i.jsx)(s,{name:"elemental_toolkit_name",link:"elemental_toolkit_url/docs/creating-derivatives/build_iso"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The live ISO supports PXE booting for direct integration with ",(0,i.jsx)(t.a,{href:"https://documentation.suse.com/suma/4.3/en/suse-manager/client-configuration/autoinst-distributions.html#based-on-iso-image",children:"SUSE Manager"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Within MachineRegistration only a subset of OS installation parameters can be configured, all available parameters are listed\nat ",(0,i.jsx)(t.a,{href:"/next/machineregistration-reference",children:"MachineRegistration"})," reference page."]}),"\n",(0,i.jsxs)(t.p,{children:["In order to configure the installation beyond the common options provided within the\n",(0,i.jsx)(t.a,{href:"/next/machineregistration-reference#configelementalinstall",children:(0,i.jsx)(t.code,{children:"elemental.install"})})," section a ",(0,i.jsx)(t.code,{children:"config.yaml"}),"\nconfiguration file can be included into the ISO (see ",(0,i.jsx)(t.a,{href:"/next/customizing#custom-elemental-client-configuration-file",children:"Custom Images"}),").\nNote any configuration applied as part of ",(0,i.jsx)(t.code,{children:"elemental.install"})," section of the MachineRegistration will be\napplied on top of the settings included in any custom ",(0,i.jsx)(t.code,{children:"config.yaml"})," file."]}),"\n",(0,i.jsxs)(t.p,{children:["Most likely the cloud-init configuration is enough to configure and set the deployed node at boot, however\nif for some reason firstboot actions or scripts are required it is possible to also include\nRancher System Agent plans into the installation media. Refer to the ",(0,i.jsx)(t.a,{href:"/next/elemental-plans",children:"Elemental Plans"})," section for details and\nsome example plans. The plans could be included into the squashed rootfs at ",(0,i.jsx)(t.code,{children:"/var/lib/elemental/agent/plans"}),"\nfolder and they would be seen by the system agent at firstboot."]}),"\n",(0,i.jsx)(t.h2,{id:"start-installation-process",children:"Start Installation Process"}),"\n",(0,i.jsxs)(t.p,{children:["The installation starts by booting the installation media on a node. Once the installation media has booted it will\nattempt to contact the management cluster and register to it by calling ",(0,i.jsx)(t.code,{children:"elemental-register"})," command.\nAs the registration yaml configuration is already included into the ISO ",(0,i.jsx)(t.code,{children:"elemental-register"})," knows the registration URL and\nany other required data for the registration."]}),"\n",(0,i.jsx)(t.p,{children:"On a succeeded registration the installation media will start the Elemental Teal installation into the host based\non the configuration already included in the media and the MachineRegistration parameters. As soon as the installation\nis done the node is ready to reboot. The deployed Elemental Teal includes a system agent plan to\nkick start a regular rancher provisioning process to install the selected kubernetes version, once booted, after\nsome minutes the node installation is finalized and the node is included into the cluster and visible through\nthe Rancher UI."}),"\n",(0,i.jsx)(t.h2,{id:"deployed-elemental-teal-partition-table",children:"Deployed Elemental Teal Partition Table"}),"\n",(0,i.jsx)(t.p,{children:"Once Elemental Teal is installed the OS partition table, according to default values, will look like"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Label"}),(0,i.jsx)(t.th,{children:"Default Size"}),(0,i.jsx)(t.th,{children:"Contains"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"COS_GRUB"}),(0,i.jsx)(t.td,{children:"64 MiB"}),(0,i.jsx)(t.td,{children:"UEFI Boot partition"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"COS_STATE"}),(0,i.jsx)(t.td,{children:"15 GiB"}),(0,i.jsx)(t.td,{children:"A/B bootable file system images constructed from OCI images"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"COS_OEM"}),(0,i.jsx)(t.td,{children:"64 MiB"}),(0,i.jsx)(t.td,{children:"OEM cloud-config files and other data"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"COS_RECOVERY"}),(0,i.jsx)(t.td,{children:"8 GiB"}),(0,i.jsx)(t.td,{children:"Recovery file system image if COS_STATE is destroyed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"COS_PERSISTENT"}),(0,i.jsx)(t.td,{children:"Remaining space"}),(0,i.jsx)(t.td,{children:"All contents of the persistent folders"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Note this is the basic structure of any OS built by the ",(0,i.jsx)(s,{name:"elemental_toolkit_name",link:"elemental_toolkit_url"})]}),"\n",(0,i.jsx)(t.h2,{id:"elemental-teal-immutable-root",children:"Elemental Teal Immutable Root"}),"\n",(0,i.jsx)(t.p,{children:"One of the characteristics of Elemental OSes is the setup of an immutable root filesystem where some ephemeral or\npersistent locations are applied on top of it. Elemental Teal default folders structure is listed in the\nmatrix below."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Path"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Read-Only"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Ephemeral"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Persistent"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/etc"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/etc/cni"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/etc/iscsi"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/etc/rancher"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/etc/ssh"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/etc/systemd"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/srv"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/home"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/opt"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/root"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/usr/libexec"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var/lib/cni"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var/lib/kubelet"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var/lib/longhorn"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var/lib/rancher"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var/lib/elemetal"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var/lib/NetworkManager"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var/lib/calico"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/var/log"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"x"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(7294);const l={},s=i.createContext(l);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);