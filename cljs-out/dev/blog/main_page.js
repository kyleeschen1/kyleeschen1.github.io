// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.main_page');
goog.require('cljs.core');
goog.require('blog.demo');
goog.require('blog.utils');
goog.require('blog.render');
goog.require('re_frame.core');
blog.main_page.generate_site = (function blog$main_page$generate_site(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.render_page,new cljs.core.Keyword(null,"main-page","main-page",165237388),new cljs.core.Keyword(null,"root","root",-448657453)], null);
});
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword(null,"main-page","main-page",165237388),(function (_,ns){
return (function (___$1,ns__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.render_page,new cljs.core.Keyword(null,"header-tabs","header-tabs",333787428),ns__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.render_page,new cljs.core.Keyword(null,"page-body","page-body",-21532134),ns__$1], null)], null);
});
}));
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword(null,"page-body","page-body",-21532134),(function (_,___$1){
return (function (___$2,ns){
var tab = blog.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-tab","header/current-tab",1223131450),ns], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-body","div.page-body",310886022),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.render_page,tab,ns], null)], null);
});
}));
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword(null,"header-tabs","header-tabs",333787428),(function (_,ns){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-name","div.header-name",-1884213286),"Kyle Eschen"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.main_page.gen_header_tab,"About",new cljs.core.Keyword("tab","about","tab/about",1423483058),ns], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.main_page.gen_header_tab,"Demo",new cljs.core.Keyword("tab","demo","tab/demo",851503466),ns], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.main_page.gen_header_tab,"Videos",new cljs.core.Keyword("tab","videos","tab/videos",254778725),ns], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.main_page.gen_header_tab,"Contact",new cljs.core.Keyword("tab","contact","tab/contact",608945313),ns], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.main_page.gen_header_tab,"Test",new cljs.core.Keyword("tab","test","tab/test",577719210),ns], null)], null);
}));
blog.main_page.gen_header_tab = (function blog$main_page$gen_header_tab(label,tag,ns){
return (function (label__$1,tag__$1,ns__$1){
var cls = ((cljs.core._EQ_.call(null,tag__$1,blog.utils._LT_sub.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","current-tab","header/current-tab",1223131450),ns__$1], null))))?"focused-header-tab":null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.header-tab","button.header-tab",730867033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cls,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return blog.utils._GT_evt.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","switch-tab","header/switch-tab",1361939567),tag__$1,ns__$1], null));
})], null),label__$1], null);
});
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("header","switch-tab","header/switch-tab",1361939567),(function (db,p__104003){
var vec__104004 = p__104003;
var _ = cljs.core.nth.call(null,vec__104004,(0),null);
var tab = cljs.core.nth.call(null,vec__104004,(1),null);
var ns = cljs.core.nth.call(null,vec__104004,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword("header","current-tab","header/current-tab",1223131450)], null),tab);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("header","current-tab","header/current-tab",1223131450),(function (db,p__104007){
var vec__104008 = p__104007;
var _ = cljs.core.nth.call(null,vec__104008,(0),null);
var ns = cljs.core.nth.call(null,vec__104008,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword("header","current-tab","header/current-tab",1223131450)], null));
}));
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword("tab","about","tab/about",1423483058),(function (_,ns){
return blog.main_page.gen_row_of_cols.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"There is no interesting information about me."], null)], null));
}));
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword("tab","videos","tab/videos",254778725),(function (_,ns){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"I am not fit for the screen."], null);
}));
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword("tab","contact","tab/contact",608945313),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"There is no value in contacting me."], null);
}));
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword(null,"essay-text-col","essay-text-col",2091448746),(function (_,ctx){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-col","div.text-col",958484659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.demo.render_essay_text,ctx], null)], null);
}));
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword(null,"essay-display-col","essay-display-col",1382709119),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.display-col","div.display-col",1994982462),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.render.math_display], null)], null);
}));
cljs.core._add_method.call(null,blog.utils.render_page,new cljs.core.Keyword("tab","demo","tab/demo",851503466),(function (_,ns){
return blog.main_page.gen_row_of_cols.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.render_page,new cljs.core.Keyword(null,"essay-text-col","essay-text-col",2091448746),ns], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.utils.render_page,new cljs.core.Keyword(null,"essay-display-col","essay-display-col",1382709119),ns], null)], null));
}));
blog.main_page.gen_row_of_cols = (function blog$main_page$gen_row_of_cols(var_args){
var args__4870__auto__ = [];
var len__4864__auto___104016 = arguments.length;
var i__4865__auto___104017 = (0);
while(true){
if((i__4865__auto___104017 < len__4864__auto___104016)){
args__4870__auto__.push((arguments[i__4865__auto___104017]));

var G__104018 = (i__4865__auto___104017 + (1));
i__4865__auto___104017 = G__104018;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return blog.main_page.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(blog.main_page.gen_row_of_cols.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
var cols__$1 = cljs.core.mapv.call(null,(function (p__104012){
var vec__104013 = p__104012;
var flex = cljs.core.nth.call(null,vec__104013,(0),null);
var col = cljs.core.nth.call(null,vec__104013,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null)], null),col], null);
}),cols);
var row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
return cljs.core.into.call(null,row,cols__$1);
}));

(blog.main_page.gen_row_of_cols.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(blog.main_page.gen_row_of_cols.cljs$lang$applyTo = (function (seq104011){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq104011));
}));


//# sourceMappingURL=main_page.js.map
