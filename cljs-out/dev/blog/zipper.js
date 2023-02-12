// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.zipper');
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
blog.zipper.Zipper = (function (branch_QMARK_,children,make_node,node,ppath,pnodes,l,r,end_QMARK_,__meta,__extmap,__hash){
this.branch_QMARK_ = branch_QMARK_;
this.children = children;
this.make_node = make_node;
this.node = node;
this.ppath = ppath;
this.pnodes = pnodes;
this.l = l;
this.r = r;
this.end_QMARK_ = end_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(blog.zipper.Zipper.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(blog.zipper.Zipper.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k39163,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__39167 = k39163;
var G__39167__$1 = (((G__39167 instanceof cljs.core.Keyword))?G__39167.fqn:null);
switch (G__39167__$1) {
case "branch?":
return self__.branch_QMARK_;

break;
case "children":
return self__.children;

break;
case "make-node":
return self__.make_node;

break;
case "node":
return self__.node;

break;
case "ppath":
return self__.ppath;

break;
case "pnodes":
return self__.pnodes;

break;
case "l":
return self__.l;

break;
case "r":
return self__.r;

break;
case "end?":
return self__.end_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39163,else__4505__auto__);

}
}));

(blog.zipper.Zipper.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4525__auto__,p__39168){
var vec__39169 = p__39168;
var k__4526__auto__ = cljs.core.nth.call(null,vec__39169,(0),null);
var v__4527__auto__ = cljs.core.nth.call(null,vec__39169,(1),null);
return f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__);
}),init__4524__auto__,this__4522__auto____$1);
}));

(blog.zipper.Zipper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,pr_pair__4520__auto__,"#blog.zipper.Zipper{",", ","}",opts__4519__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branch?","branch?",-999323007),self__.branch_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"make-node","make-node",1103973934),self__.make_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ppath","ppath",-1758182784),self__.ppath],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),self__.pnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end?","end?",-1423391609),self__.end_QMARK_],null))], null),self__.__extmap));
}));

(blog.zipper.Zipper.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39162){
var self__ = this;
var G__39162__$1 = this;
return (new cljs.core.RecordIter((0),G__39162__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branch?","branch?",-999323007),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"make-node","make-node",1103973934),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"ppath","ppath",-1758182784),new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"end?","end?",-1423391609)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(blog.zipper.Zipper.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(blog.zipper.Zipper.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,self__.ppath,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(blog.zipper.Zipper.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
}));

(blog.zipper.Zipper.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-2126627226 ^ cljs.core.hash_unordered_coll.call(null,coll__4499__auto__));
}).call(null,this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(blog.zipper.Zipper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39164,other39165){
var self__ = this;
var this39164__$1 = this;
return (((!((other39165 == null)))) && ((((this39164__$1.constructor === other39165.constructor)) && (((cljs.core._EQ_.call(null,this39164__$1.branch_QMARK_,other39165.branch_QMARK_)) && (((cljs.core._EQ_.call(null,this39164__$1.children,other39165.children)) && (((cljs.core._EQ_.call(null,this39164__$1.make_node,other39165.make_node)) && (((cljs.core._EQ_.call(null,this39164__$1.node,other39165.node)) && (((cljs.core._EQ_.call(null,this39164__$1.ppath,other39165.ppath)) && (((cljs.core._EQ_.call(null,this39164__$1.pnodes,other39165.pnodes)) && (((cljs.core._EQ_.call(null,this39164__$1.l,other39165.l)) && (((cljs.core._EQ_.call(null,this39164__$1.r,other39165.r)) && (((cljs.core._EQ_.call(null,this39164__$1.end_QMARK_,other39165.end_QMARK_)) && (cljs.core._EQ_.call(null,this39164__$1.__extmap,other39165.__extmap)))))))))))))))))))))));
}));

(blog.zipper.Zipper.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"ppath","ppath",-1758182784),null,new cljs.core.Keyword(null,"branch?","branch?",-999323007),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"end?","end?",-1423391609),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"make-node","make-node",1103973934),null,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,self__.ppath,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4513__auto__)),null));
}
}));

(blog.zipper.Zipper.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k39163){
var self__ = this;
var this__4509__auto____$1 = this;
var G__39172 = k39163;
var G__39172__$1 = (((G__39172 instanceof cljs.core.Keyword))?G__39172.fqn:null);
switch (G__39172__$1) {
case "branch?":
case "children":
case "make-node":
case "node":
case "ppath":
case "pnodes":
case "l":
case "r":
case "end?":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k39163);

}
}));

