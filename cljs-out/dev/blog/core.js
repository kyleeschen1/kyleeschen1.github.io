// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.core');
goog.require('cljs.core');
goog.require('blog.render');
goog.require('cljs.repl');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('com.rpl.specter');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('reagent.dom');
blog.core._LT_sub = (function blog$core$_LT_sub(params){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,params));
});
blog.core._GT_evt = (function blog$core$_GT_evt(params){
return re_frame.core.dispatch.call(null,params);
});
blog.core.$ = (function blog$core$$(var_args){
var G__28317 = arguments.length;
switch (G__28317) {
case 1:
return blog.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return blog.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blog.core.$.cljs$core$IFn$_invoke$arity$1 = (function (style){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null);
}));

(blog.core.$.cljs$core$IFn$_invoke$arity$2 = (function (attrs,style){
return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"style","style",-496642736),style);
}));

(blog.core.$.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-focus","set-focus",-381001028),(function (db,p__28319){
var vec__28320 = p__28319;
var _ = cljs.core.nth.call(null,vec__28320,(0),null);
var id = cljs.core.nth.call(null,vec__28320,(1),null);
var ctx = cljs.core.nth.call(null,vec__28320,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,new cljs.core.Keyword(null,"focus","focus",234677911)], null),id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"focus-id","focus-id",458947539),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"focus","focus",234677911)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"in-focus?","in-focus?",-381888585),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-id","focus-id",458947539)], null),(function (focus_id,p__28323){
var vec__28324 = p__28323;
var _ = cljs.core.nth.call(null,vec__28324,(0),null);
var id = cljs.core.nth.call(null,vec__28324,(1),null);
return cljs.core._EQ_.call(null,id,focus_id);
}));
blog.core.init_scroll = (function blog$core$init_scroll(node,ctx){
var get_el_in_window = (function blog$core$init_scroll_$_get_el_in_window(){
return document.elementFromPoint((50),(200));
});
var set_focus_on = (function blog$core$init_scroll_$_set_focus_on(){
var id = get_el_in_window.call(null).id;
if(cljs.core.not_EQ_.call(null,id,"")){
return blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-focus","set-focus",-381001028),id,ctx], null));
} else {
return null;
}
});
return document.addEventListener("scroll",set_focus_on);
});
blog.core.track_scrolling_BANG_ = (function blog$core$track_scrolling_BANG_(ctx){
var get_el_in_window = (function blog$core$track_scrolling_BANG__$_get_el_in_window(){
return document.elementFromPoint((50),(300));
});
return (function (){
var id = get_el_in_window.call(null).id;
if(cljs.core.not_EQ_.call(null,id,"")){
return blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-focus","set-focus",-381001028),id,ctx], null));
} else {
return null;
}
});
});
blog.core.add_text = (function blog$core$add_text(id,element){
return (function (id__$1,element__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 1em"], null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.createAsIfByAssoc([(cljs.core.truth_(blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-focus?","in-focus?",-381888585),id__$1], null)))?"focused":null)])], null),element__$1], null);
});
});
blog.core.render_essay_text = (function blog$core$render_essay_text(ctx){
var ts_BANG_ = blog.core.track_scrolling_BANG_.call(null,ctx);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return document.addEventListener("scroll",ts_BANG_);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return document.removeEventListener("scroll",ts_BANG_);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (ctx__$1){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"150em",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_text,"Title",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Demo"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_text,"Disclaimer","To the right one sees a meaningless array of symbols drifting like pollen in bile. In an effort to appear profound, I have made myself look all the more mathematically illiterate."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_text,"Lemons","What is this a demo of? In a word, incompetence. Now, for some enumerated gibberish:"], null)], null),(function (){var iter__4652__auto__ = (function blog$core$render_essay_text_$_iter__28327(s__28328){
return (new cljs.core.LazySeq(null,(function (){
var s__28328__$1 = s__28328;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28328__$1);
if(temp__5720__auto__){
var s__28328__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28328__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__28328__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__28330 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__28329 = (0);
while(true){
if((i__28329 < size__4651__auto__)){
var i = cljs.core._nth.call(null,c__4650__auto__,i__28329);
cljs.core.chunk_append.call(null,b__28330,(function (){var i__$1 = (i + (1));
var id = ["par-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)].join('');
var text = cljs.core.apply.call(null,cljs.core.str,i__$1,") ",cljs.core.take.call(null,(10),cljs.core.repeat.call(null,"stunning prose attempt...")));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_text,id,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i__$1], null));
})());

var G__28331 = (i__28329 + (1));
i__28329 = G__28331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28330),blog$core$render_essay_text_$_iter__28327.call(null,cljs.core.chunk_rest.call(null,s__28328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28330),null);
}
} else {
var i = cljs.core.first.call(null,s__28328__$2);
return cljs.core.cons.call(null,(function (){var i__$1 = (i + (1));
var id = ["par-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)].join('');
var text = cljs.core.apply.call(null,cljs.core.str,i__$1,") ",cljs.core.take.call(null,(10),cljs.core.repeat.call(null,"stunning prose attempt...")));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_text,id,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i__$1], null));
})(),blog$core$render_essay_text_$_iter__28327.call(null,cljs.core.rest.call(null,s__28328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.range.call(null,(20)));
})());
})], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-ctx","init-ctx",1682455157),(function (db,p__28332){
var vec__28333 = p__28332;
var _ = cljs.core.nth.call(null,vec__28333,(0),null);
var ctx = cljs.core.nth.call(null,vec__28333,(1),null);
return cljs.core.merge.call(null,db,cljs.core.PersistentArrayMap.createAsIfByAssoc([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),new cljs.core.Keyword("tab","about","tab/about",1423483058)], null)]));
}));
blog.core.init_db = (function blog$core$init_db(){
return null;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"switch-tab","switch-tab",-2013959460),(function (db,p__28336){
var vec__28337 = p__28336;
var _ = cljs.core.nth.call(null,vec__28337,(0),null);
var tag = cljs.core.nth.call(null,vec__28337,(1),null);
var ctx = cljs.core.nth.call(null,vec__28337,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577)], null),tag);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),(function (db,p__28340){
var vec__28341 = p__28340;
var _ = cljs.core.nth.call(null,vec__28341,(0),null);
var ctx = cljs.core.nth.call(null,vec__28341,(1),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"background","background",-863952629),"white"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),"3%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-end",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 0.2em black",new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1.5em 1em 1.5em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),"Kyle Eschen"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"About",new cljs.core.Keyword("tab","about","tab/about",1423483058),ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Essays",new cljs.core.Keyword("tab","essays","tab/essays",-1695572512),ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Videos",new cljs.core.Keyword("tab","videos","tab/videos",254778725),ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Contact",new cljs.core.Keyword("tab","contact","tab/contact",608945313),ctx], null)], null)], null);
}));
blog.core.gen_row_of_cols = (function blog$core$gen_row_of_cols(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28349 = arguments.length;
var i__4865__auto___28350 = (0);
while(true){
if((i__4865__auto___28350 < len__4864__auto___28349)){
args__4870__auto__.push((arguments[i__4865__auto___28350]));

var G__28351 = (i__4865__auto___28350 + (1));
i__4865__auto___28350 = G__28351;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
var cols__$1 = cljs.core.mapv.call(null,(function (p__28345){
var vec__28346 = p__28345;
var flex = cljs.core.nth.call(null,vec__28346,(0),null);
var col = cljs.core.nth.call(null,vec__28346,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null)], null),col], null);
}),cols);
var row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
return cljs.core.into.call(null,row,cols__$1);
}));

(blog.core.gen_row_of_cols.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.core.gen_row_of_cols.cljs$lang$applyTo = (function (seq28344){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28344));
}));

