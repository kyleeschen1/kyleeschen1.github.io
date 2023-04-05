// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.traverse');
goog.require('cljs.core');
goog.require('com.rpl.specter');



/**
 * Walks a nested structure, applying inner and
 * outer functions.
 * 
 * Like a zipper, one must provide a branch?, children,
 * and make-node function.
 * 
 * Unlike a zipper, this allows:
 * 
 * 1. The application of an inner and outer function,
 *    which are difficult with the zipper 'next' function
 *    because of ambiguity over whether branch nodes have
 *    already been visted.
 * 
 * 2. A transfer of state between nodes, which facilitates
 *    accumulation, globally and locally scoped data, counters,
 *    interpreters, etc.
 * 
 * To Add:
 * 
 * - A filter function that prevents navigation into the node.
 * - Ability to stop the entire computation and retrieve continuation.
 * - The ability to re-run a node after a function has been applied.
 */
blog.traverse.traverse = (function blog$traverse$traverse(state,branch_QMARK_,children,make_node,pre_f,post_f){
var pre_f__$1 = blog.traverse.compile_traversal.call(null,pre_f);
var post_f__$1 = blog.traverse.compile_traversal.call(null,post_f);
return blog.traverse.traverse_STAR_.call(null,state,branch_QMARK_,children,make_node,pre_f__$1,post_f__$1,cljs.core.identity);
});
blog.traverse.traverse_STAR_ = (function blog$traverse$traverse_STAR_(state,branch_QMARK_,children,make_node,pre_f,post_f,k){
if(cljs.core.not.call(null,branch_QMARK_.call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(state)))){
return k.call(null,post_f.call(null,pre_f.call(null,state)));
} else {
var state__$1 = blog.traverse.process.call(null,state,pre_f.call(null,state));
var node = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(state__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"skip?","skip?",1467795012).cljs$core$IFn$_invoke$arity$1(state__$1))){
var state__$2 = cljs.core.dissoc.call(null,state__$1,new cljs.core.Keyword(null,"skip?","skip?",1467795012));
return k.call(null,blog.traverse.process.call(null,state__$2,post_f.call(null,state__$2)));
} else {
return blog.traverse.traverse_branch.call(null,state__$1,branch_QMARK_,children,make_node,pre_f,post_f,k);
}
}
});
blog.traverse.traverse_branch = (function blog$traverse$traverse_branch(p__26666,branch_QMARK_,children,make_node,pre_f,post_f,k){
var map__26667 = p__26666;
var map__26667__$1 = cljs.core.__destructure_map.call(null,map__26667);
var state = map__26667__$1;
var node = cljs.core.get.call(null,map__26667__$1,new cljs.core.Keyword(null,"node","node",581201198));
var traverse_child = (function blog$traverse$traverse_branch_$_traverse_child(node__$1){
return (function (k__$1){
return (function (state__$1,acc,changed_QMARK_){
return blog.traverse.traverse_STAR_.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"node","node",581201198),node__$1),branch_QMARK_,children,make_node,pre_f,post_f,(function (result){
var node_STAR_ = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(result);
var changed_QMARK___$1 = (function (){var or__4253__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not_EQ_.call(null,node__$1,node_STAR_);
}
})();
return k__$1.call(null,result,cljs.core.conj.call(null,acc,node_STAR_),changed_QMARK___$1);
}));
});
});
});
var rebuild_node = (function blog$traverse$traverse_branch_$_rebuild_node(state__$1,acc,changed_QMARK_){
var node_STAR_ = (cljs.core.truth_(changed_QMARK_)?make_node.call(null,node,acc):node);
var state__$2 = com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__18323__auto__ = blog.traverse.pathcache26671;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info26672 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198)], null)], null),"blog.traverse",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198)], null)], null));
blog.traverse.pathcache26671 = info26672;

return info26672;
})():info__18323__auto__);
var precompiled26673 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled26673.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198)], null)], null));
} else {
return precompiled26673;
}
})(),node_STAR_,state__$1);
return k.call(null,post_f.call(null,state__$2));
});
var thread_traversals = (function blog$traverse$traverse_branch_$_thread_traversals(node__$1){
return cljs.core.reduce.call(null,(function (next_t,t){
return t.call(null,next_t);
}),rebuild_node,cljs.core.map.call(null,traverse_child,cljs.core.reverse.call(null,children.call(null,node__$1))));
});
return thread_traversals.call(null,node).call(null,state,cljs.core.PersistentVector.EMPTY,false);
});
blog.traverse.process = (function blog$traverse$process(prev_state,new_state){
return cljs.core.merge.call(null,prev_state,new_state);
});
/**
 * Takes a tree of traversal or vectors of traversal
 * functions and composes them into one function that:
 *   
 * 1. Takes in a state.
 *   
 * 2. Runs each function of the the tree in
 *    a depth-first order.
 *   
 * 3. Performs state updates between each
 *    function call.
 */
blog.traverse.compile_traversal = (function blog$traverse$compile_traversal(f){
if(cljs.core.vector_QMARK_.call(null,f)){
return cljs.core.reduce.call(null,(function (next_f,f__$1){
return f__$1.call(null,next_f);
}),cljs.core.identity,cljs.core.map.call(null,(function (f__$1){
var f_STAR_ = blog.traverse.compile_traversal.call(null,f__$1);
return (function (next_f){
return (function (state){
return next_f.call(null,f_STAR_.call(null,state));
});
});
}),cljs.core.reverse.call(null,f)));
} else {
return (function (state){
return blog.traverse.process.call(null,state,f.call(null,state));
});
}
});

//# sourceMappingURL=traverse.js.map
