"use strict";(self.webpackChunk_storybook_design_system=self.webpackChunk_storybook_design_system||[]).push([[5912,30],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./src/components/tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs")),_shared_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shared/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","zIndex"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ifPlacementEquals=function ifPlacementEquals(props,placement,value){var fallback=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return props["data-placement"].split("-")[0]===placement?value:fallback},Arrow=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.zo)("div",{target:"e1sfricw1"})("position:absolute;border-style:solid;display:",(function(props){return props.isVisible?"block":"none"}),";",(function(props){return(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.iv)("margin-bottom:",ifPlacementEquals(props,"top",0,8),"px;margin-top:",ifPlacementEquals(props,"bottom",0,8),"px;margin-right:",ifPlacementEquals(props,"left",0,8),"px;margin-left:",ifPlacementEquals(props,"right",0,8),"px;bottom:",ifPlacementEquals(props,"top",-8,"auto"),"px;top:",ifPlacementEquals(props,"bottom",-8,"auto"),"px;right:",ifPlacementEquals(props,"left",-8,"auto"),"px;left:",ifPlacementEquals(props,"right",-8,"auto"),"px;border-bottom-width:",ifPlacementEquals(props,"top",0,8),"px;border-top-width:",ifPlacementEquals(props,"bottom",0,8),"px;border-right-width:",ifPlacementEquals(props,"left",0,8),"px;border-left-width:",ifPlacementEquals(props,"right",0,8),"px;border-top-color:",ifPlacementEquals(props,"top","white","transparent"),";border-bottom-color:",ifPlacementEquals(props,"bottom","white","transparent"),";border-left-color:",ifPlacementEquals(props,"left","white","transparent"),";border-right-color:",ifPlacementEquals(props,"right","white","transparent"),";")}),";"),TooltipWrapper=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.zo)("div",{target:"e1sfricw0"})("display:",(function(props){return props.hidden?"none":"inline-block"}),";z-index:",(function(props){return props.zIndex}),";",(function(props){return!props.hasChrome&&"\n      margin-bottom: ".concat(ifPlacementEquals(props,"top",8),"px;\n      margin-bottom: ").concat(ifPlacementEquals(props,"top-start",8),"px;\n      margin-top: ").concat(ifPlacementEquals(props,"bottom",8),"px;\n      margin-top: ").concat(ifPlacementEquals(props,"bottom-start",8),"px;\n      margin-left: ").concat(ifPlacementEquals(props,"right",8),"px;\n      margin-right: ").concat(ifPlacementEquals(props,"left",8),"px;\n    ")}),";",(function(props){return props.hasChrome&&"\n      margin-bottom: ".concat(ifPlacementEquals(props,"top",10),"px;\n      margin-top: ").concat(ifPlacementEquals(props,"bottom",10),"px;\n      margin-left: ").concat(ifPlacementEquals(props,"right",10),"px;\n      margin-right: ").concat(ifPlacementEquals(props,"left",10),"px;\n\n      background: rgba(255, 255, 255, 0.97);\n\n      filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.05)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.1));\n      border-radius: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.W0.borderRadius.small,"px;\n      font-size: ").concat(_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.size.s1,"px;\n    ")}),";"),Tooltip=function Tooltip(_ref){var _ref$placement=_ref.placement,placement=void 0===_ref$placement?"top":_ref$placement,_ref$hasChrome=_ref.hasChrome,hasChrome=void 0===_ref$hasChrome||_ref$hasChrome,children=_ref.children,arrowProps=_ref.arrowProps,tooltipRef=_ref.tooltipRef,arrowRef=_ref.arrowRef,_ref$zIndex=_ref.zIndex,zIndex=void 0===_ref$zIndex?_shared_styles__WEBPACK_IMPORTED_MODULE_2__.W5.tooltip:_ref$zIndex,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TooltipWrapper,_objectSpread(_objectSpread({hasChrome,"data-placement":placement,ref:tooltipRef,zIndex},props),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Arrow,_objectSpread({isVisible:hasChrome,"data-placement":placement,ref:arrowRef},arrowProps)),children]}))};Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{hasChrome:{defaultValue:{value:"true"},description:"",name:"hasChrome",required:!1,type:{name:"boolean"}},arrowProps:{defaultValue:null,description:"",name:"arrowProps",required:!1,type:{name:"{ theme?: Theme; as?: ElementType<any>; } & ArrowProps & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { ...; }"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left-start"'}]}},arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!1,type:{name:"any"}},tooltipRef:{defaultValue:null,description:"",name:"tooltipRef",required:!1,type:{name:"any"}},zIndex:{defaultValue:{value:"2147483647"},description:"",name:"zIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basicDefault:()=>basicDefault,basicDefaultBottom:()=>basicDefaultBottom,basicDefaultLeft:()=>basicDefaultLeft,basicDefaultRight:()=>basicDefaultRight,default:()=>__WEBPACK_DEFAULT_EXPORT__,noChrome:()=>noChrome});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs")),_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/tooltip/Tooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var mockPopperProps={style:{position:"relative",top:"0px",left:"0px"}},Content=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.zo)("div",{target:"etc6f6l0"})({name:"1lyzz3u",styles:"width:100px;height:100px;font-size:16px;text-align:center;line-height:100px;outline:1px dotted red"});const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React from 'react';\nimport { styled } from '@storybook/theming';\nimport { Tooltip } from './Tooltip';\n\n// Popper would position the tooltip absolutely. We just need to make sure we are pos:rel\nconst mockPopperProps = { style: { position: 'relative', top: '0px', left: '0px' } };\n\nconst Content = styled.div`\n  width: 100px;\n  height: 100px;\n  font-size: 16px;\n  text-align: center;\n  line-height: 100px;\n  outline: 1px dotted red;\n`;\n\nexport default {\n  title: 'tooltip/Tooltip',\n  component: Tooltip,\n  decorators: [\n    (storyFn) => (\n      <div style={{ padding: '1em', background: '#eee', display: 'inline-block' }}>{storyFn()}</div>\n    ),\n  ],\n};\n\nexport const basicDefault = () => (\n  <Tooltip hasChrome {...mockPopperProps}>\n    <Content>Text</Content>\n  </Tooltip>\n);\n\nbasicDefault.storyName = 'basic, default';\n\nexport const basicDefaultBottom = () => (\n  <Tooltip hasChrome placement=\"bottom\" {...mockPopperProps}>\n    <Content>Text</Content>\n  </Tooltip>\n);\n\nbasicDefaultBottom.storyName = 'basic, default, bottom';\n\nexport const basicDefaultLeft = () => (\n  <Tooltip hasChrome placement=\"left\" {...mockPopperProps}>\n    <Content>Text</Content>\n  </Tooltip>\n);\n\nbasicDefaultLeft.storyName = 'basic, default, left';\n\nexport const basicDefaultRight = () => (\n  <Tooltip placement=\"right\" {...mockPopperProps}>\n    <Content>Text</Content>\n  </Tooltip>\n);\n\nbasicDefaultRight.storyName = 'basic, default, right';\n\nexport const noChrome = () => (\n  <Tooltip hasChrome={false} {...mockPopperProps}>\n    <Content>Text</Content>\n  </Tooltip>\n);\n\nnoChrome.storyName = 'no chrome';\n",locationsMap:{"basic-default":{startLoc:{col:28,line:27},endLoc:{col:1,line:31},startBody:{col:28,line:27},endBody:{col:1,line:31}},"basic-default-bottom":{startLoc:{col:34,line:35},endLoc:{col:1,line:39},startBody:{col:34,line:35},endBody:{col:1,line:39}},"basic-default-left":{startLoc:{col:32,line:43},endLoc:{col:1,line:47},startBody:{col:32,line:43},endBody:{col:1,line:47}},"basic-default-right":{startLoc:{col:33,line:51},endLoc:{col:1,line:55},startBody:{col:33,line:51},endBody:{col:1,line:55}},"no-chrome":{startLoc:{col:24,line:59},endLoc:{col:1,line:63},startBody:{col:24,line:59},endBody:{col:1,line:63}}}}},title:"tooltip/Tooltip",component:_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,decorators:[function(storyFn){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{padding:"1em",background:"#eee",display:"inline-block"},children:storyFn()})}]};var basicDefault=function basicDefault(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,_objectSpread(_objectSpread({hasChrome:!0},mockPopperProps),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Content,{children:"Text"})}))};basicDefault.displayName="basicDefault",basicDefault.storyName="basic, default";var basicDefaultBottom=function basicDefaultBottom(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,_objectSpread(_objectSpread({hasChrome:!0,placement:"bottom"},mockPopperProps),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Content,{children:"Text"})}))};basicDefaultBottom.displayName="basicDefaultBottom",basicDefaultBottom.storyName="basic, default, bottom";var basicDefaultLeft=function basicDefaultLeft(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,_objectSpread(_objectSpread({hasChrome:!0,placement:"left"},mockPopperProps),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Content,{children:"Text"})}))};basicDefaultLeft.displayName="basicDefaultLeft",basicDefaultLeft.storyName="basic, default, left";var basicDefaultRight=function basicDefaultRight(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,_objectSpread(_objectSpread({placement:"right"},mockPopperProps),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Content,{children:"Text"})}))};basicDefaultRight.displayName="basicDefaultRight",basicDefaultRight.storyName="basic, default, right";var noChrome=function noChrome(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.u,_objectSpread(_objectSpread({hasChrome:!1},mockPopperProps),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Content,{children:"Text"})}))};noChrome.displayName="noChrome",noChrome.storyName="no chrome";var __namedExportsOrder=["basicDefault","basicDefaultBottom","basicDefaultLeft","basicDefaultRight","noChrome"];basicDefault.parameters={...basicDefault.parameters,docs:{...basicDefault.parameters?.docs,source:{originalSource:'function basicDefault() {\n  return /*#__PURE__*/_jsx(Tooltip, _objectSpread(_objectSpread({\n    hasChrome: true\n  }, mockPopperProps), {}, {\n    children: /*#__PURE__*/_jsx(Content, {\n      children: "Text"\n    })\n  }));\n}',...basicDefault.parameters?.docs?.source}}},basicDefaultBottom.parameters={...basicDefaultBottom.parameters,docs:{...basicDefaultBottom.parameters?.docs,source:{originalSource:'function basicDefaultBottom() {\n  return /*#__PURE__*/_jsx(Tooltip, _objectSpread(_objectSpread({\n    hasChrome: true,\n    placement: "bottom"\n  }, mockPopperProps), {}, {\n    children: /*#__PURE__*/_jsx(Content, {\n      children: "Text"\n    })\n  }));\n}',...basicDefaultBottom.parameters?.docs?.source}}},basicDefaultLeft.parameters={...basicDefaultLeft.parameters,docs:{...basicDefaultLeft.parameters?.docs,source:{originalSource:'function basicDefaultLeft() {\n  return /*#__PURE__*/_jsx(Tooltip, _objectSpread(_objectSpread({\n    hasChrome: true,\n    placement: "left"\n  }, mockPopperProps), {}, {\n    children: /*#__PURE__*/_jsx(Content, {\n      children: "Text"\n    })\n  }));\n}',...basicDefaultLeft.parameters?.docs?.source}}},basicDefaultRight.parameters={...basicDefaultRight.parameters,docs:{...basicDefaultRight.parameters?.docs,source:{originalSource:'function basicDefaultRight() {\n  return /*#__PURE__*/_jsx(Tooltip, _objectSpread(_objectSpread({\n    placement: "right"\n  }, mockPopperProps), {}, {\n    children: /*#__PURE__*/_jsx(Content, {\n      children: "Text"\n    })\n  }));\n}',...basicDefaultRight.parameters?.docs?.source}}},noChrome.parameters={...noChrome.parameters,docs:{...noChrome.parameters?.docs,source:{originalSource:'function noChrome() {\n  return /*#__PURE__*/_jsx(Tooltip, _objectSpread(_objectSpread({\n    hasChrome: false\n  }, mockPopperProps), {}, {\n    children: /*#__PURE__*/_jsx(Content, {\n      children: "Text"\n    })\n  }));\n}',...noChrome.parameters?.docs?.source}}}}}]);