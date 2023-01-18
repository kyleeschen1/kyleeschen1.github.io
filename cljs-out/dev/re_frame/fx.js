// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__41808 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41809 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41809);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___41842 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___41842)){
var new_db_41843 = temp__5720__auto___41842;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_41843);
} else {
}

var seq__41810 = cljs.core.seq.call(null,effects_without_db);
var chunk__41811 = null;
var count__41812 = (0);
var i__41813 = (0);
while(true){
if((i__41813 < count__41812)){
var vec__41820 = cljs.core._nth.call(null,chunk__41811,i__41813);
var effect_key = cljs.core.nth.call(null,vec__41820,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41820,(1),null);
var temp__5718__auto___41844 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___41844)){
var effect_fn_41845 = temp__5718__auto___41844;
effect_fn_41845.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__41846 = seq__41810;
var G__41847 = chunk__41811;
var G__41848 = count__41812;
var G__41849 = (i__41813 + (1));
seq__41810 = G__41846;
chunk__41811 = G__41847;
count__41812 = G__41848;
i__41813 = G__41849;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41810);
if(temp__5720__auto__){
var seq__41810__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41810__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__41810__$1);
var G__41850 = cljs.core.chunk_rest.call(null,seq__41810__$1);
var G__41851 = c__4679__auto__;
var G__41852 = cljs.core.count.call(null,c__4679__auto__);
var G__41853 = (0);
seq__41810 = G__41850;
chunk__41811 = G__41851;
count__41812 = G__41852;
i__41813 = G__41853;
continue;
} else {
var vec__41823 = cljs.core.first.call(null,seq__41810__$1);
var effect_key = cljs.core.nth.call(null,vec__41823,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41823,(1),null);
var temp__5718__auto___41854 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___41854)){
var effect_fn_41855 = temp__5718__auto___41854;
effect_fn_41855.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__41856 = cljs.core.next.call(null,seq__41810__$1);
var G__41857 = null;
var G__41858 = (0);
var G__41859 = (0);
seq__41810 = G__41856;
chunk__41811 = G__41857;
count__41812 = G__41858;
i__41813 = G__41859;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16156__auto___41860 = re_frame.interop.now.call(null);
var duration__16157__auto___41861 = (end__16156__auto___41860 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16157__auto___41861,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__16156__auto___41860);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41808);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___41862 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___41862)){
var new_db_41863 = temp__5720__auto___41862;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_41863);
} else {
}

