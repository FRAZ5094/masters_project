(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ks="145",Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pl=0,Zs=1,Il=2,Ua=1,Ol=2,Ti=3,di=0,Tt=1,wt=2,dn=0,ci=1,$s=2,Ks=3,Js=4,Fl=5,ii=100,Nl=101,kl=102,Qs=103,eo=104,zl=200,Ul=201,Bl=202,Gl=203,Ba=204,Ga=205,Vl=206,Hl=207,Wl=208,Xl=209,ql=210,jl=0,Yl=1,Zl=2,ys=3,$l=4,Kl=5,Jl=6,Ql=7,zs=0,ec=1,tc=2,Kt=0,nc=1,ic=2,rc=3,sc=4,oc=5,Va=300,hi=301,fi=302,Ms=303,Ss=304,wr=306,ws=1e3,It=1001,Es=1002,dt=1003,to=1004,no=1005,St=1006,ac=1007,Er=1008,Rn=1009,lc=1010,cc=1011,Ha=1012,uc=1013,En=1014,Tn=1015,Oi=1016,dc=1017,hc=1018,ui=1020,fc=1021,pc=1022,Ut=1023,mc=1024,gc=1025,Cn=1026,pi=1027,_c=1028,vc=1029,xc=1030,bc=1031,yc=1033,Nr=33776,kr=33777,zr=33778,Ur=33779,io=35840,ro=35841,so=35842,oo=35843,Mc=36196,ao=37492,lo=37496,co=37808,uo=37809,ho=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,vo=37816,xo=37817,bo=37818,yo=37819,Mo=37820,So=37821,wo=36492,Dn=3e3,We=3001,Sc=3200,wc=3201,Us=0,Ec=1,Yt="srgb",An="srgb-linear",Br=7680,Tc=519,Eo=35044,To="300 es",Ts=1035;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const it=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,Ao=180/Math.PI;function ki(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[t&63|128]+it[t>>8&255]+"-"+it[t>>16&255]+it[t>>24&255]+it[n&255]+it[n>>8&255]+it[n>>16&255]+it[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function Ac(r,e){return(r%e+e)%e}function Vr(r,e,t){return(1-t)*r+t*e}function Co(r){return(r&r-1)===0&&r!==0}function As(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ji(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*i+e.x,this.y=s*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,l,a,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=l,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],a=n[3],c=n[6],u=n[1],h=n[4],d=n[7],f=n[2],g=n[5],v=n[8],m=i[0],p=i[3],_=i[6],o=i[1],y=i[4],b=i[7],x=i[2],E=i[5],D=i[8];return s[0]=l*m+a*o+c*x,s[3]=l*p+a*y+c*E,s[6]=l*_+a*b+c*D,s[1]=u*m+h*o+d*x,s[4]=u*p+h*y+d*E,s[7]=u*_+h*b+d*D,s[2]=f*m+g*o+v*x,s[5]=f*p+g*y+v*E,s[8]=f*_+g*b+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*l*h-t*a*u-n*s*h+n*a*c+i*s*u-i*l*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],a=e[5],c=e[6],u=e[7],h=e[8],d=h*l-a*u,f=a*c-h*s,g=u*s-l*c,v=t*d+n*f+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=d*m,e[1]=(i*u-h*n)*m,e[2]=(a*n-i*l)*m,e[3]=f*m,e[4]=(h*t-i*c)*m,e[5]=(i*s-a*t)*m,e[6]=g*m,e[7]=(n*c-u*t)*m,e[8]=(l*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,l,a){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*l+u*a)+l+e,-i*u,i*c,-i*(-u*l+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],l=i[3],a=i[6],c=i[1],u=i[4],h=i[7];return i[0]=t*s+n*c,i[3]=t*l+n*u,i[6]=t*a+n*h,i[1]=-n*s+t*c,i[4]=-n*l+t*u,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Wa(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ln(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Hr={[Yt]:{[An]:Ln},[An]:{[Yt]:vr}},Lt={legacyMode:!0,get workingColorSpace(){return An},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Hr[e]&&Hr[e][t]!==void 0){const n=Hr[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Xa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Je={r:0,g:0,b:0},Rt={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function Wr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Zi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=An){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=An){if(e=Ac(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=Wr(l,s,e+1/3),this.g=Wr(l,s,e),this.b=Wr(l,s,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const l=i[1],a=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Lt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Lt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,u=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,u,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],l=s.length;if(l===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Lt.toWorkingColorSpace(this,t),this;if(l===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Lt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Yt){const n=Xa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Lt.fromWorkingColorSpace(Zi(this,Je),e),ht(Je.r*255,0,255)<<16^ht(Je.g*255,0,255)<<8^ht(Je.b*255,0,255)<<0}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=An){Lt.fromWorkingColorSpace(Zi(this,Je),t);const n=Je.r,i=Je.g,s=Je.b,l=Math.max(n,i,s),a=Math.min(n,i,s);let c,u;const h=(a+l)/2;if(a===l)c=0,u=0;else{const d=l-a;switch(u=h<=.5?d/(l+a):d/(2-l-a),l){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=An){return Lt.fromWorkingColorSpace(Zi(this,Je),t),e.r=Je.r,e.g=Je.g,e.b=Je.b,e}getStyle(e=Yt){return Lt.fromWorkingColorSpace(Zi(this,Je),e),e!==Yt?`color(${e} ${Je.r} ${Je.g} ${Je.b})`:`rgb(${Je.r*255|0},${Je.g*255|0},${Je.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Rt),Rt.h+=e,Rt.s+=t,Rt.l+=n,this.setHSL(Rt.h,Rt.s,Rt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rt),e.getHSL(Yi);const n=Vr(Rt.h,Yi.h,t),i=Vr(Rt.s,Yi.s,t),s=Vr(Rt.l,Yi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Xa;let Hn;class qa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=Fi("canvas")),Hn.width=e.width,Hn.height=e.height;const n=Hn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=Ln(s[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ja{constructor(e=null){this.isSource=!0,this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,a=i.length;l<a;l++)i[l].isDataTexture?s.push(Xr(i[l].image)):s.push(Xr(i[l]))}else s=Xr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class Ct extends Fn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=It,i=It,s=St,l=Er,a=Ut,c=Rn,u=1,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=ki(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Va)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case Es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case Es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Va;class Be{constructor(e=0,t=0,n=0,i=1){Be.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,u=c[0],h=c[4],d=c[8],f=c[1],g=c[5],v=c[9],m=c[2],p=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-m)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+m)<.1&&Math.abs(v+p)<.1&&Math.abs(u+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,b=(g+1)/2,x=(_+1)/2,E=(h+f)/4,D=(d+m)/4,M=(v+p)/4;return y>b&&y>x?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=D/n):b>x?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=M/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=D/s,i=M/s),this.set(n,i,s,t),this}let o=Math.sqrt((p-v)*(p-v)+(d-m)*(d-m)+(f-h)*(f-h));return Math.abs(o)<.001&&(o=1),this.x=(p-v)/o,this.y=(d-m)/o,this.z=(f-h)/o,this.w=Math.acos((u+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pn extends Fn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:St,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ya extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lc extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,l,a){let c=n[i+0],u=n[i+1],h=n[i+2],d=n[i+3];const f=s[l+0],g=s[l+1],v=s[l+2],m=s[l+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=v,e[t+3]=m;return}if(d!==m||c!==f||u!==g||h!==v){let p=1-a;const _=c*f+u*g+h*v+d*m,o=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const x=Math.sqrt(y),E=Math.atan2(x,_*o);p=Math.sin(p*E)/x,a=Math.sin(a*E)/x}const b=a*o;if(c=c*p+f*b,u=u*p+g*b,h=h*p+v*b,d=d*p+m*b,p===1-a){const x=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=x,u*=x,h*=x,d*=x}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,l){const a=n[i],c=n[i+1],u=n[i+2],h=n[i+3],d=s[l],f=s[l+1],g=s[l+2],v=s[l+3];return e[t]=a*v+h*d+c*g-u*f,e[t+1]=c*v+h*f+u*d-a*g,e[t+2]=u*v+h*g+a*f-c*d,e[t+3]=h*v-a*d-c*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,l=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(i/2),d=a(s/2),f=c(n/2),g=c(i/2),v=c(s/2);switch(l){case"XYZ":this._x=f*h*d+u*g*v,this._y=u*g*d-f*h*v,this._z=u*h*v+f*g*d,this._w=u*h*d-f*g*v;break;case"YXZ":this._x=f*h*d+u*g*v,this._y=u*g*d-f*h*v,this._z=u*h*v-f*g*d,this._w=u*h*d+f*g*v;break;case"ZXY":this._x=f*h*d-u*g*v,this._y=u*g*d+f*h*v,this._z=u*h*v+f*g*d,this._w=u*h*d-f*g*v;break;case"ZYX":this._x=f*h*d-u*g*v,this._y=u*g*d+f*h*v,this._z=u*h*v-f*g*d,this._w=u*h*d+f*g*v;break;case"YZX":this._x=f*h*d+u*g*v,this._y=u*g*d+f*h*v,this._z=u*h*v-f*g*d,this._w=u*h*d-f*g*v;break;case"XZY":this._x=f*h*d-u*g*v,this._y=u*g*d-f*h*v,this._z=u*h*v+f*g*d,this._w=u*h*d+f*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],l=t[1],a=t[5],c=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(l-i)*g}else if(n>a&&n>d){const g=2*Math.sqrt(1+n-a-d);this._w=(h-c)/g,this._x=.25*g,this._y=(i+l)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-n-d);this._w=(s-u)/g,this._x=(i+l)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-n-a);this._w=(l-i)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,l=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+l*a+i*u-s*c,this._y=i*h+l*c+s*a-n*u,this._z=s*h+l*u+n*c-i*a,this._w=l*h-n*a-i*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,l=this._w;let a=l*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*l+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=l*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,l=e.y,a=e.z,c=e.w,u=c*t+l*i-a*n,h=c*n+a*t-s*i,d=c*i+s*n-l*t,f=-s*t-l*n-a*i;return this.x=u*c+f*-s+h*-a-d*-l,this.y=h*c+f*-l+d*-s-u*-a,this.z=d*c+f*-a+u*-l-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,l=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*l-n*c,this.z=n*a-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new P,Lo=new In;class zi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,l=-1/0,a=-1/0;for(let c=0,u=e.length;c<u;c+=3){const h=e[c],d=e[c+1],f=e[c+2];h<t&&(t=h),d<n&&(n=d),f<i&&(i=f),h>s&&(s=h),d>l&&(l=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,l,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,l=-1/0,a=-1/0;for(let c=0,u=e.count;c<u;c++){const h=e.getX(c),d=e.getY(c),f=e.getZ(c);h<t&&(t=h),d<n&&(n=d),f<i&&(i=f),h>s&&(s=h),d>l&&(l=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,l,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let l=0,a=s.count;l<a;l++)xn.fromBufferAttribute(s,l).applyMatrix4(e.matrixWorld),this.expandByPoint(xn)}else n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox),jr.applyMatrix4(e.matrixWorld),this.union(jr);const i=e.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),$i.subVectors(this.max,bi),Wn.subVectors(e.a,bi),Xn.subVectors(e.b,bi),qn.subVectors(e.c,bi),rn.subVectors(Xn,Wn),sn.subVectors(qn,Xn),bn.subVectors(Wn,qn);let t=[0,-rn.z,rn.y,0,-sn.z,sn.y,0,-bn.z,bn.y,rn.z,0,-rn.x,sn.z,0,-sn.x,bn.z,0,-bn.x,-rn.y,rn.x,0,-sn.y,sn.x,0,-bn.y,bn.x,0];return!Yr(t,Wn,Xn,qn,$i)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,Wn,Xn,qn,$i))?!1:(Ki.crossVectors(rn,sn),t=[Ki.x,Ki.y,Ki.z],Yr(t,Wn,Xn,qn,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ht),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ht=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,jr=new zi,Wn=new P,Xn=new P,qn=new P,rn=new P,sn=new P,bn=new P,bi=new P,$i=new P,Ki=new P,yn=new P;function Yr(r,e,t,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){yn.fromArray(r,s);const a=i.x*Math.abs(yn.x)+i.y*Math.abs(yn.y)+i.z*Math.abs(yn.z),c=e.dot(yn),u=t.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const Rc=new zi,Ro=new P,Ji=new P,Zr=new P;class Tr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,l=e.length;s<l;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Zr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Ji.set(0,0,1).multiplyScalar(e.radius):Ji.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ji)),this.expandByPoint(Ro.copy(e.center).sub(Ji)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wt=new P,$r=new P,Qi=new P,on=new P,Kr=new P,er=new P,Jr=new P;class Za{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wt.copy(this.direction).multiplyScalar(t).add(this.origin),Wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$r.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),on.copy(this.origin).sub($r);const s=e.distanceTo(t)*.5,l=-this.direction.dot(Qi),a=on.dot(this.direction),c=-on.dot(Qi),u=on.lengthSq(),h=Math.abs(1-l*l);let d,f,g,v;if(h>0)if(d=l*c-a,f=l*a-c,v=s*h,d>=0)if(f>=-v)if(f<=v){const m=1/h;d*=m,f*=m,g=d*(d+l*f+2*a)+f*(l*d+f+2*c)+u}else f=s,d=Math.max(0,-(l*f+a)),g=-d*d+f*(f+2*c)+u;else f=-s,d=Math.max(0,-(l*f+a)),g=-d*d+f*(f+2*c)+u;else f<=-v?(d=Math.max(0,-(-l*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+f*(f+2*c)+u):f<=v?(d=0,f=Math.min(Math.max(-s,-c),s),g=f*(f+2*c)+u):(d=Math.max(0,-(l*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+f*(f+2*c)+u);else f=l>0?-s:s,d=Math.max(0,-(l*f+a)),g=-d*d+f*(f+2*c)+u;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Qi).multiplyScalar(f).add($r),g}intersectSphere(e,t){Wt.subVectors(e.center,this.origin);const n=Wt.dot(this.direction),i=Wt.dot(Wt)-n*n,s=e.radius*e.radius;if(i>s)return null;const l=Math.sqrt(s-i),a=n-l,c=n+l;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,l,a,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,l=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,l=(e.min.y-f.y)*h),n>l||s>i||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wt)!==null}intersectTriangle(e,t,n,i,s){Kr.subVectors(t,e),er.subVectors(n,e),Jr.crossVectors(Kr,er);let l=this.direction.dot(Jr),a;if(l>0){if(i)return null;a=1}else if(l<0)a=-1,l=-l;else return null;on.subVectors(this.origin,e);const c=a*this.direction.dot(er.crossVectors(on,er));if(c<0)return null;const u=a*this.direction.dot(Kr.cross(on));if(u<0||c+u>l)return null;const h=-a*on.dot(Jr);return h<0?null:this.at(h/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,l,a,c,u,h,d,f,g,v,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=l,_[9]=a,_[13]=c,_[2]=u,_[6]=h,_[10]=d,_[14]=f,_[3]=g,_[7]=v,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/jn.setFromMatrixColumn(e,0).length(),s=1/jn.setFromMatrixColumn(e,1).length(),l=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,l=Math.cos(n),a=Math.sin(n),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=l*h,g=l*d,v=a*h,m=a*d;t[0]=c*h,t[4]=-c*d,t[8]=u,t[1]=g+v*u,t[5]=f-m*u,t[9]=-a*c,t[2]=m-f*u,t[6]=v+g*u,t[10]=l*c}else if(e.order==="YXZ"){const f=c*h,g=c*d,v=u*h,m=u*d;t[0]=f+m*a,t[4]=v*a-g,t[8]=l*u,t[1]=l*d,t[5]=l*h,t[9]=-a,t[2]=g*a-v,t[6]=m+f*a,t[10]=l*c}else if(e.order==="ZXY"){const f=c*h,g=c*d,v=u*h,m=u*d;t[0]=f-m*a,t[4]=-l*d,t[8]=v+g*a,t[1]=g+v*a,t[5]=l*h,t[9]=m-f*a,t[2]=-l*u,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){const f=l*h,g=l*d,v=a*h,m=a*d;t[0]=c*h,t[4]=v*u-g,t[8]=f*u+m,t[1]=c*d,t[5]=m*u+f,t[9]=g*u-v,t[2]=-u,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){const f=l*c,g=l*u,v=a*c,m=a*u;t[0]=c*h,t[4]=m-f*d,t[8]=v*d+g,t[1]=d,t[5]=l*h,t[9]=-a*h,t[2]=-u*h,t[6]=g*d+v,t[10]=f-m*d}else if(e.order==="XZY"){const f=l*c,g=l*u,v=a*c,m=a*u;t[0]=c*h,t[4]=-d,t[8]=u*h,t[1]=f*d+m,t[5]=l*h,t[9]=g*d-v,t[2]=v*d-g,t[6]=a*h,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dc,e,Pc)}lookAt(e,t,n){const i=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),an.crossVectors(n,gt),an.lengthSq()===0&&(Math.abs(n.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),an.crossVectors(n,gt)),an.normalize(),tr.crossVectors(gt,an),i[0]=an.x,i[4]=tr.x,i[8]=gt.x,i[1]=an.y,i[5]=tr.y,i[9]=gt.y,i[2]=an.z,i[6]=tr.z,i[10]=gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],a=n[4],c=n[8],u=n[12],h=n[1],d=n[5],f=n[9],g=n[13],v=n[2],m=n[6],p=n[10],_=n[14],o=n[3],y=n[7],b=n[11],x=n[15],E=i[0],D=i[4],M=i[8],A=i[12],I=i[1],H=i[5],te=i[9],k=i[13],L=i[2],V=i[6],X=i[10],q=i[14],G=i[3],O=i[7],z=i[11],ee=i[15];return s[0]=l*E+a*I+c*L+u*G,s[4]=l*D+a*H+c*V+u*O,s[8]=l*M+a*te+c*X+u*z,s[12]=l*A+a*k+c*q+u*ee,s[1]=h*E+d*I+f*L+g*G,s[5]=h*D+d*H+f*V+g*O,s[9]=h*M+d*te+f*X+g*z,s[13]=h*A+d*k+f*q+g*ee,s[2]=v*E+m*I+p*L+_*G,s[6]=v*D+m*H+p*V+_*O,s[10]=v*M+m*te+p*X+_*z,s[14]=v*A+m*k+p*q+_*ee,s[3]=o*E+y*I+b*L+x*G,s[7]=o*D+y*H+b*V+x*O,s[11]=o*M+y*te+b*X+x*z,s[15]=o*A+y*k+b*q+x*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],l=e[1],a=e[5],c=e[9],u=e[13],h=e[2],d=e[6],f=e[10],g=e[14],v=e[3],m=e[7],p=e[11],_=e[15];return v*(+s*c*d-i*u*d-s*a*f+n*u*f+i*a*g-n*c*g)+m*(+t*c*g-t*u*f+s*l*f-i*l*g+i*u*h-s*c*h)+p*(+t*u*d-t*a*g-s*l*d+n*l*g+s*a*h-n*u*h)+_*(-i*a*h-t*c*d+t*a*f+i*l*d-n*l*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],a=e[5],c=e[6],u=e[7],h=e[8],d=e[9],f=e[10],g=e[11],v=e[12],m=e[13],p=e[14],_=e[15],o=d*p*u-m*f*u+m*c*g-a*p*g-d*c*_+a*f*_,y=v*f*u-h*p*u-v*c*g+l*p*g+h*c*_-l*f*_,b=h*m*u-v*d*u+v*a*g-l*m*g-h*a*_+l*d*_,x=v*d*c-h*m*c-v*a*f+l*m*f+h*a*p-l*d*p,E=t*o+n*y+i*b+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/E;return e[0]=o*D,e[1]=(m*f*s-d*p*s-m*i*g+n*p*g+d*i*_-n*f*_)*D,e[2]=(a*p*s-m*c*s+m*i*u-n*p*u-a*i*_+n*c*_)*D,e[3]=(d*c*s-a*f*s-d*i*u+n*f*u+a*i*g-n*c*g)*D,e[4]=y*D,e[5]=(h*p*s-v*f*s+v*i*g-t*p*g-h*i*_+t*f*_)*D,e[6]=(v*c*s-l*p*s-v*i*u+t*p*u+l*i*_-t*c*_)*D,e[7]=(l*f*s-h*c*s+h*i*u-t*f*u-l*i*g+t*c*g)*D,e[8]=b*D,e[9]=(v*d*s-h*m*s-v*n*g+t*m*g+h*n*_-t*d*_)*D,e[10]=(l*m*s-v*a*s+v*n*u-t*m*u-l*n*_+t*a*_)*D,e[11]=(h*a*s-l*d*s-h*n*u+t*d*u+l*n*g-t*a*g)*D,e[12]=x*D,e[13]=(h*m*i-v*d*i+v*n*f-t*m*f-h*n*p+t*d*p)*D,e[14]=(v*a*i-l*m*i-v*n*c+t*m*c+l*n*p-t*a*p)*D,e[15]=(l*d*i-h*a*i+h*n*c-t*d*c-l*n*f+t*a*f)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,l=e.x,a=e.y,c=e.z,u=s*l,h=s*a;return this.set(u*l+n,u*a-i*c,u*c+i*a,0,u*a+i*c,h*a+n,h*c-i*l,0,u*c-i*a,h*c+i*l,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,l){return this.set(1,n,s,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,l=t._y,a=t._z,c=t._w,u=s+s,h=l+l,d=a+a,f=s*u,g=s*h,v=s*d,m=l*h,p=l*d,_=a*d,o=c*u,y=c*h,b=c*d,x=n.x,E=n.y,D=n.z;return i[0]=(1-(m+_))*x,i[1]=(g+b)*x,i[2]=(v-y)*x,i[3]=0,i[4]=(g-b)*E,i[5]=(1-(f+_))*E,i[6]=(p+o)*E,i[7]=0,i[8]=(v+y)*D,i[9]=(p-o)*D,i[10]=(1-(f+m))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=jn.set(i[0],i[1],i[2]).length();const l=jn.set(i[4],i[5],i[6]).length(),a=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Dt.copy(this);const u=1/s,h=1/l,d=1/a;return Dt.elements[0]*=u,Dt.elements[1]*=u,Dt.elements[2]*=u,Dt.elements[4]*=h,Dt.elements[5]*=h,Dt.elements[6]*=h,Dt.elements[8]*=d,Dt.elements[9]*=d,Dt.elements[10]*=d,t.setFromRotationMatrix(Dt),n.x=s,n.y=l,n.z=a,this}makePerspective(e,t,n,i,s,l){const a=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f=-(l+s)/(l-s),g=-2*l*s/(l-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,l){const a=this.elements,c=1/(t-e),u=1/(n-i),h=1/(l-s),d=(t+e)*c,f=(n+i)*u,g=(l+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jn=new P,Dt=new Ye,Dc=new P(0,0,0),Pc=new P(1,1,1),an=new P,tr=new P,gt=new P,Do=new Ye,Po=new In;class Ui{constructor(e=0,t=0,n=0,i=Ui.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],l=i[4],a=i[8],c=i[1],u=i[5],h=i[9],d=i[2],f=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Po.setFromEuler(this),this.setFromQuaternion(Po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ui.DefaultOrder="XYZ";Ui.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $a{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ic=0;const Io=new P,Yn=new In,Xt=new Ye,nr=new P,yi=new P,Oc=new P,Fc=new In,Oo=new P(1,0,0),Fo=new P(0,1,0),No=new P(0,0,1),Nc={type:"added"},ko={type:"removed"};class at extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DefaultUp.clone();const e=new P,t=new Ui,n=new In,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Et}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=at.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DefaultMatrixWorldAutoUpdate,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(Oo,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Io.copy(e).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oo,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(yi,nr,this.up):Xt.lookAt(nr,yi,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),Yn.setFromRotationMatrix(Xt),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ko)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ko)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,Oc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,Fc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,l=i.length;s<l;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=l(e.geometries),c=l(e.materials),u=l(e.textures),h=l(e.images),d=l(e.shapes),f=l(e.skeletons),g=l(e.animations),v=l(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function l(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DefaultUp=new P(0,1,0);at.DefaultMatrixAutoUpdate=!0;at.DefaultMatrixWorldAutoUpdate=!0;const Pt=new P,qt=new P,Qr=new P,jt=new P,Zn=new P,$n=new P,zo=new P,es=new P,ts=new P,ns=new P;class $t{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pt.subVectors(e,t),i.cross(Pt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pt.subVectors(i,t),qt.subVectors(n,t),Qr.subVectors(e,t);const l=Pt.dot(Pt),a=Pt.dot(qt),c=Pt.dot(Qr),u=qt.dot(qt),h=qt.dot(Qr),d=l*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*c-a*h)*f,v=(l*h-a*c)*f;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,i,s,l,a,c){return this.getBarycoord(e,t,n,i,jt),c.set(0,0),c.addScaledVector(s,jt.x),c.addScaledVector(l,jt.y),c.addScaledVector(a,jt.z),c}static isFrontFacing(e,t,n,i){return Pt.subVectors(n,t),qt.subVectors(e,t),Pt.cross(qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Pt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return $t.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let l,a;Zn.subVectors(i,n),$n.subVectors(s,n),es.subVectors(e,n);const c=Zn.dot(es),u=$n.dot(es);if(c<=0&&u<=0)return t.copy(n);ts.subVectors(e,i);const h=Zn.dot(ts),d=$n.dot(ts);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*u;if(f<=0&&c>=0&&h<=0)return l=c/(c-h),t.copy(n).addScaledVector(Zn,l);ns.subVectors(e,s);const g=Zn.dot(ns),v=$n.dot(ns);if(v>=0&&g<=v)return t.copy(s);const m=g*u-c*v;if(m<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector($n,a);const p=h*v-g*d;if(p<=0&&d-h>=0&&g-v>=0)return zo.subVectors(s,i),a=(d-h)/(d-h+(g-v)),t.copy(i).addScaledVector(zo,a);const _=1/(p+m+f);return l=m*_,a=f*_,t.copy(n).addScaledVector(Zn,l).addScaledVector($n,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kc=0;class Nn extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=ci,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ba,this.blendDst=Ga,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const l=[];for(const a in s){const c=s[a];delete c.metadata,l.push(c)}return l}if(t){const s=i(e.textures),l=i(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bi extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new P,ir=new Te;class Bt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Eo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ka extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ja extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zc=0;const Mt=new Ye,is=new at,Kn=new P,_t=new zi,Mi=new zi,tt=new P;class Gt extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wa(e)?Ja:Ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mt.makeRotationFromQuaternion(e),this.applyMatrix4(Mt),this}rotateX(e){return Mt.makeRotationX(e),this.applyMatrix4(Mt),this}rotateY(e){return Mt.makeRotationY(e),this.applyMatrix4(Mt),this}rotateZ(e){return Mt.makeRotationZ(e),this.applyMatrix4(Mt),this}translate(e,t,n){return Mt.makeTranslation(e,t,n),this.applyMatrix4(Mt),this}scale(e,t,n){return Mt.makeScale(e,t,n),this.applyMatrix4(Mt),this}lookAt(e){return is.lookAt(e),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];_t.setFromBufferAttribute(s),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(_t.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const a=t[s];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(_t.min,Mi.min),_t.expandByPoint(tt),tt.addVectors(_t.max,Mi.max),_t.expandByPoint(tt)):(_t.expandByPoint(Mi.min),_t.expandByPoint(Mi.max))}_t.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tt));if(t)for(let s=0,l=t.length;s<l;s++){const a=t[s],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)tt.fromBufferAttribute(a,u),c&&(Kn.fromBufferAttribute(e,u),tt.add(Kn)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,l=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let I=0;I<a;I++)u[I]=new P,h[I]=new P;const d=new P,f=new P,g=new P,v=new Te,m=new Te,p=new Te,_=new P,o=new P;function y(I,H,te){d.fromArray(i,I*3),f.fromArray(i,H*3),g.fromArray(i,te*3),v.fromArray(l,I*2),m.fromArray(l,H*2),p.fromArray(l,te*2),f.sub(d),g.sub(d),m.sub(v),p.sub(v);const k=1/(m.x*p.y-p.x*m.y);!isFinite(k)||(_.copy(f).multiplyScalar(p.y).addScaledVector(g,-m.y).multiplyScalar(k),o.copy(g).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(k),u[I].add(_),u[H].add(_),u[te].add(_),h[I].add(o),h[H].add(o),h[te].add(o))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let I=0,H=b.length;I<H;++I){const te=b[I],k=te.start,L=te.count;for(let V=k,X=k+L;V<X;V+=3)y(n[V+0],n[V+1],n[V+2])}const x=new P,E=new P,D=new P,M=new P;function A(I){D.fromArray(s,I*3),M.copy(D);const H=u[I];x.copy(H),x.sub(D.multiplyScalar(D.dot(H))).normalize(),E.crossVectors(M,H);const k=E.dot(h[I])<0?-1:1;c[I*4]=x.x,c[I*4+1]=x.y,c[I*4+2]=x.z,c[I*4+3]=k}for(let I=0,H=b.length;I<H;++I){const te=b[I],k=te.start,L=te.count;for(let V=k,X=k+L;V<X;V+=3)A(n[V+0]),A(n[V+1]),A(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,l=new P,a=new P,c=new P,u=new P,h=new P,d=new P;if(e)for(let f=0,g=e.count;f<g;f+=3){const v=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),l.fromBufferAttribute(t,p),h.subVectors(l,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),u.fromBufferAttribute(n,p),a.add(h),c.add(h),u.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),h.subVectors(l,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(a,c){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(c.length*h);let g=0,v=0;for(let m=0,p=c.length;m<p;m++){a.isInterleavedBufferAttribute?g=c[m]*a.data.stride+a.offset:g=c[m]*h;for(let _=0;_<h;_++)f[v++]=u[g++]}return new Bt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],u=e(c,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],g=e(f,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,c=l.length;a<c;a++){const u=l[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];h.push(g.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,h=l.length;u<h;u++){const d=l[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new Ye,Jn=new Za,rs=new Tr,ln=new P,cn=new P,un=new P,ss=new P,os=new P,as=new P,rr=new P,sr=new P,or=new P,ar=new Te,lr=new Te,cr=new Te,ls=new P,ur=new P;class xt extends at{constructor(e=new Gt,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),e.ray.intersectsSphere(rs)===!1)||(Uo.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(Uo),n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1))return;let l;const a=n.index,c=n.attributes.position,u=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,g=n.groups,v=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,p=g.length;m<p;m++){const _=g[m],o=i[_.materialIndex],y=Math.max(_.start,v.start),b=Math.min(a.count,Math.min(_.start+_.count,v.start+v.count));for(let x=y,E=b;x<E;x+=3){const D=a.getX(x),M=a.getX(x+1),A=a.getX(x+2);l=dr(this,o,e,Jn,c,u,h,d,f,D,M,A),l&&(l.faceIndex=Math.floor(x/3),l.face.materialIndex=_.materialIndex,t.push(l))}}else{const m=Math.max(0,v.start),p=Math.min(a.count,v.start+v.count);for(let _=m,o=p;_<o;_+=3){const y=a.getX(_),b=a.getX(_+1),x=a.getX(_+2);l=dr(this,i,e,Jn,c,u,h,d,f,y,b,x),l&&(l.faceIndex=Math.floor(_/3),t.push(l))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,p=g.length;m<p;m++){const _=g[m],o=i[_.materialIndex],y=Math.max(_.start,v.start),b=Math.min(c.count,Math.min(_.start+_.count,v.start+v.count));for(let x=y,E=b;x<E;x+=3){const D=x,M=x+1,A=x+2;l=dr(this,o,e,Jn,c,u,h,d,f,D,M,A),l&&(l.faceIndex=Math.floor(x/3),l.face.materialIndex=_.materialIndex,t.push(l))}}else{const m=Math.max(0,v.start),p=Math.min(c.count,v.start+v.count);for(let _=m,o=p;_<o;_+=3){const y=_,b=_+1,x=_+2;l=dr(this,i,e,Jn,c,u,h,d,f,y,b,x),l&&(l.faceIndex=Math.floor(_/3),t.push(l))}}}}function Uc(r,e,t,n,i,s,l,a){let c;if(e.side===Tt?c=n.intersectTriangle(l,s,i,!0,a):c=n.intersectTriangle(i,s,l,e.side!==wt,a),c===null)return null;ur.copy(a),ur.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(ur);return u<t.near||u>t.far?null:{distance:u,point:ur.clone(),object:r}}function dr(r,e,t,n,i,s,l,a,c,u,h,d){ln.fromBufferAttribute(i,u),cn.fromBufferAttribute(i,h),un.fromBufferAttribute(i,d);const f=r.morphTargetInfluences;if(s&&f){rr.set(0,0,0),sr.set(0,0,0),or.set(0,0,0);for(let v=0,m=s.length;v<m;v++){const p=f[v],_=s[v];p!==0&&(ss.fromBufferAttribute(_,u),os.fromBufferAttribute(_,h),as.fromBufferAttribute(_,d),l?(rr.addScaledVector(ss,p),sr.addScaledVector(os,p),or.addScaledVector(as,p)):(rr.addScaledVector(ss.sub(ln),p),sr.addScaledVector(os.sub(cn),p),or.addScaledVector(as.sub(un),p)))}ln.add(rr),cn.add(sr),un.add(or)}r.isSkinnedMesh&&(r.boneTransform(u,ln),r.boneTransform(h,cn),r.boneTransform(d,un));const g=Uc(r,e,t,n,ln,cn,un,ls);if(g){a&&(ar.fromBufferAttribute(a,u),lr.fromBufferAttribute(a,h),cr.fromBufferAttribute(a,d),g.uv=$t.getUV(ls,ln,cn,un,ar,lr,cr,new Te)),c&&(ar.fromBufferAttribute(c,u),lr.fromBufferAttribute(c,h),cr.fromBufferAttribute(c,d),g.uv2=$t.getUV(ls,ln,cn,un,ar,lr,cr,new Te));const v={a:u,b:h,c:d,normal:new P,materialIndex:0};$t.getNormal(ln,cn,un,v.normal),g.face=v}return g}class Gi extends Gt{constructor(e=1,t=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};const a=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);const c=[],u=[],h=[],d=[];let f=0,g=0;v("z","y","x",-1,-1,n,t,e,l,s,0),v("z","y","x",1,-1,n,t,-e,l,s,1),v("x","z","y",1,1,e,n,t,i,l,2),v("x","z","y",1,-1,e,n,-t,i,l,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function v(m,p,_,o,y,b,x,E,D,M,A){const I=b/D,H=x/M,te=b/2,k=x/2,L=E/2,V=D+1,X=M+1;let q=0,G=0;const O=new P;for(let z=0;z<X;z++){const ee=z*H-k;for(let J=0;J<V;J++){const Q=J*I-te;O[m]=Q*o,O[p]=ee*y,O[_]=L,u.push(O.x,O.y,O.z),O[m]=0,O[p]=0,O[_]=E>0?1:-1,h.push(O.x,O.y,O.z),d.push(J/D),d.push(1-z/M),q+=1}}for(let z=0;z<M;z++)for(let ee=0;ee<D;ee++){const J=f+ee+V*z,Q=f+ee+V*(z+1),ae=f+(ee+1)+V*(z+1),pe=f+(ee+1)+V*z;c.push(J,Q,pe),c.push(Q,ae,pe),G+=6}a.addGroup(g,G,A),g+=G,f+=q}}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rt(r){const e={};for(let t=0;t<r.length;t++){const n=mi(r[t]);for(const i in n)e[i]=n[i]}return e}function Bc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const Gc={clone:mi,merge:rt};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Bc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qa extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vt extends Qa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;s+=l.offsetX*i/c,t-=l.offsetY*n/u,i*=l.width/c,n*=l.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qn=90,ei=1;class Wc extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new vt(Qn,ei,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i);const s=new vt(Qn,ei,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const l=new vt(Qn,ei,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(new P(0,1,0)),this.add(l);const a=new vt(Qn,ei,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new P(0,-1,0)),this.add(a);const c=new vt(Qn,ei,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,1)),this.add(c);const u=new vt(Qn,ei,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new P(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,l,a,c,u]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Kt,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class el extends Ct{constructor(e,t,n,i,s,l,a,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:hi,super(e,t,n,i,s,l,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xc extends Pn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new el(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gi(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:dn});s.uniforms.tEquirect.value=t;const l=new xt(i,s),a=t.minFilter;return t.minFilter===Er&&(t.minFilter=St),new Wc(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(s)}}const cs=new P,qc=new P,jc=new Et;class Mn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cs.subVectors(n,t).cross(qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(cs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jc.getNormalMatrix(e),i=this.coplanarPoint(cs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Tr,hr=new P;class Bs{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,s=new Mn,l=new Mn){this.planes=[e,t,n,i,s,l]}set(e,t,n,i,s,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],l=n[2],a=n[3],c=n[4],u=n[5],h=n[6],d=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],_=n[13],o=n[14],y=n[15];return t[0].setComponents(a-i,d-c,m-f,y-p).normalize(),t[1].setComponents(a+i,d+c,m+f,y+p).normalize(),t[2].setComponents(a+s,d+u,m+g,y+_).normalize(),t[3].setComponents(a-s,d-u,m-g,y-_).normalize(),t[4].setComponents(a-l,d-h,m-v,y-o).normalize(),t[5].setComponents(a+l,d+h,m+v,y+o).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hr.x=i.normal.x>0?e.max.x:e.min.x,hr.y=i.normal.y>0?e.max.y:e.min.y,hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tl(){let r=null,e=!1,t=null,n=null;function i(s,l){t(s,l),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Yc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,h){const d=u.array,f=u.usage,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,f),u.onUploadCallback();let v;if(d instanceof Float32Array)v=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(d instanceof Int16Array)v=5122;else if(d instanceof Uint32Array)v=5125;else if(d instanceof Int32Array)v=5124;else if(d instanceof Int8Array)v=5120;else if(d instanceof Uint8Array)v=5121;else if(d instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,d){const f=h.array,g=h.updateRange;r.bindBuffer(d,u),g.count===-1?r.bufferSubData(d,0,f):(t?r.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):r.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(r.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d===void 0?n.set(u,i(u,h)):d.version<u.version&&(s(d.buffer,u,h),d.version=u.version)}return{get:l,remove:a,update:c}}class Vi extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,l=t/2,a=Math.floor(n),c=Math.floor(i),u=a+1,h=c+1,d=e/a,f=t/c,g=[],v=[],m=[],p=[];for(let _=0;_<h;_++){const o=_*f-l;for(let y=0;y<u;y++){const b=y*d-s;v.push(b,-o,0),m.push(0,0,1),p.push(y/a),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let o=0;o<a;o++){const y=o+u*_,b=o+u*(_+1),x=o+1+u*(_+1),E=o+1+u*_;g.push(y,b,E),g.push(b,x,E)}this.setIndex(g),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(m,3)),this.setAttribute("uv",new ft(p,2))}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$c=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu="vec3 transformed = vec3( position );",nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,ru=`#ifdef USE_IRIDESCENCE
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
#endif`,su=`#ifdef USE_BUMPMAP
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
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
}`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gu=`vec3 transformedNormal = objectNormal;
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
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Su=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pu=`#ifdef USE_GRADIENTMAP
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
}`,Iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ku=`uniform bool receiveShadow;
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
#endif`,zu=`#if defined( USE_ENVMAP )
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
#endif`,Uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Hu=`PhysicalMaterial material;
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
#endif`,Wu=`struct PhysicalMaterial {
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
}`,Xu=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sd=`#ifdef USE_MORPHNORMALS
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
#endif`,od=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,cd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
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
#endif`,pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Gd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`#include <envmap_common_pars_fragment>
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
}`,Kd=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,Qd=`#define DISTANCE
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
}`,eh=`#define DISTANCE
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
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ih=`uniform float scale;
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
}`,rh=`uniform vec3 diffuse;
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
}`,sh=`#include <common>
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
}`,oh=`uniform vec3 diffuse;
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
}`,ah=`#define LAMBERT
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
}`,lh=`#define LAMBERT
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
}`,ch=`#define MATCAP
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
}`,uh=`#define MATCAP
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
}`,dh=`#define NORMAL
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
}`,hh=`#define NORMAL
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
}`,fh=`#define PHONG
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
}`,ph=`#define PHONG
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
}`,mh=`#define STANDARD
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
}`,gh=`#define STANDARD
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
}`,_h=`#define TOON
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
}`,vh=`#define TOON
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
}`,xh=`uniform float size;
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
}`,bh=`uniform vec3 diffuse;
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
}`,yh=`#include <common>
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
}`,Mh=`uniform vec3 color;
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
}`,Sh=`uniform float rotation;
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
}`,wh=`uniform vec3 diffuse;
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
}`,Ce={alphamap_fragment:Zc,alphamap_pars_fragment:$c,alphatest_fragment:Kc,alphatest_pars_fragment:Jc,aomap_fragment:Qc,aomap_pars_fragment:eu,begin_vertex:tu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:ru,bumpmap_pars_fragment:su,clipping_planes_fragment:ou,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:uu,color_pars_fragment:du,color_pars_vertex:hu,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:bu,encodings_fragment:yu,encodings_pars_fragment:Mu,envmap_fragment:Su,envmap_common_pars_fragment:wu,envmap_pars_fragment:Eu,envmap_pars_vertex:Tu,envmap_physical_pars_fragment:zu,envmap_vertex:Au,fog_vertex:Cu,fog_pars_vertex:Lu,fog_fragment:Ru,fog_pars_fragment:Du,gradientmap_pars_fragment:Pu,lightmap_fragment:Iu,lightmap_pars_fragment:Ou,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:Nu,lights_pars_begin:ku,lights_toon_fragment:Uu,lights_toon_pars_fragment:Bu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Vu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:ju,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:Zu,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:Ku,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:ed,map_particle_pars_fragment:td,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphcolor_vertex:rd,morphnormal_vertex:sd,morphtarget_pars_vertex:od,morphtarget_vertex:ad,normal_fragment_begin:ld,normal_fragment_maps:cd,normal_pars_fragment:ud,normal_pars_vertex:dd,normal_vertex:hd,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:gd,iridescence_pars_fragment:_d,output_fragment:vd,packing:xd,premultiplied_alpha_fragment:bd,project_vertex:yd,dithering_fragment:Md,dithering_pars_fragment:Sd,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:Ad,shadowmap_vertex:Cd,shadowmask_pars_fragment:Ld,skinbase_vertex:Rd,skinning_pars_vertex:Dd,skinning_vertex:Pd,skinnormal_vertex:Id,specularmap_fragment:Od,specularmap_pars_fragment:Fd,tonemapping_fragment:Nd,tonemapping_pars_fragment:kd,transmission_fragment:zd,transmission_pars_fragment:Ud,uv_pars_fragment:Bd,uv_pars_vertex:Gd,uv_vertex:Vd,uv2_pars_fragment:Hd,uv2_pars_vertex:Wd,uv2_vertex:Xd,worldpos_vertex:qd,background_vert:jd,background_frag:Yd,cube_vert:Zd,cube_frag:$d,depth_vert:Kd,depth_frag:Jd,distanceRGBA_vert:Qd,distanceRGBA_frag:eh,equirect_vert:th,equirect_frag:nh,linedashed_vert:ih,linedashed_frag:rh,meshbasic_vert:sh,meshbasic_frag:oh,meshlambert_vert:ah,meshlambert_frag:lh,meshmatcap_vert:ch,meshmatcap_frag:uh,meshnormal_vert:dh,meshnormal_frag:hh,meshphong_vert:fh,meshphong_frag:ph,meshphysical_vert:mh,meshphysical_frag:gh,meshtoon_vert:_h,meshtoon_frag:vh,points_vert:xh,points_frag:bh,shadow_vert:yh,shadow_frag:Mh,sprite_vert:Sh,sprite_frag:wh},se={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Et},uv2Transform:{value:new Et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}}},zt={basic:{uniforms:rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:rt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:rt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:rt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:rt([se.points,se.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:rt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:rt([se.common,se.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:rt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:rt([se.sprite,se.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:rt([se.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:rt([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:rt([se.lights,se.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};zt.physical={uniforms:rt([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function Eh(r,e,t,n,i,s){const l=new Fe(0);let a=i===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let _=!1,o=p.isScene===!0?p.background:null;o&&o.isTexture&&(o=e.get(o));const y=r.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(o=null),o===null?v(l,a):o&&o.isColor&&(v(o,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),o&&(o.isCubeTexture||o.mapping===wr)?(u===void 0&&(u=new xt(new Gi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:mi(zt.cube.uniforms),vertexShader:zt.cube.vertexShader,fragmentShader:zt.cube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=o,u.material.uniforms.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,(h!==o||d!==o.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=o,d=o.version,f=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):o&&o.isTexture&&(c===void 0&&(c=new xt(new Vi(2,2),new On({name:"BackgroundMaterial",uniforms:mi(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=o,o.matrixAutoUpdate===!0&&o.updateMatrix(),c.material.uniforms.uvTransform.value.copy(o.matrix),(h!==o||d!==o.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=o,d=o.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return l},setClearColor:function(m,p=1){l.set(m),a=p,v(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(l,a)},render:g}}function Th(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||s!==null,a={},c=p(null);let u=c,h=!1;function d(L,V,X,q,G){let O=!1;if(l){const z=m(q,X,V);u!==z&&(u=z,g(u.object)),O=_(L,q,X,G),O&&o(L,q,X,G)}else{const z=V.wireframe===!0;(u.geometry!==q.id||u.program!==X.id||u.wireframe!==z)&&(u.geometry=q.id,u.program=X.id,u.wireframe=z,O=!0)}G!==null&&t.update(G,34963),(O||h)&&(h=!1,M(L,V,X,q),G!==null&&r.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function g(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,V,X){const q=X.wireframe===!0;let G=a[L.id];G===void 0&&(G={},a[L.id]=G);let O=G[V.id];O===void 0&&(O={},G[V.id]=O);let z=O[q];return z===void 0&&(z=p(f()),O[q]=z),z}function p(L){const V=[],X=[],q=[];for(let G=0;G<i;G++)V[G]=0,X[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:q,object:L,attributes:{},index:null}}function _(L,V,X,q){const G=u.attributes,O=V.attributes;let z=0;const ee=X.getAttributes();for(const J in ee)if(ee[J].location>=0){const ae=G[J];let pe=O[J];if(pe===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;z++}return u.attributesNum!==z||u.index!==q}function o(L,V,X,q){const G={},O=V.attributes;let z=0;const ee=X.getAttributes();for(const J in ee)if(ee[J].location>=0){let ae=O[J];ae===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),G[J]=pe,z++}u.attributes=G,u.attributesNum=z,u.index=q}function y(){const L=u.newAttributes;for(let V=0,X=L.length;V<X;V++)L[V]=0}function b(L){x(L,0)}function x(L,V){const X=u.newAttributes,q=u.enabledAttributes,G=u.attributeDivisors;X[L]=1,q[L]===0&&(r.enableVertexAttribArray(L),q[L]=1),G[L]!==V&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),G[L]=V)}function E(){const L=u.newAttributes,V=u.enabledAttributes;for(let X=0,q=V.length;X<q;X++)V[X]!==L[X]&&(r.disableVertexAttribArray(X),V[X]=0)}function D(L,V,X,q,G,O){n.isWebGL2===!0&&(X===5124||X===5125)?r.vertexAttribIPointer(L,V,X,G,O):r.vertexAttribPointer(L,V,X,q,G,O)}function M(L,V,X,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=q.attributes,O=X.getAttributes(),z=V.defaultAttributeValues;for(const ee in O){const J=O[ee];if(J.location>=0){let Q=G[ee];if(Q===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const ae=Q.normalized,pe=Q.itemSize,Y=t.get(Q);if(Y===void 0)continue;const Le=Y.buffer,_e=Y.type,ve=Y.bytesPerElement;if(Q.isInterleavedBufferAttribute){const le=Q.data,Re=le.stride,Se=Q.offset;if(le.isInstancedInterleavedBuffer){for(let me=0;me<J.locationSize;me++)x(J.location+me,le.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<J.locationSize;me++)b(J.location+me);r.bindBuffer(34962,Le);for(let me=0;me<J.locationSize;me++)D(J.location+me,pe/J.locationSize,_e,ae,Re*ve,(Se+pe/J.locationSize*me)*ve)}else{if(Q.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)x(J.location+le,Q.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let le=0;le<J.locationSize;le++)b(J.location+le);r.bindBuffer(34962,Le);for(let le=0;le<J.locationSize;le++)D(J.location+le,pe/J.locationSize,_e,ae,pe*ve,pe/J.locationSize*le*ve)}}else if(z!==void 0){const ae=z[ee];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(J.location,ae);break;case 3:r.vertexAttrib3fv(J.location,ae);break;case 4:r.vertexAttrib4fv(J.location,ae);break;default:r.vertexAttrib1fv(J.location,ae)}}}}E()}function A(){te();for(const L in a){const V=a[L];for(const X in V){const q=V[X];for(const G in q)v(q[G].object),delete q[G];delete V[X]}delete a[L]}}function I(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const X in V){const q=V[X];for(const G in q)v(q[G].object),delete q[G];delete V[X]}delete a[L.id]}function H(L){for(const V in a){const X=a[V];if(X[L.id]===void 0)continue;const q=X[L.id];for(const G in q)v(q[G].object),delete q[G];delete X[L.id]}}function te(){k(),h=!0,u!==c&&(u=c,g(u.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:te,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:b,disableUnusedAttributes:E}}function Ah(r,e,t,n){const i=n.isWebGL2;let s;function l(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}this.setMode=l,this.render=a,this.renderInstances=c}function Ch(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=l||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),f=r.getParameter(35660),g=r.getParameter(3379),v=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),o=r.getParameter(36349),y=f>0,b=l||e.has("OES_texture_float"),x=y&&b,E=l?r.getParameter(36183):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:o,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:E}}function Lh(r){const e=this;let t=null,n=0,i=!1,s=!1;const l=new Mn,a=new Et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const v=d.length!==0||f||n!==0||i;return i=f,t=h(d,g,0),n=d.length,v},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,g){const v=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,_=r.get(d);if(!i||v===null||v.length===0||s&&!p)s?h(null):u();else{const o=s?0:n,y=o*4;let b=_.clippingState||null;c.value=b,b=h(v,f,y,g);for(let x=0;x!==y;++x)b[x]=t[x];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=o}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,g,v){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=c.value,v!==!0||p===null){const _=g+m*4,o=f.matrixWorldInverse;a.getNormalMatrix(o),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,b=g;y!==m;++y,b+=4)l.copy(d[y]).applyMatrix4(o,a),l.normal.toArray(p,b),p[b+3]=l.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Rh(r){let e=new WeakMap;function t(l,a){return a===Ms?l.mapping=hi:a===Ss&&(l.mapping=fi),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===Ms||a===Ss)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new Xc(c.height/2);return u.fromEquirectangularTexture(r,l),e.set(l,u),l.addEventListener("dispose",i),t(u.texture,l.mapping)}else return null}}return l}function i(l){const a=l.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Dh extends Qa{constructor(e=-1,t=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,l=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,l=s+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,l,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oi=4,Bo=[.125,.215,.35,.446,.526,.582],wn=20,us=new Dh,Go=new Fe;let ds=null;const Sn=(1+Math.sqrt(5))/2,ni=1/Sn,Vo=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Sn,ni),new P(0,Sn,-ni),new P(ni,0,Sn),new P(-ni,0,Sn),new P(Sn,ni,0),new P(-Sn,ni,0)];class Ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ds=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ds),e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ds=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Oi,format:Ut,encoding:Dn,depthBuffer:!1},i=Wo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ph(s)),this._blurMaterial=Ih(s,e,t)}return i}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,n,i){const a=new vt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Go),h.toneMapping=Kt,h.autoClear=!1;const g=new Bi({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),v=new xt(new Gi,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Go),m=!0);for(let _=0;_<6;_++){const o=_%3;o===0?(a.up.set(0,c[_],0),a.lookAt(u[_],0,0)):o===1?(a.up.set(0,0,c[_]),a.lookAt(0,u[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,u[_]));const y=this._cubeSize;fr(i,o*y,_>2?y:0,y,y),h.setRenderTarget(i),m&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===hi||e.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const s=i?this._cubemapMaterial:this._equirectMaterial,l=new xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;fr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=Vo[(i-1)%Vo.length];this._blur(e,i-1,i,s,l)}t.autoClear=n}_blur(e,t,n,i,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",s),this._halfBlur(l,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,l,a){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new xt(this._lodPlanes[i],u),f=u.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*wn-1),m=s/v,p=isFinite(s)?1+Math.floor(h*m):wn;p>wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wn}`);const _=[];let o=0;for(let D=0;D<wn;++D){const M=D/m,A=Math.exp(-M*M/2);_.push(A),D===0?o+=A:D<p&&(o+=2*A)}for(let D=0;D<_.length;D++)_[D]=_[D]/o;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=l==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const b=this._sizeLods[i],x=3*b*(i>y-oi?i-y+oi:0),E=4*(this._cubeSize-b);fr(t,x,E,3*b,2*b),c.setRenderTarget(t),c.render(d,us)}}function Ph(r){const e=[],t=[],n=[];let i=r;const s=r-oi+1+Bo.length;for(let l=0;l<s;l++){const a=Math.pow(2,i);t.push(a);let c=1/a;l>r-oi?c=Bo[l-r+oi-1]:l===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,v=6,m=3,p=2,_=1,o=new Float32Array(m*v*g),y=new Float32Array(p*v*g),b=new Float32Array(_*v*g);for(let E=0;E<g;E++){const D=E%3*2/3-1,M=E>2?0:-1,A=[D,M,0,D+2/3,M,0,D+2/3,M+1,0,D,M,0,D+2/3,M+1,0,D,M+1,0];o.set(A,m*v*E),y.set(f,p*v*E);const I=[E,E,E,E,E,E];b.set(I,_*v*E)}const x=new Gt;x.setAttribute("position",new Bt(o,m)),x.setAttribute("uv",new Bt(y,p)),x.setAttribute("faceIndex",new Bt(b,_)),e.push(x),i>oi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wo(r,e,t){const n=new Pn(r,e,t);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ih(r,e,t){const n=new Float32Array(wn),i=new P(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Xo(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function qo(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Gs(){return`

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
	`}function Oh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===Ms||c===Ss,h=c===hi||c===fi;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ho(r)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Ho(r));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Fh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nh(r,e,t,n){const i={},s=new WeakMap;function l(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",l),delete i[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",l),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)e.update(f[v],34962);const g=d.morphAttributes;for(const v in g){const m=g[v];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function u(d){const f=[],g=d.index,v=d.attributes.position;let m=0;if(g!==null){const o=g.array;m=g.version;for(let y=0,b=o.length;y<b;y+=3){const x=o[y+0],E=o[y+1],D=o[y+2];f.push(x,E,E,D,D,x)}}else{const o=v.array;m=v.version;for(let y=0,b=o.length/3-1;y<b;y+=3){const x=y+0,E=y+1,D=y+2;f.push(x,E,E,D,D,x)}}const p=new(Wa(f)?Ja:Ka)(f,1);p.version=m;const _=s.get(d);_&&e.remove(_),s.set(d,p)}function h(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function kh(r,e,t,n){const i=n.isWebGL2;let s;function l(f){s=f}let a,c;function u(f){a=f.type,c=f.bytesPerElement}function h(f,g){r.drawElements(s,g,a,f*c),t.update(g,s,1)}function d(f,g,v){if(v===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*c,v),t.update(g,s,v)}this.setMode=l,this.setIndex=u,this.render=h,this.renderInstances=d}function zh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,a){switch(t.calls++,l){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uh(r,e){return r[0]-e[0]}function Bh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Gh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,l=new Be,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,h,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let _=s.get(h);if(_===void 0||_.count!==p){let X=function(){L.dispose(),s.delete(h),h.removeEventListener("dispose",X)};var v=X;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let I=0;b===!0&&(I=1),x===!0&&(I=2),E===!0&&(I=3);let H=h.attributes.position.count*I,te=1;H>e.maxTextureSize&&(te=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const k=new Float32Array(H*te*4*p),L=new Ya(k,H,te,p);L.type=Tn,L.needsUpdate=!0;const V=I*4;for(let q=0;q<p;q++){const G=D[q],O=M[q],z=A[q],ee=H*te*4*q;for(let J=0;J<G.count;J++){const Q=J*V;b===!0&&(l.fromBufferAttribute(G,J),k[ee+Q+0]=l.x,k[ee+Q+1]=l.y,k[ee+Q+2]=l.z,k[ee+Q+3]=0),x===!0&&(l.fromBufferAttribute(O,J),k[ee+Q+4]=l.x,k[ee+Q+5]=l.y,k[ee+Q+6]=l.z,k[ee+Q+7]=0),E===!0&&(l.fromBufferAttribute(z,J),k[ee+Q+8]=l.x,k[ee+Q+9]=l.y,k[ee+Q+10]=l.z,k[ee+Q+11]=z.itemSize===4?l.w:1)}}_={count:p,texture:L,size:new Te(H,te)},s.set(h,_),h.addEventListener("dispose",X)}let o=0;for(let b=0;b<g.length;b++)o+=g[b];const y=h.morphTargetsRelative?1:1-o;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",g),f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const m=g===void 0?0:g.length;let p=n[h.id];if(p===void 0||p.length!==m){p=[];for(let x=0;x<m;x++)p[x]=[x,0];n[h.id]=p}for(let x=0;x<m;x++){const E=p[x];E[0]=x,E[1]=g[x]}p.sort(Bh);for(let x=0;x<8;x++)x<m&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Uh);const _=h.morphAttributes.position,o=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const E=a[x],D=E[0],M=E[1];D!==Number.MAX_SAFE_INTEGER&&M?(_&&h.getAttribute("morphTarget"+x)!==_[D]&&h.setAttribute("morphTarget"+x,_[D]),o&&h.getAttribute("morphNormal"+x)!==o[D]&&h.setAttribute("morphNormal"+x,o[D]),i[x]=M,y+=M):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),o&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const b=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Vh(r,e,t,n){let i=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,d=e.get(c,h);return i.get(d)!==u&&(e.update(d),i.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function l(){i=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:l}}const nl=new Ct,il=new Ya,rl=new Lc,sl=new el,jo=[],Yo=[],Zo=new Float32Array(16),$o=new Float32Array(9),Ko=new Float32Array(4);function gi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=jo[i];if(s===void 0&&(s=new Float32Array(i),jo[i]=s),e!==0){n.toArray(s,0);for(let l=1,a=0;l!==e;++l)a+=t,r[l].toArray(s,a)}return s}function Qe(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ar(r,e){let t=Yo[e];t===void 0&&(t=new Int32Array(e),Yo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Hh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Wh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;r.uniform2fv(this.addr,e),et(t,e)}}function Xh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qe(t,e))return;r.uniform3fv(this.addr,e),et(t,e)}}function qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;r.uniform4fv(this.addr,e),et(t,e)}}function jh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Ko.set(n),r.uniformMatrix2fv(this.addr,!1,Ko),et(t,n)}}function Yh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;$o.set(n),r.uniformMatrix3fv(this.addr,!1,$o),et(t,n)}}function Zh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),et(t,e)}else{if(Qe(t,n))return;Zo.set(n),r.uniformMatrix4fv(this.addr,!1,Zo),et(t,n)}}function $h(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Kh(r,e){const t=this.cache;Qe(t,e)||(r.uniform2iv(this.addr,e),et(t,e))}function Jh(r,e){const t=this.cache;Qe(t,e)||(r.uniform3iv(this.addr,e),et(t,e))}function Qh(r,e){const t=this.cache;Qe(t,e)||(r.uniform4iv(this.addr,e),et(t,e))}function ef(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tf(r,e){const t=this.cache;Qe(t,e)||(r.uniform2uiv(this.addr,e),et(t,e))}function nf(r,e){const t=this.cache;Qe(t,e)||(r.uniform3uiv(this.addr,e),et(t,e))}function rf(r,e){const t=this.cache;Qe(t,e)||(r.uniform4uiv(this.addr,e),et(t,e))}function sf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||nl,i)}function of(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rl,i)}function af(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sl,i)}function lf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||il,i)}function cf(r){switch(r){case 5126:return Hh;case 35664:return Wh;case 35665:return Xh;case 35666:return qh;case 35674:return jh;case 35675:return Yh;case 35676:return Zh;case 5124:case 35670:return $h;case 35667:case 35671:return Kh;case 35668:case 35672:return Jh;case 35669:case 35673:return Qh;case 5125:return ef;case 36294:return tf;case 36295:return nf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return lf}}function uf(r,e){r.uniform1fv(this.addr,e)}function df(r,e){const t=gi(e,this.size,2);r.uniform2fv(this.addr,t)}function hf(r,e){const t=gi(e,this.size,3);r.uniform3fv(this.addr,t)}function ff(r,e){const t=gi(e,this.size,4);r.uniform4fv(this.addr,t)}function pf(r,e){const t=gi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mf(r,e){const t=gi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gf(r,e){const t=gi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _f(r,e){r.uniform1iv(this.addr,e)}function vf(r,e){r.uniform2iv(this.addr,e)}function xf(r,e){r.uniform3iv(this.addr,e)}function bf(r,e){r.uniform4iv(this.addr,e)}function yf(r,e){r.uniform1uiv(this.addr,e)}function Mf(r,e){r.uniform2uiv(this.addr,e)}function Sf(r,e){r.uniform3uiv(this.addr,e)}function wf(r,e){r.uniform4uiv(this.addr,e)}function Ef(r,e,t){const n=this.cache,i=e.length,s=Ar(t,i);Qe(n,s)||(r.uniform1iv(this.addr,s),et(n,s));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||nl,s[l])}function Tf(r,e,t){const n=this.cache,i=e.length,s=Ar(t,i);Qe(n,s)||(r.uniform1iv(this.addr,s),et(n,s));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||rl,s[l])}function Af(r,e,t){const n=this.cache,i=e.length,s=Ar(t,i);Qe(n,s)||(r.uniform1iv(this.addr,s),et(n,s));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||sl,s[l])}function Cf(r,e,t){const n=this.cache,i=e.length,s=Ar(t,i);Qe(n,s)||(r.uniform1iv(this.addr,s),et(n,s));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||il,s[l])}function Lf(r){switch(r){case 5126:return uf;case 35664:return df;case 35665:return hf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return bf;case 5125:return yf;case 36294:return Mf;case 36295:return Sf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Cf}}class Rf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cf(t.type)}}class Df{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lf(t.type)}}class Pf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,l=i.length;s!==l;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const hs=/(\w+)(\])?(\[|\.)?/g;function Jo(r,e){r.seq.push(e),r.map[e.id]=e}function If(r,e,t){const n=r.name,i=n.length;for(hs.lastIndex=0;;){const s=hs.exec(n),l=hs.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&l+2===i){Jo(t,u===void 0?new Rf(a,r,e):new Df(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Pf(a),Jo(t,d)),t=d}}}class xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),l=e.getUniformLocation(t,s.name);If(s,l,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,l=t.length;s!==l;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function Qo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Of=0;function Ff(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=i;l<s;l++){const a=l+1;n.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return n.join(`
`)}function Nf(r){switch(r){case Dn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ea(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ff(r.getShaderSource(e),l)}else return i}function kf(r,e){const t=Nf(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zf(r,e){let t;switch(e){case nc:t="Linear";break;case ic:t="Reinhard";break;case rc:t="OptimizedCineon";break;case sc:t="ACESFilmic";break;case oc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Uf(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function Bf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),l=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[l]={type:s.type,location:r.getAttribLocation(e,l),locationSize:a}}return t}function Ai(r){return r!==""}function ta(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function na(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cs(r){return r.replace(Vf,Hf)}function Hf(r,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Cs(t)}const Wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ia(r){return r.replace(Wf,Xf)}function Xf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ra(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ua?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function jf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case hi:case fi:e="ENVMAP_TYPE_CUBE";break;case wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Zf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zs:e="ENVMAP_BLENDING_MULTIPLY";break;case ec:e="ENVMAP_BLENDING_MIX";break;case tc:e="ENVMAP_BLENDING_ADD";break}return e}function $f(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kf(r,e,t,n){const i=r.getContext(),s=t.defines;let l=t.vertexShader,a=t.fragmentShader;const c=qf(t),u=jf(t),h=Yf(t),d=Zf(t),f=$f(t),g=t.isWebGL2?"":Uf(t),v=Bf(s),m=i.createProgram();let p,_,o=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[v].filter(Ai).join(`
`),p.length>0&&(p+=`
`),_=[g,v].filter(Ai).join(`
`),_.length>0&&(_+=`
`)):(p=[ra(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),_=[g,ra(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kt?"#define TONE_MAPPING":"",t.toneMapping!==Kt?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Kt?zf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,kf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),l=Cs(l),l=ta(l,t),l=na(l,t),a=Cs(a),a=ta(a,t),a=na(a,t),l=ia(l),a=ia(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(o=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=o+p+l,b=o+_+a,x=Qo(i,35633,y),E=Qo(i,35632,b);if(i.attachShader(m,x),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(x).trim(),H=i.getShaderInfoLog(E).trim();let te=!0,k=!0;if(i.getProgramParameter(m,35714)===!1){te=!1;const L=ea(i,x,"vertex"),V=ea(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+L+`
`+V)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||H==="")&&(k=!1);k&&(this.diagnostics={runnable:te,programLog:A,vertexShader:{log:I,prefix:p},fragmentShader:{log:H,prefix:_}})}i.deleteShader(x),i.deleteShader(E);let D;this.getUniforms=function(){return D===void 0&&(D=new xr(i,m)),D};let M;return this.getAttributes=function(){return M===void 0&&(M=Gf(i,m)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Of++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=E,this}let Jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ep(e),t.set(e,n)),n}}class ep{constructor(e){this.id=Jf++,this.code=e,this.usedTimes=0}}function tp(r,e,t,n,i,s,l){const a=new $a,c=new Qf,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M,A,I,H,te){const k=H.fog,L=te.geometry,V=M.isMeshStandardMaterial?H.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),q=!!X&&X.mapping===wr?X.image.height:null,G=v[M.type];M.precision!==null&&(g=i.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const O=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,z=O!==void 0?O.length:0;let ee=0;L.morphAttributes.position!==void 0&&(ee=1),L.morphAttributes.normal!==void 0&&(ee=2),L.morphAttributes.color!==void 0&&(ee=3);let J,Q,ae,pe;if(G){const Re=zt[G];J=Re.vertexShader,Q=Re.fragmentShader}else J=M.vertexShader,Q=M.fragmentShader,c.update(M),ae=c.getVertexShaderID(M),pe=c.getFragmentShaderID(M);const Y=r.getRenderTarget(),Le=M.alphaTest>0,_e=M.clearcoat>0,ve=M.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:M.type,vertexShader:J,fragmentShader:Q,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?r.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Dn,map:!!M.map,matcap:!!M.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:q,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Ec,tangentSpaceNormalMap:M.normalMapType===Us,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===We,clearcoat:_e,clearcoatMap:_e&&!!M.clearcoatMap,clearcoatRoughnessMap:_e&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!M.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!M.iridescenceMap,iridescenceThicknessMap:ve&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===ci,alphaMap:!!M.alphaMap,alphaTest:Le,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!L.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:Kt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wt,flipSided:M.side===Tt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)A.push(I),A.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(A,M),o(A,M),A.push(r.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function o(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),M.push(a.mask)}function y(M){const A=v[M.type];let I;if(A){const H=zt[A];I=Gc.clone(H.uniforms)}else I=M.uniforms;return I}function b(M,A){let I;for(let H=0,te=u.length;H<te;H++){const k=u[H];if(k.cacheKey===A){I=k,++I.usedTimes;break}}return I===void 0&&(I=new Kf(r,A,M,s),u.push(I)),I}function x(M){if(--M.usedTimes===0){const A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:E,programs:u,dispose:D}}function np(){let r=new WeakMap;function e(s){let l=r.get(s);return l===void 0&&(l={},r.set(s,l)),l}function t(s){r.delete(s)}function n(s,l,a){r.get(s)[l]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ip(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function oa(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function l(d,f,g,v,m,p){let _=r[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},r[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function a(d,f,g,v,m,p){const _=l(d,f,g,v,m,p);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function c(d,f,g,v,m,p){const _=l(d,f,g,v,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function u(d,f){t.length>1&&t.sort(d||ip),n.length>1&&n.sort(f||sa),i.length>1&&i.sort(f||sa)}function h(){for(let d=e,f=r.length;d<f;d++){const g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:u}}function rp(){let r=new WeakMap;function e(n,i){const s=r.get(n);let l;return s===void 0?(l=new oa,r.set(n,[l])):i>=s.length?(l=new oa,s.push(l)):l=s[i],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function sp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function op(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ap=0;function lp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function cp(r,e){const t=new sp,n=op(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,l=new Ye,a=new Ye;function c(h,d){let f=0,g=0,v=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,p=0,_=0,o=0,y=0,b=0,x=0,E=0,D=0,M=0;h.sort(lp);const A=d!==!0?Math.PI:1;for(let H=0,te=h.length;H<te;H++){const k=h[H],L=k.color,V=k.intensity,X=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=L.r*V*A,g+=L.g*V*A,v+=L.b*V*A;else if(k.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(k.sh.coefficients[G],V);else if(k.isDirectionalLight){const G=t.get(k);if(G.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const O=k.shadow,z=n.get(k);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=k.shadow.matrix,b++}i.directional[m]=G,m++}else if(k.isSpotLight){const G=t.get(k);G.position.setFromMatrixPosition(k.matrixWorld),G.color.copy(L).multiplyScalar(V*A),G.distance=X,G.coneCos=Math.cos(k.angle),G.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),G.decay=k.decay,i.spot[_]=G;const O=k.shadow;if(k.map&&(i.spotLightMap[D]=k.map,D++,O.updateMatrices(k),k.castShadow&&M++),i.spotLightMatrix[_]=O.matrix,k.castShadow){const z=n.get(k);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=q,E++}_++}else if(k.isRectAreaLight){const G=t.get(k);G.color.copy(L).multiplyScalar(V),G.halfWidth.set(k.width*.5,0,0),G.halfHeight.set(0,k.height*.5,0),i.rectArea[o]=G,o++}else if(k.isPointLight){const G=t.get(k);if(G.color.copy(k.color).multiplyScalar(k.intensity*A),G.distance=k.distance,G.decay=k.decay,k.castShadow){const O=k.shadow,z=n.get(k);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,z.shadowCameraNear=O.camera.near,z.shadowCameraFar=O.camera.far,i.pointShadow[p]=z,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=k.shadow.matrix,x++}i.point[p]=G,p++}else if(k.isHemisphereLight){const G=t.get(k);G.skyColor.copy(k.color).multiplyScalar(V*A),G.groundColor.copy(k.groundColor).multiplyScalar(V*A),i.hemi[y]=G,y++}}o>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=g,i.ambient[2]=v;const I=i.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==o||I.hemiLength!==y||I.numDirectionalShadows!==b||I.numPointShadows!==x||I.numSpotShadows!==E||I.numSpotMaps!==D)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=o,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+D-M,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=M,I.directionalLength=m,I.pointLength=p,I.spotLength=_,I.rectAreaLength=o,I.hemiLength=y,I.numDirectionalShadows=b,I.numPointShadows=x,I.numSpotShadows=E,I.numSpotMaps=D,i.version=ap++)}function u(h,d){let f=0,g=0,v=0,m=0,p=0;const _=d.matrixWorldInverse;for(let o=0,y=h.length;o<y;o++){const b=h[o];if(b.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),f++}else if(b.isSpotLight){const x=i.spot[v];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),v++}else if(b.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),a.identity(),l.copy(b.matrixWorld),l.premultiply(_),a.extractRotation(l),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const x=i.point[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),g++}else if(b.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:c,setupView:u,state:i}}function aa(r,e){const t=new cp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function l(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:a}}function up(r,e){let t=new WeakMap;function n(s,l=0){const a=t.get(s);let c;return a===void 0?(c=new aa(r,e),t.set(s,[c])):l>=a.length?(c=new aa(r,e),a.push(c)):c=a[l],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class dp extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hp extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pp=`uniform sampler2D shadow_pass;
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
}`;function mp(r,e,t){let n=new Bs;const i=new Te,s=new Te,l=new Be,a=new dp({depthPacking:wc}),c=new hp,u={},h=t.maxTextureSize,d={0:Tt,1:di,2:wt},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:fp,fragmentShader:pp}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new Gt;v.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new xt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua,this.render=function(b,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const D=r.getRenderTarget(),M=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),I=r.state;I.setBlending(dn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let H=0,te=b.length;H<te;H++){const k=b[H],L=k.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const V=L.getFrameExtents();if(i.multiply(V),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,L.mapSize.y=s.y)),L.map===null){const q=this.type!==Ti?{minFilter:dt,magFilter:dt}:{};L.map=new Pn(i.x,i.y,q),L.map.texture.name=k.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const X=L.getViewportCount();for(let q=0;q<X;q++){const G=L.getViewport(q);l.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),I.viewport(l),L.updateMatrices(k,q),n=L.getFrustum(),y(x,E,L.camera,k,this.type)}L.isPointLightShadow!==!0&&this.type===Ti&&_(L,E),L.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(D,M,A)};function _(b,x){const E=e.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(x,null,E,f,m,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(x,null,E,g,m,null)}function o(b,x,E,D,M,A){let I=null;const H=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(H!==void 0?I=H:I=E.isPointLight===!0?c:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const te=I.uuid,k=x.uuid;let L=u[te];L===void 0&&(L={},u[te]=L);let V=L[k];V===void 0&&(V=I.clone(),L[k]=V),I=V}return I.visible=x.visible,I.wireframe=x.wireframe,A===Ti?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:d[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaTest,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(E.matrixWorld),I.nearDistance=D,I.farDistance=M),I}function y(b,x,E,D,M){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Ti)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const H=e.update(b),te=b.material;if(Array.isArray(te)){const k=H.groups;for(let L=0,V=k.length;L<V;L++){const X=k[L],q=te[X.materialIndex];if(q&&q.visible){const G=o(b,q,D,E.near,E.far,M);r.renderBufferDirect(E,null,H,G,b,X)}}}else if(te.visible){const k=o(b,te,D,E.near,E.far,M);r.renderBufferDirect(E,null,H,k,b,null)}}const I=b.children;for(let H=0,te=I.length;H<te;H++)y(I[H],x,E,D,M)}}function gp(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const ue=new Be;let re=null;const $=new Be(0,0,0,0);return{setMask:function(oe){re!==oe&&!R&&(r.colorMask(oe,oe,oe,oe),re=oe)},setLocked:function(oe){R=oe},setClear:function(oe,ye,Ue,je,tn){tn===!0&&(oe*=je,ye*=je,Ue*=je),ue.set(oe,ye,Ue,je),$.equals(ue)===!1&&(r.clearColor(oe,ye,Ue,je),$.copy(ue))},reset:function(){R=!1,re=null,$.set(-1,0,0,0)}}}function s(){let R=!1,ue=null,re=null,$=null;return{setTest:function(oe){oe?Le(2929):_e(2929)},setMask:function(oe){ue!==oe&&!R&&(r.depthMask(oe),ue=oe)},setFunc:function(oe){if(re!==oe){switch(oe){case jl:r.depthFunc(512);break;case Yl:r.depthFunc(519);break;case Zl:r.depthFunc(513);break;case ys:r.depthFunc(515);break;case $l:r.depthFunc(514);break;case Kl:r.depthFunc(518);break;case Jl:r.depthFunc(516);break;case Ql:r.depthFunc(517);break;default:r.depthFunc(515)}re=oe}},setLocked:function(oe){R=oe},setClear:function(oe){$!==oe&&(r.clearDepth(oe),$=oe)},reset:function(){R=!1,ue=null,re=null,$=null}}}function l(){let R=!1,ue=null,re=null,$=null,oe=null,ye=null,Ue=null,je=null,tn=null;return{setTest:function(Ve){R||(Ve?Le(2960):_e(2960))},setMask:function(Ve){ue!==Ve&&!R&&(r.stencilMask(Ve),ue=Ve)},setFunc:function(Ve,Vt,bt){(re!==Ve||$!==Vt||oe!==bt)&&(r.stencilFunc(Ve,Vt,bt),re=Ve,$=Vt,oe=bt)},setOp:function(Ve,Vt,bt){(ye!==Ve||Ue!==Vt||je!==bt)&&(r.stencilOp(Ve,Vt,bt),ye=Ve,Ue=Vt,je=bt)},setLocked:function(Ve){R=Ve},setClear:function(Ve){tn!==Ve&&(r.clearStencil(Ve),tn=Ve)},reset:function(){R=!1,ue=null,re=null,$=null,oe=null,ye=null,Ue=null,je=null,tn=null}}}const a=new i,c=new s,u=new l,h=new WeakMap,d=new WeakMap;let f={},g={},v=new WeakMap,m=[],p=null,_=!1,o=null,y=null,b=null,x=null,E=null,D=null,M=null,A=!1,I=null,H=null,te=null,k=null,L=null;const V=r.getParameter(35661);let X=!1,q=0;const G=r.getParameter(7938);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=q>=2);let O=null,z={};const ee=r.getParameter(3088),J=r.getParameter(2978),Q=new Be().fromArray(ee),ae=new Be().fromArray(J);function pe(R,ue,re){const $=new Uint8Array(4),oe=r.createTexture();r.bindTexture(R,oe),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let ye=0;ye<re;ye++)r.texImage2D(ue+ye,0,6408,1,1,0,6408,5121,$);return oe}const Y={};Y[3553]=pe(3553,3553,1),Y[34067]=pe(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Le(2929),c.setFunc(ys),Xe(!1),st(Zs),Le(2884),Ge(dn);function Le(R){f[R]!==!0&&(r.enable(R),f[R]=!0)}function _e(R){f[R]!==!1&&(r.disable(R),f[R]=!1)}function ve(R,ue){return g[R]!==ue?(r.bindFramebuffer(R,ue),g[R]=ue,n&&(R===36009&&(g[36160]=ue),R===36160&&(g[36009]=ue)),!0):!1}function le(R,ue){let re=m,$=!1;if(R)if(re=v.get(ue),re===void 0&&(re=[],v.set(ue,re)),R.isWebGLMultipleRenderTargets){const oe=R.texture;if(re.length!==oe.length||re[0]!==36064){for(let ye=0,Ue=oe.length;ye<Ue;ye++)re[ye]=36064+ye;re.length=oe.length,$=!0}}else re[0]!==36064&&(re[0]=36064,$=!0);else re[0]!==1029&&(re[0]=1029,$=!0);$&&(t.isWebGL2?r.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Re(R){return p!==R?(r.useProgram(R),p=R,!0):!1}const Se={[ii]:32774,[Nl]:32778,[kl]:32779};if(n)Se[Qs]=32775,Se[eo]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Se[Qs]=R.MIN_EXT,Se[eo]=R.MAX_EXT)}const me={[zl]:0,[Ul]:1,[Bl]:768,[Ba]:770,[ql]:776,[Wl]:774,[Vl]:772,[Gl]:769,[Ga]:771,[Xl]:775,[Hl]:773};function Ge(R,ue,re,$,oe,ye,Ue,je){if(R===dn){_===!0&&(_e(3042),_=!1);return}if(_===!1&&(Le(3042),_=!0),R!==Fl){if(R!==o||je!==A){if((y!==ii||E!==ii)&&(r.blendEquation(32774),y=ii,E=ii),je)switch(R){case ci:r.blendFuncSeparate(1,771,1,771);break;case $s:r.blendFunc(1,1);break;case Ks:r.blendFuncSeparate(0,769,0,1);break;case Js:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ci:r.blendFuncSeparate(770,771,1,771);break;case $s:r.blendFunc(770,1);break;case Ks:r.blendFuncSeparate(0,769,0,1);break;case Js:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,x=null,D=null,M=null,o=R,A=je}return}oe=oe||ue,ye=ye||re,Ue=Ue||$,(ue!==y||oe!==E)&&(r.blendEquationSeparate(Se[ue],Se[oe]),y=ue,E=oe),(re!==b||$!==x||ye!==D||Ue!==M)&&(r.blendFuncSeparate(me[re],me[$],me[ye],me[Ue]),b=re,x=$,D=ye,M=Ue),o=R,A=null}function Ke(R,ue){R.side===wt?_e(2884):Le(2884);let re=R.side===Tt;ue&&(re=!re),Xe(re),R.blending===ci&&R.transparent===!1?Ge(dn):Ge(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const $=R.stencilWrite;u.setTest($),$&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ie(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Le(32926):_e(32926)}function Xe(R){I!==R&&(R?r.frontFace(2304):r.frontFace(2305),I=R)}function st(R){R!==Pl?(Le(2884),R!==H&&(R===Zs?r.cullFace(1029):R===Il?r.cullFace(1028):r.cullFace(1032))):_e(2884),H=R}function qe(R){R!==te&&(X&&r.lineWidth(R),te=R)}function Ie(R,ue,re){R?(Le(32823),(k!==ue||L!==re)&&(r.polygonOffset(ue,re),k=ue,L=re)):_e(32823)}function ct(R){R?Le(3089):_e(3089)}function ut(R){R===void 0&&(R=33984+V-1),O!==R&&(r.activeTexture(R),O=R)}function T(R,ue,re){re===void 0&&(O===null?re=33984+V-1:re=O);let $=z[re];$===void 0&&($={type:void 0,texture:void 0},z[re]=$),($.type!==R||$.texture!==ue)&&(O!==re&&(r.activeTexture(re),O=re),r.bindTexture(R,ue||Y[R]),$.type=R,$.texture=ue)}function S(){const R=z[O];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function W(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function C(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function N(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(R){Q.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function he(R){ae.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),ae.copy(R))}function ge(R,ue){let re=d.get(ue);re===void 0&&(re=new WeakMap,d.set(ue,re));let $=re.get(R);$===void 0&&($=r.getUniformBlockIndex(ue,R.name),re.set(R,$))}function Me(R,ue){const $=d.get(ue).get(R);h.get(R)!==$&&(r.uniformBlockBinding(ue,$,R.__bindingPointIndex),h.set(R,$))}function Oe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},O=null,z={},g={},v=new WeakMap,m=[],p=null,_=!1,o=null,y=null,b=null,x=null,E=null,D=null,M=null,A=!1,I=null,H=null,te=null,k=null,L=null,Q.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Le,disable:_e,bindFramebuffer:ve,drawBuffers:le,useProgram:Re,setBlending:Ge,setMaterial:Ke,setFlipSided:Xe,setCullFace:st,setLineWidth:qe,setPolygonOffset:Ie,setScissorTest:ct,activeTexture:ut,bindTexture:T,unbindTexture:S,compressedTexImage2D:W,texImage2D:N,texImage3D:de,updateUBOMapping:ge,uniformBlockBinding:Me,texStorage2D:be,texStorage3D:C,texSubImage2D:ne,texSubImage3D:ie,compressedTexSubImage2D:ce,scissor:fe,viewport:he,reset:Oe}}function _p(r,e,t,n,i,s,l){const a=i.isWebGL2,c=i.maxTextures,u=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function o(T,S){return _?new OffscreenCanvas(T,S):Fi("canvas")}function y(T,S,W,ne){let ie=1;if((T.width>ne||T.height>ne)&&(ie=ne/Math.max(T.width,T.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ce=S?As:Math.floor,be=ce(ie*T.width),C=ce(ie*T.height);m===void 0&&(m=o(be,C));const N=W?o(be,C):m;return N.width=be,N.height=C,N.getContext("2d").drawImage(T,0,0,be,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+C+")."),N}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return Co(T.width)&&Co(T.height)}function x(T){return a?!1:T.wrapS!==It||T.wrapT!==It||T.minFilter!==dt&&T.minFilter!==St}function E(T,S){return T.generateMipmaps&&S&&T.minFilter!==dt&&T.minFilter!==St}function D(T){r.generateMipmap(T)}function M(T,S,W,ne,ie=!1){if(a===!1)return S;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce=S;return S===6403&&(W===5126&&(ce=33326),W===5131&&(ce=33325),W===5121&&(ce=33321)),S===33319&&(W===5126&&(ce=33328),W===5131&&(ce=33327),W===5121&&(ce=33323)),S===6408&&(W===5126&&(ce=34836),W===5131&&(ce=34842),W===5121&&(ce=ne===We&&ie===!1?35907:32856),W===32819&&(ce=32854),W===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function A(T,S,W){return E(T,W)===!0||T.isFramebufferTexture&&T.minFilter!==dt&&T.minFilter!==St?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function I(T){return T===dt||T===to||T===no?9728:9729}function H(T){const S=T.target;S.removeEventListener("dispose",H),k(S),S.isVideoTexture&&v.delete(S)}function te(T){const S=T.target;S.removeEventListener("dispose",te),V(S)}function k(T){const S=n.get(T);if(S.__webglInit===void 0)return;const W=T.source,ne=p.get(W);if(ne){const ie=ne[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(T),Object.keys(ne).length===0&&p.delete(W)}n.remove(T)}function L(T){const S=n.get(T);r.deleteTexture(S.__webglTexture);const W=T.source,ne=p.get(W);delete ne[S.__cacheKey],l.memory.textures--}function V(T){const S=T.texture,W=n.get(T),ne=n.get(S);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),l.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)r.deleteFramebuffer(W.__webglFramebuffer[ie]),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[ie]);else{if(r.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,ce=S.length;ie<ce;ie++){const be=n.get(S[ie]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),l.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(T)}let X=0;function q(){X=0}function G(){const T=X;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),X+=1,T}function O(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function z(T,S){const W=n.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(W,T,S);return}}t.bindTexture(3553,W.__webglTexture,33984+S)}function ee(T,S){const W=n.get(T);if(T.version>0&&W.__version!==T.version){_e(W,T,S);return}t.bindTexture(35866,W.__webglTexture,33984+S)}function J(T,S){const W=n.get(T);if(T.version>0&&W.__version!==T.version){_e(W,T,S);return}t.bindTexture(32879,W.__webglTexture,33984+S)}function Q(T,S){const W=n.get(T);if(T.version>0&&W.__version!==T.version){ve(W,T,S);return}t.bindTexture(34067,W.__webglTexture,33984+S)}const ae={[ws]:10497,[It]:33071,[Es]:33648},pe={[dt]:9728,[to]:9984,[no]:9986,[St]:9729,[ac]:9985,[Er]:9987};function Y(T,S,W){if(W?(r.texParameteri(T,10242,ae[S.wrapS]),r.texParameteri(T,10243,ae[S.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,ae[S.wrapR]),r.texParameteri(T,10240,pe[S.magFilter]),r.texParameteri(T,10241,pe[S.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(S.wrapS!==It||S.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,I(S.magFilter)),r.texParameteri(T,10241,I(S.minFilter)),S.minFilter!==dt&&S.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Oi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Le(T,S){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",H));const ne=S.source;let ie=p.get(ne);ie===void 0&&(ie={},p.set(ne,ie));const ce=O(S);if(ce!==T.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,W=!0),ie[ce].usedTimes++;const be=ie[T.__cacheKey];be!==void 0&&(ie[T.__cacheKey].usedTimes--,be.usedTimes===0&&L(S)),T.__cacheKey=ce,T.__webglTexture=ie[ce].texture}return W}function _e(T,S,W){let ne=3553;S.isDataArrayTexture&&(ne=35866),S.isData3DTexture&&(ne=32879);const ie=Le(T,S),ce=S.source;t.bindTexture(ne,T.__webglTexture,33984+W);const be=n.get(ce);if(ce.version!==be.__version||ie===!0){t.activeTexture(33984+W),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const C=x(S)&&b(S.image)===!1;let N=y(S.image,C,!1,h);N=ut(S,N);const de=b(N)||a,fe=s.convert(S.format,S.encoding);let he=s.convert(S.type),ge=M(S.internalFormat,fe,he,S.encoding,S.isVideoTexture);Y(ne,S,de);let Me;const Oe=S.mipmaps,R=a&&S.isVideoTexture!==!0,ue=be.__version===void 0||ie===!0,re=A(S,N,de);if(S.isDepthTexture)ge=6402,a?S.type===Tn?ge=36012:S.type===En?ge=33190:S.type===ui?ge=35056:ge=33189:S.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Cn&&ge===6402&&S.type!==Ha&&S.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=En,he=s.convert(S.type)),S.format===pi&&ge===6402&&(ge=34041,S.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ui,he=s.convert(S.type))),ue&&(R?t.texStorage2D(3553,1,ge,N.width,N.height):t.texImage2D(3553,0,ge,N.width,N.height,0,fe,he,null));else if(S.isDataTexture)if(Oe.length>0&&de){R&&ue&&t.texStorage2D(3553,re,ge,Oe[0].width,Oe[0].height);for(let $=0,oe=Oe.length;$<oe;$++)Me=Oe[$],R?t.texSubImage2D(3553,$,0,0,Me.width,Me.height,fe,he,Me.data):t.texImage2D(3553,$,ge,Me.width,Me.height,0,fe,he,Me.data);S.generateMipmaps=!1}else R?(ue&&t.texStorage2D(3553,re,ge,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,fe,he,N.data)):t.texImage2D(3553,0,ge,N.width,N.height,0,fe,he,N.data);else if(S.isCompressedTexture){R&&ue&&t.texStorage2D(3553,re,ge,Oe[0].width,Oe[0].height);for(let $=0,oe=Oe.length;$<oe;$++)Me=Oe[$],S.format!==Ut?fe!==null?R?t.compressedTexSubImage2D(3553,$,0,0,Me.width,Me.height,fe,Me.data):t.compressedTexImage2D(3553,$,ge,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?t.texSubImage2D(3553,$,0,0,Me.width,Me.height,fe,he,Me.data):t.texImage2D(3553,$,ge,Me.width,Me.height,0,fe,he,Me.data)}else if(S.isDataArrayTexture)R?(ue&&t.texStorage3D(35866,re,ge,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,fe,he,N.data)):t.texImage3D(35866,0,ge,N.width,N.height,N.depth,0,fe,he,N.data);else if(S.isData3DTexture)R?(ue&&t.texStorage3D(32879,re,ge,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,fe,he,N.data)):t.texImage3D(32879,0,ge,N.width,N.height,N.depth,0,fe,he,N.data);else if(S.isFramebufferTexture){if(ue)if(R)t.texStorage2D(3553,re,ge,N.width,N.height);else{let $=N.width,oe=N.height;for(let ye=0;ye<re;ye++)t.texImage2D(3553,ye,ge,$,oe,0,fe,he,null),$>>=1,oe>>=1}}else if(Oe.length>0&&de){R&&ue&&t.texStorage2D(3553,re,ge,Oe[0].width,Oe[0].height);for(let $=0,oe=Oe.length;$<oe;$++)Me=Oe[$],R?t.texSubImage2D(3553,$,0,0,fe,he,Me):t.texImage2D(3553,$,ge,fe,he,Me);S.generateMipmaps=!1}else R?(ue&&t.texStorage2D(3553,re,ge,N.width,N.height),t.texSubImage2D(3553,0,0,0,fe,he,N)):t.texImage2D(3553,0,ge,fe,he,N);E(S,de)&&D(ne),be.__version=ce.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ve(T,S,W){if(S.image.length!==6)return;const ne=Le(T,S),ie=S.source;t.bindTexture(34067,T.__webglTexture,33984+W);const ce=n.get(ie);if(ie.version!==ce.__version||ne===!0){t.activeTexture(33984+W),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,N=[];for(let $=0;$<6;$++)!be&&!C?N[$]=y(S.image[$],!1,!0,u):N[$]=C?S.image[$].image:S.image[$],N[$]=ut(S,N[$]);const de=N[0],fe=b(de)||a,he=s.convert(S.format,S.encoding),ge=s.convert(S.type),Me=M(S.internalFormat,he,ge,S.encoding),Oe=a&&S.isVideoTexture!==!0,R=ce.__version===void 0||ne===!0;let ue=A(S,de,fe);Y(34067,S,fe);let re;if(be){Oe&&R&&t.texStorage2D(34067,ue,Me,de.width,de.height);for(let $=0;$<6;$++){re=N[$].mipmaps;for(let oe=0;oe<re.length;oe++){const ye=re[oe];S.format!==Ut?he!==null?Oe?t.compressedTexSubImage2D(34069+$,oe,0,0,ye.width,ye.height,he,ye.data):t.compressedTexImage2D(34069+$,oe,Me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+$,oe,0,0,ye.width,ye.height,he,ge,ye.data):t.texImage2D(34069+$,oe,Me,ye.width,ye.height,0,he,ge,ye.data)}}}else{re=S.mipmaps,Oe&&R&&(re.length>0&&ue++,t.texStorage2D(34067,ue,Me,N[0].width,N[0].height));for(let $=0;$<6;$++)if(C){Oe?t.texSubImage2D(34069+$,0,0,0,N[$].width,N[$].height,he,ge,N[$].data):t.texImage2D(34069+$,0,Me,N[$].width,N[$].height,0,he,ge,N[$].data);for(let oe=0;oe<re.length;oe++){const Ue=re[oe].image[$].image;Oe?t.texSubImage2D(34069+$,oe+1,0,0,Ue.width,Ue.height,he,ge,Ue.data):t.texImage2D(34069+$,oe+1,Me,Ue.width,Ue.height,0,he,ge,Ue.data)}}else{Oe?t.texSubImage2D(34069+$,0,0,0,he,ge,N[$]):t.texImage2D(34069+$,0,Me,he,ge,N[$]);for(let oe=0;oe<re.length;oe++){const ye=re[oe];Oe?t.texSubImage2D(34069+$,oe+1,0,0,he,ge,ye.image[$]):t.texImage2D(34069+$,oe+1,Me,he,ge,ye.image[$])}}}E(S,fe)&&D(34067),ce.__version=ie.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function le(T,S,W,ne,ie){const ce=s.convert(W.format,W.encoding),be=s.convert(W.type),C=M(W.internalFormat,ce,be,W.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,C,S.width,S.height,S.depth,0,ce,be,null):t.texImage2D(ie,0,C,S.width,S.height,0,ce,be,null)),t.bindFramebuffer(36160,T),Ie(S)?f.framebufferTexture2DMultisampleEXT(36160,ne,ie,n.get(W).__webglTexture,0,qe(S)):r.framebufferTexture2D(36160,ne,ie,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(T,S,W){if(r.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let ne=33189;if(W||Ie(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Tn?ne=36012:ie.type===En&&(ne=33190));const ce=qe(S);Ie(S)?f.renderbufferStorageMultisampleEXT(36161,ce,ne,S.width,S.height):r.renderbufferStorageMultisample(36161,ce,ne,S.width,S.height)}else r.renderbufferStorage(36161,ne,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const ne=qe(S);W&&Ie(S)===!1?r.renderbufferStorageMultisample(36161,ne,35056,S.width,S.height):Ie(S)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],be=s.convert(ce.format,ce.encoding),C=s.convert(ce.type),N=M(ce.internalFormat,be,C,ce.encoding),de=qe(S);W&&Ie(S)===!1?r.renderbufferStorageMultisample(36161,de,N,S.width,S.height):Ie(S)?f.renderbufferStorageMultisampleEXT(36161,de,N,S.width,S.height):r.renderbufferStorage(36161,N,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function Se(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,ie=qe(S);if(S.depthTexture.format===Cn)Ie(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ie):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(S.depthTexture.format===pi)Ie(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ie):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function me(T){const S=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,T)}else if(W){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=r.createRenderbuffer(),Re(S.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Re(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Ge(T,S,W){const ne=n.get(T);S!==void 0&&le(ne.__webglFramebuffer,T,T.texture,36064,3553),W!==void 0&&me(T)}function Ke(T){const S=T.texture,W=n.get(T),ne=n.get(S);T.addEventListener("dispose",te),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=S.version,l.memory.textures++);const ie=T.isWebGLCubeRenderTarget===!0,ce=T.isWebGLMultipleRenderTargets===!0,be=b(T)||a;if(ie){W.__webglFramebuffer=[];for(let C=0;C<6;C++)W.__webglFramebuffer[C]=r.createFramebuffer()}else{if(W.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const C=T.texture;for(let N=0,de=C.length;N<de;N++){const fe=n.get(C[N]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ie(T)===!1){const C=ce?S:[S];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let N=0;N<C.length;N++){const de=C[N];W.__webglColorRenderbuffer[N]=r.createRenderbuffer(),r.bindRenderbuffer(36161,W.__webglColorRenderbuffer[N]);const fe=s.convert(de.format,de.encoding),he=s.convert(de.type),ge=M(de.internalFormat,fe,he,de.encoding,T.isXRRenderTarget===!0),Me=qe(T);r.renderbufferStorageMultisample(36161,Me,ge,T.width,T.height),r.framebufferRenderbuffer(36160,36064+N,36161,W.__webglColorRenderbuffer[N])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(W.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ne.__webglTexture),Y(34067,S,be);for(let C=0;C<6;C++)le(W.__webglFramebuffer[C],T,S,36064,34069+C);E(S,be)&&D(34067),t.unbindTexture()}else if(ce){const C=T.texture;for(let N=0,de=C.length;N<de;N++){const fe=C[N],he=n.get(fe);t.bindTexture(3553,he.__webglTexture),Y(3553,fe,be),le(W.__webglFramebuffer,T,fe,36064+N,3553),E(fe,be)&&D(3553)}t.unbindTexture()}else{let C=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?C=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,ne.__webglTexture),Y(C,S,be),le(W.__webglFramebuffer,T,S,36064,C),E(S,be)&&D(C),t.unbindTexture()}T.depthBuffer&&me(T)}function Xe(T){const S=b(T)||a,W=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,ie=W.length;ne<ie;ne++){const ce=W[ne];if(E(ce,S)){const be=T.isWebGLCubeRenderTarget?34067:3553,C=n.get(ce).__webglTexture;t.bindTexture(be,C),D(be),t.unbindTexture()}}}function st(T){if(a&&T.samples>0&&Ie(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],W=T.width,ne=T.height;let ie=16384;const ce=[],be=T.stencilBuffer?33306:36096,C=n.get(T),N=T.isWebGLMultipleRenderTargets===!0;if(N)for(let de=0;de<S.length;de++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),r.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let de=0;de<S.length;de++){ce.push(36064+de),T.depthBuffer&&ce.push(be);const fe=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(fe===!1&&(T.depthBuffer&&(ie|=256),T.stencilBuffer&&(ie|=1024)),N&&r.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[de]),fe===!0&&(r.invalidateFramebuffer(36008,[be]),r.invalidateFramebuffer(36009,[be])),N){const he=n.get(S[de]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,he,0)}r.blitFramebuffer(0,0,W,ne,0,0,W,ne,ie,9728),g&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),N)for(let de=0;de<S.length;de++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+de,36161,C.__webglColorRenderbuffer[de]);const fe=n.get(S[de]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),r.framebufferTexture2D(36009,36064+de,3553,fe,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function qe(T){return Math.min(d,T.samples)}function Ie(T){const S=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(T){const S=l.render.frame;v.get(T)!==S&&(v.set(T,S),T.update())}function ut(T,S){const W=T.encoding,ne=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ts||W!==Dn&&(W===We?a===!1?e.has("EXT_sRGB")===!0&&ne===Ut?(T.format=Ts,T.minFilter=St,T.generateMipmaps=!1):S=qa.sRGBToLinear(S):(ne!==Ut||ie!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),S}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.setTexture2D=z,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=Ge,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ie}function vp(r,e,t){const n=t.isWebGL2;function i(s,l=null){let a;if(s===Rn)return 5121;if(s===dc)return 32819;if(s===hc)return 32820;if(s===lc)return 5120;if(s===cc)return 5122;if(s===Ha)return 5123;if(s===uc)return 5124;if(s===En)return 5125;if(s===Tn)return 5126;if(s===Oi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fc)return 6406;if(s===Ut)return 6408;if(s===mc)return 6409;if(s===gc)return 6410;if(s===Cn)return 6402;if(s===pi)return 34041;if(s===_c)return 6403;if(s===pc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ts)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vc)return 36244;if(s===xc)return 33319;if(s===bc)return 33320;if(s===yc)return 36249;if(s===Nr||s===kr||s===zr||s===Ur)if(l===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Nr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Nr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ur)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===io||s===ro||s===so||s===oo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===io)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ro)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===so)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ao||s===lo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ao)return l===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===co||s===uo||s===ho||s===fo||s===po||s===mo||s===go||s===_o||s===vo||s===xo||s===bo||s===yo||s===Mo||s===So)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===co)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ho)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===po)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===go)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_o)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mo)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===So)return l===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wo)return l===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ui?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class xp extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pr extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bp={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,l=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(u.joints[m.jointName]===void 0){const o=new pr;o.matrixAutoUpdate=!1,o.visible=!1,u.joints[m.jointName]=o,u.add(o)}const _=u.joints[m.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,v=.005;u.inputState.pinching&&f>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=l!==null),this}}class yp extends Ct{constructor(e,t,n,i,s,l,a,c,u,h){if(h=h!==void 0?h:Cn,h!==Cn&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cn&&(n=En),n===void 0&&h===pi&&(n=ui),super(null,i,s,l,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=c!==void 0?c:dt,this.flipY=!1,this.generateMipmaps=!1}}class Mp extends Fn{constructor(e,t){super();const n=this;let i=null,s=1,l=null,a="local-floor",c=null,u=null,h=null,d=null,f=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const _=[],o=[],y=new vt;y.layers.enable(1),y.viewport=new Be;const b=new vt;b.layers.enable(2),b.viewport=new Be;const x=[y,b],E=new xp;E.layers.enable(1),E.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let z=_[O];return z===void 0&&(z=new fs,_[O]=z),z.getTargetRaySpace()},this.getControllerGrip=function(O){let z=_[O];return z===void 0&&(z=new fs,_[O]=z),z.getGripSpace()},this.getHand=function(O){let z=_[O];return z===void 0&&(z=new fs,_[O]=z),z.getHandSpace()};function A(O){const z=o.indexOf(O.inputSource);if(z===-1)return;const ee=_[z];ee!==void 0&&ee.dispatchEvent({type:O.type,data:O.inputSource})}function I(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",H);for(let O=0;O<_.length;O++){const z=o[O];z!==null&&(o[O]=null,_[O].disconnect(z))}D=null,M=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||l},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",I),i.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:f}),p=new Pn(f.framebufferWidth,f.framebufferHeight,{format:Ut,type:Rn,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let z=null,ee=null,J=null;v.depth&&(J=v.stencil?35056:33190,z=v.stencil?pi:Cn,ee=v.stencil?ui:En);const Q={colorFormat:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Q),i.updateRenderState({layers:[d]}),p=new Pn(d.textureWidth,d.textureHeight,{format:Ut,type:Rn,depthTexture:new yp(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const ae=e.properties.get(p);ae.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,l=await i.requestReferenceSpace(a),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(O){for(let z=0;z<O.removed.length;z++){const ee=O.removed[z],J=o.indexOf(ee);J>=0&&(o[J]=null,_[J].dispatchEvent({type:"disconnected",data:ee}))}for(let z=0;z<O.added.length;z++){const ee=O.added[z];let J=o.indexOf(ee);if(J===-1){for(let ae=0;ae<_.length;ae++)if(ae>=o.length){o.push(ee),J=ae;break}else if(o[ae]===null){o[ae]=ee,J=ae;break}if(J===-1)break}const Q=_[J];Q&&Q.dispatchEvent({type:"connected",data:ee})}}const te=new P,k=new P;function L(O,z,ee){te.setFromMatrixPosition(z.matrixWorld),k.setFromMatrixPosition(ee.matrixWorld);const J=te.distanceTo(k),Q=z.projectionMatrix.elements,ae=ee.projectionMatrix.elements,pe=Q[14]/(Q[10]-1),Y=Q[14]/(Q[10]+1),Le=(Q[9]+1)/Q[5],_e=(Q[9]-1)/Q[5],ve=(Q[8]-1)/Q[0],le=(ae[8]+1)/ae[0],Re=pe*ve,Se=pe*le,me=J/(-ve+le),Ge=me*-ve;z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ge),O.translateZ(me),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Ke=pe+me,Xe=Y+me,st=Re-Ge,qe=Se+(J-Ge),Ie=Le*Y/Xe*Ke,ct=_e*Y/Xe*Ke;O.projectionMatrix.makePerspective(st,qe,Ie,ct,Ke,Xe)}function V(O,z){z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;E.near=b.near=y.near=O.near,E.far=b.far=y.far=O.far,(D!==E.near||M!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,M=E.far);const z=O.parent,ee=E.cameras;V(E,z);for(let Q=0;Q<ee.length;Q++)V(ee[Q],z);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),O.matrix.copy(E.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const J=O.children;for(let Q=0,ae=J.length;Q<ae;Q++)J[Q].updateMatrixWorld(!0);ee.length===2?L(E,y,b):E.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let X=null;function q(O,z){if(u=z.getViewerPose(c||l),g=z,u!==null){const ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let J=!1;ee.length!==E.cameras.length&&(E.cameras.length=0,J=!0);for(let Q=0;Q<ee.length;Q++){const ae=ee[Q];let pe=null;if(f!==null)pe=f.getViewport(ae);else{const Le=h.getViewSubImage(d,ae);pe=Le.viewport,Q===0&&(e.setRenderTargetTextures(p,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let Y=x[Q];Y===void 0&&(Y=new vt,Y.layers.enable(Q),Y.viewport=new Be,x[Q]=Y),Y.matrix.fromArray(ae.transform.matrix),Y.projectionMatrix.fromArray(ae.projectionMatrix),Y.viewport.set(pe.x,pe.y,pe.width,pe.height),Q===0&&E.matrix.copy(Y.matrix),J===!0&&E.cameras.push(Y)}}for(let ee=0;ee<_.length;ee++){const J=o[ee],Q=_[ee];J!==null&&Q!==void 0&&Q.update(J,z,c||l)}X&&X(O,z),g=null}const G=new tl;G.setAnimationLoop(q),this.setAnimationLoop=function(O){X=O},this.dispose=function(){}}}function Sp(r,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,o,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),v(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?a(m,p,_,o):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Tt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Tt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let o;p.map?o=p.map:p.specularMap?o=p.specularMap:p.displacementMap?o=p.displacementMap:p.normalMap?o=p.normalMap:p.bumpMap?o=p.bumpMap:p.roughnessMap?o=p.roughnessMap:p.metalnessMap?o=p.metalnessMap:p.alphaMap?o=p.alphaMap:p.emissiveMap?o=p.emissiveMap:p.clearcoatMap?o=p.clearcoatMap:p.clearcoatNormalMap?o=p.clearcoatNormalMap:p.clearcoatRoughnessMap?o=p.clearcoatRoughnessMap:p.iridescenceMap?o=p.iridescenceMap:p.iridescenceThicknessMap?o=p.iridescenceThicknessMap:p.specularIntensityMap?o=p.specularIntensityMap:p.specularColorMap?o=p.specularColorMap:p.transmissionMap?o=p.transmissionMap:p.thicknessMap?o=p.thicknessMap:p.sheenColorMap?o=p.sheenColorMap:p.sheenRoughnessMap&&(o=p.sheenRoughnessMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),m.uvTransform.value.copy(o.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,o){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=o*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Tt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function wp(r,e,t,n){let i={},s={},l=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(o,y){const b=y.program;n.uniformBlockBinding(o,b)}function u(o,y){let b=i[o.id];b===void 0&&(v(o),b=h(o),i[o.id]=b,o.addEventListener("dispose",p));const x=y.program;n.updateUBOMapping(o,x);const E=e.render.frame;s[o.id]!==E&&(f(o),s[o.id]=E)}function h(o){const y=d();o.__bindingPointIndex=y;const b=r.createBuffer(),x=o.__size,E=o.usage;return r.bindBuffer(35345,b),r.bufferData(35345,x,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,b),b}function d(){for(let o=0;o<a;o++)if(l.indexOf(o)===-1)return l.push(o),o;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(o){const y=i[o.id],b=o.uniforms,x=o.__cache;r.bindBuffer(35345,y);for(let E=0,D=b.length;E<D;E++){const M=b[E];if(g(M,E,x)===!0){const A=M.value,I=M.__offset;typeof A=="number"?(M.__data[0]=A,r.bufferSubData(35345,I,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):A.toArray(M.__data),r.bufferSubData(35345,I,M.__data))}}r.bindBuffer(35345,null)}function g(o,y,b){const x=o.value;if(b[y]===void 0)return typeof x=="number"?b[y]=x:b[y]=x.clone(),!0;if(typeof x=="number"){if(b[y]!==x)return b[y]=x,!0}else{const E=b[y];if(E.equals(x)===!1)return E.copy(x),!0}return!1}function v(o){const y=o.uniforms;let b=0;const x=16;let E=0;for(let D=0,M=y.length;D<M;D++){const A=y[D],I=m(A);if(A.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,D>0){E=b%x;const H=x-E;E!==0&&H-I.boundary<0&&(b+=x-E,A.__offset=b)}b+=I.storage}return E=b%x,E>0&&(b+=x-E),o.__size=b,o.__cache={},this}function m(o){const y=o.value,b={boundary:0,storage:0};return typeof y=="number"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function p(o){const y=o.target;y.removeEventListener("dispose",p);const b=l.indexOf(y.__bindingPointIndex);l.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const o in i)r.deleteBuffer(i[o]);l=[],i={},s={}}return{bind:c,update:u,dispose:_}}function Ep(){const r=Fi("canvas");return r.style.display="block",r}function ol(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Ep(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,l=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let d=null,f=null;const g=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Dn,this.physicallyCorrectLights=!1,this.toneMapping=Kt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,_=0,o=0,y=null,b=-1,x=null;const E=new Be,D=new Be;let M=null,A=e.width,I=e.height,H=1,te=null,k=null;const L=new Be(0,0,A,I),V=new Be(0,0,A,I);let X=!1;const q=new Bs;let G=!1,O=!1,z=null;const ee=new Ye,J=new Te,Q=new P,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return y===null?H:1}let Y=t;function Le(w,U){for(let j=0;j<w.length;j++){const F=w[j],Z=e.getContext(F,U);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ks}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),Y===null){const U=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&U.shift(),Y=Le(U,w),Y===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _e,ve,le,Re,Se,me,Ge,Ke,Xe,st,qe,Ie,ct,ut,T,S,W,ne,ie,ce,be,C,N,de;function fe(){_e=new Fh(Y),ve=new Ch(Y,_e,r),_e.init(ve),C=new vp(Y,_e,ve),le=new gp(Y,_e,ve),Re=new zh,Se=new np,me=new _p(Y,_e,le,Se,ve,C,Re),Ge=new Rh(m),Ke=new Oh(m),Xe=new Yc(Y,ve),N=new Th(Y,_e,Xe,ve),st=new Nh(Y,Xe,Re,N),qe=new Vh(Y,st,Xe,Re),ie=new Gh(Y,ve,me),S=new Lh(Se),Ie=new tp(m,Ge,Ke,_e,ve,N,S),ct=new Sp(m,Se),ut=new rp,T=new up(_e,ve),ne=new Eh(m,Ge,le,qe,h,l),W=new mp(m,qe,ve),de=new wp(Y,Re,ve,le),ce=new Ah(Y,_e,Re,ve),be=new kh(Y,_e,Re,ve),Re.programs=Ie.programs,m.capabilities=ve,m.extensions=_e,m.properties=Se,m.renderLists=ut,m.shadowMap=W,m.state=le,m.info=Re}fe();const he=new Mp(m,Y);this.xr=he,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(A,I,!1))},this.getSize=function(w){return w.set(A,I)},this.setSize=function(w,U,j){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=w,I=U,e.width=Math.floor(w*H),e.height=Math.floor(U*H),j!==!1&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(A*H,I*H).floor()},this.setDrawingBufferSize=function(w,U,j){A=w,I=U,H=j,e.width=Math.floor(w*j),e.height=Math.floor(U*j),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(L)},this.setViewport=function(w,U,j,F){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,U,j,F),le.viewport(E.copy(L).multiplyScalar(H).floor())},this.getScissor=function(w){return w.copy(V)},this.setScissor=function(w,U,j,F){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,U,j,F),le.scissor(D.copy(V).multiplyScalar(H).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(w){le.setScissorTest(X=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,U=!0,j=!0){let F=0;w&&(F|=16384),U&&(F|=256),j&&(F|=1024),Y.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),ut.dispose(),T.dispose(),Se.dispose(),Ge.dispose(),Ke.dispose(),qe.dispose(),N.dispose(),de.dispose(),Ie.dispose(),he.dispose(),he.removeEventListener("sessionstart",ye),he.removeEventListener("sessionend",Ue),z&&(z.dispose(),z=null),je.stop()};function ge(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=Re.autoReset,U=W.enabled,j=W.autoUpdate,F=W.needsUpdate,Z=W.type;fe(),Re.autoReset=w,W.enabled=U,W.autoUpdate=j,W.needsUpdate=F,W.type=Z}function Oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function R(w){const U=w.target;U.removeEventListener("dispose",R),ue(U)}function ue(w){re(w),Se.remove(w)}function re(w){const U=Se.get(w).programs;U!==void 0&&(U.forEach(function(j){Ie.releaseProgram(j)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,j,F,Z,xe){U===null&&(U=ae);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,Ae=Cl(w,U,j,F,Z);le.setMaterial(F,we);let Ee=j.index;const ke=j.attributes.position;if(Ee===null){if(ke===void 0||ke.count===0)return}else if(Ee.count===0)return;let De=1;F.wireframe===!0&&(Ee=st.getWireframeAttribute(j),De=2),N.setup(Z,F,Ae,j,Ee);let Pe,He=ce;Ee!==null&&(Pe=Xe.get(Ee),He=be,He.setIndex(Pe));const _n=Ee!==null?Ee.count:ke.count,zn=j.drawRange.start*De,Un=j.drawRange.count*De,Nt=xe!==null?xe.start*De:0,Ne=xe!==null?xe.count*De:1/0,Bn=Math.max(zn,Nt),Ze=Math.min(_n,zn+Un,Nt+Ne)-1,yt=Math.max(0,Ze-Bn+1);if(yt!==0){if(Z.isMesh)F.wireframe===!0?(le.setLineWidth(F.wireframeLinewidth*pe()),He.setMode(1)):He.setMode(4);else if(Z.isLine){let nn=F.linewidth;nn===void 0&&(nn=1),le.setLineWidth(nn*pe()),Z.isLineSegments?He.setMode(1):Z.isLineLoop?He.setMode(2):He.setMode(3)}else Z.isPoints?He.setMode(0):Z.isSprite&&He.setMode(4);if(Z.isInstancedMesh)He.renderInstances(Bn,yt,Z.count);else if(j.isInstancedBufferGeometry){const nn=Math.min(j.instanceCount,j._maxInstanceCount);He.renderInstances(Bn,yt,nn)}else He.render(Bn,yt)}},this.compile=function(w,U){function j(F,Z,xe){F.transparent===!0&&F.side===wt?(F.side=Tt,F.needsUpdate=!0,qi(F,Z,xe),F.side=di,F.needsUpdate=!0,qi(F,Z,xe),F.side=wt):qi(F,Z,xe)}f=T.get(w),f.init(),v.push(f),w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(m.physicallyCorrectLights),w.traverse(function(F){const Z=F.material;if(Z)if(Array.isArray(Z))for(let xe=0;xe<Z.length;xe++){const we=Z[xe];j(we,w,F)}else j(Z,w,F)}),v.pop(),f=null};let $=null;function oe(w){$&&$(w)}function ye(){je.stop()}function Ue(){je.start()}const je=new tl;je.setAnimationLoop(oe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(w){$=w,he.setAnimationLoop(w),w===null?je.stop():je.start()},he.addEventListener("sessionstart",ye),he.addEventListener("sessionend",Ue),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(U),U=he.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,U,y),f=T.get(w,v.length),f.init(),v.push(f),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(ee),O=this.localClippingEnabled,G=S.init(this.clippingPlanes,O,U),d=ut.get(w,g.length),d.init(),g.push(d),tn(w,U,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(te,k),G===!0&&S.beginShadows();const j=f.state.shadowsArray;if(W.render(j,w,U),G===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,w),f.setupLights(m.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let Z=0,xe=F.length;Z<xe;Z++){const we=F[Z];Ve(d,w,we,we.viewport)}}else Ve(d,w,U);y!==null&&(me.updateMultisampleRenderTarget(y),me.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(m,w,U),N.resetDefaultState(),b=-1,x=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function tn(w,U,j,F){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){F&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const we=qe.update(w),Ae=w.material;Ae.visible&&d.push(w,we,Ae,j,Q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Re.render.frame&&(w.skeleton.update(),w.skeleton.frame=Re.render.frame),!w.frustumCulled||q.intersectsObject(w))){F&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const we=qe.update(w),Ae=w.material;if(Array.isArray(Ae)){const Ee=we.groups;for(let ke=0,De=Ee.length;ke<De;ke++){const Pe=Ee[ke],He=Ae[Pe.materialIndex];He&&He.visible&&d.push(w,we,He,j,Q.z,Pe)}}else Ae.visible&&d.push(w,we,Ae,j,Q.z,null)}}const xe=w.children;for(let we=0,Ae=xe.length;we<Ae;we++)tn(xe[we],U,j,F)}function Ve(w,U,j,F){const Z=w.opaque,xe=w.transmissive,we=w.transparent;f.setupLightsView(j),xe.length>0&&Vt(Z,U,j),F&&le.viewport(E.copy(F)),Z.length>0&&bt(Z,U,j),xe.length>0&&bt(xe,U,j),we.length>0&&bt(we,U,j),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Vt(w,U,j){const F=ve.isWebGL2;z===null&&(z=new Pn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Oi:Rn,minFilter:Er,samples:F&&s===!0?4:0})),m.getDrawingBufferSize(J),F?z.setSize(J.x,J.y):z.setSize(As(J.x),As(J.y));const Z=m.getRenderTarget();m.setRenderTarget(z),m.clear();const xe=m.toneMapping;m.toneMapping=Kt,bt(w,U,j),m.toneMapping=xe,me.updateMultisampleRenderTarget(z),me.updateRenderTargetMipmap(z),m.setRenderTarget(Z)}function bt(w,U,j){const F=U.isScene===!0?U.overrideMaterial:null;for(let Z=0,xe=w.length;Z<xe;Z++){const we=w[Z],Ae=we.object,Ee=we.geometry,ke=F===null?we.material:F,De=we.group;Ae.layers.test(j.layers)&&Al(Ae,U,j,Ee,ke,De)}}function Al(w,U,j,F,Z,xe){w.onBeforeRender(m,U,j,F,Z,xe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(m,U,j,F,w,xe),Z.transparent===!0&&Z.side===wt?(Z.side=Tt,Z.needsUpdate=!0,m.renderBufferDirect(j,U,F,Z,w,xe),Z.side=di,Z.needsUpdate=!0,m.renderBufferDirect(j,U,F,Z,w,xe),Z.side=wt):m.renderBufferDirect(j,U,F,Z,w,xe),w.onAfterRender(m,U,j,F,Z,xe)}function qi(w,U,j){U.isScene!==!0&&(U=ae);const F=Se.get(w),Z=f.state.lights,xe=f.state.shadowsArray,we=Z.state.version,Ae=Ie.getParameters(w,Z.state,xe,U,j),Ee=Ie.getProgramCacheKey(Ae);let ke=F.programs;F.environment=w.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(w.isMeshStandardMaterial?Ke:Ge).get(w.envMap||F.environment),ke===void 0&&(w.addEventListener("dispose",R),ke=new Map,F.programs=ke);let De=ke.get(Ee);if(De!==void 0){if(F.currentProgram===De&&F.lightsStateVersion===we)return js(w,Ae),De}else Ae.uniforms=Ie.getUniforms(w),w.onBuild(j,Ae,m),w.onBeforeCompile(Ae,m),De=Ie.acquireProgram(Ae,Ee),ke.set(Ee,De),F.uniforms=Ae.uniforms;const Pe=F.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=S.uniform),js(w,Ae),F.needsLights=Rl(w),F.lightsStateVersion=we,F.needsLights&&(Pe.ambientLightColor.value=Z.state.ambient,Pe.lightProbe.value=Z.state.probe,Pe.directionalLights.value=Z.state.directional,Pe.directionalLightShadows.value=Z.state.directionalShadow,Pe.spotLights.value=Z.state.spot,Pe.spotLightShadows.value=Z.state.spotShadow,Pe.rectAreaLights.value=Z.state.rectArea,Pe.ltc_1.value=Z.state.rectAreaLTC1,Pe.ltc_2.value=Z.state.rectAreaLTC2,Pe.pointLights.value=Z.state.point,Pe.pointLightShadows.value=Z.state.pointShadow,Pe.hemisphereLights.value=Z.state.hemi,Pe.directionalShadowMap.value=Z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Pe.spotShadowMap.value=Z.state.spotShadowMap,Pe.spotLightMatrix.value=Z.state.spotLightMatrix,Pe.spotLightMap.value=Z.state.spotLightMap,Pe.pointShadowMap.value=Z.state.pointShadowMap,Pe.pointShadowMatrix.value=Z.state.pointShadowMatrix);const He=De.getUniforms(),_n=xr.seqWithValue(He.seq,Pe);return F.currentProgram=De,F.uniformsList=_n,De}function js(w,U){const j=Se.get(w);j.outputEncoding=U.outputEncoding,j.instancing=U.instancing,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function Cl(w,U,j,F,Z){U.isScene!==!0&&(U=ae),me.resetTextureUnits();const xe=U.fog,we=F.isMeshStandardMaterial?U.environment:null,Ae=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Dn,Ee=(F.isMeshStandardMaterial?Ke:Ge).get(F.envMap||we),ke=F.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,De=!!F.normalMap&&!!j.attributes.tangent,Pe=!!j.morphAttributes.position,He=!!j.morphAttributes.normal,_n=!!j.morphAttributes.color,zn=F.toneMapped?m.toneMapping:Kt,Un=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Nt=Un!==void 0?Un.length:0,Ne=Se.get(F),Bn=f.state.lights;if(G===!0&&(O===!0||w!==x)){const pt=w===x&&F.id===b;S.setState(F,w,pt)}let Ze=!1;F.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Bn.state.version||Ne.outputEncoding!==Ae||Z.isInstancedMesh&&Ne.instancing===!1||!Z.isInstancedMesh&&Ne.instancing===!0||Z.isSkinnedMesh&&Ne.skinning===!1||!Z.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ee||F.fog===!0&&Ne.fog!==xe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==S.numPlanes||Ne.numIntersection!==S.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==De||Ne.morphTargets!==Pe||Ne.morphNormals!==He||Ne.morphColors!==_n||Ne.toneMapping!==zn||ve.isWebGL2===!0&&Ne.morphTargetsCount!==Nt)&&(Ze=!0):(Ze=!0,Ne.__version=F.version);let yt=Ne.currentProgram;Ze===!0&&(yt=qi(F,U,Z));let nn=!1,xi=!1,Ir=!1;const ot=yt.getUniforms(),vn=Ne.uniforms;if(le.useProgram(yt.program)&&(nn=!0,xi=!0,Ir=!0),F.id!==b&&(b=F.id,xi=!0),nn||x!==w){if(ot.setValue(Y,"projectionMatrix",w.projectionMatrix),ve.logarithmicDepthBuffer&&ot.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),x!==w&&(x=w,xi=!0,Ir=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const pt=ot.map.cameraPosition;pt!==void 0&&pt.setValue(Y,Q.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ot.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Z.isSkinnedMesh)&&ot.setValue(Y,"viewMatrix",w.matrixWorldInverse)}if(Z.isSkinnedMesh){ot.setOptional(Y,Z,"bindMatrix"),ot.setOptional(Y,Z,"bindMatrixInverse");const pt=Z.skeleton;pt&&(ve.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),ot.setValue(Y,"boneTexture",pt.boneTexture,me),ot.setValue(Y,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Or=j.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0&&ve.isWebGL2===!0)&&ie.update(Z,j,F,yt),(xi||Ne.receiveShadow!==Z.receiveShadow)&&(Ne.receiveShadow=Z.receiveShadow,ot.setValue(Y,"receiveShadow",Z.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(vn.envMap.value=Ee,vn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),xi&&(ot.setValue(Y,"toneMappingExposure",m.toneMappingExposure),Ne.needsLights&&Ll(vn,Ir),xe&&F.fog===!0&&ct.refreshFogUniforms(vn,xe),ct.refreshMaterialUniforms(vn,F,H,I,z),xr.upload(Y,Ne.uniformsList,vn,me)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(xr.upload(Y,Ne.uniformsList,vn,me),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ot.setValue(Y,"center",Z.center),ot.setValue(Y,"modelViewMatrix",Z.modelViewMatrix),ot.setValue(Y,"normalMatrix",Z.normalMatrix),ot.setValue(Y,"modelMatrix",Z.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const pt=F.uniformsGroups;for(let Fr=0,Dl=pt.length;Fr<Dl;Fr++)if(ve.isWebGL2){const Ys=pt[Fr];de.update(Ys,yt),de.bind(Ys,yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yt}function Ll(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Rl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,U,j){Se.get(w.texture).__webglTexture=U,Se.get(w.depthTexture).__webglTexture=j;const F=Se.get(w);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=j===void 0,F.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const j=Se.get(w);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,j=0){y=w,_=U,o=j;let F=!0;if(w){const Ee=Se.get(w);Ee.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),F=!1):Ee.__webglFramebuffer===void 0?me.setupRenderTarget(w):Ee.__hasExternalTextures&&me.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture)}let Z=null,xe=!1,we=!1;if(w){const Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(we=!0);const ke=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Z=ke[U],xe=!0):ve.isWebGL2&&w.samples>0&&me.useMultisampledRTT(w)===!1?Z=Se.get(w).__webglMultisampledFramebuffer:Z=ke,E.copy(w.viewport),D.copy(w.scissor),M=w.scissorTest}else E.copy(L).multiplyScalar(H).floor(),D.copy(V).multiplyScalar(H).floor(),M=X;if(le.bindFramebuffer(36160,Z)&&ve.drawBuffers&&F&&le.drawBuffers(w,Z),le.viewport(E),le.scissor(D),le.setScissorTest(M),xe){const Ee=Se.get(w.texture);Y.framebufferTexture2D(36160,36064,34069+U,Ee.__webglTexture,j)}else if(we){const Ee=Se.get(w.texture),ke=U||0;Y.framebufferTextureLayer(36160,36064,Ee.__webglTexture,j||0,ke)}b=-1},this.readRenderTargetPixels=function(w,U,j,F,Z,xe,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){le.bindFramebuffer(36160,Ae);try{const Ee=w.texture,ke=Ee.format,De=Ee.type;if(ke!==Ut&&C.convert(ke)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=De===Oi&&(_e.has("EXT_color_buffer_half_float")||ve.isWebGL2&&_e.has("EXT_color_buffer_float"));if(De!==Rn&&C.convert(De)!==Y.getParameter(35738)&&!(De===Tn&&(ve.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-F&&j>=0&&j<=w.height-Z&&Y.readPixels(U,j,F,Z,C.convert(ke),C.convert(De),xe)}finally{const Ee=y!==null?Se.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(w,U,j=0){const F=Math.pow(2,-j),Z=Math.floor(U.image.width*F),xe=Math.floor(U.image.height*F);me.setTexture2D(U,0),Y.copyTexSubImage2D(3553,j,0,0,w.x,w.y,Z,xe),le.unbindTexture()},this.copyTextureToTexture=function(w,U,j,F=0){const Z=U.image.width,xe=U.image.height,we=C.convert(j.format),Ae=C.convert(j.type);me.setTexture2D(j,0),Y.pixelStorei(37440,j.flipY),Y.pixelStorei(37441,j.premultiplyAlpha),Y.pixelStorei(3317,j.unpackAlignment),U.isDataTexture?Y.texSubImage2D(3553,F,w.x,w.y,Z,xe,we,Ae,U.image.data):U.isCompressedTexture?Y.compressedTexSubImage2D(3553,F,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,we,U.mipmaps[0].data):Y.texSubImage2D(3553,F,w.x,w.y,we,Ae,U.image),F===0&&j.generateMipmaps&&Y.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(w,U,j,F,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Ae=w.max.z-w.min.z+1,Ee=C.convert(F.format),ke=C.convert(F.type);let De;if(F.isData3DTexture)me.setTexture3D(F,0),De=32879;else if(F.isDataArrayTexture)me.setTexture2DArray(F,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,F.flipY),Y.pixelStorei(37441,F.premultiplyAlpha),Y.pixelStorei(3317,F.unpackAlignment);const Pe=Y.getParameter(3314),He=Y.getParameter(32878),_n=Y.getParameter(3316),zn=Y.getParameter(3315),Un=Y.getParameter(32877),Nt=j.isCompressedTexture?j.mipmaps[0]:j.image;Y.pixelStorei(3314,Nt.width),Y.pixelStorei(32878,Nt.height),Y.pixelStorei(3316,w.min.x),Y.pixelStorei(3315,w.min.y),Y.pixelStorei(32877,w.min.z),j.isDataTexture||j.isData3DTexture?Y.texSubImage3D(De,Z,U.x,U.y,U.z,xe,we,Ae,Ee,ke,Nt.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(De,Z,U.x,U.y,U.z,xe,we,Ae,Ee,Nt.data)):Y.texSubImage3D(De,Z,U.x,U.y,U.z,xe,we,Ae,Ee,ke,Nt),Y.pixelStorei(3314,Pe),Y.pixelStorei(32878,He),Y.pixelStorei(3316,_n),Y.pixelStorei(3315,zn),Y.pixelStorei(32877,Un),Z===0&&F.generateMipmaps&&Y.generateMipmap(De),le.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?me.setTextureCube(w,0):w.isData3DTexture?me.setTexture3D(w,0):w.isDataArrayTexture?me.setTexture2DArray(w,0):me.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){_=0,o=0,y=null,le.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Tp extends ol{}Tp.prototype.isWebGL1Renderer=!0;class Ap extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class al extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const la=new P,ca=new P,ua=new Ye,ps=new Za,mr=new Tr;class Cp extends at{constructor(e=new Gt,t=new al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)la.fromBufferAttribute(t,i-1),ca.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=la.distanceTo(ca);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=s,e.ray.intersectsSphere(mr)===!1)return;ua.copy(i).invert(),ps.copy(e.ray).applyMatrix4(ua);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=new P,h=new P,d=new P,f=new P,g=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const _=Math.max(0,l.start),o=Math.min(v.count,l.start+l.count);for(let y=_,b=o-1;y<b;y+=g){const x=v.getX(y),E=v.getX(y+1);if(u.fromBufferAttribute(p,x),h.fromBufferAttribute(p,E),ps.distanceSqToSegment(u,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,l.start),o=Math.min(p.count,l.start+l.count);for(let y=_,b=o-1;y<b;y+=g){if(u.fromBufferAttribute(p,y),h.fromBufferAttribute(p,y+1),ps.distanceSqToSegment(u,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const da=new P,ha=new P;class Lp extends Cp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)da.fromBufferAttribute(t,i),ha.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+da.distanceTo(ha);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _i extends Gt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,l=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:l,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(l+a,Math.PI);let u=0;const h=[],d=new P,f=new P,g=[],v=[],m=[],p=[];for(let _=0;_<=n;_++){const o=[],y=_/n;let b=0;_==0&&l==0?b=.5/t:_==n&&c==Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){const E=x/t;d.x=-e*Math.cos(i+E*s)*Math.sin(l+y*a),d.y=e*Math.cos(l+y*a),d.z=e*Math.sin(i+E*s)*Math.sin(l+y*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),p.push(E+b,1-y),o.push(u++)}h.push(o)}for(let _=0;_<n;_++)for(let o=0;o<t;o++){const y=h[_][o+1],b=h[_][o],x=h[_+1][o],E=h[_+1][o+1];(_!==0||l>0)&&g.push(y,b,E),(_!==n-1||c<Math.PI)&&g.push(b,x,E)}this.setIndex(g),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(m,3)),this.setAttribute("uv",new ft(p,2))}static fromJSON(e){return new _i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rp extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dp extends Nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const fa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Pp{constructor(e,t,n){const i=this;let s=!1,l=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,l,a),s=!0},this.itemEnd=function(h){l++,i.onProgress!==void 0&&i.onProgress(h,l,a),l===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],v=u[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null}}}const Ip=new Pp;class ll{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Op extends ll{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=fa.get(e);if(l!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;const a=Fi("img");function c(){h(),fa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class cl extends ll{constructor(e){super(e)}load(e,t,n,i){const s=new Ct,l=new Op(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ul extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ms=new Ye,pa=new P,ma=new P;class Fp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pa.setFromMatrixPosition(e.matrixWorld),t.position.copy(pa),ma.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ma),t.updateMatrixWorld(),ms.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ms),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ms)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ga=new Ye,Si=new P,gs=new P;class Np extends Fp{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Si.setFromMatrixPosition(e.matrixWorld),n.position.copy(Si),gs.copy(n.position),gs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gs),n.updateMatrixWorld(),i.makeTranslation(-Si.x,-Si.y,-Si.z),ga.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga)}}class kp extends ul{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zp extends ul{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _a{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Up extends Lp{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Gt;i.setAttribute("position",new ft(t,3)),i.setAttribute("color",new ft(n,3));const s=new al({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Fe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ks}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ks);const va={type:"change"},_s={type:"start"},xa={type:"end"};class Bp extends Fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ut),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(va),n.update(),s=i.NONE},this.update=function(){const C=new P,N=new In().setFromUnitVectors(e.up,new P(0,1,0)),de=N.clone().invert(),fe=new P,he=new In,ge=2*Math.PI;return function(){const Oe=n.object.position;C.copy(Oe).sub(n.target),C.applyQuaternion(N),a.setFromVector3(C),n.autoRotate&&s===i.NONE&&A(D()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let R=n.minAzimuthAngle,ue=n.maxAzimuthAngle;return isFinite(R)&&isFinite(ue)&&(R<-Math.PI?R+=ge:R>Math.PI&&(R-=ge),ue<-Math.PI?ue+=ge:ue>Math.PI&&(ue-=ge),R<=ue?a.theta=Math.max(R,Math.min(ue,a.theta)):a.theta=a.theta>(R+ue)/2?Math.max(R,a.theta):Math.min(ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),C.setFromSpherical(a),C.applyQuaternion(de),Oe.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),u=1,d||fe.distanceToSquared(n.object.position)>l||8*(1-he.dot(n.object.quaternion))>l?(n.dispatchEvent(va),fe.copy(n.object.position),he.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",Ge),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",ct),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ut)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const l=1e-6,a=new _a,c=new _a;let u=1;const h=new P;let d=!1;const f=new Te,g=new Te,v=new Te,m=new Te,p=new Te,_=new Te,o=new Te,y=new Te,b=new Te,x=[],E={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function A(C){c.theta-=C}function I(C){c.phi-=C}const H=function(){const C=new P;return function(de,fe){C.setFromMatrixColumn(fe,0),C.multiplyScalar(-de),h.add(C)}}(),te=function(){const C=new P;return function(de,fe){n.screenSpacePanning===!0?C.setFromMatrixColumn(fe,1):(C.setFromMatrixColumn(fe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(de),h.add(C)}}(),k=function(){const C=new P;return function(de,fe){const he=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;C.copy(ge).sub(n.target);let Me=C.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),H(2*de*Me/he.clientHeight,n.object.matrix),te(2*fe*Me/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(de*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),te(fe*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(C){n.object.isPerspectiveCamera?u/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(C){n.object.isPerspectiveCamera?u*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C){f.set(C.clientX,C.clientY)}function q(C){o.set(C.clientX,C.clientY)}function G(C){m.set(C.clientX,C.clientY)}function O(C){g.set(C.clientX,C.clientY),v.subVectors(g,f).multiplyScalar(n.rotateSpeed);const N=n.domElement;A(2*Math.PI*v.x/N.clientHeight),I(2*Math.PI*v.y/N.clientHeight),f.copy(g),n.update()}function z(C){y.set(C.clientX,C.clientY),b.subVectors(y,o),b.y>0?L(M()):b.y<0&&V(M()),o.copy(y),n.update()}function ee(C){p.set(C.clientX,C.clientY),_.subVectors(p,m).multiplyScalar(n.panSpeed),k(_.x,_.y),m.copy(p),n.update()}function J(C){C.deltaY<0?V(M()):C.deltaY>0&&L(M()),n.update()}function Q(C){let N=!1;switch(C.code){case n.keys.UP:k(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),N=!0;break}N&&(C.preventDefault(),n.update())}function ae(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),N=.5*(x[0].pageY+x[1].pageY);f.set(C,N)}}function pe(){if(x.length===1)m.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),N=.5*(x[0].pageY+x[1].pageY);m.set(C,N)}}function Y(){const C=x[0].pageX-x[1].pageX,N=x[0].pageY-x[1].pageY,de=Math.sqrt(C*C+N*N);o.set(0,de)}function Le(){n.enableZoom&&Y(),n.enablePan&&pe()}function _e(){n.enableZoom&&Y(),n.enableRotate&&ae()}function ve(C){if(x.length==1)g.set(C.pageX,C.pageY);else{const de=be(C),fe=.5*(C.pageX+de.x),he=.5*(C.pageY+de.y);g.set(fe,he)}v.subVectors(g,f).multiplyScalar(n.rotateSpeed);const N=n.domElement;A(2*Math.PI*v.x/N.clientHeight),I(2*Math.PI*v.y/N.clientHeight),f.copy(g)}function le(C){if(x.length===1)p.set(C.pageX,C.pageY);else{const N=be(C),de=.5*(C.pageX+N.x),fe=.5*(C.pageY+N.y);p.set(de,fe)}_.subVectors(p,m).multiplyScalar(n.panSpeed),k(_.x,_.y),m.copy(p)}function Re(C){const N=be(C),de=C.pageX-N.x,fe=C.pageY-N.y,he=Math.sqrt(de*de+fe*fe);y.set(0,he),b.set(0,Math.pow(y.y/o.y,n.zoomSpeed)),L(b.y),o.copy(y)}function Se(C){n.enableZoom&&Re(C),n.enablePan&&le(C)}function me(C){n.enableZoom&&Re(C),n.enableRotate&&ve(C)}function Ge(C){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",Ke),n.domElement.addEventListener("pointerup",Xe)),ne(C),C.pointerType==="touch"?T(C):qe(C))}function Ke(C){n.enabled!==!1&&(C.pointerType==="touch"?S(C):Ie(C))}function Xe(C){ie(C),x.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",Xe)),n.dispatchEvent(xa),s=i.NONE}function st(C){ie(C)}function qe(C){let N;switch(C.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case Gn.DOLLY:if(n.enableZoom===!1)return;q(C),s=i.DOLLY;break;case Gn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;G(C),s=i.PAN}else{if(n.enableRotate===!1)return;X(C),s=i.ROTATE}break;case Gn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;X(C),s=i.ROTATE}else{if(n.enablePan===!1)return;G(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(_s)}function Ie(C){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;O(C);break;case i.DOLLY:if(n.enableZoom===!1)return;z(C);break;case i.PAN:if(n.enablePan===!1)return;ee(C);break}}function ct(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(C.preventDefault(),n.dispatchEvent(_s),J(C),n.dispatchEvent(xa))}function ut(C){n.enabled===!1||n.enablePan===!1||Q(C)}function T(C){switch(ce(C),x.length){case 1:switch(n.touches.ONE){case Vn.ROTATE:if(n.enableRotate===!1)return;ae(),s=i.TOUCH_ROTATE;break;case Vn.PAN:if(n.enablePan===!1)return;pe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Vn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),s=i.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(_s)}function S(C){switch(ce(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(C),n.update();break;default:s=i.NONE}}function W(C){n.enabled!==!1&&C.preventDefault()}function ne(C){x.push(C)}function ie(C){delete E[C.pointerId];for(let N=0;N<x.length;N++)if(x[N].pointerId==C.pointerId){x.splice(N,1);return}}function ce(C){let N=E[C.pointerId];N===void 0&&(N=new Te,E[C.pointerId]=N),N.set(C.pageX,C.pageY)}function be(C){const N=C.pointerId===x[0].pointerId?x[1]:x[0];return E[N.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",Ge),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",ct,{passive:!1}),this.update()}}const Gp=(r,e,t)=>{const n=2*Math.PI/r,i=Math.cbrt(t*e/Math.pow(n,2)),s=n*i;return{orbitRadius:i,orbitVelocity:s}},Vp=(r,e,t,n,i)=>{let s=-t,l=t,a=-e,c=e;const u=Math.floor(r/i);u-t<0&&(s=u),u+t>n-1&&(l=n-1-u);const h=r%n;return h-e<0&&(a=h),h+e>i-1&&(c=i-1-h),{xOffsetMin:a,xOffsetMax:c,yOffsetMin:s,yOffsetMax:l}},Hp=(r,e,t,n,i)=>{const{xOffsetMin:s,xOffsetMax:l,yOffsetMin:a,yOffsetMax:c}=Vp(r,n,i,e,t),u=[];for(let h=a;h<=c;h++)for(let d=s;d<=l;d++){if(d===0&&h===0)continue;let f=r+t*h+d;u.push(f)}return u},Wp=(r,e,t,n,i)=>{const s=[],l=r.length/3;for(let a=0;a<l;a++){const c=[],u=Hp(a,e,t,n,i);let h=a*3,d=r[h+0],f=r[h+1],g=r[h+2];for(let v of u){let m=v*3,p=r[m+0],_=r[m+1],o=r[m+2],y=Math.abs(d-p),b=Math.abs(f-_),x=Math.abs(g-o),E=Math.sqrt(y*y+b*b+x*x);c.push([v,E])}s.push(c)}return s},dl=(r,e,t,n,i,s)=>{const l=e*s-t*i,a=-1*(r*s-t*n),c=r*i-e*n;return[l,a,c]},Zt=(r,e,t,n,i,s)=>r*n+e*i+t*s,Xp=(r,e,t,n,i,s,l,a)=>{const c=r*(1-Math.pow(e,2)),u=Math.cos(s),h=Math.sin(s),d=c*u/(1+e*u),f=c*h/(1+e*u),g=0,v=6.6743*Math.pow(10,-11),m=l*v,p=Math.sin(n),_=Math.cos(n),o=Math.sin(i),y=Math.cos(i),b=Math.sin(t),x=Math.cos(t),E=_*y-p*o*x,D=-_*o-p*y*x,M=p*b,A=p*y+_*o*x,I=-p*o+_*y*x,H=-_*b,te=o*b,k=y*b,L=x,V=E*d+D*f+M*g,X=A*d+I*f+H*g,q=te*d+k*f+L*g,G=[V,X,q];if(a){const O=-Math.sqrt(m/c)*h,z=Math.sqrt(m/c)*(e+u),ee=0,J=E*O+D*z+M*ee,Q=A*O+I*z+H*ee,ae=te*O+k*z+L*ee;return{r:G,vel:[J,Q,ae]}}return{r:G}},ba=(r,e)=>{const t=e.M_0+2*Math.PI/e.T*r,n=e.e,i=t+(2*n-.25*Math.pow(n,3))*Math.sin(t)+1.25*Math.pow(n,2)*Math.sin(2*t)+13/12*Math.pow(n,3)*Math.sin(3*t),{r:s}=Xp(e.a,e.e,e.i,e.Omega,e.omega,i,e.planetM,!1);return s},vs=Math.PI/180,qp=5.972*Math.pow(10,24),ya={a:149.598*Math.pow(10,9),e:.0167,i:23.44*vs,Omega:-11.26064*vs,omega:102.94719*vs,T:60*60*24*365,M_0:0,planetM:qp},jp=(r,e)=>{const t=Math.pow(10,e);return Math.round(r*t)/t},Yp=(r,e)=>{const t=e.length,n=t/3,i=new Float32Array(t);for(let s=0;s<n;s++){const l=s*3,a=r[e[l+0]*3+0],c=r[e[l+0]*3+1],u=r[e[l+0]*3+2],h=r[e[l+1]*3+0],d=r[e[l+1]*3+1],f=r[e[l+1]*3+2],g=r[e[l+2]*3+0],v=r[e[l+2]*3+1],m=r[e[l+2]*3+2];let[p,_,o]=dl(a-h,c-d,u-f,a-g,c-v,u-m);const y=Math.sqrt(p*p+_*_+o*o);p/=y,_/=y,o/=y,i[l+0]=p,i[l+1]=_,i[l+2]=o}return i},Zp=(r,e)=>{const t=[];for(let n=0;n<e.length;n++)e[n]==r&&(n%3==0?(t.push(e[n]),t.push(e[n+1]),t.push(e[n+2])):n%3==1?(t.push(e[n-1]),t.push(e[n]),t.push(e[n+1])):n%3==2&&(t.push(e[n-2]),t.push(e[n-1]),t.push(e[n])));return t},$p=(r,e,t)=>{const n=e*t,i=[];for(let s=0;s<n;s++)i.push(Zp(s,r));return i},Kp=(r,e)=>{const t=r.length,n=new Float32Array(t*3);for(let i=0;i<t;i++){const s=r[i].length/3,l=i*3;let a=0,c=0,u=0;for(let d=0;d<s;d++){const f=d*3,g=r[i][f+0],v=r[i][f+1],m=r[i][f+2],p=e[g*3+0],_=e[g*3+1],o=e[g*3+2],y=e[v*3+0],b=e[v*3+1],x=e[v*3+2],E=e[m*3+0],D=e[m*3+1],M=e[m*3+2];let[A,I,H]=dl(p-y,_-b,o-x,p-E,_-D,o-M);a+=A,c+=I,u+=H}a/=s,c/=s,u/=s;const h=Math.sqrt(a*a+c*c+u*u);a/=h,c/=h,u/=h,n[l+0]=a,n[l+1]=c,n[l+2]=u}return n},Jp=(r,e,t)=>{const n=e[0]-r[0],i=e[1]-r[1],s=e[2]-r[2];if(n==0&&i==0&&s==0)return[0,0,0];const l=Math.sqrt(n*n+i*i+s*s),a=n/l,c=i/l,u=s/l,d=6.6732*Math.pow(10,-11)*t/(l*l),f=a*d,g=c*d,v=u*d;return[f,g,v]},Qp=r=>4559821181358738e-21*r.reflectivity*r.AMR,em=(r,e,t,n)=>{const i=r[0]-e[0],s=r[1]-e[1],l=r[2]-e[2],a=n[0]-e[0],c=n[1]-e[1],u=n[2]-e[2],h=Math.abs(a*a+c*c+u*u),d=Math.sqrt(i*i+s*s+l*l);return Zt(a,c,u,i,s,l)/d+Math.sqrt(h-t*t)<=0},tm=(r,e,t,n,i,s,l,a)=>{let c=r-n,u=e-i,h=t-s;const d=Math.sqrt(c*c+u*u+h*h),f=d-a;return c/=d,u/=d,h/=d,c*=-l*f,u*=-l*f,h*=-l*f,[c,u,h]},nm=(r,e,t,n)=>{const i=-n*r,s=-n*e,l=-n*t;return[i,s,l]},im=(r,e,t,n,i,s)=>{const l=e[0]-r[0],a=e[1]-r[1],c=e[2]-r[2],u=r[0]-t[0],h=r[1]-t[1],d=r[2]-t[2],f=-1*Zt(s[0],s[1],s[2],u,h,d),g=Zt(s[0],s[1],s[2],l,a,c),v=1e-8;if(Math.abs(g)<v)return{intersected:!1};const m=f/g,p=e[0]-r[0],_=e[1]-r[1],o=e[2]-r[2],y=Math.sqrt(p*p+_*_+o*o);if(m<0||m>y)return{intersected:!1};const b=r[0]+m*l,x=r[1]+m*a,E=r[2]+m*c,D=n[0]-t[0],M=n[1]-t[1],A=n[2]-t[2],I=i[0]-t[0],H=i[1]-t[1],te=i[2]-t[2],k=Zt(D,M,A,D,M,A),L=Zt(D,M,A,I,H,te),V=Zt(I,H,te,I,H,te),X=b-t[0],q=x-t[1],G=E-t[2],O=Zt(X,q,G,D,M,A),z=Zt(X,q,G,I,H,te),ee=L*L-k*V,J=(L*z-V*O)/ee;if(J<0||J>1)return{intersected:!1};const Q=(L*O-k*z)/ee;return Q<0||J+Q>1?{intersected:!1}:{intersected:!0,I:[b,x,E]}},rm=(r,e,t,n,i)=>{const s=n.length/3,l=[t[r*3+0],t[r*3+1],t[r*3+2]];for(let a=0;a<s;a++){const c=n[a*3+0],u=n[a*3+1],h=n[a*3+2];if(r==c||r==u||r==h)continue;const d=[t[c*3+0],t[c*3+1],t[c*3+2]],f=[t[u*3+0],t[u*3+1],t[u*3+2]],g=[t[h*3+0],t[h*3+1],t[h*3+2]],v=[i[a*3+0],i[a*3+1],i[a*3+2]];if(im(l,e,d,f,g,v).intersected)return!0}return!1};let hl,fl;const sm=(r,e,t,n,i,s,l,a)=>{let c;r.integrator=="euler"?c=Ma:r.integrator=="rk4"?c=om:c=Ma,console.log("Integrator fucntion from soft body sim: "+c.name);const u=e.length/3,h=n/u,d=new Float32Array(e.length),f=new Float32Array(e.length),g=[0,0,0];hl=r.selfShadowing,r.selfCollision,fl=r.lightForce;const v=r.dt,m=r.k,p=r.dampingRatio,o=r.d*r.d/r.AMR/u,y=Kp(l,e),b=Yp(e,a);for(let x=0;x<u;x++){let E=x*3;const D=e[E+0],M=e[E+1],A=e[E+2],I=t[E+0],H=t[E+1],te=t[E+2];let k=y[E+0],L=y[E+1],V=y[E+2],[X,q,G,O,z,ee,J,Q,ae]=c(D,M,A,I,H,te,h,i,v,o,m,s[x],p,e,k,L,V,x,e,a,b);g[0]+=J,g[1]+=Q,g[2]+=ae,f[E+0]=O,f[E+1]=z,f[E+2]=ee,d[E+0]=X,d[E+1]=q,d[E+2]=G}return{p_new:d,v_new:f,a:g}},Ci=(r,e,t,n,i,s,l,a,c,u,h,d,f,g,v,m,p,_,o,y)=>{let b=0,x=0,E=0;const D=u.length;for(let ee=0;ee<D;ee++){let J=u[ee],Q=J[0],ae=J[1],pe=Q*3,Y=d[pe+0],Le=d[pe+1],_e=d[pe+2],[ve,le,Re]=tm(r,e,t,Y,Le,_e,c,ae);b+=ve,x+=le,E+=Re}let[M,A,I]=nm(n,i,s,h);b+=M,x+=A,E+=I;const H=100,te=r-H*a[0],k=e-H*a[1],L=t-H*a[2];let V=0,X=0,q=0;if(fl){let ee=!0;if(hl&&rm(p,[te,k,L],_,o,y)&&(ee=!1),ee){const J=Math.abs(Zt(a[0],a[1],a[2],g,v,m));V=l*J*a[0],X=l*J*a[1],q=l*J*a[2],b+=V*f,x+=X*f,E+=q*f}}const G=b/f,O=x/f,z=E/f;return[G,O,z,V,X,q]},Ma=(r,e,t,n,i,s,l,a,c,u,h,d,f,g,v,m,p,_,o,y,b)=>{const[x,E,D,M,A,I]=Ci(r,e,t,n,i,s,l,a,h,d,f,g,u,v,m,p,_,o,y,b);let H=n+x*c,te=i+E*c,k=s+D*c,L=r+H*c,V=e+te*c,X=t+k*c;return[L,V,X,H,te,k,M,A,I]},om=(r,e,t,n,i,s,l,a,c,u,h,d,f,g,v,m,p,_,o,y,b)=>{const[x,E,D,M,A,I]=Ci(r,e,t,n,i,s,l,a,h,d,f,g,u,v,m,p,_,o,y,b),H=n,te=i,k=s,[L,V,X,q,G,O]=Ci(r+c*(H/2),e+c*(te/2),t+c*(k/2),n+c*(x/2),i+c*(E/2),s+c*(D/2),l,a,h,d,f,g,u,v,m,p,_,o,y,b),z=n+c*(x/2),ee=i+c*(E/2),J=s+c*(D/2),[Q,ae,pe,Y,Le,_e]=Ci(r+c*(z/2),e+c*(ee/2),t+c*(J/2),n+c*(L/2),i+c*(V/2),s+c*(X/2),l,a,h,d,f,g,u,v,m,p,_,o,y,b),ve=n+c*(L/2),le=i+c*(V/2),Re=s+c*(X/2),[Se,me,Ge,Ke,Xe,st]=Ci(r+c*ve,e+c*le,t+c*Re,n+c*Q,i+c*ae,s+c*pe,l,a,h,d,f,g,u,v,m,p,_,o,y,b),qe=n+c*Q,Ie=i+c*ae,ct=s+c*pe;n+=c*(x+2*L+2*Q+Se)/6,i+=c*(E+2*V+2*ae+me)/6,s+=c*(D+2*X+2*pe+Ge)/6;const ut=(M+2*q+2*Y+Ke)/6,T=(A+2*G+2*Le+Xe)/6,S=(I+2*O+2*_e+st)/6;return r+=c*(H+2*z+2*ve+qe)/6,e+=c*(te+2*ee+2*le+Ie)/6,t+=c*(k+2*J+2*Re+ct)/6,[r,e,t,n,i,s,ut,T,S]},Li=(r,e,t,n,i,s,l,a,c,u)=>{const h=[0,0,0];if(n.applyGravity){const g=e.length/4;for(let v=0;v<g;v++){const m=v*4,p=[e[m+0],e[m+1],e[m+2]],_=e[m+3],o=Jp(r,p,_);h[0]+=o[0],h[1]+=o[1],h[2]+=o[2]}}const d=6371*1e3,f=[1*Math.pow(10,9),0,0];if(n.applySRP&&!em(f,[0,0,0],d,r)){const g=r[0]-f[0],v=r[1]-f[1],m=r[2]-f[2],p=Math.sqrt(g*g+v*v+m*m),_=[g/p,v/p,m/p],o=Qp(t);let y=[_[0]*o,_[1]*o,_[2]*o];if(n.useSoftBody){const b=[_[1],_[2],_[0]],x=sm(t,i,s,o,b,l,a,c);i=x.p_new,s=x.v_new,y=[x.a[2],x.a[0],x.a[1]]}h[0]+=y[0],h[1]+=y[1],h[2]+=y[2]}return{a:h,bodyPt:i,bodyVt:s}},Sa=(r,e,t,n,i,s,l,a,c,u,h,d)=>{const f=Li(r,u,i,s,t,n,l,a,c),g=e[0]+f.a[0]*d,v=e[1]+f.a[1]*d,m=e[2]+f.a[2]*d,p=r[0]+g*d,_=r[1]+v*d,o=r[2]+m*d;return{pNew:[p,_,o],vNew:[g,v,m],bodyPNew:f.bodyPt,bodyVNew:f.bodyVt}},am=(r,e,t,n,i,s,l,a,c,u,h,d)=>{const f=r[0],g=r[1],v=r[2],m=e[0],p=e[1],_=e[2],o=Li(r,u,i,s,t,n,l,a,c),y=o.a[0],b=o.a[1],x=o.a[2],E=e[0]+.5*d*y,D=e[1]+.5*d*b,M=e[2]+.5*d*x,A=Li([f+.5*d*m,g+.5*d*p,v+.5*d*_],u,i,s,t,n,l,a,c),I=A.a[0],H=A.a[1],te=A.a[2],k=e[0]+.5*d*I,L=e[1]+.5*d*H,V=e[2]+.5*d*te,X=Li([f+.5*d*E,g+.5*d*D,v+.5*d*M],u,i,s,t,n,l,a,c),q=X.a[0],G=X.a[1],O=X.a[2],z=e[0]+d*q,ee=e[1]+d*G,J=e[2]+d*O,Q=Li([f+d*k,g+d*L,v+d*V],u,i,s,t,n,l,a,c),ae=Q.a[0],pe=Q.a[1],Y=Q.a[2],Le=r[0]+d*(1/6)*(m+2*E+2*k+z),_e=r[1]+d*(1/6)*(p+2*D+2*L+ee),ve=r[2]+d*(1/6)*(_+2*M+2*V+J),le=e[0]+d*(1/6)*(y+2*I+2*q+ae),Re=e[1]+d*(1/6)*(b+2*H+2*G+pe),Se=e[2]+d*(1/6)*(x+2*te+2*O+Y);return{pNew:[Le,_e,ve],vNew:[le,Re,Se],bodyPNew:Q.bodyPt,bodyVNew:Q.bodyVt}};var pl={exports:{}};(function(r){(function(){var e={y:function(o){return o===1?"\u03C7\u03C1\u03CC\u03BD\u03BF\u03C2":"\u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"},mo:function(o){return o===1?"\u03BC\u03AE\u03BD\u03B1\u03C2":"\u03BC\u03AE\u03BD\u03B5\u03C2"},w:function(o){return o===1?"\u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1":"\u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2"},d:function(o){return o===1?"\u03BC\u03AD\u03C1\u03B1":"\u03BC\u03AD\u03C1\u03B5\u03C2"},h:function(o){return o===1?"\u03CE\u03C1\u03B1":"\u03CE\u03C1\u03B5\u03C2"},m:function(o){return o===1?"\u03BB\u03B5\u03C0\u03C4\u03CC":"\u03BB\u03B5\u03C0\u03C4\u03AC"},s:function(o){return o===1?"\u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF":"\u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1"},ms:function(o){return(o===1?"\u03C7\u03B9\u03BB\u03B9\u03BF\u03C3\u03C4\u03CC":"\u03C7\u03B9\u03BB\u03B9\u03BF\u03C3\u03C4\u03AC")+" \u03C4\u03BF\u03C5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03BF\u03BB\u03AD\u03C0\u03C4\u03BF\u03C5"},decimal:","},t=["\u06F0","\u0661","\u0662","\u0663","\u0664","\u0665","\u0666","\u0667","\u0668","\u0669"],n={af:{y:"jaar",mo:function(o){return"maand"+(o===1?"":"e")},w:function(o){return o===1?"week":"weke"},d:function(o){return o===1?"dag":"dae"},h:function(o){return o===1?"uur":"ure"},m:function(o){return o===1?"minuut":"minute"},s:function(o){return"sekonde"+(o===1?"":"s")},ms:function(o){return"millisekonde"+(o===1?"":"s")},decimal:","},ar:{y:function(o){return["\u0633\u0646\u0629","\u0633\u0646\u062A\u0627\u0646","\u0633\u0646\u0648\u0627\u062A"][h(o)]},mo:function(o){return["\u0634\u0647\u0631","\u0634\u0647\u0631\u0627\u0646","\u0623\u0634\u0647\u0631"][h(o)]},w:function(o){return["\u0623\u0633\u0628\u0648\u0639","\u0623\u0633\u0628\u0648\u0639\u064A\u0646","\u0623\u0633\u0627\u0628\u064A\u0639"][h(o)]},d:function(o){return["\u064A\u0648\u0645","\u064A\u0648\u0645\u064A\u0646","\u0623\u064A\u0627\u0645"][h(o)]},h:function(o){return["\u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u062A\u064A\u0646","\u0633\u0627\u0639\u0627\u062A"][h(o)]},m:function(o){return["\u062F\u0642\u064A\u0642\u0629","\u062F\u0642\u064A\u0642\u062A\u0627\u0646","\u062F\u0642\u0627\u0626\u0642"][h(o)]},s:function(o){return["\u062B\u0627\u0646\u064A\u0629","\u062B\u0627\u0646\u064A\u062A\u0627\u0646","\u062B\u0648\u0627\u0646\u064A"][h(o)]},ms:function(o){return["\u062C\u0632\u0621 \u0645\u0646 \u0627\u0644\u062B\u0627\u0646\u064A\u0629","\u062C\u0632\u0622\u0646 \u0645\u0646 \u0627\u0644\u062B\u0627\u0646\u064A\u0629","\u0623\u062C\u0632\u0627\u0621 \u0645\u0646 \u0627\u0644\u062B\u0627\u0646\u064A\u0629"][h(o)]},decimal:",",delimiter:" \u0648 ",_formatCount:function(o,y){for(var b=u(t,{".":y}),x=o.toString().split(""),E=0;E<x.length;E++){var D=x[E];_(b,D)&&(x[E]=b[D])}return x.join("")}},bg:{y:function(o){return["\u0433\u043E\u0434\u0438\u043D\u0438","\u0433\u043E\u0434\u0438\u043D\u0430","\u0433\u043E\u0434\u0438\u043D\u0438"][f(o)]},mo:function(o){return["\u043C\u0435\u0441\u0435\u0446\u0430","\u043C\u0435\u0441\u0435\u0446","\u043C\u0435\u0441\u0435\u0446\u0430"][f(o)]},w:function(o){return["\u0441\u0435\u0434\u043C\u0438\u0446\u0438","\u0441\u0435\u0434\u043C\u0438\u0446\u0430","\u0441\u0435\u0434\u043C\u0438\u0446\u0438"][f(o)]},d:function(o){return["\u0434\u043D\u0438","\u0434\u0435\u043D","\u0434\u043D\u0438"][f(o)]},h:function(o){return["\u0447\u0430\u0441\u0430","\u0447\u0430\u0441","\u0447\u0430\u0441\u0430"][f(o)]},m:function(o){return["\u043C\u0438\u043D\u0443\u0442\u0438","\u043C\u0438\u043D\u0443\u0442\u0430","\u043C\u0438\u043D\u0443\u0442\u0438"][f(o)]},s:function(o){return["\u0441\u0435\u043A\u0443\u043D\u0434\u0438","\u0441\u0435\u043A\u0443\u043D\u0434\u0430","\u0441\u0435\u043A\u0443\u043D\u0434\u0438"][f(o)]},ms:function(o){return["\u043C\u0438\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0438","\u043C\u0438\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430","\u043C\u0438\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0438"][f(o)]},decimal:","},bn:{y:"\u09AC\u099B\u09B0",mo:"\u09AE\u09BE\u09B8",w:"\u09B8\u09AA\u09CD\u09A4\u09BE\u09B9",d:"\u09A6\u09BF\u09A8",h:"\u0998\u09A8\u09CD\u099F\u09BE",m:"\u09AE\u09BF\u09A8\u09BF\u099F",s:"\u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",ms:"\u09AE\u09BF\u09B2\u09BF\u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1"},ca:{y:function(o){return"any"+(o===1?"":"s")},mo:function(o){return"mes"+(o===1?"":"os")},w:function(o){return"setman"+(o===1?"a":"es")},d:function(o){return"di"+(o===1?"a":"es")},h:function(o){return"hor"+(o===1?"a":"es")},m:function(o){return"minut"+(o===1?"":"s")},s:function(o){return"segon"+(o===1?"":"s")},ms:function(o){return"milisegon"+(o===1?"":"s")},decimal:","},cs:{y:function(o){return["rok","roku","roky","let"][g(o)]},mo:function(o){return["m\u011Bs\xEDc","m\u011Bs\xEDce","m\u011Bs\xEDce","m\u011Bs\xEDc\u016F"][g(o)]},w:function(o){return["t\xFDden","t\xFDdne","t\xFDdny","t\xFDdn\u016F"][g(o)]},d:function(o){return["den","dne","dny","dn\xED"][g(o)]},h:function(o){return["hodina","hodiny","hodiny","hodin"][g(o)]},m:function(o){return["minuta","minuty","minuty","minut"][g(o)]},s:function(o){return["sekunda","sekundy","sekundy","sekund"][g(o)]},ms:function(o){return["milisekunda","milisekundy","milisekundy","milisekund"][g(o)]},decimal:","},cy:{y:"flwyddyn",mo:"mis",w:"wythnos",d:"diwrnod",h:"awr",m:"munud",s:"eiliad",ms:"milieiliad"},da:{y:"\xE5r",mo:function(o){return"m\xE5ned"+(o===1?"":"er")},w:function(o){return"uge"+(o===1?"":"r")},d:function(o){return"dag"+(o===1?"":"e")},h:function(o){return"time"+(o===1?"":"r")},m:function(o){return"minut"+(o===1?"":"ter")},s:function(o){return"sekund"+(o===1?"":"er")},ms:function(o){return"millisekund"+(o===1?"":"er")},decimal:","},de:{y:function(o){return"Jahr"+(o===1?"":"e")},mo:function(o){return"Monat"+(o===1?"":"e")},w:function(o){return"Woche"+(o===1?"":"n")},d:function(o){return"Tag"+(o===1?"":"e")},h:function(o){return"Stunde"+(o===1?"":"n")},m:function(o){return"Minute"+(o===1?"":"n")},s:function(o){return"Sekunde"+(o===1?"":"n")},ms:function(o){return"Millisekunde"+(o===1?"":"n")},decimal:","},el:e,en:{y:function(o){return"year"+(o===1?"":"s")},mo:function(o){return"month"+(o===1?"":"s")},w:function(o){return"week"+(o===1?"":"s")},d:function(o){return"day"+(o===1?"":"s")},h:function(o){return"hour"+(o===1?"":"s")},m:function(o){return"minute"+(o===1?"":"s")},s:function(o){return"second"+(o===1?"":"s")},ms:function(o){return"millisecond"+(o===1?"":"s")},decimal:"."},eo:{y:function(o){return"jaro"+(o===1?"":"j")},mo:function(o){return"monato"+(o===1?"":"j")},w:function(o){return"semajno"+(o===1?"":"j")},d:function(o){return"tago"+(o===1?"":"j")},h:function(o){return"horo"+(o===1?"":"j")},m:function(o){return"minuto"+(o===1?"":"j")},s:function(o){return"sekundo"+(o===1?"":"j")},ms:function(o){return"milisekundo"+(o===1?"":"j")},decimal:","},es:{y:function(o){return"a\xF1o"+(o===1?"":"s")},mo:function(o){return"mes"+(o===1?"":"es")},w:function(o){return"semana"+(o===1?"":"s")},d:function(o){return"d\xEDa"+(o===1?"":"s")},h:function(o){return"hora"+(o===1?"":"s")},m:function(o){return"minuto"+(o===1?"":"s")},s:function(o){return"segundo"+(o===1?"":"s")},ms:function(o){return"milisegundo"+(o===1?"":"s")},decimal:","},et:{y:function(o){return"aasta"+(o===1?"":"t")},mo:function(o){return"kuu"+(o===1?"":"d")},w:function(o){return"n\xE4dal"+(o===1?"":"at")},d:function(o){return"p\xE4ev"+(o===1?"":"a")},h:function(o){return"tund"+(o===1?"":"i")},m:function(o){return"minut"+(o===1?"":"it")},s:function(o){return"sekund"+(o===1?"":"it")},ms:function(o){return"millisekund"+(o===1?"":"it")},decimal:","},eu:{y:"urte",mo:"hilabete",w:"aste",d:"egun",h:"ordu",m:"minutu",s:"segundo",ms:"milisegundo",decimal:","},fa:{y:"\u0633\u0627\u0644",mo:"\u0645\u0627\u0647",w:"\u0647\u0641\u062A\u0647",d:"\u0631\u0648\u0632",h:"\u0633\u0627\u0639\u062A",m:"\u062F\u0642\u06CC\u0642\u0647",s:"\u062B\u0627\u0646\u06CC\u0647",ms:"\u0645\u06CC\u0644\u06CC \u062B\u0627\u0646\u06CC\u0647",decimal:"."},fi:{y:function(o){return o===1?"vuosi":"vuotta"},mo:function(o){return o===1?"kuukausi":"kuukautta"},w:function(o){return"viikko"+(o===1?"":"a")},d:function(o){return"p\xE4iv\xE4"+(o===1?"":"\xE4")},h:function(o){return"tunti"+(o===1?"":"a")},m:function(o){return"minuutti"+(o===1?"":"a")},s:function(o){return"sekunti"+(o===1?"":"a")},ms:function(o){return"millisekunti"+(o===1?"":"a")},decimal:","},fo:{y:"\xE1r",mo:function(o){return o===1?"m\xE1na\xF0ur":"m\xE1na\xF0ir"},w:function(o){return o===1?"vika":"vikur"},d:function(o){return o===1?"dagur":"dagar"},h:function(o){return o===1?"t\xEDmi":"t\xEDmar"},m:function(o){return o===1?"minuttur":"minuttir"},s:"sekund",ms:"millisekund",decimal:","},fr:{y:function(o){return"an"+(o>=2?"s":"")},mo:"mois",w:function(o){return"semaine"+(o>=2?"s":"")},d:function(o){return"jour"+(o>=2?"s":"")},h:function(o){return"heure"+(o>=2?"s":"")},m:function(o){return"minute"+(o>=2?"s":"")},s:function(o){return"seconde"+(o>=2?"s":"")},ms:function(o){return"milliseconde"+(o>=2?"s":"")},decimal:","},gr:e,he:{y:function(o){return o===1?"\u05E9\u05E0\u05D4":"\u05E9\u05E0\u05D9\u05DD"},mo:function(o){return o===1?"\u05D7\u05D5\u05D3\u05E9":"\u05D7\u05D5\u05D3\u05E9\u05D9\u05DD"},w:function(o){return o===1?"\u05E9\u05D1\u05D5\u05E2":"\u05E9\u05D1\u05D5\u05E2\u05D5\u05EA"},d:function(o){return o===1?"\u05D9\u05D5\u05DD":"\u05D9\u05DE\u05D9\u05DD"},h:function(o){return o===1?"\u05E9\u05E2\u05D4":"\u05E9\u05E2\u05D5\u05EA"},m:function(o){return o===1?"\u05D3\u05E7\u05D4":"\u05D3\u05E7\u05D5\u05EA"},s:function(o){return o===1?"\u05E9\u05E0\u05D9\u05D4":"\u05E9\u05E0\u05D9\u05D5\u05EA"},ms:function(o){return o===1?"\u05DE\u05D9\u05DC\u05D9\u05E9\u05E0\u05D9\u05D9\u05D4":"\u05DE\u05D9\u05DC\u05D9\u05E9\u05E0\u05D9\u05D5\u05EA"},decimal:"."},hr:{y:function(o){return o%10===2||o%10===3||o%10===4?"godine":"godina"},mo:function(o){return o===1?"mjesec":o===2||o===3||o===4?"mjeseca":"mjeseci"},w:function(o){return o%10===1&&o!==11?"tjedan":"tjedna"},d:function(o){return o===1?"dan":"dana"},h:function(o){return o===1?"sat":o===2||o===3||o===4?"sata":"sati"},m:function(o){var y=o%10;return(y===2||y===3||y===4)&&(o<10||o>14)?"minute":"minuta"},s:function(o){var y=o%10;return y===5||Math.floor(o)===o&&o>=10&&o<=19?"sekundi":y===1?"sekunda":y===2||y===3||y===4?"sekunde":"sekundi"},ms:function(o){return o===1?"milisekunda":o%10===2||o%10===3||o%10===4?"milisekunde":"milisekundi"},decimal:","},hi:{y:"\u0938\u093E\u0932",mo:function(o){return o===1?"\u092E\u0939\u0940\u0928\u093E":"\u092E\u0939\u0940\u0928\u0947"},w:function(o){return o===1?"\u0939\u095E\u094D\u0924\u093E":"\u0939\u092B\u094D\u0924\u0947"},d:"\u0926\u093F\u0928",h:function(o){return o===1?"\u0918\u0902\u091F\u093E":"\u0918\u0902\u091F\u0947"},m:"\u092E\u093F\u0928\u091F",s:"\u0938\u0947\u0915\u0902\u0921",ms:"\u092E\u093F\u0932\u0940\u0938\u0947\u0915\u0902\u0921",decimal:"."},hu:{y:"\xE9v",mo:"h\xF3nap",w:"h\xE9t",d:"nap",h:"\xF3ra",m:"perc",s:"m\xE1sodperc",ms:"ezredm\xE1sodperc",decimal:","},id:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"menit",s:"detik",ms:"milidetik",decimal:"."},is:{y:"\xE1r",mo:function(o){return"m\xE1nu\xF0"+(o===1?"ur":"ir")},w:function(o){return"vik"+(o===1?"a":"ur")},d:function(o){return"dag"+(o===1?"ur":"ar")},h:function(o){return"klukkut\xEDm"+(o===1?"i":"ar")},m:function(o){return"m\xEDn\xFAt"+(o===1?"a":"ur")},s:function(o){return"sek\xFAnd"+(o===1?"a":"ur")},ms:function(o){return"millisek\xFAnd"+(o===1?"a":"ur")},decimal:"."},it:{y:function(o){return"ann"+(o===1?"o":"i")},mo:function(o){return"mes"+(o===1?"e":"i")},w:function(o){return"settiman"+(o===1?"a":"e")},d:function(o){return"giorn"+(o===1?"o":"i")},h:function(o){return"or"+(o===1?"a":"e")},m:function(o){return"minut"+(o===1?"o":"i")},s:function(o){return"second"+(o===1?"o":"i")},ms:function(o){return"millisecond"+(o===1?"o":"i")},decimal:","},ja:{y:"\u5E74",mo:"\u30F6\u6708",w:"\u9031",d:"\u65E5",h:"\u6642\u9593",m:"\u5206",s:"\u79D2",ms:"\u30DF\u30EA\u79D2",decimal:"."},km:{y:"\u1786\u17D2\u1793\u17B6\u17C6",mo:"\u1781\u17C2",w:"\u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD",d:"\u1790\u17D2\u1784\u17C3",h:"\u1798\u17C9\u17C4\u1784",m:"\u1793\u17B6\u1791\u17B8",s:"\u179C\u17B7\u1793\u17B6\u1791\u17B8",ms:"\u1798\u17B7\u179B\u17D2\u179B\u17B8\u179C\u17B7\u1793\u17B6\u1791\u17B8"},kn:{y:function(o){return o===1?"\u0CB5\u0CB0\u0CCD\u0CB7":"\u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CC1"},mo:function(o){return o===1?"\u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1":"\u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3\u0CC1"},w:function(o){return o===1?"\u0CB5\u0CBE\u0CB0":"\u0CB5\u0CBE\u0CB0\u0C97\u0CB3\u0CC1"},d:function(o){return o===1?"\u0CA6\u0CBF\u0CA8":"\u0CA6\u0CBF\u0CA8\u0C97\u0CB3\u0CC1"},h:function(o){return o===1?"\u0C97\u0C82\u0C9F\u0CC6":"\u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CC1"},m:function(o){return o===1?"\u0CA8\u0CBF\u0CAE\u0CBF\u0CB7":"\u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3\u0CC1"},s:function(o){return o===1?"\u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD":"\u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CC1\u0C97\u0CB3\u0CC1"},ms:function(o){return o===1?"\u0CAE\u0CBF\u0CB2\u0CBF\u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD":"\u0CAE\u0CBF\u0CB2\u0CBF\u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CC1\u0C97\u0CB3\u0CC1"}},ko:{y:"\uB144",mo:"\uAC1C\uC6D4",w:"\uC8FC\uC77C",d:"\uC77C",h:"\uC2DC\uAC04",m:"\uBD84",s:"\uCD08",ms:"\uBC00\uB9AC \uCD08",decimal:"."},ku:{y:"sal",mo:"meh",w:"hefte",d:"roj",h:"seet",m:"deqe",s:"saniye",ms:"m\xEEl\xEE\xE7irk",decimal:","},lo:{y:"\u0E9B\u0EB5",mo:"\u0EC0\u0E94\u0EB7\u0EAD\u0E99",w:"\u0EAD\u0EB2\u0E97\u0EB4\u0E94",d:"\u0EA1\u0EB7\u0EC9",h:"\u0E8A\u0EBB\u0EC8\u0EA7\u0EC2\u0EA1\u0E87",m:"\u0E99\u0EB2\u0E97\u0EB5",s:"\u0EA7\u0EB4\u0E99\u0EB2\u0E97\u0EB5",ms:"\u0EA1\u0EB4\u0E99\u0EA5\u0EB4\u0EA7\u0EB4\u0E99\u0EB2\u0E97\u0EB5",decimal:","},lt:{y:function(o){return o%10===0||o%100>=10&&o%100<=20?"met\u0173":"metai"},mo:function(o){return["m\u0117nuo","m\u0117nesiai","m\u0117nesi\u0173"][v(o)]},w:function(o){return["savait\u0117","savait\u0117s","savai\u010Di\u0173"][v(o)]},d:function(o){return["diena","dienos","dien\u0173"][v(o)]},h:function(o){return["valanda","valandos","valand\u0173"][v(o)]},m:function(o){return["minut\u0117","minut\u0117s","minu\u010Di\u0173"][v(o)]},s:function(o){return["sekund\u0117","sekund\u0117s","sekund\u017Ei\u0173"][v(o)]},ms:function(o){return["milisekund\u0117","milisekund\u0117s","milisekund\u017Ei\u0173"][v(o)]},decimal:","},lv:{y:function(o){return m(o)?"gads":"gadi"},mo:function(o){return m(o)?"m\u0113nesis":"m\u0113ne\u0161i"},w:function(o){return m(o)?"ned\u0113\u013Ca":"ned\u0113\u013Cas"},d:function(o){return m(o)?"diena":"dienas"},h:function(o){return m(o)?"stunda":"stundas"},m:function(o){return m(o)?"min\u016Bte":"min\u016Btes"},s:function(o){return m(o)?"sekunde":"sekundes"},ms:function(o){return m(o)?"milisekunde":"milisekundes"},decimal:","},mk:{y:function(o){return o===1?"\u0433\u043E\u0434\u0438\u043D\u0430":"\u0433\u043E\u0434\u0438\u043D\u0438"},mo:function(o){return o===1?"\u043C\u0435\u0441\u0435\u0446":"\u043C\u0435\u0441\u0435\u0446\u0438"},w:function(o){return o===1?"\u043D\u0435\u0434\u0435\u043B\u0430":"\u043D\u0435\u0434\u0435\u043B\u0438"},d:function(o){return o===1?"\u0434\u0435\u043D":"\u0434\u0435\u043D\u0430"},h:function(o){return o===1?"\u0447\u0430\u0441":"\u0447\u0430\u0441\u0430"},m:function(o){return o===1?"\u043C\u0438\u043D\u0443\u0442\u0430":"\u043C\u0438\u043D\u0443\u0442\u0438"},s:function(o){return o===1?"\u0441\u0435\u043A\u0443\u043D\u0434\u0430":"\u0441\u0435\u043A\u0443\u043D\u0434\u0438"},ms:function(o){return o===1?"\u043C\u0438\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430":"\u043C\u0438\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0438"},decimal:","},mr:{y:function(o){return o===1?"\u0935\u0930\u094D\u0937":"\u0935\u0930\u094D\u0937\u0947"},mo:function(o){return o===1?"\u092E\u0939\u093F\u0928\u093E":"\u092E\u0939\u093F\u0928\u0947"},w:function(o){return o===1?"\u0906\u0920\u0935\u0921\u093E":"\u0906\u0920\u0935\u0921\u0947"},d:"\u0926\u093F\u0935\u0938",h:"\u0924\u093E\u0938",m:function(o){return o===1?"\u092E\u093F\u0928\u093F\u091F":"\u092E\u093F\u0928\u093F\u091F\u0947"},s:"\u0938\u0947\u0915\u0902\u0926",ms:"\u092E\u093F\u0932\u093F\u0938\u0947\u0915\u0902\u0926"},ms:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"minit",s:"saat",ms:"milisaat",decimal:"."},nl:{y:"jaar",mo:function(o){return o===1?"maand":"maanden"},w:function(o){return o===1?"week":"weken"},d:function(o){return o===1?"dag":"dagen"},h:"uur",m:function(o){return o===1?"minuut":"minuten"},s:function(o){return o===1?"seconde":"seconden"},ms:function(o){return o===1?"milliseconde":"milliseconden"},decimal:","},no:{y:"\xE5r",mo:function(o){return"m\xE5ned"+(o===1?"":"er")},w:function(o){return"uke"+(o===1?"":"r")},d:function(o){return"dag"+(o===1?"":"er")},h:function(o){return"time"+(o===1?"":"r")},m:function(o){return"minutt"+(o===1?"":"er")},s:function(o){return"sekund"+(o===1?"":"er")},ms:function(o){return"millisekund"+(o===1?"":"er")},decimal:","},pl:{y:function(o){return["rok","roku","lata","lat"][d(o)]},mo:function(o){return["miesi\u0105c","miesi\u0105ca","miesi\u0105ce","miesi\u0119cy"][d(o)]},w:function(o){return["tydzie\u0144","tygodnia","tygodnie","tygodni"][d(o)]},d:function(o){return["dzie\u0144","dnia","dni","dni"][d(o)]},h:function(o){return["godzina","godziny","godziny","godzin"][d(o)]},m:function(o){return["minuta","minuty","minuty","minut"][d(o)]},s:function(o){return["sekunda","sekundy","sekundy","sekund"][d(o)]},ms:function(o){return["milisekunda","milisekundy","milisekundy","milisekund"][d(o)]},decimal:","},pt:{y:function(o){return"ano"+(o===1?"":"s")},mo:function(o){return o===1?"m\xEAs":"meses"},w:function(o){return"semana"+(o===1?"":"s")},d:function(o){return"dia"+(o===1?"":"s")},h:function(o){return"hora"+(o===1?"":"s")},m:function(o){return"minuto"+(o===1?"":"s")},s:function(o){return"segundo"+(o===1?"":"s")},ms:function(o){return"milissegundo"+(o===1?"":"s")},decimal:","},ro:{y:function(o){return o===1?"an":"ani"},mo:function(o){return o===1?"lun\u0103":"luni"},w:function(o){return o===1?"s\u0103pt\u0103m\xE2n\u0103":"s\u0103pt\u0103m\xE2ni"},d:function(o){return o===1?"zi":"zile"},h:function(o){return o===1?"or\u0103":"ore"},m:function(o){return o===1?"minut":"minute"},s:function(o){return o===1?"secund\u0103":"secunde"},ms:function(o){return o===1?"milisecund\u0103":"milisecunde"},decimal:","},ru:{y:function(o){return["\u043B\u0435\u0442","\u0433\u043E\u0434","\u0433\u043E\u0434\u0430"][f(o)]},mo:function(o){return["\u043C\u0435\u0441\u044F\u0446\u0435\u0432","\u043C\u0435\u0441\u044F\u0446","\u043C\u0435\u0441\u044F\u0446\u0430"][f(o)]},w:function(o){return["\u043D\u0435\u0434\u0435\u043B\u044C","\u043D\u0435\u0434\u0435\u043B\u044F","\u043D\u0435\u0434\u0435\u043B\u0438"][f(o)]},d:function(o){return["\u0434\u043D\u0435\u0439","\u0434\u0435\u043D\u044C","\u0434\u043D\u044F"][f(o)]},h:function(o){return["\u0447\u0430\u0441\u043E\u0432","\u0447\u0430\u0441","\u0447\u0430\u0441\u0430"][f(o)]},m:function(o){return["\u043C\u0438\u043D\u0443\u0442","\u043C\u0438\u043D\u0443\u0442\u0430","\u043C\u0438\u043D\u0443\u0442\u044B"][f(o)]},s:function(o){return["\u0441\u0435\u043A\u0443\u043D\u0434","\u0441\u0435\u043A\u0443\u043D\u0434\u0430","\u0441\u0435\u043A\u0443\u043D\u0434\u044B"][f(o)]},ms:function(o){return["\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434","\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430","\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B"][f(o)]},decimal:","},sq:{y:function(o){return o===1?"vit":"vjet"},mo:"muaj",w:"jav\xEB",d:"dit\xEB",h:"or\xEB",m:function(o){return"minut"+(o===1?"\xEB":"a")},s:function(o){return"sekond"+(o===1?"\xEB":"a")},ms:function(o){return"milisekond"+(o===1?"\xEB":"a")},decimal:","},sr:{y:function(o){return["\u0433\u043E\u0434\u0438\u043D\u0438","\u0433\u043E\u0434\u0438\u043D\u0430","\u0433\u043E\u0434\u0438\u043D\u0435"][f(o)]},mo:function(o){return["\u043C\u0435\u0441\u0435\u0446\u0438","\u043C\u0435\u0441\u0435\u0446","\u043C\u0435\u0441\u0435\u0446\u0430"][f(o)]},w:function(o){return["\u043D\u0435\u0434\u0435\u0459\u0438","\u043D\u0435\u0434\u0435\u0459\u0430","\u043D\u0435\u0434\u0435\u0459\u0435"][f(o)]},d:function(o){return["\u0434\u0430\u043D\u0438","\u0434\u0430\u043D","\u0434\u0430\u043D\u0430"][f(o)]},h:function(o){return["\u0441\u0430\u0442\u0438","\u0441\u0430\u0442","\u0441\u0430\u0442\u0430"][f(o)]},m:function(o){return["\u043C\u0438\u043D\u0443\u0442\u0430","\u043C\u0438\u043D\u0443\u0442","\u043C\u0438\u043D\u0443\u0442\u0430"][f(o)]},s:function(o){return["\u0441\u0435\u043A\u0443\u043D\u0434\u0438","\u0441\u0435\u043A\u0443\u043D\u0434\u0430","\u0441\u0435\u043A\u0443\u043D\u0434\u0435"][f(o)]},ms:function(o){return["\u043C\u0438\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0438","\u043C\u0438\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430","\u043C\u0438\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0435"][f(o)]},decimal:","},ta:{y:function(o){return o===1?"\u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD":"\u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD"},mo:function(o){return o===1?"\u0BAE\u0BBE\u0BA4\u0BAE\u0BCD":"\u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD"},w:function(o){return o===1?"\u0BB5\u0BBE\u0BB0\u0BAE\u0BCD":"\u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD"},d:function(o){return o===1?"\u0BA8\u0BBE\u0BB3\u0BCD":"\u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD"},h:function(o){return o===1?"\u0BAE\u0BA3\u0BBF":"\u0BAE\u0BA3\u0BBF\u0BA8\u0BC7\u0BB0\u0BAE\u0BCD"},m:function(o){return"\u0BA8\u0BBF\u0BAE\u0BBF\u0B9F"+(o===1?"\u0BAE\u0BCD":"\u0B99\u0BCD\u0B95\u0BB3\u0BCD")},s:function(o){return"\u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF"+(o===1?"":"\u0B95\u0BB3\u0BCD")},ms:function(o){return"\u0BAE\u0BBF\u0BB2\u0BCD\u0BB2\u0BBF \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF"+(o===1?"":"\u0B95\u0BB3\u0BCD")}},te:{y:function(o){return"\u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38"+(o===1?"\u0C30\u0C02":"\u0C30\u0C3E\u0C32")},mo:function(o){return"\u0C28\u0C46\u0C32"+(o===1?"":"\u0C32")},w:function(o){return o===1?"\u0C35\u0C3E\u0C30\u0C02":"\u0C35\u0C3E\u0C30\u0C3E\u0C32\u0C41"},d:function(o){return"\u0C30\u0C4B\u0C1C\u0C41"+(o===1?"":"\u0C32\u0C41")},h:function(o){return"\u0C17\u0C02\u0C1F"+(o===1?"":"\u0C32\u0C41")},m:function(o){return o===1?"\u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02":"\u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C3E\u0C32\u0C41"},s:function(o){return o===1?"\u0C38\u0C46\u0C15\u0C28\u0C41":"\u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32\u0C41"},ms:function(o){return o===1?"\u0C2E\u0C3F\u0C32\u0C4D\u0C32\u0C40\u0C38\u0C46\u0C15\u0C28\u0C4D":"\u0C2E\u0C3F\u0C32\u0C4D\u0C32\u0C40\u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32\u0C41"}},uk:{y:function(o){return["\u0440\u043E\u043A\u0456\u0432","\u0440\u0456\u043A","\u0440\u043E\u043A\u0438"][f(o)]},mo:function(o){return["\u043C\u0456\u0441\u044F\u0446\u0456\u0432","\u043C\u0456\u0441\u044F\u0446\u044C","\u043C\u0456\u0441\u044F\u0446\u0456"][f(o)]},w:function(o){return["\u0442\u0438\u0436\u043D\u0456\u0432","\u0442\u0438\u0436\u0434\u0435\u043D\u044C","\u0442\u0438\u0436\u043D\u0456"][f(o)]},d:function(o){return["\u0434\u043D\u0456\u0432","\u0434\u0435\u043D\u044C","\u0434\u043D\u0456"][f(o)]},h:function(o){return["\u0433\u043E\u0434\u0438\u043D","\u0433\u043E\u0434\u0438\u043D\u0430","\u0433\u043E\u0434\u0438\u043D\u0438"][f(o)]},m:function(o){return["\u0445\u0432\u0438\u043B\u0438\u043D","\u0445\u0432\u0438\u043B\u0438\u043D\u0430","\u0445\u0432\u0438\u043B\u0438\u043D\u0438"][f(o)]},s:function(o){return["\u0441\u0435\u043A\u0443\u043D\u0434","\u0441\u0435\u043A\u0443\u043D\u0434\u0430","\u0441\u0435\u043A\u0443\u043D\u0434\u0438"][f(o)]},ms:function(o){return["\u043C\u0456\u043B\u0456\u0441\u0435\u043A\u0443\u043D\u0434","\u043C\u0456\u043B\u0456\u0441\u0435\u043A\u0443\u043D\u0434\u0430","\u043C\u0456\u043B\u0456\u0441\u0435\u043A\u0443\u043D\u0434\u0438"][f(o)]},decimal:","},ur:{y:"\u0633\u0627\u0644",mo:function(o){return o===1?"\u0645\u06C1\u06CC\u0646\u06C1":"\u0645\u06C1\u06CC\u0646\u06D2"},w:function(o){return o===1?"\u06C1\u0641\u062A\u06C1":"\u06C1\u0641\u062A\u06D2"},d:"\u062F\u0646",h:function(o){return o===1?"\u06AF\u06BE\u0646\u0679\u06C1":"\u06AF\u06BE\u0646\u0679\u06D2"},m:"\u0645\u0646\u0679",s:"\u0633\u06CC\u06A9\u0646\u0688",ms:"\u0645\u0644\u06CC \u0633\u06CC\u06A9\u0646\u0688",decimal:"."},sk:{y:function(o){return["rok","roky","roky","rokov"][g(o)]},mo:function(o){return["mesiac","mesiace","mesiace","mesiacov"][g(o)]},w:function(o){return["t\xFD\u017Ede\u0148","t\xFD\u017Edne","t\xFD\u017Edne","t\xFD\u017Ed\u0148ov"][g(o)]},d:function(o){return["de\u0148","dni","dni","dn\xED"][g(o)]},h:function(o){return["hodina","hodiny","hodiny","hod\xEDn"][g(o)]},m:function(o){return["min\xFAta","min\xFAty","min\xFAty","min\xFAt"][g(o)]},s:function(o){return["sekunda","sekundy","sekundy","sek\xFAnd"][g(o)]},ms:function(o){return["milisekunda","milisekundy","milisekundy","milisek\xFAnd"][g(o)]},decimal:","},sl:{y:function(o){return o%10===1?"leto":o%100===2?"leti":o%100===3||o%100===4||Math.floor(o)!==o&&o%100<=5?"leta":"let"},mo:function(o){return o%10===1?"mesec":o%100===2||Math.floor(o)!==o&&o%100<=5?"meseca":o%10===3||o%10===4?"mesece":"mesecev"},w:function(o){return o%10===1?"teden":o%10===2||Math.floor(o)!==o&&o%100<=4?"tedna":o%10===3||o%10===4?"tedne":"tednov"},d:function(o){return o%100===1?"dan":"dni"},h:function(o){return o%10===1?"ura":o%100===2?"uri":o%10===3||o%10===4||Math.floor(o)!==o?"ure":"ur"},m:function(o){return o%10===1?"minuta":o%10===2?"minuti":o%10===3||o%10===4||Math.floor(o)!==o&&o%100<=4?"minute":"minut"},s:function(o){return o%10===1?"sekunda":o%100===2?"sekundi":o%100===3||o%100===4||Math.floor(o)!==o?"sekunde":"sekund"},ms:function(o){return o%10===1?"milisekunda":o%100===2?"milisekundi":o%100===3||o%100===4||Math.floor(o)!==o?"milisekunde":"milisekund"},decimal:","},sv:{y:"\xE5r",mo:function(o){return"m\xE5nad"+(o===1?"":"er")},w:function(o){return"veck"+(o===1?"a":"or")},d:function(o){return"dag"+(o===1?"":"ar")},h:function(o){return"timm"+(o===1?"e":"ar")},m:function(o){return"minut"+(o===1?"":"er")},s:function(o){return"sekund"+(o===1?"":"er")},ms:function(o){return"millisekund"+(o===1?"":"er")},decimal:","},sw:{y:function(o){return o===1?"mwaka":"miaka"},mo:function(o){return o===1?"mwezi":"miezi"},w:"wiki",d:function(o){return o===1?"siku":"masiku"},h:function(o){return o===1?"saa":"masaa"},m:"dakika",s:"sekunde",ms:"milisekunde",decimal:".",_numberFirst:!0},tr:{y:"y\u0131l",mo:"ay",w:"hafta",d:"g\xFCn",h:"saat",m:"dakika",s:"saniye",ms:"milisaniye",decimal:","},th:{y:"\u0E1B\u0E35",mo:"\u0E40\u0E14\u0E37\u0E2D\u0E19",w:"\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",d:"\u0E27\u0E31\u0E19",h:"\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",m:"\u0E19\u0E32\u0E17\u0E35",s:"\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",ms:"\u0E21\u0E34\u0E25\u0E25\u0E34\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",decimal:"."},vi:{y:"n\u0103m",mo:"th\xE1ng",w:"tu\u1EA7n",d:"ng\xE0y",h:"gi\u1EDD",m:"ph\xFAt",s:"gi\xE2y",ms:"mili gi\xE2y",decimal:","},zh_CN:{y:"\u5E74",mo:"\u4E2A\u6708",w:"\u5468",d:"\u5929",h:"\u5C0F\u65F6",m:"\u5206\u949F",s:"\u79D2",ms:"\u6BEB\u79D2",decimal:"."},zh_TW:{y:"\u5E74",mo:"\u500B\u6708",w:"\u5468",d:"\u5929",h:"\u5C0F\u6642",m:"\u5206\u9418",s:"\u79D2",ms:"\u6BEB\u79D2",decimal:"."}};function i(o){var y=function(x,E){var D=u({},y,E||{});return a(x,D)};return u(y,{language:"en",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},o)}var s=i({});function l(o){var y=[o.language];if(_(o,"fallbacks"))if(p(o.fallbacks)&&o.fallbacks.length)y=y.concat(o.fallbacks);else throw new Error("fallbacks must be an array with at least one element");for(var b=0;b<y.length;b++){var x=y[b];if(_(o.languages,x))return o.languages[x];if(_(n,x))return n[x]}throw new Error("No language found.")}function a(o,y){var b,x,E;o=Math.abs(o);var D=l(y),M=[],A,I,H;for(b=0,x=y.units.length;b<x;b++){if(A=y.units[b],I=y.unitMeasures[A],b+1===x)if(_(y,"maxDecimalPoints")){var te=Math.pow(10,y.maxDecimalPoints),k=o/I;H=parseFloat((Math.floor(te*k)/te).toFixed(y.maxDecimalPoints))}else H=o/I;else H=Math.floor(o/I);M.push({unitCount:H,unitName:A}),o-=H*I}var L=0;for(b=0;b<M.length;b++)if(M[b].unitCount){L=b;break}if(y.round){var V,X;for(b=M.length-1;b>=0&&(E=M[b],E.unitCount=Math.round(E.unitCount),b!==0);b--)X=M[b-1],V=y.unitMeasures[X.unitName]/y.unitMeasures[E.unitName],(E.unitCount%V===0||y.largest&&y.largest-1<b-L)&&(X.unitCount+=E.unitCount/V,E.unitCount=0)}var q=[];for(b=0,M.length;b<x&&(E=M[b],E.unitCount&&q.push(c(E.unitCount,E.unitName,D,y)),q.length!==y.largest);b++);if(q.length){var G;if(_(y,"delimiter")?G=y.delimiter:_(D,"delimiter")?G=D.delimiter:G=", ",!y.conjunction||q.length===1)return q.join(G);if(q.length===2)return q.join(y.conjunction);if(q.length>2)return q.slice(0,-1).join(G)+(y.serialComma?",":"")+y.conjunction+q.slice(-1)}else return c(0,y.units[y.units.length-1],D,y)}function c(o,y,b,x){var E;_(x,"decimal")?E=x.decimal:_(b,"decimal")?E=b.decimal:E=".";var D;typeof b._formatCount=="function"?D=b._formatCount(o,E):D=o.toString().replace(".",E);var M=b[y],A;return typeof M=="function"?A=M(o):A=M,b._numberFirst?A+x.spacer+D:D+x.spacer+A}function u(o){for(var y,b=1;b<arguments.length;b++){y=arguments[b];for(var x in y)_(y,x)&&(o[x]=y[x])}return o}function h(o){return o===1?0:o===2?1:o>2&&o<11?2:0}function d(o){return o===1?0:Math.floor(o)!==o?1:o%10>=2&&o%10<=4&&!(o%100>10&&o%100<20)?2:3}function f(o){return Math.floor(o)!==o?2:o%100>=5&&o%100<=20||o%10>=5&&o%10<=9||o%10===0?0:o%10===1?1:o>1?2:0}function g(o){return o===1?0:Math.floor(o)!==o?1:o%10>=2&&o%10<=4&&o%100<10?2:3}function v(o){return o===1||o%10===1&&o%100>20?0:Math.floor(o)!==o||o%10>=2&&o%100>20||o%10>=2&&o%100<10?1:2}function m(o){return o%10===1&&o%100!==11}var p=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function _(o,y){return Object.prototype.hasOwnProperty.call(o,y)}s.getSupportedLanguages=function(){var y=[];for(var b in n)_(n,b)&&b!=="gr"&&y.push(b);return y},s.humanizer=i,r.exports?r.exports=s:this.humanizeDuration=s})()})(pl);const wa=pl.exports,lm=(r,e,t,n,i)=>{const l=ba(0,ya),a=[r[0],r[1],r[2],e[0],e[1],e[2],0,l[0],l[1],l[2]],c=["x","y","z","vx","vy","vz","t","sunPosX","sunPosY","sunPosZ"],u=c.length;if(u!=a.length)throw Error("satOrbitData names doesn't match saved data!");const h=t.dt;let d=h,f=1,g;n.integrator=="euler"?g=Sa:n.integrator=="rk4"?g=am:g=Sa,console.log("ORBIT PARAMETERS:"),console.log(JSON.stringify(n,null,4)),console.log("SOFT BODY PARAMETERS:"),console.log(JSON.stringify(t,null,4)),console.log("ORBIT INTEGRATOR:"),console.log(g.name),console.log("SOFT BODY INTEGRATOR:"),console.log(t.integrator);const v=[r[0],r[1],r[2]],m=[e[0],e[1],e[2]],p=new Vi(t.d,t.d,t.nCols-1,t.nCols-1);let _=p.attributes.position.array,o=new Float32Array(_.length);const y=Wp(_,t.nCols,t.nCols,1,1),b=p.getIndex().array,x=$p(b,t.nCols,t.nCols);let E=performance.now();const D=performance.now(),M=86400,A=M*365,I=n.simulationYears*A+n.simulationDays*M;for(;d<I;){if(performance.now()-E>=10*1e3){E=performance.now();const X=d/I;console.log(jp(X*100,0)+"%");const q=performance.now()-D,O=q/X-q;let z=new Date(Date.now());console.log(`Timestamp : ${z.getHours()}:${z.getMinutes()}:${z.getSeconds()}`),console.log("Time elapsed: "+wa(q)),console.log("Estimated time remaining: "+wa(O))}const H=[],te=5.972*Math.pow(10,24);H.push(0),H.push(0),H.push(0),H.push(te);const k=ba(d,ya),L=g(v,m,_,o,t,n,y,x,b,H,d,h);if(Number.isNaN(L.bodyPNew[0])||Number.isNaN(L.bodyPNew[1])||Number.isNaN(L.bodyPNew[2])){console.log("UNSTABLE!");break}_=L.bodyPNew,o=L.bodyVNew;const V=a.length;if(f%i==0&&(a.push(L.pNew[0]),a.push(L.pNew[1]),a.push(L.pNew[2]),a.push(L.vNew[0]),a.push(L.vNew[1]),a.push(L.vNew[2]),a.push(d),a.push(k[0]),a.push(k[1]),a.push(k[2]),a.length-V!=u))throw Error("Not pushing the correct amount of fields each time step");v[0]=L.pNew[0],v[1]=L.pNew[1],v[2]=L.pNew[2],m[0]=L.vNew[0],m[1]=L.vNew[1],m[2]=L.vNew[2],d+=h,f+=1}return console.log("Simulation took "+((performance.now()-D)/1e3).toString()+" s"),console.log("Params used:"),console.log({softBodyParams:t,orbitParams:n}),console.log("ORBIT INTEGRATOR:"),console.log(g.name),console.log("SOFT BODY INTEGRATOR:"),console.log(t.integrator),{satOrbitData:a,satOrbitDataFields:c}},cm="/masters_project/assets/8k_earth_daymap.88ab060b.jpg",um="/masters_project/assets/8k_earth_normal_map.84e6e51f.jpg",dm=(r,e)=>{var t=document.createElement("a");if(t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",r),document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),t.dispatchEvent(n)}else t.click()};function hm(r){if(!!r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function ai(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),l=r.a,a=Math.round(r.h),c=r.s.toFixed(1),u=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=r.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+l+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+l+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+l+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+c+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+c+",v:"+u+",a:"+l+"}"}return"unknown format"}var Ea=Array.prototype.forEach,wi=Array.prototype.slice,K={BREAK:{},extend:function(e){return this.each(wi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(wi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=wi.call(arguments);return function(){for(var t=wi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(Ea&&e.forEach&&e.forEach===Ea)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var l in e)if(t.call(n,e[l],l)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,l=arguments;function a(){i=null,n||e.apply(s,l)}var c=n||!i;clearTimeout(i),i=setTimeout(a,t),c&&e.apply(s,l)}},toArray:function(e){return e.toArray?e.toArray():wi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},fm=[{litmus:K.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ai},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ai},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ai},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ai}}},{litmus:K.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:K.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:K.isObject,conversions:{RGBA_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)&&K.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)&&K.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ei=void 0,gr=void 0,Ls=function(){gr=!1;var e=arguments.length>1?K.toArray(arguments):arguments[0];return K.each(fm,function(t){if(t.litmus(e))return K.each(t.conversions,function(n,i){if(Ei=n.read(e),gr===!1&&Ei!==!1)return gr=Ei,Ei.conversionName=i,Ei.conversion=n,K.BREAK}),K.BREAK}),gr},Ta=void 0,yr={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),l=n*(1-t),a=n*(1-s*t),c=n*(1-(1-s)*t),u=[[n,c,l],[a,n,l],[l,n,c],[l,a,n],[c,l,n],[n,l,a]][i];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),l=s-i,a=void 0,c=void 0;if(s!==0)c=l/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/l:t===s?a=2+(n-e)/l:a=4+(e-t)/l,a/=6,a<0&&(a+=1),{h:a*360,s:c,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Ta=t*8)|e&~(255<<Ta)}},pm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ot=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ft=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),fn=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var l=i.get;return l===void 0?void 0:l.call(n)}},pn=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},mn=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},nt=function(){function r(){if(Ot(this,r),this.__state=Ls.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ft(r,[{key:"toString",value:function(){return ai(this)}},{key:"toHexString",value:function(){return ai(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Vs(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(nt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(nt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Hs(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(nt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(nt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}nt.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=yr.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")K.extend(r.__state,yr.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};nt.recalculateHSV=function(r){var e=yr.rgb_to_hsv(r.r,r.g,r.b);K.extend(r.__state,{s:e.s,v:e.v}),K.isNaN(e.h)?K.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};nt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Vs(nt.prototype,"r",2);Vs(nt.prototype,"g",1);Vs(nt.prototype,"b",0);Hs(nt.prototype,"h");Hs(nt.prototype,"s");Hs(nt.prototype,"v");Object.defineProperty(nt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(nt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=yr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var kn=function(){function r(e,t){Ot(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ft(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),mm={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},ml={};K.each(mm,function(r,e){K.each(r,function(t){ml[t]=e})});var gm=/(\d+(\.\d+)?)px/;function kt(r){if(r==="0"||K.isUndefined(r))return 0;var e=r.match(gm);return K.isNull(e)?0:parseFloat(e[1])}var B={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;K.isUndefined(s)&&(s=!0),K.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},l=ml[t];if(!l)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(l);switch(l){case"MouseEvents":{var c=s.x||s.clientX||0,u=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,c,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;K.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}K.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),B},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),B},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return B},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return B},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return kt(t["border-left-width"])+kt(t["border-right-width"])+kt(t["padding-left"])+kt(t["padding-right"])+kt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return kt(t["border-top-width"])+kt(t["border-bottom-width"])+kt(t["padding-top"])+kt(t["padding-bottom"])+kt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},gl=function(r){pn(e,r);function e(t,n){Ot(this,e);var i=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function l(){s.setValue(!s.__prev)}return B.bind(i.__checkbox,"change",l,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Ft(e,[{key:"setValue",value:function(n){var i=fn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),fn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(kn),_m=function(r){pn(e,r);function e(t,n,i){Ot(this,e);var s=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=i,a=s;if(s.__select=document.createElement("select"),K.isArray(l)){var c={};K.each(l,function(u){c[u]=u}),l=c}return K.each(l,function(u,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",u),a.__select.appendChild(d)}),s.updateDisplay(),B.bind(s.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),s.domElement.appendChild(s.__select),s}return Ft(e,[{key:"setValue",value:function(n){var i=fn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return B.isActive(this.__select)?this:(this.__select.value=this.getValue(),fn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(kn),vm=function(r){pn(e,r);function e(t,n){Ot(this,e);var i=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function l(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),B.bind(i.__input,"keyup",l),B.bind(i.__input,"change",l),B.bind(i.__input,"blur",a),B.bind(i.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Ft(e,[{key:"updateDisplay",value:function(){return B.isActive(this.__input)||(this.__input.value=this.getValue()),fn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(kn);function Aa(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var _l=function(r){pn(e,r);function e(t,n,i){Ot(this,e);var s=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=i||{};return s.__min=l.min,s.__max=l.max,s.__step=l.step,K.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Aa(s.__impliedStep),s}return Ft(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),fn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Aa(n),this}}]),e}(kn);function xm(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Mr=function(r){pn(e,r);function e(t,n,i){Ot(this,e);var s=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var l=s,a=void 0;function c(){var v=parseFloat(l.__input.value);K.isNaN(v)||l.setValue(v)}function u(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(){u()}function d(v){var m=a-v.clientY;l.setValue(l.getValue()+m*l.__impliedStep),a=v.clientY}function f(){B.unbind(window,"mousemove",d),B.unbind(window,"mouseup",f),u()}function g(v){B.bind(window,"mousemove",d),B.bind(window,"mouseup",f),a=v.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),B.bind(s.__input,"change",c),B.bind(s.__input,"blur",h),B.bind(s.__input,"mousedown",g),B.bind(s.__input,"keydown",function(v){v.keyCode===13&&(l.__truncationSuspended=!0,this.blur(),l.__truncationSuspended=!1,u())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ft(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():xm(this.getValue(),this.__precision),fn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(_l);function Ca(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var Rs=function(r){pn(e,r);function e(t,n,i,s,l){Ot(this,e);var a=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:l})),c=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),B.bind(a.__background,"mousedown",u),B.bind(a.__background,"touchstart",f),B.addClass(a.__background,"slider"),B.addClass(a.__foreground,"slider-fg");function u(m){document.activeElement.blur(),B.bind(window,"mousemove",h),B.bind(window,"mouseup",d),h(m)}function h(m){m.preventDefault();var p=c.__background.getBoundingClientRect();return c.setValue(Ca(m.clientX,p.left,p.right,c.__min,c.__max)),!1}function d(){B.unbind(window,"mousemove",h),B.unbind(window,"mouseup",d),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function f(m){m.touches.length===1&&(B.bind(window,"touchmove",g),B.bind(window,"touchend",v),g(m))}function g(m){var p=m.touches[0].clientX,_=c.__background.getBoundingClientRect();c.setValue(Ca(p,_.left,_.right,c.__min,c.__max))}function v(){B.unbind(window,"touchmove",g),B.unbind(window,"touchend",v),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Ft(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",fn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(_l),vl=function(r){pn(e,r);function e(t,n,i){Ot(this,e);var s=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,B.bind(s.__button,"click",function(a){return a.preventDefault(),l.fire(),!1}),B.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Ft(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(kn),Ds=function(r){pn(e,r);function e(t,n){Ot(this,e);var i=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new nt(i.getValue()),i.__temp=new nt(0);var s=i;i.domElement=document.createElement("div"),B.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",B.bind(i.__input,"keydown",function(m){m.keyCode===13&&d.call(this)}),B.bind(i.__input,"blur",d),B.bind(i.__selector,"mousedown",function(){B.addClass(this,"drag").bind(window,"mouseup",function(){B.removeClass(s.__selector,"drag")})}),B.bind(i.__selector,"touchstart",function(){B.addClass(this,"drag").bind(window,"touchend",function(){B.removeClass(s.__selector,"drag")})});var l=document.createElement("div");K.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),K.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),K.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),K.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),K.extend(l.style,{width:"100%",height:"100%",background:"none"}),La(l,"top","rgba(0,0,0,0)","#000"),K.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ym(i.__hue_field),K.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),B.bind(i.__saturation_field,"mousedown",a),B.bind(i.__saturation_field,"touchstart",a),B.bind(i.__field_knob,"mousedown",a),B.bind(i.__field_knob,"touchstart",a),B.bind(i.__hue_field,"mousedown",c),B.bind(i.__hue_field,"touchstart",c);function a(m){g(m),B.bind(window,"mousemove",g),B.bind(window,"touchmove",g),B.bind(window,"mouseup",u),B.bind(window,"touchend",u)}function c(m){v(m),B.bind(window,"mousemove",v),B.bind(window,"touchmove",v),B.bind(window,"mouseup",h),B.bind(window,"touchend",h)}function u(){B.unbind(window,"mousemove",g),B.unbind(window,"touchmove",g),B.unbind(window,"mouseup",u),B.unbind(window,"touchend",u),f()}function h(){B.unbind(window,"mousemove",v),B.unbind(window,"touchmove",v),B.unbind(window,"mouseup",h),B.unbind(window,"touchend",h),f()}function d(){var m=Ls(this.value);m!==!1?(s.__color.__state=m,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function f(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(l),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function g(m){m.type.indexOf("touch")===-1&&m.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),_=m.touches&&m.touches[0]||m,o=_.clientX,y=_.clientY,b=(o-p.left)/(p.right-p.left),x=1-(y-p.top)/(p.bottom-p.top);return x>1?x=1:x<0&&(x=0),b>1?b=1:b<0&&(b=0),s.__color.v=x,s.__color.s=b,s.setValue(s.__color.toOriginal()),!1}function v(m){m.type.indexOf("touch")===-1&&m.preventDefault();var p=s.__hue_field.getBoundingClientRect(),_=m.touches&&m.touches[0]||m,o=_.clientY,y=1-(o-p.top)/(p.bottom-p.top);return y>1?y=1:y<0&&(y=0),s.__color.h=y*360,s.setValue(s.__color.toOriginal()),!1}return i}return Ft(e,[{key:"updateDisplay",value:function(){var n=Ls(this.getValue());if(n!==!1){var i=!1;K.each(nt.COMPONENTS,function(a){if(!K.isUndefined(n[a])&&!K.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&K.extend(this.__color.__state,n)}K.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,l=255-s;K.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,La(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),K.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+l+","+l+","+l+",.7)"})}}]),e}(kn),bm=["-moz-","-o-","-webkit-","-ms-",""];function La(r,e,t,n){r.style.background="",K.each(bm,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function ym(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Mm={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},Sm=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,wm=function(e,t){var n=e[t];return K.isArray(arguments[2])||K.isObject(arguments[2])?new _m(e,t,arguments[2]):K.isNumber(n)?K.isNumber(arguments[2])&&K.isNumber(arguments[3])?K.isNumber(arguments[4])?new Rs(e,t,arguments[2],arguments[3],arguments[4]):new Rs(e,t,arguments[2],arguments[3]):K.isNumber(arguments[4])?new Mr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Mr(e,t,{min:arguments[2],max:arguments[3]}):K.isString(n)?new vm(e,t):K.isFunction(n)?new vl(e,t,""):K.isBoolean(n)?new gl(e,t):null};function Em(r){setTimeout(r,1e3/60)}var Tm=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Em,Am=function(){function r(){Ot(this,r),this.backgroundElement=document.createElement("div"),K.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),B.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),K.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;B.bind(this.backgroundElement,"click",function(){e.hide()})}return Ft(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),K.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",B.unbind(t.domElement,"webkitTransitionEnd",i),B.unbind(t.domElement,"transitionend",i),B.unbind(t.domElement,"oTransitionEnd",i)};B.bind(this.domElement,"webkitTransitionEnd",n),B.bind(this.domElement,"transitionend",n),B.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-B.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-B.getHeight(this.domElement)/2+"px"}}]),r}(),Cm=hm(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Mm.inject(Cm);var Ra="dg",Da=72,Pa=20,Ni="Default",Ri=function(){try{return!!window.localStorage}catch{return!1}}(),Di=void 0,Ia=!0,ri=void 0,xs=!1,xl=[],ze=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),B.addClass(this.domElement,Ra),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=K.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=K.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),K.isUndefined(n.load)?n.load={preset:Ni}:n.preset&&(n.load.preset=n.preset),K.isUndefined(n.parent)&&n.hideable&&xl.push(this),n.resizable=K.isUndefined(n.parent)&&n.resizable,n.autoPlace&&K.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Ri&&localStorage.getItem(si(this,"isLocal"))==="true",s=void 0,l=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,Pm(this),t.revert()}},width:{get:function(){return n.width},set:function(f){n.width=f,Os(t,f)}},name:{get:function(){return n.name},set:function(f){n.name=f,l&&(l.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(f){n.closed=f,n.closed?B.addClass(t.__ul,r.CLASS_CLOSED):B.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(f){Ri&&(i=f,f?B.bind(window,"unload",s):B.unbind(window,"unload",s),localStorage.setItem(si(t,"isLocal"),f))}}}),K.isUndefined(n.parent)){if(this.closed=n.closed||!1,B.addClass(this.domElement,r.CLASS_MAIN),B.makeSelectable(this.domElement,!1),Ri&&i){t.useLocalStorage=!0;var a=localStorage.getItem(si(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,B.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(B.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(B.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),B.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);B.addClass(c,"controller-name"),l=Ws(t,c);var u=function(f){return f.preventDefault(),t.closed=!t.closed,!1};B.addClass(this.__ul,r.CLASS_CLOSED),B.addClass(l,"title"),B.bind(l,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(K.isUndefined(n.parent)&&(Ia&&(ri=document.createElement("div"),B.addClass(ri,Ra),B.addClass(ri,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ri),Ia=!1),ri.appendChild(this.domElement),B.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Os(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},B.bind(window,"resize",this.__resizeHandler),B.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),B.bind(this.__ul,"transitionend",this.__resizeHandler),B.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Dm(this),s=function(){Ri&&localStorage.getItem(si(t,"isLocal"))==="true"&&localStorage.setItem(si(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function h(){var d=t.getRoot();d.width+=1,K.defer(function(){d.width-=1})}n.parent||h()};ze.toggleHide=function(){xs=!xs,K.each(xl,function(r){r.domElement.style.display=xs?"none":""})};ze.CLASS_AUTO_PLACE="a";ze.CLASS_AUTO_PLACE_CONTAINER="ac";ze.CLASS_MAIN="main";ze.CLASS_CONTROLLER_ROW="cr";ze.CLASS_TOO_TALL="taller-than-window";ze.CLASS_CLOSED="closed";ze.CLASS_CLOSE_BUTTON="close-button";ze.CLASS_CLOSE_TOP="close-top";ze.CLASS_CLOSE_BOTTOM="close-bottom";ze.CLASS_DRAG="drag";ze.DEFAULT_WIDTH=245;ze.TEXT_CLOSED="Close Controls";ze.TEXT_OPEN="Open Controls";ze._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Da||r.keyCode===Da)&&ze.toggleHide()};B.bind(window,"keydown",ze._keydownHandler,!1);K.extend(ze.prototype,{add:function(e,t){return Pi(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Pi(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;K.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ri.removeChild(this.domElement);var e=this;K.each(this.__folders,function(t){e.removeFolder(t)}),B.unbind(window,"keydown",ze._keydownHandler,!1),Oa(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new ze(t);this.__folders[e]=n;var i=Ws(this,n.domElement);return B.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Oa(e);var t=this;K.each(e.__folders,function(n){e.removeFolder(n)}),K.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=B.getOffset(e.__ul).top,n=0;K.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=B.getHeight(i))}),window.innerHeight-t-Pa<n?(B.addClass(e.domElement,ze.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Pa+"px"):(B.removeClass(e.domElement,ze.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&K.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:K.debounce(function(){this.onResize()},50),remember:function(){if(K.isUndefined(Di)&&(Di=new Am,Di.domElement.innerHTML=Sm),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;K.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Rm(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Os(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=_r(this)),e.folders={},K.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=_r(this),Ps(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ni]=_r(this,!0)),this.load.remembered[e]=_r(this),this.preset=e,Is(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){K.each(this.__controllers,function(t){this.getRoot().load.remembered?bl(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),K.each(this.__folders,function(t){t.revert(t)}),e||Ps(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&yl(this.__listening)},updateDisplay:function(){K.each(this.__controllers,function(e){e.updateDisplay()}),K.each(this.__folders,function(e){e.updateDisplay()})}});function Ws(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function Oa(r){B.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&B.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function Ps(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Lm(r,e,t){if(t.__li=e,t.__gui=r,K.extend(t,{options:function(l){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Pi(r,t.object,t.property,{before:a,factoryArgs:[K.toArray(arguments)]})}if(K.isArray(l)||K.isObject(l)){var c=t.__li.nextElementSibling;return t.remove(),Pi(r,t.object,t.property,{before:c,factoryArgs:[l]})}},name:function(l){return t.__li.firstElementChild.firstElementChild.innerHTML=l,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Rs){var n=new Mr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});K.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var l=t[s],a=n[s];t[s]=n[s]=function(){var c=Array.prototype.slice.call(arguments);return a.apply(n,c),l.apply(t,c)}}),B.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Mr){var i=function(l){if(K.isNumber(t.__min)&&K.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=Pi(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),c&&u.listen(),u}return l};t.min=K.compose(i,t.min),t.max=K.compose(i,t.max)}else t instanceof gl?(B.bind(e,"click",function(){B.fakeEvent(t.__checkbox,"click")}),B.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof vl?(B.bind(e,"click",function(){B.fakeEvent(t.__button,"click")}),B.bind(e,"mouseover",function(){B.addClass(t.__button,"hover")}),B.bind(e,"mouseout",function(){B.removeClass(t.__button,"hover")})):t instanceof Ds&&(B.addClass(e,"color"),t.updateDisplay=K.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=K.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&Ps(r.getRoot(),!0),s},t.setValue)}function bl(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,l=void 0;if(s[r.preset])l=s[r.preset];else if(s[Ni])l=s[Ni];else return;if(l[n]&&l[n][e.property]!==void 0){var a=l[n][e.property];e.initialValue=a,e.setValue(a)}}}}function Pi(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Ds(e,t);else{var s=[e,t].concat(n.factoryArgs);i=wm.apply(r,s)}n.before instanceof kn&&(n.before=n.before.__li),bl(r,i),B.addClass(i.domElement,"c");var l=document.createElement("span");B.addClass(l,"property-name"),l.innerHTML=i.property;var a=document.createElement("div");a.appendChild(l),a.appendChild(i.domElement);var c=Ws(r,a,n.before);return B.addClass(c,ze.CLASS_CONTROLLER_ROW),i instanceof Ds?B.addClass(c,"color"):B.addClass(c,pm(i.getValue())),Lm(r,c,i),r.__controllers.push(i),i}function si(r,e){return document.location.href+"."+e}function Is(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Fa(r,e){e.style.display=r.useLocalStorage?"block":"none"}function Rm(r){var e=r.__save_row=document.createElement("li");B.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),B.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",B.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",B.addClass(n,"button"),B.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",B.addClass(i,"button"),B.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",B.addClass(s,"button"),B.addClass(s,"revert");var l=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?K.each(r.load.remembered,function(d,f){Is(r,f,f===r.preset)}):Is(r,Ni,!1),B.bind(l,"change",function(){for(var d=0;d<r.__preset_select.length;d++)r.__preset_select[d].innerHTML=r.__preset_select[d].value;r.preset=this.value}),e.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Ri){var a=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(si(r,"isLocal"))==="true"&&c.setAttribute("checked","checked"),Fa(r,a),B.bind(c,"change",function(){r.useLocalStorage=!r.useLocalStorage,Fa(r,a)})}var h=document.getElementById("dg-new-constructor");B.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Di.hide()}),B.bind(t,"click",function(){h.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Di.show(),h.focus(),h.select()}),B.bind(n,"click",function(){r.save()}),B.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&r.saveAs(d)}),B.bind(s,"click",function(){r.revert()})}function Dm(r){var e=void 0;r.__resize_handle=document.createElement("div"),K.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){B.removeClass(r.__closeButton,ze.CLASS_DRAG),B.unbind(window,"mousemove",t),B.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,B.addClass(r.__closeButton,ze.CLASS_DRAG),B.bind(window,"mousemove",t),B.bind(window,"mouseup",n),!1}B.bind(r.__resize_handle,"mousedown",i),B.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Os(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function _r(r,e){var t={};return K.each(r.__rememberedObjects,function(n,i){var s={},l=r.__rememberedObjectIndecesToControllers[i];K.each(l,function(a,c){s[c]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function Pm(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function yl(r){r.length!==0&&Tm.call(window,function(){yl(r)}),K.each(r,function(e){e.updateDisplay()})}var Im=ze;const lt=new Im({autoPlace:!0,width:300});let li=0,Ii=!1,Sr=1,Ml=60;const bs=[1,50,100,1e3,1e4];let Jt,Fs,hn,Cr;const Om=100,Qt={AMR:1,k:0,dampingRatio:0,reflectivity:.993,dt:5*60,d:1,nCols:20,integrator:"rk4",lightForce:!0,selfShadowing:!1,selfCollision:!1},gn={applyGravity:!0,applySRP:!0,applyShadow:!0,useSoftBody:!0,simulationDays:1,simulationYears:0,integrator:"euler"};lt.add(Qt,"AMR",1,100).name("Area to mass ratio");lt.add(Qt,"nCols",1,100).name("nCols");lt.add(Qt,"k").name("k");lt.add(Qt,"dampingRatio").name("damping values");lt.add(Qt,"dt").name("Time step size (s)");lt.add(gn,"simulationDays",0,365).step(1).name("Number of days in simulation");lt.add(gn,"simulationYears",0,100).step(1).name("Number of years in simulation");lt.add(Qt,"lightForce").name("Apply light force?");lt.add(Qt,"selfShadowing").name("Use self-shadowing?");lt.add(gn,"applyGravity").name("Apply gravity?");lt.add(gn,"applySRP").name("Apply solar radiation pressure?");lt.add(gn,"applyShadow").name("Apply Earth shadow?");lt.add(gn,"useSoftBody").name("Use soft body model?");lt.add(gn,"integrator",["rk4","euler"]).name("Orbit integrator");lt.add(Qt,"integrator",["rk4","euler"]).name("Soft body integrator");const Ns=document.getElementById("three_canvas");var Lr=new ol({canvas:Ns});Lr.setSize(window.innerWidth,window.innerHeight*.9);const en=new Ap,Rr=new vt(75,Ns.width/Ns.height,.1,1e3);Rr.up=new P(0,0,1);const Fm=new Bp(Rr,Lr.domElement),Nm=new Up(.3);en.add(Nm);Rr.position.set(0,0,1).setLength(1);Fm.update();const km=new zp(16777215,.2);en.add(km);const Sl=()=>{const r=li*hn;let e=Jt[r+0],t=Jt[r+1],n=Jt[r+2];e*=At,t*=At,n*=At,vi.position.set(e,t,n);const i=new xt(new _i(.001),new Bi({color:16777215}));i.position.set(e,t,n),en.add(i)},Hi=document.getElementById("timestepSlider");Hi.min="0";Hi.value="0";Hi.oninput=r=>{let e=r.target;li=parseInt(e.value),Sl(),Ii=!1,br.innerText=">"};const br=document.getElementById("playButton");br.onclick=()=>{Ii=!Ii,Ii?br.innerText="||":br.innerText=">"};const Xs=document.getElementById("playbackSpeedDropdown");Xs.value=Sr.toString();Xs.onchange=r=>{let e=r.target;Sr=parseInt(e.value),clearInterval(Na),Na=window.setInterval(wl,1/Ml*1e3)};for(let r=0;r<bs.length;r++){const e=document.createElement("option");e.value=bs[r].toString(),e.innerHTML=bs[r].toString(),Xs.appendChild(e)}const wl=()=>{Ii&&li+Sr<Cr&&(li+=Sr,Sl(),Hi.value=li.toString(),Gm.innerHTML=`Time step index = ${li}`,Vm.innerHTML="Time from start of sim (s) = 0")},zm=document.getElementById("simulateButton");zm.onclick=()=>{console.log("sim started");const r=lm($m,Km,Qt,gn,Om);Jt=r.satOrbitData,Fs=r.satOrbitDataFields,hn=Fs.length,Cr=Jt.length/hn,Hi.max=(Jt.length/hn).toString(),console.log("sim finished")};const Um=document.getElementById("saveSimButton");Um.onclick=()=>{if(Jt==null){console.log("no simulation data yet!");return}const r=window.prompt("What do you want to name the file");if(r==null)return;let e="";for(let n=0;n<hn;n++)e+=Fs[n]+",";e+=`
`;for(let n=0;n<Cr;n++){const i=n*hn;for(let s=0;s<hn;s++)e+=`${Jt[i+s]},`}e=e.slice(0,-1),console.log("downloading data...");const t="sat_"+r+".txt";dm(t,e)};const Bm=document.getElementById("clearSimDataButton");Bm.onclick=()=>{window.confirm("Are you sure you want to clear the sim data?")&&(Jt=null,hn=null,Cr=null)};const Gm=document.getElementById("timeStepDisplay"),Vm=document.getElementById("timeDisplay");let Na=window.setInterval(wl,1/Ml*1e3);const Dr=6371*1e3,At=1e-8,Hm=new cl().load(cm),Wm=new cl().load(um),ka=20,Pr=new xt(new _i(Dr*At),new Dp({shininess:50,map:Hm,normalMap:Wm,normalScale:new Te(ka,ka),side:wt}));Pr.rotateX(Math.PI/2);Pr.castShadow=!0;Pr.receiveShadow=!0;en.add(Pr);const za=Dr*At*1,vi=new xt(new Vi(za,za,1,1),new Rp({color:16777215,side:wt}));vi.castShadow=!0;vi.receiveShadow=!0;vi.rotateY(Math.PI/2);en.add(vi);const El=Dr*At*10,Wi=new xt(new _i(El),new Bi({color:16711680,side:wt}));Wi.position.x+=Dr*At*50;en.add(Wi);const Xm=1737.4*1e3,Tl=new xt(new _i(Xm*At),new Bi({color:16777215,side:wt}));en.add(Tl);const Xi=new kp(16777215,1,El*50);Xi.position.x=Wi.position.x;Xi.position.y=Wi.position.y;Xi.position.z=Wi.position.z;Xi.castShadow=!0;en.add(Xi);const qm=86400,jm=5.972*Math.pow(10,24),Ym=6.6732*Math.pow(10,-11),{orbitRadius:qs,orbitVelocity:Zm}=Gp(qm,jm,Ym);console.log(qs);vi.position.set(qs*At,0*At,0*At);const $m=[qs,0,0],Km=[0,Zm,0],Jm=384400*1e3;Tl.position.z=Jm*At;const Qm=async()=>{Lr.render(en,Rr)};Lr.setAnimationLoop(Qm);
