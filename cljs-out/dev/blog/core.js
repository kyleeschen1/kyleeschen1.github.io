// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.repl');
goog.require('cljsjs.waypoints');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('reagent.dom');
blog.core.global$module$cljsjs$waypoints = goog.global["Waypoint"];
blog.core._LT_sub = (function blog$core$_LT_sub(params){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,params));
});
blog.core._GT_evt = (function blog$core$_GT_evt(params){
return re_frame.core.dispatch.call(null,params);
});
/**
 * Sets some action for when
 * a particular element hits
 * the viewport.
 */
blog.core.set_scroll = (function blog$core$set_scroll(id,f){
var element = document.getElementById(id);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"handler","handler",-195596612),f,new cljs.core.Keyword(null,"offset","offset",296498311),"25%"], null);
return (new Waypoint(cljs.core.clj__GT_js.call(null,params)));
});
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.on_scroll !== 'undefined')){
} else {
blog.core.on_scroll = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.core","on-scroll"),(function (event_id,dir,params){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,cljs.core.keyword.call(null,dir)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.core.on_scroll,new cljs.core.Keyword(null,"default","default",-1987822328),(function (id,dir,_){
return cljs.core.println.call(null,["Scrolled: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''));
}));
cljs.core._add_method.call(null,blog.core.on_scroll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a-root","a-root",874561195),new cljs.core.Keyword(null,"down","down",1565245570)], null),(function (_,___$1,___$2){
return cljs.core.println.call(null,"A scrolled down!");
}));
cljs.core._add_method.call(null,blog.core.on_scroll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"up","up",-269712113)], null),(function (_,___$1,___$2){
return cljs.core.println.call(null,"B scrolled up!");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-focus","set-focus",-381001028),(function (db,p__18378){
var vec__18379 = p__18378;
var _ = cljs.core.nth.call(null,vec__18379,(0),null);
var id = cljs.core.nth.call(null,vec__18379,(1),null);
var ctx = cljs.core.nth.call(null,vec__18379,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,new cljs.core.Keyword(null,"focus","focus",234677911)], null),id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"focus-id","focus-id",458947539),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"focus","focus",234677911)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"in-focus?","in-focus?",-381888585),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-id","focus-id",458947539)], null),(function (p__18382,p__18383){
var vec__18384 = p__18382;
var focus_id = cljs.core.nth.call(null,vec__18384,(0),null);
var vec__18387 = p__18383;
var _ = cljs.core.nth.call(null,vec__18387,(0),null);
var id = cljs.core.nth.call(null,vec__18387,(1),null);
return cljs.core._EQ_.call(null,id,focus_id);
}));
blog.core.add_scroll = (function blog$core$add_scroll(id,ctx,element){
return (function (id__$1,ctx__$1,element__$1){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),ctx__$1)){
return blog.core.set_scroll.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$1),(function (dir){
blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-focus","set-focus",-381001028),id__$1,ctx__$1], null));

return blog.core.on_scroll.call(null,cljs.core.keyword.call(null,id__$1),dir,null);
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id__$2,ctx__$2,element__$2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$2,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-focus?","in-focus?",-381888585),id__$2], null)))?"0.2em solid red":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 1em"], null)], null),element__$2], null);
})], null));
});
});
blog.core.add_scrolls = (function blog$core$add_scrolls(ctx){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
return blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-focus","set-focus",-381001028),null,ctx], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (ctx__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"150em",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"50%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"Title",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Demo"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"a",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"1) Action 1"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"b",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"2) Action 2"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"c",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"3) Action 3"], null)], null)], null);
})], null));
});
blog.core.sym = (function blog$core$sym(kw){
return goog.string.unescapeEntities(["&",cljs.core.name.call(null,kw),";"].join(''));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-ctx","init-ctx",1682455157),(function (db,p__18390){
var vec__18391 = p__18390;
var _ = cljs.core.nth.call(null,vec__18391,(0),null);
var ctx = cljs.core.nth.call(null,vec__18391,(1),null);
return cljs.core.merge.call(null,db,cljs.core.PersistentArrayMap.createAsIfByAssoc([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),new cljs.core.Keyword("tab","about","tab/about",1423483058)], null)]));
}));
blog.core.init_db = (function blog$core$init_db(){
return null;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"switch-tab","switch-tab",-2013959460),(function (db,p__18394){
var vec__18395 = p__18394;
var _ = cljs.core.nth.call(null,vec__18395,(0),null);
var tag = cljs.core.nth.call(null,vec__18395,(1),null);
var ctx = cljs.core.nth.call(null,vec__18395,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577)], null),tag);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),(function (db,p__18398){
var vec__18399 = p__18398;
var _ = cljs.core.nth.call(null,vec__18399,(0),null);
var ctx = cljs.core.nth.call(null,vec__18399,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577)], null));
}));
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.render_page !== 'undefined')){
} else {
blog.core.render_page = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.core","render-page"),(function (id,_){
return id;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.core.gen_header_tab = (function blog$core$gen_header_tab(label,tag,ctx){
var data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"padding","padding",1660304693),"none",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null));
return (function (label__$1,tag__$1){
var style = ((cljs.core._EQ_.call(null,tag__$1,blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),ctx], null))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,cljs.core.deref.call(null,data),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch-tab","switch-tab",-2013959460),tag__$1,ctx], null));
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null));
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null], null));
})], null),label__$1], null);
});
});
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword(null,"header-tabs","header-tabs",333787428),(function (_,ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"background","background",-863952629),"white"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),"3%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-end",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Verdana",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 0.2em black",new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1.5em 1em 1.5em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),"Kyle Eschen"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"About",new cljs.core.Keyword("tab","about","tab/about",1423483058),ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Essays",new cljs.core.Keyword("tab","essays","tab/essays",-1695572512),ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Videos",new cljs.core.Keyword("tab","videos","tab/videos",254778725),ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Contact",new cljs.core.Keyword("tab","contact","tab/contact",608945313),ctx], null)], null)], null);
}));
blog.core.gen_row_of_cols = (function blog$core$gen_row_of_cols(var_args){
var args__4870__auto__ = [];
var len__4864__auto___18407 = arguments.length;
var i__4865__auto___18408 = (0);
while(true){
if((i__4865__auto___18408 < len__4864__auto___18407)){
args__4870__auto__.push((arguments[i__4865__auto___18408]));

var G__18409 = (i__4865__auto___18408 + (1));
i__4865__auto___18408 = G__18409;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
var cols__$1 = cljs.core.mapv.call(null,(function (p__18403){
var vec__18404 = p__18403;
var flex = cljs.core.nth.call(null,vec__18404,(0),null);
var col = cljs.core.nth.call(null,vec__18404,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null)], null),col], null);
}),cols);
var row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
return cljs.core.into.call(null,row,cols__$1);
}));

