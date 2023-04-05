// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.core');
goog.require('cljs.core');
goog.require('blog.main_page');
goog.require('blog.parser');
goog.require('blog.events');
goog.require('blog.render');
goog.require('blog.dom');
goog.require('blog.traversals');
goog.require('blog.zipper');
goog.require('blog.utils');
goog.require('cljs.repl');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('com.rpl.specter');
goog.require('re_frame.core');
goog.require('instaparse.core');
goog.require('edamame.core');
goog.require('cljsjs.d3');
goog.require('com.rpl.specter.zipper');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('reagent.dom');
blog.core.thread_ctx = com.rpl.specter.impl.direct_nav_obj.call(null,(function (path){
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.t_blog$core104021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
blog.core.t_blog$core104021 = (function (path,meta104022){
this.path = path;
this.meta104022 = meta104022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(blog.core.t_blog$core104021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104023,meta104022__$1){
var self__ = this;
var _104023__$1 = this;
return (new blog.core.t_blog$core104021(self__.path,meta104022__$1));
}));

(blog.core.t_blog$core104021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104023){
var self__ = this;
var _104023__$1 = this;
return self__.meta104022;
}));

(blog.core.t_blog$core104021.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(blog.core.t_blog$core104021.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,structure);
}));

(blog.core.t_blog$core104021.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var state_STAR_ = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var loop_over_nodes = (function (nodes){
var G__104027 = nodes;
var vec__104028 = G__104027;
var seq__104029 = cljs.core.seq.call(null,vec__104028);
var first__104030 = cljs.core.first.call(null,seq__104029);
var seq__104029__$1 = cljs.core.next.call(null,seq__104029);
var n = first__104030;
var ns = seq__104029__$1;
var nodes_STAR_ = vec__104028;
var state = cljs.core.dissoc.call(null,structure,new cljs.core.Keyword(null,"node","node",581201198));
var acc = cljs.core.PersistentVector.EMPTY;
var G__104027__$1 = G__104027;
var state__$1 = state;
var acc__$1 = acc;
while(true){
var vec__104034 = G__104027__$1;
var seq__104035 = cljs.core.seq.call(null,vec__104034);
var first__104036 = cljs.core.first.call(null,seq__104035);
var seq__104035__$1 = cljs.core.next.call(null,seq__104035);
var n__$1 = first__104036;
var ns__$1 = seq__104035__$1;
var nodes_STAR___$1 = vec__104034;
var state__$2 = state__$1;
var acc__$2 = acc__$1;
if(cljs.core.not.call(null,cljs.core.seq.call(null,nodes_STAR___$1))){
cljs.core.reset_BANG_.call(null,state_STAR_,state__$2);

return acc__$2;
} else {
var n_STAR_ = next_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2], null),n__$1);
var G__104040 = ns__$1;
var G__104041 = cljs.core.merge.call(null,state__$2,cljs.core.dissoc.call(null,n_STAR_,new cljs.core.Keyword(null,"node","node",581201198)));
var G__104042 = cljs.core.conj.call(null,acc__$2,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_STAR_));
G__104027__$1 = G__104040;
state__$1 = G__104041;
acc__$1 = G__104042;
continue;
}
break;
}
});
var node = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.core.pathcache104037;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info104038 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.subselect,new cljs.core.Var(function(){return com.rpl.specter.subselect;},new cljs.core.Symbol("com.rpl.specter","subselect","com.rpl.specter/subselect",-897711182,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to a sequence that contains the results of (select ...),\n  but is a view to the original structure that can be transformed.\n\n  Requires that the input navigators will walk the structure's\n  children in the same order when executed on \"select\" and then\n  \"transform\".\n\n  If transformed sequence is smaller than input sequence, missing entries\n  will be filled in with NONE, triggering removal if supported by that navigator.\n\n  Value collection (e.g. collect, collect-one) may not be used in the subpath.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(916),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"subselect","subselect",1185716505,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.subselect)?com.rpl.specter.subselect.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","subselect","s/subselect",1185716364,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,self__.path,new cljs.core.Symbol(null,"path","path",1452340359,null))], null),cljs.core.list(new cljs.core.Symbol("s","subselect","s/subselect",1185716364,null),new cljs.core.Symbol(null,"path","path",1452340359,null)))], null)], null),"blog.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.list(new cljs.core.Symbol("s","subselect","s/subselect",1185716364,null),new cljs.core.Symbol(null,"path","path",1452340359,null))], null),new cljs.core.Symbol("s","subselect","s/subselect",1185716364,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null));
blog.core.pathcache104037 = info104038;

return info104038;
})():info__18323__auto__);
var precompiled104039 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled104039.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),com.rpl.specter.subselect.call(null,self__.path)], null),com.rpl.specter.subselect,self__.path], null));
} else {
return precompiled104039;
}
})(),loop_over_nodes,structure);
return cljs.core.merge.call(null,node,cljs.core.deref.call(null,state_STAR_));
}));

