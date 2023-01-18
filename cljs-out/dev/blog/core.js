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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-focus","set-focus",-381001028),(function (db,p__60125){
var vec__60126 = p__60125;
var _ = cljs.core.nth.call(null,vec__60126,(0),null);
var id = cljs.core.nth.call(null,vec__60126,(1),null);
var ctx = cljs.core.nth.call(null,vec__60126,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,new cljs.core.Keyword(null,"focus","focus",234677911)], null),id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"focus-id","focus-id",458947539),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"focus","focus",234677911)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"in-focus?","in-focus?",-381888585),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-id","focus-id",458947539)], null),(function (focus_id,p__60129){
var vec__60130 = p__60129;
var _ = cljs.core.nth.call(null,vec__60130,(0),null);
var id = cljs.core.nth.call(null,vec__60130,(1),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$2,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(blog.core._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-focus?","in-focus?",-381888585),id__$2], null)))?(function (){
cljs.core.println.call(null,["In focus: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$2)].join(''));

return "0.2em solid red";
})()
:null),new cljs.core.Keyword(null,"padding","padding",1660304693),"1em 1em 1em 1em"], null)], null),element__$2], null);
})], null));
});
});
blog.core.add_scrolls = (function blog$core$add_scrolls(ctx){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
return blog.core._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-focus","set-focus",-381001028),null,ctx], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (ctx__$1){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"150em",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_sym], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"Title",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Demo"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"a",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"1) Action 1"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"b",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"2) Action 2"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"c",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"3) Action 3"], null)], null)], null);
})], null));
});
blog.core.sym = (function blog$core$sym(kw){
return goog.string.unescapeEntities(["&",cljs.core.name.call(null,kw),";"].join(''));
});
blog.core.row = (function blog$core$row(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60134 = arguments.length;
var i__4865__auto___60135 = (0);
while(true){
if((i__4865__auto___60135 < len__4864__auto___60134)){
args__4870__auto__.push((arguments[i__4865__auto___60135]));

var G__60136 = (i__4865__auto___60135 + (1));
i__4865__auto___60135 = G__60136;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.core.row.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.core.row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row","div.math.row",486213500)], null),args);
}));

(blog.core.row.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.core.row.cljs$lang$applyTo = (function (seq60133){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60133));
}));

