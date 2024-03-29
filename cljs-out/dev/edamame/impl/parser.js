// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('edamame.impl.parser');
goog.require('cljs.core');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.inspect');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tagged_literals');
goog.require('clojure.string');
goog.require('edamame.impl.macros');
goog.require('edamame.impl.read_fn');
goog.require('edamame.impl.syntax_quote');
goog.require('goog.string.StringBuffer');
edamame.impl.parser.eof = (new Object());
edamame.impl.parser.expected_delimiter = (new Object());
/**
 * Throw reader exception, including line line/column. line/column is
 *   read from the reader but it can be overriden by passing loc
 *   optional parameter.
 */
edamame.impl.parser.throw_reader = (function edamame$impl$parser$throw_reader(var_args){
var G__103662 = arguments.length;
switch (G__103662) {
case 3:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,msg){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,msg,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,msg,data){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,msg,data,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5 = (function (ctx,reader,msg,data,loc){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader);
var c = ((ir_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number.call(null,reader)):null);
var l = ((ir_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number.call(null,reader)):null);
throw cljs.core.ex_info.call(null,msg,cljs.core.merge.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("edamame","error","edamame/error",882529634)], null),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),l,new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),c),data));
}));

(edamame.impl.parser.throw_reader.cljs$lang$maxFixedArity = 5);

edamame.impl.parser.dispatch_macro_QMARK_ = (function edamame$impl$parser$dispatch_macro_QMARK_(ch){
var G__103664 = ch;
switch (G__103664) {
case "^":
case "'":
case "(":
case "{":
case "\"":
case "!":
case "_":
case "?":
case ":":
case "#":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.macro_QMARK_ = (function edamame$impl$parser$macro_QMARK_(ch){
var G__103666 = ch;
switch (G__103666) {
case ":":
case ";":
case "'":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
case "%":
case "#":
case "\"":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.macro_terminating_QMARK_ = (function edamame$impl$parser$macro_terminating_QMARK_(ch){
var G__103668 = ch;
switch (G__103668) {
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.whitespace_QMARK_ = (function edamame$impl$parser$whitespace_QMARK_(c){
var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__4251__auto__;
}
});
/**
 * Read in a single logical token from the reader
 */
edamame.impl.parser.read_token = (function edamame$impl$parser$read_token(rdr,_kind,initch){
var sb = (new goog.string.StringBuffer());
var ch = initch;
while(true){
if(cljs.core.truth_((function (){var or__4253__auto__ = edamame.impl.parser.whitespace_QMARK_.call(null,ch);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = edamame.impl.parser.macro_terminating_QMARK_.call(null,ch);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(ch)){
cljs.tools.reader.reader_types.unread.call(null,rdr,ch);
} else {
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
var G__103670 = sb.append(ch);
var G__103671 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__103670;
ch = G__103671;
continue;
}
break;
}
});
edamame.impl.parser.parse_symbol = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.parse_symbol;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","parse-symbol","cljs.tools.reader.impl.commons/parse-symbol",-903976395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"parse-symbol","parse-symbol",1608073451,null),"resources/public/cljs-out/dev/cljs/tools/reader/impl/commons.cljs",19,1,97,97,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",429068312,null)], null)),"Parses a string into a vector of the namespace and symbol",(cljs.core.truth_(cljs.tools.reader.impl.commons.parse_symbol)?cljs.tools.reader.impl.commons.parse_symbol.cljs$lang$test:null)])));
edamame.impl.parser.number_literal_QMARK_ = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.number_literal_QMARK_;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","number-literal?","cljs.tools.reader.impl.commons/number-literal?",-1450304800,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"number-literal?","number-literal?",843787662,null),"resources/public/cljs-out/dev/cljs/tools/reader/impl/commons.cljs",31,1,20,20,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"reader","reader",1810192380,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null)),"Checks whether the reader is at the start of a number literal",((cljs.tools.reader.impl.commons.number_literal_QMARK_)?cljs.tools.reader.impl.commons.number_literal_QMARK_.cljs$lang$test:null)])));
edamame.impl.parser.escape_char = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.tools.reader.edn.escape_char;},new cljs.core.Symbol("cljs.tools.reader.edn","escape-char","cljs.tools.reader.edn/escape-char",17562632,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"escape-char","escape-char",-2072670949,null),"resources/public/cljs-out/dev/cljs/tools/reader/edn.cljs",19,1,217,217,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.Symbol(null,"rdr","rdr",190007785,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.escape_char)?cljs.tools.reader.edn.escape_char.cljs$lang$test:null)])));
edamame.impl.parser.read_char_STAR_ = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.tools.reader.edn.read_char_STAR_;},new cljs.core.Symbol("cljs.tools.reader.edn","read-char*","cljs.tools.reader.edn/read-char*",-606185164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-char*","read-char*",1494526523,null),"resources/public/cljs-out/dev/cljs/tools/reader/edn.cljs",18,1,118,118,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"backslash","backslash",-863649243,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_char_STAR_)?cljs.tools.reader.edn.read_char_STAR_.cljs$lang$test:null)])));
edamame.impl.parser.read_symbolic_value = cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.tools.reader.edn.read_symbolic_value;},new cljs.core.Symbol("cljs.tools.reader.edn","read-symbolic-value","cljs.tools.reader.edn/read-symbolic-value",111468855,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-symbolic-value","read-symbolic-value",-100790078,null),"resources/public/cljs-out/dev/cljs/tools/reader/edn.cljs",27,1,324,324,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_symbolic_value)?cljs.tools.reader.edn.read_symbolic_value.cljs$lang$test:null)])));
edamame.impl.parser.read_number = (function edamame$impl$parser$read_number(ctx,rdr,initch){
var sb = (function (){var G__103672 = (new goog.string.StringBuffer());
G__103672.append(initch);

return G__103672;
})();
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_((function (){var or__4253__auto__ = edamame.impl.parser.whitespace_QMARK_.call(null,ch);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = edamame.impl.parser.macro_QMARK_.call(null,ch);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
cljs.tools.reader.reader_types.unread.call(null,rdr,ch);

var or__4253__auto__ = cljs.tools.reader.impl.commons.match_number.call(null,s);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,rdr,["Invalid number: ",s].join(''));
}
} else {
var G__103674 = (function (){var G__103673 = sb;
G__103673.append(ch);

return G__103673;
})();
var G__103675 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__103674;
ch = G__103675;
continue;
}
break;
}
});
edamame.impl.parser.edn_read = (function edamame$impl$parser$edn_read(ctx,reader){
var tools_reader_opts = new cljs.core.Keyword("tools.reader","opts","tools.reader/opts",-2121810901).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.tools.reader.edn.read.call(null,tools_reader_opts,reader);
});
edamame.impl.parser.parse_string_STAR_ = (function edamame$impl$parser$parse_string_STAR_(ctx,reader){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader);
var row = ((ir_QMARK_)?cljs.tools.reader.reader_types.get_line_number.call(null,reader):null);
var col = ((ir_QMARK_)?cljs.tools.reader.reader_types.get_column_number.call(null,reader):null);
var opened = cljs.tools.reader.reader_types.read_char.call(null,reader);
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
var G__103676 = ch;
if(cljs.core._EQ_.call(null,null,G__103676)){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null));
} else {
if(cljs.core._EQ_.call(null,"\\",G__103676)){
var G__103679 = (function (){var G__103677 = sb;
G__103677.append(edamame.impl.parser.escape_char.call(null,sb,reader));

return G__103677;
})();
var G__103680 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__103679;
ch = G__103680;
continue;
} else {
if(cljs.core._EQ_.call(null,"\"",G__103676)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
var G__103681 = (function (){var G__103678 = sb;
G__103678.append(ch);

return G__103678;
})();
var G__103682 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__103681;
ch = G__103682;
continue;

}
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
edamame.impl.parser.Loc = (function (row,col,__meta,__extmap,__hash){
this.row = row;
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Loc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k103684,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__103688 = k103684;
var G__103688__$1 = (((G__103688 instanceof cljs.core.Keyword))?G__103688.fqn:null);
switch (G__103688__$1) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k103684,else__4505__auto__);

}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4525__auto__,p__103689){
var vec__103690 = p__103689;
var k__4526__auto__ = cljs.core.nth.call(null,vec__103690,(0),null);
var v__4527__auto__ = cljs.core.nth.call(null,vec__103690,(1),null);
return f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__);
}),init__4524__auto__,this__4522__auto____$1);
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,pr_pair__4520__auto__,"#edamame.impl.parser.Loc{",", ","}",opts__4519__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row","row",-570139521),self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__103683){
var self__ = this;
var G__103683__$1 = this;
return (new cljs.core.RecordIter((0),G__103683__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1435872067 ^ cljs.core.hash_unordered_coll.call(null,coll__4499__auto__));
}).call(null,this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this103685,other103686){
var self__ = this;
var this103685__$1 = this;
return (((!((other103686 == null)))) && ((((this103685__$1.constructor === other103686.constructor)) && (((cljs.core._EQ_.call(null,this103685__$1.row,other103686.row)) && (((cljs.core._EQ_.call(null,this103685__$1.col,other103686.col)) && (cljs.core._EQ_.call(null,this103685__$1.__extmap,other103686.__extmap)))))))));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col","col",-1959363084),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4513__auto__)),null));
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k103684){
var self__ = this;
var this__4509__auto____$1 = this;
var G__103693 = k103684;
var G__103693__$1 = (((G__103693 instanceof cljs.core.Keyword))?G__103693.fqn:null);
switch (G__103693__$1) {
case "row":
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k103684);

}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__103683){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__103694 = cljs.core.keyword_identical_QMARK_;
var expr__103695 = k__4511__auto__;
if(cljs.core.truth_(pred__103694.call(null,new cljs.core.Keyword(null,"row","row",-570139521),expr__103695))){
return (new edamame.impl.parser.Loc(G__103683,self__.col,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103694.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__103695))){
return (new edamame.impl.parser.Loc(self__.row,G__103683,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4511__auto__,G__103683),null));
}
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row","row",-570139521),self__.row,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__103683){
var self__ = this;
var this__4501__auto____$1 = this;
return (new edamame.impl.parser.Loc(self__.row,self__.col,G__103683,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4508__auto__,(0)),cljs.core._nth.call(null,entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(edamame.impl.parser.Loc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(edamame.impl.parser.Loc.cljs$lang$type = true);

(edamame.impl.parser.Loc.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Loc",null,(1),null));
}));

(edamame.impl.parser.Loc.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write.call(null,writer__4547__auto__,"edamame.impl.parser/Loc");
}));

