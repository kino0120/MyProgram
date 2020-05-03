if (self.CavalryLogger) { CavalryLogger.start_js(["H4H\/z"]); }

__d("PageRecommendationsCircleScoreQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"pageID",type:"ID!",defaultValue:null},{kind:"LocalArgument",name:"callsite",type:"ConsiderationAggregatedScoreCallSite",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"pageID"}],c={kind:"LinkedField",alias:null,name:"aggregated_score_info",storageKey:null,args:[{kind:"Variable",name:"callsite",variableName:"callsite"}],concreteType:"ConsiderationAggregatedScoreInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"score",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"color",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"show_circle",args:null,storageKey:null}]};return{kind:"Request",fragment:{kind:"Fragment",name:"PageRecommendationsCircleScoreQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"page",storageKey:null,args:b,concreteType:"Page",plural:!1,selections:[c]}]},operation:{kind:"Operation",name:"PageRecommendationsCircleScoreQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"page",storageKey:null,args:b,concreteType:"Page",plural:!1,selections:[c,{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]},params:{operationKind:"query",name:"PageRecommendationsCircleScoreQuery",id:"2601787329847500",text:null,metadata:{}}}}();e.exports=a}),null);
__d("RoyalBluebarTransitions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INDETERMINATE:"Indeterminate",PULSE:"Pulse",SHIMMER:"Shimmer",NONE:"none",OFF:"off",PULSE_GIF_2S:"pulse_gif1",PULSE_GIF_2S_DARKER:"pulse_gif2",PULSE_GIF_3S:"pulse_gif3"})}),null);
__d("RoyalBluebar",["cx","Arbiter","BigPipe","CSS","Event","QuicklingFetchStreamConfig","RoyalBluebarTransitions","Run","SubscriptionsHandler","clearTimeout","ge","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=!1,j=b("QuicklingFetchStreamConfig"),k=j.experimentName,l=k!==b("RoyalBluebarTransitions").OFF&&k!==b("RoyalBluebarTransitions").NONE;function m(){h&&h()}var n={_subscriptionHandler:null,_getSubscriptionHandler:function(){var a=this;this._subscriptionHandler||(this._subscriptionHandler=new(b("SubscriptionsHandler"))(),b("Run").onUnload(function(){a._subscriptionHandler.release(),a._subscriptionHandler=null}));return this._subscriptionHandler},fixOnScroll:function(a){this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed",function(c,d){c="_50ti";var e="_33rf";a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,c,d);a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,e,!d);b("Arbiter").inform("reflow")}))},informOnClick:function(a){this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a,"click",function(a){b("Arbiter").inform("BlueBar/homeClick",a)===!1&&a.preventDefault()}))},stopAnimatingAfterDD:function(){var a=b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(a,c){c.arbiter.subscribeOnce(b("BigPipe").Events.displayed,m)}),c=b("Run").onAfterLoad(m);h=function(){h=null,b("Arbiter").unsubscribe(a),c.remove(),n.stopTransitionAnimation()}},startTransitionAnimation:function(){if(l){h&&h();var a=b("ge")(j.bluebarTransitionElement);a&&b("CSS").addClass(a,j.bluebarTransitionClass)}},stopTransitionAnimation:function(){__p&&__p();if(l){var a=j,c=b("ge")(a.bluebarTransitionElement);if(!c)return;if(k===b("RoyalBluebarTransitions").INDETERMINATE){if(!i){i=!0;b("CSS").addClass(c,"finishing");var d;h=function(){h=null,i=!1,b("clearTimeout")(d),b("CSS").removeClass(c,"finishing"),b("CSS").removeClass(c,a.bluebarTransitionClass)};d=b("setTimeoutAcrossTransitions")(h,200)}}else b("CSS").removeClass(c,a.bluebarTransitionClass)}}};e.exports=n}),null);
__d("BrowseClientEventLogger",["csx","Banzai","DOMQuery","SearchLoggingOptions","ge","gkx","ifRequired"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="browse_client_event_session",i="search_www_click_error",j="21.";a={logData:function(a,c,d,e){__p&&__p();e===void 0&&(e={});if(!a||!c)return;e.event=a;e.client_time=Math.floor(Date.now());e.client_time_2=Date.now()/1e3;e.session_id=c;e.vertical=d;this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(c)!==-1)return;a=e.event==="click"&&e.clicked_href!=null&&b("SearchLoggingOptions").signalLinkClicks;b("Banzai").post(h,[e],{delay:0,retry:!0,signal:a})},logClick:function(a){a.gt.event="click",this.maybeLogVisiblityEvent(a,!0),b("gkx")("678249")&&b("ifRequired")("FacebarTypeaheadRefreshNullstate",function(a){a.setIsNullstateStale(!0)})},maybeLogClientViewEvent:function(a){a.event="client_view",this.maybeLogVisiblityEvent(a)},maybeLogVisiblityEvent:function(a,c){__p&&__p();c===void 0&&(c=!1);var d=null;c&&(d=a,a=a.gt);if(!a||!a.xt||a.xt.indexOf(j)!==0){c&&b("Banzai").post(i,[d],{delay:0,retry:!0});return}var e=JSON.parse(a.xt.substring(3));c&&(e.click_type=a.click_type,e.tn=a.tn,e.clicked_href=a.clicked_href,d&&d.bt&&d.bt.ct&&(d.bt.ct=="feedback"&&(e.feedback_score=d.bt.feedback_score,e.feedback_type=d.bt.feedback_type)));c=a.event;d=this._getPositionForCurrentDOMNode(e.unit_id);e.position=d;if(e.display_style==="context_hscroll"&&(c==="client_view"||c==="vpvd"||c==="visible"||c==="hidden"))return;if(c==="vpvd"){if(!a.ft)return;e.vpvd_time=a.ft.vpvd_time_delta}this.logData(c,e.session_id,e.vertical,e)},_getPositionForCurrentDOMNode:function(a){__p&&__p();if(a==null||a==void 0)return null;var c=0,d=b("ge")("browse_result_area");if(d==null||d==void 0)return null;d=b("DOMQuery").scry(d,"._401d");for(var e=0;e<d.length;e++){var f=d[e];f=f.getAttribute("data-gt");if(f!==null||f!==void 0){f=JSON.parse(JSON.parse(f).xt.substring(3));if(f.item_type=="result"&&f.id!==""&&f.id!==null){if(f.unit_id==a)return c;c++}}}return null},logImpression:function(a){a.event="impression",this.maybeLogVisiblityEvent(a)}};e.exports=a}),null);
__d("VisibilityTrackingHelper",["Arbiter","DesktopHscrollUnitEventConstants","Event","getViewportDimensions"],(function(a,b,c,d,e,f){a={getEventListeners:function(a,c){var d=[b("Event").listen(document,"DOMContentLoaded",a),b("Event").listen(window,"scroll",a),b("Event").listen(window,"resize",a),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,a)];c&&c.considerSubtreeModification&&d.push(b("Event").listen(document,"DOMSubtreeModified",a));return d},getViewportInfo:function(){return b("getViewportDimensions")()},isSnippetFlyoutVisible:function(){return!1}};e.exports=a}),null);
__d("QuickPipeRequest",["AjaxPipeRequest","Arbiter","ArtilleryOnUntilOffLogging","DocumentTitle","PageNavigationStageLogger","Quickling","QuicklingConfig","QuicklingFetchStreamConfig","QuicklingRefreshOverheadUtil","RoyalBluebar","RoyalBluebarTransitions","URI","UserAgent_DEPRECATED","goOrReplace","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g=b("QuicklingConfig").version,h,i="";a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e={version:g};c=a.call(this,c,d,{quickling:e})||this;c._processFirstResponse=function(a){var c=a.getPayload();j(c.title);this._resetScrollOnFirstResponse();a=a.getRequest();a&&document.body&&!c.isCometResponse&&(document.body.className=c.body_class||"");b("Arbiter").inform("quickling/response");b("ArtilleryOnUntilOffLogging").onNewPageLoad()};c._isQuickling=!0;return c}var d=c.prototype;d._preBootloadFirstResponse=function(a){return!0};d._fireDomContentCallback=function(){this._request&&this._request.cavalry&&this._request.cavalry.setTimeStamp("t_domcontent"),b("ifRequired")("PageTransitions",function(a){a.transitionComplete()}),a.prototype._fireDomContentCallback.call(this)};d._fireOnloadCallback=function(){var b=this._request;b!=null&&b.cavalry&&(b.cavalry.setTimeStamp("t_hooks"),b.cavalry.setTimeStamp("t_layout"),b.cavalry.setTimeStamp("t_onload"));a.prototype._fireOnloadCallback.call(this)};d.isPageActive=function(a){return b("Quickling").isPageActive(a)};d._versionCheck=function(a){__p&&__p();if(a.version==g){b("QuicklingRefreshOverheadUtil").onQuicklingVersionMatch();return!0}var c=["quickling","ajaxpipe","ajaxpipe_token","ajaxpipe_fetch_stream"];b("PageNavigationStageLogger").setCookieForNavigation(a.uri);b("PageNavigationStageLogger").setNote("quickling_version");b("PageNavigationStageLogger").updateCookie();b("QuicklingRefreshOverheadUtil").onQuicklingRefreshStart();b("goOrReplace")(window.location,new(b("URI"))(a.uri).removeQueryData(c),!0);b("RoyalBluebar").stopTransitionAnimation();return!1};d._resetScrollOnFirstResponse=function(){window.scrollTo(0,0)};d.getSanitizedParameters=function(){return["quickling"]};d._getAsyncRequestType=function(){return b("QuicklingFetchStreamConfig").experimentName!==b("RoyalBluebarTransitions").OFF?"useFetchWithIframeFallback":"useIframeTransport"};return c}(b("AjaxPipeRequest"));function j(a){a=a||"Facebook",b("DocumentTitle").set(a),b("UserAgent_DEPRECATED").ie()&&(i=a,h||(h=window.setInterval(function(){var a=i,c=b("DocumentTitle").get();a!=c&&b("DocumentTitle").set(a)},5e3,!1)))}e.exports=a}),null);
__d("QuicklingAugmenter",["URI"],(function(a,b,c,d,e,f){__p&&__p();var g=[];a={addHandler:function(a){g.push(a)},augmentURI:function(a){var c=[],d=new(b("URI"))(a);g.forEach(function(a){var b=a(d);if(!b)return d;c.push(a);d=d.addQueryData(b)});g=c;return d}};e.exports=a}),null);
__d("Quickling",["AjaxPipeRequest","Arbiter","BigPipe","ContextualComponent","PageEvents","PageHooks","PageNavigationStageLogger","PageTransitionsRegistrar","PHPQuerySerializer","QuicklingAugmenter","QuicklingConfig","QuicklingRefreshOverheadUtil","QuickPipeRequest","RoyalBluebar","Run","TimerStorage","URI","cancelAnimationFrame","cancelIdleCallback","clearImmediate","clearInterval","clearTimeout","ge","isEmpty"],(function(a,b,c,d,e,f){__p&&__p();var g=b("QuicklingConfig").sessionLength,h=new RegExp(b("QuicklingConfig").inactivePageRegex),i=0,j=!1,k={init:function(){if(j)return;j=!0;b("Run").onAfterLoad(function(){b("PageTransitionsRegistrar").registerHandler(m,1)})},isActive:function(){return j},isPageActive:function(a){__p&&__p();if(a==="#")return!1;a=new(b("URI"))(a);if(a.getDomain()&&a.getDomain()!=new(b("URI"))(window.location.href).getDomain())return!1;if(a.getPath()=="/l.php"){var c=a.getQueryData().u;if(c){c=new(b("URI"))(unescape(c)).getDomain();if(c&&c!=new(b("URI"))(window.location.href).getDomain())return!1}}c=a.getPath();a=a.getQueryData();b("isEmpty")(a)||(c+="?"+b("PHPQuerySerializer").serialize(a));return Object.keys(a).reduce(function(a,c){return a||b("QuicklingConfig").badRequestKeys.includes(c)},!1)?!1:!h.test(c)},getLoadCount:function(){return i},transitionHandler_DO_NOT_USE:m};function l(){i++;return i>=g}function m(a){__p&&__p();b("AjaxPipeRequest").setCurrentRequest(null);if(l()){b("PageNavigationStageLogger").setNote("quickling_refresh");return!1}a=b("QuicklingAugmenter").augmentURI(a);if(!k.isPageActive(a)){b("PageNavigationStageLogger").setNote("quickling_inactive");return!1}b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME,b("cancelAnimationFrame"));b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK,b("cancelIdleCallback"));b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE,b("clearImmediate"));b("TimerStorage").clearAll(b("TimerStorage").INTERVAL,b("clearInterval"));b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT,b("clearTimeout"));window.ExitTime=Date.now();b("QuicklingRefreshOverheadUtil").onQuicklingStart();b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD,{transition_type:"quickling"});var c="content";n(c);b("RoyalBluebar").startTransitionAnimation();c=new(b("QuickPipeRequest"))(c,a).setResetHandler(b("RoyalBluebar").stopTransitionAnimation).setFinallyHandler(b("RoyalBluebar").stopTransitionAnimation).send();c.getArbiter().subscribeOnce(b("BigPipe").Events.displayed,b("RoyalBluebar").stopTransitionAnimation);a=window.__bodyWrapper;a.getCodeUsage&&a.clearCodeUsage();return b("PageTransitionsRegistrar").DELAY_HISTORY}function n(a){var c=function(){var c=b("ge")(a);c=b("ContextualComponent").forNode(c);c&&c.cleanup();b("PageHooks").runHooks("onleavehooks")};c()}e.exports=k;a.Quickling=k}),null);
__d("FBFeedImpressionTopMarginGetter",["getElementPosition","getStyleProperty"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;function h(){__p&&__p();try{if(g==null)return 0;var a=b("getStyleProperty")(g,"position");if(a==="fixed"){a=b("getElementPosition")(g);return a.height>0?Math.max(0,a.y+a.height):0}return 0}catch(a){return 0}}function i(){__p&&__p();try{var a=document.getElementById("bluebarRoot");if(a==null)return 0;a=a.firstChild;if(a==null)return 0;a=b("getElementPosition")(a);return Math.max(0,a.y+a.height)}catch(a){return 0}}a={setActionBar:function(a){g=a},getTopMargin:function(){var a=i(),b=h();return Math.max(a,b)}};e.exports=a}),null);
__d("isImpressionTargetOccluded",["containsNode"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){__p&&__p();if(!a||!c||!document.elementFromPoint)return!1;var d=c.x,e=c.y,f=c.width;c=c.height;f=Math.max(d,d+f-1);c=Math.max(e,e+c-1);d=[{x:d,y:e},{x:d,y:c},{x:f,y:e},{x:f,y:c},{x:(d+f)/2,y:(e+c)/2}];return d.every(function(c){c=document.elementFromPoint(c.x,c.y);c=!!c&&!b("containsNode")(c,a)&&!b("containsNode")(a,c);return c})}e.exports=a}),null);
__d("ConsiderationAggregatedScoreCallSite",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({GRAPHQL:"graphql",GRAPHAPI:"graphapi",PAGE_HEADER_SOCIAL_CONTEXT:"page_header_social_context",PAGE_COMPARISON_CARD_NT:"page_comparison_card_nt",PAGE_RECOMMENDATIONS_REACTION_UNIT:"page_recommendations_reaction_unit",SEARCH_RANKED_HOVERCARD:"search_ranked_hovercard",LOCAL_SEARCH_PLACE_IMAGE_NT:"local_search_place_image_nt",REVIEW_TAB_HEADER_CARD_NT:"review_tab_header_card_nt",LOCAL_SURFACE_PLACE_ROW_NT:"local_surface_place_row_nt",LOCAL_SURFACE_PLACE_PILE_NT:"local_surface_place_pile_nt",LOCAL_SURFACE_PILE_VIEW_MODEL_FACTORY_NT:"local_surface_pile_view_nt",UNSOLICITED_RECOMMENDATION_ACTION_LINK_NT:"unsolicited_recommendations_action_link_nt",RELATED_PAGES:"related_pages",SOCIAL_TREX:"social_trex",SEARCH_PLACE_TAB:"search_place_tab",SEARCH_RESULT_SMALL:"search_result_small",SEARCH_RESULT_MEDIUM:"search_result_medium",SEARCH_RESULT_LARGE:"search_result_large",SEARCH_RESULT_XLARGE:"search_result_xlarge",SEARCH_HIGH_CONFIDENCE_PAGE:"search_high_confidence_page",PAGE_REVIEW:"page_review",PAGE_METABOX:"page_metabox",REX_CARD:"rex_card",SCORE_EXPLAINER:"score_explainer",ORDER_FOOD:"order_food",PAGE_CARD:"page_card",CAROUSEL_CARD:"carousel_card",PAGE_TAB:"page_tab",LOCATION_CARD_MSITE:"location_card_msite",PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES:"pages_highlight_column_redesign_related_pages",MESSENGER_PAGE_SHARE:"messenger_page_share",PAGE_PYML_WWW:"page_pyml_www",PAGE_PYML_NT:"page_pyml_nt",PEOPLE_ALSO_LIKE_NT:"people_also_like_nt",LOCAL_PAGE_SUBSCRIPTIONS_LANDING_PAGE_NT:"local_page_subscriptions_landing_page_nt",RELATED_PAGES_RHC:"related_pages_rhc",OFFERS_GRAPHQL:"offers_graphql",OFFERS_DETAILS_VIEW_NT:"offers_details_view_nt",FOOD_DRINK_GRAPHQL:"food_drink_graphql",CITY_GUIDES_GRAPHQL:"city_guides_graphql",MARKET_PLACE_GRAPHQL:"market_place_graphql",SERVICES_GRAPHQL:"services_graphql",JOBS_GRAPHQL:"jobs_graphql",LOCAL_SERVICES_GRAPHQL:"local_services_graphql",MESSENGER_CTM_ADS:"messenger_ctm_ads"})}),null);
__d("TepigSignal",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTER:"enter",EXIT:"exit",LOG:"log",VALIDATE:"validate"})}),null);
__d("TepigSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BLUE:"blue",COMET:"comet"})}),null);
__d("ViewabilityFramework",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIEWABLE_TRACKER_BLUE:"current_blue",VIEWABLE_TRACKER_BLUE_EXIT:"current_blue_exit",VIEWABLE_TRACKER_BLUE_AFTER_DEDUP:"current_blue_after_dedup",IMPRESSION_API_COMET_ENTER:"impression_api_comet_enter",INTERSECTION_OBSERVER_BLUE:"intersection_observer_blue",INTERSECTION_OBSERVER_BLUE_EXIT:"intersection_observer_blue_exit",INTERSECTION_OBSERVER_BLUE_AFTER_DEDUP:"intersection_observer_blue_after_dedup",SCROLL_BASED_BLUE:"scroll_based_blue",INTERSECTION_OBSERVER_COMET:"intersection_observer_comet",INTERSECTION_OBSERVER_COMET_EXIT:"intersection_observer_comet_exit",SCROLL_COMET:"scroll_comet",SCROLL_COMET_EXIT:"scroll_comet_exit"})}),null);
__d("FeedAdXoutEventTracker",["gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Set();function a(a){b("gkx")("983221")&&g.add(a)}function c(a){b("gkx")("983221")&&g["delete"](a)}function d(a){return b("gkx")("983221")?g.has(a):!1}f={checkIfHidden:d,markHidden:a,undoHidden:c};e.exports=f}),null);
__d("PageRecommendationsCircleScoreType",["ConsiderationAggregatedScoreCallSite","keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("ConsiderationAggregatedScoreCallSite").SEARCH_RESULT_SMALL;c=b("ConsiderationAggregatedScoreCallSite").SEARCH_RESULT_MEDIUM;d=b("ConsiderationAggregatedScoreCallSite").SEARCH_RESULT_LARGE;f=b("ConsiderationAggregatedScoreCallSite").SEARCH_RESULT_XLARGE;var g=b("ConsiderationAggregatedScoreCallSite").PAGE_REVIEW,h=b("ConsiderationAggregatedScoreCallSite").PAGE_METABOX,i=b("ConsiderationAggregatedScoreCallSite").REX_CARD,j=b("ConsiderationAggregatedScoreCallSite").SCORE_EXPLAINER,k=b("ConsiderationAggregatedScoreCallSite").ORDER_FOOD,l=b("ConsiderationAggregatedScoreCallSite").PAGE_PYML_WWW,m=b("ConsiderationAggregatedScoreCallSite").SEARCH_RANKED_HOVERCARD,n=b("ConsiderationAggregatedScoreCallSite").SEARCH_PLACE_TAB,o=b("ConsiderationAggregatedScoreCallSite").PAGE_CARD,p=b("ConsiderationAggregatedScoreCallSite").CAROUSEL_CARD,q=b("ConsiderationAggregatedScoreCallSite").LOCATION_CARD_MSITE,r=b("ConsiderationAggregatedScoreCallSite").PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES,s=b("ConsiderationAggregatedScoreCallSite").MESSENGER_PAGE_SHARE;b=b("keyMirror")({SEARCH_RESULT_SMALL:a,SEARCH_RESULT_MEDIUM:c,SEARCH_RESULT_LARGE:d,SEARCH_RESULT_XLARGE:f,PAGE_REVIEW:g,PAGE_METABOX:h,REX_CARD:i,SCORE_EXPLAINER:j,ORDER_FOOD:k,PAGE_PYML_WWW:l,SEARCH_RANKED_HOVERCARD:m,SEARCH_PLACE_TAB:n,PAGE_CARD:o,CAROUSEL_CARD:p,LOCATION_CARD_MSITE:q,PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES:r,MESSENGER_PAGE_SHARE:s});e.exports=b}),null);
__d("PageRecommendationsCircleScore.react",["ix","cx","invariant","Image.react","PageRecommendationsCircleScoreType","React","RelayFBEnvironment","RelayModern","asset","formatNumber","promiseDone","PageRecommendationsCircleScoreQuery.graphql"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("RelayModern").fetchQuery;b("RelayModern").graphql;var k=b("PageRecommendationsCircleScoreType").SEARCH_RESULT_SMALL,l=b("PageRecommendationsCircleScoreType").SEARCH_RESULT_MEDIUM,m=b("PageRecommendationsCircleScoreType").SEARCH_RESULT_LARGE,n=b("PageRecommendationsCircleScoreType").SEARCH_RESULT_XLARGE,o=b("PageRecommendationsCircleScoreType").PAGE_REVIEW,p=b("PageRecommendationsCircleScoreType").PAGE_METABOX,q=b("PageRecommendationsCircleScoreType").REX_CARD,r=b("PageRecommendationsCircleScoreType").SCORE_EXPLAINER,s=b("PageRecommendationsCircleScoreType").ORDER_FOOD,t=b("PageRecommendationsCircleScoreType").PAGE_PYML_WWW,u=b("PageRecommendationsCircleScoreType").SEARCH_RANKED_HOVERCARD,v=b("PageRecommendationsCircleScoreType").SEARCH_PLACE_TAB,w=b("PageRecommendationsCircleScoreType").PAGE_CARD,x=b("PageRecommendationsCircleScoreType").CAROUSEL_CARD,y=b("PageRecommendationsCircleScoreType").LOCATION_CARD_MSITE,z=b("PageRecommendationsCircleScoreType").PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES,A=b("PageRecommendationsCircleScoreType").MESSENGER_PAGE_SHARE,B={SEARCH_RESULT_SMALL:g("515097"),SEARCH_RESULT_MEDIUM:g("515097"),SEARCH_RESULT_LARGE:g("515097"),SEARCH_RESULT_XLARGE:g("515097"),PAGE_REVIEW:g("515099"),PAGE_METABOX:g("515097"),REX_CARD:g("515097"),SCORE_EXPLAINER:g("515099"),ORDER_FOOD:g("515097"),PAGE_PYML_WWW:g("515097"),SEARCH_RANKED_HOVERCARD:g("515097"),SEARCH_PLACE_TAB:g("515097"),PAGE_CARD:g("515097"),CAROUSEL_CARD:g("515097"),LOCATION_CARD_MSITE:g("515097"),PAGES_HIGHLIGHT_COLUMN_REDESIGN_RELATED_PAGES:g("515097"),MESSENGER_PAGE_SHARE:g("515097")},C=function(){return b("PageRecommendationsCircleScoreQuery.graphql")};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$2()};d.componentDidUpdate=function(a,b){this.props.pageIDString!==a.pageIDString&&this.$2()};d.componentWillUnmount=function(){this.$1=!0};d.render=function(){this.props.pageIDString!==void 0||i(0,370);return this.state===null||this.state.rating===void 0||this.state.showCircle===!1||this.state.color===void 0?null:b("React").createElement("div",{className:"_672g"+(this.props.scoreType===k?" _1v1b":"")+(this.props.scoreType===l?" _1v1c":"")+(this.props.scoreType===m?" _1v1e":"")+(this.props.scoreType===n?" _1v1h":"")+(this.props.scoreType===o?" _1f47":"")+(this.props.scoreType===p?" _4okn":"")+(this.props.scoreType===q?" _67wa":"")+(this.props.scoreType===r?" _1nnu":"")+(this.props.scoreType===s?" _6d33":"")+(this.props.scoreType===t?" _6e2c":"")+(this.props.scoreType===u?" _6g9k":"")+(this.props.scoreType===v?" _6hp2":"")+(this.props.scoreType===w?" _6hp3":"")+(this.props.scoreType===x?" _82s9":"")+(this.props.scoreType===y?" _6huo":"")+(this.props.scoreType===z?" _6j7b":"")+(this.props.scoreType===A?" _6khv":""),style:{backgroundColor:this.state.color}},this.$3())};d.$2=function(){var a=this;b("promiseDone")(j(b("RelayFBEnvironment"),C,{pageID:this.props.pageIDString,callsite:this.props.scoreType}),function(b){var c,d;d=(d=b.page)!=null?(d=d.aggregated_score_info)!=null?d.score:d:d;c=(c=b.page)!=null?(c=c.aggregated_score_info)!=null?c.show_circle:c:c;b=(b=b.page)!=null?(b=b.aggregated_score_info)!=null?b.color:b:b;a.$1||a.setState({rating:d!==null?Number(d):void 0,showCircle:c!==null?c:!1,color:b!==null?b:void 0})})};d.$3=function(){var a=Number(this.state.rating);if(a===10)return b("formatNumber")(a,0);return a===0&&this.state.showCircle===!0?this.$4():b("formatNumber")(a,1)};d.$4=function(){if(this.props.scoreType===x){this.setState({showCircle:!1});return null}var a=B[this.props.scoreType];return b("React").createElement(b("Image.react"),{src:a})};return c}(b("React").Component);e.exports=a}),null);
__d("PercentVisible",[],(function(a,b,c,d,e,f){e.exports={NO_VISIBLE:-1,VISIBLE_0_PCT:0,VISIBLE_50_PCT:50,VISIBLE_100_PCT:100}}),null);
__d("VisibilityTracking",["Banzai","BrowseClientEventLogger","DataAttributeUtils","ErrorUtils","ScriptPath","SubscriptionsHandler","Visibility","VisibilityTrackingHelper","collectDataAttributes","getElementPosition","gkx","pageID","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g="visibility_tracking",h="[data-vistracking]",i=500,j=50,k=50,l=50,m=50,n=0;a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this;a=a||{};if(!a.bypass_banzai_check&&!b("Banzai").isEnabled(g))return;this.visibleElementInfo={};this.doNotForceExitOnUpdateVisible=!1;this.getDataFromConfig(a);b("Visibility").addListener(b("Visibility").VISIBLE,b("ErrorUtils").guard(function(){return c.fireEvent("browser")},"VisibilityTracking:visible",this));b("Visibility").addListener(b("Visibility").HIDDEN,b("ErrorUtils").guard(function(){return c.clearAllVisibleElements("browser")},"VisibilityTracking:hidden",this));b("ScriptPath").subscribe(b("ErrorUtils").guard(function(){return c.updateVisibleElements()},"VisibilityTracking:scriptPath",this));b("Banzai").subscribe(b("Banzai").SHUTDOWN,b("ErrorUtils").guard(function(){return c.onUnload()},"VisibilityTracking:banzaiShutdown",this));this.fireEventCallback=b("throttle").acrossTransitions(b("ErrorUtils").guard(function(a){return c.fireEvent(a)},"VisibilityTracking:fireEventCallback",this),this.timeout,this);this.listeners=new(b("SubscriptionsHandler"))();b("VisibilityTrackingHelper").getEventListeners(function(){return c.fireEventCallback()},a).forEach(function(a){this.listeners.addSubscriptions(a)},this);this.extraInit&&b("ErrorUtils").applyWithGuard(this.extraInit.bind(this))}var c=a.prototype;c.getDataFromConfig=function(a){this.config=a,this.root=a.root||document.documentElement,this.selector=a.selector||h,this.visibleEventCallBack=a.visibleEventCallBack||function(){},this.timeout=a.timeout!==void 0?a.timeout:i,this.minOffsetVisibleFromBottom=a.minOffsetVisibleFromBottom!==void 0?a.minOffsetVisibleFromBottom:j,this.minOffsetVisibleFromTop=a.minOffsetVisibleFromTop!==void 0?a.minOffsetVisibleFromTop:k,this.minOffsetVisibleFromLeft=a.minOffsetVisibleFromLeft!==void 0?a.minOffsetVisibleFromLeft:l,this.minOffsetVisibleFromRight=a.minOffsetVisibleFromRight!==void 0?a.minOffsetVisibleFromRight:m,this.handleAllHiddenEvents=a.handleAllHiddenEvents!==void 0?a.handleAllHiddenEvents:!1,this.handleAllVisibleEvents=a.handleAllVisibleEvents!==void 0?a.handleAllVisibleEvents:!1,this.cacheTrackedElements=a.cacheTrackedElements!==void 0?a.cacheTrackedElements:!1,this.addCauseToAllHiddenEvents=a.addCauseToAllHiddenEvents!=void 0?a.addCauseToAllHiddenEvents:!1,this.doNotForceExitOnUpdateVisible=a.doNotForceExitOnUpdateVisible!=void 0?a.doNotForceExitOnUpdateVisible:!1};c.getAllTrackedElements=function(){__p&&__p();if(!this.allTrackedElements){this.allTrackedElements={};var a=[];this.config.is_xtrackable?a=b("DataAttributeUtils").getXTrackableElements():this.root&&this.root.querySelectorAll&&(a=this.root.querySelectorAll(this.selector));for(var c=0;c<a.length;c++){var d=this.getElementID(a[c]);this.allTrackedElements[d.toString()]=a[c]}}return this.allTrackedElements};c.refreshAllTrackedElements=function(){delete this.allTrackedElements;return this.getAllTrackedElements()};c.getDataToLog=function(a){a=Object.assign(b("collectDataAttributes")(a,["gt"]).gt,{client_time:Date.now()/1e3,time_spent_id:b("pageID"),script_path:b("ScriptPath").getScriptPath()});return a};c.getElementID=function(a){var b=a.$1;if(b)return b;a.$1=++n;return n};c.sendDataToLog=function(a){b("BrowseClientEventLogger").maybeLogVisiblityEvent(a),b("Banzai").post(g,a)};c.isInstreamAdStoryElement=function(a){return!1};c.fireEvent=function(a){a===void 0&&(a="default");var c=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var d in c){var e=c[d],f=b("VisibilityTrackingHelper").getViewportInfo();f=this.isVisible(e,f);!f&&(d in this.visibleElementInfo||this.handleAllHiddenEvents)?this.handleEvent(e,{name:"hidden",cause:a}):f&&(!(d in this.visibleElementInfo)||this.handleAllVisibleEvents)&&this.handleEvent(e,{name:"visible",cause:a})}this.clearUntrackedVisibleElements()};c.isVisible=function(a,c){if(a==null)return!1;if(b("gkx")("820050")&&b("VisibilityTrackingHelper").isSnippetFlyoutVisible())return!1;a=b("getElementPosition")(a);return!!(a.x||a.y||a.width||a.height)&&a.y+a.height>=this.minOffsetVisibleFromTop&&a.y<=c.height-this.minOffsetVisibleFromBottom&&a.x+a.width>=this.minOffsetVisibleFromLeft&&a.x<=c.width-this.minOffsetVisibleFromRight};c.handleEvent=function(a,c){__p&&__p();var d=this.getElementID(a).toString(),e=this.getDataToLog(a),f;if(c.name==="visible"){var g=Math.floor(Date.now()/1e3);f=b("pageID").concat(":",g.toString(),":",this.getElementID(a).toString());this.visibleElementInfo[d]={visibility_id:f,elem:a}}else if(c.name==="hidden"){d in this.visibleElementInfo&&(f=this.visibleElementInfo[d].visibility_id,delete this.visibleElementInfo[d]);if(c.cause==="browser"||this.doNotForceExitOnUpdateVisible&&c.cause==="updateVisible")return}this.sendDataToLog(Object.assign(e,{event:c.name,visibility_id:f}))};c.clearUntrackedVisibleElements=function(){var a=this.getAllTrackedElements();for(var b in this.visibleElementInfo)if(!(b in a)){var c=this.visibleElementInfo[b];c.elem&&this.handleEvent(c.elem,{name:"hidden",cause:"removed"})}};c.clearAllVisibleElements=function(a){a===void 0&&(a="default");var b=this.getAllTrackedElements();for(var c in b)c in this.visibleElementInfo&&this.handleEvent(b[c],{name:"hidden",cause:a});this.clearUntrackedVisibleElements()};c.updateVisibleElements=function(){this.addCauseToAllHiddenEvents?this.clearAllVisibleElements("updateVisible"):this.clearAllVisibleElements(),this.fireEvent()};c.refreshAndFireEvent=function(a){this.refreshAllTrackedElements(),this.fireEventCallback(a)};c.onUnload=function(){this.addCauseToAllHiddenEvents?this.clearAllVisibleElements("unload"):this.clearAllVisibleElements(),this.listeners&&(this.listeners.release(),this.listeners=null),this.extraCleanup&&b("ErrorUtils").applyWithGuard(this.extraCleanup.bind(this))};a.init=function(b){return new a(b)};return a}();e.exports=a}),null);