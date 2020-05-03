if (self.CavalryLogger) { CavalryLogger.start_js(["RRAkB"]); }

__d("GroupChatCreateChatButton.react",["ix","cx","fbt","Image.react","React","XUIButton.react","asset","gkx"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j={boxSizing:"border-box",width:"100%"};function a(a){return b("gkx")("1016429")?b("React").createElement(b("XUIButton.react"),{style:a.isFullWidth===!0?j:{},image:b("React").createElement(b("Image.react"),{className:"_2pih",src:g("481153")}),type:"button",label:i._("\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u4f5c\u6210"),onClick:a.onClick,size:a.size||"large",use:a.isDisabled||!1?"default":"confirm",disabled:a.isDisabled,"data-testid":a["data-testid"]}):null}e.exports=a}),null);
__d("GroupsCreateChatDialog.react",["GroupChatCreateChatButton.react","JSResource","React","lazyLoadComponent"],(function(a,b,c,d,e,f){var g=b("lazyLoadComponent")(b("JSResource")("GroupsCreateChatDialogBootloadedComponent.react").__setRef("GroupsCreateChatDialog.react"));function a(a){return b("React").createElement(b("React").Suspense,{fallback:b("React").createElement(b("GroupChatCreateChatButton.react"),{isDisabled:!0,isFullWidth:a.isFullWidthButton,size:a.buttonSize})},b("React").createElement(g,{buttonSize:a.buttonSize,groupID:a.groupID,popUpDialogWithoutClick:a.popUpDialogWithoutClick,entryPoint:a.entryPoint,funnelInstanceID:a.funnelInstanceID,isFullWidthButton:a.isFullWidthButton,preselectedUserIDs:a.preselectedUserIDs}))}e.exports=a}),null);
__d("GroupChatFunnelLog",["WebFunnelLogger"],(function(a,b,c,d,e,f){"use strict";a={logAction:function(a,c,d){var e=new(b("WebFunnelLogger"))("GroupChatTabWebFunnelDefinition").setAction(c).setSessionKey(a);d&&d.map(function(a){e.addActionPayload(a.key,a.value)});e.log()}};e.exports=a}),null);
__d("MercuryParticipantsImageReact.bs",["ReasonReact.bs","bs_js_null_undefined","MercuryParticipantsImage.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e){return b("ReasonReact.bs").wrapJsForReason(b("MercuryParticipantsImage.react"),{className:b("bs_js_null_undefined").fromOption(a),participants:c,size:b("bs_js_null_undefined").fromOption(d)},e)}f.make=a}),null);
__d("MessengerJoinInterstitialAdminDetailsReact.bs",["cx","fbt","React","ReasonReact.bs","MercuryParticipantListRenderer"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").statelessComponent("MessengerJoinInterstitialAdminDetailsReact");function j(a,c){return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(){var c=new(b("MercuryParticipantListRenderer"))();c=c.setUseAndSeparator(!0).renderParticipantList(a);c=a.length===1?h._("\u3053\u306e\u30b0\u30eb\u30fc\u30d7\u306e\u7ba1\u7406\u8005\u306f{admin names}\u3055\u3093\u3067\u3059\u3002\u3053\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u306f\u3001\u30ea\u30f3\u30af\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u3059\u3079\u3066\u306e\u4eba\u304c\u53c2\u52a0\u3067\u304d\u307e\u3059\u3002",[h._param("admin names",c)]):h._("{admin names} are the owners of the group. Anyone with the link can join.",[h._param("admin names",c)]);return b("React").createElement("div",{className:"_5ad6"},b("React").createElement("div",{className:"_5ad8"},c))},i[9],i[10],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(a.admins,[])});f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerJoinInterstitialParticipantsDetailsReact.bs",["cx","fbt","React","ReasonReact.bs","MercuryParticipantListRenderer"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").statelessComponent("MessengerJoinInterstitialParticipantsDetailsReact");function j(a,c){return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(){var c=new(b("MercuryParticipantListRenderer"))();c=c.setUseAndSeparator(!0).renderParticipantList(a);return b("React").createElement("div",{className:"_5ad6"},b("React").createElement("div",{className:"_5ad7"},h._("\u53c2\u52a0\u8005: {participant names}",[h._param("participant names",c)])))},i[9],i[10],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(a.participants,[])});f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerJoinInterstitialThreadDescriptionReact.bs",["cx","React","ReasonReact.bs","bs_js_primitive","MessengerTextWithEmoticonsReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").statelessComponent("MessengerJoinInterstitialThreadDescriptionReact");function i(a,c){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){if(a!==void 0){var c=/\r\n|[\r\n]/g;c=a.replace(c," ");return b("React").createElement("div",{className:"_5ad6"},b("React").createElement("div",{className:"_5ad7"},b("ReasonReact.bs").element(void 0,void 0,b("MessengerTextWithEmoticonsReact.bs").make(void 0,void 0,c,void 0,[]))))}else return null},h[9],h[10],h[11],h[12]]}a=b("ReasonReact.bs").wrapReasonForJs(h,function(a){return i(b("bs_js_primitive").nullable_to_opt(a.description),[])});f.component=h;f.make=i;f.jsComponent=a}),null);
__d("MessengerJoinInterstitialThreadImageReact.bs",["cx","bs_array","React","cssURL","MercuryIDs","ReasonReact.bs","bs_js_primitive","MercuryParticipantsImageReact.bs","MessengerProfileImageWrapperReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").statelessComponent("MessengerJoinInterstitialThreadImageReact");function i(a,c,d){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){var d=b("bs_array").map(function(a){return b("MercuryIDs").getParticipantIDFromUserID(a.id)},c);d=a!==void 0?b("React").createElement("div",{style:{backgroundImage:b("cssURL")(a),backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",height:String(150),width:String(150),backgroundSize:"cover"}}):b("ReasonReact.bs").element(void 0,void 0,b("MercuryParticipantsImageReact.bs").make(void 0,d,150,[]));return b("ReasonReact.bs").element(void 0,void 0,b("MessengerProfileImageWrapperReact.bs").make(void 0,void 0,void 0,void 0,void 0,void 0,void 0,150,void 0,"_5ad2",!1,[d]))},h[9],h[10],h[11],h[12]]}a=b("ReasonReact.bs").wrapReasonForJs(h,function(a){return i(b("bs_js_primitive").nullable_to_opt(a.imageURL),a.participants,[])});c=150;f.component=h;f.image_size=c;f.make=i;f.jsComponent=a}),null);
__d("MessengerJoinInterstitialThreadTitleReact.bs",["cx","fbt","React","gkx","ReasonReact.bs","bs_js_primitive","MercuryParticipantListRenderer","MessengerTextWithEmoticonsReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").statelessComponent("MessengerJoinInterstitialThreadTitleReact");function j(a,c,d){__p&&__p();return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(){__p&&__p();if(b("gkx")("678629"))if(c!==void 0)return b("React").createElement("div",{className:"_29ir"},b("ReasonReact.bs").element(void 0,void 0,b("MessengerTextWithEmoticonsReact.bs").make(void 0,void 0,c,void 0,[])));else return null;else{var d;if(c!==void 0)d=c;else{var e=new(b("MercuryParticipantListRenderer"))();d=e.renderParticipantList(a)}e=b("ReasonReact.bs").element(void 0,void 0,b("MessengerTextWithEmoticonsReact.bs").make(void 0,void 0,d,void 0,[]));return b("React").createElement("div",{className:"_5ad3"},h._("{title of the group}",[h._param("title of the group",e)]))}},i[9],i[10],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(a.participants,b("bs_js_primitive").nullable_to_opt(a.threadName),[])});f.component=i;f.make=j;f.jsComponent=a}),null);
__d("XUIButtonReact.bs",["Utils.bs","ReasonReact.bs","XUIButton.react","bs_js_null_undefined"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){if(a!==void 0)switch(a){case 0:return"default";case 1:return"special";case 2:return"confirm"}}function h(a){if(a!==void 0)switch(a){case 0:return"small";case 1:return"medium";case 2:return"large";case 3:return"xlarge";case 4:return"xxlarge"}}function i(a){if(a!==void 0)if(a)return"dark";else return"light"}function a(a,c,d,e,f,j,k,l,m,n,o,p){return b("ReasonReact.bs").wrapJsForReason(b("XUIButton.react"),{className:b("bs_js_null_undefined").fromOption(a),onClick:b("bs_js_null_undefined").fromOption(c),label:b("bs_js_null_undefined").fromOption(d),use:b("bs_js_null_undefined").fromOption(g(e)),size:b("bs_js_null_undefined").fromOption(h(f)),borderShade:b("bs_js_null_undefined").fromOption(i(j)),suppressed:b("bs_js_null_undefined").fromOption(k),href:b("bs_js_null_undefined").fromOption(l),target:b("bs_js_null_undefined").fromOption(m),disabled:b("Utils.bs").optionBoolToBool(n),image:b("bs_js_null_undefined").fromOption(o)},p)}f.stringOfUse=g;f.stringOfSize=h;f.stringOfBorderShade=i;f.make=a}),null);
__d("MessengerJoinableInterstitialPreviewReact.bs",["cx","fbt","bs_curry","React","Button","ReactDOM","CurrentUser","ReasonReact.bs","bs_js_primitive","XUIButtonReact.bs","GroupChatFunnelLog","MercuryThreadActions","MessengerJoinInterstitialThreadImageReact.bs","MessengerJoinInterstitialThreadTitleReact.bs","MessengerJoinInterstitialAdminDetailsReact.bs","MessengerJoinInterstitialThreadDescriptionReact.bs","MessengerJoinInterstitialParticipantsDetailsReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a,c){c[1][0][0]=a==null?void 0:b("bs_js_primitive").some(a);return 0}var j=b("ReasonReact.bs").reducerComponent("MessengerJoinableInterstitialPreviewReact");function k(a,c,d,e,f,g,k,l,m,n){__p&&__p();var o=function(a,d){__p&&__p();b("GroupChatFunnelLog").logAction(b("CurrentUser").getID(),"non_participating_chat_join_button_clicked",null);a=d[1][0][0];if(a!==void 0){d=b("ReactDOM").findDOMNode(b("bs_js_primitive").valFromOption(a));c&&b("Button").setLabel(d,"Requested");b("Button").setEnabled(d,!1)}if(c&&g)return 0;else{b("MercuryThreadActions").get().joinThroughHash(k,function(){b("GroupChatFunnelLog").logAction(b("CurrentUser").getID(),"non_participating_chat_join_success",null);return 0},function(){b("GroupChatFunnelLog").logAction(b("CurrentUser").getID(),"non_participating_chat_join_error",null);return!1});return 0}},p=function(a){var c=h._("\u30eb\u30fc\u30e0\u306b\u53c2\u52a0"),d=h._("\u30c1\u30e3\u30c3\u30c8\u306b\u53c2\u52a0"),e=f===!0;e=e?d:c;return b("React").createElement("div",{className:"_5ad4"},b("ReasonReact.bs").element(void 0,b("bs_curry")._1(a[0],i),b("XUIButtonReact.bs").make("_5ad5",b("bs_curry")._1(a[0],o),e,2,void 0,void 0,void 0,void 0,void 0,void 0,void 0,[])))},q=function(c){return b("React").createElement("div",{className:"_5ad1"},b("ReasonReact.bs").element(void 0,void 0,b("MessengerJoinInterstitialThreadImageReact.bs").make(e,l,[])),b("ReasonReact.bs").element(void 0,void 0,b("MessengerJoinInterstitialThreadTitleReact.bs").make(l,m,[])),b("ReasonReact.bs").element(void 0,void 0,b("MessengerJoinInterstitialParticipantsDetailsReact.bs").make(l,[])),b("ReasonReact.bs").element(void 0,void 0,b("MessengerJoinInterstitialThreadDescriptionReact.bs").make(d,[])),p(c),b("ReasonReact.bs").element(void 0,void 0,b("MessengerJoinInterstitialAdminDetailsReact.bs").make(a,[])))};return[j[0],j[1],j[2],j[3],j[4],j[5],j[6],j[7],function(a){return b("React").createElement("div",{className:"_4sp8 _li"},q(a))},function(){return[[void 0]]},j[10],function(a,b){return 0},j[12]]}a=b("ReasonReact.bs").wrapReasonForJs(j,function(a){return k(a.admins,a.approvalModeOn,b("bs_js_primitive").nullable_to_opt(a.description),b("bs_js_primitive").nullable_to_opt(a.imageURL),a.isGroupChat,a.isViewerInApprovalQueue,a.linkHash,a.participants,b("bs_js_primitive").nullable_to_opt(a.threadName),[])});f.setButtonRef=i;f.component=j;f.make=k;f.jsComponent=a}),null);
__d("MessengerJoinableInterstitialPreviewReactComponent",["MessengerJoinableInterstitialPreviewReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("MessengerJoinableInterstitialPreviewReact.bs").jsComponent;e.exports=a}),null);
__d("GroupsChatTabFunnelAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHAT_CREATION_DIALOG_CANCEL_BUTTON_CLICKED:"chat_creation_dialog_cancel_button_clicked",CHAT_CREATION_DIALOG_CHANGED_TITLE:"chat_creation_dialog_changed_title",CHAT_CREATION_DIALOG_CLOSED:"chat_creation_dialog_closed",CHAT_CREATION_DIALOG_CREATE_BUTTON_CLICKED:"chat_creation_dialog_create_button_clicked",CHAT_CREATION_DIALOG_DISABLED_CREATE_BUTTON_CLICKED:"chat_creation_dialog_disabled_create_button_clicked",CHAT_CREATION_DIALOG_PROFILE_SELECTED:"chat_creation_dialog_profile_selected",CHAT_CREATION_DIALOG_SHOWN:"chat_creation_dialog_shown",CHAT_CREATION_DIALOG_THREAD_CREATE_SUCCESS:"chat_creation_dialog_thread_create_success",CHAT_TAB_CLICKED:"chat_tab_clicked",CHAT_TAB_OPENED:"chat_tab_opened",GROUP_MALL_WITH_CHATS_TAB_VISITED:"group_mall_with_chats_tab_visited",NON_PARTICIPATING_CHAT_JOIN_BUTTON_CLICKED:"non_participating_chat_join_button_clicked",NON_PARTICIPATING_CHAT_JOIN_ERROR:"non_participating_chat_join_error",NON_PARTICIPATING_CHAT_JOIN_SUCCESS:"non_participating_chat_join_success",NON_PARTICIPATING_CHAT_VIEW_BUTTON_CLICKED:"non_participating_chat_view_button_clicked",PARTICIPATED_CHAT_JOIN_ERROR_LHC:"participated_chat_join_error_lhc",PARTICIPATED_CHAT_JOIN_SUCCESS_LHC:"participated_chat_join_success_lhc",PARTICIPATED_CHAT_VIEW_BUTTON_CLICKED:"participated_chat_view_button_clicked",PARTICIPATED_CHAT_VIEW_BUTTON_CLICKED_IN_LHC:"participated_chat_view_button_clicked_in_lhc",START_A_GROUP_CHAT_BUTTON_CLICKED:"start_a_group_chat_button_clicked",START_A_GROUP_CHAT_BUTTON_CLICKED_IN_ACTION_BAR:"start_a_group_chat_button_clicked_in_action_bar",START_A_GROUP_CHAT_BUTTON_CLICKED_IN_LHC:"start_a_group_chat_button_clicked_in_lhc",SUGGESTION_UNIT_CLICKED:"suggestion_unit_clicked"})}),null);