/**
 * Positional factory function for edamame.impl.parser/Loc.
 */
edamame.impl.parser.__GT_Loc = (function edamame$impl$parser$__GT_Loc(row,col){
return (new edamame.impl.parser.Loc(row,col,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Loc, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Loc = (function edamame$impl$parser$map__GT_Loc(G__103687){
var extmap__4542__auto__ = (function (){var G__103697 = cljs.core.dissoc.call(null,G__103687,new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_.call(null,G__103687)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__103697);
} else {
return G__103697;
}
})();
return (new edamame.impl.parser.Loc(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(G__103687),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__103687),null,cljs.core.not_empty.call(null,extmap__4542__auto__),null));
});

edamame.impl.parser.location = (function edamame$impl$parser$location(reader){
return edamame.impl.parser.__GT_Loc.call(null,cljs.tools.reader.reader_types.get_line_number.call(null,reader),cljs.tools.reader.reader_types.get_column_number.call(null,reader));
});
var ret__4913__auto___103700 = edamame.impl.parser.kw_identical_QMARK_ = (function edamame$impl$parser$kw_identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,k,v){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)))));
});
(edamame.impl.parser.kw_identical_QMARK_.cljs$lang$macro = true);

edamame.impl.parser.parse_comment = (function edamame$impl$parser$parse_comment(reader){
cljs.tools.reader.reader_types.read_line.call(null,reader);

return reader;
});
/**
 * Skips whitespace. Returns reader. If end of stream is reached, returns nil.
 */
edamame.impl.parser.skip_whitespace = (function edamame$impl$parser$skip_whitespace(_ctx,reader){
while(true){
var temp__5720__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_.call(null,c))){
continue;
} else {
cljs.tools.reader.reader_types.unread.call(null,reader,c);

return reader;
}
} else {
return null;
}
break;
}
});
edamame.impl.parser.non_match = cljs.core.symbol.call(null,"non-match");
edamame.impl.parser.non_match_QMARK_ = (function edamame$impl$parser$non_match_QMARK_(v){
return (v === edamame.impl.parser.non_match);
});
edamame.impl.parser.throw_eof_while_reading = (function edamame$impl$parser$throw_eof_while_reading(ctx,reader){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"EOF while reading");
});
edamame.impl.parser.parse_to_delimiter = (function edamame$impl$parser$parse_to_delimiter(var_args){
var G__103702 = arguments.length;
switch (G__103702) {
case 3:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader);
var row = ((ir_QMARK_)?cljs.tools.reader.reader_types.get_line_number.call(null,reader):null);
var col = ((ir_QMARK_)?cljs.tools.reader.reader_types.get_column_number.call(null,reader):null);
var opened = cljs.tools.reader.reader_types.read_char.call(null,reader);
var ctx__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),delimiter),new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
var vals = cljs.core.transient$.call(null,into);
while(true){
var next_val = edamame.impl.parser.parse_next.call(null,ctx__$1,reader);
var cond_splice_QMARK_ = (function (){var G__103708 = next_val;
var G__103708__$1 = (((G__103708 == null))?null:cljs.core.meta.call(null,G__103708));
if((G__103708__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765).cljs$core$IFn$_invoke$arity$1(G__103708__$1);
}
})();
if((edamame.impl.parser.eof === next_val)){
return edamame.impl.parser.throw_reader.call(null,ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null));
} else {
if((edamame.impl.parser.expected_delimiter === next_val)){
return cljs.core.persistent_BANG_.call(null,vals);
} else {
if(cljs.core.truth_(cond_splice_QMARK_)){
var seq__103709_103714 = cljs.core.seq.call(null,next_val);
var chunk__103710_103715 = null;
var count__103711_103716 = (0);
var i__103712_103717 = (0);
while(true){
if((i__103712_103717 < count__103711_103716)){
var v_103718 = cljs.core._nth.call(null,chunk__103710_103715,i__103712_103717);
cljs.core.conj_BANG_.call(null,vals,v_103718);


var G__103719 = seq__103709_103714;
var G__103720 = chunk__103710_103715;
var G__103721 = count__103711_103716;
var G__103722 = (i__103712_103717 + (1));
seq__103709_103714 = G__103719;
chunk__103710_103715 = G__103720;
count__103711_103716 = G__103721;
i__103712_103717 = G__103722;
continue;
} else {
var temp__5720__auto___103723 = cljs.core.seq.call(null,seq__103709_103714);
if(temp__5720__auto___103723){
var seq__103709_103724__$1 = temp__5720__auto___103723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103709_103724__$1)){
var c__4679__auto___103725 = cljs.core.chunk_first.call(null,seq__103709_103724__$1);
var G__103726 = cljs.core.chunk_rest.call(null,seq__103709_103724__$1);
var G__103727 = c__4679__auto___103725;
var G__103728 = cljs.core.count.call(null,c__4679__auto___103725);
var G__103729 = (0);
seq__103709_103714 = G__103726;
chunk__103710_103715 = G__103727;
count__103711_103716 = G__103728;
i__103712_103717 = G__103729;
continue;
} else {
var v_103730 = cljs.core.first.call(null,seq__103709_103724__$1);
cljs.core.conj_BANG_.call(null,vals,v_103730);


var G__103731 = cljs.core.next.call(null,seq__103709_103724__$1);
var G__103732 = null;
var G__103733 = (0);
var G__103734 = (0);
seq__103709_103714 = G__103731;
chunk__103710_103715 = G__103732;
count__103711_103716 = G__103733;
i__103712_103717 = G__103734;
continue;
}
} else {
}
}
break;
}

var G__103735 = vals;
vals = G__103735;
continue;
} else {
if(edamame.impl.parser.non_match_QMARK_.call(null,next_val)){
var G__103736 = vals;
vals = G__103736;
continue;
} else {
var G__103737 = cljs.core.conj_BANG_.call(null,vals,next_val);
vals = G__103737;
continue;

}
}
}
}
break;
}
}));