(blog.core.t_blog$core104021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"meta104022","meta104022",-4770655,null)], null);
}));

(blog.core.t_blog$core104021.cljs$lang$type = true);

(blog.core.t_blog$core104021.cljs$lang$ctorStr = "blog.core/t_blog$core104021");

(blog.core.t_blog$core104021.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"blog.core/t_blog$core104021");
}));

/**
 * Positional factory function for blog.core/t_blog$core104021.
 */
blog.core.__GT_t_blog$core104021 = (function blog$core$__GT_t_blog$core104021(path__$1,meta104022){
return (new blog.core.t_blog$core104021(path__$1,meta104022));
});

}

return (new blog.core.t_blog$core104021(path,null));
}));
blog.core.walk_parse_tree = (function (){var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__18323__auto__ = blog.core.pathcache104043;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info104044 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"blog.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null))], null),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)], null));
blog.core.pathcache104043 = info104044;

return info104044;
})():info__18323__auto__);
var precompiled104045 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled104045.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,com.rpl.specter.pred,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),com.rpl.specter.ALL,p)], null),com.rpl.specter.stay_then_continue,com.rpl.specter.ALL,p,com.rpl.specter.STAY], null));
} else {
return precompiled104045;
}
})());

return p;
})();
blog.core.branch_QMARK_ = (function blog$core$branch_QMARK_(tree){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tree);
});
blog.core.children = (function blog$core$children(tree){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tree);
});
blog.core.index = (function blog$core$index(p__104046){
var map__104047 = p__104046;
var map__104047__$1 = cljs.core.__destructure_map.call(null,map__104047);
var node = cljs.core.get.call(null,map__104047__$1,new cljs.core.Keyword(null,"node","node",581201198));
var idx = cljs.core.get.call(null,map__104047__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"idx","idx",1053688473),idx),new cljs.core.Keyword(null,"idx","idx",1053688473),(idx + (1))], null);
});
blog.core.compose = (function blog$core$compose(var_args){
var args__4870__auto__ = [];
var len__4864__auto___104049 = arguments.length;
var i__4865__auto___104050 = (0);
while(true){
if((i__4865__auto___104050 < len__4864__auto___104049)){
args__4870__auto__.push((arguments[i__4865__auto___104050]));

var G__104051 = (i__4865__auto___104050 + (1));
i__4865__auto___104050 = G__104051;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.core.compose.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.core.compose.cljs$core$IFn$_invoke$arity$variadic = (function (fs){
var f = cljs.core.reduce.call(null,(function (f2,f1){
return (function (input){
var result_STAR_ = cljs.core.merge.call(null,input,f1.call(null,input));
return f2.call(null,result_STAR_);
});
}),cljs.core.identity,cljs.core.reverse.call(null,fs));
return (function (ctx,node){
return f.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"node","node",581201198),node));
});
}));

(blog.core.compose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.core.compose.cljs$lang$applyTo = (function (seq104048){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq104048));
}));

