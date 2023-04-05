// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.events');
goog.require('cljs.core');
if((typeof blog !== 'undefined') && (typeof blog.events !== 'undefined') && (typeof blog.events.event !== 'undefined')){
} else {
blog.events.event = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"blog.events","event"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,blog.events.event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__50797){
var map__50798 = p__50797;
var map__50798__$1 = cljs.core.__destructure_map.call(null,map__50798);
var dom = cljs.core.get.call(null,map__50798__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var text = cljs.core.get.call(null,map__50798__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.update_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(text)?text:"Temp")], null));
}));
cljs.core._add_method.call(null,blog.events.event,new cljs.core.Keyword(null,"clear-root","clear-root",-1556489489),(function (p__50799){
var map__50800 = p__50799;
var map__50800__$1 = cljs.core.__destructure_map.call(null,map__50800);
var dom = cljs.core.get.call(null,map__50800__$1,new cljs.core.Keyword(null,"dom","dom",-1236537922));
var text = cljs.core.get.call(null,map__50800__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.assoc_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.PersistentVector.EMPTY);
}));

//# sourceMappingURL=events.js.map
