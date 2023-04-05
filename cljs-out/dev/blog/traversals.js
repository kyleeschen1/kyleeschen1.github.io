// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.traversals');
goog.require('cljs.core');
goog.require('clojure.zip');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
blog.traversals.Return = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(blog.traversals.Return.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(blog.traversals.Return.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k100971,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__100975 = k100971;
var G__100975__$1 = (((G__100975 instanceof cljs.core.Keyword))?G__100975.fqn:null);
switch (G__100975__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k100971,else__4505__auto__);

}
}));

(blog.traversals.Return.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4525__auto__,p__100976){
var vec__100977 = p__100976;
var k__4526__auto__ = cljs.core.nth.call(null,vec__100977,(0),null);
var v__4527__auto__ = cljs.core.nth.call(null,vec__100977,(1),null);
return f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__);
}),init__4524__auto__,this__4522__auto____$1);
}));

(blog.traversals.Return.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,pr_pair__4520__auto__,"#blog.traversals.Return{",", ","}",opts__4519__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
}));

(blog.traversals.Return.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__100970){
var self__ = this;
var G__100970__$1 = this;
return (new cljs.core.RecordIter((0),G__100970__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(blog.traversals.Return.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(blog.traversals.Return.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new blog.traversals.Return(self__.val,self__.__meta,self__.__extmap,self__.__hash));
}));

(blog.traversals.Return.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(blog.traversals.Return.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1115307931 ^ cljs.core.hash_unordered_coll.call(null,coll__4499__auto__));
}).call(null,this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(blog.traversals.Return.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this100972,other100973){
var self__ = this;
var this100972__$1 = this;
return (((!((other100973 == null)))) && ((((this100972__$1.constructor === other100973.constructor)) && (((cljs.core._EQ_.call(null,this100972__$1.val,other100973.val)) && (cljs.core._EQ_.call(null,this100972__$1.__extmap,other100973.__extmap)))))));
}));

(blog.traversals.Return.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new blog.traversals.Return(self__.val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4513__auto__)),null));
}
}));

(blog.traversals.Return.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k100971){
var self__ = this;
var this__4509__auto____$1 = this;
var G__100980 = k100971;
var G__100980__$1 = (((G__100980 instanceof cljs.core.Keyword))?G__100980.fqn:null);
switch (G__100980__$1) {
case "val":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k100971);

}
}));

(blog.traversals.Return.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__100970){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__100981 = cljs.core.keyword_identical_QMARK_;
var expr__100982 = k__4511__auto__;
if(cljs.core.truth_(pred__100981.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__100982))){
return (new blog.traversals.Return(G__100970,self__.__meta,self__.__extmap,null));
} else {
return (new blog.traversals.Return(self__.val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4511__auto__,G__100970),null));
}
}));

(blog.traversals.Return.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null))], null),self__.__extmap));
}));

(blog.traversals.Return.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__100970){
var self__ = this;
var this__4501__auto____$1 = this;
return (new blog.traversals.Return(self__.val,G__100970,self__.__extmap,self__.__hash));
}));

(blog.traversals.Return.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4508__auto__,(0)),cljs.core._nth.call(null,entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(blog.traversals.Return.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(blog.traversals.Return.cljs$lang$type = true);

(blog.traversals.Return.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"blog.traversals/Return",null,(1),null));
}));

(blog.traversals.Return.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write.call(null,writer__4547__auto__,"blog.traversals/Return");
}));

/**
 * Positional factory function for blog.traversals/Return.
 */
blog.traversals.__GT_Return = (function blog$traversals$__GT_Return(val){
return (new blog.traversals.Return(val,null,null,null));
});

/**
 * Factory function for blog.traversals/Return, taking a map of keywords to field values.
 */
blog.traversals.map__GT_Return = (function blog$traversals$map__GT_Return(G__100974){
var extmap__4542__auto__ = (function (){var G__100984 = cljs.core.dissoc.call(null,G__100974,new cljs.core.Keyword(null,"val","val",128701612));
if(cljs.core.record_QMARK_.call(null,G__100974)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__100984);
} else {
return G__100984;
}
})();
return (new blog.traversals.Return(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__100974),null,cljs.core.not_empty.call(null,extmap__4542__auto__),null));
});

