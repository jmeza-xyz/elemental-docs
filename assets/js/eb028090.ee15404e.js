"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8200],{35140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(17624),s=t(4552);const r={sidebar_label:"Configure NTP",title:""},c=void 0,o={id:"ntp",title:"",description:"NTP configuration with Elemental",source:"@site/versioned_docs/version-1.4/ntp.md",sourceDirName:".",slug:"/ntp",permalink:"/ntp",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"Configure NTP",title:""},sidebar:"docs",previous:{title:"Customize hostname",permalink:"/hostname"},next:{title:"How to use Elemental with Rancher and VMware",permalink:"/rancher-vmware"}},d={},a=[{value:"NTP configuration with Elemental",id:"ntp-configuration-with-elemental",level:2},{value:"Overview",id:"overview",level:3},{value:"Configure a static NTP server",id:"configure-a-static-ntp-server",level:3},{value:"Configure NTP from DHCP",id:"configure-ntp-from-dhcp",level:3}];function l(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/ntp"})}),"\n",(0,i.jsx)(n.h2,{id:"ntp-configuration-with-elemental",children:"NTP configuration with Elemental"}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The default OS channel shipped with Elemental provides NTP support via ",(0,i.jsx)(n.code,{children:"systemd-timesyncd"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This page covers configuring ",(0,i.jsx)(n.code,{children:"systemd-timesyncd"})," with the provided SLE Micro images, which is\npre-configured with some default (fallback) NTP servers: (",(0,i.jsx)(n.em,{children:"[0-3].suse.pool.ntp.org"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["The easiest way to configure a specific NTP server, is to drop a configuration file in the\n",(0,i.jsx)(n.code,{children:"/etc/systemd/timesyncd.conf.d"})," directory.\nThe directory and the configuration file should be accessible by the ",(0,i.jsx)(n.code,{children:"systemd-timesync"})," user."]}),"\n",(0,i.jsx)(n.h3,{id:"configure-a-static-ntp-server",children:"Configure a static NTP server"}),"\n",(0,i.jsx)(n.p,{children:"The NTP configuration can be provided via a cloud-config snippet added to the MachineRegistration\nconfiguration."}),"\n",(0,i.jsx)(n.p,{children:"We will need to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ensure the ",(0,i.jsx)(n.code,{children:"timesyncd.conf.d"})," directory can be read by the ",(0,i.jsx)(n.code,{children:"systemd-timesync"})," user"]}),"\n",(0,i.jsxs)(n.li,{children:["write the custom config file in the ",(0,i.jsx)(n.code,{children:"timesyncd.conf.d"})," directory"]}),"\n",(0,i.jsxs)(n.li,{children:["restart the ",(0,i.jsx)(n.code,{children:"systemd-timesyncd"})," service to use the new configuration"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["As an example, let's see how to configure ",(0,i.jsx)(n.code,{children:"ntp.ripe.net"})," as the primary NTP server (lines 6-14):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"config:\n  cloud-config:\n    users:\n      - name: root\n        passwd: root\n    write_files:\n      - content: |\n          [Time]\n          NTP=ntp.ripe.net\n        path: /etc/systemd/timesyncd.conf.d/custom-ntp.conf\n        permissions: 644\n    runcmd:\n      - chmod 755 /etc/systemd/timesyncd.conf.d\n      - systemctl restart systemd-timesyncd\n  elemental:\n    install:\n      device: /dev/vda\n      reboot: true\nmachineInventoryLabels:\n  element: fire\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configure-ntp-from-dhcp",children:"Configure NTP from DHCP"}),"\n",(0,i.jsxs)(n.p,{children:["In order to get the NTP server from the network via the NTP DHCP option, we need\na NetworkManager dispatcher script to reconfigure dynamically the ",(0,i.jsx)(n.code,{children:"systemd-timesync"})," service when\nneeded."]}),"\n",(0,i.jsx)(n.p,{children:"We will have both to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"provide the dispatcher script which creates and deletes the systemd-timesyncd config files"}),"\n",(0,i.jsx)(n.li,{children:"enable the NetworkManager-dispatcher service"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"See lines 6-34 in the following MachineRegistration configuration example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'config:\n  cloud-config:\n    users:\n      - name: root\n        passwd: root\n    write_files:\n      - content: |\n          #! /usr/bin/bash\n\n          [ -n "$CONNECTION_UUID" ] || exit\n\n          INTERFACE=$1\n          ACTION=$2\n\n          case $ACTION in\n              up | dhcp4-change | dhcp6-change)\n                  [ -n "$DHCP4_NTP_SERVERS" ] || exit\n                  mkdir -p /etc/systemd/timesyncd.conf.d/\n                  cat<<EOF > /etc/systemd/timesyncd.conf.d/$CONNECTION_UUID.conf\n          [Time]\n          NTP=$DHCP4_NTP_SERVERS\n          RootDistanceMaxSec=15\n          EOF\n                  systemctl restart systemd-timesyncd\n                  ;;\n              down)\n                  rm -f /etc/systemd/timesyncd.conf.d/$CONNECTION_UUID.conf\n                  systemctl restart systemd-timesyncd\n                  ;;\n          esac\n        path: /etc/NetworkManager/dispatcher.d/10-update-timesyncd\n        permissions: 700\n    runcmd:\n      - systemctl enable NetworkManager-dispatcher\n  elemental:\n    install:\n      device: /dev/vda\n      reboot: true\nmachineInventoryLabels:\n  element: fire\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>c});var i=t(11504);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);