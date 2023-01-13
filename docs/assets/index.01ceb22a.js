(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rr="145",An={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lo=0,pr=1,Co=2,Va=1,Do=2,oi=3,jn=0,Se=1,ve=2,en=0,qn=1,mr=2,gr=3,_r=4,Ro=5,Hn=100,Po=101,Io=102,xr=103,vr=104,Fo=200,No=201,Oo=202,zo=203,Ha=204,Wa=205,Uo=206,Bo=207,Go=208,ko=209,Vo=210,Ho=0,Wo=1,Xo=2,Ys=3,qo=4,Yo=5,jo=6,Zo=7,ar=0,$o=1,Ko=2,He=0,Jo=1,Qo=2,tl=3,el=4,nl=5,Xa=300,Zn=301,$n=302,js=303,Zs=304,Ki=306,$s=1e3,Le=1001,Ks=1002,ae=1003,Mr=1004,Sr=1005,xe=1006,il=1007,Ji=1008,_n=1009,sl=1010,rl=1011,qa=1012,al=1013,dn=1014,fn=1015,hi=1016,ol=1017,ll=1018,Yn=1020,cl=1021,ul=1022,Re=1023,hl=1024,dl=1025,mn=1026,Kn=1027,fl=1028,pl=1029,ml=1030,gl=1031,_l=1033,cs=33776,us=33777,hs=33778,ds=33779,yr=35840,br=35841,wr=35842,Er=35843,xl=36196,Tr=37492,Ar=37496,Lr=37808,Cr=37809,Dr=37810,Rr=37811,Pr=37812,Ir=37813,Fr=37814,Nr=37815,Or=37816,zr=37817,Ur=37818,Br=37819,Gr=37820,kr=37821,Vr=36492,xn=3e3,kt=3001,vl=3200,Ml=3201,or=0,Sl=1,Ge="srgb",pn="srgb-linear",fs=7680,yl=519,Hr=35044,Wr="300 es",Js=1035;class yn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ps=Math.PI/180,Xr=180/Math.PI;function fi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]+"-"+Qt[t&255]+Qt[t>>8&255]+"-"+Qt[t>>16&15|64]+Qt[t>>24&255]+"-"+Qt[e&63|128]+Qt[e>>8&255]+"-"+Qt[e>>16&255]+Qt[e>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function oe(r,t,e){return Math.max(t,Math.min(e,r))}function bl(r,t){return(r%t+t)%t}function ms(r,t,e){return(1-e)*r+e*t}function qr(r){return(r&r-1)===0&&r!==0}function Qs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bi(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],_=n[8],p=i[0],f=i[3],g=i[6],M=i[1],w=i[4],y=i[7],x=i[2],T=i[5],I=i[8];return s[0]=o*p+a*M+l*x,s[3]=o*f+a*w+l*T,s[6]=o*g+a*y+l*I,s[1]=c*p+u*M+h*x,s[4]=c*f+u*w+h*T,s[7]=c*g+u*y+h*I,s[2]=d*p+m*M+_*x,s[5]=d*f+m*w+_*T,s[8]=d*g+m*y+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,_=e*h+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return t[0]=h*p,t[1]=(i*c-u*n)*p,t[2]=(a*n-i*o)*p,t[3]=d*p,t[4]=(u*e-i*l)*p,t[5]=(i*s-a*e)*p,t[6]=m*p,t[7]=(n*l-c*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=e*s+n*l,i[3]=e*o+n*c,i[6]=e*a+n*u,i[1]=-n*s+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Ya(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function di(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const gs={[Ge]:{[pn]:gn},[pn]:{[Ge]:Yi}},we={legacyMode:!0,get workingColorSpace(){return pn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(gs[t]&&gs[t][e]!==void 0){const n=gs[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={r:0,g:0,b:0},Ee={h:0,s:0,l:0},wi={h:0,s:0,l:0};function _s(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function Ei(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pn){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pn){if(t=bl(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=_s(o,s,t+1/3),this.g=_s(o,s,t),this.b=_s(o,s,t-1/3)}return we.toWorkingColorSpace(this,i),this}setStyle(t,e=Ge){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,we.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,we.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,we.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,we.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Ge){const n=ja[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return we.fromWorkingColorSpace(Ei(this,Zt),t),oe(Zt.r*255,0,255)<<16^oe(Zt.g*255,0,255)<<8^oe(Zt.b*255,0,255)<<0}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pn){we.fromWorkingColorSpace(Ei(this,Zt),e);const n=Zt.r,i=Zt.g,s=Zt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pn){return we.fromWorkingColorSpace(Ei(this,Zt),e),t.r=Zt.r,t.g=Zt.g,t.b=Zt.b,t}getStyle(t=Ge){return we.fromWorkingColorSpace(Ei(this,Zt),t),t!==Ge?`color(${t} ${Zt.r} ${Zt.g} ${Zt.b})`:`rgb(${Zt.r*255|0},${Zt.g*255|0},${Zt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ee),Ee.h+=t,Ee.s+=e,Ee.l+=n,this.setHSL(Ee.h,Ee.s,Ee.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ee),t.getHSL(wi);const n=ms(Ee.h,wi.h,e),i=ms(Ee.s,wi.s,e),s=ms(Ee.l,wi.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}It.NAMES=ja;let Cn;class Za{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cn===void 0&&(Cn=di("canvas")),Cn.width=t.width,Cn.height=t.height;const n=Cn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Cn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=di("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=gn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class $a{constructor(t=null){this.isSource=!0,this.uuid=fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(xs(i[o].image)):s.push(xs(i[o]))}else s=xs(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function xs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Za.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wl=0;class be extends yn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Le,i=Le,s=xe,o=Ji,a=Re,l=_n,c=1,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=fi(),this.name="",this.source=new $a(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $s:t.x=t.x-Math.floor(t.x);break;case Le:t.x=t.x<0?0:1;break;case Ks:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $s:t.y=t.y-Math.floor(t.y);break;case Le:t.y=t.y<0?0:1;break;case Ks:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Xa;class zt{constructor(t=0,e=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],p=l[2],f=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(m+1)/2,x=(g+1)/2,T=(u+d)/4,I=(h+p)/4,v=(_+f)/4;return w>y&&w>x?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=T/n,s=I/n):y>x?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=v/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=I/s,i=v/s),this.set(n,i,s,e),this}let M=Math.sqrt((f-_)*(f-_)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(h-p)/M,this.z=(d-u)/M,this.w=Math.acos((c+m+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vn extends yn{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new zt(0,0,t,e),this.scissorTest=!1,this.viewport=new zt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ka extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ae,this.minFilter=ae,this.wrapR=Le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ae,this.minFilter=ae,this.wrapR=Le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=p;return}if(h!==p||l!==d||c!==m||u!==_){let f=1-a;const g=l*d+c*m+u*_+h*p,M=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const x=Math.sqrt(w),T=Math.atan2(x,g*M);f=Math.sin(f*T)/x,a=Math.sin(a*T)/x}const y=a*M;if(l=l*f+d*y,c=c*f+m*y,u=u*f+_*y,h=h*f+p*y,f===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*m-c*d,t[e+1]=l*_+u*d+c*h-a*m,t[e+2]=c*_+u*m+a*d-l*h,t[e+3]=u*_-a*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),m=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,u=l*n+a*e-s*i,h=l*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vs.copy(this).projectOnVector(t),this.sub(vs)}reflect(t){return this.sub(vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vs=new R,Yr=new Mn;class pi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],d=t[l+2];u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),d=t.getZ(l);u<e&&(e=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)an.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(an)}else n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox),Ms.applyMatrix4(t.matrixWorld),this.union(Ms);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ii),Ti.subVectors(this.max,ii),Dn.subVectors(t.a,ii),Rn.subVectors(t.b,ii),Pn.subVectors(t.c,ii),je.subVectors(Rn,Dn),Ze.subVectors(Pn,Rn),on.subVectors(Dn,Pn);let e=[0,-je.z,je.y,0,-Ze.z,Ze.y,0,-on.z,on.y,je.z,0,-je.x,Ze.z,0,-Ze.x,on.z,0,-on.x,-je.y,je.x,0,-Ze.y,Ze.x,0,-on.y,on.x,0];return!Ss(e,Dn,Rn,Pn,Ti)||(e=[1,0,0,0,1,0,0,0,1],!Ss(e,Dn,Rn,Pn,Ti))?!1:(Ai.crossVectors(je,Ze),e=[Ai.x,Ai.y,Ai.z],Ss(e,Dn,Rn,Pn,Ti))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return an.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(an).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ne[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ne[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ne[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ne[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ne[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ne[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ne[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ne[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ne),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ne=[new R,new R,new R,new R,new R,new R,new R,new R],an=new R,Ms=new pi,Dn=new R,Rn=new R,Pn=new R,je=new R,Ze=new R,on=new R,ii=new R,Ti=new R,Ai=new R,ln=new R;function Ss(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ln.fromArray(r,s);const a=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),l=t.dot(ln),c=e.dot(ln),u=n.dot(ln);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tl=new pi,jr=new R,Li=new R,ys=new R;class Qi{constructor(t=new R,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tl.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(ys.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?Li.set(0,0,1).multiplyScalar(t.radius):Li.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(jr.copy(t.center).add(Li)),this.expandByPoint(jr.copy(t.center).sub(Li)),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oe=new R,bs=new R,Ci=new R,$e=new R,ws=new R,Di=new R,Es=new R;class Ja{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oe.copy(this.direction).multiplyScalar(e).add(this.origin),Oe.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){bs.copy(t).add(e).multiplyScalar(.5),Ci.copy(e).sub(t).normalize(),$e.copy(this.origin).sub(bs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ci),a=$e.dot(this.direction),l=-$e.dot(Ci),c=$e.lengthSq(),u=Math.abs(1-o*o);let h,d,m,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ci).multiplyScalar(d).add(bs),m}intersectSphere(t,e){Oe.subVectors(t.center,this.origin);const n=Oe.dot(this.direction),i=Oe.dot(Oe)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Oe)!==null}intersectTriangle(t,e,n,i,s){ws.subVectors(e,t),Di.subVectors(n,t),Es.crossVectors(ws,Di);let o=this.direction.dot(Es),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$e.subVectors(this.origin,t);const l=a*this.direction.dot(Di.crossVectors($e,Di));if(l<0)return null;const c=a*this.direction.dot(ws.cross($e));if(c<0||l+c>o)return null;const u=-a*$e.dot(Es);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,l,c,u,h,d,m,_,p,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=m,g[7]=_,g[11]=p,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/In.setFromMatrixColumn(t,0).length(),s=1/In.setFromMatrixColumn(t,1).length(),o=1/In.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*h,_=a*u,p=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=d-p*c,e[9]=-a*l,e[2]=p-d*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,_=c*u,p=c*h;e[0]=d+p*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-_,e[6]=p+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,_=c*u,p=c*h;e[0]=d-p*a,e[4]=-o*h,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*u,e[9]=p-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,m=o*h,_=a*u,p=a*h;e[0]=l*u,e[4]=_*c-m,e[8]=d*c+p,e[1]=l*h,e[5]=p*c+d,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,_=a*l,p=a*c;e[0]=l*u,e[4]=p-d*h,e[8]=_*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+_,e[10]=d-p*h}else if(t.order==="XZY"){const d=o*l,m=o*c,_=a*l,p=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+p,e[5]=o*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=a*u,e[10]=p*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Al,t,Ll)}lookAt(t,e,n){const i=this.elements;return he.subVectors(t,e),he.lengthSq()===0&&(he.z=1),he.normalize(),Ke.crossVectors(n,he),Ke.lengthSq()===0&&(Math.abs(n.z)===1?he.x+=1e-4:he.z+=1e-4,he.normalize(),Ke.crossVectors(n,he)),Ke.normalize(),Ri.crossVectors(he,Ke),i[0]=Ke.x,i[4]=Ri.x,i[8]=he.x,i[1]=Ke.y,i[5]=Ri.y,i[9]=he.y,i[2]=Ke.z,i[6]=Ri.z,i[10]=he.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],_=n[2],p=n[6],f=n[10],g=n[14],M=n[3],w=n[7],y=n[11],x=n[15],T=i[0],I=i[4],v=i[8],A=i[12],D=i[1],H=i[5],Q=i[9],z=i[13],P=i[2],G=i[6],j=i[10],$=i[14],k=i[3],F=i[7],U=i[11],K=i[15];return s[0]=o*T+a*D+l*P+c*k,s[4]=o*I+a*H+l*G+c*F,s[8]=o*v+a*Q+l*j+c*U,s[12]=o*A+a*z+l*$+c*K,s[1]=u*T+h*D+d*P+m*k,s[5]=u*I+h*H+d*G+m*F,s[9]=u*v+h*Q+d*j+m*U,s[13]=u*A+h*z+d*$+m*K,s[2]=_*T+p*D+f*P+g*k,s[6]=_*I+p*H+f*G+g*F,s[10]=_*v+p*Q+f*j+g*U,s[14]=_*A+p*z+f*$+g*K,s[3]=M*T+w*D+y*P+x*k,s[7]=M*I+w*H+y*G+x*F,s[11]=M*v+w*Q+y*j+x*U,s[15]=M*A+w*z+y*$+x*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],_=t[3],p=t[7],f=t[11],g=t[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*m-n*l*m)+p*(+e*l*m-e*c*d+s*o*d-i*o*m+i*c*u-s*l*u)+f*(+e*c*h-e*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+g*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],_=t[12],p=t[13],f=t[14],g=t[15],M=h*f*c-p*d*c+p*l*m-a*f*m-h*l*g+a*d*g,w=_*d*c-u*f*c-_*l*m+o*f*m+u*l*g-o*d*g,y=u*p*c-_*h*c+_*a*m-o*p*m-u*a*g+o*h*g,x=_*h*l-u*p*l-_*a*d+o*p*d+u*a*f-o*h*f,T=e*M+n*w+i*y+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/T;return t[0]=M*I,t[1]=(p*d*s-h*f*s-p*i*m+n*f*m+h*i*g-n*d*g)*I,t[2]=(a*f*s-p*l*s+p*i*c-n*f*c-a*i*g+n*l*g)*I,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*m-n*l*m)*I,t[4]=w*I,t[5]=(u*f*s-_*d*s+_*i*m-e*f*m-u*i*g+e*d*g)*I,t[6]=(_*l*s-o*f*s-_*i*c+e*f*c+o*i*g-e*l*g)*I,t[7]=(o*d*s-u*l*s+u*i*c-e*d*c-o*i*m+e*l*m)*I,t[8]=y*I,t[9]=(_*h*s-u*p*s-_*n*m+e*p*m+u*n*g-e*h*g)*I,t[10]=(o*p*s-_*a*s+_*n*c-e*p*c-o*n*g+e*a*g)*I,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*m-e*a*m)*I,t[12]=x*I,t[13]=(u*p*i-_*h*i+_*n*d-e*p*d-u*n*f+e*h*f)*I,t[14]=(_*a*i-o*p*i-_*n*l+e*p*l+o*n*f-e*a*f)*I,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,_=s*h,p=o*u,f=o*h,g=a*h,M=l*c,w=l*u,y=l*h,x=n.x,T=n.y,I=n.z;return i[0]=(1-(p+g))*x,i[1]=(m+y)*x,i[2]=(_-w)*x,i[3]=0,i[4]=(m-y)*T,i[5]=(1-(d+g))*T,i[6]=(f+M)*T,i[7]=0,i[8]=(_+w)*I,i[9]=(f-M)*I,i[10]=(1-(d+p))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=In.set(i[0],i[1],i[2]).length();const o=In.set(i[4],i[5],i[6]).length(),a=In.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Te.copy(this);const c=1/s,u=1/o,h=1/a;return Te.elements[0]*=c,Te.elements[1]*=c,Te.elements[2]*=c,Te.elements[4]*=u,Te.elements[5]*=u,Te.elements[6]*=u,Te.elements[8]*=h,Te.elements[9]*=h,Te.elements[10]*=h,e.setFromRotationMatrix(Te),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,l=1/(e-t),c=1/(n-i),u=1/(o-s),h=(e+t)*l,d=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const In=new R,Te=new Xt,Al=new R(0,0,0),Ll=new R(1,1,1),Ke=new R,Ri=new R,he=new R,Zr=new Xt,$r=new Mn;class mi{constructor(t=0,e=0,n=0,i=mi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $r.setFromEuler(this),this.setFromQuaternion($r,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}mi.DefaultOrder="XYZ";mi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cl=0;const Kr=new R,Fn=new Mn,ze=new Xt,Pi=new R,si=new R,Dl=new R,Rl=new Mn,Jr=new R(1,0,0),Qr=new R(0,1,0),ta=new R(0,0,1),Pl={type:"added"},ea={type:"removed"};class ie extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DefaultUp.clone();const t=new R,e=new mi,n=new Mn,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Me}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ie.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ie.DefaultMatrixWorldAutoUpdate,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fn.setFromAxisAngle(t,e),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(t,e){return Fn.setFromAxisAngle(t,e),this.quaternion.premultiply(Fn),this}rotateX(t){return this.rotateOnAxis(Jr,t)}rotateY(t){return this.rotateOnAxis(Qr,t)}rotateZ(t){return this.rotateOnAxis(ta,t)}translateOnAxis(t,e){return Kr.copy(t).applyQuaternion(this.quaternion),this.position.add(Kr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jr,t)}translateY(t){return this.translateOnAxis(Qr,t)}translateZ(t){return this.translateOnAxis(ta,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(ze.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pi.copy(t):Pi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ze.lookAt(si,Pi,this.up):ze.lookAt(Pi,si,this.up),this.quaternion.setFromRotationMatrix(ze),i&&(ze.extractRotation(i.matrixWorld),Fn.setFromRotationMatrix(ze),this.quaternion.premultiply(Fn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ea)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ea)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(ze),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,t,Dl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,Rl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ie.DefaultUp=new R(0,1,0);ie.DefaultMatrixAutoUpdate=!0;ie.DefaultMatrixWorldAutoUpdate=!0;const Ae=new R,Ue=new R,Ts=new R,Be=new R,Nn=new R,On=new R,na=new R,As=new R,Ls=new R,Cs=new R;class Ve{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ae.subVectors(t,e),i.cross(Ae);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ae.subVectors(i,e),Ue.subVectors(n,e),Ts.subVectors(t,e);const o=Ae.dot(Ae),a=Ae.dot(Ue),l=Ae.dot(Ts),c=Ue.dot(Ue),u=Ue.dot(Ts),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Be),Be.x>=0&&Be.y>=0&&Be.x+Be.y<=1}static getUV(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Be),l.set(0,0),l.addScaledVector(s,Be.x),l.addScaledVector(o,Be.y),l.addScaledVector(a,Be.z),l}static isFrontFacing(t,e,n,i){return Ae.subVectors(n,e),Ue.subVectors(t,e),Ae.cross(Ue).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ae.subVectors(this.c,this.b),Ue.subVectors(this.a,this.b),Ae.cross(Ue).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ve.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Nn.subVectors(i,n),On.subVectors(s,n),As.subVectors(t,n);const l=Nn.dot(As),c=On.dot(As);if(l<=0&&c<=0)return e.copy(n);Ls.subVectors(t,i);const u=Nn.dot(Ls),h=On.dot(Ls);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Nn,o);Cs.subVectors(t,s);const m=Nn.dot(Cs),_=On.dot(Cs);if(_>=0&&m<=_)return e.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(On,a);const f=u*_-m*h;if(f<=0&&h-u>=0&&m-_>=0)return na.subVectors(s,i),a=(h-u)/(h-u+(m-_)),e.copy(i).addScaledVector(na,a);const g=1/(f+p+d);return o=p*g,a=d*g,e.copy(n).addScaledVector(Nn,o).addScaledVector(On,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Il=0;class bn extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=qn,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ha,this.blendDst=Wa,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gi extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yt=new R,Ii=new wt;class Pe{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Hr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ii.fromBufferAttribute(this,e),Ii.applyMatrix3(t),this.setXY(e,Ii.x,Ii.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix3(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix4(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyNormalMatrix(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.transformDirection(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class to extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eo extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fl=0;const _e=new Xt,Ds=new ie,zn=new R,de=new pi,ri=new pi,Jt=new R;class Ie extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ya(t)?eo:to)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Me().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _e.makeRotationFromQuaternion(t),this.applyMatrix4(_e),this}rotateX(t){return _e.makeRotationX(t),this.applyMatrix4(_e),this}rotateY(t){return _e.makeRotationY(t),this.applyMatrix4(_e),this}rotateZ(t){return _e.makeRotationZ(t),this.applyMatrix4(_e),this}translate(t,e,n){return _e.makeTranslation(t,e,n),this.applyMatrix4(_e),this}scale(t,e,n){return _e.makeScale(t,e,n),this.applyMatrix4(_e),this}lookAt(t){return Ds.lookAt(t),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];de.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,de.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,de.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(de.min),this.boundingBox.expandByPoint(de.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(de.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(de.min,ri.min),de.expandByPoint(Jt),Jt.addVectors(de.max,ri.max),de.expandByPoint(Jt)):(de.expandByPoint(ri.min),de.expandByPoint(ri.max))}de.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Jt.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Jt));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(zn.fromBufferAttribute(t,c),Jt.add(zn)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new R,u[D]=new R;const h=new R,d=new R,m=new R,_=new wt,p=new wt,f=new wt,g=new R,M=new R;function w(D,H,Q){h.fromArray(i,D*3),d.fromArray(i,H*3),m.fromArray(i,Q*3),_.fromArray(o,D*2),p.fromArray(o,H*2),f.fromArray(o,Q*2),d.sub(h),m.sub(h),p.sub(_),f.sub(_);const z=1/(p.x*f.y-f.x*p.y);!isFinite(z)||(g.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(z),M.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(z),c[D].add(g),c[H].add(g),c[Q].add(g),u[D].add(M),u[H].add(M),u[Q].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,H=y.length;D<H;++D){const Q=y[D],z=Q.start,P=Q.count;for(let G=z,j=z+P;G<j;G+=3)w(n[G+0],n[G+1],n[G+2])}const x=new R,T=new R,I=new R,v=new R;function A(D){I.fromArray(s,D*3),v.copy(I);const H=c[D];x.copy(H),x.sub(I.multiplyScalar(I.dot(H))).normalize(),T.crossVectors(v,H);const z=T.dot(u[D])<0?-1:1;l[D*4]=x.x,l[D*4+1]=x.y,l[D*4+2]=x.z,l[D*4+3]=z}for(let D=0,H=y.length;D<H;++D){const Q=y[D],z=Q.start,P=Q.count;for(let G=z,j=z+P;G<j;G+=3)A(n[G+0]),A(n[G+1]),A(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),p=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,f),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Jt.fromBufferAttribute(t,e),Jt.normalize(),t.setXYZ(e,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let g=0;g<u;g++)d[_++]=c[m++]}return new Pe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ia=new Xt,Un=new Ja,Rs=new Qi,Je=new R,Qe=new R,tn=new R,Ps=new R,Is=new R,Fs=new R,Fi=new R,Ni=new R,Oi=new R,zi=new wt,Ui=new wt,Bi=new wt,Ns=new R,Gi=new R;class pe extends ie{constructor(t=new Ie,e=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),t.ray.intersectsSphere(Rs)===!1)||(ia.copy(s).invert(),Un.copy(t.ray).applyMatrix4(ia),n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const g=m[p],M=i[g.materialIndex],w=Math.max(g.start,_.start),y=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let x=w,T=y;x<T;x+=3){const I=a.getX(x),v=a.getX(x+1),A=a.getX(x+2);o=ki(this,M,t,Un,l,c,u,h,d,I,v,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=g.materialIndex,e.push(o))}}else{const p=Math.max(0,_.start),f=Math.min(a.count,_.start+_.count);for(let g=p,M=f;g<M;g+=3){const w=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);o=ki(this,i,t,Un,l,c,u,h,d,w,y,x),o&&(o.faceIndex=Math.floor(g/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const g=m[p],M=i[g.materialIndex],w=Math.max(g.start,_.start),y=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let x=w,T=y;x<T;x+=3){const I=x,v=x+1,A=x+2;o=ki(this,M,t,Un,l,c,u,h,d,I,v,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=g.materialIndex,e.push(o))}}else{const p=Math.max(0,_.start),f=Math.min(l.count,_.start+_.count);for(let g=p,M=f;g<M;g+=3){const w=g,y=g+1,x=g+2;o=ki(this,i,t,Un,l,c,u,h,d,w,y,x),o&&(o.faceIndex=Math.floor(g/3),e.push(o))}}}}function Nl(r,t,e,n,i,s,o,a){let l;if(t.side===Se?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side!==ve,a),l===null)return null;Gi.copy(a),Gi.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Gi);return c<e.near||c>e.far?null:{distance:c,point:Gi.clone(),object:r}}function ki(r,t,e,n,i,s,o,a,l,c,u,h){Je.fromBufferAttribute(i,c),Qe.fromBufferAttribute(i,u),tn.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){Fi.set(0,0,0),Ni.set(0,0,0),Oi.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const f=d[_],g=s[_];f!==0&&(Ps.fromBufferAttribute(g,c),Is.fromBufferAttribute(g,u),Fs.fromBufferAttribute(g,h),o?(Fi.addScaledVector(Ps,f),Ni.addScaledVector(Is,f),Oi.addScaledVector(Fs,f)):(Fi.addScaledVector(Ps.sub(Je),f),Ni.addScaledVector(Is.sub(Qe),f),Oi.addScaledVector(Fs.sub(tn),f)))}Je.add(Fi),Qe.add(Ni),tn.add(Oi)}r.isSkinnedMesh&&(r.boneTransform(c,Je),r.boneTransform(u,Qe),r.boneTransform(h,tn));const m=Nl(r,t,e,n,Je,Qe,tn,Ns);if(m){a&&(zi.fromBufferAttribute(a,c),Ui.fromBufferAttribute(a,u),Bi.fromBufferAttribute(a,h),m.uv=Ve.getUV(Ns,Je,Qe,tn,zi,Ui,Bi,new wt)),l&&(zi.fromBufferAttribute(l,c),Ui.fromBufferAttribute(l,u),Bi.fromBufferAttribute(l,h),m.uv2=Ve.getUV(Ns,Je,Qe,tn,zi,Ui,Bi,new wt));const _={a:c,b:u,c:h,normal:new R,materialIndex:0};Ve.getNormal(Je,Qe,tn,_.normal),m.face=_}return m}class _i extends Ie{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function _(p,f,g,M,w,y,x,T,I,v,A){const D=y/I,H=x/v,Q=y/2,z=x/2,P=T/2,G=I+1,j=v+1;let $=0,k=0;const F=new R;for(let U=0;U<j;U++){const K=U*H-z;for(let Y=0;Y<G;Y++){const J=Y*D-Q;F[p]=J*M,F[f]=K*w,F[g]=P,c.push(F.x,F.y,F.z),F[p]=0,F[f]=0,F[g]=T>0?1:-1,u.push(F.x,F.y,F.z),h.push(Y/I),h.push(1-U/v),$+=1}}for(let U=0;U<v;U++)for(let K=0;K<I;K++){const Y=d+K+G*U,J=d+K+G*(U+1),rt=d+(K+1)+G*(U+1),dt=d+(K+1)+G*U;l.push(Y,J,dt),l.push(J,rt,dt),k+=6}a.addGroup(m,k,A),m+=k,d+=$}}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jn(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function te(r){const t={};for(let e=0;e<r.length;e++){const n=Jn(r[e]);for(const i in n)t[i]=n[i]}return t}function Ol(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}const zl={clone:Jn,merge:te};var Ul=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ul,this.fragmentShader=Bl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jn(t.uniforms),this.uniformsGroups=Ol(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class no extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fe extends no{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bn=90,Gn=1;class Gl extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new fe(Bn,Gn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const s=new fe(Bn,Gn,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new fe(Bn,Gn,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new fe(Bn,Gn,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new fe(Bn,Gn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new fe(Bn,Gn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,d=t.xr.enabled;t.toneMapping=He,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class io extends be{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Zn,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kl extends vn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new io(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _i(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:en});s.uniforms.tEquirect.value=e;const o=new pe(i,s),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=xe),new Gl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Os=new R,Vl=new R,Hl=new Me;class cn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Os.subVectors(n,e).cross(Vl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Os),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hl.getNormalMatrix(t),i=this.coplanarPoint(Os).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Qi,Vi=new R;class lr{constructor(t=new cn,e=new cn,n=new cn,i=new cn,s=new cn,o=new cn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],_=n[10],p=n[11],f=n[12],g=n[13],M=n[14],w=n[15];return e[0].setComponents(a-i,h-l,p-d,w-f).normalize(),e[1].setComponents(a+i,h+l,p+d,w+f).normalize(),e[2].setComponents(a+s,h+c,p+m,w+g).normalize(),e[3].setComponents(a-s,h-c,p-m,w-g).normalize(),e[4].setComponents(a-o,h-u,p-_,w-M).normalize(),e[5].setComponents(a+o,h+u,p+_,w+M).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Vi.x=i.normal.x>0?t.max.x:t.min.x,Vi.y=i.normal.y>0?t.max.y:t.min.y,Vi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function so(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Wl(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,d):(e?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class xi extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,m=[],_=[],p=[],f=[];for(let g=0;g<u;g++){const M=g*d-o;for(let w=0;w<c;w++){const y=w*h-s;_.push(y,-M,0),p.push(0,0,1),f.push(w/a),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const w=M+c*g,y=M+c*(g+1),x=M+1+c*(g+1),T=M+1+c*g;m.push(w,y,T),m.push(y,x,T)}this.setIndex(m),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(f,2))}static fromJSON(t){return new xi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ql=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$l=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kl="vec3 transformed = vec3( position );",Jl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ql=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,tc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ec=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ac=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_c="gl_FragColor = linearToOutputTexel( gl_FragColor );",xc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ec=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ac=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Ic=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Nc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,zc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Bc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Gc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$c=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ru=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Su=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Au=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Lu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Du=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Nu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ou=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Uu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ku=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ju=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$u=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,th=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ih=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ah=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ch=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ph=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_h=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Tt={alphamap_fragment:Xl,alphamap_pars_fragment:ql,alphatest_fragment:Yl,alphatest_pars_fragment:jl,aomap_fragment:Zl,aomap_pars_fragment:$l,begin_vertex:Kl,beginnormal_vertex:Jl,bsdfs:Ql,iridescence_fragment:tc,bumpmap_pars_fragment:ec,clipping_planes_fragment:nc,clipping_planes_pars_fragment:ic,clipping_planes_pars_vertex:sc,clipping_planes_vertex:rc,color_fragment:ac,color_pars_fragment:oc,color_pars_vertex:lc,color_vertex:cc,common:uc,cube_uv_reflection_fragment:hc,defaultnormal_vertex:dc,displacementmap_pars_vertex:fc,displacementmap_vertex:pc,emissivemap_fragment:mc,emissivemap_pars_fragment:gc,encodings_fragment:_c,encodings_pars_fragment:xc,envmap_fragment:vc,envmap_common_pars_fragment:Mc,envmap_pars_fragment:Sc,envmap_pars_vertex:yc,envmap_physical_pars_fragment:Fc,envmap_vertex:bc,fog_vertex:wc,fog_pars_vertex:Ec,fog_fragment:Tc,fog_pars_fragment:Ac,gradientmap_pars_fragment:Lc,lightmap_fragment:Cc,lightmap_pars_fragment:Dc,lights_lambert_fragment:Rc,lights_lambert_pars_fragment:Pc,lights_pars_begin:Ic,lights_toon_fragment:Nc,lights_toon_pars_fragment:Oc,lights_phong_fragment:zc,lights_phong_pars_fragment:Uc,lights_physical_fragment:Bc,lights_physical_pars_fragment:Gc,lights_fragment_begin:kc,lights_fragment_maps:Vc,lights_fragment_end:Hc,logdepthbuf_fragment:Wc,logdepthbuf_pars_fragment:Xc,logdepthbuf_pars_vertex:qc,logdepthbuf_vertex:Yc,map_fragment:jc,map_pars_fragment:Zc,map_particle_fragment:$c,map_particle_pars_fragment:Kc,metalnessmap_fragment:Jc,metalnessmap_pars_fragment:Qc,morphcolor_vertex:tu,morphnormal_vertex:eu,morphtarget_pars_vertex:nu,morphtarget_vertex:iu,normal_fragment_begin:su,normal_fragment_maps:ru,normal_pars_fragment:au,normal_pars_vertex:ou,normal_vertex:lu,normalmap_pars_fragment:cu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:hu,clearcoat_pars_fragment:du,iridescence_pars_fragment:fu,output_fragment:pu,packing:mu,premultiplied_alpha_fragment:gu,project_vertex:_u,dithering_fragment:xu,dithering_pars_fragment:vu,roughnessmap_fragment:Mu,roughnessmap_pars_fragment:Su,shadowmap_pars_fragment:yu,shadowmap_pars_vertex:bu,shadowmap_vertex:wu,shadowmask_pars_fragment:Eu,skinbase_vertex:Tu,skinning_pars_vertex:Au,skinning_vertex:Lu,skinnormal_vertex:Cu,specularmap_fragment:Du,specularmap_pars_fragment:Ru,tonemapping_fragment:Pu,tonemapping_pars_fragment:Iu,transmission_fragment:Fu,transmission_pars_fragment:Nu,uv_pars_fragment:Ou,uv_pars_vertex:zu,uv_vertex:Uu,uv2_pars_fragment:Bu,uv2_pars_vertex:Gu,uv2_vertex:ku,worldpos_vertex:Vu,background_vert:Hu,background_frag:Wu,cube_vert:Xu,cube_frag:qu,depth_vert:Yu,depth_frag:ju,distanceRGBA_vert:Zu,distanceRGBA_frag:$u,equirect_vert:Ku,equirect_frag:Ju,linedashed_vert:Qu,linedashed_frag:th,meshbasic_vert:eh,meshbasic_frag:nh,meshlambert_vert:ih,meshlambert_frag:sh,meshmatcap_vert:rh,meshmatcap_frag:ah,meshnormal_vert:oh,meshnormal_frag:lh,meshphong_vert:ch,meshphong_frag:uh,meshphysical_vert:hh,meshphysical_frag:dh,meshtoon_vert:fh,meshtoon_frag:ph,points_vert:mh,points_frag:gh,shadow_vert:_h,shadow_frag:xh,sprite_vert:vh,sprite_frag:Mh},it={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Me},uv2Transform:{value:new Me},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Me}}},De={basic:{uniforms:te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new It(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:te([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:te([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new It(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:te([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:te([it.points,it.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:te([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:te([it.common,it.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:te([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:te([it.sprite,it.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},cube:{uniforms:te([it.envmap,{opacity:{value:1}}]),vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:te([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:te([it.lights,it.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};De.physical={uniforms:te([De.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new wt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};function Sh(r,t,e,n,i,s){const o=new It(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function m(p,f){let g=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=t.get(M));const w=r.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?_(o,a):M&&M.isColor&&(_(M,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ki)?(c===void 0&&(c=new pe(new _i(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Jn(De.cube.uniforms),vertexShader:De.cube.vertexShader,fragmentShader:De.cube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pe(new xi(2,2),new Sn({name:"BackgroundMaterial",uniforms:Jn(De.background.uniforms),vertexShader:De.background.vertexShader,fragmentShader:De.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){e.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),a=f,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:m}}function yh(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function h(P,G,j,$,k){let F=!1;if(o){const U=p($,j,G);c!==U&&(c=U,m(c.object)),F=g(P,$,j,k),F&&M(P,$,j,k)}else{const U=G.wireframe===!0;(c.geometry!==$.id||c.program!==j.id||c.wireframe!==U)&&(c.geometry=$.id,c.program=j.id,c.wireframe=U,F=!0)}k!==null&&e.update(k,34963),(F||u)&&(u=!1,v(P,G,j,$),k!==null&&r.bindBuffer(34963,e.get(k).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,G,j){const $=j.wireframe===!0;let k=a[P.id];k===void 0&&(k={},a[P.id]=k);let F=k[G.id];F===void 0&&(F={},k[G.id]=F);let U=F[$];return U===void 0&&(U=f(d()),F[$]=U),U}function f(P){const G=[],j=[],$=[];for(let k=0;k<i;k++)G[k]=0,j[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:$,object:P,attributes:{},index:null}}function g(P,G,j,$){const k=c.attributes,F=G.attributes;let U=0;const K=j.getAttributes();for(const Y in K)if(K[Y].location>=0){const rt=k[Y];let dt=F[Y];if(dt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;U++}return c.attributesNum!==U||c.index!==$}function M(P,G,j,$){const k={},F=G.attributes;let U=0;const K=j.getAttributes();for(const Y in K)if(K[Y].location>=0){let rt=F[Y];rt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor));const dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),k[Y]=dt,U++}c.attributes=k,c.attributesNum=U,c.index=$}function w(){const P=c.newAttributes;for(let G=0,j=P.length;G<j;G++)P[G]=0}function y(P){x(P,0)}function x(P,G){const j=c.newAttributes,$=c.enabledAttributes,k=c.attributeDivisors;j[P]=1,$[P]===0&&(r.enableVertexAttribArray(P),$[P]=1),k[P]!==G&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),k[P]=G)}function T(){const P=c.newAttributes,G=c.enabledAttributes;for(let j=0,$=G.length;j<$;j++)G[j]!==P[j]&&(r.disableVertexAttribArray(j),G[j]=0)}function I(P,G,j,$,k,F){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(P,G,j,k,F):r.vertexAttribPointer(P,G,j,$,k,F)}function v(P,G,j,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();const k=$.attributes,F=j.getAttributes(),U=G.defaultAttributeValues;for(const K in F){const Y=F[K];if(Y.location>=0){let J=k[K];if(J===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const rt=J.normalized,dt=J.itemSize,X=e.get(J);if(X===void 0)continue;const At=X.buffer,mt=X.type,gt=X.bytesPerElement;if(J.isInterleavedBufferAttribute){const at=J.data,Lt=at.stride,yt=J.offset;if(at.isInstancedInterleavedBuffer){for(let ft=0;ft<Y.locationSize;ft++)x(Y.location+ft,at.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ft=0;ft<Y.locationSize;ft++)y(Y.location+ft);r.bindBuffer(34962,At);for(let ft=0;ft<Y.locationSize;ft++)I(Y.location+ft,dt/Y.locationSize,mt,rt,Lt*gt,(yt+dt/Y.locationSize*ft)*gt)}else{if(J.isInstancedBufferAttribute){for(let at=0;at<Y.locationSize;at++)x(Y.location+at,J.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let at=0;at<Y.locationSize;at++)y(Y.location+at);r.bindBuffer(34962,At);for(let at=0;at<Y.locationSize;at++)I(Y.location+at,dt/Y.locationSize,mt,rt,dt*gt,dt/Y.locationSize*at*gt)}}else if(U!==void 0){const rt=U[K];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(Y.location,rt);break;case 3:r.vertexAttrib3fv(Y.location,rt);break;case 4:r.vertexAttrib4fv(Y.location,rt);break;default:r.vertexAttrib1fv(Y.location,rt)}}}}T()}function A(){Q();for(const P in a){const G=a[P];for(const j in G){const $=G[j];for(const k in $)_($[k].object),delete $[k];delete G[j]}delete a[P]}}function D(P){if(a[P.id]===void 0)return;const G=a[P.id];for(const j in G){const $=G[j];for(const k in $)_($[k].object),delete $[k];delete G[j]}delete a[P.id]}function H(P){for(const G in a){const j=a[G];if(j[P.id]===void 0)continue;const $=j[P.id];for(const k in $)_($[k].object),delete $[k];delete j[P.id]}}function Q(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:H,initAttributes:w,enableAttribute:y,disableUnusedAttributes:T}}function bh(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function wh(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),g=r.getParameter(36348),M=r.getParameter(36349),w=d>0,y=o||t.has("OES_texture_float"),x=w&&y,T=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:T}}function Eh(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new cn,a=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const _=h.length!==0||d||n!==0||i;return i=d,e=u(h,m,0),n=h.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,m){const _=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,g=r.get(h);if(!i||_===null||_.length===0||s&&!f)s?u(null):c();else{const M=s?0:n,w=M*4;let y=g.clippingState||null;l.value=y,y=u(_,d,w,m);for(let x=0;x!==w;++x)y[x]=e[x];g.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,_){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=l.value,_!==!0||f===null){const g=m+p*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<g)&&(f=new Float32Array(g));for(let w=0,y=m;w!==p;++w,y+=4)o.copy(h[w]).applyMatrix4(M,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Th(r){let t=new WeakMap;function e(o,a){return a===js?o.mapping=Zn:a===Zs&&(o.mapping=$n),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===js||a===Zs)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kl(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ah extends no{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wn=4,sa=[.125,.215,.35,.446,.526,.582],hn=20,zs=new Ah,ra=new It;let Us=null;const un=(1+Math.sqrt(5))/2,Vn=1/un,aa=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,un,Vn),new R(0,un,-Vn),new R(Vn,0,un),new R(-Vn,0,un),new R(un,Vn,0),new R(-un,Vn,0)];class oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Us=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Us),t.scissorTest=!1,Hi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zn||t.mapping===$n?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Us=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xe,minFilter:xe,generateMipmaps:!1,type:hi,format:Re,encoding:xn,depthBuffer:!1},i=la(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=la(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lh(s)),this._blurMaterial=Ch(s,t,e)}return i}_compileMaterial(t){const e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,zs)}_sceneToCubeUV(t,e,n,i){const a=new fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ra),u.toneMapping=He,u.autoClear=!1;const m=new gi({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),_=new pe(new _i,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(ra),p=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const w=this._cubeSize;Hi(i,M*w,g>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zn||t.mapping===$n;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ca());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Hi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=aa[(i-1)%aa.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pe(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hn-1),p=s/_,f=isFinite(s)?1+Math.floor(u*p):hn;f>hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${hn}`);const g=[];let M=0;for(let I=0;I<hn;++I){const v=I/p,A=Math.exp(-v*v/2);g.push(A),I===0?M+=A:I<f&&(M+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/M;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;const y=this._sizeLods[i],x=3*y*(i>w-Wn?i-w+Wn:0),T=4*(this._cubeSize-y);Hi(e,x,T,3*y,2*y),l.setRenderTarget(e),l.render(h,zs)}}function Lh(r){const t=[],e=[],n=[];let i=r;const s=r-Wn+1+sa.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Wn?l=sa[o-r+Wn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,p=3,f=2,g=1,M=new Float32Array(p*_*m),w=new Float32Array(f*_*m),y=new Float32Array(g*_*m);for(let T=0;T<m;T++){const I=T%3*2/3-1,v=T>2?0:-1,A=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];M.set(A,p*_*T),w.set(d,f*_*T);const D=[T,T,T,T,T,T];y.set(D,g*_*T)}const x=new Ie;x.setAttribute("position",new Pe(M,p)),x.setAttribute("uv",new Pe(w,f)),x.setAttribute("faceIndex",new Pe(y,g)),t.push(x),i>Wn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function la(r,t,e){const n=new vn(r,t,e);return n.texture.mapping=Ki,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ch(r,t,e){const n=new Float32Array(hn),i=new R(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function ca(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function ua(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function cr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dh(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===js||l===Zs,u=l===Zn||l===$n;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new oa(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new oa(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rh(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ph(r,t,e,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)t.update(d[_],34962);const m=h.morphAttributes;for(const _ in m){const p=m[_];for(let f=0,g=p.length;f<g;f++)t.update(p[f],34962)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let p=0;if(m!==null){const M=m.array;p=m.version;for(let w=0,y=M.length;w<y;w+=3){const x=M[w+0],T=M[w+1],I=M[w+2];d.push(x,T,T,I,I,x)}}else{const M=_.array;p=_.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const x=w+0,T=w+1,I=w+2;d.push(x,T,T,I,I,x)}}const f=new(Ya(d)?eo:to)(d,1);f.version=p;const g=s.get(h);g&&t.remove(g),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ih(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*l),e.update(m,s,1)}function h(d,m,_){if(_===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*l,_),e.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Fh(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nh(r,t){return r[0]-t[0]}function Oh(r,t){return Math.abs(t[1])-Math.abs(r[1])}function zh(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==f){let j=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var _=j;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),x===!0&&(D=2),T===!0&&(D=3);let H=u.attributes.position.count*D,Q=1;H>t.maxTextureSize&&(Q=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const z=new Float32Array(H*Q*4*f),P=new Ka(z,H,Q,f);P.type=fn,P.needsUpdate=!0;const G=D*4;for(let $=0;$<f;$++){const k=I[$],F=v[$],U=A[$],K=H*Q*4*$;for(let Y=0;Y<k.count;Y++){const J=Y*G;y===!0&&(o.fromBufferAttribute(k,Y),z[K+J+0]=o.x,z[K+J+1]=o.y,z[K+J+2]=o.z,z[K+J+3]=0),x===!0&&(o.fromBufferAttribute(F,Y),z[K+J+4]=o.x,z[K+J+5]=o.y,z[K+J+6]=o.z,z[K+J+7]=0),T===!0&&(o.fromBufferAttribute(U,Y),z[K+J+8]=o.x,z[K+J+9]=o.y,z[K+J+10]=o.z,z[K+J+11]=U.itemSize===4?o.w:1)}}g={count:f,texture:P,size:new wt(H,Q)},s.set(u,g),u.addEventListener("dispose",j)}let M=0;for(let y=0;y<m.length;y++)M+=m[y];const w=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let f=n[u.id];if(f===void 0||f.length!==p){f=[];for(let x=0;x<p;x++)f[x]=[x,0];n[u.id]=f}for(let x=0;x<p;x++){const T=f[x];T[0]=x,T[1]=m[x]}f.sort(Oh);for(let x=0;x<8;x++)x<p&&f[x][1]?(a[x][0]=f[x][0],a[x][1]=f[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Nh);const g=u.morphAttributes.position,M=u.morphAttributes.normal;let w=0;for(let x=0;x<8;x++){const T=a[x],I=T[0],v=T[1];I!==Number.MAX_SAFE_INTEGER&&v?(g&&u.getAttribute("morphTarget"+x)!==g[I]&&u.setAttribute("morphTarget"+x,g[I]),M&&u.getAttribute("morphNormal"+x)!==M[I]&&u.setAttribute("morphNormal"+x,M[I]),i[x]=v,w+=v):(g&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),M&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Uh(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const ro=new be,ao=new Ka,oo=new El,lo=new io,ha=[],da=[],fa=new Float32Array(16),pa=new Float32Array(9),ma=new Float32Array(4);function Qn(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ha[i];if(s===void 0&&(s=new Float32Array(i),ha[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function $t(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Kt(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ts(r,t){let e=da[t];e===void 0&&(e=new Int32Array(t),da[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Bh(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Gh(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($t(e,t))return;r.uniform2fv(this.addr,t),Kt(e,t)}}function kh(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($t(e,t))return;r.uniform3fv(this.addr,t),Kt(e,t)}}function Vh(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($t(e,t))return;r.uniform4fv(this.addr,t),Kt(e,t)}}function Hh(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($t(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Kt(e,t)}else{if($t(e,n))return;ma.set(n),r.uniformMatrix2fv(this.addr,!1,ma),Kt(e,n)}}function Wh(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($t(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Kt(e,t)}else{if($t(e,n))return;pa.set(n),r.uniformMatrix3fv(this.addr,!1,pa),Kt(e,n)}}function Xh(r,t){const e=this.cache,n=t.elements;if(n===void 0){if($t(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Kt(e,t)}else{if($t(e,n))return;fa.set(n),r.uniformMatrix4fv(this.addr,!1,fa),Kt(e,n)}}function qh(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Yh(r,t){const e=this.cache;$t(e,t)||(r.uniform2iv(this.addr,t),Kt(e,t))}function jh(r,t){const e=this.cache;$t(e,t)||(r.uniform3iv(this.addr,t),Kt(e,t))}function Zh(r,t){const e=this.cache;$t(e,t)||(r.uniform4iv(this.addr,t),Kt(e,t))}function $h(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Kh(r,t){const e=this.cache;$t(e,t)||(r.uniform2uiv(this.addr,t),Kt(e,t))}function Jh(r,t){const e=this.cache;$t(e,t)||(r.uniform3uiv(this.addr,t),Kt(e,t))}function Qh(r,t){const e=this.cache;$t(e,t)||(r.uniform4uiv(this.addr,t),Kt(e,t))}function td(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||ro,i)}function ed(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||oo,i)}function nd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lo,i)}function id(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ao,i)}function sd(r){switch(r){case 5126:return Bh;case 35664:return Gh;case 35665:return kh;case 35666:return Vh;case 35674:return Hh;case 35675:return Wh;case 35676:return Xh;case 5124:case 35670:return qh;case 35667:case 35671:return Yh;case 35668:case 35672:return jh;case 35669:case 35673:return Zh;case 5125:return $h;case 36294:return Kh;case 36295:return Jh;case 36296:return Qh;case 35678:case 36198:case 36298:case 36306:case 35682:return td;case 35679:case 36299:case 36307:return ed;case 35680:case 36300:case 36308:case 36293:return nd;case 36289:case 36303:case 36311:case 36292:return id}}function rd(r,t){r.uniform1fv(this.addr,t)}function ad(r,t){const e=Qn(t,this.size,2);r.uniform2fv(this.addr,e)}function od(r,t){const e=Qn(t,this.size,3);r.uniform3fv(this.addr,e)}function ld(r,t){const e=Qn(t,this.size,4);r.uniform4fv(this.addr,e)}function cd(r,t){const e=Qn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ud(r,t){const e=Qn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function hd(r,t){const e=Qn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function dd(r,t){r.uniform1iv(this.addr,t)}function fd(r,t){r.uniform2iv(this.addr,t)}function pd(r,t){r.uniform3iv(this.addr,t)}function md(r,t){r.uniform4iv(this.addr,t)}function gd(r,t){r.uniform1uiv(this.addr,t)}function _d(r,t){r.uniform2uiv(this.addr,t)}function xd(r,t){r.uniform3uiv(this.addr,t)}function vd(r,t){r.uniform4uiv(this.addr,t)}function Md(r,t,e){const n=this.cache,i=t.length,s=ts(e,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ro,s[o])}function Sd(r,t,e){const n=this.cache,i=t.length,s=ts(e,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||oo,s[o])}function yd(r,t,e){const n=this.cache,i=t.length,s=ts(e,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lo,s[o])}function bd(r,t,e){const n=this.cache,i=t.length,s=ts(e,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ao,s[o])}function wd(r){switch(r){case 5126:return rd;case 35664:return ad;case 35665:return od;case 35666:return ld;case 35674:return cd;case 35675:return ud;case 35676:return hd;case 5124:case 35670:return dd;case 35667:case 35671:return fd;case 35668:case 35672:return pd;case 35669:case 35673:return md;case 5125:return gd;case 36294:return _d;case 36295:return xd;case 36296:return vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Md;case 35679:case 36299:case 36307:return Sd;case 35680:case 36300:case 36308:case 36293:return yd;case 36289:case 36303:case 36311:case 36292:return bd}}class Ed{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=sd(e.type)}}class Td{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=wd(e.type)}}class Ad{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function ga(r,t){r.seq.push(t),r.map[t.id]=t}function Ld(r,t,e){const n=r.name,i=n.length;for(Bs.lastIndex=0;;){const s=Bs.exec(n),o=Bs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ga(e,c===void 0?new Ed(a,r,t):new Td(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new Ad(a),ga(e,h)),e=h}}}class ji{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ld(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function _a(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Cd=0;function Dd(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Rd(r){switch(r){case xn:return["Linear","( value )"];case kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function xa(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Dd(r.getShaderSource(t),o)}else return i}function Pd(r,t){const e=Rd(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Id(r,t){let e;switch(t){case Jo:e="Linear";break;case Qo:e="Reinhard";break;case tl:e="OptimizedCineon";break;case el:e="ACESFilmic";break;case nl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Fd(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function Nd(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Od(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function li(r){return r!==""}function va(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ma(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function tr(r){return r.replace(zd,Ud)}function Ud(r,t){const e=Tt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return tr(e)}const Bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sa(r){return r.replace(Bd,Gd)}function Gd(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ya(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kd(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Va?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Do?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function Vd(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zn:case $n:t="ENVMAP_TYPE_CUBE";break;case Ki:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hd(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $n:t="ENVMAP_MODE_REFRACTION";break}return t}function Wd(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ar:t="ENVMAP_BLENDING_MULTIPLY";break;case $o:t="ENVMAP_BLENDING_MIX";break;case Ko:t="ENVMAP_BLENDING_ADD";break}return t}function Xd(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qd(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=kd(e),c=Vd(e),u=Hd(e),h=Wd(e),d=Xd(e),m=e.isWebGL2?"":Fd(e),_=Nd(s),p=i.createProgram();let f,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[_].filter(li).join(`
`),f.length>0&&(f+=`
`),g=[m,_].filter(li).join(`
`),g.length>0&&(g+=`
`)):(f=[ya(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),g=[m,ya(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==He?"#define TONE_MAPPING":"",e.toneMapping!==He?Tt.tonemapping_pars_fragment:"",e.toneMapping!==He?Id("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.encodings_pars_fragment,Pd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(li).join(`
`)),o=tr(o),o=va(o,e),o=Ma(o,e),a=tr(a),a=va(a,e),a=Ma(a,e),o=Sa(o),a=Sa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===Wr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=M+f+o,y=M+g+a,x=_a(i,35633,w),T=_a(i,35632,y);if(i.attachShader(p,x),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(x).trim(),H=i.getShaderInfoLog(T).trim();let Q=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){Q=!1;const P=xa(i,x,"vertex"),G=xa(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+P+`
`+G)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||H==="")&&(z=!1);z&&(this.diagnostics={runnable:Q,programLog:A,vertexShader:{log:D,prefix:f},fragmentShader:{log:H,prefix:g}})}i.deleteShader(x),i.deleteShader(T);let I;this.getUniforms=function(){return I===void 0&&(I=new ji(i,p)),I};let v;return this.getAttributes=function(){return v===void 0&&(v=Od(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Cd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=T,this}let Yd=0;class jd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zd(t),e.set(t,n)),n}}class Zd{constructor(t){this.id=Yd++,this.code=t,this.usedTimes=0}}function $d(r,t,e,n,i,s,o){const a=new Qa,l=new jd,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,D,H,Q){const z=H.fog,P=Q.geometry,G=v.isMeshStandardMaterial?H.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),$=!!j&&j.mapping===Ki?j.image.height:null,k=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const F=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,U=F!==void 0?F.length:0;let K=0;P.morphAttributes.position!==void 0&&(K=1),P.morphAttributes.normal!==void 0&&(K=2),P.morphAttributes.color!==void 0&&(K=3);let Y,J,rt,dt;if(k){const Lt=De[k];Y=Lt.vertexShader,J=Lt.fragmentShader}else Y=v.vertexShader,J=v.fragmentShader,l.update(v),rt=l.getVertexShaderID(v),dt=l.getFragmentShaderID(v);const X=r.getRenderTarget(),At=v.alphaTest>0,mt=v.clearcoat>0,gt=v.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:v.type,vertexShader:Y,fragmentShader:J,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?r.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:xn,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:$,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Sl,tangentSpaceNormalMap:v.normalMapType===or,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===kt,clearcoat:mt,clearcoatMap:mt&&!!v.clearcoatMap,clearcoatRoughnessMap:mt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:mt&&!!v.clearcoatNormalMap,iridescence:gt,iridescenceMap:gt&&!!v.iridescenceMap,iridescenceThicknessMap:gt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===qn,alphaMap:!!v.alphaMap,alphaTest:At,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!P.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:He,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ve,flipSided:v.side===Se,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)A.push(D),A.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(g(A,v),M(A,v),A.push(r.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function g(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function w(v){const A=_[v.type];let D;if(A){const H=De[A];D=zl.clone(H.uniforms)}else D=v.uniforms;return D}function y(v,A){let D;for(let H=0,Q=c.length;H<Q;H++){const z=c[H];if(z.cacheKey===A){D=z,++D.usedTimes;break}}return D===void 0&&(D=new qd(r,A,v,s),c.push(D)),D}function x(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:y,releaseProgram:x,releaseShaderCache:T,programs:c,dispose:I}}function Kd(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Jd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ba(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wa(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,m,_,p,f){let g=r[t];return g===void 0?(g={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:p,group:f},r[t]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=p,g.group=f),t++,g}function a(h,d,m,_,p,f){const g=o(h,d,m,_,p,f);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):e.push(g)}function l(h,d,m,_,p,f){const g=o(h,d,m,_,p,f);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):e.unshift(g)}function c(h,d){e.length>1&&e.sort(h||Jd),n.length>1&&n.sort(d||ba),i.length>1&&i.sort(d||ba)}function u(){for(let h=t,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Qd(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new wa,r.set(n,[o])):i>=s.length?(o=new wa,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function tf(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new It};break;case"SpotLight":e={position:new R,direction:new R,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function ef(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let nf=0;function sf(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function rf(r,t){const e=new tf,n=ef(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new R);const s=new R,o=new Xt,a=new Xt;function l(u,h){let d=0,m=0,_=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,f=0,g=0,M=0,w=0,y=0,x=0,T=0,I=0,v=0;u.sort(sf);const A=h!==!0?Math.PI:1;for(let H=0,Q=u.length;H<Q;H++){const z=u[H],P=z.color,G=z.intensity,j=z.distance,$=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=P.r*G*A,m+=P.g*G*A,_+=P.b*G*A;else if(z.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(z.sh.coefficients[k],G);else if(z.isDirectionalLight){const k=e.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const F=z.shadow,U=n.get(z);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=z.shadow.matrix,y++}i.directional[p]=k,p++}else if(z.isSpotLight){const k=e.get(z);k.position.setFromMatrixPosition(z.matrixWorld),k.color.copy(P).multiplyScalar(G*A),k.distance=j,k.coneCos=Math.cos(z.angle),k.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),k.decay=z.decay,i.spot[g]=k;const F=z.shadow;if(z.map&&(i.spotLightMap[I]=z.map,I++,F.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[g]=F.matrix,z.castShadow){const U=n.get(z);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,i.spotShadow[g]=U,i.spotShadowMap[g]=$,T++}g++}else if(z.isRectAreaLight){const k=e.get(z);k.color.copy(P).multiplyScalar(G),k.halfWidth.set(z.width*.5,0,0),k.halfHeight.set(0,z.height*.5,0),i.rectArea[M]=k,M++}else if(z.isPointLight){const k=e.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*A),k.distance=z.distance,k.decay=z.decay,z.castShadow){const F=z.shadow,U=n.get(z);U.shadowBias=F.bias,U.shadowNormalBias=F.normalBias,U.shadowRadius=F.radius,U.shadowMapSize=F.mapSize,U.shadowCameraNear=F.camera.near,U.shadowCameraFar=F.camera.far,i.pointShadow[f]=U,i.pointShadowMap[f]=$,i.pointShadowMatrix[f]=z.shadow.matrix,x++}i.point[f]=k,f++}else if(z.isHemisphereLight){const k=e.get(z);k.skyColor.copy(z.color).multiplyScalar(G*A),k.groundColor.copy(z.groundColor).multiplyScalar(G*A),i.hemi[w]=k,w++}}M>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const D=i.hash;(D.directionalLength!==p||D.pointLength!==f||D.spotLength!==g||D.rectAreaLength!==M||D.hemiLength!==w||D.numDirectionalShadows!==y||D.numPointShadows!==x||D.numSpotShadows!==T||D.numSpotMaps!==I)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=M,i.point.length=f,i.hemi.length=w,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=T+I-v,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=f,D.spotLength=g,D.rectAreaLength=M,D.hemiLength=w,D.numDirectionalShadows=y,D.numPointShadows=x,D.numSpotShadows=T,D.numSpotMaps=I,i.version=nf++)}function c(u,h){let d=0,m=0,_=0,p=0,f=0;const g=h.matrixWorldInverse;for(let M=0,w=u.length;M<w;M++){const y=u[M];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(y.isSpotLight){const x=i.spot[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),_++}else if(y.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const x=i.hemi[f];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),f++}}}return{setup:l,setupView:c,state:i}}function Ea(r,t){const e=new rf(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function af(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Ea(r,t),e.set(s,[l])):o>=a.length?(l=new Ea(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class of extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lf extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hf(r,t,e){let n=new lr;const i=new wt,s=new wt,o=new zt,a=new of({depthPacking:Ml}),l=new lf,c={},u=e.maxTextureSize,h={0:Se,1:jn,2:ve},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:cf,fragmentShader:uf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ie;_.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pe(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va,this.render=function(y,x,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const I=r.getRenderTarget(),v=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),D=r.state;D.setBlending(en),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let H=0,Q=y.length;H<Q;H++){const z=y[H],P=z.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const G=P.getFrameExtents();if(i.multiply(G),s.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,P.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,P.mapSize.y=s.y)),P.map===null){const $=this.type!==oi?{minFilter:ae,magFilter:ae}:{};P.map=new vn(i.x,i.y,$),P.map.texture.name=z.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const j=P.getViewportCount();for(let $=0;$<j;$++){const k=P.getViewport($);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),D.viewport(o),P.updateMatrices(z,$),n=P.getFrustum(),w(x,T,P.camera,z,this.type)}P.isPointLightShadow!==!0&&this.type===oi&&g(P,T),P.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(I,v,A)};function g(y,x){const T=t.update(p);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new vn(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(x,null,T,d,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(x,null,T,m,p,null)}function M(y,x,T,I,v,A){let D=null;const H=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(H!==void 0?D=H:D=T.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const Q=D.uuid,z=x.uuid;let P=c[Q];P===void 0&&(P={},c[Q]=P);let G=P[z];G===void 0&&(G=D.clone(),P[z]=G),D=G}return D.visible=x.visible,D.wireframe=x.wireframe,A===oi?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:h[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaTest,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=I,D.farDistance=v),D}function w(y,x,T,I,v){if(y.visible===!1)return;if(y.layers.test(x.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===oi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const H=t.update(y),Q=y.material;if(Array.isArray(Q)){const z=H.groups;for(let P=0,G=z.length;P<G;P++){const j=z[P],$=Q[j.materialIndex];if($&&$.visible){const k=M(y,$,I,T.near,T.far,v);r.renderBufferDirect(T,null,H,k,y,j)}}}else if(Q.visible){const z=M(y,Q,I,T.near,T.far,v);r.renderBufferDirect(T,null,H,z,y,null)}}const D=y.children;for(let H=0,Q=D.length;H<Q;H++)w(D[H],x,T,I,v)}}function df(r,t,e){const n=e.isWebGL2;function i(){let C=!1;const lt=new zt;let nt=null;const Z=new zt(0,0,0,0);return{setMask:function(st){nt!==st&&!C&&(r.colorMask(st,st,st,st),nt=st)},setLocked:function(st){C=st},setClear:function(st,vt,Ot,Wt,qe){qe===!0&&(st*=Wt,vt*=Wt,Ot*=Wt),lt.set(st,vt,Ot,Wt),Z.equals(lt)===!1&&(r.clearColor(st,vt,Ot,Wt),Z.copy(lt))},reset:function(){C=!1,nt=null,Z.set(-1,0,0,0)}}}function s(){let C=!1,lt=null,nt=null,Z=null;return{setTest:function(st){st?At(2929):mt(2929)},setMask:function(st){lt!==st&&!C&&(r.depthMask(st),lt=st)},setFunc:function(st){if(nt!==st){switch(st){case Ho:r.depthFunc(512);break;case Wo:r.depthFunc(519);break;case Xo:r.depthFunc(513);break;case Ys:r.depthFunc(515);break;case qo:r.depthFunc(514);break;case Yo:r.depthFunc(518);break;case jo:r.depthFunc(516);break;case Zo:r.depthFunc(517);break;default:r.depthFunc(515)}nt=st}},setLocked:function(st){C=st},setClear:function(st){Z!==st&&(r.clearDepth(st),Z=st)},reset:function(){C=!1,lt=null,nt=null,Z=null}}}function o(){let C=!1,lt=null,nt=null,Z=null,st=null,vt=null,Ot=null,Wt=null,qe=null;return{setTest:function(Bt){C||(Bt?At(2960):mt(2960))},setMask:function(Bt){lt!==Bt&&!C&&(r.stencilMask(Bt),lt=Bt)},setFunc:function(Bt,Fe,me){(nt!==Bt||Z!==Fe||st!==me)&&(r.stencilFunc(Bt,Fe,me),nt=Bt,Z=Fe,st=me)},setOp:function(Bt,Fe,me){(vt!==Bt||Ot!==Fe||Wt!==me)&&(r.stencilOp(Bt,Fe,me),vt=Bt,Ot=Fe,Wt=me)},setLocked:function(Bt){C=Bt},setClear:function(Bt){qe!==Bt&&(r.clearStencil(Bt),qe=Bt)},reset:function(){C=!1,lt=null,nt=null,Z=null,st=null,vt=null,Ot=null,Wt=null,qe=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,p=[],f=null,g=!1,M=null,w=null,y=null,x=null,T=null,I=null,v=null,A=!1,D=null,H=null,Q=null,z=null,P=null;const G=r.getParameter(35661);let j=!1,$=0;const k=r.getParameter(7938);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),j=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),j=$>=2);let F=null,U={};const K=r.getParameter(3088),Y=r.getParameter(2978),J=new zt().fromArray(K),rt=new zt().fromArray(Y);function dt(C,lt,nt){const Z=new Uint8Array(4),st=r.createTexture();r.bindTexture(C,st),r.texParameteri(C,10241,9728),r.texParameteri(C,10240,9728);for(let vt=0;vt<nt;vt++)r.texImage2D(lt+vt,0,6408,1,1,0,6408,5121,Z);return st}const X={};X[3553]=dt(3553,3553,1),X[34067]=dt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),At(2929),l.setFunc(Ys),Vt(!1),ee(pr),At(2884),Ut(en);function At(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function mt(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function gt(C,lt){return m[C]!==lt?(r.bindFramebuffer(C,lt),m[C]=lt,n&&(C===36009&&(m[36160]=lt),C===36160&&(m[36009]=lt)),!0):!1}function at(C,lt){let nt=p,Z=!1;if(C)if(nt=_.get(lt),nt===void 0&&(nt=[],_.set(lt,nt)),C.isWebGLMultipleRenderTargets){const st=C.texture;if(nt.length!==st.length||nt[0]!==36064){for(let vt=0,Ot=st.length;vt<Ot;vt++)nt[vt]=36064+vt;nt.length=st.length,Z=!0}}else nt[0]!==36064&&(nt[0]=36064,Z=!0);else nt[0]!==1029&&(nt[0]=1029,Z=!0);Z&&(e.isWebGL2?r.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function Lt(C){return f!==C?(r.useProgram(C),f=C,!0):!1}const yt={[Hn]:32774,[Po]:32778,[Io]:32779};if(n)yt[xr]=32775,yt[vr]=32776;else{const C=t.get("EXT_blend_minmax");C!==null&&(yt[xr]=C.MIN_EXT,yt[vr]=C.MAX_EXT)}const ft={[Fo]:0,[No]:1,[Oo]:768,[Ha]:770,[Vo]:776,[Go]:774,[Uo]:772,[zo]:769,[Wa]:771,[ko]:775,[Bo]:773};function Ut(C,lt,nt,Z,st,vt,Ot,Wt){if(C===en){g===!0&&(mt(3042),g=!1);return}if(g===!1&&(At(3042),g=!0),C!==Ro){if(C!==M||Wt!==A){if((w!==Hn||T!==Hn)&&(r.blendEquation(32774),w=Hn,T=Hn),Wt)switch(C){case qn:r.blendFuncSeparate(1,771,1,771);break;case mr:r.blendFunc(1,1);break;case gr:r.blendFuncSeparate(0,769,0,1);break;case _r:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case qn:r.blendFuncSeparate(770,771,1,771);break;case mr:r.blendFunc(770,1);break;case gr:r.blendFuncSeparate(0,769,0,1);break;case _r:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,x=null,I=null,v=null,M=C,A=Wt}return}st=st||lt,vt=vt||nt,Ot=Ot||Z,(lt!==w||st!==T)&&(r.blendEquationSeparate(yt[lt],yt[st]),w=lt,T=st),(nt!==y||Z!==x||vt!==I||Ot!==v)&&(r.blendFuncSeparate(ft[nt],ft[Z],ft[vt],ft[Ot]),y=nt,x=Z,I=vt,v=Ot),M=C,A=null}function jt(C,lt){C.side===ve?mt(2884):At(2884);let nt=C.side===Se;lt&&(nt=!nt),Vt(nt),C.blending===qn&&C.transparent===!1?Ut(en):Ut(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Z=C.stencilWrite;c.setTest(Z),Z&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Rt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?At(32926):mt(32926)}function Vt(C){D!==C&&(C?r.frontFace(2304):r.frontFace(2305),D=C)}function ee(C){C!==Lo?(At(2884),C!==H&&(C===pr?r.cullFace(1029):C===Co?r.cullFace(1028):r.cullFace(1032))):mt(2884),H=C}function Ht(C){C!==Q&&(j&&r.lineWidth(C),Q=C)}function Rt(C,lt,nt){C?(At(32823),(z!==lt||P!==nt)&&(r.polygonOffset(lt,nt),z=lt,P=nt)):mt(32823)}function se(C){C?At(3089):mt(3089)}function re(C){C===void 0&&(C=33984+G-1),F!==C&&(r.activeTexture(C),F=C)}function E(C,lt,nt){nt===void 0&&(F===null?nt=33984+G-1:nt=F);let Z=U[nt];Z===void 0&&(Z={type:void 0,texture:void 0},U[nt]=Z),(Z.type!==C||Z.texture!==lt)&&(F!==nt&&(r.activeTexture(nt),F=nt),r.bindTexture(C,lt||X[C]),Z.type=C,Z.texture=lt)}function S(){const C=U[F];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function L(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function O(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(C){J.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),J.copy(C))}function ut(C){rt.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),rt.copy(C))}function pt(C,lt){let nt=h.get(lt);nt===void 0&&(nt=new WeakMap,h.set(lt,nt));let Z=nt.get(C);Z===void 0&&(Z=r.getUniformBlockIndex(lt,C.name),nt.set(C,Z))}function Mt(C,lt){const Z=h.get(lt).get(C);u.get(C)!==Z&&(r.uniformBlockBinding(lt,Z,C.__bindingPointIndex),u.set(C,Z))}function Pt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},F=null,U={},m={},_=new WeakMap,p=[],f=null,g=!1,M=null,w=null,y=null,x=null,T=null,I=null,v=null,A=!1,D=null,H=null,Q=null,z=null,P=null,J.set(0,0,r.canvas.width,r.canvas.height),rt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:At,disable:mt,bindFramebuffer:gt,drawBuffers:at,useProgram:Lt,setBlending:Ut,setMaterial:jt,setFlipSided:Vt,setCullFace:ee,setLineWidth:Ht,setPolygonOffset:Rt,setScissorTest:se,activeTexture:re,bindTexture:E,unbindTexture:S,compressedTexImage2D:V,texImage2D:O,texImage3D:ct,updateUBOMapping:pt,uniformBlockBinding:Mt,texStorage2D:xt,texStorage3D:L,texSubImage2D:tt,texSubImage3D:et,compressedTexSubImage2D:ot,scissor:ht,viewport:ut,reset:Pt}}function ff(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,S){return g?new OffscreenCanvas(E,S):di("canvas")}function w(E,S,V,tt){let et=1;if((E.width>tt||E.height>tt)&&(et=tt/Math.max(E.width,E.height)),et<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ot=S?Qs:Math.floor,xt=ot(et*E.width),L=ot(et*E.height);p===void 0&&(p=M(xt,L));const O=V?M(xt,L):p;return O.width=xt,O.height=L,O.getContext("2d").drawImage(E,0,0,xt,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xt+"x"+L+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return qr(E.width)&&qr(E.height)}function x(E){return a?!1:E.wrapS!==Le||E.wrapT!==Le||E.minFilter!==ae&&E.minFilter!==xe}function T(E,S){return E.generateMipmaps&&S&&E.minFilter!==ae&&E.minFilter!==xe}function I(E){r.generateMipmap(E)}function v(E,S,V,tt,et=!1){if(a===!1)return S;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ot=S;return S===6403&&(V===5126&&(ot=33326),V===5131&&(ot=33325),V===5121&&(ot=33321)),S===33319&&(V===5126&&(ot=33328),V===5131&&(ot=33327),V===5121&&(ot=33323)),S===6408&&(V===5126&&(ot=34836),V===5131&&(ot=34842),V===5121&&(ot=tt===kt&&et===!1?35907:32856),V===32819&&(ot=32854),V===32820&&(ot=32855)),(ot===33325||ot===33326||ot===33327||ot===33328||ot===34842||ot===34836)&&t.get("EXT_color_buffer_float"),ot}function A(E,S,V){return T(E,V)===!0||E.isFramebufferTexture&&E.minFilter!==ae&&E.minFilter!==xe?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function D(E){return E===ae||E===Mr||E===Sr?9728:9729}function H(E){const S=E.target;S.removeEventListener("dispose",H),z(S),S.isVideoTexture&&_.delete(S)}function Q(E){const S=E.target;S.removeEventListener("dispose",Q),G(S)}function z(E){const S=n.get(E);if(S.__webglInit===void 0)return;const V=E.source,tt=f.get(V);if(tt){const et=tt[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(E),Object.keys(tt).length===0&&f.delete(V)}n.remove(E)}function P(E){const S=n.get(E);r.deleteTexture(S.__webglTexture);const V=E.source,tt=f.get(V);delete tt[S.__cacheKey],o.memory.textures--}function G(E){const S=E.texture,V=n.get(E),tt=n.get(S);if(tt.__webglTexture!==void 0&&(r.deleteTexture(tt.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)r.deleteFramebuffer(V.__webglFramebuffer[et]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[et]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let et=0;et<V.__webglColorRenderbuffer.length;et++)V.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[et]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let et=0,ot=S.length;et<ot;et++){const xt=n.get(S[et]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(S[et])}n.remove(S),n.remove(E)}let j=0;function $(){j=0}function k(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function F(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function U(E,S){const V=n.get(E);if(E.isVideoTexture&&se(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(V,E,S);return}}e.bindTexture(3553,V.__webglTexture,33984+S)}function K(E,S){const V=n.get(E);if(E.version>0&&V.__version!==E.version){mt(V,E,S);return}e.bindTexture(35866,V.__webglTexture,33984+S)}function Y(E,S){const V=n.get(E);if(E.version>0&&V.__version!==E.version){mt(V,E,S);return}e.bindTexture(32879,V.__webglTexture,33984+S)}function J(E,S){const V=n.get(E);if(E.version>0&&V.__version!==E.version){gt(V,E,S);return}e.bindTexture(34067,V.__webglTexture,33984+S)}const rt={[$s]:10497,[Le]:33071,[Ks]:33648},dt={[ae]:9728,[Mr]:9984,[Sr]:9986,[xe]:9729,[il]:9985,[Ji]:9987};function X(E,S,V){if(V?(r.texParameteri(E,10242,rt[S.wrapS]),r.texParameteri(E,10243,rt[S.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,rt[S.wrapR]),r.texParameteri(E,10240,dt[S.magFilter]),r.texParameteri(E,10241,dt[S.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(S.wrapS!==Le||S.wrapT!==Le)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,D(S.magFilter)),r.texParameteri(E,10241,D(S.minFilter)),S.minFilter!==ae&&S.minFilter!==xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(S.type===fn&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===hi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function At(E,S){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",H));const tt=S.source;let et=f.get(tt);et===void 0&&(et={},f.set(tt,et));const ot=F(S);if(ot!==E.__cacheKey){et[ot]===void 0&&(et[ot]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[ot].usedTimes++;const xt=et[E.__cacheKey];xt!==void 0&&(et[E.__cacheKey].usedTimes--,xt.usedTimes===0&&P(S)),E.__cacheKey=ot,E.__webglTexture=et[ot].texture}return V}function mt(E,S,V){let tt=3553;S.isDataArrayTexture&&(tt=35866),S.isData3DTexture&&(tt=32879);const et=At(E,S),ot=S.source;e.bindTexture(tt,E.__webglTexture,33984+V);const xt=n.get(ot);if(ot.version!==xt.__version||et===!0){e.activeTexture(33984+V),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const L=x(S)&&y(S.image)===!1;let O=w(S.image,L,!1,u);O=re(S,O);const ct=y(O)||a,ht=s.convert(S.format,S.encoding);let ut=s.convert(S.type),pt=v(S.internalFormat,ht,ut,S.encoding,S.isVideoTexture);X(tt,S,ct);let Mt;const Pt=S.mipmaps,C=a&&S.isVideoTexture!==!0,lt=xt.__version===void 0||et===!0,nt=A(S,O,ct);if(S.isDepthTexture)pt=6402,a?S.type===fn?pt=36012:S.type===dn?pt=33190:S.type===Yn?pt=35056:pt=33189:S.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===mn&&pt===6402&&S.type!==qa&&S.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=dn,ut=s.convert(S.type)),S.format===Kn&&pt===6402&&(pt=34041,S.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Yn,ut=s.convert(S.type))),lt&&(C?e.texStorage2D(3553,1,pt,O.width,O.height):e.texImage2D(3553,0,pt,O.width,O.height,0,ht,ut,null));else if(S.isDataTexture)if(Pt.length>0&&ct){C&&lt&&e.texStorage2D(3553,nt,pt,Pt[0].width,Pt[0].height);for(let Z=0,st=Pt.length;Z<st;Z++)Mt=Pt[Z],C?e.texSubImage2D(3553,Z,0,0,Mt.width,Mt.height,ht,ut,Mt.data):e.texImage2D(3553,Z,pt,Mt.width,Mt.height,0,ht,ut,Mt.data);S.generateMipmaps=!1}else C?(lt&&e.texStorage2D(3553,nt,pt,O.width,O.height),e.texSubImage2D(3553,0,0,0,O.width,O.height,ht,ut,O.data)):e.texImage2D(3553,0,pt,O.width,O.height,0,ht,ut,O.data);else if(S.isCompressedTexture){C&&lt&&e.texStorage2D(3553,nt,pt,Pt[0].width,Pt[0].height);for(let Z=0,st=Pt.length;Z<st;Z++)Mt=Pt[Z],S.format!==Re?ht!==null?C?e.compressedTexSubImage2D(3553,Z,0,0,Mt.width,Mt.height,ht,Mt.data):e.compressedTexImage2D(3553,Z,pt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?e.texSubImage2D(3553,Z,0,0,Mt.width,Mt.height,ht,ut,Mt.data):e.texImage2D(3553,Z,pt,Mt.width,Mt.height,0,ht,ut,Mt.data)}else if(S.isDataArrayTexture)C?(lt&&e.texStorage3D(35866,nt,pt,O.width,O.height,O.depth),e.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ht,ut,O.data)):e.texImage3D(35866,0,pt,O.width,O.height,O.depth,0,ht,ut,O.data);else if(S.isData3DTexture)C?(lt&&e.texStorage3D(32879,nt,pt,O.width,O.height,O.depth),e.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ht,ut,O.data)):e.texImage3D(32879,0,pt,O.width,O.height,O.depth,0,ht,ut,O.data);else if(S.isFramebufferTexture){if(lt)if(C)e.texStorage2D(3553,nt,pt,O.width,O.height);else{let Z=O.width,st=O.height;for(let vt=0;vt<nt;vt++)e.texImage2D(3553,vt,pt,Z,st,0,ht,ut,null),Z>>=1,st>>=1}}else if(Pt.length>0&&ct){C&&lt&&e.texStorage2D(3553,nt,pt,Pt[0].width,Pt[0].height);for(let Z=0,st=Pt.length;Z<st;Z++)Mt=Pt[Z],C?e.texSubImage2D(3553,Z,0,0,ht,ut,Mt):e.texImage2D(3553,Z,pt,ht,ut,Mt);S.generateMipmaps=!1}else C?(lt&&e.texStorage2D(3553,nt,pt,O.width,O.height),e.texSubImage2D(3553,0,0,0,ht,ut,O)):e.texImage2D(3553,0,pt,ht,ut,O);T(S,ct)&&I(tt),xt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function gt(E,S,V){if(S.image.length!==6)return;const tt=At(E,S),et=S.source;e.bindTexture(34067,E.__webglTexture,33984+V);const ot=n.get(et);if(et.version!==ot.__version||tt===!0){e.activeTexture(33984+V),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const xt=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,O=[];for(let Z=0;Z<6;Z++)!xt&&!L?O[Z]=w(S.image[Z],!1,!0,c):O[Z]=L?S.image[Z].image:S.image[Z],O[Z]=re(S,O[Z]);const ct=O[0],ht=y(ct)||a,ut=s.convert(S.format,S.encoding),pt=s.convert(S.type),Mt=v(S.internalFormat,ut,pt,S.encoding),Pt=a&&S.isVideoTexture!==!0,C=ot.__version===void 0||tt===!0;let lt=A(S,ct,ht);X(34067,S,ht);let nt;if(xt){Pt&&C&&e.texStorage2D(34067,lt,Mt,ct.width,ct.height);for(let Z=0;Z<6;Z++){nt=O[Z].mipmaps;for(let st=0;st<nt.length;st++){const vt=nt[st];S.format!==Re?ut!==null?Pt?e.compressedTexSubImage2D(34069+Z,st,0,0,vt.width,vt.height,ut,vt.data):e.compressedTexImage2D(34069+Z,st,Mt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+Z,st,0,0,vt.width,vt.height,ut,pt,vt.data):e.texImage2D(34069+Z,st,Mt,vt.width,vt.height,0,ut,pt,vt.data)}}}else{nt=S.mipmaps,Pt&&C&&(nt.length>0&&lt++,e.texStorage2D(34067,lt,Mt,O[0].width,O[0].height));for(let Z=0;Z<6;Z++)if(L){Pt?e.texSubImage2D(34069+Z,0,0,0,O[Z].width,O[Z].height,ut,pt,O[Z].data):e.texImage2D(34069+Z,0,Mt,O[Z].width,O[Z].height,0,ut,pt,O[Z].data);for(let st=0;st<nt.length;st++){const Ot=nt[st].image[Z].image;Pt?e.texSubImage2D(34069+Z,st+1,0,0,Ot.width,Ot.height,ut,pt,Ot.data):e.texImage2D(34069+Z,st+1,Mt,Ot.width,Ot.height,0,ut,pt,Ot.data)}}else{Pt?e.texSubImage2D(34069+Z,0,0,0,ut,pt,O[Z]):e.texImage2D(34069+Z,0,Mt,ut,pt,O[Z]);for(let st=0;st<nt.length;st++){const vt=nt[st];Pt?e.texSubImage2D(34069+Z,st+1,0,0,ut,pt,vt.image[Z]):e.texImage2D(34069+Z,st+1,Mt,ut,pt,vt.image[Z])}}}T(S,ht)&&I(34067),ot.__version=et.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function at(E,S,V,tt,et){const ot=s.convert(V.format,V.encoding),xt=s.convert(V.type),L=v(V.internalFormat,ot,xt,V.encoding);n.get(S).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,L,S.width,S.height,S.depth,0,ot,xt,null):e.texImage2D(et,0,L,S.width,S.height,0,ot,xt,null)),e.bindFramebuffer(36160,E),Rt(S)?d.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(V).__webglTexture,0,Ht(S)):r.framebufferTexture2D(36160,tt,et,n.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function Lt(E,S,V){if(r.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let tt=33189;if(V||Rt(S)){const et=S.depthTexture;et&&et.isDepthTexture&&(et.type===fn?tt=36012:et.type===dn&&(tt=33190));const ot=Ht(S);Rt(S)?d.renderbufferStorageMultisampleEXT(36161,ot,tt,S.width,S.height):r.renderbufferStorageMultisample(36161,ot,tt,S.width,S.height)}else r.renderbufferStorage(36161,tt,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const tt=Ht(S);V&&Rt(S)===!1?r.renderbufferStorageMultisample(36161,tt,35056,S.width,S.height):Rt(S)?d.renderbufferStorageMultisampleEXT(36161,tt,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const tt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0;et<tt.length;et++){const ot=tt[et],xt=s.convert(ot.format,ot.encoding),L=s.convert(ot.type),O=v(ot.internalFormat,xt,L,ot.encoding),ct=Ht(S);V&&Rt(S)===!1?r.renderbufferStorageMultisample(36161,ct,O,S.width,S.height):Rt(S)?d.renderbufferStorageMultisampleEXT(36161,ct,O,S.width,S.height):r.renderbufferStorage(36161,O,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function yt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const tt=n.get(S.depthTexture).__webglTexture,et=Ht(S);if(S.depthTexture.format===mn)Rt(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):r.framebufferTexture2D(36160,36096,3553,tt,0);else if(S.depthTexture.format===Kn)Rt(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):r.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function ft(E){const S=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");yt(S.__webglFramebuffer,E)}else if(V){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=r.createRenderbuffer(),Lt(S.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Lt(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function Ut(E,S,V){const tt=n.get(E);S!==void 0&&at(tt.__webglFramebuffer,E,E.texture,36064,3553),V!==void 0&&ft(E)}function jt(E){const S=E.texture,V=n.get(E),tt=n.get(S);E.addEventListener("dispose",Q),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=S.version,o.memory.textures++);const et=E.isWebGLCubeRenderTarget===!0,ot=E.isWebGLMultipleRenderTargets===!0,xt=y(E)||a;if(et){V.__webglFramebuffer=[];for(let L=0;L<6;L++)V.__webglFramebuffer[L]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),ot)if(i.drawBuffers){const L=E.texture;for(let O=0,ct=L.length;O<ct;O++){const ht=n.get(L[O]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Rt(E)===!1){const L=ot?S:[S];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let O=0;O<L.length;O++){const ct=L[O];V.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[O]);const ht=s.convert(ct.format,ct.encoding),ut=s.convert(ct.type),pt=v(ct.internalFormat,ht,ut,ct.encoding,E.isXRRenderTarget===!0),Mt=Ht(E);r.renderbufferStorageMultisample(36161,Mt,pt,E.width,E.height),r.framebufferRenderbuffer(36160,36064+O,36161,V.__webglColorRenderbuffer[O])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(V.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),X(34067,S,xt);for(let L=0;L<6;L++)at(V.__webglFramebuffer[L],E,S,36064,34069+L);T(S,xt)&&I(34067),e.unbindTexture()}else if(ot){const L=E.texture;for(let O=0,ct=L.length;O<ct;O++){const ht=L[O],ut=n.get(ht);e.bindTexture(3553,ut.__webglTexture),X(3553,ht,xt),at(V.__webglFramebuffer,E,ht,36064+O,3553),T(ht,xt)&&I(3553)}e.unbindTexture()}else{let L=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?L=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(L,tt.__webglTexture),X(L,S,xt),at(V.__webglFramebuffer,E,S,36064,L),T(S,xt)&&I(L),e.unbindTexture()}E.depthBuffer&&ft(E)}function Vt(E){const S=y(E)||a,V=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,et=V.length;tt<et;tt++){const ot=V[tt];if(T(ot,S)){const xt=E.isWebGLCubeRenderTarget?34067:3553,L=n.get(ot).__webglTexture;e.bindTexture(xt,L),I(xt),e.unbindTexture()}}}function ee(E){if(a&&E.samples>0&&Rt(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],V=E.width,tt=E.height;let et=16384;const ot=[],xt=E.stencilBuffer?33306:36096,L=n.get(E),O=E.isWebGLMultipleRenderTargets===!0;if(O)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ct,36161,null),e.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ct,3553,null,0);e.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,L.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){ot.push(36064+ct),E.depthBuffer&&ot.push(xt);const ht=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ht===!1&&(E.depthBuffer&&(et|=256),E.stencilBuffer&&(et|=1024)),O&&r.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ct]),ht===!0&&(r.invalidateFramebuffer(36008,[xt]),r.invalidateFramebuffer(36009,[xt])),O){const ut=n.get(S[ct]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ut,0)}r.blitFramebuffer(0,0,V,tt,0,0,V,tt,et,9728),m&&r.invalidateFramebuffer(36008,ot)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),O)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ct,36161,L.__webglColorRenderbuffer[ct]);const ht=n.get(S[ct]).__webglTexture;e.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ct,3553,ht,0)}e.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Ht(E){return Math.min(h,E.samples)}function Rt(E){const S=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(E){const S=o.render.frame;_.get(E)!==S&&(_.set(E,S),E.update())}function re(E,S){const V=E.encoding,tt=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Js||V!==xn&&(V===kt?a===!1?t.has("EXT_sRGB")===!0&&tt===Re?(E.format=Js,E.minFilter=xe,E.generateMipmaps=!1):S=Za.sRGBToLinear(S):(tt!==Re||et!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),S}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=U,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=J,this.rebindTextures=Ut,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Rt}function pf(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===_n)return 5121;if(s===ol)return 32819;if(s===ll)return 32820;if(s===sl)return 5120;if(s===rl)return 5122;if(s===qa)return 5123;if(s===al)return 5124;if(s===dn)return 5125;if(s===fn)return 5126;if(s===hi)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cl)return 6406;if(s===Re)return 6408;if(s===hl)return 6409;if(s===dl)return 6410;if(s===mn)return 6402;if(s===Kn)return 34041;if(s===fl)return 6403;if(s===ul)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Js)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===pl)return 36244;if(s===ml)return 33319;if(s===gl)return 33320;if(s===_l)return 36249;if(s===cs||s===us||s===hs||s===ds)if(o===kt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ds)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yr||s===br||s===wr||s===Er)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===br)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Er)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tr||s===Ar)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Tr)return o===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ar)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lr||s===Cr||s===Dr||s===Rr||s===Pr||s===Ir||s===Fr||s===Nr||s===Or||s===zr||s===Ur||s===Br||s===Gr||s===kr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Lr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ir)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Or)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ur)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Br)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kr)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Vr)return o===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Yn?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class mf extends fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wi extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gf={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const M=new Wi;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[p.jointName]=M,c.add(M)}const g=c.joints[p.jointName];f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=f.radius),g.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class _f extends be{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:mn,u!==mn&&u!==Kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mn&&(n=dn),n===void 0&&u===Kn&&(n=Yn),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ae,this.minFilter=l!==void 0?l:ae,this.flipY=!1,this.generateMipmaps=!1}}class xf extends yn{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,d=null,m=null;const _=e.getContextAttributes();let p=null,f=null;const g=[],M=[],w=new fe;w.layers.enable(1),w.viewport=new zt;const y=new fe;y.layers.enable(2),y.viewport=new zt;const x=[w,y],T=new mf;T.layers.enable(1),T.layers.enable(2);let I=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let U=g[F];return U===void 0&&(U=new Gs,g[F]=U),U.getTargetRaySpace()},this.getControllerGrip=function(F){let U=g[F];return U===void 0&&(U=new Gs,g[F]=U),U.getGripSpace()},this.getHand=function(F){let U=g[F];return U===void 0&&(U=new Gs,g[F]=U),U.getHandSpace()};function A(F){const U=M.indexOf(F.inputSource);if(U===-1)return;const K=g[U];K!==void 0&&K.dispatchEvent({type:F.type,data:F.inputSource})}function D(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",H);for(let F=0;F<g.length;F++){const U=M[F];U!==null&&(M[F]=null,g[F].disconnect(U))}I=null,v=null,t.setRenderTarget(p),d=null,h=null,u=null,i=null,f=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",D),i.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:d}),f=new vn(d.framebufferWidth,d.framebufferHeight,{format:Re,type:_n,encoding:t.outputEncoding,stencilBuffer:_.stencil})}else{let U=null,K=null,Y=null;_.depth&&(Y=_.stencil?35056:33190,U=_.stencil?Kn:mn,K=_.stencil?Yn:dn);const J={colorFormat:32856,depthFormat:Y,scaleFactor:s};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(J),i.updateRenderState({layers:[h]}),f=new vn(h.textureWidth,h.textureHeight,{format:Re,type:_n,depthTexture:new _f(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:_.stencil,encoding:t.outputEncoding,samples:_.antialias?4:0});const rt=t.properties.get(f);rt.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(F){for(let U=0;U<F.removed.length;U++){const K=F.removed[U],Y=M.indexOf(K);Y>=0&&(M[Y]=null,g[Y].dispatchEvent({type:"disconnected",data:K}))}for(let U=0;U<F.added.length;U++){const K=F.added[U];let Y=M.indexOf(K);if(Y===-1){for(let rt=0;rt<g.length;rt++)if(rt>=M.length){M.push(K),Y=rt;break}else if(M[rt]===null){M[rt]=K,Y=rt;break}if(Y===-1)break}const J=g[Y];J&&J.dispatchEvent({type:"connected",data:K})}}const Q=new R,z=new R;function P(F,U,K){Q.setFromMatrixPosition(U.matrixWorld),z.setFromMatrixPosition(K.matrixWorld);const Y=Q.distanceTo(z),J=U.projectionMatrix.elements,rt=K.projectionMatrix.elements,dt=J[14]/(J[10]-1),X=J[14]/(J[10]+1),At=(J[9]+1)/J[5],mt=(J[9]-1)/J[5],gt=(J[8]-1)/J[0],at=(rt[8]+1)/rt[0],Lt=dt*gt,yt=dt*at,ft=Y/(-gt+at),Ut=ft*-gt;U.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ut),F.translateZ(ft),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const jt=dt+ft,Vt=X+ft,ee=Lt-Ut,Ht=yt+(Y-Ut),Rt=At*X/Vt*jt,se=mt*X/Vt*jt;F.projectionMatrix.makePerspective(ee,Ht,Rt,se,jt,Vt)}function G(F,U){U===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(U.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;T.near=y.near=w.near=F.near,T.far=y.far=w.far=F.far,(I!==T.near||v!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,v=T.far);const U=F.parent,K=T.cameras;G(T,U);for(let J=0;J<K.length;J++)G(K[J],U);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),F.matrix.copy(T.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const Y=F.children;for(let J=0,rt=Y.length;J<rt;J++)Y[J].updateMatrixWorld(!0);K.length===2?P(T,w,y):T.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)};let j=null;function $(F,U){if(c=U.getViewerPose(l||o),m=U,c!==null){const K=c.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let Y=!1;K.length!==T.cameras.length&&(T.cameras.length=0,Y=!0);for(let J=0;J<K.length;J++){const rt=K[J];let dt=null;if(d!==null)dt=d.getViewport(rt);else{const At=u.getViewSubImage(h,rt);dt=At.viewport,J===0&&(t.setRenderTargetTextures(f,At.colorTexture,h.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(f))}let X=x[J];X===void 0&&(X=new fe,X.layers.enable(J),X.viewport=new zt,x[J]=X),X.matrix.fromArray(rt.transform.matrix),X.projectionMatrix.fromArray(rt.projectionMatrix),X.viewport.set(dt.x,dt.y,dt.width,dt.height),J===0&&T.matrix.copy(X.matrix),Y===!0&&T.cameras.push(X)}}for(let K=0;K<g.length;K++){const Y=M[K],J=g[K];Y!==null&&J!==void 0&&J.update(Y,U,l||o)}j&&j(F,U),m=null}const k=new so;k.setAnimationLoop($),this.setAnimationLoop=function(F){j=F},this.dispose=function(){}}}function vf(r,t){function e(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,g,M,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,w)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),_(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,g,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Se&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Se&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=t.get(f).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let M;f.map?M=f.map:f.specularMap?M=f.specularMap:f.displacementMap?M=f.displacementMap:f.normalMap?M=f.normalMap:f.bumpMap?M=f.bumpMap:f.roughnessMap?M=f.roughnessMap:f.metalnessMap?M=f.metalnessMap:f.alphaMap?M=f.alphaMap:f.emissiveMap?M=f.emissiveMap:f.clearcoatMap?M=f.clearcoatMap:f.clearcoatNormalMap?M=f.clearcoatNormalMap:f.clearcoatRoughnessMap?M=f.clearcoatRoughnessMap:f.iridescenceMap?M=f.iridescenceMap:f.iridescenceThicknessMap?M=f.iridescenceThicknessMap:f.specularIntensityMap?M=f.specularIntensityMap:f.specularColorMap?M=f.specularColorMap:f.transmissionMap?M=f.transmissionMap:f.thicknessMap?M=f.thicknessMap:f.sheenColorMap?M=f.sheenColorMap:f.sheenRoughnessMap&&(M=f.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let w;f.aoMap?w=f.aoMap:f.lightMap&&(w=f.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,g,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=M*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Se&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Mf(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(35375):0;function l(M,w){const y=w.program;n.uniformBlockBinding(M,y)}function c(M,w){let y=i[M.id];y===void 0&&(_(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",f));const x=w.program;n.updateUBOMapping(M,x);const T=t.render.frame;s[M.id]!==T&&(d(M),s[M.id]=T)}function u(M){const w=h();M.__bindingPointIndex=w;const y=r.createBuffer(),x=M.__size,T=M.usage;return r.bindBuffer(35345,y),r.bufferData(35345,x,T),r.bindBuffer(35345,null),r.bindBufferBase(35345,w,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=i[M.id],y=M.uniforms,x=M.__cache;r.bindBuffer(35345,w);for(let T=0,I=y.length;T<I;T++){const v=y[T];if(m(v,T,x)===!0){const A=v.value,D=v.__offset;typeof A=="number"?(v.__data[0]=A,r.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):A.toArray(v.__data),r.bufferSubData(35345,D,v.__data))}}r.bindBuffer(35345,null)}function m(M,w,y){const x=M.value;if(y[w]===void 0)return typeof x=="number"?y[w]=x:y[w]=x.clone(),!0;if(typeof x=="number"){if(y[w]!==x)return y[w]=x,!0}else{const T=y[w];if(T.equals(x)===!1)return T.copy(x),!0}return!1}function _(M){const w=M.uniforms;let y=0;const x=16;let T=0;for(let I=0,v=w.length;I<v;I++){const A=w[I],D=p(A);if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,I>0){T=y%x;const H=x-T;T!==0&&H-D.boundary<0&&(y+=x-T,A.__offset=y)}y+=D.storage}return T=y%x,T>0&&(y+=x-T),M.__size=y,M.__cache={},this}function p(M){const w=M.value,y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function f(M){const w=M.target;w.removeEventListener("dispose",f);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function g(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}function Sf(){const r=di("canvas");return r.style.display="block",r}function co(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:Sf(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xn,this.physicallyCorrectLights=!1,this.toneMapping=He,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,g=0,M=0,w=null,y=-1,x=null;const T=new zt,I=new zt;let v=null,A=t.width,D=t.height,H=1,Q=null,z=null;const P=new zt(0,0,A,D),G=new zt(0,0,A,D);let j=!1;const $=new lr;let k=!1,F=!1,U=null;const K=new Xt,Y=new wt,J=new R,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return w===null?H:1}let X=e;function At(b,B){for(let W=0;W<b.length;W++){const N=b[W],q=t.getContext(N,B);if(q!==null)return q}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rr}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),X===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),X=At(B,b),X===null)throw At(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let mt,gt,at,Lt,yt,ft,Ut,jt,Vt,ee,Ht,Rt,se,re,E,S,V,tt,et,ot,xt,L,O,ct;function ht(){mt=new Rh(X),gt=new wh(X,mt,r),mt.init(gt),L=new pf(X,mt,gt),at=new df(X,mt,gt),Lt=new Fh,yt=new Kd,ft=new ff(X,mt,at,yt,gt,L,Lt),Ut=new Th(p),jt=new Dh(p),Vt=new Wl(X,gt),O=new yh(X,mt,Vt,gt),ee=new Ph(X,Vt,Lt,O),Ht=new Uh(X,ee,Vt,Lt),et=new zh(X,gt,ft),S=new Eh(yt),Rt=new $d(p,Ut,jt,mt,gt,O,S),se=new vf(p,yt),re=new Qd,E=new af(mt,gt),tt=new Sh(p,Ut,at,Ht,u,o),V=new hf(p,Ht,gt),ct=new Mf(X,Lt,gt,at),ot=new bh(X,mt,Lt,gt),xt=new Ih(X,mt,Lt,gt),Lt.programs=Rt.programs,p.capabilities=gt,p.extensions=mt,p.properties=yt,p.renderLists=re,p.shadowMap=V,p.state=at,p.info=Lt}ht();const ut=new xf(p,X);this.xr=ut,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(A,D,!1))},this.getSize=function(b){return b.set(A,D)},this.setSize=function(b,B,W){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,D=B,t.width=Math.floor(b*H),t.height=Math.floor(B*H),W!==!1&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(A*H,D*H).floor()},this.setDrawingBufferSize=function(b,B,W){A=b,D=B,H=W,t.width=Math.floor(b*W),t.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,B,W,N){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,B,W,N),at.viewport(T.copy(P).multiplyScalar(H).floor())},this.getScissor=function(b){return b.copy(G)},this.setScissor=function(b,B,W,N){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,B,W,N),at.scissor(I.copy(G).multiplyScalar(H).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(b){at.setScissorTest(j=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){z=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,B=!0,W=!0){let N=0;b&&(N|=16384),B&&(N|=256),W&&(N|=1024),X.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),re.dispose(),E.dispose(),yt.dispose(),Ut.dispose(),jt.dispose(),Ht.dispose(),O.dispose(),ct.dispose(),Rt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",vt),ut.removeEventListener("sessionend",Ot),U&&(U.dispose(),U=null),Wt.stop()};function pt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=Lt.autoReset,B=V.enabled,W=V.autoUpdate,N=V.needsUpdate,q=V.type;ht(),Lt.autoReset=b,V.enabled=B,V.autoUpdate=W,V.needsUpdate=N,V.type=q}function Pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function C(b){const B=b.target;B.removeEventListener("dispose",C),lt(B)}function lt(b){nt(b),yt.remove(b)}function nt(b){const B=yt.get(b).programs;B!==void 0&&(B.forEach(function(W){Rt.releaseProgram(W)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,N,q,_t){B===null&&(B=rt);const St=q.isMesh&&q.matrixWorld.determinant()<0,Et=wo(b,B,W,N,q);at.setMaterial(N,St);let bt=W.index;const Nt=W.attributes.position;if(bt===null){if(Nt===void 0||Nt.count===0)return}else if(bt.count===0)return;let Ct=1;N.wireframe===!0&&(bt=ee.getWireframeAttribute(W),Ct=2),O.setup(q,N,Et,W,bt);let Dt,Gt=ot;bt!==null&&(Dt=Vt.get(bt),Gt=xt,Gt.setIndex(Dt));const sn=bt!==null?bt.count:Nt.count,wn=W.drawRange.start*Ct,En=W.drawRange.count*Ct,Ce=_t!==null?_t.start*Ct:0,Ft=_t!==null?_t.count*Ct:1/0,Tn=Math.max(wn,Ce),qt=Math.min(sn,wn+En,Ce+Ft)-1,ge=Math.max(0,qt-Tn+1);if(ge!==0){if(q.isMesh)N.wireframe===!0?(at.setLineWidth(N.wireframeLinewidth*dt()),Gt.setMode(1)):Gt.setMode(4);else if(q.isLine){let Ye=N.linewidth;Ye===void 0&&(Ye=1),at.setLineWidth(Ye*dt()),q.isLineSegments?Gt.setMode(1):q.isLineLoop?Gt.setMode(2):Gt.setMode(3)}else q.isPoints?Gt.setMode(0):q.isSprite&&Gt.setMode(4);if(q.isInstancedMesh)Gt.renderInstances(Tn,ge,q.count);else if(W.isInstancedBufferGeometry){const Ye=Math.min(W.instanceCount,W._maxInstanceCount);Gt.renderInstances(Tn,ge,Ye)}else Gt.render(Tn,ge)}},this.compile=function(b,B){function W(N,q,_t){N.transparent===!0&&N.side===ve?(N.side=Se,N.needsUpdate=!0,yi(N,q,_t),N.side=jn,N.needsUpdate=!0,yi(N,q,_t),N.side=ve):yi(N,q,_t)}d=E.get(b),d.init(),_.push(d),b.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(p.physicallyCorrectLights),b.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let _t=0;_t<q.length;_t++){const St=q[_t];W(St,b,N)}else W(q,b,N)}),_.pop(),d=null};let Z=null;function st(b){Z&&Z(b)}function vt(){Wt.stop()}function Ot(){Wt.start()}const Wt=new so;Wt.setAnimationLoop(st),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(b){Z=b,ut.setAnimationLoop(b),b===null?Wt.stop():Wt.start()},ut.addEventListener("sessionstart",vt),ut.addEventListener("sessionend",Ot),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(B),B=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,B,w),d=E.get(b,_.length),d.init(),_.push(d),K.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(K),F=this.localClippingEnabled,k=S.init(this.clippingPlanes,F,B),h=re.get(b,m.length),h.init(),m.push(h),qe(b,B,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Q,z),k===!0&&S.beginShadows();const W=d.state.shadowsArray;if(V.render(W,b,B),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(h,b),d.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const N=B.cameras;for(let q=0,_t=N.length;q<_t;q++){const St=N[q];Bt(h,b,St,St.viewport)}}else Bt(h,b,B);w!==null&&(ft.updateMultisampleRenderTarget(w),ft.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(p,b,B),O.resetDefaultState(),y=-1,x=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function qe(b,B,W,N){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){N&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const St=Ht.update(b),Et=b.material;Et.visible&&h.push(b,St,Et,W,J.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Lt.render.frame&&(b.skeleton.update(),b.skeleton.frame=Lt.render.frame),!b.frustumCulled||$.intersectsObject(b))){N&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const St=Ht.update(b),Et=b.material;if(Array.isArray(Et)){const bt=St.groups;for(let Nt=0,Ct=bt.length;Nt<Ct;Nt++){const Dt=bt[Nt],Gt=Et[Dt.materialIndex];Gt&&Gt.visible&&h.push(b,St,Gt,W,J.z,Dt)}}else Et.visible&&h.push(b,St,Et,W,J.z,null)}}const _t=b.children;for(let St=0,Et=_t.length;St<Et;St++)qe(_t[St],B,W,N)}function Bt(b,B,W,N){const q=b.opaque,_t=b.transmissive,St=b.transparent;d.setupLightsView(W),_t.length>0&&Fe(q,B,W),N&&at.viewport(T.copy(N)),q.length>0&&me(q,B,W),_t.length>0&&me(_t,B,W),St.length>0&&me(St,B,W),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Fe(b,B,W){const N=gt.isWebGL2;U===null&&(U=new vn(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?hi:_n,minFilter:Ji,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(Y),N?U.setSize(Y.x,Y.y):U.setSize(Qs(Y.x),Qs(Y.y));const q=p.getRenderTarget();p.setRenderTarget(U),p.clear();const _t=p.toneMapping;p.toneMapping=He,me(b,B,W),p.toneMapping=_t,ft.updateMultisampleRenderTarget(U),ft.updateRenderTargetMipmap(U),p.setRenderTarget(q)}function me(b,B,W){const N=B.isScene===!0?B.overrideMaterial:null;for(let q=0,_t=b.length;q<_t;q++){const St=b[q],Et=St.object,bt=St.geometry,Nt=N===null?St.material:N,Ct=St.group;Et.layers.test(W.layers)&&bo(Et,B,W,bt,Nt,Ct)}}function bo(b,B,W,N,q,_t){b.onBeforeRender(p,B,W,N,q,_t),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(p,B,W,N,b,_t),q.transparent===!0&&q.side===ve?(q.side=Se,q.needsUpdate=!0,p.renderBufferDirect(W,B,N,q,b,_t),q.side=jn,q.needsUpdate=!0,p.renderBufferDirect(W,B,N,q,b,_t),q.side=ve):p.renderBufferDirect(W,B,N,q,b,_t),b.onAfterRender(p,B,W,N,q,_t)}function yi(b,B,W){B.isScene!==!0&&(B=rt);const N=yt.get(b),q=d.state.lights,_t=d.state.shadowsArray,St=q.state.version,Et=Rt.getParameters(b,q.state,_t,B,W),bt=Rt.getProgramCacheKey(Et);let Nt=N.programs;N.environment=b.isMeshStandardMaterial?B.environment:null,N.fog=B.fog,N.envMap=(b.isMeshStandardMaterial?jt:Ut).get(b.envMap||N.environment),Nt===void 0&&(b.addEventListener("dispose",C),Nt=new Map,N.programs=Nt);let Ct=Nt.get(bt);if(Ct!==void 0){if(N.currentProgram===Ct&&N.lightsStateVersion===St)return dr(b,Et),Ct}else Et.uniforms=Rt.getUniforms(b),b.onBuild(W,Et,p),b.onBeforeCompile(Et,p),Ct=Rt.acquireProgram(Et,bt),Nt.set(bt,Ct),N.uniforms=Et.uniforms;const Dt=N.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=S.uniform),dr(b,Et),N.needsLights=To(b),N.lightsStateVersion=St,N.needsLights&&(Dt.ambientLightColor.value=q.state.ambient,Dt.lightProbe.value=q.state.probe,Dt.directionalLights.value=q.state.directional,Dt.directionalLightShadows.value=q.state.directionalShadow,Dt.spotLights.value=q.state.spot,Dt.spotLightShadows.value=q.state.spotShadow,Dt.rectAreaLights.value=q.state.rectArea,Dt.ltc_1.value=q.state.rectAreaLTC1,Dt.ltc_2.value=q.state.rectAreaLTC2,Dt.pointLights.value=q.state.point,Dt.pointLightShadows.value=q.state.pointShadow,Dt.hemisphereLights.value=q.state.hemi,Dt.directionalShadowMap.value=q.state.directionalShadowMap,Dt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Dt.spotShadowMap.value=q.state.spotShadowMap,Dt.spotLightMatrix.value=q.state.spotLightMatrix,Dt.spotLightMap.value=q.state.spotLightMap,Dt.pointShadowMap.value=q.state.pointShadowMap,Dt.pointShadowMatrix.value=q.state.pointShadowMatrix);const Gt=Ct.getUniforms(),sn=ji.seqWithValue(Gt.seq,Dt);return N.currentProgram=Ct,N.uniformsList=sn,Ct}function dr(b,B){const W=yt.get(b);W.outputEncoding=B.outputEncoding,W.instancing=B.instancing,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function wo(b,B,W,N,q){B.isScene!==!0&&(B=rt),ft.resetTextureUnits();const _t=B.fog,St=N.isMeshStandardMaterial?B.environment:null,Et=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:xn,bt=(N.isMeshStandardMaterial?jt:Ut).get(N.envMap||St),Nt=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ct=!!N.normalMap&&!!W.attributes.tangent,Dt=!!W.morphAttributes.position,Gt=!!W.morphAttributes.normal,sn=!!W.morphAttributes.color,wn=N.toneMapped?p.toneMapping:He,En=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ce=En!==void 0?En.length:0,Ft=yt.get(N),Tn=d.state.lights;if(k===!0&&(F===!0||b!==x)){const ce=b===x&&N.id===y;S.setState(N,b,ce)}let qt=!1;N.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Tn.state.version||Ft.outputEncoding!==Et||q.isInstancedMesh&&Ft.instancing===!1||!q.isInstancedMesh&&Ft.instancing===!0||q.isSkinnedMesh&&Ft.skinning===!1||!q.isSkinnedMesh&&Ft.skinning===!0||Ft.envMap!==bt||N.fog===!0&&Ft.fog!==_t||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==S.numPlanes||Ft.numIntersection!==S.numIntersection)||Ft.vertexAlphas!==Nt||Ft.vertexTangents!==Ct||Ft.morphTargets!==Dt||Ft.morphNormals!==Gt||Ft.morphColors!==sn||Ft.toneMapping!==wn||gt.isWebGL2===!0&&Ft.morphTargetsCount!==Ce)&&(qt=!0):(qt=!0,Ft.__version=N.version);let ge=Ft.currentProgram;qt===!0&&(ge=yi(N,B,q));let Ye=!1,ni=!1,as=!1;const ne=ge.getUniforms(),rn=Ft.uniforms;if(at.useProgram(ge.program)&&(Ye=!0,ni=!0,as=!0),N.id!==y&&(y=N.id,ni=!0),Ye||x!==b){if(ne.setValue(X,"projectionMatrix",b.projectionMatrix),gt.logarithmicDepthBuffer&&ne.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),x!==b&&(x=b,ni=!0,as=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const ce=ne.map.cameraPosition;ce!==void 0&&ce.setValue(X,J.setFromMatrixPosition(b.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ne.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&ne.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(q.isSkinnedMesh){ne.setOptional(X,q,"bindMatrix"),ne.setOptional(X,q,"bindMatrixInverse");const ce=q.skeleton;ce&&(gt.floatVertexTextures?(ce.boneTexture===null&&ce.computeBoneTexture(),ne.setValue(X,"boneTexture",ce.boneTexture,ft),ne.setValue(X,"boneTextureSize",ce.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const os=W.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&gt.isWebGL2===!0)&&et.update(q,W,N,ge),(ni||Ft.receiveShadow!==q.receiveShadow)&&(Ft.receiveShadow=q.receiveShadow,ne.setValue(X,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(rn.envMap.value=bt,rn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),ni&&(ne.setValue(X,"toneMappingExposure",p.toneMappingExposure),Ft.needsLights&&Eo(rn,as),_t&&N.fog===!0&&se.refreshFogUniforms(rn,_t),se.refreshMaterialUniforms(rn,N,H,D,U),ji.upload(X,Ft.uniformsList,rn,ft)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ji.upload(X,Ft.uniformsList,rn,ft),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ne.setValue(X,"center",q.center),ne.setValue(X,"modelViewMatrix",q.modelViewMatrix),ne.setValue(X,"normalMatrix",q.normalMatrix),ne.setValue(X,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const ce=N.uniformsGroups;for(let ls=0,Ao=ce.length;ls<Ao;ls++)if(gt.isWebGL2){const fr=ce[ls];ct.update(fr,ge),ct.bind(fr,ge)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ge}function Eo(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function To(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,B,W){yt.get(b.texture).__webglTexture=B,yt.get(b.depthTexture).__webglTexture=W;const N=yt.get(b);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const W=yt.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,W=0){w=b,g=B,M=W;let N=!0;if(b){const bt=yt.get(b);bt.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(36160,null),N=!1):bt.__webglFramebuffer===void 0?ft.setupRenderTarget(b):bt.__hasExternalTextures&&ft.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture)}let q=null,_t=!1,St=!1;if(b){const bt=b.texture;(bt.isData3DTexture||bt.isDataArrayTexture)&&(St=!0);const Nt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(q=Nt[B],_t=!0):gt.isWebGL2&&b.samples>0&&ft.useMultisampledRTT(b)===!1?q=yt.get(b).__webglMultisampledFramebuffer:q=Nt,T.copy(b.viewport),I.copy(b.scissor),v=b.scissorTest}else T.copy(P).multiplyScalar(H).floor(),I.copy(G).multiplyScalar(H).floor(),v=j;if(at.bindFramebuffer(36160,q)&&gt.drawBuffers&&N&&at.drawBuffers(b,q),at.viewport(T),at.scissor(I),at.setScissorTest(v),_t){const bt=yt.get(b.texture);X.framebufferTexture2D(36160,36064,34069+B,bt.__webglTexture,W)}else if(St){const bt=yt.get(b.texture),Nt=B||0;X.framebufferTextureLayer(36160,36064,bt.__webglTexture,W||0,Nt)}y=-1},this.readRenderTargetPixels=function(b,B,W,N,q,_t,St){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){at.bindFramebuffer(36160,Et);try{const bt=b.texture,Nt=bt.format,Ct=bt.type;if(Nt!==Re&&L.convert(Nt)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Ct===hi&&(mt.has("EXT_color_buffer_half_float")||gt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Ct!==_n&&L.convert(Ct)!==X.getParameter(35738)&&!(Ct===fn&&(gt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-N&&W>=0&&W<=b.height-q&&X.readPixels(B,W,N,q,L.convert(Nt),L.convert(Ct),_t)}finally{const bt=w!==null?yt.get(w).__webglFramebuffer:null;at.bindFramebuffer(36160,bt)}}},this.copyFramebufferToTexture=function(b,B,W=0){const N=Math.pow(2,-W),q=Math.floor(B.image.width*N),_t=Math.floor(B.image.height*N);ft.setTexture2D(B,0),X.copyTexSubImage2D(3553,W,0,0,b.x,b.y,q,_t),at.unbindTexture()},this.copyTextureToTexture=function(b,B,W,N=0){const q=B.image.width,_t=B.image.height,St=L.convert(W.format),Et=L.convert(W.type);ft.setTexture2D(W,0),X.pixelStorei(37440,W.flipY),X.pixelStorei(37441,W.premultiplyAlpha),X.pixelStorei(3317,W.unpackAlignment),B.isDataTexture?X.texSubImage2D(3553,N,b.x,b.y,q,_t,St,Et,B.image.data):B.isCompressedTexture?X.compressedTexSubImage2D(3553,N,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,St,B.mipmaps[0].data):X.texSubImage2D(3553,N,b.x,b.y,St,Et,B.image),N===0&&W.generateMipmaps&&X.generateMipmap(3553),at.unbindTexture()},this.copyTextureToTexture3D=function(b,B,W,N,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=b.max.x-b.min.x+1,St=b.max.y-b.min.y+1,Et=b.max.z-b.min.z+1,bt=L.convert(N.format),Nt=L.convert(N.type);let Ct;if(N.isData3DTexture)ft.setTexture3D(N,0),Ct=32879;else if(N.isDataArrayTexture)ft.setTexture2DArray(N,0),Ct=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,N.flipY),X.pixelStorei(37441,N.premultiplyAlpha),X.pixelStorei(3317,N.unpackAlignment);const Dt=X.getParameter(3314),Gt=X.getParameter(32878),sn=X.getParameter(3316),wn=X.getParameter(3315),En=X.getParameter(32877),Ce=W.isCompressedTexture?W.mipmaps[0]:W.image;X.pixelStorei(3314,Ce.width),X.pixelStorei(32878,Ce.height),X.pixelStorei(3316,b.min.x),X.pixelStorei(3315,b.min.y),X.pixelStorei(32877,b.min.z),W.isDataTexture||W.isData3DTexture?X.texSubImage3D(Ct,q,B.x,B.y,B.z,_t,St,Et,bt,Nt,Ce.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ct,q,B.x,B.y,B.z,_t,St,Et,bt,Ce.data)):X.texSubImage3D(Ct,q,B.x,B.y,B.z,_t,St,Et,bt,Nt,Ce),X.pixelStorei(3314,Dt),X.pixelStorei(32878,Gt),X.pixelStorei(3316,sn),X.pixelStorei(3315,wn),X.pixelStorei(32877,En),q===0&&N.generateMipmaps&&X.generateMipmap(Ct),at.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ft.setTextureCube(b,0):b.isData3DTexture?ft.setTexture3D(b,0):b.isDataArrayTexture?ft.setTexture2DArray(b,0):ft.setTexture2D(b,0),at.unbindTexture()},this.resetState=function(){g=0,M=0,w=null,at.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class yf extends co{}yf.prototype.isWebGL1Renderer=!0;class bf extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class uo extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ta=new R,Aa=new R,La=new Xt,ks=new Ja,Xi=new Qi;class wf extends ie{constructor(t=new Ie,e=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ta.fromBufferAttribute(e,i-1),Aa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ta.distanceTo(Aa);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(i),Xi.radius+=s,t.ray.intersectsSphere(Xi)===!1)return;La.copy(i).invert(),ks.copy(t.ray).applyMatrix4(La);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,u=new R,h=new R,d=new R,m=this.isLineSegments?2:1,_=n.index,f=n.attributes.position;if(_!==null){const g=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let w=g,y=M-1;w<y;w+=m){const x=_.getX(w),T=_.getX(w+1);if(c.fromBufferAttribute(f,x),u.fromBufferAttribute(f,T),ks.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(d);v<t.near||v>t.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),M=Math.min(f.count,o.start+o.count);for(let w=g,y=M-1;w<y;w+=m){if(c.fromBufferAttribute(f,w),u.fromBufferAttribute(f,w+1),ks.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ca=new R,Da=new R;class Ef extends wf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Ca.fromBufferAttribute(e,i),Da.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ca.distanceTo(Da);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ti extends Ie{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,d=new R,m=[],_=[],p=[],f=[];for(let g=0;g<=n;g++){const M=[],w=g/n;let y=0;g==0&&o==0?y=.5/e:g==n&&l==Math.PI&&(y=-.5/e);for(let x=0;x<=e;x++){const T=x/e;h.x=-t*Math.cos(i+T*s)*Math.sin(o+w*a),h.y=t*Math.cos(o+w*a),h.z=t*Math.sin(i+T*s)*Math.sin(o+w*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),p.push(d.x,d.y,d.z),f.push(T+y,1-w),M.push(c++)}u.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const w=u[g][M+1],y=u[g][M],x=u[g+1][M],T=u[g+1][M+1];(g!==0||o>0)&&m.push(w,y,T),(g!==n-1||l<Math.PI)&&m.push(y,x,T)}this.setIndex(m),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(f,2))}static fromJSON(t){return new ti(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tf extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Af extends bn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ra={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Lf{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Cf=new Lf;class ho{constructor(t){this.manager=t!==void 0?t:Cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Df extends ho{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ra.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=di("img");function l(){u(),Ra.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class fo extends ho{constructor(t){super(t)}load(t,e,n,i){const s=new be,o=new Df(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class po extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Vs=new Xt,Pa=new R,Ia=new R;class Rf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pa),Ia.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ia),e.updateMatrixWorld(),Vs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fa=new Xt,ai=new R,Hs=new R;class Pf extends Rf{constructor(){super(new fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ai.setFromMatrixPosition(t.matrixWorld),n.position.copy(ai),Hs.copy(n.position),Hs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hs),n.updateMatrixWorld(),i.makeTranslation(-ai.x,-ai.y,-ai.z),Fa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa)}}class If extends po{constructor(t,e,n=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ff extends po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Na{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nf extends Ef{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ie;i.setAttribute("position",new le(e,3)),i.setAttribute("color",new le(n,3));const s=new uo({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new It,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rr);const Oa={type:"change"},Ws={type:"start"},za={type:"end"};class Of extends yn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:An.ROTATE,MIDDLE:An.DOLLY,RIGHT:An.PAN},this.touches={ONE:Ln.ROTATE,TWO:Ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",re),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Oa),n.update(),s=i.NONE},this.update=function(){const L=new R,O=new Mn().setFromUnitVectors(t.up,new R(0,1,0)),ct=O.clone().invert(),ht=new R,ut=new Mn,pt=2*Math.PI;return function(){const Pt=n.object.position;L.copy(Pt).sub(n.target),L.applyQuaternion(O),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&A(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let C=n.minAzimuthAngle,lt=n.maxAzimuthAngle;return isFinite(C)&&isFinite(lt)&&(C<-Math.PI?C+=pt:C>Math.PI&&(C-=pt),lt<-Math.PI?lt+=pt:lt>Math.PI&&(lt-=pt),C<=lt?a.theta=Math.max(C,Math.min(lt,a.theta)):a.theta=a.theta>(C+lt)/2?Math.max(C,a.theta):Math.min(lt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(ct),Pt.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ht.distanceToSquared(n.object.position)>o||8*(1-ut.dot(n.object.quaternion))>o?(n.dispatchEvent(Oa),ht.copy(n.object.position),ut.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",Ut),n.domElement.removeEventListener("pointercancel",ee),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",jt),n.domElement.removeEventListener("pointerup",Vt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",re)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Na,l=new Na;let c=1;const u=new R;let h=!1;const d=new wt,m=new wt,_=new wt,p=new wt,f=new wt,g=new wt,M=new wt,w=new wt,y=new wt,x=[],T={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function A(L){l.theta-=L}function D(L){l.phi-=L}const H=function(){const L=new R;return function(ct,ht){L.setFromMatrixColumn(ht,0),L.multiplyScalar(-ct),u.add(L)}}(),Q=function(){const L=new R;return function(ct,ht){n.screenSpacePanning===!0?L.setFromMatrixColumn(ht,1):(L.setFromMatrixColumn(ht,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ct),u.add(L)}}(),z=function(){const L=new R;return function(ct,ht){const ut=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;L.copy(pt).sub(n.target);let Mt=L.length();Mt*=Math.tan(n.object.fov/2*Math.PI/180),H(2*ct*Mt/ut.clientHeight,n.object.matrix),Q(2*ht*Mt/ut.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(ct*(n.object.right-n.object.left)/n.object.zoom/ut.clientWidth,n.object.matrix),Q(ht*(n.object.top-n.object.bottom)/n.object.zoom/ut.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(L){d.set(L.clientX,L.clientY)}function $(L){M.set(L.clientX,L.clientY)}function k(L){p.set(L.clientX,L.clientY)}function F(L){m.set(L.clientX,L.clientY),_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;A(2*Math.PI*_.x/O.clientHeight),D(2*Math.PI*_.y/O.clientHeight),d.copy(m),n.update()}function U(L){w.set(L.clientX,L.clientY),y.subVectors(w,M),y.y>0?P(v()):y.y<0&&G(v()),M.copy(w),n.update()}function K(L){f.set(L.clientX,L.clientY),g.subVectors(f,p).multiplyScalar(n.panSpeed),z(g.x,g.y),p.copy(f),n.update()}function Y(L){L.deltaY<0?G(v()):L.deltaY>0&&P(v()),n.update()}function J(L){let O=!1;switch(L.code){case n.keys.UP:z(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),O=!0;break}O&&(L.preventDefault(),n.update())}function rt(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),O=.5*(x[0].pageY+x[1].pageY);d.set(L,O)}}function dt(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const L=.5*(x[0].pageX+x[1].pageX),O=.5*(x[0].pageY+x[1].pageY);p.set(L,O)}}function X(){const L=x[0].pageX-x[1].pageX,O=x[0].pageY-x[1].pageY,ct=Math.sqrt(L*L+O*O);M.set(0,ct)}function At(){n.enableZoom&&X(),n.enablePan&&dt()}function mt(){n.enableZoom&&X(),n.enableRotate&&rt()}function gt(L){if(x.length==1)m.set(L.pageX,L.pageY);else{const ct=xt(L),ht=.5*(L.pageX+ct.x),ut=.5*(L.pageY+ct.y);m.set(ht,ut)}_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;A(2*Math.PI*_.x/O.clientHeight),D(2*Math.PI*_.y/O.clientHeight),d.copy(m)}function at(L){if(x.length===1)f.set(L.pageX,L.pageY);else{const O=xt(L),ct=.5*(L.pageX+O.x),ht=.5*(L.pageY+O.y);f.set(ct,ht)}g.subVectors(f,p).multiplyScalar(n.panSpeed),z(g.x,g.y),p.copy(f)}function Lt(L){const O=xt(L),ct=L.pageX-O.x,ht=L.pageY-O.y,ut=Math.sqrt(ct*ct+ht*ht);w.set(0,ut),y.set(0,Math.pow(w.y/M.y,n.zoomSpeed)),P(y.y),M.copy(w)}function yt(L){n.enableZoom&&Lt(L),n.enablePan&&at(L)}function ft(L){n.enableZoom&&Lt(L),n.enableRotate&&gt(L)}function Ut(L){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",jt),n.domElement.addEventListener("pointerup",Vt)),tt(L),L.pointerType==="touch"?E(L):Ht(L))}function jt(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):Rt(L))}function Vt(L){et(L),x.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",jt),n.domElement.removeEventListener("pointerup",Vt)),n.dispatchEvent(za),s=i.NONE}function ee(L){et(L)}function Ht(L){let O;switch(L.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case An.DOLLY:if(n.enableZoom===!1)return;$(L),s=i.DOLLY;break;case An.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;k(L),s=i.PAN}else{if(n.enableRotate===!1)return;j(L),s=i.ROTATE}break;case An.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;j(L),s=i.ROTATE}else{if(n.enablePan===!1)return;k(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ws)}function Rt(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;F(L);break;case i.DOLLY:if(n.enableZoom===!1)return;U(L);break;case i.PAN:if(n.enablePan===!1)return;K(L);break}}function se(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Ws),Y(L),n.dispatchEvent(za))}function re(L){n.enabled===!1||n.enablePan===!1||J(L)}function E(L){switch(ot(L),x.length){case 1:switch(n.touches.ONE){case Ln.ROTATE:if(n.enableRotate===!1)return;rt(),s=i.TOUCH_ROTATE;break;case Ln.PAN:if(n.enablePan===!1)return;dt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ln.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;At(),s=i.TOUCH_DOLLY_PAN;break;case Ln.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ws)}function S(L){switch(ot(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;gt(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;at(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;yt(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(L),n.update();break;default:s=i.NONE}}function V(L){n.enabled!==!1&&L.preventDefault()}function tt(L){x.push(L)}function et(L){delete T[L.pointerId];for(let O=0;O<x.length;O++)if(x[O].pointerId==L.pointerId){x.splice(O,1);return}}function ot(L){let O=T[L.pointerId];O===void 0&&(O=new wt,T[L.pointerId]=O),O.set(L.pageX,L.pageY)}function xt(L){const O=L.pointerId===x[0].pointerId?x[1]:x[0];return T[O.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",Ut),n.domElement.addEventListener("pointercancel",ee),n.domElement.addEventListener("wheel",se,{passive:!1}),this.update()}}const zf=(r,t,e)=>{const n=2*Math.PI/r,i=Math.cbrt(e*t/Math.pow(n,2)),s=n*i;return{orbitRadius:i,orbitVelocity:s}},Uf=(r,t,e,n,i)=>{let s=-e,o=e,a=-t,l=t;const c=Math.floor(r/i);c-e<0&&(s=c),c+e>n-1&&(o=n-1-c);const u=r%n;return u-t<0&&(a=u),u+t>i-1&&(l=i-1-u),{xOffsetMin:a,xOffsetMax:l,yOffsetMin:s,yOffsetMax:o}},Bf=(r,t,e,n,i)=>{const{xOffsetMin:s,xOffsetMax:o,yOffsetMin:a,yOffsetMax:l}=Uf(r,n,i,t,e),c=[];for(let u=a;u<=l;u++)for(let h=s;h<=o;h++){if(h===0&&u===0)continue;let d=r+e*u+h;c.push(d)}return c},Gf=(r,t,e,n,i)=>{const s=[],o=r.length/3;for(let a=0;a<o;a++){const l=[],c=Bf(a,t,e,n,i);let u=a*3,h=r[u+0],d=r[u+1],m=r[u+2];for(let _ of c){let p=_*3,f=r[p+0],g=r[p+1],M=r[p+2],w=Math.abs(h-f),y=Math.abs(d-g),x=Math.abs(m-M),T=Math.sqrt(w*w+y*y+x*x);l.push([_,T])}s.push(l)}return s},mo=(r,t,e,n,i,s)=>{const o=t*s-e*i,a=-1*(r*s-e*n),l=r*i-t*n;return[o,a,l]},ke=(r,t,e,n,i,s)=>r*n+t*i+e*s,kf=(r,t,e,n,i,s,o,a)=>{const l=r*(1-Math.pow(t,2)),c=Math.cos(s),u=Math.sin(s),h=l*c/(1+t*c),d=l*u/(1+t*c),m=0,_=6.6743*Math.pow(10,-11),p=o*_,f=Math.sin(n),g=Math.cos(n),M=Math.sin(i),w=Math.cos(i),y=Math.sin(e),x=Math.cos(e),T=g*w-f*M*x,I=-g*M-f*w*x,v=f*y,A=f*w+g*M*x,D=-f*M+g*w*x,H=-g*y,Q=M*y,z=w*y,P=x,G=T*h+I*d+v*m,j=A*h+D*d+H*m,$=Q*h+z*d+P*m,k=[G,j,$];if(a){const F=-Math.sqrt(p/l)*u,U=Math.sqrt(p/l)*(t+c),K=0,Y=T*F+I*U+v*K,J=A*F+D*U+H*K,rt=Q*F+z*U+P*K;return{r:k,vel:[Y,J,rt]}}return{r:k}},er=(r,t)=>{const e=t.M_0+2*Math.PI/t.T*r,n=t.e,i=e+(2*n-.25*Math.pow(n,3))*Math.sin(e)+1.25*Math.pow(n,2)*Math.sin(2*e)+13/12*Math.pow(n,3)*Math.sin(3*e),{r:s}=kf(t.a,t.e,t.i,t.Omega,t.omega,i,t.planetM,!1);return s},Xs=Math.PI/180,Vf=5.972*Math.pow(10,24),nr={a:149.598*Math.pow(10,9),e:.0167,i:23.44*Xs,Omega:-11.26064*Xs,omega:102.94719*Xs,T:60*60*24*365,M_0:0,planetM:Vf},Hf=(r,t)=>{const e=Math.pow(10,t);return Math.round(r*e)/e},Wf=(r,t)=>{const e=t.length,n=e/3,i=new Float32Array(e);for(let s=0;s<n;s++){const o=s*3,a=r[t[o+0]*3+0],l=r[t[o+0]*3+1],c=r[t[o+0]*3+2],u=r[t[o+1]*3+0],h=r[t[o+1]*3+1],d=r[t[o+1]*3+2],m=r[t[o+2]*3+0],_=r[t[o+2]*3+1],p=r[t[o+2]*3+2];let[f,g,M]=mo(a-u,l-h,c-d,a-m,l-_,c-p);const w=Math.sqrt(f*f+g*g+M*M);f/=w,g/=w,M/=w,i[o+0]=f,i[o+1]=g,i[o+2]=M}return i},Xf=(r,t)=>{const e=[];for(let n=0;n<t.length;n++)t[n]==r&&(n%3==0?(e.push(t[n]),e.push(t[n+1]),e.push(t[n+2])):n%3==1?(e.push(t[n-1]),e.push(t[n]),e.push(t[n+1])):n%3==2&&(e.push(t[n-2]),e.push(t[n-1]),e.push(t[n])));return e},qf=(r,t,e)=>{const n=t*e,i=[];for(let s=0;s<n;s++)i.push(Xf(s,r));return i},Yf=(r,t)=>{const e=r.length,n=new Float32Array(e*3);for(let i=0;i<e;i++){const s=r[i].length/3,o=i*3;let a=0,l=0,c=0;for(let h=0;h<s;h++){const d=h*3,m=r[i][d+0],_=r[i][d+1],p=r[i][d+2],f=t[m*3+0],g=t[m*3+1],M=t[m*3+2],w=t[_*3+0],y=t[_*3+1],x=t[_*3+2],T=t[p*3+0],I=t[p*3+1],v=t[p*3+2];let[A,D,H]=mo(f-w,g-y,M-x,f-T,g-I,M-v);a+=A,l+=D,c+=H}a/=s,l/=s,c/=s;const u=Math.sqrt(a*a+l*l+c*c);a/=u,l/=u,c/=u,n[o+0]=a,n[o+1]=l,n[o+2]=c}return n},jf=(r,t,e,n,i,s)=>{const o={AMR:1,k:0,dampingRatio:0,reflectivity:.993,dt:n,d:1,nCols:20,integrator:"rk4",lightForce:!1,selfShadowing:!1,selfCollision:!1},a=0,l=er(a,nr),c=[r[0],r[1],r[2],t[0],t[1],t[2],a,l[0],l[1],l[2]],u=["x","y","z","vx","vy","vz","t","sunPosX","sunPosY","sunPosZ"],h=u.length;if(h!=c.length)throw Error("satOrbitData names doesn't match saved data!");let d=n,m=1;const _=[r[0],r[1],r[2]],p=[t[0],t[1],t[2]],f=new xi(o.d,o.d,o.nCols-1,o.nCols-1);let g=f.attributes.position.array,M=new Float32Array(g.length);const w=Gf(g,o.nCols,o.nCols,1,1),y=f.getIndex().array,x=qf(y,o.nCols,o.nCols),T=performance.now();for(;d<e;){if(d%(e/100)==0){const Q=d/e;console.log(Hf(Q*100,0)+"%");const z=(performance.now()-T)/1e3,G=z/Q-z;console.log("Estimated time remaining: "+G+" s")}const I=[],v=5.972*Math.pow(10,24);I.push(0),I.push(0),I.push(0),I.push(v);const A=er(d,nr),D=i(_,p,g,M,o,w,x,y,I,d,n);g=D.bodyPNew,M=D.bodyVNew;const H=c.length;if(m%s==0&&(c.push(D.pNew[0]),c.push(D.pNew[1]),c.push(D.pNew[2]),c.push(D.vNew[0]),c.push(D.vNew[1]),c.push(D.vNew[2]),c.push(d),c.push(A[0]),c.push(A[1]),c.push(A[2]),c.length-H!=h))throw Error("Not pushing the correct amount of fields each time step");_[0]=D.pNew[0],_[1]=D.pNew[1],_[2]=D.pNew[2],p[0]=D.vNew[0],p[1]=D.vNew[1],p[2]=D.vNew[2],d+=n,m+=1}return{satOrbitData:c,satOrbitDataFields:u}},Zf="/masters_project/assets/8k_earth_daymap.88ab060b.jpg",$f="/masters_project/assets/8k_earth_normal_map.84e6e51f.jpg",Kf=(r,t)=>{var e=document.createElement("a");if(e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),e.setAttribute("download",r),document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),e.dispatchEvent(n)}else e.click()},Jf=(r,t,e)=>{const n=t[0]-r[0],i=t[1]-r[1],s=t[2]-r[2];if(n==0&&i==0&&s==0)return[0,0,0];const o=Math.sqrt(n*n+i*i+s*s),a=n/o,l=i/o,c=s/o,h=6.6732*Math.pow(10,-11)*e/(o*o),d=a*h,m=l*h,_=c*h;return[d,m,_]},Qf=r=>4559821181358738e-21*r.reflectivity*r.AMR,tp=(r,t,e,n)=>{const i=r[0]-t[0],s=r[1]-t[1],o=r[2]-t[2],a=n[0]-t[0],l=n[1]-t[1],c=n[2]-t[2],u=Math.abs(a*a+l*l+c*c),h=Math.sqrt(i*i+s*s+o*o);return ke(a,l,c,i,s,o)/h+Math.sqrt(u-e*e)<=0},ep=(r,t,e,n,i,s,o,a)=>{let l=r-n,c=t-i,u=e-s;const h=Math.sqrt(l*l+c*c+u*u),d=h-a;return l/=h,c/=h,u/=h,l*=-o*d,c*=-o*d,u*=-o*d,[l,c,u]},np=(r,t,e,n)=>{const i=-n*r,s=-n*t,o=-n*e;return[i,s,o]},ip=(r,t,e,n,i,s)=>{const o=t[0]-r[0],a=t[1]-r[1],l=t[2]-r[2],c=r[0]-e[0],u=r[1]-e[1],h=r[2]-e[2],d=-1*ke(s[0],s[1],s[2],c,u,h),m=ke(s[0],s[1],s[2],o,a,l),_=1e-8;if(Math.abs(m)<_)return{intersected:!1};const p=d/m,f=t[0]-r[0],g=t[1]-r[1],M=t[2]-r[2],w=Math.sqrt(f*f+g*g+M*M);if(p<0||p>w)return{intersected:!1};const y=r[0]+p*o,x=r[1]+p*a,T=r[2]+p*l,I=n[0]-e[0],v=n[1]-e[1],A=n[2]-e[2],D=i[0]-e[0],H=i[1]-e[1],Q=i[2]-e[2],z=ke(I,v,A,I,v,A),P=ke(I,v,A,D,H,Q),G=ke(D,H,Q,D,H,Q),j=y-e[0],$=x-e[1],k=T-e[2],F=ke(j,$,k,I,v,A),U=ke(j,$,k,D,H,Q),K=P*P-z*G,Y=(P*U-G*F)/K;if(Y<0||Y>1)return{intersected:!1};const J=(P*F-z*U)/K;return J<0||Y+J>1?{intersected:!1}:{intersected:!0,I:[y,x,T]}},sp=(r,t,e,n,i)=>{const s=n.length/3,o=[e[r*3+0],e[r*3+1],e[r*3+2]];for(let a=0;a<s;a++){const l=n[a*3+0],c=n[a*3+1],u=n[a*3+2];if(r==l||r==c||r==u)continue;const h=[e[l*3+0],e[l*3+1],e[l*3+2]],d=[e[c*3+0],e[c*3+1],e[c*3+2]],m=[e[u*3+0],e[u*3+1],e[u*3+2]],_=[i[a*3+0],i[a*3+1],i[a*3+2]];if(ip(o,t,h,d,m,_).intersected)return!0}return!1};let go,_o;const rp=(r,t,e,n,i,s,o,a)=>{let l;r.integrator=="euler"?l=Ua:r.integrator=="rk4"?l=ap:l=Ua;const c=t.length/3,u=n/c,h=new Float32Array(t.length),d=new Float32Array(t.length),m=[0,0,0];go=r.selfShadowing,r.selfCollision,_o=r.lightForce;const _=r.dt,p=r.k,f=r.dampingRatio,M=r.d*r.d/r.AMR/c,w=Yf(o,t),y=Wf(t,a);for(let x=0;x<c;x++){let T=x*3;const I=t[T+0],v=t[T+1],A=t[T+2],D=e[T+0],H=e[T+1],Q=e[T+2];let z=w[T+0],P=w[T+1],G=w[T+2],[j,$,k,F,U,K,Y,J,rt]=l(I,v,A,D,H,Q,u,i,_,M,p,s[x],f,t,z,P,G,x,t,a,y);m[0]+=Y,m[1]+=J,m[2]+=rt,d[T+0]=F,d[T+1]=U,d[T+2]=K,h[T+0]=j,h[T+1]=$,h[T+2]=k}return{p_new:h,v_new:d,a:m}},ci=(r,t,e,n,i,s,o,a,l,c,u,h,d,m,_,p,f,g,M,w)=>{let y=0,x=0,T=0;const I=c.length;for(let K=0;K<I;K++){let Y=c[K],J=Y[0],rt=Y[1],dt=J*3,X=h[dt+0],At=h[dt+1],mt=h[dt+2],[gt,at,Lt]=ep(r,t,e,X,At,mt,l,rt);y+=gt,x+=at,T+=Lt}let[v,A,D]=np(n,i,s,u);y+=v,x+=A,T+=D;const H=100,Q=r-H*a[0],z=t-H*a[1],P=e-H*a[2];let G=0,j=0,$=0;if(_o){let K=!0;if(go&&sp(f,[Q,z,P],g,M,w)&&(K=!1),K){const Y=Math.abs(ke(a[0],a[1],a[2],m,_,p));G=o*Y*a[0],j=o*Y*a[1],$=o*Y*a[2],y+=G*d,x+=j*d,T+=$*d}}const k=y/d,F=x/d,U=T/d;return[k,F,U,G,j,$]},Ua=(r,t,e,n,i,s,o,a,l,c,u,h,d,m,_,p,f,g,M,w,y)=>{const[x,T,I,v,A,D]=ci(r,t,e,n,i,s,o,a,u,h,d,m,c,_,p,f,g,M,w,y);let H=n+x*l,Q=i+T*l,z=s+I*l,P=r+H*l,G=t+Q*l,j=e+z*l;return[P,G,j,H,Q,z,v*l,A*l,D*l]},ap=(r,t,e,n,i,s,o,a,l,c,u,h,d,m,_,p,f,g,M,w,y)=>{const[x,T,I,v,A,D]=ci(r,t,e,n,i,s,o,a,u,h,d,m,c,_,p,f,g,M,w,y),H=n,Q=i,z=s,[P,G,j,$,k,F]=ci(r+l*(H/2),t+l*(Q/2),e+l*(z/2),n+l*(x/2),i+l*(T/2),s+l*(I/2),o,a,u,h,d,m,c,_,p,f,g,M,w,y),U=n+l*(x/2),K=i+l*(T/2),Y=s+l*(I/2),[J,rt,dt,X,At,mt]=ci(r+l*(U/2),t+l*(K/2),e+l*(Y/2),n+l*(P/2),i+l*(G/2),s+l*(j/2),o,a,u,h,d,m,c,_,p,f,g,M,w,y),gt=n+l*(P/2),at=i+l*(G/2),Lt=s+l*(j/2),[yt,ft,Ut,jt,Vt,ee]=ci(r+l*gt,t+l*at,e+l*Lt,n+l*J,i+l*rt,s+l*dt,o,a,u,h,d,m,c,_,p,f,g,M,w,y),Ht=n+l*J,Rt=i+l*rt,se=s+l*dt;n+=l*(x+2*P+2*J+yt)/6,i+=l*(T+2*G+2*rt+ft)/6,s+=l*(I+2*j+2*dt+Ut)/6;const re=l*(v+2*$+2*X+jt)/6,E=l*(A+2*k+2*At+Vt)/6,S=l*(D+2*F+2*mt+ee)/6;return r+=l*(H+2*U+2*gt+Ht)/6,t+=l*(Q+2*K+2*at+Rt)/6,e+=l*(z+2*Y+2*Lt+se)/6,[r,t,e,n,i,s,re,E,S]},qi=(r,t,e,n,i,s,o,a,l)=>{let c=!0;const u=[0,0,0];{const m=t.length/4;for(let _=0;_<m;_++){const p=_*4,f=[t[p+0],t[p+1],t[p+2]],g=t[p+3],M=Jf(r,f,g);u[0]+=M[0],u[1]+=M[1],u[2]+=M[2]}}const h=6371*1e3,d=er(l,nr);if(c=!tp(d,[0,0,0],h,r),c){const m=r[0]-d[0],_=r[1]-d[1],p=r[2]-d[2],f=Math.sqrt(m*m+_*_+p*p),g=[m/f,_/f,p/f],M=Qf(e);let w=[g[0]*M,g[1]*M,g[2]*M];{const y=[g[1],g[2],g[0]],x=rp(e,n,i,M,y,s,o,a);n=x.p_new,i=x.v_new,w=[x.a[2],x.a[0],x.a[1]]}u[0]+=w[0],u[1]+=w[1],u[2]+=w[2]}return{a:u,bodyPt:n,bodyVt:i}},op=(r,t,e,n,i,s,o,a,l,c,u)=>{const h=r[0],d=r[1],m=r[2],_=t[0],p=t[1],f=t[2],g=qi(r,l,i,e,n,s,o,a,c),M=g.a[0],w=g.a[1],y=g.a[2],x=t[0]+.5*u*M,T=t[1]+.5*u*w,I=t[2]+.5*u*y,v=qi([h+.5*u*_,d+.5*u*p,m+.5*u*f],l,i,e,n,s,o,a,c),A=v.a[0],D=v.a[1],H=v.a[2],Q=t[0]+.5*u*A,z=t[1]+.5*u*D,P=t[2]+.5*u*H,G=qi([h+.5*u*x,d+.5*u*T,m+.5*u*I],l,i,e,n,s,o,a,c),j=G.a[0],$=G.a[1],k=G.a[2],F=t[0]+u*j,U=t[1]+u*$,K=t[2]+u*k,Y=qi([h+u*Q,d+u*z,m+u*P],l,i,e,n,s,o,a,c),J=Y.a[0],rt=Y.a[1],dt=Y.a[2],X=r[0]+u*(1/6)*(_+2*x+2*Q+F),At=r[1]+u*(1/6)*(p+2*T+2*z+U),mt=r[2]+u*(1/6)*(f+2*I+2*P+K),gt=t[0]+u*(1/6)*(M+2*A+2*j+J),at=t[1]+u*(1/6)*(w+2*D+2*$+rt),Lt=t[2]+u*(1/6)*(y+2*H+2*k+dt);return{pNew:[X,At,mt],vNew:[gt,at,Lt],bodyPNew:Y.bodyPt,bodyVNew:Y.bodyVt}};let Xn=0,ui=!1,$i=1,xo=60;const qs=[1,50,100,1e3,1e4];let We,ir,nn,es;const lp=86400,cp=lp*365,up=op,hp=5*60,dp=cp*1,fp=100,sr=document.getElementById("three_canvas");var ns=new co({canvas:sr});ns.setSize(window.innerWidth,window.innerHeight*.9);const Xe=new bf,is=new fe(75,sr.width/sr.height,.1,1e3);is.up=new R(0,0,1);const pp=new Of(is,ns.domElement),mp=new Nf(.3);Xe.add(mp);is.position.set(0,0,1).setLength(1);pp.update();const gp=new Ff(16777215,.2);Xe.add(gp);const vo=()=>{const r=Xn*nn;let t=We[r+0],e=We[r+1],n=We[r+2];t*=ye,e*=ye,n*=ye,ei.position.set(t,e,n);const i=new pe(new ti(.001),new gi({color:16777215}));i.position.set(t,e,n),Xe.add(i)},vi=document.getElementById("timestepSlider");vi.min="0";vi.value="0";vi.oninput=r=>{let t=r.target;Xn=parseInt(t.value),vo(),ui=!1,Zi.innerText=">"};const Zi=document.getElementById("playButton");Zi.onclick=()=>{ui=!ui,ui?Zi.innerText="||":Zi.innerText=">"};const ur=document.getElementById("playbackSpeedDropdown");ur.value=$i.toString();ur.onchange=r=>{let t=r.target;$i=parseInt(t.value),clearInterval(Ba),Ba=window.setInterval(Mo,1/xo*1e3)};for(let r=0;r<qs.length;r++){const t=document.createElement("option");t.value=qs[r].toString(),t.innerHTML=qs[r].toString(),ur.appendChild(t)}const Mo=()=>{ui&&Xn+$i<es&&(Xn+=$i,vo(),vi.value=Xn.toString(),Mp.innerHTML=`Time step index = ${Xn}`,Sp.innerHTML="Time from start of sim (s) = 0")},_p=document.getElementById("simulateButton");_p.onclick=()=>{console.log("sim started");const r=jf(Cp,Dp,dp,hp,up,fp);We=r.satOrbitData,ir=r.satOrbitDataFields,nn=ir.length,es=We.length/nn,vi.max=(We.length/nn).toString(),console.log("sim finished")};const xp=document.getElementById("saveSimButton");xp.onclick=()=>{if(We==null){console.log("no simulation data yet!");return}const r=window.prompt("What do you want to name the file");if(r==null)return;let t="";for(let n=0;n<nn;n++)t+=ir[n]+",";t+=`
`;for(let n=0;n<es;n++){const i=n*nn;for(let s=0;s<nn;s++)t+=`${We[i+s]},`}t=t.slice(0,-1),console.log("downloading data...");const e="sat_"+r+".txt";Kf(e,t)};const vp=document.getElementById("clearSimDataButton");vp.onclick=()=>{window.confirm("Are you sure you want to clear the sim data?")&&(We=null,nn=null,es=null)};const Mp=document.getElementById("timeStepDisplay"),Sp=document.getElementById("timeDisplay");let Ba=window.setInterval(Mo,1/xo*1e3);const ss=6371*1e3,ye=1e-8,yp=new fo().load(Zf),bp=new fo().load($f),Ga=20,rs=new pe(new ti(ss*ye),new Af({shininess:50,map:yp,normalMap:bp,normalScale:new wt(Ga,Ga),side:ve}));rs.rotateX(Math.PI/2);rs.castShadow=!0;rs.receiveShadow=!0;Xe.add(rs);const ka=ss*ye*1,ei=new pe(new xi(ka,ka,1,1),new Tf({color:16777215,side:ve}));ei.castShadow=!0;ei.receiveShadow=!0;ei.rotateY(Math.PI/2);Xe.add(ei);const So=ss*ye*10,Mi=new pe(new ti(So),new gi({color:16711680,side:ve}));Mi.position.x+=ss*ye*50;Xe.add(Mi);const wp=1737.4*1e3,yo=new pe(new ti(wp*ye),new gi({color:16777215,side:ve}));Xe.add(yo);const Si=new If(16777215,1,So*50);Si.position.x=Mi.position.x;Si.position.y=Mi.position.y;Si.position.z=Mi.position.z;Si.castShadow=!0;Xe.add(Si);const Ep=86400,Tp=5.972*Math.pow(10,24),Ap=6.6732*Math.pow(10,-11),{orbitRadius:hr,orbitVelocity:Lp}=zf(Ep,Tp,Ap);console.log(hr);ei.position.set(hr*ye,0*ye,0*ye);const Cp=[hr,0,0],Dp=[0,Lp,0],Rp=384400*1e3;yo.position.z=Rp*ye;const Pp=async()=>{ns.render(Xe,is)};ns.setAnimationLoop(Pp);
