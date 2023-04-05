// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.demo');
goog.require('cljs.core');
goog.require('blog.traverse');
goog.require('blog.events');
goog.require('blog.scrolling');
goog.require('blog.parser');
goog.require('blog.utils');
goog.require('blog.render');
goog.require('clojure.zip');
goog.require('com.rpl.specter');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('reagent.dom');
blog.demo.dom_branch_QMARK_ = (function blog$demo$dom_branch_QMARK_(node){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(node);
});
blog.demo.dom_children = (function blog$demo$dom_children(node){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(node);
});
blog.demo.dom_make_node = (function blog$demo$dom_make_node(node,children){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),children);
});


blog.demo.DOM_CHILDREN_select_STAR_ = (function blog$demo$DOM_CHILDREN_select_STAR_(structure,next_fn){
return next_fn.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(structure));
});

blog.demo.DOM_CHILDREN_transform_STAR_ = (function blog$demo$DOM_CHILDREN_transform_STAR_(structure,next_fn){
return cljs.core.update.call(null,structure,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),next_fn);
});

blog.demo.DOM_CHILDREN = (function (){
if((typeof blog !== 'undefined') && (typeof blog.demo !== 'undefined') && (typeof blog.demo.t_blog$demo103888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
blog.demo.t_blog$demo103888 = (function (meta103889){
this.meta103889 = meta103889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(blog.demo.t_blog$demo103888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103890,meta103889__$1){
var self__ = this;
var _103890__$1 = this;
return (new blog.demo.t_blog$demo103888(meta103889__$1));
}));

(blog.demo.t_blog$demo103888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103890){
var self__ = this;
var _103890__$1 = this;
return self__.meta103889;
}));

(blog.demo.t_blog$demo103888.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(blog.demo.t_blog$demo103888.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17473__auto__,vals__17474__auto__,structure,next_fn__17475__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
var next_fn = (function (s__17476__auto__){
return next_fn__17475__auto__.call(null,vals__17474__auto__,s__17476__auto__);
});
return next_fn.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(structure));
}));

(blog.demo.t_blog$demo103888.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17473__auto__,vals__17474__auto__,structure,next_fn__17475__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
var next_fn = (function (s__17476__auto__){
return next_fn__17475__auto__.call(null,vals__17474__auto__,s__17476__auto__);
});
return cljs.core.update.call(null,structure,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),next_fn);
}));

(blog.demo.t_blog$demo103888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta103889","meta103889",831796001,null)], null);
}));

(blog.demo.t_blog$demo103888.cljs$lang$type = true);

(blog.demo.t_blog$demo103888.cljs$lang$ctorStr = "blog.demo/t_blog$demo103888");

(blog.demo.t_blog$demo103888.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"blog.demo/t_blog$demo103888");
}));

/**
 * Positional factory function for blog.demo/t_blog$demo103888.
 */
blog.demo.__GT_t_blog$demo103888 = (function blog$demo$__GT_t_blog$demo103888(meta103889){
return (new blog.demo.t_blog$demo103888(meta103889));
});

}