(blog.zipper.Zipper.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__39162){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__39173 = cljs.core.keyword_identical_QMARK_;
var expr__39174 = k__4511__auto__;
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"branch?","branch?",-999323007),expr__39174))){
return (new blog.zipper.Zipper(G__39162,self__.children,self__.make_node,self__.node,self__.ppath,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__39174))){
return (new blog.zipper.Zipper(self__.branch_QMARK_,G__39162,self__.make_node,self__.node,self__.ppath,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"make-node","make-node",1103973934),expr__39174))){
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,G__39162,self__.node,self__.ppath,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39174))){
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,G__39162,self__.ppath,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"ppath","ppath",-1758182784),expr__39174))){
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,G__39162,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),expr__39174))){
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,self__.ppath,G__39162,self__.l,self__.r,self__.end_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"l","l",1395893423),expr__39174))){
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,self__.ppath,self__.pnodes,G__39162,self__.r,self__.end_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__39174))){
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,self__.ppath,self__.pnodes,self__.l,G__39162,self__.end_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39173.call(null,new cljs.core.Keyword(null,"end?","end?",-1423391609),expr__39174))){
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,self__.ppath,self__.pnodes,self__.l,self__.r,G__39162,self__.__meta,self__.__extmap,null));
} else {
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,self__.ppath,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4511__auto__,G__39162),null));
}
}
}
}
}
}
}
}
}
}));

(blog.zipper.Zipper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"branch?","branch?",-999323007),self__.branch_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"make-node","make-node",1103973934),self__.make_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",581201198),self__.node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ppath","ppath",-1758182784),self__.ppath,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),self__.pnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"l","l",1395893423),self__.l,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"r","r",-471384190),self__.r,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end?","end?",-1423391609),self__.end_QMARK_,null))], null),self__.__extmap));
}));

(blog.zipper.Zipper.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__39162){
var self__ = this;
var this__4501__auto____$1 = this;
return (new blog.zipper.Zipper(self__.branch_QMARK_,self__.children,self__.make_node,self__.node,self__.ppath,self__.pnodes,self__.l,self__.r,self__.end_QMARK_,G__39162,self__.__extmap,self__.__hash));
}));

(blog.zipper.Zipper.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4508__auto__,(0)),cljs.core._nth.call(null,entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(blog.zipper.Zipper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"branch?","branch?",641208520,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"make-node","make-node",-1550461835,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"ppath","ppath",-117651257,null),new cljs.core.Symbol(null,"pnodes","pnodes",-915355204,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"end?","end?",217139918,null)], null);
}));

(blog.zipper.Zipper.cljs$lang$type = true);

(blog.zipper.Zipper.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"blog.zipper/Zipper",null,(1),null));
}));

(blog.zipper.Zipper.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write.call(null,writer__4547__auto__,"blog.zipper/Zipper");
}));

/**
 * Positional factory function for blog.zipper/Zipper.
 */
blog.zipper.__GT_Zipper = (function blog$zipper$__GT_Zipper(branch_QMARK_,children,make_node,node,ppath,pnodes,l,r,end_QMARK_){
return (new blog.zipper.Zipper(branch_QMARK_,children,make_node,node,ppath,pnodes,l,r,end_QMARK_,null,null,null));
});

/**
 * Factory function for blog.zipper/Zipper, taking a map of keywords to field values.
 */
blog.zipper.map__GT_Zipper = (function blog$zipper$map__GT_Zipper(G__39166){
var extmap__4542__auto__ = (function (){var G__39176 = cljs.core.dissoc.call(null,G__39166,new cljs.core.Keyword(null,"branch?","branch?",-999323007),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"make-node","make-node",1103973934),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"ppath","ppath",-1758182784),new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"end?","end?",-1423391609));
if(cljs.core.record_QMARK_.call(null,G__39166)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__39176);
} else {
return G__39176;
}
})();
return (new blog.zipper.Zipper(new cljs.core.Keyword(null,"branch?","branch?",-999323007).cljs$core$IFn$_invoke$arity$1(G__39166),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__39166),new cljs.core.Keyword(null,"make-node","make-node",1103973934).cljs$core$IFn$_invoke$arity$1(G__39166),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__39166),new cljs.core.Keyword(null,"ppath","ppath",-1758182784).cljs$core$IFn$_invoke$arity$1(G__39166),new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1(G__39166),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(G__39166),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__39166),new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(G__39166),null,cljs.core.not_empty.call(null,extmap__4542__auto__),null));
});

