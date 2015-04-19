function Soda(stdlib, foreign, buffer) {
"use asm";
var MathImul = stdlib.Math.imul;
var HEAP32 = new stdlib.Int32Array(buffer);
var HEAPD64 = new stdlib.Float64Array(buffer);
var numSprites = 0;
var userspace = 0;
var core = 0;
var missles = 0;
var misslesActive = 0;
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
function shootMissleSprite(missle,n){
missle = missle|0;
n = n|0;
var active = 0;
missle=((newSprite(+-2,+-2,+0.4,+0.4,+0.5,+0,+1,+0.5)|0)|0)
active=((((misslesActive)+(((MathImul(n,4)|0)|0)))|0)|0)
HEAP32[(active)>>2]=(1|0)
}
function shootMissle(){
var i = 0;
var active = 0;
for(i=(0|0);(((i|0))<((1|0)));i=((((i|0))+((1|0)))|0)){
active=((((misslesActive)+(((MathImul(i,4)|0)|0)))|0)|0)
if(((HEAP32[(active)>>2]|0))==((0|0))){
shootMissleSprite(((((missles|0))+(((MathImul(i,72)|0)|0)))|0),i);
}
}
}
function init(){
userspace=(131072|0)
missles=(80|0)
misslesActive=((((userspace)+(((MathImul(72,32)|0)|0)))|0)|0)
timeout=(100|0)
core=((newSprite(+0.5,+0.5,+1,+1,+0,+0,+0.5,+0.5)|0)|0)
}
function loop(){
var i = 0;
var active = 0;
var missle = 0;
for(i=(0|0);(((i|0))<((1|0)));i=((((i|0))+((1|0)))|0)){
if(((HEAP32[((((misslesActive)+(((MathImul(i,4)|0)|0)))|0))>>2]|0))==((1|0))){
missle=(((((missles|0))+(((MathImul(i,72)|0)|0)))|0)|0)
HEAPD64[((missle|0)+ (0|0))>>3]=+((+HEAPD64[((missle|0)+ (0|0))>>3])+(+0.1))
HEAPD64[((missle|0)+ (8|0))>>3]=+((+HEAPD64[((missle|0)+ (8|0))>>3])+(+0.1))
}
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