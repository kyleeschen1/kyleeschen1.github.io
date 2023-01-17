// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__12281 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12282 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12282);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5720__auto___12317 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___12317)){
var new_db_12318 = temp__5720__auto___12317;
var fexpr__12283_12319 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__12283_12319.cljs$core$IFn$_invoke$arity$1 ? fexpr__12283_12319.cljs$core$IFn$_invoke$arity$1(new_db_12318) : fexpr__12283_12319.call(null,new_db_12318));
} else {
}

var seq__12284 = cljs.core.seq(effects_without_db);
var chunk__12285 = null;
var count__12286 = (0);
var i__12287 = (0);
while(true){
if((i__12287 < count__12286)){
var vec__12294 = chunk__12285.cljs$core$IIndexed$_nth$arity$2(null,i__12287);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12294,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12294,(1),null);
var temp__5718__auto___12320 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12320)){
var effect_fn_12321 = temp__5718__auto___12320;
(effect_fn_12321.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12321.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12321.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12322 = seq__12284;
var G__12323 = chunk__12285;
var G__12324 = count__12286;
var G__12325 = (i__12287 + (1));
seq__12284 = G__12322;
chunk__12285 = G__12323;
count__12286 = G__12324;
i__12287 = G__12325;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12284);
if(temp__5720__auto__){
var seq__12284__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12284__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__12284__$1);
var G__12326 = cljs.core.chunk_rest(seq__12284__$1);
var G__12327 = c__4679__auto__;
var G__12328 = cljs.core.count(c__4679__auto__);
var G__12329 = (0);
seq__12284 = G__12326;
chunk__12285 = G__12327;
count__12286 = G__12328;
i__12287 = G__12329;
continue;
} else {
var vec__12297 = cljs.core.first(seq__12284__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12297,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12297,(1),null);
var temp__5718__auto___12330 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12330)){
var effect_fn_12331 = temp__5718__auto___12330;
(effect_fn_12331.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12331.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12331.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12332 = cljs.core.next(seq__12284__$1);
var G__12333 = null;
var G__12334 = (0);
var G__12335 = (0);
seq__12284 = G__12332;
chunk__12285 = G__12333;
count__12286 = G__12334;
i__12287 = G__12335;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11721__auto___12336 = re_frame.interop.now();
var duration__11722__auto___12337 = (end__11721__auto___12336 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11722__auto___12337,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11721__auto___12336);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12281);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5720__auto___12338 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___12338)){
var new_db_12339 = temp__5720__auto___12338;
var fexpr__12300_12340 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__12300_12340.cljs$core$IFn$_invoke$arity$1 ? fexpr__12300_12340.cljs$core$IFn$_invoke$arity$1(new_db_12339) : fexpr__12300_12340.call(null,new_db_12339));
} else {
}