re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__28352,_){
var map__28353 = p__28352;
var map__28353__$1 = cljs.core.__destructure_map.call(null,map__28353);
var text = cljs.core.get.call(null,map__28353__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return text;
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","about","tab/about",1423483058),(function (_,ctx){
return blog.core.gen_row_of_cols.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"There is no interesting information about me."], null)], null));
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword(null,"essay-text-col","essay-text-col",2091448746),(function (_,ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_essay_text,ctx], null)], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword(null,"essay-display-col","essay-display-col",1382709119),(function (_,ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 1em",new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.8 * (70))),"%"].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"sticky"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.math_display], null)], null)], null);
}));
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword("tab","essays","tab/essays",-1695572512),(function (_,ctx){
return blog.core.gen_row_of_cols.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,new cljs.core.Keyword(null,"essay-text-col","essay-text-col",2091448746),ctx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,new cljs.core.Keyword(null,"essay-display-col","essay-display-col",1382709119),ctx], null)], null));
}));
blog.core.essays = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Demos",new cljs.core.Keyword(null,"summary","summary",380847952),"A collection of demos.",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("essay","demos","essay/demos",1922922274)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"On Yams",new cljs.core.Keyword(null,"summary","summary",380847952),"Some thoughts on nature's most perfect creation.",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("essay","yams","essay/yams",1287694457)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"On Eggs",new cljs.core.Keyword(null,"summary","summary",380847952),"Some thoughts on nature's second most perfect creation.",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("essay","eggs","essay/eggs",1273137844)], null)], null);
blog.core.render_essay_link = (function blog$core$render_essay_link(p__28354){
var map__28355 = p__28354;
var map__28355__$1 = cljs.core.__destructure_map.call(null,map__28355);
var id = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"title","title",636505583));
var summary = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0em 0.5em 1em 0em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.println.call(null,id);
})], null),title], null)], null);
});
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"exists?","exists?",1414473716),(function (db,p__28356){
var vec__28357 = p__28356;
var _ = cljs.core.nth.call(null,vec__28357,(0),null);
var ctx = cljs.core.nth.call(null,vec__28357,(1),null);
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
blog.core.script = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Jowls",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Yams",new cljs.core.Keyword(null,"time","time",1385887882),(1400)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Lemons",new cljs.core.Keyword(null,"time","time",1385887882),(2000)], null),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"====",new cljs.core.Keyword(null,"time","time",1385887882),(1400)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"In function!",new cljs.core.Keyword(null,"time","time",1385887882),(3000)], null)], null);
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Eggs",new cljs.core.Keyword(null,"time","time",1385887882),(500)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Done",new cljs.core.Keyword(null,"time","time",1385887882),(300)], null)], null);
blog.core.gen_schedule = (function blog$core$gen_schedule(script){
var branch_QMARK_ = (function blog$core$gen_schedule_$_branch_QMARK_(node){
var or__4253__auto__ = cljs.core.vector_QMARK_.call(null,node);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
}
});
var children = (function blog$core$gen_schedule_$_children(node){
if(cljs.core.vector_QMARK_.call(null,node)){
return node;
} else {
return cljs.core.map.call(null,node,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
}
});
var make_node = (function blog$core$gen_schedule_$_make_node(node,children__$1){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.merge.call(null,node,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node),children__$1));
} else {
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children__$1),cljs.core.meta.call(null,node));
}
});
return clojure.zip.zipper.call(null,branch_QMARK_,children,make_node,script);
});
blog.core.events = cljs.core.async.chan.call(null);
blog.core.process_queue = cljs.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));
blog.core.get_next_process = (function blog$core$get_next_process(){
var temp__5720__auto__ = cljs.core.peek.call(null,cljs.core.deref.call(null,blog.core.process_queue));
if(cljs.core.truth_(temp__5720__auto__)){
var p = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,blog.core.process_queue,cljs.core.pop);

return p;
} else {
return null;
}
});
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.update_schedule !== 'undefined')){
} else {
blog.core.update_schedule = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.core","update-schedule"),(function (p__28360,_,___$1){
var map__28361 = p__28360;
var map__28361__$1 = cljs.core.__destructure_map.call(null,map__28361);
var tag = cljs.core.get.call(null,map__28361__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return tag;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.core.update_schedule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,s,env){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,env], null);
}));
blog.core.at_top_QMARK_ = (function blog$core$at_top_QMARK_(s){
return (new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s) == null);
});
cljs.core._add_method.call(null,blog.core.update_schedule,new cljs.core.Keyword(null,"init-process","init-process",812674406),(function (p__28362,s,env){
var map__28363 = p__28362;
var map__28363__$1 = cljs.core.__destructure_map.call(null,map__28363);
var ast = cljs.core.get.call(null,map__28363__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var s__$1 = (((s == null))?blog.core.gen_schedule.call(null,ast):((blog.core.at_top_QMARK_.call(null,s))?clojure.zip.edit.call(null,s,(function (node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast,node], null);
})):clojure.zip.left.call(null,clojure.zip.insert_left.call(null,s,ast))
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,env], null);
}));
cljs.core._add_method.call(null,blog.core.update_schedule,new cljs.core.Keyword(null,"coroutine","coroutine",1878534013),(function (ast,s,env){
var map__28364 = ast;
var map__28364__$1 = cljs.core.__destructure_map.call(null,map__28364);
var run = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"run","run",-1821166653));
var routines = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"routines","routines",-1481279531));
var routines__$1 = cljs.core.mapv.call(null,(function (p__28365){
var vec__28366 = p__28365;
var k = cljs.core.nth.call(null,vec__28366,(0),null);
var v = cljs.core.nth.call(null,vec__28366,(1),null);
var loc = blog.core.gen_schedule.call(null,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.vary_meta.call(null,loc,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routine-key","routine-key",368829512),k], null))], null);
}),routines);
var routines__$2 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,routines__$1);
var _ = cljs.core.println.call(null,routines__$2);
var routines__$3 = cljs.core.conj.call(null,routines__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main","main",-2117802661),s], null));
var env__$1 = cljs.core.update.call(null,env,new cljs.core.Keyword(null,"processes","processes",-546984164),cljs.core.merge,routines__$3);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.call(null,routines__$3),env__$1,null], null);
}));
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.execute_schedule !== 'undefined')){
} else {
blog.core.execute_schedule = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.core","execute-schedule"),(function (s,env){
if((s == null)){
return new cljs.core.Keyword(null,"nil?","nil?",-28492597);
} else {
if(clojure.zip.end_QMARK_.call(null,s)){
return new cljs.core.Keyword(null,"end?","end?",-1423391609);
} else {
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,s))){
return new cljs.core.Keyword(null,"branch?","branch?",-999323007);
} else {
if(cljs.core.fn_QMARK_.call(null,clojure.zip.node.call(null,s))){
return new cljs.core.Keyword(null,"fn?","fn?",180459291);
} else {
return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.ast__GT_db !== 'undefined')){
} else {
blog.core.ast__GT_db = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.core","ast->db"),(function (p__28369,_){
var map__28370 = p__28369;
var map__28370__$1 = cljs.core.__destructure_map.call(null,map__28370);
var tag = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return tag;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.core.ast__GT_db,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ast,_){
return ast;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"db-update","db-update",1587012292),(function (db,p__28371){
var vec__28372 = p__28371;
var _ = cljs.core.nth.call(null,vec__28372,(0),null);
var ast = cljs.core.nth.call(null,vec__28372,(1),null);
var db_STAR_ = blog.core.ast__GT_db.call(null,ast,db);
return cljs.core.merge.call(null,db,db_STAR_);
}));
cljs.core._add_method.call(null,blog.core.execute_schedule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (s,env){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,s)))){
var map__28375 = clojure.zip.node.call(null,s);
var map__28375__$1 = cljs.core.__destructure_map.call(null,map__28375);
var to = cljs.core.get.call(null,map__28375__$1,new cljs.core.Keyword(null,"to","to",192099007));
var r = new cljs.core.Keyword(null,"routine-key","routine-key",368829512).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s));
var env__$1 = cljs.core.update.call(null,env,new cljs.core.Keyword(null,"processes","processes",-546984164),cljs.core.merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([r,clojure.zip.next.call(null,s)]));
var s__$1 = cljs.core.get_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processes","processes",-546984164),to], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,env__$1,(0)], null);
} else {
var node = clojure.zip.node.call(null,s);
blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-update","db-update",1587012292),node], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.next.call(null,s),env,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(node)], null);

}
}));
cljs.core._add_method.call(null,blog.core.execute_schedule,new cljs.core.Keyword(null,"end?","end?",-1423391609),(function (s,env){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,env,(1000)], null);
}));
cljs.core._add_method.call(null,blog.core.execute_schedule,new cljs.core.Keyword(null,"nil?","nil?",-28492597),(function (s,env){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,env,(1000)], null);
}));
cljs.core._add_method.call(null,blog.core.execute_schedule,new cljs.core.Keyword(null,"branch?","branch?",-999323007),(function (s,env){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.down.call(null,s),env,(0)], null);
}));
cljs.core._add_method.call(null,blog.core.execute_schedule,new cljs.core.Keyword(null,"fn?","fn?",180459291),(function (s,env){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.edit.call(null,s,(function (f){
return f.call(null);
})),env,null], null);
}));
blog.core.run_scheduler = (function blog$core$run_scheduler(){
var c__17585__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17586__auto__ = (function (){var switch__17562__auto__ = (function (state_28404){
var state_val_28405 = (state_28404[(1)]);
if((state_val_28405 === (7))){
var inst_28392 = (state_28404[(7)]);
var inst_28394 = cljs.core.async.timeout.call(null,inst_28392);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28404__$1,(10),inst_28394);
} else {
if((state_val_28405 === (1))){
var inst_28376 = cljs.core.PersistentHashMap.EMPTY;
var inst_28377 = null;
var inst_28378 = inst_28376;
var state_28404__$1 = (function (){var statearr_28406 = state_28404;
(statearr_28406[(8)] = inst_28377);

(statearr_28406[(9)] = inst_28378);

return statearr_28406;
})();
var statearr_28407_28425 = state_28404__$1;
(statearr_28407_28425[(2)] = null);

(statearr_28407_28425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (4))){
var inst_28383 = (state_28404[(10)]);
var inst_28377 = (state_28404[(8)]);
var inst_28378 = (state_28404[(9)]);
var inst_28385 = blog.core.update_schedule.call(null,inst_28383,inst_28377,inst_28378);
var state_28404__$1 = state_28404;
var statearr_28408_28426 = state_28404__$1;
(statearr_28408_28426[(2)] = inst_28385);

(statearr_28408_28426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (6))){
var inst_28392 = (state_28404[(7)]);
var inst_28389 = (state_28404[(2)]);
var inst_28390 = cljs.core.nth.call(null,inst_28389,(0),null);
var inst_28391 = cljs.core.nth.call(null,inst_28389,(1),null);
var inst_28392__$1 = cljs.core.nth.call(null,inst_28389,(2),null);
var state_28404__$1 = (function (){var statearr_28409 = state_28404;
(statearr_28409[(11)] = inst_28390);

(statearr_28409[(12)] = inst_28391);

(statearr_28409[(7)] = inst_28392__$1);

return statearr_28409;
})();
if(cljs.core.truth_(inst_28392__$1)){
var statearr_28410_28427 = state_28404__$1;
(statearr_28410_28427[(1)] = (7));

} else {
var statearr_28411_28428 = state_28404__$1;
(statearr_28411_28428[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (3))){
var inst_28402 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28404__$1,inst_28402);
} else {
if((state_val_28405 === (2))){
var inst_28383 = (state_28404[(10)]);
var inst_28383__$1 = blog.core.get_next_process.call(null);
var state_28404__$1 = (function (){var statearr_28412 = state_28404;
(statearr_28412[(10)] = inst_28383__$1);

return statearr_28412;
})();
if(cljs.core.truth_(inst_28383__$1)){
var statearr_28413_28429 = state_28404__$1;
(statearr_28413_28429[(1)] = (4));

} else {
var statearr_28414_28430 = state_28404__$1;
(statearr_28414_28430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (9))){
var inst_28390 = (state_28404[(11)]);
var inst_28391 = (state_28404[(12)]);
var inst_28399 = (state_28404[(2)]);
var inst_28377 = inst_28390;
var inst_28378 = inst_28391;
var state_28404__$1 = (function (){var statearr_28415 = state_28404;
(statearr_28415[(13)] = inst_28399);

(statearr_28415[(8)] = inst_28377);

(statearr_28415[(9)] = inst_28378);

return statearr_28415;
})();
var statearr_28416_28431 = state_28404__$1;
(statearr_28416_28431[(2)] = null);

(statearr_28416_28431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (5))){
var inst_28377 = (state_28404[(8)]);
var inst_28378 = (state_28404[(9)]);
var inst_28387 = blog.core.execute_schedule.call(null,inst_28377,inst_28378);
var state_28404__$1 = state_28404;
var statearr_28417_28432 = state_28404__$1;
(statearr_28417_28432[(2)] = inst_28387);

(statearr_28417_28432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (10))){
var inst_28396 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28418_28433 = state_28404__$1;
(statearr_28418_28433[(2)] = inst_28396);

(statearr_28418_28433[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (8))){
var state_28404__$1 = state_28404;
var statearr_28419_28434 = state_28404__$1;
(statearr_28419_28434[(2)] = null);

(statearr_28419_28434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var blog$core$run_scheduler_$_state_machine__17563__auto__ = null;
var blog$core$run_scheduler_$_state_machine__17563__auto____0 = (function (){
var statearr_28420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28420[(0)] = blog$core$run_scheduler_$_state_machine__17563__auto__);

(statearr_28420[(1)] = (1));

return statearr_28420;
});
var blog$core$run_scheduler_$_state_machine__17563__auto____1 = (function (state_28404){
while(true){
var ret_value__17564__auto__ = (function (){try{while(true){
var result__17565__auto__ = switch__17562__auto__.call(null,state_28404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17565__auto__;
}
break;
}
}catch (e28421){var ex__17566__auto__ = e28421;
var statearr_28422_28435 = state_28404;
(statearr_28422_28435[(2)] = ex__17566__auto__);


if(cljs.core.seq.call(null,(state_28404[(4)]))){
var statearr_28423_28436 = state_28404;
(statearr_28423_28436[(1)] = cljs.core.first.call(null,(state_28404[(4)])));

} else {
throw ex__17566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28437 = state_28404;
state_28404 = G__28437;
continue;
} else {
return ret_value__17564__auto__;
}
break;
}
});
blog$core$run_scheduler_$_state_machine__17563__auto__ = function(state_28404){
switch(arguments.length){
case 0:
return blog$core$run_scheduler_$_state_machine__17563__auto____0.call(this);
case 1:
return blog$core$run_scheduler_$_state_machine__17563__auto____1.call(this,state_28404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blog$core$run_scheduler_$_state_machine__17563__auto__.cljs$core$IFn$_invoke$arity$0 = blog$core$run_scheduler_$_state_machine__17563__auto____0;
blog$core$run_scheduler_$_state_machine__17563__auto__.cljs$core$IFn$_invoke$arity$1 = blog$core$run_scheduler_$_state_machine__17563__auto____1;
return blog$core$run_scheduler_$_state_machine__17563__auto__;
})()
})();
var state__17587__auto__ = (function (){var statearr_28424 = f__17586__auto__.call(null);
(statearr_28424[(6)] = c__17585__auto__);

return statearr_28424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17587__auto__);
}));

return c__17585__auto__;
});
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.gen_process_ast !== 'undefined')){
} else {
blog.core.gen_process_ast = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.core","gen-process-ast"),(function (p__28438){
var map__28439 = p__28438;
var map__28439__$1 = cljs.core.__destructure_map.call(null,map__28439);
var tag = cljs.core.get.call(null,map__28439__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return tag;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.core.gen_process_ast,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28440){
var map__28441 = p__28440;
var map__28441__$1 = cljs.core.__destructure_map.call(null,map__28441);
var ast = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"init-process","init-process",812674406),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"ast","ast",-860334068),ast], null);
}));
cljs.core._add_method.call(null,blog.core.gen_process_ast,new cljs.core.Keyword(null,"coroutine","coroutine",1878534013),(function (_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"coroutine","coroutine",1878534013),new cljs.core.Keyword(null,"run","run",-1821166653),new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"routines","routines",-1481279531),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Thread 1: A",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Thread 1: B",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"second","second",-444702010)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),new cljs.core.Keyword(null,"temp","temp",1791541284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"eggs",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"second","second",-444702010)], null)], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Thread 1: C",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Thread 1: D",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"main","main",-2117802661)], null)], null),new cljs.core.Keyword(null,"second","second",-444702010),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Thread 2: A",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Thread 2: B",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"third","third",1602878105)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Thread 2: C",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Thread 2: D",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"first","first",-644103046)], null)], null),new cljs.core.Keyword(null,"third","third",1602878105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Third",new cljs.core.Keyword(null,"time","time",1385887882),(1000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"yield","yield",177875009),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"second","second",-444702010)], null)], null)], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"add-to-process-queue!","add-to-process-queue!",-1159361284),(function (ast){
return cljs.core.swap_BANG_.call(null,blog.core.process_queue,cljs.core.conj,ast);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"schedule","schedule",349275266),(function (_,p__28442){
var vec__28443 = p__28442;
var ___$1 = cljs.core.nth.call(null,vec__28443,(0),null);
var params = cljs.core.nth.call(null,vec__28443,(1),null);
var ast = blog.core.gen_process_ast.call(null,params);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-to-process-queue!","add-to-process-queue!",-1159361284),ast], null);
}));
blog.core.run_scheduler.call(null);
blog.core.script_STAR_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Yaaaa",new cljs.core.Keyword(null,"time","time",1385887882),(5000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Yeet",new cljs.core.Keyword(null,"time","time",1385887882),(3000)], null)], null);
blog.core.branch_QMARK_ = (function blog$core$branch_QMARK_(node){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(node);
});
blog.core.children = (function blog$core$children(node){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(node);
});
blog.core.state_zip = (function blog$core$state_zip(ast,env){
var _STAR_branch_QMARK_ = (function blog$core$state_zip_$__STAR_branch_QMARK_(node){
return blog.core.branch_QMARK_.call(null,node);
});
var _STAR_children = (function blog$core$state_zip_$__STAR_children(node){
return cljs.core.vals.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,env),blog.core.children.call(null,node)));
});
var index = (function blog$core$state_zip_$_index(data,nodes){
return cljs.core.apply.call(null,cljs.core.merge,data,cljs.core.map.call(null,(function (node){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),node]);
}),nodes));
});
var make_node = (function blog$core$state_zip_$_make_node(node,children){
cljs.core.swap_BANG_.call(null,env,index,children);

return node;
});
return clojure.zip.zipper.call(null,_STAR_branch_QMARK_,_STAR_children,make_node,ast);
});
blog.core.counter = reagent.core.atom.call(null,(0));
blog.core.walk = (function blog$core$walk(root,data,env,f){
var data__$1 = cljs.core.atom.call(null,data);
var loc = blog.core.state_zip.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null)], null),data__$1);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return cljs.core.deref.call(null,data__$1);
} else {
var G__28446 = clojure.zip.next.call(null,clojure.zip.edit.call(null,loc,f));
loc = G__28446;
continue;
}
break;
}
});
blog.core.data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null);
blog.core.t = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null);
blog.core.global_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("blog.core","copy","blog.core/copy",373624704),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"root","root",-448657453),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"root",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null)),new cljs.core.Keyword(null,"a","a",-2123407586),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"a"], null)),new cljs.core.Keyword(null,"b","b",1482224470),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"b"], null)),new cljs.core.Keyword(null,"c","c",-1763192079),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"c"], null)),new cljs.core.Keyword(null,"d","d",1972142424),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"d",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null)),new cljs.core.Keyword(null,"e","e",1381269198),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Antelope"], null))], null));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"data->dom!","data->dom!",1738932987),(function (data_STAR_){
return blog.core.merge_BANG_.call(null,data_STAR_);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block-event-loop!","block-event-loop!",-563235123),(function (data_STAR_){
var c__17585__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17586__auto__ = (function (){var switch__17562__auto__ = (function (state_28452){
var state_val_28453 = (state_28452[(1)]);
if((state_val_28453 === (1))){
var inst_28447 = cljs.core.async.timeout.call(null,(1000));
var state_28452__$1 = state_28452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28452__$1,(2),inst_28447);
} else {
if((state_val_28453 === (2))){
var inst_28449 = (state_28452[(2)]);
var inst_28450 = cljs.core.println.call(null,"Done");
var state_28452__$1 = (function (){var statearr_28454 = state_28452;
(statearr_28454[(7)] = inst_28449);

return statearr_28454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28452__$1,inst_28450);
} else {
return null;
}
}
});
return (function() {
var blog$core$state_machine__17563__auto__ = null;
var blog$core$state_machine__17563__auto____0 = (function (){
var statearr_28455 = [null,null,null,null,null,null,null,null];
(statearr_28455[(0)] = blog$core$state_machine__17563__auto__);

(statearr_28455[(1)] = (1));

return statearr_28455;
});
var blog$core$state_machine__17563__auto____1 = (function (state_28452){
while(true){
var ret_value__17564__auto__ = (function (){try{while(true){
var result__17565__auto__ = switch__17562__auto__.call(null,state_28452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17565__auto__;
}
break;
}
}catch (e28456){var ex__17566__auto__ = e28456;
var statearr_28457_28460 = state_28452;
(statearr_28457_28460[(2)] = ex__17566__auto__);


if(cljs.core.seq.call(null,(state_28452[(4)]))){
var statearr_28458_28461 = state_28452;
(statearr_28458_28461[(1)] = cljs.core.first.call(null,(state_28452[(4)])));

} else {
throw ex__17566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28462 = state_28452;
state_28452 = G__28462;
continue;
} else {
return ret_value__17564__auto__;
}
break;
}
});
blog$core$state_machine__17563__auto__ = function(state_28452){
switch(arguments.length){
case 0:
return blog$core$state_machine__17563__auto____0.call(this);
case 1:
return blog$core$state_machine__17563__auto____1.call(this,state_28452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blog$core$state_machine__17563__auto__.cljs$core$IFn$_invoke$arity$0 = blog$core$state_machine__17563__auto____0;
blog$core$state_machine__17563__auto__.cljs$core$IFn$_invoke$arity$1 = blog$core$state_machine__17563__auto____1;
return blog$core$state_machine__17563__auto__;
})()
})();
var state__17587__auto__ = (function (){var statearr_28459 = f__17586__auto__.call(null);
(statearr_28459[(6)] = c__17585__auto__);

return statearr_28459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17587__auto__);
}));

return c__17585__auto__;
}));
blog.core.update_db_dom_data = (function blog$core$update_db_dom_data(db,data_STAR_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"dom","dom",-1236537922),cljs.core.merge,data_STAR_);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"update-data","update-data",124424260),(function (p__28463,p__28464){
var map__28465 = p__28463;
var map__28465__$1 = cljs.core.__destructure_map.call(null,map__28465);
var db = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28466 = p__28464;
var _ = cljs.core.nth.call(null,vec__28466,(0),null);
var data_STAR_ = cljs.core.nth.call(null,vec__28466,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),blog.core.update_db_dom_data.call(null,db,data_STAR_),new cljs.core.Keyword(null,"data->dom!","data->dom!",1738932987),data_STAR_,new cljs.core.Keyword(null,"block-event-loop!","block-event-loop!",-563235123),data_STAR_], null);
}));
blog.core.add_BANG_ = (function blog$core$add_BANG_(id,data){
cljs.core.swap_BANG_.call(null,blog.core.global_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("blog.core","copy","blog.core/copy",373624704),id], null),data);

