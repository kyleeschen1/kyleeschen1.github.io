// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('blog.parser');
goog.require('cljs.core');
blog.parser.opening_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["#{",null,"(",null,"{",null,"[",null], null), null);
blog.parser.closing_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
blog.parser.reg = /(\n|\(|\[|\{|\]|\)|\}|[\w|\:|\-|\+|\>|\<|\=|\!|\?|\;|\&|\\|\.|\\/]+)/;
blog.parser.tag_QMARK_ = (function blog$parser$tag_QMARK_(p__56366){
var vec__56367 = p__56366;
var _ = cljs.core.nth.call(null,vec__56367,(0),null);
var fst = cljs.core.nth.call(null,vec__56367,(1),null);
return cljs.core._EQ_.call(null,"tag",new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(fst));
});
blog.parser.tag__GT_edn = (function blog$parser$tag__GT_edn(form){
var to_string = (function blog$parser$tag__GT_edn_$_to_string(form__$1){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"branch","branch",-74633925),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form__$1))){
return cljs.core.map.call(null,blog$parser$tag__GT_edn_$_to_string,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(form__$1));
} else {
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(form__$1))].join('');
}
});
return cljs.tools.reader.edn.read_string.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,to_string.call(null,form))));
});
blog.parser.process_tag = (function blog$parser$process_tag(p__56370,parent_h,parent_w){
var vec__56371 = p__56370;
var _ = cljs.core.nth.call(null,vec__56371,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__56371,(1),null);
var tag = cljs.core.nth.call(null,vec__56371,(2),null);
var body = cljs.core.nth.call(null,vec__56371,(3),null);
var map__56374 = body;
var map__56374__$1 = cljs.core.__destructure_map.call(null,map__56374);
var body_h = cljs.core.get.call(null,map__56374__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var body_w = cljs.core.get.call(null,map__56374__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var dy = (body_h - parent_h);
var dx = ((body_w - parent_w) + (1));
return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"tags","tags",1771418977),blog.parser.tag__GT_edn.call(null,tag),new cljs.core.Keyword(null,"tx","tx",466630418),(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(body) + dx),new cljs.core.Keyword(null,"ty","ty",158290825),(new cljs.core.Keyword(null,"ty","ty",158290825).cljs$core$IFn$_invoke$arity$1(body) + dy),new cljs.core.Keyword(null,"dx","dx",-381796732),dx,new cljs.core.Keyword(null,"dy","dy",1719547243),dy);
});
blog.parser.process_branch = (function blog$parser$process_branch(form,depth,nl_QMARK_){
var vec__56375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.last.call(null,form)], null);
var op = cljs.core.nth.call(null,vec__56375,(0),null);
var cl = cljs.core.nth.call(null,vec__56375,(1),null);
var h = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cl) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(op)) + (1));
var w = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cl) + (1)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(op));
if(blog.parser.tag_QMARK_.call(null,form)){
return blog.parser.process_tag.call(null,form,h,w);
} else {
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"branch","branch",-74633925),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),form,new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"ty","ty",158290825),(0),new cljs.core.Keyword(null,"newline?","newline?",643506672),nl_QMARK_], null);
}
});
blog.parser.process_token = (function blog$parser$process_token(form,width,x,y,depth,nl_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ty","ty",158290825),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"newline?","newline?",643506672),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"text","text",-1790561697)],[y,y,width,nl_QMARK_,x,depth,x,form,new cljs.core.Keyword(null,"token","token",-1211463215),(1),form]);
});
blog.parser.process_delimiter = (function blog$parser$process_delimiter(form,width,x,y,depth,nl_QMARK_){
return cljs.core.assoc.call(null,blog.parser.process_token.call(null,form,width,x,y,depth,nl_QMARK_),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"delimiter","delimiter",-1766618000));
});
blog.parser.narrow_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["s",null,"f",null,"t",null,"i",null,"l",null,"\\'",null,"I",null], null), null);
/**
 * Computes width for a token.
 * 
 * This is a temporary fix, mainly
 * to address the variable character
 * width of Garamond.
 */
blog.parser.token__GT_width = (function blog$parser$token__GT_width(s){
return cljs.core.reduce.call(null,(function (sum,char$){
var w = (cljs.core.truth_(blog.parser.narrow_QMARK_.call(null,char$))?0.4:(1));
return (sum + w);
}),(0),s);
});
/**
 * Inefficient but passable.
 * 
 * Parses string to tree annotated with:
 * 
 * - x position
 * - y position
 * - depth
 * - width
 * - height
 */
