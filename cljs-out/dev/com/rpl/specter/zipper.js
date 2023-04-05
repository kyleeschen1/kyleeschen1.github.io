// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('com.rpl.specter.zipper');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('clojure.zip');


com.rpl.specter.zipper.zipper_select_STAR_ = (function com$rpl$specter$zipper$zipper_select_STAR_(constructor$,structure,next_fn){
return next_fn.call(null,constructor$.call(null,structure));
});

com.rpl.specter.zipper.zipper_transform_STAR_ = (function com$rpl$specter$zipper$zipper_transform_STAR_(constructor$,structure,next_fn){
return clojure.zip.root.call(null,next_fn.call(null,constructor$.call(null,structure)));
});

com.rpl.specter.zipper.zipper = com.rpl.specter.impl.direct_nav_obj.call(null,(function (constructor$){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.zipper !== 'undefined') && (typeof com.rpl.specter.zipper.t_com$rpl$specter$zipper84980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.zipper.t_com$rpl$specter$zipper84980 = (function (constructor$,meta84981){
this.constructor$ = constructor$;
this.meta84981 = meta84981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84982,meta84981__$1){
var self__ = this;
var _84982__$1 = this;
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84980(self__.constructor$,meta84981__$1));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84982){
var self__ = this;
var _84982__$1 = this;
return self__.meta84981;
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return next_fn.call(null,self__.constructor$.call(null,structure));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return clojure.zip.root.call(null,next_fn.call(null,self__.constructor$.call(null,structure)));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),new cljs.core.Symbol(null,"meta84981","meta84981",1300399761,null)], null);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.cljs$lang$type = true);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.cljs$lang$ctorStr = "com.rpl.specter.zipper/t_com$rpl$specter$zipper84980");

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84980.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.zipper/t_com$rpl$specter$zipper84980");
}));

/**
 * Positional factory function for com.rpl.specter.zipper/t_com$rpl$specter$zipper84980.
 */
com.rpl.specter.zipper.__GT_t_com$rpl$specter$zipper84980 = (function com$rpl$specter$zipper$__GT_t_com$rpl$specter$zipper84980(constructor$__$1,meta84981){
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84980(constructor$__$1,meta84981));
});

}

return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84980(constructor$,null));
}));
com.rpl.specter.zipper.VECTOR_ZIP = com.rpl.specter.zipper.zipper.call(null,clojure.zip.vector_zip);
com.rpl.specter.zipper.SEQ_ZIP = com.rpl.specter.zipper.zipper.call(null,clojure.zip.seq_zip);
com.rpl.specter.zipper.XML_ZIP = com.rpl.specter.zipper.zipper.call(null,clojure.zip.xml_zip);
/**
 * Navigate to the next element in the structure.
 *           If no next element, works like STOP.
 */
com.rpl.specter.zipper.NEXT = com.rpl.specter.comp_paths.call(null,com.rpl.specter.view.call(null,clojure.zip.next),com.rpl.specter.if_path.call(null,clojure.zip.end_QMARK_,com.rpl.specter.STOP,com.rpl.specter.STAY));
com.rpl.specter.zipper.mk_zip_nav = (function com$rpl$specter$zipper$mk_zip_nav(znav){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.zipper !== 'undefined') && (typeof com.rpl.specter.zipper.t_com$rpl$specter$zipper84983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.zipper.t_com$rpl$specter$zipper84983 = (function (znav,meta84984){
this.znav = znav;
this.meta84984 = meta84984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84985,meta84984__$1){
var self__ = this;
var _84985__$1 = this;
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84983(self__.znav,meta84984__$1));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84985){
var self__ = this;
var _84985__$1 = this;
return self__.meta84984;
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
var ret = self__.znav.call(null,structure);
if(cljs.core.truth_(ret)){
return next_fn.call(null,ret);
} else {
return null;
}
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
var ret = self__.znav.call(null,structure);
if(cljs.core.truth_(ret)){
return next_fn.call(null,ret);
} else {
return structure;
}
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"znav","znav",-1587472564,null),new cljs.core.Symbol(null,"meta84984","meta84984",1517205111,null)], null);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.cljs$lang$type = true);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.cljs$lang$ctorStr = "com.rpl.specter.zipper/t_com$rpl$specter$zipper84983");

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84983.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.zipper/t_com$rpl$specter$zipper84983");
}));

/**
 * Positional factory function for com.rpl.specter.zipper/t_com$rpl$specter$zipper84983.
 */