(edamame.impl.parser.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.parse_list = (function edamame$impl$parser$parse_list(ctx,reader){
return cljs.core.apply.call(null,cljs.core.list,edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
edamame.impl.parser.read_regex_pattern = (function edamame$impl$parser$read_regex_pattern(ctx,reader){
cljs.tools.reader.reader_types.read_char.call(null,reader);

var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_103738__$1 = cljs.tools.reader.reader_types.read_char.call(null,reader);
if((ch_103738__$1 == null)){
edamame.impl.parser.throw_reader.call(null,ctx,reader,"Error while parsing regex");
} else {
}

sb.append(ch_103738__$1);
} else {
}

var G__103739 = cljs.tools.reader.reader_types.read_char.call(null,reader);
ch = G__103739;
continue;
}
}
break;
}
});
edamame.impl.parser.duplicate_keys_error = (function edamame$impl$parser$duplicate_keys_error(msg,coll){
var duplicates = (function edamame$impl$parser$duplicate_keys_error_$_duplicates(seq){
var iter__4652__auto__ = (function edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__103750(s__103751){
return (new cljs.core.LazySeq(null,(function (){
var s__103751__$1 = s__103751;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__103751__$1);
if(temp__5720__auto__){
var s__103751__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__103751__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__103751__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__103753 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__103752 = (0);
while(true){
if((i__103752 < size__4651__auto__)){
var vec__103754 = cljs.core._nth.call(null,c__4650__auto__,i__103752);
var id = cljs.core.nth.call(null,vec__103754,(0),null);
var freq = cljs.core.nth.call(null,vec__103754,(1),null);
if((freq > (1))){
cljs.core.chunk_append.call(null,b__103753,id);

var G__103760 = (i__103752 + (1));
i__103752 = G__103760;
continue;
} else {
var G__103761 = (i__103752 + (1));
i__103752 = G__103761;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103753),edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__103750.call(null,cljs.core.chunk_rest.call(null,s__103751__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__103753),null);
}
} else {
var vec__103757 = cljs.core.first.call(null,s__103751__$2);
var id = cljs.core.nth.call(null,vec__103757,(0),null);
var freq = cljs.core.nth.call(null,vec__103757,(1),null);
if((freq > (1))){
return cljs.core.cons.call(null,id,edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__103750.call(null,cljs.core.rest.call(null,s__103751__$2)));
} else {
var G__103762 = cljs.core.rest.call(null,s__103751__$2);
s__103751__$1 = G__103762;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,cljs.core.frequencies.call(null,seq));
});
var dups = duplicates.call(null,coll);
return cljs.core.apply.call(null,cljs.core.str,msg,(((cljs.core.count.call(null,dups) > (1)))?"s":null),": ",cljs.core.interpose.call(null,", ",dups));
});
edamame.impl.parser.throw_dup_keys = (function edamame$impl$parser$throw_dup_keys(ctx,reader,loc,kind,ks){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,edamame.impl.parser.duplicate_keys_error.call(null,[clojure.string.capitalize.call(null,cljs.core.name.call(null,kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
edamame.impl.parser.parse_set = (function edamame$impl$parser$parse_set(ctx,reader){
var start_loc = ((cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?edamame.impl.parser.location.call(null,reader):null);
var coll = edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,"}");
var the_set = cljs.core.set.call(null,coll);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,the_set))){
} else {
edamame.impl.parser.throw_dup_keys.call(null,ctx,reader,start_loc,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
edamame.impl.parser.parse_first_matching_condition = (function edamame$impl$parser$parse_first_matching_condition(ctx,reader){
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(ctx);
var match = edamame.impl.parser.non_match;
while(true){
var k = edamame.impl.parser.parse_next.call(null,ctx,reader);
if((edamame.impl.parser.expected_delimiter === k)){
return match;
} else {
var next_is_match_QMARK_ = ((edamame.impl.parser.non_match_QMARK_.call(null,match)) && (((cljs.core.contains_QMARK_.call(null,features,k)) || (cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"default","default",-1987822328))))));
if(next_is_match_QMARK_){
var match__$1 = edamame.impl.parser.parse_next.call(null,ctx,reader);
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755),true);
while(true){
var next_val_103765 = edamame.impl.parser.parse_next.call(null,ctx__$1,reader);
if((edamame.impl.parser.expected_delimiter === next_val_103765)){
} else {
if((edamame.impl.parser.eof === next_val_103765)){
var delimiter_103766 = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__103764_103767 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__103764_103768__$1 = cljs.core.__destructure_map.call(null,map__103764_103767);
var row_103769 = cljs.core.get.call(null,map__103764_103768__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col_103770 = cljs.core.get.call(null,map__103764_103768__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char_103771 = cljs.core.get.call(null,map__103764_103768__$1,new cljs.core.Keyword(null,"char","char",-641587586));
edamame.impl.parser.throw_reader.call(null,ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_103766)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_103771)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_103769),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_103770),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_103766),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_103771)], null));
} else {
continue;
}
}
break;
}

return match__$1;
} else {
edamame.impl.parser.parse_next.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755),true),reader);

var G__103772 = match;
match = G__103772;
continue;
}
}
break;
}
});
edamame.impl.parser.parse_reader_conditional = (function edamame$impl$parser$parse_reader_conditional(ctx,reader){
edamame.impl.parser.skip_whitespace.call(null,ctx,reader);

var opt = new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx);
var splice_QMARK_ = cljs.core._EQ_.call(null,"@",cljs.tools.reader.reader_types.peek_char.call(null,reader));
if(splice_QMARK_){
cljs.tools.reader.reader_types.read_char.call(null,reader);
} else {
}

edamame.impl.parser.skip_whitespace.call(null,ctx,reader);

if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"preserve","preserve",1276846509),opt)){
return cljs.tools.reader.impl.utils.reader_conditional.call(null,edamame.impl.parser.parse_next.call(null,ctx,reader),splice_QMARK_);
} else {
if(cljs.core.fn_QMARK_.call(null,opt)){
return opt.call(null,cljs.core.vary_meta.call(null,edamame.impl.parser.parse_next.call(null,ctx,reader),cljs.core.assoc,new cljs.core.Keyword("edamame","read-cond-splicing","edamame/read-cond-splicing",-1992728777),splice_QMARK_));
} else {
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader);
var row = ((ir_QMARK_)?cljs.tools.reader.reader_types.get_line_number.call(null,reader):null);
var col = ((ir_QMARK_)?cljs.tools.reader.reader_types.get_column_number.call(null,reader):null);
var opened = cljs.tools.reader.reader_types.read_char.call(null,reader);
var ctx__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),")"),new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
var match = edamame.impl.parser.parse_first_matching_condition.call(null,ctx__$1,reader);
if(edamame.impl.parser.non_match_QMARK_.call(null,match)){
return reader;
} else {
if(splice_QMARK_){
return cljs.core.vary_meta.call(null,match,(function (p1__103773_SHARP_){
return cljs.core.assoc.call(null,p1__103773_SHARP_,new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765),true);
}));
} else {
return match;

}
}

}
}
});
edamame.impl.parser.get_auto_resolve = (function edamame$impl$parser$get_auto_resolve(var_args){
var G__103775 = arguments.length;
switch (G__103775) {
case 3:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,next_val){
return edamame.impl.parser.get_auto_resolve.call(null,ctx,reader,next_val,null);
}));

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,next_val,msg){
var temp__5718__auto__ = new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
return v;
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,(function (){var or__4253__auto__ = msg;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "Use `:auto-resolve` to resolve aliases.";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.get_auto_resolve.cljs$lang$maxFixedArity = 4);

/**
 * Returns namespace for given alias.
 */
edamame.impl.parser.auto_resolve = (function edamame$impl$parser$auto_resolve(var_args){
var G__103778 = arguments.length;
switch (G__103778) {
case 5:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5 = (function (ctx,m,kns,reader,next_val){
return edamame.impl.parser.auto_resolve.call(null,ctx,m,kns,reader,next_val,null);
}));

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6 = (function (ctx,m,kns,reader,next_val,msg){
var temp__5718__auto__ = m.call(null,kns);
if(cljs.core.truth_(temp__5718__auto__)){
var kns__$1 = temp__5718__auto__;
return kns__$1;
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,(function (){var or__4253__auto__ = msg;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ["Alias `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,kns)),"` not found in `:auto-resolve`"].join('');
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.auto_resolve.cljs$lang$maxFixedArity = 6);

edamame.impl.parser.read_symbol = (function edamame$impl$parser$read_symbol(var_args){
var G__103781 = arguments.length;
switch (G__103781) {
case 2:
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return edamame.impl.parser.read_symbol.call(null,ctx,reader,cljs.tools.reader.reader_types.read_char.call(null,reader));
}));

(edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,initch){
var temp__5720__auto__ = edamame.impl.parser.read_token.call(null,reader,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),initch);
if(cljs.core.truth_(temp__5720__auto__)){
var token = temp__5720__auto__;
var G__103782 = token;
switch (G__103782) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",-1371932971,null);

break;
default:
var or__4253__auto__ = (function (){var temp__5720__auto____$1 = edamame.impl.parser.parse_symbol.call(null,token);
if(cljs.core.truth_(temp__5720__auto____$1)){
var p = temp__5720__auto____$1;
return cljs.core.symbol.call(null,p.call(null,(0)),p.call(null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,["Invalid symbol: ",token].join(''),cljs.core.update.call(null,edamame.impl.parser.location.call(null,reader),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.core._,((token).length)));
}

}
} else {
return null;
}
}));

(edamame.impl.parser.read_symbol.cljs$lang$maxFixedArity = 3);

edamame.impl.parser.parse_namespaced_map = (function edamame$impl$parser$parse_namespaced_map(ctx,reader){
var auto_resolved_QMARK_ = (((":" === cljs.tools.reader.reader_types.peek_char.call(null,reader)))?(function (){
cljs.tools.reader.reader_types.read_char.call(null,reader);

return true;
})()
:null);
var current_ns_QMARK_ = (cljs.core.truth_(auto_resolved_QMARK_)?("{" === cljs.tools.reader.reader_types.peek_char.call(null,reader)):null);
var prefix = (cljs.core.truth_(auto_resolved_QMARK_)?(cljs.core.truth_(current_ns_QMARK_)?null:edamame.impl.parser.read_symbol.call(null,ctx,reader)):edamame.impl.parser.read_symbol.call(null,ctx,reader));
var the_map = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(cljs.core.truth_(auto_resolved_QMARK_)){
var ns = (cljs.core.truth_(current_ns_QMARK_)?new cljs.core.Keyword(null,"current","current",-1088038603):cljs.core.symbol.call(null,cljs.core.name.call(null,prefix)));
var f = edamame.impl.parser.get_auto_resolve.call(null,ctx,reader,ns);
var resolved_ns = edamame.impl.parser.auto_resolve.call(null,ctx,f,ns,reader,prefix);
return cljs.core.zipmap.call(null,cljs.tools.reader.impl.utils.namespace_keys.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_ns),cljs.core.keys.call(null,the_map)),cljs.core.vals.call(null,the_map));
} else {
var resolved_ns = cljs.core.name.call(null,prefix);
return cljs.core.zipmap.call(null,cljs.tools.reader.impl.utils.namespace_keys.call(null,resolved_ns,cljs.core.keys.call(null,the_map)),cljs.core.vals.call(null,the_map));
}
});
edamame.impl.parser.parse_sharp = (function edamame$impl$parser$parse_sharp(ctx,reader){
var c = cljs.tools.reader.reader_types.peek_char.call(null,reader);
var G__103785 = c;
if(cljs.core._EQ_.call(null,null,G__103785)){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.call(null,"!",G__103785)){
edamame.impl.parser.parse_comment.call(null,reader);

return reader;
} else {
if(cljs.core._EQ_.call(null,"\"",G__103785)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var pat = edamame.impl.parser.read_regex_pattern.call(null,ctx,reader);
if(v === true){
return cljs.core.re_pattern.call(null,pat);
} else {
return v.call(null,pat);
}
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Regex not allowed. Use the `:regex` option");
}
} else {
if(cljs.core._EQ_.call(null,"#",G__103785)){
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.read_symbolic_value.call(null,reader,null,null);
} else {
if(cljs.core._EQ_.call(null,"'",G__103785)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if((edamame.impl.parser.eof === next_val)){
edamame.impl.parser.throw_eof_while_reading.call(null,ctx,reader);
} else {
}

if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return v.call(null,next_val);
}
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Var literal not allowed. Use the `:var` option");
}
} else {
if(cljs.core._EQ_.call(null,"(",G__103785)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("edamame.impl.parser","fn-literal","edamame.impl.parser/fn-literal",-1835933155).cljs$core$IFn$_invoke$arity$1(ctx))){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Nested fn literals not allowed.");
} else {
var fn_expr = edamame.impl.parser.parse_next.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("edamame.impl.parser","fn-literal","edamame.impl.parser/fn-literal",-1835933155),true),reader);
if(v === true){
return edamame.impl.read_fn.read_fn.call(null,fn_expr);
} else {
return v.call(null,fn_expr);
}
}
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Function literal not allowed. Use the `:fn` option");
}
} else {
if(cljs.core._EQ_.call(null,":",G__103785)){
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.parse_namespaced_map.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"{",G__103785)){
return edamame.impl.parser.parse_set.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"=",G__103785)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol("edamame.core","read-eval","edamame.core/read-eval",1461005554,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return v.call(null,next_val);
}
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Read-eval not allowed. Use the `:read-eval` option");
}
} else {
if(cljs.core._EQ_.call(null,"?",G__103785)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx))){
} else {
edamame.impl.parser.throw_reader.call(null,ctx,reader,"Conditional read not allowed.");
}

cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.parse_reader_conditional.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"_",G__103785)){
cljs.tools.reader.reader_types.read_char.call(null,reader);

edamame.impl.parser.parse_next.call(null,ctx,reader);

return reader;
} else {
if(cljs.core.truth_(edamame.impl.parser.dispatch_macro_QMARK_.call(null,c))){
cljs.tools.reader.reader_types.unread.call(null,reader,"#");

return edamame.impl.parser.edn_read.call(null,ctx,reader);
} else {
var suppress_QMARK_ = new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(suppress_QMARK_)){
edamame.impl.parser.parse_next.call(null,ctx,reader);

return edamame.impl.parser.parse_next.call(null,ctx,reader);
} else {
var sym = edamame.impl.parser.parse_next.call(null,ctx,reader);
var data = edamame.impl.parser.parse_next.call(null,ctx,reader);
var f = (function (){var or__4253__auto__ = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var readers = temp__5720__auto__;
return readers.call(null,sym);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.tagged_literals._STAR_cljs_data_readers_STAR_.call(null,sym);
}
})();
if(cljs.core.truth_(f)){
return f.call(null,data);
} else {
throw (new Error(["No reader function for tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
}
}
}

}
}
}
}
}
}
}
}
}
}
}
});
edamame.impl.parser.throw_odd_map = (function edamame$impl$parser$throw_odd_map(ctx,reader,loc,elements){
return edamame.impl.parser.throw_reader.call(null,ctx,reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.call(null,cljs.core.first.call(null,elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
edamame.impl.parser.parse_map = (function edamame$impl$parser$parse_map(ctx,reader){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader);
var start_loc = ((ir_QMARK_)?edamame.impl.parser.location.call(null,reader):null);
var elements = edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,"}");
var c = cljs.core.count.call(null,elements);
if((c > (0))){
if(cljs.core.odd_QMARK_.call(null,c)){
edamame.impl.parser.throw_odd_map.call(null,ctx,reader,start_loc,elements);
} else {
}

var ks_103786 = cljs.core.take_nth.call(null,(2),elements);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,ks_103786))){
} else {
edamame.impl.parser.throw_dup_keys.call(null,ctx,reader,start_loc,new cljs.core.Keyword(null,"map","map",1371690461),ks_103786);
}
} else {
}

if((c <= (16))){
return cljs.core.apply.call(null,cljs.core.array_map,elements);
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,elements);
}
});
edamame.impl.parser.parse_keyword = (function edamame$impl$parser$parse_keyword(ctx,reader){
cljs.tools.reader.reader_types.read_char.call(null,reader);

var init_c = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_.call(null,init_c))){
edamame.impl.parser.throw_reader.call(null,ctx,reader,"Invalid token: :");
} else {
}

var token = edamame.impl.parser.read_token.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),init_c);
var auto_resolve_QMARK_ = (":" === token.charAt((0)));
if(auto_resolve_QMARK_){
var token__$1 = ((auto_resolve_QMARK_)?cljs.core.subs.call(null,token,(1)):token);
var vec__103787 = edamame.impl.parser.parse_symbol.call(null,token__$1);
var token_ns = cljs.core.nth.call(null,vec__103787,(0),null);
var token_name = cljs.core.nth.call(null,vec__103787,(1),null);
if(cljs.core.truth_(token_ns)){
var f = edamame.impl.parser.get_auto_resolve.call(null,ctx,reader,token__$1);
var kns = edamame.impl.parser.auto_resolve.call(null,ctx,f,cljs.core.symbol.call(null,token_ns),reader,token_ns);
return cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
} else {
var f = edamame.impl.parser.get_auto_resolve.call(null,ctx,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
var kns = edamame.impl.parser.auto_resolve.call(null,ctx,f,new cljs.core.Keyword(null,"current","current",-1088038603),reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
return cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
}
} else {
return cljs.core.keyword.call(null,token);
}
});
/**
 * Resolves syntactical sugar in metadata
 */
edamame.impl.parser.desugar_meta = (function edamame$impl$parser$desugar_meta(var_args){
var G__103791 = arguments.length;
switch (G__103791) {
case 1:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1 = (function (f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2 = (function (f,postprocess){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([postprocess.call(null,f),postprocess.call(null,true)]);
} else {
if((f instanceof cljs.core.Symbol)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([postprocess.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),postprocess.call(null,f)]);
} else {
if(typeof f === 'string'){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([postprocess.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),postprocess.call(null,f)]);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$lang$maxFixedArity = 2);

edamame.impl.parser.dispatch = (function edamame$impl$parser$dispatch(ctx,reader,c){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader);
var sharp_QMARK_ = cljs.core._EQ_.call(null,"#",c);
if(sharp_QMARK_){
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.parse_sharp.call(null,ctx,reader);
} else {
var G__103793 = c;
if(cljs.core._EQ_.call(null,null,G__103793)){
return edamame.impl.parser.eof;
} else {
if(cljs.core._EQ_.call(null,"@",G__103793)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return v.call(null,next_val);
}
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Deref not allowed. Use the `:deref` option");
}
} else {
if(cljs.core._EQ_.call(null,"`",G__103793)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(((v === true) || (cljs.core.map_QMARK_.call(null,v)))){
var gensyms = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"gensyms","gensyms",248713782),gensyms);
var ret = edamame.impl.syntax_quote.syntax_quote.call(null,ctx__$1,reader,next_val);
return ret;
} else {
return v.call(null,next_val);
}
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Syntax quote not allowed. Use the `:syntax-quote` option");
}
} else {
if(cljs.core._EQ_.call(null,"\"",G__103793)){
return edamame.impl.parser.parse_string_STAR_.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"'",G__103793)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if((edamame.impl.parser.eof === next_val)){
edamame.impl.parser.throw_eof_while_reading.call(null,ctx,reader);
} else {
}

if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return v.call(null,next_val);
}
} else {
return edamame.impl.parser.edn_read.call(null,ctx,reader);
}
} else {
if(cljs.core._EQ_.call(null,"(",G__103793)){
return edamame.impl.parser.parse_list.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,")",G__103793)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.call(null,expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location.call(null,reader):null);
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.throw_reader.call(null,ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__103797 = temp__5720__auto__;
var map__103797__$1 = cljs.core.__destructure_map.call(null,map__103797);
var row = cljs.core.get.call(null,map__103797__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__103797__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.call(null,map__103797__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__103798 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__103798__$1 = cljs.core.__destructure_map.call(null,map__103798);
var char$ = cljs.core.get.call(null,map__103798__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.call(null,map__103798__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__103798__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.call(null,":",G__103793)){
return edamame.impl.parser.parse_keyword.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,";",G__103793)){
return edamame.impl.parser.parse_comment.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,"[",G__103793)){
return edamame.impl.parser.parse_to_delimiter.call(null,ctx,reader,"]");
} else {
if(cljs.core._EQ_.call(null,"{",G__103793)){
return edamame.impl.parser.parse_map.call(null,ctx,reader);
} else {
if(cljs.core._EQ_.call(null,"\\",G__103793)){
return edamame.impl.parser.read_char_STAR_.call(null,reader,cljs.tools.reader.reader_types.read_char.call(null,reader),null);
} else {
if(cljs.core._EQ_.call(null,"]",G__103793)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.call(null,expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location.call(null,reader):null);
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.throw_reader.call(null,ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__103802 = temp__5720__auto__;
var map__103802__$1 = cljs.core.__destructure_map.call(null,map__103802);
var row = cljs.core.get.call(null,map__103802__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__103802__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.call(null,map__103802__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__103803 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__103803__$1 = cljs.core.__destructure_map.call(null,map__103803);
var char$ = cljs.core.get.call(null,map__103803__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.call(null,map__103803__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__103803__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.call(null,"}",G__103793)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.call(null,expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location.call(null,reader):null);
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.throw_reader.call(null,ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__103807 = temp__5720__auto__;
var map__103807__$1 = cljs.core.__destructure_map.call(null,map__103807);
var row = cljs.core.get.call(null,map__103807__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__103807__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.call(null,map__103807__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__103808 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__103808__$1 = cljs.core.__destructure_map.call(null,map__103808);
var char$ = cljs.core.get.call(null,map__103808__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.call(null,map__103808__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__103808__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
cljs.tools.reader.reader_types.read_char.call(null,reader);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.call(null,"^",G__103793)){
cljs.tools.reader.reader_types.read_char.call(null,reader);

var meta_val = edamame.impl.parser.parse_next.call(null,ctx,reader,true);
var val_val = cljs.core.vary_meta.call(null,edamame.impl.parser.parse_next.call(null,ctx,reader),cljs.core.merge,meta_val);
return val_val;
} else {
if(cljs.core._EQ_.call(null,"~",G__103793)){
var temp__5718__auto__ = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__4251__auto__)){
var or__4253__auto__ = new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return true;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var nc = cljs.tools.reader.reader_types.peek_char.call(null,reader);
if((nc === "@")){
var temp__5718__auto____$1 = (function (){var and__4251__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__4251__auto__)){
var or__4253__auto__ = new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return true;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var v__$1 = temp__5718__auto____$1;
cljs.tools.reader.reader_types.read_char.call(null,reader);

var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(v__$1 === true){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return v__$1.call(null,next_val);
}
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Syntax unquote splice not allowed. Use the `:syntax-quote` option");
}
} else {
var next_val = edamame.impl.parser.parse_next.call(null,ctx,reader);
if(v === true){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
} else {
return v.call(null,next_val);
}
}
} else {
return edamame.impl.parser.throw_reader.call(null,ctx,reader,"Syntax unquote not allowed. Use the `:syntax-unquote` option");
}
} else {
var c__$1 = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(edamame.impl.parser.number_literal_QMARK_.call(null,reader,c__$1))){
return edamame.impl.parser.read_number.call(null,ctx,reader,c__$1);
} else {
return edamame.impl.parser.read_symbol.call(null,ctx,reader,c__$1);

}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
edamame.impl.parser.iobj_QMARK_ = (function edamame$impl$parser$iobj_QMARK_(obj){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj);
}
});
edamame.impl.parser.buf = (function edamame$impl$parser$buf(reader){
return new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader.frames));
});
edamame.impl.parser.parse_next = (function edamame$impl$parser$parse_next(var_args){
var G__103813 = arguments.length;
switch (G__103813) {
case 2:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return edamame.impl.parser.parse_next.call(null,ctx,reader,null);
}));

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,desugar){
while(true){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader);
var temp__5718__auto__ = (function (){var and__4251__auto__ = edamame.impl.parser.skip_whitespace.call(null,ctx,reader);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.tools.reader.reader_types.peek_char.call(null,reader);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
var loc = ((ir_QMARK_)?edamame.impl.parser.location.call(null,reader):null);
var log_QMARK_ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(ctx);
var buf = (cljs.core.truth_(log_QMARK_)?edamame.impl.parser.buf.call(null,reader):null);
var offset = (cljs.core.truth_(log_QMARK_)?buf.getLength():null);
var obj = (cljs.core.truth_(log_QMARK_)?cljs.tools.reader.reader_types.log_source_STAR_.call(null,reader,((function (ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5718__auto__,ir_QMARK_){
return (function (){
return edamame.impl.parser.dispatch.call(null,ctx,reader,c);
});})(ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5718__auto__,ir_QMARK_))
):edamame.impl.parser.dispatch.call(null,ctx,reader,c));
if((reader === obj)){
var G__103818 = ctx;
var G__103819 = reader;
var G__103820 = desugar;
ctx = G__103818;
reader = G__103819;
desugar = G__103820;
continue;
} else {
if((edamame.impl.parser.expected_delimiter === obj)){
return obj;
} else {
var postprocess = new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881).cljs$core$IFn$_invoke$arity$1(ctx);
var location_QMARK_ = new cljs.core.Keyword(null,"location?","location?",425878086).cljs$core$IFn$_invoke$arity$1(ctx);
var end_loc_QMARK_ = new cljs.core.Keyword(null,"end-location","end-location",-1199449467).cljs$core$IFn$_invoke$arity$1(ctx);
var iobj_QMARK__QMARK_ = edamame.impl.parser.iobj_QMARK_.call(null,obj);
var src = (cljs.core.truth_(log_QMARK_)?cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(buf),offset).trim():null);
var loc_QMARK_ = (function (){var and__4251__auto__ = ir_QMARK_;
if(and__4251__auto__){
var or__4253__auto__ = (function (){var and__4251__auto____$1 = iobj_QMARK__QMARK_;
if(and__4251__auto____$1){
var or__4253__auto__ = cljs.core.not.call(null,location_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return location_QMARK_.call(null,obj);
}
} else {
return and__4251__auto____$1;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return postprocess;
}
} else {
return and__4251__auto__;
}
})();
var end_loc = (cljs.core.truth_((function (){var and__4251__auto__ = ir_QMARK_;
if(and__4251__auto__){
var and__4251__auto____$1 = loc_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return end_loc_QMARK_;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?edamame.impl.parser.location.call(null,reader):null);
var row = (cljs.core.truth_(loc_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(loc):null);
var end_row = (cljs.core.truth_(end_loc_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end_loc):null);
var col = (cljs.core.truth_(loc_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(loc):null);
var end_col = (cljs.core.truth_(end_loc_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end_loc):null);
var postprocess_fn = (cljs.core.truth_(postprocess)?((function (ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__,ir_QMARK_){
return (function (p1__103810_SHARP_){
return postprocess.call(null,(function (){var G__103814 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),p1__103810_SHARP_], null);
var G__103814__$1 = (cljs.core.truth_(loc_QMARK_)?cljs.core.assoc.call(null,G__103814,new cljs.core.Keyword(null,"loc","loc",-584284901),(function (){var G__103815 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),row,new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),col]);
if(cljs.core.truth_(end_loc_QMARK_)){
return cljs.core.assoc.call(null,G__103815,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),end_row,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),end_col);
} else {
return G__103815;
}
})()):G__103814);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__103814__$1,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"source","source",-433931539);
}
})(),src);
} else {
return G__103814__$1;
}
})());
});})(ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__,ir_QMARK_))
:null);
var obj__$1 = (cljs.core.truth_(desugar)?(cljs.core.truth_(postprocess_fn)?edamame.impl.parser.desugar_meta.call(null,obj,postprocess_fn):edamame.impl.parser.desugar_meta.call(null,obj)):obj);
var obj__$2 = (cljs.core.truth_(postprocess)?postprocess_fn.call(null,obj__$1):(cljs.core.truth_(loc_QMARK_)?cljs.core.vary_meta.call(null,obj__$1,((function (ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,postprocess_fn,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__,ir_QMARK_){
return (function (p1__103811_SHARP_){
var G__103816 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__103811_SHARP_,new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),row),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),col);
var G__103816__$1 = (cljs.core.truth_(end_loc_QMARK_)?cljs.core.assoc.call(null,cljs.core.assoc.call(null,G__103816,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),end_row),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),end_col):G__103816);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__103816__$1,new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(ctx),src);
} else {
return G__103816__$1;
}
});})(ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,postprocess_fn,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__,ir_QMARK_))
):obj__$1
));
return obj__$2;
}
}
} else {
return edamame.impl.parser.eof;
}
break;
}
}));