return (new blog.demo.t_blog$demo103888(null));
})()
;
blog.demo.t = (function blog$demo$t(){
return blog.traverse.traverse.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"text","text",-1790561697),"yams"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),"butter"], null),"Hiccup",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Eggs","Bacon"], null)], null),"Beer Can","Bacon"], null)], null),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"text-col","text-col",-1717205126),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"text-col","text-col",-1717205126),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-col","text-col",-1717205126)], null),new cljs.core.Keyword(null,"acc","acc",838566312),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (node,c){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),c);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function blog$demo$t_$_string__GT_map(p__103891){
var map__103892 = p__103891;
var map__103892__$1 = cljs.core.__destructure_map.call(null,map__103892);
var node = cljs.core.get.call(null,map__103892__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(typeof node === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),node], null)], null);
} else {
return null;
}
}),(function blog$demo$t_$_add_ns(p__103893){
var map__103894 = p__103893;
var map__103894__$1 = cljs.core.__destructure_map.call(null,map__103894);
var node = cljs.core.get.call(null,map__103894__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ns = cljs.core.get.call(null,map__103894__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"ns","ns",441598760),ns)], null);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function blog$demo$t_$_log_prev_id(p__103895){
var map__103896 = p__103895;
var map__103896__$1 = cljs.core.__destructure_map.call(null,map__103896);
var current_id = cljs.core.get.call(null,map__103896__$1,new cljs.core.Keyword(null,"current-id","current-id",210783650));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-id","prev-id",1028193202),current_id], null);
}),(function blog$demo$t_$_gen_current_id(p__103897){
var map__103898 = p__103897;
var map__103898__$1 = cljs.core.__destructure_map.call(null,map__103898);
var next_id = cljs.core.get.call(null,map__103898__$1,new cljs.core.Keyword(null,"next-id","next-id",-224240762));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-id","current-id",210783650),next_id], null);
}),(function blog$demo$t_$_gen_next_id(p__103899){
var map__103900 = p__103899;
var map__103900__$1 = cljs.core.__destructure_map.call(null,map__103900);
var next_id = cljs.core.get.call(null,map__103900__$1,new cljs.core.Keyword(null,"next-id","next-id",-224240762));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),(next_id + (1))], null);
}),(function blog$demo$t_$_add_ids_to_node(p__103901){
var map__103902 = p__103901;
var map__103902__$1 = cljs.core.__destructure_map.call(null,map__103902);
var current_id = cljs.core.get.call(null,map__103902__$1,new cljs.core.Keyword(null,"current-id","current-id",210783650));
var prev_id = cljs.core.get.call(null,map__103902__$1,new cljs.core.Keyword(null,"prev-id","prev-id",1028193202));
var next_id = cljs.core.get.call(null,map__103902__$1,new cljs.core.Keyword(null,"next-id","next-id",-224240762));
var node = cljs.core.get.call(null,map__103902__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent_id = cljs.core.get.call(null,map__103902__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"id","id",-1388402092),current_id,new cljs.core.Keyword(null,"prev","prev",-1597069226),prev_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_id)], null);
}),(function blog$demo$t_$_update_parent_id(p__103903){
var map__103904 = p__103903;
var map__103904__$1 = cljs.core.__destructure_map.call(null,map__103904);
var node = cljs.core.get.call(null,map__103904__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node)], null);
} else {
return null;
}
})], null),(function blog$demo$t_$_init_class(p__103905){
var map__103906 = p__103905;
var map__103906__$1 = cljs.core.__destructure_map.call(null,map__103906);
var node = cljs.core.get.call(null,map__103906__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(node))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.EMPTY)], null);
}
}),(function blog$demo$t_$_init_styles(p__103907){
var map__103908 = p__103907;
var map__103908__$1 = cljs.core.__destructure_map.call(null,map__103908);
var node = cljs.core.get.call(null,map__103908__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(node))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY)], null);
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function blog$demo$t_$_gather(p__103909){
var map__103910 = p__103909;
var map__103910__$1 = cljs.core.__destructure_map.call(null,map__103910);
var node = cljs.core.get.call(null,map__103910__$1,new cljs.core.Keyword(null,"node","node",581201198));
var acc = cljs.core.get.call(null,map__103910__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acc","acc",838566312),cljs.core.conj.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),node]))], null);
}),(function blog$demo$t_$_restore_parent_id(p__103911){
var map__103912 = p__103911;
var map__103912__$1 = cljs.core.__destructure_map.call(null,map__103912);
var node = cljs.core.get.call(null,map__103912__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(node))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(node)], null);
} else {
return null;
}
})], null));
});
blog.demo.add_class = (function blog$demo$add_class(){
return null;
});
blog.demo.remove_class = (function blog$demo$remove_class(){
return null;
});
blog.demo.data__GT_attrs = (function blog$demo$data__GT_attrs(data){
return null;
});
if((typeof blog !== 'undefined') && (typeof blog.demo !== 'undefined') && (typeof blog.demo.format_by_ctx !== 'undefined')){
} else {
blog.demo.format_by_ctx = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.demo","format-by-ctx"),cljs.core.comp.call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"node","node",581201198)),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.demo.format_by_ctx,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,blog.demo.format_by_ctx,new cljs.core.Keyword(null,"clj","clj",-660495428),(function (_){
return null;
}));
cljs.core._add_method.call(null,blog.demo.format_by_ctx,new cljs.core.Keyword(null,"haskell","haskell",1657496483),(function (_){
return null;
}));
cljs.core._add_method.call(null,blog.events.event,new cljs.core.Keyword(null,"change-class","change-class",1784824391),(function (){
return null;
}));
blog.demo.walk = com.rpl.specter.impl.direct_nav_obj.call(null,(function (f){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__18323__auto__ = blog.demo.pathcache103913;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103914 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(cljs.core.truth_(com.rpl.specter.pred.call(null,blog.demo.dom_branch_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,blog.demo.DOM_CHILDREN,com.rpl.specter.ALL,p),com.rpl.specter.view.call(null,f)], null):com.rpl.specter.STAY),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"dom-branch?","dom-branch?",637446637,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"DOM-CHILDREN","DOM-CHILDREN",103723907,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),new cljs.core.Symbol(null,"f","f",43394975,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)))], null),"blog.demo",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"dom-branch?","dom-branch?",637446637,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"DOM-CHILDREN","DOM-CHILDREN",103723907,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Symbol(null,"p","p",1791580836,null)),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),new cljs.core.Symbol(null,"f","f",43394975,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null))], null));
blog.demo.pathcache103913 = info103914;

