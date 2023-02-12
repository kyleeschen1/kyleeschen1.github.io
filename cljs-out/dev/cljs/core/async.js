// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17981 = arguments.length;
switch (G__17981) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17982 = (function (f,blockable,meta17983){
this.f = f;
this.blockable = blockable;
this.meta17983 = meta17983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17984,meta17983__$1){
var self__ = this;
var _17984__$1 = this;
return (new cljs.core.async.t_cljs$core$async17982(self__.f,self__.blockable,meta17983__$1));
}));

(cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17984){
var self__ = this;
var _17984__$1 = this;
return self__.meta17983;
}));

(cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17983","meta17983",-1310724248,null)], null);
}));

(cljs.core.async.t_cljs$core$async17982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17982");

(cljs.core.async.t_cljs$core$async17982.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async17982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17982.
 */
cljs.core.async.__GT_t_cljs$core$async17982 = (function cljs$core$async$__GT_t_cljs$core$async17982(f__$1,blockable__$1,meta17983){
return (new cljs.core.async.t_cljs$core$async17982(f__$1,blockable__$1,meta17983));
});

}

return (new cljs.core.async.t_cljs$core$async17982(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17988 = arguments.length;
switch (G__17988) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17991 = arguments.length;
switch (G__17991) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17994 = arguments.length;
switch (G__17994) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17996 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17996);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17996);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17998 = arguments.length;
switch (G__17998) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___18000 = n;
var x_18001 = (0);
while(true){
if((x_18001 < n__4741__auto___18000)){
(a[x_18001] = x_18001);

var G__18002 = (x_18001 + (1));
x_18001 = G__18002;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18003 = (function (flag,meta18004){
this.flag = flag;
this.meta18004 = meta18004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18005,meta18004__$1){
var self__ = this;
var _18005__$1 = this;
return (new cljs.core.async.t_cljs$core$async18003(self__.flag,meta18004__$1));
}));

(cljs.core.async.t_cljs$core$async18003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18005){
var self__ = this;
var _18005__$1 = this;
return self__.meta18004;
}));

(cljs.core.async.t_cljs$core$async18003.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18004","meta18004",1761261109,null)], null);
}));

(cljs.core.async.t_cljs$core$async18003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18003");

(cljs.core.async.t_cljs$core$async18003.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async18003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18003.
 */
cljs.core.async.__GT_t_cljs$core$async18003 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18003(flag__$1,meta18004){
return (new cljs.core.async.t_cljs$core$async18003(flag__$1,meta18004));
});

}

return (new cljs.core.async.t_cljs$core$async18003(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18006 = (function (flag,cb,meta18007){
this.flag = flag;
this.cb = cb;
this.meta18007 = meta18007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18008,meta18007__$1){
var self__ = this;
var _18008__$1 = this;
return (new cljs.core.async.t_cljs$core$async18006(self__.flag,self__.cb,meta18007__$1));
}));

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18008){
var self__ = this;
var _18008__$1 = this;
return self__.meta18007;
}));

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18007","meta18007",-1155007547,null)], null);
}));

(cljs.core.async.t_cljs$core$async18006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18006");

(cljs.core.async.t_cljs$core$async18006.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async18006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18006.
 */
cljs.core.async.__GT_t_cljs$core$async18006 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18006(flag__$1,cb__$1,meta18007){
return (new cljs.core.async.t_cljs$core$async18006(flag__$1,cb__$1,meta18007));
});

}