com.rpl.specter.zipper.__GT_t_com$rpl$specter$zipper84983 = (function com$rpl$specter$zipper$mk_zip_nav_$___GT_t_com$rpl$specter$zipper84983(znav__$1,meta84984){
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84983(znav__$1,meta84984));
});

}

return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84983(znav,null));
});
/**
 * Navigate to the element to the right.
 *           If no element there, works like STOP.
 */
com.rpl.specter.zipper.RIGHT = com.rpl.specter.zipper.mk_zip_nav.call(null,clojure.zip.right);
/**
 * Navigate to the element to the left.
 *           If no element there, works like STOP.
 */
com.rpl.specter.zipper.LEFT = com.rpl.specter.zipper.mk_zip_nav.call(null,clojure.zip.left);
com.rpl.specter.zipper.DOWN = com.rpl.specter.zipper.mk_zip_nav.call(null,clojure.zip.down);
com.rpl.specter.zipper.UP = com.rpl.specter.zipper.mk_zip_nav.call(null,clojure.zip.up);
/**
 * Navigate to the previous element.
 *           If this is the first element, works like STOP.
 */
com.rpl.specter.zipper.PREV = com.rpl.specter.zipper.mk_zip_nav.call(null,clojure.zip.prev);
com.rpl.specter.zipper.RIGHTMOST = com.rpl.specter.view.call(null,clojure.zip.rightmost);
com.rpl.specter.zipper.LEFTMOST = com.rpl.specter.view.call(null,clojure.zip.leftmost);
com.rpl.specter.zipper.inner_insert = (function com$rpl$specter$zipper$inner_insert(structure,next_fn,inserter,mover,backer){
var to_insert = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
var inserts = cljs.core.reduce.call(null,(function (z,e){
return mover.call(null,inserter.call(null,z,e));
}),structure,to_insert);
if(cljs.core.truth_(backer)){
return cljs.core.reduce.call(null,(function (z,_){
return backer.call(null,z);
}),inserts,to_insert);
} else {
return inserts;
}
});


com.rpl.specter.zipper.INNER_RIGHT_select_STAR_ = (function com$rpl$specter$zipper$INNER_RIGHT_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.zipper.INNER_RIGHT_transform_STAR_ = (function com$rpl$specter$zipper$INNER_RIGHT_transform_STAR_(structure,next_fn){
return com.rpl.specter.zipper.inner_insert.call(null,structure,next_fn,clojure.zip.insert_right,clojure.zip.right,clojure.zip.left);
});

/**
 * Navigate to the empty subsequence directly to the
 *               right of this element.
 */
com.rpl.specter.zipper.INNER_RIGHT = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.zipper !== 'undefined') && (typeof com.rpl.specter.zipper.t_com$rpl$specter$zipper84986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.zipper.t_com$rpl$specter$zipper84986 = (function (meta84987){
this.meta84987 = meta84987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84988,meta84987__$1){
var self__ = this;
var _84988__$1 = this;
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84986(meta84987__$1));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84988){
var self__ = this;
var _84988__$1 = this;
return self__.meta84987;
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return com.rpl.specter.zipper.inner_insert.call(null,structure,next_fn,clojure.zip.insert_right,clojure.zip.right,clojure.zip.left);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta84987","meta84987",-443192279,null)], null);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.cljs$lang$type = true);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.cljs$lang$ctorStr = "com.rpl.specter.zipper/t_com$rpl$specter$zipper84986");

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84986.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.zipper/t_com$rpl$specter$zipper84986");
}));

/**
 * Positional factory function for com.rpl.specter.zipper/t_com$rpl$specter$zipper84986.
 */
com.rpl.specter.zipper.__GT_t_com$rpl$specter$zipper84986 = (function com$rpl$specter$zipper$__GT_t_com$rpl$specter$zipper84986(meta84987){
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84986(meta84987));
});

}

return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84986(null));
})()
;


