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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38754){
var map__38755 = p__38754;
var map__38755__$1 = cljs.core.__destructure_map.call(null,map__38755);
var operation = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__38755__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__38756_38776 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__38757_38777 = null;
var count__38758_38778 = (0);
var i__38759_38779 = (0);
while(true){
if((i__38759_38779 < count__38758_38778)){
var vec__38768_38780 = cljs.core._nth.call(null,chunk__38757_38777,i__38759_38779);
var k_38781 = cljs.core.nth.call(null,vec__38768_38780,(0),null);
var cb_38782 = cljs.core.nth.call(null,vec__38768_38780,(1),null);
try{cb_38782.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e38771){var e_38783 = e38771;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_38781,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_38783);
}

var G__38784 = seq__38756_38776;
var G__38785 = chunk__38757_38777;
var G__38786 = count__38758_38778;
var G__38787 = (i__38759_38779 + (1));
seq__38756_38776 = G__38784;
chunk__38757_38777 = G__38785;
count__38758_38778 = G__38786;
i__38759_38779 = G__38787;
continue;
} else {
var temp__5720__auto___38788 = cljs.core.seq.call(null,seq__38756_38776);
if(temp__5720__auto___38788){
var seq__38756_38789__$1 = temp__5720__auto___38788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38756_38789__$1)){
var c__4679__auto___38790 = cljs.core.chunk_first.call(null,seq__38756_38789__$1);
var G__38791 = cljs.core.chunk_rest.call(null,seq__38756_38789__$1);
var G__38792 = c__4679__auto___38790;
var G__38793 = cljs.core.count.call(null,c__4679__auto___38790);
var G__38794 = (0);
seq__38756_38776 = G__38791;
chunk__38757_38777 = G__38792;
count__38758_38778 = G__38793;
i__38759_38779 = G__38794;
continue;
} else {
var vec__38772_38795 = cljs.core.first.call(null,seq__38756_38789__$1);
var k_38796 = cljs.core.nth.call(null,vec__38772_38795,(0),null);
var cb_38797 = cljs.core.nth.call(null,vec__38772_38795,(1),null);
try{cb_38797.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e38775){var e_38798 = e38775;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_38796,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_38798);
}

var G__38799 = cljs.core.next.call(null,seq__38756_38789__$1);
var G__38800 = null;
var G__38801 = (0);
var G__38802 = (0);
seq__38756_38776 = G__38799;
chunk__38757_38777 = G__38800;
count__38758_38778 = G__38801;
i__38759_38779 = G__38802;
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
