"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80046],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return u},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(49211),o=n(33206),d=["components"],p={id:"useModalForm",title:"useModalForm"},m=void 0,s={unversionedId:"api-references/hooks/form/useModalForm",id:"version-2.xx.xx/api-references/hooks/form/useModalForm",title:"useModalForm",description:"useModalForm hook allows you to manage a form within a modal. It returns Ant Design Form and Modal components props.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/form/useModalForm.md",sourceDirName:"api-references/hooks/form",slug:"/api-references/hooks/form/useModalForm",permalink:"/docs/api-references/hooks/form/useModalForm",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/form/useModalForm.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Umut \xd6zdemir",lastUpdatedAt:1638966437,formattedLastUpdatedAt:"12/8/2021",frontMatter:{id:"useModalForm",title:"useModalForm"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useForm",permalink:"/docs/api-references/hooks/form/useForm"},next:{title:"useDrawerForm",permalink:"/docs/api-references/hooks/form/useDrawerForm"}},u=[{value:"Usage",id:"usage",children:[{value:"Create Modal",id:"create-modal",children:[],level:3},{value:"Edit Modal",id:"edit-modal",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],c={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal. It returns Ant Design ",(0,l.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Form")," and ",(0,l.kt)("a",{parentName:"p",href:"https://ant.design/components/modal/"},"Modal")," components props."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { useModalForm } from "@pankod/refine";\n\nconst { modalProps, formProps } = useModalForm<IPost>({\n    action: "create", // or "edit"\n});\n')),(0,l.kt)("p",null,"All we have to do is to pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"modalProps")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"<Modal>")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"formProps")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"<Form>")," components."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,l.kt)("inlineCode",{parentName:"p"},"useModalForm")," is used in both."),(0,l.kt)("h3",{id:"create-modal"},"Create Modal"),(0,l.kt)("p",null,"In this example, we will show you how to create a record with ",(0,l.kt)("inlineCode",{parentName:"p"},"useModalForm"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useModalForm, Modal, Form, Create, Radio, List, Input } from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n// highlight-start\n    const { modalProps, formProps, show } = useModalForm<IPost>({\n        action: "create",\n    });\n// highlight-end\n\n    return (\n        <>\n            <List\n// highlight-start\n                createButtonProps={{\n                    onClick: () => {\n                        show();\n                    },\n                }}\n// highlight-end\n            >\n                ...\n            </List>\n// highlight-start\n            <Modal {...modalProps}>\n                <Form {...formProps} layout="vertical">\n                    <Form.Item label="Title" name="title">\n                        <Input />\n                    </Form.Item>\n                    <Form.Item label="Status" name="status">\n                        <Radio.Group>\n                            <Radio value="draft">Draft</Radio>\n                            <Radio value="published">Published</Radio>\n                            <Radio value="rejected">Rejected</Radio>\n                        </Radio.Group>\n                    </Form.Item>\n                </Form>\n            </Modal>\n// highlight-end\n        </>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"createButtonProps")," allows us to create and manage a button above the table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"    createButtonProps={{\n        onClick: () => {\n            show();\n        },\n    }}\n")),(0,l.kt)("p",null,"This code block makes ",(0,l.kt)("inlineCode",{parentName:"p"},"<Modal>")," appear when you click the button."),(0,l.kt)("div",{class:"img-container"},(0,l.kt)("div",{class:"window"},(0,l.kt)("div",{class:"control red"}),(0,l.kt)("div",{class:"control orange"}),(0,l.kt)("div",{class:"control green"})),(0,l.kt)("img",{src:i.Z,alt:"Create modal action"})),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"edit-modal"},"Edit Modal"),(0,l.kt)("p",null,"Let's learn how to add editing capabilities to records that will be opening form in Modal by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { \n    useModalForm,\n    Modal,\n    Form,\n    Create,\n    Radio,\n    List,\n    Table,\n    EditButton,\n    Input\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const {\n        modalProps,\n        formProps,\n        show,\n        editId,\n    } = useModalForm<IPost>({\n// highlight-next-line\n        action: "edit",\n    });\n\n    return (\n        <>\n            <List>\n                <Table>\n                    ...\n                    <Table.Column<IPost>\n                        title="Actions"\n                        dataIndex="actions"\n                        key="actions"\n                        render={(_value, record) => (\n// highlight-next-line\n                            <EditButton onClick={() => show(record.id)} />\n                        )}\n                    />\n                </Table>\n            </List>\n            <Modal {...modalProps}>\n// highlight-next-line\n                <Form {...formProps} layout="vertical">\n                    <Form.Item label="Title" name="title">\n                        <Input />\n                    </Form.Item>\n                    <Form.Item label="Status" name="status">\n                        <Radio.Group>\n                            <Radio value="draft">Draft</Radio>\n                            <Radio value="published">Published</Radio>\n                            <Radio value="rejected">Rejected</Radio>\n                        </Radio.Group>\n                    </Form.Item>\n                </Form>\n            </Modal>\n        </>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"refine")," doesn't automatically add a edit button to the each record in ",(0,l.kt)("inlineCode",{parentName:"p"},"<PostList>")," which opens edit form in ",(0,l.kt)("inlineCode",{parentName:"p"},"<Modal>")," when clicked."),(0,l.kt)("p",{parentName:"div"},"So, we have to put the edit buttons on our list. In that way, ",(0,l.kt)("inlineCode",{parentName:"p"},"<Edit>")," form in ",(0,l.kt)("inlineCode",{parentName:"p"},"<Modal>")," can fetch data by the record ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column<IPost>\n    title="Actions"\n    dataIndex="actions"\n    key="actions"\n    render={(_value, record) => <EditButton onClick={() => show(record.id)} />}\n/>\n')))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Don't forget to pass the record id to ",(0,l.kt)("inlineCode",{parentName:"p"},"show")," to fetch the record data. This is necessary for both edit and clone forms."))),(0,l.kt)("div",{class:"img-container"},(0,l.kt)("div",{class:"window"},(0,l.kt)("div",{class:"control red"}),(0,l.kt)("div",{class:"control orange"}),(0,l.kt)("div",{class:"control green"})),(0,l.kt)("img",{src:o.Z,alt:"Edit modal action"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action ",(0,l.kt)("div",{className:" required"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of form mode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"create"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"create"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoSubmitClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Close modal after submission"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"form"),(0,l.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,l.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/guides-and-concepts/mutation-mode"},"Determines when mutations are executed"),". If not explicitly configured, it is read from the mutation mode configuration of the resource in current route"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"pessimistic"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"optimistic"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMutationError"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," encounters an error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(error: TError, variables: TVariables, context: any) => void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMutationSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," is successful"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(data: TData, variables: TVariables, context: any) => void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect"),(0,l.kt)("td",{parentName:"tr",align:null},"Page to redirect after a succesfull mutation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"show')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"edit')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},'"list"'),"*","*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"submit"),(0,l.kt)("td",{parentName:"tr",align:null},"Submit the form"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(values?: TVariables) => Promise<TData>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"submitOnEnter"),(0,l.kt)("td",{parentName:"tr",align:null},"Listens ",(0,l.kt)("inlineCode",{parentName:"td"},"Enter")," key press to submit form"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing mutations when ",(0,l.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5000"),"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"warnWhenUnsavedChanges"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows notification when unsaved changes exist"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"),"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,l.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#successerrornotification"},(0,l.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,l.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,l.kt)("inlineCode",{parentName:"td"},"resource"),'" or "Successfully updated ',(0,l.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#successerrornotification"},(0,l.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,l.kt)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,l.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,l.kt)("inlineCode",{parentName:"td"},"statusCode"),')" or "Error when updating ',(0,l.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,l.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metaData"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,l.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#metadataquery"},(0,l.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,l.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,l.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,l.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,l.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,l.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,l.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,l.kt)("strong",{parentName:"p"},"<",(0,l.kt)("a",{parentName:"strong",href:"/docs/api-references/components/refine-config"},"Refine"),">")," component. ",(0,l.kt)("inlineCode",{parentName:"p"},"useModalForm")," will use what is passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"**"),": If not explicitly configured, default value of ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect")," depends on which ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," used. If ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"edit")," (created resources edit page). If ",(0,l.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"edit")," instead, ",(0,l.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),".")),(0,l.kt)("h3",{id:"return-value"},"Return Value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that can open the modal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(id?: string) => void"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Ant Design form props"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#Form"},(0,l.kt)("inlineCode",{parentName:"a"},"FormProps")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modalProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Props for managed modal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ant.design/components/modal/#API"},(0,l.kt)("inlineCode",{parentName:"a"},"ModalProps")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,l.kt)("td",{parentName:"tr",align:null},"Loading status of form"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"submit"),(0,l.kt)("td",{parentName:"tr",align:null},"Submit method, the parameter is the value of the form fields"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the modal dialog is visible or not"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"close"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a function that can close the modal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultFormValuesLoading"),(0,l.kt)("td",{parentName:"tr",align:null},"DefaultFormValues loading status of form"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"form"),(0,l.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,l.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"editId"),(0,l.kt)("td",{parentName:"tr",align:null},"Record id for edit action"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setEditId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"editId")," setter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,l.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,l.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,l.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by submitting the form"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,l.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"TError,"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables; },"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"}," unknown>")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setCloneId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cloneId")," setter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloneId"),(0,l.kt)("td",{parentName:"tr",align:null},"Record id for clone action"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Desription"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TData"),(0,l.kt)("td",{parentName:"tr",align:null},"Result data of the query that extends ",(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#baserecord"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#baserecord"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TError"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#httperror"},(0,l.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#httperror"},(0,l.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,l.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,l.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,l.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-modal-form-example-syf77?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-modal-form-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}k.isMDXComponent=!0},49211:function(e,t,n){t.Z=n.p+"assets/images/create-c09be410e9e780e688fa063032e760df.gif"},33206:function(e,t,n){t.Z=n.p+"assets/images/edit-f310db6858aaf58e88057a347cea406f.gif"}}]);