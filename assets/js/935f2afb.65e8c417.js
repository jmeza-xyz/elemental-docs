"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[5696],{35988:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next \ud83d\udea7","banner":"unreleased","badge":false,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Overview","href":"/next/","docId":"index","unlisted":false},{"type":"category","collapsible":true,"collapsed":false,"label":"Quickstarts","items":[{"type":"link","label":"Elemental the visual way","href":"/next/quickstart-ui","docId":"quickstart-ui","unlisted":false},{"type":"link","label":"Elemental the command line way","href":"/next/quickstart-cli","docId":"quickstart-cli","unlisted":false}]},{"type":"link","label":"Architecture","href":"/next/architecture","docId":"architecture","unlisted":false},{"type":"category","collapsible":true,"collapsed":true,"label":"Install/Upgrade","items":[{"type":"link","label":"Installation","href":"/next/installation","docId":"installation","unlisted":false},{"type":"link","label":"Upgrade","href":"/next/upgrade","docId":"upgrade","unlisted":false},{"type":"link","label":"Customize Elemental Install","href":"/next/customizing","docId":"customizing","unlisted":false},{"type":"link","label":"Elemental plans","href":"/next/elemental-plans","docId":"elemental-plans","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Reference","items":[{"type":"link","label":"Cloud-config reference","href":"/next/cloud-config-reference","docId":"cloud-config-reference","unlisted":false},{"type":"link","label":"MachineRegistration reference","href":"/next/machineregistration-reference","docId":"machineregistration-reference","unlisted":false},{"type":"link","label":"MachineInventorySelectorTemplate reference","href":"/next/machineinventoryselectortemplate-reference","docId":"machineinventoryselectortemplate-reference","unlisted":false},{"type":"link","label":"ManagedOSImage reference","href":"/next/managedosimage-reference","docId":"managedosimage-reference","unlisted":false},{"type":"link","label":"Cluster reference","href":"/next/cluster-reference","docId":"cluster-reference","unlisted":false},{"type":"link","label":"SeedImage reference","href":"/next/seedimage-reference","docId":"seedimage-reference","unlisted":false},{"type":"link","label":"Elemental Operator Helm Chart","href":"/next/elementaloperatorchart-reference","docId":"elementaloperatorchart-reference","unlisted":false},{"type":"link","label":"Kubernetes versions","href":"/next/kubernetesversions","docId":"kubernetesversions","unlisted":false},{"type":"link","label":"Smbios","href":"/next/smbios","docId":"smbios","unlisted":false},{"type":"link","label":"Hardware Labels","href":"/next/hardwarelabels","docId":"hardwarelabels","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Operator","items":[{"type":"link","label":"Inventory Management","href":"/next/inventory-management","docId":"inventory-management","unlisted":false},{"type":"link","label":"Machine Reset","href":"/next/reset","docId":"reset","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Backup","items":[{"type":"link","label":"Backup","href":"/next/backup","docId":"backup","unlisted":false},{"type":"link","label":"Restore","href":"/next/restore","docId":"restore","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"How to","items":[{"type":"link","label":"Configure Wi-Fi","href":"/next/wifi","docId":"wifi","unlisted":false},{"type":"link","label":"Elemental behind proxy","href":"/next/elemental_behind_proxy","docId":"elemental_behind_proxy","unlisted":false},{"type":"link","label":"Customize hostname","href":"/next/hostname","docId":"hostname","unlisted":false},{"type":"link","label":"How to use Elemental with Rancher and VMware","href":"/next/rancher-vmware","docId":"rancher-vmware","unlisted":false},{"type":"link","label":"Include cloud-config from removable devices","href":"/next/removable-device-cloudconfig","docId":"removable-device-cloudconfig","unlisted":false},{"type":"link","label":"Add a custom certificate","href":"/next/custom-certificate","docId":"custom-certificate","unlisted":false},{"type":"link","label":"Air-Gapped Installation","href":"/next/airgap","docId":"airgap","unlisted":false},{"type":"link","label":"Building raw disk images for Raspberry Pi","href":"/next/raspi-disk","docId":"raspi-disk","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Troubleshooting","items":[{"type":"category","collapsible":true,"collapsed":true,"label":"Rancher","items":[{"type":"link","label":"Rancher upgrades","href":"/next/troubleshooting-rancher-upgrades","docId":"troubleshooting-rancher-upgrades","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Restore","items":[{"type":"link","label":"Restore","href":"/next/troubleshooting-restore","docId":"troubleshooting-restore","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Upgrade","items":[{"type":"link","label":"Upgrade","href":"/next/troubleshooting-upgrade","docId":"troubleshooting-upgrade","unlisted":false}]},{"type":"category","collapsible":true,"collapsed":true,"label":"Reset","items":[{"type":"link","label":"Reset","href":"/next/troubleshooting-reset","docId":"troubleshooting-reset","unlisted":false}]}]},{"type":"link","label":"Release Notes","href":"/next/release-notes","docId":"release-notes","unlisted":false}]},"docs":{"airgap":{"id":"airgap","title":"","description":"Install Elemental in an Air-Gapped Environment","sidebar":"docs"},"architecture":{"id":"architecture","title":"","description":"The Elemental stack can be divided in two main parts: the Elemental OS, an immutable and customizable OS which comprises the tools and the steps needed to prepare the Cloud Native OS image and perform the actual OS installation on the host, and the , that allows central management of the Elemental OS via Rancher, the Kubernetes way.","sidebar":"docs"},"backup":{"id":"backup","title":"","description":"Since Elemental runs as part of Rancher, the Elemental resources are bundled in the Rancher backup.","sidebar":"docs"},"cloud-config-reference":{"id":"cloud-config-reference","title":"","description":"All custom configuration applied on top of a fresh deployment should come","sidebar":"docs"},"cluster-reference":{"id":"cluster-reference","title":"","description":"A Cluster definition includes a kubernetesVersion and a list of machinePools to deploy the cluster to.","sidebar":"docs"},"custom-certificate":{"id":"custom-certificate","title":"","description":"How to add a custom certificate","sidebar":"docs"},"customizing":{"id":"customizing","title":"","description":"Elemental Teal images can be customized in different ways.","sidebar":"docs"},"elemental_behind_proxy":{"id":"elemental_behind_proxy","title":"","description":"Introduction","sidebar":"docs"},"elemental-plans":{"id":"elemental-plans","title":"","description":"Introduction","sidebar":"docs"},"elementaloperatorchart-reference":{"id":"elementaloperatorchart-reference","title":"","description":"The  is responsible for managing the Elemental versions and maintaining a machine inventory to assist with edge or bare metal installations.","sidebar":"docs"},"hardwarelabels":{"id":"hardwarelabels","title":"","description":"Hardware Labels","sidebar":"docs"},"hostname":{"id":"hostname","title":"","description":"Customize hostname","sidebar":"docs"},"index":{"id":"index","title":"","description":"Elemental is a software stack enabling centralized, full cloud-native OS management with Kubernetes.","sidebar":"docs"},"installation":{"id":"installation","title":"","description":"Overview","sidebar":"docs"},"inventory-management":{"id":"inventory-management","title":"","description":"Inventory Management","sidebar":"docs"},"kubernetesversions":{"id":"kubernetesversions","title":"","description":"Valid Versions","sidebar":"docs"},"machineinventoryselectortemplate-reference":{"id":"machineinventoryselectortemplate-reference","title":"","description":"The MachineInventorySelectorTemplate is the resource responsible of defining the matching criteria to pair an inventoried machine with a Cluster resource.","sidebar":"docs"},"machineregistration-reference":{"id":"machineregistration-reference","title":"","description":"The MachineRegistration resource is the responsible of defining a machine registration end point. Once created it generates a registration URL used by nodes to register so they are inventoried.","sidebar":"docs"},"managedosimage-reference":{"id":"managedosimage-reference","title":"","description":"The ManagedOSImage resource is responsible of defining an OS image or image version that needs to be applied to each node in a set of targeted Clusters.","sidebar":"docs"},"quickstart-cli":{"id":"quickstart-cli","title":"","description":"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher","sidebar":"docs"},"quickstart-ui":{"id":"quickstart-ui","title":"","description":"The following instructions need Rancher 2.8.x at least.","sidebar":"docs"},"rancher-vmware":{"id":"rancher-vmware","title":"","description":"Excerpt","sidebar":"docs"},"raspi-disk":{"id":"raspi-disk","title":"","description":"How to build raw disk images for Raspberry Pi","sidebar":"docs"},"release-notes":{"id":"release-notes","title":"","description":"The Elemental project stack is made of various components such as the Operator and UI for example.","sidebar":"docs"},"removable-device-cloudconfig":{"id":"removable-device-cloudconfig","title":"","description":"How to include cloud-config files from removable devices","sidebar":"docs"},"reset":{"id":"reset","title":"","description":"Machine Reset","sidebar":"docs"},"restore":{"id":"restore","title":"","description":"Follow this guide to restore an Elemental configuration from a backup with Rancher.","sidebar":"docs"},"seedimage-reference":{"id":"seedimage-reference","title":"","description":"A SeedImage resource allows to build an installation media that can be used to install Elemental onto a node.","sidebar":"docs"},"smbios":{"id":"smbios","title":"","description":"Introduction","sidebar":"docs"},"tpm":{"id":"tpm","title":"","description":"Trusted Platform Module (TPM, also known as ISO/IEC 11889) is an international standard for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. The term can also refer to a chip conforming to the standard."},"troubleshooting-rancher-upgrades":{"id":"troubleshooting-rancher-upgrades","title":"","description":"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see https://github.com/rancher/rancher/issues/41145).","sidebar":"docs"},"troubleshooting-reset":{"id":"troubleshooting-reset","title":"","description":"Each MachineInventory with the elemental.cattle.io/resettable: \\"true\\" annotation will trigger the execution of a reset plan, upon deletion.","sidebar":"docs"},"troubleshooting-restore":{"id":"troubleshooting-restore","title":"","description":"When a restore is performed, do not restart the rancher-system-agent on elemental nodes as it can stale and end with the following error:","sidebar":"docs"},"troubleshooting-upgrade":{"id":"troubleshooting-upgrade","title":"","description":"Upgrade Flow","sidebar":"docs"},"upgrade":{"id":"upgrade","title":"","description":"All components in Elemental are managed using Kubernetes. Below is how","sidebar":"docs"},"wifi":{"id":"wifi","title":"","description":"How to configure Wi-Fi","sidebar":"docs"}}}')}}]);