blog.parser.parser = (function blog$parser$parser(string){
var string__$1 = clojure.string.split.call(null,string,blog.parser.reg);
var G__56381 = string__$1;
var vec__56382 = G__56381;
var seq__56383 = cljs.core.seq.call(null,vec__56382);
var first__56384 = cljs.core.first.call(null,seq__56383);
var seq__56383__$1 = cljs.core.next.call(null,seq__56383);
var s = first__56384;
var ss = seq__56383__$1;
var string__$2 = vec__56382;
var stack = cljs.core.PersistentVector.EMPTY;
var processed = cljs.core.PersistentVector.EMPTY;
var x = (0);
var y = (0);
var depth = (0);
var nl_QMARK_ = false;
var G__56381__$1 = G__56381;
var stack__$1 = stack;
var processed__$1 = processed;
var x__$1 = x;
var y__$1 = y;
var depth__$1 = depth;
var nl_QMARK___$1 = nl_QMARK_;
while(true){
var vec__56395 = G__56381__$1;
var seq__56396 = cljs.core.seq.call(null,vec__56395);
var first__56397 = cljs.core.first.call(null,seq__56396);
var seq__56396__$1 = cljs.core.next.call(null,seq__56396);
var s__$1 = first__56397;
var ss__$1 = seq__56396__$1;
var string__$3 = vec__56395;
var stack__$2 = stack__$1;
var processed__$2 = processed__$1;
var x__$2 = x__$1;
var y__$2 = y__$1;
var depth__$2 = depth__$1;
var nl_QMARK___$2 = nl_QMARK___$1;
if(cljs.core.not.call(null,string__$3)){
return blog.parser.process_branch.call(null,processed__$2,depth__$2,nl_QMARK___$2);
} else {
if(cljs.core._EQ_.call(null,s__$1,"")){
var G__56405 = ss__$1;
var G__56406 = stack__$2;
var G__56407 = processed__$2;
var G__56408 = x__$2;
var G__56409 = y__$2;
var G__56410 = depth__$2;
var G__56411 = nl_QMARK___$2;
G__56381__$1 = G__56405;
stack__$1 = G__56406;
processed__$1 = G__56407;
x__$1 = G__56408;
y__$1 = G__56409;
depth__$1 = G__56410;
nl_QMARK___$1 = G__56411;
continue;
} else {
if(cljs.core._EQ_.call(null,s__$1,"\n")){
var G__56412 = ss__$1;
var G__56413 = stack__$2;
var G__56414 = processed__$2;
var G__56415 = (0);
var G__56416 = (y__$2 + (1));
var G__56417 = depth__$2;
var G__56418 = true;
G__56381__$1 = G__56412;
stack__$1 = G__56413;
processed__$1 = G__56414;
x__$1 = G__56415;
y__$1 = G__56416;
depth__$1 = G__56417;
nl_QMARK___$1 = G__56418;
continue;
} else {
var width = blog.parser.token__GT_width.call(null,s__$1);
var temp__5718__auto__ = blog.parser.opening_QMARK_.call(null,s__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var op = temp__5718__auto__;
var G__56419 = ss__$1;
var G__56420 = cljs.core.conj.call(null,stack__$2,processed__$2);
var G__56421 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.parser.process_delimiter.call(null,op,width,x__$2,y__$2,depth__$2,nl_QMARK___$2)], null);
var G__56422 = (x__$2 + width);
var G__56423 = y__$2;
var G__56424 = (depth__$2 + (1));
var G__56425 = false;
G__56381__$1 = G__56419;
stack__$1 = G__56420;
processed__$1 = G__56421;
x__$1 = G__56422;
y__$1 = G__56423;
depth__$1 = G__56424;
nl_QMARK___$1 = G__56425;
continue;
} else {
var temp__5718__auto____$1 = blog.parser.closing_QMARK_.call(null,s__$1);
if(cljs.core.truth_(temp__5718__auto____$1)){
var cl = temp__5718__auto____$1;
var cl__$1 = blog.parser.process_delimiter.call(null,cl,width,x__$2,y__$2,depth__$2,nl_QMARK___$2);
var processed__$3 = cljs.core.conj.call(null,processed__$2,cl__$1);
var processed__$4 = blog.parser.process_branch.call(null,processed__$3,depth__$2,nl_QMARK___$2);
var vec__56398 = (function (){var map__56401 = processed__$4;
var map__56401__$1 = cljs.core.__destructure_map.call(null,map__56401);
var dx = cljs.core.get.call(null,map__56401__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.call(null,map__56401__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x__$2),(dy + y__$2)], null);
})();
var x__$3 = cljs.core.nth.call(null,vec__56398,(0),null);
var y__$3 = cljs.core.nth.call(null,vec__56398,(1),null);
var up = cljs.core.peek.call(null,stack__$2);
var stack__$3 = cljs.core.pop.call(null,stack__$2);
var processed__$5 = cljs.core.conj.call(null,up,processed__$4);
var G__56426 = ss__$1;
var G__56427 = stack__$3;
var G__56428 = processed__$5;
var G__56429 = (x__$3 + width);
var G__56430 = y__$3;
var G__56431 = (depth__$2 - (1));
var G__56432 = false;
G__56381__$1 = G__56426;
stack__$1 = G__56427;
processed__$1 = G__56428;
x__$1 = G__56429;
y__$1 = G__56430;
depth__$1 = G__56431;
nl_QMARK___$1 = G__56432;
continue;
} else {
var vec__56402 = ((clojure.string.blank_QMARK_.call(null,s__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [processed__$2,nl_QMARK___$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,processed__$2,blog.parser.process_token.call(null,s__$1,width,x__$2,y__$2,depth__$2,nl_QMARK___$2)),false], null));
var processed__$3 = cljs.core.nth.call(null,vec__56402,(0),null);
var nl_QMARK___$3 = cljs.core.nth.call(null,vec__56402,(1),null);
var G__56433 = ss__$1;
var G__56434 = stack__$2;
var G__56435 = processed__$3;
var G__56436 = (x__$2 + width);
var G__56437 = y__$2;
var G__56438 = depth__$2;
var G__56439 = nl_QMARK___$3;
G__56381__$1 = G__56433;
stack__$1 = G__56434;
processed__$1 = G__56435;
x__$1 = G__56436;
y__$1 = G__56437;
depth__$1 = G__56438;
nl_QMARK___$1 = G__56439;
continue;
}
}

}
}
}
break;
}
});

//# sourceMappingURL=parser.js.map
