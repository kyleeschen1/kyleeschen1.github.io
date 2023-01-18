// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('re_frame.std_interceptors');
goog.require('cljs.core');
goog.require('re_frame.interceptor');
goog.require('re_frame.loggers');
goog.require('re_frame.settings');
goog.require('re_frame.db');
goog.require('clojure.data');
goog.require('re_frame.cofx');
goog.require('re_frame.utils');
goog.require('re_frame.trace');
re_frame.std_interceptors.debug = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$debug_before(context){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"Handling re-frame event:",re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442)));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$debug_after(context){
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865));
if(cljs.core._EQ_.call(null,new_db,new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"No app-db changes in:",event);
} else {
var vec__42457_42460 = clojure.data.diff.call(null,orig_db,new_db);
var only_before_42461 = cljs.core.nth.call(null,vec__42457_42460,(0),null);
var only_after_42462 = cljs.core.nth.call(null,vec__42457_42460,(1),null);
var db_changed_QMARK__42463 = (((!((only_before_42461 == null)))) || ((!((only_after_42462 == null)))));
if(db_changed_QMARK__42463){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"group","group",582596132),"db clojure.data/diff for:",event);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only before:",only_before_42461);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only after :",only_after_42462);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"No app-db changes resulted from:",event);
}
}

return context;
}));
re_frame.std_interceptors.unwrap = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$unwrap_before(context){
var vec__42464 = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__42464,(0),null);
var payload = cljs.core.nth.call(null,vec__42464,(1),null);
var event = vec__42464;
if((!(((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,event))) && (cljs.core.map_QMARK_.call(null,payload)))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \"unwrap\" interceptor requires event to be a 2-vector of [event-id payload-map]. Got ",event);

return context;
} else {
return re_frame.interceptor.assoc_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442),payload);
}
}),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$unwrap_after(context){
return re_frame.interceptor.assoc_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"original-event","original-event",2121330403)));
}));
re_frame.std_interceptors.trim_v = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$trim_v_before(context){
if((!(cljs.core.vector_QMARK_.call(null,re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442)))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \"trim-v\" interceptor expected event to be a vector. Got a ",cljs.core.type.call(null,re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442))));

return context;
} else {
return re_frame.interceptor.update_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.subvec,(1));
}
}),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$trim_v_after(context){
return re_frame.interceptor.assoc_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"original-event","original-event",2121330403)));
}));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *    (fn [db event]
 *       ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
re_frame.std_interceptors.db_handler__GT_interceptor = (function re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR__orig_val__42467 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42468 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42468);

try{try{var map__42469 = re_frame.interceptor.get_coeffect.call(null,context);
var map__42469__$1 = cljs.core.__destructure_map.call(null,map__42469);
var db = cljs.core.get.call(null,map__42469__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__42469__$1,new cljs.core.Keyword(null,"event","event",301435442));
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),handler_fn.call(null,db,event));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16156__auto___42471 = re_frame.interop.now.call(null);
var duration__16157__auto___42472 = (end__16156__auto___42471 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16157__auto___42472,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16156__auto___42471);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42467);
}})():(function (){var map__42470 = re_frame.interceptor.get_coeffect.call(null,context);
var map__42470__$1 = cljs.core.__destructure_map.call(null,map__42470);
var db = cljs.core.get.call(null,map__42470__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__42470__$1,new cljs.core.Keyword(null,"event","event",301435442));
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),handler_fn.call(null,db,event));
})());
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__16158__auto___42473 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16158__auto___42473);

} else {
}

return new_context;
}));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *    (fn [coeffects event]
 *       {:db ...
 *        :fx ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
re_frame.std_interceptors.fx_handler__GT_interceptor = (function re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR__orig_val__42474 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42475 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42475);

try{try{var map__42476 = re_frame.interceptor.get_coeffect.call(null,context);
var map__42476__$1 = cljs.core.__destructure_map.call(null,map__42476);
var coeffects = map__42476__$1;
var event = cljs.core.get.call(null,map__42476__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),handler_fn.call(null,coeffects,event));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16156__auto___42478 = re_frame.interop.now.call(null);
var duration__16157__auto___42479 = (end__16156__auto___42478 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16157__auto___42479,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16156__auto___42478);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42474);
}})():(function (){var map__42477 = re_frame.interceptor.get_coeffect.call(null,context);
var map__42477__$1 = cljs.core.__destructure_map.call(null,map__42477);
var coeffects = map__42477__$1;
var event = cljs.core.get.call(null,map__42477__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),handler_fn.call(null,coeffects,event));
})());
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__16158__auto___42480 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16158__auto___42480);

} else {
}

return new_context;
}));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 * 
 *    (fn [context]
 *       (enqueue context [more interceptors]))
 */
