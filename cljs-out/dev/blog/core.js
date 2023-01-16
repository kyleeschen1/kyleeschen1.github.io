// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.repl');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('reagent.dom');
blog.core.sym = (function blog$core$sym(kw){
return goog.string.unescapeEntities(["&",cljs.core.name.call(null,kw),";"].join(''));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (db,_){
return cljs.core.merge.call(null,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("header","selected-tag","header/selected-tag",1614731534),new cljs.core.Keyword("tab","about","tab/about",1423483058)], null));
}));
blog.core.init_db = (function blog$core$init_db(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null));
});
blog.core.gen_link = (function blog$core$gen_link(label){
return (function (label__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.node","div.node",-445611527),label__$1], null)], null);
});
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("header","select-tab","header/select-tab",-533128113),(function (db,p__19549){
var vec__19550 = p__19549;
var _ = cljs.core.nth.call(null,vec__19550,(0),null);
var tag = cljs.core.nth.call(null,vec__19550,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("header","selected-tab","header/selected-tab",-1712463359),tag);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("header","selected-tab","header/selected-tab",-1712463359),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword("header","selected-tab","header/selected-tab",-1712463359));
}));
blog.core._LT_sub = (function blog$core$_LT_sub(params){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,params));
});
blog.core._GT_evt = (function blog$core$_GT_evt(params){
return re_frame.core.dispatch.call(null,params);
});
blog.core.gen_header_tab = (function blog$core$gen_header_tab(label,tag){
var data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"none",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null));
return (function (label__$1,tag__$1){
var style = ((cljs.core._EQ_.call(null,tag__$1,blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","selected-tab","header/selected-tab",-1712463359)], null))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.deref.call(null,data),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","select-tab","header/select-tab",-533128113),tag__$1], null));
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null));
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null], null));
})], null),label__$1], null);
});
});
blog.core.gen_header_tabs = (function blog$core$gen_header_tabs(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),"3%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-end",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Verdana",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 2px black",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 15px 10px 15px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),"Kyle Eschen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"About",new cljs.core.Keyword("tab","about","tab/about",1423483058)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Essays",new cljs.core.Keyword("tab","essays","tab/essays",-1695572512)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Videos",new cljs.core.Keyword("tab","videos","tab/videos",254778725)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Contact",new cljs.core.Keyword("tab","contact","tab/contact",608945313)], null)], null)], null);
});
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.render_page !== 'undefined')){
} else {
blog.core.render_page = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.core","render-page"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","about","tab/about",1423483058),(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),"There is no interesting information about me."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null)], null)], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","essays","tab/essays",-1695572512),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/Henrietta.gif",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"25%",new cljs.core.Keyword(null,"width","width",-384071477),"25%"], null)], null)], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","videos","tab/videos",254778725),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"I am not fit for the screen."], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","contact","tab/contact",608945313),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Please don't contact me."], null);
}));
blog.core.gen_page_body = (function blog$core$gen_page_body(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Verdana",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"margin","margin",-995903681),"30px 10px 10px 10px"], null)], null),blog.core.render_page.call(null,blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","selected-tab","header/selected-tab",-1712463359)], null)))], null);
});
});
blog.core.main_page = (function blog$core$main_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tabs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_page_body], null)], null);
});
blog.core.mount = (function blog$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.main_page], null),el);
});
blog.core.get_app_element = (function blog$core$get_app_element(){
return goog.dom.getElement("app");
});
blog.core.mount_app_element = (function blog$core$mount_app_element(){
var temp__5720__auto__ = blog.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return blog.core.mount.call(null,el);
} else {
return null;
}
});
blog.core.init_db.call(null);
blog.core.mount_app_element.call(null);
blog.core.on_reload = (function blog$core$on_reload(){
return blog.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