(edamame.impl.parser.parse_next.cljs$lang$maxFixedArity = 3);

/**
 * Create reader for strings.
 */
edamame.impl.parser.string_reader = (function edamame$impl$parser$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
edamame.impl.parser.Options = (function (dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,__meta,__extmap,__hash){
this.dispatch = dispatch;
this.deref = deref;
this.syntax_quote = syntax_quote;
this.unquote = unquote;
this.unquote_splicing = unquote_splicing;
this.quote = quote;
this.fn = fn;
this.var$ = var$;
this.read_eval = read_eval;
this.regex = regex;
this.row_key = row_key;
this.col_key = col_key;
this.end_row_key = end_row_key;
this.end_col_key = end_col_key;
this.source = source;
this.source_key = source_key;
this.postprocess = postprocess;
this.location_QMARK_ = location_QMARK_;
this.end_location = end_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k103822,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__103826 = k103822;
var G__103826__$1 = (((G__103826 instanceof cljs.core.Keyword))?G__103826.fqn:null);
switch (G__103826__$1) {
case "dispatch":
return self__.dispatch;

break;
case "deref":
return self__.deref;

break;
case "syntax-quote":
return self__.syntax_quote;

break;
case "unquote":
return self__.unquote;

break;
case "unquote-splicing":
return self__.unquote_splicing;

break;
case "quote":
return self__.quote;

break;
case "fn":
return self__.fn;

break;
case "var":
return self__.var$;

break;
case "read-eval":
return self__.read_eval;

break;
case "regex":
return self__.regex;

break;
case "row-key":
return self__.row_key;

break;
case "col-key":
return self__.col_key;

break;
case "end-row-key":
return self__.end_row_key;

break;
case "end-col-key":
return self__.end_col_key;

break;
case "source":
return self__.source;

break;
case "source-key":
return self__.source_key;

break;
case "postprocess":
return self__.postprocess;

break;
case "location?":
return self__.location_QMARK_;

break;
case "end-location":
return self__.end_location;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k103822,else__4505__auto__);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4525__auto__,p__103827){
var vec__103828 = p__103827;
var k__4526__auto__ = cljs.core.nth.call(null,vec__103828,(0),null);
var v__4527__auto__ = cljs.core.nth.call(null,vec__103828,(1),null);
return f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__);
}),init__4524__auto__,this__4522__auto____$1);
}));