cljs.core.swap_BANG_.call(null,blog.core.global_state,cljs.core.assoc,id,reagent.core.atom.call(null,data));

return null;
});
blog.core.remove_BANG_ = (function blog$core$remove_BANG_(id,data){
cljs.core.swap_BANG_.call(null,blog.core.global_state,cljs.core.dissoc,id);

return null;
});
blog.core.update_BANG_ = (function blog$core$update_BANG_(id,f){
cljs.core.swap_BANG_.call(null,blog.core.global_state,cljs.core.update,id,(function (node){
cljs.core.swap_BANG_.call(null,node,f);

return node;
}));

return null;
});
blog.core.merge_BANG_ = (function blog$core$merge_BANG_(map){
var seq__28469 = cljs.core.seq.call(null,map);
var chunk__28470 = null;
var count__28471 = (0);
var i__28472 = (0);
while(true){
if((i__28472 < count__28471)){
var vec__28479 = cljs.core._nth.call(null,chunk__28470,i__28472);
var k = cljs.core.nth.call(null,vec__28479,(0),null);
var v = cljs.core.nth.call(null,vec__28479,(1),null);
blog.core.update_BANG_.call(null,k,((function (seq__28469,chunk__28470,count__28471,i__28472,vec__28479,k,v){
return (function (_){
cljs.core.println.call(null,k);

return v;
});})(seq__28469,chunk__28470,count__28471,i__28472,vec__28479,k,v))
);


var G__28485 = seq__28469;
var G__28486 = chunk__28470;
var G__28487 = count__28471;
var G__28488 = (i__28472 + (1));
seq__28469 = G__28485;
chunk__28470 = G__28486;
count__28471 = G__28487;
i__28472 = G__28488;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28469);
if(temp__5720__auto__){
var seq__28469__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28469__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__28469__$1);
var G__28489 = cljs.core.chunk_rest.call(null,seq__28469__$1);
var G__28490 = c__4679__auto__;
var G__28491 = cljs.core.count.call(null,c__4679__auto__);
var G__28492 = (0);
seq__28469 = G__28489;
chunk__28470 = G__28490;
count__28471 = G__28491;
i__28472 = G__28492;
continue;
} else {
var vec__28482 = cljs.core.first.call(null,seq__28469__$1);
var k = cljs.core.nth.call(null,vec__28482,(0),null);
var v = cljs.core.nth.call(null,vec__28482,(1),null);
blog.core.update_BANG_.call(null,k,((function (seq__28469,chunk__28470,count__28471,i__28472,vec__28482,k,v,seq__28469__$1,temp__5720__auto__){
return (function (_){
cljs.core.println.call(null,k);

return v;
});})(seq__28469,chunk__28470,count__28471,i__28472,vec__28482,k,v,seq__28469__$1,temp__5720__auto__))
);


var G__28493 = cljs.core.next.call(null,seq__28469__$1);
var G__28494 = null;
var G__28495 = (0);
var G__28496 = (0);
seq__28469 = G__28493;
chunk__28470 = G__28494;
count__28471 = G__28495;
i__28472 = G__28496;
continue;
}
} else {
return null;
}
}
break;
}
});
blog.core.prefix = cljs.core.atom.call(null,"");
blog.core.global_state_STAR_ = (function blog$core$global_state_STAR_(var_args){
var G__28498 = arguments.length;
switch (G__28498) {
case 0:
return blog.core.global_state_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return blog.core.global_state_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blog.core.global_state_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return blog.core.global_state_STAR_.call(null,new cljs.core.Keyword(null,"root","root",-448657453));
}));

