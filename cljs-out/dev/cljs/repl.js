// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14922){
var map__14923 = p__14922;
var map__14923__$1 = cljs.core.__destructure_map(map__14923);
var m = map__14923__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14923__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14923__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5720__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__14924_14952 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__14925_14953 = null;
var count__14926_14954 = (0);
var i__14927_14955 = (0);
while(true){
if((i__14927_14955 < count__14926_14954)){
var f_14956 = chunk__14925_14953.cljs$core$IIndexed$_nth$arity$2(null,i__14927_14955);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14956], 0));


var G__14957 = seq__14924_14952;
var G__14958 = chunk__14925_14953;
var G__14959 = count__14926_14954;
var G__14960 = (i__14927_14955 + (1));
seq__14924_14952 = G__14957;
chunk__14925_14953 = G__14958;
count__14926_14954 = G__14959;
i__14927_14955 = G__14960;
continue;
} else {
var temp__5720__auto___14961 = cljs.core.seq(seq__14924_14952);
if(temp__5720__auto___14961){
var seq__14924_14962__$1 = temp__5720__auto___14961;
if(cljs.core.chunked_seq_QMARK_(seq__14924_14962__$1)){
var c__4679__auto___14963 = cljs.core.chunk_first(seq__14924_14962__$1);
var G__14964 = cljs.core.chunk_rest(seq__14924_14962__$1);
var G__14965 = c__4679__auto___14963;
var G__14966 = cljs.core.count(c__4679__auto___14963);
var G__14967 = (0);
seq__14924_14952 = G__14964;
chunk__14925_14953 = G__14965;
count__14926_14954 = G__14966;
i__14927_14955 = G__14967;
continue;
} else {
var f_14968 = cljs.core.first(seq__14924_14962__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14968], 0));


var G__14969 = cljs.core.next(seq__14924_14962__$1);
var G__14970 = null;
var G__14971 = (0);
var G__14972 = (0);
seq__14924_14952 = G__14969;
chunk__14925_14953 = G__14970;
count__14926_14954 = G__14971;
i__14927_14955 = G__14972;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14973 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_14973], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_14973)))?cljs.core.second(arglists_14973):arglists_14973)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__14928_14974 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__14929_14975 = null;
var count__14930_14976 = (0);
var i__14931_14977 = (0);
while(true){
if((i__14931_14977 < count__14930_14976)){
var vec__14940_14978 = chunk__14929_14975.cljs$core$IIndexed$_nth$arity$2(null,i__14931_14977);
var name_14979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14978,(0),null);
var map__14943_14980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14978,(1),null);
var map__14943_14981__$1 = cljs.core.__destructure_map(map__14943_14980);
var doc_14982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14943_14981__$1,cljs.core.cst$kw$doc);
var arglists_14983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14943_14981__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14979], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14983], 0));

if(cljs.core.truth_(doc_14982)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14982], 0));
} else {
}


var G__14984 = seq__14928_14974;
var G__14985 = chunk__14929_14975;
var G__14986 = count__14930_14976;
var G__14987 = (i__14931_14977 + (1));
seq__14928_14974 = G__14984;
chunk__14929_14975 = G__14985;
count__14930_14976 = G__14986;
i__14931_14977 = G__14987;
continue;
} else {
var temp__5720__auto___14988 = cljs.core.seq(seq__14928_14974);
if(temp__5720__auto___14988){
var seq__14928_14989__$1 = temp__5720__auto___14988;
if(cljs.core.chunked_seq_QMARK_(seq__14928_14989__$1)){
var c__4679__auto___14990 = cljs.core.chunk_first(seq__14928_14989__$1);
var G__14991 = cljs.core.chunk_rest(seq__14928_14989__$1);
var G__14992 = c__4679__auto___14990;
var G__14993 = cljs.core.count(c__4679__auto___14990);
var G__14994 = (0);
seq__14928_14974 = G__14991;
chunk__14929_14975 = G__14992;
count__14930_14976 = G__14993;
i__14931_14977 = G__14994;
continue;
} else {
var vec__14944_14995 = cljs.core.first(seq__14928_14989__$1);
var name_14996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14944_14995,(0),null);
var map__14947_14997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14944_14995,(1),null);
var map__14947_14998__$1 = cljs.core.__destructure_map(map__14947_14997);
var doc_14999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14947_14998__$1,cljs.core.cst$kw$doc);
var arglists_15000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14947_14998__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14996], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15000], 0));

if(cljs.core.truth_(doc_14999)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14999], 0));
} else {
}


var G__15001 = cljs.core.next(seq__14928_14989__$1);
var G__15002 = null;
var G__15003 = (0);
var G__15004 = (0);
seq__14928_14974 = G__15001;
chunk__14929_14975 = G__15002;
count__14930_14976 = G__15003;
i__14931_14977 = G__15004;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__14948 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__14949 = null;
var count__14950 = (0);
var i__14951 = (0);
while(true){
if((i__14951 < count__14950)){
var role = chunk__14949.cljs$core$IIndexed$_nth$arity$2(null,i__14951);
var temp__5720__auto___15005__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___15005__$1)){
var spec_15006 = temp__5720__auto___15005__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_15006)], 0));
} else {
}


var G__15007 = seq__14948;
var G__15008 = chunk__14949;
var G__15009 = count__14950;
var G__15010 = (i__14951 + (1));
seq__14948 = G__15007;
chunk__14949 = G__15008;
count__14950 = G__15009;
i__14951 = G__15010;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__14948);
if(temp__5720__auto____$1){
var seq__14948__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__14948__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__14948__$1);
var G__15011 = cljs.core.chunk_rest(seq__14948__$1);
var G__15012 = c__4679__auto__;
var G__15013 = cljs.core.count(c__4679__auto__);
var G__15014 = (0);
seq__14948 = G__15011;
chunk__14949 = G__15012;
count__14950 = G__15013;
i__14951 = G__15014;
continue;
} else {
var role = cljs.core.first(seq__14948__$1);
var temp__5720__auto___15015__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___15015__$2)){
var spec_15016 = temp__5720__auto___15015__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_15016)], 0));
} else {
}


