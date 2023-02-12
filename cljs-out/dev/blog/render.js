// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.render');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('goog.string');
blog.render.sym = (function blog$render$sym(kw){
return goog.string.unescapeEntities(["&",cljs.core.name.call(null,kw),";"].join(''));
});
blog.render.row = (function blog$render$row(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27639 = arguments.length;
var i__4865__auto___27640 = (0);
while(true){
if((i__4865__auto___27640 < len__4864__auto___27639)){
args__4870__auto__.push((arguments[i__4865__auto___27640]));

var G__27641 = (i__4865__auto___27640 + (1));
i__4865__auto___27640 = G__27641;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.render.row.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.render.row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row","div.math.row",486213500)], null),args);
}));

(blog.render.row.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.render.row.cljs$lang$applyTo = (function (seq27638){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27638));
}));

blog.render.$ = (function blog$render$$(var_args){
var G__27643 = arguments.length;
switch (G__27643) {
case 1:
return blog.render.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return blog.render.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blog.render.$.cljs$core$IFn$_invoke$arity$1 = (function (style){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null);
}));

(blog.render.$.cljs$core$IFn$_invoke$arity$2 = (function (attrs,style){
return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"style","style",-496642736),style);
}));

(blog.render.$.cljs$lang$maxFixedArity = 2);

