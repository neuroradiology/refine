"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),h=a,u=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(u,o(o({ref:t},c),{},{components:n})):i.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var i=n(87462),a=(n(67294),n(3905));const r={title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",slug:"javascript-some-method",authors:"abdullah_numan",tags:["javascript","javascript-some"],image:"/img/blog/2022-10-25-js-some/social.png",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/javascript-some-method",source:"@site/blog/2022-10-25-js-some.md",title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",date:"2022-10-25T00:00:00.000Z",formattedDate:"October 25, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"javascript-some",permalink:"/blog/tags/javascript-some"}],readingTime:8.015,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",slug:"javascript-some-method",authors:"abdullah_numan",tags:["javascript","javascript-some"],image:"/img/blog/2022-10-25-js-some/social.png",hide_table_of_contents:!1},prevItem:{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref"},nextItem:{title:"A Guide to useContext and React Context API",permalink:"/blog/usecontext-and-react-context"},relatedPosts:[{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.62,date:"2022-02-21T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every() Method",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.685,date:"2022-11-02T00:00:00.000Z"}],authorPosts:[{title:"A Definitive guide on JavaScript every() Method",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.685,date:"2022-11-02T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.55,date:"2022-09-30T00:00:00.000Z"},{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide",formattedDate:"September 20, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.565,date:"2022-09-20T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is JavaScript some method?",id:"what-is-javascript-some-method",level:2},{value:"How <code>Array.prototype.some()</code> Works",id:"how-arrayprototypesome-works",level:2},{value:"JavaScript <code>some()</code> With <code>thisArg</code> Argument",id:"javascript-some-with-thisarg-argument",level:2},{value:"<code>some(callback, thisArg)</code> Doesn&#39;t Work With Arrow Functions",id:"somecallback-thisarg-doesnt-work-with-arrow-functions",level:2},{value:"<code>some(callback, thisArg)</code> Works With Non-Arrow Functions",id:"somecallback-thisarg-works-with-non-arrow-functions",level:2},{value:"Modifying the Caller Array",id:"modifying-the-caller-array",level:2},{value:"Conclusion",id:"conclusion",level:2}],c=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const p={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about the ",(0,a.kt)("inlineCode",{parentName:"p"},"some()")," method in JavaScript. This is the second part of the series titled ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/javascript-slice/"},"Handy JavaScript Iteration Methods"),". "),(0,a.kt)("p",null,"In this post, we explore with examples what the ",(0,a.kt)("strong",{parentName:"p"},"JavaScript some")," is, how it works - with and without the ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg")," and see the impact of modifying the caller array from inside."),(0,a.kt)("p",null,"We'll discuss things in quite depth, so let's start with the basics."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-javascript-some-method"},"What is JavaScript some method?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-arrayprototypesome-works"},"How ",(0,a.kt)("inlineCode",{parentName:"a"},"Array.prototype.some()")," Works")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#javascript-some-with-thisarg-argument"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"a"},"some()")," With ",(0,a.kt)("inlineCode",{parentName:"a"},"thisArg")," Argument")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#somecallback-thisarg-doesnt-work-with-arrow-functions"},(0,a.kt)("inlineCode",{parentName:"a"},"some(callback, thisArg)")," Doesn't Work With Arrow Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#somecallback-thisarg-works-with-non-arrow-functions"},(0,a.kt)("inlineCode",{parentName:"a"},"some(callback, thisArg)")," Works With Non-Arrow Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#modifying-the-caller-array"},"Modifying the Caller Array"))),(0,a.kt)("h2",{id:"what-is-javascript-some-method"},"What is JavaScript some method?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.some()")," is a JavaScript iteration method that checks whether any one element in an array satisfies a given condition. The method is called on an array of items and the condition is checked with a callback function and any necessary ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg")," object passed to the execution context of the callback function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Method signature\n\nsome(callbackFn)\nsome(callbackFn, thisArg)\n")),(0,a.kt)("p",null,"The first argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"callbackFn"),", is mandatory and the second argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg"),", is optional."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"callbackFn"),", in turn, takes three arguments. The first is the element being traversed to, ",(0,a.kt)("inlineCode",{parentName:"p"},"element"),", which is mandatory. The second argument is the current index, ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," and the third is ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),", the array being iterated. Both the second and third arguments are optional:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Method signature\n\nsome(function(element){...});\nsome(function(element, index){...});\nsome(function(element, index, array){...});\n")),(0,a.kt)("h2",{id:"how-arrayprototypesome-works"},"How ",(0,a.kt)("inlineCode",{parentName:"h2"},"Array.prototype.some()")," Works"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JavaScript some")," tests whether there is one element that satisfies the condition set in the callback function, ",(0,a.kt)("inlineCode",{parentName:"p"},"callbackFn"),". It attempts to execute the callback function once for each item in the array. If it finds one that evaluates to a truthy value for ",(0,a.kt)("inlineCode",{parentName:"p"},"callbackFn"),", it returns with the Boolean ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Otherwise, it seeks to traverse to the end of the array returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," if all are falsy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\n\nconst even = element => element % 2 === 0;\nconst isThereEvenNumber = numbers.some(even);\n\nconsole.log(isThereEvenNumber); // true\n")),(0,a.kt)("p",null,"In the chunk of code above, ",(0,a.kt)("inlineCode",{parentName:"p"},"even()")," is our callback function, which we pass in to ",(0,a.kt)("inlineCode",{parentName:"p"},"some()"),". Apparently, we have at least one even number in our ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers")," array. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"some()")," returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"javascript-some-with-thisarg-argument"},"JavaScript ",(0,a.kt)("inlineCode",{parentName:"h2"},"some()")," With ",(0,a.kt)("inlineCode",{parentName:"h2"},"thisArg")," Argument"),(0,a.kt)("p",null,"We can pass in the ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg")," object to JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"some()")," to add it to the execution context of the callback function. Let's try doing that by making some modifications to our callback."),(0,a.kt)("p",null,"Instead of checking for an even number, let's say we want to generalize our callback function to check if the item is divisible by a given number. We would like our callback to be something like the below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function divisible(element, divisor) {\n  return element % divisor === 0;\n};\n")),(0,a.kt)("p",null,"However, we cannot pass ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor")," as the second argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()"),", as our callback accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," as the second and third arguments, respectively. And it becomes overcrowded if we introduce a fourth with ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor"),"."),(0,a.kt)("p",null,"We can get around this problem by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor")," as a property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg")," object, the second argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"every()"),". And then access the object with ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," from inside the callback:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\n\nfunction divisible(element) {\n  return element % this?.divisor === 0;\n};\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber); // true\n")),(0,a.kt)("p",null,"Here, we set the ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg")," object to ",(0,a.kt)("inlineCode",{parentName:"p"},"{ divisor: 2 }"),", which basically leads to checking if the item is even or not."),(0,a.kt)("p",null,"We can try other divisor options, like checking if we have a number divisible by 3 or 7. Thanks to ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg"),", this has become very easy now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const isThereAnyDivisibleByThree = numbers.some(divisible, { divisor: 3 });\nconst isThereAnyDivisibleBySeven = numbers.some(divisible, { divisor: 7 });\n\nconsole.log(isThereAnyDivisibleByThree); // true\nconsole.log(isThereAnyDivisibleBySeven); // false\n")),(0,a.kt)("hr",null),(0,a.kt)(c,{title:"Backend devs love this React framework!",image:"/img/mui_banner.png",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"somecallback-thisarg-doesnt-work-with-arrow-functions"},(0,a.kt)("inlineCode",{parentName:"h2"},"some(callback, thisArg)")," Doesn't Work With Arrow Functions"),(0,a.kt)("p",null,"If we look back at the first example that involves the ",(0,a.kt)("inlineCode",{parentName:"p"},"even()")," callback, we define it as an arrow function. And it worked."),(0,a.kt)("p",null,"We defined its extension, the ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()")," function with named declaration syntax. And it worked as well."),(0,a.kt)("p",null,"If we declare ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()")," as an arrow function, we run into problems:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const divisible = element => element % this?.divisor === 0;\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\nconst isThereAnyDivisibleByThree = numbers.some(divisible, { divisor: 3 });\nconst isThereAnyDivisibleBySeven = numbers.some(divisible, { divisor: 7 });\n\nconsole.log(isThereEvenNumber); // false\nconsole.log(isThereAnyDivisibleByThree); // false\nconsole.log(isThereAnyDivisibleBySeven); // false\n")),(0,a.kt)("p",null,"All returning ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", although we expect two to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and one to be ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"If we investigate the problem with a modified ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()")," function that logs ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," to the console, we see that ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," in strict mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// strict mode\n\nconst numbers = [1, 2, 3, 4, 5];\n\nconst divisible = element => {\n  console.log(this);\n  return element % this?.divisor === 0;\n};\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber);\n// undefined\n// undefined\n// undefined\n// undefined\n// undefined\n// false\n")),(0,a.kt)("p",null,"Now, if we introduce a ",(0,a.kt)("inlineCode",{parentName:"p"},"this.divisor")," property to the lexical environment of ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()"),", we get its value logged to the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\nthis.divisor = 'Hi';\n\nconst divisible = element => {\n  console.log(this);\n  return element % this.divisor === 0;\n};\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber);\n// { divisor: 'Hi' }\n// { divisor: 'Hi' }\n// { divisor: 'Hi' }\n// { divisor: 'Hi' }\n// { divisor: 'Hi' }\n// false\n")),(0,a.kt)("p",null,"Here, clearly, we have ",(0,a.kt)("inlineCode",{parentName:"p"},"{ divisor: 'Hi' }")," coming from ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()"),"'s closure. It turns out, the problem is due to the binding of ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," to it's lexical environment because of the arrow syntax. It was ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," before we introduced ",(0,a.kt)("inlineCode",{parentName:"p"},"this.divisor = 'Hi';"),". Now ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"{ divisor: 'Hi' }"),". In other words, ",(0,a.kt)("inlineCode",{parentName:"p"},"{ divisor: 2 "),"} is not being relayed to ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,a.kt)("p",null,"So, ",(0,a.kt)("inlineCode",{parentName:"p"},"some()")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg")," does not work as expected with ",(0,a.kt)("inlineCode",{parentName:"p"},"callbackFn")," defined with arrow syntax."),(0,a.kt)("h2",{id:"somecallback-thisarg-works-with-non-arrow-functions"},(0,a.kt)("inlineCode",{parentName:"h2"},"some(callback, thisArg)")," Works With Non-Arrow Functions"),(0,a.kt)("p",null,"But as we have seen before, it works with callbacks defined with named function declarations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function divisible(element) {\n  return element % this?.divisor === 0;\n};\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber); // true\n")),(0,a.kt)("p",null,"It also works with anonymous function expressions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const divisible = function(element) {\n  return element % this?.divisor === 0;\n};\n\nconst isThereEvenNumber = numbers.some(divisible, { divisor: 2 });\n\nconsole.log(isThereEvenNumber); // true\n")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"modifying-the-caller-array"},"Modifying the Caller Array"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JavaScript some method")," sets the range of the items to be processed before the first invocation of the callback function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"some()")," itself does not modify the caller array, but the caller is available to the callback function as its third argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),". And if an item is changed after traversal, the change is disregarded by the callback function. That is, the callback function only respects the existing value of an item at the time it is visited."),(0,a.kt)("p",null,"We can witness this in a scenario where the caller array is mutated from inside ",(0,a.kt)("inlineCode",{parentName:"p"},"some()"),"."),(0,a.kt)("p",null,"JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"some()")," itself does not modify the caller array, but the caller is available to the callback function as its third argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),". This means we can deliberately mutate the caller when we need to from inside our callback, ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function divisible(element, index, array) {\n  array[0] = 7;\n  array[4] = 7;\n  console.log(array);\n  return element % this?.divisor === 0;\n};\n")),(0,a.kt)("p",null,"In this scenario, if an unvisited item is changed ahead of time, the callback function - here ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()")," - finds the new value when it visits the item and so the new value is processed. In contrast, it disregards changes to items that are already traversed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const divisible = function(element, index, array) {\n  array[0] = 7;\n  array[4] = 7;\n\n  console.log(array);\n\n  return element % this?.divisor === 0;\n};\n\nconst isDivisibleBySeven = numbers.some(divisible, { divisor: 7 });\n\nconsole.log(isDivisibleBySeven);\nconsole.log(numbers);\n/*\n  [ 7, 2, 3, 4, 7 ]\n  [ 7, 2, 3, 4, 7 ]\n  [ 7, 2, 3, 4, 7 ]\n  [ 7, 2, 3, 4, 7 ]\n  [ 7, 2, 3, 4, 7 ]\n  true\n  [ 7, 2, 3, 4, 7 ]\n*/\n")),(0,a.kt)("p",null,"In the console log statements above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers")," array is being logged five times due to the ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log(array);")," statement we placed inside ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()"),"."),(0,a.kt)("p",null,"As we can see, ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers")," is being mutated twice in the first call to ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible()"),". The first mutation happens when at ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers[0]"),", i.e. after being visited, which changes the value of itself to ",(0,a.kt)("inlineCode",{parentName:"p"},"7"),". So, even though it was divisible by the divisor ",(0,a.kt)("inlineCode",{parentName:"p"},"7"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"some()")," didn't immediately return ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Instead, it returned ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in the next instance when it visited the unvisited and mutated value of ",(0,a.kt)("inlineCode",{parentName:"p"},"7")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers[4]"),"."),(0,a.kt)("p",null,"This shows that the callback function processes the value of an item as it finds it at traversal and disregards the changes made to it when and after it is at that index."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we focused on ",(0,a.kt)("strong",{parentName:"p"},"JavaScript some")," method which helps us test whether an array has at least one item that passes the test we implement using a callback function. We saw that the callback function could take only three arguments, and additional arguments can be bound to its execution context by setting its ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," value with a ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg")," passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"some()"),"."),(0,a.kt)("p",null,"We also found out that if we use arrow syntax to declare the callback function, its lexical context binding messes with the binding of ",(0,a.kt)("inlineCode",{parentName:"p"},"thisArg")," to its ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," object. So, we should be using non-arrow functions to declare a callback function that uses ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"."))}h.isMDXComponent=!0}}]);