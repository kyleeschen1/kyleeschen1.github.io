// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__17402 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__17403 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__17403);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__17404 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__17405 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__17405);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__17404);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__17402);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var G__17407 = arguments.length;
switch (G__17407) {
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
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__17408 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__17408,(0),null);
var callback = cljs.core.nth.call(null,vec__17408,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
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
reagent.ratom.flush_BANG_.call(null);

var seq__17412_17428 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__17413_17429 = null;
var count__17414_17430 = (0);
var i__17415_17431 = (0);
while(true){
if((i__17415_17431 < count__17414_17430)){
var vec__17422_17432 = cljs.core._nth.call(null,chunk__17413_17429,i__17415_17431);
var container_17433 = cljs.core.nth.call(null,vec__17422_17432,(0),null);
var comp_17434 = cljs.core.nth.call(null,vec__17422_17432,(1),null);
reagent.dom.re_render_component.call(null,comp_17434,container_17433);


var G__17435 = seq__17412_17428;
var G__17436 = chunk__17413_17429;
var G__17437 = count__17414_17430;
var G__17438 = (i__17415_17431 + (1));
seq__17412_17428 = G__17435;
chunk__17413_17429 = G__17436;
count__17414_17430 = G__17437;
i__17415_17431 = G__17438;
continue;
} else {
var temp__5720__auto___17439 = cljs.core.seq.call(null,seq__17412_17428);
if(temp__5720__auto___17439){
var seq__17412_17440__$1 = temp__5720__auto___17439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17412_17440__$1)){
var c__4679__auto___17441 = cljs.core.chunk_first.call(null,seq__17412_17440__$1);
var G__17442 = cljs.core.chunk_rest.call(null,seq__17412_17440__$1);
var G__17443 = c__4679__auto___17441;
var G__17444 = cljs.core.count.call(null,c__4679__auto___17441);
var G__17445 = (0);
seq__17412_17428 = G__17442;
chunk__17413_17429 = G__17443;
count__17414_17430 = G__17444;
i__17415_17431 = G__17445;
continue;
} else {
var vec__17425_17446 = cljs.core.first.call(null,seq__17412_17440__$1);
var container_17447 = cljs.core.nth.call(null,vec__17425_17446,(0),null);
var comp_17448 = cljs.core.nth.call(null,vec__17425_17446,(1),null);
reagent.dom.re_render_component.call(null,comp_17448,container_17447);


var G__17449 = cljs.core.next.call(null,seq__17412_17440__$1);
var G__17450 = null;
var G__17451 = (0);
var G__17452 = (0);
seq__17412_17428 = G__17449;
chunk__17413_17429 = G__17450;
count__17414_17430 = G__17451;
i__17415_17431 = G__17452;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