return info103914;
})():info__18323__auto__);
var precompiled103915 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103915.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(com.rpl.specter.pred.call(null,blog.demo.dom_branch_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue.call(null,blog.demo.DOM_CHILDREN,com.rpl.specter.ALL,p),com.rpl.specter.view.call(null,f)], null):com.rpl.specter.STAY)], null));
} else {
return precompiled103915;
}
})());

return p;
}));
blog.demo.preprocess_dom_data = (function blog$demo$preprocess_dom_data(data){
var event = (function (dir){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"est-focus","est-focus",-1360032879),dir,data], null);
});
var data__$1 = cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"event","event",301435442),event);
var ns = cljs.core.get.call(null,data__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var split_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"split","split",-599435118),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data__$1));
var data__$2 = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.demo.pathcache103916;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103917 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,blog.demo.DOM_CHILDREN,new cljs.core.Var(function(){return blog.demo.DOM_CHILDREN;},new cljs.core.Symbol("blog.demo","DOM-CHILDREN","blog.demo/DOM-CHILDREN",-827445198,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.demo","blog.demo",-507525768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"DOM-CHILDREN","DOM-CHILDREN",103723907,null),"/Users/kyleeschen/Desktop/Blog/src/blog/demo.cljs",23,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(blog.demo.DOM_CHILDREN)?blog.demo.DOM_CHILDREN.cljs$lang$test:null)])),new cljs.core.Symbol(null,"DOM-CHILDREN","DOM-CHILDREN",103723907,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null))], null)], null),"blog.demo",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DOM-CHILDREN","DOM-CHILDREN",103723907,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)], null),new cljs.core.Symbol(null,"DOM-CHILDREN","DOM-CHILDREN",103723907,null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)], null));
blog.demo.pathcache103916 = info103917;

return info103917;
})():info__18323__auto__);
var precompiled103918 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103918.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.DOM_CHILDREN,com.rpl.specter.ALL], null),blog.demo.DOM_CHILDREN,com.rpl.specter.ALL], null));
} else {
return precompiled103918;
}
})(),(function (node){
var node__$1 = ((typeof node === 'string')?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null,"node-"),new cljs.core.Keyword(null,"text","text",-1790561697),node], null):(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node))?node:cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null))));
return cljs.core.assoc.call(null,node__$1,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"split?","split?",-1633274741),split_QMARK_);
}),data__$1);
return data__$2;
});
if((typeof blog !== 'undefined') && (typeof blog.demo !== 'undefined') && (typeof blog.demo._render !== 'undefined')){
} else {
blog.demo._render = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.demo","-render"),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.demo.data__GT_id = (function blog$demo$data__GT_id(data){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data);
});
blog.demo.register_parent_id = (function blog$demo$register_parent_id(p__103919){
var map__103920 = p__103919;
var map__103920__$1 = cljs.core.__destructure_map.call(null,map__103920);
var ns = cljs.core.get.call(null,map__103920__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var id = cljs.core.get.call(null,map__103920__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return re_frame.core.reg_sub.call(null,id,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),(function (data,p__103921){
var vec__103922 = p__103921;
var _ = cljs.core.nth.call(null,vec__103922,(0),null);
var node_id = cljs.core.nth.call(null,vec__103922,(1),null);
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,node_id], null));
}));
});
blog.demo.tempo = (function blog$demo$tempo(){
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"text-col-check","text-col-check",-1861864863),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922)], null),(function (dom,_){
return cljs.core.get.call(null,dom,new cljs.core.Keyword(null,"text-col","text-col",-1717205126));
}));

