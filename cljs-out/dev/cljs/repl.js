// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21148){
var map__21149 = p__21148;
var map__21149__$1 = cljs.core.__destructure_map.call(null,map__21149);
var m = map__21149__$1;
var n = cljs.core.get.call(null,map__21149__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21149__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21150_21178 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21151_21179 = null;
var count__21152_21180 = (0);
var i__21153_21181 = (0);
while(true){
if((i__21153_21181 < count__21152_21180)){
var f_21182 = cljs.core._nth.call(null,chunk__21151_21179,i__21153_21181);
cljs.core.println.call(null,"  ",f_21182);


var G__21183 = seq__21150_21178;
var G__21184 = chunk__21151_21179;
var G__21185 = count__21152_21180;
var G__21186 = (i__21153_21181 + (1));
seq__21150_21178 = G__21183;
chunk__21151_21179 = G__21184;
count__21152_21180 = G__21185;
i__21153_21181 = G__21186;
continue;
} else {
var temp__5720__auto___21187 = cljs.core.seq.call(null,seq__21150_21178);
if(temp__5720__auto___21187){
var seq__21150_21188__$1 = temp__5720__auto___21187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21150_21188__$1)){
var c__4679__auto___21189 = cljs.core.chunk_first.call(null,seq__21150_21188__$1);
var G__21190 = cljs.core.chunk_rest.call(null,seq__21150_21188__$1);
var G__21191 = c__4679__auto___21189;
var G__21192 = cljs.core.count.call(null,c__4679__auto___21189);
var G__21193 = (0);
seq__21150_21178 = G__21190;
chunk__21151_21179 = G__21191;
count__21152_21180 = G__21192;
i__21153_21181 = G__21193;
continue;
} else {
var f_21194 = cljs.core.first.call(null,seq__21150_21188__$1);
cljs.core.println.call(null,"  ",f_21194);


var G__21195 = cljs.core.next.call(null,seq__21150_21188__$1);
var G__21196 = null;
var G__21197 = (0);
var G__21198 = (0);
seq__21150_21178 = G__21195;
chunk__21151_21179 = G__21196;
count__21152_21180 = G__21197;
i__21153_21181 = G__21198;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21199 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21199);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21199)))?cljs.core.second.call(null,arglists_21199):arglists_21199));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21154_21200 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21155_21201 = null;
var count__21156_21202 = (0);
var i__21157_21203 = (0);
while(true){
if((i__21157_21203 < count__21156_21202)){
var vec__21166_21204 = cljs.core._nth.call(null,chunk__21155_21201,i__21157_21203);
var name_21205 = cljs.core.nth.call(null,vec__21166_21204,(0),null);
var map__21169_21206 = cljs.core.nth.call(null,vec__21166_21204,(1),null);
var map__21169_21207__$1 = cljs.core.__destructure_map.call(null,map__21169_21206);
var doc_21208 = cljs.core.get.call(null,map__21169_21207__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21209 = cljs.core.get.call(null,map__21169_21207__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21205);

cljs.core.println.call(null," ",arglists_21209);

if(cljs.core.truth_(doc_21208)){
cljs.core.println.call(null," ",doc_21208);
} else {
}


var G__21210 = seq__21154_21200;
var G__21211 = chunk__21155_21201;
var G__21212 = count__21156_21202;
var G__21213 = (i__21157_21203 + (1));
seq__21154_21200 = G__21210;
chunk__21155_21201 = G__21211;
count__21156_21202 = G__21212;
i__21157_21203 = G__21213;
continue;
} else {
var temp__5720__auto___21214 = cljs.core.seq.call(null,seq__21154_21200);
if(temp__5720__auto___21214){
var seq__21154_21215__$1 = temp__5720__auto___21214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21154_21215__$1)){
var c__4679__auto___21216 = cljs.core.chunk_first.call(null,seq__21154_21215__$1);
var G__21217 = cljs.core.chunk_rest.call(null,seq__21154_21215__$1);
var G__21218 = c__4679__auto___21216;
var G__21219 = cljs.core.count.call(null,c__4679__auto___21216);
var G__21220 = (0);
seq__21154_21200 = G__21217;
chunk__21155_21201 = G__21218;
count__21156_21202 = G__21219;
i__21157_21203 = G__21220;
continue;
} else {
var vec__21170_21221 = cljs.core.first.call(null,seq__21154_21215__$1);
var name_21222 = cljs.core.nth.call(null,vec__21170_21221,(0),null);
var map__21173_21223 = cljs.core.nth.call(null,vec__21170_21221,(1),null);
var map__21173_21224__$1 = cljs.core.__destructure_map.call(null,map__21173_21223);
var doc_21225 = cljs.core.get.call(null,map__21173_21224__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21226 = cljs.core.get.call(null,map__21173_21224__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21222);

cljs.core.println.call(null," ",arglists_21226);

if(cljs.core.truth_(doc_21225)){
cljs.core.println.call(null," ",doc_21225);
} else {
}


var G__21227 = cljs.core.next.call(null,seq__21154_21215__$1);
var G__21228 = null;
var G__21229 = (0);
var G__21230 = (0);
seq__21154_21200 = G__21227;
chunk__21155_21201 = G__21228;
count__21156_21202 = G__21229;
i__21157_21203 = G__21230;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__21174 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21175 = null;
var count__21176 = (0);
var i__21177 = (0);
while(true){
if((i__21177 < count__21176)){
var role = cljs.core._nth.call(null,chunk__21175,i__21177);
var temp__5720__auto___21231__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21231__$1)){
var spec_21232 = temp__5720__auto___21231__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21232));
} else {
}


var G__21233 = seq__21174;
var G__21234 = chunk__21175;
var G__21235 = count__21176;
var G__21236 = (i__21177 + (1));
seq__21174 = G__21233;
chunk__21175 = G__21234;
count__21176 = G__21235;
i__21177 = G__21236;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__21174);
if(temp__5720__auto____$1){
var seq__21174__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21174__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__21174__$1);
var G__21237 = cljs.core.chunk_rest.call(null,seq__21174__$1);
var G__21238 = c__4679__auto__;
var G__21239 = cljs.core.count.call(null,c__4679__auto__);
var G__21240 = (0);
seq__21174 = G__21237;
chunk__21175 = G__21238;
count__21176 = G__21239;
i__21177 = G__21240;
continue;
} else {
var role = cljs.core.first.call(null,seq__21174__$1);
var temp__5720__auto___21241__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21241__$2)){
var spec_21242 = temp__5720__auto___21241__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21242));
} else {
}


