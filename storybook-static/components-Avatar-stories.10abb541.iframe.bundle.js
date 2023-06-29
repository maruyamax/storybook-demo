"use strict";(self.webpackChunk_storybook_design_system=self.webpackChunk_storybook_design_system||[]).push([[394,30],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./src/components/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fC:()=>AvatarType,qE:()=>Avatar});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs")),_shared_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/shared/styles.ts"),_shared_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shared/animation.ts"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["isLoading","username","src","size","type"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var AvatarType,sizes_large=40,sizes_medium=28,sizes_small=20,sizes_tiny=16;!function(AvatarType){AvatarType.USER="user",AvatarType.ORGANIZATION="organization"}(AvatarType||(AvatarType={}));var Image=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.zo)("div",{target:"e14kqdha2"})("background:transparent;border-radius:",(function(props){return props.type===AvatarType.USER?"50%":"5px"}),";display:inline-block;vertical-align:top;overflow:hidden;text-transform:uppercase;height:",sizes_medium,"px;width:",sizes_medium,"px;line-height:",sizes_medium,"px;",(function(props){return props.isLoading&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.iv)("background:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.light,";filter:grayscale(1);")})," ",(function(props){return"tiny"===props.size&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.iv)("height:",sizes_tiny,"px;width:",sizes_tiny,"px;line-height:",sizes_tiny,"px;")})," ",(function(props){return"small"===props.size&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.iv)("height:",sizes_small,"px;width:",sizes_small,"px;line-height:",sizes_small,"px;")})," ",(function(props){return"large"===props.size&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.iv)("height:",sizes_large,"px;width:",sizes_large,"px;line-height:",sizes_large,"px;")})," ",(function(props){return!props.src&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.iv)("background:",!props.isLoading&&"#37D5D3",";")})," img{width:100%;height:auto;display:block;}"),LoadingIcon=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.zo)(_Icon__WEBPACK_IMPORTED_MODULE_4__.J,{target:"e14kqdha1"})("position:relative;margin:0 auto;display:block;bottom:",(function(props){return props.type===AvatarType.USER?-2:-4}),"px;height:",(function(props){return props.type===AvatarType.USER?100:70}),"%;width:",(function(props){return props.type===AvatarType.USER?100:70}),"%;vertical-align:top;path{fill:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.medium,";animation:",_shared_animation__WEBPACK_IMPORTED_MODULE_3__.w5," 1.5s ease-in-out infinite;}"),Initial=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.zo)("div",{target:"e14kqdha0"})("color:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.$_.lightest,";text-align:center;font-size:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.size.s2,"px;line-height:",sizes_medium,"px;",(function(props){return"tiny"===props.size&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.iv)("font-size:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.size.s1-2,"px;line-height:",sizes_tiny,"px;")})," ",(function(props){return"small"===props.size&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.iv)("font-size:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.size.s1,"px;line-height:",sizes_small,"px;")})," ",(function(props){return"large"===props.size&&(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.iv)("font-size:",_shared_styles__WEBPACK_IMPORTED_MODULE_2__.cp.size.s3,"px;line-height:",sizes_large,"px;")}),";"),Avatar=function Avatar(_ref){var _ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,_ref$username=_ref.username,username=void 0===_ref$username?"loading":_ref$username,_ref$src=_ref.src,src=void 0===_ref$src?null:_ref$src,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,_ref$type=_ref.type,type=void 0===_ref$type?AvatarType.USER:_ref$type,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__.Z)(_ref,_excluded),avatarFigure=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LoadingIcon,{icon:type===AvatarType.USER?"useralt":"repository",type}),a11yProps={};return isLoading?(a11yProps["aria-busy"]=!0,a11yProps["aria-label"]="Loading avatar ..."):src?avatarFigure=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img",{src,alt:username}):(a11yProps["aria-label"]=username,avatarFigure=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Initial,{size,"aria-hidden":"true",children:username.substring(0,1)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Image,_objectSpread(_objectSpread(_objectSpread({size,isLoading,src,type},a11yProps),props),{},{children:avatarFigure}))};Avatar.displayName="Avatar";try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"The `Avatar` component is where all your avatars come to play.",displayName:"Avatar",props:{isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},username:{defaultValue:{value:"loading"},description:"The name of the user (not the nice name)",name:"username",required:!1,type:{name:"string"}},src:{defaultValue:{value:"null"},description:"",name:"src",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Specify size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"tiny"'}]}},type:{defaultValue:{value:"AvatarType.USER"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"user"'},{value:'"organization"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/shared/animation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K9:()=>rotate360,T2:()=>jiggle,Ui:()=>easing,ez:()=>inlineGlow,w5:()=>glow});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/shared/styles.ts"),easing={rubber:"cubic-bezier(0.175, 0.885, 0.335, 1.05)"},rotate360=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]))),glow=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"]))),jiggle=((0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"]))),(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"])))),inlineGlow=((0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n"]))),(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.iv)("animation:",glow," 1.5s ease-in-out infinite;background:",_styles__WEBPACK_IMPORTED_MODULE_0__.$_.tr5,";color:transparent;cursor:progress;"))},"./src/components/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,Organization:()=>Organization,Small:()=>Small,Tiny:()=>Tiny,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_Avatar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Avatar.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["src"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import React, { ComponentProps, FunctionComponent } from \'react\';\n\nimport { Avatar, AvatarType } from \'./Avatar\';\n\nexport default {\n  title: \'Avatar\',\n  component: Avatar,\n  args: {\n    type: \'user\',\n  },\n};\n\nconst Base: FunctionComponent<ComponentProps<typeof Avatar>> = ({ src, ...props }) => (\n  <div>\n    <Avatar isLoading {...props} />\n    <Avatar username="Tom Coleman" {...props} />\n    <Avatar\n      username="Tom Coleman"\n      src={src || \'https://avatars2.githubusercontent.com/u/132554\'}\n      {...props}\n    />\n  </div>\n);\n\nexport const Large = () => <Base size="large" />;\n\nexport const Medium = () => <Base />;\n\nexport const Small = () => <Base size="small" />;\n\nexport const Tiny = () => <Base size="tiny" />;\n\nexport const Organization = () => (\n  <Base type={AvatarType.ORGANIZATION} username="Chromatic" src="/chromatic-logo-square.png" />\n);\n',locationsMap:{large:{startLoc:{col:21,line:25},endLoc:{col:48,line:25},startBody:{col:21,line:25},endBody:{col:48,line:25}},medium:{startLoc:{col:22,line:27},endLoc:{col:36,line:27},startBody:{col:22,line:27},endBody:{col:36,line:27}},small:{startLoc:{col:21,line:29},endLoc:{col:48,line:29},startBody:{col:21,line:29},endBody:{col:48,line:29}},tiny:{startLoc:{col:20,line:31},endLoc:{col:46,line:31},startBody:{col:20,line:31},endBody:{col:46,line:31}},organization:{startLoc:{col:28,line:33},endLoc:{col:1,line:35},startBody:{col:28,line:33},endBody:{col:1,line:35}}}}},title:"Avatar",component:_Avatar__WEBPACK_IMPORTED_MODULE_2__.qE,args:{type:"user"}};var Base=function Base(_ref){var src=_ref.src,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_2__.qE,_objectSpread({isLoading:!0},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_2__.qE,_objectSpread({username:"Tom Coleman"},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_2__.qE,_objectSpread({username:"Tom Coleman",src:src||"https://avatars2.githubusercontent.com/u/132554"},props))]})};Base.displayName="Base";var Large=function Large(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Base,{size:"large"})};Large.displayName="Large";var Medium=function Medium(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Base,{})};Medium.displayName="Medium";var Small=function Small(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Base,{size:"small"})};Small.displayName="Small";var Tiny=function Tiny(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Base,{size:"tiny"})};Tiny.displayName="Tiny";var Organization=function Organization(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Base,{type:_Avatar__WEBPACK_IMPORTED_MODULE_2__.fC.ORGANIZATION,username:"Chromatic",src:"/chromatic-logo-square.png"})};Organization.displayName="Organization";var __namedExportsOrder=["Large","Medium","Small","Tiny","Organization"];Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'function Large() {\n  return /*#__PURE__*/_jsx(Base, {\n    size: "large"\n  });\n}',...Large.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"function Medium() {\n  return /*#__PURE__*/_jsx(Base, {});\n}",...Medium.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'function Small() {\n  return /*#__PURE__*/_jsx(Base, {\n    size: "small"\n  });\n}',...Small.parameters?.docs?.source}}},Tiny.parameters={...Tiny.parameters,docs:{...Tiny.parameters?.docs,source:{originalSource:'function Tiny() {\n  return /*#__PURE__*/_jsx(Base, {\n    size: "tiny"\n  });\n}',...Tiny.parameters?.docs?.source}}},Organization.parameters={...Organization.parameters,docs:{...Organization.parameters?.docs,source:{originalSource:'function Organization() {\n  return /*#__PURE__*/_jsx(Base, {\n    type: AvatarType.ORGANIZATION,\n    username: "Chromatic",\n    src: "/chromatic-logo-square.png"\n  });\n}',...Organization.parameters?.docs?.source}}}}}]);