(blog.core.global_state_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (id){
var state = cljs.core.deref.call(null,blog.core.global_state).call(null,id);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return cljs.core.println.call(null,"mounted ",id);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (_){
return cljs.core.println.call(null,["updated ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
return cljs.core.println.call(null,["will unmount ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
var map__28499 = cljs.core.deref.call(null,state);
var map__28499__$1 = cljs.core.__destructure_map.call(null,map__28499);
var style = cljs.core.get.call(null,map__28499__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var text = cljs.core.get.call(null,map__28499__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var nodes = cljs.core.get.call(null,map__28499__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var close = cljs.core.get.call(null,map__28499__$1,new cljs.core.Keyword(null,"close","close",1835149582));
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(cljs.core.truth_(close)?"0em":null),new cljs.core.Keyword(null,"transition","transition",765692007),"2000ms"),new cljs.core.Keyword(null,"data-before","data-before",528494321),"(",new cljs.core.Keyword(null,"data-color","data-color",-1132407184),"red"], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,(cljs.core.truth_(close)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0em"], null):null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transition","transition",765692007),"2000ms"], null))], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,blog.core.prefix))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('')], null),(function (){var iter__4652__auto__ = (function blog$core$iter__28500(s__28501){
return (new cljs.core.LazySeq(null,(function (){
var s__28501__$1 = s__28501;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28501__$1);
if(temp__5720__auto__){
var s__28501__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28501__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__28501__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__28503 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__28502 = (0);
while(true){
if((i__28502 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__28502);
cljs.core.chunk_append.call(null,b__28503,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.global_state_STAR_,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__28505 = (i__28502 + (1));
i__28502 = G__28505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28503),blog$core$iter__28500.call(null,cljs.core.chunk_rest.call(null,s__28501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28503),null);
}
} else {
var n = cljs.core.first.call(null,s__28501__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.global_state_STAR_,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),blog$core$iter__28500.call(null,cljs.core.rest.call(null,s__28501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,nodes);
})()));
})], null));
}));