var G__15017 = cljs.core.next(seq__14948__$1);
var G__15018 = null;
var G__15019 = (0);
var G__15020 = (0);
seq__14948 = G__15017;
chunk__14949 = G__15018;
count__14950 = G__15019;
i__14951 = G__15020;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,(((t instanceof cljs.core.ExceptionInfo))?cljs.core.cst$sym$cljs$core_SLASH_ExceptionInfo:(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__15021 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__15022 = cljs.core.ex_cause(t);
via = G__15021;
t = G__15022;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$via,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),cljs.core.cst$kw$trace,null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.cst$kw$clojure$error_SLASH_phase.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__15025 = datafied_throwable;
var map__15025__$1 = cljs.core.__destructure_map(map__15025);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15025__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15025__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__15026 = cljs.core.last(via);
var map__15026__$1 = cljs.core.__destructure_map(map__15026);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.cst$kw$data);
var map__15027 = data;
var map__15027__$1 = cljs.core.__destructure_map(map__15027);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15027__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15027__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15027__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__15028 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__15028__$1 = cljs.core.__destructure_map(map__15028);
var top_data = map__15028__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15028__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__15029 = phase;
var G__15029__$1 = (((G__15029 instanceof cljs.core.Keyword))?G__15029.fqn:null);
switch (G__15029__$1) {
case "read-source":
var map__15030 = data;
var map__15030__$1 = cljs.core.__destructure_map(map__15030);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15030__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15030__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__15031 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__15031__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15031,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__15031);
var G__15031__$2 = (cljs.core.truth_((function (){var fexpr__15032 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15032.cljs$core$IFn$_invoke$arity$1 ? fexpr__15032.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15032.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15031__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__15031__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15031__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__15031__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15033 = top_data;
var G__15033__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15033,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__15033);
var G__15033__$2 = (cljs.core.truth_((function (){var fexpr__15034 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15034.cljs$core$IFn$_invoke$arity$1 ? fexpr__15034.cljs$core$IFn$_invoke$arity$1(source) : fexpr__15034.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15033__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__15033__$1);
var G__15033__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15033__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__15033__$2);
var G__15033__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15033__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__15033__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15033__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__15033__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15035 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(3),null);
var G__15038 = top_data;
var G__15038__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15038,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__15038);
var G__15038__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15038__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__15038__$1);
var G__15038__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15038__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15038__$2);
var G__15038__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15038__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__15038__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15038__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__15038__$4;
}

break;
case "execution":
var vec__15039 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15039,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15024_SHARP_){
var or__4253__auto__ = (p1__15024_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__15042 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__15042.cljs$core$IFn$_invoke$arity$1 ? fexpr__15042.cljs$core$IFn$_invoke$arity$1(p1__15024_SHARP_) : fexpr__15042.call(null,p1__15024_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__15043 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__15043__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15043,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__15043);
var G__15043__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15043__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__15043__$1);
var G__15043__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15043__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15043__$2);
var G__15043__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15043__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__15043__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15043__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__15043__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15029__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15047){
var map__15048 = p__15047;
var map__15048__$1 = cljs.core.__destructure_map(map__15048);
var triage_data = map__15048__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15048__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15048__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15048__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15048__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15048__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15048__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15048__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15048__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__15049 = phase;
var G__15049__$1 = (((G__15049 instanceof cljs.core.Keyword))?G__15049.fqn:null);
switch (G__15049__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__15050 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__15051 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15052 = loc;
var G__15053 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15054_15087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15055_15088 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15056_15089 = true;
var _STAR_print_fn_STAR__temp_val__15057_15090 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15056_15089);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15057_15090);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15045_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15045_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15055_15088);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15054_15087);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__15050,G__15051,G__15052,G__15053) : format.call(null,G__15050,G__15051,G__15052,G__15053));

break;
case "macroexpansion":
var G__15058 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__15059 = cause_type;
var G__15060 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15061 = loc;
var G__15062 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15058,G__15059,G__15060,G__15061,G__15062) : format.call(null,G__15058,G__15059,G__15060,G__15061,G__15062));

break;
case "compile-syntax-check":
var G__15063 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__15064 = cause_type;
var G__15065 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15066 = loc;
var G__15067 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15063,G__15064,G__15065,G__15066,G__15067) : format.call(null,G__15063,G__15064,G__15065,G__15066,G__15067));

break;
case "compilation":
var G__15068 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__15069 = cause_type;
var G__15070 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15071 = loc;
var G__15072 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15068,G__15069,G__15070,G__15071,G__15072) : format.call(null,G__15068,G__15069,G__15070,G__15071,G__15072));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__15073 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__15074 = symbol;
var G__15075 = loc;
var G__15076 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15077_15091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15078_15092 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15079_15093 = true;
var _STAR_print_fn_STAR__temp_val__15080_15094 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15079_15093);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15080_15094);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15046_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15046_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15078_15092);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15077_15091);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__15073,G__15074,G__15075,G__15076) : format.call(null,G__15073,G__15074,G__15075,G__15076));
} else {
var G__15081 = "Execution error%s at %s(%s).\n%s\n";
var G__15082 = cause_type;
var G__15083 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__15084 = loc;
var G__15085 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__15081,G__15082,G__15083,G__15084,G__15085) : format.call(null,G__15081,G__15082,G__15083,G__15084,G__15085));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15049__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
