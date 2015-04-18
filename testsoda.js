function Soda(stdlib, foreign, buffer) {
"use asm";
var MathImul = stdlib.Math.imul;
var HEAP32 = new stdlib.Int32Array(buffer);
var HEAPD64 = new stdlib.Float64Array(buffer);
var numSprites = 0;
var core = 0;
var missle1 = 0;
var missle1Active = 0;
var timeout = 0;
function newSprite(x,y,w,h,topLeftX,topLeftY,bottomRightX,bottomRightY){
x = +x;
y = +y;
w = +w;
h = +h;
topLeftX = +topLeftX;
topLeftY = +topLeftY;
bottomRightX = +bottomRightX;
bottomRightY = +bottomRightY;
var ret = 0;
ret=(((((8|0))+(((MathImul(HEAP32[(numSprites)>>2],72)|0)|0)))|0)|0)
HEAPD64[((ret|0)+ (0|0))>>3]=+x
HEAPD64[((ret|0)+ (8|0))>>3]=+y
HEAPD64[((ret|0)+ (16|0))>>3]=+w
HEAPD64[((ret|0)+ (24|0))>>3]=+h
HEAPD64[((ret|0)+ (32|0))>>3]=+topLeftX
HEAPD64[((ret|0)+ (40|0))>>3]=+topLeftY
HEAPD64[((ret|0)+ (48|0))>>3]=+bottomRightX
HEAPD64[((ret|0)+ (56|0))>>3]=+bottomRightY
HEAP32[(numSprites)>>2]=((((HEAP32[(numSprites)>>2]|0))+((1|0)))|0)
return (ret)|0;
}
function shootMissleSprite(missle){
missle = missle|0;
HEAPD64[((missle|0)+ (0|0))>>3]=+-2
HEAPD64[((missle|0)+ (8|0))>>3]=+-2
}
function shootMissle(){
if(((missle1Active|0))==((0|0))){
missle1Active=(1|0)
shootMissleSprite((missle1|0));
}
}
function init(){
timeout=(100|0)
core=((newSprite(+0.5,+0.5,+1,+1,+0,+0,+0.5,+0.5)|0)|0)
missle1=((newSprite(+-10,+-10,+0.4,+0.4,+0.5,+0,+1,+0.5)|0)|0)
}
function loop(){
if(((missle1Active|0))==((1|0))){
HEAPD64[((missle1|0)+ (0|0))>>3]=+((+HEAPD64[((missle1|0)+ (0|0))>>3])+(+0.1))
HEAPD64[((missle1|0)+ (8|0))>>3]=+((+HEAPD64[((missle1|0)+ (8|0))>>3])+(+0.1))
}
timeout=((((timeout|0))-((1|0)))|0)
if(((timeout|0))==((0|0))){
timeout=(100|0)
shootMissle();
}
}
return {
newSprite: newSprite,
shootMissleSprite: shootMissleSprite,
shootMissle: shootMissle,
init: init,
loop: loop,
}
}