(blog.core.global_state_STAR_.cljs$lang$maxFixedArity = 1);

/**
 * Sets some action for when
 * a particular element hits
 * the viewport.
 */
blog.core.set_scroll_STAR_ = (function blog$core$set_scroll_STAR_(id,f){
var element = document.getElementById(id);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"handler","handler",-195596612),f,new cljs.core.Keyword(null,"offset","offset",296498311),"25%"], null);
return (new Waypoint(cljs.core.clj__GT_js.call(null,params)));
});
blog.core.essay_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focus","focus",234677911),null], null));
blog.core.update_BANG__BANG_ = (function blog$core$update_BANG__BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28509 = arguments.length;
var i__4865__auto___28510 = (0);
while(true){
if((i__4865__auto___28510 < len__4864__auto___28509)){
args__4870__auto__.push((arguments[i__4865__auto___28510]));

var G__28511 = (i__4865__auto___28510 + (1));
i__4865__auto___28510 = G__28511;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return blog.core.update_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(blog.core.update_BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,f,args){
cljs.core.swap_BANG_.call(null,blog.core.essay_data,cljs.core.update,id,(function (node){
cljs.core.apply.call(null,cljs.core.swap_BANG_,node,f,args);

return node;
}));

return null;
}));

(blog.core.update_BANG__BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(blog.core.update_BANG__BANG_.cljs$lang$applyTo = (function (seq28506){
var G__28507 = cljs.core.first.call(null,seq28506);
var seq28506__$1 = cljs.core.next.call(null,seq28506);
var G__28508 = cljs.core.first.call(null,seq28506__$1);
var seq28506__$2 = cljs.core.next.call(null,seq28506__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28507,G__28508,seq28506__$2);
}));


blog.core.render_essay = (function blog$core$render_essay(essay){
var data = blog.core.essay__GT_data.call(null,essay);
var id = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__19698__auto__ = blog.core.pathcache28512;
var info__19698__auto____$1 = (((info__19698__auto__ == null))?(function (){var info28513 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.LAST,new cljs.core.Var(function(){return com.rpl.specter.LAST;},new cljs.core.Symbol("com.rpl.specter","LAST","com.rpl.specter/LAST",936547714,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"LAST","LAST",-1146342427,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(765),(768),cljs.core.List.EMPTY,"Navigate to the last element of the collection. If the collection is\n          empty navigation is stopped at this point.",(cljs.core.truth_(com.rpl.specter.LAST)?com.rpl.specter.LAST.cljs$lang$test:null)])),new cljs.core.Symbol("s","LAST","s/LAST",-1146342808,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ATOM,new cljs.core.Var(function(){return com.rpl.specter.ATOM;},new cljs.core.Symbol("com.rpl.specter","ATOM","com.rpl.specter/ATOM",827730716,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ATOM","ATOM",-2063219067,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1120),(1122),cljs.core.List.EMPTY,"Navigates to atom value.",(cljs.core.truth_(com.rpl.specter.ATOM)?com.rpl.specter.ATOM.cljs$lang$test:null)])),new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null)),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),"blog.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","LAST","s/LAST",-1146342808,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Symbol("s","LAST","s/LAST",-1146342808,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null)], null));
blog.core.pathcache28512 = info28513;

return info28513;
})():info__19698__auto__);
var precompiled28514 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19698__auto____$1);
var dynamic_QMARK___19699__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19698__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19699__auto__)){
return precompiled28514.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.LAST,com.rpl.specter.MAP_VALS,com.rpl.specter.ATOM,new cljs.core.Keyword(null,"id","id",-1388402092)], null),com.rpl.specter.LAST,com.rpl.specter.MAP_VALS,com.rpl.specter.ATOM], null));
} else {
return precompiled28514;
}
})(),data);
cljs.core.swap_BANG_.call(null,blog.core.essay_data,(function (essay_data,data__$1){
return cljs.core.apply.call(null,cljs.core.merge,essay_data,data__$1);
}),data);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_essay_STAR_,id], null);
});
blog.core.merge_BANG__BANG_ = (function blog$core$merge_BANG__BANG_(map){
var seq__28515 = cljs.core.seq.call(null,map);
var chunk__28516 = null;
var count__28517 = (0);
var i__28518 = (0);
while(true){
if((i__28518 < count__28517)){
var vec__28525 = cljs.core._nth.call(null,chunk__28516,i__28518);
var k = cljs.core.nth.call(null,vec__28525,(0),null);
var v = cljs.core.nth.call(null,vec__28525,(1),null);
blog.core.update_BANG__BANG_.call(null,k,((function (seq__28515,chunk__28516,count__28517,i__28518,vec__28525,k,v){
return (function (_){
cljs.core.println.call(null,k);

return v;
});})(seq__28515,chunk__28516,count__28517,i__28518,vec__28525,k,v))
);


var G__28531 = seq__28515;
var G__28532 = chunk__28516;
var G__28533 = count__28517;
var G__28534 = (i__28518 + (1));
seq__28515 = G__28531;
chunk__28516 = G__28532;
count__28517 = G__28533;
i__28518 = G__28534;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28515);
if(temp__5720__auto__){
var seq__28515__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28515__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__28515__$1);
var G__28535 = cljs.core.chunk_rest.call(null,seq__28515__$1);
var G__28536 = c__4679__auto__;
var G__28537 = cljs.core.count.call(null,c__4679__auto__);
var G__28538 = (0);
seq__28515 = G__28535;
chunk__28516 = G__28536;
count__28517 = G__28537;
i__28518 = G__28538;
continue;
} else {
var vec__28528 = cljs.core.first.call(null,seq__28515__$1);
var k = cljs.core.nth.call(null,vec__28528,(0),null);
var v = cljs.core.nth.call(null,vec__28528,(1),null);
blog.core.update_BANG__BANG_.call(null,k,((function (seq__28515,chunk__28516,count__28517,i__28518,vec__28528,k,v,seq__28515__$1,temp__5720__auto__){
return (function (_){
cljs.core.println.call(null,k);

return v;
});})(seq__28515,chunk__28516,count__28517,i__28518,vec__28528,k,v,seq__28515__$1,temp__5720__auto__))
);


var G__28539 = cljs.core.next.call(null,seq__28515__$1);
var G__28540 = null;
var G__28541 = (0);
var G__28542 = (0);
seq__28515 = G__28539;
chunk__28516 = G__28540;
count__28517 = G__28541;
i__28518 = G__28542;
continue;
}
} else {
return null;
}
}
break;
}
});
blog.core.render_essay_STAR_ = (function blog$core$render_essay_STAR_(id){
var id_enter = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-enter"].join('');
var id_exit = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-exit"].join('');
var div_enter = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id_enter], null)], null);
var div_exit = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id_exit], null)], null);
var map__28543 = cljs.core.deref.call(null,id.call(null,cljs.core.deref.call(null,blog.core.essay_data)));
var map__28543__$1 = cljs.core.__destructure_map.call(null,map__28543);
var data = map__28543__$1;
var event = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"event","event",301435442));
return (function (id__$1){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (_){
return null;
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return blog.core.set_scroll_STAR_.call(null,id__$1,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"token?","token?",994132242).cljs$core$IFn$_invoke$arity$1(data))){
var focused_id = new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,blog.core.essay_data));
if(cljs.core.truth_(focused_id)){
blog.core.update_BANG__BANG_.call(null,focused_id,(function (node){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"transition","transition",765692007)], null),"1000ms"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"text-outline","text-outline",-2026960525)], null),null);
}));
} else {
}

