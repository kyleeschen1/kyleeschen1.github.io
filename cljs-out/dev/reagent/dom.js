// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__15357 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15358 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15358);

try{var G__15359 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__15360 = container;
var G__15361 = (function (){
var _STAR_always_update_STAR__orig_val__15362 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15363 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15363);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15362);
}});
return reagent.dom.global$module$react_dom.render(G__15359,G__15360,G__15361);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15357);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__15365 = arguments.length;
switch (G__15365) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__15366 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15366,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15366,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__15370_15386 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__15371_15387 = null;
var count__15372_15388 = (0);
var i__15373_15389 = (0);
while(true){
if((i__15373_15389 < count__15372_15388)){
var vec__15380_15390 = chunk__15371_15387.cljs$core$IIndexed$_nth$arity$2(null,i__15373_15389);
var container_15391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15380_15390,(0),null);
var comp_15392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15380_15390,(1),null);
reagent.dom.re_render_component(comp_15392,container_15391);


var G__15393 = seq__15370_15386;
var G__15394 = chunk__15371_15387;
var G__15395 = count__15372_15388;
var G__15396 = (i__15373_15389 + (1));
seq__15370_15386 = G__15393;
chunk__15371_15387 = G__15394;
count__15372_15388 = G__15395;
i__15373_15389 = G__15396;
continue;
} else {
var temp__5720__auto___15397 = cljs.core.seq(seq__15370_15386);
if(temp__5720__auto___15397){
var seq__15370_15398__$1 = temp__5720__auto___15397;
if(cljs.core.chunked_seq_QMARK_(seq__15370_15398__$1)){
var c__4679__auto___15399 = cljs.core.chunk_first(seq__15370_15398__$1);
var G__15400 = cljs.core.chunk_rest(seq__15370_15398__$1);
var G__15401 = c__4679__auto___15399;
var G__15402 = cljs.core.count(c__4679__auto___15399);
var G__15403 = (0);
seq__15370_15386 = G__15400;
chunk__15371_15387 = G__15401;
count__15372_15388 = G__15402;
i__15373_15389 = G__15403;
continue;
} else {
var vec__15383_15404 = cljs.core.first(seq__15370_15398__$1);
var container_15405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383_15404,(0),null);
var comp_15406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383_15404,(1),null);
reagent.dom.re_render_component(comp_15406,container_15405);


var G__15407 = cljs.core.next(seq__15370_15398__$1);
var G__15408 = null;
var G__15409 = (0);
var G__15410 = (0);
seq__15370_15386 = G__15407;
chunk__15371_15387 = G__15408;
count__15372_15388 = G__15409;
i__15373_15389 = G__15410;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
