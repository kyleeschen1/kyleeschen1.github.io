// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_.call(null,path)){
return cljs.core.every_QMARK_.call(null,com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_.call(null,path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__29291__delegate = function (args){
var ret = cljs.core.apply.call(null,f,args);
if(((cljs.core.sequential_QMARK_.call(null,ret)) && (com.rpl.specter.static_path_QMARK_.call(null,ret)))){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,ret);
} else {
if(((cljs.core.sequential_QMARK_.call(null,ret)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ret))))){
return cljs.core.first.call(null,ret);
} else {
return ret;

}
}
};
var G__29291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29292__i = 0, G__29292__a = new Array(arguments.length -  0);
while (G__29292__i < G__29292__a.length) {G__29292__a[G__29292__i] = arguments[G__29292__i + 0]; ++G__29292__i;}
  args = new cljs.core.IndexedSeq(G__29292__a,0,null);
} 
return G__29291__delegate.call(this,args);};
G__29291.cljs$lang$maxFixedArity = 0;
G__29291.cljs$lang$applyTo = (function (arglist__29293){
var args = cljs.core.seq(arglist__29293);
return G__29291__delegate(args);
});
G__29291.cljs$core$IFn$_invoke$arity$variadic = G__29291__delegate;
return G__29291;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29310 = arguments.length;
var i__4865__auto___29311 = (0);
while(true){
if((i__4865__auto___29311 < len__4864__auto___29310)){
args__4870__auto__.push((arguments[i__4865__auto___29311]));

var G__29312 = (i__4865__auto___29311 + (1));
i__4865__auto___29311 = G__29312;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq29309){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29309));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
return com.rpl.specter.compiled_traverse_all.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29319 = arguments.length;
var i__4865__auto___29320 = (0);
while(true){
if((i__4865__auto___29320 < len__4864__auto___29319)){
args__4870__auto__.push((arguments[i__4865__auto___29320]));

var G__29321 = (i__4865__auto___29320 + (1));
i__4865__auto___29320 = G__29321;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__29317){
var map__29318 = p__29317;
var map__29318__$1 = cljs.core.__destructure_map.call(null,map__29318);
var merge_fn = cljs.core.get.call(null,map__29318__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq29313){
var G__29314 = cljs.core.first.call(null,seq29313);
var seq29313__$1 = cljs.core.next.call(null,seq29313);
var G__29315 = cljs.core.first.call(null,seq29313__$1);
var seq29313__$2 = cljs.core.next.call(null,seq29313__$1);
var G__29316 = cljs.core.first.call(null,seq29313__$2);
var seq29313__$3 = cljs.core.next.call(null,seq29313__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29314,G__29315,G__29316,seq29313__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29322__delegate = function (args){
return cljs.core.map.call(null,latenavfn,args);
};
var G__29322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29323__i = 0, G__29323__a = new Array(arguments.length -  0);
while (G__29323__i < G__29323__a.length) {G__29323__a[G__29323__i] = arguments[G__29323__i + 0]; ++G__29323__i;}
  args = new cljs.core.IndexedSeq(G__29323__a,0,null);
} 
return G__29322__delegate.call(this,args);};
G__29322.cljs$lang$maxFixedArity = 0;
G__29322.cljs$lang$applyTo = (function (arglist__29324){
var args = cljs.core.seq(arglist__29324);
return G__29322__delegate(args);
});
G__29322.cljs$core$IFn$_invoke$arity$variadic = G__29322__delegate;
return G__29322;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29325 = (function (meta29326){
this.meta29326 = meta29326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29327,meta29326__$1){
var self__ = this;
var _29327__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29325(meta29326__$1));
}));

(com.rpl.specter.t_com$rpl$specter29325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29327){
var self__ = this;
var _29327__$1 = this;
return self__.meta29326;
}));

(com.rpl.specter.t_com$rpl$specter29325.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29325.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter29325.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter29325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29326","meta29326",-496603008,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29325.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29325.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29325");

(com.rpl.specter.t_com$rpl$specter29325.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29325");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29325.
 */
com.rpl.specter.__GT_t_com$rpl$specter29325 = (function com$rpl$specter$__GT_t_com$rpl$specter29325(meta29326){
return (new com.rpl.specter.t_com$rpl$specter29325(meta29326));
});

}

return (new com.rpl.specter.t_com$rpl$specter29325(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29328 = (function (afn,meta29329){
this.afn = afn;
this.meta29329 = meta29329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29330,meta29329__$1){
var self__ = this;
var _29330__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29328(self__.afn,meta29329__$1));
}));

(com.rpl.specter.t_com$rpl$specter29328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29330){
var self__ = this;
var _29330__$1 = this;
return self__.meta29329;
}));

(com.rpl.specter.t_com$rpl$specter29328.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29328.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter29328.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter29328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29329","meta29329",1118853439,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29328.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29328.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29328");

(com.rpl.specter.t_com$rpl$specter29328.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29328");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29328.
 */
com.rpl.specter.__GT_t_com$rpl$specter29328 = (function com$rpl$specter$__GT_t_com$rpl$specter29328(afn__$1,meta29329){
return (new com.rpl.specter.t_com$rpl$specter29328(afn__$1,meta29329));
});

}

return (new com.rpl.specter.t_com$rpl$specter29328(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29331 = (function (afn,meta29332){
this.afn = afn;
this.meta29332 = meta29332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29333,meta29332__$1){
var self__ = this;
var _29333__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29331(self__.afn,meta29332__$1));
}));

(com.rpl.specter.t_com$rpl$specter29331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29333){
var self__ = this;
var _29333__$1 = this;
return self__.meta29332;
}));

(com.rpl.specter.t_com$rpl$specter29331.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29331.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter29331.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return self__.afn.call(null,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter29331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29332","meta29332",132918747,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29331.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29331.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29331");

(com.rpl.specter.t_com$rpl$specter29331.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29331");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29331.
 */
com.rpl.specter.__GT_t_com$rpl$specter29331 = (function com$rpl$specter$__GT_t_com$rpl$specter29331(afn__$1,meta29332){
return (new com.rpl.specter.t_com$rpl$specter29331(afn__$1,meta29332));
});

}

return (new com.rpl.specter.t_com$rpl$specter29331(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
return com.rpl.specter.terminal.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29334 = (function (meta29335){
this.meta29335 = meta29335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29336,meta29335__$1){
var self__ = this;
var _29336__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29334(meta29335__$1));
}));

(com.rpl.specter.t_com$rpl$specter29334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29336){
var self__ = this;
var _29336__$1 = this;
return self__.meta29335;
}));

(com.rpl.specter.t_com$rpl$specter29334.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29334.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29334.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29335","meta29335",350025025,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29334.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29334.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29334");

(com.rpl.specter.t_com$rpl$specter29334.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29334");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29334.
 */
com.rpl.specter.__GT_t_com$rpl$specter29334 = (function com$rpl$specter$__GT_t_com$rpl$specter29334(meta29335){
return (new com.rpl.specter.t_com$rpl$specter29334(meta29335));
});

}

return (new com.rpl.specter.t_com$rpl$specter29334(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29337 = (function (meta29338){
this.meta29338 = meta29338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29339,meta29338__$1){
var self__ = this;
var _29339__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29337(meta29338__$1));
}));

(com.rpl.specter.t_com$rpl$specter29337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29339){
var self__ = this;
var _29339__$1 = this;
return self__.meta29338;
}));

(com.rpl.specter.t_com$rpl$specter29337.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29337.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29337.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var m = cljs.core.meta.call(null,structure);
var res = com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta.call(null,res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter29337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29338","meta29338",-949526460,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29337.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29337.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29337");

(com.rpl.specter.t_com$rpl$specter29337.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29337");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29337.
 */
com.rpl.specter.__GT_t_com$rpl$specter29337 = (function com$rpl$specter$__GT_t_com$rpl$specter29337(meta29338){
return (new com.rpl.specter.t_com$rpl$specter29337(meta29338));
});

}

return (new com.rpl.specter.t_com$rpl$specter29337(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__25429__auto__,v){
var ret__25430__auto__ = next_fn.call(null,v);
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29340 = (function (meta29341){
this.meta29341 = meta29341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29342,meta29341__$1){
var self__ = this;
var _29342__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29340(meta29341__$1));
}));

(com.rpl.specter.t_com$rpl$specter29340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29342){
var self__ = this;
var _29342__$1 = this;
return self__.meta29341;
}));

