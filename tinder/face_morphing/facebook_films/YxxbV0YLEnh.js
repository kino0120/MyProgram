if (self.CavalryLogger) { CavalryLogger.start_js(["qsgwd"]); }

__d("FBKeyframesXHPBootstrap.react",["Keyframes.react","OnVisible.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={playing:c.props.playing==="always"},c.$1=function(){return c.setState({playing:!0})},c.$2=function(){return c.setState({playing:!1})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props;a.playing;a=babelHelpers.objectWithoutPropertiesLoose(a,["playing"]);a=b("React").createElement(b("Keyframes.react"),babelHelpers["extends"]({},a,{playing:this.state.playing}));return this.props.playing==="onvisible"?b("React").createElement(b("OnVisible.react"),{onVisible:this.$1,onHidden:this.$2},a):a};return c}(b("React").Component);e.exports=a}),null);
__d("legacy:UIPagelet",["UIPagelet"],(function(a,b,c,d,e,f){a.UIPagelet=b("UIPagelet")}),3);