return (new cljs.core.async.t_cljs$core$async18006(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__18009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18009_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__18010_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18010_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18011 = (i + (1));
i = G__18011;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___18016 = arguments.length;
var i__4865__auto___18017 = (0);
while(true){
if((i__4865__auto___18017 < len__4864__auto___18016)){
args__4870__auto__.push((arguments[i__4865__auto___18017]));

var G__18018 = (i__4865__auto___18017 + (1));
i__4865__auto___18017 = G__18018;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18014){
var map__18015 = p__18014;
var map__18015__$1 = cljs.core.__destructure_map.call(null,map__18015);
var opts = map__18015__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18012){
var G__18013 = cljs.core.first.call(null,seq18012);
var seq18012__$1 = cljs.core.next.call(null,seq18012);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18013,seq18012__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18020 = arguments.length;
switch (G__18020) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17921__auto___18067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18044){
var state_val_18045 = (state_18044[(1)]);
if((state_val_18045 === (7))){
var inst_18040 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
var statearr_18046_18068 = state_18044__$1;
(statearr_18046_18068[(2)] = inst_18040);

(statearr_18046_18068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (1))){
var state_18044__$1 = state_18044;
var statearr_18047_18069 = state_18044__$1;
(statearr_18047_18069[(2)] = null);

(statearr_18047_18069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (4))){
var inst_18023 = (state_18044[(7)]);
var inst_18023__$1 = (state_18044[(2)]);
var inst_18024 = (inst_18023__$1 == null);
var state_18044__$1 = (function (){var statearr_18048 = state_18044;
(statearr_18048[(7)] = inst_18023__$1);

return statearr_18048;
})();
if(cljs.core.truth_(inst_18024)){
var statearr_18049_18070 = state_18044__$1;
(statearr_18049_18070[(1)] = (5));

} else {
var statearr_18050_18071 = state_18044__$1;
(statearr_18050_18071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (13))){
var state_18044__$1 = state_18044;
var statearr_18051_18072 = state_18044__$1;
(statearr_18051_18072[(2)] = null);

(statearr_18051_18072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (6))){
var inst_18023 = (state_18044[(7)]);
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18044__$1,(11),to,inst_18023);
} else {
if((state_val_18045 === (3))){
var inst_18042 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18044__$1,inst_18042);
} else {
if((state_val_18045 === (12))){
var state_18044__$1 = state_18044;
var statearr_18052_18073 = state_18044__$1;
(statearr_18052_18073[(2)] = null);

(statearr_18052_18073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (2))){
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18044__$1,(4),from);
} else {
if((state_val_18045 === (11))){
var inst_18033 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
if(cljs.core.truth_(inst_18033)){
var statearr_18053_18074 = state_18044__$1;
(statearr_18053_18074[(1)] = (12));

} else {
var statearr_18054_18075 = state_18044__$1;
(statearr_18054_18075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (9))){
var state_18044__$1 = state_18044;
var statearr_18055_18076 = state_18044__$1;
(statearr_18055_18076[(2)] = null);

(statearr_18055_18076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (5))){
var state_18044__$1 = state_18044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18056_18077 = state_18044__$1;
(statearr_18056_18077[(1)] = (8));

} else {
var statearr_18057_18078 = state_18044__$1;
(statearr_18057_18078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (14))){
var inst_18038 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
var statearr_18058_18079 = state_18044__$1;
(statearr_18058_18079[(2)] = inst_18038);

(statearr_18058_18079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (10))){
var inst_18030 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
var statearr_18059_18080 = state_18044__$1;
(statearr_18059_18080[(2)] = inst_18030);

(statearr_18059_18080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (8))){
var inst_18027 = cljs.core.async.close_BANG_.call(null,to);
var state_18044__$1 = state_18044;
var statearr_18060_18081 = state_18044__$1;
(statearr_18060_18081[(2)] = inst_18027);

(statearr_18060_18081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_18061 = [null,null,null,null,null,null,null,null];
(statearr_18061[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_18061[(1)] = (1));

return statearr_18061;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_18044){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18062){var ex__17851__auto__ = e18062;
var statearr_18063_18082 = state_18044;
(statearr_18063_18082[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18044[(4)]))){
var statearr_18064_18083 = state_18044;
(statearr_18064_18083[(1)] = cljs.core.first.call(null,(state_18044[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18084 = state_18044;
state_18044 = G__18084;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_18044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_18044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18065 = f__17922__auto__.call(null);
(statearr_18065[(6)] = c__17921__auto___18067);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__18085){
var vec__18086 = p__18085;
var v = cljs.core.nth.call(null,vec__18086,(0),null);
var p = cljs.core.nth.call(null,vec__18086,(1),null);
var job = vec__18086;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17921__auto___18262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18093){
var state_val_18094 = (state_18093[(1)]);
if((state_val_18094 === (1))){
var state_18093__$1 = state_18093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18093__$1,(2),res,v);
} else {
if((state_val_18094 === (2))){
var inst_18090 = (state_18093[(2)]);
var inst_18091 = cljs.core.async.close_BANG_.call(null,res);
var state_18093__$1 = (function (){var statearr_18095 = state_18093;
(statearr_18095[(7)] = inst_18090);

return statearr_18095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18093__$1,inst_18091);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0 = (function (){
var statearr_18096 = [null,null,null,null,null,null,null,null];
(statearr_18096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__);

(statearr_18096[(1)] = (1));

return statearr_18096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1 = (function (state_18093){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18097){var ex__17851__auto__ = e18097;
var statearr_18098_18263 = state_18093;
(statearr_18098_18263[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18093[(4)]))){
var statearr_18099_18264 = state_18093;
(statearr_18099_18264[(1)] = cljs.core.first.call(null,(state_18093[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18265 = state_18093;
state_18093 = G__18265;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = function(state_18093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1.call(this,state_18093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18100 = f__17922__auto__.call(null);
(statearr_18100[(6)] = c__17921__auto___18262);

return statearr_18100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__18101){
var vec__18102 = p__18101;
var v = cljs.core.nth.call(null,vec__18102,(0),null);
var p = cljs.core.nth.call(null,vec__18102,(1),null);
var job = vec__18102;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4741__auto___18266 = n;
var __18267 = (0);
while(true){
if((__18267 < n__4741__auto___18266)){
var G__18105_18268 = type;
var G__18105_18269__$1 = (((G__18105_18268 instanceof cljs.core.Keyword))?G__18105_18268.fqn:null);
switch (G__18105_18269__$1) {
case "compute":
var c__17921__auto___18271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18267,c__17921__auto___18271,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async){
return (function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = ((function (__18267,c__17921__auto___18271,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async){
return (function (state_18118){
var state_val_18119 = (state_18118[(1)]);
if((state_val_18119 === (1))){
var state_18118__$1 = state_18118;
var statearr_18120_18272 = state_18118__$1;
(statearr_18120_18272[(2)] = null);

(statearr_18120_18272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18119 === (2))){
var state_18118__$1 = state_18118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18118__$1,(4),jobs);
} else {
if((state_val_18119 === (3))){
var inst_18116 = (state_18118[(2)]);
var state_18118__$1 = state_18118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18118__$1,inst_18116);
} else {
if((state_val_18119 === (4))){
var inst_18108 = (state_18118[(2)]);
var inst_18109 = process.call(null,inst_18108);
var state_18118__$1 = state_18118;
if(cljs.core.truth_(inst_18109)){
var statearr_18121_18273 = state_18118__$1;
(statearr_18121_18273[(1)] = (5));

} else {
var statearr_18122_18274 = state_18118__$1;
(statearr_18122_18274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18119 === (5))){
var state_18118__$1 = state_18118;
var statearr_18123_18275 = state_18118__$1;
(statearr_18123_18275[(2)] = null);

(statearr_18123_18275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18119 === (6))){
var state_18118__$1 = state_18118;
var statearr_18124_18276 = state_18118__$1;
(statearr_18124_18276[(2)] = null);

(statearr_18124_18276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18119 === (7))){
var inst_18114 = (state_18118[(2)]);
var state_18118__$1 = state_18118;
var statearr_18125_18277 = state_18118__$1;
(statearr_18125_18277[(2)] = inst_18114);

(statearr_18125_18277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18267,c__17921__auto___18271,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async))
;
return ((function (__18267,switch__17847__auto__,c__17921__auto___18271,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0 = (function (){
var statearr_18126 = [null,null,null,null,null,null,null];
(statearr_18126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__);

(statearr_18126[(1)] = (1));

return statearr_18126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1 = (function (state_18118){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18127){var ex__17851__auto__ = e18127;
var statearr_18128_18278 = state_18118;
(statearr_18128_18278[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18118[(4)]))){
var statearr_18129_18279 = state_18118;
(statearr_18129_18279[(1)] = cljs.core.first.call(null,(state_18118[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18280 = state_18118;
state_18118 = G__18280;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = function(state_18118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1.call(this,state_18118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__;
})()
;})(__18267,switch__17847__auto__,c__17921__auto___18271,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async))
})();
var state__17923__auto__ = (function (){var statearr_18130 = f__17922__auto__.call(null);
(statearr_18130[(6)] = c__17921__auto___18271);

return statearr_18130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
});})(__18267,c__17921__auto___18271,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async))
);


break;
case "async":
var c__17921__auto___18281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18267,c__17921__auto___18281,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async){
return (function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = ((function (__18267,c__17921__auto___18281,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async){
return (function (state_18143){
var state_val_18144 = (state_18143[(1)]);
if((state_val_18144 === (1))){
var state_18143__$1 = state_18143;
var statearr_18145_18282 = state_18143__$1;
(statearr_18145_18282[(2)] = null);

(statearr_18145_18282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18144 === (2))){
var state_18143__$1 = state_18143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18143__$1,(4),jobs);
} else {
if((state_val_18144 === (3))){
var inst_18141 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18143__$1,inst_18141);
} else {
if((state_val_18144 === (4))){
var inst_18133 = (state_18143[(2)]);
var inst_18134 = async.call(null,inst_18133);
var state_18143__$1 = state_18143;
if(cljs.core.truth_(inst_18134)){
var statearr_18146_18283 = state_18143__$1;
(statearr_18146_18283[(1)] = (5));

} else {
var statearr_18147_18284 = state_18143__$1;
(statearr_18147_18284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18144 === (5))){
var state_18143__$1 = state_18143;
var statearr_18148_18285 = state_18143__$1;
(statearr_18148_18285[(2)] = null);

(statearr_18148_18285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18144 === (6))){
var state_18143__$1 = state_18143;
var statearr_18149_18286 = state_18143__$1;
(statearr_18149_18286[(2)] = null);

(statearr_18149_18286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18144 === (7))){
var inst_18139 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18150_18287 = state_18143__$1;
(statearr_18150_18287[(2)] = inst_18139);

(statearr_18150_18287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18267,c__17921__auto___18281,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async))
;
return ((function (__18267,switch__17847__auto__,c__17921__auto___18281,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0 = (function (){
var statearr_18151 = [null,null,null,null,null,null,null];
(statearr_18151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__);

(statearr_18151[(1)] = (1));

return statearr_18151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1 = (function (state_18143){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18152){var ex__17851__auto__ = e18152;
var statearr_18153_18288 = state_18143;
(statearr_18153_18288[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18143[(4)]))){
var statearr_18154_18289 = state_18143;
(statearr_18154_18289[(1)] = cljs.core.first.call(null,(state_18143[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18290 = state_18143;
state_18143 = G__18290;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = function(state_18143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1.call(this,state_18143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__;
})()
;})(__18267,switch__17847__auto__,c__17921__auto___18281,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async))
})();
var state__17923__auto__ = (function (){var statearr_18155 = f__17922__auto__.call(null);
(statearr_18155[(6)] = c__17921__auto___18281);

return statearr_18155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
});})(__18267,c__17921__auto___18281,G__18105_18268,G__18105_18269__$1,n__4741__auto___18266,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18105_18269__$1)].join('')));

}

var G__18291 = (__18267 + (1));
__18267 = G__18291;
continue;
} else {
}
break;
}

var c__17921__auto___18292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18177){
var state_val_18178 = (state_18177[(1)]);
if((state_val_18178 === (7))){
var inst_18173 = (state_18177[(2)]);
var state_18177__$1 = state_18177;
var statearr_18179_18293 = state_18177__$1;
(statearr_18179_18293[(2)] = inst_18173);

(statearr_18179_18293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18178 === (1))){
var state_18177__$1 = state_18177;
var statearr_18180_18294 = state_18177__$1;
(statearr_18180_18294[(2)] = null);

(statearr_18180_18294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18178 === (4))){
var inst_18158 = (state_18177[(7)]);
var inst_18158__$1 = (state_18177[(2)]);
var inst_18159 = (inst_18158__$1 == null);
var state_18177__$1 = (function (){var statearr_18181 = state_18177;
(statearr_18181[(7)] = inst_18158__$1);

return statearr_18181;
})();
if(cljs.core.truth_(inst_18159)){
var statearr_18182_18295 = state_18177__$1;
(statearr_18182_18295[(1)] = (5));

} else {
var statearr_18183_18296 = state_18177__$1;
(statearr_18183_18296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18178 === (6))){
var inst_18158 = (state_18177[(7)]);
var inst_18163 = (state_18177[(8)]);
var inst_18163__$1 = cljs.core.async.chan.call(null,(1));
var inst_18164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18165 = [inst_18158,inst_18163__$1];
var inst_18166 = (new cljs.core.PersistentVector(null,2,(5),inst_18164,inst_18165,null));
var state_18177__$1 = (function (){var statearr_18184 = state_18177;
(statearr_18184[(8)] = inst_18163__$1);

return statearr_18184;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18177__$1,(8),jobs,inst_18166);
} else {
if((state_val_18178 === (3))){
var inst_18175 = (state_18177[(2)]);
var state_18177__$1 = state_18177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18177__$1,inst_18175);
} else {
if((state_val_18178 === (2))){
var state_18177__$1 = state_18177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18177__$1,(4),from);
} else {
if((state_val_18178 === (9))){
var inst_18170 = (state_18177[(2)]);
var state_18177__$1 = (function (){var statearr_18185 = state_18177;
(statearr_18185[(9)] = inst_18170);

return statearr_18185;
})();
var statearr_18186_18297 = state_18177__$1;
(statearr_18186_18297[(2)] = null);

(statearr_18186_18297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18178 === (5))){
var inst_18161 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18177__$1 = state_18177;
var statearr_18187_18298 = state_18177__$1;
(statearr_18187_18298[(2)] = inst_18161);

(statearr_18187_18298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18178 === (8))){
var inst_18163 = (state_18177[(8)]);
var inst_18168 = (state_18177[(2)]);
var state_18177__$1 = (function (){var statearr_18188 = state_18177;
(statearr_18188[(10)] = inst_18168);

return statearr_18188;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18177__$1,(9),results,inst_18163);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0 = (function (){
var statearr_18189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__);

(statearr_18189[(1)] = (1));

return statearr_18189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1 = (function (state_18177){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18190){var ex__17851__auto__ = e18190;
var statearr_18191_18299 = state_18177;
(statearr_18191_18299[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18177[(4)]))){
var statearr_18192_18300 = state_18177;
(statearr_18192_18300[(1)] = cljs.core.first.call(null,(state_18177[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18301 = state_18177;
state_18177 = G__18301;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = function(state_18177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1.call(this,state_18177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18193 = f__17922__auto__.call(null);
(statearr_18193[(6)] = c__17921__auto___18292);

return statearr_18193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


var c__17921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18231){
var state_val_18232 = (state_18231[(1)]);
if((state_val_18232 === (7))){
var inst_18227 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18233_18302 = state_18231__$1;
(statearr_18233_18302[(2)] = inst_18227);

(statearr_18233_18302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (20))){
var state_18231__$1 = state_18231;
var statearr_18234_18303 = state_18231__$1;
(statearr_18234_18303[(2)] = null);

(statearr_18234_18303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (1))){
var state_18231__$1 = state_18231;
var statearr_18235_18304 = state_18231__$1;
(statearr_18235_18304[(2)] = null);

(statearr_18235_18304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (4))){
var inst_18196 = (state_18231[(7)]);
var inst_18196__$1 = (state_18231[(2)]);
var inst_18197 = (inst_18196__$1 == null);
var state_18231__$1 = (function (){var statearr_18236 = state_18231;
(statearr_18236[(7)] = inst_18196__$1);

return statearr_18236;
})();
if(cljs.core.truth_(inst_18197)){
var statearr_18237_18305 = state_18231__$1;
(statearr_18237_18305[(1)] = (5));

} else {
var statearr_18238_18306 = state_18231__$1;
(statearr_18238_18306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (15))){
var inst_18209 = (state_18231[(8)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18231__$1,(18),to,inst_18209);
} else {
if((state_val_18232 === (21))){
var inst_18222 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18239_18307 = state_18231__$1;
(statearr_18239_18307[(2)] = inst_18222);

(statearr_18239_18307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (13))){
var inst_18224 = (state_18231[(2)]);
var state_18231__$1 = (function (){var statearr_18240 = state_18231;
(statearr_18240[(9)] = inst_18224);

return statearr_18240;
})();
var statearr_18241_18308 = state_18231__$1;
(statearr_18241_18308[(2)] = null);

(statearr_18241_18308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (6))){
var inst_18196 = (state_18231[(7)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18231__$1,(11),inst_18196);
} else {
if((state_val_18232 === (17))){
var inst_18217 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
if(cljs.core.truth_(inst_18217)){
var statearr_18242_18309 = state_18231__$1;
(statearr_18242_18309[(1)] = (19));

} else {
var statearr_18243_18310 = state_18231__$1;
(statearr_18243_18310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (3))){
var inst_18229 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18231__$1,inst_18229);
} else {
if((state_val_18232 === (12))){
var inst_18206 = (state_18231[(10)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18231__$1,(14),inst_18206);
} else {
if((state_val_18232 === (2))){
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18231__$1,(4),results);
} else {
if((state_val_18232 === (19))){
var state_18231__$1 = state_18231;
var statearr_18244_18311 = state_18231__$1;
(statearr_18244_18311[(2)] = null);

(statearr_18244_18311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (11))){
var inst_18206 = (state_18231[(2)]);
var state_18231__$1 = (function (){var statearr_18245 = state_18231;
(statearr_18245[(10)] = inst_18206);

return statearr_18245;
})();
var statearr_18246_18312 = state_18231__$1;
(statearr_18246_18312[(2)] = null);

(statearr_18246_18312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (9))){
var state_18231__$1 = state_18231;
var statearr_18247_18313 = state_18231__$1;
(statearr_18247_18313[(2)] = null);

(statearr_18247_18313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (5))){
var state_18231__$1 = state_18231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18248_18314 = state_18231__$1;
(statearr_18248_18314[(1)] = (8));

} else {
var statearr_18249_18315 = state_18231__$1;
(statearr_18249_18315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (14))){
var inst_18209 = (state_18231[(8)]);
var inst_18211 = (state_18231[(11)]);
var inst_18209__$1 = (state_18231[(2)]);
var inst_18210 = (inst_18209__$1 == null);
var inst_18211__$1 = cljs.core.not.call(null,inst_18210);
var state_18231__$1 = (function (){var statearr_18250 = state_18231;
(statearr_18250[(8)] = inst_18209__$1);

(statearr_18250[(11)] = inst_18211__$1);

return statearr_18250;
})();
if(inst_18211__$1){
var statearr_18251_18316 = state_18231__$1;
(statearr_18251_18316[(1)] = (15));

} else {
var statearr_18252_18317 = state_18231__$1;
(statearr_18252_18317[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (16))){
var inst_18211 = (state_18231[(11)]);
var state_18231__$1 = state_18231;
var statearr_18253_18318 = state_18231__$1;
(statearr_18253_18318[(2)] = inst_18211);

(statearr_18253_18318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (10))){
var inst_18203 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18254_18319 = state_18231__$1;
(statearr_18254_18319[(2)] = inst_18203);

(statearr_18254_18319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (18))){
var inst_18214 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18255_18320 = state_18231__$1;
(statearr_18255_18320[(2)] = inst_18214);

(statearr_18255_18320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (8))){
var inst_18200 = cljs.core.async.close_BANG_.call(null,to);
var state_18231__$1 = state_18231;
var statearr_18256_18321 = state_18231__$1;
(statearr_18256_18321[(2)] = inst_18200);

(statearr_18256_18321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0 = (function (){
var statearr_18257 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__);

(statearr_18257[(1)] = (1));

return statearr_18257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1 = (function (state_18231){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18258){var ex__17851__auto__ = e18258;
var statearr_18259_18322 = state_18231;
(statearr_18259_18322[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18231[(4)]))){
var statearr_18260_18323 = state_18231;
(statearr_18260_18323[(1)] = cljs.core.first.call(null,(state_18231[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18324 = state_18231;
state_18231 = G__18324;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__ = function(state_18231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1.call(this,state_18231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18261 = f__17922__auto__.call(null);
(statearr_18261[(6)] = c__17921__auto__);

return statearr_18261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));

return c__17921__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18326 = arguments.length;
switch (G__18326) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18329 = arguments.length;
switch (G__18329) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18332 = arguments.length;
switch (G__18332) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17921__auto___18382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18358){
var state_val_18359 = (state_18358[(1)]);
if((state_val_18359 === (7))){
var inst_18354 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
var statearr_18360_18383 = state_18358__$1;
(statearr_18360_18383[(2)] = inst_18354);

(statearr_18360_18383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (1))){
var state_18358__$1 = state_18358;
var statearr_18361_18384 = state_18358__$1;
(statearr_18361_18384[(2)] = null);

(statearr_18361_18384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (4))){
var inst_18335 = (state_18358[(7)]);
var inst_18335__$1 = (state_18358[(2)]);
var inst_18336 = (inst_18335__$1 == null);
var state_18358__$1 = (function (){var statearr_18362 = state_18358;
(statearr_18362[(7)] = inst_18335__$1);

return statearr_18362;
})();
if(cljs.core.truth_(inst_18336)){
var statearr_18363_18385 = state_18358__$1;
(statearr_18363_18385[(1)] = (5));

} else {
var statearr_18364_18386 = state_18358__$1;
(statearr_18364_18386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (13))){
var state_18358__$1 = state_18358;
var statearr_18365_18387 = state_18358__$1;
(statearr_18365_18387[(2)] = null);

(statearr_18365_18387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (6))){
var inst_18335 = (state_18358[(7)]);
var inst_18341 = p.call(null,inst_18335);
var state_18358__$1 = state_18358;
if(cljs.core.truth_(inst_18341)){
var statearr_18366_18388 = state_18358__$1;
(statearr_18366_18388[(1)] = (9));

} else {
var statearr_18367_18389 = state_18358__$1;
(statearr_18367_18389[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (3))){
var inst_18356 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18358__$1,inst_18356);
} else {
if((state_val_18359 === (12))){
var state_18358__$1 = state_18358;
var statearr_18368_18390 = state_18358__$1;
(statearr_18368_18390[(2)] = null);

(statearr_18368_18390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (2))){
var state_18358__$1 = state_18358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18358__$1,(4),ch);
} else {
if((state_val_18359 === (11))){
var inst_18335 = (state_18358[(7)]);
var inst_18345 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18358__$1,(8),inst_18345,inst_18335);
} else {
if((state_val_18359 === (9))){
var state_18358__$1 = state_18358;
var statearr_18369_18391 = state_18358__$1;
(statearr_18369_18391[(2)] = tc);

(statearr_18369_18391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (5))){
var inst_18338 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18339 = cljs.core.async.close_BANG_.call(null,fc);
var state_18358__$1 = (function (){var statearr_18370 = state_18358;
(statearr_18370[(8)] = inst_18338);

return statearr_18370;
})();
var statearr_18371_18392 = state_18358__$1;
(statearr_18371_18392[(2)] = inst_18339);

(statearr_18371_18392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (14))){
var inst_18352 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
var statearr_18372_18393 = state_18358__$1;
(statearr_18372_18393[(2)] = inst_18352);

(statearr_18372_18393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (10))){
var state_18358__$1 = state_18358;
var statearr_18373_18394 = state_18358__$1;
(statearr_18373_18394[(2)] = fc);

(statearr_18373_18394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18359 === (8))){
var inst_18347 = (state_18358[(2)]);
var state_18358__$1 = state_18358;
if(cljs.core.truth_(inst_18347)){
var statearr_18374_18395 = state_18358__$1;
(statearr_18374_18395[(1)] = (12));

} else {
var statearr_18375_18396 = state_18358__$1;
(statearr_18375_18396[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_18376 = [null,null,null,null,null,null,null,null,null];
(statearr_18376[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_18376[(1)] = (1));

return statearr_18376;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_18358){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18377){var ex__17851__auto__ = e18377;
var statearr_18378_18397 = state_18358;
(statearr_18378_18397[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18358[(4)]))){
var statearr_18379_18398 = state_18358;
(statearr_18379_18398[(1)] = cljs.core.first.call(null,(state_18358[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18399 = state_18358;
state_18358 = G__18399;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_18358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_18358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18380 = f__17922__auto__.call(null);
(statearr_18380[(6)] = c__17921__auto___18382);

return statearr_18380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18421){
var state_val_18422 = (state_18421[(1)]);
if((state_val_18422 === (7))){
var inst_18417 = (state_18421[(2)]);
var state_18421__$1 = state_18421;
var statearr_18423_18442 = state_18421__$1;
(statearr_18423_18442[(2)] = inst_18417);

(statearr_18423_18442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (1))){
var inst_18400 = init;
var inst_18401 = inst_18400;
var state_18421__$1 = (function (){var statearr_18424 = state_18421;
(statearr_18424[(7)] = inst_18401);

return statearr_18424;
})();
var statearr_18425_18443 = state_18421__$1;
(statearr_18425_18443[(2)] = null);

(statearr_18425_18443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (4))){
var inst_18404 = (state_18421[(8)]);
var inst_18404__$1 = (state_18421[(2)]);
var inst_18405 = (inst_18404__$1 == null);
var state_18421__$1 = (function (){var statearr_18426 = state_18421;
(statearr_18426[(8)] = inst_18404__$1);

return statearr_18426;
})();
if(cljs.core.truth_(inst_18405)){
var statearr_18427_18444 = state_18421__$1;
(statearr_18427_18444[(1)] = (5));

} else {
var statearr_18428_18445 = state_18421__$1;
(statearr_18428_18445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (6))){
var inst_18401 = (state_18421[(7)]);
var inst_18404 = (state_18421[(8)]);
var inst_18408 = (state_18421[(9)]);
var inst_18408__$1 = f.call(null,inst_18401,inst_18404);
var inst_18409 = cljs.core.reduced_QMARK_.call(null,inst_18408__$1);
var state_18421__$1 = (function (){var statearr_18429 = state_18421;
(statearr_18429[(9)] = inst_18408__$1);

return statearr_18429;
})();
if(inst_18409){
var statearr_18430_18446 = state_18421__$1;
(statearr_18430_18446[(1)] = (8));

} else {
var statearr_18431_18447 = state_18421__$1;
(statearr_18431_18447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (3))){
var inst_18419 = (state_18421[(2)]);
var state_18421__$1 = state_18421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18421__$1,inst_18419);
} else {
if((state_val_18422 === (2))){
var state_18421__$1 = state_18421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18421__$1,(4),ch);
} else {
if((state_val_18422 === (9))){
var inst_18408 = (state_18421[(9)]);
var inst_18401 = inst_18408;
var state_18421__$1 = (function (){var statearr_18432 = state_18421;
(statearr_18432[(7)] = inst_18401);

return statearr_18432;
})();
var statearr_18433_18448 = state_18421__$1;
(statearr_18433_18448[(2)] = null);

(statearr_18433_18448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (5))){
var inst_18401 = (state_18421[(7)]);
var state_18421__$1 = state_18421;
var statearr_18434_18449 = state_18421__$1;
(statearr_18434_18449[(2)] = inst_18401);

(statearr_18434_18449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (10))){
var inst_18415 = (state_18421[(2)]);
var state_18421__$1 = state_18421;
var statearr_18435_18450 = state_18421__$1;
(statearr_18435_18450[(2)] = inst_18415);

(statearr_18435_18450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (8))){
var inst_18408 = (state_18421[(9)]);
var inst_18411 = cljs.core.deref.call(null,inst_18408);
var state_18421__$1 = state_18421;
var statearr_18436_18451 = state_18421__$1;
(statearr_18436_18451[(2)] = inst_18411);

(statearr_18436_18451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$reduce_$_state_machine__17848__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17848__auto____0 = (function (){
var statearr_18437 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18437[(0)] = cljs$core$async$reduce_$_state_machine__17848__auto__);

(statearr_18437[(1)] = (1));

return statearr_18437;
});
var cljs$core$async$reduce_$_state_machine__17848__auto____1 = (function (state_18421){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18438){var ex__17851__auto__ = e18438;
var statearr_18439_18452 = state_18421;
(statearr_18439_18452[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18421[(4)]))){
var statearr_18440_18453 = state_18421;
(statearr_18440_18453[(1)] = cljs.core.first.call(null,(state_18421[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18454 = state_18421;
state_18421 = G__18454;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17848__auto__ = function(state_18421){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17848__auto____1.call(this,state_18421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17848__auto____0;
cljs$core$async$reduce_$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17848__auto____1;
return cljs$core$async$reduce_$_state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18441 = f__17922__auto__.call(null);
(statearr_18441[(6)] = c__17921__auto__);

return statearr_18441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));

return c__17921__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18460){
var state_val_18461 = (state_18460[(1)]);
if((state_val_18461 === (1))){
var inst_18455 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18460__$1,(2),inst_18455);
} else {
if((state_val_18461 === (2))){
var inst_18457 = (state_18460[(2)]);
var inst_18458 = f__$1.call(null,inst_18457);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18460__$1,inst_18458);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17848__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17848__auto____0 = (function (){
var statearr_18462 = [null,null,null,null,null,null,null];
(statearr_18462[(0)] = cljs$core$async$transduce_$_state_machine__17848__auto__);

(statearr_18462[(1)] = (1));

return statearr_18462;
});
var cljs$core$async$transduce_$_state_machine__17848__auto____1 = (function (state_18460){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18463){var ex__17851__auto__ = e18463;
var statearr_18464_18467 = state_18460;
(statearr_18464_18467[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18460[(4)]))){
var statearr_18465_18468 = state_18460;
(statearr_18465_18468[(1)] = cljs.core.first.call(null,(state_18460[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18469 = state_18460;
state_18460 = G__18469;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17848__auto__ = function(state_18460){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17848__auto____1.call(this,state_18460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17848__auto____0;
cljs$core$async$transduce_$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17848__auto____1;
return cljs$core$async$transduce_$_state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18466 = f__17922__auto__.call(null);
(statearr_18466[(6)] = c__17921__auto__);

return statearr_18466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));

return c__17921__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18471 = arguments.length;
switch (G__18471) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18496){
var state_val_18497 = (state_18496[(1)]);
if((state_val_18497 === (7))){
var inst_18478 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18498_18520 = state_18496__$1;
(statearr_18498_18520[(2)] = inst_18478);

(statearr_18498_18520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (1))){
var inst_18472 = cljs.core.seq.call(null,coll);
var inst_18473 = inst_18472;
var state_18496__$1 = (function (){var statearr_18499 = state_18496;
(statearr_18499[(7)] = inst_18473);

return statearr_18499;
})();
var statearr_18500_18521 = state_18496__$1;
(statearr_18500_18521[(2)] = null);

(statearr_18500_18521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (4))){
var inst_18473 = (state_18496[(7)]);
var inst_18476 = cljs.core.first.call(null,inst_18473);
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18496__$1,(7),ch,inst_18476);
} else {
if((state_val_18497 === (13))){
var inst_18490 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18501_18522 = state_18496__$1;
(statearr_18501_18522[(2)] = inst_18490);

(statearr_18501_18522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (6))){
var inst_18481 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18481)){
var statearr_18502_18523 = state_18496__$1;
(statearr_18502_18523[(1)] = (8));

} else {
var statearr_18503_18524 = state_18496__$1;
(statearr_18503_18524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (3))){
var inst_18494 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18496__$1,inst_18494);
} else {
if((state_val_18497 === (12))){
var state_18496__$1 = state_18496;
var statearr_18504_18525 = state_18496__$1;
(statearr_18504_18525[(2)] = null);

(statearr_18504_18525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (2))){
var inst_18473 = (state_18496[(7)]);
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18473)){
var statearr_18505_18526 = state_18496__$1;
(statearr_18505_18526[(1)] = (4));

} else {
var statearr_18506_18527 = state_18496__$1;
(statearr_18506_18527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (11))){
var inst_18487 = cljs.core.async.close_BANG_.call(null,ch);
var state_18496__$1 = state_18496;
var statearr_18507_18528 = state_18496__$1;
(statearr_18507_18528[(2)] = inst_18487);

(statearr_18507_18528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (9))){
var state_18496__$1 = state_18496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18508_18529 = state_18496__$1;
(statearr_18508_18529[(1)] = (11));

} else {
var statearr_18509_18530 = state_18496__$1;
(statearr_18509_18530[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (5))){
var inst_18473 = (state_18496[(7)]);
var state_18496__$1 = state_18496;
var statearr_18510_18531 = state_18496__$1;
(statearr_18510_18531[(2)] = inst_18473);

(statearr_18510_18531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (10))){
var inst_18492 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18511_18532 = state_18496__$1;
(statearr_18511_18532[(2)] = inst_18492);

(statearr_18511_18532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (8))){
var inst_18473 = (state_18496[(7)]);
var inst_18483 = cljs.core.next.call(null,inst_18473);
var inst_18473__$1 = inst_18483;
var state_18496__$1 = (function (){var statearr_18512 = state_18496;
(statearr_18512[(7)] = inst_18473__$1);

return statearr_18512;
})();
var statearr_18513_18533 = state_18496__$1;
(statearr_18513_18533[(2)] = null);

(statearr_18513_18533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_18514 = [null,null,null,null,null,null,null,null];
(statearr_18514[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_18514[(1)] = (1));

return statearr_18514;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_18496){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18515){var ex__17851__auto__ = e18515;
var statearr_18516_18534 = state_18496;
(statearr_18516_18534[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18496[(4)]))){
var statearr_18517_18535 = state_18496;
(statearr_18517_18535[(1)] = cljs.core.first.call(null,(state_18496[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18536 = state_18496;
state_18496 = G__18536;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_18496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_18496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18518 = f__17922__auto__.call(null);
(statearr_18518[(6)] = c__17921__auto__);

return statearr_18518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));

return c__17921__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18538 = arguments.length;
switch (G__18538) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18540 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18540.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18541 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18541.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18542 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18542.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18543 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18543.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18544 = (function (ch,cs,meta18545){
this.ch = ch;
this.cs = cs;
this.meta18545 = meta18545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18546,meta18545__$1){
var self__ = this;
var _18546__$1 = this;
return (new cljs.core.async.t_cljs$core$async18544(self__.ch,self__.cs,meta18545__$1));
}));

(cljs.core.async.t_cljs$core$async18544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18546){
var self__ = this;
var _18546__$1 = this;
return self__.meta18545;
}));

(cljs.core.async.t_cljs$core$async18544.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18544.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18544.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18544.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18544.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18545","meta18545",81075151,null)], null);
}));

(cljs.core.async.t_cljs$core$async18544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18544");

(cljs.core.async.t_cljs$core$async18544.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async18544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18544.
 */
cljs.core.async.__GT_t_cljs$core$async18544 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18544(ch__$1,cs__$1,meta18545){
return (new cljs.core.async.t_cljs$core$async18544(ch__$1,cs__$1,meta18545));
});

}

return (new cljs.core.async.t_cljs$core$async18544(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__17921__auto___18763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18679){
var state_val_18680 = (state_18679[(1)]);
if((state_val_18680 === (7))){
var inst_18675 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18681_18764 = state_18679__$1;
(statearr_18681_18764[(2)] = inst_18675);

(statearr_18681_18764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (20))){
var inst_18580 = (state_18679[(7)]);
var inst_18592 = cljs.core.first.call(null,inst_18580);
var inst_18593 = cljs.core.nth.call(null,inst_18592,(0),null);
var inst_18594 = cljs.core.nth.call(null,inst_18592,(1),null);
var state_18679__$1 = (function (){var statearr_18682 = state_18679;
(statearr_18682[(8)] = inst_18593);

return statearr_18682;
})();
if(cljs.core.truth_(inst_18594)){
var statearr_18683_18765 = state_18679__$1;
(statearr_18683_18765[(1)] = (22));

} else {
var statearr_18684_18766 = state_18679__$1;
(statearr_18684_18766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (27))){
var inst_18622 = (state_18679[(9)]);
var inst_18624 = (state_18679[(10)]);
var inst_18629 = (state_18679[(11)]);
var inst_18549 = (state_18679[(12)]);
var inst_18629__$1 = cljs.core._nth.call(null,inst_18622,inst_18624);
var inst_18630 = cljs.core.async.put_BANG_.call(null,inst_18629__$1,inst_18549,done);
var state_18679__$1 = (function (){var statearr_18685 = state_18679;
(statearr_18685[(11)] = inst_18629__$1);

return statearr_18685;
})();
if(cljs.core.truth_(inst_18630)){
var statearr_18686_18767 = state_18679__$1;
(statearr_18686_18767[(1)] = (30));

} else {
var statearr_18687_18768 = state_18679__$1;
(statearr_18687_18768[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (1))){
var state_18679__$1 = state_18679;
var statearr_18688_18769 = state_18679__$1;
(statearr_18688_18769[(2)] = null);

(statearr_18688_18769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (24))){
var inst_18580 = (state_18679[(7)]);
var inst_18599 = (state_18679[(2)]);
var inst_18600 = cljs.core.next.call(null,inst_18580);
var inst_18558 = inst_18600;
var inst_18559 = null;
var inst_18560 = (0);
var inst_18561 = (0);
var state_18679__$1 = (function (){var statearr_18689 = state_18679;
(statearr_18689[(13)] = inst_18599);

(statearr_18689[(14)] = inst_18558);

(statearr_18689[(15)] = inst_18559);

(statearr_18689[(16)] = inst_18560);

(statearr_18689[(17)] = inst_18561);

return statearr_18689;
})();
var statearr_18690_18770 = state_18679__$1;
(statearr_18690_18770[(2)] = null);

(statearr_18690_18770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (39))){
var state_18679__$1 = state_18679;
var statearr_18694_18771 = state_18679__$1;
(statearr_18694_18771[(2)] = null);

(statearr_18694_18771[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (4))){
var inst_18549 = (state_18679[(12)]);
var inst_18549__$1 = (state_18679[(2)]);
var inst_18550 = (inst_18549__$1 == null);
var state_18679__$1 = (function (){var statearr_18695 = state_18679;
(statearr_18695[(12)] = inst_18549__$1);

return statearr_18695;
})();
if(cljs.core.truth_(inst_18550)){
var statearr_18696_18772 = state_18679__$1;
(statearr_18696_18772[(1)] = (5));

} else {
var statearr_18697_18773 = state_18679__$1;
(statearr_18697_18773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (15))){
var inst_18561 = (state_18679[(17)]);
var inst_18558 = (state_18679[(14)]);
var inst_18559 = (state_18679[(15)]);
var inst_18560 = (state_18679[(16)]);
var inst_18576 = (state_18679[(2)]);
var inst_18577 = (inst_18561 + (1));
var tmp18691 = inst_18559;
var tmp18692 = inst_18558;
var tmp18693 = inst_18560;
var inst_18558__$1 = tmp18692;
var inst_18559__$1 = tmp18691;
var inst_18560__$1 = tmp18693;
var inst_18561__$1 = inst_18577;
var state_18679__$1 = (function (){var statearr_18698 = state_18679;
(statearr_18698[(18)] = inst_18576);

(statearr_18698[(14)] = inst_18558__$1);

(statearr_18698[(15)] = inst_18559__$1);

(statearr_18698[(16)] = inst_18560__$1);

(statearr_18698[(17)] = inst_18561__$1);

return statearr_18698;
})();
var statearr_18699_18774 = state_18679__$1;
(statearr_18699_18774[(2)] = null);

(statearr_18699_18774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (21))){
var inst_18603 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18703_18775 = state_18679__$1;
(statearr_18703_18775[(2)] = inst_18603);

(statearr_18703_18775[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (31))){
var inst_18629 = (state_18679[(11)]);
var inst_18633 = cljs.core.async.untap_STAR_.call(null,m,inst_18629);
var state_18679__$1 = state_18679;
var statearr_18704_18776 = state_18679__$1;
(statearr_18704_18776[(2)] = inst_18633);

(statearr_18704_18776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (32))){
var inst_18624 = (state_18679[(10)]);
var inst_18621 = (state_18679[(19)]);
var inst_18622 = (state_18679[(9)]);
var inst_18623 = (state_18679[(20)]);
var inst_18635 = (state_18679[(2)]);
var inst_18636 = (inst_18624 + (1));
var tmp18700 = inst_18621;
var tmp18701 = inst_18623;
var tmp18702 = inst_18622;
var inst_18621__$1 = tmp18700;
var inst_18622__$1 = tmp18702;
var inst_18623__$1 = tmp18701;
var inst_18624__$1 = inst_18636;
var state_18679__$1 = (function (){var statearr_18705 = state_18679;
(statearr_18705[(21)] = inst_18635);

(statearr_18705[(19)] = inst_18621__$1);

(statearr_18705[(9)] = inst_18622__$1);

(statearr_18705[(20)] = inst_18623__$1);

(statearr_18705[(10)] = inst_18624__$1);

return statearr_18705;
})();
var statearr_18706_18777 = state_18679__$1;
(statearr_18706_18777[(2)] = null);

(statearr_18706_18777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (40))){
var inst_18648 = (state_18679[(22)]);
var inst_18652 = cljs.core.async.untap_STAR_.call(null,m,inst_18648);
var state_18679__$1 = state_18679;
var statearr_18707_18778 = state_18679__$1;
(statearr_18707_18778[(2)] = inst_18652);

(statearr_18707_18778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (33))){
var inst_18639 = (state_18679[(23)]);
var inst_18641 = cljs.core.chunked_seq_QMARK_.call(null,inst_18639);
var state_18679__$1 = state_18679;
if(inst_18641){
var statearr_18708_18779 = state_18679__$1;
(statearr_18708_18779[(1)] = (36));

} else {
var statearr_18709_18780 = state_18679__$1;
(statearr_18709_18780[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (13))){
var inst_18570 = (state_18679[(24)]);
var inst_18573 = cljs.core.async.close_BANG_.call(null,inst_18570);
var state_18679__$1 = state_18679;
var statearr_18710_18781 = state_18679__$1;
(statearr_18710_18781[(2)] = inst_18573);

(statearr_18710_18781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (22))){
var inst_18593 = (state_18679[(8)]);
var inst_18596 = cljs.core.async.close_BANG_.call(null,inst_18593);
var state_18679__$1 = state_18679;
var statearr_18711_18782 = state_18679__$1;
(statearr_18711_18782[(2)] = inst_18596);

(statearr_18711_18782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (36))){
var inst_18639 = (state_18679[(23)]);
var inst_18643 = cljs.core.chunk_first.call(null,inst_18639);
var inst_18644 = cljs.core.chunk_rest.call(null,inst_18639);
var inst_18645 = cljs.core.count.call(null,inst_18643);
var inst_18621 = inst_18644;
var inst_18622 = inst_18643;
var inst_18623 = inst_18645;
var inst_18624 = (0);
var state_18679__$1 = (function (){var statearr_18712 = state_18679;
(statearr_18712[(19)] = inst_18621);

(statearr_18712[(9)] = inst_18622);

(statearr_18712[(20)] = inst_18623);

(statearr_18712[(10)] = inst_18624);

return statearr_18712;
})();
var statearr_18713_18783 = state_18679__$1;
(statearr_18713_18783[(2)] = null);

(statearr_18713_18783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (41))){
var inst_18639 = (state_18679[(23)]);
var inst_18654 = (state_18679[(2)]);
var inst_18655 = cljs.core.next.call(null,inst_18639);
var inst_18621 = inst_18655;
var inst_18622 = null;
var inst_18623 = (0);
var inst_18624 = (0);
var state_18679__$1 = (function (){var statearr_18714 = state_18679;
(statearr_18714[(25)] = inst_18654);

(statearr_18714[(19)] = inst_18621);

(statearr_18714[(9)] = inst_18622);

(statearr_18714[(20)] = inst_18623);

(statearr_18714[(10)] = inst_18624);

return statearr_18714;
})();
var statearr_18715_18784 = state_18679__$1;
(statearr_18715_18784[(2)] = null);

(statearr_18715_18784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (43))){
var state_18679__$1 = state_18679;
var statearr_18716_18785 = state_18679__$1;
(statearr_18716_18785[(2)] = null);

(statearr_18716_18785[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (29))){
var inst_18663 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18717_18786 = state_18679__$1;
(statearr_18717_18786[(2)] = inst_18663);

(statearr_18717_18786[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (44))){
var inst_18672 = (state_18679[(2)]);
var state_18679__$1 = (function (){var statearr_18718 = state_18679;
(statearr_18718[(26)] = inst_18672);

return statearr_18718;
})();
var statearr_18719_18787 = state_18679__$1;
(statearr_18719_18787[(2)] = null);

(statearr_18719_18787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (6))){
var inst_18613 = (state_18679[(27)]);
var inst_18612 = cljs.core.deref.call(null,cs);
var inst_18613__$1 = cljs.core.keys.call(null,inst_18612);
var inst_18614 = cljs.core.count.call(null,inst_18613__$1);
var inst_18615 = cljs.core.reset_BANG_.call(null,dctr,inst_18614);
var inst_18620 = cljs.core.seq.call(null,inst_18613__$1);
var inst_18621 = inst_18620;
var inst_18622 = null;
var inst_18623 = (0);
var inst_18624 = (0);
var state_18679__$1 = (function (){var statearr_18720 = state_18679;
(statearr_18720[(27)] = inst_18613__$1);

(statearr_18720[(28)] = inst_18615);

(statearr_18720[(19)] = inst_18621);

(statearr_18720[(9)] = inst_18622);

(statearr_18720[(20)] = inst_18623);

(statearr_18720[(10)] = inst_18624);

return statearr_18720;
})();
var statearr_18721_18788 = state_18679__$1;
(statearr_18721_18788[(2)] = null);

(statearr_18721_18788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (28))){
var inst_18621 = (state_18679[(19)]);
var inst_18639 = (state_18679[(23)]);
var inst_18639__$1 = cljs.core.seq.call(null,inst_18621);
var state_18679__$1 = (function (){var statearr_18722 = state_18679;
(statearr_18722[(23)] = inst_18639__$1);

return statearr_18722;
})();
if(inst_18639__$1){
var statearr_18723_18789 = state_18679__$1;
(statearr_18723_18789[(1)] = (33));

} else {
var statearr_18724_18790 = state_18679__$1;
(statearr_18724_18790[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (25))){
var inst_18624 = (state_18679[(10)]);
var inst_18623 = (state_18679[(20)]);
var inst_18626 = (inst_18624 < inst_18623);
var inst_18627 = inst_18626;
var state_18679__$1 = state_18679;
if(cljs.core.truth_(inst_18627)){
var statearr_18725_18791 = state_18679__$1;
(statearr_18725_18791[(1)] = (27));

} else {
var statearr_18726_18792 = state_18679__$1;
(statearr_18726_18792[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (34))){
var state_18679__$1 = state_18679;
var statearr_18727_18793 = state_18679__$1;
(statearr_18727_18793[(2)] = null);

(statearr_18727_18793[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (17))){
var state_18679__$1 = state_18679;
var statearr_18728_18794 = state_18679__$1;
(statearr_18728_18794[(2)] = null);

(statearr_18728_18794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (3))){
var inst_18677 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18679__$1,inst_18677);
} else {
if((state_val_18680 === (12))){
var inst_18608 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18729_18795 = state_18679__$1;
(statearr_18729_18795[(2)] = inst_18608);

(statearr_18729_18795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (2))){
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18679__$1,(4),ch);
} else {
if((state_val_18680 === (23))){
var state_18679__$1 = state_18679;
var statearr_18730_18796 = state_18679__$1;
(statearr_18730_18796[(2)] = null);

(statearr_18730_18796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (35))){
var inst_18661 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18731_18797 = state_18679__$1;
(statearr_18731_18797[(2)] = inst_18661);

(statearr_18731_18797[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (19))){
var inst_18580 = (state_18679[(7)]);
var inst_18584 = cljs.core.chunk_first.call(null,inst_18580);
var inst_18585 = cljs.core.chunk_rest.call(null,inst_18580);
var inst_18586 = cljs.core.count.call(null,inst_18584);
var inst_18558 = inst_18585;
var inst_18559 = inst_18584;
var inst_18560 = inst_18586;
var inst_18561 = (0);
var state_18679__$1 = (function (){var statearr_18732 = state_18679;
(statearr_18732[(14)] = inst_18558);

(statearr_18732[(15)] = inst_18559);

(statearr_18732[(16)] = inst_18560);

(statearr_18732[(17)] = inst_18561);

return statearr_18732;
})();
var statearr_18733_18798 = state_18679__$1;
(statearr_18733_18798[(2)] = null);

(statearr_18733_18798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (11))){
var inst_18558 = (state_18679[(14)]);
var inst_18580 = (state_18679[(7)]);
var inst_18580__$1 = cljs.core.seq.call(null,inst_18558);
var state_18679__$1 = (function (){var statearr_18734 = state_18679;
(statearr_18734[(7)] = inst_18580__$1);

return statearr_18734;
})();
if(inst_18580__$1){
var statearr_18735_18799 = state_18679__$1;
(statearr_18735_18799[(1)] = (16));

} else {
var statearr_18736_18800 = state_18679__$1;
(statearr_18736_18800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (9))){
var inst_18610 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18737_18801 = state_18679__$1;
(statearr_18737_18801[(2)] = inst_18610);

(statearr_18737_18801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (5))){
var inst_18556 = cljs.core.deref.call(null,cs);
var inst_18557 = cljs.core.seq.call(null,inst_18556);
var inst_18558 = inst_18557;
var inst_18559 = null;
var inst_18560 = (0);
var inst_18561 = (0);
var state_18679__$1 = (function (){var statearr_18738 = state_18679;
(statearr_18738[(14)] = inst_18558);

(statearr_18738[(15)] = inst_18559);

(statearr_18738[(16)] = inst_18560);

(statearr_18738[(17)] = inst_18561);

return statearr_18738;
})();
var statearr_18739_18802 = state_18679__$1;
(statearr_18739_18802[(2)] = null);

(statearr_18739_18802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (14))){
var state_18679__$1 = state_18679;
var statearr_18740_18803 = state_18679__$1;
(statearr_18740_18803[(2)] = null);

(statearr_18740_18803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (45))){
var inst_18669 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18741_18804 = state_18679__$1;
(statearr_18741_18804[(2)] = inst_18669);

(statearr_18741_18804[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (26))){
var inst_18613 = (state_18679[(27)]);
var inst_18665 = (state_18679[(2)]);
var inst_18666 = cljs.core.seq.call(null,inst_18613);
var state_18679__$1 = (function (){var statearr_18742 = state_18679;
(statearr_18742[(29)] = inst_18665);

return statearr_18742;
})();
if(inst_18666){
var statearr_18743_18805 = state_18679__$1;
(statearr_18743_18805[(1)] = (42));

} else {
var statearr_18744_18806 = state_18679__$1;
(statearr_18744_18806[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (16))){
var inst_18580 = (state_18679[(7)]);
var inst_18582 = cljs.core.chunked_seq_QMARK_.call(null,inst_18580);
var state_18679__$1 = state_18679;
if(inst_18582){
var statearr_18745_18807 = state_18679__$1;
(statearr_18745_18807[(1)] = (19));

} else {
var statearr_18746_18808 = state_18679__$1;
(statearr_18746_18808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (38))){
var inst_18658 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18747_18809 = state_18679__$1;
(statearr_18747_18809[(2)] = inst_18658);

(statearr_18747_18809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (30))){
var state_18679__$1 = state_18679;
var statearr_18748_18810 = state_18679__$1;
(statearr_18748_18810[(2)] = null);

(statearr_18748_18810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (10))){
var inst_18559 = (state_18679[(15)]);
var inst_18561 = (state_18679[(17)]);
var inst_18569 = cljs.core._nth.call(null,inst_18559,inst_18561);
var inst_18570 = cljs.core.nth.call(null,inst_18569,(0),null);
var inst_18571 = cljs.core.nth.call(null,inst_18569,(1),null);
var state_18679__$1 = (function (){var statearr_18749 = state_18679;
(statearr_18749[(24)] = inst_18570);

return statearr_18749;
})();
if(cljs.core.truth_(inst_18571)){
var statearr_18750_18811 = state_18679__$1;
(statearr_18750_18811[(1)] = (13));

} else {
var statearr_18751_18812 = state_18679__$1;
(statearr_18751_18812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (18))){
var inst_18606 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18752_18813 = state_18679__$1;
(statearr_18752_18813[(2)] = inst_18606);

(statearr_18752_18813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (42))){
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18679__$1,(45),dchan);
} else {
if((state_val_18680 === (37))){
var inst_18639 = (state_18679[(23)]);
var inst_18648 = (state_18679[(22)]);
var inst_18549 = (state_18679[(12)]);
var inst_18648__$1 = cljs.core.first.call(null,inst_18639);
var inst_18649 = cljs.core.async.put_BANG_.call(null,inst_18648__$1,inst_18549,done);
var state_18679__$1 = (function (){var statearr_18753 = state_18679;
(statearr_18753[(22)] = inst_18648__$1);

return statearr_18753;
})();
if(cljs.core.truth_(inst_18649)){
var statearr_18754_18814 = state_18679__$1;
(statearr_18754_18814[(1)] = (39));

} else {
var statearr_18755_18815 = state_18679__$1;
(statearr_18755_18815[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (8))){
var inst_18561 = (state_18679[(17)]);
var inst_18560 = (state_18679[(16)]);
var inst_18563 = (inst_18561 < inst_18560);
var inst_18564 = inst_18563;
var state_18679__$1 = state_18679;
if(cljs.core.truth_(inst_18564)){
var statearr_18756_18816 = state_18679__$1;
(statearr_18756_18816[(1)] = (10));

} else {
var statearr_18757_18817 = state_18679__$1;
(statearr_18757_18817[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17848__auto__ = null;
var cljs$core$async$mult_$_state_machine__17848__auto____0 = (function (){
var statearr_18758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18758[(0)] = cljs$core$async$mult_$_state_machine__17848__auto__);

(statearr_18758[(1)] = (1));

return statearr_18758;
});
var cljs$core$async$mult_$_state_machine__17848__auto____1 = (function (state_18679){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18759){var ex__17851__auto__ = e18759;
var statearr_18760_18818 = state_18679;
(statearr_18760_18818[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18679[(4)]))){
var statearr_18761_18819 = state_18679;
(statearr_18761_18819[(1)] = cljs.core.first.call(null,(state_18679[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18820 = state_18679;
state_18679 = G__18820;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17848__auto__ = function(state_18679){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17848__auto____1.call(this,state_18679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17848__auto____0;
cljs$core$async$mult_$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17848__auto____1;
return cljs$core$async$mult_$_state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18762 = f__17922__auto__.call(null);
(statearr_18762[(6)] = c__17921__auto___18763);

return statearr_18762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18822 = arguments.length;
switch (G__18822) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18824 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18824.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18825 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18825.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18826 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m);
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18826.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18827 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,state_map);
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18827.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18828 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,m,mode);
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18828.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___18838 = arguments.length;
var i__4865__auto___18839 = (0);
while(true){
if((i__4865__auto___18839 < len__4864__auto___18838)){
args__4870__auto__.push((arguments[i__4865__auto___18839]));

var G__18840 = (i__4865__auto___18839 + (1));
i__4865__auto___18839 = G__18840;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18833){
var map__18834 = p__18833;
var map__18834__$1 = cljs.core.__destructure_map.call(null,map__18834);
var opts = map__18834__$1;
var statearr_18835_18841 = state;
(statearr_18835_18841[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18836_18842 = state;
(statearr_18836_18842[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_18837_18843 = state;
(statearr_18837_18843[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18829){
var G__18830 = cljs.core.first.call(null,seq18829);
var seq18829__$1 = cljs.core.next.call(null,seq18829);
var G__18831 = cljs.core.first.call(null,seq18829__$1);
var seq18829__$2 = cljs.core.next.call(null,seq18829__$1);
var G__18832 = cljs.core.first.call(null,seq18829__$2);
var seq18829__$3 = cljs.core.next.call(null,seq18829__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18830,G__18831,G__18832,seq18829__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18844 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18845){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18845 = meta18845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18846,meta18845__$1){
var self__ = this;
var _18846__$1 = this;
return (new cljs.core.async.t_cljs$core$async18844(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18845__$1));
}));

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18846){
var self__ = this;
var _18846__$1 = this;
return self__.meta18845;
}));

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18844.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18845","meta18845",437144962,null)], null);
}));

(cljs.core.async.t_cljs$core$async18844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18844");

(cljs.core.async.t_cljs$core$async18844.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async18844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18844.
 */
cljs.core.async.__GT_t_cljs$core$async18844 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18844(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18845){
return (new cljs.core.async.t_cljs$core$async18844(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18845));
});

}

return (new cljs.core.async.t_cljs$core$async18844(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17921__auto___18959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_18914){
var state_val_18915 = (state_18914[(1)]);
if((state_val_18915 === (7))){
var inst_18874 = (state_18914[(2)]);
var state_18914__$1 = state_18914;
if(cljs.core.truth_(inst_18874)){
var statearr_18916_18960 = state_18914__$1;
(statearr_18916_18960[(1)] = (8));

} else {
var statearr_18917_18961 = state_18914__$1;
(statearr_18917_18961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (20))){
var inst_18867 = (state_18914[(7)]);
var state_18914__$1 = state_18914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18914__$1,(23),out,inst_18867);
} else {
if((state_val_18915 === (1))){
var inst_18850 = calc_state.call(null);
var inst_18851 = cljs.core.__destructure_map.call(null,inst_18850);
var inst_18852 = cljs.core.get.call(null,inst_18851,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18853 = cljs.core.get.call(null,inst_18851,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18854 = cljs.core.get.call(null,inst_18851,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18855 = inst_18850;
var state_18914__$1 = (function (){var statearr_18918 = state_18914;
(statearr_18918[(8)] = inst_18852);

(statearr_18918[(9)] = inst_18853);

(statearr_18918[(10)] = inst_18854);

(statearr_18918[(11)] = inst_18855);

return statearr_18918;
})();
var statearr_18919_18962 = state_18914__$1;
(statearr_18919_18962[(2)] = null);

(statearr_18919_18962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (24))){
var inst_18858 = (state_18914[(12)]);
var inst_18855 = inst_18858;
var state_18914__$1 = (function (){var statearr_18920 = state_18914;
(statearr_18920[(11)] = inst_18855);

return statearr_18920;
})();
var statearr_18921_18963 = state_18914__$1;
(statearr_18921_18963[(2)] = null);

(statearr_18921_18963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (4))){
var inst_18867 = (state_18914[(7)]);
var inst_18869 = (state_18914[(13)]);
var inst_18866 = (state_18914[(2)]);
var inst_18867__$1 = cljs.core.nth.call(null,inst_18866,(0),null);
var inst_18868 = cljs.core.nth.call(null,inst_18866,(1),null);
var inst_18869__$1 = (inst_18867__$1 == null);
var state_18914__$1 = (function (){var statearr_18922 = state_18914;
(statearr_18922[(7)] = inst_18867__$1);

(statearr_18922[(14)] = inst_18868);

(statearr_18922[(13)] = inst_18869__$1);

return statearr_18922;
})();
if(cljs.core.truth_(inst_18869__$1)){
var statearr_18923_18964 = state_18914__$1;
(statearr_18923_18964[(1)] = (5));

} else {
var statearr_18924_18965 = state_18914__$1;
(statearr_18924_18965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (15))){
var inst_18859 = (state_18914[(15)]);
var inst_18888 = (state_18914[(16)]);
var inst_18888__$1 = cljs.core.empty_QMARK_.call(null,inst_18859);
var state_18914__$1 = (function (){var statearr_18925 = state_18914;
(statearr_18925[(16)] = inst_18888__$1);

return statearr_18925;
})();
if(inst_18888__$1){
var statearr_18926_18966 = state_18914__$1;
(statearr_18926_18966[(1)] = (17));

} else {
var statearr_18927_18967 = state_18914__$1;
(statearr_18927_18967[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (21))){
var inst_18858 = (state_18914[(12)]);
var inst_18855 = inst_18858;
var state_18914__$1 = (function (){var statearr_18928 = state_18914;
(statearr_18928[(11)] = inst_18855);

return statearr_18928;
})();
var statearr_18929_18968 = state_18914__$1;
(statearr_18929_18968[(2)] = null);

(statearr_18929_18968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (13))){
var inst_18881 = (state_18914[(2)]);
var inst_18882 = calc_state.call(null);
var inst_18855 = inst_18882;
var state_18914__$1 = (function (){var statearr_18930 = state_18914;
(statearr_18930[(17)] = inst_18881);

(statearr_18930[(11)] = inst_18855);

return statearr_18930;
})();
var statearr_18931_18969 = state_18914__$1;
(statearr_18931_18969[(2)] = null);

(statearr_18931_18969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (22))){
var inst_18908 = (state_18914[(2)]);
var state_18914__$1 = state_18914;
var statearr_18932_18970 = state_18914__$1;
(statearr_18932_18970[(2)] = inst_18908);

(statearr_18932_18970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (6))){
var inst_18868 = (state_18914[(14)]);
var inst_18872 = cljs.core._EQ_.call(null,inst_18868,change);
var state_18914__$1 = state_18914;
var statearr_18933_18971 = state_18914__$1;
(statearr_18933_18971[(2)] = inst_18872);

(statearr_18933_18971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (25))){
var state_18914__$1 = state_18914;
var statearr_18934_18972 = state_18914__$1;
(statearr_18934_18972[(2)] = null);

(statearr_18934_18972[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (17))){
var inst_18860 = (state_18914[(18)]);
var inst_18868 = (state_18914[(14)]);
var inst_18890 = inst_18860.call(null,inst_18868);
var inst_18891 = cljs.core.not.call(null,inst_18890);
var state_18914__$1 = state_18914;
var statearr_18935_18973 = state_18914__$1;
(statearr_18935_18973[(2)] = inst_18891);

(statearr_18935_18973[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (3))){
var inst_18912 = (state_18914[(2)]);
var state_18914__$1 = state_18914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18914__$1,inst_18912);
} else {
if((state_val_18915 === (12))){
var state_18914__$1 = state_18914;
var statearr_18936_18974 = state_18914__$1;
(statearr_18936_18974[(2)] = null);

(statearr_18936_18974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (2))){
var inst_18855 = (state_18914[(11)]);
var inst_18858 = (state_18914[(12)]);
var inst_18858__$1 = cljs.core.__destructure_map.call(null,inst_18855);
var inst_18859 = cljs.core.get.call(null,inst_18858__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18860 = cljs.core.get.call(null,inst_18858__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18861 = cljs.core.get.call(null,inst_18858__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18914__$1 = (function (){var statearr_18937 = state_18914;
(statearr_18937[(12)] = inst_18858__$1);

(statearr_18937[(15)] = inst_18859);

(statearr_18937[(18)] = inst_18860);

return statearr_18937;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18914__$1,(4),inst_18861);
} else {
if((state_val_18915 === (23))){
var inst_18899 = (state_18914[(2)]);
var state_18914__$1 = state_18914;
if(cljs.core.truth_(inst_18899)){
var statearr_18938_18975 = state_18914__$1;
(statearr_18938_18975[(1)] = (24));

} else {
var statearr_18939_18976 = state_18914__$1;
(statearr_18939_18976[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (19))){
var inst_18894 = (state_18914[(2)]);
var state_18914__$1 = state_18914;
var statearr_18940_18977 = state_18914__$1;
(statearr_18940_18977[(2)] = inst_18894);

(statearr_18940_18977[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (11))){
var inst_18868 = (state_18914[(14)]);
var inst_18878 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18868);
var state_18914__$1 = state_18914;
var statearr_18941_18978 = state_18914__$1;
(statearr_18941_18978[(2)] = inst_18878);

(statearr_18941_18978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (9))){
var inst_18859 = (state_18914[(15)]);
var inst_18868 = (state_18914[(14)]);
var inst_18885 = (state_18914[(19)]);
var inst_18885__$1 = inst_18859.call(null,inst_18868);
var state_18914__$1 = (function (){var statearr_18942 = state_18914;
(statearr_18942[(19)] = inst_18885__$1);

return statearr_18942;
})();
if(cljs.core.truth_(inst_18885__$1)){
var statearr_18943_18979 = state_18914__$1;
(statearr_18943_18979[(1)] = (14));

} else {
var statearr_18944_18980 = state_18914__$1;
(statearr_18944_18980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (5))){
var inst_18869 = (state_18914[(13)]);
var state_18914__$1 = state_18914;
var statearr_18945_18981 = state_18914__$1;
(statearr_18945_18981[(2)] = inst_18869);

(statearr_18945_18981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (14))){
var inst_18885 = (state_18914[(19)]);
var state_18914__$1 = state_18914;
var statearr_18946_18982 = state_18914__$1;
(statearr_18946_18982[(2)] = inst_18885);

(statearr_18946_18982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (26))){
var inst_18904 = (state_18914[(2)]);
var state_18914__$1 = state_18914;
var statearr_18947_18983 = state_18914__$1;
(statearr_18947_18983[(2)] = inst_18904);

(statearr_18947_18983[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (16))){
var inst_18896 = (state_18914[(2)]);
var state_18914__$1 = state_18914;
if(cljs.core.truth_(inst_18896)){
var statearr_18948_18984 = state_18914__$1;
(statearr_18948_18984[(1)] = (20));

} else {
var statearr_18949_18985 = state_18914__$1;
(statearr_18949_18985[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (10))){
var inst_18910 = (state_18914[(2)]);
var state_18914__$1 = state_18914;
var statearr_18950_18986 = state_18914__$1;
(statearr_18950_18986[(2)] = inst_18910);

(statearr_18950_18986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (18))){
var inst_18888 = (state_18914[(16)]);
var state_18914__$1 = state_18914;
var statearr_18951_18987 = state_18914__$1;
(statearr_18951_18987[(2)] = inst_18888);

(statearr_18951_18987[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18915 === (8))){
var inst_18867 = (state_18914[(7)]);
var inst_18876 = (inst_18867 == null);
var state_18914__$1 = state_18914;
if(cljs.core.truth_(inst_18876)){
var statearr_18952_18988 = state_18914__$1;
(statearr_18952_18988[(1)] = (11));

} else {
var statearr_18953_18989 = state_18914__$1;
(statearr_18953_18989[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17848__auto__ = null;
var cljs$core$async$mix_$_state_machine__17848__auto____0 = (function (){
var statearr_18954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18954[(0)] = cljs$core$async$mix_$_state_machine__17848__auto__);

(statearr_18954[(1)] = (1));

return statearr_18954;
});
var cljs$core$async$mix_$_state_machine__17848__auto____1 = (function (state_18914){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_18914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e18955){var ex__17851__auto__ = e18955;
var statearr_18956_18990 = state_18914;
(statearr_18956_18990[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_18914[(4)]))){
var statearr_18957_18991 = state_18914;
(statearr_18957_18991[(1)] = cljs.core.first.call(null,(state_18914[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18992 = state_18914;
state_18914 = G__18992;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17848__auto__ = function(state_18914){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17848__auto____1.call(this,state_18914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17848__auto____0;
cljs$core$async$mix_$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17848__auto____1;
return cljs$core$async$mix_$_state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_18958 = f__17922__auto__.call(null);
(statearr_18958[(6)] = c__17921__auto___18959);

return statearr_18958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18995 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18995.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18996 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v,ch);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18996.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18997 = (function() {
var G__18998 = null;
var G__18998__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__18998__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,p,v);
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__18998 = function(p,v){
switch(arguments.length){
case 1:
return G__18998__1.call(this,p);
case 2:
return G__18998__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18998.cljs$core$IFn$_invoke$arity$1 = G__18998__1;
G__18998.cljs$core$IFn$_invoke$arity$2 = G__18998__2;
return G__18998;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18994 = arguments.length;
switch (G__18994) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18997.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18997.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19002 = arguments.length;
switch (G__19002) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__19000_SHARP_){
if(cljs.core.truth_(p1__19000_SHARP_.call(null,topic))){
return p1__19000_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19000_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19003 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19004){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19004 = meta19004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19005,meta19004__$1){
var self__ = this;
var _19005__$1 = this;
return (new cljs.core.async.t_cljs$core$async19003(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19004__$1));
}));

(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19005){
var self__ = this;
var _19005__$1 = this;
return self__.meta19004;
}));

(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19004","meta19004",176486575,null)], null);
}));

(cljs.core.async.t_cljs$core$async19003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19003");

(cljs.core.async.t_cljs$core$async19003.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async19003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19003.
 */
cljs.core.async.__GT_t_cljs$core$async19003 = (function cljs$core$async$__GT_t_cljs$core$async19003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19004){
return (new cljs.core.async.t_cljs$core$async19003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19004));
});

}

return (new cljs.core.async.t_cljs$core$async19003(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17921__auto___19124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19077){
var state_val_19078 = (state_19077[(1)]);
if((state_val_19078 === (7))){
var inst_19073 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
var statearr_19079_19125 = state_19077__$1;
(statearr_19079_19125[(2)] = inst_19073);

(statearr_19079_19125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (20))){
var state_19077__$1 = state_19077;
var statearr_19080_19126 = state_19077__$1;
(statearr_19080_19126[(2)] = null);

(statearr_19080_19126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (1))){
var state_19077__$1 = state_19077;
var statearr_19081_19127 = state_19077__$1;
(statearr_19081_19127[(2)] = null);

(statearr_19081_19127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (24))){
var inst_19056 = (state_19077[(7)]);
var inst_19065 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19056);
var state_19077__$1 = state_19077;
var statearr_19082_19128 = state_19077__$1;
(statearr_19082_19128[(2)] = inst_19065);

(statearr_19082_19128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (4))){
var inst_19008 = (state_19077[(8)]);
var inst_19008__$1 = (state_19077[(2)]);
var inst_19009 = (inst_19008__$1 == null);
var state_19077__$1 = (function (){var statearr_19083 = state_19077;
(statearr_19083[(8)] = inst_19008__$1);

return statearr_19083;
})();
if(cljs.core.truth_(inst_19009)){
var statearr_19084_19129 = state_19077__$1;
(statearr_19084_19129[(1)] = (5));

} else {
var statearr_19085_19130 = state_19077__$1;
(statearr_19085_19130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (15))){
var inst_19050 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
var statearr_19086_19131 = state_19077__$1;
(statearr_19086_19131[(2)] = inst_19050);

(statearr_19086_19131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (21))){
var inst_19070 = (state_19077[(2)]);
var state_19077__$1 = (function (){var statearr_19087 = state_19077;
(statearr_19087[(9)] = inst_19070);

return statearr_19087;
})();
var statearr_19088_19132 = state_19077__$1;
(statearr_19088_19132[(2)] = null);

(statearr_19088_19132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (13))){
var inst_19032 = (state_19077[(10)]);
var inst_19034 = cljs.core.chunked_seq_QMARK_.call(null,inst_19032);
var state_19077__$1 = state_19077;
if(inst_19034){
var statearr_19089_19133 = state_19077__$1;
(statearr_19089_19133[(1)] = (16));

} else {
var statearr_19090_19134 = state_19077__$1;
(statearr_19090_19134[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (22))){
var inst_19062 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
if(cljs.core.truth_(inst_19062)){
var statearr_19091_19135 = state_19077__$1;
(statearr_19091_19135[(1)] = (23));

} else {
var statearr_19092_19136 = state_19077__$1;
(statearr_19092_19136[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (6))){
var inst_19008 = (state_19077[(8)]);
var inst_19056 = (state_19077[(7)]);
var inst_19058 = (state_19077[(11)]);
var inst_19056__$1 = topic_fn.call(null,inst_19008);
var inst_19057 = cljs.core.deref.call(null,mults);
var inst_19058__$1 = cljs.core.get.call(null,inst_19057,inst_19056__$1);
var state_19077__$1 = (function (){var statearr_19093 = state_19077;
(statearr_19093[(7)] = inst_19056__$1);

(statearr_19093[(11)] = inst_19058__$1);

return statearr_19093;
})();
if(cljs.core.truth_(inst_19058__$1)){
var statearr_19094_19137 = state_19077__$1;
(statearr_19094_19137[(1)] = (19));

} else {
var statearr_19095_19138 = state_19077__$1;
(statearr_19095_19138[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (25))){
var inst_19067 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
var statearr_19096_19139 = state_19077__$1;
(statearr_19096_19139[(2)] = inst_19067);

(statearr_19096_19139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (17))){
var inst_19032 = (state_19077[(10)]);
var inst_19041 = cljs.core.first.call(null,inst_19032);
var inst_19042 = cljs.core.async.muxch_STAR_.call(null,inst_19041);
var inst_19043 = cljs.core.async.close_BANG_.call(null,inst_19042);
var inst_19044 = cljs.core.next.call(null,inst_19032);
var inst_19018 = inst_19044;
var inst_19019 = null;
var inst_19020 = (0);
var inst_19021 = (0);
var state_19077__$1 = (function (){var statearr_19097 = state_19077;
(statearr_19097[(12)] = inst_19043);

(statearr_19097[(13)] = inst_19018);

(statearr_19097[(14)] = inst_19019);

(statearr_19097[(15)] = inst_19020);

(statearr_19097[(16)] = inst_19021);

return statearr_19097;
})();
var statearr_19098_19140 = state_19077__$1;
(statearr_19098_19140[(2)] = null);

(statearr_19098_19140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (3))){
var inst_19075 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19077__$1,inst_19075);
} else {
if((state_val_19078 === (12))){
var inst_19052 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
var statearr_19099_19141 = state_19077__$1;
(statearr_19099_19141[(2)] = inst_19052);

(statearr_19099_19141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (2))){
var state_19077__$1 = state_19077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19077__$1,(4),ch);
} else {
if((state_val_19078 === (23))){
var state_19077__$1 = state_19077;
var statearr_19100_19142 = state_19077__$1;
(statearr_19100_19142[(2)] = null);

(statearr_19100_19142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (19))){
var inst_19058 = (state_19077[(11)]);
var inst_19008 = (state_19077[(8)]);
var inst_19060 = cljs.core.async.muxch_STAR_.call(null,inst_19058);
var state_19077__$1 = state_19077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19077__$1,(22),inst_19060,inst_19008);
} else {
if((state_val_19078 === (11))){
var inst_19018 = (state_19077[(13)]);
var inst_19032 = (state_19077[(10)]);
var inst_19032__$1 = cljs.core.seq.call(null,inst_19018);
var state_19077__$1 = (function (){var statearr_19101 = state_19077;
(statearr_19101[(10)] = inst_19032__$1);

return statearr_19101;
})();
if(inst_19032__$1){
var statearr_19102_19143 = state_19077__$1;
(statearr_19102_19143[(1)] = (13));

} else {
var statearr_19103_19144 = state_19077__$1;
(statearr_19103_19144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (9))){
var inst_19054 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
var statearr_19104_19145 = state_19077__$1;
(statearr_19104_19145[(2)] = inst_19054);

(statearr_19104_19145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (5))){
var inst_19015 = cljs.core.deref.call(null,mults);
var inst_19016 = cljs.core.vals.call(null,inst_19015);
var inst_19017 = cljs.core.seq.call(null,inst_19016);
var inst_19018 = inst_19017;
var inst_19019 = null;
var inst_19020 = (0);
var inst_19021 = (0);
var state_19077__$1 = (function (){var statearr_19105 = state_19077;
(statearr_19105[(13)] = inst_19018);

(statearr_19105[(14)] = inst_19019);

(statearr_19105[(15)] = inst_19020);

(statearr_19105[(16)] = inst_19021);

return statearr_19105;
})();
var statearr_19106_19146 = state_19077__$1;
(statearr_19106_19146[(2)] = null);

(statearr_19106_19146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (14))){
var state_19077__$1 = state_19077;
var statearr_19110_19147 = state_19077__$1;
(statearr_19110_19147[(2)] = null);

(statearr_19110_19147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (16))){
var inst_19032 = (state_19077[(10)]);
var inst_19036 = cljs.core.chunk_first.call(null,inst_19032);
var inst_19037 = cljs.core.chunk_rest.call(null,inst_19032);
var inst_19038 = cljs.core.count.call(null,inst_19036);
var inst_19018 = inst_19037;
var inst_19019 = inst_19036;
var inst_19020 = inst_19038;
var inst_19021 = (0);
var state_19077__$1 = (function (){var statearr_19111 = state_19077;
(statearr_19111[(13)] = inst_19018);

(statearr_19111[(14)] = inst_19019);

(statearr_19111[(15)] = inst_19020);

(statearr_19111[(16)] = inst_19021);

return statearr_19111;
})();
var statearr_19112_19148 = state_19077__$1;
(statearr_19112_19148[(2)] = null);

(statearr_19112_19148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (10))){
var inst_19019 = (state_19077[(14)]);
var inst_19021 = (state_19077[(16)]);
var inst_19018 = (state_19077[(13)]);
var inst_19020 = (state_19077[(15)]);
var inst_19026 = cljs.core._nth.call(null,inst_19019,inst_19021);
var inst_19027 = cljs.core.async.muxch_STAR_.call(null,inst_19026);
var inst_19028 = cljs.core.async.close_BANG_.call(null,inst_19027);
var inst_19029 = (inst_19021 + (1));
var tmp19107 = inst_19019;
var tmp19108 = inst_19018;
var tmp19109 = inst_19020;
var inst_19018__$1 = tmp19108;
var inst_19019__$1 = tmp19107;
var inst_19020__$1 = tmp19109;
var inst_19021__$1 = inst_19029;
var state_19077__$1 = (function (){var statearr_19113 = state_19077;
(statearr_19113[(17)] = inst_19028);

(statearr_19113[(13)] = inst_19018__$1);

(statearr_19113[(14)] = inst_19019__$1);

(statearr_19113[(15)] = inst_19020__$1);

(statearr_19113[(16)] = inst_19021__$1);

return statearr_19113;
})();
var statearr_19114_19149 = state_19077__$1;
(statearr_19114_19149[(2)] = null);

(statearr_19114_19149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (18))){
var inst_19047 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
var statearr_19115_19150 = state_19077__$1;
(statearr_19115_19150[(2)] = inst_19047);

(statearr_19115_19150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (8))){
var inst_19021 = (state_19077[(16)]);
var inst_19020 = (state_19077[(15)]);
var inst_19023 = (inst_19021 < inst_19020);
var inst_19024 = inst_19023;
var state_19077__$1 = state_19077;
if(cljs.core.truth_(inst_19024)){
var statearr_19116_19151 = state_19077__$1;
(statearr_19116_19151[(1)] = (10));

} else {
var statearr_19117_19152 = state_19077__$1;
(statearr_19117_19152[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_19118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19118[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_19118[(1)] = (1));

return statearr_19118;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_19077){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19119){var ex__17851__auto__ = e19119;
var statearr_19120_19153 = state_19077;
(statearr_19120_19153[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19077[(4)]))){
var statearr_19121_19154 = state_19077;
(statearr_19121_19154[(1)] = cljs.core.first.call(null,(state_19077[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19155 = state_19077;
state_19077 = G__19155;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_19077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_19077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19122 = f__17922__auto__.call(null);
(statearr_19122[(6)] = c__17921__auto___19124);

return statearr_19122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19157 = arguments.length;
switch (G__19157) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19160 = arguments.length;
switch (G__19160) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19163 = arguments.length;
switch (G__19163) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__17921__auto___19241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19206){
var state_val_19207 = (state_19206[(1)]);
if((state_val_19207 === (7))){
var state_19206__$1 = state_19206;
var statearr_19208_19242 = state_19206__$1;
(statearr_19208_19242[(2)] = null);

(statearr_19208_19242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (1))){
var state_19206__$1 = state_19206;
var statearr_19209_19243 = state_19206__$1;
(statearr_19209_19243[(2)] = null);

(statearr_19209_19243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (4))){
var inst_19167 = (state_19206[(7)]);
var inst_19166 = (state_19206[(8)]);
var inst_19169 = (inst_19167 < inst_19166);
var state_19206__$1 = state_19206;
if(cljs.core.truth_(inst_19169)){
var statearr_19210_19244 = state_19206__$1;
(statearr_19210_19244[(1)] = (6));

} else {
var statearr_19211_19245 = state_19206__$1;
(statearr_19211_19245[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (15))){
var inst_19192 = (state_19206[(9)]);
var inst_19197 = cljs.core.apply.call(null,f,inst_19192);
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19206__$1,(17),out,inst_19197);
} else {
if((state_val_19207 === (13))){
var inst_19192 = (state_19206[(9)]);
var inst_19192__$1 = (state_19206[(2)]);
var inst_19193 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19192__$1);
var state_19206__$1 = (function (){var statearr_19212 = state_19206;
(statearr_19212[(9)] = inst_19192__$1);

return statearr_19212;
})();
if(cljs.core.truth_(inst_19193)){
var statearr_19213_19246 = state_19206__$1;
(statearr_19213_19246[(1)] = (14));

} else {
var statearr_19214_19247 = state_19206__$1;
(statearr_19214_19247[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (6))){
var state_19206__$1 = state_19206;
var statearr_19215_19248 = state_19206__$1;
(statearr_19215_19248[(2)] = null);

(statearr_19215_19248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (17))){
var inst_19199 = (state_19206[(2)]);
var state_19206__$1 = (function (){var statearr_19217 = state_19206;
(statearr_19217[(10)] = inst_19199);

return statearr_19217;
})();
var statearr_19218_19249 = state_19206__$1;
(statearr_19218_19249[(2)] = null);

(statearr_19218_19249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (3))){
var inst_19204 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19206__$1,inst_19204);
} else {
if((state_val_19207 === (12))){
var _ = (function (){var statearr_19219 = state_19206;
(statearr_19219[(4)] = cljs.core.rest.call(null,(state_19206[(4)])));

return statearr_19219;
})();
var state_19206__$1 = state_19206;
var ex19216 = (state_19206__$1[(2)]);
var statearr_19220_19250 = state_19206__$1;
(statearr_19220_19250[(5)] = ex19216);


if((ex19216 instanceof Object)){
var statearr_19221_19251 = state_19206__$1;
(statearr_19221_19251[(1)] = (11));

(statearr_19221_19251[(5)] = null);

} else {
throw ex19216;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (2))){
var inst_19165 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19166 = cnt;
var inst_19167 = (0);
var state_19206__$1 = (function (){var statearr_19222 = state_19206;
(statearr_19222[(11)] = inst_19165);

(statearr_19222[(8)] = inst_19166);

(statearr_19222[(7)] = inst_19167);

return statearr_19222;
})();
var statearr_19223_19252 = state_19206__$1;
(statearr_19223_19252[(2)] = null);

(statearr_19223_19252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (11))){
var inst_19171 = (state_19206[(2)]);
var inst_19172 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19206__$1 = (function (){var statearr_19224 = state_19206;
(statearr_19224[(12)] = inst_19171);

return statearr_19224;
})();
var statearr_19225_19253 = state_19206__$1;
(statearr_19225_19253[(2)] = inst_19172);

(statearr_19225_19253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (9))){
var inst_19167 = (state_19206[(7)]);
var _ = (function (){var statearr_19226 = state_19206;
(statearr_19226[(4)] = cljs.core.cons.call(null,(12),(state_19206[(4)])));

return statearr_19226;
})();
var inst_19178 = chs__$1.call(null,inst_19167);
var inst_19179 = done.call(null,inst_19167);
var inst_19180 = cljs.core.async.take_BANG_.call(null,inst_19178,inst_19179);
var ___$1 = (function (){var statearr_19227 = state_19206;
(statearr_19227[(4)] = cljs.core.rest.call(null,(state_19206[(4)])));

return statearr_19227;
})();
var state_19206__$1 = state_19206;
var statearr_19228_19254 = state_19206__$1;
(statearr_19228_19254[(2)] = inst_19180);

(statearr_19228_19254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (5))){
var inst_19190 = (state_19206[(2)]);
var state_19206__$1 = (function (){var statearr_19229 = state_19206;
(statearr_19229[(13)] = inst_19190);

return statearr_19229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19206__$1,(13),dchan);
} else {
if((state_val_19207 === (14))){
var inst_19195 = cljs.core.async.close_BANG_.call(null,out);
var state_19206__$1 = state_19206;
var statearr_19230_19255 = state_19206__$1;
(statearr_19230_19255[(2)] = inst_19195);

(statearr_19230_19255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (16))){
var inst_19202 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19231_19256 = state_19206__$1;
(statearr_19231_19256[(2)] = inst_19202);

(statearr_19231_19256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (10))){
var inst_19167 = (state_19206[(7)]);
var inst_19183 = (state_19206[(2)]);
var inst_19184 = (inst_19167 + (1));
var inst_19167__$1 = inst_19184;
var state_19206__$1 = (function (){var statearr_19232 = state_19206;
(statearr_19232[(14)] = inst_19183);

(statearr_19232[(7)] = inst_19167__$1);

return statearr_19232;
})();
var statearr_19233_19257 = state_19206__$1;
(statearr_19233_19257[(2)] = null);

(statearr_19233_19257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (8))){
var inst_19188 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19234_19258 = state_19206__$1;
(statearr_19234_19258[(2)] = inst_19188);

(statearr_19234_19258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_19235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19235[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_19235[(1)] = (1));

return statearr_19235;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_19206){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19236){var ex__17851__auto__ = e19236;
var statearr_19237_19259 = state_19206;
(statearr_19237_19259[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19206[(4)]))){
var statearr_19238_19260 = state_19206;
(statearr_19238_19260[(1)] = cljs.core.first.call(null,(state_19206[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19261 = state_19206;
state_19206 = G__19261;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_19206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_19206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19239 = f__17922__auto__.call(null);
(statearr_19239[(6)] = c__17921__auto___19241);

return statearr_19239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19264 = arguments.length;
switch (G__19264) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17921__auto___19319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19296){
var state_val_19297 = (state_19296[(1)]);
if((state_val_19297 === (7))){
var inst_19275 = (state_19296[(7)]);
var inst_19276 = (state_19296[(8)]);
var inst_19275__$1 = (state_19296[(2)]);
var inst_19276__$1 = cljs.core.nth.call(null,inst_19275__$1,(0),null);
var inst_19277 = cljs.core.nth.call(null,inst_19275__$1,(1),null);
var inst_19278 = (inst_19276__$1 == null);
var state_19296__$1 = (function (){var statearr_19298 = state_19296;
(statearr_19298[(7)] = inst_19275__$1);

(statearr_19298[(8)] = inst_19276__$1);

(statearr_19298[(9)] = inst_19277);

return statearr_19298;
})();
if(cljs.core.truth_(inst_19278)){
var statearr_19299_19320 = state_19296__$1;
(statearr_19299_19320[(1)] = (8));

} else {
var statearr_19300_19321 = state_19296__$1;
(statearr_19300_19321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19297 === (1))){
var inst_19265 = cljs.core.vec.call(null,chs);
var inst_19266 = inst_19265;
var state_19296__$1 = (function (){var statearr_19301 = state_19296;
(statearr_19301[(10)] = inst_19266);

return statearr_19301;
})();
var statearr_19302_19322 = state_19296__$1;
(statearr_19302_19322[(2)] = null);

(statearr_19302_19322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19297 === (4))){
var inst_19266 = (state_19296[(10)]);
var state_19296__$1 = state_19296;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19296__$1,(7),inst_19266);
} else {
if((state_val_19297 === (6))){
var inst_19292 = (state_19296[(2)]);
var state_19296__$1 = state_19296;
var statearr_19303_19323 = state_19296__$1;
(statearr_19303_19323[(2)] = inst_19292);

(statearr_19303_19323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19297 === (3))){
var inst_19294 = (state_19296[(2)]);
var state_19296__$1 = state_19296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19296__$1,inst_19294);
} else {
if((state_val_19297 === (2))){
var inst_19266 = (state_19296[(10)]);
var inst_19268 = cljs.core.count.call(null,inst_19266);
var inst_19269 = (inst_19268 > (0));
var state_19296__$1 = state_19296;
if(cljs.core.truth_(inst_19269)){
var statearr_19305_19324 = state_19296__$1;
(statearr_19305_19324[(1)] = (4));

} else {
var statearr_19306_19325 = state_19296__$1;
(statearr_19306_19325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19297 === (11))){
var inst_19266 = (state_19296[(10)]);
var inst_19285 = (state_19296[(2)]);
var tmp19304 = inst_19266;
var inst_19266__$1 = tmp19304;
var state_19296__$1 = (function (){var statearr_19307 = state_19296;
(statearr_19307[(11)] = inst_19285);

(statearr_19307[(10)] = inst_19266__$1);

return statearr_19307;
})();
var statearr_19308_19326 = state_19296__$1;
(statearr_19308_19326[(2)] = null);

(statearr_19308_19326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19297 === (9))){
var inst_19276 = (state_19296[(8)]);
var state_19296__$1 = state_19296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19296__$1,(11),out,inst_19276);
} else {
if((state_val_19297 === (5))){
var inst_19290 = cljs.core.async.close_BANG_.call(null,out);
var state_19296__$1 = state_19296;
var statearr_19309_19327 = state_19296__$1;
(statearr_19309_19327[(2)] = inst_19290);

(statearr_19309_19327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19297 === (10))){
var inst_19288 = (state_19296[(2)]);
var state_19296__$1 = state_19296;
var statearr_19310_19328 = state_19296__$1;
(statearr_19310_19328[(2)] = inst_19288);

(statearr_19310_19328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19297 === (8))){
var inst_19266 = (state_19296[(10)]);
var inst_19275 = (state_19296[(7)]);
var inst_19276 = (state_19296[(8)]);
var inst_19277 = (state_19296[(9)]);
var inst_19280 = (function (){var cs = inst_19266;
var vec__19271 = inst_19275;
var v = inst_19276;
var c = inst_19277;
return (function (p1__19262_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19262_SHARP_);
});
})();
var inst_19281 = cljs.core.filterv.call(null,inst_19280,inst_19266);
var inst_19266__$1 = inst_19281;
var state_19296__$1 = (function (){var statearr_19311 = state_19296;
(statearr_19311[(10)] = inst_19266__$1);

return statearr_19311;
})();
var statearr_19312_19329 = state_19296__$1;
(statearr_19312_19329[(2)] = null);

(statearr_19312_19329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_19313 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19313[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_19313[(1)] = (1));

return statearr_19313;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_19296){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19314){var ex__17851__auto__ = e19314;
var statearr_19315_19330 = state_19296;
(statearr_19315_19330[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19296[(4)]))){
var statearr_19316_19331 = state_19296;
(statearr_19316_19331[(1)] = cljs.core.first.call(null,(state_19296[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19332 = state_19296;
state_19296 = G__19332;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_19296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_19296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19317 = f__17922__auto__.call(null);
(statearr_19317[(6)] = c__17921__auto___19319);

return statearr_19317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19334 = arguments.length;
switch (G__19334) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17921__auto___19380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19358){
var state_val_19359 = (state_19358[(1)]);
if((state_val_19359 === (7))){
var inst_19340 = (state_19358[(7)]);
var inst_19340__$1 = (state_19358[(2)]);
var inst_19341 = (inst_19340__$1 == null);
var inst_19342 = cljs.core.not.call(null,inst_19341);
var state_19358__$1 = (function (){var statearr_19360 = state_19358;
(statearr_19360[(7)] = inst_19340__$1);

return statearr_19360;
})();
if(inst_19342){
var statearr_19361_19381 = state_19358__$1;
(statearr_19361_19381[(1)] = (8));

} else {
var statearr_19362_19382 = state_19358__$1;
(statearr_19362_19382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (1))){
var inst_19335 = (0);
var state_19358__$1 = (function (){var statearr_19363 = state_19358;
(statearr_19363[(8)] = inst_19335);

return statearr_19363;
})();
var statearr_19364_19383 = state_19358__$1;
(statearr_19364_19383[(2)] = null);

(statearr_19364_19383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (4))){
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19358__$1,(7),ch);
} else {
if((state_val_19359 === (6))){
var inst_19353 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
var statearr_19365_19384 = state_19358__$1;
(statearr_19365_19384[(2)] = inst_19353);

(statearr_19365_19384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (3))){
var inst_19355 = (state_19358[(2)]);
var inst_19356 = cljs.core.async.close_BANG_.call(null,out);
var state_19358__$1 = (function (){var statearr_19366 = state_19358;
(statearr_19366[(9)] = inst_19355);

return statearr_19366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19358__$1,inst_19356);
} else {
if((state_val_19359 === (2))){
var inst_19335 = (state_19358[(8)]);
var inst_19337 = (inst_19335 < n);
var state_19358__$1 = state_19358;
if(cljs.core.truth_(inst_19337)){
var statearr_19367_19385 = state_19358__$1;
(statearr_19367_19385[(1)] = (4));

} else {
var statearr_19368_19386 = state_19358__$1;
(statearr_19368_19386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (11))){
var inst_19335 = (state_19358[(8)]);
var inst_19345 = (state_19358[(2)]);
var inst_19346 = (inst_19335 + (1));
var inst_19335__$1 = inst_19346;
var state_19358__$1 = (function (){var statearr_19369 = state_19358;
(statearr_19369[(10)] = inst_19345);

(statearr_19369[(8)] = inst_19335__$1);

return statearr_19369;
})();
var statearr_19370_19387 = state_19358__$1;
(statearr_19370_19387[(2)] = null);

(statearr_19370_19387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (9))){
var state_19358__$1 = state_19358;
var statearr_19371_19388 = state_19358__$1;
(statearr_19371_19388[(2)] = null);

(statearr_19371_19388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (5))){
var state_19358__$1 = state_19358;
var statearr_19372_19389 = state_19358__$1;
(statearr_19372_19389[(2)] = null);

(statearr_19372_19389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (10))){
var inst_19350 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
var statearr_19373_19390 = state_19358__$1;
(statearr_19373_19390[(2)] = inst_19350);

(statearr_19373_19390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (8))){
var inst_19340 = (state_19358[(7)]);
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19358__$1,(11),out,inst_19340);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_19374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19374[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_19374[(1)] = (1));

return statearr_19374;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_19358){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19375){var ex__17851__auto__ = e19375;
var statearr_19376_19391 = state_19358;
(statearr_19376_19391[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19358[(4)]))){
var statearr_19377_19392 = state_19358;
(statearr_19377_19392[(1)] = cljs.core.first.call(null,(state_19358[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19393 = state_19358;
state_19358 = G__19393;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_19358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_19358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19378 = f__17922__auto__.call(null);
(statearr_19378[(6)] = c__17921__auto___19380);

return statearr_19378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19395 = (function (f,ch,meta19396){
this.f = f;
this.ch = ch;
this.meta19396 = meta19396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19397,meta19396__$1){
var self__ = this;
var _19397__$1 = this;
return (new cljs.core.async.t_cljs$core$async19395(self__.f,self__.ch,meta19396__$1));
}));

(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19397){
var self__ = this;
var _19397__$1 = this;
return self__.meta19396;
}));

(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19398 = (function (f,ch,meta19396,_,fn1,meta19399){
this.f = f;
this.ch = ch;
this.meta19396 = meta19396;
this._ = _;
this.fn1 = fn1;
this.meta19399 = meta19399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19400,meta19399__$1){
var self__ = this;
var _19400__$1 = this;
return (new cljs.core.async.t_cljs$core$async19398(self__.f,self__.ch,self__.meta19396,self__._,self__.fn1,meta19399__$1));
}));

(cljs.core.async.t_cljs$core$async19398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19400){
var self__ = this;
var _19400__$1 = this;
return self__.meta19399;
}));

(cljs.core.async.t_cljs$core$async19398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__19394_SHARP_){
return f1.call(null,(((p1__19394_SHARP_ == null))?null:self__.f.call(null,p1__19394_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async19398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19396","meta19396",-354418722,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19395","cljs.core.async/t_cljs$core$async19395",965074218,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19399","meta19399",-2067881606,null)], null);
}));

(cljs.core.async.t_cljs$core$async19398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19398");

(cljs.core.async.t_cljs$core$async19398.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async19398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19398.
 */
cljs.core.async.__GT_t_cljs$core$async19398 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19398(f__$1,ch__$1,meta19396__$1,___$2,fn1__$1,meta19399){
return (new cljs.core.async.t_cljs$core$async19398(f__$1,ch__$1,meta19396__$1,___$2,fn1__$1,meta19399));
});

}

return (new cljs.core.async.t_cljs$core$async19398(self__.f,self__.ch,self__.meta19396,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19396","meta19396",-354418722,null)], null);
}));

(cljs.core.async.t_cljs$core$async19395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19395");

(cljs.core.async.t_cljs$core$async19395.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async19395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19395.
 */
cljs.core.async.__GT_t_cljs$core$async19395 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19395(f__$1,ch__$1,meta19396){
return (new cljs.core.async.t_cljs$core$async19395(f__$1,ch__$1,meta19396));
});

}

return (new cljs.core.async.t_cljs$core$async19395(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19401 = (function (f,ch,meta19402){
this.f = f;
this.ch = ch;
this.meta19402 = meta19402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19403,meta19402__$1){
var self__ = this;
var _19403__$1 = this;
return (new cljs.core.async.t_cljs$core$async19401(self__.f,self__.ch,meta19402__$1));
}));

(cljs.core.async.t_cljs$core$async19401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19403){
var self__ = this;
var _19403__$1 = this;
return self__.meta19402;
}));

(cljs.core.async.t_cljs$core$async19401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async19401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19402","meta19402",1532818468,null)], null);
}));

(cljs.core.async.t_cljs$core$async19401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19401");

(cljs.core.async.t_cljs$core$async19401.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async19401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19401.
 */
cljs.core.async.__GT_t_cljs$core$async19401 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19401(f__$1,ch__$1,meta19402){
return (new cljs.core.async.t_cljs$core$async19401(f__$1,ch__$1,meta19402));
});

}

return (new cljs.core.async.t_cljs$core$async19401(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19404 = (function (p,ch,meta19405){
this.p = p;
this.ch = ch;
this.meta19405 = meta19405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19406,meta19405__$1){
var self__ = this;
var _19406__$1 = this;
return (new cljs.core.async.t_cljs$core$async19404(self__.p,self__.ch,meta19405__$1));
}));

(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19406){
var self__ = this;
var _19406__$1 = this;
return self__.meta19405;
}));

(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19405","meta19405",-241755243,null)], null);
}));

(cljs.core.async.t_cljs$core$async19404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19404");

(cljs.core.async.t_cljs$core$async19404.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"cljs.core.async/t_cljs$core$async19404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19404.
 */
cljs.core.async.__GT_t_cljs$core$async19404 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19404(p__$1,ch__$1,meta19405){
return (new cljs.core.async.t_cljs$core$async19404(p__$1,ch__$1,meta19405));
});

}

return (new cljs.core.async.t_cljs$core$async19404(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19408 = arguments.length;
switch (G__19408) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17921__auto___19449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19429){
var state_val_19430 = (state_19429[(1)]);
if((state_val_19430 === (7))){
var inst_19425 = (state_19429[(2)]);
var state_19429__$1 = state_19429;
var statearr_19431_19450 = state_19429__$1;
(statearr_19431_19450[(2)] = inst_19425);

(statearr_19431_19450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19430 === (1))){
var state_19429__$1 = state_19429;
var statearr_19432_19451 = state_19429__$1;
(statearr_19432_19451[(2)] = null);

(statearr_19432_19451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19430 === (4))){
var inst_19411 = (state_19429[(7)]);
var inst_19411__$1 = (state_19429[(2)]);
var inst_19412 = (inst_19411__$1 == null);
var state_19429__$1 = (function (){var statearr_19433 = state_19429;
(statearr_19433[(7)] = inst_19411__$1);

return statearr_19433;
})();
if(cljs.core.truth_(inst_19412)){
var statearr_19434_19452 = state_19429__$1;
(statearr_19434_19452[(1)] = (5));

} else {
var statearr_19435_19453 = state_19429__$1;
(statearr_19435_19453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19430 === (6))){
var inst_19411 = (state_19429[(7)]);
var inst_19416 = p.call(null,inst_19411);
var state_19429__$1 = state_19429;
if(cljs.core.truth_(inst_19416)){
var statearr_19436_19454 = state_19429__$1;
(statearr_19436_19454[(1)] = (8));

} else {
var statearr_19437_19455 = state_19429__$1;
(statearr_19437_19455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19430 === (3))){
var inst_19427 = (state_19429[(2)]);
var state_19429__$1 = state_19429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19429__$1,inst_19427);
} else {
if((state_val_19430 === (2))){
var state_19429__$1 = state_19429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19429__$1,(4),ch);
} else {
if((state_val_19430 === (11))){
var inst_19419 = (state_19429[(2)]);
var state_19429__$1 = state_19429;
var statearr_19438_19456 = state_19429__$1;
(statearr_19438_19456[(2)] = inst_19419);

(statearr_19438_19456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19430 === (9))){
var state_19429__$1 = state_19429;
var statearr_19439_19457 = state_19429__$1;
(statearr_19439_19457[(2)] = null);

(statearr_19439_19457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19430 === (5))){
var inst_19414 = cljs.core.async.close_BANG_.call(null,out);
var state_19429__$1 = state_19429;
var statearr_19440_19458 = state_19429__$1;
(statearr_19440_19458[(2)] = inst_19414);

(statearr_19440_19458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19430 === (10))){
var inst_19422 = (state_19429[(2)]);
var state_19429__$1 = (function (){var statearr_19441 = state_19429;
(statearr_19441[(8)] = inst_19422);

return statearr_19441;
})();
var statearr_19442_19459 = state_19429__$1;
(statearr_19442_19459[(2)] = null);

(statearr_19442_19459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19430 === (8))){
var inst_19411 = (state_19429[(7)]);
var state_19429__$1 = state_19429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19429__$1,(11),out,inst_19411);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_19443 = [null,null,null,null,null,null,null,null,null];
(statearr_19443[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_19443[(1)] = (1));

return statearr_19443;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_19429){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19444){var ex__17851__auto__ = e19444;
var statearr_19445_19460 = state_19429;
(statearr_19445_19460[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19429[(4)]))){
var statearr_19446_19461 = state_19429;
(statearr_19446_19461[(1)] = cljs.core.first.call(null,(state_19429[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19462 = state_19429;
state_19429 = G__19462;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_19429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_19429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19447 = f__17922__auto__.call(null);
(statearr_19447[(6)] = c__17921__auto___19449);

return statearr_19447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19464 = arguments.length;
switch (G__19464) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19527){
var state_val_19528 = (state_19527[(1)]);
if((state_val_19528 === (7))){
var inst_19523 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19529_19568 = state_19527__$1;
(statearr_19529_19568[(2)] = inst_19523);

(statearr_19529_19568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (20))){
var inst_19493 = (state_19527[(7)]);
var inst_19504 = (state_19527[(2)]);
var inst_19505 = cljs.core.next.call(null,inst_19493);
var inst_19479 = inst_19505;
var inst_19480 = null;
var inst_19481 = (0);
var inst_19482 = (0);
var state_19527__$1 = (function (){var statearr_19530 = state_19527;
(statearr_19530[(8)] = inst_19504);

(statearr_19530[(9)] = inst_19479);

(statearr_19530[(10)] = inst_19480);

(statearr_19530[(11)] = inst_19481);

(statearr_19530[(12)] = inst_19482);

return statearr_19530;
})();
var statearr_19531_19569 = state_19527__$1;
(statearr_19531_19569[(2)] = null);

(statearr_19531_19569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (1))){
var state_19527__$1 = state_19527;
var statearr_19532_19570 = state_19527__$1;
(statearr_19532_19570[(2)] = null);

(statearr_19532_19570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (4))){
var inst_19468 = (state_19527[(13)]);
var inst_19468__$1 = (state_19527[(2)]);
var inst_19469 = (inst_19468__$1 == null);
var state_19527__$1 = (function (){var statearr_19533 = state_19527;
(statearr_19533[(13)] = inst_19468__$1);

return statearr_19533;
})();
if(cljs.core.truth_(inst_19469)){
var statearr_19534_19571 = state_19527__$1;
(statearr_19534_19571[(1)] = (5));

} else {
var statearr_19535_19572 = state_19527__$1;
(statearr_19535_19572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (15))){
var state_19527__$1 = state_19527;
var statearr_19539_19573 = state_19527__$1;
(statearr_19539_19573[(2)] = null);

(statearr_19539_19573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (21))){
var state_19527__$1 = state_19527;
var statearr_19540_19574 = state_19527__$1;
(statearr_19540_19574[(2)] = null);

(statearr_19540_19574[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (13))){
var inst_19482 = (state_19527[(12)]);
var inst_19479 = (state_19527[(9)]);
var inst_19480 = (state_19527[(10)]);
var inst_19481 = (state_19527[(11)]);
var inst_19489 = (state_19527[(2)]);
var inst_19490 = (inst_19482 + (1));
var tmp19536 = inst_19480;
var tmp19537 = inst_19481;
var tmp19538 = inst_19479;
var inst_19479__$1 = tmp19538;
var inst_19480__$1 = tmp19536;
var inst_19481__$1 = tmp19537;
var inst_19482__$1 = inst_19490;
var state_19527__$1 = (function (){var statearr_19541 = state_19527;
(statearr_19541[(14)] = inst_19489);

(statearr_19541[(9)] = inst_19479__$1);

(statearr_19541[(10)] = inst_19480__$1);

(statearr_19541[(11)] = inst_19481__$1);

(statearr_19541[(12)] = inst_19482__$1);

return statearr_19541;
})();
var statearr_19542_19575 = state_19527__$1;
(statearr_19542_19575[(2)] = null);

(statearr_19542_19575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (22))){
var state_19527__$1 = state_19527;
var statearr_19543_19576 = state_19527__$1;
(statearr_19543_19576[(2)] = null);

(statearr_19543_19576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (6))){
var inst_19468 = (state_19527[(13)]);
var inst_19477 = f.call(null,inst_19468);
var inst_19478 = cljs.core.seq.call(null,inst_19477);
var inst_19479 = inst_19478;
var inst_19480 = null;
var inst_19481 = (0);
var inst_19482 = (0);
var state_19527__$1 = (function (){var statearr_19544 = state_19527;
(statearr_19544[(9)] = inst_19479);

(statearr_19544[(10)] = inst_19480);

(statearr_19544[(11)] = inst_19481);

(statearr_19544[(12)] = inst_19482);

return statearr_19544;
})();
var statearr_19545_19577 = state_19527__$1;
(statearr_19545_19577[(2)] = null);

(statearr_19545_19577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (17))){
var inst_19493 = (state_19527[(7)]);
var inst_19497 = cljs.core.chunk_first.call(null,inst_19493);
var inst_19498 = cljs.core.chunk_rest.call(null,inst_19493);
var inst_19499 = cljs.core.count.call(null,inst_19497);
var inst_19479 = inst_19498;
var inst_19480 = inst_19497;
var inst_19481 = inst_19499;
var inst_19482 = (0);
var state_19527__$1 = (function (){var statearr_19546 = state_19527;
(statearr_19546[(9)] = inst_19479);

(statearr_19546[(10)] = inst_19480);

(statearr_19546[(11)] = inst_19481);

(statearr_19546[(12)] = inst_19482);

return statearr_19546;
})();
var statearr_19547_19578 = state_19527__$1;
(statearr_19547_19578[(2)] = null);

(statearr_19547_19578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (3))){
var inst_19525 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19527__$1,inst_19525);
} else {
if((state_val_19528 === (12))){
var inst_19513 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19548_19579 = state_19527__$1;
(statearr_19548_19579[(2)] = inst_19513);

(statearr_19548_19579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (2))){
var state_19527__$1 = state_19527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19527__$1,(4),in$);
} else {
if((state_val_19528 === (23))){
var inst_19521 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19549_19580 = state_19527__$1;
(statearr_19549_19580[(2)] = inst_19521);

(statearr_19549_19580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (19))){
var inst_19508 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19550_19581 = state_19527__$1;
(statearr_19550_19581[(2)] = inst_19508);

(statearr_19550_19581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (11))){
var inst_19479 = (state_19527[(9)]);
var inst_19493 = (state_19527[(7)]);
var inst_19493__$1 = cljs.core.seq.call(null,inst_19479);
var state_19527__$1 = (function (){var statearr_19551 = state_19527;
(statearr_19551[(7)] = inst_19493__$1);

return statearr_19551;
})();
if(inst_19493__$1){
var statearr_19552_19582 = state_19527__$1;
(statearr_19552_19582[(1)] = (14));

} else {
var statearr_19553_19583 = state_19527__$1;
(statearr_19553_19583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (9))){
var inst_19515 = (state_19527[(2)]);
var inst_19516 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19527__$1 = (function (){var statearr_19554 = state_19527;
(statearr_19554[(15)] = inst_19515);

return statearr_19554;
})();
if(cljs.core.truth_(inst_19516)){
var statearr_19555_19584 = state_19527__$1;
(statearr_19555_19584[(1)] = (21));

} else {
var statearr_19556_19585 = state_19527__$1;
(statearr_19556_19585[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (5))){
var inst_19471 = cljs.core.async.close_BANG_.call(null,out);
var state_19527__$1 = state_19527;
var statearr_19557_19586 = state_19527__$1;
(statearr_19557_19586[(2)] = inst_19471);

(statearr_19557_19586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (14))){
var inst_19493 = (state_19527[(7)]);
var inst_19495 = cljs.core.chunked_seq_QMARK_.call(null,inst_19493);
var state_19527__$1 = state_19527;
if(inst_19495){
var statearr_19558_19587 = state_19527__$1;
(statearr_19558_19587[(1)] = (17));

} else {
var statearr_19559_19588 = state_19527__$1;
(statearr_19559_19588[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (16))){
var inst_19511 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19560_19589 = state_19527__$1;
(statearr_19560_19589[(2)] = inst_19511);

(statearr_19560_19589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (10))){
var inst_19480 = (state_19527[(10)]);
var inst_19482 = (state_19527[(12)]);
var inst_19487 = cljs.core._nth.call(null,inst_19480,inst_19482);
var state_19527__$1 = state_19527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19527__$1,(13),out,inst_19487);
} else {
if((state_val_19528 === (18))){
var inst_19493 = (state_19527[(7)]);
var inst_19502 = cljs.core.first.call(null,inst_19493);
var state_19527__$1 = state_19527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19527__$1,(20),out,inst_19502);
} else {
if((state_val_19528 === (8))){
var inst_19482 = (state_19527[(12)]);
var inst_19481 = (state_19527[(11)]);
var inst_19484 = (inst_19482 < inst_19481);
var inst_19485 = inst_19484;
var state_19527__$1 = state_19527;
if(cljs.core.truth_(inst_19485)){
var statearr_19561_19590 = state_19527__$1;
(statearr_19561_19590[(1)] = (10));

} else {
var statearr_19562_19591 = state_19527__$1;
(statearr_19562_19591[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17848__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17848__auto____0 = (function (){
var statearr_19563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19563[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17848__auto__);

(statearr_19563[(1)] = (1));

return statearr_19563;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17848__auto____1 = (function (state_19527){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19564){var ex__17851__auto__ = e19564;
var statearr_19565_19592 = state_19527;
(statearr_19565_19592[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19527[(4)]))){
var statearr_19566_19593 = state_19527;
(statearr_19566_19593[(1)] = cljs.core.first.call(null,(state_19527[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19594 = state_19527;
state_19527 = G__19594;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17848__auto__ = function(state_19527){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17848__auto____1.call(this,state_19527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17848__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17848__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19567 = f__17922__auto__.call(null);
(statearr_19567[(6)] = c__17921__auto__);

return statearr_19567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));

return c__17921__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19596 = arguments.length;
switch (G__19596) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19599 = arguments.length;
switch (G__19599) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19602 = arguments.length;
switch (G__19602) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17921__auto___19650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19626){
var state_val_19627 = (state_19626[(1)]);
if((state_val_19627 === (7))){
var inst_19621 = (state_19626[(2)]);
var state_19626__$1 = state_19626;
var statearr_19628_19651 = state_19626__$1;
(statearr_19628_19651[(2)] = inst_19621);

(statearr_19628_19651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19627 === (1))){
var inst_19603 = null;
var state_19626__$1 = (function (){var statearr_19629 = state_19626;
(statearr_19629[(7)] = inst_19603);

return statearr_19629;
})();
var statearr_19630_19652 = state_19626__$1;
(statearr_19630_19652[(2)] = null);

(statearr_19630_19652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19627 === (4))){
var inst_19606 = (state_19626[(8)]);
var inst_19606__$1 = (state_19626[(2)]);
var inst_19607 = (inst_19606__$1 == null);
var inst_19608 = cljs.core.not.call(null,inst_19607);
var state_19626__$1 = (function (){var statearr_19631 = state_19626;
(statearr_19631[(8)] = inst_19606__$1);

return statearr_19631;
})();
if(inst_19608){
var statearr_19632_19653 = state_19626__$1;
(statearr_19632_19653[(1)] = (5));

} else {
var statearr_19633_19654 = state_19626__$1;
(statearr_19633_19654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19627 === (6))){
var state_19626__$1 = state_19626;
var statearr_19634_19655 = state_19626__$1;
(statearr_19634_19655[(2)] = null);

(statearr_19634_19655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19627 === (3))){
var inst_19623 = (state_19626[(2)]);
var inst_19624 = cljs.core.async.close_BANG_.call(null,out);
var state_19626__$1 = (function (){var statearr_19635 = state_19626;
(statearr_19635[(9)] = inst_19623);

return statearr_19635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19626__$1,inst_19624);
} else {
if((state_val_19627 === (2))){
var state_19626__$1 = state_19626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19626__$1,(4),ch);
} else {
if((state_val_19627 === (11))){
var inst_19606 = (state_19626[(8)]);
var inst_19615 = (state_19626[(2)]);
var inst_19603 = inst_19606;
var state_19626__$1 = (function (){var statearr_19636 = state_19626;
(statearr_19636[(10)] = inst_19615);

(statearr_19636[(7)] = inst_19603);

return statearr_19636;
})();
var statearr_19637_19656 = state_19626__$1;
(statearr_19637_19656[(2)] = null);

(statearr_19637_19656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19627 === (9))){
var inst_19606 = (state_19626[(8)]);
var state_19626__$1 = state_19626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19626__$1,(11),out,inst_19606);
} else {
if((state_val_19627 === (5))){
var inst_19606 = (state_19626[(8)]);
var inst_19603 = (state_19626[(7)]);
var inst_19610 = cljs.core._EQ_.call(null,inst_19606,inst_19603);
var state_19626__$1 = state_19626;
if(inst_19610){
var statearr_19639_19657 = state_19626__$1;
(statearr_19639_19657[(1)] = (8));

} else {
var statearr_19640_19658 = state_19626__$1;
(statearr_19640_19658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19627 === (10))){
var inst_19618 = (state_19626[(2)]);
var state_19626__$1 = state_19626;
var statearr_19641_19659 = state_19626__$1;
(statearr_19641_19659[(2)] = inst_19618);

(statearr_19641_19659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19627 === (8))){
var inst_19603 = (state_19626[(7)]);
var tmp19638 = inst_19603;
var inst_19603__$1 = tmp19638;
var state_19626__$1 = (function (){var statearr_19642 = state_19626;
(statearr_19642[(7)] = inst_19603__$1);

return statearr_19642;
})();
var statearr_19643_19660 = state_19626__$1;
(statearr_19643_19660[(2)] = null);

(statearr_19643_19660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_19644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19644[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_19644[(1)] = (1));

return statearr_19644;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_19626){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19645){var ex__17851__auto__ = e19645;
var statearr_19646_19661 = state_19626;
(statearr_19646_19661[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19626[(4)]))){
var statearr_19647_19662 = state_19626;
(statearr_19647_19662[(1)] = cljs.core.first.call(null,(state_19626[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19663 = state_19626;
state_19626 = G__19663;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_19626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_19626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19648 = f__17922__auto__.call(null);
(statearr_19648[(6)] = c__17921__auto___19650);

return statearr_19648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19665 = arguments.length;
switch (G__19665) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17921__auto___19732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19703){
var state_val_19704 = (state_19703[(1)]);
if((state_val_19704 === (7))){
var inst_19699 = (state_19703[(2)]);
var state_19703__$1 = state_19703;
var statearr_19705_19733 = state_19703__$1;
(statearr_19705_19733[(2)] = inst_19699);

(statearr_19705_19733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (1))){
var inst_19666 = (new Array(n));
var inst_19667 = inst_19666;
var inst_19668 = (0);
var state_19703__$1 = (function (){var statearr_19706 = state_19703;
(statearr_19706[(7)] = inst_19667);

(statearr_19706[(8)] = inst_19668);

return statearr_19706;
})();
var statearr_19707_19734 = state_19703__$1;
(statearr_19707_19734[(2)] = null);

(statearr_19707_19734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (4))){
var inst_19671 = (state_19703[(9)]);
var inst_19671__$1 = (state_19703[(2)]);
var inst_19672 = (inst_19671__$1 == null);
var inst_19673 = cljs.core.not.call(null,inst_19672);
var state_19703__$1 = (function (){var statearr_19708 = state_19703;
(statearr_19708[(9)] = inst_19671__$1);

return statearr_19708;
})();
if(inst_19673){
var statearr_19709_19735 = state_19703__$1;
(statearr_19709_19735[(1)] = (5));

} else {
var statearr_19710_19736 = state_19703__$1;
(statearr_19710_19736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (15))){
var inst_19693 = (state_19703[(2)]);
var state_19703__$1 = state_19703;
var statearr_19711_19737 = state_19703__$1;
(statearr_19711_19737[(2)] = inst_19693);

(statearr_19711_19737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (13))){
var state_19703__$1 = state_19703;
var statearr_19712_19738 = state_19703__$1;
(statearr_19712_19738[(2)] = null);

(statearr_19712_19738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (6))){
var inst_19668 = (state_19703[(8)]);
var inst_19689 = (inst_19668 > (0));
var state_19703__$1 = state_19703;
if(cljs.core.truth_(inst_19689)){
var statearr_19713_19739 = state_19703__$1;
(statearr_19713_19739[(1)] = (12));

} else {
var statearr_19714_19740 = state_19703__$1;
(statearr_19714_19740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (3))){
var inst_19701 = (state_19703[(2)]);
var state_19703__$1 = state_19703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19703__$1,inst_19701);
} else {
if((state_val_19704 === (12))){
var inst_19667 = (state_19703[(7)]);
var inst_19691 = cljs.core.vec.call(null,inst_19667);
var state_19703__$1 = state_19703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19703__$1,(15),out,inst_19691);
} else {
if((state_val_19704 === (2))){
var state_19703__$1 = state_19703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19703__$1,(4),ch);
} else {
if((state_val_19704 === (11))){
var inst_19683 = (state_19703[(2)]);
var inst_19684 = (new Array(n));
var inst_19667 = inst_19684;
var inst_19668 = (0);
var state_19703__$1 = (function (){var statearr_19715 = state_19703;
(statearr_19715[(10)] = inst_19683);

(statearr_19715[(7)] = inst_19667);

(statearr_19715[(8)] = inst_19668);

return statearr_19715;
})();
var statearr_19716_19741 = state_19703__$1;
(statearr_19716_19741[(2)] = null);

(statearr_19716_19741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (9))){
var inst_19667 = (state_19703[(7)]);
var inst_19681 = cljs.core.vec.call(null,inst_19667);
var state_19703__$1 = state_19703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19703__$1,(11),out,inst_19681);
} else {
if((state_val_19704 === (5))){
var inst_19667 = (state_19703[(7)]);
var inst_19668 = (state_19703[(8)]);
var inst_19671 = (state_19703[(9)]);
var inst_19676 = (state_19703[(11)]);
var inst_19675 = (inst_19667[inst_19668] = inst_19671);
var inst_19676__$1 = (inst_19668 + (1));
var inst_19677 = (inst_19676__$1 < n);
var state_19703__$1 = (function (){var statearr_19717 = state_19703;
(statearr_19717[(12)] = inst_19675);

(statearr_19717[(11)] = inst_19676__$1);

return statearr_19717;
})();
if(cljs.core.truth_(inst_19677)){
var statearr_19718_19742 = state_19703__$1;
(statearr_19718_19742[(1)] = (8));

} else {
var statearr_19719_19743 = state_19703__$1;
(statearr_19719_19743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (14))){
var inst_19696 = (state_19703[(2)]);
var inst_19697 = cljs.core.async.close_BANG_.call(null,out);
var state_19703__$1 = (function (){var statearr_19721 = state_19703;
(statearr_19721[(13)] = inst_19696);

return statearr_19721;
})();
var statearr_19722_19744 = state_19703__$1;
(statearr_19722_19744[(2)] = inst_19697);

(statearr_19722_19744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (10))){
var inst_19687 = (state_19703[(2)]);
var state_19703__$1 = state_19703;
var statearr_19723_19745 = state_19703__$1;
(statearr_19723_19745[(2)] = inst_19687);

(statearr_19723_19745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19704 === (8))){
var inst_19667 = (state_19703[(7)]);
var inst_19676 = (state_19703[(11)]);
var tmp19720 = inst_19667;
var inst_19667__$1 = tmp19720;
var inst_19668 = inst_19676;
var state_19703__$1 = (function (){var statearr_19724 = state_19703;
(statearr_19724[(7)] = inst_19667__$1);

(statearr_19724[(8)] = inst_19668);

return statearr_19724;
})();
var statearr_19725_19746 = state_19703__$1;
(statearr_19725_19746[(2)] = null);

(statearr_19725_19746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_19726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19726[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_19726[(1)] = (1));

return statearr_19726;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_19703){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19727){var ex__17851__auto__ = e19727;
var statearr_19728_19747 = state_19703;
(statearr_19728_19747[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19703[(4)]))){
var statearr_19729_19748 = state_19703;
(statearr_19729_19748[(1)] = cljs.core.first.call(null,(state_19703[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19749 = state_19703;
state_19703 = G__19749;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_19703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_19703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19730 = f__17922__auto__.call(null);
(statearr_19730[(6)] = c__17921__auto___19732);

return statearr_19730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19751 = arguments.length;
switch (G__19751) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17921__auto___19829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17922__auto__ = (function (){var switch__17847__auto__ = (function (state_19796){
var state_val_19797 = (state_19796[(1)]);
if((state_val_19797 === (7))){
var inst_19792 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19798_19830 = state_19796__$1;
(statearr_19798_19830[(2)] = inst_19792);

(statearr_19798_19830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (1))){
var inst_19752 = [];
var inst_19753 = inst_19752;
var inst_19754 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19796__$1 = (function (){var statearr_19799 = state_19796;
(statearr_19799[(7)] = inst_19753);

(statearr_19799[(8)] = inst_19754);

return statearr_19799;
})();
var statearr_19800_19831 = state_19796__$1;
(statearr_19800_19831[(2)] = null);

(statearr_19800_19831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (4))){
var inst_19757 = (state_19796[(9)]);
var inst_19757__$1 = (state_19796[(2)]);
var inst_19758 = (inst_19757__$1 == null);
var inst_19759 = cljs.core.not.call(null,inst_19758);
var state_19796__$1 = (function (){var statearr_19801 = state_19796;
(statearr_19801[(9)] = inst_19757__$1);

return statearr_19801;
})();
if(inst_19759){
var statearr_19802_19832 = state_19796__$1;
(statearr_19802_19832[(1)] = (5));

} else {
var statearr_19803_19833 = state_19796__$1;
(statearr_19803_19833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (15))){
var inst_19753 = (state_19796[(7)]);
var inst_19784 = cljs.core.vec.call(null,inst_19753);
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19796__$1,(18),out,inst_19784);
} else {
if((state_val_19797 === (13))){
var inst_19779 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19804_19834 = state_19796__$1;
(statearr_19804_19834[(2)] = inst_19779);

(statearr_19804_19834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (6))){
var inst_19753 = (state_19796[(7)]);
var inst_19781 = inst_19753.length;
var inst_19782 = (inst_19781 > (0));
var state_19796__$1 = state_19796;
if(cljs.core.truth_(inst_19782)){
var statearr_19805_19835 = state_19796__$1;
(statearr_19805_19835[(1)] = (15));

} else {
var statearr_19806_19836 = state_19796__$1;
(statearr_19806_19836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (17))){
var inst_19789 = (state_19796[(2)]);
var inst_19790 = cljs.core.async.close_BANG_.call(null,out);
var state_19796__$1 = (function (){var statearr_19807 = state_19796;
(statearr_19807[(10)] = inst_19789);

return statearr_19807;
})();
var statearr_19808_19837 = state_19796__$1;
(statearr_19808_19837[(2)] = inst_19790);

(statearr_19808_19837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (3))){
var inst_19794 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19796__$1,inst_19794);
} else {
if((state_val_19797 === (12))){
var inst_19753 = (state_19796[(7)]);
var inst_19772 = cljs.core.vec.call(null,inst_19753);
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19796__$1,(14),out,inst_19772);
} else {
if((state_val_19797 === (2))){
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19796__$1,(4),ch);
} else {
if((state_val_19797 === (11))){
var inst_19753 = (state_19796[(7)]);
var inst_19757 = (state_19796[(9)]);
var inst_19761 = (state_19796[(11)]);
var inst_19769 = inst_19753.push(inst_19757);
var tmp19809 = inst_19753;
var inst_19753__$1 = tmp19809;
var inst_19754 = inst_19761;
var state_19796__$1 = (function (){var statearr_19810 = state_19796;
(statearr_19810[(12)] = inst_19769);

(statearr_19810[(7)] = inst_19753__$1);

(statearr_19810[(8)] = inst_19754);

return statearr_19810;
})();
var statearr_19811_19838 = state_19796__$1;
(statearr_19811_19838[(2)] = null);

(statearr_19811_19838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (9))){
var inst_19754 = (state_19796[(8)]);
var inst_19765 = cljs.core.keyword_identical_QMARK_.call(null,inst_19754,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19796__$1 = state_19796;
var statearr_19812_19839 = state_19796__$1;
(statearr_19812_19839[(2)] = inst_19765);

(statearr_19812_19839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (5))){
var inst_19757 = (state_19796[(9)]);
var inst_19761 = (state_19796[(11)]);
var inst_19754 = (state_19796[(8)]);
var inst_19762 = (state_19796[(13)]);
var inst_19761__$1 = f.call(null,inst_19757);
var inst_19762__$1 = cljs.core._EQ_.call(null,inst_19761__$1,inst_19754);
var state_19796__$1 = (function (){var statearr_19813 = state_19796;
(statearr_19813[(11)] = inst_19761__$1);

(statearr_19813[(13)] = inst_19762__$1);

return statearr_19813;
})();
if(inst_19762__$1){
var statearr_19814_19840 = state_19796__$1;
(statearr_19814_19840[(1)] = (8));

} else {
var statearr_19815_19841 = state_19796__$1;
(statearr_19815_19841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (14))){
var inst_19757 = (state_19796[(9)]);
var inst_19761 = (state_19796[(11)]);
var inst_19774 = (state_19796[(2)]);
var inst_19775 = [];
var inst_19776 = inst_19775.push(inst_19757);
var inst_19753 = inst_19775;
var inst_19754 = inst_19761;
var state_19796__$1 = (function (){var statearr_19816 = state_19796;
(statearr_19816[(14)] = inst_19774);

(statearr_19816[(15)] = inst_19776);

(statearr_19816[(7)] = inst_19753);

(statearr_19816[(8)] = inst_19754);

return statearr_19816;
})();
var statearr_19817_19842 = state_19796__$1;
(statearr_19817_19842[(2)] = null);

(statearr_19817_19842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (16))){
var state_19796__$1 = state_19796;
var statearr_19818_19843 = state_19796__$1;
(statearr_19818_19843[(2)] = null);

(statearr_19818_19843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (10))){
var inst_19767 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
if(cljs.core.truth_(inst_19767)){
var statearr_19819_19844 = state_19796__$1;
(statearr_19819_19844[(1)] = (11));

} else {
var statearr_19820_19845 = state_19796__$1;
(statearr_19820_19845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (18))){
var inst_19786 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19821_19846 = state_19796__$1;
(statearr_19821_19846[(2)] = inst_19786);

(statearr_19821_19846[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19797 === (8))){
var inst_19762 = (state_19796[(13)]);
var state_19796__$1 = state_19796;
var statearr_19822_19847 = state_19796__$1;
(statearr_19822_19847[(2)] = inst_19762);

(statearr_19822_19847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__17848__auto__ = null;
var cljs$core$async$state_machine__17848__auto____0 = (function (){
var statearr_19823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19823[(0)] = cljs$core$async$state_machine__17848__auto__);

(statearr_19823[(1)] = (1));

return statearr_19823;
});
var cljs$core$async$state_machine__17848__auto____1 = (function (state_19796){
while(true){
var ret_value__17849__auto__ = (function (){try{while(true){
var result__17850__auto__ = switch__17847__auto__.call(null,state_19796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17850__auto__;
}
break;
}
}catch (e19824){var ex__17851__auto__ = e19824;
var statearr_19825_19848 = state_19796;
(statearr_19825_19848[(2)] = ex__17851__auto__);


if(cljs.core.seq.call(null,(state_19796[(4)]))){
var statearr_19826_19849 = state_19796;
(statearr_19826_19849[(1)] = cljs.core.first.call(null,(state_19796[(4)])));

} else {
throw ex__17851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19850 = state_19796;
state_19796 = G__19850;
continue;
} else {
return ret_value__17849__auto__;
}
break;
}
});
cljs$core$async$state_machine__17848__auto__ = function(state_19796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17848__auto____1.call(this,state_19796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17848__auto____0;
cljs$core$async$state_machine__17848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17848__auto____1;
return cljs$core$async$state_machine__17848__auto__;
})()
})();
var state__17923__auto__ = (function (){var statearr_19827 = f__17922__auto__.call(null);
(statearr_19827[(6)] = c__17921__auto___19829);

return statearr_19827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17923__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