(com.rpl.specter.t_com$rpl$specter29340.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29340.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return cljs.core.reduce.call(null,(function (curr__25429__auto__,v){
var ret__25430__auto__ = next_fn.call(null,v);
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29340.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29341","meta29341",-345445995,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29340.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29340.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29340");

(com.rpl.specter.t_com$rpl$specter29340.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29340");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29340.
 */
com.rpl.specter.__GT_t_com$rpl$specter29340 = (function com$rpl$specter$__GT_t_com$rpl$specter29340(meta29341){
return (new com.rpl.specter.t_com$rpl$specter29340(meta29341));
});

}

return (new com.rpl.specter.t_com$rpl$specter29340(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__25429__auto__,k){
var ret__25430__auto__ = next_fn.call(null,k);
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29343 = (function (meta29344){
this.meta29344 = meta29344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29345,meta29344__$1){
var self__ = this;
var _29345__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29343(meta29344__$1));
}));

(com.rpl.specter.t_com$rpl$specter29343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29345){
var self__ = this;
var _29345__$1 = this;
return self__.meta29344;
}));

(com.rpl.specter.t_com$rpl$specter29343.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29343.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return cljs.core.reduce.call(null,(function (curr__25429__auto__,k){
var ret__25430__auto__ = next_fn.call(null,k);
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29343.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.navs.map_keys_transform.call(null,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29344","meta29344",898524539,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29343.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29343.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29343");

(com.rpl.specter.t_com$rpl$specter29343.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29343");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29343.
 */
com.rpl.specter.__GT_t_com$rpl$specter29343 = (function com$rpl$specter$__GT_t_com$rpl$specter29343(meta29344){
return (new com.rpl.specter.t_com$rpl$specter29343(meta29344));
});

}

return (new com.rpl.specter.t_com$rpl$specter29343(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29346 = (function (meta29347){
this.meta29347 = meta29347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29348,meta29347__$1){
var self__ = this;
var _29348__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29346(meta29347__$1));
}));

(com.rpl.specter.t_com$rpl$specter29346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29348){
var self__ = this;
var _29348__$1 = this;
return self__.meta29347;
}));

(com.rpl.specter.t_com$rpl$specter29346.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29346.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28329__auto__,vals__28330__auto__,structure,next_fn__28331__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return next_fn__28331__auto__.call(null,cljs.core.conj.call(null,vals__28330__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter29346.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28329__auto__,vals__28330__auto__,structure,next_fn__28331__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return next_fn__28331__auto__.call(null,cljs.core.conj.call(null,vals__28330__auto__,structure),structure);
}));

(com.rpl.specter.t_com$rpl$specter29346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29347","meta29347",-1163019098,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29346.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29346.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29346");

(com.rpl.specter.t_com$rpl$specter29346.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29346");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29346.
 */
com.rpl.specter.__GT_t_com$rpl$specter29346 = (function com$rpl$specter$__GT_t_com$rpl$specter29346(meta29347){
return (new com.rpl.specter.t_com$rpl$specter29346(meta29347));
});

}

return (new com.rpl.specter.t_com$rpl$specter29346(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last);
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first);


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,end_index_fn,structure,s),next_fn);
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29349 = (function (start_index_fn,end_index_fn,meta29350){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta29350 = meta29350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29351,meta29350__$1){
var self__ = this;
var _29351__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29349(self__.start_index_fn,self__.end_index_fn,meta29350__$1));
}));

(com.rpl.specter.t_com$rpl$specter29349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29351){
var self__ = this;
var _29351__$1 = this;
return self__.meta29350;
}));

(com.rpl.specter.t_com$rpl$specter29349.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29349.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_select.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29349.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var s = self__.start_index_fn.call(null,structure);
return com.rpl.specter.navs.srange_transform.call(null,structure,s,com.rpl.specter.navs.invoke_end_fn.call(null,self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta29350","meta29350",-675354350,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29349.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29349.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29349");

(com.rpl.specter.t_com$rpl$specter29349.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29349");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29349.
 */
com.rpl.specter.__GT_t_com$rpl$specter29349 = (function com$rpl$specter$__GT_t_com$rpl$specter29349(start_index_fn__$1,end_index_fn__$1,meta29350){
return (new com.rpl.specter.t_com$rpl$specter29349(start_index_fn__$1,end_index_fn__$1,meta29350));
});

}

return (new com.rpl.specter.t_com$rpl$specter29349(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn);
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29352 = (function (start,end,meta29353){
this.start = start;
this.end = end;
this.meta29353 = meta29353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29354,meta29353__$1){
var self__ = this;
var _29354__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29352(self__.start,self__.end,meta29353__$1));
}));

(com.rpl.specter.t_com$rpl$specter29352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29354){
var self__ = this;
var _29354__$1 = this;
return self__.meta29353;
}));

(com.rpl.specter.t_com$rpl$specter29352.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29352.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29352.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta29353","meta29353",-300816740,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29352.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29352.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29352");

(com.rpl.specter.t_com$rpl$specter29352.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29352");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29352.
 */
com.rpl.specter.__GT_t_com$rpl$specter29352 = (function com$rpl$specter$__GT_t_com$rpl$specter29352(start__$1,end__$1,meta29353){
return (new com.rpl.specter.t_com$rpl$specter29352(start__$1,end__$1,meta29353));
});

}

return (new com.rpl.specter.t_com$rpl$specter29352(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__25429__auto__,p__29355){
var vec__29356 = p__29355;
var s = cljs.core.nth.call(null,vec__29356,(0),null);
var e = cljs.core.nth.call(null,vec__29356,(1),null);
var ret__25430__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29359 = (function (pred,meta29360){
this.pred = pred;
this.meta29360 = meta29360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29361,meta29360__$1){
var self__ = this;
var _29361__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29359(self__.pred,meta29360__$1));
}));

(com.rpl.specter.t_com$rpl$specter29359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29361){
var self__ = this;
var _29361__$1 = this;
return self__.meta29360;
}));

(com.rpl.specter.t_com$rpl$specter29359.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29359.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return cljs.core.reduce.call(null,(function (curr__25429__auto__,p__29362){
var vec__29363 = p__29362;
var s = cljs.core.nth.call(null,vec__29363,(0),null);
var e = cljs.core.nth.call(null,vec__29363,(1),null);
var ret__25430__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter29359.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta29360","meta29360",1842940979,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29359.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29359.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29359");

(com.rpl.specter.t_com$rpl$specter29359.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29359");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29359.
 */
com.rpl.specter.__GT_t_com$rpl$specter29359 = (function com$rpl$specter$__GT_t_com$rpl$specter29359(pred__$1,meta29360){
return (new com.rpl.specter.t_com$rpl$specter29359(pred__$1,meta29360));
});

}

return (new com.rpl.specter.t_com$rpl$specter29359(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29366 = (function (meta29367){
this.meta29367 = meta29367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29368,meta29367__$1){
var self__ = this;
var _29368__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29366(meta29367__$1));
}));

(com.rpl.specter.t_com$rpl$specter29366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29368){
var self__ = this;
var _29368__$1 = this;
return self__.meta29367;
}));

(com.rpl.specter.t_com$rpl$specter29366.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29366.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter29366.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,"")),structure].join('');
} else {
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter29366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29367","meta29367",1143968115,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29366.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29366.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29366");

(com.rpl.specter.t_com$rpl$specter29366.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29366");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29366.
 */
com.rpl.specter.__GT_t_com$rpl$specter29366 = (function com$rpl$specter$__GT_t_com$rpl$specter29366(meta29367){
return (new com.rpl.specter.t_com$rpl$specter29366(meta29367));
});

}

return (new com.rpl.specter.t_com$rpl$specter29366(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29369 = (function (meta29370){
this.meta29370 = meta29370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29371,meta29370__$1){
var self__ = this;
var _29371__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29369(meta29370__$1));
}));

(com.rpl.specter.t_com$rpl$specter29369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29371){
var self__ = this;
var _29371__$1 = this;
return self__.meta29370;
}));

(com.rpl.specter.t_com$rpl$specter29369.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29369.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter29369.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn.call(null,""))].join('');
} else {
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter29369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29370","meta29370",-94849514,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29369.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29369.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29369");

(com.rpl.specter.t_com$rpl$specter29369.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29369");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29369.
 */
com.rpl.specter.__GT_t_com$rpl$specter29369 = (function com$rpl$specter$__GT_t_com$rpl$specter29369(meta29370){
return (new com.rpl.specter.t_com$rpl$specter29369(meta29370));
});

}

return (new com.rpl.specter.t_com$rpl$specter29369(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29372 = (function (meta29373){
this.meta29373 = meta29373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29374,meta29373__$1){
var self__ = this;
var _29374__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29372(meta29373__$1));
}));

(com.rpl.specter.t_com$rpl$specter29372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29374){
var self__ = this;
var _29374__$1 = this;
return self__.meta29373;
}));