blog.core.$ = (function blog$core$$(var_args){
var G__60138 = arguments.length;
switch (G__60138) {
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

if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core._render !== 'undefined')){
} else {
blog.core._render = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.core","-render"),new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.core.add_jostle = (function blog$core$add_jostle(el){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jostle","div.jostle",-78724969),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animationend","animationend",783767694),(function (){
return cljs.core.println.call(null,"Done");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"--color-t","--color-t",-1724194342),"red",new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * cljs.core.rand.call(null))),"s"].join('')], null)),el], null);
});
cljs.core._add_method.call(null,blog.core._render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__60140){
var map__60141 = p__60140;
var map__60141__$1 = cljs.core.__destructure_map.call(null,map__60141);
var text = cljs.core.get.call(null,map__60141__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return blog.core.add_jostle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),text], null));
}));
cljs.core._add_method.call(null,blog.core._render,new cljs.core.Keyword(null,"equation","equation",-499527745),(function (p__60142){
var map__60143 = p__60142;
var map__60143__$1 = cljs.core.__destructure_map.call(null,map__60143);
var text = cljs.core.get.call(null,map__60143__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var nodes = cljs.core.get.call(null,map__60143__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row.spaced","div.math.row.spaced",-1629955391)], null),(function (){var iter__4652__auto__ = (function blog$core$iter__60144(s__60145){
return (new cljs.core.LazySeq(null,(function (){
var s__60145__$1 = s__60145;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__60145__$1);
if(temp__5720__auto__){
var s__60145__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60145__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__60145__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__60147 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__60146 = (0);
while(true){
if((i__60146 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__60146);
cljs.core.chunk_append.call(null,b__60147,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__60148 = (i__60146 + (1));
i__60146 = G__60148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60147),blog$core$iter__60144.call(null,cljs.core.chunk_rest.call(null,s__60145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60147),null);
}
} else {
var n = cljs.core.first.call(null,s__60145__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),blog$core$iter__60144.call(null,cljs.core.rest.call(null,s__60145__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,nodes);
})());
}));
cljs.core._add_method.call(null,blog.core._render,new cljs.core.Keyword(null,"bracket","bracket",-600276523),(function (p__60149){
var map__60150 = p__60149;
var map__60150__$1 = cljs.core.__destructure_map.call(null,map__60150);
var text = cljs.core.get.call(null,map__60150__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var nodes = cljs.core.get.call(null,map__60150__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var border = "0.1em solid black";
var h = "1.5em";
var w = "0.1em";
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border,new cljs.core.Keyword(null,"border-top","border-top",-158897573),border,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null)], null);
var end = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border,new cljs.core.Keyword(null,"border-top","border-top",-158897573),border,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null)], null)], null);
var container = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row","div.math.row",486213500),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),"even-spacing"], null)),start], null);
var innards = (function (){var iter__4652__auto__ = (function blog$core$iter__60151(s__60152){
return (new cljs.core.LazySeq(null,(function (){
var s__60152__$1 = s__60152;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__60152__$1);
if(temp__5720__auto__){
var s__60152__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60152__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__60152__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__60154 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__60153 = (0);
while(true){
if((i__60153 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__60153);
cljs.core.chunk_append.call(null,b__60154,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__60155 = (i__60153 + (1));
i__60153 = G__60155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60154),blog$core$iter__60151.call(null,cljs.core.chunk_rest.call(null,s__60152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60154),null);
}
} else {
var n = cljs.core.first.call(null,s__60152__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),blog$core$iter__60151.call(null,cljs.core.rest.call(null,s__60152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,nodes);
})();
return cljs.core.conj.call(null,cljs.core.into.call(null,container,innards),end);
}));
cljs.core._add_method.call(null,blog.core._render,new cljs.core.Keyword(null,"fraction","fraction",107940680),(function (p__60156){
var map__60157 = p__60156;
var map__60157__$1 = cljs.core.__destructure_map.call(null,map__60157);
var num = cljs.core.get.call(null,map__60157__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__60157__$1,new cljs.core.Keyword(null,"den","den",1422717834));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0em 1em 0em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,num], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.5em"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0em 1em 0em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,den], null)], null)], null));
}));
cljs.core._add_method.call(null,blog.core._render,new cljs.core.Keyword(null,"derivative","derivative",1421315465),(function (p__60158){
var map__60159 = p__60158;
var map__60159__$1 = cljs.core.__destructure_map.call(null,map__60159);
var num = cljs.core.get.call(null,map__60159__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__60159__$1,new cljs.core.Keyword(null,"den","den",1422717834));
var partial_QMARK_ = cljs.core.get.call(null,map__60159__$1,new cljs.core.Keyword(null,"partial?","partial?",-1644522276));
var d = (cljs.core.truth_(partial_QMARK_)?blog.core.sym.call(null,new cljs.core.Keyword(null,"part","part",77757738)):"d");
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0em 1em 0em",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),blog.core.add_jostle.call(null,d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,num], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.5em"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0em 1em 0em",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),blog.core.add_jostle.call(null,d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,den], null)], null)], null));
}));
cljs.core._add_method.call(null,blog.core._render,new cljs.core.Keyword(null,"sym","sym",-1444860305),(function (p__60160){
var map__60161 = p__60160;
var map__60161__$1 = cljs.core.__destructure_map.call(null,map__60161);
var key = cljs.core.get.call(null,map__60161__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.println.call(null,key);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),blog.core.add_jostle.call(null,blog.core.sym.call(null,key))], null);
}));
cljs.core._add_method.call(null,blog.core._render,new cljs.core.Keyword(null,"log","log",-1595516004),(function (p__60162){
var map__60163 = p__60162;
var map__60163__$1 = cljs.core.__destructure_map.call(null,map__60163);
var arg = cljs.core.get.call(null,map__60163__$1,new cljs.core.Keyword(null,"arg","arg",-1747261837));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.row,blog.core.add_jostle.call(null,"log"),blog.core.add_jostle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.opening","div.math.opening",1115395679),"("], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,arg], null)], null),blog.core.add_jostle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.closing","div.math.closing",-801630757),")"], null))], null);
}));
cljs.core._add_method.call(null,blog.core._render,new cljs.core.Keyword(null,"integral","integral",-1457739723),(function (p__60164){
var map__60165 = p__60164;
var map__60165__$1 = cljs.core.__destructure_map.call(null,map__60165);
var body = cljs.core.get.call(null,map__60165__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var delta = cljs.core.get.call(null,map__60165__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row.spaced","div.math.row.spaced",-1629955391),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)),blog.core.sym.call(null,new cljs.core.Keyword(null,"int","int",-1741416922))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,body], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.row,"d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,delta], null)], null)], null);
}));
blog.core.render_exp = (function blog$core$render_exp(node_STAR_,exp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.row,node_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-1.25em)"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,exp], null)], null)], null);
});
blog.core.render_coef = (function blog$core$render_coef(node_STAR_,coef){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,coef], null),node_STAR_], null);
});
blog.core.render = (function blog$core$render(p__60166){
var map__60167 = p__60166;
var map__60167__$1 = cljs.core.__destructure_map.call(null,map__60167);
var node = map__60167__$1;
var exp = cljs.core.get.call(null,map__60167__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
var coef = cljs.core.get.call(null,map__60167__$1,new cljs.core.Keyword(null,"coef","coef",956150629));
var node_STAR_ = blog.core._render.call(null,node);
var node_STAR___$1 = (cljs.core.truth_(coef)?blog.core.render_coef.call(null,node_STAR_,coef):node_STAR_);
if(cljs.core.truth_(exp)){
return blog.core.render_exp.call(null,node_STAR___$1,exp);
} else {
return node_STAR___$1;
}
});
blog.core.gen_sym = (function blog$core$gen_sym(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),blog.core.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2em"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.core.render.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"integral","integral",-1457739723),new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"oop","oop",-230191923),new cljs.core.Keyword(null,"text","text",-1790561697),"x"], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"equation","equation",-499527745),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pi","pi",-1463757343)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"equation","equation",-499527745),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"coef","coef",956150629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),(3)], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"lambda","lambda",-1483427225),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(14)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(15)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pi","pi",-1463757343),new cljs.core.Keyword(null,"coef","coef",956150629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),(10)], null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),"2"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"derivative","derivative",1421315465),new cljs.core.Keyword(null,"partial?","partial?",-1644522276),true,new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null))], null)], null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-ctx","init-ctx",1682455157),(function (db,p__60168){
var vec__60169 = p__60168;
var _ = cljs.core.nth.call(null,vec__60169,(0),null);
var ctx = cljs.core.nth.call(null,vec__60169,(1),null);
return cljs.core.merge.call(null,db,cljs.core.PersistentArrayMap.createAsIfByAssoc([ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),new cljs.core.Keyword("tab","about","tab/about",1423483058)], null)]));
}));
blog.core.init_db = (function blog$core$init_db(){
return null;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"switch-tab","switch-tab",-2013959460),(function (db,p__60172){
var vec__60173 = p__60172;
var _ = cljs.core.nth.call(null,vec__60173,(0),null);
var tag = cljs.core.nth.call(null,vec__60173,(1),null);
var ctx = cljs.core.nth.call(null,vec__60173,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577)], null),tag);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),(function (db,p__60176){
var vec__60177 = p__60176;
var _ = cljs.core.nth.call(null,vec__60177,(0),null);
var ctx = cljs.core.nth.call(null,vec__60177,(1),null);
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
var len__4864__auto___60185 = arguments.length;
var i__4865__auto___60186 = (0);
while(true){
if((i__4865__auto___60186 < len__4864__auto___60185)){
args__4870__auto__.push((arguments[i__4865__auto___60186]));

var G__60187 = (i__4865__auto___60186 + (1));
i__4865__auto___60186 = G__60187;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
var cols__$1 = cljs.core.mapv.call(null,(function (p__60181){
var vec__60182 = p__60181;
var flex = cljs.core.nth.call(null,vec__60182,(0),null);
var col = cljs.core.nth.call(null,vec__60182,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null)], null),col], null);
}),cols);
var row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
return cljs.core.into.call(null,row,cols__$1);
}));

