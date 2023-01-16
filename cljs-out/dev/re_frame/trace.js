// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
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
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__18606){
var map__18607 = p__18606;
var map__18607__$1 = cljs.core.__destructure_map.call(null,map__18607);
var operation = cljs.core.get.call(null,map__18607__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__18607__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__18607__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__18607__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__18608_18628 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__18609_18629 = null;
var count__18610_18630 = (0);
var i__18611_18631 = (0);
while(true){
if((i__18611_18631 < count__18610_18630)){
var vec__18620_18632 = cljs.core._nth.call(null,chunk__18609_18629,i__18611_18631);
var k_18633 = cljs.core.nth.call(null,vec__18620_18632,(0),null);
var cb_18634 = cljs.core.nth.call(null,vec__18620_18632,(1),null);
try{cb_18634.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e18623){var e_18635 = e18623;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_18633,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_18635);
}

var G__18636 = seq__18608_18628;
var G__18637 = chunk__18609_18629;
var G__18638 = count__18610_18630;
var G__18639 = (i__18611_18631 + (1));
seq__18608_18628 = G__18636;
chunk__18609_18629 = G__18637;
count__18610_18630 = G__18638;
i__18611_18631 = G__18639;
continue;
} else {
var temp__5720__auto___18640 = cljs.core.seq.call(null,seq__18608_18628);
if(temp__5720__auto___18640){
var seq__18608_18641__$1 = temp__5720__auto___18640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18608_18641__$1)){
var c__4679__auto___18642 = cljs.core.chunk_first.call(null,seq__18608_18641__$1);
var G__18643 = cljs.core.chunk_rest.call(null,seq__18608_18641__$1);
var G__18644 = c__4679__auto___18642;
var G__18645 = cljs.core.count.call(null,c__4679__auto___18642);
var G__18646 = (0);
seq__18608_18628 = G__18643;
chunk__18609_18629 = G__18644;
count__18610_18630 = G__18645;
i__18611_18631 = G__18646;
continue;
} else {
var vec__18624_18647 = cljs.core.first.call(null,seq__18608_18641__$1);
var k_18648 = cljs.core.nth.call(null,vec__18624_18647,(0),null);
var cb_18649 = cljs.core.nth.call(null,vec__18624_18647,(1),null);
try{cb_18649.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e18627){var e_18650 = e18627;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_18648,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_18650);
}

var G__18651 = cljs.core.next.call(null,seq__18608_18641__$1);
var G__18652 = null;
var G__18653 = (0);
var G__18654 = (0);
seq__18608_18628 = G__18651;
chunk__18609_18629 = G__18652;
count__18610_18630 = G__18653;
i__18611_18631 = G__18654;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
