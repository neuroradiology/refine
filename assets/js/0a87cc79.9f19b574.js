"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55905],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||n;return a?o.createElement(g,i(i({ref:t},u),{},{components:a})):o.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},20723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(87462),r=(a(67294),a(3905));a(72335),a(65488),a(85162);const n={title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",slug:"mui-icons-in-react",authors:"doro_onome",tags:["material-ui","react","icons","svg","mui"],image:"/img/blog/2022-08-24-mui-icons/mui-icons-social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/mui-icons-in-react",source:"@site/blog/2022-08-24-mui-icons.md",title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",date:"2022-08-24T00:00:00.000Z",formattedDate:"August 24, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"icons",permalink:"/blog/tags/icons"},{label:"svg",permalink:"/blog/tags/svg"},{label:"mui",permalink:"/blog/tags/mui"}],readingTime:10.06,hasTruncateMarker:!0,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",slug:"mui-icons-in-react",authors:"doro_onome",tags:["material-ui","react","icons","svg","mui"],image:"/img/blog/2022-08-24-mui-icons/mui-icons-social.png",hide_table_of_contents:!1},prevItem:{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering"},nextItem:{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine"},relatedPosts:[{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 26, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.235,date:"2022-10-26T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"October 19, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.315,date:"2022-10-19T00:00:00.000Z"},{title:"How to Become A Production Hero as Developer with Refine in 2022",permalink:"/blog/how-to-become-a-production-hero-refine-2022",formattedDate:"February 21, 2022",authors:[{name:"Melih \xd6zkalay",title:"Frontend Developer",url:"https://github.com/ozkalai",imageURL:"https://github.com/ozkalai.png",key:"ozkalai"}],readingTime:2.04,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.25,date:"2022-09-18T00:00:00.000Z"},{title:"How to use Material UI Select in React",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.29,date:"2022-10-30T00:00:00.000Z"},{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.3,date:"2022-09-05T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"React is the most commonly used frontend framework for creating a responsive web interface. It is accompanied by libraries that provide elements with a means of working together to maximise the aesthetic value of any web design layout effectively. Some of these libraries include Material UI, Ant Design, React-Bootstrap, Semantic UI, Fluent UI, Blueprint UI, e.t.c."))}m.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(67294),r=a(86010);const n="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var o=a(87462),r=a(67294),n=a(86010),i=a(72389),l=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:i,defaultValue:p,values:d,groupId:g,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??h.map((e=>{let{props:{value:t,label:a,attributes:o}}=e;return{value:t,label:a,attributes:o}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,I]=(0,r.useState)(y),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=g){const e=k[g];null!=e&&e!==O&&f.some((t=>t.value===e))&&I(e)}const U=e=>{const t=e.currentTarget,a=D.indexOf(t),o=f[a].value;o!==O&&(T(t),I(o),null!=g&&w(g,String(o)))},R=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;a=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=D[t]??D[D.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":i},b)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>D.push(e),onKeyDown:R,onFocus:U,onClick:U},i,{className:(0,n.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,i.Z)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}},72335:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/package-ae7a4c8d3c36c86d6ee91126afcd4883.png"}}]);