blog.core.postprocess = (function blog$core$postprocess(tree){
var map__104052 = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.core.pathcache104053;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info104054 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,blog.core.thread_ctx,new cljs.core.Var(function(){return blog.core.thread_ctx;},new cljs.core.Symbol("blog.core","thread-ctx","blog.core/thread-ctx",299315279,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.core","blog.core",59641950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"thread-ctx","thread-ctx",1767244498,null),"src/blog/core.cljs",13,1,67,69,cljs.core.List.EMPTY,null,(cljs.core.truth_(blog.core.thread_ctx)?blog.core.thread_ctx.cljs$lang$test:null)])),new cljs.core.Symbol(null,"thread-ctx","thread-ctx",1767244498,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,blog.core.walk_parse_tree,new cljs.core.Var(function(){return blog.core.walk_parse_tree;},new cljs.core.Symbol("blog.core","walk-parse-tree","blog.core/walk-parse-tree",-1540943352,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.core","blog.core",59641950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"walk-parse-tree","walk-parse-tree",1873200125,null),"src/blog/core.cljs",21,1,108,108,cljs.core.List.EMPTY,null,(cljs.core.truth_(blog.core.walk_parse_tree)?blog.core.walk_parse_tree.cljs$lang$test:null)])),new cljs.core.Symbol(null,"walk-parse-tree","walk-parse-tree",1873200125,null))], null),cljs.core.list(new cljs.core.Symbol(null,"thread-ctx","thread-ctx",1767244498,null),new cljs.core.Symbol(null,"walk-parse-tree","walk-parse-tree",1873200125,null)))], null),"blog.core",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"thread-ctx","thread-ctx",1767244498,null),new cljs.core.Symbol(null,"walk-parse-tree","walk-parse-tree",1873200125,null)], null));
blog.core.pathcache104053 = info104054;

return info104054;
})():info__18323__auto__);
var precompiled104055 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled104055.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.thread_ctx,blog.core.walk_parse_tree], null));
} else {
return precompiled104055;
}
})(),blog.core.compose.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),tree,new cljs.core.Keyword(null,"dom-data","dom-data",-737446761),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"idx","idx",1053688473),(0)], null));
var map__104052__$1 = cljs.core.__destructure_map.call(null,map__104052);
var node = cljs.core.get.call(null,map__104052__$1,new cljs.core.Keyword(null,"node","node",581201198));
var dom = cljs.core.get.call(null,map__104052__$1,new cljs.core.Keyword(null,"dom-data","dom-data",-737446761));
return dom;
});
cljs.core._add_method.call(null,blog.events.event,new cljs.core.Keyword(null,"parse","parse",-1162164619),(function (p__104056){
var map__104057 = p__104056;
var map__104057__$1 = cljs.core.__destructure_map.call(null,map__104057);
var dom = cljs.core.get.call(null,map__104057__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var string = cljs.core.get.call(null,map__104057__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var p = blog.parser.parser.call(null,string);
return cljs.core.update_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.conj,p);
}));
blog.core.rm_class = (function blog$core$rm_class(ns,id,cls_name,dom){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.core.pathcache104058;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info104059 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ns,new cljs.core.Symbol(null,"ns","ns",2082130287,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null)], null),"blog.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
blog.core.pathcache104058 = info104059;

return info104059;
})():info__18323__auto__);
var precompiled104060 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled104060.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null),ns,id], null));
} else {
return precompiled104060;
}
})(),(function (cls){
return cljs.core.disj.call(null,cljs.core.set.call(null,cls),cls_name);
}),dom);
});
blog.core.add_class = (function blog$core$add_class(ns,id,cls_name,dom){
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.core.pathcache104061;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info104062 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,ns,new cljs.core.Symbol(null,"ns","ns",2082130287,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,id,new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null)], null),"blog.core",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null));
blog.core.pathcache104061 = info104062;

return info104062;
})():info__18323__auto__);
var precompiled104063 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled104063.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null),ns,id], null));
} else {
return precompiled104063;
}
})(),(function (cls){
if(cljs.core.truth_(cls)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([cls_name]);
} else {
return cljs.core.conj.call(null,cls,cls_name);
}
}),dom);
});
cljs.core._add_method.call(null,blog.events.event,new cljs.core.Keyword(null,"change-focus","change-focus",261584114),(function (p__104064){
var map__104065 = p__104064;
var map__104065__$1 = cljs.core.__destructure_map.call(null,map__104065);
var dom = cljs.core.get.call(null,map__104065__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var data = cljs.core.get.call(null,map__104065__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"ol","ol",932524051),null], null), null).call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data)))){
return dom;
} else {
var cls_name = "focused";
var id = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text-proxy","text-proxy",-1518947650),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data)))?new cljs.core.Keyword(null,"proxy-id","proxy-id",-1551679302).cljs$core$IFn$_invoke$arity$1(data):new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(data);
var dom__$1 = (function (){var temp__5718__auto__ = com.rpl.specter.impl.compiled_select_one_STAR_.call(null,(function (){var info__18323__auto__ = blog.core.pathcache104066;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info104067 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.rpl.specter.impl.__GT_LocalSym.call(null,cls_name,new cljs.core.Symbol(null,"cls-name","cls-name",147190798,null))], null)], null),"blog.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cls-name","cls-name",147190798,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Symbol(null,"cls-name","cls-name",147190798,null)], null),new cljs.core.Symbol(null,"cls-name","cls-name",147190798,null)], null));
blog.core.pathcache104066 = info104067;