var seq__41826 = cljs.core.seq.call(null,effects_without_db);
var chunk__41827 = null;
var count__41828 = (0);
var i__41829 = (0);
while(true){
if((i__41829 < count__41828)){
var vec__41836 = cljs.core._nth.call(null,chunk__41827,i__41829);
var effect_key = cljs.core.nth.call(null,vec__41836,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41836,(1),null);
var temp__5718__auto___41864 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___41864)){
var effect_fn_41865 = temp__5718__auto___41864;
effect_fn_41865.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__41866 = seq__41826;
var G__41867 = chunk__41827;
var G__41868 = count__41828;
var G__41869 = (i__41829 + (1));
seq__41826 = G__41866;
chunk__41827 = G__41867;
count__41828 = G__41868;
i__41829 = G__41869;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41826);
if(temp__5720__auto__){
var seq__41826__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41826__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__41826__$1);
var G__41870 = cljs.core.chunk_rest.call(null,seq__41826__$1);
var G__41871 = c__4679__auto__;
var G__41872 = cljs.core.count.call(null,c__4679__auto__);
var G__41873 = (0);
seq__41826 = G__41870;
chunk__41827 = G__41871;
count__41828 = G__41872;
i__41829 = G__41873;
continue;
} else {
var vec__41839 = cljs.core.first.call(null,seq__41826__$1);
var effect_key = cljs.core.nth.call(null,vec__41839,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41839,(1),null);
var temp__5718__auto___41874 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___41874)){
var effect_fn_41875 = temp__5718__auto___41874;
effect_fn_41875.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__41876 = cljs.core.next.call(null,seq__41826__$1);
var G__41877 = null;
var G__41878 = (0);
var G__41879 = (0);
seq__41826 = G__41876;
chunk__41827 = G__41877;
count__41828 = G__41878;
i__41829 = G__41879;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__41880){
var map__41881 = p__41880;
var map__41881__$1 = cljs.core.__destructure_map.call(null,map__41881);
var effect = map__41881__$1;
var ms = cljs.core.get.call(null,map__41881__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41881__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__41882 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41883 = null;
var count__41884 = (0);
var i__41885 = (0);
while(true){
if((i__41885 < count__41884)){
var effect = cljs.core._nth.call(null,chunk__41883,i__41885);
re_frame.fx.dispatch_later.call(null,effect);


var G__41886 = seq__41882;
var G__41887 = chunk__41883;
var G__41888 = count__41884;
var G__41889 = (i__41885 + (1));
seq__41882 = G__41886;
chunk__41883 = G__41887;
count__41884 = G__41888;
i__41885 = G__41889;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41882);
if(temp__5720__auto__){
var seq__41882__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41882__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__41882__$1);
var G__41890 = cljs.core.chunk_rest.call(null,seq__41882__$1);
var G__41891 = c__4679__auto__;
var G__41892 = cljs.core.count.call(null,c__4679__auto__);
var G__41893 = (0);
seq__41882 = G__41890;
chunk__41883 = G__41891;
count__41884 = G__41892;
i__41885 = G__41893;
continue;
} else {
var effect = cljs.core.first.call(null,seq__41882__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__41894 = cljs.core.next.call(null,seq__41882__$1);
var G__41895 = null;
var G__41896 = (0);
var G__41897 = (0);
seq__41882 = G__41894;
chunk__41883 = G__41895;
count__41884 = G__41896;
i__41885 = G__41897;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__41898 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__41899 = null;
var count__41900 = (0);
var i__41901 = (0);
while(true){
if((i__41901 < count__41900)){
var vec__41908 = cljs.core._nth.call(null,chunk__41899,i__41901);
var effect_key = cljs.core.nth.call(null,vec__41908,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41908,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___41914 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___41914)){
var effect_fn_41915 = temp__5718__auto___41914;
effect_fn_41915.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__41916 = seq__41898;
var G__41917 = chunk__41899;
var G__41918 = count__41900;
var G__41919 = (i__41901 + (1));
seq__41898 = G__41916;
chunk__41899 = G__41917;
count__41900 = G__41918;
i__41901 = G__41919;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41898);
if(temp__5720__auto__){
var seq__41898__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41898__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__41898__$1);
var G__41920 = cljs.core.chunk_rest.call(null,seq__41898__$1);
var G__41921 = c__4679__auto__;
var G__41922 = cljs.core.count.call(null,c__4679__auto__);
var G__41923 = (0);
seq__41898 = G__41920;
chunk__41899 = G__41921;
count__41900 = G__41922;
i__41901 = G__41923;
continue;
} else {
var vec__41911 = cljs.core.first.call(null,seq__41898__$1);
var effect_key = cljs.core.nth.call(null,vec__41911,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41911,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___41924 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___41924)){
var effect_fn_41925 = temp__5718__auto___41924;
effect_fn_41925.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__41926 = cljs.core.next.call(null,seq__41898__$1);
var G__41927 = null;
var G__41928 = (0);
var G__41929 = (0);
seq__41898 = G__41926;
chunk__41899 = G__41927;
count__41900 = G__41928;
i__41901 = G__41929;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__41930 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41931 = null;
var count__41932 = (0);
var i__41933 = (0);
while(true){
if((i__41933 < count__41932)){
var event = cljs.core._nth.call(null,chunk__41931,i__41933);
re_frame.router.dispatch.call(null,event);


var G__41934 = seq__41930;
var G__41935 = chunk__41931;
var G__41936 = count__41932;
var G__41937 = (i__41933 + (1));
seq__41930 = G__41934;
chunk__41931 = G__41935;
count__41932 = G__41936;
i__41933 = G__41937;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41930);
if(temp__5720__auto__){
var seq__41930__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41930__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__41930__$1);
var G__41938 = cljs.core.chunk_rest.call(null,seq__41930__$1);
var G__41939 = c__4679__auto__;
var G__41940 = cljs.core.count.call(null,c__4679__auto__);
var G__41941 = (0);
seq__41930 = G__41938;
chunk__41931 = G__41939;
count__41932 = G__41940;
i__41933 = G__41941;
continue;
} else {
var event = cljs.core.first.call(null,seq__41930__$1);
re_frame.router.dispatch.call(null,event);


var G__41942 = cljs.core.next.call(null,seq__41930__$1);
var G__41943 = null;
var G__41944 = (0);
var G__41945 = (0);
seq__41930 = G__41942;
chunk__41931 = G__41943;
count__41932 = G__41944;
i__41933 = G__41945;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__41946 = cljs.core.seq.call(null,value);
var chunk__41947 = null;
var count__41948 = (0);
var i__41949 = (0);
while(true){
if((i__41949 < count__41948)){
var event = cljs.core._nth.call(null,chunk__41947,i__41949);
clear_event.call(null,event);


var G__41950 = seq__41946;
var G__41951 = chunk__41947;
var G__41952 = count__41948;
var G__41953 = (i__41949 + (1));
seq__41946 = G__41950;
chunk__41947 = G__41951;
count__41948 = G__41952;
i__41949 = G__41953;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__41946);
if(temp__5720__auto__){
var seq__41946__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41946__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__41946__$1);
var G__41954 = cljs.core.chunk_rest.call(null,seq__41946__$1);
var G__41955 = c__4679__auto__;
var G__41956 = cljs.core.count.call(null,c__4679__auto__);
var G__41957 = (0);
seq__41946 = G__41954;
chunk__41947 = G__41955;
count__41948 = G__41956;
i__41949 = G__41957;
continue;
} else {
var event = cljs.core.first.call(null,seq__41946__$1);
clear_event.call(null,event);


var G__41958 = cljs.core.next.call(null,seq__41946__$1);
var G__41959 = null;
var G__41960 = (0);
var G__41961 = (0);
seq__41946 = G__41958;
chunk__41947 = G__41959;
count__41948 = G__41960;
i__41949 = G__41961;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
