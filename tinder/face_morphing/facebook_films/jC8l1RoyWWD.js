if (self.CavalryLogger) { CavalryLogger.start_js(["o1exa"]); }

__d("NotificationURI",["BusinessURI.brands","URI","VideoPermalinkURI","isDevelopersURI","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();a={localize:function(a){__p&&__p();try{a=b("BusinessURI.brands")(a)}catch(b){return a.toString()}var c=a.getSubdomain();c=a.getUnqualifiedURI().getQualifiedURI().setSubdomain(c);if(b("isDevelopersURI")(a)){a=c.getDomain().split(".");a.length>=2&&(a.splice(-2,1,"facebook")[0]==="workplace"&&c.setDomain(a.join(".")))}return c.toString()},snowliftable:function(a){if(!a)return!1;a=new(b("URI"))(a);var c=a.getQueryData();return b("isFacebookURI")(a)&&(b("VideoPermalinkURI").isValid(a)||"fbid"in c)},isVaultSetURI:function(a){return this._areEquals(a,"/ajax/vault/sharer_preview.php")},isAlbumDraftRecoveryDialogURI:function(a){return this._areEquals(a,"/ajax/photos/upload/overlay/")},isQuicksilverURI:function(a){return this._areEquals(a,"/games/quicksilver/spotlight/")},isDirectURI:function(a){return this._startsWith(a,"/direct/")},isIGAccountCreationURI:function(a){return this._areEquals(a,"/ads/growth/aymt/instagram/account-creation-dialog/")},_areEquals:function(a,c){if(!a)return!1;a=new(b("URI"))(a);return b("isFacebookURI")(a)&&a.getPath()===c},_startsWith:function(a,c){if(!a)return!1;a=new(b("URI"))(a);return b("isFacebookURI")(a)&&a.getPath().startsWith(c)}};e.exports=a}),null);
__d("NotificationInterpolator",["cx","Badge.react","React","TextWithEmoticons.react","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=null;((c=c.entity)!=null?(c=c.work_foreign_entity_info)!=null?c.type:c:c)==="FOREIGN"&&(d=b("React").createElement(b("Badge.react"),{type:"work_non_coworker"}));typeof a==="string"&&(a=b("React").createElement(b("TextWithEmoticons.react"),{text:a}));return b("React").createElement("span",{className:b("joinClasses")("fwb","_6btd")},a,d)}e.exports=a}),null);
__d("notificationListRendererIsStoryOnlyLiveVideoNotification",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.renderer_data;return a==null?!1:a.__typename==="LiveVideoNotificationRendererData"&&!!a.bucket_data}e.exports=a}),null);
__d("XLiveVideoLoadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/video/load/",{video_id:{type:"FBID",required:!0}})}),null);
__d("notificationListRendererOpenNotification",["AsyncRequest","Bootloader","NotificationURI","PageTransitions","URI","VideoChainingCaller","XLiveVideoLoadController","notificationListRendererIsStoryOnlyLiveVideoNotification"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=c.renderer_data;if(d==null)return;if(!b("notificationListRendererIsStoryOnlyLiveVideoNotification")(c)&&(a.metaKey||a.ctrlKey||a.button===1))return;if(d.__typename==="LiveVideoNotificationRendererData"){a.preventDefault();d=b("XLiveVideoLoadController").getURIBuilder().setFBID("video_id",d.video_id).getURI();d=new(b("AsyncRequest"))(d).setHandler(function(d){d.payload?g(a,c):b("PageTransitions").go(c.url)});d.send()}}function g(a,b){var c=b.renderer_data;if(c==null)return;c.bucket_data?h(a,c):c.can_render_in_tahoe&&i(a,c,b)}function h(a,c){b("Bootloader").loadModules(["FBStoriesLiveNotificationHandler"],function(a){a.renderLiveStory(c)},"notificationListRendererOpenNotification")}function i(a,c,d){b("Bootloader").loadModules(["TahoeController"],function(a){var e=b("NotificationURI").localize(new(b("URI"))(d.url)),f=c.video_channel_caller;a.openFromVideoLink(new(b("URI"))(e),{channelID:c.video_channel_id,caller:f?(a=b("VideoChainingCaller"))!=null?a[f]:a:null})},"notificationListRendererOpenNotification")}e.exports=a}),null);
__d("NubController",["csx","ArbiterMixin","Dock"],(function(a,b,c,d,e,f,g){__p&&__p();function a(){}Object.assign(a.prototype,b("ArbiterMixin"),{init:function(a){this.el=a;this.nubButton=a.querySelector(".fbNubButton");this.closeButton=a.querySelector("._2dv8");b("Dock").registerNubController(a,this);this.closeButton&&this.closeButton.addEventListener("click",this.hide.bind(this));return this},buttonContentChanged:function(){this.inform("nub/button/content-changed")},flyoutContentChanged:function(){this.inform("nub/flyout/content-changed")},hide:function(){b("Dock").hide(this.el)},show:function(){b("Dock").show(this.el)}});e.exports=a}),null);
__d("ReactNub",["csx","DOM","Focus","NubController","Parent","React","ReactDOM","getActiveElement"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this)||this;e.$ReactNub4=function(){b("ReactDOM").unmountComponentAtNode(e.$ReactNub1),b("Focus").set(e.$ReactNub3),e.$ReactNub3!==b("getActiveElement")()&&b("Focus").set(e.nubButton)};e.$ReactNub5=function(){e.$ReactNub3=b("getActiveElement")();var a=e.$ReactNub2;b("ReactDOM").render(b("React").createElement(a,{onContentChanged:e.flyoutContentChanged.bind(babelHelpers.assertThisInitialized(e))}),e.$ReactNub1);b("Focus").set(e.closeButton)};e.$ReactNub1=c;e.$ReactNub2=d;d=b("Parent").bySelector(c,"._50-v");a.prototype.init.call(babelHelpers.assertThisInitialized(e),d);b("DOM").empty(c);e.subscribe("hide",e.$ReactNub4);e.subscribe("show",e.$ReactNub5);return e}return c}(b("NubController"));e.exports=a}),null);
__d("PYMKFriendingAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",MAKE:"make",ACCEPT:"accept",MAKE_BLOCK:"make_block",MAKE_ERROR:"make_error",MAKE_WARN:"make_warn",ACCEPT_ERROR:"accept_error",REJECT:"reject",REJECT_ERROR:"reject_error",HIDE:"hide",HIDE_ERROR:"hide_error",CANCEL:"cancel",CANCEL_ERROR:"cancel_error",MARK_SPAM:"mark_spam",MARK_SPAM_ERROR:"mark_spam_error",UNMARK_SPAM:"unmark_spam",UNMARK_SPAM_ERROR:"unmark_spam_error"})}),null);
__d("XPymkFunnelLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pymk/funnel_logging/",{event_ts:{type:"Int",required:!0},query_id:{type:"Int"},candidate_id:{type:"Int"},signature:{type:"Int"},loc:{type:"String",required:!0},ref:{type:"String"},action:{type:"Enum",required:!0,enumType:1}})}),null);
__d("PymkFunnelLogger",["AsyncRequest","DOMQuery","PYMKFriendingAction","XPymkFunnelLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={setupListeners:function(a,b,c,d,e){this._setupForSingleElement(a,b,c,"add"),this._setupForSingleElement(a,b,d,"click"),this._setupForSingleElement(a,b,e,"click")},logImpression:function(a,c,d){this._logEvent(a,b("PYMKFriendingAction").IMPRESSION,c,d)},logXOut:function(a,b,c){this._logEvent(a,"hide",b,c)},_logEvent:function(a,c,d,e){a=b("XPymkFunnelLoggingController").getURIBuilder().setInt("candidate_id",a).setInt("signature",d).setInt("event_ts",Math.floor(Date.now()/1e3)).setEnum("action",c).setString("loc",e).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send()},_setupForSingleElement:function(a,c,d,e){Event.listen(d,"click",function(d){d=a.getAttribute("data-signature");var f=b("DOMQuery").find(a,"input.friendBrowserID");f=parseInt(f.value,10);this._logEvent(f,e,d,c)}.bind(this))}};e.exports=a}),null);
__d("XFriendRequestIHEventLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/requests/interaction_history_logging/",{target_id:{type:"FBID",required:!0},log_event:{type:"String",required:!0}})}),null);
__d("FriendRequestIHEventLogger",["AsyncRequest","Event","XFriendRequestIHEventLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={setupJewelListeners:function(a,b,c){this._setupForJewelSingleElement(a,b,"click"),c&&this._setupForJewelSingleElement(a,c,"click")},logImpression:function(a){this._logEvent(a,"impression")},_logEvent:function(a,c){if(isNaN(a))return;a=b("XFriendRequestIHEventLoggingController").getURIBuilder().setFBID("target_id",a).setString("log_event",c).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send()},_setupForJewelSingleElement:function(a,c,d){b("Event").listen(c,"click",function(b){b=a.getAttribute("id");if(b==null)return;b=b.substring(0,b.length-6);this._logEvent(b,d)}.bind(this))}};e.exports=a}),null);
__d("FriendRequestHowFound",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADD_FRIEND_PROTILE_BUTTON:"add_friend_protile_button",ADDFRIEND_DOT_PHP:"addfriend",AIM_IMPORTER:"aim_importer",API:"api",API_CONTACTS_UPLOAD:"api_contacts_upload",BROWSE:"browse",CALL_LOG:"call_log",CI_BACKGROUND:"ci_bkg",CI_CONTINUOUS:"ci_continuous",CI_FRIENDS_SUGGESTION:"ci_friends_suggestion",CI_PYMK:"ci_pymk",CI_PYMK_NUX:"ci_pymk_nux",CI_PYMK_READ:"ci_pymk_read",CI_PYMK_UPLOAD:"ci_pymk_upload",CI_SOFTMATCH_PYMK:"ci_softmatch_pymk",CLASSMATE_SEARCH:"classmate_search",CONTACT_CARD:"contact_card",CONTACT_IMPORTER:"friend_finder",CONTACT_IMPORTER_KAIOS:"contact_importer_kaios",CONTACT_IMPORTER_NUX:"friend_finder_nux",CONTACT_IMPORTER_READ:"friend_finder_read",CONTACT_IMPORTER_UPLOAD:"friend_finder_upload",CONTACT_SUGGEST_FRIEND:"contact_suggest_friend",CONTACTS_PEOPLE:"contacts_people",CONTEXTUAL_PROFILE_GROUPS:"contextual_profile_groups",CONTEXTUAL_PROFILE_HEADER:"contextual_profile_header",CONTEXTUAL_PROFILE_MEET_NEW_FRIENDS:"contextual_profile_meet_new_friends",CONTEXTUAL_PROFILE_PEOPLE_DISCOVERY:"contextual_profile_people_discovery",COWORKER_SEARCH:"coworker_search",CRISIS:"crisis",DATA_CLEANUP:"data_cleanup",DISCOVER_FEED:"discover_feed",EMAIL:"email",EMPTY_FEED:"empty_feed",ENTITY_CARDS:"entity_cards",ESCAPE_HATCH:"escape_hatch",EVENT_GYMK:"event_gymk",EXTERNAL_CONVERT:"external_convert",FAMILY_REQUEST:"family_request",FAMILY_SUGGEST:"family_suggest",FEED_CONTEXT:"feed_context",FEED_FRIENDABLE_HEADER:"feed_friendable_header",FEED_PYMK:"feed_pymk",FRIEND_BROWSER:"friend_browser",FRIEND_BROWSER_FIND_FRIENDS:"friend_browser_ff",FRIEND_BROWSER_NUX:"friend_browser_nux",FRIEND_BROWSER_SEARCH:"friend_browser_s",FRIEND_BROWSER_WELCOME_DASH:"friend_browser_wd",FRIEND_CENTER_FRIENDS:"friend_center_friends",FRIEND_CENTER_OUTGOING_REQ:"friend_center_outgoing_req",FRIEND_CENTER_REQUESTS:"friend_center_requests",FRIEND_CENTER_SEARCH:"friend_center_search",FRIEND_LIST_PROFILE:"friend_list_profile",FRIENDING_CARD:"friending_card",FRIENDING_CHECKUP_EVENTS:"friending_checkup_events",FRIENDING_CHECKUP_IG:"friending_checkup_ig",FRIENDING_CHECKUP_MESSENGER:"friending_checkup_messenger",FRIENDING_CHECKUP_POSTS:"friending_checkup_posts",FRIENDING_RADAR:"friending_radar",FRIENDING_TAB_UPSELL:"friending_tab_upsell",FRIENDS_HOME_FALLBACK:"friends_home_fallback",FRIENDS_HOME_FRIENDS:"friends_home_friends",FRIENDS_HOME_MAIN:"friends_home_main",FRIENDS_HOME_SUGGESTIONS:"friends_home_suggestions",FRIENDSHAKE:"friendshake",GRIFFIN_TAB:"griffin_tab",GROUP_COMMERCE:"group_commerce",GROUP_MEMBER_BIO_DIALOG:"group_member_bio_dialog",GROUP_MEMBER_LIST:"group_member_list",GROUP_MEMBERS:"group_members",GROUPS_MEMBER_LIST:"groups_member_list",GROUPS_MEMBER_PROFILE:"groups_member_profile",HOVERCARD:"hovercard",HOVERCARD_PYMK:"hovercard_pymk",INSTAGRAM_CONTACT_IMPORTER:"instagram_contact_importer",INTERN_PROFILE:"intern_profile",INVITATION:"friend_invitation",INVITE_MATCH:"invite_existing_user",INVITE_MERGE:"merge_via_invite",IORG_TOPUP:"iorg_topup",JAPAN_MOBILE_INVITE:"japan_mobile_invite",JOB_CONNECT_SEARCH:"job_connect_search",KEYWORD_SEARCH:"keyword_search",MEDLEY:"medley",MEMORIAL_CONTACT_TOOLS:"memorial_contact_tools",MERGE:"merge",MESSAGE:"message",MESSENGER_THREADVIEW_BANNER:"messenger_threadview_banner",MSITE:"friend_msite",MY_QR_CODE:"my_qr_code",NEARBY_FRIENDS:"nearby_friends",NETEGO_FRIEND_REQUESTS:"netego_friend_requests",NETEGO_PYMK:"netego_pymk",NETEGO_SUGGEST_GROUP_FRIENDS:"netego_suggest_group_friends",NEWSFEED:"newsfeed",NULLSTATE_SEARCH_PYMK_UPSELL:"nullstate_search_pymk_upsell",OTHER:"friend_other",PAIR_SEARCH:"pair_search",PARENT_KID:"parent_kid",PHOTO_TAG:"photo_tag",PIYS:"people_in_your_school",PROFILE_BROWSER:"profile_browser",PROFILE_BROWSER_EVENTS:"profile_browser_events",PROFILE_BUTTON:"profile_button",PROFILE_CHANNEL_FOLLOWERS:"profile_channel_followers",PROFILE_DISCOVERY_LIST:"profile_discovery_list",PROFILE_FRIENDS_BOX:"friends_box",PROFILE_FRIENDS_TAB:"profile_friends",PROFILE_INTENT_BANNER:"profile_discovery_intent_banner",PROFILE_INTRODUCTION:"profile_introduction",PROFILE_LIST:"profile_list",PROFILE_SHARE:"profile_share",PYMK:"people_you_may_know",PYMK_EXPERIMENT_MEGAPHONE_EF:"pymk_experiment_megaphone_ef",PYMK_FALLBACK:"pymk_fallback",PYMK_FRIENDS_TAB:"pymk_friends_tab",PYMK_MEGAPHONE:"pymk_megaphone",PYMK_MEGAPHONE_SCALABLE_EF:"pymk_megaphone_scalable_ef",PYMK_PUSH_NOTIF:"pymk_push_notif",PYMK_SIDESHOW:"pymk_sideshow",PYMK_STICKY_MEGAPHONE_EF:"pymk_sticky_megaphone_ef",PYMK_TIMELINE_CHAIN:"pymk_timeline_chain",PYMK_UPSELL:"pymk_upsell",QRCODE_ACTIONSHEET:"qrcode_actionsheet",QUICK_FRIENDING:"quick_friending",REACTION_PIVOTS:"reaction_pivots",RECENT_FRIENDSHIPS_MEGAPHONE:"recent_friendships_megaphone",REMINDERS:"reminders",REQS_MAIN_PYMK:"requests_page_pymk",REQUESTS_JEWEL:"requests_jewel",RUN_OLD_PATH:"run_old_path",SEARCH:"search",SEARCH_CHAINED_PYMK:"search_chained_pymk",SGM:"sgm",SHORTCUT:"shortcut",SMS:"sms",SPOTLIGHT_PYMK:"spotlight_pymk",SUGGESTION:"friend_suggestion",TEST:"test",TICKER:"ticker",TIMELINE_COLLECTIONS_PYMK:"timeline_collections_pymk",TIMELINE_FRIENDS_COLLECTION:"timeline_friends_collection",TIMELINE_FRIENDS_PAGELET:"timeline_friends_pagelet",TIMELINE_PYMK:"timeline_pymk",TIMELINE_UNIT:"timeline_unit",TWITTER_IMPORTER:"twitter_importer",UFI_COMMENT:"comment",VERTEX:"vertex",WEB_SEARCH:"web_search",WELCOME_FEED_OUTGOING_UNIT:"welcome_feed_outgoing_unit",WIZARD_CLASSMATES_COWORKERS:"wizard_classmates_coworkers",WIZARD_IMPORTERS:"wizard_importers",WIZARD_SEARCH:"wizard_search",WIZARD_SEARCH_PYMK:"wizard_search_pymk"})}),null);
__d("WebFriendingRequests",["Arbiter","DOM","Event","FriendRequestHowFound","FriendRequestIHEventLogger","MarauderLogger","PymkFunnelLogger","Vector","debounceCore"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a,c){__p&&__p();this._pymkBox=a;this._lastPymkSeen=-1;this._recordPYMKImpression();b("Event").listen(window,"scroll",b("debounceCore")(this._recordPYMKImpression.bind(this),100));b("Event").listen(window,"resize",b("debounceCore")(this._recordPYMKImpression.bind(this),100));b("Arbiter").subscribe("pymk-x-out",this._handleXout.bind(this));this._requestsBox=c;if(!this._requestsBox)return;this._lastRequestSeen=-1;this._recordFriendRequestImpression();b("Event").listen(window,"scroll",b("debounceCore")(this._recordFriendRequestImpression.bind(this),100));b("Event").listen(window,"resize",b("debounceCore")(this._recordFriendRequestImpression.bind(this),100))},_recordPYMKImpression:function(){__p&&__p();var a=b("DOM").scry(this._pymkBox,"li.friendBrowserListUnit"),c=b("Vector").getViewportDimensions().y,d=a.length-1;while(d>this._lastPymkSeen){var e=b("Vector").getElementPosition(a[d],"viewport").y;if(e>0&&e+b("Vector").getElementDimensions(a[d]).y<=c)break;d-=1}e=d;while(d>this._lastPymkSeen)this.logPYMKImpression(a[d],"friends_center"),d-=1;this._lastPymkSeen=Math.max(this._lastPymkSeen,e)},_recordFriendRequestImpression:function(){__p&&__p();var a=b("DOM").scry(this._requestsBox,"div.friendRequestItem"),c=b("Vector").getViewportDimensions().y,d=a.length-1;while(d>this._lastRequestSeen){var e=b("Vector").getElementPosition(a[d],"viewport").y;if(e>0&&e+b("Vector").getElementDimensions(a[d]).y<=c)break;d-=1}e=d;while(d>this._lastRequestSeen){c=a[d].getAttribute("data-id");var f={request_id:c,request_location:b("FriendRequestHowFound").FRIEND_CENTER_REQUESTS};b("MarauderLogger").log("request_seen","friend_request_waterfall",f);b("FriendRequestIHEventLogger").logImpression(c);d-=1}this._lastRequestSeen=Math.max(this._lastRequestSeen,e)},_handleXout:function(){this._lastPymkSeen=Math.max(this._lastPymkSeen-1,-1),this._recordPYMKImpression()},logPYMKImpression:function(a,c){var d=b("DOM").find(a,"input.friendBrowserID");d=parseInt(d.value,10);a=parseInt(a.getAttribute("data-signature"),10);b("PymkFunnelLogger").logImpression(d,a,c)}};e.exports=a}),null);
__d("JewelQPLogging",["QPRenderer"],(function(a,b,c,d,e,f){var g=!1,h=null,i=!1;function j(){if(i)return;g&&h&&(i=!0,b("QPRenderer").logEvent(String(h.promotion_id),"view",h.instance_log_data?h.instance_log_data:{}))}a={onJewelOpened:function(){g=!0,j()},updateQPLogData:function(a){h=a,j()}};e.exports=a}),null);
__d("RequestsJewelStore",["Arbiter","ArbiterMixin","ChannelConstants"],(function(a,b,c,d,e,f){__p&&__p();a=babelHelpers["extends"]({},b("ArbiterMixin"),{_initialized:!1,_count:0,_requestList:{},addFriendRequests:function(a){Object.assign(this._requestList,a)},getRequestListKeys:function(){return Object.keys(this._requestList)},removeRequest:function(a){delete this._requestList[a]},getRequestCount:function(a){return this.getRequestListKeys().length},decrementCount:function(){this.setCount(Math.max(0,this._count-1))},setCount:function(a){b("Arbiter").inform("jewel/count-updated",{jewel:"requests",count:a},"state")},setupListeners:function(){__p&&__p();var a=this;if(this._initialized)return;this._initialized=!0;b("Arbiter").subscribe("jewel/count-updated",function(b,c){c.jewel==="requests"&&a._updateCount(c.count)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_requests_add"),function(b,c){return a._addRequest(c)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_friending_notifs"),function(b,c){return a._addNotification(c)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("mobile_requests_count"),function(b,c){return a._updateBadgeCountFromObject(c)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_requests_remove_old"),function(b,c){return a._removeOldRequest(c)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friend_requests_expired"),function(b,c){return a._refreshJewel(!0)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friend_requests_seen"),function(b,c){return a.setCount(0)})},_updateCount:function(a){var b=this._count!==a;this._count=a;b&&this.inform("countUpdated",a)},_addRequest:function(a){__p&&__p();if(!a)return;a=a.obj;var b=a.from;a=a.suggester;b=this._requestList[b];b||this.setCount(this._count+1);b=b?b.type:null;a=b===19&&!a;this.inform("addRequest",{shouldReplace:a,previousType:b})},_updateBadgeCountFromObject:function(a){if(!a)return;a=a.obj;a=a.num_unseen+a.num_friend_confirmed_unseen+a.num_expire_highlight_unseen;this._refreshJewel();this.setCount(a)},_addNotification:function(a){if(!a||a.obj.notif_type!=="friend_confirmed")return;this.inform("addNotification")},_removeOldRequest:function(a){if(!a)return;a=this._requestList[a.obj.from];if(!a)return;this.inform("removeOldRequest",a)},_refreshJewel:function(a){a===void 0&&(a=!1),this.inform("refreshJewel",a)}});e.exports=a}),null);
__d("XExpireFriendRequestsMutationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/requests/expire/",{from_m_jewel:{type:"Bool",defaultValue:!1}})}),null);
__d("XGigaboxxUpdateSeenTimeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/gigaboxx/endpoint/writesafe/update_last_seen_time/",{})}),null);
__d("RequestsJewelController",["invariant","Promise","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","Event","EventProfiler","Focus","FriendRequestIHEventLogger","JewelQPLogging","MarauderLogger","Parent","RequestsJewelStore","ScrollableArea","TimeSlice","WebFriendingRequests","XExpireFriendRequestsMutationController","XGigaboxxUpdateSeenTimeAsyncController","ge","getElementPosition","getViewportDimensions","promiseDone","requireWeak","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null;b("requireWeak")("FriendBrowserCheckboxController",function(a){return h=a});var i=31,j=600,k=30,l=160;a=function(){"use strict";__p&&__p();a.getInstance=function(){return this.$11};a.updateFromDOM=function(){var a=this.getInstance();a&&a.fromDom()};a.setupScroll=function(){var a=this.getInstance();a&&a.setupScroll()};a.setInitialHeight=function(){var a=this.getInstance();a&&a.updateHeight()};a.maybeLoadJewel=function(){var a=this.getInstance();a&&a.maybeLoadJewel()};a.isOpen=function(){var a=this.getInstance();return a?a.$2():!1};a.create=function(b,c){this.$11&&g(0,5550);return this.$11=new a(b,c)};a.setupJewelRefresh=function(){b("Arbiter").subscribe(["FriendRequest/confirmFromProfile","FriendRequest/deleteFromProfile"],function(a,c){a={};a.reloadcontent=!0;new(b("AsyncRequest"))().setURI("/ajax/requests/loader/").setData(a).setAllowCrossPageTransition(!0).send()})};function a(a,c){__p&&__p();var d=this;this.$2=c;this.$1=a;this.$4=-1;this.$5=-1;this.$10=b("Promise").resolve(!0);this.$8=function(a){var c=this;b("throttle").acrossTransitionsWithBlocking(function(){return c.$12(a)},5e3)()};b("RequestsJewelStore").subscribe("addRequest",this.$13.bind(this));b("RequestsJewelStore").subscribe("addNotification",function(){return d.$14()});b("RequestsJewelStore").subscribe("removeOldRequest",this.$15.bind(this));b("RequestsJewelStore").subscribe("refreshJewel",this.$16.bind(this));b("RequestsJewelStore").setupListeners();this.setupScroll();this.$17();this.$18();this.$19()}var c=a.prototype;c.fromDom=function(){var a=this,c={};b("DOMQuery").scry(this.$1,"li.objectListItem").forEach(function(b){b=b.getAttribute("id");if(b){b=a.$20(b);b&&b.requester&&(c[b.requester]=b)}});b("RequestsJewelStore").addFriendRequests(c);this.$21()};c.maybeLoadJewel=function(){var a=this;this.$9&&(this.$9(function(){a.openHandler()}),this.$9=null)};c.updateHeight=function(){var a=this.$22();a&&(a.style.height=this.$23()+"px")};c.markSeen=function(){b("promiseDone")(this.$10,function(){new(b("AsyncRequest"))(b("XGigaboxxUpdateSeenTimeAsyncController").getURIBuilder().getURI()).setMethod("POST").send()})};c.openHandler=function(){__p&&__p();!this.$6&&this.$2()&&(this.$6=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstRequestsJewelOpen"));b("Arbiter").inform("requestsJewel/opened");var a=b("ge")("fbRequestsJewelLoading"),c=this.$22();new(b("AsyncRequest"))().setURI(b("XExpireFriendRequestsMutationController").getURIBuilder().getURI()).send();if(!a&&!c)this.$9=b("TimeSlice").getGuardedContinuation("RequestsJewelController clickBeforeE2E continuation");else if(a)this.$8({log_impressions:!0});else{a=b("RequestsJewelStore").getRequestListKeys();a.length>0&&new(b("AsyncRequest"))().setAllowCrossPageTransition(!0).setURI("/friends/requests/log_impressions").setData({ids:a.join(","),ref:"jewel"}).send()}b("DOMQuery").scry(this.$1,"a.findFriendsLink").forEach(function(a){b("Focus").set(a)});c&&b("ScrollableArea").poke(c);b("JewelQPLogging").onJewelOpened()};c.closeHandler=function(){b("Arbiter").inform("requestsJewel/closed"),b("DOMQuery").scry(this.$1,"li.jewelItemNew").forEach(function(a){b("CSS").removeClass(a,"jewelItemNew")}),b("DOMQuery").scry(this.$1,"span.highlightedExpireText").forEach(function(a){b("CSS").removeClass(a,"highlightedExpireText")})};c.setupScroll=function(){var a=this.$22();a&&(this.$7=this.$24(),this.$3=0,b("ScrollableArea").getInstance(a).subscribe("scroll",this.$25.bind(this)),this.$26(),this.$27())};c.$17=function(){b("Event").listen(this.$1,"submit",function(a){a=b("Parent").byClass(a.getTarget(),"objectListItem");a&&(b("CSS").removeClass(a,"jewelItemNew"),b("CSS").addClass(a,"jewelItemResponded"))})};c.$18=function(){var a=this;b("Event").listen(window,"resize",b("throttle").acrossTransitions(function(){a.updateHeight()}))};c.$19=function(){var a=this;b("Arbiter").subscribe("pymk-x-out",function(b,c){b=c.location;(b==="pymk_jewel_first_page"||b==="pymk_jewel")&&a.$26()})};c.$28=function(a){a=parseInt(a,10);return isNaN(a)?null:a};c.$20=function(a){a=a.match(/^(\d+)_(\d+)/);return!a?null:{requester:this.$28(a[1]),type:this.$28(a[2])}};c.$29=function(a,b){return a==null||b==null?null:a+"_"+b};c.$30=function(a,b){return a==null||b==null?null:a+"_"+b+"_req"};a.$31=function(a){a=a.getAttribute("id");return a.substring(0,a.length-6)};c.$22=function(){return b("DOMQuery").scry(this.$1,".uiScrollableArea")[0]};c.$24=function(){return b("DOMQuery").scry(this.$1,".uiScrollableAreaWrap")[0]};c.$25=function(){__p&&__p();var a=b("DOMQuery").scry(this.$7,".uiMorePager").pop();if(a){var c=b("getElementPosition")(a).y,d=this.$22();c>0&&d&&b("CSS").addClass(d,"contentAfter");c=b("DOMQuery").find(a,"a");if(!c)return;d=b("getElementPosition")(c).y;if(d===this.$3)return;a=b("getElementPosition")(this.$7);a=a.y+a.height;if(d-300<a&&d>0){this.$3=d;a=c.getAttribute("ajaxify");a?new(b("AsyncRequest"))(a).setRelativeTo(c).setStatusElement(b("Parent").byClass(c,"stat_elem")).send():h&&h.getInstance("jewel").showMore()}}this.$26();this.$27()};c.$26=function(){__p&&__p();if(!this.$7)return;var a=b("getElementPosition")(this.$7);a=a.y+a.height;var c=b("DOMQuery").scry(this.$1,"li.friendBrowserListUnit"),d=c.length-1;while(d>this.$4){var e=b("getElementPosition")(c[d]),f=e.y;e=f+e.height;if(f>0&&e<=a)break;d-=1}f=d;while(d>this.$4)b("WebFriendingRequests").logPYMKImpression(c[d],"pymk_jewel"),d--;this.$4=Math.max(this.$4,f)};c.$27=function(){__p&&__p();if(!this.$7)return;var c=b("getElementPosition")(this.$7);c=c.y+c.height;var d=b("DOMQuery").scry(this.$1,"li.objectListItem"),e=d.length-1;while(e>this.$5){var f=b("getElementPosition")(d[e]),g=f.y;f=g+f.height;if(g>0&&f<=c)break;e-=1}g=e;while(e>this.$5){f=a.$31(d[e]);b("MarauderLogger").log("request_seen","friend_request_waterfall",{request_id:f,request_location:"requests_jewel"});b("FriendRequestIHEventLogger").logImpression(f);e-=1}this.$5=Math.max(this.$5,g)};c.$12=function(a){a===void 0&&(a={}),this.$10=new(b("Promise"))(function(c,d){var e=!b("ge")("fbRequestsJewelLoading");new(b("AsyncRequest"))().setURI("/ajax/requests/loader/").setData(babelHelpers["extends"]({},a,{reloadcontent:e})).setFinallyHandler(function(a){!a.getError()?c(!0):d()}).send()})};c.$14=function(){if(this.$2())return;this.$8()};c.$13=function(a,b){a=b.shouldReplace;b=b.previousType;if(!a&&(b||this.$2()))return;this.$8()};c.$15=function(a,c){a=c.requester;c=c.type;if(this.$2()||b("ge")("fbRequestsJewelLoading")!=null)return;var d=this.$29(a,c),e=d&&b("ge")(d);e||(d=this.$30(a,c),e=b("ge")(d));e&&(b("CSS").hasClass(e,"jewelItemNew")&&b("RequestsJewelStore").decrementCount(),b("CSS").hasClass(e,"jewelItemResponded")||(b("DOM").remove(e),b("RequestsJewelStore").removeRequest(a),this.$21()))};c.$16=function(a,b){if(b!==!0&&this.$2())return;this.$8()};c.$21=function(){b("DOMQuery").scry(this.$1,"li.empty").forEach(function(a){b("CSS").conditionShow(a,b("RequestsJewelStore").getRequestCount()<=0)})};c.$23=function(){return Math.min(Math.max(b("getViewportDimensions")().height-l,k),j)+i};return a}();a.$11=null;e.exports=a}),null);
__d("NotifTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REACT_BLUE_BAR_JEWEL:"react_blue_bar_jewel",NON_REACT_BLUE_BAR_JEWEL:"non_react_blue_bar_jewel",REACT_NOTIF_LIST:"react_notif_list",NOTIF_LIST_ITEM:"notif_list_item",SEE_ALL_LIST:"see_all_list",REACT_NOTIF_JEWEL_FLYOUT:"react_notif_jewel_flyout",NON_REACT_NOTIF_JEWEL_FLYOUT:"non_react_notif_jewel_flyout",CHEVRON:"chevron",REACT_MARK_ALL_AS_READ_LINK:"react_mark_all_as_read_link",NON_REACT_MARK_ALL_AS_READ_LINK:"non_react_mark_all_as_read_link",NOTIFICATION_SOUND_SETTING:"notifiation_sound_setting",NOTIFICATION_SOUND_SETTING_SELECTOR:"notifiation_sound_setting_selector",MESSAGE_SOUND_SETTING:"message_sound_setting",MESSAGE_SOUND_SETTING_SELECTOR:"message_sound_setting_selector",CLOSE_FRIEND_ACTIVITY_SELECTOR:"close_friend_activity_selector",BIRTHDAY_SELECTOR:"birthday_selector",ON_THIS_DAY_SELECTOR:"on_this_day_selector",TAGS_SELECTOR:"tags_selector",LIVE_VIDEO_SELECTOR:"live_video_selector",REACT_BADGE_COUNT_CONTAINER:"react_badge_count_container",NON_REACT_BADGE_COUNT_CONTAINER:"non_react_badge_count_container",BEEPER_LIST:"beeper_list",NON_REACT_SETTING_LINK:"non_react_setting_link",REACT_SETTING_LINK:"react_setting_link",GEOGRAPHIC_SUBSCRIPTION_SELECTOR:"geographic_subscription_selector",NOTIF_LIST_ITEM_LINK:"notif_list_item_link",NOTIF_READ_TOGGLE_BUTTON:"notif_read_toggle_button",NOTIF_CHEVRON_BUTTON:"notif_chevron_button",NOTIF_ITEM_OPTION_UNDO:"notif_item_option_undo"})}),null);