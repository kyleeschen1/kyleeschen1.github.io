// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.scrolling');
goog.require('cljs.core');
goog.require('cljsjs.waypoints');
blog.scrolling.global$module$cljsjs$waypoints = goog.global["Waypoint"];
blog.scrolling.scroll_triggers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
blog.scrolling.rm_scroll_trigger = (function blog$scrolling$rm_scroll_trigger(id){
var temp__5720__auto___89294 = cljs.core.get.call(null,cljs.core.deref.call(null,blog.scrolling.scroll_triggers),id);
if(cljs.core.truth_(temp__5720__auto___89294)){
var trigger_89295 = temp__5720__auto___89294;
trigger_89295.destroy();
} else {
}

return cljs.core.swap_BANG_.call(null,blog.scrolling.scroll_triggers,cljs.core.dissoc,id);
});
/**
 * Sets some action for when
 * a particular element hits
 * the viewport.
 */
blog.scrolling.set_scroll_trigger = (function blog$scrolling$set_scroll_trigger(id,f){
var element = document.getElementById(id);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"handler","handler",-195596612),f,new cljs.core.Keyword(null,"offset","offset",296498311),"50%"], null);
return cljs.core.swap_BANG_.call(null,blog.scrolling.scroll_triggers,cljs.core.assoc,id,(new Waypoint(cljs.core.clj__GT_js.call(null,params))));
});
blog.scrolling.track_scrolling_BANG_ = (function blog$scrolling$track_scrolling_BANG_(x,y,action_fn){
var get_el_in_window = (function blog$scrolling$track_scrolling_BANG__$_get_el_in_window(){
return document.elementFromPoint(x,y);
});
return (function (){
var id = get_el_in_window.call(null).id;
if(cljs.core.not_EQ_.call(null,id,"")){
return action_fn.call(null,id);
} else {
return null;
}
});
});

//# sourceMappingURL=scrolling.js.map