blog.core.update_BANG__BANG_.call(null,id__$1,(function (node){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"transition","transition",765692007)], null),"1000ms"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"text-outline","text-outline",-2026960525)], null),"1px red");
}));

return cljs.core.swap_BANG_.call(null,blog.core.essay_data,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),id__$1);
} else {
return null;
}
}));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id__$2){
var map__28544 = cljs.core.deref.call(null,id__$2.call(null,cljs.core.deref.call(null,blog.core.essay_data)));
var map__28544__$1 = cljs.core.__destructure_map.call(null,map__28544);
var tag = cljs.core.get.call(null,map__28544__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var params = cljs.core.get.call(null,map__28544__$1,new cljs.core.Keyword(null,"params","params",710516235));
var forms = cljs.core.get.call(null,map__28544__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
return cljs.core.conj.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,params,div_enter], null),forms),div_exit);
})], null));
});
});
blog.core.parseable_text_QMARK_ = (function blog$core$parseable_text_QMARK_(node){
return ((cljs.core.vector_QMARK_.call(null,node)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"br","br",934104792),cljs.core.first.call(null,node))));
});
blog.core.parse_essay_on_descent = (function blog$core$parse_essay_on_descent(node){
if(blog.core.parseable_text_QMARK_.call(null,node)){
var vec__28545 = node;
var seq__28546 = cljs.core.seq.call(null,vec__28545);
var first__28547 = cljs.core.first.call(null,seq__28546);
var seq__28546__$1 = cljs.core.next.call(null,seq__28546);
var tag = first__28547;
var first__28547__$1 = cljs.core.first.call(null,seq__28546__$1);
var seq__28546__$2 = cljs.core.next.call(null,seq__28546__$1);
var params = first__28547__$1;
var forms = seq__28546__$2;
var vec__28548 = ((cljs.core.map_QMARK_.call(null,params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,forms], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons.call(null,params,forms)], null));
var params__$1 = cljs.core.nth.call(null,vec__28548,(0),null);
var forms__$1 = cljs.core.nth.call(null,vec__28548,(1),null);
var id = cljs.core.gensym.call(null,"essay-");
var data = cljs.core.meta.call(null,node);
var token_QMARK_ = cljs.core.not.call(null,cljs.core.some.call(null,blog.core.parseable_text_QMARK_,forms__$1));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"token?","token?",994132242),token_QMARK_,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null),data);
} else {
return node;
}
});
blog.core.ESSAY = com.rpl.specter.impl.direct_nav_obj.call(null,(function (prewalk_f){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__19698__auto__ = blog.core.pathcache28551;
var info__19698__auto____$1 = (((info__19698__auto__ == null))?(function (){var info28552 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,blog.core.parseable_text_QMARK_,new cljs.core.Var(function(){return blog.core.parseable_text_QMARK_;},new cljs.core.Symbol("blog.core","parseable-text?","blog.core/parseable-text?",-1819786629,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.core","blog.core",59641950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"parseable-text?","parseable-text?",1242133486,null),"src/blog/core.cljs",22,1,1090,1090,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(blog.core.parseable_text_QMARK_)?blog.core.parseable_text_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"parseable-text?","parseable-text?",1242133486,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.view,new cljs.core.Var(function(){return com.rpl.specter.view;},new cljs.core.Symbol("com.rpl.specter","view","com.rpl.specter/view",542493804,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1098),(1100),cljs.core.List.EMPTY,"Navigates to result of running `afn` on the currently navigated value.",(cljs.core.truth_(com.rpl.specter.view)?com.rpl.specter.view.cljs$lang$test:null)])),new cljs.core.Symbol("s","view","s/view",-1406441066,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,prewalk_f,new cljs.core.Symbol(null,"prewalk-f","prewalk-f",489834378,null))], null),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),new cljs.core.Symbol(null,"prewalk-f","prewalk-f",489834378,null))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",2045992350),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"parseable-text?","parseable-text?",1242133486,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),new cljs.core.Symbol(null,"prewalk-f","prewalk-f",489834378,null)),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"blog.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prewalk-f","prewalk-f",489834378,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"parseable-text?","parseable-text?",1242133486,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),new cljs.core.Symbol(null,"prewalk-f","prewalk-f",489834378,null)),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","view","s/view",-1406441066,null),new cljs.core.Symbol(null,"prewalk-f","prewalk-f",489834378,null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
blog.core.pathcache28551 = info28552;

return info28552;
})():info__19698__auto__);
var precompiled28553 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19698__auto____$1);
var dynamic_QMARK___19699__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19698__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19699__auto__)){
return precompiled28553.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,blog.core.parseable_text_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.view.call(null,prewalk_f),com.rpl.specter.continue_then_stay.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350),com.rpl.specter.ALL,p)], null),com.rpl.specter.view,prewalk_f,com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled28553;
}
})());

