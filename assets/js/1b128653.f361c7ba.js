"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[6892],{54084:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=n(17624),t=n(4552);const r={sidebar_label:"Air-Gapped Installation",title:""},i=void 0,s={id:"airgap",title:"",description:"Install Elemental in an Air-Gapped Environment",source:"@site/docs/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/next/airgap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Air-Gapped Installation",title:""},sidebar:"docs",previous:{title:"Add a custom certificate",permalink:"/next/custom-certificate"},next:{title:"Building raw disk images for Raspberry Pi",permalink:"/next/raspi-disk"}},h={},o=[{value:"Install Elemental in an Air-Gapped Environment",id:"install-elemental-in-an-air-gapped-environment",level:2},{value:"Assumptions",id:"assumptions",level:3},{value:"Overview",id:"overview",level:3},{value:"Elemental Air-Gapped installation from the command line",id:"elemental-air-gapped-installation-from-the-command-line",level:3},{value:"Elemental installation",id:"elemental-installation",level:4},{value:"Elemental Air-Gapped installation from the Rancher Marketplace",id:"elemental-air-gapped-installation-from-the-rancher-marketplace",level:3},{value:"Elemental installation",id:"elemental-installation-1",level:4},{value:"Elemental UI Extension",id:"elemental-ui-extension",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components},{Head:r,TabItem:i,Tabs:s}=a;return r||m("Head",!0),i||m("TabItem",!0),s||m("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{children:(0,l.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/airgap"})}),"\n",(0,l.jsx)(a.h2,{id:"install-elemental-in-an-air-gapped-environment",children:"Install Elemental in an Air-Gapped Environment"}),"\n",(0,l.jsx)(a.h3,{id:"assumptions",children:"Assumptions"}),"\n",(0,l.jsxs)(a.p,{children:["A Rancher air-gapped installation should be already configured as per the ",(0,l.jsx)(a.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/air-gapped-helm-cli-install",children:"official Rancher documentation"}),".\nIn particular, a private registry should be available in the air-gapped infrastructure."]}),"\n",(0,l.jsx)(a.h3,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(a.p,{children:"In order to run Elemental in an air-gapped environment the following artifacts are needed:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"the Elemental Operator charts"}),"\n",(0,l.jsxs)(a.li,{children:["the container images referenced in the charts (the ",(0,l.jsx)(a.em,{children:"elemental-operator"})," and ",(0,l.jsx)(a.em,{children:"seedimage-builder"})," images)"]}),"\n",(0,l.jsx)(a.li,{children:"the containerized OS images"}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["Moreover, it could be handy to create a ",(0,l.jsx)(a.em,{children:"channel image"})," referencing the containerized OS images available.\nThe official channel image (the ",(0,l.jsx)(a.em,{children:"elemental-channel"})," one) references absolute URLs of the OS images on the official suse registry, so it cannot be used as-is in an air-gapped scenario."]}),"\n",(0,l.jsx)(a.h3,{id:"elemental-air-gapped-installation-from-the-command-line",children:"Elemental Air-Gapped installation from the command line"}),"\n",(0,l.jsxs)(a.p,{children:["All the required steps can be accomplished by executing the\n",(0,l.jsxs)(a.a,{href:"https://raw.githubusercontent.com/rancher/elemental-operator/main/scripts/elemental-airgap.sh",children:[(0,l.jsx)(a.code,{children:"elemental-airgap.sh"})," script"]}),"\nfrom a host with Internet access."]}),"\n",(0,l.jsxs)(a.p,{children:["The Elemental charts are a required parameter to the script and can be provided as downloaded archives, URLs or as one of\nthe ",(0,l.jsx)(a.code,{children:"stable"}),", ",(0,l.jsx)(a.code,{children:"staging"})," and ",(0,l.jsx)(a.code,{children:"dev"})," keywords, to let the script retrieve the correct chart version for you."]}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"elemental-airgap.sh"})," inspects the Elemental Operator chart, identifies all the required container images, downloads and saves them in a single docker archive.\nIt also builds a new OS channel image with the OS image URLs pointing to the private registry passed as argument\n(which is a mandatory argument too)."]}),"\n",(0,l.jsx)(a.p,{children:"The latest version of the elemental script can be easily downloaded from the official github repo:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",metastring:"showLineNumbers",children:"wget https://raw.githubusercontent.com/rancher/elemental-operator/main/scripts/elemental-airgap.sh\nchmod 755 elemental-airgap.sh\n"})}),"\n",(0,l.jsx)(a.p,{children:"Let's now download all the artifacts and build a custom channel from the latest stable release of Elemental:"}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsxs)(i,{value:"dockerArchive",label:"Create a Docker archive",default:!0,children:[(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",metastring:"showLineNumbers",children:"./elemental-airgap.sh stable -r <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsx)(a.p,{children:"once completed (the script may take a while) the following files will be available in the current dir:"}),(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.code,{children:"elemental-operator-crds-chart-<*VERSION*>.tgz"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.code,{children:"elemental-operator-chart-<*VERSION*>.tgz"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.code,{children:"elemental-images.txt"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.code,{children:"elemental-images.tar.gz"})}),"\n"]})]}),(0,l.jsxs)(i,{value:"haulerArchive",label:"Create a Hauler archive",default:!0,children:[(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",metastring:"showLineNumbers",children:"./elemental-airgap.sh -ha stable -r <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsxs)(a.p,{children:["once completed (the script may take a while) both the charts and the container images will be packed in the\nhauler archive named ",(0,l.jsx)(a.code,{children:"elemental-haul.tar.zst"})," ."]})]})]}),"\n",(0,l.jsx)(a.h4,{id:"elemental-installation",children:"Elemental installation"}),"\n",(0,l.jsx)(a.p,{children:"The files and archives created by the script should be copied to a host which:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"Has access to the private registry."}),"\n",(0,l.jsx)(a.li,{children:"Has the kubectl binary installed and configured to access the air-gapped Rancher cluster."}),"\n",(0,l.jsx)(a.li,{children:"Has the helm binary installed."}),"\n"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsxs)(i,{value:"dockerArchive",label:"Install from a Docker archive",default:!0,children:[(0,l.jsx)(a.p,{children:"If the private registry requires authentication you need to log with docker into it:"}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",metastring:"showLineNumbers",children:"docker login <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsx)(a.p,{children:"Two steps are needed to perform the Elemental installation:"}),(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsxs)(a.li,{children:["load the archive with all the required container images on the private registry:\nthis could be done using the ",(0,l.jsx)(a.code,{children:"rancher-load-images.sh"})," script distributed with the Rancher release and already used for the Rancher air-gapped deployment:"]}),"\n"]}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",metastring:"showLineNumbers",children:"rancher-load-images.sh \\\n   --image-list elemental-images.txt \\\n   --images elemental-images.tar.gz \\\n   --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsxs)(a.ol,{start:"2",children:["\n",(0,l.jsx)(a.li,{children:"install the downloaded elemental charts configuring the local registry and the newly created channel:"}),"\n"]}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",metastring:"showLineNumbers",children:"helm upgrade --create-namespace -n cattle-elemental-system \\\n  --install elemental-operator-crds elemental-operator-crds-chart-<VERSION>.tgz\n\nhelm upgrade --create-namespace -n cattle-elemental-system \\\n  --install elemental-operator elemental-operator-chart-<VERSION>.tgz \\\n  --set registryUrl=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n  --set channel.repository=rancher/elemental-teal-channel-<REGISTRY.YOURDOMAIN.COM>\n"})})]}),(0,l.jsxs)(i,{value:"haulerArchive",label:"Install from a Hauler archive",default:!0,children:[(0,l.jsxs)(a.p,{children:["To install from a ",(0,l.jsx)(a.a,{href:"https://rancherfederal.github.io/hauler-docs/",children:"Hauler"})," archive (",(0,l.jsx)(a.code,{children:"-ha"})," option in ",(0,l.jsx)(a.code,{children:"elemental-airgap.sh"}),")\nHauler installation is also a requirement on the host from where the installation is performed."]}),(0,l.jsx)(a.p,{children:"If the private registry requires authentication you need to log with Hauler into it:"}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",metastring:"showLineNumbers",children:"hauler login <REGISTRY.YOURDOMAIN.COM:PORT> -u $USERNAME -p $PASSWORD\n"})}),(0,l.jsx)(a.p,{children:"Three steps are needed to perform the Elemental installation:"}),(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsx)(a.li,{children:"Load the 'elemental-haul.tar.zst' Haul archive in the Hauler instance in the airgapped infrastructure:"}),"\n"]}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",children:"hauler store load 'elemental-haul.tar.zst'\n"})}),(0,l.jsxs)(a.ol,{start:"2",children:["\n",(0,l.jsx)(a.li,{children:"If the local registry in the air-gapped environment is not server by Hauler,\nload the Haul archive in the local registry:"}),"\n"]}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",children:"hauler store copy registry://<REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsx)(a.admonition,{title:"Hauler can also serve as a registry",type:"info",children:(0,l.jsx)(a.p,{children:"In case the air-gapped local registry is served by an Hauler instance, just load the Haul archive directly there\n(as shown in step (1)) and skip step (2)."})}),(0,l.jsxs)(a.ol,{start:"3",children:["\n",(0,l.jsx)(a.li,{children:"Extract the elemental charts from the Hauler store and install them:"}),"\n"]}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",children:"hauler store extract elemental-operator-crds-chart-<ELEMENTAL-VERSION>.tgz\n\nhauler store extract elemental-operator-chart-<ELEMENTAL-VERSION>.tgz\n\nhelm upgrade --create-namespace -n cattle-elemental-system \\\n  --install elemental-operator-crds elemental-operator-crds-chart-<ELEMENTAL-VERSION>.tgz\n\nhelm upgrade --create-namespace -n cattle-elemental-system \\\n  --install elemental-operator elemental-operator-chart-<ELEMENTAL-VERSION>.tgz \\\n  --set registryUrl=<REGISTRY.YOURDOMAIN.COM:PORT> \\\n  --set channel.repository=rancher/elemental-channel-<REGISTRY.YOURDOMAIN.COM:PORT>\n"})})]})]}),"\n",(0,l.jsx)(a.admonition,{title:"The elemental airgap script outputs the required commands",type:"info",children:(0,l.jsxs)(a.p,{children:["The ",(0,l.jsx)(a.code,{children:"elemental-airgap.sh"})," scripts prints out the required commands shown above but using the actual chart version and the provided registry URL to allow to easily copy and paste the exact commands."]})}),"\n",(0,l.jsx)(a.h3,{id:"elemental-air-gapped-installation-from-the-rancher-marketplace",children:"Elemental Air-Gapped installation from the Rancher Marketplace"}),"\n",(0,l.jsx)(a.p,{children:"A Rancher air-gapped installation includes also the Elemental Operator charts and the operator and seedimage container\nimages."}),"\n",(0,l.jsxs)(a.p,{children:["To collect the missing OS images and to build an OS channel image for your private registry execute the\n",(0,l.jsxs)(a.a,{href:"https://raw.githubusercontent.com/rancher/elemental-operator/main/scripts/elemental-airgap.sh",children:[(0,l.jsx)(a.code,{children:"elemental-airgap.sh"})," script"]}),"\nfrom an host with Internet access, using the ",(0,l.jsx)(a.code,{children:"-co"})," option."]}),"\n",(0,l.jsxs)(a.p,{children:["As an example, let's target the ",(0,l.jsx)(a.code,{children:"elemental-channel"})," image from the latest stable release of Elemental.\nThe script will take care of downloading the Elemental operator chart (if needed), extract the OS channel image URL,\ndownload it, inspect all the OS images referenced, download all of them and create a new OS channel with links to the\nprivate registry of the air-gapped scenario."]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsxs)(i,{value:"dockerArchive",label:"Create a Docker archive",default:!0,children:[(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",metastring:"showLineNumbers",children:"wget https://raw.githubusercontent.com/rancher/elemental-operator/main/scripts/elemental-airgap.sh\nchmod 755 elemental-airgap.sh\n./elemental-airgap.sh stable -co -r <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsx)(a.p,{children:"once completed (the script may take a while) the following files will be available in the current dir:"}),(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.code,{children:"elemental-operator-crds-chart-<*VERSION*>.tgz"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.code,{children:"elemental-operator-chart-<*VERSION*>.tgz"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.code,{children:"elemental-images.txt"})}),"\n",(0,l.jsx)(a.li,{children:(0,l.jsx)(a.code,{children:"elemental-images.tar.gz"})}),"\n"]})]}),(0,l.jsxs)(i,{value:"haulerArchive",label:"Create a Hauler archive",default:!0,children:[(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",metastring:"showLineNumbers",children:"./elemental-airgap.sh -ha -co stable -r <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsxs)(a.p,{children:["once completed (the script may take a while) the container images will be packed in the\nhauler archive named ",(0,l.jsx)(a.code,{children:"elemental-haul.tar.zst"}),"."]})]})]}),"\n",(0,l.jsx)(a.h4,{id:"elemental-installation-1",children:"Elemental installation"}),"\n",(0,l.jsx)(a.p,{children:"The generated archive should be loaded to the air-gapped private registry."}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsxs)(i,{value:"dockerArchive",label:"Install from a Docker archive",default:!0,children:[(0,l.jsx)(a.p,{children:"If the private registry requires authentication you need to log with docker into it:"}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",metastring:"showLineNumbers",children:"docker login <REGISTRY.YOURDOMAIN.COM:PORT>\n\nThe script will print out the commands required to load the images via the Rancher `rancher-load-images.sh` tool, used\nfor the Rancher air-gapped installations. It should be something like:\n\n```shell showLineNumbers\nNEXT STEPS:\n\n1) Load the 'elemental-images.tar.gz' to the local registry (<REGISTRY.YOURDOMAIN.COM:PORT>)\n   available in the airgapped infrastructure:\n\n./rancher-load-images.sh \\\n   --image-list elemental-images.txt \\\n   --images elemental-images.tar.gz \\\n   --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsx)(a.p,{children:"Once the OS and channel images are loaded, you should skip the point (2) from the script output\n(which will install the Elemental charts from the downloaded archives)\nand instead perform the Elemental Operator installation from the Rancher UI."})]}),(0,l.jsxs)(i,{value:"haulerArchive",label:"Install from a Hauler archive",default:!0,children:[(0,l.jsx)(a.p,{children:"If the private registry requires authentication you need to log with Hauler into it:"}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shellnocolor",metastring:"showLineNumbers",children:"hauler login <REGISTRY.YOURDOMAIN.COM:PORT> -u $USERNAME -p $PASSWORD\n"})}),(0,l.jsx)(a.p,{children:"The script will print out the commands required to load the images. It should be something like:"}),(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",metastring:"showLineNumbers",children:"NEXT STEPS:\n\n1. Load the 'elemental-haul.tar.zst' Haul archive in the Hauler instance in the airgapped infrastructure:\n\nhauler store load 'elemental-haul.tar.zst'\n\n2. If the local registry in the air-gapped environment is not server by Hauler,\nload the Haul archive in the local registry:\n\nhauler store copy registry://<REGISTRY.YOURDOMAIN.COM:PORT>\n"})}),(0,l.jsx)(a.p,{children:"Once the OS and channel images are loaded, you should skip the point (3) from the script output\n(which will install the Elemental charts from the downloaded archives)\nand instead perform the Elemental Operator installation from the Rancher UI."})]})]}),"\n",(0,l.jsxs)(a.p,{children:["When requested, put the full path of the OS channel image just uploaded in your private registry:\n",(0,l.jsx)(a.img,{alt:"Elemental OS Channel",src:n(47216).c+"",width:"1469",height:"650"})]}),"\n",(0,l.jsx)(a.h3,{id:"elemental-ui-extension",children:"Elemental UI Extension"}),"\n",(0,l.jsx)(a.p,{children:"Rancher 2.7.x doesn't support UI extensions plugin in air-gapped environments, and so the Elemental UI is not available in Rancher 2.7.x."}),"\n",(0,l.jsx)(a.p,{children:"The Elemental UI plugin will be present in the available UI extensions in Rancher 2.8.0."})]})}function d(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}function m(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},47216:(e,a,n)=>{n.d(a,{c:()=>l});const l=n.p+"assets/images/airgap-os-channel-image-cb09ee2dc30f77307d5d531796704e6c.png"},4552:(e,a,n)=>{n.d(a,{I:()=>s,M:()=>i});var l=n(11504);const t={},r=l.createContext(t);function i(e){const a=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);