(blog.core.gen_row_of_cols.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.core.gen_row_of_cols.cljs$lang$applyTo = (function (seq18402){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18402));
}));

cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","about","tab/about",1423483058),(function (_,ctx){
return blog.core.gen_row_of_cols.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"There is no interesting information about me."], null)], null));
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword(null,"essay-text-col","essay-text-col",2091448746),(function (_,ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scrolls,ctx], null)], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword(null,"essay-display-col","essay-display-col",1382709119),(function (_,ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 1em",new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.8 * (70))),"%"].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"sticky"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,new cljs.core.Keyword(null,"main-page","main-page",165237388),cljs.core.keyword.call(null,[cljs.core.name.call(null,ctx),"-1"].join(''))], null)], null)], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","essays","tab/essays",-1695572512),(function (_,ctx){
return blog.core.gen_row_of_cols.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,new cljs.core.Keyword(null,"essay-text-col","essay-text-col",2091448746),ctx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,new cljs.core.Keyword(null,"essay-display-col","essay-display-col",1382709119),ctx], null)], null));
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","videos","tab/videos",254778725),(function (_,ctx){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"I am not fit for the screen."], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","contact","tab/contact",608945313),(function (_,ctx){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"There is no value in contacting me."], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword(null,"page-body","page-body",-21532134),(function (_,ctx){
return (function (___$1,ctx__$1){
var tab = blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),ctx__$1], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"margin","margin",-995903681),"3em 1em 1em 1em"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,tab,ctx__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"page","page",849072397)], null))], null);
});
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"exists?","exists?",1414473716),(function (db,p__18410){
var vec__18411 = p__18410;
var _ = cljs.core.nth.call(null,vec__18411,(0),null);
var ctx = cljs.core.nth.call(null,vec__18411,(1),null);
return cljs.core.get.call(null,db,ctx);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword(null,"main-page","main-page",165237388),(function (_,ctx){
blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-ctx","init-ctx",1682455157),ctx], null));

return (function (___$1,ctx__$1){
if(cljs.core.not.call(null,blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exists?","exists?",1414473716),ctx__$1], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name.call(null,ctx__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,new cljs.core.Keyword(null,"header-tabs","header-tabs",333787428),ctx__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,new cljs.core.Keyword(null,"page-body","page-body",-21532134),ctx__$1], null)], null);
}
});
}));
blog.core.main_page = (function blog$core$main_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,new cljs.core.Keyword(null,"main-page","main-page",165237388),new cljs.core.Keyword(null,"root","root",-448657453)], null);
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