blog.zipper.zipper = (function blog$zipper$zipper(branch_QMARK_,children,make_node,node){
return blog.zipper.__GT_Zipper.call(null,branch_QMARK_,children,make_node,node,null,null,null,null,null);
});
blog.zipper.branch_QMARK_ = (function blog$zipper$branch_QMARK_(p__39179){
var map__39180 = p__39179;
var map__39180__$1 = cljs.core.__destructure_map.call(null,map__39180);
var branch_QMARK_ = cljs.core.get.call(null,map__39180__$1,new cljs.core.Keyword(null,"branch?","branch?",-999323007));
var node = cljs.core.get.call(null,map__39180__$1,new cljs.core.Keyword(null,"node","node",581201198));
return branch_QMARK_.call(null,node);
});
blog.zipper.children = (function blog$zipper$children(p__39181){
var map__39182 = p__39181;
var map__39182__$1 = cljs.core.__destructure_map.call(null,map__39182);
var children = cljs.core.get.call(null,map__39182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var node = cljs.core.get.call(null,map__39182__$1,new cljs.core.Keyword(null,"node","node",581201198));
return children.call(null,node);
});
blog.zipper.make_node = (function blog$zipper$make_node(p__39183,children){
var map__39184 = p__39183;
var map__39184__$1 = cljs.core.__destructure_map.call(null,map__39184);
var make_node = cljs.core.get.call(null,map__39184__$1,new cljs.core.Keyword(null,"make-node","make-node",1103973934));
var node = cljs.core.get.call(null,map__39184__$1,new cljs.core.Keyword(null,"node","node",581201198));
return make_node.call(null,node,children);
});
/**
 * Returns a seq of nodes leading to this loc
 */
blog.zipper.path = (function blog$zipper$path(loc){
return new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1(loc);
});
/**
 * Returns a seq of the left siblings of this loc
 */
blog.zipper.lefts = (function blog$zipper$lefts(loc){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(loc));
});
/**
 * Returns a seq of the right siblings of this loc
 */
blog.zipper.rights = (function blog$zipper$rights(loc){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(loc);
});
/**
 * Returns the loc of the leftmost child of the node at this loc, or
 *   nil if no children
 */
