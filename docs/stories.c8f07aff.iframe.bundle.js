"use strict";(self.webpackChunklabeled_switch_material_ui=self.webpackChunklabeled_switch_material_ui||[]).push([[552],{"./node_modules/ios-switch-material-ui/lib/IosSwitchMaterialUi.js":function(__unused_webpack_module,exports,__webpack_require__){var extendStatics,__extends=this&&this.__extends||(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])})(d,b)},function(d,b){if("function"!=typeof b&&null!==b)throw TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__("./node_modules/react/index.js")),styles={knob:{borderRadius:"50%",position:"relative",transition:"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},switch:{display:"inline-block",transition:"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}},IosSwitchMaterialUi=function(_super){function IosSwitchMaterialUi(props){var _this=_super.call(this,props)||this;return _this.handleChange=function(){var _a=_this.props,disabled=_a.disabled,onChange=_a.onChange;if(!disabled){var newKnobOnLeft=!_this.isKnobOnLeft();void 0===_this.props.knobOnLeft&&_this.setState({knobOnLeft:newKnobOnLeft}),onChange&&onChange(newKnobOnLeft)}},_this.isKnobOnLeft=function(){return void 0!==_this.props.knobOnLeft?_this.props.knobOnLeft:_this.state.knobOnLeft},_this.state={knobOnLeft:props.knobOnLeft||props.defaultKnobOnLeft||!1},_this}return __extends(IosSwitchMaterialUi,_super),IosSwitchMaterialUi.prototype.render=function(){return React.createElement("div",{onClick:this.handleChange,style:this.getStyleForSwitch()},React.createElement("div",{style:this.getStyleForKnob()}))},IosSwitchMaterialUi.prototype.getStyleForSwitch=function(){var disabled=this.props.disabled,backgroundColor=this.getSwitchColor(),knobSize=this.getKnobSize(),switchWidth=this.getSwitchWidth(),switchHeight=this.getSwitchHeight();return __assign(__assign({},styles.switch),{backgroundColor:backgroundColor,borderRadius:knobSize,cursor:disabled?void 0:"pointer",height:switchHeight,minHeight:switchHeight,minWidth:switchWidth,opacity:disabled?.4:1,top:2,width:switchWidth})},IosSwitchMaterialUi.prototype.getSwitchColor=function(){var colorSwitch=this.props.colorSwitch;return isEmpty(colorSwitch)?"#e2e2e2":colorSwitch},IosSwitchMaterialUi.prototype.getSwitchWidth=function(){return this.getAspectRatio()*this.getSwitchHeight()},IosSwitchMaterialUi.prototype.getAspectRatio=function(){return this.props.aspectRatio||2},IosSwitchMaterialUi.prototype.getSwitchHeight=function(){return this.getKnobSize()+4},IosSwitchMaterialUi.prototype.getKnobSize=function(){return this.props.knobSize||18},IosSwitchMaterialUi.prototype.getStyleForKnob=function(){var knobOnLeft=this.isKnobOnLeft(),backgroundColor=this.getKnobColor(knobOnLeft),knobSize=this.getKnobSize(),switchWidth=this.getSwitchWidth();return __assign(__assign({},styles.knob),{backgroundColor:backgroundColor,height:knobSize,left:knobOnLeft?2:switchWidth-knobSize-2,top:2,width:knobSize})},IosSwitchMaterialUi.prototype.getKnobColor=function(knobOnLeft){var _a=this.props,colorKnobOnLeft=_a.colorKnobOnLeft,colorKnobOnRight=_a.colorKnobOnRight;return knobOnLeft&&!1===isEmpty(colorKnobOnLeft)?colorKnobOnLeft:!0!==knobOnLeft&&!1===isEmpty(colorKnobOnRight)?colorKnobOnRight:knobOnLeft?"#eeeeee":"#5269d8"},IosSwitchMaterialUi}(React.Component),isEmpty=function(str){return!1==(void 0!==str&&str.length>0)};exports.default=IosSwitchMaterialUi},"./node_modules/ios-switch-material-ui/lib/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var IosSwitchMaterialUi_1=__webpack_require__("./node_modules/ios-switch-material-ui/lib/IosSwitchMaterialUi.js");Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return __importDefault(IosSwitchMaterialUi_1).default}})},"./storybook/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Disabled:()=>Disabled,UncontrolledWithKnobPositionSet:()=>UncontrolledWithKnobPositionSet,UncontrolledWithoutKnobPositionSet:()=>UncontrolledWithoutKnobPositionSet,WithCustomAspectRatio:()=>WithCustomAspectRatio,WithCustomColors:()=>WithCustomColors,default:()=>stories,withCustomKnobSize:()=>withCustomKnobSize});var react=__webpack_require__("./node_modules/react/index.js");function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _assertThisInitialized(self1){if(void 0===self1)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self1}function _possibleConstructorReturn(self1,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self1)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}var lib=__webpack_require__("./node_modules/ios-switch-material-ui/lib/index.js"),lib_default=__webpack_require__.n(lib),Label=function(_React$PureComponent){_inherits(Label,_React$PureComponent);var _super=_createSuper(Label);function Label(){return _classCallCheck(this,Label),_super.apply(this,arguments)}return _createClass(Label,[{key:"render",value:function render(){var _this$props=this.props,label=_this$props.label,onClick=_this$props.onClick;return react.createElement("div",{onClick:onClick,style:this.getStyle()},label)}},{key:"getStyle",value:function getStyle(){var _this$props2=this.props,disabled=_this$props2.disabled,onClick=_this$props2.onClick,style=_this$props2.style,defaultStyle={cursor:onClick?"pointer":void 0,opacity:disabled?.4:1};return void 0===style?defaultStyle:_objectSpread2(_objectSpread2({},defaultStyle),style)}}]),Label}(react.PureComponent),styles={center:{alignItems:"center",display:"inline-flex",margin:"0 5px"},container:{alignItems:"center",display:"inline-flex"},left:{alignItems:"center",display:"inline-flex"},right:{alignItems:"center",display:"inline-flex"}},Layout=react.memo(function(props){var style;return react.createElement("div",{style:void 0===(style=props.style)?styles.container:_objectSpread2(_objectSpread2({},styles.container),style)},react.createElement("div",{style:styles.left},props.left),react.createElement("div",{style:styles.center},props.center),react.createElement("div",{style:styles.right},props.right))}),LabeledSwitchMaterialUi_styles={center:{color:"#e2e2e2"},left:{color:"#eeeeee"},right:{color:"#5269d8"}},LabeledSwitchMaterialUi=function(_React$PureComponent){_inherits(LabeledSwitchMaterialUi,_React$PureComponent);var _super=_createSuper(LabeledSwitchMaterialUi);function LabeledSwitchMaterialUi(props){var _this;return _classCallCheck(this,LabeledSwitchMaterialUi),(_this=_super.call(this,props)).handleSelectLeft=function(){return _this.setKnobOnLeft(!0)},_this.handleSelectRight=function(){return _this.setKnobOnLeft(!1)},_this.handleSwitchKnob=function(){return _this.setKnobOnLeft(!_this.state.knobOnLeft)},_this.state={knobOnLeft:props.knobOnLeft||props.defaultKnobOnLeft||!1},_this}return _createClass(LabeledSwitchMaterialUi,[{key:"render",value:function render(){var _this$props=this.props,disabled=_this$props.disabled,knobSize=_this$props.knobSize,labelLeft=_this$props.labelLeft,labelRight=_this$props.labelRight,style=_this$props.style,styleLabelLeft=_this$props.styleLabelLeft,styleLabelRight=_this$props.styleLabelRight,styleSwitch=_this$props.styleSwitch,aspectRatioSwitch=_this$props.aspectRatioSwitch,knobOnLeft=this.state.knobOnLeft,styleLeft=this.getStyleLabel(LabeledSwitchMaterialUi_styles.left,styleLabelLeft),styleRight=this.getStyleLabel(LabeledSwitchMaterialUi_styles.right,styleLabelRight),styleOfToggle=this.getStyleLabel(LabeledSwitchMaterialUi_styles.center,styleSwitch),colorKnobOnLeft=styleLeft.color,colorKnobOnRight=styleRight.color,colorSwitch=styleOfToggle.color;return react.createElement(Layout,{center:react.createElement(lib_default(),{aspectRatio:aspectRatioSwitch,colorKnobOnLeft:colorKnobOnLeft,colorKnobOnRight:colorKnobOnRight,colorSwitch:colorSwitch,disabled:disabled,knobSize:knobSize,knobOnLeft:knobOnLeft,onChange:this.handleSwitchKnob}),left:react.createElement(Label,{disabled:!0!==knobOnLeft,label:labelLeft,onClick:this.handleSelectLeft,style:styleLeft}),right:react.createElement(Label,{disabled:!0===knobOnLeft,label:labelRight,onClick:this.handleSelectRight,style:styleRight}),style:style})}},{key:"getStyleLabel",value:function getStyleLabel(defaultStyle,style){return void 0===style?defaultStyle:_objectSpread2(_objectSpread2({},defaultStyle),style)}},{key:"setKnobOnLeft",value:function setKnobOnLeft(knobOnLeft){var _this$props2=this.props,disabled=_this$props2.disabled,onChange=_this$props2.onChange;if(!disabled){var newKnobOnLeft=!this.state.knobOnLeft;void 0===this.props.knobOnLeft&&this.setState({knobOnLeft:newKnobOnLeft}),onChange&&onChange(newKnobOnLeft)}}}]),LabeledSwitchMaterialUi}(react.PureComponent),style={height:20},stories_styles={labelLeft:{color:"red"},labelRight:{color:"blue"},switch:{color:"aqua"}},showSelectedValue=function(id){return function(knobOnLeft){return document.getElementById(id).textContent=knobOnLeft?"knobOnLeft":"knobOnRight"}};let stories={title:"LabeledSwitchMaterialUi",component:LabeledSwitchMaterialUi};var UncontrolledWithoutKnobPositionSet=function(){return react.createElement("div",null,react.createElement(LabeledSwitchMaterialUi,{labelLeft:"Left label",labelRight:"Right label",onChange:showSelectedValue("uncontrolled")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"uncontrolled"}))},UncontrolledWithKnobPositionSet=function(){return react.createElement("div",null,react.createElement(LabeledSwitchMaterialUi,{labelLeft:"Left label",labelRight:"Right label",defaultKnobOnLeft:!0,onChange:showSelectedValue("uncontrolled")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"uncontrolled"}))},Controlled=function(){return react.createElement("div",null,react.createElement(LabeledSwitchMaterialUi,{labelLeft:"Left label",labelRight:"Right label",knobOnLeft:!0,onChange:showSelectedValue("controlled")}),react.createElement(LabeledSwitchMaterialUi,{labelLeft:"Left label",labelRight:"Right label",knobOnLeft:!1,onChange:showSelectedValue("controlled")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"controlled"}))},Disabled=function(){return react.createElement("div",null,react.createElement(LabeledSwitchMaterialUi,{labelLeft:"Left label",labelRight:"Right label",disabled:!0,onChange:showSelectedValue("disabled")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"disabled"}))},WithCustomColors=function(){return react.createElement("div",null,react.createElement(LabeledSwitchMaterialUi,{labelLeft:"Left label",labelRight:"Right label",styleLabelLeft:stories_styles.labelLeft,styleLabelRight:stories_styles.labelRight,styleSwitch:stories_styles.switch,onChange:showSelectedValue("colors")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"colors"}))},WithCustomAspectRatio=function(){return react.createElement("div",null,react.createElement(LabeledSwitchMaterialUi,{labelLeft:"Left label",labelRight:"Right label",aspectRatioSwitch:5,onChange:showSelectedValue("aspect-ratio")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"aspect-ratio"}))},withCustomKnobSize=function(){return react.createElement("div",null,react.createElement(LabeledSwitchMaterialUi,{labelLeft:"Left label",labelRight:"Right label",knobSize:40,onChange:showSelectedValue("knob-size")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"knob-size"}))}}}]);