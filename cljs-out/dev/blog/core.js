// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('blog.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('cljs.repl');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('reagent.dom');
blog.core.global$module$cljsjs$waypoints = goog.global["Waypoint"];
blog.core._LT_sub = (function blog$core$_LT_sub(params){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(params));
});
blog.core._GT_evt = (function blog$core$_GT_evt(params){
return re_frame.core.dispatch(params);
});
/**
 * Sets some action for when
 * a particular element hits
 * the viewport.
 */
blog.core.set_scroll = (function blog$core$set_scroll(id,f){
var element = document.getElementById(id);
var params = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$element,element,cljs.core.cst$kw$handler,f,cljs.core.cst$kw$offset,"25%"], null);
return (new Waypoint(cljs.core.clj__GT_js(params)));
});
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.on_scroll !== 'undefined')){
} else {
blog.core.on_scroll = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15413 = cljs.core.get_global_hierarchy;
return (fexpr__15413.cljs$core$IFn$_invoke$arity$0 ? fexpr__15413.cljs$core$IFn$_invoke$arity$0() : fexpr__15413.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("blog.core","on-scroll"),(function (event_id,dir,params){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dir)], null);
}),cljs.core.cst$kw$default,hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.core.on_scroll.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (id,dir,_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Scrolled: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('')], 0));
}));
blog.core.on_scroll.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a_DASH_root,cljs.core.cst$kw$down], null),(function (_,___$1,___$2){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["A scrolled down!"], 0));
}));
blog.core.on_scroll.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs.core.cst$kw$up], null),(function (_,___$1,___$2){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["B scrolled up!"], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_focus,(function (db,p__15414){
var vec__15415 = p__15414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.cst$kw$focus], null),id);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$focus_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$root,cljs.core.cst$kw$focus], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$in_DASH_focus_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_LT__DASH_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focus_DASH_id], null),(function (focus_id,p__15418){
var vec__15419 = p__15418;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15419,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15419,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focus_id);
})], 0));
blog.core.add_scroll = (function blog$core$add_scroll(id,ctx,element){
return (function (id__$1,ctx__$1,element__$1){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,ctx__$1)){
return blog.core.set_scroll(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$1),(function (dir){
blog.core._GT_evt(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_focus,id__$1,ctx__$1], null));

var G__15422 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id__$1);
var G__15423 = dir;
var G__15424 = null;
return (blog.core.on_scroll.cljs$core$IFn$_invoke$arity$3 ? blog.core.on_scroll.cljs$core$IFn$_invoke$arity$3(G__15422,G__15423,G__15424) : blog.core.on_scroll.call(null,G__15422,G__15423,G__15424));
}));
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (id__$2,ctx__$2,element__$2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id__$2,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$border,(cljs.core.truth_(blog.core._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in_DASH_focus_QMARK_,id__$2], null)))?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["In focus: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$2)].join('')], 0));

return "0.2em solid red";
})()
:null),cljs.core.cst$kw$padding,"1em 1em 1em 1em"], null)], null),element__$2], null);
})], null));
});
});
blog.core.add_scrolls = (function blog$core$add_scrolls(ctx){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_will_DASH_unmount,(function (_){
return blog.core._GT_evt(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_focus,null,ctx], null));
}),cljs.core.cst$kw$reagent_DASH_render,(function (ctx__$1){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"150em",cljs.core.cst$kw$padding_DASH_top,"1em"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_sym], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"Title",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Demo"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"a",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"1) Action 1"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"b",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"2) Action 2"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scroll,"c",ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"3) Action 3"], null)], null)], null);
})], null));
});
blog.core.sym = (function blog$core$sym(kw){
return goog.string.unescapeEntities(["&",cljs.core.name(kw),";"].join(''));
});
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core._render !== 'undefined')){
} else {
blog.core._render = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15425 = cljs.core.get_global_hierarchy;
return (fexpr__15425.cljs$core$IFn$_invoke$arity$0 ? fexpr__15425.cljs$core$IFn$_invoke$arity$0() : fexpr__15425.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("blog.core","-render"),cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$default,hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.core._render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__15426){
var map__15427 = p__15426;
var map__15427__$1 = cljs.core.__destructure_map(map__15427);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15427__$1,cljs.core.cst$kw$text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,text], null);
}));
blog.core._render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$equation,(function (p__15428){
var map__15429 = p__15428;
var map__15429__$1 = cljs.core.__destructure_map(map__15429);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15429__$1,cljs.core.cst$kw$text);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15429__$1,cljs.core.cst$kw$nodes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$gap,"0.5em",cljs.core.cst$kw$align_DASH_items,"center"], null)], null)], null),(function (){var iter__4652__auto__ = (function blog$core$iter__15430(s__15431){
return (new cljs.core.LazySeq(null,(function (){
var s__15431__$1 = s__15431;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15431__$1);
if(temp__5720__auto__){
var s__15431__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15431__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__15431__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__15433 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__15432 = (0);
while(true){
if((i__15432 < size__4651__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__15432);
cljs.core.chunk_append(b__15433,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__15434 = (i__15432 + (1));
i__15432 = G__15434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15433),blog$core$iter__15430(cljs.core.chunk_rest(s__15431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15433),null);
}
} else {
var n = cljs.core.first(s__15431__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),blog$core$iter__15430(cljs.core.rest(s__15431__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nodes);
})());
}));
blog.core._render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$bracket,(function (p__15435){
var map__15436 = p__15435;
var map__15436__$1 = cljs.core.__destructure_map(map__15436);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15436__$1,cljs.core.cst$kw$text);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15436__$1,cljs.core.cst$kw$nodes);
var border = "0.1em solid black";
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$border_DASH_left,border,cljs.core.cst$kw$border_DASH_top,border,cljs.core.cst$kw$border_DASH_bottom,border,cljs.core.cst$kw$width,"0.1em",cljs.core.cst$kw$height,"1.2em"], null)], null)], null);
var end = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$border_DASH_right,"0.1em solid black",cljs.core.cst$kw$border_DASH_top,"0.1em solid black",cljs.core.cst$kw$border_DASH_bottom,"0.1em solid black",cljs.core.cst$kw$height,"1.2em",cljs.core.cst$kw$width,"0.1em"], null)], null)], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$justify_DASH_items,"even-spacing",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),start], null),(function (){var iter__4652__auto__ = (function blog$core$iter__15437(s__15438){
return (new cljs.core.LazySeq(null,(function (){
var s__15438__$1 = s__15438;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15438__$1);
if(temp__5720__auto__){
var s__15438__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15438__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__15438__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__15440 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__15439 = (0);
while(true){
if((i__15439 < size__4651__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4650__auto__,i__15439);
cljs.core.chunk_append(b__15440,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)));

var G__15441 = (i__15439 + (1));
i__15439 = G__15441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15440),blog$core$iter__15437(cljs.core.chunk_rest(s__15438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15440),null);
}
} else {
var n = cljs.core.first(s__15438__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null)),blog$core$iter__15437(cljs.core.rest(s__15438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nodes);
})()),end);
}));
blog.core._render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fraction,(function (p__15442){
var map__15443 = p__15442;
var map__15443__$1 = cljs.core.__destructure_map(map__15443);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$num);
var den = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15443__$1,cljs.core.cst$kw$den);
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"inline-flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"0.5em",cljs.core.cst$kw$padding,"0em 1em 0em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,num], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$font_DASH_size,"0.5em"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"0.5em",cljs.core.cst$kw$padding,"0em 1em 0em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,den], null)], null)], null));
}));
blog.core._render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$derivative,(function (p__15444){
var map__15445 = p__15444;
var map__15445__$1 = cljs.core.__destructure_map(map__15445);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15445__$1,cljs.core.cst$kw$num);
var den = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15445__$1,cljs.core.cst$kw$den);
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15445__$1,cljs.core.cst$kw$partial_QMARK_);
var d = (cljs.core.truth_(partial_QMARK_)?blog.core.sym(cljs.core.cst$kw$part):"d");
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"inline-flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center",cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"0.5em",cljs.core.cst$kw$padding,"0em 1em 0em",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row"], null)], null),d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,num], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$font_DASH_size,"0.5em"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"0.5em",cljs.core.cst$kw$padding,"0em 1em 0em",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row"], null)], null),d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,den], null)], null)], null));
}));
blog.core._render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sym,(function (p__15446){
var map__15447 = p__15446;
var map__15447__$1 = cljs.core.__destructure_map(map__15447);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15447__$1,cljs.core.cst$kw$key);
return blog.core.sym(key);
}));
blog.core._render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$log,(function (p__15448){
var map__15449 = p__15448;
var map__15449__$1 = cljs.core.__destructure_map(map__15449);
var arg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15449__$1,cljs.core.cst$kw$arg);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),"log(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"0.75em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,arg], null)], null),")"], null);
}));
blog.core.render_exp = (function blog$core$render_exp(node_STAR_,exp){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),node_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"0.75em",cljs.core.cst$kw$transform,"translateY(-1.25em)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,exp], null)], null)], null);
});
blog.core.render_coef = (function blog$core$render_coef(node_STAR_,coef){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render,coef], null),node_STAR_], null);
});
blog.core.render = (function blog$core$render(p__15450){
var map__15451 = p__15450;
var map__15451__$1 = cljs.core.__destructure_map(map__15451);
var node = map__15451__$1;
var exp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15451__$1,cljs.core.cst$kw$exp);
var coef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15451__$1,cljs.core.cst$kw$coef);
var node_STAR_ = (blog.core._render.cljs$core$IFn$_invoke$arity$1 ? blog.core._render.cljs$core$IFn$_invoke$arity$1(node) : blog.core._render.call(null,node));
var node_STAR___$1 = (cljs.core.truth_(coef)?blog.core.render_coef(node_STAR_,coef):node_STAR_);
if(cljs.core.truth_(exp)){
return blog.core.render_exp(node_STAR___$1,exp);
} else {
return node_STAR___$1;
}
});
blog.core.gen_sym = (function blog$core$gen_sym(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"15px"], null)], null),blog.core.render(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$bracket,cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$log,cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$equation,cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$sym,cljs.core.cst$kw$coef,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$default,cljs.core.cst$kw$text,(2)], null),cljs.core.cst$kw$key,cljs.core.cst$kw$lambda,cljs.core.cst$kw$exp,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$fraction,cljs.core.cst$kw$num,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,(14)], null),cljs.core.cst$kw$den,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,(15)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$op,cljs.core.cst$kw$text,cljs.core.cst$sym$_PLUS_], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$fraction,cljs.core.cst$kw$num,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$sym,cljs.core.cst$kw$key,cljs.core.cst$kw$pi,cljs.core.cst$kw$coef,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$default,cljs.core.cst$kw$text,(10)], null)], null),cljs.core.cst$kw$den,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$default,cljs.core.cst$kw$text,"2"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$op,cljs.core.cst$kw$text,cljs.core.cst$sym$_PLUS_], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$derivative,cljs.core.cst$kw$partial_QMARK_,true,cljs.core.cst$kw$num,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$default,cljs.core.cst$kw$text,cljs.core.cst$sym$y], null),cljs.core.cst$kw$den,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$render_DASH_tag,cljs.core.cst$kw$default,cljs.core.cst$kw$text,cljs.core.cst$sym$x], null)], null)], null)], null)], null)], null)], null))], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init_DASH_ctx,(function (db,p__15452){
var vec__15453 = p__15452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15453,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15453,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,cljs.core.PersistentArrayMap.createAsIfByAssoc([ctx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$current_DASH_tab,cljs.core.cst$kw$tab_SLASH_about], null)])], 0));
}));
blog.core.init_db = (function blog$core$init_db(){
return null;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$switch_DASH_tab,(function (db,p__15456){
var vec__15457 = p__15456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.cst$kw$current_DASH_tab], null),tag);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$current_DASH_tab,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__15460){
var vec__15461 = p__15460;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15461,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15461,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.cst$kw$current_DASH_tab], null));
})], 0));
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.render_page !== 'undefined')){
} else {
blog.core.render_page = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15464 = cljs.core.get_global_hierarchy;
return (fexpr__15464.cljs$core$IFn$_invoke$arity$0 ? fexpr__15464.cljs$core$IFn$_invoke$arity$0() : fexpr__15464.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("blog.core","render-page"),(function (id,_){
return id;
}),cljs.core.cst$kw$default,hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.core.gen_header_tab = (function blog$core$gen_header_tab(label,tag,ctx){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"1em",cljs.core.cst$kw$padding,"none",cljs.core.cst$kw$background,"none",cljs.core.cst$kw$border,"none"], null));
return (function (label__$1,tag__$1){
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag__$1,blog.core._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_tab,ctx], null))))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"red",cljs.core.cst$kw$font_DASH_weight,"bold"], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"black"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(data),style], 0)),cljs.core.cst$kw$on_DASH_click,(function (){
return blog.core._GT_evt(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$switch_DASH_tab,tag__$1,ctx], null));
}),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"bold"], null));
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,null], null));
})], null),label__$1], null);
});
});
blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$header_DASH_tabs,(function (_,ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$position,"sticky",cljs.core.cst$kw$background,"white"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"row",cljs.core.cst$kw$gap,"3%",cljs.core.cst$kw$justify_DASH_content,"flex-start",cljs.core.cst$kw$align_DASH_items,"flex-end",cljs.core.cst$kw$font_DASH_family,"Verdana",cljs.core.cst$kw$border_DASH_bottom,"solid 0.2em black",cljs.core.cst$kw$padding,"1em 1.5em 1em 1.5em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"1.5em",cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),"Kyle Eschen"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"About",cljs.core.cst$kw$tab_SLASH_about,ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Essays",cljs.core.cst$kw$tab_SLASH_essays,ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Videos",cljs.core.cst$kw$tab_SLASH_videos,ctx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_header_tab,"Contact",cljs.core.cst$kw$tab_SLASH_contact,ctx], null)], null)], null);
}));
blog.core.gen_row_of_cols = (function blog$core$gen_row_of_cols(var_args){
var args__4870__auto__ = [];
var len__4864__auto___15470 = arguments.length;
var i__4865__auto___15471 = (0);
while(true){
if((i__4865__auto___15471 < len__4864__auto___15470)){
args__4870__auto__.push((arguments[i__4865__auto___15471]));

var G__15472 = (i__4865__auto___15471 + (1));
i__4865__auto___15471 = G__15472;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
var cols__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__15466){
var vec__15467 = p__15466;
var flex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15467,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15467,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,flex], null)], null),col], null);
}),cols);
var row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null)], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(row,cols__$1);
}));

