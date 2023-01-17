// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11803){
var map__11804 = p__11803;
var map__11804__$1 = cljs.core.__destructure_map(map__11804);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11804__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11804__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11804__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11804__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__11805_11829 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__11806_11830 = null;
var count__11807_11831 = (0);
var i__11808_11832 = (0);
while(true){
if((i__11808_11832 < count__11807_11831)){
var vec__11819_11833 = chunk__11806_11830.cljs$core$IIndexed$_nth$arity$2(null,i__11808_11832);
var k_11834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819_11833,(0),null);
var cb_11835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819_11833,(1),null);
try{var G__11823_11836 = cljs.core.deref(re_frame.trace.traces);
(cb_11835.cljs$core$IFn$_invoke$arity$1 ? cb_11835.cljs$core$IFn$_invoke$arity$1(G__11823_11836) : cb_11835.call(null,G__11823_11836));
}catch (e11822){var e_11837 = e11822;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11834,"while storing",cljs.core.deref(re_frame.trace.traces),e_11837], 0));
}

var G__11838 = seq__11805_11829;
var G__11839 = chunk__11806_11830;
var G__11840 = count__11807_11831;
var G__11841 = (i__11808_11832 + (1));
seq__11805_11829 = G__11838;
chunk__11806_11830 = G__11839;
count__11807_11831 = G__11840;
i__11808_11832 = G__11841;
continue;
} else {
var temp__5720__auto___11842 = cljs.core.seq(seq__11805_11829);
if(temp__5720__auto___11842){
var seq__11805_11843__$1 = temp__5720__auto___11842;
if(cljs.core.chunked_seq_QMARK_(seq__11805_11843__$1)){
var c__4679__auto___11844 = cljs.core.chunk_first(seq__11805_11843__$1);
var G__11845 = cljs.core.chunk_rest(seq__11805_11843__$1);
var G__11846 = c__4679__auto___11844;
var G__11847 = cljs.core.count(c__4679__auto___11844);
var G__11848 = (0);
seq__11805_11829 = G__11845;
chunk__11806_11830 = G__11846;
count__11807_11831 = G__11847;
i__11808_11832 = G__11848;
continue;
} else {
var vec__11824_11849 = cljs.core.first(seq__11805_11843__$1);
var k_11850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11824_11849,(0),null);
var cb_11851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11824_11849,(1),null);
try{var G__11828_11852 = cljs.core.deref(re_frame.trace.traces);
(cb_11851.cljs$core$IFn$_invoke$arity$1 ? cb_11851.cljs$core$IFn$_invoke$arity$1(G__11828_11852) : cb_11851.call(null,G__11828_11852));
}catch (e11827){var e_11853 = e11827;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11850,"while storing",cljs.core.deref(re_frame.trace.traces),e_11853], 0));
}

var G__11854 = cljs.core.next(seq__11805_11843__$1);
var G__11855 = null;
var G__11856 = (0);
var G__11857 = (0);
seq__11805_11829 = G__11854;
chunk__11806_11830 = G__11855;
count__11807_11831 = G__11856;
i__11808_11832 = G__11857;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
