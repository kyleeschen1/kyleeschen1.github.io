// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.render');
goog.require('cljs.core');
goog.require('blog.utils');
goog.require('com.rpl.specter');
goog.require('reagent.core');
goog.require('goog.string');
blog.render.sym = (function blog$render$sym(kw){
return goog.string.unescapeEntities(["&",cljs.core.name.call(null,kw),";"].join(''));
});
blog.render.render_string = (function blog$render$render_string(s){
var G__65089 = s;
switch (G__65089) {
case "\\":
return "\\";

break;
case "->":
return blog.render.sym.call(null,new cljs.core.Keyword(null,"rarr","rarr",1314349589));

break;
case "<-":
return blog.render.sym.call(null,new cljs.core.Keyword(null,"larr","larr",-902529465));

break;
case ">>":
return blog.render.sym.call(null,new cljs.core.Keyword(null,"Gt","Gt",280052970));

break;
case "<<":
return blog.render.sym.call(null,new cljs.core.Keyword(null,"Lt","Lt",-1525804001));

break;
case "+":
return blog.render.sym.call(null,new cljs.core.Keyword(null,"plus","plus",211540661));

break;
case ",":
return " ,";

break;
default:
return s;

}
});
blog.render.wrap_in_drift_divs = (function blog$render$wrap_in_drift_divs(div){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drift-y","div.drift-y",-192664006),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d",new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * Math.random())),"s"].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drift-x","div.drift-x",1583400825),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d",new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) * Math.random())),"s"].join('')], null)),div], null)], null);
});
blog.render.coords__GT_trsl = (function blog$render$coords__GT_trsl(p__65091){
var map__65092 = p__65091;
var map__65092__$1 = cljs.core.__destructure_map.call(null,map__65092);
var tx = cljs.core.get.call(null,map__65092__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__65092__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz = cljs.core.get.call(null,map__65092__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
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
if((typeof blog !== 'undefined') && (typeof blog.render !== 'undefined') && (typeof blog.render.render !== 'undefined')){
} else {
blog.render.render = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.render","render"),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__65093){
var map__65094 = p__65093;
var map__65094__$1 = cljs.core.__destructure_map.call(null,map__65094);
var text = cljs.core.get.call(null,map__65094__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return blog.render.wrap_in_drift_divs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),text], null));
}));
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"root","root",-448657453),(function (p__65095){
var map__65096 = p__65095;
var map__65096__$1 = cljs.core.__destructure_map.call(null,map__65096);
var nodes = cljs.core.get.call(null,map__65096__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function blog$render$iter__65097(s__65098){
return (new cljs.core.LazySeq(null,(function (){
var s__65098__$1 = s__65098;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__65098__$1);
if(temp__5720__auto__){
var s__65098__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65098__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__65098__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__65100 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__65099 = (0);
while(true){
if((i__65099 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__65099);
cljs.core.chunk_append.call(null,b__65100,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)], null)));

var G__65101 = (i__65099 + (1));
i__65099 = G__65101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65100),blog$render$iter__65097.call(null,cljs.core.chunk_rest.call(null,s__65098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65100),null);
}
} else {
var n = cljs.core.first.call(null,s__65098__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)], null)),blog$render$iter__65097.call(null,cljs.core.rest.call(null,s__65098__$2)));
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
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000),(function (ast){
return blog.render.render.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"token","token",-1211463215)));
}));
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"token","token",-1211463215),(function (p__65102){
var map__65103 = p__65102;
var map__65103__$1 = cljs.core.__destructure_map.call(null,map__65103);
var ast = map__65103__$1;
var text = cljs.core.get.call(null,map__65103__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return blog.render.wrap_in_drift_divs.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),blog.render.coords__GT_trsl.call(null,ast)], null)),blog.render.render_string.call(null,text)], null));
}));
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"branch","branch",-74633925),(function (p__65104){
var map__65105 = p__65104;
var map__65105__$1 = cljs.core.__destructure_map.call(null,map__65105);
var ast = map__65105__$1;
var nodes = cljs.core.get.call(null,map__65105__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preserve"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform","transform",1381301764),blog.render.coords__GT_trsl.call(null,ast)], null))], null),(function (){var iter__4652__auto__ = (function blog$render$iter__65106(s__65107){
return (new cljs.core.LazySeq(null,(function (){
var s__65107__$1 = s__65107;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__65107__$1);
if(temp__5720__auto__){
var s__65107__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65107__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__65107__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__65109 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__65108 = (0);
while(true){
if((i__65108 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__65108);
cljs.core.chunk_append.call(null,b__65109,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)], null)));

var G__65110 = (i__65108 + (1));
i__65108 = G__65110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65109),blog$render$iter__65106.call(null,cljs.core.chunk_rest.call(null,s__65107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65109),null);
}
} else {
var n = cljs.core.first.call(null,s__65107__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n)], null)),blog$render$iter__65106.call(null,cljs.core.rest.call(null,s__65107__$2)));
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
blog.render.row = (function blog$render$row(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65112 = arguments.length;
var i__4865__auto___65113 = (0);
while(true){
if((i__4865__auto___65113 < len__4864__auto___65112)){
args__4870__auto__.push((arguments[i__4865__auto___65113]));

var G__65114 = (i__4865__auto___65113 + (1));
i__4865__auto___65113 = G__65114;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.render.row.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.render.row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row","div.math.row",486213500),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d"], null))], null),args);
}));

