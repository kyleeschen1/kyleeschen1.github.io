// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.call(null,index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter))){
var G__15599 = (line + (1));
var G__15600 = (1);
var G__15601 = (counter + (1));
line = G__15599;
col = G__15600;
counter = G__15601;
continue;
} else {
var G__15602 = line;
var G__15603 = (col + (1));
var G__15604 = (counter + (1));
line = G__15602;
col = G__15603;
counter = G__15604;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq.call(null,clojure.string.replace.call(null,text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_.call(null,chars)){
return "";
} else {
if(cljs.core._EQ_.call(null,n__$1,(1))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.first.call(null,chars))){
var G__15605 = cljs.core.next.call(null,chars);
var G__15606 = (n__$1 - (1));
chars = G__15605;
n__$1 = G__15606;
continue;
} else {
var G__15607 = cljs.core.next.call(null,chars);
var G__15608 = n__$1;
chars = G__15607;
n__$1 = G__15608;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 * and accounts for horizontal tabs which might change
 * the alignment of the '^' to the error location.
 */
instaparse.failure.marker = (function instaparse$failure$marker(text,n){
if(cljs.core.truth_((function (){var and__4251__auto__ = text;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.integer_QMARK_.call(null,n);
} else {
return and__4251__auto__;
}
})())){
var marker_text = clojure.string.replace.call(null,text,/[^\s]/," ");
if((n <= (1))){
return "^";
} else {
return [cljs.core.subs.call(null,marker_text,(0),(n - (1))),"^"].join('');
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.call(null,"NOT ");

return cljs.core.print.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.call(null,instaparse.print.char_range__GT_str.call(null,r));
} else {
if((r instanceof RegExp)){
return cljs.core.print.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else {
return cljs.core.pr.call(null,r);

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__15609){
var map__15610 = p__15609;
var map__15610__$1 = cljs.core.__destructure_map.call(null,map__15610);
var line = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.call(null,["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join(''));

cljs.core.println.call(null,text);

cljs.core.println.call(null,instaparse.failure.marker.call(null,text,column));

var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.call(null,(1),total)){
cljs.core.println.call(null,"Expected:");
} else {
cljs.core.println.call(null,"Expected one of:");

}
}

var seq__15611_15619 = cljs.core.seq.call(null,full_reasons);
var chunk__15612_15620 = null;
var count__15613_15621 = (0);
var i__15614_15622 = (0);
while(true){
if((i__15614_15622 < count__15613_15621)){
var r_15623 = cljs.core._nth.call(null,chunk__15612_15620,i__15614_15622);
instaparse.failure.print_reason.call(null,r_15623);

cljs.core.println.call(null," (followed by end-of-string)");


var G__15624 = seq__15611_15619;
var G__15625 = chunk__15612_15620;
var G__15626 = count__15613_15621;
var G__15627 = (i__15614_15622 + (1));
seq__15611_15619 = G__15624;
chunk__15612_15620 = G__15625;
count__15613_15621 = G__15626;
i__15614_15622 = G__15627;
continue;
} else {
var temp__5720__auto___15628 = cljs.core.seq.call(null,seq__15611_15619);
if(temp__5720__auto___15628){
var seq__15611_15629__$1 = temp__5720__auto___15628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15611_15629__$1)){
var c__4679__auto___15630 = cljs.core.chunk_first.call(null,seq__15611_15629__$1);
var G__15631 = cljs.core.chunk_rest.call(null,seq__15611_15629__$1);
var G__15632 = c__4679__auto___15630;
var G__15633 = cljs.core.count.call(null,c__4679__auto___15630);
var G__15634 = (0);
seq__15611_15619 = G__15631;
chunk__15612_15620 = G__15632;
count__15613_15621 = G__15633;
i__15614_15622 = G__15634;
continue;
} else {
var r_15635 = cljs.core.first.call(null,seq__15611_15629__$1);
instaparse.failure.print_reason.call(null,r_15635);

cljs.core.println.call(null," (followed by end-of-string)");


var G__15636 = cljs.core.next.call(null,seq__15611_15629__$1);
var G__15637 = null;
var G__15638 = (0);
var G__15639 = (0);
seq__15611_15619 = G__15636;
chunk__15612_15620 = G__15637;
count__15613_15621 = G__15638;
i__15614_15622 = G__15639;
continue;
}
} else {
}
}
break;
}

var seq__15615 = cljs.core.seq.call(null,partial_reasons);
var chunk__15616 = null;
var count__15617 = (0);
var i__15618 = (0);
while(true){
if((i__15618 < count__15617)){
var r = cljs.core._nth.call(null,chunk__15616,i__15618);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__15640 = seq__15615;
var G__15641 = chunk__15616;
var G__15642 = count__15617;
var G__15643 = (i__15618 + (1));
seq__15615 = G__15640;
chunk__15616 = G__15641;
count__15617 = G__15642;
i__15618 = G__15643;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15615);
if(temp__5720__auto__){
var seq__15615__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15615__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__15615__$1);
var G__15644 = cljs.core.chunk_rest.call(null,seq__15615__$1);
var G__15645 = c__4679__auto__;
var G__15646 = cljs.core.count.call(null,c__4679__auto__);
var G__15647 = (0);
seq__15615 = G__15644;
chunk__15616 = G__15645;
count__15617 = G__15646;
i__15618 = G__15647;
continue;
} else {
var r = cljs.core.first.call(null,seq__15615__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__15648 = cljs.core.next.call(null,seq__15615__$1);
var G__15649 = null;
var G__15650 = (0);
var G__15651 = (0);
seq__15615 = G__15648;
chunk__15616 = G__15649;
count__15617 = G__15650;
i__15618 = G__15651;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map
