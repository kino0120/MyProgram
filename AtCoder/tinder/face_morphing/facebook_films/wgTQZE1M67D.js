if (self.CavalryLogger) { CavalryLogger.start_js(["TV835"]); }

__d("Rect",["invariant","Vector","$"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(c,d,e,f,h){__p&&__p();if(arguments.length===1){if(c instanceof a)return c;if(c instanceof b("Vector"))return new a(c.y,c.x,c.y,c.x,c.domain);typeof c==="string"&&(c=b("$")(c));return a.getElementBounds(c)}typeof c==="number"&&typeof d==="number"&&typeof e==="number"&&typeof f==="number"&&(!h||typeof h==="string")||g(0,1087);Object.assign(this,{t:c,r:d,b:e,l:f,domain:h||"pure"});return this}var c=a.prototype;c.w=function(){return this.r-this.l};c.h=function(){return this.b-this.t};c.getWidth=function(){return this.w()};c.getHeight=function(){return this.h()};c.toString=function(){return"(("+this.l+", "+this.t+"), ("+this.r+", "+this.b+"))"};c.contains=function(b){b=new a(b).convertTo(this.domain);var c=this;return c.l<=b.l&&c.r>=b.r&&c.t<=b.t&&c.b>=b.b};c.isEqualTo=function(a){return this.t===a.t&&this.r===a.r&&this.b===a.b&&this.l===a.l&&this.domain===a.domain};c.add=function(c,d){if(arguments.length==1){c instanceof a&&c.domain!="pure"&&(c=c.convertTo(this.domain));return c instanceof b("Vector")?this.add(c.x,c.y):this}var e=parseFloat(c),f=parseFloat(d);return new a(this.t+f,this.r+e,this.b+f,this.l+e,this.domain)};c.sub=function(a,c){if(arguments.length==1&&a instanceof b("Vector"))return this.add(a.mul(-1));else if(typeof a==="number"&&typeof c==="number")return this.add(-a,-c);return this};c.rotateAroundOrigin=function(b){var c=this.getCenter().rotate(b*Math.PI/2),d=0;b%2?(d=this.h(),b=this.w()):(d=this.w(),b=this.h());var e=c.y-b/2;c=c.x-d/2;b=e+b;d=c+d;return new a(e,d,b,c,this.domain)};c.boundWithin=function(a){var b=0,c=0;this.l<a.l?b=a.l-this.l:this.r>a.r&&(b=a.r-this.r);this.t<a.t?c=a.t-this.t:this.b>a.b&&(c=a.b-this.b);return this.add(b,c)};c.getCenter=function(){return new(b("Vector"))(this.l+this.w()/2,this.t+this.h()/2,this.domain)};c.getTop=function(){return this.t};c.getRight=function(){return this.r};c.getBottom=function(){return this.b};c.getLeft=function(){return this.l};c.getPositionVector=function(){return new(b("Vector"))(this.l,this.t,this.domain)};c.getDimensionVector=function(){return new(b("Vector"))(this.w(),this.h(),"pure")};c.convertTo=function(c){if(this.domain==c)return this;if(c=="pure")return new a(this.t,this.r,this.b,this.l,"pure");if(this.domain=="pure")return new a(0,0,0,0);var d=new(b("Vector"))(this.l,this.t,this.domain).convertTo(c);return new a(d.y,d.x+this.w(),d.y+this.h(),d.x,c)};a.deserialize=function(b){b=b.split(":");return new a(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3]),parseFloat(b[0]))};a.newFromVectors=function(b,c){return new a(b.y,b.x+c.x,b.y+c.y,b.x,b.domain)};a.getElementBounds=function(c){return a.newFromVectors(b("Vector").getElementPosition(c),b("Vector").getElementDimensions(c))};a.getViewportBounds=function(){return a.newFromVectors(b("Vector").getScrollPosition(),b("Vector").getViewportDimensions())};a.getViewportWithoutScrollbarsBounds=function(){return a.newFromVectors(b("Vector").getScrollPosition(),b("Vector").getViewportWithoutScrollbarDimensions())};a.minimumBoundingBox=function(b){var c=new a(Infinity,-Infinity,-Infinity,Infinity),d;for(var e=0;e<b.length;e++)d=b[e],c.t=Math.min(c.t,d.t),c.r=Math.max(c.r,d.r),c.b=Math.max(c.b,d.b),c.l=Math.min(c.l,d.l);return c};return a}();e.exports=a}),null);
__d("getOverlayZIndex",["Style"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();c=c||document.body;var d=[];while(a&&a!==c)d.push(a),a=a.parentNode;if(a!==c)return 0;for(var a=d.length-1;a>=0;a--){c=d[a];if(b("Style").get(c,"position")!="static"){c=parseInt(b("Style").get(c,"z-index"),10);if(!isNaN(c))return c}}return 0}e.exports=a}),null);
__d("ARIA",["DOM","emptyFunction","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i=function(){g=b("ge")("ariaAssertiveAlert"),g||(g=b("DOM").create("div",{id:"ariaAssertiveAlert",className:"accessible_elem","aria-live":"assertive"}),b("DOM").appendContent(document.body,g)),h=b("ge")("ariaPoliteAlert"),h||(h=g.cloneNode(!1),h.setAttribute("id","ariaPoliteAlert"),h.setAttribute("aria-live","polite"),b("DOM").appendContent(document.body,h)),i=b("emptyFunction")};function j(a,c){i();c=c?g:h;b("DOM").setContent(c,a)}a={controls:function(a){for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];var f=d.map(function(a){return b("getOrCreateDOMID")(a)}).join(" ");a.setAttribute("aria-controls",f)},describedBy:function(a){for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];var f=d.map(function(a){return b("getOrCreateDOMID")(a)}).join(" ");a.setAttribute("aria-describedby",f)},owns:function(a,c){a.setAttribute("aria-owns",b("getOrCreateDOMID")(c))},setPopup:function(a,c){c=b("getOrCreateDOMID")(c);a.setAttribute("aria-controls",c);a.setAttribute("aria-haspopup","true");c=a.getAttribute("role")||"";c&&a.setAttribute("role",c)},announce:function(a){j(a,!0)},notify:function(a){j(a,!1)}};e.exports=a}),null);
__d("ContextualLayerAlignmentEnum",["prop-types"],(function(a,b,c,d,e,f){"use strict";a={left:"left",center:"center",right:"right",propType:b("prop-types").oneOf(["left","center","right"]),values:["left","center","right"]};e.exports=a}),null);
__d("ContextualLayerPositionEnum",["prop-types"],(function(a,b,c,d,e,f){"use strict";a={above:"above",below:"below",left:"left",right:"right",propType:b("prop-types").oneOf(["above","below","left","right"]),values:["above","below","left","right"]};e.exports=a}),null);
__d("SVGChecker",[],(function(a,b,c,d,e,f){e.exports={isSVG:function(a){return!!a.ownerSVGElement||a.tagName.toLowerCase()==="svg"},isDisplayed:function(a){try{a=a.getBBox();if(a&&(a.height===0||a.width===0))return!1}catch(a){return!1}return!0}}}),null);
__d("getOffsetParent",["Style"],(function(a,b,c,d,e,f){function g(a){a=a.parentNode;if(!a||a===document.documentElement)return document.documentElement;return b("Style").get(a,"position")!=="static"?a:a===document.body?document.documentElement:g(a)}e.exports=g}),null);
__d("getOwnObjectValues",[],(function(a,b,c,d,e,f){function a(a){return Object.keys(a).map(function(b){return a[b]})}e.exports=a}),null);
__d("ContextualLayer",["invariant","requireCond","Arbiter","ARIA","Bootloader","ContextualLayerAlignmentEnum","ContextualLayerPositionEnum","ContextualThing","CSS","DataStore","DOM","Event","Layer","cr:971473","Locale","Parent","Rect","Scroll","Style","SVGChecker","Vector","containsNode","emptyFunction","getOffsetParent","getOrCreateDOMID","getOverlayZIndex","getOwnObjectValues","isElementNode","removeFromArray","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){return a.getPosition()==="left"||a.isVertical()&&a.getAlignment()==="right"}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d._configure=function(b,c){b.dialogRole!=="dialog"&&(this._dialogRole=b.dialogRole),b.shouldSetARIAProperties===!1&&(this._shouldSetARIAProperties=b.shouldSetARIAProperties),b.label&&(this._label=b.label),b.labelledBy&&(this._labelledBy=b.labelledBy),a.prototype._configure.call(this,b,c),b.context?this.setContext(b.context):b.contextID?this._setContextID(b.contextID):b.contextSelector&&(this._setContextSelector(b.contextSelector),this._setARIAProperties()),this.setPosition(b.position),this.setAlignment(b.alignment),this.setOffsetX(b.offsetX),this.setOffsetY(b.offsetY),this.setArrowDimensions(b.arrowDimensions),this._content=c};d._getDefaultBehaviors=function(){var d=c.getDefaultBehaviorsAsObject();return a.prototype._getDefaultBehaviors.call(this).concat(b("getOwnObjectValues")(d))};d._buildWrapper=function(a,c){this._contentWrapper=b("DOM").create("div",{className:"uiContextualLayer"},c);this._dialogRole&&this._contentWrapper.setAttribute("role",this._dialogRole);this._labelledBy?this._contentWrapper.setAttribute("aria-labelledby",this._labelledBy):this._label&&this._contentWrapper.setAttribute("aria-label",this._label);this._dialogRole==="alert"&&this._contentWrapper.setAttribute("aria-atomic","true");return b("DOM").create("div",{className:"uiContextualLayerPositioner","data-testid":a["data-testid"]},this._contentWrapper)};d.getInsertParent=function(){var c=this._insertParent;if(!c){var d=this.getContext();d&&(c=b("Parent").byClass(d,"uiContextualLayerParent"))}return c||a.prototype.getInsertParent.call(this)};d.setContent=function(a){this._content=a;b("DOM").setContent(this._contentWrapper,this._content);this._shown&&this.updatePosition();return this};d.setContext=function(a){return this.setContextWithBounds(a,null)};d.setContextWithBounds=function(a,c){__p&&__p();if(this._contextNode===a&&c&&this._contextBounds&&c.isEqualTo(this._contextBounds))return this;this._contextNode=a;var d=c&&this._contextBounds&&c.t===this._contextBounds.t&&c.r===this._contextBounds.r&&c.b===this._contextBounds.b&&c.l===this._contextBounds.l;if(d)return this;this._contextBounds=c||null;this._contextSelector="#"+b("getOrCreateDOMID")(a);this._contextScrollParent=null;this._shown&&(b("ContextualThing").register(this.getRoot(),this._contextNode),this.updatePosition());this._setParentSubscription();this._setARIAProperties();return this};d.shouldSetARIAProperties=function(a){this._shouldSetARIAProperties=a;return this};d._setARIAProperties=function(){if(!this._shouldSetARIAProperties)return this;this._dialogRole==="dialog"?b("ARIA").setPopup(this.getCausalElement(),this.getRoot()):this._dialogRole==="region"&&b("Bootloader").loadModules(["ContextualLayerInlineTabOrder"],function(a){this.hasBehavior(a)||this.enableBehavior(a)}.bind(this),"ContextualLayer");return this};d._setContextID=function(a){this._contextSelector="#"+a,this._contextNode=null};d._setContextSelector=function(a){this._contextSelector=a,this._contextNode=null};d.getCausalElement=function(){return a.prototype.getCausalElement.call(this)||this.getContext()};d._setParentSubscription=function(){__p&&__p();var a=this.getContext(),c=null;while(a!=null){c=b("DataStore").get(a,"layer");if(c)break;a=a.parentNode}if(c===this._parentLayer)return;this._parentLayer&&this._parentSubscription&&(this._parentLayer.unsubscribe(this._parentSubscription),this._parentSubscription=null);c&&(this._parentSubscription=c.subscribe("hide",this.hide.bind(this)));this._parentLayer=c};d.setPosition=function(a){this.getOrientation().setDefaultPosition(a)&&(this._shown&&this.updatePosition());return this};d.setAlignment=function(a){this.getOrientation().setDefaultAlignment(a)&&(this._shown&&this.updatePosition());return this};d.setOffsetX=function(a){this.getOrientation().setDefaultOffsetX(a)&&(this._shown&&this.updatePosition());return this};d.setArrowDimensions=function(a){a&&this.getOrientation().setArrowOffset(a.offset)&&(this._shown&&this.updatePosition());return this};d.setOffsetY=function(a){this.getOrientation().setDefaultOffsetY(a)&&(this._shown&&this.updatePosition());return this};d.getPosition=function(){return this.getOrientation().getPosition()};d.getOrientation=function(){this._orientation||(this._orientation=new l());return this._orientation};d.getContentRoot=function(){return this._contentWrapper};d.getContent=function(){return this._content};d.getContext=function(){this._contextNode||(this._contextSelector!=null||g(0,11711),this._contextNode=b("DOM").find(document,this._contextSelector));return this._contextNode};d.getContextBounds=function(a){if(this._contextBounds)return this._contextBounds.convertTo(a);var c=this.getContext();return b("Rect").newFromVectors(b("Vector").getElementPosition(c,a),b("Vector").getElementDimensions(c))};d.getContextScrollParent=function(){!this._contextScrollParent?this._contextScrollParent=b("Style").getScrollParent(this.getContext()):b("isElementNode")(this._contextScrollParent)&&!b("containsNode")(document.documentElement,this._contextScrollParent)&&(this._contextScrollParent=b("Style").getScrollParent(this.getContext()));return this._contextScrollParent};d.setInsertParent=function(b){this._insertScrollParent=null;return a.prototype.setInsertParent.call(this,b)};d.getInsertScrollParent=function(){this._insertScrollParent||(this._insertScrollParent=b("Style").getScrollParent(this.getInsertParent()));return this._insertScrollParent};d.show=function(){var c=this;if(this._shown)return this;a.prototype.show.call(this);b("Arbiter").inform("contextualLayer/toggle",{show:!0,contentRoot:this.getRoot()});this._shown&&(b("ContextualThing").register(this.getRoot(),this.getContext()),i.push(this),this._resizeListener=this._resizeListener||b("Event").listen(window,"resize",b("throttle")(function(){c._shown&&c.updatePosition()})));return this};d.finishHide=function(){b("removeFromArray")(i,this);this._resizeListener&&this._resizeListener.remove();this._resizeListener=null;this._insertScrollParent=null;b("Arbiter").inform("contextualLayer/toggle",{show:!1,contentRoot:this.getRoot()});return a.prototype.finishHide.call(this)};d.isFixed=function(){return b("Style").isFixed(this.getContext())&&!b("Style").isFixed(this.getInsertParent())};d.updatePosition=function(){__p&&__p();var a=this.getContext();if(!a)return!1;var c=this.isFixed();if(!c&&!(a.offsetParent||b("SVGChecker").isSVG(a)&&b("SVGChecker").isDisplayed(a)))return!1;var d=this.getRoot();b("Style").set(d,"width",b("Vector").getViewportDimensions().x+"px");var e=this.getOrientation();this.inform("adjust",e.reset());if(!e.isValid())return!1;this._updateWrapperPosition(e);this._updateWrapperClass(e);b("CSS").conditionClass(d,"uiContextualLayerPositionerFixed",c);var f,g,i=c?"viewport":"document";c=c?document.documentElement:b("getOffsetParent")(d);if(c===document.documentElement)f=new(b("Vector"))(0,0),g=document.documentElement.clientWidth;else if(!d.offsetParent)return!1;else f=b("Vector").getElementPosition(c,i),g=c.offsetWidth,c!==document.body&&(f=f.sub(new(b("Vector"))(b("Scroll").getLeft(c),b("Scroll").getTop(c))));c=this.getContextBounds(i);i=c.l-f.x;f=c.t-f.y;var j=c.h();c=c.w();var k=b("Locale").isRTL();e.getPosition()==="below"&&(f+=j);(e.getPosition()==="right"||e.isVertical()&&e.getAlignment()==="right")!=k&&(i+=c);j=e.getOffsetX();e.isVertical()&&e.getAlignment()==="center"&&(j+=(c-this.getContentRoot().offsetWidth)/2);k&&(j*=-1);c="left";i=Math.floor(i+j);h(e)!==k&&(c="right",i=g-i);b("Style").set(d,c,i+"px");b("Style").set(d,c==="left"?"right":"left","");j=this.getInsertScrollParent();k=0;j!==window?(g=j.clientWidth,k=b("Vector").getElementPosition(j).x):g=document.documentElement.clientWidth;i=b("Vector").getElementPosition(d).x-k;c==="left"&&g-i>0?b("Style").set(d,"width",g-i+"px"):c==="right"&&i+d.offsetWidth>0?b("Style").set(d,"width",i+d.offsetWidth+"px"):b("Style").set(d,"width","");b("Style").set(d,"top",f+e.getOffsetY()+"px");j=b("getOverlayZIndex")(a,this.getInsertParent());b("Style").set(d,"z-index",j>200?j:"");this.inform("reposition",e);return!0};d._updateWrapperPosition=function(a){var c=a.getPosition()==="above";b("Style").set(this._contentWrapper,"bottom",c?"0":null);c=b("Locale").isRTL()?"left":"right";a=h(a);b("Style").set(this._contentWrapper,c,a?"0":null)};d._updateWrapperClass=function(a){a=a.getClassName();if(a===this._orientationClass)return;this._orientationClass&&b("CSS").removeClass(this._contentWrapper,this._orientationClass);this._orientationClass=a;b("CSS").addClass(this._contentWrapper,a)};d.simulateOrientation=function(a,c){__p&&__p();a=a.getClassName();if(a===this._orientationClass)return c();else{this._orientationClass&&b("CSS").removeClass(this._contentWrapper,this._orientationClass);b("CSS").addClass(this._contentWrapper,a);c=c();b("CSS").removeClass(this._contentWrapper,a);this._orientationClass&&b("CSS").addClass(this._contentWrapper,this._orientationClass);return c}};d.destroy=function(){a.prototype.destroy.call(this);this._contentWrapper=null;this._content=null;return this};d.getArrowDimensions=function(){return this._config.arrowDimensions||{offset:0,length:0}};c.getDefaultBehaviorsAsObject=function(){return b("cr:971473")==null?{}:{LayerHideOnTransition:b("cr:971473")}};return c}(b("Layer"));var i=[];b("Arbiter").subscribe("reflow",function(){i.forEach(function(a){a.updatePosition()===!1&&a.hide()})});Object.assign(a.prototype,{_contentWrapper:null,_content:null,_contextNode:null,_contextBounds:null,_contextSelector:null,_dialogRole:"dialog",_label:null,_labelledBy:[],_parentLayer:null,_parentSubscription:null,_orientation:null,_orientationClass:null,_shouldSetARIAProperties:!0});var j=b("emptyFunction").thatReturnsArgument,k=b("emptyFunction").thatReturnsArgument,l=function(){"use strict";__p&&__p();function a(){this._default={_position:"above",_alignment:"left",_offsetX:0,_offsetY:0,_valid:!0,_preferMoreContentShownRect:!1},this.reset()}var b=a.prototype;b.setPosition=function(a){this._position=j(a);return this};b.setAlignment=function(a){this._alignment=k(a);return this};b.getOppositePosition=function(){return a.OPPOSITE[this.getPosition()]};b.invalidate=function(){this._valid=!1;return this};b.getPosition=function(){return this._position||"above"};b.getAlignment=function(){return this._alignment||"left"};b.getOffsetX=function(){var a=this._offsetX||0;!this.isVertical()?this._default._position!==this._position&&(a*=-1):this._default._alignment!==this._alignment&&(a*=-1);return a};b.getOffsetY=function(){var a=this._offsetY||0;this.isVertical()&&this._default._position!==this._position&&(a*=-1);return a};b.getClassName=function(){__p&&__p();var a=this.getAlignment(),b=this.getPosition();if(b==="below")if(a==="left")return"uiContextualLayerBelowLeft";else if(a==="right")return"uiContextualLayerBelowRight";else return"uiContextualLayerBelowCenter";else if(b==="above")if(a==="left")return"uiContextualLayerAboveLeft";else if(a==="right")return"uiContextualLayerAboveRight";else return"uiContextualLayerAboveCenter";else if(b==="left")return"uiContextualLayerLeft";else return"uiContextualLayerRight"};b.isValid=function(){return this._valid};b.isVertical=function(){return this.getPosition()==="above"||this.getPosition()==="below"};b.reset=function(){Object.assign(this,this._default);return this};b.setDefaultPosition=function(a){var b=this._default._position;this._default._position=j(a);return b!==a};b.setDefaultAlignment=function(a){var b=this._default._alignment;this._default._alignment=k(a);return b!==a};b.setDefaultOffsetX=function(a){var b=this._default._offsetX;this._default._offsetX=a;return b!==a};b.setArrowOffset=function(a){var b=this._default._arrowOffset;this._default._arrowOffset=a;return b!==a};b.getArrowOffset=function(){return this._default._arrowOffset||0};b.setDefaultOffsetY=function(a){var b=this._default._offsetY;this._default._offsetY=a;return b!==a};b.setPreferMoreContentShownRect=function(a){var b=this._default._preferMoreContentShownRect;this._default._preferMoreContentShownRect=a;return b!==a};b.getPreferMoreContentShownRect=function(){return this._default._preferMoreContentShownRect};return a}();l.OPPOSITE={above:"below",below:"above",left:"right",right:"left"};e.exports=a}),null);
__d("ReactAbstractContextualDialog",["ContextualDialog","ContextualDialogArrow","ContextualDialogKeepInViewport","LayerAutoFocus","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=b("React").PropTypes;a={createSpec:function(a){__p&&__p();return{displayName:a.displayName,propTypes:{position:g.oneOf(["above","below","left","right"]),alignment:g.oneOf(["left","center","right"]),offsetX:g.number,offsetY:g.number,width:g.number,autoFocus:g.bool,focusContextOnHide:g.bool,arrowBehavior:g.func,behaviors:g.object,shown:g.bool,context:g.object,contextRef:g.func,dialogRole:g.oneOf(["dialog","region","alert"]),hoverContext:g.object,hoverContextRef:g.func,hoverShowDelay:g.number,hoverHideDelay:g.number,hideOnBlur:g.bool,hideOnEscape:g.bool,insertParent:g.object,keepInViewport:g.bool,label:g.node,labelledBy:g.string,onBeforeHide:g.func,onToggle:g.func,hasActionableContext:g.bool,"data-testid":g.string},immutableProps:{modal:null},createLayer:function(c){__p&&__p();var d=this.props.context||b("ReactDOM").findDOMNode(this.props.contextRef()),e=this.props.hoverContext||this.props.hoverContextRef&&b("ReactDOM").findDOMNode(this.props.hoverContextRef());this.isHoverContextSet=e!=null;e=babelHelpers["extends"]({context:d,hoverContext:e,hoverShowDelay:this.props.hoverShowDelay,hoverHideDelay:this.props.hoverHideDelay,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,width:this.props.width,dialogRole:this.props.dialogRole,label:this.props.label,labelledBy:this.props.labelledBy,shouldSetARIAProperties:!this.props.hasActionableContext,arrowBehavior:this.props.arrowBehavior||b("ContextualDialogArrow"),addedBehaviors:this.enumerateBehaviors(this.props.behaviors),"data-testid":this.props["data-testid"]},a||{});e=new(b("ContextualDialog"))(e,c);this.props.contextBounds&&e.setContextWithBounds(d,this.props.contextBounds);this.props.autoFocus!==!1&&e.enableBehavior(b("LayerAutoFocus"));this.props.hideOnBlur===!0&&e.enableBehavior(b("LayerHideOnBlur"));this.props.hideOnEscape===!0&&e.enableBehavior(b("LayerHideOnEscape"));this.props.focusContextOnHide===!1&&e.disableBehavior(b("LayerRefocusOnHide"));this.props.keepInViewport===!1&&e.disableBehavior(b("ContextualDialogKeepInViewport"));this.props.onBeforeHide&&e.subscribe("beforehide",this.props.onBeforeHide);this.props.insertParent&&e.setInsertParent(this.props.insertParent);e.conditionShow(this.props.shown);return e},receiveProps:function(a,c){this.updateBehaviors(c.behaviors,a.behaviors);var d=a.context||a.contextRef&&b("ReactDOM").findDOMNode(a.contextRef());d&&(a.contextBounds?this.layer.setContextWithBounds(d,a.contextBounds):this.layer.setContext(d));c.hideOnEscape!==a.hideOnEscape&&(a.hideOnEscape?this.layer.enableBehavior(b("LayerHideOnEscape")):this.layer.disableBehavior(b("LayerHideOnEscape")));this.layer.setPosition(a.position).setAlignment(a.alignment).setOffsetX(a.offsetX).setOffsetY(a.offsetY).setWidth(a.width);(!this.isHoverContextSet||a.shown!==void 0)&&this.layer.conditionShow(a.shown)}}}};e.exports=a}),null);
__d("DOMControl",["DataStore","$"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.root=b("$").fromIDOrElement(a),this.updating=!1,b("DataStore").set(a,"DOMControl",this)}var c=a.prototype;c.getRoot=function(){return this.root};c.beginUpdate=function(){if(this.updating)return!1;this.updating=!0;return!0};c.endUpdate=function(){this.updating=!1};c.update=function(a){if(!this.beginUpdate())return this;this.onupdate(a);this.endUpdate()};c.onupdate=function(a){};a.getInstance=function(a){return b("DataStore").get(a,"DOMControl")};return a}();e.exports=a}),null);
__d("Input",["CSS","DOMControl","DOMQuery"],(function(a,b,c,d,e,f){__p&&__p();var g={isWhiteSpaceOnly:function(a){return!/\S/.test(a||"")},isEmpty:function(a){return g.isWhiteSpaceOnly(a.value)},getValue:function(a){return g.isEmpty(a)?"":a.value},getValueRaw:function(a){return a.value},setValue:function(a,c){a.value=c||"";c=b("DOMControl").getInstance(a);c&&c.resetHeight&&c.resetHeight()},setPlaceholder:function(a,b){a.setAttribute("aria-label",b),a.setAttribute("placeholder",b)},reset:function(a){a.value="",a.style.height=""},setSubmitOnEnter:function(a,c){b("CSS").conditionClass(a,"enter_submit",c)},getSubmitOnEnter:function(a){return b("CSS").hasClass(a,"enter_submit")},setMaxLength:function(a,b){b>0?a.setAttribute("maxlength",b):a.removeAttribute("maxlength")}};e.exports=g}),null);
__d("Form",["DataStore","DOM","DOMQuery","DTSG","DTSGUtils","Input","LSD","PHPQuerySerializer","Random","SprinkleConfig","URI","getElementPosition","isFacebookURI","isNode"],(function(a,b,c,d,e,f){__p&&__p();var g="FileList"in window,h="FormData"in window;function i(a){var c={};b("PHPQuerySerializer").serialize(a).split("&").forEach(function(a){if(a){a=/^([^=]*)(?:=(.*))?$/.exec(a);var d=b("URI").decodeComponent(a[1]),e=a[2]!==void 0;e=e?b("URI").decodeComponent(a[2]):null;c[d]=e}});return c}var j={getInputs:function(a){a===void 0&&(a=document);return[].concat(b("DOMQuery").scry(a,"input"),b("DOMQuery").scry(a,"select"),b("DOMQuery").scry(a,"textarea"),b("DOMQuery").scry(a,"button"))},getInputsByName:function(a){var b={};j.getInputs(a).forEach(function(a){var c=b[a.name];b[a.name]=typeof c==="undefined"?a:[a].concat(c)});return b},getSelectValue:function(a){return a.options[a.selectedIndex].value},setSelectValue:function(a,b){for(var c=0;c<a.options.length;++c)if(a.options[c].value==b){a.selectedIndex=c;break}},getRadioValue:function(a){for(var b=0;b<a.length;b++)if(a[b].checked)return a[b].value;return null},getElements:function(a){return a.tagName=="FORM"&&a.elements!=a?Array.from(a.elements):j.getInputs(a)},getAttribute:function(a,b){return(a.getAttributeNode(b)||{}).value||null},setDisabled:function(a,c){j.getElements(a).forEach(function(a){if(a.disabled!==void 0){var d=b("DataStore").get(a,"origDisabledState");c?(d===void 0&&b("DataStore").set(a,"origDisabledState",a.disabled),a.disabled=c):d===!1&&(a.disabled=!1)}})},forEachValue:function(a,c,d){__p&&__p();j.getElements(a).forEach(function(a){__p&&__p();if(!a.name||a.disabled)return;if(a.type==="submit")return;if(a.type==="reset"||a.type==="button"||a.type==="image")return;if((a.type==="radio"||a.type==="checkbox")&&!a.checked)return;if(a.nodeName==="SELECT"){for(var c=0,e=a.options.length;c<e;c++){var f=a.options[c];f.selected&&d("select",a.name,f.value)}return}if(a.type==="file"){if(g){f=a.files;for(var c=0;c<f.length;c++)d("file",a.name,f.item(c))}return}d(a.type,a.name,b("Input").getValue(a))}),c&&c.name&&c.type==="submit"&&b("DOMQuery").contains(a,c)&&b("DOMQuery").isNodeOfType(c,["input","button"])&&d("submit",c.name,c.value)},createFormData:function(a,c){__p&&__p();if(!h)return null;var d=new FormData();if(a)if(b("isNode")(a))j.forEachValue(a,c,function(b,a,c){d.append(a,c)});else{c=i(a);for(var e in c)c[e]==null?d.append(e,""):d.append(e,c[e])}return d},serialize:function(a,b){var c={};j.forEachValue(a,b,function(a,b,d){if(a==="file")return;j._serializeHelper(c,b,d)});return j._serializeFix(c)},_serializeHelper:function(a,b,c){__p&&__p();var d=Object.prototype.hasOwnProperty,e=/([^\]]+)\[([^\]]*)\](.*)/.exec(b);if(e){if(!a[e[1]]||!d.call(a,e[1])){a[e[1]]=d={};if(a[e[1]]!==d)return}d=0;if(e[2]==="")while(a[e[1]][d]!==void 0)d++;else d=e[2];e[3]===""?a[e[1]][d]=c:j._serializeHelper(a[e[1]],d.concat(e[3]),c)}else a[b]=c},_serializeFix:function(a){__p&&__p();for(var b in a)a[b]instanceof Object&&(a[b]=j._serializeFix(a[b]));var c=Object.keys(a);if(c.length===0||c.some(isNaN))return a;c.sort(function(a,b){return a-b});var d=0,e=c.every(function(a){return+a===d++});return e?c.map(function(b){return a[b]}):a},post:function(a,c,d,e){__p&&__p();e===void 0&&(e=!0);a=new(b("URI"))(a);var f=document.createElement("form");f.action=a.toString();f.method="POST";f.style.display="none";var g=!b("isFacebookURI")(a);if(d){if(g){f.rel="noopener";if(d==="_blank"){d=btoa(b("Random").uint32());var h=window.open("about:blank",d);h===void 0||(h.opener=null)}}f.target=d}if(e&&(!g&&a.getSubdomain()!=="apps")){h=b("DTSG").getToken();h&&(c.fb_dtsg=h,b("SprinkleConfig").param_name&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(h)));b("LSD").token&&(c.lsd=b("LSD").token,b("SprinkleConfig").param_name&&!h&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(b("LSD").token)))}j.createHiddenInputs(c,f);b("DOMQuery").getRootElement().appendChild(f);f.submit();return!1},createHiddenInputs:function(a,c,d,e){__p&&__p();e===void 0&&(e=!1);d=d||{};a=i(a);for(var f in a){if(a[f]===null)continue;if(d[f]&&e)d[f].value=a[f];else{var g=b("DOM").create("input",{type:"hidden",name:f,value:a[f]});d[f]=g;c.appendChild(g)}}return d},getFirstElement:function(a,c){__p&&__p();c===void 0&&(c=['input[type="text"]',"textarea",'input[type="password"]','input[type="button"]','input[type="submit"]']);var d=[];for(var e=0;e<c.length;e++){d=b("DOMQuery").scry(a,c[e]);for(var f=0;f<d.length;f++){var g=d[f];try{var h=b("getElementPosition")(g);if(h.y>0&&h.x>0)return g}catch(a){}}}return null},focusFirst:function(a){a=j.getFirstElement(a);if(a){a.focus();return!0}return!1}};e.exports=j}),null);
__d("LinkController",["DataStore","Event","Parent","removeFromArray","trackReferrer"],(function(a,b,c,d,e,f){__p&&__p();var g="@@LinkController",h=[],i=[];c={registerHandler:function(a){h.push(a);return{remove:function(){return b("removeFromArray")(h,a)}}},registerFallbackHandler:function(a){i.push(a);return{remove:function(){return b("removeFromArray")(i,a)}}}};function a(a){__p&&__p();a=a.getTarget();var c=b("Parent").byTag(a,"a");if(!(c instanceof HTMLAnchorElement))return;var d=k(c);if(!d||m(a)||b("DataStore").get(c,g)||d.endsWith("#"))return;a=b("Event").listen(c,"click",function(a){b("trackReferrer")(c,d),!c.rel&&(!c.target||c.target==="_self")&&!l(a)&&j(c,a)});b("DataStore").set(c,g,a)}function j(a,b){h.concat(i).every(function(c){if(c(a,b)===!1){b.prevent();return!1}return!0})}function k(a){if(a&&!a.rel){a=a.getAttribute("href");if(a){var b=a.match(/^(\w+):/);if(!b||b[1].match(/^http/i))return a}}return null}function l(a){return a.getModifiers().any||a.which&&a.which!==1}function m(a){return a.nodeName==="INPUT"&&a.type==="file"}b("Event").listen(document.documentElement,"mousedown",a,b("Event").Priority.URGENT);b("Event").listen(document.documentElement,"keydown",a,b("Event").Priority.URGENT);e.exports=c}),null);
__d("PageTransitionPriorities",[],(function(a,b,c,d,e,f){a=5;b=a+1;e.exports={DEFAULT:a,LEFT_NAV:b,SOCIAL_SEARCH_DIALOG:b+1}}),null);
__d("computeRelativeURI",["URI","isEmpty","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();function g(a,b){if(!b)return a;if(b.charAt(0)=="/")return b;var c=a.split("/").slice(0,-1);c[0]!=="";b.split("/").forEach(function(a){a==="."||(a===".."?c.length>1&&(c=c.slice(0,-1)):c.push(a))});return c.join("/")}function a(a,c){__p&&__p();var d=new(b("URI"))(),e=new(b("URI"))(a),f=new(b("URI"))(c);if(f.getDomain()&&!b("isFacebookURI")(f))return c;var h=e;a=["Protocol","Domain","Port","Path","QueryData","Fragment"];a.forEach(function(a){var c=a==="Path"&&h===e;c&&d.setPath(g(e.getPath(),f.getPath()));b("isEmpty")(f["get"+a]())||(h=f);c||d["set"+a](h["get"+a]())});return d}e.exports=a}),null);
__d("PageTransitionsRegistrar",["invariant","Bootloader","DOMQuery","Form","LinkController","PageTransitionPriorities","Parent","Run","URI","computeRelativeURI","getReferrerURI","goURI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();b("Run").onAfterLoad(function(){b("Bootloader").loadModules(["PageTransitions"],function(a){a&&a._init&&a._init()},"PageTransitionsRegistrar")});var h=[],i=[];d={DELAY_HISTORY:"delay_history_PTR",registerHandler:function(a,c){a!=null||g(0,5202),c=c||b("PageTransitionPriorities").DEFAULT,h[c]||(h[c]=[]),h[c].push(a)},removeHandler:function(a,c){c=c||b("PageTransitionPriorities").DEFAULT;var d=-1;h[c]&&(d=h[c].indexOf(a));d>-1&&h[c].splice(d,1)},registerCompletionCallback:function(a){i.push(a)},getMostRecentURI:l,getReferrerURI:b("getReferrerURI"),_getTransitionHandlers:function(){return h},_getCompletionCallbacks:function(){return i},_resetCompletionCallbacks:function(){i=[]},__onClick:d,__onSubmit:f};var j=null;function c(a){j=a,b("setTimeoutAcrossTransitions")(function(){j=null},0)}function d(a){if(j){if(!a.isDefaultPrevented()){k(j);var c=j.getAttribute("href");c&&b("goURI")(c)}a.kill()}}function k(a){var c=a.getAttribute("href")||"",d=b("computeRelativeURI")(l().getQualifiedURI().toString(),c).toString();c!=d&&a.setAttribute("href",d)}function f(a,c){__p&&__p();c=c;var d=a.getTarget();if(b("Form").getAttribute(d,"rel")||b("Form").getAttribute(d,"target"))return;var e=new(b("URI"))(b("Form").getAttribute(d,"action"));e=b("computeRelativeURI")(l().toString(),e.toString());d.setAttribute("action",e.toString());if((b("Form").getAttribute(d,"method")||"GET").toUpperCase()=="GET"){d=b("Form").serialize(d);c&&(b("DOMQuery").isNodeOfType(c,"input")&&c.type==="submit"||(c=b("Parent").byTag(c,"button")))&&c.name&&(d[c.name]=c.value);typeof e==="string"&&(e=new(b("URI"))(e));b("goURI")(e.addQueryData(d));a.kill()}}b("LinkController").registerFallbackHandler(c);function l(){if(a.PageTransitions&&a.PageTransitions.isInitialized())return a.PageTransitions.getMostRecentURI();else{var c=b("URI").getRequestURI(!1);c=c.getUnqualifiedURI();var d=new(b("URI"))(c).setFragment(null),e=c.getFragment();e.charAt(0)==="!"&&d.toString()===e.substr(1)&&(c=d);return c}}e.exports=d}),null);
__d("LayerHideOnTransition",["LayerHideSources","PageTransitionsRegistrar"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){var c=this;this._handler=function(a){c._enabled&&c.isTransitionRelevant(a)&&c._layer.hide(b("LayerHideSources").TRANSITION),c._subscribe()};this._layer=a}var c=a.prototype;c.enable=function(){this._enabled=!0,this._subscribed||setTimeout(this._subscribe.bind(this),0)};c.disable=function(){this._enabled=!1,b("PageTransitionsRegistrar").removeHandler(this._handler)};c.isTransitionRelevant=function(a){return!0};c._subscribe=function(){b("PageTransitionsRegistrar").registerHandler(this._handler),this._subscribed=!0};return a}();Object.assign(a.prototype,{_enabled:!1,_subscribed:!1});e.exports=a}),null);
__d("XFeedNUXSaveSeenStateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/nux/seen/save/",{link_id:{type:"String"},key:{type:"String",required:!0},seen:{type:"Bool",defaultValue:!1},env:{type:"Enum",enumType:0}})}),null);