(com.rpl.specter.t_com$rpl$specter29372.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29372.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter29372.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.call(null,structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter29372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29373","meta29373",96825082,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29372.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29372.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29372");

(com.rpl.specter.t_com$rpl$specter29372.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29372");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29372.
 */
com.rpl.specter.__GT_t_com$rpl$specter29372 = (function com$rpl$specter$__GT_t_com$rpl$specter29372(meta29373){
return (new com.rpl.specter.t_com$rpl$specter29372(meta29373));
});

}

return (new com.rpl.specter.t_com$rpl$specter29372(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29375 = (function (meta29376){
this.meta29376 = meta29376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29377,meta29376__$1){
var self__ = this;
var _29377__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29375(meta29376__$1));
}));

(com.rpl.specter.t_com$rpl$specter29375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29377){
var self__ = this;
var _29377__$1 = this;
return self__.meta29376;
}));

(com.rpl.specter.t_com$rpl$specter29375.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29375.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter29375.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter29375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29376","meta29376",878106469,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29375.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29375.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29375");

(com.rpl.specter.t_com$rpl$specter29375.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29375");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29375.
 */
com.rpl.specter.__GT_t_com$rpl$specter29375 = (function com$rpl$specter$__GT_t_com$rpl$specter29375(meta29376){
return (new com.rpl.specter.t_com$rpl$specter29375(meta29376));
});

}

return (new com.rpl.specter.t_com$rpl$specter29375(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return next_fn.call(null,com.rpl.specter.NONE);
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29378 = (function (meta29379){
this.meta29379 = meta29379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29380,meta29379__$1){
var self__ = this;
var _29380__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29378(meta29379__$1));
}));

(com.rpl.specter.t_com$rpl$specter29378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29380){
var self__ = this;
var _29380__$1 = this;
return self__.meta29379;
}));

(com.rpl.specter.t_com$rpl$specter29378.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29378.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter29378.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var newe = next_fn.call(null,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one.call(null,structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter29378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29379","meta29379",1823023570,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29378.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29378.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29378");

(com.rpl.specter.t_com$rpl$specter29378.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29378");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29378.
 */
com.rpl.specter.__GT_t_com$rpl$specter29378 = (function com$rpl$specter$__GT_t_com$rpl$specter29378(meta29379){
return (new com.rpl.specter.t_com$rpl$specter29378(meta29379));
});

}

return (new com.rpl.specter.t_com$rpl$specter29378(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj.call(null,(function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29381 = (function (aset,meta29382){
this.aset = aset;
this.meta29382 = meta29382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29383,meta29382__$1){
var self__ = this;
var _29383__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29381(self__.aset,meta29382__$1));
}));

(com.rpl.specter.t_com$rpl$specter29381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29383){
var self__ = this;
var _29383__$1 = this;
return self__.meta29382;
}));

(com.rpl.specter.t_com$rpl$specter29381.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29381.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter29381.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter29381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta29382","meta29382",-1935602491,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29381.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29381.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29381");

(com.rpl.specter.t_com$rpl$specter29381.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29381");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29381.
 */
com.rpl.specter.__GT_t_com$rpl$specter29381 = (function com$rpl$specter$__GT_t_com$rpl$specter29381(aset__$1,meta29382){
return (new com.rpl.specter.t_com$rpl$specter29381(aset__$1,meta29382));
});

}

return (new com.rpl.specter.t_com$rpl$specter29381(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj.call(null,(function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29384 = (function (m_keys,meta29385){
this.m_keys = m_keys;
this.meta29385 = meta29385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29386,meta29385__$1){
var self__ = this;
var _29386__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29384(self__.m_keys,meta29385__$1));
}));

(com.rpl.specter.t_com$rpl$specter29384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29386){
var self__ = this;
var _29386__$1 = this;
return self__.meta29385;
}));

(com.rpl.specter.t_com$rpl$specter29384.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29384.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter29384.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
}));

(com.rpl.specter.t_com$rpl$specter29384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta29385","meta29385",-1402289563,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29384.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29384.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29384");

(com.rpl.specter.t_com$rpl$specter29384.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29384");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29384.
 */
com.rpl.specter.__GT_t_com$rpl$specter29384 = (function com$rpl$specter$__GT_t_com$rpl$specter29384(m_keys__$1,meta29385){
return (new com.rpl.specter.t_com$rpl$specter29384(m_keys__$1,meta29385));
});

}

return (new com.rpl.specter.t_com$rpl$specter29384(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29390__delegate = function (path){
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29387 = (function (path,late,meta29388){
this.path = path;
this.late = late;
this.meta29388 = meta29388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29389,meta29388__$1){
var self__ = this;
var _29389__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29387(self__.path,self__.late,meta29388__$1));
}));

(com.rpl.specter.t_com$rpl$specter29387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29389){
var self__ = this;
var _29389__$1 = this;
return self__.meta29388;
}));

(com.rpl.specter.t_com$rpl$specter29387.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29387.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
}));

(com.rpl.specter.t_com$rpl$specter29387.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.seq.call(null,transformed));
return com.rpl.specter.compiled_transform.call(null,self__.late,(function (_){
var vs = com.rpl.specter.impl.get_cell.call(null,values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.next);

return cljs.core.first.call(null,vs);
} else {
return com.rpl.specter.NONE;
}
}),structure);
}));

(com.rpl.specter.t_com$rpl$specter29387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29388","meta29388",-761031657,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29387.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29387.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29387");

(com.rpl.specter.t_com$rpl$specter29387.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29387");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29387.
 */
com.rpl.specter.__GT_t_com$rpl$specter29387 = (function com$rpl$specter$__GT_t_com$rpl$specter29387(path__$1,late__$1,meta29388){
return (new com.rpl.specter.t_com$rpl$specter29387(path__$1,late__$1,meta29388));
});

}

return (new com.rpl.specter.t_com$rpl$specter29387(path,late,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
};
var G__29390 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29391__i = 0, G__29391__a = new Array(arguments.length -  0);
while (G__29391__i < G__29391__a.length) {G__29391__a[G__29391__i] = arguments[G__29391__i + 0]; ++G__29391__i;}
  path = new cljs.core.IndexedSeq(G__29391__a,0,null);
} 
return G__29390__delegate.call(this,path);};
G__29390.cljs$lang$maxFixedArity = 0;
G__29390.cljs$lang$applyTo = (function (arglist__29392){
var path = cljs.core.seq(arglist__29392);
return G__29390__delegate(path);
});
G__29390.cljs$core$IFn$_invoke$arity$variadic = G__29390__delegate;
return G__29390;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29393 = (function (key,meta29394){
this.key = key;
this.meta29394 = meta29394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29395,meta29394__$1){
var self__ = this;
var _29395__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29393(self__.key,meta29394__$1));
}));

(com.rpl.specter.t_com$rpl$specter29393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29395){
var self__ = this;
var _29395__$1 = this;
return self__.meta29394;
}));

