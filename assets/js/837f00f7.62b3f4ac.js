"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26732],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var r=n(87462),o=n(63366),a=n(67294),i=n(3905),s=n(96421),l=["components"],c={id:"custom-form-validation",title:"Custom Form Validation"},u=void 0,m={unversionedId:"guides-and-concepts/forms/custom-form-validation",id:"version-1.0.xx/guides-and-concepts/forms/custom-form-validation",title:"Custom Form Validation",description:"In refine, we can use the form validation that comes with Ant Design with the rules property of the Form.Item component.",source:"@site/versioned_docs/version-1.0.xx/guides-and-concepts/forms/custom-form-validation.md",sourceDirName:"guides-and-concepts/forms",slug:"/guides-and-concepts/forms/custom-form-validation",permalink:"/docs/1.0.xx/guides-and-concepts/forms/custom-form-validation",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/guides-and-concepts/forms/custom-form-validation.md",tags:[],version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"custom-form-validation",title:"Custom Form Validation"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"CSV Export",permalink:"/docs/1.0.xx/guides-and-concepts/import-export/csv-export"},next:{title:"Mutation Mode",permalink:"/docs/1.0.xx/guides-and-concepts/mutation-mode"}},p=[{value:"Example",id:"example",children:[],level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In refine, we can use the form validation that comes with ",(0,i.kt)("inlineCode",{parentName:"p"},"Ant Design")," with the ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Rule"},"rules")," property of the ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},"Form.Item")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{5-12}","{5-12}":!0},'<Form>\n    <Form.Item\n        label="Title"\n        name="title"\n        rules={[\n            {\n                required: true,\n            },\n            {\n                min: 5,\n            },\n        ]}\n    >\n        <Input />\n    </Form.Item>\n    ...\n</Form>\n')),(0,i.kt)("p",null,"In addition to pre-defined rules, we can also prepare ",(0,i.kt)("strong",{parentName:"p"},"custom rules")," with the validator function."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Now let's prepare a rule that checks if the titles of the posts are unique. We have an endpoint like the below. We will do the uniqueness check here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts-unique-check?title=Example"',title:'"https://api.fake-rest.refine.dev/posts-unique-check?title'},'{\n    "isAvailable": true\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{2, 7-27, 35-51, 53}","{2,":!0,"7-27,":!0,"35-51,":!0,"53}":!0},'import { useState } from "react";\nimport { useApiUrl, useCustom, HttpError, useForm, Form, Create, Input } from "@pankod/refine";\n\nexport const PostCreate = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    const [title, setTitle] = useState("");\n\n    const apiUrl = useApiUrl();\n    const url = `${apiUrl}/posts-unique-check`;\n    const { refetch } = useCustom<\n        PostUniqueCheckResponse,\n        HttpError,\n        PostUniqueCheckRequestQuery\n    >\n    ({\n        url,\n        method: "get",\n        config: {\n            query: {\n                title,\n            },\n        },\n        queryOptions: {\n            enabled: false,\n        },\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                        {\n                            validator: async (_, value) => {\n                                if (!value) return;\n                                const { data } = await refetch();\n                                if (data && data.data.isAvailable) {\n                                    return Promise.resolve();\n                                }\n                                return Promise.reject(\n                                    new Error("\'title\' must be unique"),\n                                );\n                            },\n                        },\n                    ]}\n                >\n                    <Input onChange={(event) => setTitle(event.target.value)} />\n                </Form.Item>\n                ...\n            </Form>\n        </Create>\n    );\n};\n\ninterface IPost {\n    title: string;\n}\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\ninterface PostUniqueCheckRequestQuery {\n    title: string;\n}\n')),(0,i.kt)(a.Fragment,null,(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:s.Z,alt:"custom form validation"})),(0,i.kt)("br",null)),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Value must be kept in the state."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<Input onChange={(event) => setTitle(event.target.value)} />\n")))))}f.isMDXComponent=!0},96421:function(e,t,n){t.Z=n.p+"assets/images/custom-form-validation-1832157ebf6fd2d550ea3cd53b1e971d.gif"}}]);