return p;
}));
blog.core.parse_essay = (function blog$core$parse_essay(essay){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__19698__auto__ = blog.core.pathcache28554;
var info__19698__auto____$1 = (((info__19698__auto__ == null))?(function (){var info28555 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,blog.core.ESSAY,new cljs.core.Var(function(){return blog.core.ESSAY;},new cljs.core.Symbol("blog.core","ESSAY","blog.core/ESSAY",-424692399,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.core","blog.core",59641950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"ESSAY","ESSAY",774825924,null),"src/blog/core.cljs",11,1,1125,1125,cljs.core.List.EMPTY,null,(cljs.core.truth_(blog.core.ESSAY)?blog.core.ESSAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ESSAY","ESSAY",774825924,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,blog.core.parse_essay_on_descent,new cljs.core.Var(function(){return blog.core.parse_essay_on_descent;},new cljs.core.Symbol("blog.core","parse-essay-on-descent","blog.core/parse-essay-on-descent",2127461919,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.core","blog.core",59641950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"parse-essay-on-descent","parse-essay-on-descent",911034530,null),"src/blog/core.cljs",29,1,1095,1095,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)),null,(cljs.core.truth_(blog.core.parse_essay_on_descent)?blog.core.parse_essay_on_descent.cljs$lang$test:null)])),new cljs.core.Symbol(null,"parse-essay-on-descent","parse-essay-on-descent",911034530,null))], null),cljs.core.list(new cljs.core.Symbol(null,"ESSAY","ESSAY",774825924,null),new cljs.core.Symbol(null,"parse-essay-on-descent","parse-essay-on-descent",911034530,null)))], null),"blog.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ESSAY","ESSAY",774825924,null),new cljs.core.Symbol(null,"parse-essay-on-descent","parse-essay-on-descent",911034530,null)], null));
blog.core.pathcache28554 = info28555;

return info28555;
})():info__19698__auto__);
var precompiled28556 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19698__auto____$1);
var dynamic_QMARK___19699__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19698__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19699__auto__)){
return precompiled28556.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.ESSAY,blog.core.parse_essay_on_descent], null));
} else {
return precompiled28556;
}
})(),cljs.core.identity,essay);
});
blog.core.ESSAY_PARSED = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__19698__auto__ = blog.core.pathcache28557;
var info__19698__auto____$1 = (((info__19698__auto__ == null))?(function (){var info28558 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.map_QMARK_,new cljs.core.Var(function(){return cljs.core.map_QMARK_;},new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),"cljs/core.cljs",(11),(1),(2171),(2171),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Return true if x satisfies IMap",(cljs.core.truth_(cljs.core.map_QMARK_)?cljs.core.map_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.continue_then_stay,new cljs.core.Var(function(){return com.rpl.specter.continue_then_stay;},new cljs.core.Symbol("com.rpl.specter","continue-then-stay","com.rpl.specter/continue-then-stay",-1862183486,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the provided path and then to the current element. This can be used\n   to implement post-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1475),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"continue-then-stay","continue-then-stay",493763497,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.continue_then_stay)?com.rpl.specter.continue_then_stay.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",2045992350),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"blog.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","continue-then-stay","s/continue-then-stay",493763356,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
blog.core.pathcache28557 = info28558;

return info28558;
})():info__19698__auto__);
var precompiled28559 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19698__auto____$1);
var dynamic_QMARK___19699__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19698__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19699__auto__)){
return precompiled28559.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,cljs.core.map_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.continue_then_stay.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350),com.rpl.specter.ALL,p)], null),com.rpl.specter.continue_then_stay,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled28559;
}
})());

return p;
})();
blog.core.essay__GT_data = (function blog$core$essay__GT_data(essay){
return com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__19698__auto__ = blog.core.pathcache28560;
var info__19698__auto____$1 = (((info__19698__auto__ == null))?(function (){var info28561 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",2045992350)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"forms","forms",2045992350))),com.rpl.specter.impl.__GT_VarUse.call(null,blog.core.ESSAY_PARSED,new cljs.core.Var(function(){return blog.core.ESSAY_PARSED;},new cljs.core.Symbol("blog.core","ESSAY-PARSED","blog.core/ESSAY-PARSED",-1442913908,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.core","blog.core",59641950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"ESSAY-PARSED","ESSAY-PARSED",-780257417,null),"src/blog/core.cljs",18,1,1137,1137,cljs.core.List.EMPTY,null,(cljs.core.truth_(blog.core.ESSAY_PARSED)?blog.core.ESSAY_PARSED.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ESSAY-PARSED","ESSAY-PARSED",-780257417,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.view,new cljs.core.Var(function(){return com.rpl.specter.view;},new cljs.core.Symbol("com.rpl.specter","view","com.rpl.specter/view",542493804,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1098),(1100),cljs.core.List.EMPTY,"Navigates to result of running `afn` on the currently navigated value.",(cljs.core.truth_(com.rpl.specter.view)?com.rpl.specter.view.cljs$lang$test:null)])),new cljs.core.Symbol("s","view","s/view",-1406441066,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),reagent.core.atom.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"forms","forms",2045992350),(function (forms){
return cljs.core.map.call(null,(function (node__$1){
var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_essay_STAR_,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
return node__$1;
}
}),forms);
})))]);
} else {
return null;
}
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null)),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render-essay*","render-essay*",551589107,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol(null,"id","id",252129435,null)], null)),new cljs.core.Symbol(null,"node","node",-2073234571,null))),new cljs.core.Symbol(null,"forms","forms",-608443419,null)))))], null))))], null),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null)),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render-essay*","render-essay*",551589107,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol(null,"id","id",252129435,null)], null)),new cljs.core.Symbol(null,"node","node",-2073234571,null))),new cljs.core.Symbol(null,"forms","forms",-608443419,null)))))], null))))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.complement,new cljs.core.Var(function(){return cljs.core.complement;},new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),"cljs/core.cljs",(17),(1),(4294),(4294),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)),"Takes a fn f and returns a fn that takes the same arguments as f,\n  has the same effects, if any, and returns the opposite truth value.",(cljs.core.truth_(cljs.core.complement)?cljs.core.complement.cljs$lang$test:null)])),new cljs.core.Symbol(null,"complement","complement",-913606051,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.nil_QMARK_,new cljs.core.Var(function(){return cljs.core.nil_QMARK_;},new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),"cljs/core.cljs",(20),(1),(237),(237),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x is nil, false otherwise.",((cljs.core.nil_QMARK_)?cljs.core.nil_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null))], null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null)))], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null))))], null)], null),"blog.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"forms","forms",2045992350)),new cljs.core.Symbol(null,"ESSAY-PARSED","ESSAY-PARSED",-780257417,null),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null)),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render-essay*","render-essay*",551589107,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol(null,"id","id",252129435,null)], null)),new cljs.core.Symbol(null,"node","node",-2073234571,null))),new cljs.core.Symbol(null,"forms","forms",-608443419,null)))))], null)))),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null)))], null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"ESSAY-PARSED","ESSAY-PARSED",-780257417,null),new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null)),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render-essay*","render-essay*",551589107,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol(null,"id","id",252129435,null)], null)),new cljs.core.Symbol(null,"node","node",-2073234571,null))),new cljs.core.Symbol(null,"forms","forms",-608443419,null)))))], null))),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null)], null));
blog.core.pathcache28560 = info28561;

return info28561;
})():info__19698__auto__);
var precompiled28562 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__19698__auto____$1);
var dynamic_QMARK___19699__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__19698__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___19699__auto__)){
return precompiled28562.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.pred.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350)),blog.core.ESSAY_PARSED,com.rpl.specter.view.call(null,(function (node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),reagent.core.atom.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"forms","forms",2045992350),(function (forms){
return cljs.core.map.call(null,(function (node__$1){
var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_essay_STAR_,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
return node__$1;
}
}),forms);
})))]);
} else {
return null;
}
})),com.rpl.specter.pred.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_))], null),com.rpl.specter.pred,blog.core.ESSAY_PARSED,com.rpl.specter.view,(function (node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),reagent.core.atom.call(null,cljs.core.update.call(null,node,new cljs.core.Keyword(null,"forms","forms",2045992350),(function (forms){
return cljs.core.map.call(null,(function (node__$1){
var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_essay_STAR_,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
} else {
return node__$1;
}
}),forms);
})))]);
} else {
return null;
}
}),com.rpl.specter.pred,cljs.core.complement,cljs.core.nil_QMARK_], null));
} else {
return precompiled28562;
}
})(),blog.core.parse_essay.call(null,essay));
});
blog.core.essay = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"35vh",new cljs.core.Keyword(null,"height","height",1025178622),"1500px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),(function (){var iter__4652__auto__ = (function blog$core$iter__28563(s__28564){
return (new cljs.core.LazySeq(null,(function (){
var s__28564__$1 = s__28564;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28564__$1);
if(temp__5720__auto__){
var s__28564__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28564__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__28564__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__28566 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__28565 = (0);
while(true){
if((i__28565 < size__4651__auto__)){
var i = cljs.core._nth.call(null,c__4650__auto__,i__28565);
cljs.core.chunk_append.call(null,b__28566,cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Linear Maps"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"A linear map is a transformation where..."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(14)], null)], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This means that they preserve vector addition and scalar multiplication."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This means that they preserve vector addition and scalar multiplication."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This means that they preserve vector addition and scalar multiplication."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This means that they preserve vector addition and scalar multiplication."], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__28567 = (i__28565 + (1));
i__28565 = G__28567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28566),blog$core$iter__28563.call(null,cljs.core.chunk_rest.call(null,s__28564__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28566),null);
}
} else {
var i = cljs.core.first.call(null,s__28564__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Linear Maps"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"A linear map is a transformation where..."], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(14)], null)], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This means that they preserve vector addition and scalar multiplication."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This means that they preserve vector addition and scalar multiplication."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This means that they preserve vector addition and scalar multiplication."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This means that they preserve vector addition and scalar multiplication."], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),blog$core$iter__28563.call(null,cljs.core.rest.call(null,s__28564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.range.call(null,(1)));
})());
blog.core.log_event = (function blog$core$log_event(id,parent_id){
return re_frame.core.reg_sub.call(null,id,new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),(function (parent,p__28568){
var vec__28569 = p__28568;
var _ = cljs.core.nth.call(null,vec__28569,(0),null);
var id__$1 = cljs.core.nth.call(null,vec__28569,(1),null);
cljs.core.println.call(null,id__$1);

return cljs.core.get.call(null,parent,id__$1);
}));
});
blog.core.tree = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),(3),new cljs.core.Keyword(null,"e","e",1381269198),(4)], null)], null)], null);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"t-root","t-root",1352136953),(function (_,___$1){
return blog.core.tree;
}));
blog.core.parse_tree = (function blog$core$parse_tree(var_args){
var G__28573 = arguments.length;
switch (G__28573) {
case 1:
return blog.core.parse_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return blog.core.parse_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blog.core.parse_tree.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return blog.core.parse_tree.call(null,new cljs.core.Keyword(null,"t-root","t-root",1352136953),tree);
}));

