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
var vec__18951_18954 = clojure.data.diff.call(null,orig_db,new_db);
var only_before_18955 = cljs.core.nth.call(null,vec__18951_18954,(0),null);
var only_after_18956 = cljs.core.nth.call(null,vec__18951_18954,(1),null);
var db_changed_QMARK__18957 = (((!((only_before_18955 == null)))) || ((!((only_after_18956 == null)))));
if(db_changed_QMARK__18957){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"group","group",582596132),"db clojure.data/diff for:",event);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only before:",only_before_18955);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only after :",only_after_18956);

re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"No app-db changes resulted from:",event);
}
}

return context;
}));
re_frame.std_interceptors.unwrap = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$unwrap_before(context){
var vec__18958 = re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__18958,(0),null);
var payload = cljs.core.nth.call(null,vec__18958,(1),null);
var event = vec__18958;
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
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR__orig_val__18961 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18962 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18962);

try{try{var map__18963 = re_frame.interceptor.get_coeffect.call(null,context);
var map__18963__$1 = cljs.core.__destructure_map.call(null,map__18963);
var db = cljs.core.get.call(null,map__18963__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__18963__$1,new cljs.core.Keyword(null,"event","event",301435442));
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),handler_fn.call(null,db,event));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18584__auto___18965 = re_frame.interop.now.call(null);
var duration__18585__auto___18966 = (end__18584__auto___18965 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18585__auto___18966,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18584__auto___18965);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18961);
}})():(function (){var map__18964 = re_frame.interceptor.get_coeffect.call(null,context);
var map__18964__$1 = cljs.core.__destructure_map.call(null,map__18964);
var db = cljs.core.get.call(null,map__18964__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__18964__$1,new cljs.core.Keyword(null,"event","event",301435442));
return re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),handler_fn.call(null,db,event));
})());
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18586__auto___18967 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__18586__auto___18967);

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
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR__orig_val__18968 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18969 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18969);

try{try{var map__18970 = re_frame.interceptor.get_coeffect.call(null,context);
var map__18970__$1 = cljs.core.__destructure_map.call(null,map__18970);
var coeffects = map__18970__$1;
var event = cljs.core.get.call(null,map__18970__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),handler_fn.call(null,coeffects,event));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18584__auto___18972 = re_frame.interop.now.call(null);
var duration__18585__auto___18973 = (end__18584__auto___18972 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18585__auto___18973,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18584__auto___18972);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18968);
}})():(function (){var map__18971 = re_frame.interceptor.get_coeffect.call(null,context);
var map__18971__$1 = cljs.core.__destructure_map.call(null,map__18971);
var coeffects = map__18971__$1;
var event = cljs.core.get.call(null,map__18971__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),handler_fn.call(null,coeffects,event));
})());
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18586__auto___18974 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__18586__auto___18974);

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
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR__orig_val__18975 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18976 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18976);

try{try{return handler_fn.call(null,context);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18584__auto___18977 = re_frame.interop.now.call(null);
var duration__18585__auto___18978 = (end__18584__auto___18977 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18585__auto___18978,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18584__auto___18977);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18975);
}})():handler_fn.call(null,context));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18586__auto___18979 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.call(null,new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.call(null,context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__18586__auto___18979);

} else {
}

return new_context;
}));
});
re_frame.std_interceptors.path = (function re_frame$std_interceptors$path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___18981 = arguments.length;
var i__4865__auto___18982 = (0);
while(true){
if((i__4865__auto___18982 < len__4864__auto___18981)){
args__4870__auto__.push((arguments[i__4865__auto___18982]));

var G__18983 = (i__4865__auto___18982 + (1));
i__4865__auto___18982 = G__18983;
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
(re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq18980){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18980));
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
var len__4864__auto___18989 = arguments.length;
var i__4865__auto___18990 = (0);
while(true){
if((i__4865__auto___18990 < len__4864__auto___18989)){
args__4870__auto__.push((arguments[i__4865__auto___18990]));

var G__18991 = (i__4865__auto___18990 + (1));
i__4865__auto___18990 = G__18991;
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
var new_ins = cljs.core.map.call(null,(function (p1__18984_SHARP_){
return cljs.core.get_in.call(null,new_db,p1__18984_SHARP_);
}),in_paths);
var old_ins = cljs.core.map.call(null,(function (p1__18985_SHARP_){
return cljs.core.get_in.call(null,old_db,p1__18985_SHARP_);
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
(re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq18986){
var G__18987 = cljs.core.first.call(null,seq18986);
var seq18986__$1 = cljs.core.next.call(null,seq18986);
var G__18988 = cljs.core.first.call(null,seq18986__$1);
var seq18986__$2 = cljs.core.next.call(null,seq18986__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18987,G__18988,seq18986__$2);
}));

/**
 * An interceptor which adds registered global interceptors to the context's queue.
 * 
 * NOTE: :queue is a Clojure.lang.PersistentQueue and not a vector.
 */
re_frame.std_interceptors.inject_global_interceptors = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inject-global-interceptors","inject-global-interceptors",-2144129737),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$inject_global_interceptors_before(context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879),(function (p1__18992_SHARP_){
return cljs.core.into.call(null,re_frame.settings.get_global_interceptors.call(null),p1__18992_SHARP_);
}));
}));

//# sourceMappingURL=std_interceptors.js.map
