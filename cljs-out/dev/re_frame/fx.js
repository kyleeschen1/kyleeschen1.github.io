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
var _STAR_current_trace_STAR__orig_val__18790 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18791 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18791);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___18824 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___18824)){
var new_db_18825 = temp__5720__auto___18824;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_18825);
} else {
}

var seq__18792 = cljs.core.seq.call(null,effects_without_db);
var chunk__18793 = null;
var count__18794 = (0);
var i__18795 = (0);
while(true){
if((i__18795 < count__18794)){
var vec__18802 = cljs.core._nth.call(null,chunk__18793,i__18795);
var effect_key = cljs.core.nth.call(null,vec__18802,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18802,(1),null);
var temp__5718__auto___18826 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___18826)){
var effect_fn_18827 = temp__5718__auto___18826;
effect_fn_18827.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18828 = seq__18792;
var G__18829 = chunk__18793;
var G__18830 = count__18794;
var G__18831 = (i__18795 + (1));
seq__18792 = G__18828;
chunk__18793 = G__18829;
count__18794 = G__18830;
i__18795 = G__18831;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18792);
if(temp__5720__auto__){
var seq__18792__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18792__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__18792__$1);
var G__18832 = cljs.core.chunk_rest.call(null,seq__18792__$1);
var G__18833 = c__4679__auto__;
var G__18834 = cljs.core.count.call(null,c__4679__auto__);
var G__18835 = (0);
seq__18792 = G__18832;
chunk__18793 = G__18833;
count__18794 = G__18834;
i__18795 = G__18835;
continue;
} else {
var vec__18805 = cljs.core.first.call(null,seq__18792__$1);
var effect_key = cljs.core.nth.call(null,vec__18805,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18805,(1),null);
var temp__5718__auto___18836 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___18836)){
var effect_fn_18837 = temp__5718__auto___18836;
effect_fn_18837.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18838 = cljs.core.next.call(null,seq__18792__$1);
var G__18839 = null;
var G__18840 = (0);
var G__18841 = (0);
seq__18792 = G__18838;
chunk__18793 = G__18839;
count__18794 = G__18840;
i__18795 = G__18841;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18584__auto___18842 = re_frame.interop.now.call(null);
var duration__18585__auto___18843 = (end__18584__auto___18842 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18585__auto___18843,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18584__auto___18842);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18790);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___18844 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___18844)){
var new_db_18845 = temp__5720__auto___18844;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_18845);
} else {
}