(blog.core.parse_tree.cljs$core$IFn$_invoke$arity$2 = (function (parent_id,tree){
var vec__28574 = tree;
var k = cljs.core.nth.call(null,vec__28574,(0),null);
var v = cljs.core.nth.call(null,vec__28574,(1),null);
blog.core.log_event.call(null,tree,parent_id);

var temp__5720__auto__ = v;
if(cljs.core.truth_(temp__5720__auto__)){
var map__28577 = temp__5720__auto__;
var map__28577__$1 = cljs.core.__destructure_map.call(null,map__28577);
var children = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var seq__28578 = cljs.core.seq.call(null,children);
var chunk__28579 = null;
var count__28580 = (0);
var i__28581 = (0);
while(true){
if((i__28581 < count__28580)){
var c = cljs.core._nth.call(null,chunk__28579,i__28581);
blog.core.parse_tree.call(null,k,c);


var G__28583 = seq__28578;
var G__28584 = chunk__28579;
var G__28585 = count__28580;
var G__28586 = (i__28581 + (1));
seq__28578 = G__28583;
chunk__28579 = G__28584;
count__28580 = G__28585;
i__28581 = G__28586;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28578);
if(temp__5720__auto____$1){
var seq__28578__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28578__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__28578__$1);
var G__28587 = cljs.core.chunk_rest.call(null,seq__28578__$1);
var G__28588 = c__4679__auto__;
var G__28589 = cljs.core.count.call(null,c__4679__auto__);
var G__28590 = (0);
seq__28578 = G__28587;
chunk__28579 = G__28588;
count__28580 = G__28589;
i__28581 = G__28590;
continue;
} else {
var c = cljs.core.first.call(null,seq__28578__$1);
blog.core.parse_tree.call(null,k,c);


var G__28591 = cljs.core.next.call(null,seq__28578__$1);
var G__28592 = null;
var G__28593 = (0);
var G__28594 = (0);
seq__28578 = G__28591;
chunk__28579 = G__28592;
count__28580 = G__28593;
i__28581 = G__28594;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(blog.core.parse_tree.cljs$lang$maxFixedArity = 2);

blog.core.tree_test = (function blog$core$tree_test(var_args){
var G__28596 = arguments.length;
switch (G__28596) {
case 0:
return blog.core.tree_test.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return blog.core.tree_test.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blog.core.tree_test.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"1"], null);
}));

(blog.core.tree_test.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (function (id__$1){
var data = blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null));
var contents = (function (){var temp__5718__auto__ = data;
if(cljs.core.truth_(temp__5718__auto__)){
var map__28597 = temp__5718__auto__;
var map__28597__$1 = cljs.core.__destructure_map.call(null,map__28597);
var children = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var iter__4652__auto__ = (function blog$core$iter__28598(s__28599){
return (new cljs.core.LazySeq(null,(function (){
var s__28599__$1 = s__28599;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28599__$1);
if(temp__5720__auto__){
var s__28599__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28599__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__28599__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__28601 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__28600 = (0);
while(true){
if((i__28600 < size__4651__auto__)){
var vec__28602 = cljs.core._nth.call(null,c__4650__auto__,i__28600);
var k = cljs.core.nth.call(null,vec__28602,(0),null);
var _ = cljs.core.nth.call(null,vec__28602,(1),null);
cljs.core.chunk_append.call(null,b__28601,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.tree_test,k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__28609 = (i__28600 + (1));
i__28600 = G__28609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28601),blog$core$iter__28598.call(null,cljs.core.chunk_rest.call(null,s__28599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28601),null);
}
} else {
var vec__28605 = cljs.core.first.call(null,s__28599__$2);
var k = cljs.core.nth.call(null,vec__28605,(0),null);
var _ = cljs.core.nth.call(null,vec__28605,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.tree_test,k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),blog$core$iter__28598.call(null,cljs.core.rest.call(null,s__28599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,children);
} else {
return cljs.core.second.call(null,data);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),contents], null);
});
}));

(blog.core.tree_test.cljs$lang$maxFixedArity = 1);

blog.core._scale = (function blog$core$_scale(r,i){
return Math.pow(r,i);
});
blog.core.scale = (function blog$core$scale(r,i){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.partial.call(null,blog.core._scale,r),cljs.core.range.call(null,i)));
});
blog.core.render_world = (function blog$core$render_world(i,distance,f){
return (function (i__$1,distance__$1,f__$1){
cljs.core.println.call(null,"distance");

cljs.core.println.call(null,["i: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)].join(''));

cljs.core.println.call(null,["distance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(distance__$1)].join(''));

var x_scale = ((100) * blog.core.scale.call(null,0.3,distance__$1));
var y_scale = ((100) * blog.core.scale.call(null,0.5,distance__$1));
var fs = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.pow(0.75,(distance__$1 - (1)))),"em"].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.off-screen","div.off-screen",1432140694),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_scale),"%, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_scale),"%)"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.3 * x_scale)),"%"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 * y_scale)),"%"].join(''),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fs,new cljs.core.Keyword(null,"transition","transition",765692007),"4000ms"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current World: ",i__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),f__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fs], null)),["Move Up to  World: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i__$1 + (1)))].join('')], null)], null)], null)], null)], null);
});
});
cljs.core._add_method.call(null,blog.core.render_page,new cljs.core.Keyword(null,"main-page*","main-page*",542683300),(function (_,ctx){
var worlds = reagent.core.atom.call(null,(1));
var f = (function (){
return cljs.core.swap_BANG_.call(null,worlds,cljs.core.inc);
});
return (function (___$1,ctx__$1){
var n_worlds = cljs.core.deref.call(null,worlds);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"1500px",new cljs.core.Keyword(null,"width","width",-384071477),"1500px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em"], null))], null),(function (){var iter__4652__auto__ = (function blog$core$iter__28610(s__28611){
return (new cljs.core.LazySeq(null,(function (){
var s__28611__$1 = s__28611;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28611__$1);
if(temp__5720__auto__){
var s__28611__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28611__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__28611__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__28613 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__28612 = (0);
while(true){
if((i__28612 < size__4651__auto__)){
var i = cljs.core._nth.call(null,c__4650__auto__,i__28612);
cljs.core.chunk_append.call(null,b__28613,(function (){
cljs.core.println.call(null,i);

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_world,i,(n_worlds - i),f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})()
);

var G__28614 = (i__28612 + (1));
i__28612 = G__28614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28613),blog$core$iter__28610.call(null,cljs.core.chunk_rest.call(null,s__28611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28613),null);
}
} else {
var i = cljs.core.first.call(null,s__28611__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.println.call(null,i);

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_world,i,(n_worlds - i),f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})()
,blog$core$iter__28610.call(null,cljs.core.rest.call(null,s__28611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(1),(n_worlds + (1)))));
})());
});
}));

//# sourceMappingURL=core.js.map
