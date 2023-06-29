"use strict";(self.webpackChunk_storybook_design_system=self.webpackChunk_storybook_design_system||[]).push([[4418],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/Intro.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Intro});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const design_system_namespaceObject=__webpack_require__.p+"static/media/design-system.3b69e6d6.png";const Intro=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",code:"code",h3:"h3",strong:"strong",pre:"pre",ul:"ul",li:"li"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Intro"}),"\n",(0,jsx_runtime.jsx)("img",{src:design_system_namespaceObject,height:"200px"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"get-started",children:"Get started"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Storybook Design System is a reusable component library that helps Storybook contributors build UIs faster. The goal is to make building durable UIs more productive and satisfying."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"install",children:"Install"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["SDS components are written in React, and its stories are written in ",(0,jsx_runtime.jsx)(_components.a,{href:"https://medium.com/storybookjs/component-story-format-66f4c32366df",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component Story Format"}),". It requires Storybook version 5.2-beta and up."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Add SDS to your project."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.code,{children:"npm install --save @storybook/design-system"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"use",children:(0,jsx_runtime.jsx)(_components.strong,{children:"Use"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Import components you want into your UI"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.code,{children:"import { Button, Badge } from '@storybook/design-system';"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"and use them like so"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:'  const example = () => (\n    <div>\n      <Button appearance="primary" onClick={() => 0}>Do something</Button>\n      <Badge onClick={this.clear}>Cool</Badge>\n    </div>\n  )\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"browse-sds-components-in-your-own-storybook",children:(0,jsx_runtime.jsx)(_components.strong,{children:"Browse SDS components in your own Storybook"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Once you add the package, update your .storybook/config.js to import all files ending in .stories.js."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:"  import { configure } from '@storybook/react';\n  configure(require.context('../src', true, /.stories.js$/), module);\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"run-and-develop-sds-locally",children:(0,jsx_runtime.jsx)(_components.strong,{children:"Run and develop SDS locally"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Clone the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/storybookjs/design-system",target:"_blank",rel:"nofollow noopener noreferrer",children:"SDS GitHub project"})," then start Storybook."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.code,{children:"yarn && yarn run storybook"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"used-by",children:"Used by"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://storybook.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook homepage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.learnstorybook.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"LearnStorybook.com"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.chromaticqa.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"ChromaticQA.com"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Note: this package is not used in Storybook's UI, but the visual design is identical."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"resources",children:(0,jsx_runtime.jsx)(_components.strong,{children:"Resources"})}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://medium.com/storybookjs/introducing-storybook-design-system-23fd9b1ac3c0",target:"_blank",rel:"nofollow noopener noreferrer",children:"Introducing Storybook Design System"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/storybookjs/design-system",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub repository"})}),"\n"]})]})}}}}]);