return re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"text-col","text-col",-1717205126),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-col-check","text-col-check",-1861864863)], null),(function (dom,p__103925){
var vec__103926 = p__103925;
var _ = cljs.core.nth.call(null,vec__103926,(0),null);
var map__103929 = cljs.core.nth.call(null,vec__103926,(1),null);
var map__103929__$1 = cljs.core.__destructure_map.call(null,map__103929);
var id = cljs.core.get.call(null,map__103929__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.get.call(null,dom,id);
}));
});
blog.demo.tempo.call(null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"appendo","appendo",1344465946),(function (db,p__103930){
var vec__103931 = p__103930;
var _ = cljs.core.nth.call(null,vec__103931,(0),null);
var path = cljs.core.nth.call(null,vec__103931,(1),null);
var nodes = cljs.core.nth.call(null,vec__103931,(2),null);
return com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.demo.pathcache103934;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103935 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),com.rpl.specter.impl.__GT_LocalSym.call(null,path,new cljs.core.Symbol(null,"path","path",1452340359,null))], null)], null),"blog.demo",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),new cljs.core.Symbol(null,"path","path",1452340359,null)], null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null));
blog.demo.pathcache103934 = info103935;

return info103935;
})():info__18323__auto__);
var precompiled103936 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103936.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),path], null),path], null));
} else {
return precompiled103936;
}
})(),(function (node){
return cljs.core.apply.call(null,cljs.core.merge,node,nodes);
}),db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"dom","dom",-1236537922));
}));
blog.demo.render_tree = (function blog$demo$render_tree(nodes){
var tree = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.demo.pathcache103937;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103938 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,blog.demo.walk,new cljs.core.Var(function(){return blog.demo.walk;},new cljs.core.Symbol("blog.demo","walk","blog.demo/walk",406739773,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.demo","blog.demo",-507525768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"walk","walk",1673453164,null),"/Users/kyleeschen/Desktop/Blog/src/blog/demo.cljs",10,1,178,178,cljs.core.List.EMPTY,null,(cljs.core.truth_(blog.demo.walk)?blog.demo.walk.cljs$lang$test:null)])),new cljs.core.Symbol(null,"walk","walk",1673453164,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.identity,new cljs.core.Var(function(){return cljs.core.identity;},new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),"cljs/core.cljs",(15),(1),(2598),(2598),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns its argument.",(cljs.core.truth_(cljs.core.identity)?cljs.core.identity.cljs$lang$test:null)])),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))], null),cljs.core.list(new cljs.core.Symbol(null,"walk","walk",1673453164,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)))], null),"blog.demo",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"walk","walk",1673453164,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)], null));
blog.demo.pathcache103937 = info103938;

return info103938;
})():info__18323__auto__);
var precompiled103939 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103939.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.walk,cljs.core.identity], null));
} else {
return precompiled103939;
}
})(),blog.demo.preprocess_dom_data,nodes);
var nodes__$1 = com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__18323__auto__ = blog.demo.pathcache103940;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103941 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,blog.demo.walk,new cljs.core.Var(function(){return blog.demo.walk;},new cljs.core.Symbol("blog.demo","walk","blog.demo/walk",406739773,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"blog.demo","blog.demo",-507525768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),true], null)),new cljs.core.Symbol(null,"walk","walk",1673453164,null),"/Users/kyleeschen/Desktop/Blog/src/blog/demo.cljs",10,1,178,178,cljs.core.List.EMPTY,null,(cljs.core.truth_(blog.demo.walk)?blog.demo.walk.cljs$lang$test:null)])),new cljs.core.Symbol(null,"walk","walk",1673453164,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,cljs.core.identity,new cljs.core.Var(function(){return cljs.core.identity;},new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),"cljs/core.cljs",(15),(1),(2598),(2598),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns its argument.",(cljs.core.truth_(cljs.core.identity)?cljs.core.identity.cljs$lang$test:null)])),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))], null),cljs.core.list(new cljs.core.Symbol(null,"walk","walk",1673453164,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null))),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.view,new cljs.core.Var(function(){return com.rpl.specter.view;},new cljs.core.Symbol("com.rpl.specter","view","com.rpl.specter/view",542493804,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1098),(1100),cljs.core.List.EMPTY,"Navigates to result of running `afn` on the currently navigated value.",(cljs.core.truth_(com.rpl.specter.view)?com.rpl.specter.view.cljs$lang$test:null)])),new cljs.core.Symbol("s","view","s/view",-1406441066,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (node){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),node]);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null)),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)))], null),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null)),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null))))], null)], null),"blog.demo",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"walk","walk",1673453164,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null)),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null)))], null),new cljs.core.Symbol(null,"walk","walk",1673453164,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"node","node",-2073234571,null)),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null))], null));
blog.demo.pathcache103940 = info103941;

return info103941;
})():info__18323__auto__);
var precompiled103942 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103942.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.walk.call(null,cljs.core.identity),com.rpl.specter.view.call(null,(function (node){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),node]);
}))], null),blog.demo.walk,cljs.core.identity,com.rpl.specter.view,(function (node){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),node]);
})], null));
} else {
return precompiled103942;
}
})(),tree);
blog.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"appendo","appendo",1344465946),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(tree),nodes__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.render_STAR__STAR_,tree], null);
});
blog.demo.render_tree_STAR_ = (function blog$demo$render_tree_STAR_(nodes){
var map__103943 = blog.demo.t.call(null);
var map__103943__$1 = cljs.core.__destructure_map.call(null,map__103943);
var acc = cljs.core.get.call(null,map__103943__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
var node = cljs.core.get.call(null,map__103943__$1,new cljs.core.Keyword(null,"node","node",581201198));
blog.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"appendo","appendo",1344465946),new cljs.core.Keyword(null,"text-col","text-col",-1717205126),acc], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.render_STAR__STAR_,node], null);
});
blog.demo.process_dom_data = (function blog$demo$process_dom_data(ast){
var ast_STAR_ = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.demo.pathcache103944;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103945 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.collect_one,new cljs.core.Var(function(){return com.rpl.specter.collect_one;},new cljs.core.Symbol("com.rpl.specter","collect-one","com.rpl.specter/collect-one",-881596172,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),(1338),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.collect_one)?com.rpl.specter.collect_one.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),"blog.demo",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Symbol("s","collect-one","s/collect-one",1193571294,null)], null));
blog.demo.pathcache103944 = info103945;