if((typeof blog !== 'undefined') && (typeof blog.render !== 'undefined') && (typeof blog.render._render !== 'undefined')){
} else {
blog.render._render = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.render","-render"),new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.render.add_jostle = (function blog$render$add_jostle(el){
var f = (function (el__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jostle"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * cljs.core.rand.call(null))),"s"].join('')], null)),el__$1], null);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,el], null);
});
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27645){
var map__27646 = p__27645;
var map__27646__$1 = cljs.core.__destructure_map.call(null,map__27646);
var text = cljs.core.get.call(null,map__27646__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return blog.render.add_jostle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),text], null));
}));
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"equation","equation",-499527745),(function (p__27647){
var map__27648 = p__27647;
var map__27648__$1 = cljs.core.__destructure_map.call(null,map__27648);
var text = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var nodes = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row.spaced","div.math.row.spaced",-1629955391)], null),(function (){var iter__4652__auto__ = (function blog$render$iter__27649(s__27650){
return (new cljs.core.LazySeq(null,(function (){
var s__27650__$1 = s__27650;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27650__$1);
if(temp__5720__auto__){
var s__27650__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27650__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__27650__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__27652 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__27651 = (0);
while(true){
if((i__27651 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__27651);
cljs.core.chunk_append.call(null,b__27652,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__27653 = (i__27651 + (1));
i__27651 = G__27653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27652),blog$render$iter__27649.call(null,cljs.core.chunk_rest.call(null,s__27650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27652),null);
}
} else {
var n = cljs.core.first.call(null,s__27650__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),blog$render$iter__27649.call(null,cljs.core.rest.call(null,s__27650__$2)));
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
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"bracket","bracket",-600276523),(function (p__27654){
var map__27655 = p__27654;
var map__27655__$1 = cljs.core.__destructure_map.call(null,map__27655);
var text = cljs.core.get.call(null,map__27655__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var nodes = cljs.core.get.call(null,map__27655__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var border = "0.1em solid black";
var h = "100%";
var w = "0.1em";
var start = blog.render.add_jostle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border,new cljs.core.Keyword(null,"border-top","border-top",-158897573),border,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null)], null));
var end = blog.render.add_jostle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border,new cljs.core.Keyword(null,"border-top","border-top",-158897573),border,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null)], null)], null));
var container = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),"even-spacing",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex"], null)),start], null);
var innards = (function (){var iter__4652__auto__ = (function blog$render$iter__27656(s__27657){
return (new cljs.core.LazySeq(null,(function (){
var s__27657__$1 = s__27657;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27657__$1);
if(temp__5720__auto__){
var s__27657__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27657__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__27657__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__27659 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__27658 = (0);
while(true){
if((i__27658 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__27658);
cljs.core.chunk_append.call(null,b__27659,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__27660 = (i__27658 + (1));
i__27658 = G__27660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27659),blog$render$iter__27656.call(null,cljs.core.chunk_rest.call(null,s__27657__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27659),null);
}
} else {
var n = cljs.core.first.call(null,s__27657__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),blog$render$iter__27656.call(null,cljs.core.rest.call(null,s__27657__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,nodes);
})();
return cljs.core.conj.call(null,cljs.core.into.call(null,container,innards),end);
}));
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"matrix","matrix",803137200),(function (p__27661){
var map__27662 = p__27661;
var map__27662__$1 = cljs.core.__destructure_map.call(null,map__27662);
var dims = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"dims","dims",-466522889));
var nodes = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return (function (p__27663){
var map__27664 = p__27663;
var map__27664__$1 = cljs.core.__destructure_map.call(null,map__27664);
var dims__$1 = cljs.core.get.call(null,map__27664__$1,new cljs.core.Keyword(null,"dims","dims",-466522889));
var nodes__$1 = cljs.core.get.call(null,map__27664__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var t_QMARK_ = cljs.core.get.call(null,map__27664__$1,new cljs.core.Keyword(null,"t?","t?",611880130));
var vec__27665 = dims__$1;
var rows = cljs.core.nth.call(null,vec__27665,(0),null);
var cols = cljs.core.nth.call(null,vec__27665,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cols,"auto ")),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,rows,"auto ")),new cljs.core.Keyword(null,"grid-column-gap","grid-column-gap",-1342199344),"0.25em",new cljs.core.Keyword(null,"grid-row-gap","grid-row-gap",-2068663141),"0.25em",new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null))], null),(function (){var iter__4652__auto__ = (function blog$render$iter__27668(s__27669){
return (new cljs.core.LazySeq(null,(function (){
var s__27669__$1 = s__27669;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27669__$1);
if(temp__5720__auto__){
var s__27669__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27669__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__27669__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__27671 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__27670 = (0);
while(true){
if((i__27670 < size__4651__auto__)){
var r = cljs.core._nth.call(null,c__4650__auto__,i__27670);
cljs.core.chunk_append.call(null,b__27671,(function (){var iter__4652__auto__ = ((function (i__27670,r,c__4650__auto__,size__4651__auto__,b__27671,s__27669__$2,temp__5720__auto__,vec__27665,rows,cols,map__27664,map__27664__$1,dims__$1,nodes__$1,t_QMARK_,map__27662,map__27662__$1,dims,nodes){
return (function blog$render$iter__27668_$_iter__27672(s__27673){
return (new cljs.core.LazySeq(null,((function (i__27670,r,c__4650__auto__,size__4651__auto__,b__27671,s__27669__$2,temp__5720__auto__,vec__27665,rows,cols,map__27664,map__27664__$1,dims__$1,nodes__$1,t_QMARK_,map__27662,map__27662__$1,dims,nodes){
return (function (){
var s__27673__$1 = s__27673;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__27673__$1);
if(temp__5720__auto____$1){
var s__27673__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27673__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first.call(null,s__27673__$2);
var size__4651__auto____$1 = cljs.core.count.call(null,c__4650__auto____$1);
var b__27675 = cljs.core.chunk_buffer.call(null,size__4651__auto____$1);
if((function (){var i__27674 = (0);
while(true){
if((i__27674 < size__4651__auto____$1)){
var c = cljs.core._nth.call(null,c__4650__auto____$1,i__27674);
cljs.core.chunk_append.call(null,b__27675,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.25em 0.25em 0.255em 0.25em",new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),c,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),c,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),r,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),r,new cljs.core.Keyword(null,"transition","transition",765692007),"2000ms"], null)),(cljs.core.truth_(t_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_QMARK_,r,c], null)], null)));

var G__27680 = (i__27674 + (1));
i__27674 = G__27680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27675),blog$render$iter__27668_$_iter__27672.call(null,cljs.core.chunk_rest.call(null,s__27673__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27675),null);
}
} else {
var c = cljs.core.first.call(null,s__27673__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.25em 0.25em 0.255em 0.25em",new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),c,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),c,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),r,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),r,new cljs.core.Keyword(null,"transition","transition",765692007),"2000ms"], null)),(cljs.core.truth_(t_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_QMARK_,r,c], null)], null)),blog$render$iter__27668_$_iter__27672.call(null,cljs.core.rest.call(null,s__27673__$2)));
}
} else {
return null;
}
break;
}
});})(i__27670,r,c__4650__auto__,size__4651__auto__,b__27671,s__27669__$2,temp__5720__auto__,vec__27665,rows,cols,map__27664,map__27664__$1,dims__$1,nodes__$1,t_QMARK_,map__27662,map__27662__$1,dims,nodes))
,null,null));
});})(i__27670,r,c__4650__auto__,size__4651__auto__,b__27671,s__27669__$2,temp__5720__auto__,vec__27665,rows,cols,map__27664,map__27664__$1,dims__$1,nodes__$1,t_QMARK_,map__27662,map__27662__$1,dims,nodes))
;
return iter__4652__auto__.call(null,cljs.core.range.call(null,(1),(cols + (1))));
})());

var G__27681 = (i__27670 + (1));
i__27670 = G__27681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27671),blog$render$iter__27668.call(null,cljs.core.chunk_rest.call(null,s__27669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27671),null);
}
} else {
var r = cljs.core.first.call(null,s__27669__$2);
return cljs.core.cons.call(null,(function (){var iter__4652__auto__ = ((function (r,s__27669__$2,temp__5720__auto__,vec__27665,rows,cols,map__27664,map__27664__$1,dims__$1,nodes__$1,t_QMARK_,map__27662,map__27662__$1,dims,nodes){
return (function blog$render$iter__27668_$_iter__27676(s__27677){
return (new cljs.core.LazySeq(null,(function (){
var s__27677__$1 = s__27677;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__27677__$1);
if(temp__5720__auto____$1){
var s__27677__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27677__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__27677__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__27679 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__27678 = (0);
while(true){
if((i__27678 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__27678);
cljs.core.chunk_append.call(null,b__27679,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.25em 0.25em 0.255em 0.25em",new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),c,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),c,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),r,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),r,new cljs.core.Keyword(null,"transition","transition",765692007),"2000ms"], null)),(cljs.core.truth_(t_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_QMARK_,r,c], null)], null)));

var G__27682 = (i__27678 + (1));
i__27678 = G__27682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27679),blog$render$iter__27668_$_iter__27676.call(null,cljs.core.chunk_rest.call(null,s__27677__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27679),null);
}
} else {
var c = cljs.core.first.call(null,s__27677__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.25em 0.25em 0.255em 0.25em",new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),c,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),c,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),r,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),r,new cljs.core.Keyword(null,"transition","transition",765692007),"2000ms"], null)),(cljs.core.truth_(t_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_QMARK_,r,c], null)], null)),blog$render$iter__27668_$_iter__27676.call(null,cljs.core.rest.call(null,s__27677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__27669__$2,temp__5720__auto__,vec__27665,rows,cols,map__27664,map__27664__$1,dims__$1,nodes__$1,t_QMARK_,map__27662,map__27662__$1,dims,nodes))
;
return iter__4652__auto__.call(null,cljs.core.range.call(null,(1),(cols + (1))));
})(),blog$render$iter__27668.call(null,cljs.core.rest.call(null,s__27669__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.range.call(null,(1),(rows + (1))));
})());
});
}));
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"fraction","fraction",107940680),(function (p__27683){
var map__27684 = p__27683;
var map__27684__$1 = cljs.core.__destructure_map.call(null,map__27684);
var num = cljs.core.get.call(null,map__27684__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__27684__$1,new cljs.core.Keyword(null,"den","den",1422717834));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0em 1em 0em",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,num], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0em 1em 0em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,den], null)], null)], null));
}));
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"derivative","derivative",1421315465),(function (p__27685){
var map__27686 = p__27685;
var map__27686__$1 = cljs.core.__destructure_map.call(null,map__27686);
var num = cljs.core.get.call(null,map__27686__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__27686__$1,new cljs.core.Keyword(null,"den","den",1422717834));
var partial_QMARK_ = cljs.core.get.call(null,map__27686__$1,new cljs.core.Keyword(null,"partial?","partial?",-1644522276));
var d = (cljs.core.truth_(partial_QMARK_)?blog.render.sym.call(null,new cljs.core.Keyword(null,"part","part",77757738)):"d");
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid black"], null)], null),blog.render.add_jostle.call(null,d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,num], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"padding","padding",1660304693),"0em 1em 0em",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-item","align-item",957108437),"center",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),blog.render.add_jostle.call(null,d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,den], null)], null)], null));
}));
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"sym","sym",-1444860305),(function (p__27687){
var map__27688 = p__27687;
var map__27688__$1 = cljs.core.__destructure_map.call(null,map__27688);
var key = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.println.call(null,key);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),blog.render.add_jostle.call(null,blog.render.sym.call(null,key))], null);
}));
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"log","log",-1595516004),(function (p__27689){
var map__27690 = p__27689;
var map__27690__$1 = cljs.core.__destructure_map.call(null,map__27690);
var arg = cljs.core.get.call(null,map__27690__$1,new cljs.core.Keyword(null,"arg","arg",-1747261837));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.row,blog.render.add_jostle.call(null,"log"),blog.render.add_jostle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.opening","div.math.opening",1115395679),"("], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,arg], null)], null),blog.render.add_jostle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.closing","div.math.closing",-801630757),")"], null))], null);
}));
cljs.core._add_method.call(null,blog.render._render,new cljs.core.Keyword(null,"integral","integral",-1457739723),(function (p__27691){
var map__27692 = p__27691;
var map__27692__$1 = cljs.core.__destructure_map.call(null,map__27692);
var body = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var delta = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row.spaced","div.math.row.spaced",-1629955391),blog.render.add_jostle.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)),blog.render.sym.call(null,new cljs.core.Keyword(null,"int","int",-1741416922))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,body], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.row,"d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,delta], null)], null)], null);
}));
blog.render.render_exp = (function blog$render$render_exp(node_STAR_,exp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.row,node_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-1.25em)"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,exp], null)], null)], null);
});
blog.render.render_coef = (function blog$render$render_coef(node_STAR_,coef){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,coef], null),node_STAR_], null);
});
blog.render.render = (function blog$render$render(p__27693){
var map__27694 = p__27693;
var map__27694__$1 = cljs.core.__destructure_map.call(null,map__27694);
var node = map__27694__$1;
var exp = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
var coef = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"coef","coef",956150629));
var node_STAR_ = blog.render._render.call(null,node);
var node_STAR___$1 = (cljs.core.truth_(coef)?blog.render.render_coef.call(null,node_STAR_,coef):node_STAR_);
if(cljs.core.truth_(exp)){
return blog.render.render_exp.call(null,node_STAR___$1,exp);
} else {
return node_STAR___$1;
}
});
if((typeof blog !== 'undefined') && (typeof blog.render !== 'undefined') && (typeof blog.render.parse !== 'undefined')){
} else {
blog.render.parse = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.render","parse"),(function (tag,params){
return tag;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.render.parse,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,p__27695){
var map__27696 = p__27695;
var map__27696__$1 = cljs.core.__destructure_map.call(null,map__27696);
var id = cljs.core.get.call(null,map__27696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var form = cljs.core.get.call(null,map__27696__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
}));
cljs.core._add_method.call(null,blog.render.parse,new cljs.core.Keyword(null,"matrix","matrix",803137200),(function (_,p__27697){
var map__27698 = p__27697;
var map__27698__$1 = cljs.core.__destructure_map.call(null,map__27698);
var rows = cljs.core.get.call(null,map__27698__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var brackets = cljs.core.get.call(null,map__27698__$1,new cljs.core.Keyword(null,"brackets","brackets",1720097338));
var id = cljs.core.get.call(null,map__27698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
}));
blog.render.math_display = (function blog$render$math_display(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),blog.render.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2em"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.render.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"integral","integral",-1457739723),new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"oop","oop",-230191923),new cljs.core.Keyword(null,"text","text",-1790561697),"x"], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"equation","equation",-499527745),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pi","pi",-1463757343)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"derivative","derivative",1421315465),new cljs.core.Keyword(null,"partial?","partial?",-1644522276),true,new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),(3)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),(0)], null),(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"derivative","derivative",1421315465),new cljs.core.Keyword(null,"partial?","partial?",-1644522276),true,new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"equation","equation",-499527745),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"coef","coef",956150629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),(3)], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"lambda","lambda",-1483427225),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(14)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(15)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pi","pi",-1463757343),new cljs.core.Keyword(null,"coef","coef",956150629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),(10)], null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),"2"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"derivative","derivative",1421315465),new cljs.core.Keyword(null,"partial?","partial?",-1644522276),true,new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-tag","render-tag",1065842513),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null))], null)], null);
});

//# sourceMappingURL=render.js.map