blog.traversals.return_QMARK_ = (function blog$traversals$return_QMARK_(form){
return (form instanceof blog.traversals.Return);
});
blog.traversals.transition_loc = (function blog$traversals$transition_loc(loc,next_fn){
var G__100987 = next_fn;
var G__100987__$1 = (((G__100987 instanceof cljs.core.Keyword))?G__100987.fqn:null);
switch (G__100987__$1) {
case "next":
return clojure.zip.next.call(null,loc);

break;
case "down":
return clojure.zip.down.call(null,loc);

break;
case "skip":
var or__4253__auto__ = clojure.zip.right.call(null,loc);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var p = loc;
while(true){
var temp__5718__auto__ = clojure.zip.up.call(null,p);
if(cljs.core.truth_(temp__5718__auto__)){
var up_STAR_ = temp__5718__auto__;
var or__4253__auto____$1 = clojure.zip.right.call(null,up_STAR_);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var G__100989 = up_STAR_;
p = G__100989;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}

break;
case "stop":
return cljs.core.assoc.call(null,loc,(1),new cljs.core.Keyword(null,"end","end",-268185958));

break;
default:
return clojure.zip.next.call(null,loc);

}
});
blog.traversals.add_return_methods_to_loc = (function blog$traversals$add_return_methods_to_loc(loc){
var branch_QMARK__STAR_ = (function blog$traversals$add_return_methods_to_loc_$_branch_QMARK__STAR_(f){
return (function (node){
var or__4253__auto__ = blog.traversals.return_QMARK_.call(null,node);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return f.call(null,node);
}
});
});
var children_STAR_ = (function blog$traversals$add_return_methods_to_loc_$_children_STAR_(f){
return (function (node){
if(blog.traversals.return_QMARK_.call(null,node)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword("blog.traversals","return","blog.traversals/return",-1170534502)], null);
} else {
return f.call(null,node);
}
});
});
var make_node_STAR_ = (function blog$traversals$add_return_methods_to_loc_$_make_node_STAR_(f){
return (function (node,children){
if(blog.traversals.return_QMARK_.call(null,node)){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.first.call(null,children));
} else {
return f.call(null,node,children);
}
});
});
var update_methods = (function blog$traversals$add_return_methods_to_loc_$_update_methods(methods$){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,methods$,new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862),branch_QMARK__STAR_),new cljs.core.Keyword("zip","children","zip/children",-940194589),children_STAR_),new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591),make_node_STAR_);
});
return cljs.core.vary_meta.call(null,loc,update_methods);
});
blog.traversals.gen_walker = (function blog$traversals$gen_walker(inner_fn,outer_fn){
return (function (loc,ctx){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))){
var loc__$1 = clojure.zip.down.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null),ctx),(0),blog.traversals.__GT_Return));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),loc__$1,new cljs.core.Keyword(null,"next-fn","next-fn",1040695461),new cljs.core.Keyword(null,"down","down",1565245570)], null),inner_fn.call(null,loc__$1,ctx));
} else {
if(cljs.core._EQ_.call(null,clojure.zip.node.call(null,loc),new cljs.core.Keyword("blog.traversals","return","blog.traversals/return",-1170534502))){
var loc__$1 = clojure.zip.up.call(null,loc);
var loc__$2 = cljs.core.assoc.call(null,loc__$1,(0),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc__$1)));
var env = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,loc__$2,(1)));
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),loc__$2,new cljs.core.Keyword(null,"next-fn","next-fn",1040695461),new cljs.core.Keyword(null,"skip","skip",602715391)], null),cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),new cljs.core.Keyword(null,"laterals","laterals",-1724153236)], null)),outer_fn.call(null,loc__$2,ctx));
} else {
return cljs.core.merge.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),loc,new cljs.core.Keyword(null,"next-fn","next-fn",1040695461),new cljs.core.Keyword(null,"next","next",-117701485)], null),outer_fn.call(null,loc,ctx));

}
}
});
});
blog.traversals.traverse = (function blog$traversals$traverse(loc,ctx){
var ctx__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"globals","globals",1713542270),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"laterals","laterals",-1724153236),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"inner-fn","inner-fn",-1338932455),cljs.core.constantly.call(null,null)], null),ctx);
var map__100990 = ctx__$1;
var map__100990__$1 = cljs.core.__destructure_map.call(null,map__100990);
var outer_fn = cljs.core.get.call(null,map__100990__$1,new cljs.core.Keyword(null,"outer-fn","outer-fn",1842814559));
var inner_fn = cljs.core.get.call(null,map__100990__$1,new cljs.core.Keyword(null,"inner-fn","inner-fn",-1338932455));
var vec__100991 = (cljs.core.truth_(outer_fn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.traversals.add_return_methods_to_loc.call(null,loc),blog.traversals.gen_walker.call(null,inner_fn,outer_fn)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,(function (loc__$1,ctx__$2){
return cljs.core.merge.call(null,ctx__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loc","loc",-584284901),loc__$1], null),inner_fn.call(null,loc__$1,ctx__$2));
})], null));
var loc__$1 = cljs.core.nth.call(null,vec__100991,(0),null);
var walker = cljs.core.nth.call(null,vec__100991,(1),null);
var loc__$2 = loc__$1;
var ctx__$2 = ctx__$1;
while(true){
if(clojure.zip.end_QMARK_.call(null,loc__$2)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",-584284901),loc__$2,new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.dissoc.call(null,ctx__$2,new cljs.core.Keyword(null,"loc","loc",-584284901),new cljs.core.Keyword(null,"next-fn","next-fn",1040695461))], null);
} else {
var map__100995 = walker.call(null,loc__$2,ctx__$2);
var map__100995__$1 = cljs.core.__destructure_map.call(null,map__100995);
var ctx__$3 = map__100995__$1;
var next_fn = cljs.core.get.call(null,map__100995__$1,new cljs.core.Keyword(null,"next-fn","next-fn",1040695461));
var loc__$3 = cljs.core.get.call(null,map__100995__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var G__100996 = blog.traversals.transition_loc.call(null,loc__$3,next_fn);
var G__100997 = ctx__$3;
loc__$2 = G__100996;
ctx__$2 = G__100997;
continue;
}
break;
}
});
blog.traversals.ast_zip = (function blog$traversals$ast_zip(kw,ast){
var children = (function blog$traversals$ast_zip_$_children(node){
return cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.select_keys.call(null,node,cljs.core.get.call(null,node,kw))));
});
var make_node = (function blog$traversals$ast_zip_$_make_node(node,children__$1){
return cljs.core.merge.call(null,node,cljs.core.zipmap.call(null,cljs.core.get.call(null,node,kw),children__$1));
});
return clojure.zip.zipper.call(null,kw,children,make_node,ast);
});
blog.traversals.type__GT_parens = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null)], null);
blog.traversals.parse_paren = (function blog$traversals$parse_paren(op_QMARK_,text){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"opening?","opening?",289692240),op_QMARK_,new cljs.core.Keyword(null,"form","form",-1624062471),text], null);
});
if((typeof blog !== 'undefined') && (typeof blog.traversals !== 'undefined') && (typeof blog.traversals.parse_sexpr !== 'undefined')){
} else {
blog.traversals.parse_sexpr = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.traversals","parse-sexpr"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.traversals.parse_clj_coll = (function blog$traversals$parse_clj_coll(code){
var type = ((cljs.core.list_QMARK_.call(null,code))?new cljs.core.Keyword(null,"list","list",765357683):((cljs.core.vector_QMARK_.call(null,code))?new cljs.core.Keyword(null,"vector","vector",1902966158):((cljs.core.map_QMARK_.call(null,code))?new cljs.core.Keyword(null,"map","map",1371690461):((cljs.core.set_QMARK_.call(null,code))?new cljs.core.Keyword(null,"set","set",304602554):((cljs.core.map_entry_QMARK_.call(null,code))?new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056):null)))));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type,new cljs.core.Keyword(null,"form","form",-1624062471),code,new cljs.core.Keyword(null,"token?","token?",994132242),false,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.map.call(null,blog.traversals.parse_clj,code)], null),(function (){var temp__5718__auto__ = blog.traversals.type__GT_parens.call(null,type);
if(cljs.core.truth_(temp__5718__auto__)){
var parens = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("render","children","render/children",-5280936),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op-paren","op-paren",763193794),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"cl-paren","cl-paren",2001927215)], null),new cljs.core.Keyword(null,"op-paren","op-paren",763193794),blog.traversals.parse_paren.call(null,true,cljs.core.first.call(null,parens)),new cljs.core.Keyword(null,"cl-paren","cl-paren",2001927215),blog.traversals.parse_paren.call(null,false,cljs.core.second.call(null,parens))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("render","children","render/children",-5280936),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null)], null);
}
})());
});
blog.traversals.parse_clj_token = (function blog$traversals$parse_clj_token(code){
var type = (((code instanceof cljs.core.Symbol))?new cljs.core.Keyword(null,"symbol","symbol",-1038572696):((typeof code === 'number')?new cljs.core.Keyword(null,"number","number",1570378438):((typeof code === 'string')?new cljs.core.Keyword(null,"string","string",-1989541586):((cljs.core.boolean_QMARK_.call(null,code))?new cljs.core.Keyword(null,"boolean","boolean",-1919418404):(((code instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"keyword","keyword",811389747):(((code == null))?new cljs.core.Keyword(null,"nil","nil",99600501):null))))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type,new cljs.core.Keyword(null,"form","form",-1624062471),code,new cljs.core.Keyword(null,"token?","token?",994132242),true], null);
});
blog.traversals.parse_clj = (function blog$traversals$parse_clj(code){
if(cljs.core.coll_QMARK_.call(null,code)){
return blog.traversals.parse_clj_coll.call(null,code);
} else {
return blog.traversals.parse_clj_token.call(null,code);
}
});
cljs.core._add_method.call(null,blog.traversals.parse_sexpr,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__100998){
var vec__100999 = p__100998;
var seq__101000 = cljs.core.seq.call(null,vec__100999);
var first__101001 = cljs.core.first.call(null,seq__101000);
var seq__101000__$1 = cljs.core.next.call(null,seq__101000);
var f = first__101001;
var args = seq__101000__$1;
var form = vec__100999;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword("ast","children","ast/children",-940201916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.Keyword(null,"f","f",-1597136552),blog.traversals.parse_clj.call(null,f),new cljs.core.Keyword(null,"args","args",1315556576),blog.traversals.parse_clj.call(null,args)], null);
}));
cljs.core._add_method.call(null,blog.traversals.parse_sexpr,new cljs.core.Keyword(null,"let","let",-1282412701),(function (p__101002){
var vec__101003 = p__101002;
var seq__101004 = cljs.core.seq.call(null,vec__101003);
var first__101005 = cljs.core.first.call(null,seq__101004);
var seq__101004__$1 = cljs.core.next.call(null,seq__101004);
var op = first__101005;
var first__101005__$1 = cljs.core.first.call(null,seq__101004__$1);
var seq__101004__$2 = cljs.core.next.call(null,seq__101004__$1);
var bindings = first__101005__$1;
var body = seq__101004__$2;
var form = vec__101003;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword("ast","children","ast/children",-940201916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.Keyword(null,"let","let",-1282412701),blog.traversals.parse_clj.call(null,op),new cljs.core.Keyword(null,"bindings","bindings",1271397192),blog.traversals.parse_clj.call(null,bindings)], null);
}));

//# sourceMappingURL=traversals.js.map
