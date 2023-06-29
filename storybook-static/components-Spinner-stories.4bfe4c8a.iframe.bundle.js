"use strict";(self.webpackChunk_storybook_design_system=self.webpackChunk_storybook_design_system||[]).push([[7385],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./src/components/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs")),_shared_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shared/styles.ts"),_shared_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shared/animation.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var _ref={name:"10dq8pw",styles:"border-color:rgba(255, 255, 255, 0.2);border-top-color:rgba(255, 255, 255, 0.4)"},SpinnerWrapper=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.zo)("div",{target:"e1lbuirv0"})("border-radius:3em;cursor:progress;display:inline-block;overflow:hidden;position:relative;transition:all 200ms ease-out;vertical-align:top;position:absolute;top:50%;left:50%;margin-top:-16px;margin-left:-16px;height:32px;width:32px;animation:",_shared_animation__WEBPACK_IMPORTED_MODULE_3__.K9," 0.7s linear infinite;border-width:2px;border-style:solid;border-color:rgba(0, 0, 0, 0.03);border-top-color:rgba(0, 0, 0, 0.15);",(function(props){return props.inverse&&_ref}),";",(function(props){return props.inForm&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("margin-top:-6px;margin-left:-6px;height:12px;width:12px;border:1px solid ",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary,";border-bottom-color:transparent;")}),";",(function(props){return props.inline&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("position:relative;top:initial;left:initial;margin-top:initial;margin-left:initial;vertical-align:middle;height:8px;width:8px;border:1px solid;border-top-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary,";border-left-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary,";border-right-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.secondary,";border-bottom-color:transparent;",props.positive&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("border-top-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.positive,";border-left-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.positive,";border-right-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.positive,";"),";",props.negative&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("border-top-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.red,";border-left-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.red,";border-right-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.red,";"),";",props.neutral&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("border-top-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.dark,";border-left-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.dark,";border-right-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.dark,";"),";",props.inverse&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.iv)("border-top-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";border-left-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";border-right-color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";"),";")}),";"),Spinner=function Spinner(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SpinnerWrapper,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({"aria-label":"Content is loading ...","aria-live":"polite",role:"status"},props))};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},inverse:{defaultValue:null,description:"",name:"inverse",required:!1,type:{name:"boolean"}},inForm:{defaultValue:null,description:"",name:"inForm",required:!1,type:{name:"boolean"}},positive:{defaultValue:null,description:"",name:"positive",required:!1,type:{name:"boolean"}},negative:{defaultValue:null,description:"",name:"negative",required:!1,type:{name:"boolean"}},neutral:{defaultValue:null,description:"",name:"neutral",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/shared/animation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K9:()=>rotate360,T2:()=>jiggle,Ui:()=>easing,ez:()=>inlineGlow,w5:()=>glow});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/shared/styles.ts"),easing={rubber:"cubic-bezier(0.175, 0.885, 0.335, 1.05)"},rotate360=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]))),glow=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"]))),jiggle=((0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"]))),(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"])))),inlineGlow=((0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n"]))),(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.iv)("animation:",glow," 1.5s ease-in-out infinite;background:",_styles__WEBPACK_IMPORTED_MODULE_0__.$_.tr5,";color:transparent;cursor:progress;"))},"./src/components/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InForm:()=>InForm,Inline:()=>Inline,InlineInverse:()=>InlineInverse,InlineNegative:()=>InlineNegative,InlineNeutral:()=>InlineNeutral,InlinePositive:()=>InlinePositive,Inverse:()=>Inverse,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Spinner.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React from 'react';\nimport { Spinner } from './Spinner';\n\nexport default {\n  title: 'Spinner',\n  component: Spinner,\n};\n\nexport const Default = () => (\n  <div style={{ background: 'white', padding: '1.5em', position: 'relative' }}>\n    <Spinner />\n  </div>\n);\n\nexport const Inverse = () => (\n  <div style={{ background: 'black', padding: '1.5em', position: 'relative' }}>\n    <Spinner inverse />\n  </div>\n);\n\nexport const InForm = () => (\n  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>\n    <Spinner inForm />\n  </div>\n);\n\nexport const Inline = () => (\n  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>\n    <Spinner inline />\n  </div>\n);\n\nexport const InlinePositive = () => (\n  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>\n    <Spinner inline positive />\n  </div>\n);\n\nexport const InlineNegative = () => (\n  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>\n    <Spinner inline negative />\n  </div>\n);\n\nexport const InlineNeutral = () => (\n  <div style={{ background: '#eee', padding: '1.5em', position: 'relative' }}>\n    <Spinner inline neutral />\n  </div>\n);\n\nexport const InlineInverse = () => (\n  <div style={{ background: 'black', padding: '1.5em', position: 'relative' }}>\n    <Spinner inline inverse />\n  </div>\n);\n",locationsMap:{default:{startLoc:{col:23,line:9},endLoc:{col:1,line:13},startBody:{col:23,line:9},endBody:{col:1,line:13}},inverse:{startLoc:{col:23,line:15},endLoc:{col:1,line:19},startBody:{col:23,line:15},endBody:{col:1,line:19}},"in-form":{startLoc:{col:22,line:21},endLoc:{col:1,line:25},startBody:{col:22,line:21},endBody:{col:1,line:25}},inline:{startLoc:{col:22,line:27},endLoc:{col:1,line:31},startBody:{col:22,line:27},endBody:{col:1,line:31}},"inline-positive":{startLoc:{col:30,line:33},endLoc:{col:1,line:37},startBody:{col:30,line:33},endBody:{col:1,line:37}},"inline-negative":{startLoc:{col:30,line:39},endLoc:{col:1,line:43},startBody:{col:30,line:39},endBody:{col:1,line:43}},"inline-neutral":{startLoc:{col:29,line:45},endLoc:{col:1,line:49},startBody:{col:29,line:45},endBody:{col:1,line:49}},"inline-inverse":{startLoc:{col:29,line:51},endLoc:{col:1,line:55},startBody:{col:29,line:51},endBody:{col:1,line:55}}}}},title:"Spinner",component:_Spinner__WEBPACK_IMPORTED_MODULE_1__.$};var Default=function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"white",padding:"1.5em",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_1__.$,{})})};Default.displayName="Default";var Inverse=function Inverse(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"black",padding:"1.5em",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_1__.$,{inverse:!0})})};Inverse.displayName="Inverse";var InForm=function InForm(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"#eee",padding:"1.5em",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_1__.$,{inForm:!0})})};InForm.displayName="InForm";var Inline=function Inline(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"#eee",padding:"1.5em",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_1__.$,{inline:!0})})};Inline.displayName="Inline";var InlinePositive=function InlinePositive(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"#eee",padding:"1.5em",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_1__.$,{inline:!0,positive:!0})})};InlinePositive.displayName="InlinePositive";var InlineNegative=function InlineNegative(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"#eee",padding:"1.5em",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_1__.$,{inline:!0,negative:!0})})};InlineNegative.displayName="InlineNegative";var InlineNeutral=function InlineNeutral(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"#eee",padding:"1.5em",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_1__.$,{inline:!0,neutral:!0})})};InlineNeutral.displayName="InlineNeutral";var InlineInverse=function InlineInverse(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"black",padding:"1.5em",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_1__.$,{inline:!0,inverse:!0})})};InlineInverse.displayName="InlineInverse";var __namedExportsOrder=["Default","Inverse","InForm","Inline","InlinePositive","InlineNegative","InlineNeutral","InlineInverse"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default() {\n  return /*#__PURE__*/_jsx(\"div\", {\n    style: {\n      background: 'white',\n      padding: '1.5em',\n      position: 'relative'\n    },\n    children: /*#__PURE__*/_jsx(Spinner, {})\n  });\n}",...Default.parameters?.docs?.source}}},Inverse.parameters={...Inverse.parameters,docs:{...Inverse.parameters?.docs,source:{originalSource:"function Inverse() {\n  return /*#__PURE__*/_jsx(\"div\", {\n    style: {\n      background: 'black',\n      padding: '1.5em',\n      position: 'relative'\n    },\n    children: /*#__PURE__*/_jsx(Spinner, {\n      inverse: true\n    })\n  });\n}",...Inverse.parameters?.docs?.source}}},InForm.parameters={...InForm.parameters,docs:{...InForm.parameters?.docs,source:{originalSource:"function InForm() {\n  return /*#__PURE__*/_jsx(\"div\", {\n    style: {\n      background: '#eee',\n      padding: '1.5em',\n      position: 'relative'\n    },\n    children: /*#__PURE__*/_jsx(Spinner, {\n      inForm: true\n    })\n  });\n}",...InForm.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:"function Inline() {\n  return /*#__PURE__*/_jsx(\"div\", {\n    style: {\n      background: '#eee',\n      padding: '1.5em',\n      position: 'relative'\n    },\n    children: /*#__PURE__*/_jsx(Spinner, {\n      inline: true\n    })\n  });\n}",...Inline.parameters?.docs?.source}}},InlinePositive.parameters={...InlinePositive.parameters,docs:{...InlinePositive.parameters?.docs,source:{originalSource:"function InlinePositive() {\n  return /*#__PURE__*/_jsx(\"div\", {\n    style: {\n      background: '#eee',\n      padding: '1.5em',\n      position: 'relative'\n    },\n    children: /*#__PURE__*/_jsx(Spinner, {\n      inline: true,\n      positive: true\n    })\n  });\n}",...InlinePositive.parameters?.docs?.source}}},InlineNegative.parameters={...InlineNegative.parameters,docs:{...InlineNegative.parameters?.docs,source:{originalSource:"function InlineNegative() {\n  return /*#__PURE__*/_jsx(\"div\", {\n    style: {\n      background: '#eee',\n      padding: '1.5em',\n      position: 'relative'\n    },\n    children: /*#__PURE__*/_jsx(Spinner, {\n      inline: true,\n      negative: true\n    })\n  });\n}",...InlineNegative.parameters?.docs?.source}}},InlineNeutral.parameters={...InlineNeutral.parameters,docs:{...InlineNeutral.parameters?.docs,source:{originalSource:"function InlineNeutral() {\n  return /*#__PURE__*/_jsx(\"div\", {\n    style: {\n      background: '#eee',\n      padding: '1.5em',\n      position: 'relative'\n    },\n    children: /*#__PURE__*/_jsx(Spinner, {\n      inline: true,\n      neutral: true\n    })\n  });\n}",...InlineNeutral.parameters?.docs?.source}}},InlineInverse.parameters={...InlineInverse.parameters,docs:{...InlineInverse.parameters?.docs,source:{originalSource:"function InlineInverse() {\n  return /*#__PURE__*/_jsx(\"div\", {\n    style: {\n      background: 'black',\n      padding: '1.5em',\n      position: 'relative'\n    },\n    children: /*#__PURE__*/_jsx(Spinner, {\n      inline: true,\n      inverse: true\n    })\n  });\n}",...InlineInverse.parameters?.docs?.source}}}}}]);