return info103945;
})():info__18323__auto__);
var precompiled103946 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103946.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.collect_one.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null),com.rpl.specter.collect_one], null));
} else {
return precompiled103946;
}
})(),(function (id,ast__$1){
return id;
}),ast);
var ast_STAR___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(ast))?com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.demo.pathcache103947;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103948 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null)], null),"blog.demo",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null)], null));
blog.demo.pathcache103947 = info103948;

return info103948;
})():info__18323__auto__);
var precompiled103949 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103949.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"class","class",-2030961996)], null)], null));
} else {
return precompiled103949;
}
})(),(function (cls){
if(cljs.core.truth_(cls)){
return cljs.core.conj.call(null,cls,"text");
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["text",null], null), null);
}
}),ast_STAR_):ast_STAR_);
return ast_STAR___$1;
});
blog.demo.add_event = (function blog$demo$add_event(data){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"split-text","split-text",765005430),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
try{var temp__5718__auto__ = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5718__auto__)){
var event = temp__5718__auto__;
return blog.scrolling.set_scroll_trigger.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(blog.demo.data__GT_id.call(null,data)),(function (dir){
if(cljs.core._EQ_.call(null,"down")){
return blog.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"run","run",-1821166653),new cljs.core.Keyword(null,"change-focus","change-focus",261584114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null));
} else {
return blog.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
}
}));
} else {
return cljs.core.println.call(null,"");
}
}catch (e103950){if((e103950 instanceof Error)){
var e = e103950;
cljs.core.println.call(null,e);

return cljs.core.println.call(null,blog.demo.data__GT_id.call(null,data));
} else {
throw e103950;

}
}}
});
blog.demo.render_STAR__STAR_ = (function blog$demo$render_STAR__STAR_(data){
return (function (data__$1){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$,that){
if(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data__$1))){
return blog.demo.add_event.call(null,data__$1);
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
return blog.scrolling.rm_scroll_trigger.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data__$1));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (data__$2){
var temp__5720__auto__ = blog.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(data__$2),data__$2], null));
if(cljs.core.truth_(temp__5720__auto__)){
var data_STAR_ = temp__5720__auto__;
return blog.demo._render.call(null,blog.demo.process_dom_data.call(null,data_STAR_));
} else {
return null;
}
})], null));
});
});
blog.demo.add_dom_children = (function blog$demo$add_dom_children(el,ls){
return cljs.core.into.call(null,el,(function (){var iter__4652__auto__ = (function blog$demo$add_dom_children_$_iter__103951(s__103952){
return (new cljs.core.LazySeq(null,(function (){
var s__103952__$1 = s__103952;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__103952__$1);
if(temp__5720__auto__){
var s__103952__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103952__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__103952__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__103954 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__103953 = (0);
while(true){
if((i__103953 < size__4651__auto__)){
var l = cljs.core._nth.call(null,c__4650__auto__,i__103953);
cljs.core.chunk_append.call(null,b__103954,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.render_STAR__STAR_,l], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(l)], null)));

var G__103955 = (i__103953 + (1));
i__103953 = G__103955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103954),blog$demo$add_dom_children_$_iter__103951.call(null,cljs.core.chunk_rest.call(null,s__103952__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103954),null);
}
} else {
var l = cljs.core.first.call(null,s__103952__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.render_STAR__STAR_,l], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(l)], null)),blog$demo$add_dom_children_$_iter__103951.call(null,cljs.core.rest.call(null,s__103952__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,ls);
})());
});
cljs.core._add_method.call(null,blog.demo._render,null,(function (_){
return null;
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__103956){
var map__103957 = p__103956;
var map__103957__$1 = cljs.core.__destructure_map.call(null,map__103957);
var tag = cljs.core.get.call(null,map__103957__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.call(null,map__103957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var nodes = cljs.core.get.call(null,map__103957__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var text = cljs.core.get.call(null,map__103957__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var el = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs,text], null);
if(cljs.core.truth_(nodes)){
return blog.demo.add_dom_children.call(null,el,nodes);
} else {
return el;
}
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__103958){
var map__103959 = p__103958;
var map__103959__$1 = cljs.core.__destructure_map.call(null,map__103959);
var tag = cljs.core.get.call(null,map__103959__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var split_QMARK_ = cljs.core.get.call(null,map__103959__$1,new cljs.core.Keyword(null,"split?","split?",-1633274741));
var attrs = cljs.core.get.call(null,map__103959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var text = cljs.core.get.call(null,map__103959__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),attrs,text], null);
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"text-proxy","text-proxy",-1518947650),(function (p__103960){
var map__103961 = p__103960;
var map__103961__$1 = cljs.core.__destructure_map.call(null,map__103961);
var attrs = cljs.core.get.call(null,map__103961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var text = cljs.core.get.call(null,map__103961__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs], null);
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"split","split",-599435118),(function (p__103962){
var map__103963 = p__103962;
var map__103963__$1 = cljs.core.__destructure_map.call(null,map__103963);
var data = map__103963__$1;
var tag = cljs.core.get.call(null,map__103963__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.call(null,map__103963__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var nodes = cljs.core.get.call(null,map__103963__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var n = cljs.core.count.call(null,nodes);
var h = ((100) / n);
var triggers = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null))], null),cljs.core.map.call(null,(function (p__103964,i){
var map__103965 = p__103964;
var map__103965__$1 = cljs.core.__destructure_map.call(null,map__103965);
var id = cljs.core.get.call(null,map__103965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__103965__$1,new cljs.core.Keyword(null,"event","event",301435442));
var ns = cljs.core.get.call(null,map__103965__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var id_STAR_ = ["trigger-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var node = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"text-proxy","text-proxy",-1518947650),new cljs.core.Keyword(null,"proxy-id","proxy-id",-1551679302),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"id","id",-1388402092),id_STAR_,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentHashSet.EMPTY], null);
var attrs__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id_STAR_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * h)),"%"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"%"].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null);
var f = (function (node__$1){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return blog.demo.add_event.call(null,node__$1);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
return blog.scrolling.rm_scroll_trigger.call(null,id_STAR_);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs__$1], null);
})], null));
});
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,node], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id_STAR_], null));
}),cljs.core.conj.call(null,cljs.core.vec.call(null,nodes),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["conclude-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs))].join(''),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(data)], null)),cljs.core.range.call(null)));
var nodes__$1 = com.rpl.specter.impl.compiled_setval_STAR_.call(null,(function (){var info__18323__auto__ = blog.demo.pathcache103966;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103967 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(6),(1),(715),(718),cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)], null),"blog.demo",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ALL","s/ALL",866837282,null),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),new cljs.core.Symbol("s","ALL","s/ALL",866837282,null)], null));
blog.demo.pathcache103966 = info103967;

return info103967;
})():info__18323__auto__);
var precompiled103968 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103968.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),com.rpl.specter.ALL], null));
} else {
return precompiled103968;
}
})(),new cljs.core.Keyword(null,"split-text","split-text",765005430),nodes);
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__18323__auto__ = blog.demo.pathcache103969;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info103970 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null)], null),"blog.demo",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null)], null));
blog.demo.pathcache103969 = info103970;

