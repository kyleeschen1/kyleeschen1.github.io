// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('edamame.impl.macros');
goog.require('cljs.core');
var ret__4913__auto___103172 = (function (){
/**
 * Private. deftime macro from https://github.com/cgrand/macrovich
 */
edamame.impl.macros.deftime = (function edamame$impl$macros$deftime(var_args){
var args__4870__auto__ = [];
var len__4864__auto___103173 = arguments.length;
var i__4865__auto___103174 = (0);
while(true){
if((i__4865__auto___103174 < len__4864__auto___103173)){
args__4870__auto__.push((arguments[i__4865__auto___103174]));

var G__103175 = (i__4865__auto___103174 + (1));
i__4865__auto___103174 = G__103175;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return edamame.impl.macros.deftime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(edamame.impl.macros.deftime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.truth_((function (){var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core._STAR_ns_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
return cljs.core.re_matches.call(null,/.*\$macros/,cljs.core.name.call(null,n));
} else {
return null;
}
})())){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return null;
}
}));

(edamame.impl.macros.deftime.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(edamame.impl.macros.deftime.cljs$lang$applyTo = (function (seq103169){
var G__103170 = cljs.core.first.call(null,seq103169);
var seq103169__$1 = cljs.core.next.call(null,seq103169);
var G__103171 = cljs.core.first.call(null,seq103169__$1);
var seq103169__$2 = cljs.core.next.call(null,seq103169__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103170,G__103171,seq103169__$2);
}));

return null;
})()
;
(edamame.impl.macros.deftime.cljs$lang$macro = true);


//# sourceMappingURL=macros.js.map
