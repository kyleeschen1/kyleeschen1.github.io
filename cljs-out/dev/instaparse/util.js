// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4870__auto__ = [];
var len__4864__auto___15299 = arguments.length;
var i__4865__auto___15300 = (0);
while(true){
if((i__4865__auto___15300 < len__4864__auto___15299)){
args__4870__auto__.push((arguments[i__4865__auto___15300]));

var G__15301 = (i__4865__auto___15300 + (1));
i__4865__auto___15300 = G__15301;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.call(null,cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq15298){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15298));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4870__auto__ = [];
var len__4864__auto___15303 = arguments.length;
var i__4865__auto___15304 = (0);
while(true){
if((i__4865__auto___15304 < len__4864__auto___15303)){
args__4870__auto__.push((arguments[i__4865__auto___15304]));

var G__15305 = (i__4865__auto___15304 + (1));
i__4865__auto___15304 = G__15305;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.call(null,cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq15302){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15302));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__15306 = "";
var G__15306__$1 = (cljs.core.truth_(re.ignoreCase)?[G__15306,"i"].join(''):G__15306);
var G__15306__$2 = (cljs.core.truth_(re.multiline)?[G__15306__$1,"m"].join(''):G__15306__$1);
if(cljs.core.truth_(re.unicode)){
return [G__15306__$2,"u"].join('');
} else {
return G__15306__$2;
}
});

//# sourceMappingURL=util.js.map