(com.rpl.specter.t_com$rpl$specter29393.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29393.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
return next_fn.call(null,vals,self__.key);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter29393.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.key)){
var newkey = next_fn.call(null,vals,self__.key);
var dissoced = cljs.core.dissoc.call(null,structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.call(null,dissoced,newkey,cljs.core.get.call(null,structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter29393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta29394","meta29394",-379267409,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29393.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29393.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29393");

(com.rpl.specter.t_com$rpl$specter29393.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29393");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29393.
 */
com.rpl.specter.__GT_t_com$rpl$specter29393 = (function com$rpl$specter$__GT_t_com$rpl$specter29393(key__$1,meta29394){
return (new com.rpl.specter.t_com$rpl$specter29393(key__$1,meta29394));
});

}

return (new com.rpl.specter.t_com$rpl$specter29393(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj.call(null,(function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29396 = (function (elem,meta29397){
this.elem = elem;
this.meta29397 = meta29397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29398,meta29397__$1){
var self__ = this;
var _29398__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29396(self__.elem,meta29397__$1));
}));

(com.rpl.specter.t_com$rpl$specter29396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29398){
var self__ = this;
var _29398__$1 = this;
return self__.meta29397;
}));

(com.rpl.specter.t_com$rpl$specter29396.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29396.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
return next_fn.call(null,vals,self__.elem);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter29396.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.elem)){
var newelem = next_fn.call(null,vals,self__.elem);
var removed = cljs.core.disj.call(null,structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.call(null,removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter29396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta29397","meta29397",-1456031012,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29396.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29396.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29396");

(com.rpl.specter.t_com$rpl$specter29396.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29396");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29396.
 */
com.rpl.specter.__GT_t_com$rpl$specter29396 = (function com$rpl$specter$__GT_t_com$rpl$specter29396(elem__$1,meta29397){
return (new com.rpl.specter.t_com$rpl$specter29396(elem__$1,meta29397));
});

}

return (new com.rpl.specter.t_com$rpl$specter29396(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_);
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj.call(null,(function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29399 = (function (index,meta29400){
this.index = index;
this.meta29400 = meta29400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29401,meta29400__$1){
var self__ = this;
var _29401__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29399(self__.index,meta29400__$1));
}));

(com.rpl.specter.t_com$rpl$specter29399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29401){
var self__ = this;
var _29401__$1 = this;
return self__.meta29400;
}));

(com.rpl.specter.t_com$rpl$specter29399.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29399.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter29399.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = next_fn.call(null,vals,com.rpl.specter.NONE);
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx.call(null,structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter29399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta29400","meta29400",-188951478,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29399.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29399.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29399");

(com.rpl.specter.t_com$rpl$specter29399.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29399");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29399.
 */
com.rpl.specter.__GT_t_com$rpl$specter29399 = (function com$rpl$specter$__GT_t_com$rpl$specter29399(index__$1,meta29400){
return (new com.rpl.specter.t_com$rpl$specter29399(index__$1,meta29400));
});

}

return (new com.rpl.specter.t_com$rpl$specter29399(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29402 = (function (i,meta29403){
this.i = i;
this.meta29403 = meta29403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29404,meta29403__$1){
var self__ = this;
var _29404__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29402(self__.i,meta29403__$1));
}));

(com.rpl.specter.t_com$rpl$specter29402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29404){
var self__ = this;
var _29404__$1 = this;
return self__.meta29403;
}));

(com.rpl.specter.t_com$rpl$specter29402.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29402.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
return next_fn.call(null,vals,self__.i);
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter29402.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count.call(null,structure))))){
var newi = next_fn.call(null,vals,self__.i);
if(cljs.core._EQ_.call(null,newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.call(null,structure,self__.i);
if(cljs.core.vector_QMARK_.call(null,structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__29411 = (j - (1));
var G__29412 = cljs.core.assoc.call(null,s,(j + (1)),cljs.core.nth.call(null,s,j));
j = G__29411;
s = G__29412;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__29413 = (j + (1));
var G__29414 = cljs.core.assoc.call(null,s,(j - (1)),cljs.core.nth.call(null,s,j));
j = G__29413;
s = G__29414;
continue;
}
break;
}
})());
return cljs.core.assoc.call(null,shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29405;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29406 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",15,1,1004,1007,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache29405 = info29406;

return info29406;
})():info__28339__auto__);
var precompiled29407 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29407.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null));
} else {
return precompiled29407;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29408;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29409 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache29408 = info29409;

return info29409;
})():info__28339__auto__);
var precompiled29410 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29410.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null));
} else {
return precompiled29410;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter29402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta29403","meta29403",-993618347,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29402.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29402.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29402");

(com.rpl.specter.t_com$rpl$specter29402.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29402");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29402.
 */
com.rpl.specter.__GT_t_com$rpl$specter29402 = (function com$rpl$specter$__GT_t_com$rpl$specter29402(i__$1,meta29403){
return (new com.rpl.specter.t_com$rpl$specter29402(i__$1,meta29403));
});

}

return (new com.rpl.specter.t_com$rpl$specter29402(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.call(null,(start - (1)));
return cljs.core.reduce.call(null,(function (curr__25429__auto__,e){
var ret__25430__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__29417 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__29417,(0),null);
var newe = cljs.core.nth.call(null,vec__29417,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29420;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29421 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__29415_SHARP_){
return (p1__29415_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__29416_SHARP_){
return (p1__29416_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache29420 = info29421;

return info29421;
})():info__28339__auto__);
var precompiled29422 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29422.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__29415_SHARP_){
return (p1__29415_SHARP_ >= (curri + (1)));
}),(function (p1__29416_SHARP_){
return (p1__29416_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__29415_SHARP_){
return (p1__29415_SHARP_ >= (curri + (1)));
}),(function (p1__29416_SHARP_){
return (p1__29416_SHARP_ <= newi);
})], null));
} else {
return precompiled29422;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29423;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29424 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache29423 = info29424;

return info29424;
})():info__28339__auto__);
var precompiled29425 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29425.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled29425;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29426;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29427 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache29426 = info29427;

return info29427;
})():info__28339__auto__);
var precompiled29428 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29428.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled29428;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29429 = (function (start,meta29430){
this.start = start;
this.meta29430 = meta29430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29431,meta29430__$1){
var self__ = this;
var _29431__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29429(self__.start,meta29430__$1));
}));

(com.rpl.specter.t_com$rpl$specter29429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29431){
var self__ = this;
var _29431__$1 = this;
return self__.meta29430;
}));

(com.rpl.specter.t_com$rpl$specter29429.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29429.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var i = com.rpl.specter.impl.mutable_cell.call(null,(self__.start - (1)));
return cljs.core.reduce.call(null,(function (curr__25429__auto__,e){
var ret__25430__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_.call(null,i,cljs.core.inc);

return next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell.call(null,i),e], null));
})()
;
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter29429.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var indices = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.range.call(null,cljs.core.count.call(null,structure)));
return cljs.core.reduce.call(null,(function (s,e){
var curri = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,indices));
var vec__29432 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.call(null,vec__29432,(0),null);
var newe = cljs.core.nth.call(null,vec__29432,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_.call(null,indices,(function (ii){
var ii2 = cljs.core.next.call(null,ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29435;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29436 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__29415_SHARP_){
return (p1__29415_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__29416_SHARP_){
return (p1__29416_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__29415#","p1__29415#",-723530103,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__29416#","p1__29416#",459093380,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache29435 = info29436;

return info29436;
})():info__28339__auto__);
var precompiled29437 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29437.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__29415_SHARP_){
return (p1__29415_SHARP_ >= (curri + (1)));
}),(function (p1__29416_SHARP_){
return (p1__29416_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__29415_SHARP_){
return (p1__29415_SHARP_ >= (curri + (1)));
}),(function (p1__29416_SHARP_){
return (p1__29416_SHARP_ <= newi);
})], null));
} else {
return precompiled29437;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29438;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29439 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache29438 = info29439;

return info29439;
})():info__28339__auto__);
var precompiled29440 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29440.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null));
} else {
return precompiled29440;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29441;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29442 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache29441 = info29442;

return info29442;
})():info__28339__auto__);
var precompiled29443 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29443.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null));
} else {
return precompiled29443;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter29429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta29430","meta29430",-481701148,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29429.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29429.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29429");

(com.rpl.specter.t_com$rpl$specter29429.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29429");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29429.
 */
com.rpl.specter.__GT_t_com$rpl$specter29429 = (function com$rpl$specter$__GT_t_com$rpl$specter29429(start__$1,meta29430){
return (new com.rpl.specter.t_com$rpl$specter29429(start__$1,meta29430));
});

}

return (new com.rpl.specter.t_com$rpl$specter29429(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = com.rpl.specter.indexed_vals.call(null,(0));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29444 = (function (afn,meta29445){
this.afn = afn;
this.meta29445 = meta29445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29446,meta29445__$1){
var self__ = this;
var _29446__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29444(self__.afn,meta29445__$1));
}));

(com.rpl.specter.t_com$rpl$specter29444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29446){
var self__ = this;
var _29446__$1 = this;
return self__.meta29445;
}));

(com.rpl.specter.t_com$rpl$specter29444.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29444.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29444.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta29445","meta29445",-2105825355,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29444.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29444.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29444");

(com.rpl.specter.t_com$rpl$specter29444.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29444");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29444.
 */
com.rpl.specter.__GT_t_com$rpl$specter29444 = (function com$rpl$specter$__GT_t_com$rpl$specter29444(afn__$1,meta29445){
return (new com.rpl.specter.t_com$rpl$specter29444(afn__$1,meta29445));
});

}

return (new com.rpl.specter.t_com$rpl$specter29444(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
return next_fn.call(null,parse_fn.call(null,structure));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj.call(null,(function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29447 = (function (parse_fn,unparse_fn,meta29448){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta29448 = meta29448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29449,meta29448__$1){
var self__ = this;
var _29449__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29447(self__.parse_fn,self__.unparse_fn,meta29448__$1));
}));

(com.rpl.specter.t_com$rpl$specter29447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29449){
var self__ = this;
var _29449__$1 = this;
return self__.meta29448;
}));

(com.rpl.specter.t_com$rpl$specter29447.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29447.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,self__.parse_fn.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29447.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter29447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta29448","meta29448",-2095640756,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29447.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29447.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29447");

