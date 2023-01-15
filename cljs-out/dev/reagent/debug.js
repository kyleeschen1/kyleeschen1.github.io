// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16895__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16896__i = 0, G__16896__a = new Array(arguments.length -  0);
while (G__16896__i < G__16896__a.length) {G__16896__a[G__16896__i] = arguments[G__16896__i + 0]; ++G__16896__i;}
  args = new cljs.core.IndexedSeq(G__16896__a,0,null);
} 
return G__16895__delegate.call(this,args);};
G__16895.cljs$lang$maxFixedArity = 0;
G__16895.cljs$lang$applyTo = (function (arglist__16897){
var args = cljs.core.seq(arglist__16897);
return G__16895__delegate(args);
});
G__16895.cljs$core$IFn$_invoke$arity$variadic = G__16895__delegate;
return G__16895;
})()
);

(o.error = (function() { 
var G__16898__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16899__i = 0, G__16899__a = new Array(arguments.length -  0);
while (G__16899__i < G__16899__a.length) {G__16899__a[G__16899__i] = arguments[G__16899__i + 0]; ++G__16899__i;}
  args = new cljs.core.IndexedSeq(G__16899__a,0,null);
} 
return G__16898__delegate.call(this,args);};
G__16898.cljs$lang$maxFixedArity = 0;
G__16898.cljs$lang$applyTo = (function (arglist__16900){
var args = cljs.core.seq(arglist__16900);
return G__16898__delegate(args);
});
G__16898.cljs$core$IFn$_invoke$arity$variadic = G__16898__delegate;
return G__16898;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
