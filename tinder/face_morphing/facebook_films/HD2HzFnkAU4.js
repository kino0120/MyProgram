if (self.CavalryLogger) { CavalryLogger.start_js(["SOPeK"]); }

__d("ReactShareDialogLoggingStore",["ComposerShareNowEntryPoints","FunnelLogger","MessengerBootloadedSecondarySearchLogger","MessengerSecondarySearchFunnelConstants","ReactComposerActionTypes","ReactComposerAudienceActionTypes","ReactComposerLoggingName","ReactComposerShareNowActionTypes","ReactComposerStatusActionType","ReactComposerStoreBase","ReactComposerTaggerActionType","ReactComposerTaggerType","ReactShareDialogComposerActionType","ReactShareDialogComposerStore","ReactComposerStatusStore","ShareAudience","ShareMenuEventShareType","ShareMetricsLoggingController"],(function(a,b,c,d,e,f){__p&&__p();var g="WWW_FEED_SHARE_DIALOG_FUNNEL";a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;c=a.call(this,function(){return{audience:b("ShareAudience").UNKNOWN,triggeredFrom:b("ReactComposerLoggingName").OTHERS}},function(a){d.__onDispatch(a)})||this;d=babelHelpers.assertThisInitialized(c);c.$ReactShareDialogLoggingStore2=0;c.$ReactShareDialogLoggingStore3=!1;return c}var d=c.prototype;d.__onDispatch=function(a){__p&&__p();switch(a.type){case b("ReactComposerShareNowActionTypes").ADD_TO_STORY_NOW:this.$ReactShareDialogLoggingStore4(a);break;case b("ReactComposerShareNowActionTypes").ADD_TO_STORY:this.$ReactShareDialogLoggingStore5(a);break;case b("ReactComposerShareNowActionTypes").CANCEL_SHARE:this.$ReactShareDialogLoggingStore6(a);break;case b("ReactComposerShareNowActionTypes").SHOW_SHARENOW_MENU:this.$ReactShareDialogLoggingStore7(a);break;case b("ReactComposerShareNowActionTypes").SHARE_NOW:this.$ReactShareDialogLoggingStore8(a);break;case b("ReactComposerShareNowActionTypes").OPEN_FRIEND_TIMELINE_DIALOG:this.$ReactShareDialogLoggingStore9(a);break;case b("ReactComposerShareNowActionTypes").OPEN_INVITE_FRIENDS_TO_DONATE:this.$ReactShareDialogLoggingStore10(a);break;case b("ReactComposerShareNowActionTypes").OPEN_SHARE_TO_PAGE:this.$ReactShareDialogLoggingStore11(a);break;case b("ReactComposerShareNowActionTypes").OPEN_SHARE_TO_GROUP:this.$ReactShareDialogLoggingStore12(a);break;case b("ReactComposerShareNowActionTypes").OPEN_MESSAGE_DIALOG:this.$ReactShareDialogLoggingStore13(a);break;case b("ReactComposerShareNowActionTypes").OPEN_SHARE_DIALOG:this.$ReactShareDialogLoggingStore14(a);break;case b("ReactComposerTaggerActionType").SET_SELECTED_TAGGER:this.$ReactShareDialogLoggingStore15(a);break;case b("ReactComposerStatusActionType").SET_EDITOR_STATE:this.$ReactShareDialogLoggingStore16(a);break;case b("ReactComposerTaggerActionType").SET_TAGGER_DATA:this.$ReactShareDialogLoggingStore17(a);break;case b("ReactComposerActionTypes").INIT_CONFIG:this.$ReactShareDialogLoggingStore18(a);break;case b("ReactComposerActionTypes").POST_INTENDED:this.$ReactShareDialogLoggingStore19(a);break;case b("ReactComposerActionTypes").POST_SUCCEEDED:this.$ReactShareDialogLoggingStore20(a);break;case b("ReactComposerActionTypes").POST_ERROR:this.$ReactShareDialogLoggingStore21(a);break;case b("ReactComposerShareNowActionTypes").SHARE_PUBLISH_STARTED:this.$ReactShareDialogLoggingStore22(a);break;case b("ReactComposerAudienceActionTypes").SET_AUDIENCE:this.$ReactShareDialogLoggingStore23(a);break;case b("ReactShareDialogComposerActionType").SET_SHARE_DIALOG_TARGET:this.$ReactShareDialogLoggingStore24(a);break;case b("ReactComposerShareNowActionTypes").OPEN_START_WATCH_PARTY:this.$ReactShareDialogLoggingStore25(a);break;default:}};d.$ReactShareDialogLoggingStore26=function(a){return this.$ReactShareDialogLoggingStore1===a.composerID};d.$ReactShareDialogLoggingStore25=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").START_LIVING_ROOM),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").START_LIVING_ROOM)};d.$ReactShareDialogLoggingStore9=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").SHARE_TO_FRIEND_TIMELINE),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SHARE_TO_FRIEND_TIMELINE)};d.$ReactShareDialogLoggingStore10=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,"share_invite_friends_to_donate"),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").INVITE_FRIENDS_TO_DONATE)};d.$ReactShareDialogLoggingStore11=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").SHARE_TO_PAGE),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SHARE_TO_PAGE)};d.$ReactShareDialogLoggingStore12=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").SHARE_TO_GROUP),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SHARE_TO_GROUP)};d.$ReactShareDialogLoggingStore7=function(a){b("FunnelLogger").startFunnel(g),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_FLOW_STARTED)};d.$ReactShareDialogLoggingStore8=function(a){b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").SHARE_NOW),b("FunnelLogger").endFunnel(g),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SHARE_NOW),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_PUBLISH_STARTED,b("ComposerShareNowEntryPoints").SHARE_NOW),delete this.$ReactShareDialogLoggingStore1};d.$ReactShareDialogLoggingStore4=function(a){b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").ADD_TO_STORY_NOW),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_PUBLISH_STARTED,b("ComposerShareNowEntryPoints").ADD_TO_STORY_NOW),delete this.$ReactShareDialogLoggingStore1};d.$ReactShareDialogLoggingStore5=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").ADD_TO_STORY),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").ADD_TO_STORY)};d.$ReactShareDialogLoggingStore13=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,"start_send_message"),b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.START,client:b("MessengerSecondarySearchFunnelConstants").CLIENTS.WWW,surface:b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST}),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SEND_IN_MESSAGE)};d.$ReactShareDialogLoggingStore14=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,"start_share"),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").WRITE_POST)};d.$ReactShareDialogLoggingStore18=function(a){this.$ReactShareDialogLoggingStore3&&(this.$ReactShareDialogLoggingStore3=!1,b("FunnelLogger").appendAction(g,"load_composer"),this.$ReactShareDialogLoggingStore1=a.composerID,this.getComposerData(a.composerID).triggeredFrom=a.triggeredFrom)};d.$ReactShareDialogLoggingStore20=function(a){this.$ReactShareDialogLoggingStore26(a)&&(b("FunnelLogger").appendAction(g,"success"),b("FunnelLogger").endFunnel(g),b("ShareMetricsLoggingController").logReactComposerEvent(b("ShareMenuEventShareType").SHARE_CREATED,b("ReactShareDialogComposerStore").getTarget(a.composerID),b("ReactComposerStatusStore").getMessageText(a.composerID),this.getComposerData(a.composerID).triggeredFrom,this.getComposerData(a.composerID).audience),delete this.$ReactShareDialogLoggingStore1)};d.$ReactShareDialogLoggingStore21=function(a){this.$ReactShareDialogLoggingStore26(a)&&(b("FunnelLogger").appendAction(g,"failure"),b("FunnelLogger").endFunnel(g),b("ShareMetricsLoggingController").logReactComposerEvent(b("ShareMenuEventShareType").SHARE_FAILURE,b("ReactShareDialogComposerStore").getTarget(a.composerID),b("ReactComposerStatusStore").getMessageText(a.composerID),this.getComposerData(a.composerID).triggeredFrom,this.getComposerData(a.composerID).audience),delete this.$ReactShareDialogLoggingStore1)};d.$ReactShareDialogLoggingStore19=function(a){this.$ReactShareDialogLoggingStore26(a)&&b("FunnelLogger").appendAction(g,"start_post")};d.$ReactShareDialogLoggingStore16=function(a){this.$ReactShareDialogLoggingStore26(a)&&(a.editorState.getLastChangeType()==="insert-characters"&&b("FunnelLogger").appendActionIfNew(g,"edit_text"))};d.$ReactShareDialogLoggingStore15=function(a){if(this.$ReactShareDialogLoggingStore26(a))switch(a.taggerID){case b("ReactComposerTaggerType").PEOPLE:b("FunnelLogger").appendAction(g,"peopletag_click");break;case b("ReactComposerTaggerType").LOCATION:b("FunnelLogger").appendAction(g,"locationtag_click");break;case b("ReactComposerTaggerType").ACTIVITY:b("FunnelLogger").appendAction(g,"activitytag_click");break;default:}};d.$ReactShareDialogLoggingStore17=function(a){if(this.$ReactShareDialogLoggingStore26(a))switch(a.taggerID){case b("ReactComposerTaggerType").PEOPLE:this.$ReactShareDialogLoggingStore27(a);break;case b("ReactComposerTaggerType").LOCATION:this.$ReactShareDialogLoggingStore28(a);break;case b("ReactComposerTaggerType").ACTIVITY:this.$ReactShareDialogLoggingStore29(a);break;default:}};d.$ReactShareDialogLoggingStore27=function(a){a.taggerData.length>this.$ReactShareDialogLoggingStore2?b("FunnelLogger").appendActionIfNew(g,"peopletag_add"):b("FunnelLogger").appendActionIfNew(g,"peopletag_remove"),this.$ReactShareDialogLoggingStore2=a.taggerData.length};d.$ReactShareDialogLoggingStore28=function(a){a.taggerData.place?b("FunnelLogger").appendAction(g,"locationtag_add"):b("FunnelLogger").appendAction(g,"locationtag_remove")};d.$ReactShareDialogLoggingStore29=function(a){!a.taggerData.action?b("FunnelLogger").appendAction(g,"activitytag_clear"):!a.taggerData.object?b("FunnelLogger").appendAction(g,"activitytag_select"):b("FunnelLogger").appendAction(g,"activitytag_addobject")};d.$ReactShareDialogLoggingStore6=function(a){this.$ReactShareDialogLoggingStore26(a)&&(b("FunnelLogger").appendAction(g,"cancel_post"),b("FunnelLogger").endFunnel(g),b("ShareMetricsLoggingController").logReactComposerEvent(b("ShareMenuEventShareType").SHARE_ABANDONED,b("ReactShareDialogComposerStore").getTarget(a.composerID),b("ReactComposerStatusStore").getMessageText(a.composerID),this.getComposerData(a.composerID).triggeredFrom,this.getComposerData(a.composerID).audience),delete this.$ReactShareDialogLoggingStore1)};d.$ReactShareDialogLoggingStore23=function(a){(!this.$ReactShareDialogLoggingStore1||this.$ReactShareDialogLoggingStore1===a.composerID)&&(this.getComposerData(a.composerID).audience=a.audience||a.legacyAudience),this.$ReactShareDialogLoggingStore26(a)&&b("FunnelLogger").appendActionWithTag(g,"set_audience",a.audience||a.legacyAudience)};d.$ReactShareDialogLoggingStore24=function(a){this.$ReactShareDialogLoggingStore26(a)&&b("FunnelLogger").appendAction(g,"set_dialog_target")};d.$ReactShareDialogLoggingStore22=function(a){if(this.$ReactShareDialogLoggingStore26(a)){a=a.composerID;b("ShareMetricsLoggingController").logReactComposerEvent(b("ShareMenuEventShareType").SHARE_PUBLISH_STARTED,b("ReactShareDialogComposerStore").getTarget(a),b("ReactComposerStatusStore").getMessageText(a),this.getComposerData(a).triggeredFrom,this.getComposerData(a).audience)}};return c}(b("ReactComposerStoreBase"));e.exports=new a()}),null);
__d("ShareNowController",["csx","Dialog","DOM","Event","ReactComposerShareNowActions","ShareConfirmationController","ShareMetricsLoggingController","ShareNowConstants","ReactShareDialogLoggingStore"],(function(a,b,c,d,e,f,g){__p&&__p();b("ReactShareDialogLoggingStore");var h;a={initMenu:function(a){__p&&__p();var c=this,d=a.getTriggerElem();b("Event").listen(d,"success",function(a){try{a=a.data.response.payload;a.share_now_succeeded&&(c.showSuccess(a.message),b("ShareMetricsLoggingController").logShareNowResponsePayload(a),b("ShareConfirmationController").tryDisplayShareInFeed(a,d))}catch(a){}});b("Event").listen(d,"error",function(a){try{var d=a.data.response.payload;b("ShareMetricsLoggingController").logShareNowFailure(d);c.showError(a.data.response.errorDescription)}catch(a){c.showError()}});a.getPopover().subscribe("show",this._logMenuShown)},showSuccess:function(a){this.showDialog(a||b("ShareNowConstants").success)},showError:function(a){this.showDialog(a||b("ShareNowConstants").error)},showDialog:function(a){h&&h.destroy(),h=new(b("Dialog"))().setBody(a).setAutohide(2500).setModal(!0).show()},_logMenuShown:function(){b("ReactComposerShareNowActions").showShareNowMenu()},attachMenuItemListeners:function(a){__p&&__p();var c=b("DOM").scry(a.getRoot(),"._2al7")[0],d=b("DOM").scry(a.getRoot(),"._2al8")[0],e=b("DOM").scry(a.getRoot(),"._7ii_")[0],f=b("DOM").scry(a.getRoot(),"._7u72")[0],g=b("DOM").scry(a.getRoot(),"._2al9")[0],h=b("DOM").scry(a.getRoot(),"._1n80")[0],i=b("DOM").scry(a.getRoot(),"._3gc-")[0],j=b("DOM").scry(a.getRoot(),"._3gc_")[0],k=b("DOM").scry(a.getRoot(),"._3gcz")[0];a=b("DOM").scry(a.getRoot(),"._6y6p")[0];c&&c.addEventListener("click",b("ReactComposerShareNowActions").clickShareNow);d&&d.addEventListener("click",b("ReactComposerShareNowActions").clickWritePost);e&&e.addEventListener("click",b("ReactComposerShareNowActions").clickAddToStoryNow);f&&f.addEventListener("click",b("ReactComposerShareNowActions").clickAddToStory);g&&g.addEventListener("click",b("ReactComposerShareNowActions").clickSendMessage);h&&h.addEventListener("click",b("ReactComposerShareNowActions").clickShareFriendTimeline);i&&i.addEventListener("click",b("ReactComposerShareNowActions").clickShareToPage);j&&j.addEventListener("click",b("ReactComposerShareNowActions").clickShareToGroup);k&&k.addEventListener("click",b("ReactComposerShareNowActions").clickInviteFriendsToDonate);a&&a.addEventListener("click",b("ReactComposerShareNowActions").clickStartWatchParty)}};e.exports=a}),null);