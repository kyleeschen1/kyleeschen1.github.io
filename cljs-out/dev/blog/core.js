// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.println.call(null,"This text is printed from src/blog/core.cljs. Go ahead and edit it and see reloading in action.");
blog.core.multiply = (function blog$core$multiply(a,b){
return (a * b);
});
if((typeof blog !== 'undefined') && (typeof blog.core !== 'undefined') && (typeof blog.core.app_state !== 'undefined')){
} else {
blog.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
blog.core.get_app_element = (function blog$core$get_app_element(){
return goog.dom.getElement("app");
});
blog.core.hello_world = (function blog$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,blog.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this in src/blogcore.cljs and watch it change!"], null)], null);
});
blog.core.mount = (function blog$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.core.hello_world], null),el);
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
blog.core.mount_app_element.call(null);
blog.core.on_reload = (function blog$core$on_reload(){
return blog.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