(blog.render.row.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.render.row.cljs$lang$applyTo = (function (seq65111){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65111));
}));


blog.render.render_STAR_ = (function blog$render$render_STAR_(p__65115){
var map__65116 = p__65115;
var map__65116__$1 = cljs.core.__destructure_map.call(null,map__65116);
var node = map__65116__$1;
var exp = cljs.core.get.call(null,map__65116__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
var coef = cljs.core.get.call(null,map__65116__$1,new cljs.core.Keyword(null,"coef","coef",956150629));
var node_STAR_ = blog.render.render.call(null,node);
var node_STAR___$1 = (cljs.core.truth_(coef)?blog.render.render_coef.call(null,node_STAR_,coef):node_STAR_);
if(cljs.core.truth_(exp)){
return blog.render.render_exp.call(null,node_STAR___$1,exp);
} else {
return node_STAR___$1;
}
});
blog.render.render_exp = (function blog$render$render_exp(node_STAR_,exp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.row,node_STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-1.25em)"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,exp], null)], null)], null);
});
blog.render.render_coef = (function blog$render$render_coef(node_STAR_,coef){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,coef], null),node_STAR_], null);
});
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"equation","equation",-499527745),(function (p__65117){
var map__65118 = p__65117;
var map__65118__$1 = cljs.core.__destructure_map.call(null,map__65118);
var text = cljs.core.get.call(null,map__65118__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var nodes = cljs.core.get.call(null,map__65118__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row.spaced","div.math.row.spaced",-1629955391)], null),(function (){var iter__4652__auto__ = (function blog$render$iter__65119(s__65120){
return (new cljs.core.LazySeq(null,(function (){
var s__65120__$1 = s__65120;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__65120__$1);
if(temp__5720__auto__){
var s__65120__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65120__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__65120__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__65122 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__65121 = (0);
while(true){
if((i__65121 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__65121);
cljs.core.chunk_append.call(null,b__65122,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__65123 = (i__65121 + (1));
i__65121 = G__65123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65122),blog$render$iter__65119.call(null,cljs.core.chunk_rest.call(null,s__65120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65122),null);
}
} else {
var n = cljs.core.first.call(null,s__65120__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),blog$render$iter__65119.call(null,cljs.core.rest.call(null,s__65120__$2)));
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
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"bracket","bracket",-600276523),(function (p__65124){
var map__65125 = p__65124;
var map__65125__$1 = cljs.core.__destructure_map.call(null,map__65125);
var text = cljs.core.get.call(null,map__65125__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var nodes = cljs.core.get.call(null,map__65125__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var border = "0.1em solid white";
var h = "100%";
var w = "0.1em";
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drift-x","div.drift-x",1583400825),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drift-y","div.drift-y",-192664006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border,new cljs.core.Keyword(null,"border-top","border-top",-158897573),border,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border,new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null)], null)], null);
var end = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drift-x","div.drift-x",1583400825),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border,new cljs.core.Keyword(null,"border-top","border-top",-158897573),border,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null)], null)], null)], null);
var container = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),"even-spacing",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)),start], null);
var innards = (function (){var iter__4652__auto__ = (function blog$render$iter__65126(s__65127){
return (new cljs.core.LazySeq(null,(function (){
var s__65127__$1 = s__65127;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__65127__$1);
if(temp__5720__auto__){
var s__65127__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65127__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__65127__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__65129 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__65128 = (0);
while(true){
if((i__65128 < size__4651__auto__)){
var n = cljs.core._nth.call(null,c__4650__auto__,i__65128);
cljs.core.chunk_append.call(null,b__65129,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)));

var G__65130 = (i__65128 + (1));
i__65128 = G__65130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65129),blog$render$iter__65126.call(null,cljs.core.chunk_rest.call(null,s__65127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65129),null);
}
} else {
var n = cljs.core.first.call(null,s__65127__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null)),blog$render$iter__65126.call(null,cljs.core.rest.call(null,s__65127__$2)));
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
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"matrix","matrix",803137200),(function (p__65131){
var map__65132 = p__65131;
var map__65132__$1 = cljs.core.__destructure_map.call(null,map__65132);
var dims = cljs.core.get.call(null,map__65132__$1,new cljs.core.Keyword(null,"dims","dims",-466522889));
var nodes = cljs.core.get.call(null,map__65132__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
return (function (p__65133){
var map__65134 = p__65133;
var map__65134__$1 = cljs.core.__destructure_map.call(null,map__65134);
var dims__$1 = cljs.core.get.call(null,map__65134__$1,new cljs.core.Keyword(null,"dims","dims",-466522889));
var nodes__$1 = cljs.core.get.call(null,map__65134__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var t_QMARK_ = cljs.core.get.call(null,map__65134__$1,new cljs.core.Keyword(null,"t?","t?",611880130));
var vec__65135 = dims__$1;
var rows = cljs.core.nth.call(null,vec__65135,(0),null);
var cols = cljs.core.nth.call(null,vec__65135,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.matrix","div.matrix",-807944621)], null),(function (){var iter__4652__auto__ = (function blog$render$iter__65138(s__65139){
return (new cljs.core.LazySeq(null,(function (){
var s__65139__$1 = s__65139;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__65139__$1);
if(temp__5720__auto__){
var s__65139__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65139__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__65139__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__65141 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__65140 = (0);
while(true){
if((i__65140 < size__4651__auto__)){
var r = cljs.core._nth.call(null,c__4650__auto__,i__65140);
cljs.core.chunk_append.call(null,b__65141,(function (){var iter__4652__auto__ = ((function (i__65140,r,c__4650__auto__,size__4651__auto__,b__65141,s__65139__$2,temp__5720__auto__,vec__65135,rows,cols,map__65134,map__65134__$1,dims__$1,nodes__$1,t_QMARK_,map__65132,map__65132__$1,dims,nodes){
return (function blog$render$iter__65138_$_iter__65142(s__65143){
return (new cljs.core.LazySeq(null,((function (i__65140,r,c__4650__auto__,size__4651__auto__,b__65141,s__65139__$2,temp__5720__auto__,vec__65135,rows,cols,map__65134,map__65134__$1,dims__$1,nodes__$1,t_QMARK_,map__65132,map__65132__$1,dims,nodes){
return (function (){
var s__65143__$1 = s__65143;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__65143__$1);
if(temp__5720__auto____$1){
var s__65143__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65143__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first.call(null,s__65143__$2);
var size__4651__auto____$1 = cljs.core.count.call(null,c__4650__auto____$1);
var b__65145 = cljs.core.chunk_buffer.call(null,size__4651__auto____$1);
if((function (){var i__65144 = (0);
while(true){
if((i__65144 < size__4651__auto____$1)){
var c = cljs.core._nth.call(null,c__4650__auto____$1,i__65144);
cljs.core.chunk_append.call(null,b__65145,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.25em 0.25em 0.25em 0.25em",new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),c,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),c,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),r,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),r], null)),(cljs.core.truth_(t_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], null)));

var G__65150 = (i__65144 + (1));
i__65144 = G__65150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65145),blog$render$iter__65138_$_iter__65142.call(null,cljs.core.chunk_rest.call(null,s__65143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65145),null);
}
} else {
var c = cljs.core.first.call(null,s__65143__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.25em 0.25em 0.25em 0.25em",new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),c,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),c,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),r,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),r], null)),(cljs.core.truth_(t_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], null)),blog$render$iter__65138_$_iter__65142.call(null,cljs.core.rest.call(null,s__65143__$2)));
}
} else {
return null;
}
break;
}
});})(i__65140,r,c__4650__auto__,size__4651__auto__,b__65141,s__65139__$2,temp__5720__auto__,vec__65135,rows,cols,map__65134,map__65134__$1,dims__$1,nodes__$1,t_QMARK_,map__65132,map__65132__$1,dims,nodes))
,null,null));
});})(i__65140,r,c__4650__auto__,size__4651__auto__,b__65141,s__65139__$2,temp__5720__auto__,vec__65135,rows,cols,map__65134,map__65134__$1,dims__$1,nodes__$1,t_QMARK_,map__65132,map__65132__$1,dims,nodes))
;
return iter__4652__auto__.call(null,cljs.core.range.call(null,(1),(cols + (1))));
})());

var G__65151 = (i__65140 + (1));
i__65140 = G__65151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65141),blog$render$iter__65138.call(null,cljs.core.chunk_rest.call(null,s__65139__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65141),null);
}
} else {
var r = cljs.core.first.call(null,s__65139__$2);
return cljs.core.cons.call(null,(function (){var iter__4652__auto__ = ((function (r,s__65139__$2,temp__5720__auto__,vec__65135,rows,cols,map__65134,map__65134__$1,dims__$1,nodes__$1,t_QMARK_,map__65132,map__65132__$1,dims,nodes){
return (function blog$render$iter__65138_$_iter__65146(s__65147){
return (new cljs.core.LazySeq(null,(function (){
var s__65147__$1 = s__65147;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__65147__$1);
if(temp__5720__auto____$1){
var s__65147__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__65147__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__65147__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__65149 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__65148 = (0);
while(true){
if((i__65148 < size__4651__auto__)){
var c = cljs.core._nth.call(null,c__4650__auto__,i__65148);
cljs.core.chunk_append.call(null,b__65149,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.25em 0.25em 0.25em 0.25em",new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),c,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),c,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),r,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),r], null)),(cljs.core.truth_(t_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], null)));

var G__65152 = (i__65148 + (1));
i__65148 = G__65152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65149),blog$render$iter__65138_$_iter__65146.call(null,cljs.core.chunk_rest.call(null,s__65147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65149),null);
}
} else {
var c = cljs.core.first.call(null,s__65147__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0.25em 0.25em 0.25em 0.25em",new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),c,new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),c,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),r,new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),r], null)),(cljs.core.truth_(t_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,cljs.core.get_in.call(null,nodes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], null)),blog$render$iter__65138_$_iter__65146.call(null,cljs.core.rest.call(null,s__65147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__65139__$2,temp__5720__auto__,vec__65135,rows,cols,map__65134,map__65134__$1,dims__$1,nodes__$1,t_QMARK_,map__65132,map__65132__$1,dims,nodes))
;
return iter__4652__auto__.call(null,cljs.core.range.call(null,(1),(cols + (1))));
})(),blog$render$iter__65138.call(null,cljs.core.rest.call(null,s__65139__$2)));
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
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"fraction","fraction",107940680),(function (p__65153){
var map__65154 = p__65153;
var map__65154__$1 = cljs.core.__destructure_map.call(null,map__65154);
var num = cljs.core.get.call(null,map__65154__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__65154__$1,new cljs.core.Keyword(null,"den","den",1422717834));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fraction","div.fraction",-217885076),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fraction-component.numerator","div.fraction-component.numerator",-1239586547),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,num], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fraction-component","div.fraction-component",108805285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,den], null)], null)], null);
}));
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"differential","differential",-268496741),(function (p__65155){
var map__65156 = p__65155;
var map__65156__$1 = cljs.core.__destructure_map.call(null,map__65156);
var delta = cljs.core.get.call(null,map__65156__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var element = cljs.core.get.call(null,map__65156__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.row,blog.render.wrap_in_drift_divs.call(null,delta),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,element], null)], null);
}));
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"derivative","derivative",1421315465),(function (p__65157){
var map__65158 = p__65157;
var map__65158__$1 = cljs.core.__destructure_map.call(null,map__65158);
var num = cljs.core.get.call(null,map__65158__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var den = cljs.core.get.call(null,map__65158__$1,new cljs.core.Keyword(null,"den","den",1422717834));
var partial_QMARK_ = cljs.core.get.call(null,map__65158__$1,new cljs.core.Keyword(null,"partial?","partial?",-1644522276));
var d = (cljs.core.truth_(partial_QMARK_)?blog.render.sym.call(null,new cljs.core.Keyword(null,"part","part",77757738)):"d");
return blog.render.render.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"differential","differential",-268496741),new cljs.core.Keyword(null,"delta","delta",108939957),d,new cljs.core.Keyword(null,"element","element",1974019749),num], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"differential","differential",-268496741),new cljs.core.Keyword(null,"delta","delta",108939957),d,new cljs.core.Keyword(null,"element","element",1974019749),num], null)], null));
}));
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"sym","sym",-1444860305),(function (p__65159){
var map__65160 = p__65159;
var map__65160__$1 = cljs.core.__destructure_map.call(null,map__65160);
var key = cljs.core.get.call(null,map__65160__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return blog.render.wrap_in_drift_divs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.render.sym.call(null,key)], null));
}));
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"log","log",-1595516004),(function (p__65161){
var map__65162 = p__65161;
var map__65162__$1 = cljs.core.__destructure_map.call(null,map__65162);
var arg = cljs.core.get.call(null,map__65162__$1,new cljs.core.Keyword(null,"arg","arg",-1747261837));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.row,blog.render.wrap_in_drift_divs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"log"], null)),blog.render.wrap_in_drift_divs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.opening","div.math.opening",1115395679),"("], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75em"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,arg], null)], null),blog.render.wrap_in_drift_divs.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.closing","div.math.closing",-801630757),")"], null))], null);
}));
cljs.core._add_method.call(null,blog.render.render,new cljs.core.Keyword(null,"integral","integral",-1457739723),(function (p__65163){
var map__65164 = p__65163;
var map__65164__$1 = cljs.core.__destructure_map.call(null,map__65164);
var body = cljs.core.get.call(null,map__65164__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var delta = cljs.core.get.call(null,map__65164__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.row.spaced","div.math.row.spaced",-1629955391),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform-style","transform-style",-1887177696),"preserve-3d",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.wrap_in_drift_divs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)),blog.render.sym.call(null,new cljs.core.Keyword(null,"int","int",-1741416922))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,body], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.wrap_in_drift_divs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.preserve","div.preserve",-2050454539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate3d(0em, 0em, 10em)",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)),"d"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0%"], null)),"d"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.render_STAR_,delta], null)], null)], null);
}));
blog.render.math_display = (function blog$render$math_display(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math","div.math",-844904225),blog.utils.$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2em"], null)),blog.render.render.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"integral","integral",-1457739723),new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),"x"], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"equation","equation",-499527745),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pi","pi",-1463757343)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"derivative","derivative",1421315465),new cljs.core.Keyword(null,"partial?","partial?",-1644522276),true,new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),(3)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),(0)], null),(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"derivative","derivative",1421315465),new cljs.core.Keyword(null,"partial?","partial?",-1644522276),true,new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"equation","equation",-499527745),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"coef","coef",956150629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"text","text",-1790561697),(3)], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"lambda","lambda",-1483427225),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(14)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(15)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pi","pi",-1463757343),new cljs.core.Keyword(null,"coef","coef",956150629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),(10)], null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),"2"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"+","+",-740910886,null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"derivative","derivative",1421315465),new cljs.core.Keyword(null,"partial?","partial?",-1644522276),true,new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"den","den",1422717834),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null))], null);
});

//# sourceMappingURL=render.js.map