com.rpl.specter.zipper.INNER_LEFT_select_STAR_ = (function com$rpl$specter$zipper$INNER_LEFT_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.zipper.INNER_LEFT_transform_STAR_ = (function com$rpl$specter$zipper$INNER_LEFT_transform_STAR_(structure,next_fn){
return com.rpl.specter.zipper.inner_insert.call(null,structure,next_fn,clojure.zip.insert_left,cljs.core.identity,null);
});

/**
 * Navigate to the empty subsequence directly to the
 *               left of this element.
 */
com.rpl.specter.zipper.INNER_LEFT = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.zipper !== 'undefined') && (typeof com.rpl.specter.zipper.t_com$rpl$specter$zipper84989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.zipper.t_com$rpl$specter$zipper84989 = (function (meta84990){
this.meta84990 = meta84990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84991,meta84990__$1){
var self__ = this;
var _84991__$1 = this;
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84989(meta84990__$1));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84991){
var self__ = this;
var _84991__$1 = this;
return self__.meta84990;
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return com.rpl.specter.zipper.inner_insert.call(null,structure,next_fn,clojure.zip.insert_left,cljs.core.identity,null);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta84990","meta84990",1914233492,null)], null);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.cljs$lang$type = true);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.cljs$lang$ctorStr = "com.rpl.specter.zipper/t_com$rpl$specter$zipper84989");

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84989.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.zipper/t_com$rpl$specter$zipper84989");
}));

/**
 * Positional factory function for com.rpl.specter.zipper/t_com$rpl$specter$zipper84989.
 */
com.rpl.specter.zipper.__GT_t_com$rpl$specter$zipper84989 = (function com$rpl$specter$zipper$__GT_t_com$rpl$specter$zipper84989(meta84990){
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84989(meta84990));
});

}

return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84989(null));
})()
;


com.rpl.specter.zipper.NODE_select_STAR_ = (function com$rpl$specter$zipper$NODE_select_STAR_(structure,next_fn){
return next_fn.call(null,clojure.zip.node.call(null,structure));
});

com.rpl.specter.zipper.NODE_transform_STAR_ = (function com$rpl$specter$zipper$NODE_transform_STAR_(structure,next_fn){
return clojure.zip.edit.call(null,structure,next_fn);
});

com.rpl.specter.zipper.NODE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.zipper !== 'undefined') && (typeof com.rpl.specter.zipper.t_com$rpl$specter$zipper84992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.zipper.t_com$rpl$specter$zipper84992 = (function (meta84993){
this.meta84993 = meta84993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84994,meta84993__$1){
var self__ = this;
var _84994__$1 = this;
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84992(meta84993__$1));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84994){
var self__ = this;
var _84994__$1 = this;
return self__.meta84993;
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return next_fn.call(null,clojure.zip.node.call(null,structure));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return clojure.zip.edit.call(null,structure,next_fn);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta84993","meta84993",-1046210703,null)], null);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.cljs$lang$type = true);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.cljs$lang$ctorStr = "com.rpl.specter.zipper/t_com$rpl$specter$zipper84992");

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84992.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.zipper/t_com$rpl$specter$zipper84992");
}));

/**
 * Positional factory function for com.rpl.specter.zipper/t_com$rpl$specter$zipper84992.
 */
com.rpl.specter.zipper.__GT_t_com$rpl$specter$zipper84992 = (function com$rpl$specter$zipper$__GT_t_com$rpl$specter$zipper84992(meta84993){
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84992(meta84993));
});

}

return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84992(null));
})()
;


com.rpl.specter.zipper.NODE_SEQ_select_STAR_ = (function com$rpl$specter$zipper$NODE_SEQ_select_STAR_(structure,next_fn){
return next_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,structure)], null));
});

com.rpl.specter.zipper.NODE_SEQ_transform_STAR_ = (function com$rpl$specter$zipper$NODE_SEQ_transform_STAR_(structure,next_fn){
var to_insert = next_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,structure)], null));
var inserted = cljs.core.reduce.call(null,clojure.zip.insert_left,structure,to_insert);
return clojure.zip.remove.call(null,inserted);
});

/**
 * Navigate to the subsequence containing only
 *               the node currently pointed to. This works just
 *               like srange and can be used to remove elements
 *               from the structure
 */
com.rpl.specter.zipper.NODE_SEQ = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.zipper !== 'undefined') && (typeof com.rpl.specter.zipper.t_com$rpl$specter$zipper84995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.zipper.t_com$rpl$specter$zipper84995 = (function (meta84996){
this.meta84996 = meta84996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84997,meta84996__$1){
var self__ = this;
var _84997__$1 = this;
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84995(meta84996__$1));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84997){
var self__ = this;
var _84997__$1 = this;
return self__.meta84996;
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
return next_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,structure)], null));
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__17382__auto__,vals__17383__auto__,structure,next_fn__17384__auto__){
var self__ = this;
var this__17382__auto____$1 = this;
var next_fn = (function (s__17385__auto__){
return next_fn__17384__auto__.call(null,vals__17383__auto__,s__17385__auto__);
});
var to_insert = next_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,structure)], null));
var inserted = cljs.core.reduce.call(null,clojure.zip.insert_left,structure,to_insert);
return clojure.zip.remove.call(null,inserted);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta84996","meta84996",-319656642,null)], null);
}));

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.cljs$lang$type = true);

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.cljs$lang$ctorStr = "com.rpl.specter.zipper/t_com$rpl$specter$zipper84995");