(blog.core.gen_row_of_cols.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.core.gen_row_of_cols.cljs$lang$applyTo = (function (seq60180){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60180));
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
blog.core.essays = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Demos",new cljs.core.Keyword(null,"summary","summary",380847952),"A collection of demos.",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("essay","demos","essay/demos",1922922274)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"On Yams",new cljs.core.Keyword(null,"summary","summary",380847952),"Some thoughts on nature's most perfect creation.",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("essay","yams","essay/yams",1287694457)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"On Eggs",new cljs.core.Keyword(null,"summary","summary",380847952),"Some thoughts on nature's second most perfect creation.",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("essay","eggs","essay/eggs",1273137844)], null)], null);
blog.core.render_essay_link = (function blog$core$render_essay_link(p__60188){
var map__60189 = p__60188;
var map__60189__$1 = cljs.core.__destructure_map.call(null,map__60189);
var id = cljs.core.get.call(null,map__60189__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__60189__$1,new cljs.core.Keyword(null,"title","title",636505583));
var summary = cljs.core.get.call(null,map__60189__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"exists?","exists?",1414473716),(function (db,p__60190){
var vec__60191 = p__60190;
var _ = cljs.core.nth.call(null,vec__60191,(0),null);
var ctx = cljs.core.nth.call(null,vec__60191,(1),null);
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
