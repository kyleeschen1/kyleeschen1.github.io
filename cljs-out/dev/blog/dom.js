// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.dom');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('cljs.pprint');
goog.require('re_frame.core');
goog.require('reagent.core');
blog.dom.dom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"collection?","collection?",-782056727),true,new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"root","root",-448657453)], null))], null));
blog.dom.show_ids = (function blog$dom$show_ids(){
return cljs.pprint.pprint.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,(function (){var info__18323__auto__ = blog.dom.pathcache37177;
var info__18323__auto____$1 = (((info__18323__auto__ == null))?(function (){var info37178 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ATOM,new cljs.core.Var(function(){return com.rpl.specter.ATOM;},new cljs.core.Symbol("com.rpl.specter","ATOM","com.rpl.specter/ATOM",827730716,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ATOM","ATOM",-2063219067,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1120),(1122),cljs.core.List.EMPTY,"Navigates to atom value.",(cljs.core.truth_(com.rpl.specter.ATOM)?com.rpl.specter.ATOM.cljs$lang$test:null)])),new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.MAP_VALS,new cljs.core.Var(function(){return com.rpl.specter.MAP_VALS;},new cljs.core.Symbol("com.rpl.specter","MAP-VALS","com.rpl.specter/MAP-VALS",1866158706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"MAP-VALS","MAP-VALS",-471141163,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(11),(1),(738),(741),cljs.core.List.EMPTY,"Navigate to each value of the map. This is more efficient than\n          navigating via [ALL LAST]",(cljs.core.truth_(com.rpl.specter.MAP_VALS)?com.rpl.specter.MAP_VALS.cljs$lang$test:null)])),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.ATOM,new cljs.core.Var(function(){return com.rpl.specter.ATOM;},new cljs.core.Symbol("com.rpl.specter","ATOM","com.rpl.specter/ATOM",827730716,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ATOM","ATOM",-2063219067,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1120),(1122),cljs.core.List.EMPTY,"Navigates to atom value.",(cljs.core.truth_(com.rpl.specter.ATOM)?com.rpl.specter.ATOM.cljs$lang$test:null)])),new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.view,new cljs.core.Var(function(){return com.rpl.specter.view;},new cljs.core.Symbol("com.rpl.specter","view","com.rpl.specter/view",542493804,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(1098),(1100),cljs.core.List.EMPTY,"Navigates to result of running `afn` on the currently navigated value.",(cljs.core.truth_(com.rpl.specter.view)?com.rpl.specter.view.cljs$lang$test:null)])),new cljs.core.Symbol("s","view","s/view",-1406441066,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,(function (p1__37176_SHARP_){
return cljs.core.select_keys.call(null,p1__37176_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"form","form",-1624062471)], null));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37176#","p1__37176#",-782566569,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__37176#","p1__37176#",-782566569,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"form","form",-1624062471)], null))))], null),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37176#","p1__37176#",-782566569,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__37176#","p1__37176#",-782566569,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"form","form",-1624062471)], null)))))], null)], null),"blog.dom",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null),cljs.core.list(new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37176#","p1__37176#",-782566569,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__37176#","p1__37176#",-782566569,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"form","form",-1624062471)], null))))], null),new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null),new cljs.core.Symbol("s","MAP-VALS","s/MAP-VALS",-471140520,null),new cljs.core.Symbol("s","ATOM","s/ATOM",-2063219150,null),new cljs.core.Symbol("s","view","s/view",-1406441066,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37176#","p1__37176#",-782566569,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__37176#","p1__37176#",-782566569,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"form","form",-1624062471)], null)))], null));
blog.dom.pathcache37177 = info37178;

return info37178;
})():info__18323__auto__);
var precompiled37179 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18323__auto____$1);
var dynamic_QMARK___18324__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18323__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18324__auto__)){
return precompiled37179.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ATOM,com.rpl.specter.MAP_VALS,com.rpl.specter.ATOM,com.rpl.specter.view.call(null,(function (p1__37176_SHARP_){
return cljs.core.select_keys.call(null,p1__37176_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"form","form",-1624062471)], null));
}))], null),com.rpl.specter.ATOM,com.rpl.specter.MAP_VALS,com.rpl.specter.ATOM,com.rpl.specter.view,(function (p1__37176_SHARP_){
return cljs.core.select_keys.call(null,p1__37176_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"form","form",-1624062471)], null));
})], null));
} else {
return precompiled37179;
}
})(),blog.dom.dom));
});
blog.dom.assoc_dom_BANG_ = (function blog$dom$assoc_dom_BANG_(idx,data){
var temp__5718__auto___37180 = cljs.core.get.call(null,cljs.core.deref.call(null,blog.dom.dom),idx);
if(cljs.core.truth_(temp__5718__auto___37180)){
var node_37181 = temp__5718__auto___37180;
cljs.core.reset_BANG_.call(null,node_37181,data);
} else {
cljs.core.swap_BANG_.call(null,blog.dom.dom,cljs.core.assoc,idx,reagent.core.atom.call(null,data));
}

return null;
});
blog.dom.update_dom_BANG_ = (function blog$dom$update_dom_BANG_(idx,f){
var node = cljs.core.get.call(null,cljs.core.deref.call(null,blog.dom.dom),idx);
cljs.core.swap_BANG_.call(null,node,f);

return null;
});
blog.dom.add_to_dom_BANG_ = (function blog$dom$add_to_dom_BANG_(anchor,data,idxs){
var seq__37183_37199 = cljs.core.seq.call(null,data);
var chunk__37184_37200 = null;
var count__37185_37201 = (0);
var i__37186_37202 = (0);
while(true){
if((i__37186_37202 < count__37185_37201)){
var vec__37193_37203 = cljs.core._nth.call(null,chunk__37184_37200,i__37186_37202);
var idx_37204 = cljs.core.nth.call(null,vec__37193_37203,(0),null);
var vals_37205 = cljs.core.nth.call(null,vec__37193_37203,(1),null);
blog.dom.assoc_dom_BANG_.call(null,idx_37204,vals_37205);


var G__37206 = seq__37183_37199;
var G__37207 = chunk__37184_37200;
var G__37208 = count__37185_37201;
var G__37209 = (i__37186_37202 + (1));
seq__37183_37199 = G__37206;
chunk__37184_37200 = G__37207;
count__37185_37201 = G__37208;
i__37186_37202 = G__37209;
continue;
} else {
var temp__5720__auto___37210 = cljs.core.seq.call(null,seq__37183_37199);
if(temp__5720__auto___37210){
var seq__37183_37211__$1 = temp__5720__auto___37210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37183_37211__$1)){
var c__4679__auto___37212 = cljs.core.chunk_first.call(null,seq__37183_37211__$1);
var G__37213 = cljs.core.chunk_rest.call(null,seq__37183_37211__$1);
var G__37214 = c__4679__auto___37212;
var G__37215 = cljs.core.count.call(null,c__4679__auto___37212);
var G__37216 = (0);
seq__37183_37199 = G__37213;
chunk__37184_37200 = G__37214;
count__37185_37201 = G__37215;
i__37186_37202 = G__37216;
continue;
} else {
var vec__37196_37217 = cljs.core.first.call(null,seq__37183_37211__$1);
var idx_37218 = cljs.core.nth.call(null,vec__37196_37217,(0),null);
var vals_37219 = cljs.core.nth.call(null,vec__37196_37217,(1),null);
blog.dom.assoc_dom_BANG_.call(null,idx_37218,vals_37219);


var G__37220 = cljs.core.next.call(null,seq__37183_37211__$1);
var G__37221 = null;
var G__37222 = (0);
var G__37223 = (0);
seq__37183_37199 = G__37220;
chunk__37184_37200 = G__37221;
count__37185_37201 = G__37222;
i__37186_37202 = G__37223;
continue;
}
} else {
}
}
break;
}

blog.dom.update_dom_BANG_.call(null,anchor,(function (root){
return cljs.core.update.call(null,root,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (p1__37182_SHARP_){
return cljs.core.apply.call(null,cljs.core.conj,p1__37182_SHARP_,idxs);
}));
}));

return null;
});
blog.dom.subscribe = (function blog$dom$subscribe(idx){
return (function (node){
if(cljs.core.truth_(node)){
return cljs.core.deref.call(null,node);
} else {
return null;
}
}).call(null,cljs.core.get.call(null,cljs.core.deref.call(null,blog.dom.dom),idx));
});

//# sourceMappingURL=dom.js.map
