"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11822],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69623:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return k}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(32388),p=n(81259),l=["components"],s={id:"create",title:"Create"},d=void 0,c={unversionedId:"api-references/components/basic-views/create",id:"version-2.xx.xx/api-references/components/basic-views/create",title:"Create",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page.",source:"@site/versioned_docs/version-2.xx.xx/api-references/components/basic-views/create.md",sourceDirName:"api-references/components/basic-views",slug:"/api-references/components/basic-views/create",permalink:"/docs/api-references/components/basic-views/create",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/basic-views/create.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"create",title:"Create"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"List",permalink:"/docs/api-references/components/basic-views/list"},next:{title:"Show",permalink:"/docs/api-references/components/basic-views/show"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",children:[],level:3},{value:"<code>actionButtons</code>",id:"actionbuttons",children:[],level:3},{value:"<code>pageHeaderProps</code>",id:"pageheaderprops",children:[],level:3},{value:"<code>resource</code>",id:"resource",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],m={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like action buttons and giving titles to the page."),(0,o.kt)("p",null,"We'll show what ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," does using properties with examples."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("p",null,"It allows adding title inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>"),' component. if you don\'t pass title props it uses "Create" prefix and singular resource name by default. For example, for the ',(0,o.kt)("inlineCode",{parentName:"p"},"/posts/create"),' resource, it will be "Create post".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Create } from "@pankod/refine";\n\nexport const CreatePage: React.FC = () => {\n    return <Create title="Custom Title">...</Create>;\n};\n')),(0,o.kt)("h3",{id:"savebuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component has a default button that submits the form. If you want to customize this button you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," property like the code below."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/components/buttons/save-button"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<SaveButton>")," documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Create } from "@pankod/refine";\n\nexport const CreatePage: React.FC = () => {\n    return <Create saveButtonProps={{ size: "small" }}>...</Create>;\n};\n')),(0,o.kt)("h3",{id:"actionbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"actionButtons")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," uses the Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/card"},(0,o.kt)("inlineCode",{parentName:"a"},"<Card>"))," component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Card>")," component shows ",(0,o.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," based on your resource definition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property you pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),". If you want to use other things instead of these buttons, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"actionButton")," property like the code below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Create, Button } from "@pankod/refine";\n\nexport const CreatePage: React.FC = () => {\n    return (\n        <Create\n            actionButtons={\n                <>\n                    <Button type="primary">Custom Button 1</Button>\n                    <Button size="small">Custom Button 2</Button>\n                </>\n            }\n        >\n            ...\n        </Create>\n    );\n};\n')),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:p.Z,alt:"actionButton Usage"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"pageheaderprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"pageHeaderProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," uses the Ant Design ",(0,o.kt)("inlineCode",{parentName:"p"},"<PageHeader>")," components so you can customize with the props of ",(0,o.kt)("inlineCode",{parentName:"p"},"pageHeaderProps"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/page-header/#API"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<PageHeader>")," documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Create } from "@pankod/refine";\n\nexport const CreatePage: React.FC = () => {\n    return (\n        <Create\n            pageHeaderProps={{\n                onBack: () => console.log("Hello, refine"),\n                subTitle: "Subtitle",\n            }}\n        >\n            ...\n        </Create>\n    );\n};\n')),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"pageHeaderProps Usage"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Create>")," component in a custom page, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Create } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst CustomPage = () => {\n    return <Create resource="posts">...</Create>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        exact: true,\n                        component: CustomPage,\n                        path: "/custom",\n                    },\n                ]\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds props for create button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading: boolean; }")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<SaveButton>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds title"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Edit"')," prefix and singular of ",(0,o.kt)("inlineCode",{parentName:"td"},"resource.name"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"actionButtons"),(0,o.kt)("td",{parentName:"tr",align:null},"Passes the props for ",(0,o.kt)("inlineCode",{parentName:"td"},"<PageHeader>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,o.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pageHeaderProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Passes the props for ",(0,o.kt)("inlineCode",{parentName:"td"},"<PageHeader>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/page-header/#API"},"PageHeaderProps")),(0,o.kt)("td",{parentName:"tr",align:null},"{ ghost: false, ",(0,o.kt)("a",{parentName:"td",href:"#title"},"title"),", extra: ",(0,o.kt)("inlineCode",{parentName:"td"},"<ListButton>")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")," }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resource"),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the URL.")))))}k.isMDXComponent=!0},81259:function(e,t,n){t.Z=n.p+"assets/images/actionButtonsUsage-4e101c7c8f9cc94625909ef9f1bde35f.png"},32388:function(e,t,n){t.Z=n.p+"assets/images/pageHeaderPropsUsage-0e6ed83dec95469f6cb870640cc52395.png"}}]);