// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__19344_SHARP_){
var k = f.call(null,p1__19344_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19345){
var vec__19346 = p__19345;
var k = cljs.core.nth.call(null,vec__19346,(0),null);
var v = cljs.core.nth.call(null,vec__19346,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19350 = arguments.length;
var i__4865__auto___19351 = (0);
while(true){
if((i__4865__auto___19351 < len__4864__auto___19350)){
args__4870__auto__.push((arguments[i__4865__auto___19351]));

var G__19352 = (i__4865__auto___19351 + (1));
i__4865__auto___19351 = G__19352;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq19349){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19349));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__19355){
var map__19356 = p__19355;
var map__19356__$1 = cljs.core.__destructure_map.call(null,map__19356);
var message = cljs.core.get.call(null,map__19356__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__19356__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__19354_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19354_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__19353_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__19353_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__19358){
var map__19359 = p__19358;
var map__19359__$1 = cljs.core.__destructure_map.call(null,map__19359);
var message_data = map__19359__$1;
var message = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__19359__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__19360 = file_excerpt;
var map__19360__$1 = cljs.core.__destructure_map.call(null,map__19360);
var start_line = cljs.core.get.call(null,map__19360__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__19360__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__19360__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__19361 = cljs.core.split_with.call(null,(function (p1__19357_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__19357_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__19361,(0),null);
var end = cljs.core.nth.call(null,vec__19361,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__19364){
var map__19365 = p__19364;
var map__19365__$1 = cljs.core.__destructure_map.call(null,map__19365);
var file = cljs.core.get.call(null,map__19365__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__19365__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__19365__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__19366 = "";
var G__19366__$1 = (cljs.core.truth_(file)?[G__19366,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__19366);
var G__19366__$2 = (cljs.core.truth_(line)?[G__19366__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__19366__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = line;
if(cljs.core.truth_(and__4251__auto__)){
return column;
} else {
return and__4251__auto__;
}
})())){
return [G__19366__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__19366__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_19424 = (new goog.debug.Console());
var G__19373_19425 = c_19424.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__19373_19425,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__19373_19425,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_19424);

}

var temp__5720__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__19374 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__19374,"data",(function (){var or__4253__auto__ = data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__19374;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4251__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4251__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4251__auto__;
}
});

var last_reload_timestamp_19426 = cljs.core.atom.call(null,(0));
var promise_chain_19427 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__4251__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_19426) < ts);
if(and__4251__auto__){
return ts;
} else {
return and__4251__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_19426,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_19427.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__19375 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__19376 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__19376);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__19377 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__19378 = null;
var count__19379 = (0);
var i__19380 = (0);
while(true){
if((i__19380 < count__19379)){
var w = cljs.core._nth.call(null,chunk__19378,i__19380);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__19428 = seq__19377;
var G__19429 = chunk__19378;
var G__19430 = count__19379;
var G__19431 = (i__19380 + (1));
seq__19377 = G__19428;
chunk__19378 = G__19429;
count__19379 = G__19430;
i__19380 = G__19431;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19377);
if(temp__5720__auto__){
var seq__19377__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19377__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__19377__$1);
var G__19432 = cljs.core.chunk_rest.call(null,seq__19377__$1);
var G__19433 = c__4679__auto__;
var G__19434 = cljs.core.count.call(null,c__4679__auto__);
var G__19435 = (0);
seq__19377 = G__19432;
chunk__19378 = G__19433;
count__19379 = G__19434;
i__19380 = G__19435;
continue;
} else {
var w = cljs.core.first.call(null,seq__19377__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__19436 = cljs.core.next.call(null,seq__19377__$1);
var G__19437 = null;
var G__19438 = (0);
var G__19439 = (0);
seq__19377 = G__19436;
chunk__19378 = G__19437;
count__19379 = G__19438;
i__19380 = G__19439;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__19375);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_19427.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__19381 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__19382 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__19382);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__19381);
}}));
} else {
return promise_chain_19427.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4253__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4251__auto____$1){
var or__4253__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19440 = arguments.length;
var i__4865__auto___19441 = (0);
while(true){
if((i__4865__auto___19441 < len__4864__auto___19440)){
args__4870__auto__.push((arguments[i__4865__auto___19441]));

var G__19442 = (i__4865__auto___19441 + (1));
i__4865__auto___19441 = G__19442;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__19385){
var vec__19386 = p__19385;
var n = cljs.core.nth.call(null,vec__19386,(0),null);
var mdata = cljs.core.nth.call(null,vec__19386,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__19389 = cljs.core.seq.call(null,hooks);
var chunk__19390 = null;
var count__19391 = (0);
var i__19392 = (0);
while(true){
if((i__19392 < count__19391)){
var vec__19401 = cljs.core._nth.call(null,chunk__19390,i__19392);
var n = cljs.core.nth.call(null,vec__19401,(0),null);
var f = cljs.core.nth.call(null,vec__19401,(1),null);
var temp__5718__auto___19443 = cljs.core.reduce.call(null,((function (seq__19389,chunk__19390,count__19391,i__19392,vec__19401,n,f,hooks){
return (function (p1__19367_SHARP_,p2__19368_SHARP_){
if(cljs.core.truth_(p1__19367_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__19367_SHARP_,p2__19368_SHARP_);
} else {
return null;
}
});})(seq__19389,chunk__19390,count__19391,i__19392,vec__19401,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___19443)){
var hook_19444 = temp__5718__auto___19443;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_19444,args);
}catch (e19404){if((e19404 instanceof Error)){
var e_19445 = e19404;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_19445);
} else {
throw e19404;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__19446 = seq__19389;
var G__19447 = chunk__19390;
var G__19448 = count__19391;
var G__19449 = (i__19392 + (1));
seq__19389 = G__19446;
chunk__19390 = G__19447;
count__19391 = G__19448;
i__19392 = G__19449;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19389);
if(temp__5720__auto__){
var seq__19389__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19389__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__19389__$1);
var G__19450 = cljs.core.chunk_rest.call(null,seq__19389__$1);
var G__19451 = c__4679__auto__;
var G__19452 = cljs.core.count.call(null,c__4679__auto__);
var G__19453 = (0);
seq__19389 = G__19450;
chunk__19390 = G__19451;
count__19391 = G__19452;
i__19392 = G__19453;
continue;
} else {
var vec__19405 = cljs.core.first.call(null,seq__19389__$1);
var n = cljs.core.nth.call(null,vec__19405,(0),null);
var f = cljs.core.nth.call(null,vec__19405,(1),null);
var temp__5718__auto___19454 = cljs.core.reduce.call(null,((function (seq__19389,chunk__19390,count__19391,i__19392,vec__19405,n,f,seq__19389__$1,temp__5720__auto__,hooks){
return (function (p1__19367_SHARP_,p2__19368_SHARP_){
if(cljs.core.truth_(p1__19367_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__19367_SHARP_,p2__19368_SHARP_);
} else {
return null;
}
});})(seq__19389,chunk__19390,count__19391,i__19392,vec__19405,n,f,seq__19389__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___19454)){
var hook_19455 = temp__5718__auto___19454;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_19455,args);
}catch (e19408){if((e19408 instanceof Error)){
var e_19456 = e19408;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_19456);
} else {
throw e19408;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__19457 = cljs.core.next.call(null,seq__19389__$1);
var G__19458 = null;
var G__19459 = (0);
var G__19460 = (0);
seq__19389 = G__19457;
chunk__19390 = G__19458;
count__19391 = G__19459;
i__19392 = G__19460;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq19383){
var G__19384 = cljs.core.first.call(null,seq19383);
var seq19383__$1 = cljs.core.next.call(null,seq19383);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19384,seq19383__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19409){
var vec__19410 = p__19409;
var k = cljs.core.nth.call(null,vec__19410,(0),null);
var v = cljs.core.nth.call(null,vec__19410,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__19369_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__19369_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__19369_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__19370_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__19370_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__4251__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4251__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__19371_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__19371_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__19413_19461 = cljs.core.seq.call(null,to_reload);
var chunk__19414_19462 = null;
var count__19415_19463 = (0);
var i__19416_19464 = (0);
while(true){
if((i__19416_19464 < count__19415_19463)){
var ns_19465 = cljs.core._nth.call(null,chunk__19414_19462,i__19416_19464);
goog.require(cljs.core.name.call(null,ns_19465),true);


var G__19466 = seq__19413_19461;
var G__19467 = chunk__19414_19462;
var G__19468 = count__19415_19463;
var G__19469 = (i__19416_19464 + (1));
seq__19413_19461 = G__19466;
chunk__19414_19462 = G__19467;
count__19415_19463 = G__19468;
i__19416_19464 = G__19469;
continue;
} else {
var temp__5720__auto___19470 = cljs.core.seq.call(null,seq__19413_19461);
if(temp__5720__auto___19470){
var seq__19413_19471__$1 = temp__5720__auto___19470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19413_19471__$1)){
var c__4679__auto___19472 = cljs.core.chunk_first.call(null,seq__19413_19471__$1);
var G__19473 = cljs.core.chunk_rest.call(null,seq__19413_19471__$1);
var G__19474 = c__4679__auto___19472;
var G__19475 = cljs.core.count.call(null,c__4679__auto___19472);
var G__19476 = (0);
seq__19413_19461 = G__19473;
chunk__19414_19462 = G__19474;
count__19415_19463 = G__19475;
i__19416_19464 = G__19476;
continue;
} else {
var ns_19477 = cljs.core.first.call(null,seq__19413_19471__$1);
goog.require(cljs.core.name.call(null,ns_19477),true);


var G__19478 = cljs.core.next.call(null,seq__19413_19471__$1);
var G__19479 = null;
var G__19480 = (0);
var G__19481 = (0);
seq__19413_19461 = G__19478;
chunk__19414_19462 = G__19479;
count__19415_19463 = G__19480;
i__19416_19464 = G__19481;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_19482 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_19482);
} else {
setTimeout(after_reload_fn_19482,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__19417 = cljs.core.seq.call(null,warnings);
var chunk__19418 = null;
var count__19419 = (0);
var i__19420 = (0);
while(true){
if((i__19420 < count__19419)){
var warning = cljs.core._nth.call(null,chunk__19418,i__19420);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__19483 = seq__19417;
var G__19484 = chunk__19418;
var G__19485 = count__19419;
var G__19486 = (i__19420 + (1));
seq__19417 = G__19483;
chunk__19418 = G__19484;
count__19419 = G__19485;
i__19420 = G__19486;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19417);
if(temp__5720__auto__){
var seq__19417__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19417__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__19417__$1);
var G__19487 = cljs.core.chunk_rest.call(null,seq__19417__$1);
var G__19488 = c__4679__auto__;
var G__19489 = cljs.core.count.call(null,c__4679__auto__);
var G__19490 = (0);
seq__19417 = G__19487;
chunk__19418 = G__19488;
count__19419 = G__19489;
i__19420 = G__19490;
continue;
} else {
var warning = cljs.core.first.call(null,seq__19417__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__19491 = cljs.core.next.call(null,seq__19417__$1);
var G__19492 = null;
var G__19493 = (0);
var G__19494 = (0);
seq__19417 = G__19491;
chunk__19418 = G__19492;
count__19419 = G__19493;
i__19420 = G__19494;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__19421){
var map__19422 = p__19421;
var map__19422__$1 = cljs.core.__destructure_map.call(null,map__19422);
var exception_data = map__19422__$1;
var file = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19422__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__19372_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__19372_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__19423 = "Compile Exception - ";
var G__19423__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return message;
}
})())?[G__19423,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__19423);
if(cljs.core.truth_(file)){
return [G__19423__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__19423__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