return info104067;
})():info__18323__auto__);
var precompiled104068 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled104068.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),cls_name], null),cls_name], null));
} else {
return precompiled104068;
}
})(),dom);
if(cljs.core.truth_(temp__5718__auto__)){
var id__$1 = temp__5718__auto__;
return blog.core.rm_class.call(null,ns,id__$1,cls_name,dom);
} else {
return dom;
}
})();
var dom__$2 = blog.core.add_class.call(null,ns,id,cls_name,dom__$1);
var dom__$3 = com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__18323__auto__ = blog.core.pathcache104069;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info104070 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.rpl.specter.impl.__GT_LocalSym.call(null,cls_name,new cljs.core.Symbol(null,"cls-name","cls-name",147190798,null))], null)], null),"blog.core",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cls-name","cls-name",147190798,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Symbol(null,"cls-name","cls-name",147190798,null)], null),new cljs.core.Symbol(null,"cls-name","cls-name",147190798,null)], null));
blog.core.pathcache104069 = info104070;

return info104070;
})():info__18323__auto__);
var precompiled104071 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled104071.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),cls_name], null),cls_name], null));
} else {
return precompiled104071;
}
})(),id,dom__$2);
return dom__$3;
}
}));
blog.core.init_dom = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dom","dom",-1236537922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.PersistentArrayMap.EMPTY], null)], null);
blog.core.get_next_dom_state = (function blog$core$get_next_dom_state(op,dom,params){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clear-root","clear-root",-1556489489),op)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(blog.core.init_dom);
} else {
var temp__5718__auto__ = new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(dom);
if(cljs.core.truth_(temp__5718__auto__)){
var next = temp__5718__auto__;
return next;
} else {
var params__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"dom","dom",-1236537922),dom], null),params);
var dom_STAR_ = blog.events.event.call(null,params__$1);
return cljs.core.assoc.call(null,dom_STAR_,new cljs.core.Keyword(null,"prev","prev",-1597069226),dom);
}
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"block","block",664686210),(function (_){
return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"run","run",-1821166653),(function (p__104072,p__104073){
var map__104074 = p__104072;
var map__104074__$1 = cljs.core.__destructure_map.call(null,map__104074);
var db = cljs.core.get.call(null,map__104074__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__104075 = p__104073;
var _ = cljs.core.nth.call(null,vec__104075,(0),null);
var op = cljs.core.nth.call(null,vec__104075,(1),null);
var params = cljs.core.nth.call(null,vec__104075,(2),null);
var dom_STAR_ = blog.core.get_next_dom_state.call(null,op,new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(db),params);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dom","dom",-1236537922),dom_STAR_),new cljs.core.Keyword(null,"block","block",664686210),null], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (p__104078,p__104079){
var map__104080 = p__104078;
var map__104080__$1 = cljs.core.__destructure_map.call(null,map__104080);
var db = cljs.core.get.call(null,map__104080__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__104081 = p__104079;
var _ = cljs.core.nth.call(null,vec__104081,(0),null);
var op = cljs.core.nth.call(null,vec__104081,(1),null);
var params = cljs.core.nth.call(null,vec__104081,(2),null);
var dom = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(db);
var dom_STAR_ = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(dom);
if(cljs.core.truth_(temp__5718__auto__)){
var prev = temp__5718__auto__;
return cljs.core.assoc.call(null,prev,new cljs.core.Keyword(null,"next","next",-117701485),dom);
} else {
return dom;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dom","dom",-1236537922),dom_STAR_),new cljs.core.Keyword(null,"block","block",664686210),null], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"root","root",-448657453),(function (db,p__104084){
var vec__104085 = p__104084;
var _ = cljs.core.nth.call(null,vec__104085,(0),null);
var id = cljs.core.nth.call(null,vec__104085,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),id], null));
}));
blog.core.render_root = (function blog$core$render_root(){
return blog.render.render.call(null,blog.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"root","root",-448657453)], null)));
});
blog.core.string = "\n(defn factorial\n  [n & xs]\n  (if (zero? n)\n    1\n    (* n (tag :a (factorial (dec n))))))\n\n\n(defn filter\n  ([pred]\n    (fn [rf]\n      (fn\n        (tag :fn-body \n          ([] (rf)))\n        ([result] (rf result))\n        ([result input]\n           (if (pred input)\n             (rf result input)\n             result))))))\n\n";
blog.core.textbox = (function blog$core$textbox(){
var contents = reagent.core.atom.call(null,blog.core.string);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__104088_SHARP_){
return cljs.core.reset_BANG_.call(null,contents,p1__104088_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,contents)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return blog.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"run","run",-1821166653),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),blog.core.string], null)], null));
})], null),"Parse Text"], null)], null);
});
});
blog.core.temp_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rotX","rotX",1631794913),new cljs.core.Keyword(null,"trsY","trsY",-166104924),new cljs.core.Keyword(null,"origin-x","origin-x",-1205354906),new cljs.core.Keyword(null,"rotZ","rotZ",637434154),new cljs.core.Keyword(null,"trsX","trsX",1469316429),new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.Keyword(null,"perspective","perspective",1459886798),new cljs.core.Keyword(null,"trsZ","trsZ",1848620757),new cljs.core.Keyword(null,"rotY","rotY",558051735),new cljs.core.Keyword(null,"origin-y","origin-y",-1440842856)],[(0),(-32),(0),(0),(50),(0),(1000),(-48),(1),(0)]);
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.temp !== 'undefined')){
} else {
blog.core.temp = reagent.core.atom.call(null,blog.core.temp_defaults);
}
blog.core.gen_slider = (function blog$core$gen_slider(label,kw,p__104090){
var vec__104091 = p__104090;
var min = cljs.core.nth.call(null,vec__104091,(0),null);
var max = cljs.core.nth.call(null,vec__104091,(1),null);
var center = Math.round(((2) / (max - min)),(0));
return (function (label__$1,kw__$1,p__104094){
var vec__104095 = p__104094;
var min__$1 = cljs.core.nth.call(null,vec__104095,(0),null);
var max__$1 = cljs.core.nth.call(null,vec__104095,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#slider","div#slider",1550480248),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"self-align","self-align",-646050201),"center",new cljs.core.Keyword(null,"gap","gap",80255254),"0.75em"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"min","min",444991522),min__$1,new cljs.core.Keyword(null,"max","max",61366548),max__$1,new cljs.core.Keyword(null,"value","value",305978217),kw__$1.call(null,cljs.core.deref.call(null,blog.core.temp)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__104089_SHARP_){
return cljs.core.swap_BANG_.call(null,blog.core.temp,cljs.core.assoc,kw__$1,parseInt(p1__104089_SHARP_.target.value));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,blog.core.temp,cljs.core.assoc,kw__$1,center);
})], null),"Center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),label__$1], null),["at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw__$1.call(null,cljs.core.deref.call(null,blog.core.temp)))].join('')], null);
});
});
blog.core.control_panel = (function blog$core$control_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.5em",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"1em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"1em",new cljs.core.Keyword(null,"width","width",-384071477),"fit-content"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Control Panel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Angle"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"Angle",new cljs.core.Keyword(null,"angle","angle",1622094254),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-360),(360)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Translate"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"X",new cljs.core.Keyword(null,"trsX","trsX",1469316429),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-500),(500)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"Y",new cljs.core.Keyword(null,"trsY","trsY",-166104924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-500),(500)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"Z",new cljs.core.Keyword(null,"trsZ","trsZ",1848620757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-500),(500)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Rotate"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"X",new cljs.core.Keyword(null,"rotX","rotX",1631794913),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"Y",new cljs.core.Keyword(null,"rotY","rotY",558051735),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"Z",new cljs.core.Keyword(null,"rotZ","rotZ",637434154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Perspective"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"Perspective",new cljs.core.Keyword(null,"perspective","perspective",1459886798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1000)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"X-Origin",new cljs.core.Keyword(null,"origin-x","origin-x",-1205354906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.gen_slider,"Y-Origin",new cljs.core.Keyword(null,"origin-y","origin-y",-1440842856),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"General"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,blog.core.temp,blog.core.temp_defaults);
})], null),"Reset"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.textbox], null)], null);
});
});
blog.core.render_graph_STAR_ = (function blog$core$render_graph_STAR_(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotatesY(30deg)"], null))], null),(function (){var iter__4652__auto__ = (function blog$core$render_graph_STAR__$_iter__104098(s__104099){
return (new cljs.core.LazySeq(null,(function (){
var s__104099__$1 = s__104099;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__104099__$1);
if(temp__5720__auto__){
var s__104099__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__104099__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__104099__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__104101 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__104100 = (0);
while(true){
if((i__104100 < size__4651__auto__)){
var i = cljs.core._nth.call(null,c__4650__auto__,i__104100);
cljs.core.chunk_append.call(null,b__104101,(function (){var p = cljs.core.apply.call(null,cljs.core.str,"M 0 0",cljs.core.map.call(null,((function (i__104100,i,c__4650__auto__,size__4651__auto__,b__104101,s__104099__$2,temp__5720__auto__){
return (function (x){
return [" L ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + x))].join('');
});})(i__104100,i,c__4650__auto__,size__4651__auto__,b__104101,s__104099__$2,temp__5720__auto__))
,cljs.core.range.call(null,(20))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vh",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"em)"].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"1em",new cljs.core.Keyword(null,"cx","cx",1272694324),"1em",new cljs.core.Keyword(null,"cy","cy",755331060),"1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),p,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x0","x0",410843387),(0),new cljs.core.Keyword(null,"y0","y0",111454807),(0),new cljs.core.Keyword(null,"x1","x1",-1863922247),(3),new cljs.core.Keyword(null,"y1","y1",589123466),(3)], null)], null)], null);
})());

var G__104102 = (i__104100 + (1));
i__104100 = G__104102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__104101),blog$core$render_graph_STAR__$_iter__104098.call(null,cljs.core.chunk_rest.call(null,s__104099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__104101),null);
}
} else {
var i = cljs.core.first.call(null,s__104099__$2);
return cljs.core.cons.call(null,(function (){var p = cljs.core.apply.call(null,cljs.core.str,"M 0 0",cljs.core.map.call(null,((function (i,s__104099__$2,temp__5720__auto__){
return (function (x){
return [" L ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + x))].join('');
});})(i,s__104099__$2,temp__5720__auto__))
,cljs.core.range.call(null,(20))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vh",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"em)"].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"1em",new cljs.core.Keyword(null,"cx","cx",1272694324),"1em",new cljs.core.Keyword(null,"cy","cy",755331060),"1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),p,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x0","x0",410843387),(0),new cljs.core.Keyword(null,"y0","y0",111454807),(0),new cljs.core.Keyword(null,"x1","x1",-1863922247),(3),new cljs.core.Keyword(null,"y1","y1",589123466),(3)], null)], null)], null);
})(),blog$core$render_graph_STAR__$_iter__104098.call(null,cljs.core.rest.call(null,s__104099__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.range.call(null,(10)));
})());
});
blog.core.render_graph = (function blog$core$render_graph(){
var p = cljs.core.apply.call(null,cljs.core.str,"M 0 0",cljs.core.map.call(null,(function (x){
return [" L ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + x))].join('');
}),cljs.core.range.call(null,(20))));
var h = (300);
var w = (300);
var scale = (function (min,max){
var span = (max - min);
return (function (x){
return (min + ((x - min) / span));
});
});
var x_scale = scale.call(null,(-150),(150));
var y_scale = scale.call(null,(150),(-150));
var y_shift = (0.5 * h);
var stroke_width = "0.1em";
var f = (function (x){
return (x * x);
});
var curve = cljs.core.apply.call(null,cljs.core.str,"M 0 0 ",cljs.core.map.call(null,(function (x){
var s = [" L ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_scale.call(null,x))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_scale.call(null,f.call(null,x)))].join('');
return s;
}),cljs.core.range.call(null,(30))));
var curve__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),curve,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_shift),"px)"].join('')], null)], null)], null);
var y_axis = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),["M 150 0"," L 150 300"].join(''),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white"], null)], null);
var x_axis = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),["M 0 150"," L 300 150"].join(''),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white"], null)], null);
var z_axis = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),["M 0 150"," L 300 150"].join(''),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stoke-width","stoke-width",-1969178844),stroke_width,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate3d(200px, 100px, 100px)",new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d"], null)),null
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateZ(0px)",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)),curve__$1,x_axis,y_axis], null)], null);
});
blog.core.test_page = (function blog$core$test_page(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.control_panel], null),(function (){var render_coll = (function() { 
var blog$core$test_page_$_render_coll__delegate = function (tag,params,content){
var params__$1 = cljs.core.update.call(null,params,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.fnil.call(null,cljs.core.conj,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["coll",null], null), null)),"coll");
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,params__$1], null),cljs.core.mapv.call(null,(function (idx,content__$1){
return content__$1;
}),cljs.core.range.call(null),content));
};
var blog$core$test_page_$_render_coll = function (tag,params,var_args){
var content = null;
if (arguments.length > 2) {
var G__104104__i = 0, G__104104__a = new Array(arguments.length -  2);
while (G__104104__i < G__104104__a.length) {G__104104__a[G__104104__i] = arguments[G__104104__i + 2]; ++G__104104__i;}
  content = new cljs.core.IndexedSeq(G__104104__a,0,null);
} 
return blog$core$test_page_$_render_coll__delegate.call(this,tag,params,content);};
blog$core$test_page_$_render_coll.cljs$lang$maxFixedArity = 2;
blog$core$test_page_$_render_coll.cljs$lang$applyTo = (function (arglist__104105){
var tag = cljs.core.first(arglist__104105);
arglist__104105 = cljs.core.next(arglist__104105);
var params = cljs.core.first(arglist__104105);
var content = cljs.core.rest(arglist__104105);
return blog$core$test_page_$_render_coll__delegate(tag,params,content);
});
blog$core$test_page_$_render_coll.cljs$core$IFn$_invoke$arity$variadic = blog$core$test_page_$_render_coll__delegate;
return blog$core$test_page_$_render_coll;
})()
;
var map__104103 = cljs.core.deref.call(null,blog.core.temp);
var map__104103__$1 = cljs.core.__destructure_map.call(null,map__104103);
var rotX = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"rotX","rotX",1631794913));
var trsY = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"trsY","trsY",-166104924));
var origin_x = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"origin-x","origin-x",-1205354906));
var rotZ = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"rotZ","rotZ",637434154));
var trsX = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"trsX","trsX",1469316429));
var perspective = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"perspective","perspective",1459886798));
var angle = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var trsZ = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"trsZ","trsZ",1848620757));
var rotY = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"rotY","rotY",558051735));
var origin_y = cljs.core.get.call(null,map__104103__$1,new cljs.core.Keyword(null,"origin-y","origin-y",-1440842856));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"perspective-origin","perspective-origin",-1049394665),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin_x),"%, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin_y),"%)"].join(''),new cljs.core.Keyword(null,"perspective","perspective",1459886798),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(perspective),"px"].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#target","div#target",124150726),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preserve"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trsX),"px,  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trsY),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trsZ),"px) ","rotate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((rotX / (100))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((rotY / (100))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((rotZ / (100))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle),"deg)"].join(''),new cljs.core.Keyword(null,"transition","transition",765692007),"transform 1.5s",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.render_graph], null)], null)], null);
})()], null);
})], null));
});
blog.core.mount = (function blog$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.main_page.generate_site], null),el);
});
blog.core.get_app_element = (function blog$core$get_app_element(){
return goog.dom.getElement("app");
});
blog.core.mount_app_element = (function blog$core$mount_app_element(){
var temp__5720__auto__ = blog.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return blog.core.mount.call(null,el);
} else {
return null;
}
});
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword("tab","test","tab/test",577719210),(function (id,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.test_page], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-ctx","init-ctx",1682455157),(function (db,p__104106){
var vec__104107 = p__104106;
var _ = cljs.core.nth.call(null,vec__104107,(0),null);
var ctx = cljs.core.nth.call(null,vec__104107,(1),null);
return cljs.core.merge.call(null,db,blog.core.init_dom,cljs.core.PersistentArrayMap.createAsIfByAssoc([ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("header","current-tab","header/current-tab",1223131450),new cljs.core.Keyword("tab","demo","tab/demo",851503466),new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091),true], null)]));
}));
blog.core.init_db = (function blog$core$init_db(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-ctx","init-ctx",1682455157),new cljs.core.Keyword(null,"root","root",-448657453)], null));
});
blog.core.init_db.call(null);
blog.core.mount_app_element.call(null);
blog.core.on_reload = (function blog$core$on_reload(){
return blog.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