(com.rpl.specter.zipper.t_com$rpl$specter$zipper84995.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"com.rpl.specter.zipper/t_com$rpl$specter$zipper84995");
}));

/**
 * Positional factory function for com.rpl.specter.zipper/t_com$rpl$specter$zipper84995.
 */
com.rpl.specter.zipper.__GT_t_com$rpl$specter$zipper84995 = (function com$rpl$specter$zipper$__GT_t_com$rpl$specter$zipper84995(meta84996){
return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84995(meta84996));
});

}

return (new com.rpl.specter.zipper.t_com$rpl$specter$zipper84995(null));
})()
;
/**
 * Navigate the zipper to the first element
 *                   in the structure matching predfn. A linear scan
 *                   is done using NEXT to find the element.
 */
com.rpl.specter.zipper.find_first = com.rpl.specter.impl.direct_nav_obj.call(null,(function (predfn){
var p = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,p,(function (){var info__18232__auto__ = com.rpl.specter.zipper.pathcache84998;
var info__18232__auto____$1 = (((info__18232__auto__ == null))?(function (){var info84999 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.if_path,new cljs.core.Var(function(){return com.rpl.specter.if_path;},new cljs.core.Symbol("com.rpl.specter","if-path","com.rpl.specter/if-path",-1592171180,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Like cond-path, but with if semantics.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1385),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"if-path","if-path",314968895,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.if_path)?com.rpl.specter.if_path.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","if-path","s/if-path",314968242,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.zipper.NODE,new cljs.core.Var(function(){return com.rpl.specter.zipper.NODE;},new cljs.core.Symbol("com.rpl.specter.zipper","NODE","com.rpl.specter.zipper/NODE",482797042,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter.zipper","com.rpl.specter.zipper",1676852264,null),new cljs.core.Symbol(null,"NODE","NODE",-2102920799,null),"resources/public/cljs-out/dev/com/rpl/specter/zipper.cljc",13,1,98,98,cljs.core.List.EMPTY,null,(cljs.core.truth_(com.rpl.specter.zipper.NODE)?com.rpl.specter.zipper.NODE.cljs$lang$test:null)])),new cljs.core.Symbol(null,"NODE","NODE",-2102920799,null)),com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),true,(1210),(1214),cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol("s","pred","s/pred",-727014287,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym.call(null,predfn,new cljs.core.Symbol(null,"predfn","predfn",-857503594,null))], null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"predfn","predfn",-857503594,null)))], null),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"resources/public/cljs-out/dev/com/rpl/specter.cljc",(7),(1),(680),(682),cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.zipper.NEXT,new cljs.core.Var(function(){return com.rpl.specter.zipper.NEXT;},new cljs.core.Symbol("com.rpl.specter.zipper","NEXT","com.rpl.specter.zipper/NEXT",1769045078,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter.zipper","com.rpl.specter.zipper",1676852264,null),new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null),"resources/public/cljs-out/dev/com/rpl/specter/zipper.cljc",7,1,24,26,cljs.core.List.EMPTY,"Navigate to the next element in the structure.\n             If no next element, works like STOP.",(cljs.core.truth_(com.rpl.specter.zipper.NEXT)?com.rpl.specter.zipper.NEXT.cljs$lang$test:null)])),new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null)),com.rpl.specter.impl.__GT_LocalSym.call(null,p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NODE","NODE",-2102920799,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"predfn","predfn",-857503594,null))], null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter.zipper",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"predfn","predfn",-857503594,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","if-path","s/if-path",314968242,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NODE","NODE",-2102920799,null),cljs.core.list(new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"predfn","predfn",-857503594,null))], null),new cljs.core.Symbol(null,"NODE","NODE",-2102920799,null),new cljs.core.Symbol("s","pred","s/pred",-727014287,null),new cljs.core.Symbol(null,"predfn","predfn",-857503594,null),new cljs.core.Symbol("s","STAY","s/STAY",1628009147,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.zipper.pathcache84998 = info84999;