(com.rpl.specter.t_com$rpl$specter29447.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29447");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29447.
 */
com.rpl.specter.__GT_t_com$rpl$specter29447 = (function com$rpl$specter$__GT_t_com$rpl$specter29447(parse_fn__$1,unparse_fn__$1,meta29448){
return (new com.rpl.specter.t_com$rpl$specter29447(parse_fn__$1,unparse_fn__$1,meta29448));
});

}

return (new com.rpl.specter.t_com$rpl$specter29447(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29450 = (function (meta29451){
this.meta29451 = meta29451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29452,meta29451__$1){
var self__ = this;
var _29452__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29450(meta29451__$1));
}));

(com.rpl.specter.t_com$rpl$specter29450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29452){
var self__ = this;
var _29452__$1 = this;
return self__.meta29451;
}));

(com.rpl.specter.t_com$rpl$specter29450.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29450.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,cljs.core.deref.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29450.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter29450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29451","meta29451",-760439190,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29450.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29450.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29450");

(com.rpl.specter.t_com$rpl$specter29450.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29450");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29450.
 */
com.rpl.specter.__GT_t_com$rpl$specter29450 = (function com$rpl$specter$__GT_t_com$rpl$specter29450(meta29451){
return (new com.rpl.specter.t_com$rpl$specter29450(meta29451));
});

}

return (new com.rpl.specter.t_com$rpl$specter29450(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__25429__auto__,s){
var ret__25430__auto__ = next_fn.call(null,s);
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace.call(null,structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj.call(null,(function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29453 = (function (re,meta29454){
this.re = re;
this.meta29454 = meta29454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29455,meta29454__$1){
var self__ = this;
var _29455__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29453(self__.re,meta29454__$1));
}));

(com.rpl.specter.t_com$rpl$specter29453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29455){
var self__ = this;
var _29455__$1 = this;
return self__.meta29454;
}));

(com.rpl.specter.t_com$rpl$specter29453.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29453.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return cljs.core.reduce.call(null,(function (curr__25429__auto__,s){
var ret__25430__auto__ = next_fn.call(null,s);
if((ret__25430__auto__ === com.rpl.specter.NONE)){
return curr__25429__auto__;
} else {
if(cljs.core.reduced_QMARK_.call(null,ret__25430__auto__)){
return cljs.core.reduced.call(null,ret__25430__auto__);
} else {
return ret__25430__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq.call(null,self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter29453.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return clojure.string.replace.call(null,structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta29454","meta29454",206161266,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29453.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29453.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29453");

(com.rpl.specter.t_com$rpl$specter29453.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29453");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29453.
 */
com.rpl.specter.__GT_t_com$rpl$specter29453 = (function com$rpl$specter$__GT_t_com$rpl$specter29453(re__$1,meta29454){
return (new com.rpl.specter.t_com$rpl$specter29453(re__$1,meta29454));
});

}

return (new com.rpl.specter.t_com$rpl$specter29453(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29461__delegate = function (path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
return afn;
} else {
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29458 = (function (path,temp__5718__auto__,late,meta29459){
this.path = path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late = late;
this.meta29459 = meta29459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29460,meta29459__$1){
var self__ = this;
var _29460__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29458(self__.path,self__.temp__5718__auto__,self__.late,meta29459__$1));
}));

(com.rpl.specter.t_com$rpl$specter29458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29460){
var self__ = this;
var _29460__$1 = this;
return self__.meta29459;
}));

(com.rpl.specter.t_com$rpl$specter29458.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29458.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__29456_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__29456_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29458.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__29457_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,vals,p1__29457_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29459","meta29459",-1037661964,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29458.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29458.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29458");

(com.rpl.specter.t_com$rpl$specter29458.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29458");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29458.
 */
com.rpl.specter.__GT_t_com$rpl$specter29458 = (function com$rpl$specter$__GT_t_com$rpl$specter29458(path__$1,temp__5718__auto____$1,late__$1,meta29459){
return (new com.rpl.specter.t_com$rpl$specter29458(path__$1,temp__5718__auto____$1,late__$1,meta29459));
});

}

return (new com.rpl.specter.t_com$rpl$specter29458(path,temp__5718__auto__,late,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
}
};
var G__29461 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29462__i = 0, G__29462__a = new Array(arguments.length -  0);
while (G__29462__i < G__29462__a.length) {G__29462__a[G__29462__i] = arguments[G__29462__i + 0]; ++G__29462__i;}
  path = new cljs.core.IndexedSeq(G__29462__a,0,null);
} 
return G__29461__delegate.call(this,path);};
G__29461.cljs$lang$maxFixedArity = 0;
G__29461.cljs$lang$applyTo = (function (arglist__29463){
var path = cljs.core.seq(arglist__29463);
return G__29461__delegate(path);
});
G__29461.cljs$core$IFn$_invoke$arity$variadic = G__29461__delegate;
return G__29461;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29469__delegate = function (path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
} else {
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29466 = (function (path,temp__5718__auto__,late,meta29467){
this.path = path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late = late;
this.meta29467 = meta29467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29468,meta29467__$1){
var self__ = this;
var _29468__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29466(self__.path,self__.temp__5718__auto__,self__.late,meta29467__$1));
}));

(com.rpl.specter.t_com$rpl$specter29466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29468){
var self__ = this;
var _29468__$1 = this;
return self__.meta29467;
}));

(com.rpl.specter.t_com$rpl$specter29466.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29466.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,(function (p1__29464_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__29464_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29466.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,(function (p1__29465_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,vals,p1__29465_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29467","meta29467",2043052421,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29466.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29466.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29466");

(com.rpl.specter.t_com$rpl$specter29466.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29466");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29466.
 */
com.rpl.specter.__GT_t_com$rpl$specter29466 = (function com$rpl$specter$__GT_t_com$rpl$specter29466(path__$1,temp__5718__auto____$1,late__$1,meta29467){
return (new com.rpl.specter.t_com$rpl$specter29466(path__$1,temp__5718__auto____$1,late__$1,meta29467));
});

}

return (new com.rpl.specter.t_com$rpl$specter29466(path,temp__5718__auto__,late,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
}
};
var G__29469 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29470__i = 0, G__29470__a = new Array(arguments.length -  0);
while (G__29470__i < G__29470__a.length) {G__29470__a[G__29470__i] = arguments[G__29470__i + 0]; ++G__29470__i;}
  path = new cljs.core.IndexedSeq(G__29470__a,0,null);
} 
return G__29469__delegate.call(this,path);};
G__29469.cljs$lang$maxFixedArity = 0;
G__29469.cljs$lang$applyTo = (function (arglist__29471){
var path = cljs.core.seq(arglist__29471);
return G__29469__delegate(path);
});
G__29469.cljs$core$IFn$_invoke$arity$variadic = G__29469__delegate;
return G__29469;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29472__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__29472 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29473__i = 0, G__29473__a = new Array(arguments.length -  0);
while (G__29473__i < G__29473__a.length) {G__29473__a[G__29473__i] = arguments[G__29473__i + 0]; ++G__29473__i;}
  path = new cljs.core.IndexedSeq(G__29473__a,0,null);
} 
return G__29472__delegate.call(this,path);};
G__29472.cljs$lang$maxFixedArity = 0;
G__29472.cljs$lang$applyTo = (function (arglist__29474){
var path = cljs.core.seq(arglist__29474);
return G__29472__delegate(path);
});
G__29472.cljs$core$IFn$_invoke$arity$variadic = G__29472__delegate;
return G__29472;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,update_fn){
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29475 = (function (path,update_fn,late,late_fn,meta29476){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta29476 = meta29476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29477,meta29476__$1){
var self__ = this;
var _29477__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29475(self__.path,self__.update_fn,self__.late,self__.late_fn,meta29476__$1));
}));

(com.rpl.specter.t_com$rpl$specter29475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29477){
var self__ = this;
var _29477__$1 = this;
return self__.meta29476;
}));

(com.rpl.specter.t_com$rpl$specter29475.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29475.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter29475.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
}));

(com.rpl.specter.t_com$rpl$specter29475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta29476","meta29476",-1993042491,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29475.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29475.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29475");

(com.rpl.specter.t_com$rpl$specter29475.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29475");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29475.
 */
com.rpl.specter.__GT_t_com$rpl$specter29475 = (function com$rpl$specter$__GT_t_com$rpl$specter29475(path__$1,update_fn__$1,late__$1,late_fn__$1,meta29476){
return (new com.rpl.specter.t_com$rpl$specter29475(path__$1,update_fn__$1,late__$1,late_fn__$1,meta29476));
});

}

