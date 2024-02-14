"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[9160],{66560:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(17624),a=n(4552);const o={sidebar_label:"Restore",title:""},s="Restore",c={id:"restore",title:"",description:"Follow this guide to restore an Elemental configuration from a backup with Rancher.",source:"@site/versioned_docs/version-1.4/restore.md",sourceDirName:".",slug:"/restore",permalink:"/restore",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"Restore",title:""},sidebar:"docs",previous:{title:"Backup",permalink:"/backup"},next:{title:"Configure Wi-Fi",permalink:"/wifi"}},i={},l=[{value:"Prepare rancher-backup operator and backup files for restoring",id:"prepare-rancher-backup-operator-and-backup-files-for-restoring",level:2},{value:"Restore the Elemental configuration with rancher-backup operator",id:"restore-the-elemental-configuration-with-rancher-backup-operator",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components},{Head:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/restore"})}),"\n",(0,t.jsx)(r.h1,{id:"restore",children:"Restore"}),"\n",(0,t.jsx)(r.p,{children:"Follow this guide to restore an Elemental configuration from a backup with Rancher."}),"\n",(0,t.jsx)(r.h2,{id:"prepare-rancher-backup-operator-and-backup-files-for-restoring",children:"Prepare rancher-backup operator and backup files for restoring"}),"\n",(0,t.jsxs)(r.p,{children:["Go to official ",(0,t.jsx)(r.a,{href:"https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",children:"Rancher documentation"})," and make sure that ",(0,t.jsx)(r.code,{children:"rancher-backup operator"})," is installed and has access to backup files."]}),"\n",(0,t.jsxs)(r.p,{children:["You first have to follow this ",(0,t.jsx)(r.a,{href:"/backup",children:"documentation"})," to do a backup of Elemental resources."]}),"\n",(0,t.jsx)(r.h2,{id:"restore-the-elemental-configuration-with-rancher-backup-operator",children:"Restore the Elemental configuration with rancher-backup operator"}),"\n",(0,t.jsxs)(r.p,{children:["Create a ",(0,t.jsx)(r.code,{children:"restore object"})," (adapted to your needs) to restore the backup tarball."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: elemental-restore\nspec:\n  backupFilename: rancher-backup-430169aa-edde-4a61-85e8-858f625a755b-2022-10-17T05-15-00Z.tar.gz\n"})}),"\n",(0,t.jsx)(r.p,{children:"Apply manifest on Kubernetes."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl apply -f elemental-restore.yaml\n"})}),"\n",(0,t.jsx)(r.p,{children:"Check logs from rancher-backup operator."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n"})}),"\n",(0,t.jsx)(r.p,{children:"Verify if backup file was restore successfully."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",metastring:"showLineNumbers",children:"...\nINFO[2022/10/31 06:34:50] Processing controllerRef apps/v1/deployments/rancher \nINFO[2022/10/31 06:34:50] Done restoring\n...\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Continue with procedure from ",(0,t.jsx)(r.a,{href:"https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",children:"Rancher documentation"})]})]})}function p(e={}){const{wrapper:r}={...(0,a.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,r,n)=>{n.d(r,{I:()=>c,M:()=>s});var t=n(11504);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);