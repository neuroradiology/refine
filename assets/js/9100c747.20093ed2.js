"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11690],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),b=a,m=f["".concat(c,".").concat(b)]||f[b]||u[b]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3597:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return b}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(95153),n(15061),n(50004),n(71657),n(6972),n(67075),n(66799),n(77108),["components"]),l={title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",slug:"create-full-stack-app-with-refine",authors:"melih",tags:["refine","react","next.js","full-stack","web-app","b2b","admin-panel"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},c=void 0,s={permalink:"/blog/create-full-stack-app-with-refine",source:"@site/blog/2022-04-29-create-full-stack-app.md",title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",date:"2022-04-29T00:00:00.000Z",formattedDate:"April 29, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"next.js",permalink:"/blog/tags/next-js"},{label:"full-stack",permalink:"/blog/tags/full-stack"},{label:"web-app",permalink:"/blog/tags/web-app"},{label:"b2b",permalink:"/blog/tags/b-2-b"},{label:"admin-panel",permalink:"/blog/tags/admin-panel"}],readingTime:8.54,truncated:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],prevItem:{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",permalink:"/blog/10-high-quality-free-resources"},nextItem:{title:"The Advantages and Disadvantages of Working on Open Source Projects",permalink:"/blog/open-source-advantages-disadvantages"}},p={authorsImageUrls:[void 0]},u=[],f={toc:u};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We frequently require quick development and sometimes flexibility while developing a Full Stack application. Aside from speed and flexibility, we must establish the application architecture correctly at the start so that we are not subjected to any more needless work throughout the development process."),(0,i.kt)("p",null,"In this article, we will use the ",(0,i.kt)("strong",{parentName:"p"},"refine")," framework to develop a full stack application. ",(0,i.kt)("strong",{parentName:"p"},"Refine")," will provide us with the speed and flexibility we are looking for, while assisting with the overall project architecture during web application development."))}b.isMDXComponent=!0},6972:function(e,t,n){t.Z=n.p+"assets/images/client_home-7cbd85223fb1536341c04adb91423459.png"},71657:function(e,t,n){t.Z=n.p+"assets/images/client_menu-9c67d0b7f9788d560cdfcf8d04975bf5.png"},15061:function(e,t,n){t.Z=n.p+"assets/images/create-9c452f8ddf0b8448bed241a1e8130b53.gif"},67075:function(e,t,n){t.Z=n.p+"assets/images/dashboard-c545e7b32ddfd19e305adb6e93ba3a15.png"},50004:function(e,t,n){t.Z=n.p+"assets/images/first-a11d25a6866c1aaa5bba44e1b4e75a73.png"},66799:function(e,t,n){t.Z=n.p+"assets/images/products-c52e1d5cca261aa624a6706f47df6a66.png"},77108:function(e,t,n){t.Z=n.p+"assets/images/reviews-064ab8636aae3443b7b4523d4bf88bdc.png"},95153:function(e,t,n){t.Z=n.p+"assets/images/benchmark-86c224f2232bb9d7874bcc071612b6bf.png"}}]);