return info103970;
})():info__18323__auto__);
var precompiled103971 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled103971.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null)], null));
} else {
return precompiled103971;
}
})(),(function (style){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null));
}),attrs),triggers], null),blog.demo.add_dom_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null))], null),nodes__$1));
}));
blog.demo.sym = (function blog$demo$sym(kw){
return goog.string.unescapeEntities(["&",cljs.core.name.call(null,kw),";"].join(''));
});
blog.demo.render_string = (function blog$demo$render_string(s){
var G__103972 = s;
switch (G__103972) {
case "\\":
return "\\";

break;
case "->":
return blog.demo.sym.call(null,new cljs.core.Keyword(null,"rarr","rarr",1314349589));

break;
case "<-":
return blog.demo.sym.call(null,new cljs.core.Keyword(null,"larr","larr",-902529465));

break;
case ">>":
return blog.demo.sym.call(null,new cljs.core.Keyword(null,"Gt","Gt",280052970));

break;
case "<<":
return blog.demo.sym.call(null,new cljs.core.Keyword(null,"Lt","Lt",-1525804001));

break;
case "+":
return blog.demo.sym.call(null,new cljs.core.Keyword(null,"plus","plus",211540661));

break;
case ",":
return " ,";

break;
default:
return s;

}
});
blog.demo.gen_random_delay = (function blog$demo$gen_random_delay(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * Math.random())),"s"].join('');
});
blog.demo.wrap_in_drift_divs = (function blog$demo$wrap_in_drift_divs(div){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drift-y","div.drift-y",-192664006),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d",new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),blog.demo.gen_random_delay.call(null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drift-x","div.drift-x",1583400825),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d",new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),blog.demo.gen_random_delay.call(null)], null)),div], null)], null);
});
blog.demo.coords__GT_trsl = (function blog$demo$coords__GT_trsl(p__103974){
var map__103975 = p__103974;
var map__103975__$1 = cljs.core.__destructure_map.call(null,map__103975);
var tx = cljs.core.get.call(null,map__103975__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__103975__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz = cljs.core.get.call(null,map__103975__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
var tx__$1 = (0.66 * tx);
var ty__$1 = ((2) * ty);
return ["translate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx__$1),"em, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty__$1),"em, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = tz;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})()),"em)"].join('');
});
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"root","root",-448657453),(function (p__103976){
var map__103977 = p__103976;
var map__103977__$1 = cljs.core.__destructure_map.call(null,map__103977);
var nodes = cljs.core.get.call(null,map__103977__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function blog$demo$iter__103978(s__103979){
return (new cljs.core.LazySeq(null,(function (){
var s__103979__$1 = s__103979;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__103979__$1);
if(temp__5720__auto__){
var s__103979__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103979__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__103979__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__103981 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__103980 = (0);
while(true){
if((i__103980 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__103980);
cljs.core.chunk_append.call(null,b__103981,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)], null)));

var G__103982 = (i__103980 + (1));
i__103980 = G__103982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103981),blog$demo$iter__103978.call(null,cljs.core.chunk_rest.call(null,s__103979__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103981),null);
}
} else {
var n = cljs.core.first.call(null,s__103979__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)], null)),blog$demo$iter__103978.call(null,cljs.core.rest.call(null,s__103979__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,nodes);
})());
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),(function (ast){
return blog.demo._render.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"token","token",-1211463215)));
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"token","token",-1211463215),(function (p__103983){
var map__103984 = p__103983;
var map__103984__$1 = cljs.core.__destructure_map.call(null,map__103984);
var ast = map__103984__$1;
var text = cljs.core.get.call(null,map__103984__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return blog.demo.wrap_in_drift_divs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),blog.demo.coords__GT_trsl.call(null,ast)], null)),blog.demo.render_string.call(null,text)], null));
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"branch","branch",-74633925),(function (p__103985){
var map__103986 = p__103985;
var map__103986__$1 = cljs.core.__destructure_map.call(null,map__103986);
var ast = map__103986__$1;
var nodes = cljs.core.get.call(null,map__103986__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preserve"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform","transform",1381301764),blog.demo.coords__GT_trsl.call(null,ast)], null))], null),(function (){var iter__4652__auto__ = (function blog$demo$iter__103987(s__103988){
return (new cljs.core.LazySeq(null,(function (){
var s__103988__$1 = s__103988;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__103988__$1);
if(temp__5720__auto__){
var s__103988__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103988__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__103988__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__103990 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__103989 = (0);
while(true){
if((i__103989 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__103989);
cljs.core.chunk_append.call(null,b__103990,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.render_STAR__STAR_,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)], null)));

var G__103991 = (i__103989 + (1));
i__103989 = G__103991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103990),blog$demo$iter__103987.call(null,cljs.core.chunk_rest.call(null,s__103988__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103990),null);
}
} else {
var n = cljs.core.first.call(null,s__103988__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.render_STAR__STAR_,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)], null)),blog$demo$iter__103987.call(null,cljs.core.rest.call(null,s__103988__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,nodes);
})());
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__103992){
var map__103993 = p__103992;
var map__103993__$1 = cljs.core.__destructure_map.call(null,map__103993);
var nodes = cljs.core.get.call(null,map__103993__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return blog.demo.add_dom_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),"1em"], null))], null),nodes);
}));
cljs.core._add_method.call(null,blog.demo._render,new cljs.core.Keyword("math","function","math/function",-2132303017),(function (p__103994){
var map__103995 = p__103994;
var map__103995__$1 = cljs.core.__destructure_map.call(null,map__103995);
var nodes = cljs.core.get.call(null,map__103995__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return blog.demo.add_dom_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),"1em"], null))], null),nodes);
}));
blog.demo.gibberish = cljs.core.take.call(null,(30),cljs.core.repeat.call(null," blah "));
blog.demo.inline_triggers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"split","split",-599435118),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"pen"], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),"This is a demo of an approach to tutorials which allows writers to stress salience. "], null),"As readers scroll, they trigger animations on the right side of the screen. ","This makes it easy for writers to point - in short, to convey ostensive definitions. ","This is a fourth sentence."], null)], null);
blog.demo.essay_text = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"text-col","text-col",-1717205126),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"70%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150em"], null),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["text-col",null], null), null)], null),new cljs.core.Keyword(null,"id","id",-1388402092),"wrapper",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"text","text",-1790561697),"Demo"], null),blog.demo.inline_triggers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"text","text",-1790561697),"Here's some wasted space!",new cljs.core.Keyword(null,"highlight?","highlight?",1074358487),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"text","text",-1790561697),"And here is more still!",new cljs.core.Keyword(null,"highlight?","highlight?",1074358487),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"highlight?","highlight?",1074358487),true,new cljs.core.Keyword(null,"text","text",-1790561697),"To the right one sees a meaningless array of symbols drifting like pollen in bile. In an effort to appear profound, I have made myself look all the more mathematically illiterate."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"highlight?","highlight?",1074358487),true,new cljs.core.Keyword(null,"text","text",-1790561697),"What is this a demo of? In a word, incompetence. Now, for some enumerated gibberish:"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (){var iter__4652__auto__ = (function blog$demo$iter__103996(s__103997){
return (new cljs.core.LazySeq(null,(function (){
var s__103997__$1 = s__103997;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__103997__$1);
if(temp__5720__auto__){
var s__103997__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103997__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__103997__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__103999 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__103998 = (0);
while(true){
if((i__103998 < size__4651__auto__)){
var i = cljs.core._nth.call(null,c__4650__auto__,i__103998);
cljs.core.chunk_append.call(null,b__103999,(function (){var i__$1 = (i + (1));
var id = ["par-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)].join('');
var text = cljs.core.apply.call(null,cljs.core.str,blog.demo.gibberish);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"highlight?","highlight?",1074358487),true], null);
})());

var G__104000 = (i__103998 + (1));
i__103998 = G__104000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103999),blog$demo$iter__103996.call(null,cljs.core.chunk_rest.call(null,s__103997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103999),null);
}
} else {
var i = cljs.core.first.call(null,s__103997__$2);
return cljs.core.cons.call(null,(function (){var i__$1 = (i + (1));
var id = ["par-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)].join('');
var text = cljs.core.apply.call(null,cljs.core.str,blog.demo.gibberish);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"highlight?","highlight?",1074358487),true], null);
})(),blog$demo$iter__103996.call(null,cljs.core.rest.call(null,s__103997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.range.call(null,(20)));
})()], null)], null)], null);
blog.demo.render_essay_text = (function blog$demo$render_essay_text(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-col","div.text-col",958484659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.render_tree,blog.demo.essay_text], null)], null);
});

//# sourceMappingURL=demo.js.map