var seq__18808 = cljs.core.seq.call(null,effects_without_db);
var chunk__18809 = null;
var count__18810 = (0);
var i__18811 = (0);
while(true){
if((i__18811 < count__18810)){
var vec__18818 = cljs.core._nth.call(null,chunk__18809,i__18811);
var effect_key = cljs.core.nth.call(null,vec__18818,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18818,(1),null);
var temp__5718__auto___18846 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___18846)){
var effect_fn_18847 = temp__5718__auto___18846;
effect_fn_18847.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18848 = seq__18808;
var G__18849 = chunk__18809;
var G__18850 = count__18810;
var G__18851 = (i__18811 + (1));
seq__18808 = G__18848;
chunk__18809 = G__18849;
count__18810 = G__18850;
i__18811 = G__18851;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18808);
if(temp__5720__auto__){
var seq__18808__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18808__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__18808__$1);
var G__18852 = cljs.core.chunk_rest.call(null,seq__18808__$1);
var G__18853 = c__4679__auto__;
var G__18854 = cljs.core.count.call(null,c__4679__auto__);
var G__18855 = (0);
seq__18808 = G__18852;
chunk__18809 = G__18853;
count__18810 = G__18854;
i__18811 = G__18855;
continue;
} else {
var vec__18821 = cljs.core.first.call(null,seq__18808__$1);
var effect_key = cljs.core.nth.call(null,vec__18821,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18821,(1),null);
var temp__5718__auto___18856 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___18856)){
var effect_fn_18857 = temp__5718__auto___18856;
effect_fn_18857.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18858 = cljs.core.next.call(null,seq__18808__$1);
var G__18859 = null;
var G__18860 = (0);
var G__18861 = (0);
seq__18808 = G__18858;
chunk__18809 = G__18859;
count__18810 = G__18860;
i__18811 = G__18861;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__18862){
var map__18863 = p__18862;
var map__18863__$1 = cljs.core.__destructure_map.call(null,map__18863);
var effect = map__18863__$1;
var ms = cljs.core.get.call(null,map__18863__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18863__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__18864 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18865 = null;
var count__18866 = (0);
var i__18867 = (0);
while(true){
if((i__18867 < count__18866)){
var effect = cljs.core._nth.call(null,chunk__18865,i__18867);
re_frame.fx.dispatch_later.call(null,effect);


var G__18868 = seq__18864;
var G__18869 = chunk__18865;
var G__18870 = count__18866;
var G__18871 = (i__18867 + (1));
seq__18864 = G__18868;
chunk__18865 = G__18869;
count__18866 = G__18870;
i__18867 = G__18871;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18864);
if(temp__5720__auto__){
var seq__18864__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18864__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__18864__$1);
var G__18872 = cljs.core.chunk_rest.call(null,seq__18864__$1);
var G__18873 = c__4679__auto__;
var G__18874 = cljs.core.count.call(null,c__4679__auto__);
var G__18875 = (0);
seq__18864 = G__18872;
chunk__18865 = G__18873;
count__18866 = G__18874;
i__18867 = G__18875;
continue;
} else {
var effect = cljs.core.first.call(null,seq__18864__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__18876 = cljs.core.next.call(null,seq__18864__$1);
var G__18877 = null;
var G__18878 = (0);
var G__18879 = (0);
seq__18864 = G__18876;
chunk__18865 = G__18877;
count__18866 = G__18878;
i__18867 = G__18879;
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
var seq__18880 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__18881 = null;
var count__18882 = (0);
var i__18883 = (0);
while(true){
if((i__18883 < count__18882)){
var vec__18890 = cljs.core._nth.call(null,chunk__18881,i__18883);
var effect_key = cljs.core.nth.call(null,vec__18890,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18890,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___18896 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___18896)){
var effect_fn_18897 = temp__5718__auto___18896;
effect_fn_18897.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__18898 = seq__18880;
var G__18899 = chunk__18881;
var G__18900 = count__18882;
var G__18901 = (i__18883 + (1));
seq__18880 = G__18898;
chunk__18881 = G__18899;
count__18882 = G__18900;
i__18883 = G__18901;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18880);
if(temp__5720__auto__){
var seq__18880__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18880__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__18880__$1);
var G__18902 = cljs.core.chunk_rest.call(null,seq__18880__$1);
var G__18903 = c__4679__auto__;
var G__18904 = cljs.core.count.call(null,c__4679__auto__);
var G__18905 = (0);
seq__18880 = G__18902;
chunk__18881 = G__18903;
count__18882 = G__18904;
i__18883 = G__18905;
continue;
} else {
var vec__18893 = cljs.core.first.call(null,seq__18880__$1);
var effect_key = cljs.core.nth.call(null,vec__18893,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18893,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___18906 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___18906)){
var effect_fn_18907 = temp__5718__auto___18906;
effect_fn_18907.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__18908 = cljs.core.next.call(null,seq__18880__$1);
var G__18909 = null;
var G__18910 = (0);
var G__18911 = (0);
seq__18880 = G__18908;
chunk__18881 = G__18909;
count__18882 = G__18910;
i__18883 = G__18911;
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
var seq__18912 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18913 = null;
var count__18914 = (0);
var i__18915 = (0);
while(true){
if((i__18915 < count__18914)){
var event = cljs.core._nth.call(null,chunk__18913,i__18915);
re_frame.router.dispatch.call(null,event);


var G__18916 = seq__18912;
var G__18917 = chunk__18913;
var G__18918 = count__18914;
var G__18919 = (i__18915 + (1));
seq__18912 = G__18916;
chunk__18913 = G__18917;
count__18914 = G__18918;
i__18915 = G__18919;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18912);
if(temp__5720__auto__){
var seq__18912__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18912__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__18912__$1);
var G__18920 = cljs.core.chunk_rest.call(null,seq__18912__$1);
var G__18921 = c__4679__auto__;
var G__18922 = cljs.core.count.call(null,c__4679__auto__);
var G__18923 = (0);
seq__18912 = G__18920;
chunk__18913 = G__18921;
count__18914 = G__18922;
i__18915 = G__18923;
continue;
} else {
var event = cljs.core.first.call(null,seq__18912__$1);
re_frame.router.dispatch.call(null,event);


var G__18924 = cljs.core.next.call(null,seq__18912__$1);
var G__18925 = null;
var G__18926 = (0);
var G__18927 = (0);
seq__18912 = G__18924;
chunk__18913 = G__18925;
count__18914 = G__18926;
i__18915 = G__18927;
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
var seq__18928 = cljs.core.seq.call(null,value);
var chunk__18929 = null;
var count__18930 = (0);
var i__18931 = (0);
while(true){
if((i__18931 < count__18930)){
var event = cljs.core._nth.call(null,chunk__18929,i__18931);
clear_event.call(null,event);


var G__18932 = seq__18928;
var G__18933 = chunk__18929;
var G__18934 = count__18930;
var G__18935 = (i__18931 + (1));
seq__18928 = G__18932;
chunk__18929 = G__18933;
count__18930 = G__18934;
i__18931 = G__18935;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18928);
if(temp__5720__auto__){
var seq__18928__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18928__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__18928__$1);
var G__18936 = cljs.core.chunk_rest.call(null,seq__18928__$1);
var G__18937 = c__4679__auto__;
var G__18938 = cljs.core.count.call(null,c__4679__auto__);
var G__18939 = (0);
seq__18928 = G__18936;
chunk__18929 = G__18937;
count__18930 = G__18938;
i__18931 = G__18939;
continue;
} else {
var event = cljs.core.first.call(null,seq__18928__$1);
clear_event.call(null,event);


var G__18940 = cljs.core.next.call(null,seq__18928__$1);
var G__18941 = null;
var G__18942 = (0);
var G__18943 = (0);
seq__18928 = G__18940;
chunk__18929 = G__18941;
count__18930 = G__18942;
i__18931 = G__18943;
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