(blog.core.gen_row_of_cols.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.core.gen_row_of_cols.cljs$lang$applyTo = (function (seq15465){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15465));
}));

blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tab_SLASH_about,(function (_,ctx){
return blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"There is no interesting information about me."], null)], null)], 0));
}));
blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$essay_DASH_text_DASH_col,(function (_,ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"1em 1em 1em 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.add_scrolls,ctx], null)], null);
}));
blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$essay_DASH_display_DASH_col,(function (_,ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"1em 1em 1em 1em",cljs.core.cst$kw$width,"70%",cljs.core.cst$kw$position,"fixed"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"0.8em",cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.8 * (70))),"%"].join(''),cljs.core.cst$kw$position,"sticky"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,cljs.core.cst$kw$main_DASH_page,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(ctx),"-1"].join(''))], null)], null)], null);
}));
blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tab_SLASH_essays,(function (_,ctx){
return blog.core.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,cljs.core.cst$kw$essay_DASH_text_DASH_col,ctx], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,cljs.core.cst$kw$essay_DASH_display_DASH_col,ctx], null)], null)], 0));
}));
blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tab_SLASH_videos,(function (_,ctx){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"I am not fit for the screen."], null);
}));
blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tab_SLASH_contact,(function (_,ctx){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"There is no value in contacting me."], null);
}));
blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$page_DASH_body,(function (_,ctx){
return (function (___$1,ctx__$1){
var tab = blog.core._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_tab,ctx__$1], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"1em",cljs.core.cst$kw$margin,"3em 1em 1em 1em"], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,tab,ctx__$1], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$page], null))], null);
});
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$exists_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__15473){
var vec__15474 = p__15473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15474,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15474,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,ctx);
})], 0));
blog.core.render_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$main_DASH_page,(function (_,ctx){
blog.core._GT_evt(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$init_DASH_ctx,ctx], null));

return (function (___$1,ctx__$1){
if(cljs.core.not(blog.core._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exists_QMARK_,ctx__$1], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.name(ctx__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,cljs.core.cst$kw$header_DASH_tabs,ctx__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,cljs.core.cst$kw$page_DASH_body,ctx__$1], null)], null);
}
});
}));
blog.core.main_page = (function blog$core$main_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_page,cljs.core.cst$kw$main_DASH_page,cljs.core.cst$kw$root], null);
});
blog.core.mount = (function blog$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.main_page], null),el);
});
blog.core.get_app_element = (function blog$core$get_app_element(){
return goog.dom.getElement("app");
});
blog.core.mount_app_element = (function blog$core$mount_app_element(){
var temp__5720__auto__ = blog.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return blog.core.mount(el);
} else {
return null;
}
});
blog.core.init_db();
blog.core.mount_app_element();
blog.core.on_reload = (function blog$core$on_reload(){
return blog.core.mount_app_element();
});