return (new com.rpl.specter.t_com$rpl$specter29475(path,update_fn,late,late_fn,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function (path,reduce_fn){
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29478 = (function (path,reduce_fn,late,late_fn,meta29479){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta29479 = meta29479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29480,meta29479__$1){
var self__ = this;
var _29480__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29478(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta29479__$1));
}));

(com.rpl.specter.t_com$rpl$specter29478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29480){
var self__ = this;
var _29480__$1 = this;
return self__.meta29479;
}));

(com.rpl.specter.t_com$rpl$specter29478.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29478.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter29478.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter29478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta29479","meta29479",1557330551,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29478.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29478.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29478");

(com.rpl.specter.t_com$rpl$specter29478.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29478");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29478.
 */
com.rpl.specter.__GT_t_com$rpl$specter29478 = (function com$rpl$specter$__GT_t_com$rpl$specter29478(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta29479){
return (new com.rpl.specter.t_com$rpl$specter29478(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta29479));
});

}

return (new com.rpl.specter.t_com$rpl$specter29478(path,reduce_fn,late,late_fn,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__29481_SHARP_){
return cljs.core._EQ_.call(null,p1__29481_SHARP_,v);
}));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
return com.rpl.specter.pred.call(null,(function (p1__29482_SHARP_){
return (p1__29482_SHARP_ < v);
}));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
return com.rpl.specter.pred.call(null,(function (p1__29483_SHARP_){
return (p1__29483_SHARP_ > v);
}));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__29484_SHARP_){
return (p1__29484_SHARP_ <= v);
}));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
return com.rpl.specter.pred.call(null,(function (p1__29485_SHARP_){
return (p1__29485_SHARP_ >= v);
}));
});
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
(com.rpl.specter.protocols.ImplicitNav["string"] = true);

(com.rpl.specter.protocols.implicit_nav["string"] = (function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
(com.rpl.specter.protocols.ImplicitNav["number"] = true);

(com.rpl.specter.protocols.implicit_nav["number"] = (function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
}));
(com.rpl.specter.protocols.ImplicitNav["boolean"] = true);

(com.rpl.specter.protocols.implicit_nav["boolean"] = (function (this$){
return com.rpl.specter.navs.keypath_STAR_.call(null,this$);
}));
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return com.rpl.specter.pred.call(null,this$);
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.pred.call(null,this$__$1);
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.regex_nav.call(null,this$__$1);
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj.call(null,(function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29486 = (function (v,meta29487){
this.v = v;
this.meta29487 = meta29487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29488,meta29487__$1){
var self__ = this;
var _29488__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29486(self__.v,meta29487__$1));
}));

(com.rpl.specter.t_com$rpl$specter29486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29488){
var self__ = this;
var _29488__$1 = this;
return self__.meta29487;
}));

(com.rpl.specter.t_com$rpl$specter29486.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29486.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter29486.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,(((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter29486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta29487","meta29487",1684984506,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29486.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29486.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29486");

(com.rpl.specter.t_com$rpl$specter29486.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29486");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29486.
 */
com.rpl.specter.__GT_t_com$rpl$specter29486 = (function com$rpl$specter$__GT_t_com$rpl$specter29486(v__$1,meta29487){
return (new com.rpl.specter.t_com$rpl$specter29486(v__$1,meta29487));
});

}

return (new com.rpl.specter.t_com$rpl$specter29486(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29489 = (function (meta29490){
this.meta29490 = meta29490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29491,meta29490__$1){
var self__ = this;
var _29491__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29489(meta29490__$1));
}));

(com.rpl.specter.t_com$rpl$specter29489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29491){
var self__ = this;
var _29491__$1 = this;
return self__.meta29490;
}));

(com.rpl.specter.t_com$rpl$specter29489.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29489.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,cljs.core.meta.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29489.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter29489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29490","meta29490",-2078195170,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29489.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29489.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29489");

(com.rpl.specter.t_com$rpl$specter29489.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29489");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29489.
 */
com.rpl.specter.__GT_t_com$rpl$specter29489 = (function com$rpl$specter$__GT_t_com$rpl$specter29489(meta29490){
return (new com.rpl.specter.t_com$rpl$specter29489(meta29490));
});

}

return (new com.rpl.specter.t_com$rpl$specter29489(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.name.call(null,structure));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
throw cljs.core.ex_info.call(null,"NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29492 = (function (meta29493){
this.meta29493 = meta29493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29494,meta29493__$1){
var self__ = this;
var _29494__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29492(meta29493__$1));
}));

(com.rpl.specter.t_com$rpl$specter29492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29494){
var self__ = this;
var _29494__$1 = this;
return self__.meta29493;
}));

(com.rpl.specter.t_com$rpl$specter29492.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29492.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,cljs.core.name.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29492.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var new_name = next_fn.call(null,cljs.core.name.call(null,structure));
var ns = cljs.core.namespace.call(null,structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ns,new_name);
} else {
throw cljs.core.ex_info.call(null,"NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter29492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29493","meta29493",-1054299505,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29492.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29492.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29492");

(com.rpl.specter.t_com$rpl$specter29492.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29492");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29492.
 */
com.rpl.specter.__GT_t_com$rpl$specter29492 = (function com$rpl$specter$__GT_t_com$rpl$specter29492(meta29493){
return (new com.rpl.specter.t_com$rpl$specter29492(meta29493));
});

}

return (new com.rpl.specter.t_com$rpl$specter29492(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.namespace.call(null,structure));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
throw cljs.core.ex_info.call(null,"NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29495 = (function (meta29496){
this.meta29496 = meta29496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29497,meta29496__$1){
var self__ = this;
var _29497__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29495(meta29496__$1));
}));

(com.rpl.specter.t_com$rpl$specter29495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29497){
var self__ = this;
var _29497__$1 = this;
return self__.meta29496;
}));

(com.rpl.specter.t_com$rpl$specter29495.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29495.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
return next_fn.call(null,cljs.core.namespace.call(null,structure));
}));

(com.rpl.specter.t_com$rpl$specter29495.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__27489__auto__,vals__27490__auto__,structure,next_fn__27491__auto__){
var self__ = this;
var this__27489__auto____$1 = this;
var next_fn = (function (s__27492__auto__){
return next_fn__27491__auto__.call(null,vals__27490__auto__,s__27492__auto__);
});
var name = cljs.core.name.call(null,structure);
var new_ns = next_fn.call(null,cljs.core.namespace.call(null,structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,new_ns,name);
} else {
throw cljs.core.ex_info.call(null,"NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter29495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29496","meta29496",522181041,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29495.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29495.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29495");

(com.rpl.specter.t_com$rpl$specter29495.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29495");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29495.
 */
com.rpl.specter.__GT_t_com$rpl$specter29495 = (function com$rpl$specter$__GT_t_com$rpl$specter29495(meta29496){
return (new com.rpl.specter.t_com$rpl$specter29495(meta29496));
});

}

return (new com.rpl.specter.t_com$rpl$specter29495(null));
})()
;
com.rpl.specter.collect = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29501__delegate = function (path){
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29498 = (function (path,late,meta29499){
this.path = path;
this.late = late;
this.meta29499 = meta29499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29500,meta29499__$1){
var self__ = this;
var _29500__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29498(self__.path,self__.late,meta29499__$1));
}));

(com.rpl.specter.t_com$rpl$specter29498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29500){
var self__ = this;
var _29500__$1 = this;
return self__.meta29499;
}));

(com.rpl.specter.t_com$rpl$specter29498.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29498.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28329__auto__,vals__28330__auto__,structure,next_fn__28331__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return next_fn__28331__auto__.call(null,cljs.core.conj.call(null,vals__28330__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter29498.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28329__auto__,vals__28330__auto__,structure,next_fn__28331__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return next_fn__28331__auto__.call(null,cljs.core.conj.call(null,vals__28330__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter29498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29499","meta29499",431398602,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29498.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29498.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29498");

(com.rpl.specter.t_com$rpl$specter29498.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29498");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29498.
 */
com.rpl.specter.__GT_t_com$rpl$specter29498 = (function com$rpl$specter$__GT_t_com$rpl$specter29498(path__$1,late__$1,meta29499){
return (new com.rpl.specter.t_com$rpl$specter29498(path__$1,late__$1,meta29499));
});

}

return (new com.rpl.specter.t_com$rpl$specter29498(path,late,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
};
var G__29501 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29502__i = 0, G__29502__a = new Array(arguments.length -  0);
while (G__29502__i < G__29502__a.length) {G__29502__a[G__29502__i] = arguments[G__29502__i + 0]; ++G__29502__i;}
  path = new cljs.core.IndexedSeq(G__29502__a,0,null);
} 
return G__29501__delegate.call(this,path);};
G__29501.cljs$lang$maxFixedArity = 0;
G__29501.cljs$lang$applyTo = (function (arglist__29503){
var path = cljs.core.seq(arglist__29503);
return G__29501__delegate(path);
});
G__29501.cljs$core$IFn$_invoke$arity$variadic = G__29501__delegate;
return G__29501;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29507__delegate = function (path){
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29504 = (function (path,late,meta29505){
this.path = path;
this.late = late;
this.meta29505 = meta29505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29506,meta29505__$1){
var self__ = this;
var _29506__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29504(self__.path,self__.late,meta29505__$1));
}));

(com.rpl.specter.t_com$rpl$specter29504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29506){
var self__ = this;
var _29506__$1 = this;
return self__.meta29505;
}));