return info84999;
})():info__18232__auto__);
var precompiled85000 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18232__auto____$1);
var dynamic_QMARK___18233__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18232__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18233__auto__)){
return precompiled85000.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.if_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.zipper.NODE,com.rpl.specter.pred.call(null,predfn)], null),com.rpl.specter.zipper.NODE,com.rpl.specter.pred,predfn,com.rpl.specter.STAY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.zipper.NEXT,p], null),com.rpl.specter.zipper.NEXT,p], null));
} else {
return precompiled85000;
}
})());

return p;
}));
/**
 * Navigate to every element reachable using calls
 *                   to NEXT
 */
com.rpl.specter.zipper.NEXT_WALK = com.rpl.specter.impl.local_declarepath.call(null);
com.rpl.specter.impl.providepath_STAR_.call(null,com.rpl.specter.zipper.NEXT_WALK,(function (){var info__18232__auto__ = com.rpl.specter.zipper.pathcache85001;
var info__18232__auto____$1 = (((info__18232__auto__ == null))?(function (){var info85002 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.stay_then_continue,new cljs.core.Var(function(){return com.rpl.specter.stay_then_continue;},new cljs.core.Symbol("com.rpl.specter","stay-then-continue","com.rpl.specter/stay-then-continue",2069325743,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Navigates to the current element and then navigates via the provided path.\n   This can be used to implement pre-order traversal.",new cljs.core.Keyword(null,"file","file",-1269645878),"resources/public/cljs-out/dev/com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),(1469),new cljs.core.Keyword(null,"column","column",2078222095),(1),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"stay-then-continue","stay-then-continue",-821769914,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.stay_then_continue)?com.rpl.specter.stay_then_continue.cljs$lang$test:null)], null)),new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.zipper.NEXT,new cljs.core.Var(function(){return com.rpl.specter.zipper.NEXT;},new cljs.core.Symbol("com.rpl.specter.zipper","NEXT","com.rpl.specter.zipper/NEXT",1769045078,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter.zipper","com.rpl.specter.zipper",1676852264,null),new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null),"resources/public/cljs-out/dev/com/rpl/specter/zipper.cljc",7,1,24,26,cljs.core.List.EMPTY,"Navigate to the next element in the structure.\n             If no next element, works like STOP.",(cljs.core.truth_(com.rpl.specter.zipper.NEXT)?com.rpl.specter.zipper.NEXT.cljs$lang$test:null)])),new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null)),com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.zipper.NEXT_WALK,new cljs.core.Var(function(){return com.rpl.specter.zipper.NEXT_WALK;},new cljs.core.Symbol("com.rpl.specter.zipper","NEXT-WALK","com.rpl.specter.zipper/NEXT-WALK",179665908,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter.zipper","com.rpl.specter.zipper",1676852264,null),new cljs.core.Symbol(null,"NEXT-WALK","NEXT-WALK",1612080709,null),"resources/public/cljs-out/dev/com/rpl/specter/zipper.cljc",12,1,131,133,cljs.core.List.EMPTY,"Navigate to every element reachable using calls\n                     to NEXT",(cljs.core.truth_(com.rpl.specter.zipper.NEXT_WALK)?com.rpl.specter.zipper.NEXT_WALK.cljs$lang$test:null)])),new cljs.core.Symbol(null,"NEXT-WALK","NEXT-WALK",1612080709,null))], null),cljs.core.list(new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null),new cljs.core.Symbol(null,"NEXT-WALK","NEXT-WALK",1612080709,null)))], null),"com.rpl.specter.zipper",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","stay-then-continue","s/stay-then-continue",-821770027,null),new cljs.core.Symbol(null,"NEXT","NEXT",-53377017,null),new cljs.core.Symbol(null,"NEXT-WALK","NEXT-WALK",1612080709,null)], null));
com.rpl.specter.zipper.pathcache85001 = info85002;

return info85002;
})():info__18232__auto__);
var precompiled85003 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__18232__auto____$1);
var dynamic_QMARK___18233__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__18232__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___18233__auto__)){
return precompiled85003.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.stay_then_continue,com.rpl.specter.zipper.NEXT,com.rpl.specter.zipper.NEXT_WALK], null));
} else {
return precompiled85003;
}
})());

//# sourceMappingURL=zipper.js.map