re_frame.std_interceptors.ctx_handler__GT_interceptor = (function re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$ctx_handler__GT_interceptor_$_ctx_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR__orig_val__42481 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42482 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42482);

try{try{return handler_fn.call(null,context);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16156__auto___42483 = re_frame.interop.now.call(null);
var duration__16157__auto___42484 = (end__16156__auto___42483 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16157__auto___42484,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16156__auto___42483);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42481);
}})():handler_fn.call(null,context));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__16158__auto___42485 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16158__auto___42485);

} else {
}

return new_context;
}));
});
re_frame.std_interceptors.path = (function re_frame$std_interceptors$path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42487 = arguments.length;
var i__4865__auto___42488 = (0);
while(true){
if((i__4865__auto___42488 < len__4864__auto___42487)){
args__4870__auto__.push((arguments[i__4865__auto___42488]));

var G__42489 = (i__4865__auto___42488 + (1));
i__4865__auto___42488 = G__42489;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten.call(null,args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",655758490);
if(cljs.core.empty_QMARK_.call(null,path)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \"path\" interceptor given no params");
} else {
}

return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var original_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
return re_frame.interceptor.assoc_coeffect.call(null,cljs.core.update.call(null,context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.call(null,original_db,path));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var db_store = db_store_key.cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek.call(null,db_store);
var new_db_store = cljs.core.pop.call(null,db_store);
var context_SINGLEQUOTE_ = re_frame.interceptor.assoc_coeffect.call(null,cljs.core.assoc.call(null,context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865));
if(cljs.core._EQ_.call(null,db,new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865))){
return context_SINGLEQUOTE_;
} else {
return re_frame.interceptor.assoc_effect.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,original_db,path,db));
}
}));
}));

(re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq42486){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42486));
}));

re_frame.std_interceptors.enrich = (function re_frame$std_interceptors$enrich(f){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var prev_db = ((cljs.core.contains_QMARK_.call(null,re_frame.interceptor.get_effect.call(null,context),new cljs.core.Keyword(null,"db","db",993250759)))?re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759)):re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759)));
var new_db = f.call(null,prev_db,event);
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),(function (){var or__4253__auto__ = new_db;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return prev_db;
}
})());
}));
});
re_frame.std_interceptors.after = (function re_frame$std_interceptors$after(f){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_.call(null,re_frame.interceptor.get_effect.call(null,context),new cljs.core.Keyword(null,"db","db",993250759)))?re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759)):re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759)));
var event = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
f.call(null,db,event);

return context;
}));
});
re_frame.std_interceptors.on_changes = (function re_frame$std_interceptors$on_changes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42495 = arguments.length;
var i__4865__auto___42496 = (0);
while(true){
if((i__4865__auto___42496 < len__4864__auto___42495)){
args__4870__auto__.push((arguments[i__4865__auto___42496]));

var G__42497 = (i__4865__auto___42496 + (1));
i__4865__auto___42496 = G__42497;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-changes","on-changes",1345912602),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$on_change_after(context){
var new_db = re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.call(null,(function (p1__42490_SHARP_){
return cljs.core.get_in.call(null,new_db,p1__42490_SHARP_);
}),in_paths);
var old_ins = cljs.core.map.call(null,(function (p1__42491_SHARP_){
return cljs.core.get_in.call(null,old_db,p1__42491_SHARP_);
}),in_paths);
var changed_ins_QMARK_ = (function (){var and__4251__auto__ = cljs.core.contains_QMARK_.call(null,re_frame.interceptor.get_effect.call(null,context),new cljs.core.Keyword(null,"db","db",993250759));
if(and__4251__auto__){
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core.identical_QMARK_,new_ins,old_ins));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(changed_ins_QMARK_)){
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new_db,out_path,cljs.core.apply.call(null,f,new_ins)));
} else {
return context;
}
}));
}));

(re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq42492){
var G__42493 = cljs.core.first.call(null,seq42492);
var seq42492__$1 = cljs.core.next.call(null,seq42492);
var G__42494 = cljs.core.first.call(null,seq42492__$1);
var seq42492__$2 = cljs.core.next.call(null,seq42492__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42493,G__42494,seq42492__$2);
}));

/**
 * An interceptor which adds registered global interceptors to the context's queue.
 * 
 * NOTE: :queue is a Clojure.lang.PersistentQueue and not a vector.
 */
re_frame.std_interceptors.inject_global_interceptors = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inject-global-interceptors","inject-global-interceptors",-2144129737),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$inject_global_interceptors_before(context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879),(function (p1__42498_SHARP_){
return cljs.core.into.call(null,re_frame.settings.get_global_interceptors.call(null),p1__42498_SHARP_);
}));
}));

//# sourceMappingURL=std_interceptors.js.map