(com.rpl.specter.t_com$rpl$specter29504.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29504.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28329__auto__,vals__28330__auto__,structure,next_fn__28331__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return next_fn__28331__auto__.call(null,cljs.core.conj.call(null,vals__28330__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter29504.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28329__auto__,vals__28330__auto__,structure,next_fn__28331__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return next_fn__28331__auto__.call(null,cljs.core.conj.call(null,vals__28330__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
}));

(com.rpl.specter.t_com$rpl$specter29504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29505","meta29505",1930928215,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29504.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29504.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29504");

(com.rpl.specter.t_com$rpl$specter29504.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29504");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29504.
 */
com.rpl.specter.__GT_t_com$rpl$specter29504 = (function com$rpl$specter$__GT_t_com$rpl$specter29504(path__$1,late__$1,meta29505){
return (new com.rpl.specter.t_com$rpl$specter29504(path__$1,late__$1,meta29505));
});

}

return (new com.rpl.specter.t_com$rpl$specter29504(path,late,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
};
var G__29507 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29508__i = 0, G__29508__a = new Array(arguments.length -  0);
while (G__29508__i < G__29508__a.length) {G__29508__a[G__29508__i] = arguments[G__29508__i + 0]; ++G__29508__i;}
  path = new cljs.core.IndexedSeq(G__29508__a,0,null);
} 
return G__29507__delegate.call(this,path);};
G__29507.cljs$lang$maxFixedArity = 0;
G__29507.cljs$lang$applyTo = (function (arglist__29509){
var path = cljs.core.seq(arglist__29509);
return G__29507__delegate(path);
});
G__29507.cljs$core$IFn$_invoke$arity$variadic = G__29507__delegate;
return G__29507;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj.call(null,(function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29510 = (function (val,meta29511){
this.val = val;
this.meta29511 = meta29511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29512,meta29511__$1){
var self__ = this;
var _29512__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29510(self__.val,meta29511__$1));
}));

(com.rpl.specter.t_com$rpl$specter29510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29512){
var self__ = this;
var _29512__$1 = this;
return self__.meta29511;
}));

(com.rpl.specter.t_com$rpl$specter29510.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29510.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__28329__auto__,vals__28330__auto__,structure,next_fn__28331__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return next_fn__28331__auto__.call(null,cljs.core.conj.call(null,vals__28330__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter29510.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__28329__auto__,vals__28330__auto__,structure,next_fn__28331__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return next_fn__28331__auto__.call(null,cljs.core.conj.call(null,vals__28330__auto__,self__.val),structure);
}));

(com.rpl.specter.t_com$rpl$specter29510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta29511","meta29511",-523172053,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29510.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29510.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29510");

(com.rpl.specter.t_com$rpl$specter29510.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29510");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29510.
 */
com.rpl.specter.__GT_t_com$rpl$specter29510 = (function com$rpl$specter$__GT_t_com$rpl$specter29510(val__$1,meta29511){
return (new com.rpl.specter.t_com$rpl$specter29510(val__$1,meta29511));
});

}

return (new com.rpl.specter.t_com$rpl$specter29510(val,null));
}));
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29518__delegate = function (path){
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29513 = (function (path,late,meta29514){
this.path = path;
this.late = late;
this.meta29514 = meta29514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29515,meta29514__$1){
var self__ = this;
var _29515__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29513(self__.path,self__.late,meta29514__$1));
}));

(com.rpl.specter.t_com$rpl$specter29513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29515){
var self__ = this;
var _29515__$1 = this;
return self__.meta29514;
}));

(com.rpl.specter.t_com$rpl$specter29513.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29513.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter29513.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return next_fn.call(null,vals,structure__$1);
}));
}));

(com.rpl.specter.t_com$rpl$specter29513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta29514","meta29514",-1218310047,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29513.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29513.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29513");

(com.rpl.specter.t_com$rpl$specter29513.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29513");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29513.
 */
com.rpl.specter.__GT_t_com$rpl$specter29513 = (function com$rpl$specter$__GT_t_com$rpl$specter29513(path__$1,late__$1,meta29514){
return (new com.rpl.specter.t_com$rpl$specter29513(path__$1,late__$1,meta29514));
});

}

return (new com.rpl.specter.t_com$rpl$specter29513(path,late,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
};
var G__29518 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29519__i = 0, G__29519__a = new Array(arguments.length -  0);
while (G__29519__i < G__29519__a.length) {G__29519__a[G__29519__i] = arguments[G__29519__i + 0]; ++G__29519__i;}
  path = new cljs.core.IndexedSeq(G__29519__a,0,null);
} 
return G__29518__delegate.call(this,path);};
G__29518.cljs$lang$maxFixedArity = 0;
G__29518.cljs$lang$applyTo = (function (arglist__29520){
var path = cljs.core.seq(arglist__29520);
return G__29518__delegate(path);
});
G__29518.cljs$core$IFn$_invoke$arity$variadic = G__29518__delegate;
return G__29518;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29521 = (function (meta29522){
this.meta29522 = meta29522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29523,meta29522__$1){
var self__ = this;
var _29523__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29521(meta29522__$1));
}));

(com.rpl.specter.t_com$rpl$specter29521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29523){
var self__ = this;
var _29523__$1 = this;
return self__.meta29522;
}));

(com.rpl.specter.t_com$rpl$specter29521.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29521.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter29521.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.t_com$rpl$specter29521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29522","meta29522",-1691712185,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29521.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29521.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29521");

(com.rpl.specter.t_com$rpl$specter29521.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29521");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29521.
 */
com.rpl.specter.__GT_t_com$rpl$specter29521 = (function com$rpl$specter$__GT_t_com$rpl$specter29521(meta29522){
return (new com.rpl.specter.t_com$rpl$specter29521(meta29522));
});

}

return (new com.rpl.specter.t_com$rpl$specter29521(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__29532 = null;
var G__29532__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__29532__3 = (function (cond_p,then_path,else_path){
var temp__5718__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__5718__auto__)){
var afn = temp__5718__auto__;
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29526 = (function (cond_p,then_path,else_path,temp__5718__auto__,afn,late_then,late_else,meta29527){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5718__auto__ = temp__5718__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta29527 = meta29527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29528,meta29527__$1){
var self__ = this;
var _29528__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29526(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5718__auto__,self__.afn,self__.late_then,self__.late_else,meta29527__$1));
}));

(com.rpl.specter.t_com$rpl$specter29526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29528){
var self__ = this;
var _29528__$1 = this;
return self__.meta29527;
}));

(com.rpl.specter.t_com$rpl$specter29526.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29526.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter29526.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter29526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta29527","meta29527",1762592239,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29526.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29526.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29526");

(com.rpl.specter.t_com$rpl$specter29526.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29526");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29526.
 */
com.rpl.specter.__GT_t_com$rpl$specter29526 = (function com$rpl$specter$__GT_t_com$rpl$specter29526(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,afn__$1,late_then__$1,late_else__$1,meta29527){
return (new com.rpl.specter.t_com$rpl$specter29526(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,afn__$1,late_then__$1,late_else__$1,meta29527));
});

}

return (new com.rpl.specter.t_com$rpl$specter29526(cond_p,then_path,else_path,temp__5718__auto__,afn,late_then,late_else,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
} else {
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29529 = (function (cond_p,then_path,else_path,temp__5718__auto__,late_cond,late_then,late_else,meta29530){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5718__auto__ = temp__5718__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta29530 = meta29530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29531,meta29530__$1){
var self__ = this;
var _29531__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29529(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5718__auto__,self__.late_cond,self__.late_then,self__.late_else,meta29530__$1));
}));

(com.rpl.specter.t_com$rpl$specter29529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29531){
var self__ = this;
var _29531__$1 = this;
return self__.meta29530;
}));

