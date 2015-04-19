function Soda(stdlib, foreign, buffer) {
"use asm";
var MathImul = stdlib.Math.imul;
var atan2 = stdlib.Math.atan2;
var sin = stdlib.Math.sin;
var cos = stdlib.Math.cos;
var HEAP32 = new stdlib.Int32Array(buffer);
var HEAPD64 = new stdlib.Float64Array(buffer);
var numSprites = 0;
var userspace = 0;
var isTouching = 0;
var touchX = 0;
var touchY = 0;
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
HEAPD64[((ret|0)+ (0|0))>>3]=+(x)
HEAPD64[((ret|0)+ (8|0))>>3]=+(y)
HEAPD64[((ret|0)+ (16|0))>>3]=+(w)
HEAPD64[((ret|0)+ (24|0))>>3]=+(h)
HEAPD64[((ret|0)+ (32|0))>>3]=+(topLeftX)
HEAPD64[((ret|0)+ (40|0))>>3]=+(topLeftY)
HEAPD64[((ret|0)+ (48|0))>>3]=+(bottomRightX)
HEAPD64[((ret|0)+ (56|0))>>3]=+(bottomRightY)
HEAP32[(numSprites)>>2]=((((HEAP32[(numSprites)>>2]|0))+((1|0)))|0)
return (ret)|0;
}
function shootMissleSprite(missle,n){
missle = missle|0;
n = n|0;
var active = 0;
active=((((misslesActive)+(((MathImul(n,4)|0)|0)))|0)|0)
missle=((newSprite(+(-2),+(-2),+(0.4),+(0.4),+(0.5),+(0),+(1),+(0.5))|0)|0)
HEAP32[(active)>>2]=(1|0)
}
function shootMissle(){
var i = 0;
for(i=(0|0);(((i|0))<((16|0)));i=((((i|0))+((1|0)))|0)){
if(((HEAP32[((((misslesActive)+(((MathImul(i,4)|0)|0)))|0))>>2]|0))==((0|0))){
shootMissleSprite(((((missles|0))+(((MathImul(i,72)|0)|0)))|0),i);
break;
}
}
}
function init(){
userspace=(131072|0)
isTouching=(65536|0)
touchX=(65544|0)
touchY=(65552|0)
missles=(80|0)
misslesActive=(userspace|0)
timeout=(10|0)
core=((newSprite(+(0),+(0),+(1),+(1),+(0),+(0),+(0.5),+(0.5))|0)|0)
}
function loop(){
var i = 0;
var missle = 0;
var angle = 0.0;
HEAPD64[((core|0)+ (64|0))>>3]=+(+(((+(3.14159))-(+((+atan2(HEAPD64[(touchY)>>3],HEAPD64[(touchX)>>3])))))))
for(i=(0|0);(((i|0))<((16|0)));i=((((i|0))+((1|0)))|0)){
if(((HEAP32[((((misslesActive)+(((MathImul(i,4)|0)|0)))|0))>>2]|0))==((1|0))){
missle=(((((missles|0))+(((MathImul(i,72)|0)|0)))|0)|0)
angle=+((+atan2(HEAPD64[((missle|0)+ (0|0))>>3],HEAPD64[((missle|0)+ (8|0))>>3])))
HEAPD64[((missle|0)+ (0|0))>>3]=+(((+(HEAPD64[((missle|0)+ (0|0))>>3]))-(+(+(((+((+cos(angle))))*(+(0.05))))))))
HEAPD64[((missle|0)+ (8|0))>>3]=+(((+(HEAPD64[((missle|0)+ (8|0))>>3]))-(+(+(((+((+sin(angle))))*(+(0.05))))))))
}
}
timeout=((((timeout|0))-((1|0)))|0)
if(((timeout|0))==((0|0))){
timeout=(50|0)
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