blog.zipper.down = (function blog$zipper$down(loc){
if(cljs.core.truth_(blog.zipper.branch_QMARK_.call(null,loc))){
var map__39185 = loc;
var map__39185__$1 = cljs.core.__destructure_map.call(null,map__39185);
var node = cljs.core.get.call(null,map__39185__$1,new cljs.core.Keyword(null,"node","node",581201198));
var path = cljs.core.get.call(null,map__39185__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pnodes = cljs.core.get.call(null,map__39185__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var vec__39186 = blog.zipper.children.call(null,loc);
var seq__39187 = cljs.core.seq.call(null,vec__39186);
var first__39188 = cljs.core.first.call(null,seq__39187);
var seq__39187__$1 = cljs.core.next.call(null,seq__39187);
var c = first__39188;
var cnext = seq__39187__$1;
var cs = vec__39186;
if(cljs.core.truth_(cs)){
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),(cljs.core.truth_(pnodes)?cljs.core.conj.call(null,pnodes,node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),new cljs.core.Keyword(null,"ppath","ppath",-1758182784),loc,new cljs.core.Keyword(null,"r","r",-471384190),cnext);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at
 *   the top
 */
blog.zipper.up = (function blog$zipper$up(loc){
var vec__39189 = loc;
var node = cljs.core.nth.call(null,vec__39189,(0),null);
var map__39192 = cljs.core.nth.call(null,vec__39189,(1),null);
var map__39192__$1 = cljs.core.__destructure_map.call(null,map__39192);
var path = map__39192__$1;
var l = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var r = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var changed_QMARK_ = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(pnodes)){
var pnode = cljs.core.peek.call(null,pnodes);
return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.zipper.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__4251__auto__ = ppath;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__4251__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any
 *  changes.
 */
blog.zipper.root = (function blog$zipper$root(loc){
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1)))){
return blog.zipper.node.call(null,loc);
} else {
var p = blog.zipper.up.call(null,loc);
if(cljs.core.truth_(p)){
var G__39193 = p;
loc = G__39193;
continue;
} else {
return blog.zipper.node.call(null,loc);
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
blog.zipper.right = (function blog$zipper$right(loc){
var vec__39194 = loc;
var node = cljs.core.nth.call(null,vec__39194,(0),null);
var map__39197 = cljs.core.nth.call(null,vec__39194,(1),null);
var map__39197__$1 = cljs.core.__destructure_map.call(null,map__39197);
var path = map__39197__$1;
var l = cljs.core.get.call(null,map__39197__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var vec__39198 = cljs.core.get.call(null,map__39197__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var seq__39199 = cljs.core.seq.call(null,vec__39198);
var first__39200 = cljs.core.first.call(null,seq__39199);
var seq__39199__$1 = cljs.core.next.call(null,seq__39199);
var r = first__39200;
var rnext = seq__39199__$1;
var rs = vec__39198;
if(cljs.core.truth_((function (){var and__4251__auto__ = path;
if(cljs.core.truth_(and__4251__auto__)){
return rs;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.conj.call(null,l,node),new cljs.core.Keyword(null,"r","r",-471384190),rnext)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
blog.zipper.rightmost = (function blog$zipper$rightmost(loc){
var vec__39201 = loc;
var node = cljs.core.nth.call(null,vec__39201,(0),null);
var map__39204 = cljs.core.nth.call(null,vec__39201,(1),null);
var map__39204__$1 = cljs.core.__destructure_map.call(null,map__39204);
var path = map__39204__$1;
var l = cljs.core.get.call(null,map__39204__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.call(null,map__39204__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__4251__auto__ = path;
if(cljs.core.truth_(and__4251__auto__)){
return r;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,r),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.apply.call(null,cljs.core.conj,l,node,cljs.core.butlast.call(null,r)),new cljs.core.Keyword(null,"r","r",-471384190),null)], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Returns the loc of the left sibling of the node at this loc, or nil
 */
blog.zipper.left = (function blog$zipper$left(loc){
var vec__39205 = loc;
var node = cljs.core.nth.call(null,vec__39205,(0),null);
var map__39208 = cljs.core.nth.call(null,vec__39205,(1),null);
var map__39208__$1 = cljs.core.__destructure_map.call(null,map__39208);
var path = map__39208__$1;
var l = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.call(null,map__39208__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__4251__auto__ = path;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq.call(null,l);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.cons.call(null,node,r))], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost sibling of the node at this loc, or self
 */
blog.zipper.leftmost = (function blog$zipper$leftmost(loc){
var vec__39209 = loc;
var node = cljs.core.nth.call(null,vec__39209,(0),null);
var map__39212 = cljs.core.nth.call(null,vec__39209,(1),null);
var map__39212__$1 = cljs.core.__destructure_map.call(null,map__39212);
var path = map__39212__$1;
var l = cljs.core.get.call(null,map__39212__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.call(null,map__39212__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__4251__auto__ = path;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq.call(null,l);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.concat.call(null,cljs.core.rest.call(null,l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),r))], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc,
 *  without moving
 */
blog.zipper.insert_left = (function blog$zipper$insert_left(loc,item){
var vec__39213 = loc;
var node = cljs.core.nth.call(null,vec__39213,(0),null);
var map__39216 = cljs.core.nth.call(null,vec__39213,(1),null);
var map__39216__$1 = cljs.core.__destructure_map.call(null,map__39216);
var path = map__39216__$1;
var l = cljs.core.get.call(null,map__39216__$1,new cljs.core.Keyword(null,"l","l",1395893423));
if((path == null)){
throw (new blog.zipper.Exception("Insert at top"));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc,
 *   without moving
 */
blog.zipper.insert_right = (function blog$zipper$insert_right(loc,item){
var vec__39217 = loc;
var node = cljs.core.nth.call(null,vec__39217,(0),null);
var map__39220 = cljs.core.nth.call(null,vec__39217,(1),null);
var map__39220__$1 = cljs.core.__destructure_map.call(null,map__39220);
var path = map__39220__$1;
var r = cljs.core.get.call(null,map__39220__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw (new blog.zipper.Exception("Insert at top"));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
 * Replaces the node at this loc, without moving
 */
blog.zipper.replace = (function blog$zipper$replace(loc,node){
var vec__39221 = loc;
var _ = cljs.core.nth.call(null,vec__39221,(0),null);
var path = cljs.core.nth.call(null,vec__39221,(1),null);
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
blog.zipper.edit = (function blog$zipper$edit(var_args){
var args__4870__auto__ = [];
var len__4864__auto___39227 = arguments.length;
var i__4865__auto___39228 = (0);
while(true){
if((i__4865__auto___39228 < len__4864__auto___39227)){
args__4870__auto__.push((arguments[i__4865__auto___39228]));

var G__39229 = (i__4865__auto___39228 + (1));
i__4865__auto___39228 = G__39229;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return blog.zipper.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(blog.zipper.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return blog.zipper.replace.call(null,loc,cljs.core.apply.call(null,f,blog.zipper.node.call(null,loc),args));
}));

(blog.zipper.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(blog.zipper.edit.cljs$lang$applyTo = (function (seq39224){
var G__39225 = cljs.core.first.call(null,seq39224);
var seq39224__$1 = cljs.core.next.call(null,seq39224);
var G__39226 = cljs.core.first.call(null,seq39224__$1);
var seq39224__$2 = cljs.core.next.call(null,seq39224__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39225,G__39226,seq39224__$2);
}));

/**
 * Inserts the item as the leftmost child of the node at this loc,
 *   without moving
 */
blog.zipper.insert_child = (function blog$zipper$insert_child(loc,item){
return blog.zipper.replace.call(null,loc,blog.zipper.make_node.call(null,loc,blog.zipper.node.call(null,loc),cljs.core.cons.call(null,item,blog.zipper.children.call(null,loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc,
 *   without moving
 */
blog.zipper.append_child = (function blog$zipper$append_child(loc,item){
return blog.zipper.replace.call(null,loc,blog.zipper.make_node.call(null,loc,blog.zipper.node.call(null,loc),cljs.core.concat.call(null,blog.zipper.children.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Moves to the next loc in the hierarchy, depth-first. When reaching
 *   the end, returns a distinguished loc detectable via end?. If already
 *   at the end, stays there.
 */
blog.zipper.next = (function blog$zipper$next(loc){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1)))){
return loc;
} else {
var or__4253__auto__ = (function (){var and__4251__auto__ = blog.zipper.branch_QMARK_.call(null,loc);
if(cljs.core.truth_(and__4251__auto__)){
return blog.zipper.down.call(null,loc);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = blog.zipper.right.call(null,loc);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(blog.zipper.up.call(null,p))){
var or__4253__auto____$2 = blog.zipper.right.call(null,blog.zipper.up.call(null,p));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var G__39230 = blog.zipper.up.call(null,p);
p = G__39230;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.zipper.node.call(null,p),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
}
}
});
/**
 * Moves to the previous loc in the hierarchy, depth-first. If already
 *   at the root, returns nil.
 */
blog.zipper.prev = (function blog$zipper$prev(loc){
var temp__5718__auto__ = blog.zipper.left.call(null,loc);
if(cljs.core.truth_(temp__5718__auto__)){
var lloc = temp__5718__auto__;
var loc__$1 = lloc;
while(true){
var temp__5718__auto____$1 = (function (){var and__4251__auto__ = blog.zipper.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__4251__auto__)){
return blog.zipper.down.call(null,loc__$1);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var child = temp__5718__auto____$1;
var G__39231 = blog.zipper.rightmost.call(null,child);
loc__$1 = G__39231;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return blog.zipper.up.call(null,loc);
}
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
blog.zipper.end_QMARK_ = (function blog$zipper$end_QMARK_(loc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1)));
});
/**
 * Removes the node at loc, returning the loc that would have preceded
 *   it in a depth-first walk.
 */
blog.zipper.remove = (function blog$zipper$remove(loc){
var vec__39232 = loc;
var node = cljs.core.nth.call(null,vec__39232,(0),null);
var map__39235 = cljs.core.nth.call(null,vec__39232,(1),null);
var map__39235__$1 = cljs.core.__destructure_map.call(null,map__39235);
var path = map__39235__$1;
var l = cljs.core.get.call(null,map__39235__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__39235__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__39235__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.call(null,map__39235__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw (new blog.zipper.Exception("Remove at top"));
} else {
if((cljs.core.count.call(null,l) > (0))){
var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
while(true){
var temp__5718__auto__ = (function (){var and__4251__auto__ = blog.zipper.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__4251__auto__)){
return blog.zipper.down.call(null,loc__$1);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
var G__39236 = blog.zipper.rightmost.call(null,child);
loc__$1 = G__39236;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.zipper.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__4251__auto__ = ppath;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__4251__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});

//# sourceMappingURL=zipper.js.map