var seq__12301 = cljs.core.seq(effects_without_db);
var chunk__12302 = null;
var count__12303 = (0);
var i__12304 = (0);
while(true){
if((i__12304 < count__12303)){
var vec__12311 = chunk__12302.cljs$core$IIndexed$_nth$arity$2(null,i__12304);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12311,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12311,(1),null);
var temp__5718__auto___12341 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12341)){
var effect_fn_12342 = temp__5718__auto___12341;
(effect_fn_12342.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12342.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12342.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12343 = seq__12301;
var G__12344 = chunk__12302;
var G__12345 = count__12303;
var G__12346 = (i__12304 + (1));
seq__12301 = G__12343;
chunk__12302 = G__12344;
count__12303 = G__12345;
i__12304 = G__12346;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12301);
if(temp__5720__auto__){
var seq__12301__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12301__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__12301__$1);
var G__12347 = cljs.core.chunk_rest(seq__12301__$1);
var G__12348 = c__4679__auto__;
var G__12349 = cljs.core.count(c__4679__auto__);
var G__12350 = (0);
seq__12301 = G__12347;
chunk__12302 = G__12348;
count__12303 = G__12349;
i__12304 = G__12350;
continue;
} else {
var vec__12314 = cljs.core.first(seq__12301__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12314,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12314,(1),null);
var temp__5718__auto___12351 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12351)){
var effect_fn_12352 = temp__5718__auto___12351;
(effect_fn_12352.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12352.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12352.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12353 = cljs.core.next(seq__12301__$1);
var G__12354 = null;
var G__12355 = (0);
var G__12356 = (0);
seq__12301 = G__12353;
chunk__12302 = G__12354;
count__12303 = G__12355;
i__12304 = G__12356;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__12357){
var map__12358 = p__12357;
var map__12358__$1 = cljs.core.__destructure_map(map__12358);
var effect = map__12358__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12358__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12358__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__12359 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12360 = null;
var count__12361 = (0);
var i__12362 = (0);
while(true){
if((i__12362 < count__12361)){
var effect = chunk__12360.cljs$core$IIndexed$_nth$arity$2(null,i__12362);
re_frame.fx.dispatch_later(effect);


var G__12363 = seq__12359;
var G__12364 = chunk__12360;
var G__12365 = count__12361;
var G__12366 = (i__12362 + (1));
seq__12359 = G__12363;
chunk__12360 = G__12364;
count__12361 = G__12365;
i__12362 = G__12366;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12359);
if(temp__5720__auto__){
var seq__12359__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12359__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__12359__$1);
var G__12367 = cljs.core.chunk_rest(seq__12359__$1);
var G__12368 = c__4679__auto__;
var G__12369 = cljs.core.count(c__4679__auto__);
var G__12370 = (0);
seq__12359 = G__12367;
chunk__12360 = G__12368;
count__12361 = G__12369;
i__12362 = G__12370;
continue;
} else {
var effect = cljs.core.first(seq__12359__$1);
re_frame.fx.dispatch_later(effect);


var G__12371 = cljs.core.next(seq__12359__$1);
var G__12372 = null;
var G__12373 = (0);
var G__12374 = (0);
seq__12359 = G__12371;
chunk__12360 = G__12372;
count__12361 = G__12373;
i__12362 = G__12374;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__12375 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__12376 = null;
var count__12377 = (0);
var i__12378 = (0);
while(true){
if((i__12378 < count__12377)){
var vec__12385 = chunk__12376.cljs$core$IIndexed$_nth$arity$2(null,i__12378);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12385,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12385,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5718__auto___12391 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12391)){
var effect_fn_12392 = temp__5718__auto___12391;
(effect_fn_12392.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12392.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12392.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__12393 = seq__12375;
var G__12394 = chunk__12376;
var G__12395 = count__12377;
var G__12396 = (i__12378 + (1));
seq__12375 = G__12393;
chunk__12376 = G__12394;
count__12377 = G__12395;
i__12378 = G__12396;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12375);
if(temp__5720__auto__){
var seq__12375__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12375__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__12375__$1);
var G__12397 = cljs.core.chunk_rest(seq__12375__$1);
var G__12398 = c__4679__auto__;
var G__12399 = cljs.core.count(c__4679__auto__);
var G__12400 = (0);
seq__12375 = G__12397;
chunk__12376 = G__12398;
count__12377 = G__12399;
i__12378 = G__12400;
continue;
} else {
var vec__12388 = cljs.core.first(seq__12375__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12388,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12388,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5718__auto___12401 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12401)){
var effect_fn_12402 = temp__5718__auto___12401;
(effect_fn_12402.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12402.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12402.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__12403 = cljs.core.next(seq__12375__$1);
var G__12404 = null;
var G__12405 = (0);
var G__12406 = (0);
seq__12375 = G__12403;
chunk__12376 = G__12404;
count__12377 = G__12405;
i__12378 = G__12406;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__12407 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12408 = null;
var count__12409 = (0);
var i__12410 = (0);
while(true){
if((i__12410 < count__12409)){
var event = chunk__12408.cljs$core$IIndexed$_nth$arity$2(null,i__12410);
re_frame.router.dispatch(event);


var G__12411 = seq__12407;
var G__12412 = chunk__12408;
var G__12413 = count__12409;
var G__12414 = (i__12410 + (1));
seq__12407 = G__12411;
chunk__12408 = G__12412;
count__12409 = G__12413;
i__12410 = G__12414;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12407);
if(temp__5720__auto__){
var seq__12407__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12407__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__12407__$1);
var G__12415 = cljs.core.chunk_rest(seq__12407__$1);
var G__12416 = c__4679__auto__;
var G__12417 = cljs.core.count(c__4679__auto__);
var G__12418 = (0);
seq__12407 = G__12415;
chunk__12408 = G__12416;
count__12409 = G__12417;
i__12410 = G__12418;
continue;
} else {
var event = cljs.core.first(seq__12407__$1);
re_frame.router.dispatch(event);


var G__12419 = cljs.core.next(seq__12407__$1);
var G__12420 = null;
var G__12421 = (0);
var G__12422 = (0);
seq__12407 = G__12419;
chunk__12408 = G__12420;
count__12409 = G__12421;
i__12410 = G__12422;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12423 = cljs.core.seq(value);
var chunk__12424 = null;
var count__12425 = (0);
var i__12426 = (0);
while(true){
if((i__12426 < count__12425)){
var event = chunk__12424.cljs$core$IIndexed$_nth$arity$2(null,i__12426);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12427 = seq__12423;
var G__12428 = chunk__12424;
var G__12429 = count__12425;
var G__12430 = (i__12426 + (1));
seq__12423 = G__12427;
chunk__12424 = G__12428;
count__12425 = G__12429;
i__12426 = G__12430;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__12423);
if(temp__5720__auto__){
var seq__12423__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12423__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__12423__$1);
var G__12431 = cljs.core.chunk_rest(seq__12423__$1);
var G__12432 = c__4679__auto__;
var G__12433 = cljs.core.count(c__4679__auto__);
var G__12434 = (0);
seq__12423 = G__12431;
chunk__12424 = G__12432;
count__12425 = G__12433;
i__12426 = G__12434;
continue;
} else {
var event = cljs.core.first(seq__12423__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12435 = cljs.core.next(seq__12423__$1);
var G__12436 = null;
var G__12437 = (0);
var G__12438 = (0);
seq__12423 = G__12435;
chunk__12424 = G__12436;
count__12425 = G__12437;
i__12426 = G__12438;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