var G__21243 = cljs.core.next.call(null,seq__21174__$1);
var G__21244 = null;
var G__21245 = (0);
var G__21246 = (0);
seq__21174 = G__21243;
chunk__21175 = G__21244;
count__21176 = G__21245;
i__21177 = G__21246;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21247 = cljs.core.conj.call(null,via,t);
var G__21248 = cljs.core.ex_cause.call(null,t);
via = G__21247;
t = G__21248;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21251 = datafied_throwable;
var map__21251__$1 = cljs.core.__destructure_map.call(null,map__21251);
var via = cljs.core.get.call(null,map__21251__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21251__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21251__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21252 = cljs.core.last.call(null,via);
var map__21252__$1 = cljs.core.__destructure_map.call(null,map__21252);
var type = cljs.core.get.call(null,map__21252__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21252__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21252__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21253 = data;
var map__21253__$1 = cljs.core.__destructure_map.call(null,map__21253);
var problems = cljs.core.get.call(null,map__21253__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21253__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21253__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21254 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21254__$1 = cljs.core.__destructure_map.call(null,map__21254);
var top_data = map__21254__$1;
var source = cljs.core.get.call(null,map__21254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21255 = phase;
var G__21255__$1 = (((G__21255 instanceof cljs.core.Keyword))?G__21255.fqn:null);
switch (G__21255__$1) {
case "read-source":
var map__21256 = data;
var map__21256__$1 = cljs.core.__destructure_map.call(null,map__21256);
var line = cljs.core.get.call(null,map__21256__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21256__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21257 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21257__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21257,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21257);
var G__21257__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21257__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21257__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21257__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21258 = top_data;
var G__21258__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21258,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21258);
var G__21258__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21258__$1);
var G__21258__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21258__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21258__$2);
var G__21258__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21258__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21258__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21258__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21258__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21259 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21259,(0),null);
var method = cljs.core.nth.call(null,vec__21259,(1),null);
var file = cljs.core.nth.call(null,vec__21259,(2),null);
var line = cljs.core.nth.call(null,vec__21259,(3),null);
var G__21262 = top_data;
var G__21262__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21262,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21262);
var G__21262__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21262__$1);
var G__21262__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.call(null,G__21262__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21262__$2);
var G__21262__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21262__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21262__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21262__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21262__$4;
}

break;
case "execution":
var vec__21263 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21263,(0),null);
var method = cljs.core.nth.call(null,vec__21263,(1),null);
var file = cljs.core.nth.call(null,vec__21263,(2),null);
var line = cljs.core.nth.call(null,vec__21263,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__21250_SHARP_){
var or__4253__auto__ = (p1__21250_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21250_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__21266 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21266__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21266,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21266);
var G__21266__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21266__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21266__$1);
var G__21266__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.call(null,G__21266__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21266__$2);
var G__21266__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21266__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21266__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21266__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21266__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21255__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21270){
var map__21271 = p__21270;
var map__21271__$1 = cljs.core.__destructure_map.call(null,map__21271);
var triage_data = map__21271__$1;
var phase = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21272 = phase;
var G__21272__$1 = (((G__21272 instanceof cljs.core.Keyword))?G__21272.fqn:null);
switch (G__21272__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21273_21282 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21274_21283 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21275_21284 = true;
var _STAR_print_fn_STAR__temp_val__21276_21285 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21275_21284);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21276_21285);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21268_SHARP_){
return cljs.core.dissoc.call(null,p1__21268_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21274_21283);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21273_21282);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21277_21286 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21278_21287 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21279_21288 = true;
var _STAR_print_fn_STAR__temp_val__21280_21289 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21279_21288);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21280_21289);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21269_SHARP_){
return cljs.core.dissoc.call(null,p1__21269_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21278_21287);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21277_21286);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21272__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
