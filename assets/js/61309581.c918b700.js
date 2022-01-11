"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87631],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11122:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"theme",title:"Theme"},l=void 0,c={unversionedId:"guides-and-concepts/theme",id:"version-2.xx.xx/guides-and-concepts/theme",title:"Theme",description:"Ant Design allows you to customize many of its less variables. To be able to theme Ant Design, instead of importing Ant Design's compiled css files, you should import its less files and override the values of less variables contained within these files. You should configure your bundler for handling less files to override its variables.",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/theme.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/theme",permalink:"/docs/guides-and-concepts/theme",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/theme.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"theme",title:"Theme"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Custom Pages",permalink:"/docs/guides-and-concepts/custom-pages"},next:{title:"Tutorial",permalink:"/docs/examples/tutorial"}},p=[{value:"Enabling CRACO",id:"enabling-craco",children:[],level:2},{value:"Overriding Variables",id:"overriding-variables",children:[{value:"Variable overrides in <code>less</code> files",id:"variable-overrides-in-less-files",children:[],level:3},{value:"Variable overrides in <code>craco.config.js</code>",id:"variable-overrides-in-cracoconfigjs",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ant Design allows you to customize many of its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"less variables"),". To be able to theme Ant Design, instead of importing Ant Design's compiled css files, you should import its less files and override the values of ",(0,o.kt)("em",{parentName:"p"},"less variables")," contained within these files. You should configure your bundler for handling less files to override its variables."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/customize-theme"},"Refer to the Ant Design documentation for more information about customizing Ant Design theme. ","\u2192")),(0,o.kt)("p",null,"In this example, we'll be demonstrating theming with ",(0,o.kt)("inlineCode",{parentName:"p"},"less")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gsoft-inc/craco"},"CRACO (Create React App Configuration Override)")," as our customization layer for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},(0,o.kt)("strong",{parentName:"a"},"superplate"))," to initialize your refine projects. It configures the project according to your needs including SSR and Theme with Next.js."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you're not using Create React App and already have a webpack setup, you can refer to Ant Design docs for configuring your setup: ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/customize-theme#Customize-in-webpack"},"Customize in webpack")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you're using Next.js, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/examples/fineFoods/client"},"refer to finefoods client example app for theme configuration"),". It uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SolidZORO/next-plugin-antd-less"},"next-plugin-antd-less")," to customize theme in a Next.js app."))),(0,o.kt)("p",null,"If you're using Create React App, you can easily enable CRACO."),(0,o.kt)("h2",{id:"enabling-craco"},"Enabling CRACO"),(0,o.kt)("p",null,"First you should install CRACO:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @craco/craco --save\n")),(0,o.kt)("p",null,"Then in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file, update the calls from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-scripts")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"craco"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'  "scripts": {\n    "start": "craco start",\n    "build": "craco build",\n    "test": "craco test",\n    "eject": "craco eject"\n  },\n')),(0,o.kt)("p",null,"You can then configure your application with many community maintained CRACO plugins."),(0,o.kt)("p",null,"You also have to install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DocSpring/craco-less"},(0,o.kt)("inlineCode",{parentName:"a"},"craco-less"))," and add it to ",(0,o.kt)("inlineCode",{parentName:"p"},"craco.config.js"),"\xa0to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"less"),"\xa0support."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install craco-less --save\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now you need to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"craco.config.js"),"\xa0file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="craco.config.js"',title:'"craco.config.js"'},'const CracoLessPlugin = require("craco-less");\n\nmodule.exports = {\n    plugins: [\n        {\n            plugin: CracoLessPlugin,\n            options: {\n                lessLoaderOptions: {\n                    lessOptions: {\n                        javascriptEnabled: true,\n                    },\n                },\n            },\n        },\n    ],\n};\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"Create a less file and import antd styles from ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/antd"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-less",metastring:'title="/styles/antd.less"',title:'"/styles/antd.less"'},"@import '~antd/lib/style/themes/default.less';\n@import '~antd/dist/antd.less';\n")),(0,o.kt)("p",null,"And import the ",(0,o.kt)("inlineCode",{parentName:"p"},"less")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, Resource } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport "styles/antd.less";\n\n...\n')),(0,o.kt)("p",null,"Then, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," to start your application. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"craco-less")," is activated, you can load ",(0,o.kt)("inlineCode",{parentName:"p"},"less")," files just like any other ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," file."),(0,o.kt)("h2",{id:"overriding-variables"},"Overriding Variables"),(0,o.kt)("p",null,"All less variables are found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"here"),". Here are some of the major variables you can override:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-less"},"@primary-color: #1890ff; // primary color for all components\n@link-color: #1890ff; // link color\n@success-color: #52c41a; // success state color\n@warning-color: #faad14; // warning state color\n@error-color: #f5222d; // error state color\n@font-size-base: 14px; // major text font size\n@heading-color: rgba(0, 0, 0, 0.85); // heading text color\n@text-color: rgba(0, 0, 0, 0.65); // major text color\n@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color\n@disabled-color: rgba(0, 0, 0, 0.25); // disable state color\n@border-radius-base: 2px; // major border radius\n@border-color-base: #d9d9d9; // major border color\n@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),\n    0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers\n")),(0,o.kt)("p",null,"There are two approaches to override variables."),(0,o.kt)("h3",{id:"variable-overrides-in-less-files"},"Variable overrides in ",(0,o.kt)("inlineCode",{parentName:"h3"},"less")," files"),(0,o.kt)("p",null,"You can just change variables values in ",(0,o.kt)("inlineCode",{parentName:"p"},"less")," files. Add these contents to your ",(0,o.kt)("inlineCode",{parentName:"p"},"/styles/antd.less")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-less",metastring:'title="/styles/antd.less" {0-1, 7}',title:'"/styles/antd.less"',"{0-1,":!0,"7}":!0},"@import '~antd/lib/style/themes/default.less';\n@import '~antd/dist/antd.less';\n\n// There are some major variables below,\n// all less variables could be found in\n// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less\n\n@primary-color: #1da57a;\n")),(0,o.kt)("h3",{id:"variable-overrides-in-cracoconfigjs"},"Variable overrides in ",(0,o.kt)("inlineCode",{parentName:"h3"},"craco.config.js")),(0,o.kt)("p",null,"Or you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"craco.config.js")," to change variable values. To change the variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"@primary-color"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"modifyVars")," property of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DocSpring/craco-less#configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"lessOptions")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="craco.config.js"',title:'"craco.config.js"'},'const CracoLessPlugin = require("craco-less");\n\nmodule.exports = {\n    plugins: [\n        {\n            plugin: CracoLessPlugin,\n            options: {\n                lessLoaderOptions: {\n                    lessOptions: {\n// highlight-next-line\n                        modifyVars: { "@primary-color": "#1DA57A" },\n                        javascriptEnabled: true,\n                    },\n                },\n            },\n        },\n    ],\n};\n')),(0,o.kt)("p",null,"All variable overrides configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"lessOptions.modifyVars")," always have higher precedence than the overrides in ",(0,o.kt)("inlineCode",{parentName:"p"},"less")," files."),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/refine-custom-theme-example-675ig?autoresize=1&fontsize=14&theme=dark&view=editor",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-custom-theme-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0}}]);