(edamame.impl.parser.Options.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4518__auto__,pr_pair__4520__auto__,"#edamame.impl.parser.Options{",", ","}",opts__4519__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-key","source-key",-1325875542),self__.source_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),self__.postprocess],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"location?","location?",425878086),self__.location_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-location","end-location",-1199449467),self__.end_location],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__103821){
var self__ = this;
var G__103821__$1 = this;
return (new cljs.core.RecordIter((0),G__103821__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),new cljs.core.Keyword(null,"location?","location?",425878086),new cljs.core.Keyword(null,"end-location","end-location",-1199449467)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (19 + cljs.core.count.call(null,self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1037796634 ^ cljs.core.hash_unordered_coll.call(null,coll__4499__auto__));
}).call(null,this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this103823,other103824){
var self__ = this;
var this103823__$1 = this;
return (((!((other103824 == null)))) && ((((this103823__$1.constructor === other103824.constructor)) && (((cljs.core._EQ_.call(null,this103823__$1.dispatch,other103824.dispatch)) && (((cljs.core._EQ_.call(null,this103823__$1.deref,other103824.deref)) && (((cljs.core._EQ_.call(null,this103823__$1.syntax_quote,other103824.syntax_quote)) && (((cljs.core._EQ_.call(null,this103823__$1.unquote,other103824.unquote)) && (((cljs.core._EQ_.call(null,this103823__$1.unquote_splicing,other103824.unquote_splicing)) && (((cljs.core._EQ_.call(null,this103823__$1.quote,other103824.quote)) && (((cljs.core._EQ_.call(null,this103823__$1.fn,other103824.fn)) && (((cljs.core._EQ_.call(null,this103823__$1.var,other103824.var)) && (((cljs.core._EQ_.call(null,this103823__$1.read_eval,other103824.read_eval)) && (((cljs.core._EQ_.call(null,this103823__$1.regex,other103824.regex)) && (((cljs.core._EQ_.call(null,this103823__$1.row_key,other103824.row_key)) && (((cljs.core._EQ_.call(null,this103823__$1.col_key,other103824.col_key)) && (((cljs.core._EQ_.call(null,this103823__$1.end_row_key,other103824.end_row_key)) && (((cljs.core._EQ_.call(null,this103823__$1.end_col_key,other103824.end_col_key)) && (((cljs.core._EQ_.call(null,this103823__$1.source,other103824.source)) && (((cljs.core._EQ_.call(null,this103823__$1.source_key,other103824.source_key)) && (((cljs.core._EQ_.call(null,this103823__$1.postprocess,other103824.postprocess)) && (((cljs.core._EQ_.call(null,this103823__$1.location_QMARK_,other103824.location_QMARK_)) && (((cljs.core._EQ_.call(null,this103823__$1.end_location,other103824.end_location)) && (cljs.core._EQ_.call(null,this103823__$1.__extmap,other103824.__extmap)))))))))))))))))))))))))))))))))))))))))));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),null,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),null,new cljs.core.Keyword(null,"location?","location?",425878086),null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),null,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"deref","deref",-145586795),null,new cljs.core.Keyword(null,"regex","regex",939488856),null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),null,new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4513__auto__)),null));
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k103822){
var self__ = this;
var this__4509__auto____$1 = this;
var G__103831 = k103822;
var G__103831__$1 = (((G__103831 instanceof cljs.core.Keyword))?G__103831.fqn:null);
switch (G__103831__$1) {
case "dispatch":
case "deref":
case "syntax-quote":
case "unquote":
case "unquote-splicing":
case "quote":
case "fn":
case "var":
case "read-eval":
case "regex":
case "row-key":
case "col-key":
case "end-row-key":
case "end-col-key":
case "source":
case "source-key":
case "postprocess":
case "location?":
case "end-location":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k103822);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__103821){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__103832 = cljs.core.keyword_identical_QMARK_;
var expr__103833 = k__4511__auto__;
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),expr__103833))){
return (new edamame.impl.parser.Options(G__103821,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"deref","deref",-145586795),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,G__103821,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,G__103821,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,G__103821,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,G__103821,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"quote","quote",-262615245),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,G__103821,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,G__103821,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,G__103821,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,G__103821,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,G__103821,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,G__103821,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,G__103821,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,G__103821,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,G__103821,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,G__103821,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,G__103821,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,G__103821,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"location?","location?",425878086),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,G__103821,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__103832.call(null,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),expr__103833))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,G__103821,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4511__auto__,G__103821),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var","var",-769682797),self__.var$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source-key","source-key",-1325875542),self__.source_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),self__.postprocess,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"location?","location?",425878086),self__.location_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-location","end-location",-1199449467),self__.end_location,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__103821){
var self__ = this;
var this__4501__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,G__103821,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4508__auto__,(0)),cljs.core._nth.call(null,entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(edamame.impl.parser.Options.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),new cljs.core.Symbol(null,"regex","regex",-1714946913,null),new cljs.core.Symbol(null,"row-key","row-key",451520815,null),new cljs.core.Symbol(null,"col-key","col-key",-369144239,null),new cljs.core.Symbol(null,"end-row-key","end-row-key",513868847,null),new cljs.core.Symbol(null,"end-col-key","end-col-key",1722344831,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-key","source-key",314655985,null),new cljs.core.Symbol(null,"postprocess","postprocess",-223231354,null),new cljs.core.Symbol(null,"location?","location?",2066409613,null),new cljs.core.Symbol(null,"end-location","end-location",441082060,null)], null);
}));

