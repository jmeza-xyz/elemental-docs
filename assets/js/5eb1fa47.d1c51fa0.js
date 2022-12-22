"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,h=u["".concat(s,".").concat(p)]||u[p]||c[p]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={sidebar_label:"Custom Images",title:""},o="Custom Images",r={unversionedId:"customizing",id:"customizing",title:"",description:"Elemental Teal images can be customized in different ways.",source:"@site/docs/customizing.md",sourceDirName:".",slug:"/customizing",permalink:"/next/customizing",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Custom Images",title:""},sidebar:"docs",previous:{title:"Upgrade",permalink:"/next/upgrade"},next:{title:"Elemental plans",permalink:"/next/elemental-plans"}},s={},d=[{value:"Customize installation ISO and installation process",id:"customize-installation-iso-and-installation-process",level:2},{value:"Additional configuration files",id:"additional-configuration-files",level:3},{value:"Custom Elemental client configuration file",id:"custom-elemental-client-configuration-file",level:4},{value:"Adding additional cloud-init files at boot",id:"adding-additional-cloud-init-files-at-boot",level:4},{value:"Installation hooks",id:"installation-hooks",level:4},{value:"Adding extra driver binaries into the ISO example",id:"adding-extra-driver-binaries-into-the-iso-example",level:3},{value:"Repacking the ISO image with extra files",id:"repacking-the-iso-image-with-extra-files",level:3},{value:"Remastering a custom docker image",id:"remastering-a-custom-docker-image",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-images"},"Custom Images"),(0,i.kt)("p",null,"Elemental Teal images can be customized in different ways.\nOne option is to provide\nadditional resources within the installation media so that during installation, or\neventually at boot time, additional binaries such as drivers can be included."),(0,i.kt)("p",null,"Another option would be to remaster the Elemental Teal by simply using a docker build.\nElemental Teal is a regular container image, so it is absolutely possible to create\na new image using a Dockerfile based on Elemental Teal image."),(0,i.kt)("h2",{id:"customize-installation-iso-and-installation-process"},"Customize installation ISO and installation process"),(0,i.kt)("p",null,"In order to adapt the installation ISO a simple approach is to append extra configuration\nfiles into the ISO root in the same way a registration yaml configuration file\nis added."),(0,i.kt)("h3",{id:"additional-configuration-files"},"Additional configuration files"),(0,i.kt)("p",null,"Elemental Teal installation can be customized in three different, non-exclusive ways. First, including\nsome custom Elemental client configuration file, second, by including additional cloud-init files to execute at\nboot time, and finally, by including installation hooks."),(0,i.kt)("h4",{id:"custom-elemental-client-configuration-file"},"Custom Elemental client configuration file"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-cli"},"Elemental client")," ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," commands can be configured with a\ncustom ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/"},"configuration file"),"."),(0,i.kt)("p",null,"In order to set a custom configuration file in the installation\nmedia the MachineRegistration resource associated with this ISO should also include\nthe Elemental client configuration directory. For that purpose, the ",(0,i.kt)("inlineCode",{parentName:"p"},"install")," field\nsupports the ",(0,i.kt)("inlineCode",{parentName:"p"},"config-dir")," field. See ",(0,i.kt)("a",{parentName:"p",href:"/machineregistration-reference#configelementalinstall"},"MachineRegistration reference")," and the example\nbelow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  ...\n  config:\n    ...\n    elemental:\n      ...\n      install:\n        ...\n        config-dir: "/run/initramfs/live/elemental.conf.d"\n')),(0,i.kt)("p",null,"Elemental Teal live ISOs, when booted, have the ISO root mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/run/initramfs/live"),".\nSo in that case, the ISO will contain the custom Elemental client configuration file\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"/elemental.conf.d/config.yaml"),"."),(0,i.kt)("h4",{id:"adding-additional-cloud-init-files-at-boot"},"Adding additional cloud-init files at boot"),(0,i.kt)("p",null,"In order to include additional cloud-init files during the installation they need\nto be added to the installation data into the MachineRegistration resource. More specific\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"config-urls")," field is used for this exact purpose. See ",(0,i.kt)("a",{parentName:"p",href:"/machineregistration-reference"},"MachineRegistration reference")," page."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config-urls")," is a list of string literals where each item is an http url pointing to a\ncloud-init file or a local path of a cloud init file. Note the local path is evaluated at the\ntime of execution by the installation media, hence the local path must exist within\nthe installation media, commonly an ISO image."),(0,i.kt)("p",null,"Since in Elemental Teal live systems the ISO root is mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/run/initramfs/live"),",\nthe local paths for ",(0,i.kt)("inlineCode",{parentName:"p"},"config-url")," in MachineRegistrations are likely to point there.\nSee the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  ...\n  config:\n    ...\n    elemental:\n      ...\n      install:\n        ...\n        config-urls:\n        - "/run/initramfs/live/oem/10_install_extra_drivers.yaml"\n')),(0,i.kt)("p",null,"In that case the ISO root is expected to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem/10_install_extra_drivers.yaml")," file."),(0,i.kt)("h4",{id:"installation-hooks"},"Installation hooks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-cli"},"Elemental client")," ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," procedures include three different hooks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"before-install"),": executed after all partition mountpoints are set."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"after-install-chroot"),": executed after deploying the OS image and before unmounting the associated loop filesystem image. Runs chrooted to the OS image."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"after-install"),": executed before unmounting partitions but after all OS images are set and unmounted.")),(0,i.kt)("p",null,"Hooks are provided as cloud-init stages. Equivalent hooks exist for ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," procedures."),(0,i.kt)("p",null,"Hooks are evaluated at ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),",",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," processes from ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/system/oem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/cloud-config"),", however\nadditional paths can be provided with the ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init-paths")," flag in ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/"},"Elemental client configuration"),"."),(0,i.kt)("h3",{id:"adding-extra-driver-binaries-into-the-iso-example"},"Adding extra driver binaries into the ISO example"),(0,i.kt)("p",null,"This example is covering the case in which extra driver binaries are included into the ISO\nand during the installation they are installed over the OS image."),(0,i.kt)("p",null,"For that use case the following files are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"additional binaries to install (they could be in the form of RPMs)"),(0,i.kt)("li",{parentName:"ul"},"additional hooks file to copy binaries into the persistent storage and to install them"),(0,i.kt)("li",{parentName:"ul"},"additional Elemental client configuration file to point hooks file location")),(0,i.kt)("p",null,"Lets create an ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay")," directory to include the overlay root-tree that needs to be\napplied over the ISO root. In that case the ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay")," directory could contain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"overlay/\n  data/\n    extra_drivers/\n      some_driver.rpm\n  hooks/\n    install_hooks.yaml\n  elemental/\n    config.yaml\n")),(0,i.kt)("p",null,"The Elemental client config file in ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay/elemental")," could be as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'cloud-init-paths:\n  - "/run/initramfs/live/hooks"\n')),(0,i.kt)("p",null,"This is just to let Elemental client know where to find installation hooks."),(0,i.kt)("p",null,"Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay/hooks/install_hooks.yaml")," could be as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'name: "Install extra drivers"\nstages:\n  before-install:\n    # Preload data to the persistent storage\n    # During installation persistent partition is mounted at /run/cos/persistent\n    - commands:\n        - rsync -a /run/initramfs/live/data/ /run/cos/persistent\n  after-install-chroot:\n    # extra_drivers folder is at `/usr/local/extra_drivers` from the OS image chroot\n    - commands:\n      - rpm -iv /usr/local/extra_drivers/some_driver.rpm\n')),(0,i.kt)("p",null,"Note the installation hooks only cover installation procedures, for upgrades equivalent\n",(0,i.kt)("inlineCode",{parentName:"p"},"before-upgrade")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"after-upgrade-chroot")," should be defined."),(0,i.kt)("h3",{id:"repacking-the-iso-image-with-extra-files"},"Repacking the ISO image with extra files"),(0,i.kt)("p",null,"Assuming an ",(0,i.kt)("inlineCode",{parentName:"p"},"overlay")," folder was created in the current directory containing all\nadditional files to be appended, the following ",(0,i.kt)("inlineCode",{parentName:"p"},"xorriso")," command adds the extra files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"xorriso -indev elemental-teal.x86_64.iso -outdev elemental-teal.custom.x86_64.iso -map overlay / -boot_image any replay\n")),(0,i.kt)("p",null,"For that a ",(0,i.kt)("inlineCode",{parentName:"p"},"xorriso")," equal or higher than version 1.5 is required."),(0,i.kt)("h2",{id:"remastering-a-custom-docker-image"},"Remastering a custom docker image"),(0,i.kt)("p",null,"Since Elemental Teal image is a Docker image it can also be used as a base image\nin a Dockerfile in order to create a new container image."),(0,i.kt)("p",null,"Imagine some additional package from an extra repository is required, the following example\nshow case how this could be added:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker",metastring:"showLineNumbers",showLineNumbers:!0},'# The version of Elemental to modify\nFROM registry.opensuse.org/isv/rancher/elemental/teal52/15.3/rancher/elemental-node-image/5.2:VERSION\n\n# Custom commands\nRUN rpm --import <repo-signing-key-url> && \\\n    zypper addrepo --refresh <repo_url> extra_repo && \\\n    zypper install -y <extra_package>\n\n# IMPORTANT: /etc/os-release is used for versioning/upgrade. The\n# values here should reflect the tag of the image currently being built\nARG IMAGE_REPO=norepo\nARG IMAGE_TAG=latest\nRUN echo "IMAGE_REPO=${IMAGE_REPO}"          > /etc/os-release && \\\n    echo "IMAGE_TAG=${IMAGE_TAG}"           >> /etc/os-release && \\\n    echo "IMAGE=${IMAGE_REPO}:${IMAGE_TAG}" >> /etc/os-release\n')),(0,i.kt)("p",null,"Where VERSION is the base version we want to customize."),(0,i.kt)("p",null,"And then the following commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker build --build-arg IMAGE_REPO=myrepo/custom-build \\\n             --build-arg IMAGE_TAG=v1.1.1 \\\n             -t myrepo/custom-build:v1.1.1 .\ndocker push myrepo/custom-build:v1.1.1\n")),(0,i.kt)("p",null,"The new customized OS is available as the Docker image ",(0,i.kt)("inlineCode",{parentName:"p"},"myrepo/custom-build:v1.1.1")," and it can\nbe run and verified using docker with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker run -it myrepo/custom-build:v1.1.1 bash\n")))}c.isMDXComponent=!0}}]);