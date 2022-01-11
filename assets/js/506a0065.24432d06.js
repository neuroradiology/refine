"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15920],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45826:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(21827),i=["components"],s={id:"useModal",title:"useModal"},d=void 0,p={unversionedId:"api-references/hooks/ui/useModal",id:"version-2.xx.xx/api-references/hooks/ui/useModal",title:"useModal",description:"useModal hook allows you to manage a modal. It returns the props to manage Ant Design's Modal components.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/ui/useModal.md",sourceDirName:"api-references/hooks/ui",slug:"/api-references/hooks/ui/useModal",permalink:"/docs/api-references/hooks/ui/useModal",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/ui/useModal.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useModal",title:"useModal"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useExport",permalink:"/docs/api-references/hooks/import-export/useExport"},next:{title:"<Refine>",permalink:"/docs/api-references/components/refine-config"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Return Value",id:"return-value",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModal")," hook allows you to manage a modal. It returns the props to manage Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/modal/#API"},"Modal")," components. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { modalProps, show, close } = useModal();\n")),(0,r.kt)("p",null,"You can pass the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"modalProps")," as props to ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/modal/#API"},"Modal")," component and use ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," methods to hide and show it. It does not provide any functionality besides this. You can use this hook anywhere."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's see an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n    List,\n    Table,\n    useTable,\n// highlight-start\n    useModal,\n    Modal,\n// highlight-end\n    Button,\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n// highlight-next-line\n    const { modalProps, show, close } = useModal();\n\n    return (\n        <>\n            <List\n                pageHeaderProps={{\n                    extra: <Button onClick={show}>Show Dummy Modal</Button>,\n                }}\n            >\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" />\n                    <Table.Column dataIndex="title" title="Title" />\n                    <Table.Column dataIndex="content" title="Content" />\n                </Table>\n            </List>\n// highlight-start\n            <Modal onOk={close} {...modalProps}>\n                Dummy Modal Content\n            </Modal>\n// highlight-end\n        </>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    content: string;\n}\n')),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:l.Z,alt:"use modal usage"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Here, we show a button somewhere on the page and use ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," on it's ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick")," callback to trigger opening of the modal below the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. When the user clicks on the button, the modal appears."),(0,r.kt)("p",null,"We also used ",(0,r.kt)("inlineCode",{parentName:"p"},"onOk")," callback from Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/modal/#API"},"Modal")," to add ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," as a callback on it's button. When the user clicks on this button, thus triggering ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," function, the modal dialog will be closed. We do this to demonstrate ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," function."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modalProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Props for managed modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/modal/#API"},(0,r.kt)("inlineCode",{parentName:"a"},"ModalProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that can open the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a function that can close the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-modal-example-ghdhl?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-modal-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0},21827:function(e,t,n){t.Z=n.p+"assets/images/useModal-b117d2c1f42f6ff60a15f2aaa8a4f981.gif"}}]);