(edamame.impl.parser.Options.cljs$lang$type = true);

(edamame.impl.parser.Options.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Options",null,(1),null));
}));

(edamame.impl.parser.Options.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write.call(null,writer__4547__auto__,"edamame.impl.parser/Options");
}));

/**
 * Positional factory function for edamame.impl.parser/Options.
 */
edamame.impl.parser.__GT_Options = (function edamame$impl$parser$__GT_Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location){
return (new edamame.impl.parser.Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Options, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Options = (function edamame$impl$parser$map__GT_Options(G__103825){
var extmap__4542__auto__ = (function (){var G__103835 = cljs.core.dissoc.call(null,G__103825,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),new cljs.core.Keyword(null,"location?","location?",425878086),new cljs.core.Keyword(null,"end-location","end-location",-1199449467));
if(cljs.core.record_QMARK_.call(null,G__103825)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__103835);
} else {
return G__103835;
}
})();
return (new edamame.impl.parser.Options(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"location?","location?",425878086).cljs$core$IFn$_invoke$arity$1(G__103825),new cljs.core.Keyword(null,"end-location","end-location",-1199449467).cljs$core$IFn$_invoke$arity$1(G__103825),null,cljs.core.not_empty.call(null,extmap__4542__auto__),null));
});

edamame.impl.parser.normalize_opts = (function edamame$impl$parser$normalize_opts(opts){
var opts__$1 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var dispatch = temp__5718__auto__;
return cljs.core.into.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deref","deref",-145586795),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
if(cljs.core.fn_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v], null);
} else {
var temp__5720__auto____$1 = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5720__auto____$1)){
var v__$1 = temp__5720__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v__$1], null);
} else {
return null;
}
}
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","@"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quote","quote",-262615245),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","("], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","'"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","="], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","\""], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regex","regex",939488856),v], null);
} else {
return null;
}
})()], null));
} else {
return opts;
}
})();
var opts__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"deref","deref",-145586795),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),true,new cljs.core.Keyword(null,"quote","quote",-262615245),true,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),true,new cljs.core.Keyword(null,"regex","regex",939488856),true,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),true,new cljs.core.Keyword(null,"var","var",-769682797),true], null),opts__$1):opts__$1);
var opts__$3 = (function (){var G__103838 = opts__$2;
var G__103838__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,G__103838,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"row","row",-570139521)):G__103838);
var G__103838__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,G__103838__$1,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"col","col",-1959363084)):G__103838__$1);
var G__103838__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,G__103838__$2,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-row","end-row",-545103581)):G__103838__$2);
var G__103838__$4 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,G__103838__$3,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"end-col","end-col",-724155879)):G__103838__$3);
var G__103838__$5 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,G__103838__$4,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"source","source",-433931539)):G__103838__$4);
if((!(cljs.core.contains_QMARK_.call(null,opts__$2,new cljs.core.Keyword(null,"end-location","end-location",-1199449467))))){
return cljs.core.assoc.call(null,G__103838__$5,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),true);
} else {
return G__103838__$5;
}
})();
return edamame.impl.parser.map__GT_Options.call(null,opts__$3);
});
edamame.impl.parser.parse_string = (function edamame$impl$parser$parse_string(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts.call(null,opts);
var src_QMARK_ = opts__$1.source;
var r = (cljs.core.truth_(src_QMARK_)?cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null,s):edamame.impl.parser.string_reader.call(null,s));
var ctx = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var v = edamame.impl.parser.parse_next.call(null,ctx,r);
if((edamame.impl.parser.eof === v)){
return null;
} else {
return v;
}
});
edamame.impl.parser.parse_string_all = (function edamame$impl$parser$parse_string_all(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts.call(null,opts);
var r = edamame.impl.parser.string_reader.call(null,s);
var ctx = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = edamame.impl.parser.parse_next.call(null,ctx,r);
if((edamame.impl.parser.eof === next_val)){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
var G__103839 = cljs.core.conj_BANG_.call(null,ret,next_val);
ret = G__103839;
continue;
}
break;
}
});
edamame.impl.parser.reader = (function edamame$impl$parser$reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader.call(null,x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.call(null,buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,pushback_reader);
});
edamame.impl.parser.get_line_number = (function edamame$impl$parser$get_line_number(reader){
return cljs.tools.reader.reader_types.get_line_number.call(null,reader);
});
edamame.impl.parser.get_column_number = (function edamame$impl$parser$get_column_number(reader){
return cljs.tools.reader.reader_types.get_column_number.call(null,reader);
});
edamame.impl.parser.source_logging_reader = (function edamame$impl$parser$source_logging_reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader.call(null,x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.call(null,buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.source_logging_push_back_reader.call(null,pushback_reader);
});

//# sourceMappingURL=parser.js.map
