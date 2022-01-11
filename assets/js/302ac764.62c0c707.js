"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61766],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27504:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return h},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(6286),s=n(69318),l=n(63085),p=n(76416),c=["components"],d={id:"multi-tenancy",title:"Multitenancy"},u=void 0,m={unversionedId:"guides-and-concepts/multi-tenancy",id:"guides-and-concepts/multi-tenancy",title:"Multitenancy",description:"What is Multitenancy?",source:"@site/docs/guides-and-concepts/multi-tenant.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/multi-tenancy",permalink:"/docs/next/guides-and-concepts/multi-tenancy",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/multi-tenant.md",tags:[],version:"current",lastUpdatedBy:"Melih Ekinci",lastUpdatedAt:1641478466,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"multi-tenancy",title:"Multitenancy"},sidebar:"someSidebar",previous:{title:"Sign in with Ethereum Web3 Wallet",permalink:"/docs/next/guides-and-concepts/web3/ethereum-signin"},next:{title:"Mutation Mode",permalink:"/docs/next/guides-and-concepts/mutation-mode"}},h=[{value:"What is Multitenancy?",id:"what-is-multitenancy",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Create Collections",id:"create-collections",children:[],level:2},{value:"Store Context",id:"store-context",children:[],level:2},{value:"Shop Select to Sider Component",id:"shop-select-to-sider-component",children:[],level:2},{value:"Product List Page",id:"product-list-page",children:[],level:2},{value:"Product Create Page",id:"product-create-page",children:[],level:2},{value:"Bonus - Realtime Feature",id:"bonus---realtime-feature",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],g={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-multitenancy"},"What is Multitenancy?"),(0,a.kt)("p",null,"Multitenancy refers to a kind of architecture where a single instance of software runs on a server and serves multiple customers. In a multi-tenant environment, separate customers tap into the same hardware and data storage, creating a dedicated instance for each customer. Each tenant\u2019s data is isolated and remains invisible to others, but is running on the same server."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this guide, we will create an application with you in the logic of Multi Tenant(Multitenancy). We can say multi tenant application is to separate and manage multiple contents independently from each other in a single application."),(0,a.kt)("p",null,"We will make a Cake House application using ",(0,a.kt)("strong",{parentName:"p"},"refine")," and ",(0,a.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite"),". Our Cake House will consist of two separate stores and there will be special products for these stores. We will explain step by step how to manage these stores, products and orders separately."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This guide has been prepared assuming you know the basics of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". If you haven't learned these basics yet, we recommend reading the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorial"),"."))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pankod/refine-appwrite\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine";\nimport { dataProvider } from "@pankod/refine-appwrite";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport { appwriteClient } from "utility";\nimport { authProvider } from "./authProvider";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            //highlight-start\n            dataProvider={dataProvider(appwriteClient)}\n            authProvider={authProvider}\n            //highlight-end\n            routerProvider={routerProvider}\n        />\n    );\n};\n')),(0,a.kt)("h2",{id:"create-collections"},"Create Collections"),(0,a.kt)("p",null,"We need three collections for our Cake House application. Let's create these collections in the appwrite database."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/data-provider/appwrite/#create-collections"},"Check out how you can create collections with refine Appwrite guide \u2192")))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"Collections"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stores")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title: text")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"products")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title: text"),(0,a.kt)("li",{parentName:"ul"},"Description: text"),(0,a.kt)("li",{parentName:"ul"},"Image: wilcard"),(0,a.kt)("li",{parentName:"ul"},"StoreId: text")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"orders")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ProductId: text"),(0,a.kt)("li",{parentName:"ul"},"Customer Name: text"),(0,a.kt)("li",{parentName:"ul"},"Customer Address: text"),(0,a.kt)("li",{parentName:"ul"},"Status: text"),(0,a.kt)("li",{parentName:"ul"},"Quantitiy: numeric"),(0,a.kt)("li",{parentName:"ul"},"StoreId: text")),(0,a.kt)("p",null,"Now that we have completed the setup and our collections, we can now log in with the ",(0,a.kt)("strong",{parentName:"p"},"refine")," and start the listing processes."),(0,a.kt)("h2",{id:"store-context"},"Store Context"),(0,a.kt)("p",null,"In order to view the products and orders of two different stores separately, we need to filter by storeId. We will use the storeId information in more than one place. For example, when creating a store-specific order."),(0,a.kt)("p",null,"For this reason, we will create a ",(0,a.kt)("a",{parentName:"p",href:"https://en.reactjs.org/docs/context.html"},"React Context")," and keep the storeId state information in it and send it to the relevant ",(0,a.kt)("strong",{parentName:"p"},"refine")," components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { createContext, useState } from "react";\n\nexport const StoreContext = createContext<any[]>([]);\n\nexport const StoreProvider = (props: any) => {\n    const [store, setStore] = useState("61cdb05132609");\n\n    return <StoreContext.Provider value={[store, setStore]} {...props} />;\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport { dataProvider } from "@pankod/refine-appwrite";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport { appwriteClient } from "utility";\nimport { authProvider } from "./authProvider";\n\nimport { StoreProvider } from "context/store";\n\nconst App: React.FC = () => {\n    return (\n          //highlight-start\n        <StoreProvider>\n            <Refine\n                dataProvider={dataProvider(appwriteClient)}\n                authProvider={authProvider}\n                routerProvider={routerProvider}\n            />\n        <StoreProvider>\n         //highlight-end\n    );\n};\n')),(0,a.kt)("h2",{id:"shop-select-to-sider-component"},"Shop Select to Sider Component"),(0,a.kt)("p",null,"We will create a select component in the Sider Menu where the user will select the stores. Let's create our select component first, then let's see how we can define it in the ",(0,a.kt)("strong",{parentName:"p"},"refine")," Sider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="scr/components/select/StoreSelect.tsx"',title:'"scr/components/select/StoreSelect.tsx"'},'import { useContext } from "react";\nimport { Select, useSelect } from "@pankod/refine";\n\nimport { StoreContext } from "context/store";\nimport { IStore } from "interfaces";\n\ntype SelectProps = {\n    onSelect: () => void;\n};\n\nexport const StoreSelect: React.FC<SelectProps> = ({ onSelect }) => {\n    //highlight-start\n    const [store, setStore] = useContext(StoreContext);\n    //highlight-end\n\n    const { selectProps: storeSelectProps } = useSelect<IStore>({\n        resource: "61cd62db95f92",\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n    //highlight-start\n    const handleChange = (selectedValue: string) => {\n        setStore(selectedValue);\n    };\n    //highlight-end\n\n    return (\n        <Select\n            defaultValue={store}\n            style={{ width: 130 }}\n            onChange={handleChange}\n            onSelect={onSelect}\n        >\n            {storeSelectProps.options?.map(({ value, label }) => (\n                <Select.Option key={value} value={value}>\n                    {label}\n                </Select.Option>\n            ))}\n        </Select>\n    );\n};\n')),(0,a.kt)("p",null,"Here we have created a select component. Then we fetch the store id and title we created in the Appwrite database with ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect"),". Now we can place the store information we have in the state we created in the Store Context."),(0,a.kt)("p",null,"Let's define the select component in the ",(0,a.kt)("strong",{parentName:"p"},"refine")," Sider Menu. First, we need to customize the default Sider."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/examples/customization/customSider/"},"Check out how you can customize Sider Menu \u2192")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/sider/CustomSider.tsx"',title:'"src/components/sider/CustomSider.tsx"'},'import React, { useState } from "react";\nimport {\n    AntdLayout,\n    Menu,\n    useMenu,\n    useTitle,\n    useNavigation,\n    Grid,\n    Icons,\n} from "@pankod/refine";\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nimport { StoreSelect } from "components/select";\n\nexport const CustomSider: React.FC = () => {\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n    const { push } = useNavigation();\n\n    const isMobile = !breakpoint.lg;\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={({ key }) => {\n                    push(key as string);\n                }}\n            >\n                //highlight-start\n                <Menu.Item\n                    key={selectedKey}\n                    icon={<Icons.AppstoreAddOutlined />}\n                >\n                    <StoreSelect\n                        onSelect={() => {\n                            setCollapsed(true);\n                        }}\n                    />\n                </Menu.Item>\n                //highlight-end\n                {menuItems.map(({ icon, label, route }) => {\n                    const isSelected = route === selectedKey;\n                    return (\n                        <Menu.Item\n                            style={{\n                                fontWeight: isSelected ? "bold" : "normal",\n                            }}\n                            key={route}\n                            icon={icon}\n                        >\n                            <div\n                                style={{\n                                    display: "flex",\n                                    justifyContent: "space-between",\n                                    alignItems: "center",\n                                }}\n                            >\n                                {label}\n                                {!collapsed && isSelected && (\n                                    <Icons.RightOutlined />\n                                )}\n                            </div>\n                        </Menu.Item>\n                    );\n                })}\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n')))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:s.Z,alt:"sider"})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("em",{parentName:"td"},"As you can see, you can now choose the store you want and create products and orders specifically for the store we have chosen according to the storeId information."))))),(0,a.kt)("h2",{id:"product-list-page"},"Product List Page"),(0,a.kt)("p",null,"Now we can list the products of the selected store according to the storeId information by filtering it. We can do this filtering by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"permanetFilter")," property within the ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useSimpleList")," hook."),(0,a.kt)("p",null,"We separate the products of different stores by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"permanentFilter")," with the storeId we get from the Store Context. So we can control more than single content in one application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'//highlight-start\nconst [store] = useContext(StoreContext);\n//highlight-end\nconst { listProps } = useSimpleList<IProduct>({\n    //highlight-start\n    permanentFilter: [{ field: "storeId", operator: "eq", value: store }],\n    //highlight-end\n});\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/ProductList.tsx"',title:'"src/pages/ProductList.tsx"'},'import { useContext } from "react";\nimport {\n    IResourceComponentsProps,\n    useSimpleList,\n    AntdList,\n    useModalForm,\n    useDrawerForm,\n    CreateButton,\n    List,\n} from "@pankod/refine";\n\nimport { IProduct } from "interfaces";\nimport { ProductItem } from "components/product";\nimport { StoreContext } from "context/store";\n\nexport const ProductList: React.FC<IResourceComponentsProps> = () => {\n    //highlight-start\n    const [store] = useContext(StoreContext);\n    const { listProps } = useSimpleList<IProduct>({\n        permanentFilter: [{ field: "storeId", operator: "eq", value: store }],\n    });\n    //highlight-end\n\n    return (\n        <>\n            <List\n                pageHeaderProps={{\n                    extra: <CreateButton onClick={() => createShow()} />,\n                }}\n            >\n                <AntdList\n                    grid={{ gutter: 16, xs: 1 }}\n                    style={{\n                        justifyContent: "center",\n                    }}\n                    {...listProps}\n                    renderItem={(item) => (\n                        <AntdList.Item>\n                            <ProductItem item={item} editShow={editShow} />\n                        </AntdList.Item>\n                    )}\n                />\n            </List>\n        </>\n    );\n};\n')))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:l.Z,alt:"Store Filter"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"product-create-page"},"Product Create Page"),(0,a.kt)("p",null,"Now let's see how we can create store-specific products. Which store we choose in Sider, the product we will create will automatically be the product of the selected store."),(0,a.kt)("p",null,"By overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"onFinish")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"form")," and sending the selected storeId, we specify which store it will be the product of."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//highlight-start\nconst [store] = useContext(StoreContext);\n// highlight-end\n\n<Form\n    {...formProps}\n    ...\n     //highlight-start\n    onFinish={(values) => {\n        return (\n            formProps.onFinish?.({\n                ...values,\n                storeId: store,\n            })\n        );\n    }}\n    //highlight-end\n>\n...\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CreateProduct"',title:'"CreateProduct"'},'import {\n    Create,\n    Drawer,\n    DrawerProps,\n    Form,\n    FormProps,\n    Input,\n    ButtonProps,\n    Upload,\n    Grid,\n    RcFile,\n} from "@pankod/refine";\n\nimport { appwriteClient, normalizeFile } from "utility";\nimport { StoreContext } from "context/store";\nimport { useContext } from "react";\n\ntype CreateProductProps = {\n    drawerProps: DrawerProps;\n    formProps: FormProps;\n    saveButtonProps: ButtonProps;\n};\n\nexport const CreateProduct: React.FC<CreateProductProps> = ({\n    drawerProps,\n    formProps,\n    saveButtonProps,\n}) => {\n    const breakpoint = Grid.useBreakpoint();\n    //highlight-start\n    const [store, setStore] = useContext(StoreContext);\n    // highlight-end\n\n    return (\n        <Drawer\n            {...drawerProps}\n            width={breakpoint.sm ? "500px" : "100%"}\n            bodyStyle={{ padding: 0 }}\n        >\n            <Create saveButtonProps={saveButtonProps}>\n                <Form\n                    {...formProps}\n                    layout="vertical"\n                    initialValues={{\n                        isActive: true,\n                    }}\n                    //highlight-start\n                    onFinish={(values) => {\n                        return (\n                            formProps.onFinish?.({\n                                ...values,\n                                storeId: store,\n                            })\n                        );\n                    }}\n                    //highlight-end\n                >\n                    <Form.Item\n                        label="Title"\n                        name="title"\n                        rules={[\n                            {\n                                required: true,\n                            },\n                        ]}\n                    >\n                        <Input />\n                    </Form.Item>\n                    <Form.Item label="Description" name="description">\n                        <Input />\n                    </Form.Item>\n\n                    <Form.Item label="Images">\n                        <Form.Item\n                            name="image"\n                            valuePropName="fileList"\n                            normalize={normalizeFile}\n                            noStyle\n                            rules={[\n                                {\n                                    required: true,\n                                },\n                            ]}\n                        >\n                            <Upload.Dragger\n                                name="file"\n                                listType="picture"\n                                multiple\n                                customRequest={async ({\n                                    file,\n                                    onError,\n                                    onSuccess,\n                                }) => {\n                                    try {\n                                        const rcFile = file as RcFile;\n\n                                        const { $id } =\n                                            await appwriteClient.storage.createFile(\n                                                rcFile,\n                                                ["*"],\n                                                ["*"],\n                                            );\n\n                                        const url =\n                                            appwriteClient.storage.getFileView(\n                                                $id,\n                                            );\n\n                                        onSuccess?.(\n                                            { url },\n                                            new XMLHttpRequest(),\n                                        );\n                                    } catch (error) {\n                                        onError?.(new Error("Upload Error"));\n                                    }\n                                }}\n                            >\n                                <p className="ant-upload-text">\n                                    Drag &amp; drop a file in this area\n                                </p>\n                            </Upload.Dragger>\n                        </Form.Item>\n                    </Form.Item>\n                </Form>\n            </Create>\n        </Drawer>\n    );\n};\n')))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:p.Z,alt:"create"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"bonus---realtime-feature"},"Bonus - Realtime Feature"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>")),". It can be used to update and show data in Realtime throughout your app. ",(0,a.kt)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,a.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,a.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", etc.) to be integrated."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-references/providers/live-provider/"},"Refer to the Live Provider documentation for detailed information. \u2192")),(0,a.kt)("p",null,"Appwrite Realtime API support is out-of-the-box supported by ",(0,a.kt)("strong",{parentName:"p"},"refine"),", just add two lines to make your App Realtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine";\nimport { dataProvider, liveProvider } from "@pankod/refine-appwrite";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { appwriteClient } from "utility";\nimport { authProvider } from "./authProvider";\n\nimport { CustomSider } from "components/sider";\nimport { Login } from "pages/login";\nimport { ProductList } from "pages/products";\nimport { ProductShow } from "components/product";\nimport { StoreProvider } from "context/store";\n\nfunction App() {\n    return (\n        <StoreProvider>\n            <Refine\n                routerProvider={routerProvider}\n                //highlight-start\n                liveProvider={liveProvider(appwriteClient)}\n                liveMode="auto"\n                //highlight-end\n                dataProvider={dataProvider(appwriteClient)}\n                authProvider={authProvider}\n                LoginPage={Login}\n                Sider={CustomSider}\n                resources={[\n                    {\n                        name: "61cb01b17ef57",\n                        list: ProductList,\n                        show: ProductShow,\n                        options: {\n                            label: "Products",\n                            route: "products",\n                        },\n                    },\n                ]}\n            />\n        </StoreProvider>\n    );\n}\n\nexport default App;\n')),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this guide and in our example app, we talked about how we can build Multitenancy apps with ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Developing a Multitenancy application with ",(0,a.kt)("strong",{parentName:"p"},"refine")," is quite simple. By creating a context and with the hooks that ",(0,a.kt)("strong",{parentName:"p"},"refine")," provides, you can quickly and easily produce similar applications in this logic."),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/cake-house-cvco9?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"cake-house",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}f.isMDXComponent=!0},6286:function(e,t,n){t.Z=n.p+"assets/images/collections-060c17b17ccd1c96c066d9d2e63f2a96.png"},76416:function(e,t,n){t.Z=n.p+"assets/images/create-2633e0147b6503a773f7beef0ca9e7f5.gif"},69318:function(e,t,n){t.Z=n.p+"assets/images/sider-69180e475051cb5d2f8ddc5b2ddd9027.png"},63085:function(e,t,n){t.Z=n.p+"assets/images/store-filter-793409bd1bc4aa86e172e0270ac8a77d.gif"}}]);