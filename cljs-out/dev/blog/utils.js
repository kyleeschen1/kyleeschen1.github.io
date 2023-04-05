// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.utils');
goog.require('cljs.core');
goog.require('re_frame.core');
if((typeof blog !== 'undefined') && (typeof blog.utils !== 'undefined') && (typeof blog.utils.render_page !== 'undefined')){
} else {
blog.utils.render_page = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.utils","render-page"),(function (id,_){
return id;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
blog.utils._LT_sub = (function blog$utils$_LT_sub(params){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,params));
});
blog.utils._GT_evt = (function blog$utils$_GT_evt(params){
return re_frame.core.dispatch.call(null,params);
});
blog.utils.$ = (function blog$utils$$(var_args){
var G__51716 = arguments.length;
switch (G__51716) {
case 1:
return blog.utils.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return blog.utils.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(blog.utils.$.cljs$core$IFn$_invoke$arity$1 = (function (style){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null);
}));

(blog.utils.$.cljs$core$IFn$_invoke$arity$2 = (function (attrs,style){
return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"style","style",-496642736),style);
}));

(blog.utils.$.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=utils.js.map