(com.rpl.specter.t_com$rpl$specter29529.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29529.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,(function (p1__29524_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__29524_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter29529.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,(function (p1__29525_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,vals,p1__29525_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter29529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta29530","meta29530",-122840985,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29529.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29529.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29529");

(com.rpl.specter.t_com$rpl$specter29529.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29529");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29529.
 */
com.rpl.specter.__GT_t_com$rpl$specter29529 = (function com$rpl$specter$__GT_t_com$rpl$specter29529(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta29530){
return (new com.rpl.specter.t_com$rpl$specter29529(cond_p__$1,then_path__$1,else_path__$1,temp__5718__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta29530));
});

}

return (new com.rpl.specter.t_com$rpl$specter29529(cond_p,then_path,else_path,temp__5718__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
}
});
G__29532 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__29532__2.call(this,cond_p,then_path);
case 3:
return G__29532__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29532.cljs$core$IFn$_invoke$arity$2 = G__29532__2;
G__29532.cljs$core$IFn$_invoke$arity$3 = G__29532__3;
return G__29532;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29537__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,(function (p,p__29533){
var vec__29534 = p__29533;
var tester = cljs.core.nth.call(null,vec__29534,(0),null);
var apath = cljs.core.nth.call(null,vec__29534,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
}),com.rpl.specter.STOP,pairs);
};
var G__29537 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__29538__i = 0, G__29538__a = new Array(arguments.length -  0);
while (G__29538__i < G__29538__a.length) {G__29538__a[G__29538__i] = arguments[G__29538__i + 0]; ++G__29538__i;}
  conds = new cljs.core.IndexedSeq(G__29538__a,0,null);
} 
return G__29537__delegate.call(this,conds);};
G__29537.cljs$lang$maxFixedArity = 0;
G__29537.cljs$lang$applyTo = (function (arglist__29539){
var conds = cljs.core.seq(arglist__29539);
return G__29537__delegate(conds);
});
G__29537.cljs$core$IFn$_invoke$arity$variadic = G__29537__delegate;
return G__29537;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() {
var G__29547 = null;
var G__29547__0 = (function (){
return com.rpl.specter.STAY;
});
var G__29547__1 = (function (path){
return path;
});
var G__29547__2 = (function (path1,path2){
var builder__28332__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter29540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter29540 = (function (path1,path2,late1,late2,meta29541){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta29541 = meta29541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter29540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29542,meta29541__$1){
var self__ = this;
var _29542__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter29540(self__.path1,self__.path2,self__.late1,self__.late2,meta29541__$1));
}));

(com.rpl.specter.t_com$rpl$specter29540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29542){
var self__ = this;
var _29542__$1 = this;
return self__.meta29541;
}));

(com.rpl.specter.t_com$rpl$specter29540.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter29540.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_.call(null,res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter29540.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter29540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta29541","meta29541",875816618,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter29540.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter29540.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter29540");

(com.rpl.specter.t_com$rpl$specter29540.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter/t_com$rpl$specter29540");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter29540.
 */
com.rpl.specter.__GT_t_com$rpl$specter29540 = (function com$rpl$specter$__GT_t_com$rpl$specter29540(path1__$1,path2__$1,late1__$1,late2__$1,meta29541){
return (new com.rpl.specter.t_com$rpl$specter29540(path1__$1,path2__$1,late1__$1,late2__$1,meta29541));
});

}

return (new com.rpl.specter.t_com$rpl$specter29540(path1,path2,late1,late2,null));
}));
var curr_params__28333__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__28333__auto__)){
return cljs.core.apply.call(null,builder__28332__auto__,curr_params__28333__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__28332__auto__,curr_params__28333__auto__,null);
}
});
var G__29547__3 = (function() { 
var G__29548__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__29548 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__29549__i = 0, G__29549__a = new Array(arguments.length -  2);
while (G__29549__i < G__29549__a.length) {G__29549__a[G__29549__i] = arguments[G__29549__i + 2]; ++G__29549__i;}
  paths = new cljs.core.IndexedSeq(G__29549__a,0,null);
} 
return G__29548__delegate.call(this,path1,path2,paths);};
G__29548.cljs$lang$maxFixedArity = 2;
G__29548.cljs$lang$applyTo = (function (arglist__29550){
var path1 = cljs.core.first(arglist__29550);
arglist__29550 = cljs.core.next(arglist__29550);
var path2 = cljs.core.first(arglist__29550);
var paths = cljs.core.rest(arglist__29550);
return G__29548__delegate(path1,path2,paths);
});
G__29548.cljs$core$IFn$_invoke$arity$variadic = G__29548__delegate;
return G__29548;
})()
;
G__29547 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__29547__0.call(this);
case 1:
return G__29547__1.call(this,path1);
case 2:
return G__29547__2.call(this,path1,path2);
default:
var G__29551 = null;
if (arguments.length > 2) {
var G__29552__i = 0, G__29552__a = new Array(arguments.length -  2);
while (G__29552__i < G__29552__a.length) {G__29552__a[G__29552__i] = arguments[G__29552__i + 2]; ++G__29552__i;}
G__29551 = new cljs.core.IndexedSeq(G__29552__a,0,null);
}
return G__29547__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__29551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29547.cljs$lang$maxFixedArity = 2;
G__29547.cljs$lang$applyTo = G__29547__3.cljs$lang$applyTo;
G__29547.cljs$core$IFn$_invoke$arity$0 = G__29547__0;
G__29547.cljs$core$IFn$_invoke$arity$1 = G__29547__1;
G__29547.cljs$core$IFn$_invoke$arity$2 = G__29547__2;
G__29547.cljs$core$IFn$_invoke$arity$variadic = G__29547__3.cljs$core$IFn$_invoke$arity$variadic;
return G__29547;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29553__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__29553 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29554__i = 0, G__29554__a = new Array(arguments.length -  0);
while (G__29554__i < G__29554__a.length) {G__29554__a[G__29554__i] = arguments[G__29554__i + 0]; ++G__29554__i;}
  path = new cljs.core.IndexedSeq(G__29554__a,0,null);
} 
return G__29553__delegate.call(this,path);};
G__29553.cljs$lang$maxFixedArity = 0;
G__29553.cljs$lang$applyTo = (function (arglist__29555){
var path = cljs.core.seq(arglist__29555);
return G__29553__delegate(path);
});
G__29553.cljs$core$IFn$_invoke$arity$variadic = G__29553__delegate;
return G__29553;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29556__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__29556 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29557__i = 0, G__29557__a = new Array(arguments.length -  0);
while (G__29557__i < G__29557__a.length) {G__29557__a[G__29557__i] = arguments[G__29557__i + 0]; ++G__29557__i;}
  path = new cljs.core.IndexedSeq(G__29557__a,0,null);
} 
return G__29556__delegate.call(this,path);};
G__29556.cljs$lang$maxFixedArity = 0;
G__29556.cljs$lang$applyTo = (function (arglist__29558){
var path = cljs.core.seq(arglist__29558);
return G__29556__delegate(path);
});
G__29556.cljs$core$IFn$_invoke$arity$variadic = G__29556__delegate;
return G__29556;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29559;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29560 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache29559 = info29560;

return info29560;
})():info__28339__auto__);
var precompiled29561 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29561.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null));
} else {
return precompiled29561;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__28339__auto__ = com.rpl.specter.pathcache29562;
var info__28339__auto____$1 = (((info__28339__auto__ == null))?(function (){var info29563 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",(12),(1),(2137),(2137),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",16,1,725,727,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache29562 = info29563;

return info29563;
})():info__28339__auto__);
var precompiled29564 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__28339__auto____$1);
var dynamic_QMARK___28340__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__28339__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___28340__auto__)){
return precompiled29564.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null));
} else {
return precompiled29564;
}
})());

return p;
}));
var empty__GT_NONE_29565 = com.rpl.specter.if_path.call(null,cljs.core.empty_QMARK_,com.rpl.specter.terminal_val.call(null,com.rpl.specter.NONE));
var compact_STAR__29566 = (function (nav){
return com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_29565);
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.call(null,com.rpl.specter.wrap_dynamic_nav.call(null,(function() { 
var G__29567__delegate = function (path){
return cljs.core.map.call(null,compact_STAR__29566,path);
};
var G__29567 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__29568__i = 0, G__29568__a = new Array(arguments.length -  0);
while (G__29568__i < G__29568__a.length) {G__29568__a[G__29568__i] = arguments[G__29568__i + 0]; ++G__29568__i;}
  path = new cljs.core.IndexedSeq(G__29568__a,0,null);
} 
return G__29567__delegate.call(this,path);};
G__29567.cljs$lang$maxFixedArity = 0;
G__29567.cljs$lang$applyTo = (function (arglist__29569){
var path = cljs.core.seq(arglist__29569);
return G__29567__delegate(path);
});
G__29567.cljs$core$IFn$_invoke$arity$variadic = G__29567__delegate;
return G__29567;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map
