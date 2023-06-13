(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="153",gp=0,Pu=1,_p=2,cf=1,xp=2,Jn=3,gi=0,tn=1,Qn=2,mi=0,Ir=1,Uu=2,Du=3,Iu=4,yp=5,Ur=100,Mp=101,Ep=102,Fu=103,Nu=104,bp=200,Sp=201,wp=202,Tp=203,lf=204,uf=205,Ap=206,Rp=207,Lp=208,Cp=209,Pp=210,Up=0,Dp=1,Ip=2,ol=3,Fp=4,Np=5,Op=6,Bp=7,hf=0,zp=1,Gp=2,ni=0,Hp=1,Vp=2,kp=3,Wp=4,Xp=5,ff=300,Or=301,Br=302,cl=303,ll=304,uc=306,ul=1e3,Un=1001,hl=1002,$t=1003,Ou=1004,Ac=1005,Mn=1006,Yp=1007,$a=1008,vi=1009,qp=1010,jp=1011,Wl=1012,df=1013,di=1014,pi=1015,Za=1016,pf=1017,mf=1018,Di=1020,$p=1021,Dn=1023,Zp=1024,Kp=1025,Ii=1026,zr=1027,Jp=1028,vf=1029,Qp=1030,gf=1031,_f=1033,Rc=33776,Lc=33777,Cc=33778,Pc=33779,Bu=35840,zu=35841,Gu=35842,Hu=35843,em=36196,Vu=37492,ku=37496,Wu=37808,Xu=37809,Yu=37810,qu=37811,ju=37812,$u=37813,Zu=37814,Ku=37815,Ju=37816,Qu=37817,eh=37818,th=37819,nh=37820,ih=37821,Uc=36492,tm=36283,rh=36284,ah=36285,sh=36286,xf=3e3,Fi=3001,nm=3200,im=3201,yf=0,rm=1,Ni="",it="srgb",zn="srgb-linear",Mf="display-p3",Dc=7680,am=519,sm=512,om=513,cm=514,lm=515,um=516,hm=517,fm=518,dm=519,oh=35044,ch="300 es",fl=1035,ei=2e3,Uo=2001;let Aa=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,t);t.target=null}}};const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const Xa=Math.PI/180,Ka=180/Math.PI;function Ra(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[e&255]+Ht[e>>8&255]+Ht[e>>16&255]+Ht[e>>24&255]+"-"+Ht[t&255]+Ht[t>>8&255]+"-"+Ht[t>>16&15|64]+Ht[t>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Zt(e,t,n){return Math.max(t,Math.min(n,e))}function Xl(e,t){return(e%t+t)%t}function pm(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}function mm(e,t,n){return e!==t?(n-e)/(t-e):0}function Ya(e,t,n){return(1-n)*e+n*t}function vm(e,t,n,i){return Ya(e,t,1-Math.exp(-n*i))}function gm(e,t=1){return t-Math.abs(Xl(e,t*2)-t)}function _m(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function xm(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ym(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Mm(e,t){return e+Math.random()*(t-e)}function Em(e){return e*(.5-Math.random())}function bm(e){e!==void 0&&(lh=e);let t=lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sm(e){return e*Xa}function wm(e){return e*Ka}function dl(e){return(e&e-1)===0&&e!==0}function Tm(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Do(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Am(e,t,n,i,r){const a=Math.cos,s=Math.sin,o=a(n/2),l=s(n/2),c=a((t+i)/2),u=s((t+i)/2),h=a((t-i)/2),f=s((t-i)/2),p=a((i-t)/2),v=s((i-t)/2);switch(r){case"XYX":e.set(o*u,l*h,l*f,o*c);break;case"YZY":e.set(l*f,o*u,l*h,o*c);break;case"ZXZ":e.set(l*h,l*f,o*u,o*c);break;case"XZX":e.set(o*u,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*u,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Va(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Qt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Rm={DEG2RAD:Xa,RAD2DEG:Ka,generateUUID:Ra,clamp:Zt,euclideanModulo:Xl,mapLinear:pm,inverseLerp:mm,lerp:Ya,damp:vm,pingpong:gm,smoothstep:_m,smootherstep:xm,randInt:ym,randFloat:Mm,randFloatSpread:Em,seededRandom:bm,degToRad:Sm,radToDeg:wm,isPowerOfTwo:dl,ceilPowerOfTwo:Tm,floorPowerOfTwo:Do,setQuaternionFromProperEuler:Am,normalize:Qt,denormalize:Va};let ft=class Ef{constructor(t=0,n=0){Ef.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-t.x,s=this.y-t.y;return this.x=a*i-s*r+t.x,this.y=a*r+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class bf{constructor(t,n,i,r,a,s,o,l,c){bf.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,a,s,o,l,c)}set(t,n,i,r,a,s,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],g=r[0],m=r[3],d=r[6],x=r[1],_=r[4],y=r[7],M=r[2],S=r[5],T=r[8];return a[0]=s*g+o*x+l*M,a[3]=s*m+o*_+l*S,a[6]=s*d+o*y+l*T,a[1]=c*g+u*x+h*M,a[4]=c*m+u*_+h*S,a[7]=c*d+u*y+h*T,a[2]=f*g+p*x+v*M,a[5]=f*m+p*_+v*S,a[8]=f*d+p*y+v*T,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*s*u-n*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*s-o*c,f=o*l-u*a,p=c*a-s*l,v=n*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=h*g,t[1]=(r*c-u*i)*g,t[2]=(o*i-r*s)*g,t[3]=f*g,t[4]=(u*n-r*l)*g,t[5]=(r*a-o*n)*g,t[6]=p*g,t[7]=(i*l-c*n)*g,t[8]=(s*n-i*a)*g,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Ic.makeScale(t,n)),this}rotate(t){return this.premultiply(Ic.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ic.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Ic=new ot;function Sf(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ja(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}const uh={};function qa(e){e in uh||(uh[e]=!0,console.warn(e))}function Fr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Fc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const Lm=new ot().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Cm=new ot().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Pm(e){return e.convertSRGBToLinear().applyMatrix3(Cm)}function Um(e){return e.applyMatrix3(Lm).convertLinearToSRGB()}const Dm={[zn]:e=>e,[it]:e=>e.convertSRGBToLinear(),[Mf]:Pm},Im={[zn]:e=>e,[it]:e=>e.convertLinearToSRGB(),[Mf]:Um},An={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(e){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!e},get workingColorSpace(){return zn},set workingColorSpace(e){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Dm[t],r=Im[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${n}".`);return r(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)}};let vr,wf=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vr===void 0&&(vr=Ja("canvas")),vr.width=t.width,vr.height=t.height;const i=vr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ja("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Fr(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fr(n[i]/255)*255):n[i]=Fr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fm=0;class Tf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Ra(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Nc(r[s].image)):a.push(Nc(r[s]))}else a=Nc(r);i.url=a}return n||(t.images[this.uuid]=i),i}}function Nc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?wf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nm=0,Wn=class Ao extends Aa{constructor(t=Ao.DEFAULT_IMAGE,n=Ao.DEFAULT_MAPPING,i=Un,r=Un,a=Mn,s=$a,o=Dn,l=vi,c=Ao.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ra(),this.name="",this.source=new Tf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fi?it:Ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ul:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ul:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?Fi:xf}set encoding(t){qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fi?it:Ni}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=ff;Wn.DEFAULT_ANISOTROPY=1;let wt=class Af{constructor(t=0,n=0,i=0,r=1){Af.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,a=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,a;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,M=(d+1)/2,S=(u+f)/4,T=(h+g)/4,L=(v+m)/4;return _>y&&_>M?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=S/i,a=T/i):y>M?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=S/r,a=L/r):M<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(M),i=T/a,r=L/a),this.set(i,r,a,n),this}let x=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(h-g)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hi=class extends Aa{constructor(t=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new wt(0,0,t,n),this.scissorTest=!1,this.viewport=new wt(0,0,t,n);const r={width:t,height:n,depth:1};i.encoding!==void 0&&(qa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fi?it:Ni),this.texture=new Wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Tf(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};class Rf extends Wn{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Om extends Wn{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ws=class{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=a[s+0],p=a[s+1],v=a[s+2],g=a[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=v,t[n+3]=g;return}if(h!==g||l!==f||c!==p||u!==v){let m=1-o;const d=l*f+c*p+u*v+h*g,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const M=Math.sqrt(_),S=Math.atan2(M,d*x);m=Math.sin(m*S)/M,o=Math.sin(o*S)/M}const y=o*x;if(l=l*m+f*y,c=c*m+p*y,u=u*m+v*y,h=h*m+g*y,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=a[s],f=a[s+1],p=a[s+2],v=a[s+3];return t[n]=o*v+u*h+l*p-c*f,t[n+1]=l*v+u*f+c*h-o*p,t[n+2]=c*v+u*p+o*f-l*h,t[n+3]=u*v-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const i=t._x,r=t._y,a=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(a/2),f=l(i/2),p=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,a=t._z,s=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*t._w+i*t._x+r*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ee=class Lf{constructor(t=0,n=0,i=0){Lf.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(hh.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,a=t.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,a=t.x,s=t.y,o=t.z,l=t.w,c=l*n+s*r-o*i,u=l*i+o*n-a*r,h=l*r+a*i-s*n,f=-a*n-s*i-o*r;return this.x=c*l+f*-a+u*-o-h*-s,this.y=u*l+f*-s+h*-a-c*-o,this.z=h*l+f*-o+c*-s-u*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,a=t.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Oc.copy(this).projectOnVector(t),this.sub(Oc)}reflect(t){return this.sub(Oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Oc=new ee,hh=new Ws;let Xs=class{constructor(t=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(qn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox),gr.applyMatrix4(t.matrixWorld),this.union(gr);else{const r=t.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let s=0,o=a.count;s<o;s++)qn.fromBufferAttribute(a,s).applyMatrix4(t.matrixWorld),this.expandByPoint(qn)}else r.boundingBox===null&&r.computeBoundingBox(),gr.copy(r.boundingBox),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oa),io.subVectors(this.max,Oa),_r.subVectors(t.a,Oa),xr.subVectors(t.b,Oa),yr.subVectors(t.c,Oa),li.subVectors(xr,_r),ui.subVectors(yr,xr),Si.subVectors(_r,yr);let n=[0,-li.z,li.y,0,-ui.z,ui.y,0,-Si.z,Si.y,li.z,0,-li.x,ui.z,0,-ui.x,Si.z,0,-Si.x,-li.y,li.x,0,-ui.y,ui.x,0,-Si.y,Si.x,0];return!Bc(n,_r,xr,yr,io)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,_r,xr,yr,io))?!1:(ro.crossVectors(li,ui),n=[ro.x,ro.y,ro.z],Bc(n,_r,xr,yr,io))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};const Yn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],qn=new ee,gr=new Xs,_r=new ee,xr=new ee,yr=new ee,li=new ee,ui=new ee,Si=new ee,Oa=new ee,io=new ee,ro=new ee,wi=new ee;function Bc(e,t,n,i,r){for(let a=0,s=e.length-3;a<=s;a+=3){wi.fromArray(e,a);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=t.dot(wi),c=n.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bm=new Xs,Ba=new ee,zc=new ee;let Yl=class{constructor(t=new ee,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Bm.setFromPoints(t).getCenter(i);let r=0;for(let a=0,s=t.length;a<s;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ba.subVectors(t,this.center);const n=Ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ba,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ba.copy(t.center).add(zc)),this.expandByPoint(Ba.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const jn=new ee,Gc=new ee,ao=new ee,hi=new ee,Hc=new ee,so=new ee,Vc=new ee;let zm=class{constructor(t=new ee,n=new ee(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=jn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Gc.copy(t).add(n).multiplyScalar(.5),ao.copy(n).sub(t).normalize(),hi.copy(this.origin).sub(Gc);const a=t.distanceTo(n)*.5,s=-this.direction.dot(ao),o=hi.dot(this.direction),l=-hi.dot(ao),c=hi.lengthSq(),u=Math.abs(1-s*s);let h,f,p,v;if(u>0)if(h=s*l-o,f=s*o-l,v=a*u,h>=0)if(f>=-v)if(f<=v){const g=1/u;h*=g,f*=g,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-s*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(h=Math.max(0,-(s*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+c);else f=s>0?-a:a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gc).addScaledVector(ao,f),p}intersectSphere(t,n){jn.subVectors(t.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,a=t.radius*t.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(a=(t.min.y-f.y)*u,s=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,s=(t.min.y-f.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,n,i,r,a){Hc.subVectors(n,t),so.subVectors(i,t),Vc.crossVectors(Hc,so);let s=this.direction.dot(Vc),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;hi.subVectors(this.origin,t);const l=o*this.direction.dot(so.crossVectors(hi,so));if(l<0)return null;const c=o*this.direction.dot(Hc.cross(hi));if(c<0||l+c>s)return null;const u=-o*hi.dot(Vc);return u<0?null:this.at(u/s,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class pl{constructor(t,n,i,r,a,s,o,l,c,u,h,f,p,v,g,m){pl.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,a,s,o,l,c,u,h,f,p,v,g,m)}set(t,n,i,r,a,s,o,l,c,u,h,f,p,v,g,m){const d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pl().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Mr.setFromMatrixColumn(t,0).length(),a=1/Mr.setFromMatrixColumn(t,1).length(),s=1/Mr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,a=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const f=s*u,p=s*h,v=o*u,g=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=f-g*c,n[9]=-o*l,n[2]=g-f*c,n[6]=v+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,v=c*u,g=c*h;n[0]=f+g*o,n[4]=v*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*u,n[9]=-o,n[2]=p*o-v,n[6]=g+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,v=c*u,g=c*h;n[0]=f-g*o,n[4]=-s*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=s*u,n[9]=g-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*u,p=s*h,v=o*u,g=o*h;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+g,n[1]=l*h,n[5]=g*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,v=o*l,g=o*c;n[0]=l*u,n[4]=g-f*h,n[8]=v*h+p,n[1]=h,n[5]=s*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+v,n[10]=f-g*h}else if(t.order==="XZY"){const f=s*l,p=s*c,v=o*l,g=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+g,n[5]=s*u,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*u,n[10]=g*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gm,t,Hm)}lookAt(t,n,i){const r=this.elements;return ln.subVectors(t,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),fi.crossVectors(i,ln),fi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),fi.crossVectors(i,ln)),fi.normalize(),oo.crossVectors(ln,fi),r[0]=fi.x,r[4]=oo.x,r[8]=ln.x,r[1]=fi.y,r[5]=oo.y,r[9]=ln.y,r[2]=fi.z,r[6]=oo.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],g=i[6],m=i[10],d=i[14],x=i[3],_=i[7],y=i[11],M=i[15],S=r[0],T=r[4],L=r[8],E=r[12],R=r[1],k=r[5],X=r[9],w=r[13],A=r[2],D=r[6],G=r[10],z=r[14],H=r[3],Y=r[7],$=r[11],ie=r[15];return a[0]=s*S+o*R+l*A+c*H,a[4]=s*T+o*k+l*D+c*Y,a[8]=s*L+o*X+l*G+c*$,a[12]=s*E+o*w+l*z+c*ie,a[1]=u*S+h*R+f*A+p*H,a[5]=u*T+h*k+f*D+p*Y,a[9]=u*L+h*X+f*G+p*$,a[13]=u*E+h*w+f*z+p*ie,a[2]=v*S+g*R+m*A+d*H,a[6]=v*T+g*k+m*D+d*Y,a[10]=v*L+g*X+m*G+d*$,a[14]=v*E+g*w+m*z+d*ie,a[3]=x*S+_*R+y*A+M*H,a[7]=x*T+_*k+y*D+M*Y,a[11]=x*L+_*X+y*G+M*$,a[15]=x*E+_*w+y*z+M*ie,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],a=t[12],s=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],v=t[3],g=t[7],m=t[11],d=t[15];return v*(+a*l*h-r*c*h-a*o*f+i*c*f+r*o*p-i*l*p)+g*(+n*l*p-n*c*f+a*s*f-r*s*p+r*c*u-a*l*u)+m*(+n*c*h-n*o*p-a*s*h+i*s*p+a*o*u-i*c*u)+d*(-r*o*u-n*l*h+n*o*f+r*s*h-i*s*f+i*l*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],v=t[12],g=t[13],m=t[14],d=t[15],x=h*m*c-g*f*c+g*l*p-o*m*p-h*l*d+o*f*d,_=v*f*c-u*m*c-v*l*p+s*m*p+u*l*d-s*f*d,y=u*g*c-v*h*c+v*o*p-s*g*p-u*o*d+s*h*d,M=v*h*l-u*g*l-v*o*f+s*g*f+u*o*m-s*h*m,S=n*x+i*_+r*y+a*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=x*T,t[1]=(g*f*a-h*m*a-g*r*p+i*m*p+h*r*d-i*f*d)*T,t[2]=(o*m*a-g*l*a+g*r*c-i*m*c-o*r*d+i*l*d)*T,t[3]=(h*l*a-o*f*a-h*r*c+i*f*c+o*r*p-i*l*p)*T,t[4]=_*T,t[5]=(u*m*a-v*f*a+v*r*p-n*m*p-u*r*d+n*f*d)*T,t[6]=(v*l*a-s*m*a-v*r*c+n*m*c+s*r*d-n*l*d)*T,t[7]=(s*f*a-u*l*a+u*r*c-n*f*c-s*r*p+n*l*p)*T,t[8]=y*T,t[9]=(v*h*a-u*g*a-v*i*p+n*g*p+u*i*d-n*h*d)*T,t[10]=(s*g*a-v*o*a+v*i*c-n*g*c-s*i*d+n*o*d)*T,t[11]=(u*o*a-s*h*a-u*i*c+n*h*c+s*i*p-n*o*p)*T,t[12]=M*T,t[13]=(u*g*r-v*h*r+v*i*f-n*g*f-u*i*m+n*h*m)*T,t[14]=(v*o*r-s*g*r-v*i*l+n*g*l+s*i*m-n*o*m)*T,t[15]=(s*h*r-u*o*r+u*i*l-n*h*l-s*i*f+n*o*f)*T,this}scale(t){const n=this.elements,i=t.x,r=t.y,a=t.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=t.x,o=t.y,l=t.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,a,s){return this.set(1,i,a,0,t,1,s,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,u=s+s,h=o+o,f=a*c,p=a*u,v=a*h,g=s*u,m=s*h,d=o*h,x=l*c,_=l*u,y=l*h,M=i.x,S=i.y,T=i.z;return r[0]=(1-(g+d))*M,r[1]=(p+y)*M,r[2]=(v-_)*M,r[3]=0,r[4]=(p-y)*S,r[5]=(1-(f+d))*S,r[6]=(m+x)*S,r[7]=0,r[8]=(v+_)*T,r[9]=(m-x)*T,r[10]=(1-(f+g))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let a=Mr.set(r[0],r[1],r[2]).length();const s=Mr.set(r[4],r[5],r[6]).length(),o=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],Rn.copy(this);const c=1/a,u=1/s,h=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,n.setFromRotationMatrix(Rn),i.x=a,i.y=s,i.z=o,this}makePerspective(t,n,i,r,a,s,o=ei){const l=this.elements,c=2*a/(n-t),u=2*a/(i-r),h=(n+t)/(n-t),f=(i+r)/(i-r);let p,v;if(o===ei)p=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===Uo)p=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,r,a,s,o=ei){const l=this.elements,c=1/(n-t),u=1/(i-r),h=1/(s-a),f=(n+t)*c,p=(i+r)*u;let v,g;if(o===ei)v=(s+a)*h,g=-2*h;else if(o===Uo)v=a*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};const Mr=new ee,Rn=new Ot,Gm=new ee(0,0,0),Hm=new ee(1,1,1),fi=new ee,oo=new ee,ln=new ee,fh=new Ot,dh=new Ws;let Cf=class Pf{constructor(t=0,n=0,i=0,r=Pf.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fh,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cf.DEFAULT_ORDER="XYZ";let Uf=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vm=0;const ph=new ee,Er=new Ws,$n=new Ot,co=new ee,za=new ee,km=new ee,Wm=new Ws,mh=new ee(1,0,0),vh=new ee(0,1,0),gh=new ee(0,0,1),Xm={type:"added"},_h={type:"removed"};let Xn=class Ro extends Aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ro.DEFAULT_UP.clone();const t=new ee,n=new Cf,i=new Ws,r=new ee(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ot}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Ro.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ro.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Er.setFromAxisAngle(t,n),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,n){return Er.setFromAxisAngle(t,n),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(mh,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,n){return ph.copy(t).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(mh,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?co.copy(t):co.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(za,co,this.up):$n.lookAt(co,za,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Er.setFromRotationMatrix($n),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_h)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const n=this.children[t];n.parent=null,n.dispatchEvent(_h)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n){let i=[];this[t]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const s=this.children[r].getObjectsByProperty(t,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,t,km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));r.material=o}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),h=s(t.shapes),f=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}};Xn.DEFAULT_UP=new ee(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new ee,Zn=new ee,kc=new ee,Kn=new ee,br=new ee,Sr=new ee,xh=new ee,Wc=new ee,Xc=new ee,Yc=new ee;let lo=!1,uo=class Ri{constructor(t=new ee,n=new ee,i=new ee){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Ln.subVectors(t,n),r.cross(Ln);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,n,i,r,a){Ln.subVectors(r,n),Zn.subVectors(i,n),kc.subVectors(t,n);const s=Ln.dot(Ln),o=Ln.dot(Zn),l=Ln.dot(kc),c=Zn.dot(Zn),u=Zn.dot(kc),h=s*c-o*o;if(h===0)return a.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,v=(s*u-o*l)*f;return a.set(1-p-v,v,p)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(t,n,i,r,a,s,o,l){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),this.getInterpolation(t,n,i,r,a,s,o,l)}static getInterpolation(t,n,i,r,a,s,o,l){return this.getBarycoord(t,n,i,r,Kn),l.setScalar(0),l.addScaledVector(a,Kn.x),l.addScaledVector(s,Kn.y),l.addScaledVector(o,Kn.z),l}static isFrontFacing(t,n,i,r){return Ln.subVectors(i,n),Zn.subVectors(t,n),Ln.cross(Zn).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Ln.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ri.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,r,a){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),Ri.getInterpolation(t,this.a,this.b,this.c,n,i,r,a)}getInterpolation(t,n,i,r,a){return Ri.getInterpolation(t,this.a,this.b,this.c,n,i,r,a)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,a=this.c;let s,o;br.subVectors(r,i),Sr.subVectors(a,i),Wc.subVectors(t,i);const l=br.dot(Wc),c=Sr.dot(Wc);if(l<=0&&c<=0)return n.copy(i);Xc.subVectors(t,r);const u=br.dot(Xc),h=Sr.dot(Xc);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(br,s);Yc.subVectors(t,a);const p=br.dot(Yc),v=Sr.dot(Yc);if(v>=0&&p<=v)return n.copy(a);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Sr,o);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return xh.subVectors(a,r),o=(h-u)/(h-u+(p-v)),n.copy(r).addScaledVector(xh,o);const d=1/(m+g+f);return s=g*d,o=f*d,n.copy(i).addScaledVector(br,s).addScaledVector(Sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ym=0,Ys=class extends Aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=Ir,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lf,this.blendDst=uf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dc,this.stencilZFail=Dc,this.stencilZPass=Dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(t.textures),s=r(t.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ho={h:0,s:0,l:0};function qc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}let dt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=it){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,An.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=An.workingColorSpace){return this.r=t,this.g=n,this.b=i,An.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=An.workingColorSpace){if(t=Xl(t,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=qc(s,a,t+1/3),this.g=qc(s,a,t),this.b=qc(s,a,t-1/3)}return An.toWorkingColorSpace(this,r),this}setStyle(t,n=it){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=it){const i=Df[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}copyLinearToSRGB(t){return this.r=Fc(t.r),this.g=Fc(t.g),this.b=Fc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=it){return An.fromWorkingColorSpace(Vt.copy(this),t),Math.round(Zt(Vt.r*255,0,255))*65536+Math.round(Zt(Vt.g*255,0,255))*256+Math.round(Zt(Vt.b*255,0,255))}getHexString(t=it){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=An.workingColorSpace){An.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,a=Vt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=An.workingColorSpace){return An.fromWorkingColorSpace(Vt.copy(this),n),t.r=Vt.r,t.g=Vt.g,t.b=Vt.b,t}getStyle(t=it){An.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b;return t!==it?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Cn),Cn.h+=t,Cn.s+=n,Cn.l+=i,this.setHSL(Cn.h,Cn.s,Cn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Cn),t.getHSL(ho);const i=Ya(Cn.h,ho.h,n),r=Ya(Cn.s,ho.s,n),a=Ya(Cn.l,ho.l,n);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Vt=new dt;dt.NAMES=Df;let ql=class extends Ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const Lt=new ee,fo=new ft;let Bn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=oh,this.updateRange={offset:0,count:-1},this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fo.fromBufferAttribute(this,n),fo.applyMatrix3(t),this.setXY(n,fo.x,fo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(t),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(t),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(t),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(t),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(t,n=0){return this.array.set(t,n),this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Va(n,this.array)),n}setX(t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Va(n,this.array)),n}setY(t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Va(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Va(n,this.array)),n}setW(t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,a){return t*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),a=Qt(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},If=class extends Bn{constructor(t,n,i){super(new Uint16Array(t),n,i)}},Ff=class extends Bn{constructor(t,n,i){super(new Uint32Array(t),n,i)}},vn=class extends Bn{constructor(t,n,i){super(new Float32Array(t),n,i)}},qm=0;const yn=new Ot,jc=new Xn,wr=new ee,un=new Xs,Ga=new Xs,It=new ee;let ur=class Nf extends Aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sf(t)?Ff:If)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ot().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,n,i){return yn.makeTranslation(t,n,i),this.applyMatrix4(yn),this}scale(t,n,i){return yn.makeScale(t,n,i),this.applyMatrix4(yn),this}lookAt(t){return jc.lookAt(t),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new vn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];un.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(t){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(un.min,Ga.min),un.expandByPoint(It),It.addVectors(un.max,Ga.max),un.expandByPoint(It)):(un.expandByPoint(Ga.min),un.expandByPoint(Ga.max))}un.getCenter(i);let r=0;for(let a=0,s=t.count;a<s;a++)It.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(It));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(wr.fromBufferAttribute(t,c),It.add(wr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=n.position.array,a=n.normal.array,s=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new ee,u[R]=new ee;const h=new ee,f=new ee,p=new ee,v=new ft,g=new ft,m=new ft,d=new ee,x=new ee;function _(R,k,X){h.fromArray(r,R*3),f.fromArray(r,k*3),p.fromArray(r,X*3),v.fromArray(s,R*2),g.fromArray(s,k*2),m.fromArray(s,X*2),f.sub(h),p.sub(h),g.sub(v),m.sub(v);const w=1/(g.x*m.y-m.x*g.y);isFinite(w)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(w),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(w),c[R].add(d),c[k].add(d),c[X].add(d),u[R].add(x),u[k].add(x),u[X].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,k=y.length;R<k;++R){const X=y[R],w=X.start,A=X.count;for(let D=w,G=w+A;D<G;D+=3)_(i[D+0],i[D+1],i[D+2])}const M=new ee,S=new ee,T=new ee,L=new ee;function E(R){T.fromArray(a,R*3),L.copy(T);const k=c[R];M.copy(k),M.sub(T.multiplyScalar(T.dot(k))).normalize(),S.crossVectors(L,k);const w=S.dot(u[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=w}for(let R=0,k=y.length;R<k;++R){const X=y[R],w=X.start,A=X.count;for(let D=w,G=w+A;D<G;D+=3)E(i[D+0]),E(i[D+1]),E(i[D+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new ee,a=new ee,s=new ee,o=new ee,l=new ee,c=new ee,u=new ee,h=new ee;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),s.fromBufferAttribute(n,m),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)It.fromBufferAttribute(t,n),It.normalize(),t.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new Bn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nf,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=t.morphAttributes;for(const c in a){const u=[],h=a[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const yh=new Ot,Ti=new zm,po=new Yl,Mh=new ee,Tr=new ee,Ar=new ee,Rr=new ee,$c=new ee,mo=new ee,vo=new ft,go=new ft,_o=new ft,Eh=new ee,bh=new ee,Sh=new ee,xo=new ee,yo=new ee;let In=class extends Xn{constructor(t=new ur,n=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(a&&o){mo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&($c.fromBufferAttribute(h,t),s?mo.addScaledVector($c,u):mo.addScaledVector($c.sub(n),u))}n.add(mo)}return n}raycast(t,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(a),Ti.copy(t.ray).recast(t.near),!(po.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(po,Mh)===null||Ti.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(yh.copy(a).invert(),Ti.copy(t.ray).applyMatrix4(yh),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ti)))}_computeIntersections(t,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=s[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,M=_;y<M;y+=3){const S=o.getX(y),T=o.getX(y+1),L=o.getX(y+2);r=Mo(this,d,t,i,c,u,h,S,T,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const x=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);r=Mo(this,s,t,i,c,u,h,x,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=s[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,M=_;y<M;y+=3){const S=y,T=y+1,L=y+2;r=Mo(this,d,t,i,c,u,h,S,T,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const x=m,_=m+1,y=m+2;r=Mo(this,s,t,i,c,u,h,x,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function jm(e,t,n,i,r,a,s,o){let l;if(t.side===tn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,t.side===gi,o),l===null)return null;yo.copy(o),yo.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(yo);return c<n.near||c>n.far?null:{distance:c,point:yo.clone(),object:e}}function Mo(e,t,n,i,r,a,s,o,l,c){e.getVertexPosition(o,Tr),e.getVertexPosition(l,Ar),e.getVertexPosition(c,Rr);const u=jm(e,t,n,i,Tr,Ar,Rr,xo);if(u){r&&(vo.fromBufferAttribute(r,o),go.fromBufferAttribute(r,l),_o.fromBufferAttribute(r,c),u.uv=uo.getInterpolation(xo,Tr,Ar,Rr,vo,go,_o,new ft)),a&&(vo.fromBufferAttribute(a,o),go.fromBufferAttribute(a,l),_o.fromBufferAttribute(a,c),u.uv1=uo.getInterpolation(xo,Tr,Ar,Rr,vo,go,_o,new ft),u.uv2=u.uv1),s&&(Eh.fromBufferAttribute(s,o),bh.fromBufferAttribute(s,l),Sh.fromBufferAttribute(s,c),u.normal=uo.getInterpolation(xo,Tr,Ar,Rr,Eh,bh,Sh,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new ee,materialIndex:0};uo.getNormal(Tr,Ar,Rr,h.normal),u.face=h}return u}let jl=class Of extends ur{constructor(t=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,t,s,a,0),v("z","y","x",1,-1,i,n,-t,s,a,1),v("x","z","y",1,1,t,i,n,r,s,2),v("x","z","y",1,-1,t,i,-n,r,s,3),v("x","y","z",1,-1,t,n,i,r,a,4),v("x","y","z",-1,-1,t,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(h,2));function v(g,m,d,x,_,y,M,S,T,L,E){const R=y/T,k=M/L,X=y/2,w=M/2,A=S/2,D=T+1,G=L+1;let z=0,H=0;const Y=new ee;for(let $=0;$<G;$++){const ie=$*k-w;for(let N=0;N<D;N++){const O=N*R-X;Y[g]=O*x,Y[m]=ie*_,Y[d]=A,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[d]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(N/T),h.push(1-$/L),z+=1}}for(let $=0;$<L;$++)for(let ie=0;ie<T;ie++){const N=f+ie+D*$,O=f+ie+D*($+1),q=f+(ie+1)+D*($+1),ae=f+(ie+1)+D*$;l.push(N,O,ae),l.push(O,q,ae),H+=6}o.addGroup(p,H,E),p+=H,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Of(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function jt(e){const t={};for(let n=0;n<e.length;n++){const i=Gr(e[n]);for(const r in i)t[r]=i[r]}return t}function $m(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Bf(e){return e.getRenderTarget()===null?e.outputColorSpace:zn}const Zm={clone:Gr,merge:jt};var Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Vi=class extends Ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=$m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},zf=class extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=ei}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hn=class extends zf{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ka*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,r,a,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Xa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};const Lr=-90,Cr=1;let Qm=class extends Xn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new hn(Lr,Cr,t,n);r.layers=this.layers,this.add(r);const a=new hn(Lr,Cr,t,n);a.layers=this.layers,this.add(a);const s=new hn(Lr,Cr,t,n);s.layers=this.layers,this.add(s);const o=new hn(Lr,Cr,t,n);o.layers=this.layers,this.add(o);const l=new hn(Lr,Cr,t,n);l.layers=this.layers,this.add(l);const c=new hn(Lr,Cr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const c of n)this.remove(c);if(t===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,s,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=ni,t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(n,r),t.setRenderTarget(i,1),t.render(n,a),t.setRenderTarget(i,2),t.render(n,s),t.setRenderTarget(i,3),t.render(n,o),t.setRenderTarget(i,4),t.render(n,l),i.texture.generateMipmaps=p,t.setRenderTarget(i,5),t.render(n,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Gf=class extends Wn{constructor(t,n,i,r,a,s,o,l,c,u){t=t!==void 0?t:[],n=n!==void 0?n:Or,super(t,n,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};class ev extends Hi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(qa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fi?it:Ni),this.texture=new Gf(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jl(5,5,5),a=new Vi({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:mi});a.uniforms.tEquirect.value=n;const s=new In(r,a),o=n.minFilter;return n.minFilter===$a&&(n.minFilter=Mn),new Qm(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n,i,r){const a=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,r);t.setRenderTarget(a)}}const Zc=new ee,tv=new ee,nv=new ot;let Li=class{constructor(t=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Zc.subVectors(i,n).cross(tv.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||nv.getNormalMatrix(t),r=this.coplanarPoint(Zc).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ai=new Yl,Eo=new ee;let $l=class{constructor(t=new Li,n=new Li,i=new Li,r=new Li,a=new Li,s=new Li){this.planes=[t,n,i,r,a,s]}set(t,n,i,r,a,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ei){const i=this.planes,r=t.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],d=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-a,f-c,m-p,y-d).normalize(),i[1].setComponents(l+a,f+c,m+p,y+d).normalize(),i[2].setComponents(l+s,f+u,m+v,y+x).normalize(),i[3].setComponents(l-s,f-u,m-v,y-x).normalize(),i[4].setComponents(l-o,f-h,m-g,y-_).normalize(),n===ei)i[5].setComponents(l+o,f+h,m+g,y+_).normalize();else if(n===Uo)i[5].setComponents(o,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Eo.x=r.normal.x>0?t.max.x:t.min.x,Eo.y=r.normal.y>0?t.max.y:t.min.y,Eo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hf(){let e=null,t=!1,n=null,i=null;function r(a,s){n(a,s),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function iv(e,t){const n=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=e.createBuffer();e.bindBuffer(u,p),e.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=e.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=e.SHORT;else if(h instanceof Uint32Array)v=e.UNSIGNED_INT;else if(h instanceof Int32Array)v=e.INT;else if(h instanceof Int8Array)v=e.BYTE;else if(h instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,h){const f=u.array,p=u.updateRange;e.bindBuffer(h,c),p.count===-1?e.bufferSubData(h,0,f):(n?e.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):e.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(e.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(a(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}let rv=class Vf extends ur{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const a=t/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=n/l,p=[],v=[],g=[],m=[];for(let d=0;d<u;d++){const x=d*f-s;for(let _=0;_<c;_++){const y=_*h-a;v.push(y,-x,0),g.push(0,0,1),m.push(_/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const _=x+c*d,y=x+c*(d+1),M=x+1+c*(d+1),S=x+1+c*d;p.push(_,y,S),p.push(y,M,S)}this.setIndex(p),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(g,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vf(t.width,t.height,t.widthSegments,t.heightSegments)}};var av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hv="vec3 transformed = vec3( position );",fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sv=`#define PI 3.141592653589793
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`,Tv=`vec3 transformedNormal = objectNormal;
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
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
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
}`,kv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qv=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,jv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,eg=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
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
}`,tg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cg=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mg=`#ifdef USE_MORPHNORMALS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,zg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$g=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,c_=`#define DISTANCE
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
}`,l_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,f_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
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
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,g_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
}`,__=`#define MATCAP
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
}`,x_=`#define MATCAP
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
}`,y_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,E_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,b_=`#define PHONG
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
}`,S_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
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
}`,w_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
}`,T_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,A_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
}`,R_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,L_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,U_=`uniform float rotation;
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
}`,D_=`uniform vec3 diffuse;
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
}`,at={alphamap_fragment:av,alphamap_pars_fragment:sv,alphatest_fragment:ov,alphatest_pars_fragment:cv,aomap_fragment:lv,aomap_pars_fragment:uv,begin_vertex:hv,beginnormal_vertex:fv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:gv,clipping_planes_pars_vertex:_v,clipping_planes_vertex:xv,color_fragment:yv,color_pars_fragment:Mv,color_pars_vertex:Ev,color_vertex:bv,common:Sv,cube_uv_reflection_fragment:wv,defaultnormal_vertex:Tv,displacementmap_pars_vertex:Av,displacementmap_vertex:Rv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Cv,encodings_fragment:Pv,encodings_pars_fragment:Uv,envmap_fragment:Dv,envmap_common_pars_fragment:Iv,envmap_pars_fragment:Fv,envmap_pars_vertex:Nv,envmap_physical_pars_fragment:jv,envmap_vertex:Ov,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:Gv,fog_pars_fragment:Hv,gradientmap_pars_fragment:Vv,lightmap_fragment:kv,lightmap_pars_fragment:Wv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:Yv,lights_pars_begin:qv,lights_toon_fragment:$v,lights_toon_pars_fragment:Zv,lights_phong_fragment:Kv,lights_phong_pars_fragment:Jv,lights_physical_fragment:Qv,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:og,map_fragment:cg,map_pars_fragment:lg,map_particle_fragment:ug,map_particle_pars_fragment:hg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:dg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:vg,morphtarget_vertex:gg,normal_fragment_begin:_g,normal_fragment_maps:xg,normal_pars_fragment:yg,normal_pars_vertex:Mg,normal_vertex:Eg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Ag,output_fragment:Rg,packing:Lg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Ug,dithering_pars_fragment:Dg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Og,shadowmap_vertex:Bg,shadowmask_pars_fragment:zg,skinbase_vertex:Gg,skinning_pars_vertex:Hg,skinning_vertex:Vg,skinnormal_vertex:kg,specularmap_fragment:Wg,specularmap_pars_fragment:Xg,tonemapping_fragment:Yg,tonemapping_pars_fragment:qg,transmission_fragment:jg,transmission_pars_fragment:$g,uv_pars_fragment:Zg,uv_pars_vertex:Kg,uv_vertex:Jg,worldpos_vertex:Qg,background_vert:e_,background_frag:t_,backgroundCube_vert:n_,backgroundCube_frag:i_,cube_vert:r_,cube_frag:a_,depth_vert:s_,depth_frag:o_,distanceRGBA_vert:c_,distanceRGBA_frag:l_,equirect_vert:u_,equirect_frag:h_,linedashed_vert:f_,linedashed_frag:d_,meshbasic_vert:p_,meshbasic_frag:m_,meshlambert_vert:v_,meshlambert_frag:g_,meshmatcap_vert:__,meshmatcap_frag:x_,meshnormal_vert:y_,meshnormal_frag:M_,meshphong_vert:E_,meshphong_frag:b_,meshphysical_vert:S_,meshphysical_frag:w_,meshtoon_vert:T_,meshtoon_frag:A_,points_vert:R_,points_frag:L_,shadow_vert:C_,shadow_frag:P_,sprite_vert:U_,sprite_frag:D_},De={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},On={basic:{uniforms:jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:jt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:jt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:jt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:jt([De.points,De.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:jt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:jt([De.common,De.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:jt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:jt([De.sprite,De.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:jt([De.common,De.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:jt([De.lights,De.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};On.physical={uniforms:jt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const bo={r:0,b:0,g:0};function I_(e,t,n,i,r,a,s){const o=new dt(0);let l=a===!0?0:1,c,u,h=null,f=0,p=null;function v(m,d){let x=!1,_=d.isScene===!0?d.background:null;switch(_&&_.isTexture&&(_=(d.backgroundBlurriness>0?n:t).get(_)),_===null?g(o,l):_&&_.isColor&&(g(_,1),x=!0),e.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),x=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),x=!0;break}(e.autoClear||x)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===uc)?(u===void 0&&(u=new In(new jl(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Gr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=_.colorSpace!==it,(h!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new In(new rv(2,2),new Vi({name:"BackgroundMaterial",uniforms:Gr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=_.colorSpace!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(bo,Bf(e)),i.buffers.color.setClear(bo.r,bo.g,bo.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function F_(e,t,n,i){const r=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=m(null);let c=l,u=!1;function h(A,D,G,z,H){let Y=!1;if(s){const $=g(z,G,D);c!==$&&(c=$,p(c.object)),Y=d(A,z,G,H),Y&&x(A,z,G,H)}else{const $=D.wireframe===!0;(c.geometry!==z.id||c.program!==G.id||c.wireframe!==$)&&(c.geometry=z.id,c.program=G.id,c.wireframe=$,Y=!0)}H!==null&&n.update(H,e.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,L(A,D,G,z),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function f(){return i.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(A){return i.isWebGL2?e.bindVertexArray(A):a.bindVertexArrayOES(A)}function v(A){return i.isWebGL2?e.deleteVertexArray(A):a.deleteVertexArrayOES(A)}function g(A,D,G){const z=G.wireframe===!0;let H=o[A.id];H===void 0&&(H={},o[A.id]=H);let Y=H[D.id];Y===void 0&&(Y={},H[D.id]=Y);let $=Y[z];return $===void 0&&($=m(f()),Y[z]=$),$}function m(A){const D=[],G=[],z=[];for(let H=0;H<r;H++)D[H]=0,G[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:z,object:A,attributes:{},index:null}}function d(A,D,G,z){const H=c.attributes,Y=D.attributes;let $=0;const ie=G.getAttributes();for(const N in ie)if(ie[N].location>=0){const q=H[N];let ae=Y[N];if(ae===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;$++}return c.attributesNum!==$||c.index!==z}function x(A,D,G,z){const H={},Y=D.attributes;let $=0;const ie=G.getAttributes();for(const N in ie)if(ie[N].location>=0){let q=Y[N];q===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(q=A.instanceColor));const ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),H[N]=ae,$++}c.attributes=H,c.attributesNum=$,c.index=z}function _(){const A=c.newAttributes;for(let D=0,G=A.length;D<G;D++)A[D]=0}function y(A){M(A,0)}function M(A,D){const G=c.newAttributes,z=c.enabledAttributes,H=c.attributeDivisors;G[A]=1,z[A]===0&&(e.enableVertexAttribArray(A),z[A]=1),H[A]!==D&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,D),H[A]=D)}function S(){const A=c.newAttributes,D=c.enabledAttributes;for(let G=0,z=D.length;G<z;G++)D[G]!==A[G]&&(e.disableVertexAttribArray(G),D[G]=0)}function T(A,D,G,z,H,Y,$){$===!0?e.vertexAttribIPointer(A,D,G,H,Y):e.vertexAttribPointer(A,D,G,z,H,Y)}function L(A,D,G,z){if(i.isWebGL2===!1&&(A.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const H=z.attributes,Y=G.getAttributes(),$=D.defaultAttributeValues;for(const ie in Y){const N=Y[ie];if(N.location>=0){let O=H[ie];if(O===void 0&&(ie==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),ie==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),O!==void 0){const q=O.normalized,ae=O.itemSize,te=n.get(O);if(te===void 0)continue;const he=te.buffer,ge=te.type,le=te.bytesPerElement,We=i.isWebGL2===!0&&(ge===e.INT||ge===e.UNSIGNED_INT||O.gpuType===df);if(O.isInterleavedBufferAttribute){const V=O.data,K=V.stride,Be=O.offset;if(V.isInstancedInterleavedBuffer){for(let Te=0;Te<N.locationSize;Te++)M(N.location+Te,V.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Te=0;Te<N.locationSize;Te++)y(N.location+Te);e.bindBuffer(e.ARRAY_BUFFER,he);for(let Te=0;Te<N.locationSize;Te++)T(N.location+Te,ae/N.locationSize,ge,q,K*le,(Be+ae/N.locationSize*Te)*le,We)}else{if(O.isInstancedBufferAttribute){for(let V=0;V<N.locationSize;V++)M(N.location+V,O.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let V=0;V<N.locationSize;V++)y(N.location+V);e.bindBuffer(e.ARRAY_BUFFER,he);for(let V=0;V<N.locationSize;V++)T(N.location+V,ae/N.locationSize,ge,q,ae*le,ae/N.locationSize*V*le,We)}}else if($!==void 0){const q=$[ie];if(q!==void 0)switch(q.length){case 2:e.vertexAttrib2fv(N.location,q);break;case 3:e.vertexAttrib3fv(N.location,q);break;case 4:e.vertexAttrib4fv(N.location,q);break;default:e.vertexAttrib1fv(N.location,q)}}}}S()}function E(){X();for(const A in o){const D=o[A];for(const G in D){const z=D[G];for(const H in z)v(z[H].object),delete z[H];delete D[G]}delete o[A]}}function R(A){if(o[A.id]===void 0)return;const D=o[A.id];for(const G in D){const z=D[G];for(const H in z)v(z[H].object),delete z[H];delete D[G]}delete o[A.id]}function k(A){for(const D in o){const G=o[D];if(G[A.id]===void 0)continue;const z=G[A.id];for(const H in z)v(z[H].object),delete z[H];delete G[A.id]}}function X(){w(),u=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:y,disableUnusedAttributes:S}}function N_(e,t,n,i){const r=i.isWebGL2;let a;function s(c){a=c}function o(c,u){e.drawArrays(a,c,u),n.update(u,a,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=e,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](a,c,u,h),n.update(u,a,h)}this.setMode=s,this.render=o,this.renderInstances=l}function O_(e,t,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||t.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),g=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),d=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=s||t.has("OES_texture_float"),M=_&&y,S=s?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:S}}function B_(e){const t=this;let n=null,i=0,r=!1,a=!1;const s=new Li,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=e.get(h);if(!r||v===null||v.length===0||a&&!m)a?u(null):c();else{const x=a?0:i,_=x*4;let y=d.clippingState||null;l.value=y,y=u(v,f,_,p);for(let M=0;M!==_;++M)y[M]=n[M];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,v){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const d=p+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==g;++_,y+=4)s.copy(h[_]).applyMatrix4(x,o),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function z_(e){let t=new WeakMap;function n(s,o){return o===cl?s.mapping=Or:o===ll&&(s.mapping=Br),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===cl||o===ll)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new ev(l.height/2);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}let G_=class extends zf{constructor(t=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-t,s=i+t,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};const Dr=4,wh=[.125,.215,.35,.446,.526,.582],Pi=20,Kc=new G_,Th=new dt;let Jc=null;const Ci=(1+Math.sqrt(5))/2,Pr=1/Ci,Ah=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,Ci,Pr),new ee(0,Ci,-Pr),new ee(Pr,0,Ci),new ee(-Pr,0,Ci),new ee(Ci,Pr,0),new ee(-Ci,Pr,0)];class Rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){Jc=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jc),t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Or||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Za,format:Dn,colorSpace:zn,depthBuffer:!1},r=Lh(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(a)),this._blurMaterial=V_(a,t,n)}return r}_compileMaterial(t){const n=new In(this._lodPlanes[0],t);this._renderer.compile(n,Kc)}_sceneToCubeUV(t,n,i,r){const o=new hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Th),u.toneMapping=ni,u.autoClear=!1;const p=new ql({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),v=new In(new jl,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Th),g=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const _=this._cubeSize;So(r,x*_,d>2?_:0,_,_),u.setRenderTarget(r),g&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===Or||t.mapping===Br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new In(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;So(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Kc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Ah[(r-1)%Ah.length];this._blur(t,r-1,r,a,s)}n.autoClear=i}_blur(t,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,r,"latitudinal",a),this._halfBlur(s,t,i,i,r,"longitudinal",a)}_halfBlur(t,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new In(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),g=a/v,m=isFinite(a)?1+Math.floor(u*g):Pi;m>Pi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const d=[];let x=0;for(let T=0;T<Pi;++T){const L=T/g,E=Math.exp(-L*L/2);d.push(E),T===0?x+=E:T<m&&(x+=2*E)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const y=this._sizeLods[r],M=3*y*(r>_-Dr?r-_+Dr:0),S=4*(this._cubeSize-y);So(n,M,S,3*y,2*y),l.setRenderTarget(n),l.render(h,Kc)}}function H_(e){const t=[],n=[],i=[];let r=e;const a=e-Dr+1+wh.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>e-Dr?l=wh[s-e+Dr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,g=3,m=2,d=1,x=new Float32Array(g*v*p),_=new Float32Array(m*v*p),y=new Float32Array(d*v*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,L=S>2?0:-1,E=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];x.set(E,g*v*S),_.set(f,m*v*S);const R=[S,S,S,S,S,S];y.set(R,d*v*S)}const M=new ur;M.setAttribute("position",new Bn(x,g)),M.setAttribute("uv",new Bn(_,m)),M.setAttribute("faceIndex",new Bn(y,d)),t.push(M),r>Dr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Lh(e,t,n){const i=new Hi(e,t,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function V_(e,t,n){const i=new Float32Array(Pi),r=new ee(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ch(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ph(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function k_(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===cl||l===ll,u=l===Or||l===Br;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return n===null&&(n=new Rh(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){n===null&&(n=new Rh(e));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function W_(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function X_(e,t,n,i){const r={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)t.remove(g[m])}f.removeEventListener("dispose",s),delete r[f.id];const p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],e.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)t.update(g[m],e.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let _=0,y=x.length;_<y;_+=3){const M=x[_+0],S=x[_+1],T=x[_+2];f.push(M,S,S,T,T,M)}}else{const x=v.array;g=v.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const M=_+0,S=_+1,T=_+2;f.push(M,S,S,T,T,M)}}const m=new(Sf(f)?Ff:If)(f,1);m.version=g;const d=a.get(h);d&&t.remove(d),a.set(h,m)}function u(h){const f=a.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Y_(e,t,n,i){const r=i.isWebGL2;let a;function s(f){a=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){e.drawElements(a,p,o,f*l),n.update(p,a,1)}function h(f,p,v){if(v===0)return;let g,m;if(r)g=e,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,p,o,f*l,v),n.update(p,a,v)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function q_(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function j_(e,t){return e[0]-t[0]}function $_(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Z_(e,t,n){const i={},r=new Float32Array(8),a=new WeakMap,s=new wt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=a.get(u);if(m===void 0||m.count!==g){let D=function(){w.dispose(),a.delete(u),u.removeEventListener("dispose",D)};var p=D;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),M===!0&&(E=3);let R=u.attributes.position.count*E,k=1;R>t.maxTextureSize&&(k=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const X=new Float32Array(R*k*4*g),w=new Rf(X,R,k,g);w.type=pi,w.needsUpdate=!0;const A=E*4;for(let G=0;G<g;G++){const z=S[G],H=T[G],Y=L[G],$=R*k*4*G;for(let ie=0;ie<z.count;ie++){const N=ie*A;_===!0&&(s.fromBufferAttribute(z,ie),X[$+N+0]=s.x,X[$+N+1]=s.y,X[$+N+2]=s.z,X[$+N+3]=0),y===!0&&(s.fromBufferAttribute(H,ie),X[$+N+4]=s.x,X[$+N+5]=s.y,X[$+N+6]=s.z,X[$+N+7]=0),M===!0&&(s.fromBufferAttribute(Y,ie),X[$+N+8]=s.x,X[$+N+9]=s.y,X[$+N+10]=s.z,X[$+N+11]=Y.itemSize===4?s.w:1)}}m={count:g,texture:w,size:new ft(R,k)},a.set(u,m),u.addEventListener("dispose",D)}let d=0;for(let _=0;_<f.length;_++)d+=f[_];const x=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(e,"morphTargetBaseInfluence",x),h.getUniforms().setValue(e,"morphTargetInfluences",f),h.getUniforms().setValue(e,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(e,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<v;y++){const M=g[y];M[0]=y,M[1]=f[y]}g.sort($_);for(let y=0;y<8;y++)y<v&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(j_);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const M=o[y],S=M[0],T=M[1];S!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+y)!==m[S]&&u.setAttribute("morphTarget"+y,m[S]),d&&u.getAttribute("morphNormal"+y)!==d[S]&&u.setAttribute("morphNormal"+y,d[S]),r[y]=T,x+=T):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(e,"morphTargetBaseInfluence",_),h.getUniforms().setValue(e,"morphTargetInfluences",r)}}return{update:l}}function K_(e,t,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);return r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER)),h}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}const kf=new Wn,Wf=new Rf,Xf=new Om,Yf=new Gf,Uh=[],Dh=[],Ih=new Float32Array(16),Fh=new Float32Array(9),Nh=new Float32Array(4);function La(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let a=Uh[r];if(a===void 0&&(a=new Float32Array(r),Uh[r]=a),t!==0){i.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(a,o)}return a}function Pt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ut(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function hc(e,t){let n=Dh[t];n===void 0&&(n=new Int32Array(t),Dh[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function J_(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Q_(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pt(n,t))return;e.uniform2fv(this.addr,t),Ut(n,t)}}function e0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Pt(n,t))return;e.uniform3fv(this.addr,t),Ut(n,t)}}function t0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pt(n,t))return;e.uniform4fv(this.addr,t),Ut(n,t)}}function n0(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Pt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ut(n,t)}else{if(Pt(n,i))return;Nh.set(i),e.uniformMatrix2fv(this.addr,!1,Nh),Ut(n,i)}}function i0(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Pt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ut(n,t)}else{if(Pt(n,i))return;Fh.set(i),e.uniformMatrix3fv(this.addr,!1,Fh),Ut(n,i)}}function r0(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Pt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ut(n,t)}else{if(Pt(n,i))return;Ih.set(i),e.uniformMatrix4fv(this.addr,!1,Ih),Ut(n,i)}}function a0(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function s0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pt(n,t))return;e.uniform2iv(this.addr,t),Ut(n,t)}}function o0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pt(n,t))return;e.uniform3iv(this.addr,t),Ut(n,t)}}function c0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pt(n,t))return;e.uniform4iv(this.addr,t),Ut(n,t)}}function l0(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function u0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pt(n,t))return;e.uniform2uiv(this.addr,t),Ut(n,t)}}function h0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pt(n,t))return;e.uniform3uiv(this.addr,t),Ut(n,t)}}function f0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pt(n,t))return;e.uniform4uiv(this.addr,t),Ut(n,t)}}function d0(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(t||kf,r)}function p0(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Xf,r)}function m0(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Yf,r)}function v0(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Wf,r)}function g0(e){switch(e){case 5126:return J_;case 35664:return Q_;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return s0;case 35668:case 35672:return o0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return u0;case 36295:return h0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return v0}}function _0(e,t){e.uniform1fv(this.addr,t)}function x0(e,t){const n=La(t,this.size,2);e.uniform2fv(this.addr,n)}function y0(e,t){const n=La(t,this.size,3);e.uniform3fv(this.addr,n)}function M0(e,t){const n=La(t,this.size,4);e.uniform4fv(this.addr,n)}function E0(e,t){const n=La(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function b0(e,t){const n=La(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function S0(e,t){const n=La(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function w0(e,t){e.uniform1iv(this.addr,t)}function T0(e,t){e.uniform2iv(this.addr,t)}function A0(e,t){e.uniform3iv(this.addr,t)}function R0(e,t){e.uniform4iv(this.addr,t)}function L0(e,t){e.uniform1uiv(this.addr,t)}function C0(e,t){e.uniform2uiv(this.addr,t)}function P0(e,t){e.uniform3uiv(this.addr,t)}function U0(e,t){e.uniform4uiv(this.addr,t)}function D0(e,t,n){const i=this.cache,r=t.length,a=hc(n,r);Pt(i,a)||(e.uniform1iv(this.addr,a),Ut(i,a));for(let s=0;s!==r;++s)n.setTexture2D(t[s]||kf,a[s])}function I0(e,t,n){const i=this.cache,r=t.length,a=hc(n,r);Pt(i,a)||(e.uniform1iv(this.addr,a),Ut(i,a));for(let s=0;s!==r;++s)n.setTexture3D(t[s]||Xf,a[s])}function F0(e,t,n){const i=this.cache,r=t.length,a=hc(n,r);Pt(i,a)||(e.uniform1iv(this.addr,a),Ut(i,a));for(let s=0;s!==r;++s)n.setTextureCube(t[s]||Yf,a[s])}function N0(e,t,n){const i=this.cache,r=t.length,a=hc(n,r);Pt(i,a)||(e.uniform1iv(this.addr,a),Ut(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(t[s]||Wf,a[s])}function O0(e){switch(e){case 5126:return _0;case 35664:return x0;case 35665:return y0;case 35666:return M0;case 35674:return E0;case 35675:return b0;case 35676:return S0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return L0;case 36294:return C0;case 36295:return P0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return N0}}let B0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.setValue=g0(n.type)}},z0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.size=n.size,this.setValue=O0(n.type)}},G0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(t,n[o.id],i)}}};const Qc=/(\w+)(\])?(\[|\.)?/g;function Oh(e,t){e.seq.push(t),e.map[t.id]=t}function H0(e,t,n){const i=e.name,r=i.length;for(Qc.lastIndex=0;;){const a=Qc.exec(i),s=Qc.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Oh(n,c===void 0?new B0(o,e,t):new z0(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new G0(o),Oh(n,h)),n=h}}}let Lo=class{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=t.getActiveUniform(n,r),s=t.getUniformLocation(n,a.name);H0(a,s,this)}}setValue(t,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,a=t.length;r!==a;++r){const s=t[r];s.id in n&&i.push(s)}return i}};function Bh(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}let V0=0;function k0(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function W0(e){switch(e){case zn:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),["Linear","( value )"]}}function zh(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+k0(e.getShaderSource(t),s)}else return r}function X0(e,t){const n=W0(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Y0(e,t){let n;switch(t){case Hp:n="Linear";break;case Vp:n="Reinhard";break;case kp:n="OptimizedCineon";break;case Wp:n="ACESFilmic";break;case Xp:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function q0(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ka).join(`
`)}function j0(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function $0(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(t,r),s=a.name;let o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function ka(e){return e!==""}function Gh(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(e){return e.replace(Z0,K0)}function K0(e,t){const n=at[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return ml(n)}const J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(e){return e.replace(J0,Q0)}function Q0(e,t,n,i){let r="";for(let a=parseInt(t);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function kh(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ex(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===cf?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===xp?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function tx(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Or:case Br:t="ENVMAP_TYPE_CUBE";break;case uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nx(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Br:t="ENVMAP_MODE_REFRACTION";break}return t}function ix(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case hf:t="ENVMAP_BLENDING_MULTIPLY";break;case zp:t="ENVMAP_BLENDING_MIX";break;case Gp:t="ENVMAP_BLENDING_ADD";break}return t}function rx(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ax(e,t,n,i){const r=e.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=ex(n),c=tx(n),u=nx(n),h=ix(n),f=rx(n),p=n.isWebGL2?"":q0(n),v=j0(a),g=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ka).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ka).join(`
`),d.length>0&&(d+=`
`)):(m=[kh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),d=[p,kh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ni?"#define TONE_MAPPING":"",n.toneMapping!==ni?at.tonemapping_pars_fragment:"",n.toneMapping!==ni?Y0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.encodings_pars_fragment,X0("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ka).join(`
`)),s=ml(s),s=Gh(s,n),s=Hh(s,n),o=ml(o),o=Gh(o,n),o=Hh(o,n),s=Vh(s),o=Vh(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=x+m+s,y=x+d+o,M=Bh(r,r.VERTEX_SHADER,_),S=Bh(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,M),r.attachShader(g,S),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),e.debug.checkShaderErrors){const E=r.getProgramInfoLog(g).trim(),R=r.getShaderInfoLog(M).trim(),k=r.getShaderInfoLog(S).trim();let X=!0,w=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,g,M,S);else{const A=zh(r,M,"vertex"),D=zh(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+A+`
`+D)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||k==="")&&(w=!1);w&&(this.diagnostics={runnable:X,programLog:E,vertexShader:{log:R,prefix:m},fragmentShader:{log:k,prefix:d}})}r.deleteShader(M),r.deleteShader(S);let T;this.getUniforms=function(){return T===void 0&&(T=new Lo(r,g)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=$0(r,g)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=S,this}let sx=0;class ox{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new cx(t),n.set(t,i)),i}}class cx{constructor(t){this.id=sx++,this.code=t,this.usedTimes=0}}function lx(e,t,n,i,r,a,s){const o=new Uf,l=new ox,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,R,k,X,w){const A=X.fog,D=w.geometry,G=E.isMeshStandardMaterial?X.environment:null,z=(E.isMeshStandardMaterial?n:t).get(E.envMap||G),H=z&&z.mapping===uc?z.image.height:null,Y=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=$!==void 0?$.length:0;let N=0;D.morphAttributes.position!==void 0&&(N=1),D.morphAttributes.normal!==void 0&&(N=2),D.morphAttributes.color!==void 0&&(N=3);let O,q,ae,te;if(Y){const Mt=On[Y];O=Mt.vertexShader,q=Mt.fragmentShader}else O=E.vertexShader,q=E.fragmentShader,l.update(E),ae=l.getVertexShaderID(E),te=l.getFragmentShaderID(E);const he=e.getRenderTarget(),ge=w.isInstancedMesh===!0,le=!!E.map,We=!!E.matcap,V=!!z,K=!!E.aoMap,Be=!!E.lightMap,Te=!!E.bumpMap,pe=!!E.normalMap,Fe=!!E.displacementMap,Ne=!!E.emissiveMap,we=!!E.metalnessMap,Oe=!!E.roughnessMap,Ye=E.anisotropy>0,nt=E.clearcoat>0,lt=E.iridescence>0,I=E.sheen>0,C=E.transmission>0,re=Ye&&!!E.anisotropyMap,fe=nt&&!!E.clearcoatMap,me=nt&&!!E.clearcoatNormalMap,Ae=nt&&!!E.clearcoatRoughnessMap,Ve=lt&&!!E.iridescenceMap,Ce=lt&&!!E.iridescenceThicknessMap,oe=I&&!!E.sheenColorMap,j=I&&!!E.sheenRoughnessMap,_e=!!E.specularMap,ye=!!E.specularColorMap,be=!!E.specularIntensityMap,de=C&&!!E.transmissionMap,He=C&&!!E.thicknessMap,tt=!!E.gradientMap,W=!!E.alphaMap,Re=E.alphaTest>0,Q=!!E.extensions,Me=!!D.attributes.uv1,Le=!!D.attributes.uv2,ct=!!D.attributes.uv3;return{isWebGL2:u,shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:O,fragmentShader:q,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:ge,instancingColor:ge&&w.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:he===null?e.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:zn,map:le,matcap:We,envMap:V,envMapMode:V&&z.mapping,envMapCubeUVHeight:H,aoMap:K,lightMap:Be,bumpMap:Te,normalMap:pe,displacementMap:f&&Fe,emissiveMap:Ne,normalMapObjectSpace:pe&&E.normalMapType===rm,normalMapTangentSpace:pe&&E.normalMapType===yf,metalnessMap:we,roughnessMap:Oe,anisotropy:Ye,anisotropyMap:re,clearcoat:nt,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:Ae,iridescence:lt,iridescenceMap:Ve,iridescenceThicknessMap:Ce,sheen:I,sheenColorMap:oe,sheenRoughnessMap:j,specularMap:_e,specularColorMap:ye,specularIntensityMap:be,transmission:C,transmissionMap:de,thicknessMap:He,gradientMap:tt,opaque:E.transparent===!1&&E.blending===Ir,alphaMap:W,alphaTest:Re,combine:E.combine,mapUv:le&&g(E.map.channel),aoMapUv:K&&g(E.aoMap.channel),lightMapUv:Be&&g(E.lightMap.channel),bumpMapUv:Te&&g(E.bumpMap.channel),normalMapUv:pe&&g(E.normalMap.channel),displacementMapUv:Fe&&g(E.displacementMap.channel),emissiveMapUv:Ne&&g(E.emissiveMap.channel),metalnessMapUv:we&&g(E.metalnessMap.channel),roughnessMapUv:Oe&&g(E.roughnessMap.channel),anisotropyMapUv:re&&g(E.anisotropyMap.channel),clearcoatMapUv:fe&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:j&&g(E.sheenRoughnessMap.channel),specularMapUv:_e&&g(E.specularMap.channel),specularColorMapUv:ye&&g(E.specularColorMap.channel),specularIntensityMapUv:be&&g(E.specularIntensityMap.channel),transmissionMapUv:de&&g(E.transmissionMap.channel),thicknessMapUv:He&&g(E.thicknessMap.channel),alphaMapUv:W&&g(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pe||Ye),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:Le,vertexUv3s:ct,pointsUvs:w.isPoints===!0&&!!D.attributes.uv&&(le||W),fog:!!A,useFog:E.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:w.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:N,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&k.length>0,shadowMapType:e.shadowMap.type,toneMapping:E.toneMapped?e.toneMapping:ni,useLegacyLights:e.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qn,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Q&&E.extensions.derivatives===!0,extensionFragDepth:Q&&E.extensions.fragDepth===!0,extensionDrawBuffers:Q&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Q&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)R.push(k),R.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(x(R,E),_(R,E),R.push(e.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function x(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function _(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),E.push(o.mask)}function y(E){const R=v[E.type];let k;if(R){const X=On[R];k=Zm.clone(X.uniforms)}else k=E.uniforms;return k}function M(E,R){let k;for(let X=0,w=c.length;X<w;X++){const A=c[X];if(A.cacheKey===R){k=A,++k.usedTimes;break}}return k===void 0&&(k=new ax(e,R,E,a),c.push(k)),k}function S(E){if(--E.usedTimes===0){const R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function T(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:L}}function ux(){let e=new WeakMap;function t(a){let s=e.get(a);return s===void 0&&(s={},e.set(a,s)),s}function n(a){e.delete(a)}function i(a,s,o){e.get(a)[s]=o}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function hx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Wh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Xh(){const e=[];let t=0;const n=[],i=[],r=[];function a(){t=0,n.length=0,i.length=0,r.length=0}function s(h,f,p,v,g,m){let d=e[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},e[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=g,d.group=m),t++,d}function o(h,f,p,v,g,m){const d=s(h,f,p,v,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,v,g,m){const d=s(h,f,p,v,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||hx),i.length>1&&i.sort(f||Wh),r.length>1&&r.sort(f||Wh)}function u(){for(let h=t,f=e.length;h<f;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function fx(){let e=new WeakMap;function t(i,r){const a=e.get(i);let s;return a===void 0?(s=new Xh,e.set(i,[s])):r>=a.length?(s=new Xh,a.push(s)):s=a[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function dx(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ee,color:new dt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return e[t.id]=n,n}}}function px(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let mx=0;function vx(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function gx(e,t){const n=new dx,i=px(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new ee);const a=new ee,s=new Ot,o=new Ot;function l(u,h){let f=0,p=0,v=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let g=0,m=0,d=0,x=0,_=0,y=0,M=0,S=0,T=0,L=0;u.sort(vx);const E=h===!0?Math.PI:1;for(let k=0,X=u.length;k<X;k++){const w=u[k],A=w.color,D=w.intensity,G=w.distance,z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=A.r*D*E,p+=A.g*D*E,v+=A.b*D*E;else if(w.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(w.sh.coefficients[H],D);else if(w.isDirectionalLight){const H=n.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity*E),w.castShadow){const Y=w.shadow,$=i.get(w);$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,r.directionalShadow[g]=$,r.directionalShadowMap[g]=z,r.directionalShadowMatrix[g]=w.shadow.matrix,y++}r.directional[g]=H,g++}else if(w.isSpotLight){const H=n.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(A).multiplyScalar(D*E),H.distance=G,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,r.spot[d]=H;const Y=w.shadow;if(w.map&&(r.spotLightMap[T]=w.map,T++,Y.updateMatrices(w),w.castShadow&&L++),r.spotLightMatrix[d]=Y.matrix,w.castShadow){const $=i.get(w);$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,r.spotShadow[d]=$,r.spotShadowMap[d]=z,S++}d++}else if(w.isRectAreaLight){const H=n.get(w);H.color.copy(A).multiplyScalar(D),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),r.rectArea[x]=H,x++}else if(w.isPointLight){const H=n.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity*E),H.distance=w.distance,H.decay=w.decay,w.castShadow){const Y=w.shadow,$=i.get(w);$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=z,r.pointShadowMatrix[m]=w.shadow.matrix,M++}r.point[m]=H,m++}else if(w.isHemisphereLight){const H=n.get(w);H.skyColor.copy(w.color).multiplyScalar(D*E),H.groundColor.copy(w.groundColor).multiplyScalar(D*E),r.hemi[_]=H,_++}}x>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==g||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==x||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==S||R.numSpotMaps!==T)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=x,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=S+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,R.directionalLength=g,R.pointLength=m,R.spotLength=d,R.rectAreaLength=x,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=S,R.numSpotMaps=T,r.version=mx++)}function c(u,h){let f=0,p=0,v=0,g=0,m=0;const d=h.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const y=u[x];if(y.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),f++}else if(y.isSpotLight){const M=r.spot[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),o.identity(),s.copy(y.matrixWorld),s.premultiply(d),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Yh(e,t){const n=new gx(e,t),i=[],r=[];function a(){i.length=0,r.length=0}function s(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function _x(e,t){let n=new WeakMap;function i(a,s=0){const o=n.get(a);let l;return o===void 0?(l=new Yh(e,t),n.set(a,[l])):s>=o.length?(l=new Yh(e,t),o.push(l)):l=o[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}let xx=class extends Ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}};class yx extends Ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`;function bx(e,t,n){let i=new $l;const r=new ft,a=new ft,s=new wt,o=new xx({depthPacking:im}),l=new yx,c={},u=n.maxTextureSize,h={[gi]:tn,[tn]:gi,[Qn]:Qn},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Mx,fragmentShader:Ex}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new ur;v.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new In(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let d=this.type;this.render=function(M,S,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=e.getRenderTarget(),E=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),k=e.state;k.setBlending(mi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=d!==Jn&&this.type===Jn,w=d===Jn&&this.type!==Jn;for(let A=0,D=M.length;A<D;A++){const G=M[A],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const H=z.getFrameExtents();if(r.multiply(H),a.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/H.x),r.x=a.x*H.x,z.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/H.y),r.y=a.y*H.y,z.mapSize.y=a.y)),z.map===null||X===!0||w===!0){const $=this.type!==Jn?{minFilter:$t,magFilter:$t}:{};z.map!==null&&z.map.dispose(),z.map=new Hi(r.x,r.y,$),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}e.setRenderTarget(z.map),e.clear();const Y=z.getViewportCount();for(let $=0;$<Y;$++){const ie=z.getViewport($);s.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),k.viewport(s),z.updateMatrices(G,$),i=z.getFrustum(),y(S,T,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Jn&&x(z,T),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(L,E,R)};function x(M,S){const T=t.update(g);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Hi(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,e.setRenderTarget(M.mapPass),e.clear(),e.renderBufferDirect(S,null,T,f,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,e.setRenderTarget(M.map),e.clear(),e.renderBufferDirect(S,null,T,p,g,null)}function _(M,S,T,L){let E=null;const R=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)E=R;else if(E=T.isPointLight===!0?l:o,e.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const k=E.uuid,X=S.uuid;let w=c[k];w===void 0&&(w={},c[k]=w);let A=w[X];A===void 0&&(A=E.clone(),w[X]=A),E=A}if(E.visible=S.visible,E.wireframe=S.wireframe,L===Jn?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:h[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=e.properties.get(E);k.light=T}return E}function y(M,S,T,L,E){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Jn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const X=t.update(M),w=M.material;if(Array.isArray(w)){const A=X.groups;for(let D=0,G=A.length;D<G;D++){const z=A[D],H=w[z.materialIndex];if(H&&H.visible){const Y=_(M,H,L,E);e.renderBufferDirect(T,null,X,Y,M,z)}}}else if(w.visible){const A=_(M,w,L,E);e.renderBufferDirect(T,null,X,A,M,null)}}const k=M.children;for(let X=0,w=k.length;X<w;X++)y(k[X],S,T,L,E)}}function Sx(e,t,n){const i=n.isWebGL2;function r(){let W=!1;const Re=new wt;let Q=null;const Me=new wt(0,0,0,0);return{setMask:function(Le){Q!==Le&&!W&&(e.colorMask(Le,Le,Le,Le),Q=Le)},setLocked:function(Le){W=Le},setClear:function(Le,ct,vt,Mt,xn){xn===!0&&(Le*=Mt,ct*=Mt,vt*=Mt),Re.set(Le,ct,vt,Mt),Me.equals(Re)===!1&&(e.clearColor(Le,ct,vt,Mt),Me.copy(Re))},reset:function(){W=!1,Q=null,Me.set(-1,0,0,0)}}}function a(){let W=!1,Re=null,Q=null,Me=null;return{setTest:function(Le){Le?he(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(Le){Re!==Le&&!W&&(e.depthMask(Le),Re=Le)},setFunc:function(Le){if(Q!==Le){switch(Le){case Up:e.depthFunc(e.NEVER);break;case Dp:e.depthFunc(e.ALWAYS);break;case Ip:e.depthFunc(e.LESS);break;case ol:e.depthFunc(e.LEQUAL);break;case Fp:e.depthFunc(e.EQUAL);break;case Np:e.depthFunc(e.GEQUAL);break;case Op:e.depthFunc(e.GREATER);break;case Bp:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Q=Le}},setLocked:function(Le){W=Le},setClear:function(Le){Me!==Le&&(e.clearDepth(Le),Me=Le)},reset:function(){W=!1,Re=null,Q=null,Me=null}}}function s(){let W=!1,Re=null,Q=null,Me=null,Le=null,ct=null,vt=null,Mt=null,xn=null;return{setTest:function(_t){W||(_t?he(e.STENCIL_TEST):ge(e.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!W&&(e.stencilMask(_t),Re=_t)},setFunc:function(_t,on,Dt){(Q!==_t||Me!==on||Le!==Dt)&&(e.stencilFunc(_t,on,Dt),Q=_t,Me=on,Le=Dt)},setOp:function(_t,on,Dt){(ct!==_t||vt!==on||Mt!==Dt)&&(e.stencilOp(_t,on,Dt),ct=_t,vt=on,Mt=Dt)},setLocked:function(_t){W=_t},setClear:function(_t){xn!==_t&&(e.clearStencil(_t),xn=_t)},reset:function(){W=!1,Re=null,Q=null,Me=null,Le=null,ct=null,vt=null,Mt=null,xn=null}}}const o=new r,l=new a,c=new s,u=new WeakMap,h=new WeakMap;let f={},p={},v=new WeakMap,g=[],m=null,d=!1,x=null,_=null,y=null,M=null,S=null,T=null,L=null,E=!1,R=null,k=null,X=null,w=null,A=null;const D=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=z>=2);let Y=null,$={};const ie=e.getParameter(e.SCISSOR_BOX),N=e.getParameter(e.VIEWPORT),O=new wt().fromArray(ie),q=new wt().fromArray(N);function ae(W,Re,Q,Me){const Le=new Uint8Array(4),ct=e.createTexture();e.bindTexture(W,ct),e.texParameteri(W,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(W,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let vt=0;vt<Q;vt++)i&&(W===e.TEXTURE_3D||W===e.TEXTURE_2D_ARRAY)?e.texImage3D(Re,0,e.RGBA,1,1,Me,0,e.RGBA,e.UNSIGNED_BYTE,Le):e.texImage2D(Re+vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Le);return ct}const te={};te[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),te[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(te[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),te[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(e.DEPTH_TEST),l.setFunc(ol),Fe(!1),Ne(Pu),he(e.CULL_FACE),Te(mi);function he(W){f[W]!==!0&&(e.enable(W),f[W]=!0)}function ge(W){f[W]!==!1&&(e.disable(W),f[W]=!1)}function le(W,Re){return p[W]!==Re?(e.bindFramebuffer(W,Re),p[W]=Re,i&&(W===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=Re),W===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=Re)),!0):!1}function We(W,Re){let Q=g,Me=!1;if(W)if(Q=v.get(Re),Q===void 0&&(Q=[],v.set(Re,Q)),W.isWebGLMultipleRenderTargets){const Le=W.texture;if(Q.length!==Le.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let ct=0,vt=Le.length;ct<vt;ct++)Q[ct]=e.COLOR_ATTACHMENT0+ct;Q.length=Le.length,Me=!0}}else Q[0]!==e.COLOR_ATTACHMENT0&&(Q[0]=e.COLOR_ATTACHMENT0,Me=!0);else Q[0]!==e.BACK&&(Q[0]=e.BACK,Me=!0);Me&&(n.isWebGL2?e.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function V(W){return m!==W?(e.useProgram(W),m=W,!0):!1}const K={[Ur]:e.FUNC_ADD,[Mp]:e.FUNC_SUBTRACT,[Ep]:e.FUNC_REVERSE_SUBTRACT};if(i)K[Fu]=e.MIN,K[Nu]=e.MAX;else{const W=t.get("EXT_blend_minmax");W!==null&&(K[Fu]=W.MIN_EXT,K[Nu]=W.MAX_EXT)}const Be={[bp]:e.ZERO,[Sp]:e.ONE,[wp]:e.SRC_COLOR,[lf]:e.SRC_ALPHA,[Pp]:e.SRC_ALPHA_SATURATE,[Lp]:e.DST_COLOR,[Ap]:e.DST_ALPHA,[Tp]:e.ONE_MINUS_SRC_COLOR,[uf]:e.ONE_MINUS_SRC_ALPHA,[Cp]:e.ONE_MINUS_DST_COLOR,[Rp]:e.ONE_MINUS_DST_ALPHA};function Te(W,Re,Q,Me,Le,ct,vt,Mt){if(W===mi){d===!0&&(ge(e.BLEND),d=!1);return}if(d===!1&&(he(e.BLEND),d=!0),W!==yp){if(W!==x||Mt!==E){if((_!==Ur||S!==Ur)&&(e.blendEquation(e.FUNC_ADD),_=Ur,S=Ur),Mt)switch(W){case Ir:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Uu:e.blendFunc(e.ONE,e.ONE);break;case Du:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Iu:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Uu:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Du:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Iu:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}y=null,M=null,T=null,L=null,x=W,E=Mt}return}Le=Le||Re,ct=ct||Q,vt=vt||Me,(Re!==_||Le!==S)&&(e.blendEquationSeparate(K[Re],K[Le]),_=Re,S=Le),(Q!==y||Me!==M||ct!==T||vt!==L)&&(e.blendFuncSeparate(Be[Q],Be[Me],Be[ct],Be[vt]),y=Q,M=Me,T=ct,L=vt),x=W,E=!1}function pe(W,Re){W.side===Qn?ge(e.CULL_FACE):he(e.CULL_FACE);let Q=W.side===tn;Re&&(Q=!Q),Fe(Q),W.blending===Ir&&W.transparent===!1?Te(mi):Te(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),o.setMask(W.colorWrite);const Me=W.stencilWrite;c.setTest(Me),Me&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Oe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(W){R!==W&&(W?e.frontFace(e.CW):e.frontFace(e.CCW),R=W)}function Ne(W){W!==gp?(he(e.CULL_FACE),W!==k&&(W===Pu?e.cullFace(e.BACK):W===_p?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ge(e.CULL_FACE),k=W}function we(W){W!==X&&(G&&e.lineWidth(W),X=W)}function Oe(W,Re,Q){W?(he(e.POLYGON_OFFSET_FILL),(w!==Re||A!==Q)&&(e.polygonOffset(Re,Q),w=Re,A=Q)):ge(e.POLYGON_OFFSET_FILL)}function Ye(W){W?he(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function nt(W){W===void 0&&(W=e.TEXTURE0+D-1),Y!==W&&(e.activeTexture(W),Y=W)}function lt(W,Re,Q){Q===void 0&&(Y===null?Q=e.TEXTURE0+D-1:Q=Y);let Me=$[Q];Me===void 0&&(Me={type:void 0,texture:void 0},$[Q]=Me),(Me.type!==W||Me.texture!==Re)&&(Y!==Q&&(e.activeTexture(Q),Y=Q),e.bindTexture(W,Re||te[W]),Me.type=W,Me.texture=Re)}function I(){const W=$[Y];W!==void 0&&W.type!==void 0&&(e.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function C(){try{e.compressedTexImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function re(){try{e.compressedTexImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{e.texSubImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{e.texSubImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{e.texStorage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function oe(){try{e.texStorage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function j(){try{e.texImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{e.texImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(W){O.equals(W)===!1&&(e.scissor(W.x,W.y,W.z,W.w),O.copy(W))}function be(W){q.equals(W)===!1&&(e.viewport(W.x,W.y,W.z,W.w),q.copy(W))}function de(W,Re){let Q=h.get(Re);Q===void 0&&(Q=new WeakMap,h.set(Re,Q));let Me=Q.get(W);Me===void 0&&(Me=e.getUniformBlockIndex(Re,W.name),Q.set(W,Me))}function He(W,Re){const Me=h.get(Re).get(W);u.get(Re)!==Me&&(e.uniformBlockBinding(Re,Me,W.__bindingPointIndex),u.set(Re,Me))}function tt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},Y=null,$={},p={},v=new WeakMap,g=[],m=null,d=!1,x=null,_=null,y=null,M=null,S=null,T=null,L=null,E=!1,R=null,k=null,X=null,w=null,A=null,O.set(0,0,e.canvas.width,e.canvas.height),q.set(0,0,e.canvas.width,e.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:he,disable:ge,bindFramebuffer:le,drawBuffers:We,useProgram:V,setBlending:Te,setMaterial:pe,setFlipSided:Fe,setCullFace:Ne,setLineWidth:we,setPolygonOffset:Oe,setScissorTest:Ye,activeTexture:nt,bindTexture:lt,unbindTexture:I,compressedTexImage2D:C,compressedTexImage3D:re,texImage2D:j,texImage3D:_e,updateUBOMapping:de,uniformBlockBinding:He,texStorage2D:Ce,texStorage3D:oe,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ve,scissor:ye,viewport:be,reset:tt}}function wx(e,t,n,i,r,a,s){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,C){return d?new OffscreenCanvas(I,C):Ja("canvas")}function _(I,C,re,fe){let me=1;if((I.width>fe||I.height>fe)&&(me=fe/Math.max(I.width,I.height)),me<1||C===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Ae=C?Do:Math.floor,Ve=Ae(me*I.width),Ce=Ae(me*I.height);g===void 0&&(g=x(Ve,Ce));const oe=re?x(Ve,Ce):g;return oe.width=Ve,oe.height=Ce,oe.getContext("2d").drawImage(I,0,0,Ve,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Ve+"x"+Ce+")."),oe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function y(I){return dl(I.width)&&dl(I.height)}function M(I){return o?!1:I.wrapS!==Un||I.wrapT!==Un||I.minFilter!==$t&&I.minFilter!==Mn}function S(I,C){return I.generateMipmaps&&C&&I.minFilter!==$t&&I.minFilter!==Mn}function T(I){e.generateMipmap(I)}function L(I,C,re,fe,me=!1){if(o===!1)return C;if(I!==null){if(e[I]!==void 0)return e[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ae=C;return C===e.RED&&(re===e.FLOAT&&(Ae=e.R32F),re===e.HALF_FLOAT&&(Ae=e.R16F),re===e.UNSIGNED_BYTE&&(Ae=e.R8)),C===e.RG&&(re===e.FLOAT&&(Ae=e.RG32F),re===e.HALF_FLOAT&&(Ae=e.RG16F),re===e.UNSIGNED_BYTE&&(Ae=e.RG8)),C===e.RGBA&&(re===e.FLOAT&&(Ae=e.RGBA32F),re===e.HALF_FLOAT&&(Ae=e.RGBA16F),re===e.UNSIGNED_BYTE&&(Ae=fe===it&&me===!1?e.SRGB8_ALPHA8:e.RGBA8),re===e.UNSIGNED_SHORT_4_4_4_4&&(Ae=e.RGBA4),re===e.UNSIGNED_SHORT_5_5_5_1&&(Ae=e.RGB5_A1)),(Ae===e.R16F||Ae===e.R32F||Ae===e.RG16F||Ae===e.RG32F||Ae===e.RGBA16F||Ae===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Ae}function E(I,C,re){return S(I,re)===!0||I.isFramebufferTexture&&I.minFilter!==$t&&I.minFilter!==Mn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function R(I){return I===$t||I===Ou||I===Ac?e.NEAREST:e.LINEAR}function k(I){const C=I.target;C.removeEventListener("dispose",k),w(C),C.isVideoTexture&&v.delete(C)}function X(I){const C=I.target;C.removeEventListener("dispose",X),D(C)}function w(I){const C=i.get(I);if(C.__webglInit===void 0)return;const re=I.source,fe=m.get(re);if(fe){const me=fe[C.__cacheKey];me.usedTimes--,me.usedTimes===0&&A(I),Object.keys(fe).length===0&&m.delete(re)}i.remove(I)}function A(I){const C=i.get(I);e.deleteTexture(C.__webglTexture);const re=I.source,fe=m.get(re);delete fe[C.__cacheKey],s.memory.textures--}function D(I){const C=I.texture,re=i.get(I),fe=i.get(C);if(fe.__webglTexture!==void 0&&(e.deleteTexture(fe.__webglTexture),s.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)e.deleteFramebuffer(re.__webglFramebuffer[me]),re.__webglDepthbuffer&&e.deleteRenderbuffer(re.__webglDepthbuffer[me]);else{if(e.deleteFramebuffer(re.__webglFramebuffer),re.__webglDepthbuffer&&e.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&e.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let me=0;me<re.__webglColorRenderbuffer.length;me++)re.__webglColorRenderbuffer[me]&&e.deleteRenderbuffer(re.__webglColorRenderbuffer[me]);re.__webglDepthRenderbuffer&&e.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let me=0,Ae=C.length;me<Ae;me++){const Ve=i.get(C[me]);Ve.__webglTexture&&(e.deleteTexture(Ve.__webglTexture),s.memory.textures--),i.remove(C[me])}i.remove(C),i.remove(I)}let G=0;function z(){G=0}function H(){const I=G;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),G+=1,I}function Y(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function $(I,C){const re=i.get(I);if(I.isVideoTexture&&nt(I),I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(re,I,C);return}}n.bindTexture(e.TEXTURE_2D,re.__webglTexture,e.TEXTURE0+C)}function ie(I,C){const re=i.get(I);if(I.version>0&&re.__version!==I.version){le(re,I,C);return}n.bindTexture(e.TEXTURE_2D_ARRAY,re.__webglTexture,e.TEXTURE0+C)}function N(I,C){const re=i.get(I);if(I.version>0&&re.__version!==I.version){le(re,I,C);return}n.bindTexture(e.TEXTURE_3D,re.__webglTexture,e.TEXTURE0+C)}function O(I,C){const re=i.get(I);if(I.version>0&&re.__version!==I.version){We(re,I,C);return}n.bindTexture(e.TEXTURE_CUBE_MAP,re.__webglTexture,e.TEXTURE0+C)}const q={[ul]:e.REPEAT,[Un]:e.CLAMP_TO_EDGE,[hl]:e.MIRRORED_REPEAT},ae={[$t]:e.NEAREST,[Ou]:e.NEAREST_MIPMAP_NEAREST,[Ac]:e.NEAREST_MIPMAP_LINEAR,[Mn]:e.LINEAR,[Yp]:e.LINEAR_MIPMAP_NEAREST,[$a]:e.LINEAR_MIPMAP_LINEAR},te={[sm]:e.NEVER,[dm]:e.ALWAYS,[om]:e.LESS,[lm]:e.LEQUAL,[cm]:e.EQUAL,[fm]:e.GEQUAL,[um]:e.GREATER,[hm]:e.NOTEQUAL};function he(I,C,re){if(re?(e.texParameteri(I,e.TEXTURE_WRAP_S,q[C.wrapS]),e.texParameteri(I,e.TEXTURE_WRAP_T,q[C.wrapT]),(I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY)&&e.texParameteri(I,e.TEXTURE_WRAP_R,q[C.wrapR]),e.texParameteri(I,e.TEXTURE_MAG_FILTER,ae[C.magFilter]),e.texParameteri(I,e.TEXTURE_MIN_FILTER,ae[C.minFilter])):(e.texParameteri(I,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(I,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY)&&e.texParameteri(I,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(C.wrapS!==Un||C.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(I,e.TEXTURE_MAG_FILTER,R(C.magFilter)),e.texParameteri(I,e.TEXTURE_MIN_FILTER,R(C.minFilter)),C.minFilter!==$t&&C.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(e.texParameteri(I,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(I,e.TEXTURE_COMPARE_FUNC,te[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const fe=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===$t||C.minFilter!==Ac&&C.minFilter!==$a||C.type===pi&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===Za&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(e.texParameterf(I,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function ge(I,C){let re=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",k));const fe=C.source;let me=m.get(fe);me===void 0&&(me={},m.set(fe,me));const Ae=Y(C);if(Ae!==I.__cacheKey){me[Ae]===void 0&&(me[Ae]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,re=!0),me[Ae].usedTimes++;const Ve=me[I.__cacheKey];Ve!==void 0&&(me[I.__cacheKey].usedTimes--,Ve.usedTimes===0&&A(C)),I.__cacheKey=Ae,I.__webglTexture=me[Ae].texture}return re}function le(I,C,re){let fe=e.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(fe=e.TEXTURE_2D_ARRAY),C.isData3DTexture&&(fe=e.TEXTURE_3D);const me=ge(I,C),Ae=C.source;n.bindTexture(fe,I.__webglTexture,e.TEXTURE0+re);const Ve=i.get(Ae);if(Ae.version!==Ve.__version||me===!0){n.activeTexture(e.TEXTURE0+re),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,C.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE);const Ce=M(C)&&y(C.image)===!1;let oe=_(C.image,Ce,!1,u);oe=lt(C,oe);const j=y(oe)||o,_e=a.convert(C.format,C.colorSpace);let ye=a.convert(C.type),be=L(C.internalFormat,_e,ye,C.colorSpace);he(fe,C,j);let de;const He=C.mipmaps,tt=o&&C.isVideoTexture!==!0,W=Ve.__version===void 0||me===!0,Re=E(C,oe,j);if(C.isDepthTexture)be=e.DEPTH_COMPONENT,o?C.type===pi?be=e.DEPTH_COMPONENT32F:C.type===di?be=e.DEPTH_COMPONENT24:C.type===Di?be=e.DEPTH24_STENCIL8:be=e.DEPTH_COMPONENT16:C.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Ii&&be===e.DEPTH_COMPONENT&&C.type!==Wl&&C.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=di,ye=a.convert(C.type)),C.format===zr&&be===e.DEPTH_COMPONENT&&(be=e.DEPTH_STENCIL,C.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Di,ye=a.convert(C.type))),W&&(tt?n.texStorage2D(e.TEXTURE_2D,1,be,oe.width,oe.height):n.texImage2D(e.TEXTURE_2D,0,be,oe.width,oe.height,0,_e,ye,null));else if(C.isDataTexture)if(He.length>0&&j){tt&&W&&n.texStorage2D(e.TEXTURE_2D,Re,be,He[0].width,He[0].height);for(let Q=0,Me=He.length;Q<Me;Q++)de=He[Q],tt?n.texSubImage2D(e.TEXTURE_2D,Q,0,0,de.width,de.height,_e,ye,de.data):n.texImage2D(e.TEXTURE_2D,Q,be,de.width,de.height,0,_e,ye,de.data);C.generateMipmaps=!1}else tt?(W&&n.texStorage2D(e.TEXTURE_2D,Re,be,oe.width,oe.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,ye,oe.data)):n.texImage2D(e.TEXTURE_2D,0,be,oe.width,oe.height,0,_e,ye,oe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){tt&&W&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Re,be,He[0].width,He[0].height,oe.depth);for(let Q=0,Me=He.length;Q<Me;Q++)de=He[Q],C.format!==Dn?_e!==null?tt?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,oe.depth,_e,de.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,be,de.width,de.height,oe.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,oe.depth,_e,ye,de.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,be,de.width,de.height,oe.depth,0,_e,ye,de.data)}else{tt&&W&&n.texStorage2D(e.TEXTURE_2D,Re,be,He[0].width,He[0].height);for(let Q=0,Me=He.length;Q<Me;Q++)de=He[Q],C.format!==Dn?_e!==null?tt?n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,de.width,de.height,_e,de.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage2D(e.TEXTURE_2D,Q,0,0,de.width,de.height,_e,ye,de.data):n.texImage2D(e.TEXTURE_2D,Q,be,de.width,de.height,0,_e,ye,de.data)}else if(C.isDataArrayTexture)tt?(W&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Re,be,oe.width,oe.height,oe.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,ye,oe.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,be,oe.width,oe.height,oe.depth,0,_e,ye,oe.data);else if(C.isData3DTexture)tt?(W&&n.texStorage3D(e.TEXTURE_3D,Re,be,oe.width,oe.height,oe.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,ye,oe.data)):n.texImage3D(e.TEXTURE_3D,0,be,oe.width,oe.height,oe.depth,0,_e,ye,oe.data);else if(C.isFramebufferTexture){if(W)if(tt)n.texStorage2D(e.TEXTURE_2D,Re,be,oe.width,oe.height);else{let Q=oe.width,Me=oe.height;for(let Le=0;Le<Re;Le++)n.texImage2D(e.TEXTURE_2D,Le,be,Q,Me,0,_e,ye,null),Q>>=1,Me>>=1}}else if(He.length>0&&j){tt&&W&&n.texStorage2D(e.TEXTURE_2D,Re,be,He[0].width,He[0].height);for(let Q=0,Me=He.length;Q<Me;Q++)de=He[Q],tt?n.texSubImage2D(e.TEXTURE_2D,Q,0,0,_e,ye,de):n.texImage2D(e.TEXTURE_2D,Q,be,_e,ye,de);C.generateMipmaps=!1}else tt?(W&&n.texStorage2D(e.TEXTURE_2D,Re,be,oe.width,oe.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,_e,ye,oe)):n.texImage2D(e.TEXTURE_2D,0,be,_e,ye,oe);S(C,j)&&T(fe),Ve.__version=Ae.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function We(I,C,re){if(C.image.length!==6)return;const fe=ge(I,C),me=C.source;n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+re);const Ae=i.get(me);if(me.version!==Ae.__version||fe===!0){n.activeTexture(e.TEXTURE0+re),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,C.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,C.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE);const Ve=C.isCompressedTexture||C.image[0].isCompressedTexture,Ce=C.image[0]&&C.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!Ve&&!Ce?oe[Q]=_(C.image[Q],!1,!0,c):oe[Q]=Ce?C.image[Q].image:C.image[Q],oe[Q]=lt(C,oe[Q]);const j=oe[0],_e=y(j)||o,ye=a.convert(C.format,C.colorSpace),be=a.convert(C.type),de=L(C.internalFormat,ye,be,C.colorSpace),He=o&&C.isVideoTexture!==!0,tt=Ae.__version===void 0||fe===!0;let W=E(C,j,_e);he(e.TEXTURE_CUBE_MAP,C,_e);let Re;if(Ve){He&&tt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,W,de,j.width,j.height);for(let Q=0;Q<6;Q++){Re=oe[Q].mipmaps;for(let Me=0;Me<Re.length;Me++){const Le=Re[Me];C.format!==Dn?ye!==null?He?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Le.width,Le.height,ye,Le.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,de,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,0,0,Le.width,Le.height,ye,be,Le.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me,de,Le.width,Le.height,0,ye,be,Le.data)}}}else{Re=C.mipmaps,He&&tt&&(Re.length>0&&W++,n.texStorage2D(e.TEXTURE_CUBE_MAP,W,de,oe[0].width,oe[0].height));for(let Q=0;Q<6;Q++)if(Ce){He?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,ye,be,oe[Q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,de,oe[Q].width,oe[Q].height,0,ye,be,oe[Q].data);for(let Me=0;Me<Re.length;Me++){const ct=Re[Me].image[Q].image;He?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,ct.width,ct.height,ye,be,ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,de,ct.width,ct.height,0,ye,be,ct.data)}}else{He?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye,be,oe[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,de,ye,be,oe[Q]);for(let Me=0;Me<Re.length;Me++){const Le=Re[Me];He?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,0,0,ye,be,Le.image[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Me+1,de,ye,be,Le.image[Q])}}}S(C,_e)&&T(e.TEXTURE_CUBE_MAP),Ae.__version=me.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function V(I,C,re,fe,me){const Ae=a.convert(re.format,re.colorSpace),Ve=a.convert(re.type),Ce=L(re.internalFormat,Ae,Ve,re.colorSpace);i.get(C).__hasExternalTextures||(me===e.TEXTURE_3D||me===e.TEXTURE_2D_ARRAY?n.texImage3D(me,0,Ce,C.width,C.height,C.depth,0,Ae,Ve,null):n.texImage2D(me,0,Ce,C.width,C.height,0,Ae,Ve,null)),n.bindFramebuffer(e.FRAMEBUFFER,I),Ye(C)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,fe,me,i.get(re).__webglTexture,0,Oe(C)):(me===e.TEXTURE_2D||me>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,fe,me,i.get(re).__webglTexture,0),n.bindFramebuffer(e.FRAMEBUFFER,null)}function K(I,C,re){if(e.bindRenderbuffer(e.RENDERBUFFER,I),C.depthBuffer&&!C.stencilBuffer){let fe=e.DEPTH_COMPONENT16;if(re||Ye(C)){const me=C.depthTexture;me&&me.isDepthTexture&&(me.type===pi?fe=e.DEPTH_COMPONENT32F:me.type===di&&(fe=e.DEPTH_COMPONENT24));const Ae=Oe(C);Ye(C)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae,fe,C.width,C.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,fe,C.width,C.height)}else e.renderbufferStorage(e.RENDERBUFFER,fe,C.width,C.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,I)}else if(C.depthBuffer&&C.stencilBuffer){const fe=Oe(C);re&&Ye(C)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe,e.DEPTH24_STENCIL8,C.width,C.height):Ye(C)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe,e.DEPTH24_STENCIL8,C.width,C.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,I)}else{const fe=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let me=0;me<fe.length;me++){const Ae=fe[me],Ve=a.convert(Ae.format,Ae.colorSpace),Ce=a.convert(Ae.type),oe=L(Ae.internalFormat,Ve,Ce,Ae.colorSpace),j=Oe(C);re&&Ye(C)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,j,oe,C.width,C.height):Ye(C)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,j,oe,C.width,C.height):e.renderbufferStorage(e.RENDERBUFFER,oe,C.width,C.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Be(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),$(C.depthTexture,0);const fe=i.get(C.depthTexture).__webglTexture,me=Oe(C);if(C.depthTexture.format===Ii)Ye(C)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,fe,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,fe,0);else if(C.depthTexture.format===zr)Ye(C)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,fe,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Te(I){const C=i.get(I),re=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Be(C.__webglFramebuffer,I)}else if(re){C.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)n.bindFramebuffer(e.FRAMEBUFFER,C.__webglFramebuffer[fe]),C.__webglDepthbuffer[fe]=e.createRenderbuffer(),K(C.__webglDepthbuffer[fe],I,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=e.createRenderbuffer(),K(C.__webglDepthbuffer,I,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(I,C,re){const fe=i.get(I);C!==void 0&&V(fe.__webglFramebuffer,I,I.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),re!==void 0&&Te(I)}function Fe(I){const C=I.texture,re=i.get(I),fe=i.get(C);I.addEventListener("dispose",X),I.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=e.createTexture()),fe.__version=C.version,s.memory.textures++);const me=I.isWebGLCubeRenderTarget===!0,Ae=I.isWebGLMultipleRenderTargets===!0,Ve=y(I)||o;if(me){re.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)re.__webglFramebuffer[Ce]=e.createFramebuffer()}else{if(re.__webglFramebuffer=e.createFramebuffer(),Ae)if(r.drawBuffers){const Ce=I.texture;for(let oe=0,j=Ce.length;oe<j;oe++){const _e=i.get(Ce[oe]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&Ye(I)===!1){const Ce=Ae?C:[C];re.__webglMultisampledFramebuffer=e.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let oe=0;oe<Ce.length;oe++){const j=Ce[oe];re.__webglColorRenderbuffer[oe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);const _e=a.convert(j.format,j.colorSpace),ye=a.convert(j.type),be=L(j.internalFormat,_e,ye,j.colorSpace,I.isXRRenderTarget===!0),de=Oe(I);e.renderbufferStorageMultisample(e.RENDERBUFFER,de,be,I.width,I.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+oe,e.RENDERBUFFER,re.__webglColorRenderbuffer[oe])}e.bindRenderbuffer(e.RENDERBUFFER,null),I.depthBuffer&&(re.__webglDepthRenderbuffer=e.createRenderbuffer(),K(re.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(me){n.bindTexture(e.TEXTURE_CUBE_MAP,fe.__webglTexture),he(e.TEXTURE_CUBE_MAP,C,Ve);for(let Ce=0;Ce<6;Ce++)V(re.__webglFramebuffer[Ce],I,C,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Ce);S(C,Ve)&&T(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){const Ce=I.texture;for(let oe=0,j=Ce.length;oe<j;oe++){const _e=Ce[oe],ye=i.get(_e);n.bindTexture(e.TEXTURE_2D,ye.__webglTexture),he(e.TEXTURE_2D,_e,Ve),V(re.__webglFramebuffer,I,_e,e.COLOR_ATTACHMENT0+oe,e.TEXTURE_2D),S(_e,Ve)&&T(e.TEXTURE_2D)}n.unbindTexture()}else{let Ce=e.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?Ce=I.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ce,fe.__webglTexture),he(Ce,C,Ve),V(re.__webglFramebuffer,I,C,e.COLOR_ATTACHMENT0,Ce),S(C,Ve)&&T(Ce),n.unbindTexture()}I.depthBuffer&&Te(I)}function Ne(I){const C=y(I)||o,re=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let fe=0,me=re.length;fe<me;fe++){const Ae=re[fe];if(S(Ae,C)){const Ve=I.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Ce=i.get(Ae).__webglTexture;n.bindTexture(Ve,Ce),T(Ve),n.unbindTexture()}}}function we(I){if(o&&I.samples>0&&Ye(I)===!1){const C=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],re=I.width,fe=I.height;let me=e.COLOR_BUFFER_BIT;const Ae=[],Ve=I.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ce=i.get(I),oe=I.isWebGLMultipleRenderTargets===!0;if(oe)for(let j=0;j<C.length;j++)n.bindFramebuffer(e.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+j,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Ce.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+j,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let j=0;j<C.length;j++){Ae.push(e.COLOR_ATTACHMENT0+j),I.depthBuffer&&Ae.push(Ve);const _e=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(_e===!1&&(I.depthBuffer&&(me|=e.DEPTH_BUFFER_BIT),I.stencilBuffer&&(me|=e.STENCIL_BUFFER_BIT)),oe&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ce.__webglColorRenderbuffer[j]),_e===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Ve]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Ve])),oe){const ye=i.get(C[j]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ye,0)}e.blitFramebuffer(0,0,re,fe,0,0,re,fe,me,e.NEAREST),p&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),oe)for(let j=0;j<C.length;j++){n.bindFramebuffer(e.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+j,e.RENDERBUFFER,Ce.__webglColorRenderbuffer[j]);const _e=i.get(C[j]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Ce.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+j,e.TEXTURE_2D,_e,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function Oe(I){return Math.min(h,I.samples)}function Ye(I){const C=i.get(I);return o&&I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function nt(I){const C=s.render.frame;v.get(I)!==C&&(v.set(I,C),I.update())}function lt(I,C){const re=I.colorSpace,fe=I.format,me=I.type;return I.isCompressedTexture===!0||I.format===fl||re!==zn&&re!==Ni&&(re===it?o===!1?t.has("EXT_sRGB")===!0&&fe===Dn?(I.format=fl,I.minFilter=Mn,I.generateMipmaps=!1):C=wf.sRGBToLinear(C):(fe!==Dn||me!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),C}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=ie,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Ye}function Tx(e,t,n){const i=n.isWebGL2;function r(a,s=Ni){let o;if(a===vi)return e.UNSIGNED_BYTE;if(a===pf)return e.UNSIGNED_SHORT_4_4_4_4;if(a===mf)return e.UNSIGNED_SHORT_5_5_5_1;if(a===qp)return e.BYTE;if(a===jp)return e.SHORT;if(a===Wl)return e.UNSIGNED_SHORT;if(a===df)return e.INT;if(a===di)return e.UNSIGNED_INT;if(a===pi)return e.FLOAT;if(a===Za)return i?e.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===$p)return e.ALPHA;if(a===Dn)return e.RGBA;if(a===Zp)return e.LUMINANCE;if(a===Kp)return e.LUMINANCE_ALPHA;if(a===Ii)return e.DEPTH_COMPONENT;if(a===zr)return e.DEPTH_STENCIL;if(a===fl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Jp)return e.RED;if(a===vf)return e.RED_INTEGER;if(a===Qp)return e.RG;if(a===gf)return e.RG_INTEGER;if(a===_f)return e.RGBA_INTEGER;if(a===Rc||a===Lc||a===Cc||a===Pc)if(s===it)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Rc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Rc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Lc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Cc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Pc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Bu||a===zu||a===Gu||a===Hu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Bu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===zu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Gu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===em)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Vu||a===ku)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Vu)return s===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===ku)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Wu||a===Xu||a===Yu||a===qu||a===ju||a===$u||a===Zu||a===Ku||a===Ju||a===Qu||a===eh||a===th||a===nh||a===ih)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Wu)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xu)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yu)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qu)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ju)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===$u)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Zu)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ku)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ju)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qu)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===eh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===th)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===nh)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ih)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Uc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(a===Uc)return s===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===tm||a===rh||a===ah||a===sh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(a===Uc)return o.COMPRESSED_RED_RGTC1_EXT;if(a===rh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ah)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===sh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Di?i?e.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):e[a]!==void 0?e[a]:null}return{convert:r}}class Ax extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let wo=class extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Rx={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const g of t.hand.values()){const m=n.getJointPose(g,i),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new wo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}let Lx=class extends Wn{constructor(t,n,i,r,a,s,o,l,c,u){if(u=u!==void 0?u:Ii,u!==Ii&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ii&&(i=di),i===void 0&&u===zr&&(i=Di),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}};class Cx extends Aa{constructor(t,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const g=n.getContextAttributes();let m=null,d=null;const x=[],_=[];let y=null;const M=new hn;M.layers.enable(1),M.viewport=new wt;const S=new hn;S.layers.enable(2),S.viewport=new wt;const T=[M,S],L=new Ax;L.layers.enable(1),L.layers.enable(2);let E=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){y=N},this.getController=function(N){let O=x[N];return O===void 0&&(O=new el,x[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=x[N];return O===void 0&&(O=new el,x[N]=O),O.getGripSpace()},this.getHand=function(N){let O=x[N];return O===void 0&&(O=new el,x[N]=O),O.getHandSpace()};function k(N){const O=_.indexOf(N.inputSource);if(O===-1)return;const q=x[O];q!==void 0&&(q.update(N.inputSource,N.frame,c||s),q.dispatchEvent({type:N.type,data:N.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",w);for(let N=0;N<x.length;N++){const O=_[N];O!==null&&(_[N]=null,x[N].disconnect(O))}E=null,R=null,t.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",w),g.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:p}),d=new Hi(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let O=null,q=null,ae=null;g.depth&&(ae=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=g.stencil?zr:Ii,q=g.stencil?Di:di);const te={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:a};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(te),r.updateRenderState({layers:[f]}),d=new Hi(f.textureWidth,f.textureHeight,{format:Dn,type:vi,depthTexture:new Lx(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const he=t.properties.get(d);he.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function w(N){for(let O=0;O<N.removed.length;O++){const q=N.removed[O],ae=_.indexOf(q);ae>=0&&(_[ae]=null,x[ae].disconnect(q))}for(let O=0;O<N.added.length;O++){const q=N.added[O];let ae=_.indexOf(q);if(ae===-1){for(let he=0;he<x.length;he++)if(he>=_.length){_.push(q),ae=he;break}else if(_[he]===null){_[he]=q,ae=he;break}if(ae===-1)break}const te=x[ae];te&&te.connect(q)}}const A=new ee,D=new ee;function G(N,O,q){A.setFromMatrixPosition(O.matrixWorld),D.setFromMatrixPosition(q.matrixWorld);const ae=A.distanceTo(D),te=O.projectionMatrix.elements,he=q.projectionMatrix.elements,ge=te[14]/(te[10]-1),le=te[14]/(te[10]+1),We=(te[9]+1)/te[5],V=(te[9]-1)/te[5],K=(te[8]-1)/te[0],Be=(he[8]+1)/he[0],Te=ge*K,pe=ge*Be,Fe=ae/(-K+Be),Ne=Fe*-K;O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ne),N.translateZ(Fe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const we=ge+Fe,Oe=le+Fe,Ye=Te-Ne,nt=pe+(ae-Ne),lt=We*le/Oe*we,I=V*le/Oe*we;N.projectionMatrix.makePerspective(Ye,nt,lt,I,we,Oe),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function z(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(r===null)return N;y&&(N=y),L.near=S.near=M.near=N.near,L.far=S.far=M.far=N.far,(E!==L.near||R!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),E=L.near,R=L.far);const O=N.parent,q=L.cameras;z(L,O);for(let ae=0;ae<q.length;ae++)z(q[ae],O);return q.length===2?G(L,M,S):L.projectionMatrix.copy(M.projectionMatrix),y&&H(L,O),L};function H(N,O){const q=y;O===null?q.matrix.copy(N.matrixWorld):(q.matrix.copy(O.matrixWorld),q.matrix.invert(),q.matrix.multiply(N.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);const ae=q.children;for(let te=0,he=ae.length;te<he;te++)ae[te].updateMatrixWorld(!0);q.projectionMatrix.copy(N.projectionMatrix),q.projectionMatrixInverse.copy(N.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ka*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let Y=null;function $(N,O){if(u=O.getViewerPose(c||s),v=O,u!==null){const q=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let ae=!1;q.length!==L.cameras.length&&(L.cameras.length=0,ae=!0);for(let te=0;te<q.length;te++){const he=q[te];let ge=null;if(p!==null)ge=p.getViewport(he);else{const We=h.getViewSubImage(f,he);ge=We.viewport,te===0&&(t.setRenderTargetTextures(d,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),t.setRenderTarget(d))}let le=T[te];le===void 0&&(le=new hn,le.layers.enable(te),le.viewport=new wt,T[te]=le),le.matrix.fromArray(he.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(he.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ge.x,ge.y,ge.width,ge.height),te===0&&(L.matrix.copy(le.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ae===!0&&L.cameras.push(le)}}for(let q=0;q<x.length;q++){const ae=_[q],te=x[q];ae!==null&&te!==void 0&&te.update(ae,O,c||s)}Y&&Y(N,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),v=null}const ie=new Hf;ie.setAnimationLoop($),this.setAnimationLoop=function(N){Y=N},this.dispose=function(){}}}function Px(e,t){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Bf(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),h(m,d)):d.isMeshPhongMaterial?(a(m,d),u(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(a(m,d),v(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),g(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=e.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ux(e,t,n,i){let r={},a={},s=[];const o=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(v(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const M=_.program;i.updateUBOMapping(x,M);const S=t.render.frame;a[x.id]!==S&&(f(x),a[x.id]=S)}function u(x){const _=h();x.__bindingPointIndex=_;const y=e.createBuffer(),M=x.__size,S=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,M,S),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,y),y}function h(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=r[x.id],y=x.uniforms,M=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let S=0,T=y.length;S<T;S++){const L=y[S];if(p(L,S,M)===!0){const E=L.__offset,R=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let X=0;X<R.length;X++){const w=R[X],A=g(w);typeof w=="number"?(L.__data[0]=w,e.bufferSubData(e.UNIFORM_BUFFER,E+k,L.__data)):w.isMatrix3?(L.__data[0]=w.elements[0],L.__data[1]=w.elements[1],L.__data[2]=w.elements[2],L.__data[3]=w.elements[0],L.__data[4]=w.elements[3],L.__data[5]=w.elements[4],L.__data[6]=w.elements[5],L.__data[7]=w.elements[0],L.__data[8]=w.elements[6],L.__data[9]=w.elements[7],L.__data[10]=w.elements[8],L.__data[11]=w.elements[0]):(w.toArray(L.__data,k),k+=A.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,E,L.__data)}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(x,_,y){const M=x.value;if(y[_]===void 0){if(typeof M=="number")y[_]=M;else{const S=Array.isArray(M)?M:[M],T=[];for(let L=0;L<S.length;L++)T.push(S[L].clone());y[_]=T}return!0}else if(typeof M=="number"){if(y[_]!==M)return y[_]=M,!0}else{const S=Array.isArray(y[_])?y[_]:[y[_]],T=Array.isArray(M)?M:[M];for(let L=0;L<S.length;L++){const E=S[L];if(E.equals(T[L])===!1)return E.copy(T[L]),!0}}return!1}function v(x){const _=x.uniforms;let y=0;const M=16;let S=0;for(let T=0,L=_.length;T<L;T++){const E=_[T],R={boundary:0,storage:0},k=Array.isArray(E.value)?E.value:[E.value];for(let X=0,w=k.length;X<w;X++){const A=k[X],D=g(A);R.boundary+=D.boundary,R.storage+=D.storage}if(E.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,T>0){S=y%M;const X=M-S;S!==0&&X-R.boundary<0&&(y+=M-S,E.__offset=y)}y+=R.storage}return S=y%M,S>0&&(y+=M-S),x.__size=y,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=s.indexOf(_.__bindingPointIndex);s.splice(y,1),e.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function d(){for(const x in r)e.deleteBuffer(r[x]);s=[],r={},a={}}return{bind:l,update:c,dispose:d}}function Dx(){const e=Ja("canvas");return e.style.display="block",e}let vl=class{constructor(t={}){const{canvas:n=Dx(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=s;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=it,this.useLegacyLights=!0,this.toneMapping=ni,this.toneMappingExposure=1;const _=this;let y=!1,M=0,S=0,T=null,L=-1,E=null;const R=new wt,k=new wt;let X=null;const w=new dt(0);let A=0,D=n.width,G=n.height,z=1,H=null,Y=null;const $=new wt(0,0,D,G),ie=new wt(0,0,D,G);let N=!1;const O=new $l;let q=!1,ae=!1,te=null;const he=new Ot,ge=new ft,le=new ee,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return T===null?z:1}let K=i;function Be(U,ne){for(let ce=0;ce<U.length;ce++){const J=U[ce],ue=n.getContext(J,ne);if(ue!==null)return ue}return null}try{const U={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kl}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",Me,!1),K===null){const ne=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ne.shift(),K=Be(ne,U),K===null)throw Be(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Te,pe,Fe,Ne,we,Oe,Ye,nt,lt,I,C,re,fe,me,Ae,Ve,Ce,oe,j,_e,ye,be,de,He;function tt(){Te=new W_(K),pe=new O_(K,Te,t),Te.init(pe),be=new Tx(K,Te,pe),Fe=new Sx(K,Te,pe),Ne=new q_(K),we=new ux,Oe=new wx(K,Te,Fe,we,pe,be,Ne),Ye=new z_(_),nt=new k_(_),lt=new iv(K,pe),de=new F_(K,Te,lt,pe),I=new X_(K,lt,Ne,de),C=new K_(K,I,lt,Ne),j=new Z_(K,pe,Oe),Ve=new B_(we),re=new lx(_,Ye,nt,Te,pe,de,Ve),fe=new Px(_,we),me=new fx,Ae=new _x(Te,pe),oe=new I_(_,Ye,nt,Fe,C,f,l),Ce=new bx(_,C,pe),He=new Ux(K,Ne,pe,Fe),_e=new N_(K,Te,Ne,pe),ye=new Y_(K,Te,Ne,pe),Ne.programs=re.programs,_.capabilities=pe,_.extensions=Te,_.properties=we,_.renderLists=me,_.shadowMap=Ce,_.state=Fe,_.info=Ne}tt();const W=new Cx(_,K);this.xr=W,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const U=Te.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Te.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(U){U!==void 0&&(z=U,this.setSize(D,G,!1))},this.getSize=function(U){return U.set(D,G)},this.setSize=function(U,ne,ce=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=U,G=ne,n.width=Math.floor(U*z),n.height=Math.floor(ne*z),ce===!0&&(n.style.width=U+"px",n.style.height=ne+"px"),this.setViewport(0,0,U,ne)},this.getDrawingBufferSize=function(U){return U.set(D*z,G*z).floor()},this.setDrawingBufferSize=function(U,ne,ce){D=U,G=ne,z=ce,n.width=Math.floor(U*ce),n.height=Math.floor(ne*ce),this.setViewport(0,0,U,ne)},this.getCurrentViewport=function(U){return U.copy(R)},this.getViewport=function(U){return U.copy($)},this.setViewport=function(U,ne,ce,J){U.isVector4?$.set(U.x,U.y,U.z,U.w):$.set(U,ne,ce,J),Fe.viewport(R.copy($).multiplyScalar(z).floor())},this.getScissor=function(U){return U.copy(ie)},this.setScissor=function(U,ne,ce,J){U.isVector4?ie.set(U.x,U.y,U.z,U.w):ie.set(U,ne,ce,J),Fe.scissor(k.copy(ie).multiplyScalar(z).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(U){Fe.setScissorTest(N=U)},this.setOpaqueSort=function(U){H=U},this.setTransparentSort=function(U){Y=U},this.getClearColor=function(U){return U.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(U=!0,ne=!0,ce=!0){let J=0;if(U){let ue=!1;if(T!==null){const ze=T.texture.format;ue=ze===_f||ze===gf||ze===vf}if(ue){const ze=T.texture.type,b=ze===vi||ze===di||ze===Wl||ze===Di||ze===pf||ze===mf,P=oe.getClearColor(),B=oe.getClearAlpha(),se=P.r,Z=P.g,xe=P.b,ke=we.get(T).__webglFramebuffer;b?(p[0]=se,p[1]=Z,p[2]=xe,p[3]=B,K.clearBufferuiv(K.COLOR,ke,p)):(v[0]=se,v[1]=Z,v[2]=xe,v[3]=B,K.clearBufferiv(K.COLOR,ke,v))}else J|=K.COLOR_BUFFER_BIT}ne&&(J|=K.DEPTH_BUFFER_BIT),ce&&(J|=K.STENCIL_BUFFER_BIT),K.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),me.dispose(),Ae.dispose(),we.dispose(),Ye.dispose(),nt.dispose(),C.dispose(),de.dispose(),He.dispose(),re.dispose(),W.dispose(),W.removeEventListener("sessionstart",_t),W.removeEventListener("sessionend",on),te&&(te.dispose(),te=null),Dt.stop()};function Re(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const U=Ne.autoReset,ne=Ce.enabled,ce=Ce.autoUpdate,J=Ce.needsUpdate,ue=Ce.type;tt(),Ne.autoReset=U,Ce.enabled=ne,Ce.autoUpdate=ce,Ce.needsUpdate=J,Ce.type=ue}function Me(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Le(U){const ne=U.target;ne.removeEventListener("dispose",Le),ct(ne)}function ct(U){vt(U),we.remove(U)}function vt(U){const ne=we.get(U).programs;ne!==void 0&&(ne.forEach(function(ce){re.releaseProgram(ce)}),U.isShaderMaterial&&re.releaseShaderCache(U))}this.renderBufferDirect=function(U,ne,ce,J,ue,ze){ne===null&&(ne=We);const b=ue.isMesh&&ue.matrixWorld.determinant()<0,P=Ec(U,ne,ce,J,ue);Fe.setMaterial(J,b);let B=ce.index,se=1;J.wireframe===!0&&(B=I.getWireframeAttribute(ce),se=2);const Z=ce.drawRange,xe=ce.attributes.position;let ke=Z.start*se,Ee=(Z.start+Z.count)*se;ze!==null&&(ke=Math.max(ke,ze.start*se),Ee=Math.min(Ee,(ze.start+ze.count)*se)),B!==null?(ke=Math.max(ke,0),Ee=Math.min(Ee,B.count)):xe!=null&&(ke=Math.max(ke,0),Ee=Math.min(Ee,xe.count));const Ze=Ee-ke;if(Ze<0||Ze===1/0)return;de.setup(ue,J,P,ce,B);let Xe,Se=_e;if(B!==null&&(Xe=lt.get(B),Se=ye,Se.setIndex(Xe)),ue.isMesh)J.wireframe===!0?(Fe.setLineWidth(J.wireframeLinewidth*V()),Se.setMode(K.LINES)):Se.setMode(K.TRIANGLES);else if(ue.isLine){let ve=J.linewidth;ve===void 0&&(ve=1),Fe.setLineWidth(ve*V()),ue.isLineSegments?Se.setMode(K.LINES):ue.isLineLoop?Se.setMode(K.LINE_LOOP):Se.setMode(K.LINE_STRIP)}else ue.isPoints?Se.setMode(K.POINTS):ue.isSprite&&Se.setMode(K.TRIANGLES);if(ue.isInstancedMesh)Se.renderInstances(ke,Ze,ue.count);else if(ce.isInstancedBufferGeometry){const ve=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,mt=Math.min(ce.instanceCount,ve);Se.renderInstances(ke,Ze,mt)}else Se.render(ke,Ze)},this.compile=function(U,ne){function ce(J,ue,ze){J.transparent===!0&&J.side===Qn&&J.forceSinglePass===!1?(J.side=tn,J.needsUpdate=!0,mr(J,ue,ze),J.side=gi,J.needsUpdate=!0,mr(J,ue,ze),J.side=Qn):mr(J,ue,ze)}m=Ae.get(U),m.init(),x.push(m),U.traverseVisible(function(J){J.isLight&&J.layers.test(ne.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(_.useLegacyLights),U.traverse(function(J){const ue=J.material;if(ue)if(Array.isArray(ue))for(let ze=0;ze<ue.length;ze++){const b=ue[ze];ce(b,U,J)}else ce(ue,U,J)}),x.pop(),m=null};let Mt=null;function xn(U){Mt&&Mt(U)}function _t(){Dt.stop()}function on(){Dt.start()}const Dt=new Hf;Dt.setAnimationLoop(xn),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(U){Mt=U,W.setAnimationLoop(U),U===null?Dt.stop():Dt.start()},W.addEventListener("sessionstart",_t),W.addEventListener("sessionend",on),this.render=function(U,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(ne=W.updateCameraXR(ne)),U.isScene===!0&&U.onBeforeRender(_,U,ne,T),m=Ae.get(U,x.length),m.init(),x.push(m),he.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),O.setFromProjectionMatrix(he),ae=this.localClippingEnabled,q=Ve.init(this.clippingPlanes,ae),g=me.get(U,d.length),g.init(),d.push(g),Js(U,ne,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(H,Y),q===!0&&Ve.beginShadows();const ce=m.state.shadowsArray;if(Ce.render(ce,U,ne),q===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,oe.render(g,U),m.setupLights(_.useLegacyLights),ne.isArrayCamera){const J=ne.cameras;for(let ue=0,ze=J.length;ue<ze;ue++){const b=J[ue];Ia(g,U,b,b.viewport)}}else Ia(g,U,ne);T!==null&&(Oe.updateMultisampleRenderTarget(T),Oe.updateRenderTargetMipmap(T)),U.isScene===!0&&U.onAfterRender(_,U,ne),de.resetDefaultState(),L=-1,E=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Js(U,ne,ce,J){if(U.visible===!1)return;if(U.layers.test(ne.layers)){if(U.isGroup)ce=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ne);else if(U.isLight)m.pushLight(U),U.castShadow&&m.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||O.intersectsSprite(U)){J&&le.setFromMatrixPosition(U.matrixWorld).applyMatrix4(he);const b=C.update(U),P=U.material;P.visible&&g.push(U,b,P,ce,le.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||O.intersectsObject(U))){U.isSkinnedMesh&&U.skeleton.frame!==Ne.render.frame&&(U.skeleton.update(),U.skeleton.frame=Ne.render.frame);const b=C.update(U),P=U.material;if(J&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),le.copy(U.boundingSphere.center)):(b.boundingSphere===null&&b.computeBoundingSphere(),le.copy(b.boundingSphere.center)),le.applyMatrix4(U.matrixWorld).applyMatrix4(he)),Array.isArray(P)){const B=b.groups;for(let se=0,Z=B.length;se<Z;se++){const xe=B[se],ke=P[xe.materialIndex];ke&&ke.visible&&g.push(U,b,ke,ce,le.z,xe)}}else P.visible&&g.push(U,b,P,ce,le.z,null)}}const ze=U.children;for(let b=0,P=ze.length;b<P;b++)Js(ze[b],ne,ce,J)}function Ia(U,ne,ce,J){const ue=U.opaque,ze=U.transmissive,b=U.transparent;m.setupLightsView(ce),q===!0&&Ve.setGlobalState(_.clippingPlanes,ce),ze.length>0&&Mc(ue,ze,ne,ce),J&&Fe.viewport(R.copy(J)),ue.length>0&&pr(ue,ne,ce),ze.length>0&&pr(ze,ne,ce),b.length>0&&pr(b,ne,ce),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Mc(U,ne,ce,J){const ue=pe.isWebGL2;te===null&&(te=new Hi(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Za:vi,minFilter:$a,samples:ue&&o===!0?4:0})),_.getDrawingBufferSize(ge),ue?te.setSize(ge.x,ge.y):te.setSize(Do(ge.x),Do(ge.y));const ze=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(w),A=_.getClearAlpha(),A<1&&_.setClearColor(16777215,.5),_.clear();const b=_.toneMapping;_.toneMapping=ni,pr(U,ce,J),Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te);let P=!1;for(let B=0,se=ne.length;B<se;B++){const Z=ne[B],xe=Z.object,ke=Z.geometry,Ee=Z.material,Ze=Z.group;if(Ee.side===Qn&&xe.layers.test(J.layers)){const Xe=Ee.side;Ee.side=tn,Ee.needsUpdate=!0,Qs(xe,ce,J,ke,Ee,Ze),Ee.side=Xe,Ee.needsUpdate=!0,P=!0}}P===!0&&(Oe.updateMultisampleRenderTarget(te),Oe.updateRenderTargetMipmap(te)),_.setRenderTarget(ze),_.setClearColor(w,A),_.toneMapping=b}function pr(U,ne,ce){const J=ne.isScene===!0?ne.overrideMaterial:null;for(let ue=0,ze=U.length;ue<ze;ue++){const b=U[ue],P=b.object,B=b.geometry,se=J===null?b.material:J,Z=b.group;P.layers.test(ce.layers)&&Qs(P,ne,ce,B,se,Z)}}function Qs(U,ne,ce,J,ue,ze){U.onBeforeRender(_,ne,ce,J,ue,ze),U.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ue.onBeforeRender(_,ne,ce,J,U,ze),ue.transparent===!0&&ue.side===Qn&&ue.forceSinglePass===!1?(ue.side=tn,ue.needsUpdate=!0,_.renderBufferDirect(ce,ne,J,ue,U,ze),ue.side=gi,ue.needsUpdate=!0,_.renderBufferDirect(ce,ne,J,ue,U,ze),ue.side=Qn):_.renderBufferDirect(ce,ne,J,ue,U,ze),U.onAfterRender(_,ne,ce,J,ue,ze)}function mr(U,ne,ce){ne.isScene!==!0&&(ne=We);const J=we.get(U),ue=m.state.lights,ze=m.state.shadowsArray,b=ue.state.version,P=re.getParameters(U,ue.state,ze,ne,ce),B=re.getProgramCacheKey(P);let se=J.programs;J.environment=U.isMeshStandardMaterial?ne.environment:null,J.fog=ne.fog,J.envMap=(U.isMeshStandardMaterial?nt:Ye).get(U.envMap||J.environment),se===void 0&&(U.addEventListener("dispose",Le),se=new Map,J.programs=se);let Z=se.get(B);if(Z!==void 0){if(J.currentProgram===Z&&J.lightsStateVersion===b)return Fa(U,P),Z}else P.uniforms=re.getUniforms(U),U.onBuild(ce,P,_),U.onBeforeCompile(P,_),Z=re.acquireProgram(P,B),se.set(B,Z),J.uniforms=P.uniforms;const xe=J.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(xe.clippingPlanes=Ve.uniform),Fa(U,P),J.needsLights=bc(U),J.lightsStateVersion=b,J.needsLights&&(xe.ambientLightColor.value=ue.state.ambient,xe.lightProbe.value=ue.state.probe,xe.directionalLights.value=ue.state.directional,xe.directionalLightShadows.value=ue.state.directionalShadow,xe.spotLights.value=ue.state.spot,xe.spotLightShadows.value=ue.state.spotShadow,xe.rectAreaLights.value=ue.state.rectArea,xe.ltc_1.value=ue.state.rectAreaLTC1,xe.ltc_2.value=ue.state.rectAreaLTC2,xe.pointLights.value=ue.state.point,xe.pointLightShadows.value=ue.state.pointShadow,xe.hemisphereLights.value=ue.state.hemi,xe.directionalShadowMap.value=ue.state.directionalShadowMap,xe.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,xe.spotShadowMap.value=ue.state.spotShadowMap,xe.spotLightMatrix.value=ue.state.spotLightMatrix,xe.spotLightMap.value=ue.state.spotLightMap,xe.pointShadowMap.value=ue.state.pointShadowMap,xe.pointShadowMatrix.value=ue.state.pointShadowMatrix);const ke=Z.getUniforms(),Ee=Lo.seqWithValue(ke.seq,xe);return J.currentProgram=Z,J.uniformsList=Ee,Z}function Fa(U,ne){const ce=we.get(U);ce.outputColorSpace=ne.outputColorSpace,ce.instancing=ne.instancing,ce.skinning=ne.skinning,ce.morphTargets=ne.morphTargets,ce.morphNormals=ne.morphNormals,ce.morphColors=ne.morphColors,ce.morphTargetsCount=ne.morphTargetsCount,ce.numClippingPlanes=ne.numClippingPlanes,ce.numIntersection=ne.numClipIntersection,ce.vertexAlphas=ne.vertexAlphas,ce.vertexTangents=ne.vertexTangents,ce.toneMapping=ne.toneMapping}function Ec(U,ne,ce,J,ue){ne.isScene!==!0&&(ne=We),Oe.resetTextureUnits();const ze=ne.fog,b=J.isMeshStandardMaterial?ne.environment:null,P=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zn,B=(J.isMeshStandardMaterial?nt:Ye).get(J.envMap||b),se=J.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Z=!!ce.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),xe=!!ce.morphAttributes.position,ke=!!ce.morphAttributes.normal,Ee=!!ce.morphAttributes.color,Ze=J.toneMapped?_.toneMapping:ni,Xe=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Se=Xe!==void 0?Xe.length:0,ve=we.get(J),mt=m.state.lights;if(q===!0&&(ae===!0||U!==E)){const Gt=U===E&&J.id===L;Ve.setState(J,U,Gt)}let Qe=!1;J.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==mt.state.version||ve.outputColorSpace!==P||ue.isInstancedMesh&&ve.instancing===!1||!ue.isInstancedMesh&&ve.instancing===!0||ue.isSkinnedMesh&&ve.skinning===!1||!ue.isSkinnedMesh&&ve.skinning===!0||ve.envMap!==B||J.fog===!0&&ve.fog!==ze||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ve.numPlanes||ve.numIntersection!==Ve.numIntersection)||ve.vertexAlphas!==se||ve.vertexTangents!==Z||ve.morphTargets!==xe||ve.morphNormals!==ke||ve.morphColors!==Ee||ve.toneMapping!==Ze||pe.isWebGL2===!0&&ve.morphTargetsCount!==Se)&&(Qe=!0):(Qe=!0,ve.__version=J.version);let Et=ve.currentProgram;Qe===!0&&(Et=mr(J,ne,ue));let cn=!1,xt=!1,Nt=!1;const Ue=Et.getUniforms(),St=ve.uniforms;if(Fe.useProgram(Et.program)&&(cn=!0,xt=!0,Nt=!0),J.id!==L&&(L=J.id,xt=!0),cn||E!==U){if(Ue.setValue(K,"projectionMatrix",U.projectionMatrix),pe.logarithmicDepthBuffer&&Ue.setValue(K,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),E!==U&&(E=U,xt=!0,Nt=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const Gt=Ue.map.cameraPosition;Gt!==void 0&&Gt.setValue(K,le.setFromMatrixPosition(U.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ue.setValue(K,"isOrthographic",U.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||ue.isSkinnedMesh)&&Ue.setValue(K,"viewMatrix",U.matrixWorldInverse)}if(ue.isSkinnedMesh){Ue.setOptional(K,ue,"bindMatrix"),Ue.setOptional(K,ue,"bindMatrixInverse");const Gt=ue.skeleton;Gt&&(pe.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ue.setValue(K,"boneTexture",Gt.boneTexture,Oe),Ue.setValue(K,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jt=ce.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0&&pe.isWebGL2===!0)&&j.update(ue,ce,Et),(xt||ve.receiveShadow!==ue.receiveShadow)&&(ve.receiveShadow=ue.receiveShadow,Ue.setValue(K,"receiveShadow",ue.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(St.envMap.value=B,St.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1),xt&&(Ue.setValue(K,"toneMappingExposure",_.toneMappingExposure),ve.needsLights&&eo(St,Nt),ze&&J.fog===!0&&fe.refreshFogUniforms(St,ze),fe.refreshMaterialUniforms(St,J,z,G,te),Lo.upload(K,ve.uniformsList,St,Oe)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Lo.upload(K,ve.uniformsList,St,Oe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ue.setValue(K,"center",ue.center),Ue.setValue(K,"modelViewMatrix",ue.modelViewMatrix),Ue.setValue(K,"normalMatrix",ue.normalMatrix),Ue.setValue(K,"modelMatrix",ue.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Gt=J.uniformsGroups;for(let Na=0,to=Gt.length;Na<to;Na++)if(pe.isWebGL2){const no=Gt[Na];He.update(no,Et),He.bind(no,Et)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Et}function eo(U,ne){U.ambientLightColor.needsUpdate=ne,U.lightProbe.needsUpdate=ne,U.directionalLights.needsUpdate=ne,U.directionalLightShadows.needsUpdate=ne,U.pointLights.needsUpdate=ne,U.pointLightShadows.needsUpdate=ne,U.spotLights.needsUpdate=ne,U.spotLightShadows.needsUpdate=ne,U.rectAreaLights.needsUpdate=ne,U.hemisphereLights.needsUpdate=ne}function bc(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(U,ne,ce){we.get(U.texture).__webglTexture=ne,we.get(U.depthTexture).__webglTexture=ce;const J=we.get(U);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=ce===void 0,J.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,ne){const ce=we.get(U);ce.__webglFramebuffer=ne,ce.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(U,ne=0,ce=0){T=U,M=ne,S=ce;let J=!0,ue=null,ze=!1,b=!1;if(U){const B=we.get(U);B.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(K.FRAMEBUFFER,null),J=!1):B.__webglFramebuffer===void 0?Oe.setupRenderTarget(U):B.__hasExternalTextures&&Oe.rebindTextures(U,we.get(U.texture).__webglTexture,we.get(U.depthTexture).__webglTexture);const se=U.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(b=!0);const Z=we.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(ue=Z[ne],ze=!0):pe.isWebGL2&&U.samples>0&&Oe.useMultisampledRTT(U)===!1?ue=we.get(U).__webglMultisampledFramebuffer:ue=Z,R.copy(U.viewport),k.copy(U.scissor),X=U.scissorTest}else R.copy($).multiplyScalar(z).floor(),k.copy(ie).multiplyScalar(z).floor(),X=N;if(Fe.bindFramebuffer(K.FRAMEBUFFER,ue)&&pe.drawBuffers&&J&&Fe.drawBuffers(U,ue),Fe.viewport(R),Fe.scissor(k),Fe.setScissorTest(X),ze){const B=we.get(U.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+ne,B.__webglTexture,ce)}else if(b){const B=we.get(U.texture),se=ne||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,B.__webglTexture,ce||0,se)}L=-1},this.readRenderTargetPixels=function(U,ne,ce,J,ue,ze,b){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P=we.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&b!==void 0&&(P=P[b]),P){Fe.bindFramebuffer(K.FRAMEBUFFER,P);try{const B=U.texture,se=B.format,Z=B.type;if(se!==Dn&&be.convert(se)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xe=Z===Za&&(Te.has("EXT_color_buffer_half_float")||pe.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Z!==vi&&be.convert(Z)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Z===pi&&(pe.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=U.width-J&&ce>=0&&ce<=U.height-ue&&K.readPixels(ne,ce,J,ue,be.convert(se),be.convert(Z),ze)}finally{const B=T!==null?we.get(T).__webglFramebuffer:null;Fe.bindFramebuffer(K.FRAMEBUFFER,B)}}},this.copyFramebufferToTexture=function(U,ne,ce=0){const J=Math.pow(2,-ce),ue=Math.floor(ne.image.width*J),ze=Math.floor(ne.image.height*J);Oe.setTexture2D(ne,0),K.copyTexSubImage2D(K.TEXTURE_2D,ce,0,0,U.x,U.y,ue,ze),Fe.unbindTexture()},this.copyTextureToTexture=function(U,ne,ce,J=0){const ue=ne.image.width,ze=ne.image.height,b=be.convert(ce.format),P=be.convert(ce.type);Oe.setTexture2D(ce,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ce.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ce.unpackAlignment),ne.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,J,U.x,U.y,ue,ze,b,P,ne.image.data):ne.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,J,U.x,U.y,ne.mipmaps[0].width,ne.mipmaps[0].height,b,ne.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,J,U.x,U.y,b,P,ne.image),J===0&&ce.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(U,ne,ce,J,ue=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=U.max.x-U.min.x+1,b=U.max.y-U.min.y+1,P=U.max.z-U.min.z+1,B=be.convert(J.format),se=be.convert(J.type);let Z;if(J.isData3DTexture)Oe.setTexture3D(J,0),Z=K.TEXTURE_3D;else if(J.isDataArrayTexture)Oe.setTexture2DArray(J,0),Z=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,J.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,J.unpackAlignment);const xe=K.getParameter(K.UNPACK_ROW_LENGTH),ke=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Ee=K.getParameter(K.UNPACK_SKIP_PIXELS),Ze=K.getParameter(K.UNPACK_SKIP_ROWS),Xe=K.getParameter(K.UNPACK_SKIP_IMAGES),Se=ce.isCompressedTexture?ce.mipmaps[0]:ce.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Se.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Se.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,U.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,U.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,U.min.z),ce.isDataTexture||ce.isData3DTexture?K.texSubImage3D(Z,ue,ne.x,ne.y,ne.z,ze,b,P,B,se,Se.data):ce.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Z,ue,ne.x,ne.y,ne.z,ze,b,P,B,Se.data)):K.texSubImage3D(Z,ue,ne.x,ne.y,ne.z,ze,b,P,B,se,Se),K.pixelStorei(K.UNPACK_ROW_LENGTH,xe),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ke),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Ee),K.pixelStorei(K.UNPACK_SKIP_ROWS,Ze),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Xe),ue===0&&J.generateMipmaps&&K.generateMipmap(Z),Fe.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?Oe.setTextureCube(U,0):U.isData3DTexture?Oe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Oe.setTexture2DArray(U,0):Oe.setTexture2D(U,0),Fe.unbindTexture()},this.resetState=function(){M=0,S=0,T=null,Fe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?Fi:xf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fi?it:zn}};class qf extends vl{}qf.prototype.isWebGL1Renderer=!0;let Ix=class extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}},jf=class $f extends ur{constructor(t=1,n=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new ee,f=new ee,p=[],v=[],g=[],m=[];for(let d=0;d<=i;d++){const x=[],_=d/i;let y=0;d===0&&s===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let M=0;M<=n;M++){const S=M/n;h.x=-t*Math.cos(r+S*a)*Math.sin(s+_*o),h.y=t*Math.cos(s+_*o),h.z=t*Math.sin(r+S*a)*Math.sin(s+_*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(S+y,1-_),x.push(c++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const _=u[d][x+1],y=u[d][x],M=u[d+1][x],S=u[d+1][x+1];(d!==0||s>0)&&p.push(_,y,S),(d!==i-1||l<Math.PI)&&p.push(y,M,S)}this.setIndex(p),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(g,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $f(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Fx=class Zf extends ur{constructor(t=1,n=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],u=new ee,h=new ee,f=new ee;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const g=v/r*a,m=p/i*Math.PI*2;h.x=(t+n*Math.cos(m))*Math.cos(g),h.y=(t+n*Math.cos(m))*Math.sin(g),h.z=n*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const g=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,d=(r+1)*(p-1)+v,x=(r+1)*p+v;s.push(g,m,x),s.push(m,d,x)}this.setIndex(s),this.setAttribute("position",new vn(o,3)),this.setAttribute("normal",new vn(l,3)),this.setAttribute("uv",new vn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Kf=class extends Ys{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yf,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};const qh={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};let Nx=class{constructor(t,n,i){const r=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}};const Ox=new Nx;let Jf=class{constructor(t){this.manager=t!==void 0?t:Ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,a){i.load(t,r,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}},Bx=class extends Jf{constructor(t){super(t)}load(t,n,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,s=qh.get(t);if(s!==void 0)return a.manager.itemStart(t),setTimeout(function(){n&&n(s),a.manager.itemEnd(t)},0),s;const o=Ja("img");function l(){u(),qh.add(t,this),n&&n(this),a.manager.itemEnd(t)}function c(h){u(),r&&r(h),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}},Qf=class extends Jf{constructor(t){super(t)}load(t,n,i,r){const a=new Wn,s=new Bx(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}},ed=class extends Xn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}};const tl=new Ot,jh=new ee,$h=new ee;let zx=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $l,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;jh.setFromMatrixPosition(t.matrixWorld),n.position.copy(jh),$h.setFromMatrixPosition(t.target.matrixWorld),n.lookAt($h),n.updateMatrixWorld(),tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};const Zh=new Ot,Ha=new ee,nl=new ee;class Gx extends zx{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new ee(1,0,0),new ee(-1,0,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,1,0),new ee(0,-1,0)],this._cubeUps=[new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,0,1),new ee(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,r=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ha.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ha),nl.copy(i.position),nl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(nl),i.updateMatrixWorld(),r.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}let Hx=class extends ed{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Gx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Vx=class extends ed{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);var Kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kx(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var r=[null];r.push.apply(r,arguments);var a=Function.bind.apply(t,r);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var r=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return e[i]}})}),n}Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e});Function.prototype.name===void 0&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&function(){Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(i!=null)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}}();function bn(){}Object.assign(bn.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});var n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;var n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners!==void 0){var n=this._listeners,i=n[e];if(i!==void 0){var r=i.indexOf(t);r!==-1&&i.splice(r,1)}}},dispatchEvent:function(e){if(this._listeners!==void 0){var t=this._listeners,n=t[e.type];if(n!==void 0){e.target=this;var i=[],r=0,a=n.length;for(r=0;r<a;r++)i[r]=n[r];for(r=0;r<a;r++)i[r].call(this,e)}}}});var td="83",Wx={LEFT:0,MIDDLE:1,RIGHT:2},nd=0,Qa=1,Kl=2,Xx=3,id=0,Yx=1,qx=0,Jl=1,rd=2,Nr=0,_i=1,Ca=2,Ql=1,eu=2,fc=0,tu=1,hr=2,es=0,Pa=1,nu=2,iu=3,ru=4,au=5,ad={NoBlending:es,NormalBlending:Pa,AdditiveBlending:nu,SubtractiveBlending:iu,MultiplyBlending:ru,CustomBlending:au},su=100,sd=101,od=102,gl=103,_l=104,cd=200,ld=201,ud=202,hd=203,ou=204,cu=205,fd=206,dd=207,pd=208,md=209,vd=210,gd=0,_d=1,xd=2,Io=3,yd=4,Md=5,Ed=6,bd=7,qs=0,Sd=1,wd=2,Co=0,lu=1,Td=2,Ad=3,Rd=4,dc=300,pc=301,Fo=302,uu=303,No=304,hu=305,mc=306,vc=307,Ld={UVMapping:dc,CubeReflectionMapping:pc,CubeRefractionMapping:Fo,EquirectangularReflectionMapping:uu,EquirectangularRefractionMapping:No,SphericalReflectionMapping:hu,CubeUVReflectionMapping:mc,CubeUVRefractionMapping:vc},ti=1e3,pn=1001,ki=1002,xl={RepeatWrapping:ti,ClampToEdgeWrapping:pn,MirroredRepeatWrapping:ki},mn=1003,gc=1004,_c=1005,nn=1006,fu=1007,js=1008,yl={NearestFilter:mn,NearestMipMapNearestFilter:gc,NearestMipMapLinearFilter:_c,LinearFilter:nn,LinearMipMapNearestFilter:fu,LinearMipMapLinearFilter:js},Oo=1009,Cd=1010,Pd=1011,ts=1012,Ud=1013,du=1014,Hr=1015,Bo=1016,Dd=1017,Id=1018,Fd=1019,ns=1020,Nd=1021,Vr=1022,Gn=1023,Od=1024,Bd=1025,jx=Gn,Oi=1026,kr=1027,Ml=2001,El=2002,bl=2003,Sl=2004,wl=2100,Tl=2101,Al=2102,Rl=2103,zd=2151,Gd=2200,Hd=2201,Vd=2202,is=2300,ja=2301,Po=2302,Wi=2400,Ui=2401,rs=2402,pu=0,kd=1,Wd=2,as=3e3,Xd=3001,mu=3007,Yd=3002,$x=3003,qd=3004,jd=3005,$d=3006,Zd=3200,Kd=3201,Je={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t=new Array(36),n=0,i;return function(){for(var a=0;a<36;a++)a===8||a===13||a===18||a===23?t[a]="-":a===14?t[a]="4":(n<=2&&(n=33554432+Math.random()*16777216|0),i=n&15,n=n>>4,t[a]=e[a===19?i&3|8:i]);return t.join("")}}(),clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},degToRad:function(e){return e*Je.DEG2RAD},radToDeg:function(e){return e*Je.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},nearestPowerOfTwo:function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))},nextPowerOfTwo:function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e}};function Ie(e,t){this.x=e||0,this.y=t||0}Ie.prototype={constructor:Ie,isVector2:!0,get width(){return this.x},set width(e){this.x=e},get height(){return this.y},set height(e){this.y=e},set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return isFinite(e)?(this.x*=e,this.y*=e):(this.x=0,this.y=0),this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(){var e,t;return function(i,r){return e===void 0&&(e=new Ie,t=new Ie),e.set(i,i),t.set(r,r),this.clamp(e,t)}}(),clampLength:function(e,t){var n=this.length();return this.multiplyScalar(Math.max(e,Math.min(t,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){var e=Math.atan2(this.y,this.x);return e<0&&(e+=2*Math.PI),e},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,n=this.y-e.y;return t*t+n*n},distanceToManhattan:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.multiplyScalar(e/this.length())},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){var n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}};var Zx=0;function gt(e,t,n,i,r,a,s,o,l,c){Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Je.generateUUID(),this.name="",this.image=e!==void 0?e:gt.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:gt.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:pn,this.wrapT=i!==void 0?i:pn,this.magFilter=r!==void 0?r:nn,this.minFilter=a!==void 0?a:js,this.anisotropy=l!==void 0?l:1,this.format=s!==void 0?s:Gn,this.type=o!==void 0?o:Oo,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c!==void 0?c:as,this.version=0,this.onUpdate=null}gt.DEFAULT_IMAGE=void 0;gt.DEFAULT_MAPPING=dc;gt.prototype={constructor:gt,isTexture:!0,set needsUpdate(e){e===!0&&this.version++},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){if(e.textures[this.uuid]!==void 0)return e.textures[this.uuid];function t(r){var a;return r.toDataURL!==void 0?a=r:(a=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),a.width=r.width,a.height=r.height,a.getContext("2d").drawImage(r,0,0,r.width,r.height)),a.width>2048||a.height>2048?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png")}var n={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(this.image!==void 0){var i=this.image;i.uuid===void 0&&(i.uuid=Je.generateUUID()),e.images[i.uuid]===void 0&&(e.images[i.uuid]={uuid:i.uuid,url:t(i)}),n.image=i.uuid}return e.textures[this.uuid]=n,n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping===dc){if(e.multiply(this.repeat),e.add(this.offset),e.x<0||e.x>1)switch(this.wrapS){case ti:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case ki:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ti:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case ki:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}this.flipY&&(e.y=1-e.y)}}};Object.assign(gt.prototype,bn.prototype);function pt(e,t,n,i){this.x=e||0,this.y=t||0,this.z=n||0,this.w=i!==void 0?i:1}pt.prototype={constructor:pt,isVector4:!0,set:function(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return isFinite(e)?(this.x*=e,this.y*=e,this.z*=e,this.w*=e):(this.x=0,this.y=0,this.z=0,this.w=0),this},applyMatrix4:function(e){var t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);var t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){var t,n,i,r,a=.01,s=.1,o=e.elements,l=o[0],c=o[4],u=o[8],h=o[1],f=o[5],p=o[9],v=o[2],g=o[6],m=o[10];if(Math.abs(c-h)<a&&Math.abs(u-v)<a&&Math.abs(p-g)<a){if(Math.abs(c+h)<s&&Math.abs(u+v)<s&&Math.abs(p+g)<s&&Math.abs(l+f+m-3)<s)return this.set(1,0,0,0),this;t=Math.PI;var d=(l+1)/2,x=(f+1)/2,_=(m+1)/2,y=(c+h)/4,M=(u+v)/4,S=(p+g)/4;return d>x&&d>_?d<a?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(d),i=y/n,r=M/n):x>_?x<a?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=y/i,r=S/i):_<a?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=M/r,i=S/r),this.set(n,i,r,t),this}var T=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(g-p)/T,this.y=(u-v)/T,this.z=(h-c)/T,this.w=Math.acos((l+f+m-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(){var e,t;return function(i,r){return e===void 0&&(e=new pt,t=new pt),e.set(i,i,i,i),t.set(r,r,r,r),this.clamp(e,t)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(e){return this.multiplyScalar(e/this.length())},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}};function Ua(e,t,n){this.uuid=Je.generateUUID(),this.width=e,this.height=t,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),n=n||{},n.minFilter===void 0&&(n.minFilter=nn),this.texture=new gt(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Object.assign(Ua.prototype,bn.prototype,{isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Wr(e,t,n){Ua.call(this,e,t,n),this.activeCubeFace=0,this.activeMipMapLevel=0}Wr.prototype=Object.create(Ua.prototype);Wr.prototype.constructor=Wr;Wr.prototype.isWebGLRenderTargetCube=!0;function Ct(e,t,n,i){this._x=e||0,this._y=t||0,this._z=n||0,this._w=i!==void 0?i:1}Ct.prototype={constructor:Ct,get x(){return this._x},set x(e){this._x=e,this.onChangeCallback()},get y(){return this._y},set y(e){this._y=e,this.onChangeCallback()},get z(){return this._z},set z(e){this._z=e,this.onChangeCallback()},get w(){return this._w},set w(e){this._w=e,this.onChangeCallback()},set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this.onChangeCallback(),this},setFromEuler:function(e,t){if((e&&e.isEuler)===!1)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var n=Math.cos(e._x/2),i=Math.cos(e._y/2),r=Math.cos(e._z/2),a=Math.sin(e._x/2),s=Math.sin(e._y/2),o=Math.sin(e._z/2),l=e.order;return l==="XYZ"?(this._x=a*i*r+n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r-a*s*o):l==="YXZ"?(this._x=a*i*r+n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r+a*s*o):l==="ZXY"?(this._x=a*i*r-n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r-a*s*o):l==="ZYX"?(this._x=a*i*r-n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r+a*s*o):l==="YZX"?(this._x=a*i*r+n*s*o,this._y=n*s*r+a*i*o,this._z=n*i*o-a*s*r,this._w=n*i*r-a*s*o):l==="XZY"&&(this._x=a*i*r-n*s*o,this._y=n*s*r-a*i*o,this._z=n*i*o+a*s*r,this._w=n*i*r+a*s*o),t!==!1&&this.onChangeCallback(),this},setFromAxisAngle:function(e,t){var n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this.onChangeCallback(),this},setFromRotationMatrix:function(e){var t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],o=t[9],l=t[2],c=t[6],u=t[10],h=n+s+u,f;return h>0?(f=.5/Math.sqrt(h+1),this._w=.25/f,this._x=(c-o)*f,this._y=(r-l)*f,this._z=(a-i)*f):n>s&&n>u?(f=2*Math.sqrt(1+n-s-u),this._w=(c-o)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f):s>u?(f=2*Math.sqrt(1+s-n-u),this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(o+c)/f):(f=2*Math.sqrt(1+u-n-s),this._w=(a-i)/f,this._x=(r+l)/f,this._y=(o+c)/f,this._z=.25*f),this.onChangeCallback(),this},setFromUnitVectors:function(){var e,t,n=1e-6;return function(r,a){return e===void 0&&(e=new F),t=r.dot(a)+1,t<n?(t=0,Math.abs(r.x)>Math.abs(r.z)?e.set(-r.y,r.x,0):e.set(0,-r.z,r.y)):e.crossVectors(r,a),this._x=e.x,this._y=e.y,this._z=e.z,this._w=t,this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this.onChangeCallback(),this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){var n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=n*c+a*s+i*l-r*o,this._y=i*c+a*o+r*s-n*l,this._z=r*c+a*l+n*o-i*s,this._w=a*c-n*s-i*o-r*l,this.onChangeCallback(),this},slerp:function(e,t){if(t===0)return this;if(t===1)return this.copy(e);var n=this._x,i=this._y,r=this._z,a=this._w,s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;var o=Math.sqrt(1-s*s);if(Math.abs(o)<.001)return this._w=.5*(a+this._w),this._x=.5*(n+this._x),this._y=.5*(i+this._y),this._z=.5*(r+this._z),this;var l=Math.atan2(o,s),c=Math.sin((1-t)*l)/o,u=Math.sin(t*l)/o;return this._w=a*c+this._w*u,this._x=n*c+this._x*u,this._y=i*c+this._y*u,this._z=r*c+this._z*u,this.onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return t===void 0&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this.onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){}};Object.assign(Ct,{slerp:function(e,t,n,i){return n.copy(e).slerp(t,i)},slerpFlat:function(e,t,n,i,r,a,s){var o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(u!==v||o!==h||l!==f||c!==p){var g=1-s,m=o*h+l*f+c*p+u*v,d=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){var _=Math.sqrt(x),y=Math.atan2(_,m*d);g=Math.sin(g*y)/_,s=Math.sin(s*y)/_}var M=s*d;if(o=o*g+h*M,l=l*g+f*M,c=c*g+p*M,u=u*g+v*M,g===1-s){var S=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=S,l*=S,c*=S,u*=S}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}});function F(e,t,n){this.x=e||0,this.y=t||0,this.z=n||0}F.prototype={constructor:F,isVector3:!0,set:function(e,t,n){return this.x=e,this.y=t,this.z=n,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return isFinite(e)?(this.x*=e,this.y*=e,this.z*=e):(this.x=0,this.y=0,this.z=0),this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(){var e;return function(n){return(n&&n.isEuler)===!1&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),e===void 0&&(e=new Ct),this.applyQuaternion(e.setFromEuler(n))}}(),applyAxisAngle:function(){var e;return function(n,i){return e===void 0&&(e=new Ct),this.applyQuaternion(e.setFromAxisAngle(n,i))}}(),applyMatrix3:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this},applyMatrix4:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12],this.y=r[1]*t+r[5]*n+r[9]*i+r[13],this.z=r[2]*t+r[6]*n+r[10]*i+r[14],this},applyProjection:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this},applyQuaternion:function(e){var t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,o=e.w,l=o*t+a*i-s*n,c=o*n+s*t-r*i,u=o*i+r*n-a*t,h=-r*t-a*n-s*i;return this.x=l*o+h*-r+c*-s-u*-a,this.y=c*o+h*-a+u*-r-l*-s,this.z=u*o+h*-s+l*-a-c*-r,this},project:function(){var e;return function(n){return e===void 0&&(e=new $e),e.multiplyMatrices(n.projectionMatrix,e.getInverse(n.matrixWorld)),this.applyProjection(e)}}(),unproject:function(){var e;return function(n){return e===void 0&&(e=new $e),e.multiplyMatrices(n.matrixWorld,e.getInverse(n.projectionMatrix)),this.applyProjection(e)}}(),transformDirection:function(e){var t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(){var e,t;return function(i,r){return e===void 0&&(e=new F,t=new F),e.set(i,i,i),t.set(r,r,r),this.clamp(e,t)}}(),clampLength:function(e,t){var n=this.length();return this.multiplyScalar(Math.max(e,Math.min(t,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(e){return this.multiplyScalar(e/this.length())},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)},cross:function(e,t){if(t!==void 0)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t);var n=this.x,i=this.y,r=this.z;return this.x=i*e.z-r*e.y,this.y=r*e.x-n*e.z,this.z=n*e.y-i*e.x,this},crossVectors:function(e,t){var n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,o=t.z;return this.x=i*o-r*s,this.y=r*a-n*o,this.z=n*s-i*a,this},projectOnVector:function(e){var t=e.dot(this)/e.lengthSq();return this.copy(e).multiplyScalar(t)},projectOnPlane:function(){var e;return function(n){return e===void 0&&(e=new F),e.copy(this).projectOnVector(n),this.sub(e)}}(),reflect:function(){var e;return function(n){return e===void 0&&(e=new F),this.sub(e.copy(n).multiplyScalar(2*this.dot(n)))}}(),angleTo:function(e){var t=this.dot(e)/Math.sqrt(this.lengthSq()*e.lengthSq());return Math.acos(Je.clamp(t,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){var t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i},distanceToManhattan:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){var t=Math.sin(e.phi)*e.radius;return this.x=t*Math.sin(e.theta),this.y=Math.cos(e.phi)*e.radius,this.z=t*Math.cos(e.theta),this},setFromCylindrical:function(e){return this.x=e.radius*Math.sin(e.theta),this.y=e.y,this.z=e.radius*Math.cos(e.theta),this},setFromMatrixPosition:function(e){return this.setFromMatrixColumn(e,3)},setFromMatrixScale:function(e){var t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this},setFromMatrixColumn:function(e,t){if(typeof e=="number"){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");var n=e;e=t,t=n}return this.fromArray(e.elements,t*4)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}};function $e(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}$e.prototype={constructor:$e,isMatrix4:!0,set:function(e,t,n,i,r,a,s,o,l,c,u,h,f,p,v,g){var m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=s,m[13]=o,m[2]=l,m[6]=c,m[10]=u,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new $e().fromArray(this.elements)},copy:function(e){return this.elements.set(e.elements),this},copyPosition:function(e){var t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this},extractBasis:function(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this},extractRotation:function(){var e;return function(n){e===void 0&&(e=new F);var i=this.elements,r=n.elements,a=1/e.setFromMatrixColumn(n,0).length(),s=1/e.setFromMatrixColumn(n,1).length(),o=1/e.setFromMatrixColumn(n,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[8]=r[8]*o,i[9]=r[9]*o,i[10]=r[10]*o,this}}(),makeRotationFromEuler:function(e){(e&&e.isEuler)===!1&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){var h=a*c,f=a*u,p=s*c,v=s*u;t[0]=o*c,t[4]=-o*u,t[8]=l,t[1]=f+p*l,t[5]=h-v*l,t[9]=-s*o,t[2]=v-h*l,t[6]=p+f*l,t[10]=a*o}else if(e.order==="YXZ"){var g=o*c,m=o*u,d=l*c,x=l*u;t[0]=g+x*s,t[4]=d*s-m,t[8]=a*l,t[1]=a*u,t[5]=a*c,t[9]=-s,t[2]=m*s-d,t[6]=x+g*s,t[10]=a*o}else if(e.order==="ZXY"){var g=o*c,m=o*u,d=l*c,x=l*u;t[0]=g-x*s,t[4]=-a*u,t[8]=d+m*s,t[1]=m+d*s,t[5]=a*c,t[9]=x-g*s,t[2]=-a*l,t[6]=s,t[10]=a*o}else if(e.order==="ZYX"){var h=a*c,f=a*u,p=s*c,v=s*u;t[0]=o*c,t[4]=p*l-f,t[8]=h*l+v,t[1]=o*u,t[5]=v*l+h,t[9]=f*l-p,t[2]=-l,t[6]=s*o,t[10]=a*o}else if(e.order==="YZX"){var _=a*o,y=a*l,M=s*o,S=s*l;t[0]=o*c,t[4]=S-_*u,t[8]=M*u+y,t[1]=u,t[5]=a*c,t[9]=-s*c,t[2]=-l*c,t[6]=y*u+M,t[10]=_-S*u}else if(e.order==="XZY"){var _=a*o,y=a*l,M=s*o,S=s*l;t[0]=o*c,t[4]=-u,t[8]=l*c,t[1]=_*u+S,t[5]=a*c,t[9]=y*u-M,t[2]=M*u-y,t[6]=s*c,t[10]=S*u+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(e){var t=this.elements,n=e.x,i=e.y,r=e.z,a=e.w,s=n+n,o=i+i,l=r+r,c=n*s,u=n*o,h=n*l,f=i*o,p=i*l,v=r*l,g=a*s,m=a*o,d=a*l;return t[0]=1-(f+v),t[4]=u-d,t[8]=h+m,t[1]=u+d,t[5]=1-(c+v),t[9]=p-g,t[2]=h-m,t[6]=p+g,t[10]=1-(c+f),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},lookAt:function(){var e,t,n;return function(r,a,s){e===void 0&&(e=new F,t=new F,n=new F);var o=this.elements;return n.subVectors(r,a).normalize(),n.lengthSq()===0&&(n.z=1),e.crossVectors(s,n).normalize(),e.lengthSq()===0&&(n.z+=1e-4,e.crossVectors(s,n).normalize()),t.crossVectors(n,e),o[0]=e.x,o[4]=t.x,o[8]=n.x,o[1]=e.y,o[5]=t.y,o[9]=n.y,o[2]=e.z,o[6]=t.z,o[10]=n.z,this}}(),multiply:function(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){var n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],o=n[8],l=n[12],c=n[1],u=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],d=n[3],x=n[7],_=n[11],y=n[15],M=i[0],S=i[4],T=i[8],L=i[12],E=i[1],R=i[5],k=i[9],X=i[13],w=i[2],A=i[6],D=i[10],G=i[14],z=i[3],H=i[7],Y=i[11],$=i[15];return r[0]=a*M+s*E+o*w+l*z,r[4]=a*S+s*R+o*A+l*H,r[8]=a*T+s*k+o*D+l*Y,r[12]=a*L+s*X+o*G+l*$,r[1]=c*M+u*E+h*w+f*z,r[5]=c*S+u*R+h*A+f*H,r[9]=c*T+u*k+h*D+f*Y,r[13]=c*L+u*X+h*G+f*$,r[2]=p*M+v*E+g*w+m*z,r[6]=p*S+v*R+g*A+m*H,r[10]=p*T+v*k+g*D+m*Y,r[14]=p*L+v*X+g*G+m*$,r[3]=d*M+x*E+_*w+y*z,r[7]=d*S+x*R+_*A+y*H,r[11]=d*T+x*k+_*D+y*Y,r[15]=d*L+x*X+_*G+y*$,this},multiplyToArray:function(e,t,n){var i=this.elements;return this.multiplyMatrices(e,t),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this},multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},applyToVector3Array:function(){var e;return function(n,i,r){e===void 0&&(e=new F),i===void 0&&(i=0),r===void 0&&(r=n.length);for(var a=0,s=i;a<r;a+=3,s+=3)e.fromArray(n,s),e.applyMatrix4(this),e.toArray(n,s);return n}}(),applyToBufferAttribute:function(){var e;return function(n){e===void 0&&(e=new F);for(var i=0,r=n.count;i<r;i++)e.x=n.getX(i),e.y=n.getY(i),e.z=n.getZ(i),e.applyMatrix4(this),n.setXYZ(i,e.x,e.y,e.z);return n}}(),determinant:function(){var e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],o=e[9],l=e[13],c=e[2],u=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*o*u-i*l*u-r*s*h+n*l*h+i*s*f-n*o*f)+v*(+t*o*f-t*l*h+r*a*h-i*a*f+i*l*c-r*o*c)+g*(+t*l*u-t*s*f-r*a*u+n*a*f+r*s*c-n*l*c)+m*(-i*s*c-t*o*u+t*s*h+i*a*u-n*a*h+n*o*c)},transpose:function(){var e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e){var t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this},getInverse:function(e,t){var n=this.elements,i=e.elements,r=i[0],a=i[1],s=i[2],o=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],p=i[9],v=i[10],g=i[11],m=i[12],d=i[13],x=i[14],_=i[15],y=p*x*h-d*v*h+d*u*g-c*x*g-p*u*_+c*v*_,M=m*v*h-f*x*h-m*u*g+l*x*g+f*u*_-l*v*_,S=f*d*h-m*p*h+m*c*g-l*d*g-f*c*_+l*p*_,T=m*p*u-f*d*u-m*c*v+l*d*v+f*c*x-l*p*x,L=r*y+a*M+s*S+o*T;if(L===0){var E="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";if(t===!0)throw new Error(E);return console.warn(E),this.identity()}var R=1/L;return n[0]=y*R,n[1]=(d*v*o-p*x*o-d*s*g+a*x*g+p*s*_-a*v*_)*R,n[2]=(c*x*o-d*u*o+d*s*h-a*x*h-c*s*_+a*u*_)*R,n[3]=(p*u*o-c*v*o-p*s*h+a*v*h+c*s*g-a*u*g)*R,n[4]=M*R,n[5]=(f*x*o-m*v*o+m*s*g-r*x*g-f*s*_+r*v*_)*R,n[6]=(m*u*o-l*x*o-m*s*h+r*x*h+l*s*_-r*u*_)*R,n[7]=(l*v*o-f*u*o+f*s*h-r*v*h-l*s*g+r*u*g)*R,n[8]=S*R,n[9]=(m*p*o-f*d*o-m*a*g+r*d*g+f*a*_-r*p*_)*R,n[10]=(l*d*o-m*c*o+m*a*h-r*d*h-l*a*_+r*c*_)*R,n[11]=(f*c*o-l*p*o-f*a*h+r*p*h+l*a*g-r*c*g)*R,n[12]=T*R,n[13]=(f*d*s-m*p*s+m*a*v-r*d*v-f*a*x+r*p*x)*R,n[14]=(m*c*s-l*d*s-m*a*u+r*d*u+l*a*x-r*c*x)*R,n[15]=(l*p*s-f*c*s+f*a*u-r*p*u-l*a*v+r*c*v)*R,this},scale:function(e){var t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this},getMaxScaleOnAxis:function(){var e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))},makeTranslation:function(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this},makeRotationX:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this},makeRotationY:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this},makeRotationZ:function(e){var t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){var n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,o=e.z,l=r*a,c=r*s;return this.set(l*a+n,l*s-i*o,l*o+i*s,0,l*s+i*o,c*s+n,c*o-i*a,0,l*o-i*s,c*o+i*a,r*o*o+n,0,0,0,0,1),this},makeScale:function(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,n){return this.makeRotationFromQuaternion(t),this.scale(n),this.setPosition(e),this},decompose:function(){var e,t;return function(i,r,a){e===void 0&&(e=new F,t=new $e);var s=this.elements,o=e.set(s[0],s[1],s[2]).length(),l=e.set(s[4],s[5],s[6]).length(),c=e.set(s[8],s[9],s[10]).length(),u=this.determinant();u<0&&(o=-o),i.x=s[12],i.y=s[13],i.z=s[14],t.elements.set(this.elements);var h=1/o,f=1/l,p=1/c;return t.elements[0]*=h,t.elements[1]*=h,t.elements[2]*=h,t.elements[4]*=f,t.elements[5]*=f,t.elements[6]*=f,t.elements[8]*=p,t.elements[9]*=p,t.elements[10]*=p,r.setFromRotationMatrix(t),a.x=o,a.y=l,a.z=c,this}}(),makeFrustum:function(e,t,n,i,r,a){var s=this.elements,o=2*r/(t-e),l=2*r/(i-n),c=(t+e)/(t-e),u=(i+n)/(i-n),h=-(a+r)/(a-r),f=-2*a*r/(a-r);return s[0]=o,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=l,s[9]=u,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this},makePerspective:function(e,t,n,i){var r=n*Math.tan(Je.DEG2RAD*e*.5),a=-r,s=a*t,o=r*t;return this.makeFrustum(s,o,a,r,n,i)},makeOrthographic:function(e,t,n,i,r,a){var s=this.elements,o=1/(t-e),l=1/(n-i),c=1/(a-r),u=(t+e)*o,h=(n+i)*l,f=(a+r)*c;return s[0]=2*o,s[4]=0,s[8]=0,s[12]=-u,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this},equals:function(e){for(var t=this.elements,n=e.elements,i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(var n=0;n<16;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);var n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};function xi(e,t,n,i,r,a,s,o,l,c){e=e!==void 0?e:[],t=t!==void 0?t:pc,gt.call(this,e,t,n,i,r,a,s,o,l,c),this.flipY=!1}xi.prototype=Object.create(gt.prototype);xi.prototype.constructor=xi;xi.prototype.isCubeTexture=!0;Object.defineProperty(xi.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});var Jd=new gt,Qd=new xi;function ep(){this.seq=[],this.map={}}var Jh=[],Qh=[];function Da(e,t,n){var i=e[0];if(i<=0||i>0)return e;var r=t*n,a=Jh[r];if(a===void 0&&(a=new Float32Array(r),Jh[r]=a),t!==0){i.toArray(a,0);for(var s=1,o=0;s!==t;++s)o+=n,e[s].toArray(a,o)}return a}function tp(e,t){var n=Qh[t];n===void 0&&(n=new Int32Array(t),Qh[t]=n);for(var i=0;i!==t;++i)n[i]=e.allocTextureUnit();return n}function Kx(e,t){e.uniform1f(this.addr,t)}function Jx(e,t){e.uniform1i(this.addr,t)}function Qx(e,t){t.x===void 0?e.uniform2fv(this.addr,t):e.uniform2f(this.addr,t.x,t.y)}function ey(e,t){t.x!==void 0?e.uniform3f(this.addr,t.x,t.y,t.z):t.r!==void 0?e.uniform3f(this.addr,t.r,t.g,t.b):e.uniform3fv(this.addr,t)}function ty(e,t){t.x===void 0?e.uniform4fv(this.addr,t):e.uniform4f(this.addr,t.x,t.y,t.z,t.w)}function ny(e,t){e.uniformMatrix2fv(this.addr,!1,t.elements||t)}function iy(e,t){e.uniformMatrix3fv(this.addr,!1,t.elements||t)}function ry(e,t){e.uniformMatrix4fv(this.addr,!1,t.elements||t)}function ay(e,t,n){var i=n.allocTextureUnit();e.uniform1i(this.addr,i),n.setTexture2D(t||Jd,i)}function sy(e,t,n){var i=n.allocTextureUnit();e.uniform1i(this.addr,i),n.setTextureCube(t||Qd,i)}function np(e,t){e.uniform2iv(this.addr,t)}function ip(e,t){e.uniform3iv(this.addr,t)}function rp(e,t){e.uniform4iv(this.addr,t)}function oy(e){switch(e){case 5126:return Kx;case 35664:return Qx;case 35665:return ey;case 35666:return ty;case 35674:return ny;case 35675:return iy;case 35676:return ry;case 35678:return ay;case 35680:return sy;case 5124:case 35670:return Jx;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp}}function cy(e,t){e.uniform1fv(this.addr,t)}function ly(e,t){e.uniform1iv(this.addr,t)}function uy(e,t){e.uniform2fv(this.addr,Da(t,this.size,2))}function hy(e,t){e.uniform3fv(this.addr,Da(t,this.size,3))}function fy(e,t){e.uniform4fv(this.addr,Da(t,this.size,4))}function dy(e,t){e.uniformMatrix2fv(this.addr,!1,Da(t,this.size,4))}function py(e,t){e.uniformMatrix3fv(this.addr,!1,Da(t,this.size,9))}function my(e,t){e.uniformMatrix4fv(this.addr,!1,Da(t,this.size,16))}function vy(e,t,n){var i=t.length,r=tp(n,i);e.uniform1iv(this.addr,r);for(var a=0;a!==i;++a)n.setTexture2D(t[a]||Jd,r[a])}function gy(e,t,n){var i=t.length,r=tp(n,i);e.uniform1iv(this.addr,r);for(var a=0;a!==i;++a)n.setTextureCube(t[a]||Qd,r[a])}function _y(e){switch(e){case 5126:return cy;case 35664:return uy;case 35665:return hy;case 35666:return fy;case 35674:return dy;case 35675:return py;case 35676:return my;case 35678:return vy;case 35680:return gy;case 5124:case 35670:return ly;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp}}function xy(e,t,n){this.id=e,this.addr=n,this.setValue=oy(t.type)}function yy(e,t,n){this.id=e,this.addr=n,this.size=t.size,this.setValue=_y(t.type)}function ap(e){this.id=e,ep.call(this)}ap.prototype.setValue=function(e,t){for(var n=this.seq,i=0,r=n.length;i!==r;++i){var a=n[i];a.setValue(e,t[a.id])}};var il=/([\w\d_]+)(\])?(\[|\.)?/g;function ef(e,t){e.seq.push(t),e.map[t.id]=t}function My(e,t,n){var i=e.name,r=i.length;for(il.lastIndex=0;;){var a=il.exec(i),s=il.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){ef(n,c===void 0?new xy(o,e,t):new yy(o,e,t));break}else{var u=n.map,h=u[o];h===void 0&&(h=new ap(o),ef(n,h)),n=h}}}function yi(e,t,n){ep.call(this),this.renderer=n;for(var i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),r=0;r!==i;++r){var a=e.getActiveUniform(t,r),s=a.name,o=e.getUniformLocation(t,s);My(a,o,this)}}yi.prototype.setValue=function(e,t,n){var i=this.map[t];i!==void 0&&i.setValue(e,n,this.renderer)};yi.prototype.set=function(e,t,n){var i=this.map[n];i!==void 0&&i.setValue(e,t[n],this.renderer)};yi.prototype.setOptional=function(e,t,n){var i=t[n];i!==void 0&&this.setValue(e,n,i)};yi.upload=function(e,t,n,i){for(var r=0,a=t.length;r!==a;++r){var s=t[r],o=n[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}};yi.seqWithValue=function(e,t){for(var n=[],i=0,r=e.length;i!==r;++i){var a=e[i];a.id in t&&n.push(a)}return n};var en={merge:function(e){for(var t={},n=0;n<e.length;n++){var i=this.clone(e[n]);for(var r in i)t[r]=i[r]}return t},clone:function(e){var t={};for(var n in e){t[n]={};for(var i in e[n]){var r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}},Ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif
`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif
`,Sy=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif
`,wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( PHYSICAL )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif
`,Ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ay=`
vec3 transformed = vec3( position );
`,Ry=`
vec3 objectNormal = vec3( normal );
`,Ly=`float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
		if( decayExponent > 0.0 ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
			return distanceFalloff * maxDistanceCutoffFactor;
#else
			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
#endif
		}
		return 1.0;
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;
	const float LUT_BIAS  = 0.5/LUT_SIZE;
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 P = geometry.position;
	float theta = acos( dot( N, V ) );
	vec2 uv = vec2(
		sqrt( saturate( roughness ) ),
		saturate( theta / ( 0.5 * PI ) ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
void clipQuadToHorizon( inout vec3 L[5], out int n ) {
	int config = 0;
	if ( L[0].z > 0.0 ) config += 1;
	if ( L[1].z > 0.0 ) config += 2;
	if ( L[2].z > 0.0 ) config += 4;
	if ( L[3].z > 0.0 ) config += 8;
	n = 0;
	if ( config == 0 ) {
	} else if ( config == 1 ) {
		n = 3;
		L[1] = -L[1].z * L[0] + L[0].z * L[1];
		L[2] = -L[3].z * L[0] + L[0].z * L[3];
	} else if ( config == 2 ) {
		n = 3;
		L[0] = -L[0].z * L[1] + L[1].z * L[0];
		L[2] = -L[2].z * L[1] + L[1].z * L[2];
	} else if ( config == 3 ) {
		n = 4;
		L[2] = -L[2].z * L[1] + L[1].z * L[2];
		L[3] = -L[3].z * L[0] + L[0].z * L[3];
	} else if ( config == 4 ) {
		n = 3;
		L[0] = -L[3].z * L[2] + L[2].z * L[3];
		L[1] = -L[1].z * L[2] + L[2].z * L[1];
	} else if ( config == 5 ) {
		n = 0;
	} else if ( config == 6 ) {
		n = 4;
		L[0] = -L[0].z * L[1] + L[1].z * L[0];
		L[3] = -L[3].z * L[2] + L[2].z * L[3];
	} else if ( config == 7 ) {
		n = 5;
		L[4] = -L[3].z * L[0] + L[0].z * L[3];
		L[3] = -L[3].z * L[2] + L[2].z * L[3];
	} else if ( config == 8 ) {
		n = 3;
		L[0] = -L[0].z * L[3] + L[3].z * L[0];
		L[1] = -L[2].z * L[3] + L[3].z * L[2];
		L[2] =  L[3];
	} else if ( config == 9 ) {
		n = 4;
		L[1] = -L[1].z * L[0] + L[0].z * L[1];
		L[2] = -L[2].z * L[3] + L[3].z * L[2];
	} else if ( config == 10 ) {
		n = 0;
	} else if ( config == 11 ) {
		n = 5;
		L[4] = L[3];
		L[3] = -L[2].z * L[3] + L[3].z * L[2];
		L[2] = -L[2].z * L[1] + L[1].z * L[2];
	} else if ( config == 12 ) {
		n = 4;
		L[1] = -L[1].z * L[2] + L[2].z * L[1];
		L[0] = -L[0].z * L[3] + L[3].z * L[0];
	} else if ( config == 13 ) {
		n = 5;
		L[4] = L[3];
		L[3] = L[2];
		L[2] = -L[1].z * L[2] + L[2].z * L[1];
		L[1] = -L[1].z * L[0] + L[0].z * L[1];
	} else if ( config == 14 ) {
		n = 5;
		L[4] = -L[0].z * L[3] + L[3].z * L[0];
		L[0] = -L[0].z * L[1] + L[1].z * L[0];
	} else if ( config == 15 ) {
		n = 4;
	}
	if ( n == 3 )
		L[3] = L[0];
	if ( n == 4 )
		L[4] = L[0];
}
float integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {
	float cosTheta = dot( v1, v2 );
	float theta = acos( cosTheta );
	float res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );
	return res;
}
void initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {
	rectPoints[0] = pos - halfWidth - halfHeight;
	rectPoints[1] = pos + halfWidth - halfHeight;
	rectPoints[2] = pos + halfWidth + halfHeight;
	rectPoints[3] = pos - halfWidth + halfHeight;
}
vec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 P = geometry.position;
	vec3 T1, T2;
	T1 = normalize(V - N * dot( V, N ));
	T2 = - cross( N, T1 );
	mat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );
	vec3 clippedRect[5];
	clippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );
	clippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );
	clippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );
	clippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );
	int n;
	clipQuadToHorizon(clippedRect, n);
	if ( n == 0 )
		return vec3( 0, 0, 0 );
	clippedRect[0] = normalize( clippedRect[0] );
	clippedRect[1] = normalize( clippedRect[1] );
	clippedRect[2] = normalize( clippedRect[2] );
	clippedRect[3] = normalize( clippedRect[3] );
	clippedRect[4] = normalize( clippedRect[4] );
	float sum = 0.0;
	sum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );
	sum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );
	sum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );
	if (n >= 4)
		sum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );
	if (n == 5)
		sum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );
	sum = max( 0.0, sum );
	vec3 Lo_i = vec3( sum, sum, sum );
	return Lo_i;
}
vec3 Rect_Area_Light_Specular_Reflectance(
		const in GeometricContext geometry,
		const in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,
		const in float roughness,
		const in sampler2D ltcMat, const in sampler2D ltcMag ) {
	vec3 rectPoints[4];
	initRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );
	vec2 uv = ltcTextureCoords( geometry, roughness );
	vec4 brdfLtcApproxParams, t;
	brdfLtcApproxParams = texture2D( ltcMat, uv );
	t = texture2D( ltcMat, uv );
	float brdfLtcScalar = texture2D( ltcMag, uv ).a;
	mat3 brdfLtcApproxMat = mat3(
		vec3(   1,   0, t.y ),
		vec3(   0, t.z,   0 ),
		vec3( t.w,   0, t.x )
	);
	vec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );
	specularReflectance *= brdfLtcScalar;
	return specularReflectance;
}
vec3 Rect_Area_Light_Diffuse_Reflectance(
		const in GeometricContext geometry,
		const in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {
	vec3 rectPoints[4];
	initRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );
	mat3 diffuseBrdfMat = mat3(1);
	vec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );
	return diffuseReflectance;
}
vec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;
	return specularColor * AB.x + AB.y;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
`,Cy=`#ifdef USE_BUMPMAP
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
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = dFdx( surf_pos );
		vec3 vSigmaY = dFdy( surf_pos );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif
`,Py=`#if NUM_CLIPPING_PLANES > 0
	for ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {
		vec4 plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;
	}
		
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {
			vec4 plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;
		}
		if ( clipped ) discard;
	
	#endif
#endif
`,Uy=`#if NUM_CLIPPING_PLANES > 0
	#if ! defined( PHYSICAL ) && ! defined( PHONG )
		varying vec3 vViewPosition;
	#endif
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif
`,Dy=`#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )
	varying vec3 vViewPosition;
#endif
`,Iy=`#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )
	vViewPosition = - mvPosition.xyz;
#endif
`,Fy=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Ny=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif
`,Oy=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,By=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,zy=`#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6
#define saturate(a) clamp( a, 0.0, 1.0 )
#define whiteCompliment(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
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
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transpose( const in mat3 v ) {
	mat3 tmp;
	tmp[0] = vec3(v[0].x, v[1].x, v[2].x);
	tmp[1] = vec3(v[0].y, v[1].y, v[2].y);
	tmp[2] = vec3(v[0].z, v[1].z, v[2].z);
	return tmp;
}
`,Gy=`#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_textureSize (1024.0)
int getFaceFromDirection(vec3 direction) {
	vec3 absDirection = abs(direction);
	int face = -1;
	if( absDirection.x > absDirection.z ) {
		if(absDirection.x > absDirection.y )
			face = direction.x > 0.0 ? 0 : 3;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	else {
		if(absDirection.z > absDirection.y )
			face = direction.z > 0.0 ? 2 : 5;
		else
			face = direction.y > 0.0 ? 1 : 4;
	}
	return face;
}
#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)
#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))
vec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {
	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);
	float dxRoughness = dFdx(roughness);
	float dyRoughness = dFdy(roughness);
	vec3 dx = dFdx( vec * scale * dxRoughness );
	vec3 dy = dFdy( vec * scale * dyRoughness );
	float d = max( dot( dx, dx ), dot( dy, dy ) );
	d = clamp(d, 1.0, cubeUV_rangeClamp);
	float mipLevel = 0.5 * log2(d);
	return vec2(floor(mipLevel), fract(mipLevel));
}
#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)
#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)
vec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {
	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;
	float a = 16.0 * cubeUV_rcpTextureSize;
	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );
	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;
	float powScale = exp2_packed.x * exp2_packed.y;
	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;
	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;
	bool bRes = mipLevel == 0.0;
	scale =  bRes && (scale < a) ? a : scale;
	vec3 r;
	vec2 offset;
	int face = getFaceFromDirection(direction);
	float rcpPowScale = 1.0 / powScale;
	if( face == 0) {
		r = vec3(direction.x, -direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;
	}
	else if( face == 1) {
		r = vec3(direction.y, direction.x, direction.z);
		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;
	}
	else if( face == 2) {
		r = vec3(direction.z, direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;
	}
	else if( face == 3) {
		r = vec3(direction.x, direction.z, direction.y);
		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;
	}
	else if( face == 4) {
		r = vec3(direction.y, direction.x, -direction.z);
		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;
	}
	else {
		r = vec3(direction.z, -direction.x, direction.y);
		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);
		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;
	}
	r = normalize(r);
	float texelOffset = 0.5 * cubeUV_rcpTextureSize;
	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;
	vec2 base = offset + vec2( texelOffset );
	return base + s * ( scale - 2.0 * texelOffset );
}
#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)
vec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {
	float roughnessVal = roughness* cubeUV_maxLods3;
	float r1 = floor(roughnessVal);
	float r2 = r1 + 1.0;
	float t = fract(roughnessVal);
	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);
	float s = mipInfo.y;
	float level0 = mipInfo.x;
	float level1 = level0 + 1.0;
	level1 = level1 > 5.0 ? 5.0 : level1;
	level0 += min( floor( s + 0.5 ), 5.0 );
	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);
	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));
	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);
	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));
	vec4 result = mix(color10, color20, t);
	return vec4(result.rgb, 1.0);
}
#endif
`,Hy=`#ifdef FLIP_SIDED
	objectNormal = -objectNormal;
#endif
vec3 transformedNormal = normalMatrix * objectNormal;
`,Vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif
`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );
#endif
`,Wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif
`,Xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif
`,Yy=`  gl_FragColor = linearToOutputTexel( gl_FragColor );
`,qy=`
vec4 LinearToLinear( in vec4 value ) {
  return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );
}
vec4 sRGBToLinear( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );
}
vec4 LinearTosRGB( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );
}
vec4 RGBEToLinear( in vec4 value ) {
  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
  float maxComponent = max( max( value.r, value.g ), value.b );
  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
  return vec4( value.xyz * value.w * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
  float maxRGB = max( value.x, max( value.g, value.b ) );
  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );
  M            = ceil( M * 255.0 ) / 255.0;
  return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
    float maxRGB = max( value.x, max( value.g, value.b ) );
    float D      = max( maxRange / maxRGB, 1.0 );
    D            = min( floor( D ) / 255.0, 1.0 );
    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;
  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));
  vec4 vResult;
  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
  vResult.w = fract(Le);
  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;
  return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
  float Le = value.z * 255.0 + value.w;
  vec3 Xp_Y_XYZp;
  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);
  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;
  return vec4( max(vRGB, 0.0), 1.0 );
}
`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToVertex, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		vec2 sampleUV;
		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );
		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
		vec4 envColor = texture2D( envMap, sampleUV );
	#elif defined( ENVMAP_TYPE_SPHERE )
		vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );
		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	envColor = envMapTexelToLinear( envColor );
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif
`,$y=`#if defined( USE_ENVMAP ) || defined( PHYSICAL )
	uniform float reflectivity;
	uniform float envMapIntensity;
#endif
#ifdef USE_ENVMAP
	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )
		varying vec3 vWorldPosition;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	uniform float flipEnvMap;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif
`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif
`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif
`,Jy=`#ifdef USE_FOG
	#ifdef USE_LOGDEPTHBUF_EXT
		float depth = gl_FragDepthEXT / gl_FragCoord.w;
	#else
		float depth = gl_FragCoord.z / gl_FragCoord.w;
	#endif
	#ifdef FOG_EXP2
		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, depth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif
`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eM=`#ifdef TOON
	uniform sampler2D gradientMap;
	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
		float dotNL = dot( normal, lightDirection );
		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
		#ifdef USE_GRADIENTMAP
			return texture2D( gradientMap, coord ).rgb;
		#else
			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
		#endif
	}
#endif
`,tM=`#ifdef USE_LIGHTMAP
	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
#endif
`,nM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
#if NUM_POINT_LIGHTS > 0
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
	}
#endif
#if NUM_DIR_LIGHTS > 0
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_HEMI_LIGHTS > 0
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
#endif
`,rM=`uniform vec3 ambientLightColor;
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	uniform sampler2D ltcMat;	uniform sampler2D ltcMag;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif
#if defined( USE_ENVMAP ) && defined( PHYSICAL )
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );
		#else
			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV;
			sampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_SPHERE )
			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif
`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,sM=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
#if NUM_RECT_AREA_LIGHTS > 0
    void RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
        vec3 matDiffColor = material.diffuseColor;
        vec3 matSpecColor = material.specularColor;
        vec3 lightColor   = rectAreaLight.color;
        float roughness = BlinnExponentToGGXRoughness( material.specularShininess );
        vec3 spec = Rect_Area_Light_Specular_Reflectance(
                geometry,
                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,
                roughness,
                ltcMat, ltcMag );
        vec3 diff = Rect_Area_Light_Diffuse_Reflectance(
                geometry,
                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );
        reflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;
        reflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;
    }
#endif
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	#ifdef TOON
		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#else
		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
		vec3 irradiance = dotNL * directLight.color;
	#endif
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_Direct_RectArea		RE_Direct_RectArea_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)
`,oM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );
#ifdef STANDARD
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );
#endif
`,cM=`struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
	#ifndef STANDARD
		float clearCoat;
		float clearCoatRoughness;
	#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearCoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
    void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
        vec3 matDiffColor = material.diffuseColor;
        vec3 matSpecColor = material.specularColor;
        vec3 lightColor   = rectAreaLight.color;
        float roughness = material.specularRoughness;
        vec3 spec = Rect_Area_Light_Specular_Reflectance(
                geometry,
                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,
                roughness,
                ltcMat, ltcMag );
        vec3 diff = Rect_Area_Light_Diffuse_Reflectance(
                geometry,
                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );
        reflectedLight.directSpecular += lightColor * matSpecColor * spec;
        reflectedLight.directDiffuse  += lightColor * matDiffColor * diff;
    }
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifndef STANDARD
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
	#else
		float clearCoatDHR = 0.0;
	#endif
	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );
	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	#ifndef STANDARD
		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );
	#endif
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	#ifndef STANDARD
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		float dotNL = dotNV;
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
	#else
		float clearCoatDHR = 0.0;
	#endif
	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );
	#ifndef STANDARD
		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );
	#endif
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )
#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}
`,lM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = normalize( vViewPosition );
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#ifdef USE_SHADOWMAP
		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
#endif
#if defined( RE_IndirectDiffuse )
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#ifdef USE_LIGHTMAP
		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
	#endif
	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )
	 	irradiance += getLightProbeIndirectIrradiance( geometry, 8 );
	#endif
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );
	#ifndef STANDARD
		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );
	#else
		vec3 clearCoatRadiance = vec3( 0.0 );
	#endif
		
	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );
#endif
`,uM=`#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)
	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;
#endif`,hM=`#ifdef USE_LOGDEPTHBUF
	uniform float logDepthBufFC;
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
	#endif
#endif
`,fM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
	#endif
	uniform float logDepthBufFC;
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
	#else
		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;
	#endif
#endif
`,pM=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif
`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif
`,vM=`#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
`,gM=`#ifdef USE_MAP
	uniform vec4 offsetRepeat;
	uniform sampler2D map;
#endif
`,_M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.r;
#endif
`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_MORPHNORMALS
	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];
	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];
	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];
	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];
#endif
`,MM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];
	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];
	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];
	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];
	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];
	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];
	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];
	#endif
#endif
`,bM=`#ifdef DOUBLE_SIDED
	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );
#else
	float flipNormal = 1.0;
#endif
`,SM=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal ) * flipNormal;
#endif
#ifdef USE_NORMALMAP
	normal = perturbNormal2Arb( -vViewPosition, normal );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif
`,wM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 S = normalize( q0 * st1.t - q1 * st0.t );
		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
		vec3 N = normalize( surf_norm );
		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
		mapN.xy = normalScale * mapN.xy;
		mat3 tsn = mat3( S, T, N );
		return normalize( tsn * mapN );
	}
#endif
`,TM=`vec3 packNormalToRGB( const in vec3 normal ) {
  return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
  return 1.0 - 2.0 * rgb.xyz;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
  return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
  return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
  return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif
`,RM=`#ifdef USE_SKINNING
	vec4 mvPosition = modelViewMatrix * skinned;
#else
	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
#endif
gl_Position = projectionMatrix * mvPosition;
`,LM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.r;
#endif
`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHTS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];
	#endif
	#if NUM_SPOT_LIGHTS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];
	#endif
	#if NUM_POINT_LIGHTS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];
	#endif
    #if NUM_RECT_AREA_LIGHTS > 0
    #endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {
		const vec2 offset = vec2( 0.0, 1.0 );
		vec2 texelSize = vec2( 1.0 ) / size;
		vec2 centroidUV = floor( uv * size + 0.5 ) / size;
		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );
		vec2 f = fract( uv * size + 0.5 );
		float a = mix( lb, lt, f.y );
		float b = mix( rb, rt, f.y );
		float c = mix( a, b, f.x );
		return c;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
			return (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			return (
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return 1.0;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )
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
#endif
`,UM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHTS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];
	#endif
	#if NUM_SPOT_LIGHTS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];
	#endif
	#if NUM_POINT_LIGHTS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];
	#endif
    #if NUM_RECT_AREA_LIGHTS > 0
    #endif
#endif
`,DM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHTS > 0
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_SPOT_LIGHTS > 0
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_POINT_LIGHTS > 0
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;
	}
	#endif
    #if NUM_RECT_AREA_LIGHTS > 0
    #endif
#endif
`,IM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHTS > 0
	DirectionalLight directionalLight;
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_SPOT_LIGHTS > 0
	SpotLight spotLight;
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_POINT_LIGHTS > 0
	PointLight pointLight;
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_RECT_AREA_LIGHTS > 0
	#endif
	#endif
	return shadow;
}
`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform sampler2D boneTexture;
		uniform int boneTextureWidth;
		uniform int boneTextureHeight;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureWidth ) );
			float y = floor( j / float( boneTextureWidth ) );
			float dx = 1.0 / float( boneTextureWidth );
			float dy = 1.0 / float( boneTextureHeight );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif
`,OM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	skinned  = bindMatrixInverse * skinned;
#endif
`,BM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
#endif
`,zM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HM=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif
`,VM=`#define saturate(a) clamp( a, 0.0, 1.0 )
uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;
vec3 LinearToneMapping( vec3 color ) {
  return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  return saturate( color / ( vec3( 1.0 ) + color ) );
}
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  color = max( vec3( 0.0 ), color - 0.004 );
  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
`,kM=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	varying vec2 vUv;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	varying vec2 vUv;
	uniform vec4 offsetRepeat;
#endif
`,XM=`#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;
#endif`,YM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,qM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
#endif`,jM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = uv2;
#endif`,$M=`#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )
	#ifdef USE_SKINNING
		vec4 worldPosition = modelMatrix * skinned;
	#else
		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );
	#endif
#endif
`,ZM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldPosition;
#include <common>
void main() {
	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );
	gl_FragColor.a *= opacity;
}
`,KM=`varying vec3 vWorldPosition;
#include <common>
void main() {
	vWorldPosition = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}
`,JM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
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
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );
	#endif
}
`,QM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
}
`,eE=`uniform vec3 lightPos;
varying vec4 vWorldPosition;
#include <common>
#include <packing>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );
}
`,tE=`varying vec4 vWorldPosition;
#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <skinbase_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition;
}
`,nE=`uniform sampler2D tEquirect;
uniform float tFlip;
varying vec3 vWorldPosition;
#include <common>
void main() {
	vec3 direction = normalize( vWorldPosition );
	vec2 sampleUV;
	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );
	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;
	gl_FragColor = texture2D( tEquirect, sampleUV );
}
`,iE=`varying vec3 vWorldPosition;
#include <common>
void main() {
	vWorldPosition = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}
`,rE=`uniform vec3 diffuse;
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,aE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	vLineDistance = scale * lineDistance;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
}
`,sE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
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
		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <normal_flip>
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,oE=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
}
`,cE=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
#endif
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <bsdfs>
#include <lights_pars>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <emissivemap_fragment>
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <normal_flip>
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,lE=`#define LAMBERT
varying vec3 vLightFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
}
`,uE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars>
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
	#include <normal_flip>
	#include <normal_fragment>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_template>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,hE=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
}
`,fE=`#define PHYSICAL
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifndef STANDARD
	uniform float clearCoat;
	uniform float clearCoatRoughness;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <lights_pars>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
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
	#include <specularmap_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_flip>
	#include <normal_fragment>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_template>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,dE=`#define PHYSICAL
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
}
`,pE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED  ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	#include <normal_flip>
	#include <normal_fragment>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#include <premultiplied_alpha_fragment>
	#include <encodings_fragment>
}
`,mE=`#define NORMAL
#if defined( FLAT_SHADED  ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <displacementmap_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
#if defined( FLAT_SHADED  ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}
`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}
`,gE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <project_vertex>
	#ifdef USE_SIZEATTENUATION
		gl_PointSize = size * ( scale / - mvPosition.z );
	#else
		gl_PointSize = size;
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
}
`,_E=`uniform float opacity;
#include <common>
#include <packing>
#include <bsdfs>
#include <lights_pars>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );
}
`,xE=`#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
}
`,ht={alphamap_fragment:Ey,alphamap_pars_fragment:by,alphatest_fragment:Sy,aomap_fragment:wy,aomap_pars_fragment:Ty,begin_vertex:Ay,beginnormal_vertex:Ry,bsdfs:Ly,bumpmap_pars_fragment:Cy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Uy,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Iy,color_fragment:Fy,color_pars_fragment:Ny,color_pars_vertex:Oy,color_vertex:By,common:zy,cube_uv_reflection_fragment:Gy,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Vy,displacementmap_vertex:ky,emissivemap_fragment:Wy,emissivemap_pars_fragment:Xy,encodings_fragment:Yy,encodings_pars_fragment:qy,envmap_fragment:jy,envmap_pars_fragment:$y,envmap_pars_vertex:Zy,envmap_vertex:Ky,fog_fragment:Jy,fog_pars_fragment:Qy,gradientmap_pars_fragment:eM,lightmap_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_vertex:iM,lights_pars:rM,lights_phong_fragment:aM,lights_phong_pars_fragment:sM,lights_physical_fragment:oM,lights_physical_pars_fragment:cM,lights_template:lM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:fM,logdepthbuf_vertex:dM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:vM,map_particle_pars_fragment:gM,metalnessmap_fragment:_M,metalnessmap_pars_fragment:xM,morphnormal_vertex:yM,morphtarget_pars_vertex:MM,morphtarget_vertex:EM,normal_flip:bM,normal_fragment:SM,normalmap_pars_fragment:wM,packing:TM,premultiplied_alpha_fragment:AM,project_vertex:RM,roughnessmap_fragment:LM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:PM,shadowmap_pars_vertex:UM,shadowmap_vertex:DM,shadowmask_pars_fragment:IM,skinbase_vertex:FM,skinning_pars_vertex:NM,skinning_vertex:OM,skinnormal_vertex:BM,specularmap_fragment:zM,specularmap_pars_fragment:GM,tonemapping_fragment:HM,tonemapping_pars_fragment:VM,uv_pars_fragment:kM,uv_pars_vertex:WM,uv_vertex:XM,uv2_pars_fragment:YM,uv2_pars_vertex:qM,uv2_vertex:jM,worldpos_vertex:$M,cube_frag:ZM,cube_vert:KM,depth_frag:JM,depth_vert:QM,distanceRGBA_frag:eE,distanceRGBA_vert:tE,equirect_frag:nE,equirect_vert:iE,linedashed_frag:rE,linedashed_vert:aE,meshbasic_frag:sE,meshbasic_vert:oE,meshlambert_frag:cE,meshlambert_vert:lE,meshphong_frag:uE,meshphong_vert:hE,meshphysical_frag:fE,meshphysical_vert:dE,normal_frag:pE,normal_vert:mE,points_frag:vE,points_vert:gE,shadow_frag:_E,shadow_vert:xE};function je(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}je.prototype={constructor:je,isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this},setRGB:function(e,t,n){return this.r=e,this.g=t,this.b=n,this},setHSL:function(){function e(t,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(n-t)*6*i:i<1/2?n:i<2/3?t+(n-t)*6*(2/3-i):t}return function(n,i,r){if(n=Je.euclideanModulo(n,1),i=Je.clamp(i,0,1),r=Je.clamp(r,0,1),i===0)this.r=this.g=this.b=r;else{var a=r<=.5?r*(1+i):r+i-r*i,s=2*r-a;this.r=e(s,a,n+1/3),this.g=e(s,a,n),this.b=e(s,a,n-1/3)}return this}}(),setStyle:function(e){function t(h){h!==void 0&&parseFloat(h)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}var n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){var i,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)){var s=parseFloat(i[1])/360,o=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(s,o,l)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(e)){var c=n[1],u=c.length;if(u===3)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(u===6)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}if(e&&e.length>0){var c=yE[e];c!==void 0?this.setHex(c):console.warn("THREE.Color: Unknown color "+e)}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){t===void 0&&(t=2);var n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this},convertGammaToLinear:function(){var e=this.r,t=this.g,n=this.b;return this.r=e*e,this.g=t*t,this.b=n*n,this},convertLinearToGamma:function(){return this.r=Math.sqrt(this.r),this.g=Math.sqrt(this.g),this.b=Math.sqrt(this.b),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){var t=e||{h:0,s:0,l:0},n=this.r,i=this.g,r=this.b,a=Math.max(n,i,r),s=Math.min(n,i,r),o,l,c=(s+a)/2;if(s===a)o=0,l=0;else{var u=a-s;switch(l=c<=.5?u/(a+s):u/(2-a-s),a){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(e,t,n){var i=this.getHSL();return i.h+=e,i.s+=t,i.l+=n,this.setHSL(i.h,i.s,i.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return t===void 0&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},toJSON:function(){return this.getHex()}};var yE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Xi(e,t,n,i,r,a,s,o,l,c,u,h){gt.call(this,null,a,s,o,l,c,i,r,u,h),this.image={data:e,width:t,height:n},this.magFilter=l!==void 0?l:mn,this.minFilter=c!==void 0?c:mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}Xi.prototype=Object.create(gt.prototype);Xi.prototype.constructor=Xi;Xi.prototype.isDataTexture=!0;var et={common:{diffuse:{value:new je(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new pt(0,0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new je(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new pt(0,0,1,1)}}},Xr={basic:{uniforms:en.merge([et.common,et.aomap,et.lightmap,et.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:en.merge([et.common,et.aomap,et.lightmap,et.emissivemap,et.fog,et.lights,{emissive:{value:new je(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:en.merge([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:en.merge([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new je(0)},roughness:{value:.5},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},points:{uniforms:en.merge([et.points,et.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:en.merge([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:en.merge([et.common,et.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:en.merge([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:ht.normal_vert,fragmentShader:ht.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new F}},vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag}};Xr.physical={uniforms:en.merge([Xr.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};function ss(e,t){this.min=e!==void 0?e:new Ie(1/0,1/0),this.max=t!==void 0?t:new Ie(-1/0,-1/0)}ss.prototype={constructor:ss,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(var t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new Ie;return function(n,i){var r=e.copy(i).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){var t=e||new Ie;return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){var t=e||new Ie;return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){var n=t||new Ie;return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){var n=t||new Ie;return n.copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new Ie;return function(n){var i=e.copy(n).clamp(this.min,this.max);return i.sub(n).length()}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function ME(e,t){var n=e.context,i=e.state,r,a,s,o,l,c,u,h;function f(){var v=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),g=new Uint16Array([0,1,2,0,2,3]);r=n.createBuffer(),a=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,v,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,g,n.STATIC_DRAW),u=n.createTexture(),h=n.createTexture(),i.bindTexture(n.TEXTURE_2D,u),n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),i.bindTexture(n.TEXTURE_2D,h),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),s={vertexShader:["uniform lowp int renderType;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform float rotation;","uniform sampler2D occlusionMap;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float vVisibility;","void main() {","vUV = uv;","vec2 pos = position;","if ( renderType == 2 ) {","vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );","vVisibility =        visibility.r / 9.0;","vVisibility *= 1.0 - visibility.g / 9.0;","vVisibility *=       visibility.b / 9.0;","vVisibility *= 1.0 - visibility.a / 9.0;","pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;","pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;","}","gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join(`
`),fragmentShader:["uniform lowp int renderType;","uniform sampler2D map;","uniform float opacity;","uniform vec3 color;","varying vec2 vUV;","varying float vVisibility;","void main() {","if ( renderType == 0 ) {","gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );","} else if ( renderType == 1 ) {","gl_FragColor = texture2D( map, vUV );","} else {","vec4 texture = texture2D( map, vUV );","texture.a *= opacity * vVisibility;","gl_FragColor = texture;","gl_FragColor.rgb *= color;","}","}"].join(`
`)},o=p(s),l={vertex:n.getAttribLocation(o,"position"),uv:n.getAttribLocation(o,"uv")},c={renderType:n.getUniformLocation(o,"renderType"),map:n.getUniformLocation(o,"map"),occlusionMap:n.getUniformLocation(o,"occlusionMap"),opacity:n.getUniformLocation(o,"opacity"),color:n.getUniformLocation(o,"color"),scale:n.getUniformLocation(o,"scale"),rotation:n.getUniformLocation(o,"rotation"),screenPosition:n.getUniformLocation(o,"screenPosition")}}this.render=function(v,g,m){if(t.length!==0){var d=new F,x=m.w/m.z,_=m.z*.5,y=m.w*.5,M=16/m.w,S=new Ie(M*x,M),T=new F(1,1,0),L=new Ie(1,1),E=new ss;E.min.set(m.x,m.y),E.max.set(m.x+(m.z-16),m.y+(m.w-16)),o===void 0&&f(),n.useProgram(o),i.initAttributes(),i.enableAttribute(l.vertex),i.enableAttribute(l.uv),i.disableUnusedAttributes(),n.uniform1i(c.occlusionMap,0),n.uniform1i(c.map,1),n.bindBuffer(n.ARRAY_BUFFER,r),n.vertexAttribPointer(l.vertex,2,n.FLOAT,!1,2*8,0),n.vertexAttribPointer(l.uv,2,n.FLOAT,!1,2*8,8),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),i.disable(n.CULL_FACE),i.setDepthWrite(!1);for(var R=0,k=t.length;R<k;R++){M=16/m.w,S.set(M*x,M);var X=t[R];if(d.set(X.matrixWorld.elements[12],X.matrixWorld.elements[13],X.matrixWorld.elements[14]),d.applyMatrix4(g.matrixWorldInverse),d.applyProjection(g.projectionMatrix),T.copy(d),L.x=m.x+T.x*_+_-8,L.y=m.y+T.y*y+y-8,E.containsPoint(L)===!0){i.activeTexture(n.TEXTURE0),i.bindTexture(n.TEXTURE_2D,null),i.activeTexture(n.TEXTURE1),i.bindTexture(n.TEXTURE_2D,u),n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,L.x,L.y,16,16,0),n.uniform1i(c.renderType,0),n.uniform2f(c.scale,S.x,S.y),n.uniform3f(c.screenPosition,T.x,T.y,T.z),i.disable(n.BLEND),i.enable(n.DEPTH_TEST),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0),i.activeTexture(n.TEXTURE0),i.bindTexture(n.TEXTURE_2D,h),n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,L.x,L.y,16,16,0),n.uniform1i(c.renderType,1),i.disable(n.DEPTH_TEST),i.activeTexture(n.TEXTURE1),i.bindTexture(n.TEXTURE_2D,u),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0),X.positionScreen.copy(T),X.customUpdateCallback?X.customUpdateCallback(X):X.updateLensFlares(),n.uniform1i(c.renderType,2),i.enable(n.BLEND);for(var w=0,A=X.lensFlares.length;w<A;w++){var D=X.lensFlares[w];D.opacity>.001&&D.scale>.001&&(T.x=D.x,T.y=D.y,T.z=D.z,M=D.size*D.scale/m.w,S.x=M*x,S.y=M,n.uniform3f(c.screenPosition,T.x,T.y,T.z),n.uniform2f(c.scale,S.x,S.y),n.uniform1f(c.rotation,D.rotation),n.uniform1f(c.opacity,D.opacity),n.uniform3f(c.color,D.color.r,D.color.g,D.color.b),i.setBlending(D.blending,D.blendEquation,D.blendSrc,D.blendDst),e.setTexture2D(D.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}}i.enable(n.CULL_FACE),i.enable(n.DEPTH_TEST),i.setDepthWrite(!0),e.resetGLState()}};function p(v){var g=n.createProgram(),m=n.createShader(n.FRAGMENT_SHADER),d=n.createShader(n.VERTEX_SHADER),x="precision "+e.getPrecision()+` float;
`;return n.shaderSource(m,x+v.fragmentShader),n.shaderSource(d,x+v.vertexShader),n.compileShader(m),n.compileShader(d),n.attachShader(g,m),n.attachShader(g,d),n.linkProgram(g),g}}function EE(e,t){var n=e.context,i=e.state,r,a,s,o,l,c,u=new F,h=new Ct,f=new F;function p(){var m=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),d=new Uint16Array([0,1,2,0,2,3]);r=n.createBuffer(),a=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,d,n.STATIC_DRAW),s=v(),o={position:n.getAttribLocation(s,"position"),uv:n.getAttribLocation(s,"uv")},l={uvOffset:n.getUniformLocation(s,"uvOffset"),uvScale:n.getUniformLocation(s,"uvScale"),rotation:n.getUniformLocation(s,"rotation"),scale:n.getUniformLocation(s,"scale"),color:n.getUniformLocation(s,"color"),map:n.getUniformLocation(s,"map"),opacity:n.getUniformLocation(s,"opacity"),modelViewMatrix:n.getUniformLocation(s,"modelViewMatrix"),projectionMatrix:n.getUniformLocation(s,"projectionMatrix"),fogType:n.getUniformLocation(s,"fogType"),fogDensity:n.getUniformLocation(s,"fogDensity"),fogNear:n.getUniformLocation(s,"fogNear"),fogFar:n.getUniformLocation(s,"fogFar"),fogColor:n.getUniformLocation(s,"fogColor"),alphaTest:n.getUniformLocation(s,"alphaTest")};var x=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");x.width=8,x.height=8;var _=x.getContext("2d");_.fillStyle="white",_.fillRect(0,0,8,8),c=new gt(x),c.needsUpdate=!0}this.render=function(m,d){if(t.length!==0){s===void 0&&p(),n.useProgram(s),i.initAttributes(),i.enableAttribute(o.position),i.enableAttribute(o.uv),i.disableUnusedAttributes(),i.disable(n.CULL_FACE),i.enable(n.BLEND),n.bindBuffer(n.ARRAY_BUFFER,r),n.vertexAttribPointer(o.position,2,n.FLOAT,!1,2*8,0),n.vertexAttribPointer(o.uv,2,n.FLOAT,!1,2*8,8),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.uniformMatrix4fv(l.projectionMatrix,!1,d.projectionMatrix.elements),i.activeTexture(n.TEXTURE0),n.uniform1i(l.map,0);var x=0,_=0,y=m.fog;y?(n.uniform3f(l.fogColor,y.color.r,y.color.g,y.color.b),y.isFog?(n.uniform1f(l.fogNear,y.near),n.uniform1f(l.fogFar,y.far),n.uniform1i(l.fogType,1),x=1,_=1):y.isFogExp2&&(n.uniform1f(l.fogDensity,y.density),n.uniform1i(l.fogType,2),x=2,_=2)):(n.uniform1i(l.fogType,0),x=0,_=0);for(var M=0,S=t.length;M<S;M++){var T=t[M];T.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,T.matrixWorld),T.z=-T.modelViewMatrix.elements[14]}t.sort(g);for(var L=[],M=0,S=t.length;M<S;M++){var T=t[M],E=T.material;if(E.visible!==!1){n.uniform1f(l.alphaTest,E.alphaTest),n.uniformMatrix4fv(l.modelViewMatrix,!1,T.modelViewMatrix.elements),T.matrixWorld.decompose(u,h,f),L[0]=f.x,L[1]=f.y;var R=0;m.fog&&E.fog&&(R=_),x!==R&&(n.uniform1i(l.fogType,R),x=R),E.map!==null?(n.uniform2f(l.uvOffset,E.map.offset.x,E.map.offset.y),n.uniform2f(l.uvScale,E.map.repeat.x,E.map.repeat.y)):(n.uniform2f(l.uvOffset,0,0),n.uniform2f(l.uvScale,1,1)),n.uniform1f(l.opacity,E.opacity),n.uniform3f(l.color,E.color.r,E.color.g,E.color.b),n.uniform1f(l.rotation,E.rotation),n.uniform2fv(l.scale,L),i.setBlending(E.blending,E.blendEquation,E.blendSrc,E.blendDst),i.setDepthTest(E.depthTest),i.setDepthWrite(E.depthWrite),E.map?e.setTexture2D(E.map,0):e.setTexture2D(c,0),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}}i.enable(n.CULL_FACE),e.resetGLState()}};function v(){var m=n.createProgram(),d=n.createShader(n.VERTEX_SHADER),x=n.createShader(n.FRAGMENT_SHADER);return n.shaderSource(d,["precision "+e.getPrecision()+" float;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 scale;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","vUV = uvOffset + uv * uvScale;","vec2 alignedPosition = position * scale;","vec2 rotatedPosition;","rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;","rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;","vec4 finalPosition;","finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );","finalPosition.xy += rotatedPosition;","finalPosition = projectionMatrix * finalPosition;","gl_Position = finalPosition;","}"].join(`
`)),n.shaderSource(x,["precision "+e.getPrecision()+" float;","uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","void main() {","vec4 texture = texture2D( map, vUV );","if ( texture.a < alphaTest ) discard;","gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );","if ( fogType > 0 ) {","float depth = gl_FragCoord.z / gl_FragCoord.w;","float fogFactor = 0.0;","if ( fogType == 1 ) {","fogFactor = smoothstep( fogNear, fogFar, depth );","} else {","const float LOG2 = 1.442695;","fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );","fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );","}","gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}","}"].join(`
`)),n.compileShader(d),n.compileShader(x),n.attachShader(m,d),n.attachShader(m,x),n.linkProgram(m),m}function g(m,d){return m.renderOrder!==d.renderOrder?m.renderOrder-d.renderOrder:m.z!==d.z?d.z-m.z:d.id-m.id}}var bE=0;function rt(){Object.defineProperty(this,"id",{value:bE++}),this.uuid=Je.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=Pa,this.side=Nr,this.shading=eu,this.vertexColors=fc,this.opacity=1,this.transparent=!1,this.blendSrc=ou,this.blendDst=cu,this.blendEquation=su,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.alphaTest=0,this.premultipliedAlpha=!1,this.overdraw=0,this.visible=!0,this._needsUpdate=!0}rt.prototype={constructor:rt,isMaterial:!0,get needsUpdate(){return this._needsUpdate},set needsUpdate(e){e===!0&&this.update(),this._needsUpdate=e},setValues:function(e){if(e!==void 0)for(var t in e){var n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}var i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):t==="overdraw"?this[t]=Number(n):this[t]=n}},toJSON:function(e){var t=e===void 0;t&&(e={textures:{},images:{}});var n={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearCoat!==void 0&&(n.clearCoat=this.clearCoat),this.clearCoatRoughness!==void 0&&(n.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pa&&(n.blending=this.blending),this.shading!==eu&&(n.shading=this.shading),this.side!==Nr&&(n.side=this.side),this.vertexColors!==fc&&(n.vertexColors=this.vertexColors),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),n.skinning=this.skinning,n.morphTargets=this.morphTargets;function i(s){var o=[];for(var l in s){var c=s[l];delete c.metadata,o.push(c)}return o}if(t){var r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.lights=e.lights,this.blending=e.blending,this.side=e.side,this.shading=e.shading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.overdraw=e.overdraw,this.visible=e.visible,this.clipShadows=e.clipShadows,this.clipIntersection=e.clipIntersection;var t=e.clippingPlanes,n=null;if(t!==null){var i=t.length;n=new Array(i);for(var r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign(rt.prototype,bn.prototype);function Kt(e){rt.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}Kt.prototype=Object.create(rt.prototype);Kt.prototype.constructor=Kt;Kt.prototype.isShaderMaterial=!0;Kt.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=en.clone(e.uniforms),this.defines=e.defines,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=e.extensions,this};Kt.prototype.toJSON=function(e){var t=rt.prototype.toJSON.call(this,e);return t.uniforms=this.uniforms,t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t};function Mi(e){rt.call(this),this.type="MeshDepthMaterial",this.depthPacking=Zd,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(e)}Mi.prototype=Object.create(rt.prototype);Mi.prototype.constructor=Mi;Mi.prototype.isMeshDepthMaterial=!0;Mi.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function Hn(e,t){this.min=e!==void 0?e:new F(1/0,1/0,1/0),this.max=t!==void 0?t:new F(-1/0,-1/0,-1/0)}Hn.prototype={constructor:Hn,isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){for(var t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0,o=0,l=e.length;o<l;o+=3){var c=e[o],u=e[o+1],h=e[o+2];c<t&&(t=c),u<n&&(n=u),h<i&&(i=h),c>r&&(r=c),u>a&&(a=u),h>s&&(s=h)}this.min.set(t,n,i),this.max.set(r,a,s)},setFromBufferAttribute:function(e){for(var t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0,o=0,l=e.count;o<l;o++){var c=e.getX(o),u=e.getY(o),h=e.getZ(o);c<t&&(t=c),u<n&&(n=u),h<i&&(i=h),c>r&&(r=c),u>a&&(a=u),h>s&&(s=h)}this.min.set(t,n,i),this.max.set(r,a,s)},setFromPoints:function(e){this.makeEmpty();for(var t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(){var e=new F;return function(n,i){var r=e.copy(i).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}}(),setFromObject:function(){var e=new F;return function(n){var i=this;return n.updateMatrixWorld(!0),this.makeEmpty(),n.traverse(function(r){var a,s,o=r.geometry;if(o!==void 0){if(o.isGeometry){var l=o.vertices;for(a=0,s=l.length;a<s;a++)e.copy(l[a]),e.applyMatrix4(r.matrixWorld),i.expandByPoint(e)}else if(o.isBufferGeometry){var c=o.attributes.position;if(c!==void 0)for(a=0,s=c.count;a<s;a++)e.fromAttribute(c,a).applyMatrix4(r.matrixWorld),i.expandByPoint(e)}}}),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){var t=e||new F;return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){var t=e||new F;return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){var n=t||new F;return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(){var e;return function(n){return e===void 0&&(e=new F),this.clampPoint(n.center,e),e.distanceToSquared(n.center)<=n.radius*n.radius}}(),intersectsPlane:function(e){var t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=e.constant&&n>=e.constant},clampPoint:function(e,t){var n=t||new F;return n.copy(e).clamp(this.min,this.max)},distanceToPoint:function(){var e=new F;return function(n){var i=e.copy(n).clamp(this.min,this.max);return i.sub(n).length()}}(),getBoundingSphere:function(){var e=new F;return function(n){var i=n||new Xt;return this.getCenter(i.center),i.radius=this.getSize(e).length()*.5,i}}(),intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(){var e=[new F,new F,new F,new F,new F,new F,new F,new F];return function(n){return this.isEmpty()?this:(e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(e),this)}}(),translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function Xt(e,t){this.center=e!==void 0?e:new F,this.radius=t!==void 0?t:0}Xt.prototype={constructor:Xt,set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(){var e=new Hn;return function(n,i){var r=this.center;i!==void 0?r.copy(i):e.setFromPoints(n).getCenter(r);for(var a=0,s=0,o=n.length;s<o;s++)a=Math.max(a,r.distanceToSquared(n[s]));return this.radius=Math.sqrt(a),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},empty:function(){return this.radius<=0},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){var t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(this.center.dot(e.normal)-e.constant)<=this.radius},clampPoint:function(e,t){var n=this.center.distanceToSquared(e),i=t||new F;return i.copy(e),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i},getBoundingBox:function(e){var t=e||new Hn;return t.set(this.center,this.center),t.expandByScalar(this.radius),t},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}};function Sn(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Sn.prototype={constructor:Sn,isMatrix3:!0,set:function(e,t,n,i,r,a,s,o,l){var c=this.elements;return c[0]=e,c[1]=i,c[2]=s,c[3]=t,c[4]=r,c[5]=o,c[6]=n,c[7]=a,c[8]=l,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){var t=e.elements;return this.set(t[0],t[3],t[6],t[1],t[4],t[7],t[2],t[5],t[8]),this},setFromMatrix4:function(e){var t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},applyToVector3Array:function(){var e;return function(n,i,r){e===void 0&&(e=new F),i===void 0&&(i=0),r===void 0&&(r=n.length);for(var a=0,s=i;a<r;a+=3,s+=3)e.fromArray(n,s),e.applyMatrix3(this),e.toArray(n,s);return n}}(),applyToBufferAttribute:function(){var e;return function(n){e===void 0&&(e=new F);for(var i=0,r=n.count;i<r;i++)e.x=n.getX(i),e.y=n.getY(i),e.z=n.getZ(i),e.applyMatrix3(this),n.setXYZ(i,e.x,e.y,e.z);return n}}(),multiplyScalar:function(e){var t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){var e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],o=e[6],l=e[7],c=e[8];return t*a*c-t*s*l-n*r*c+n*s*o+i*r*l-i*a*o},getInverse:function(e,t){e&&e.isMatrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var n=e.elements,i=this.elements,r=n[0],a=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=f*l-c*h,v=c*u-f*o,g=h*o-l*u,m=r*p+a*v+s*g;if(m===0){var d="THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";if(t===!0)throw new Error(d);return console.warn(d),this.identity()}var x=1/m;return i[0]=p*x,i[1]=(s*h-f*a)*x,i[2]=(c*a-s*l)*x,i[3]=v*x,i[4]=(f*r-s*u)*x,i[5]=(s*o-c*r)*x,i[6]=g*x,i[7]=(a*u-h*r)*x,i[8]=(l*r-a*o)*x,this},transpose:function(){var e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){var t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},fromArray:function(e,t){t===void 0&&(t=0);for(var n=0;n<9;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);var n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}};function fn(e,t){this.normal=e!==void 0?e:new F(1,0,0),this.constant=t!==void 0?t:0}fn.prototype={constructor:fn,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(){var e=new F,t=new F;return function(i,r,a){var s=e.subVectors(a,r).cross(t.subVectors(i,r)).normalize();return this.setFromNormalAndCoplanarPoint(s,i),this}}(),clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){var e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return this.orthoPoint(e,t).sub(e).negate()},orthoPoint:function(e,t){var n=this.distanceToPoint(e),i=t||new F;return i.copy(this.normal).multiplyScalar(n)},intersectLine:function(){var e=new F;return function(n,i){var r=i||new F,a=n.delta(e),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(n.start)===0?r.copy(n.start):void 0;var o=-(n.start.dot(this.normal)+this.constant)/s;if(!(o<0||o>1))return r.copy(a).multiplyScalar(o).add(n.start)}}(),intersectsLine:function(e){var t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){var t=e||new F;return t.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var e=new F,t=new Sn;return function(i,r){var a=this.coplanarPoint(e).applyMatrix4(i),s=r||t.getNormalMatrix(i),o=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(o),this}}(),translate:function(e){return this.constant=this.constant-e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}};function os(e,t,n,i,r,a){this.planes=[e!==void 0?e:new fn,t!==void 0?t:new fn,n!==void 0?n:new fn,i!==void 0?i:new fn,r!==void 0?r:new fn,a!==void 0?a:new fn]}os.prototype={constructor:os,set:function(e,t,n,i,r,a){var s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){for(var t=this.planes,n=0;n<6;n++)t[n].copy(e.planes[n]);return this},setFromMatrix:function(e){var t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],o=n[4],l=n[5],c=n[6],u=n[7],h=n[8],f=n[9],p=n[10],v=n[11],g=n[12],m=n[13],d=n[14],x=n[15];return t[0].setComponents(s-i,u-o,v-h,x-g).normalize(),t[1].setComponents(s+i,u+o,v+h,x+g).normalize(),t[2].setComponents(s+r,u+l,v+f,x+m).normalize(),t[3].setComponents(s-r,u-l,v-f,x-m).normalize(),t[4].setComponents(s-a,u-c,v-p,x-d).normalize(),t[5].setComponents(s+a,u+c,v+p,x+d).normalize(),this},intersectsObject:function(){var e=new Xt;return function(n){var i=n.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),e.copy(i.boundingSphere).applyMatrix4(n.matrixWorld),this.intersectsSphere(e)}}(),intersectsSprite:function(){var e=new Xt;return function(n){return e.center.set(0,0,0),e.radius=.7071067811865476,e.applyMatrix4(n.matrixWorld),this.intersectsSphere(e)}}(),intersectsSphere:function(e){for(var t=this.planes,n=e.center,i=-e.radius,r=0;r<6;r++){var a=t[r].distanceToPoint(n);if(a<i)return!1}return!0},intersectsBox:function(){var e=new F,t=new F;return function(i){for(var r=this.planes,a=0;a<6;a++){var s=r[a];e.x=s.normal.x>0?i.min.x:i.max.x,t.x=s.normal.x>0?i.max.x:i.min.x,e.y=s.normal.y>0?i.min.y:i.max.y,t.y=s.normal.y>0?i.max.y:i.min.y,e.z=s.normal.z>0?i.min.z:i.max.z,t.z=s.normal.z>0?i.max.z:i.min.z;var o=s.distanceToPoint(e),l=s.distanceToPoint(t);if(o<0&&l<0)return!1}return!0}}(),containsPoint:function(e){for(var t=this.planes,n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}};function sp(e,t,n,i){var r=e.context,a=e.state,s=new os,o=new $e,l=t.shadows,c=new Ie,u=new Ie(i.maxTextureSize,i.maxTextureSize),h=new F,f=new F,p=[],v=1,g=2,m=(v|g)+1,d=new Array(m),x=new Array(m),_={},y=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],M=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)],S=[new pt,new pt,new pt,new pt,new pt,new pt],T=new Mi;T.depthPacking=Kd,T.clipping=!0;for(var L=Xr.distanceRGBA,E=en.clone(L.uniforms),R=0;R!==m;++R){var k=(R&v)!==0,X=(R&g)!==0,w=T.clone();w.morphTargets=k,w.skinning=X,d[R]=w;var A=new Kt({defines:{USE_SHADOWMAP:""},uniforms:E,vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,morphTargets:k,skinning:X,clipping:!0});x[R]=A}var D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl,this.renderReverseSided=!0,this.renderSingleSided=!0,this.render=function(H,Y){if(D.enabled!==!1&&!(D.autoUpdate===!1&&D.needsUpdate===!1)&&l.length!==0){a.buffers.color.setClear(1,1,1,1),a.disable(r.BLEND),a.setDepthTest(!0),a.setScissorTest(!1);for(var $,ie,N=0,O=l.length;N<O;N++){var q=l[N],ae=q.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}var te=ae.camera;if(c.copy(ae.mapSize),c.min(u),q&&q.isPointLight){$=6,ie=!0;var he=c.x,ge=c.y;S[0].set(he*2,ge,he,ge),S[1].set(0,ge,he,ge),S[2].set(he*3,ge,he,ge),S[3].set(he,ge,he,ge),S[4].set(he*3,0,he,ge),S[5].set(he,0,he,ge),c.x*=4,c.y*=2}else $=1,ie=!1;if(ae.map===null){var le={minFilter:mn,magFilter:mn,format:Gn};ae.map=new Ua(c.x,c.y,le),te.updateProjectionMatrix()}ae.isSpotLightShadow&&ae.update(q),ae&&ae.isRectAreaLightShadow&&ae.update(q);var We=ae.map,V=ae.matrix;f.setFromMatrixPosition(q.matrixWorld),te.position.copy(f),e.setRenderTarget(We),e.clear();for(var K=0;K<$;K++){if(ie){h.copy(te.position),h.add(y[K]),te.up.copy(M[K]),te.lookAt(h);var Be=S[K];a.viewport(Be)}else h.setFromMatrixPosition(q.target.matrixWorld),te.lookAt(h);te.updateMatrixWorld(),te.matrixWorldInverse.getInverse(te.matrixWorld),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(te.projectionMatrix),V.multiply(te.matrixWorldInverse),o.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),s.setFromMatrix(o),p.length=0,z(H,Y,te);for(var Te=0,pe=p.length;Te<pe;Te++){var Fe=p[Te],Ne=n.update(Fe),we=Fe.material;if(we&&we.isMultiMaterial)for(var Oe=Ne.groups,Ye=we.materials,nt=0,lt=Oe.length;nt<lt;nt++){var I=Oe[nt],C=Ye[I.materialIndex];if(C.visible===!0){var re=G(Fe,C,ie,f);e.renderBufferDirect(te,null,Ne,re,Fe,I)}}else{var re=G(Fe,we,ie,f);e.renderBufferDirect(te,null,Ne,re,Fe,null)}}}}var fe=e.getClearColor(),me=e.getClearAlpha();e.setClearColor(fe,me),D.needsUpdate=!1}};function G(H,Y,$,ie){var N=H.geometry,O=null,q=d,ae=H.customDepthMaterial;if($&&(q=x,ae=H.customDistanceMaterial),ae)O=ae;else{var te=!1;Y.morphTargets&&(N&&N.isBufferGeometry?te=N.morphAttributes&&N.morphAttributes.position&&N.morphAttributes.position.length>0:N&&N.isGeometry&&(te=N.morphTargets&&N.morphTargets.length>0));var he=H.isSkinnedMesh&&Y.skinning,ge=0;te&&(ge|=v),he&&(ge|=g),O=q[ge]}if(e.localClippingEnabled&&Y.clipShadows===!0&&Y.clippingPlanes.length!==0){var le=O.uuid,We=Y.uuid,V=_[le];V===void 0&&(V={},_[le]=V);var K=V[We];K===void 0&&(K=O.clone(),V[We]=K),O=K}O.visible=Y.visible,O.wireframe=Y.wireframe;var Be=Y.side;return D.renderSingleSided&&Be==Ca&&(Be=Nr),D.renderReverseSided&&(Be===Nr?Be=_i:Be===_i&&(Be=Nr)),O.side=Be,O.clipShadows=Y.clipShadows,O.clippingPlanes=Y.clippingPlanes,O.wireframeLinewidth=Y.wireframeLinewidth,O.linewidth=Y.linewidth,$&&O.uniforms.lightPos!==void 0&&O.uniforms.lightPos.value.copy(ie),O}function z(H,Y,$){if(H.visible!==!1){var ie=(H.layers.mask&Y.layers.mask)!==0;if(ie&&(H.isMesh||H.isLine||H.isPoints)&&H.castShadow&&(H.frustumCulled===!1||s.intersectsObject(H)===!0)){var N=H.material;N.visible===!0&&(H.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,H.matrixWorld),p.push(H))}for(var O=H.children,q=0,ae=O.length;q<ae;q++)z(O[q],Y,$)}}}function Ei(e,t){this.origin=e!==void 0?e:new F,this.direction=t!==void 0?t:new F}Ei.prototype={constructor:Ei,set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){var n=t||new F;return n.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(){var e=new F;return function(n){return this.origin.copy(this.at(n,e)),this}}(),closestPointToPoint:function(e,t){var n=t||new F;n.subVectors(e,this.origin);var i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(){var e=new F;return function(n){var i=e.subVectors(n,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(n):(e.copy(this.direction).multiplyScalar(i).add(this.origin),e.distanceToSquared(n))}}(),distanceSqToSegment:function(){var e=new F,t=new F,n=new F;return function(r,a,s,o){e.copy(r).add(a).multiplyScalar(.5),t.copy(a).sub(r).normalize(),n.copy(this.origin).sub(e);var l=r.distanceTo(a)*.5,c=-this.direction.dot(t),u=n.dot(this.direction),h=-n.dot(t),f=n.lengthSq(),p=Math.abs(1-c*c),v,g,m,d;if(p>0)if(v=c*h-u,g=c*u-h,d=l*p,v>=0)if(g>=-d)if(g<=d){var x=1/p;v*=x,g*=x,m=v*(v+c*g+2*u)+g*(c*v+g+2*h)+f}else g=l,v=Math.max(0,-(c*g+u)),m=-v*v+g*(g+2*h)+f;else g=-l,v=Math.max(0,-(c*g+u)),m=-v*v+g*(g+2*h)+f;else g<=-d?(v=Math.max(0,-(-c*l+u)),g=v>0?-l:Math.min(Math.max(-l,-h),l),m=-v*v+g*(g+2*h)+f):g<=d?(v=0,g=Math.min(Math.max(-l,-h),l),m=g*(g+2*h)+f):(v=Math.max(0,-(c*l+u)),g=v>0?l:Math.min(Math.max(-l,-h),l),m=-v*v+g*(g+2*h)+f);else g=c>0?-l:l,v=Math.max(0,-(c*g+u)),m=-v*v+g*(g+2*h)+f;return s&&s.copy(this.direction).multiplyScalar(v).add(this.origin),o&&o.copy(t).multiplyScalar(g).add(e),m}}(),intersectSphere:function(){var e=new F;return function(n,i){e.subVectors(n.center,this.origin);var r=e.dot(this.direction),a=e.dot(e)-r*r,s=n.radius*n.radius;if(a>s)return null;var o=Math.sqrt(s-a),l=r-o,c=r+o;return l<0&&c<0?null:l<0?this.at(c,i):this.at(l,i)}}(),intersectsSphere:function(e){return this.distanceToPoint(e.center)<=e.radius},distanceToPlane:function(e){var t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;var n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null},intersectPlane:function(e,t){var n=this.distanceToPlane(e);return n===null?null:this.at(n,t)},intersectsPlane:function(e){var t=e.distanceToPoint(this.origin);if(t===0)return!0;var n=e.normal.dot(this.direction);return n*t<0},intersectBox:function(e,t){var n,i,r,a,s,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),c>=0?(r=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(s=(e.min.z-h.z)*u,o=(e.max.z-h.z)*u):(s=(e.max.z-h.z)*u,o=(e.min.z-h.z)*u),n>o||s>i)||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,t)},intersectsBox:function(){var e=new F;return function(n){return this.intersectBox(n,e)!==null}}(),intersectTriangle:function(){var e=new F,t=new F,n=new F,i=new F;return function(a,s,o,l,c){t.subVectors(s,a),n.subVectors(o,a),i.crossVectors(t,n);var u=this.direction.dot(i),h;if(u>0){if(l)return null;h=1}else if(u<0)h=-1,u=-u;else return null;e.subVectors(this.origin,a);var f=h*this.direction.dot(n.crossVectors(e,n));if(f<0)return null;var p=h*this.direction.dot(t.cross(e));if(p<0||f+p>u)return null;var v=-h*e.dot(i);return v<0?null:this.at(v/u,c)}}(),applyMatrix4:function(e){return this.direction.add(this.origin).applyMatrix4(e),this.origin.applyMatrix4(e),this.direction.sub(this.origin),this.direction.normalize(),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}};function bi(e,t,n,i){this._x=e||0,this._y=t||0,this._z=n||0,this._order=i||bi.DefaultOrder}bi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];bi.DefaultOrder="XYZ";bi.prototype={constructor:bi,isEuler:!0,get x(){return this._x},set x(e){this._x=e,this.onChangeCallback()},get y(){return this._y},set y(e){this._y=e,this.onChangeCallback()},get z(){return this._z},set z(e){this._z=e,this.onChangeCallback()},get order(){return this._order},set order(e){this._order=e,this.onChangeCallback()},set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this.onChangeCallback(),this},setFromRotationMatrix:function(e,t,n){var i=Je.clamp,r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];return t=t||this._order,t==="XYZ"?(this._y=Math.asin(i(o,-1,1)),Math.abs(o)<.99999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0)):t==="YXZ"?(this._x=Math.asin(-i(u,-1,1)),Math.abs(u)<.99999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0)):t==="ZXY"?(this._x=Math.asin(i(f,-1,1)),Math.abs(f)<.99999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a))):t==="ZYX"?(this._y=Math.asin(-i(h,-1,1)),Math.abs(h)<.99999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c))):t==="YZX"?(this._z=Math.asin(i(l,-1,1)),Math.abs(l)<.99999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p))):t==="XZY"?(this._z=Math.asin(-i(s,-1,1)),Math.abs(s)<.99999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+t),this._order=t,n!==!1&&this.onChangeCallback(),this},setFromQuaternion:function(){var e;return function(n,i,r){return e===void 0&&(e=new $e),e.makeRotationFromQuaternion(n),this.setFromRotationMatrix(e,i,r)}}(),setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(){var e=new Ct;return function(n){return e.setFromEuler(this),this.setFromQuaternion(e,n)}}(),equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this.onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new F(this._x,this._y,this._z)},onChange:function(e){return this.onChangeCallback=e,this},onChangeCallback:function(){}};function zo(){this.mask=1}zo.prototype={constructor:zo,set:function(e){this.mask=1<<e},enable:function(e){this.mask|=1<<e},toggle:function(e){this.mask^=1<<e},disable:function(e){this.mask&=~(1<<e)},test:function(e){return(this.mask&e.mask)!==0}};var SE=0;function Ge(){Object.defineProperty(this,"id",{value:SE++}),this.uuid=Je.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DefaultUp.clone();var e=new F,t=new bi,n=new Ct,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t.onChange(r),n.onChange(a),Object.defineProperties(this,{position:{enumerable:!0,value:e},rotation:{enumerable:!0,value:t},quaternion:{enumerable:!0,value:n},scale:{enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Sn}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={},this.onBeforeRender=function(){},this.onAfterRender=function(){}}Ge.DefaultUp=new F(0,1,0);Ge.DefaultMatrixAutoUpdate=!0;Object.assign(Ge.prototype,bn.prototype,{isObject3D:!0,applyMatrix:function(e){this.matrix.multiplyMatrices(e,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(){var e=new Ct;return function(n,i){return e.setFromAxisAngle(n,i),this.quaternion.multiply(e),this}}(),rotateX:function(){var e=new F(1,0,0);return function(n){return this.rotateOnAxis(e,n)}}(),rotateY:function(){var e=new F(0,1,0);return function(n){return this.rotateOnAxis(e,n)}}(),rotateZ:function(){var e=new F(0,0,1);return function(n){return this.rotateOnAxis(e,n)}}(),translateOnAxis:function(){var e=new F;return function(n,i){return e.copy(n).applyQuaternion(this.quaternion),this.position.add(e.multiplyScalar(i)),this}}(),translateX:function(){var e=new F(1,0,0);return function(n){return this.translateOnAxis(e,n)}}(),translateY:function(){var e=new F(0,1,0);return function(n){return this.translateOnAxis(e,n)}}(),translateZ:function(){var e=new F(0,0,1);return function(n){return this.translateOnAxis(e,n)}}(),localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var e=new $e;return function(n){return n.applyMatrix4(e.getInverse(this.matrixWorld))}}(),lookAt:function(){var e=new $e;return function(n){e.lookAt(n,this.position,this.up),this.quaternion.setFromRotationMatrix(e)}}(),add:function(e){if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,e.dispatchEvent({type:"added"}),this.children.push(e)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1)for(var t=0;t<arguments.length;t++)this.remove(arguments[t]);var n=this.children.indexOf(e);n!==-1&&(e.parent=null,e.dispatchEvent({type:"removed"}),this.children.splice(n,1))},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(var n=0,i=this.children.length;n<i;n++){var r=this.children[n],a=r.getObjectByProperty(e,t);if(a!==void 0)return a}},getWorldPosition:function(e){var t=e||new F;return this.updateMatrixWorld(!0),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var e=new F,t=new F;return function(i){var r=i||new Ct;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,r,t),r}}(),getWorldRotation:function(){var e=new Ct;return function(n){var i=n||new bi;return this.getWorldQuaternion(e),i.setFromQuaternion(e,this.rotation.order,!1)}}(),getWorldScale:function(){var e=new F,t=new Ct;return function(i){var r=i||new F;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(e,t,r),r}}(),getWorldDirection:function(){var e=new Ct;return function(n){var i=n||new F;return this.getWorldQuaternion(e),i.set(0,0,1).applyQuaternion(e)}}(),raycast:function(){},traverse:function(e){e(this);for(var t=this.children,n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible!==!1){e(this);for(var t=this.children,n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}},traverseAncestors:function(e){var t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate===!0&&this.updateMatrix(),(this.matrixWorldNeedsUpdate===!0||e===!0)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(var t=this.children,n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},toJSON:function(e){var t=e===void 0||e==="",n={};t&&(e={geometries:{},materials:{},textures:{},images:{}},n.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var i={};if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),i.matrix=this.matrix.toArray(),this.geometry!==void 0&&(e.geometries[this.geometry.uuid]===void 0&&(e.geometries[this.geometry.uuid]=this.geometry.toJSON(e)),i.geometry=this.geometry.uuid),this.material!==void 0&&(e.materials[this.material.uuid]===void 0&&(e.materials[this.material.uuid]=this.material.toJSON(e)),i.material=this.material.uuid),this.children.length>0){i.children=[];for(var r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(t){var a=c(e.geometries),s=c(e.materials),o=c(e.textures),l=c(e.images);a.length>0&&(n.geometries=a),s.length>0&&(n.materials=s),o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n.object=i,n;function c(u){var h=[];for(var f in u){var p=u[f];delete p.metadata,h.push(p)}return h}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(var n=0;n<e.children.length;n++){var i=e.children[n];this.add(i.clone())}return this}});function Bi(e,t){this.start=e!==void 0?e:new F,this.end=t!==void 0?t:new F}Bi.prototype={constructor:Bi,set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){var t=e||new F;return t.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){var t=e||new F;return t.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){var n=t||new F;return this.delta(n).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(){var e=new F,t=new F;return function(i,r){e.subVectors(i,this.start),t.subVectors(this.end,this.start);var a=t.dot(t),s=t.dot(e),o=s/a;return r&&(o=Je.clamp(o,0,1)),o}}(),closestPointToPoint:function(e,t,n){var i=this.closestPointToPointParameter(e,t),r=n||new F;return this.delta(r).multiplyScalar(i).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}};function En(e,t,n){this.a=e!==void 0?e:new F,this.b=t!==void 0?t:new F,this.c=n!==void 0?n:new F}En.normal=function(){var e=new F;return function(n,i,r,a){var s=a||new F;s.subVectors(r,i),e.subVectors(n,i),s.cross(e);var o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}}();En.barycoordFromPoint=function(){var e=new F,t=new F,n=new F;return function(r,a,s,o,l){e.subVectors(o,a),t.subVectors(s,a),n.subVectors(r,a);var c=e.dot(e),u=e.dot(t),h=e.dot(n),f=t.dot(t),p=t.dot(n),v=c*f-u*u,g=l||new F;if(v===0)return g.set(-2,-1,-1);var m=1/v,d=(f*h-u*p)*m,x=(c*p-u*h)*m;return g.set(1-d-x,x,d)}}();En.containsPoint=function(){var e=new F;return function(n,i,r,a){var s=En.barycoordFromPoint(n,i,r,a,e);return s.x>=0&&s.y>=0&&s.x+s.y<=1}}();En.prototype={constructor:En,set:function(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this},setFromPointsAndIndices:function(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},area:function(){var e=new F,t=new F;return function(){return e.subVectors(this.c,this.b),t.subVectors(this.a,this.b),e.cross(t).length()*.5}}(),midpoint:function(e){var t=e||new F;return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(e){return En.normal(this.a,this.b,this.c,e)},plane:function(e){var t=e||new fn;return t.setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(e,t){return En.barycoordFromPoint(e,this.a,this.b,this.c,t)},containsPoint:function(e){return En.containsPoint(e,this.a,this.b,this.c)},closestPointToPoint:function(){var e,t,n,i;return function(a,s){e===void 0&&(e=new fn,t=[new Bi,new Bi,new Bi],n=new F,i=new F);var o=s||new F,l=1/0;if(e.setFromCoplanarPoints(this.a,this.b,this.c),e.projectPoint(a,n),this.containsPoint(n)===!0)o.copy(n);else{t[0].set(this.a,this.b),t[1].set(this.b,this.c),t[2].set(this.c,this.a);for(var c=0;c<t.length;c++){t[c].closestPointToPoint(n,!0,i);var u=n.distanceToSquared(i);u<l&&(l=u,o.copy(i))}}return o}}(),equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};function gn(e,t,n,i,r,a){this.a=e,this.b=t,this.c=n,this.normal=i&&i.isVector3?i:new F,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new je,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=a!==void 0?a:0}gn.prototype={constructor:gn,clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(var t=0,n=e.vertexNormals.length;t<n;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(var t=0,n=e.vertexColors.length;t<n;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}};function an(e){rt.call(this),this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(e)}an.prototype=Object.create(rt.prototype);an.prototype.constructor=an;an.prototype.isMeshBasicMaterial=!0;an.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};function Pe(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=Je.generateUUID(),this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}Pe.prototype={constructor:Pe,isBufferAttribute:!0,set needsUpdate(e){e===!0&&this.version++},setArray:function(e){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=e!==void 0?e.length/this.itemSize:0,this.array=e},setDynamic:function(e){return this.dynamic=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.dynamic=e.dynamic,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(var i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new je),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this},copyIndicesArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];t[n++]=a.a,t[n++]=a.b,t[n++]=a.c}return this},copyVector2sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Ie),t[n++]=a.x,t[n++]=a.y}return this},copyVector3sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new F),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this},copyVector4sArray:function(e){for(var t=this.array,n=0,i=0,r=e.length;i<r;i++){var a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new pt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor().copy(this)}};function cs(e,t){Pe.call(this,new Int8Array(e),t)}cs.prototype=Object.create(Pe.prototype);cs.prototype.constructor=cs;function ls(e,t){Pe.call(this,new Uint8Array(e),t)}ls.prototype=Object.create(Pe.prototype);ls.prototype.constructor=ls;function us(e,t){Pe.call(this,new Uint8ClampedArray(e),t)}us.prototype=Object.create(Pe.prototype);us.prototype.constructor=us;function hs(e,t){Pe.call(this,new Int16Array(e),t)}hs.prototype=Object.create(Pe.prototype);hs.prototype.constructor=hs;function ii(e,t){Pe.call(this,new Uint16Array(e),t)}ii.prototype=Object.create(Pe.prototype);ii.prototype.constructor=ii;function fs(e,t){Pe.call(this,new Int32Array(e),t)}fs.prototype=Object.create(Pe.prototype);fs.prototype.constructor=fs;function ri(e,t){Pe.call(this,new Uint32Array(e),t)}ri.prototype=Object.create(Pe.prototype);ri.prototype.constructor=ri;function st(e,t){Pe.call(this,new Float32Array(e),t)}st.prototype=Object.create(Pe.prototype);st.prototype.constructor=st;function ds(e,t){Pe.call(this,new Float64Array(e),t)}ds.prototype=Object.create(Pe.prototype);ds.prototype.constructor=ds;function op(){this.indices=[],this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(op.prototype,{computeGroups:function(e){for(var t,n=[],i=void 0,r=e.faces,a=0;a<r.length;a++){var s=r[a];s.materialIndex!==i&&(i=s.materialIndex,t!==void 0&&(t.count=a*3-t.start,n.push(t)),t={start:a*3,materialIndex:i})}t!==void 0&&(t.count=a*3-t.start,n.push(t)),this.groups=n},fromGeometry:function(e){var t=e.faces,n=e.vertices,i=e.faceVertexUvs,r=i[0]&&i[0].length>0,a=i[1]&&i[1].length>0,s=e.morphTargets,o=s.length,l;if(o>0){l=[];for(var c=0;c<o;c++)l[c]=[];this.morphTargets.position=l}var u=e.morphNormals,h=u.length,f;if(h>0){f=[];for(var c=0;c<h;c++)f[c]=[];this.morphTargets.normal=f}for(var p=e.skinIndices,v=e.skinWeights,g=p.length===n.length,m=v.length===n.length,c=0;c<t.length;c++){var d=t[c];this.vertices.push(n[d.a],n[d.b],n[d.c]);var x=d.vertexNormals;if(x.length===3)this.normals.push(x[0],x[1],x[2]);else{var _=d.normal;this.normals.push(_,_,_)}var y=d.vertexColors;if(y.length===3)this.colors.push(y[0],y[1],y[2]);else{var M=d.color;this.colors.push(M,M,M)}if(r===!0){var S=i[0][c];S!==void 0?this.uvs.push(S[0],S[1],S[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",c),this.uvs.push(new Ie,new Ie,new Ie))}if(a===!0){var S=i[1][c];S!==void 0?this.uvs2.push(S[0],S[1],S[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",c),this.uvs2.push(new Ie,new Ie,new Ie))}for(var T=0;T<o;T++){var L=s[T].vertices;l[T].push(L[d.a],L[d.b],L[d.c])}for(var T=0;T<h;T++){var E=u[T].vertexNormals[c];f[T].push(E.a,E.b,E.c)}g&&this.skinIndices.push(p[d.a],p[d.b],p[d.c]),m&&this.skinWeights.push(v[d.a],v[d.b],v[d.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this}});function Ke(){Object.defineProperty(this,"id",{value:vu()}),this.uuid=Je.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(Ke.prototype,bn.prototype,{isGeometry:!0,applyMatrix:function(e){for(var t=new Sn().getNormalMatrix(e),n=0,i=this.vertices.length;n<i;n++){var r=this.vertices[n];r.applyMatrix4(e)}for(var n=0,i=this.faces.length;n<i;n++){var a=this.faces[n];a.normal.applyMatrix3(t).normalize();for(var s=0,o=a.vertexNormals.length;s<o;s++)a.vertexNormals[s].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){var e;return function(n){return e===void 0&&(e=new $e),e.makeRotationX(n),this.applyMatrix(e),this}}(),rotateY:function(){var e;return function(n){return e===void 0&&(e=new $e),e.makeRotationY(n),this.applyMatrix(e),this}}(),rotateZ:function(){var e;return function(n){return e===void 0&&(e=new $e),e.makeRotationZ(n),this.applyMatrix(e),this}}(),translate:function(){var e;return function(n,i,r){return e===void 0&&(e=new $e),e.makeTranslation(n,i,r),this.applyMatrix(e),this}}(),scale:function(){var e;return function(n,i,r){return e===void 0&&(e=new $e),e.makeScale(n,i,r),this.applyMatrix(e),this}}(),lookAt:function(){var e;return function(n){e===void 0&&(e=new Ge),e.lookAt(n),e.updateMatrix(),this.applyMatrix(e.matrix)}}(),fromBufferGeometry:function(e){var t=this,n=e.index!==null?e.index.array:void 0,i=e.attributes,r=i.position.array,a=i.normal!==void 0?i.normal.array:void 0,s=i.color!==void 0?i.color.array:void 0,o=i.uv!==void 0?i.uv.array:void 0,l=i.uv2!==void 0?i.uv2.array:void 0;l!==void 0&&(this.faceVertexUvs[1]=[]);for(var c=[],u=[],h=[],f=0,p=0;f<r.length;f+=3,p+=2)t.vertices.push(new F(r[f],r[f+1],r[f+2])),a!==void 0&&c.push(new F(a[f],a[f+1],a[f+2])),s!==void 0&&t.colors.push(new je(s[f],s[f+1],s[f+2])),o!==void 0&&u.push(new Ie(o[p],o[p+1])),l!==void 0&&h.push(new Ie(l[p],l[p+1]));function v(y,M,S,T){var L=a!==void 0?[c[y].clone(),c[M].clone(),c[S].clone()]:[],E=s!==void 0?[t.colors[y].clone(),t.colors[M].clone(),t.colors[S].clone()]:[],R=new gn(y,M,S,L,E,T);t.faces.push(R),o!==void 0&&t.faceVertexUvs[0].push([u[y].clone(),u[M].clone(),u[S].clone()]),l!==void 0&&t.faceVertexUvs[1].push([h[y].clone(),h[M].clone(),h[S].clone()])}if(n!==void 0){var g=e.groups;if(g.length>0)for(var f=0;f<g.length;f++)for(var m=g[f],d=m.start,x=m.count,p=d,_=d+x;p<_;p+=3)v(n[p],n[p+1],n[p+2],m.materialIndex);else for(var f=0;f<n.length;f+=3)v(n[f],n[f+1],n[f+2])}else for(var f=0;f<r.length/3;f+=3)v(f,f+1,f+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){this.computeBoundingBox();var e=this.boundingBox.getCenter().negate();return this.translate(e.x,e.y,e.z),e},normalize:function(){this.computeBoundingSphere();var e=this.boundingSphere.center,t=this.boundingSphere.radius,n=t===0?1:1/t,i=new $e;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix(i),this},computeFaceNormals:function(){for(var e=new F,t=new F,n=0,i=this.faces.length;n<i;n++){var r=this.faces[n],a=this.vertices[r.a],s=this.vertices[r.b],o=this.vertices[r.c];e.subVectors(o,s),t.subVectors(a,s),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);var t,n,i,r,a,s;for(s=new Array(this.vertices.length),t=0,n=this.vertices.length;t<n;t++)s[t]=new F;if(e){var o,l,c,u=new F,h=new F;for(i=0,r=this.faces.length;i<r;i++)a=this.faces[i],o=this.vertices[a.a],l=this.vertices[a.b],c=this.vertices[a.c],u.subVectors(c,l),h.subVectors(o,l),u.cross(h),s[a.a].add(u),s[a.b].add(u),s[a.c].add(u)}else for(this.computeFaceNormals(),i=0,r=this.faces.length;i<r;i++)a=this.faces[i],s[a.a].add(a.normal),s[a.b].add(a.normal),s[a.c].add(a.normal);for(t=0,n=this.vertices.length;t<n;t++)s[t].normalize();for(i=0,r=this.faces.length;i<r;i++){a=this.faces[i];var f=a.vertexNormals;f.length===3?(f[0].copy(s[a.a]),f[1].copy(s[a.b]),f[2].copy(s[a.c])):(f[0]=s[a.a].clone(),f[1]=s[a.b].clone(),f[2]=s[a.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var e,t,n;for(this.computeFaceNormals(),e=0,t=this.faces.length;e<t;e++){n=this.faces[e];var i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var e,t,n,i,r;for(n=0,i=this.faces.length;n<i;n++)for(r=this.faces[n],r.__originalFaceNormal?r.__originalFaceNormal.copy(r.normal):r.__originalFaceNormal=r.normal.clone(),r.__originalVertexNormals||(r.__originalVertexNormals=[]),e=0,t=r.vertexNormals.length;e<t;e++)r.__originalVertexNormals[e]?r.__originalVertexNormals[e].copy(r.vertexNormals[e]):r.__originalVertexNormals[e]=r.vertexNormals[e].clone();var a=new Ke;for(a.faces=this.faces,e=0,t=this.morphTargets.length;e<t;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];var s=this.morphNormals[e].faceNormals,o=this.morphNormals[e].vertexNormals,c,u;for(n=0,i=this.faces.length;n<i;n++)c=new F,u={a:new F,b:new F,c:new F},s.push(c),o.push(u)}var l=this.morphNormals[e];a.vertices=this.morphTargets[e].vertices,a.computeFaceNormals(),a.computeVertexNormals();var c,u;for(n=0,i=this.faces.length;n<i;n++)r=this.faces[n],c=l.faceNormals[n],u=l.vertexNormals[n],c.copy(r.normal),u.a.copy(r.vertexNormals[0]),u.b.copy(r.vertexNormals[1]),u.c.copy(r.vertexNormals[2])}for(n=0,i=this.faces.length;n<i;n++)r=this.faces[n],r.normal=r.__originalFaceNormal,r.vertexNormals=r.__originalVertexNormals},computeLineDistances:function(){for(var e=0,t=this.vertices,n=0,i=t.length;n<i;n++)n>0&&(e+=t[n].distanceTo(t[n-1])),this.lineDistances[n]=e},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Xt),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n){if((e&&e.isGeometry)===!1){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}var i,r=this.vertices.length,a=this.vertices,s=e.vertices,o=this.faces,l=e.faces,c=this.faceVertexUvs[0],u=e.faceVertexUvs[0],h=this.colors,f=e.colors;n===void 0&&(n=0),t!==void 0&&(i=new Sn().getNormalMatrix(t));for(var p=0,v=s.length;p<v;p++){var g=s[p],m=g.clone();t!==void 0&&m.applyMatrix4(t),a.push(m)}for(var p=0,v=f.length;p<v;p++)h.push(f[p].clone());for(p=0,v=l.length;p<v;p++){var d=l[p],x,_,y,M=d.vertexNormals,S=d.vertexColors;x=new gn(d.a+r,d.b+r,d.c+r),x.normal.copy(d.normal),i!==void 0&&x.normal.applyMatrix3(i).normalize();for(var T=0,L=M.length;T<L;T++)_=M[T].clone(),i!==void 0&&_.applyMatrix3(i).normalize(),x.vertexNormals.push(_);x.color.copy(d.color);for(var T=0,L=S.length;T<L;T++)y=S[T],x.vertexColors.push(y.clone());x.materialIndex=d.materialIndex+n,o.push(x)}for(p=0,v=u.length;p<v;p++){var E=u[p],R=[];if(E!==void 0){for(var T=0,L=E.length;T<L;T++)R.push(E[T].clone());c.push(R)}}},mergeMesh:function(e){if((e&&e.isMesh)===!1){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){var e={},t=[],n=[],i,r,a=4,s=Math.pow(10,a),o,l,c,u,h,f;for(o=0,l=this.vertices.length;o<l;o++)i=this.vertices[o],r=Math.round(i.x*s)+"_"+Math.round(i.y*s)+"_"+Math.round(i.z*s),e[r]===void 0?(e[r]=o,t.push(this.vertices[o]),n[o]=t.length-1):n[o]=n[e[r]];var p=[];for(o=0,l=this.faces.length;o<l;o++){c=this.faces[o],c.a=n[c.a],c.b=n[c.b],c.c=n[c.c],u=[c.a,c.b,c.c];for(var v=0;v<3;v++)if(u[v]===u[(v+1)%3]){p.push(o);break}}for(o=p.length-1;o>=0;o--){var g=p[o];for(this.faces.splice(g,1),h=0,f=this.faceVertexUvs.length;h<f;h++)this.faceVertexUvs[h].splice(g,1)}var m=this.vertices.length-t.length;return this.vertices=t,m},sortFacesByMaterialIndex:function(){for(var e=this.faces,t=e.length,n=0;n<t;n++)e[n]._id=n;function i(c,u){return c.materialIndex-u.materialIndex}e.sort(i);var r=this.faceVertexUvs[0],a=this.faceVertexUvs[1],s,o;r&&r.length===t&&(s=[]),a&&a.length===t&&(o=[]);for(var n=0;n<t;n++){var l=e[n]._id;s&&s.push(r[l]),o&&o.push(a[l])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){var t=this.parameters;for(var n in t)t[n]!==void 0&&(e[n]=t[n]);return e}for(var i=[],r=0;r<this.vertices.length;r++){var a=this.vertices[r];i.push(a.x,a.y,a.z)}for(var s=[],o=[],l={},c=[],u={},h=[],f={},r=0;r<this.faces.length;r++){var p=this.faces[r],v=!0,g=!1,m=this.faceVertexUvs[0][r]!==void 0,d=p.normal.length()>0,x=p.vertexNormals.length>0,_=p.color.r!==1||p.color.g!==1||p.color.b!==1,y=p.vertexColors.length>0,M=0;if(M=E(M,0,0),M=E(M,1,v),M=E(M,2,g),M=E(M,3,m),M=E(M,4,d),M=E(M,5,x),M=E(M,6,_),M=E(M,7,y),s.push(M),s.push(p.a,p.b,p.c),s.push(p.materialIndex),m){var S=this.faceVertexUvs[0][r];s.push(X(S[0]),X(S[1]),X(S[2]))}if(d&&s.push(R(p.normal)),x){var T=p.vertexNormals;s.push(R(T[0]),R(T[1]),R(T[2]))}if(_&&s.push(k(p.color)),y){var L=p.vertexColors;s.push(k(L[0]),k(L[1]),k(L[2]))}}function E(w,A,D){return D?w|1<<A:w&~(1<<A)}function R(w){var A=w.x.toString()+w.y.toString()+w.z.toString();return l[A]!==void 0||(l[A]=o.length/3,o.push(w.x,w.y,w.z)),l[A]}function k(w){var A=w.r.toString()+w.g.toString()+w.b.toString();return u[A]!==void 0||(u[A]=c.length,c.push(w.getHex())),u[A]}function X(w){var A=w.x.toString()+w.y.toString();return f[A]!==void 0||(f[A]=h.length/2,h.push(w.x,w.y)),f[A]}return e.data={},e.data.vertices=i,e.data.normals=o,c.length>0&&(e.data.colors=c),h.length>0&&(e.data.uvs=[h]),e.data.faces=s,e},clone:function(){return new Ke().copy(this)},copy:function(e){this.vertices=[],this.faces=[],this.faceVertexUvs=[[]],this.colors=[];for(var t=e.vertices,n=0,i=t.length;n<i;n++)this.vertices.push(t[n].clone());for(var r=e.colors,n=0,i=r.length;n<i;n++)this.colors.push(r[n].clone());for(var a=e.faces,n=0,i=a.length;n<i;n++)this.faces.push(a[n].clone());for(var n=0,i=e.faceVertexUvs.length;n<i;n++){var s=e.faceVertexUvs[n];this.faceVertexUvs[n]===void 0&&(this.faceVertexUvs[n]=[]);for(var o=0,l=s.length;o<l;o++){for(var c=s[o],u=[],h=0,f=c.length;h<f;h++){var p=c[h];u.push(p.clone())}this.faceVertexUvs[n].push(u)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var wE=0;function vu(){return wE++}function qe(){Object.defineProperty(this,"id",{value:vu()}),this.uuid=Je.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0}}Object.assign(qe.prototype,bn.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){this.index=e},addAttribute:function(e,t){if((t&&t.isBufferAttribute)===!1&&(t&&t.isInterleavedBufferAttribute)===!1){console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(e,new Pe(arguments[1],arguments[2]));return}if(e==="index"){console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t);return}return this.attributes[e]=t,this},getAttribute:function(e){return this.attributes[e]},removeAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix:function(e){var t=this.attributes.position;t!==void 0&&(e.applyToVector3Array(t.array),t.needsUpdate=!0);var n=this.attributes.normal;if(n!==void 0){var i=new Sn().getNormalMatrix(e);i.applyToVector3Array(n.array),n.needsUpdate=!0}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(){var e;return function(n){return e===void 0&&(e=new $e),e.makeRotationX(n),this.applyMatrix(e),this}}(),rotateY:function(){var e;return function(n){return e===void 0&&(e=new $e),e.makeRotationY(n),this.applyMatrix(e),this}}(),rotateZ:function(){var e;return function(n){return e===void 0&&(e=new $e),e.makeRotationZ(n),this.applyMatrix(e),this}}(),translate:function(){var e;return function(n,i,r){return e===void 0&&(e=new $e),e.makeTranslation(n,i,r),this.applyMatrix(e),this}}(),scale:function(){var e;return function(n,i,r){return e===void 0&&(e=new $e),e.makeScale(n,i,r),this.applyMatrix(e),this}}(),lookAt:function(){var e;return function(n){e===void 0&&(e=new Ge),e.lookAt(n),e.updateMatrix(),this.applyMatrix(e.matrix)}}(),center:function(){this.computeBoundingBox();var e=this.boundingBox.getCenter().negate();return this.translate(e.x,e.y,e.z),e},setFromObject:function(e){var t=e.geometry;if(e.isPoints||e.isLine){var n=new st(t.vertices.length*3,3),i=new st(t.colors.length*3,3);if(this.addAttribute("position",n.copyVector3sArray(t.vertices)),this.addAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){var r=new st(t.lineDistances.length,1);this.addAttribute("lineDistance",r.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},updateFromObject:function(e){var t=e.geometry;if(e.isMesh){var n=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(n=void 0,t.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(t);n.verticesNeedUpdate=t.verticesNeedUpdate,n.normalsNeedUpdate=t.normalsNeedUpdate,n.colorsNeedUpdate=t.colorsNeedUpdate,n.uvsNeedUpdate=t.uvsNeedUpdate,n.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=n}var i;return t.verticesNeedUpdate===!0&&(i=this.attributes.position,i!==void 0&&(i.copyVector3sArray(t.vertices),i.needsUpdate=!0),t.verticesNeedUpdate=!1),t.normalsNeedUpdate===!0&&(i=this.attributes.normal,i!==void 0&&(i.copyVector3sArray(t.normals),i.needsUpdate=!0),t.normalsNeedUpdate=!1),t.colorsNeedUpdate===!0&&(i=this.attributes.color,i!==void 0&&(i.copyColorsArray(t.colors),i.needsUpdate=!0),t.colorsNeedUpdate=!1),t.uvsNeedUpdate&&(i=this.attributes.uv,i!==void 0&&(i.copyVector2sArray(t.uvs),i.needsUpdate=!0),t.uvsNeedUpdate=!1),t.lineDistancesNeedUpdate&&(i=this.attributes.lineDistance,i!==void 0&&(i.copyArray(t.lineDistances),i.needsUpdate=!0),t.lineDistancesNeedUpdate=!1),t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new op().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){var t=new Float32Array(e.vertices.length*3);if(this.addAttribute("position",new Pe(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){var n=new Float32Array(e.normals.length*3);this.addAttribute("normal",new Pe(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){var i=new Float32Array(e.colors.length*3);this.addAttribute("color",new Pe(i,3).copyColorsArray(e.colors))}if(e.uvs.length>0){var r=new Float32Array(e.uvs.length*2);this.addAttribute("uv",new Pe(r,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){var a=new Float32Array(e.uvs2.length*2);this.addAttribute("uv2",new Pe(a,2).copyVector2sArray(e.uvs2))}if(e.indices.length>0){var s=e.vertices.length>65535?Uint32Array:Uint16Array,o=new s(e.indices.length*3);this.setIndex(new Pe(o,1).copyIndicesArray(e.indices))}this.groups=e.groups;for(var l in e.morphTargets){for(var c=[],u=e.morphTargets[l],h=0,f=u.length;h<f;h++){var p=u[h],v=new st(p.length*3,3);c.push(v.copyVector3sArray(p))}this.morphAttributes[l]=c}if(e.skinIndices.length>0){var g=new st(e.skinIndices.length*4,4);this.addAttribute("skinIndex",g.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){var m=new st(e.skinWeights.length*4,4);this.addAttribute("skinWeight",m.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Hn);var e=this.attributes.position;e!==void 0?this.boundingBox.setFromBufferAttribute(e):this.boundingBox.makeEmpty(),(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var e=new Hn,t=new F;return function(){this.boundingSphere===null&&(this.boundingSphere=new Xt);var i=this.attributes.position;if(i){var r=this.boundingSphere.center;e.setFromBufferAttribute(i),e.getCenter(r);for(var a=0,s=0,o=i.count;s<o;s++)t.x=i.getX(s),t.y=i.getY(s),t.z=i.getZ(s),a=Math.max(a,r.distanceToSquared(t));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var e=this.index,t=this.attributes,n=this.groups;if(t.position){var i=t.position.array;if(t.normal===void 0)this.addAttribute("normal",new Pe(new Float32Array(i.length),3));else for(var r=t.normal.array,a=0,s=r.length;a<s;a++)r[a]=0;var o=t.normal.array,l,c,u,h=new F,f=new F,p=new F,v=new F,g=new F;if(e){var m=e.array;n.length===0&&this.addGroup(0,m.length);for(var d=0,x=n.length;d<x;++d)for(var _=n[d],y=_.start,M=_.count,a=y,s=y+M;a<s;a+=3)l=m[a+0]*3,c=m[a+1]*3,u=m[a+2]*3,h.fromArray(i,l),f.fromArray(i,c),p.fromArray(i,u),v.subVectors(p,f),g.subVectors(h,f),v.cross(g),o[l]+=v.x,o[l+1]+=v.y,o[l+2]+=v.z,o[c]+=v.x,o[c+1]+=v.y,o[c+2]+=v.z,o[u]+=v.x,o[u+1]+=v.y,o[u+2]+=v.z}else for(var a=0,s=i.length;a<s;a+=9)h.fromArray(i,a),f.fromArray(i,a+3),p.fromArray(i,a+6),v.subVectors(p,f),g.subVectors(h,f),v.cross(g),o[a]=v.x,o[a+1]=v.y,o[a+2]=v.z,o[a+3]=v.x,o[a+4]=v.y,o[a+5]=v.z,o[a+6]=v.x,o[a+7]=v.y,o[a+8]=v.z;this.normalizeNormals(),t.normal.needsUpdate=!0}},merge:function(e,t){if((e&&e.isBufferGeometry)===!1){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0);var n=this.attributes;for(var i in n)if(e.attributes[i]!==void 0)for(var r=n[i],a=r.array,s=e.attributes[i],o=s.array,l=s.itemSize,c=0,u=l*t;c<o.length;c++,u++)a[u]=o[c];return this},normalizeNormals:function(){for(var e=this.attributes.normal.array,t,n,i,r,a=0,s=e.length;a<s;a+=3)t=e[a],n=e[a+1],i=e[a+2],r=1/Math.sqrt(t*t+n*n+i*i),e[a]*=r,e[a+1]*=r,e[a+2]*=r},toNonIndexed:function(){if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var e=new qe,t=this.index.array,n=this.attributes;for(var i in n){for(var r=n[i],a=r.array,s=r.itemSize,o=new a.constructor(t.length*s),l=0,c=0,u=0,h=t.length;u<h;u++){l=t[u]*s;for(var f=0;f<s;f++)o[c++]=a[l++]}e.addAttribute(i,new Pe(o,s))}return e},toJSON:function(){var e={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){var t=this.parameters;for(var n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};var i=this.index;if(i!==null){var r=Array.prototype.slice.call(i.array);e.data.index={type:i.array.constructor.name,array:r}}var a=this.attributes;for(var n in a){var s=a[n],r=Array.prototype.slice.call(s.array);e.data.attributes[n]={itemSize:s.itemSize,type:s.array.constructor.name,array:r,normalized:s.normalized}}var o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));var l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e},clone:function(){return new qe().copy(this)},copy:function(e){var t=e.index;t!==null&&this.setIndex(t.clone());var n=e.attributes;for(var i in n){var r=n[i];this.addAttribute(i,r.clone())}for(var a=e.groups,s=0,o=a.length;s<o;s++){var l=a[s];this.addGroup(l.start,l.count,l.materialIndex)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});qe.MaxIndex=65535;function Ft(e,t){Ge.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new qe,this.material=t!==void 0?t:new an({color:Math.random()*16777215}),this.drawMode=pu,this.updateMorphTargets()}Ft.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Ft,isMesh:!0,setDrawMode:function(e){this.drawMode=e},copy:function(e){return Ge.prototype.copy.call(this,e),this.drawMode=e.drawMode,this},updateMorphTargets:function(){var e=this.geometry.morphTargets;if(e!==void 0&&e.length>0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var t=0,n=e.length;t<n;t++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[e[t].name]=t}},raycast:function(){var e=new $e,t=new Ei,n=new Xt,i=new F,r=new F,a=new F,s=new F,o=new F,l=new F,c=new Ie,u=new Ie,h=new Ie,f=new F,p=new F,v=new F;function g(x,_,y,M,S,T,L){return En.barycoordFromPoint(x,_,y,M,f),S.multiplyScalar(f.x),T.multiplyScalar(f.y),L.multiplyScalar(f.z),S.add(T).add(L),S.clone()}function m(x,_,y,M,S,T,L){var E,R=x.material;if(R.side===_i?E=y.intersectTriangle(T,S,M,!0,L):E=y.intersectTriangle(M,S,T,R.side!==Ca,L),E===null)return null;v.copy(L),v.applyMatrix4(x.matrixWorld);var k=_.ray.origin.distanceTo(v);return k<_.near||k>_.far?null:{distance:k,point:v.clone(),object:x}}function d(x,_,y,M,S,T,L,E){i.fromArray(M,T*3),r.fromArray(M,L*3),a.fromArray(M,E*3);var R=m(x,_,y,i,r,a,p);return R&&(S&&(c.fromArray(S,T*2),u.fromArray(S,L*2),h.fromArray(S,E*2),R.uv=g(p,i,r,a,c,u,h)),R.face=new gn(T,L,E,En.normal(i,r,a)),R.faceIndex=T),R}return function(_,y){var M=this.geometry,S=this.material,T=this.matrixWorld;if(S!==void 0&&(M.boundingSphere===null&&M.computeBoundingSphere(),n.copy(M.boundingSphere),n.applyMatrix4(T),_.ray.intersectsSphere(n)!==!1&&(e.getInverse(T),t.copy(_.ray).applyMatrix4(e),!(M.boundingBox!==null&&t.intersectsBox(M.boundingBox)===!1)))){var L,E;if(M.isBufferGeometry){var R,k,X,w=M.index,A=M.attributes,D=A.position.array;if(A.uv!==void 0&&(L=A.uv.array),w!==null)for(var G=w.array,z=0,H=G.length;z<H;z+=3)R=G[z],k=G[z+1],X=G[z+2],E=d(this,_,t,D,L,R,k,X),E&&(E.faceIndex=Math.floor(z/3),y.push(E));else for(var z=0,H=D.length;z<H;z+=9)R=z/3,k=R+1,X=R+2,E=d(this,_,t,D,L,R,k,X),E&&(E.index=R,y.push(E))}else if(M.isGeometry){var Y,$,ie,N=S&&S.isMultiMaterial,O=N===!0?S.materials:null,q=M.vertices,ae=M.faces,te=M.faceVertexUvs[0];te.length>0&&(L=te);for(var he=0,ge=ae.length;he<ge;he++){var le=ae[he],We=N===!0?O[le.materialIndex]:S;if(We!==void 0){if(Y=q[le.a],$=q[le.b],ie=q[le.c],We.morphTargets===!0){var V=M.morphTargets,K=this.morphTargetInfluences;i.set(0,0,0),r.set(0,0,0),a.set(0,0,0);for(var Be=0,Te=V.length;Be<Te;Be++){var pe=K[Be];if(pe!==0){var Fe=V[Be].vertices;i.addScaledVector(s.subVectors(Fe[le.a],Y),pe),r.addScaledVector(o.subVectors(Fe[le.b],$),pe),a.addScaledVector(l.subVectors(Fe[le.c],ie),pe)}}i.add(Y),r.add($),a.add(ie),Y=i,$=r,ie=a}if(E=m(this,_,t,Y,$,ie,p),E){if(L){var Ne=L[he];c.copy(Ne[0]),u.copy(Ne[1]),h.copy(Ne[2]),E.uv=g(p,Y,$,ie,c,u,h)}E.face=le,E.faceIndex=he,y.push(E)}}}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function Yi(e,t,n,i,r,a){qe.call(this),this.type="BoxBufferGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};var s=this;i=Math.floor(i)||1,r=Math.floor(r)||1,a=Math.floor(a)||1;var o=x(i,r,a),l=_(i,r,a),c=new(l>65535?Uint32Array:Uint16Array)(l),u=new Float32Array(o*3),h=new Float32Array(o*3),f=new Float32Array(o*2),p=0,v=0,g=0,m=0,d=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,i,a,2),y("x","z","y",1,-1,e,n,-t,i,a,3),y("x","y","z",1,-1,e,t,n,i,r,4),y("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(new Pe(c,1)),this.addAttribute("position",new Pe(u,3)),this.addAttribute("normal",new Pe(h,3)),this.addAttribute("uv",new Pe(f,2));function x(M,S,T){var L=0;return L+=(M+1)*(S+1)*2,L+=(M+1)*(T+1)*2,L+=(T+1)*(S+1)*2,L}function _(M,S,T){var L=0;return L+=M*S*2,L+=M*T*2,L+=T*S*2,L*6}function y(M,S,T,L,E,R,k,X,w,A,D){for(var G=R/w,z=k/A,H=R/2,Y=k/2,$=X/2,ie=w+1,N=A+1,O=0,q=0,ae=new F,te=0;te<N;te++)for(var he=te*z-Y,ge=0;ge<ie;ge++){var le=ge*G-H;ae[M]=le*L,ae[S]=he*E,ae[T]=$,u[p]=ae.x,u[p+1]=ae.y,u[p+2]=ae.z,ae[M]=0,ae[S]=0,ae[T]=X>0?1:-1,h[p]=ae.x,h[p+1]=ae.y,h[p+2]=ae.z,f[v]=ge/w,f[v+1]=1-te/A,p+=3,v+=2,O+=1}for(te=0;te<A;te++)for(ge=0;ge<w;ge++){var We=m+ge+ie*te,V=m+ge+ie*(te+1),K=m+(ge+1)+ie*(te+1),Be=m+(ge+1)+ie*te;c[g]=We,c[g+1]=V,c[g+2]=Be,c[g+3]=V,c[g+4]=K,c[g+5]=Be,g+=6,q+=6}s.addGroup(d,q,D),d+=q,m+=O}}Yi.prototype=Object.create(qe.prototype);Yi.prototype.constructor=Yi;function qi(e,t,n,i){qe.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};for(var r=e/2,a=t/2,s=Math.floor(n)||1,o=Math.floor(i)||1,l=s+1,c=o+1,u=e/s,h=t/o,f=new Float32Array(l*c*3),p=new Float32Array(l*c*3),v=new Float32Array(l*c*2),g=0,m=0,d=0;d<c;d++)for(var x=d*h-a,_=0;_<l;_++){var y=_*u-r;f[g]=y,f[g+1]=-x,p[g+2]=1,v[m]=_/s,v[m+1]=1-d/o,g+=3,m+=2}g=0;for(var M=new(f.length/3>65535?Uint32Array:Uint16Array)(s*o*6),d=0;d<o;d++)for(var _=0;_<s;_++){var S=_+l*d,T=_+l*(d+1),L=_+1+l*(d+1),E=_+1+l*d;M[g]=S,M[g+1]=T,M[g+2]=E,M[g+3]=T,M[g+4]=L,M[g+5]=E,g+=6}this.setIndex(new Pe(M,1)),this.addAttribute("position",new Pe(f,3)),this.addAttribute("normal",new Pe(p,3)),this.addAttribute("uv",new Pe(v,2))}qi.prototype=Object.create(qe.prototype);qi.prototype.constructor=qi;function Yt(){Ge.call(this),this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e}Yt.prototype=Object.create(Ge.prototype);Yt.prototype.constructor=Yt;Yt.prototype.isCamera=!0;Yt.prototype.getWorldDirection=function(){var e=new Ct;return function(n){var i=n||new F;return this.getWorldQuaternion(e),i.set(0,0,-1).applyQuaternion(e)}}();Yt.prototype.lookAt=function(){var e=new $e;return function(n){e.lookAt(this.position,n,this.up),this.quaternion.setFromRotationMatrix(e)}}();Yt.prototype.clone=function(){return new this.constructor().copy(this)};Yt.prototype.copy=function(e){return Ge.prototype.copy.call(this,e),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this};function kt(e,t,n,i){Yt.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}kt.prototype=Object.assign(Object.create(Yt.prototype),{constructor:kt,isPerspectiveCamera:!0,copy:function(e){return Yt.prototype.copy.call(this,e),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){var t=.5*this.getFilmHeight()/e;this.fov=Je.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){var e=Math.tan(Je.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return Je.RAD2DEG*2*Math.atan(Math.tan(Je.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,a){this.aspect=e/t,this.view={fullWidth:e,fullHeight:t,offsetX:n,offsetY:i,width:r,height:a},this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null,this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=this.near,t=e*Math.tan(Je.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(a!==null){var s=a.fullWidth,o=a.fullHeight;r+=a.offsetX*i/s,t-=a.offsetY*n/o,i*=a.width/s,n*=a.height/o}var l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makeFrustum(r,r+i,t-n,t,e,this.far)},toJSON:function(e){var t=Ge.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});function Yr(e,t,n,i,r,a){Yt.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r!==void 0?r:.1,this.far=a!==void 0?a:2e3,this.updateProjectionMatrix()}Yr.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Yr,isOrthographicCamera:!0,copy:function(e){return Yt.prototype.copy.call(this,e),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,a){this.view={fullWidth:e,fullHeight:t,offsetX:n,offsetY:i,width:r,height:a},this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null,this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,s=i+t,o=i-t;if(this.view!==null){var l=this.zoom/(this.view.width/this.view.fullWidth),c=this.zoom/(this.view.height/this.view.fullHeight),u=(this.right-this.left)/this.view.width,h=(this.top-this.bottom)/this.view.height;r+=u*(this.view.offsetX/l),a=r+u*(this.view.width/l),s-=h*(this.view.offsetY/c),o=s-h*(this.view.height/c)}this.projectionMatrix.makeOrthographic(r,a,s,o,this.near,this.far)},toJSON:function(e){var t=Ge.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function TE(e,t,n){var i;function r(u){i=u}var a,s;function o(u){u.array instanceof Uint32Array&&t.get("OES_element_index_uint")?(a=e.UNSIGNED_INT,s=4):u.array instanceof Uint16Array?(a=e.UNSIGNED_SHORT,s=2):(a=e.UNSIGNED_BYTE,s=1)}function l(u,h){e.drawElements(i,h,a,u*s),n.calls++,n.vertices+=h,i===e.TRIANGLES&&(n.faces+=h/3)}function c(u,h,f){var p=t.get("ANGLE_instanced_arrays");if(p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p.drawElementsInstancedANGLE(i,f,a,h*s,u.maxInstancedCount),n.calls++,n.vertices+=f*u.maxInstancedCount,i===e.TRIANGLES&&(n.faces+=u.maxInstancedCount*f/3)}return{setMode:r,setIndex:o,render:l,renderInstances:c}}function AE(e,t,n){var i;function r(o){i=o}function a(o,l){e.drawArrays(i,o,l),n.calls++,n.vertices+=l,i===e.TRIANGLES&&(n.faces+=l/3)}function s(o){var l=t.get("ANGLE_instanced_arrays");if(l===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}var c=o.attributes.position,u=0;c.isInterleavedBufferAttribute?(u=c.data.count,l.drawArraysInstancedANGLE(i,0,u,o.maxInstancedCount)):(u=c.count,l.drawArraysInstancedANGLE(i,0,u,o.maxInstancedCount)),n.calls++,n.vertices+=u*o.maxInstancedCount,i===e.TRIANGLES&&(n.faces+=o.maxInstancedCount*u/3)}return{setMode:r,render:a,renderInstances:s}}function RE(){var e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];var n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new je,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={position:new F,direction:new F,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={position:new F,color:new je,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"HemisphereLight":n={direction:new F,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function LE(e){for(var t=e.split(`
`),n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function tf(e,t,n){var i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)===!1&&console.error("THREE.WebGLShader: Shader couldn't compile."),e.getShaderInfoLog(i)!==""&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",t===e.VERTEX_SHADER?"vertex":"fragment",e.getShaderInfoLog(i),LE(n)),i}var CE=0;function cp(e){switch(e){case as:return["Linear","( value )"];case Xd:return["sRGB","( value )"];case Yd:return["RGBE","( value )"];case qd:return["RGBM","( value, 7.0 )"];case jd:return["RGBM","( value, 16.0 )"];case $d:return["RGBD","( value, 256.0 )"];case mu:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+e)}}function rl(e,t){var n=cp(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function PE(e,t){var n=cp(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function UE(e,t){var n;switch(t){case lu:n="Linear";break;case Td:n="Reinhard";break;case Ad:n="Uncharted2";break;case Rd:n="OptimizedCineon";break;default:throw new Error("unsupported toneMapping: "+t)}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function DE(e,t,n){e=e||{};var i=[e.derivatives||t.envMapCubeUV||t.bumpMap||t.normalMap||t.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(e.fragDepth||t.logarithmicDepthBuffer)&&n.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",e.drawBuffers&&n.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(e.shaderTextureLOD||t.envMap)&&n.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""];return i.filter(Wa).join(`
`)}function IE(e){var t=[];for(var n in e){var i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function FE(e,t,n){for(var i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),a=0;a<r;a++){var s=e.getActiveAttrib(t,a),o=s.name;i[o]=e.getAttribLocation(t,o)}return i}function Wa(e){return e!==""}function nf(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights)}function Ll(e){var t=/#include +<([\w\d.]+)>/g;function n(i,r){var a=ht[r];if(a===void 0)throw new Error("Can not resolve #include <"+r+">");return Ll(a)}return e.replace(t,n)}function rf(e){var t=/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;function n(i,r,a,s){for(var o="",l=parseInt(r);l<parseInt(a);l++)o+=s.replace(/\[ i \]/g,"[ "+l+" ]");return o}return e.replace(t,n)}function NE(e,t,n,i){var r=e.context,a=n.extensions,s=n.defines,o=n.__webglShader.vertexShader,l=n.__webglShader.fragmentShader,c="SHADOWMAP_TYPE_BASIC";i.shadowMapType===Jl?c="SHADOWMAP_TYPE_PCF":i.shadowMapType===rd&&(c="SHADOWMAP_TYPE_PCF_SOFT");var u="ENVMAP_TYPE_CUBE",h="ENVMAP_MODE_REFLECTION",f="ENVMAP_BLENDING_MULTIPLY";if(i.envMap){switch(n.envMap.mapping){case pc:case Fo:u="ENVMAP_TYPE_CUBE";break;case mc:case vc:u="ENVMAP_TYPE_CUBE_UV";break;case uu:case No:u="ENVMAP_TYPE_EQUIREC";break;case hu:u="ENVMAP_TYPE_SPHERE";break}switch(n.envMap.mapping){case Fo:case No:h="ENVMAP_MODE_REFRACTION";break}switch(n.combine){case qs:f="ENVMAP_BLENDING_MULTIPLY";break;case Sd:f="ENVMAP_BLENDING_MIX";break;case wd:f="ENVMAP_BLENDING_ADD";break}}var p=e.gammaFactor>0?e.gammaFactor:1,v=DE(a,i,e.extensions),g=IE(s),m=r.createProgram(),d,x;n.isRawShaderMaterial?(d=[g,`
`].filter(Wa).join(`
`),x=[v,g,`
`].filter(Wa).join(`
`)):(d=["precision "+i.precision+" float;","precision "+i.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,g,i.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+p,"#define MAX_BONES "+i.maxBones,i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexColors?"#define USE_COLOR":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.useVertexTexture?"#define BONE_TEXTURE":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+i.numClippingPlanes,i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&e.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),x=[v,"precision "+i.precision+" float;","precision "+i.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,g,i.alphaTest?"#define ALPHATEST "+i.alphaTest:"","#define GAMMA_FACTOR "+p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+h:"",i.envMap?"#define "+f:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.vertexColors?"#define USE_COLOR":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+i.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(i.numClippingPlanes-i.numClipIntersection),i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&e.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",i.envMap&&e.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",i.toneMapping!==Co?"#define TONE_MAPPING":"",i.toneMapping!==Co?ht.tonemapping_pars_fragment:"",i.toneMapping!==Co?UE("toneMapping",i.toneMapping):"",i.outputEncoding||i.mapEncoding||i.envMapEncoding||i.emissiveMapEncoding?ht.encodings_pars_fragment:"",i.mapEncoding?rl("mapTexelToLinear",i.mapEncoding):"",i.envMapEncoding?rl("envMapTexelToLinear",i.envMapEncoding):"",i.emissiveMapEncoding?rl("emissiveMapTexelToLinear",i.emissiveMapEncoding):"",i.outputEncoding?PE("linearToOutputTexel",i.outputEncoding):"",i.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),o=Ll(o),o=nf(o,i),l=Ll(l),l=nf(l,i),n.isShaderMaterial||(o=rf(o),l=rf(l));var _=d+o,y=x+l,M=tf(r,r.VERTEX_SHADER,_),S=tf(r,r.FRAGMENT_SHADER,y);r.attachShader(m,M),r.attachShader(m,S),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):i.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);var T=r.getProgramInfoLog(m),L=r.getShaderInfoLog(M),E=r.getShaderInfoLog(S),R=!0,k=!0;r.getProgramParameter(m,r.LINK_STATUS)===!1?(R=!1,console.error("THREE.WebGLProgram: shader error: ",r.getError(),"gl.VALIDATE_STATUS",r.getProgramParameter(m,r.VALIDATE_STATUS),"gl.getProgramInfoLog",T,L,E)):T!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",T):(L===""||E==="")&&(k=!1),k&&(this.diagnostics={runnable:R,material:n,programLog:T,vertexShader:{log:L,prefix:d},fragmentShader:{log:E,prefix:x}}),r.deleteShader(M),r.deleteShader(S);var X;this.getUniforms=function(){return X===void 0&&(X=new yi(r,m,e)),X};var w;return this.getAttributes=function(){return w===void 0&&(w=FE(r,m)),w},this.destroy=function(){r.deleteProgram(m),this.program=void 0},Object.defineProperties(this,{uniforms:{get:function(){return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),this.getUniforms()}},attributes:{get:function(){return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),this.getAttributes()}}}),this.id=CE++,this.code=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}function OE(e,t){var n=[],i={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},r=["precision","supportsVertexTextures","map","mapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking"];function a(o){if(t.floatVertexTextures&&o&&o.skeleton&&o.skeleton.useVertexTexture)return 1024;var l=t.maxVertexUniforms,c=Math.floor((l-20)/4),u=c;return o!==void 0&&o&&o.isSkinnedMesh&&(u=Math.min(o.skeleton.bones.length,u),u<o.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+o.skeleton.bones.length+", this GPU supports just "+u+" (try OpenGL instead of ANGLE)")),u}function s(o,l){var c;return o?o.isTexture?c=o.encoding:o.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=o.texture.encoding):c=as,c===as&&l&&(c=mu),c}this.getParameters=function(o,l,c,u,h,f){var p=i[o.type],v=a(f),g=e.getPrecision();o.precision!==null&&(g=t.getMaxPrecision(o.precision),g!==o.precision&&console.warn("THREE.WebGLProgram.getParameters:",o.precision,"not supported, using",g,"instead."));var m=e.getCurrentRenderTarget(),d={shaderID:p,precision:g,supportsVertexTextures:t.vertexTextures,outputEncoding:s(m?m.texture:null,e.gammaOutput),map:!!o.map,mapEncoding:s(o.map,e.gammaInput),envMap:!!o.envMap,envMapMode:o.envMap&&o.envMap.mapping,envMapEncoding:s(o.envMap,e.gammaInput),envMapCubeUV:!!o.envMap&&(o.envMap.mapping===mc||o.envMap.mapping===vc),lightMap:!!o.lightMap,aoMap:!!o.aoMap,emissiveMap:!!o.emissiveMap,emissiveMapEncoding:s(o.emissiveMap,e.gammaInput),bumpMap:!!o.bumpMap,normalMap:!!o.normalMap,displacementMap:!!o.displacementMap,roughnessMap:!!o.roughnessMap,metalnessMap:!!o.metalnessMap,specularMap:!!o.specularMap,alphaMap:!!o.alphaMap,gradientMap:!!o.gradientMap,combine:o.combine,vertexColors:o.vertexColors,fog:!!c,useFog:o.fog,fogExp:c&&c.isFogExp2,flatShading:o.shading===Ql,sizeAttenuation:o.sizeAttenuation,logarithmicDepthBuffer:t.logarithmicDepthBuffer,skinning:o.skinning,maxBones:v,useVertexTexture:t.floatVertexTextures&&f&&f.skeleton&&f.skeleton.useVertexTexture,morphTargets:o.morphTargets,morphNormals:o.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:l.directional.length,numPointLights:l.point.length,numSpotLights:l.spot.length,numRectAreaLights:l.rectArea.length,numHemiLights:l.hemi.length,numClippingPlanes:u,numClipIntersection:h,shadowMapEnabled:e.shadowMap.enabled&&f.receiveShadow&&l.shadows.length>0,shadowMapType:e.shadowMap.type,toneMapping:e.toneMapping,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:o.premultipliedAlpha,alphaTest:o.alphaTest,doubleSided:o.side===Ca,flipSided:o.side===_i,depthPacking:o.depthPacking!==void 0?o.depthPacking:!1};return d},this.getProgramCode=function(o,l){var c=[];if(l.shaderID?c.push(l.shaderID):(c.push(o.fragmentShader),c.push(o.vertexShader)),o.defines!==void 0)for(var u in o.defines)c.push(u),c.push(o.defines[u]);for(var h=0;h<r.length;h++)c.push(l[r[h]]);return c.join()},this.acquireProgram=function(o,l,c){for(var u,h=0,f=n.length;h<f;h++){var p=n[h];if(p.code===c){u=p,++u.usedTimes;break}}return u===void 0&&(u=new NE(e,c,o,l),n.push(u)),u},this.releaseProgram=function(o){if(--o.usedTimes===0){var l=n.indexOf(o);n[l]=n[n.length-1],n.pop(),o.destroy()}},this.programs=n}function BE(e,t,n){var i={};function r(c){var u=c.target,h=i[u.id];h.index!==null&&s(h.index),o(h.attributes),u.removeEventListener("dispose",r),delete i[u.id];var f=t.get(u);f.wireframe&&s(f.wireframe),t.delete(u);var p=t.get(h);p.wireframe&&s(p.wireframe),t.delete(h),n.memory.geometries--}function a(c){return c.isInterleavedBufferAttribute?t.get(c.data).__webglBuffer:t.get(c).__webglBuffer}function s(c){var u=a(c);u!==void 0&&(e.deleteBuffer(u),l(c))}function o(c){for(var u in c)s(c[u])}function l(c){c.isInterleavedBufferAttribute?t.delete(c.data):t.delete(c)}return{get:function(c){var u=c.geometry;if(i[u.id]!==void 0)return i[u.id];u.addEventListener("dispose",r);var h;return u.isBufferGeometry?h=u:u.isGeometry&&(u._bufferGeometry===void 0&&(u._bufferGeometry=new qe().setFromObject(c)),h=u._bufferGeometry),i[u.id]=h,n.memory.geometries++,h}}}function zE(e,t,n){var i=new BE(e,t,n);function r(h){var f=i.get(h);h.geometry.isGeometry&&f.updateFromObject(h);var p=f.index,v=f.attributes;p!==null&&a(p,e.ELEMENT_ARRAY_BUFFER);for(var g in v)a(v[g],e.ARRAY_BUFFER);var m=f.morphAttributes;for(var g in m)for(var d=m[g],x=0,_=d.length;x<_;x++)a(d[x],e.ARRAY_BUFFER);return f}function a(h,f){var p=h.isInterleavedBufferAttribute?h.data:h,v=t.get(p);v.__webglBuffer===void 0?s(v,p,f):v.version!==p.version&&o(v,p,f)}function s(h,f,p){h.__webglBuffer=e.createBuffer(),e.bindBuffer(p,h.__webglBuffer);var v=f.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW;e.bufferData(p,f.array,v);var g=e.FLOAT,m=f.array;m instanceof Float32Array?g=e.FLOAT:m instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):m instanceof Uint16Array?g=e.UNSIGNED_SHORT:m instanceof Int16Array?g=e.SHORT:m instanceof Uint32Array?g=e.UNSIGNED_INT:m instanceof Int32Array?g=e.INT:m instanceof Int8Array?g=e.BYTE:m instanceof Uint8Array&&(g=e.UNSIGNED_BYTE),h.bytesPerElement=m.BYTES_PER_ELEMENT,h.type=g,h.version=f.version,f.onUploadCallback()}function o(h,f,p){e.bindBuffer(p,h.__webglBuffer),f.dynamic===!1?e.bufferData(p,f.array,e.STATIC_DRAW):f.updateRange.count===-1?e.bufferSubData(p,0,f.array):f.updateRange.count===0?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(e.bufferSubData(p,f.updateRange.offset*f.array.BYTES_PER_ELEMENT,f.array.subarray(f.updateRange.offset,f.updateRange.offset+f.updateRange.count)),f.updateRange.count=0),h.version=f.version}function l(h){return h.isInterleavedBufferAttribute?t.get(h.data).__webglBuffer:t.get(h).__webglBuffer}function c(h){return h.isInterleavedBufferAttribute?t.get(h.data):t.get(h)}function u(h){var f=t.get(h);if(f.wireframe!==void 0)return f.wireframe;var p=[],v=h.index,g=h.attributes,m=g.position;if(v!==null)for(var d=v.array,x=0,_=d.length;x<_;x+=3){var y=d[x+0],M=d[x+1],S=d[x+2];p.push(y,M,M,S,S,y)}else for(var d=g.position.array,x=0,_=d.length/3-1;x<_;x+=3){var y=x+0,M=x+1,S=x+2;p.push(y,M,M,S,S,y)}var T=m.count>65535?Uint32Array:Uint16Array,L=new Pe(new T(p),1);return a(L,e.ELEMENT_ARRAY_BUFFER),f.wireframe=L,L}return{getAttributeBuffer:l,getAttributeProperties:c,getWireframeAttribute:u,update:r}}function GE(e,t,n,i,r,a,s){var o=s.memory,l=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext;function c(w,A){if(w.width>A||w.height>A){var D=A/Math.max(w.width,w.height),G=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");G.width=Math.floor(w.width*D),G.height=Math.floor(w.height*D);var z=G.getContext("2d");return z.drawImage(w,0,0,w.width,w.height,0,0,G.width,G.height),console.warn("THREE.WebGLRenderer: image is too big ("+w.width+"x"+w.height+"). Resized to "+G.width+"x"+G.height,w),G}return w}function u(w){return Je.isPowerOfTwo(w.width)&&Je.isPowerOfTwo(w.height)}function h(w){if(w instanceof HTMLImageElement||w instanceof HTMLCanvasElement){var A=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");A.width=Je.nearestPowerOfTwo(w.width),A.height=Je.nearestPowerOfTwo(w.height);var D=A.getContext("2d");return D.drawImage(w,0,0,A.width,A.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+w.width+"x"+w.height+"). Resized to "+A.width+"x"+A.height,w),A}return w}function f(w){return w.wrapS!==pn||w.wrapT!==pn||w.minFilter!==mn&&w.minFilter!==nn}function p(w){return w===mn||w===gc||w===_c?e.NEAREST:e.LINEAR}function v(w){var A=w.target;A.removeEventListener("dispose",v),m(A),o.textures--}function g(w){var A=w.target;A.removeEventListener("dispose",g),d(A),o.textures--}function m(w){var A=i.get(w);if(w.image&&A.__image__webglTextureCube)e.deleteTexture(A.__image__webglTextureCube);else{if(A.__webglInit===void 0)return;e.deleteTexture(A.__webglTexture)}i.delete(w)}function d(w){var A=i.get(w),D=i.get(w.texture);if(w){if(D.__webglTexture!==void 0&&e.deleteTexture(D.__webglTexture),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLRenderTargetCube)for(var G=0;G<6;G++)e.deleteFramebuffer(A.__webglFramebuffer[G]),A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer[G]);else e.deleteFramebuffer(A.__webglFramebuffer),A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer);i.delete(w.texture),i.delete(w)}}function x(w,A){var D=i.get(w);if(w.version>0&&D.__version!==w.version){var G=w.image;if(G===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",w);else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",w);else{S(D,w,A);return}}n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_2D,D.__webglTexture)}function _(w,A){var D=i.get(w);if(w.image.length===6)if(w.version>0&&D.__version!==w.version){D.__image__webglTextureCube||(w.addEventListener("dispose",v),D.__image__webglTextureCube=e.createTexture(),o.textures++),n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_CUBE_MAP,D.__image__webglTextureCube),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,w.flipY);for(var G=w&&w.isCompressedTexture,z=w.image[0]&&w.image[0].isDataTexture,H=[],Y=0;Y<6;Y++)!G&&!z?H[Y]=c(w.image[Y],r.maxCubemapSize):H[Y]=z?w.image[Y].image:w.image[Y];var $=H[0],ie=u($),N=a(w.format),O=a(w.type);M(e.TEXTURE_CUBE_MAP,w,ie);for(var Y=0;Y<6;Y++)if(!G)z?n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,N,H[Y].width,H[Y].height,0,N,O,H[Y].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,N,N,O,H[Y]);else for(var q,ae=H[Y].mipmaps,te=0,he=ae.length;te<he;te++)q=ae[te],w.format!==Gn&&w.format!==Vr?n.getCompressedTextureFormats().indexOf(N)>-1?n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,N,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,N,q.width,q.height,0,N,O,q.data);w.generateMipmaps&&ie&&e.generateMipmap(e.TEXTURE_CUBE_MAP),D.__version=w.version,w.onUpdate&&w.onUpdate(w)}else n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_CUBE_MAP,D.__image__webglTextureCube)}function y(w,A){n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_CUBE_MAP,i.get(w).__webglTexture)}function M(w,A,D){var G;if(D?(e.texParameteri(w,e.TEXTURE_WRAP_S,a(A.wrapS)),e.texParameteri(w,e.TEXTURE_WRAP_T,a(A.wrapT)),e.texParameteri(w,e.TEXTURE_MAG_FILTER,a(A.magFilter)),e.texParameteri(w,e.TEXTURE_MIN_FILTER,a(A.minFilter))):(e.texParameteri(w,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(w,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(A.wrapS!==pn||A.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",A),e.texParameteri(w,e.TEXTURE_MAG_FILTER,p(A.magFilter)),e.texParameteri(w,e.TEXTURE_MIN_FILTER,p(A.minFilter)),A.minFilter!==mn&&A.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",A)),G=t.get("EXT_texture_filter_anisotropic"),G){if(A.type===Hr&&t.get("OES_texture_float_linear")===null||A.type===Bo&&t.get("OES_texture_half_float_linear")===null)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(e.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function S(w,A,D){w.__webglInit===void 0&&(w.__webglInit=!0,A.addEventListener("dispose",v),w.__webglTexture=e.createTexture(),o.textures++),n.activeTexture(e.TEXTURE0+D),n.bindTexture(e.TEXTURE_2D,w.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,A.unpackAlignment);var G=c(A.image,r.maxTextureSize);f(A)&&u(G)===!1&&(G=h(G));var z=u(G),H=a(A.format),Y=a(A.type);M(e.TEXTURE_2D,A,z);var $,ie=A.mipmaps;if(A.isDepthTexture){var N=e.DEPTH_COMPONENT;if(A.type===Hr){if(!l)throw new Error("Float Depth Texture only supported in WebGL2.0");N=e.DEPTH_COMPONENT32F}else l&&(N=e.DEPTH_COMPONENT16);A.format===Oi&&N===e.DEPTH_COMPONENT&&A.type!==ts&&A.type!==du&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ts,Y=a(A.type)),A.format===kr&&(N=e.DEPTH_STENCIL,A.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ns,Y=a(A.type))),n.texImage2D(e.TEXTURE_2D,0,N,G.width,G.height,0,H,Y,null)}else if(A.isDataTexture)if(ie.length>0&&z){for(var O=0,q=ie.length;O<q;O++)$=ie[O],n.texImage2D(e.TEXTURE_2D,O,H,$.width,$.height,0,H,Y,$.data);A.generateMipmaps=!1}else n.texImage2D(e.TEXTURE_2D,0,H,G.width,G.height,0,H,Y,G.data);else if(A.isCompressedTexture)for(var O=0,q=ie.length;O<q;O++)$=ie[O],A.format!==Gn&&A.format!==Vr?n.getCompressedTextureFormats().indexOf(H)>-1?n.compressedTexImage2D(e.TEXTURE_2D,O,H,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(e.TEXTURE_2D,O,H,$.width,$.height,0,H,Y,$.data);else if(ie.length>0&&z){for(var O=0,q=ie.length;O<q;O++)$=ie[O],n.texImage2D(e.TEXTURE_2D,O,H,H,Y,$);A.generateMipmaps=!1}else n.texImage2D(e.TEXTURE_2D,0,H,H,Y,G);A.generateMipmaps&&z&&e.generateMipmap(e.TEXTURE_2D),w.__version=A.version,A.onUpdate&&A.onUpdate(A)}function T(w,A,D,G){var z=a(A.texture.format),H=a(A.texture.type);n.texImage2D(G,0,z,A.width,A.height,0,z,H,null),e.bindFramebuffer(e.FRAMEBUFFER,w),e.framebufferTexture2D(e.FRAMEBUFFER,D,G,i.get(A.texture).__webglTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function L(w,A){e.bindRenderbuffer(e.RENDERBUFFER,w),A.depthBuffer&&!A.stencilBuffer?(e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,w)):A.depthBuffer&&A.stencilBuffer?(e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,w)):e.renderbufferStorage(e.RENDERBUFFER,e.RGBA4,A.width,A.height),e.bindRenderbuffer(e.RENDERBUFFER,null)}function E(w,A){var D=A&&A.isWebGLRenderTargetCube;if(D)throw new Error("Depth Texture with cube render targets is not supported!");if(e.bindFramebuffer(e.FRAMEBUFFER,w),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),x(A.depthTexture,0);var G=i.get(A.depthTexture).__webglTexture;if(A.depthTexture.format===Oi)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,G,0);else if(A.depthTexture.format===kr)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function R(w){var A=i.get(w),D=w.isWebGLRenderTargetCube===!0;if(w.depthTexture){if(D)throw new Error("target.depthTexture not supported in Cube render targets");E(A.__webglFramebuffer,w)}else if(D){A.__webglDepthbuffer=[];for(var G=0;G<6;G++)e.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer[G]),A.__webglDepthbuffer[G]=e.createRenderbuffer(),L(A.__webglDepthbuffer[G],w)}else e.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=e.createRenderbuffer(),L(A.__webglDepthbuffer,w);e.bindFramebuffer(e.FRAMEBUFFER,null)}function k(w){var A=i.get(w),D=i.get(w.texture);w.addEventListener("dispose",g),D.__webglTexture=e.createTexture(),o.textures++;var G=w.isWebGLRenderTargetCube===!0,z=u(w);if(G){A.__webglFramebuffer=[];for(var H=0;H<6;H++)A.__webglFramebuffer[H]=e.createFramebuffer()}else A.__webglFramebuffer=e.createFramebuffer();if(G){n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture),M(e.TEXTURE_CUBE_MAP,w.texture,z);for(var H=0;H<6;H++)T(A.__webglFramebuffer[H],w,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+H);w.texture.generateMipmaps&&z&&e.generateMipmap(e.TEXTURE_CUBE_MAP),n.bindTexture(e.TEXTURE_CUBE_MAP,null)}else n.bindTexture(e.TEXTURE_2D,D.__webglTexture),M(e.TEXTURE_2D,w.texture,z),T(A.__webglFramebuffer,w,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),w.texture.generateMipmaps&&z&&e.generateMipmap(e.TEXTURE_2D),n.bindTexture(e.TEXTURE_2D,null);w.depthBuffer&&R(w)}function X(w){var A=w.texture;if(A.generateMipmaps&&u(w)&&A.minFilter!==mn&&A.minFilter!==nn){var D=w&&w.isWebGLRenderTargetCube?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,G=i.get(A).__webglTexture;n.bindTexture(D,G),e.generateMipmap(D),n.bindTexture(D,null)}}this.setTexture2D=x,this.setTextureCube=_,this.setTextureCubeDynamic=y,this.setupRenderTarget=k,this.updateRenderTargetMipmap=X}function HE(){var e={};return{get:function(t){var n=t.uuid,i=e[n];return i===void 0&&(i={},e[n]=i),i},delete:function(t){delete e[t.uuid]},clear:function(){e={}}}}function VE(e,t,n){function i(){var j=!1,_e=new pt,ye=null,be=new pt;return{setMask:function(de){ye!==de&&!j&&(e.colorMask(de,de,de,de),ye=de)},setLocked:function(de){j=de},setClear:function(de,He,tt,W,Re){Re===!0&&(de*=W,He*=W,tt*=W),_e.set(de,He,tt,W),be.equals(_e)===!1&&(e.clearColor(de,He,tt,W),be.copy(_e))},reset:function(){j=!1,ye=null,be.set(0,0,0,1)}}}function r(){var j=!1,_e=null,ye=null,be=null;return{setTest:function(de){de?he(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(de){_e!==de&&!j&&(e.depthMask(de),_e=de)},setFunc:function(de){if(ye!==de){if(de)switch(de){case gd:e.depthFunc(e.NEVER);break;case _d:e.depthFunc(e.ALWAYS);break;case xd:e.depthFunc(e.LESS);break;case Io:e.depthFunc(e.LEQUAL);break;case yd:e.depthFunc(e.EQUAL);break;case Md:e.depthFunc(e.GEQUAL);break;case Ed:e.depthFunc(e.GREATER);break;case bd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}else e.depthFunc(e.LEQUAL);ye=de}},setLocked:function(de){j=de},setClear:function(de){be!==de&&(e.clearDepth(de),be=de)},reset:function(){j=!1,_e=null,ye=null,be=null}}}function a(){var j=!1,_e=null,ye=null,be=null,de=null,He=null,tt=null,W=null,Re=null;return{setTest:function(Q){Q?he(e.STENCIL_TEST):ge(e.STENCIL_TEST)},setMask:function(Q){_e!==Q&&!j&&(e.stencilMask(Q),_e=Q)},setFunc:function(Q,Me,Le){(ye!==Q||be!==Me||de!==Le)&&(e.stencilFunc(Q,Me,Le),ye=Q,be=Me,de=Le)},setOp:function(Q,Me,Le){(He!==Q||tt!==Me||W!==Le)&&(e.stencilOp(Q,Me,Le),He=Q,tt=Me,W=Le)},setLocked:function(Q){j=Q},setClear:function(Q){Re!==Q&&(e.clearStencil(Q),Re=Q)},reset:function(){j=!1,_e=null,ye=null,be=null,de=null,He=null,tt=null,W=null,Re=null}}}var s=new i,o=new r,l=new a,c=e.getParameter(e.MAX_VERTEX_ATTRIBS),u=new Uint8Array(c),h=new Uint8Array(c),f=new Uint8Array(c),p={},v=null,g=null,m=null,d=null,x=null,_=null,y=null,M=null,S=!1,T=null,L=null,E=null,R=null,k=null,X=null,w=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),A=parseFloat(/^WebGL\ ([0-9])/.exec(e.getParameter(e.VERSION))[1]),D=parseFloat(A)>=1,G=null,z={},H=new pt,Y=new pt;function $(j,_e,ye){var be=new Uint8Array(4),de=e.createTexture();e.bindTexture(j,de),e.texParameteri(j,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(j,e.TEXTURE_MAG_FILTER,e.NEAREST);for(var He=0;He<ye;He++)e.texImage2D(_e+He,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,be);return de}var ie={};ie[e.TEXTURE_2D]=$(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=$(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6);function N(){s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),he(e.DEPTH_TEST),Te(Io),Oe(!1),Ye(Qa),he(e.CULL_FACE),he(e.BLEND),We(Pa)}function O(){for(var j=0,_e=u.length;j<_e;j++)u[j]=0}function q(j){if(u[j]=1,h[j]===0&&(e.enableVertexAttribArray(j),h[j]=1),f[j]!==0){var _e=t.get("ANGLE_instanced_arrays");_e.vertexAttribDivisorANGLE(j,0),f[j]=0}}function ae(j,_e,ye){u[j]=1,h[j]===0&&(e.enableVertexAttribArray(j),h[j]=1),f[j]!==_e&&(ye.vertexAttribDivisorANGLE(j,_e),f[j]=_e)}function te(){for(var j=0,_e=h.length;j!==_e;++j)h[j]!==u[j]&&(e.disableVertexAttribArray(j),h[j]=0)}function he(j){p[j]!==!0&&(e.enable(j),p[j]=!0)}function ge(j){p[j]!==!1&&(e.disable(j),p[j]=!1)}function le(){if(v===null&&(v=[],t.get("WEBGL_compressed_texture_pvrtc")||t.get("WEBGL_compressed_texture_s3tc")||t.get("WEBGL_compressed_texture_etc1")))for(var j=e.getParameter(e.COMPRESSED_TEXTURE_FORMATS),_e=0;_e<j.length;_e++)v.push(j[_e]);return v}function We(j,_e,ye,be,de,He,tt,W){j!==es?he(e.BLEND):ge(e.BLEND),(j!==g||W!==S)&&(j===nu?W?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)):j===iu?W?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR)):j===ru?W?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA)):(e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ZERO,e.SRC_COLOR)):W?(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)):(e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)),g=j,S=W),j===au?(de=de||_e,He=He||ye,tt=tt||be,(_e!==m||de!==_)&&(e.blendEquationSeparate(n(_e),n(de)),m=_e,_=de),(ye!==d||be!==x||He!==y||tt!==M)&&(e.blendFuncSeparate(n(ye),n(be),n(He),n(tt)),d=ye,x=be,y=He,M=tt)):(m=null,d=null,x=null,_=null,y=null,M=null)}function V(j){s.setMask(j)}function K(j){o.setTest(j)}function Be(j){o.setMask(j)}function Te(j){o.setFunc(j)}function pe(j){l.setTest(j)}function Fe(j){l.setMask(j)}function Ne(j,_e,ye){l.setFunc(j,_e,ye)}function we(j,_e,ye){l.setOp(j,_e,ye)}function Oe(j){T!==j&&(j?e.frontFace(e.CW):e.frontFace(e.CCW),T=j)}function Ye(j){j!==nd?(he(e.CULL_FACE),j!==L&&(j===Qa?e.cullFace(e.BACK):j===Kl?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ge(e.CULL_FACE),L=j}function nt(j){j!==E&&(D&&e.lineWidth(j),E=j)}function lt(j,_e,ye){j?(he(e.POLYGON_OFFSET_FILL),(R!==_e||k!==ye)&&(e.polygonOffset(_e,ye),R=_e,k=ye)):ge(e.POLYGON_OFFSET_FILL)}function I(){return X}function C(j){X=j,j?he(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function re(j){j===void 0&&(j=e.TEXTURE0+w-1),G!==j&&(e.activeTexture(j),G=j)}function fe(j,_e){G===null&&re();var ye=z[G];ye===void 0&&(ye={type:void 0,texture:void 0},z[G]=ye),(ye.type!==j||ye.texture!==_e)&&(e.bindTexture(j,_e||ie[j]),ye.type=j,ye.texture=_e)}function me(){try{e.compressedTexImage2D.apply(e,arguments)}catch(j){console.error(j)}}function Ae(){try{e.texImage2D.apply(e,arguments)}catch(j){console.error(j)}}function Ve(j){H.equals(j)===!1&&(e.scissor(j.x,j.y,j.z,j.w),H.copy(j))}function Ce(j){Y.equals(j)===!1&&(e.viewport(j.x,j.y,j.z,j.w),Y.copy(j))}function oe(){for(var j=0;j<h.length;j++)h[j]===1&&(e.disableVertexAttribArray(j),h[j]=0);p={},v=null,G=null,z={},g=null,T=null,L=null,s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},init:N,initAttributes:O,enableAttribute:q,enableAttributeAndDivisor:ae,disableUnusedAttributes:te,enable:he,disable:ge,getCompressedTextureFormats:le,setBlending:We,setColorWrite:V,setDepthTest:K,setDepthWrite:Be,setDepthFunc:Te,setStencilTest:pe,setStencilWrite:Fe,setStencilFunc:Ne,setStencilOp:we,setFlipSided:Oe,setCullFace:Ye,setLineWidth:nt,setPolygonOffset:lt,getScissorTest:I,setScissorTest:C,activeTexture:re,bindTexture:fe,compressedTexImage2D:me,texImage2D:Ae,scissor:Ve,viewport:Ce,reset:oe}}function kE(e,t,n){var i;function r(){if(i!==void 0)return i;var y=t.get("EXT_texture_filter_anisotropic");return y!==null?i=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function a(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}var s=n.precision!==void 0?n.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);var l=n.logarithmicDepthBuffer===!0&&!!t.get("EXT_frag_depth"),c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),d=u>0,x=!!t.get("OES_texture_float"),_=d&&x;return{getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:d,floatFragmentTextures:x,floatVertexTextures:_}}function WE(e){var t={};return{get:function(n){if(t[n]!==void 0)return t[n];var i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case"WEBGL_compressed_texture_etc1":i=e.getExtension("WEBGL_compressed_texture_etc1");break;default:i=e.getExtension(n)}return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]=i,i}}}function XE(){var e=this,t=null,n=0,i=!1,r=!1,a=new fn,s=new Sn,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,f){var p=u.length!==0||h||n!==0||i;return i=h,t=c(u,f,0),n=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,h,f,p,v,g){if(!i||u===null||u.length===0||r&&!f)r?c(null):l();else{var m=r?0:n,d=m*4,x=v.clippingState||null;o.value=x,x=c(u,p,d,g);for(var _=0;_!==d;++_)x[_]=t[_];v.clippingState=x,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=m}};function l(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,h,f,p){var v=u!==null?u.length:0,g=null;if(v!==0){if(g=o.value,p!==!0||g===null){var m=f+v*4,d=h.matrixWorldInverse;s.getNormalMatrix(d),(g===null||g.length<m)&&(g=new Float32Array(m));for(var x=0,_=f;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(d,s),a.normal.toArray(g,_),g[_+3]=a.constant}o.value=g,o.needsUpdate=!0}return e.numPlanes=v,g}}function gu(e){console.log("THREE.WebGLRenderer",td),e=e||{};var t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,a=e.stencil!==void 0?e.stencil:!0,s=e.antialias!==void 0?e.antialias:!1,o=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,l=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,c=[],u=[],h=-1,f=[],p=-1,v=new Float32Array(8),g=[],m=[];this.domElement=t,this.context=null,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=lu,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var d=this,x=null,_=null,y=null,M=-1,S="",T=null,L=new pt,E=null,R=new pt,k=0,X=new je(0),w=0,A=t.width,D=t.height,G=1,z=new pt(0,0,A,D),H=!1,Y=new pt(0,0,A,D),$=new os,ie=new XE,N=!1,O=!1,q=new Xt,ae=new $e,te=new F,he=new $e,ge=new $e,le={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},We={calls:0,vertices:0,faces:0,points:0};this.info={render:We,memory:{geometries:0,textures:0},programs:null};var V;try{var K={alpha:i,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l};if(V=n||t.getContext("webgl",K)||t.getContext("experimental-webgl",K),V===null)throw t.getContext("webgl")!==null?"Error creating WebGL context with your selected attributes.":"Error creating WebGL context.";V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}),t.addEventListener("webglcontextlost",ye,!1)}catch(b){console.error("THREE.WebGLRenderer: "+b)}var Be=new WE(V);Be.get("WEBGL_depth_texture"),Be.get("OES_texture_float"),Be.get("OES_texture_float_linear"),Be.get("OES_texture_half_float"),Be.get("OES_texture_half_float_linear"),Be.get("OES_standard_derivatives"),Be.get("ANGLE_instanced_arrays"),Be.get("OES_element_index_uint")&&(qe.MaxIndex=4294967296);var Te=new kE(V,Be,e),pe=new VE(V,Be,ze),Fe=new HE,Ne=new GE(V,Be,pe,Fe,Te,ze,this.info),we=new zE(V,Fe,this.info),Oe=new OE(this,Te),Ye=new RE;this.info.programs=Oe.programs;var nt=new AE(V,Be,We),lt=new TE(V,Be,We),I=new Yr(-1,1,1,-1,0,1),C=new kt,re=new Ft(new qi(2,2),new an({depthTest:!1,depthWrite:!1,fog:!1})),fe=Xr.cube,me=new Ft(new Yi(5,5,5),new Kt({uniforms:fe.uniforms,vertexShader:fe.vertexShader,fragmentShader:fe.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1}));function Ae(){return _===null?G:1}function Ve(){pe.init(),pe.scissor(L.copy(z).multiplyScalar(G)),pe.viewport(R.copy(Y).multiplyScalar(G)),pe.buffers.color.setClear(X.r,X.g,X.b,w,o)}function Ce(){x=null,T=null,S="",M=-1,pe.reset()}Ve(),this.context=V,this.capabilities=Te,this.extensions=Be,this.properties=Fe,this.state=pe;var oe=new sp(this,le,we,Te);this.shadowMap=oe;var j=new EE(this,g),_e=new ME(this,m);this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){Be.get("WEBGL_lose_context").loseContext()},this.getMaxAnisotropy=function(){return Te.getMaxAnisotropy()},this.getPrecision=function(){return Te.precision},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(Y.z,Y.w,!1))},this.getSize=function(){return{width:A,height:D}},this.setSize=function(b,P,B){A=b,D=P,t.width=b*G,t.height=P*G,B!==!1&&(t.style.width=b+"px",t.style.height=P+"px"),this.setViewport(0,0,b,P)},this.setViewport=function(b,P,B,se){pe.viewport(Y.set(b,P,B,se))},this.setScissor=function(b,P,B,se){pe.scissor(z.set(b,P,B,se))},this.setScissorTest=function(b){pe.setScissorTest(H=b)},this.getClearColor=function(){return X},this.setClearColor=function(b,P){X.set(b),w=P!==void 0?P:1,pe.buffers.color.setClear(X.r,X.g,X.b,w,o)},this.getClearAlpha=function(){return w},this.setClearAlpha=function(b){w=b,pe.buffers.color.setClear(X.r,X.g,X.b,w,o)},this.clear=function(b,P,B){var se=0;(b===void 0||b)&&(se|=V.COLOR_BUFFER_BIT),(P===void 0||P)&&(se|=V.DEPTH_BUFFER_BIT),(B===void 0||B)&&(se|=V.STENCIL_BUFFER_BIT),V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.clearTarget=function(b,P,B,se){this.setRenderTarget(b),this.clear(P,B,se)},this.resetGLState=Ce,this.dispose=function(){f=[],p=-1,u=[],h=-1,t.removeEventListener("webglcontextlost",ye,!1)};function ye(b){b.preventDefault(),Ce(),Ve(),Fe.clear()}function be(b){var P=b.target;P.removeEventListener("dispose",be),de(P)}function de(b){He(b),Fe.delete(b)}function He(b){var P=Fe.get(b).program;b.program=void 0,P!==void 0&&Oe.releaseProgram(P)}this.renderBufferImmediate=function(b,P,B){pe.initAttributes();var se=Fe.get(b);b.hasPositions&&!se.position&&(se.position=V.createBuffer()),b.hasNormals&&!se.normal&&(se.normal=V.createBuffer()),b.hasUvs&&!se.uv&&(se.uv=V.createBuffer()),b.hasColors&&!se.color&&(se.color=V.createBuffer());var Z=P.getAttributes();if(b.hasPositions&&(V.bindBuffer(V.ARRAY_BUFFER,se.position),V.bufferData(V.ARRAY_BUFFER,b.positionArray,V.DYNAMIC_DRAW),pe.enableAttribute(Z.position),V.vertexAttribPointer(Z.position,3,V.FLOAT,!1,0,0)),b.hasNormals){if(V.bindBuffer(V.ARRAY_BUFFER,se.normal),!B.isMeshPhongMaterial&&!B.isMeshStandardMaterial&&!B.isMeshNormalMaterial&&B.shading===Ql)for(var xe=0,ke=b.count*3;xe<ke;xe+=9){var Ee=b.normalArray,Ze=(Ee[xe+0]+Ee[xe+3]+Ee[xe+6])/3,Xe=(Ee[xe+1]+Ee[xe+4]+Ee[xe+7])/3,Se=(Ee[xe+2]+Ee[xe+5]+Ee[xe+8])/3;Ee[xe+0]=Ze,Ee[xe+1]=Xe,Ee[xe+2]=Se,Ee[xe+3]=Ze,Ee[xe+4]=Xe,Ee[xe+5]=Se,Ee[xe+6]=Ze,Ee[xe+7]=Xe,Ee[xe+8]=Se}V.bufferData(V.ARRAY_BUFFER,b.normalArray,V.DYNAMIC_DRAW),pe.enableAttribute(Z.normal),V.vertexAttribPointer(Z.normal,3,V.FLOAT,!1,0,0)}b.hasUvs&&B.map&&(V.bindBuffer(V.ARRAY_BUFFER,se.uv),V.bufferData(V.ARRAY_BUFFER,b.uvArray,V.DYNAMIC_DRAW),pe.enableAttribute(Z.uv),V.vertexAttribPointer(Z.uv,2,V.FLOAT,!1,0,0)),b.hasColors&&B.vertexColors!==fc&&(V.bindBuffer(V.ARRAY_BUFFER,se.color),V.bufferData(V.ARRAY_BUFFER,b.colorArray,V.DYNAMIC_DRAW),pe.enableAttribute(Z.color),V.vertexAttribPointer(Z.color,3,V.FLOAT,!1,0,0)),pe.disableUnusedAttributes(),V.drawArrays(V.TRIANGLES,0,b.count),b.count=0},this.renderBufferDirect=function(b,P,B,se,Z,xe){on(se);var ke=Dt(b,P,se,Z),Ee=!1,Ze=B.id+"_"+ke.id+"_"+se.wireframe;Ze!==S&&(S=Ze,Ee=!0);var Xe=Z.morphTargetInfluences;if(Xe!==void 0){for(var Se=[],ve=0,mt=Xe.length;ve<mt;ve++){var Qe=Xe[ve];Se.push([Qe,ve])}Se.sort(W),Se.length>8&&(Se.length=8);for(var Et=B.morphAttributes,ve=0,mt=Se.length;ve<mt;ve++){var Qe=Se[ve];if(v[ve]=Qe[0],Qe[0]!==0){var xt=Qe[1];se.morphTargets===!0&&Et.position&&B.addAttribute("morphTarget"+ve,Et.position[xt]),se.morphNormals===!0&&Et.normal&&B.addAttribute("morphNormal"+ve,Et.normal[xt])}else se.morphTargets===!0&&B.removeAttribute("morphTarget"+ve),se.morphNormals===!0&&B.removeAttribute("morphNormal"+ve)}for(var ve=Se.length,cn=v.length;ve<cn;ve++)v[ve]=0;ke.getUniforms().setValue(V,"morphTargetInfluences",v),Ee=!0}var xt=B.index,Nt=B.attributes.position,Ue=1;se.wireframe===!0&&(xt=we.getWireframeAttribute(B),Ue=2);var St;xt!==null?(St=lt,St.setIndex(xt)):St=nt,Ee&&(tt(se,ke,B),xt!==null&&V.bindBuffer(V.ELEMENT_ARRAY_BUFFER,we.getAttributeBuffer(xt)));var Jt=0;xt!==null?Jt=xt.count:Nt!==void 0&&(Jt=Nt.count);var Gt=B.drawRange.start*Ue,Na=B.drawRange.count*Ue,to=xe!==null?xe.start*Ue:0,no=xe!==null?xe.count*Ue:1/0,Sc=Math.max(Gt,to),vp=Math.min(Jt,Gt+Na,to+no)-1,wc=Math.max(0,vp-Sc+1);if(wc!==0){if(Z.isMesh)if(se.wireframe===!0)pe.setLineWidth(se.wireframeLinewidth*Ae()),St.setMode(V.LINES);else switch(Z.drawMode){case pu:St.setMode(V.TRIANGLES);break;case kd:St.setMode(V.TRIANGLE_STRIP);break;case Wd:St.setMode(V.TRIANGLE_FAN);break}else if(Z.isLine){var Tc=se.linewidth;Tc===void 0&&(Tc=1),pe.setLineWidth(Tc*Ae()),Z.isLineSegments?St.setMode(V.LINES):St.setMode(V.LINE_STRIP)}else Z.isPoints&&St.setMode(V.POINTS);B&&B.isInstancedBufferGeometry?B.maxInstancedCount>0&&St.renderInstances(B,Sc,wc):St.render(Sc,wc)}};function tt(b,P,B,se){var Z;if(B&&B.isInstancedBufferGeometry&&(Z=Be.get("ANGLE_instanced_arrays"),Z===null)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}se===void 0&&(se=0),pe.initAttributes();var xe=B.attributes,ke=P.getAttributes(),Ee=b.defaultAttributeValues;for(var Ze in ke){var Xe=ke[Ze];if(Xe>=0){var Se=xe[Ze];if(Se!==void 0){var ve=Se.normalized,mt=Se.itemSize,Qe=we.getAttributeProperties(Se),Et=Qe.__webglBuffer,cn=Qe.type,xt=Qe.bytesPerElement;if(Se.isInterleavedBufferAttribute){var Nt=Se.data,Ue=Nt.stride,St=Se.offset;Nt&&Nt.isInstancedInterleavedBuffer?(pe.enableAttributeAndDivisor(Xe,Nt.meshPerAttribute,Z),B.maxInstancedCount===void 0&&(B.maxInstancedCount=Nt.meshPerAttribute*Nt.count)):pe.enableAttribute(Xe),V.bindBuffer(V.ARRAY_BUFFER,Et),V.vertexAttribPointer(Xe,mt,cn,ve,Ue*xt,(se*Ue+St)*xt)}else Se.isInstancedBufferAttribute?(pe.enableAttributeAndDivisor(Xe,Se.meshPerAttribute,Z),B.maxInstancedCount===void 0&&(B.maxInstancedCount=Se.meshPerAttribute*Se.count)):pe.enableAttribute(Xe),V.bindBuffer(V.ARRAY_BUFFER,Et),V.vertexAttribPointer(Xe,mt,cn,ve,0,se*mt*xt)}else if(Ee!==void 0){var Jt=Ee[Ze];if(Jt!==void 0)switch(Jt.length){case 2:V.vertexAttrib2fv(Xe,Jt);break;case 3:V.vertexAttrib3fv(Xe,Jt);break;case 4:V.vertexAttrib4fv(Xe,Jt);break;default:V.vertexAttrib1fv(Xe,Jt)}}}}pe.disableUnusedAttributes()}function W(b,P){return Math.abs(P[0])-Math.abs(b[0])}function Re(b,P){return b.object.renderOrder!==P.object.renderOrder?b.object.renderOrder-P.object.renderOrder:b.material.program&&P.material.program&&b.material.program!==P.material.program?b.material.program.id-P.material.program.id:b.material.id!==P.material.id?b.material.id-P.material.id:b.z!==P.z?b.z-P.z:b.id-P.id}function Q(b,P){return b.object.renderOrder!==P.object.renderOrder?b.object.renderOrder-P.object.renderOrder:b.z!==P.z?P.z-b.z:b.id-P.id}this.render=function(b,P,B,se){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}S="",M=-1,T=null,b.autoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.updateMatrixWorld(),P.matrixWorldInverse.getInverse(P.matrixWorld),ae.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),$.setFromMatrix(ae),c.length=0,h=-1,p=-1,g.length=0,m.length=0,O=this.localClippingEnabled,N=ie.init(this.clippingPlanes,O,P),Mt(b,P),u.length=h+1,f.length=p+1,d.sortObjects===!0&&(u.sort(Re),f.sort(Q)),N&&ie.beginShadows(),ce(c),oe.render(b,P),J(c,P),N&&ie.endShadows(),We.calls=0,We.vertices=0,We.faces=0,We.points=0,B===void 0&&(B=null),this.setRenderTarget(B);var Z=b.background;if(Z===null?pe.buffers.color.setClear(X.r,X.g,X.b,w,o):Z&&Z.isColor&&(pe.buffers.color.setClear(Z.r,Z.g,Z.b,1,o),se=!0),(this.autoClear||se)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil),Z&&Z.isCubeTexture?(C.projectionMatrix.copy(P.projectionMatrix),C.matrixWorld.extractRotation(P.matrixWorld),C.matrixWorldInverse.getInverse(C.matrixWorld),me.material.uniforms.tCube.value=Z,me.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,me.matrixWorld),we.update(me),d.renderBufferDirect(C,null,me.geometry,me.material,me,null)):Z&&Z.isTexture&&(re.material.map=Z,we.update(re),d.renderBufferDirect(I,null,re.geometry,re.material,re,null)),b.overrideMaterial){var xe=b.overrideMaterial;xn(u,b,P,xe),xn(f,b,P,xe)}else pe.setBlending(es),xn(u,b,P),xn(f,b,P);j.render(b,P),_e.render(b,P,R),B&&Ne.updateRenderTargetMipmap(B),pe.setDepthTest(!0),pe.setDepthWrite(!0),pe.setColorWrite(!0)};function Me(b,P,B,se,Z){var xe,ke;B.transparent?(xe=f,ke=++p):(xe=u,ke=++h);var Ee=xe[ke];Ee!==void 0?(Ee.id=b.id,Ee.object=b,Ee.geometry=P,Ee.material=B,Ee.z=te.z,Ee.group=Z):(Ee={id:b.id,object:b,geometry:P,material:B,z:te.z,group:Z},xe.push(Ee))}function Le(b){var P=b.geometry;return P.boundingSphere===null&&P.computeBoundingSphere(),q.copy(P.boundingSphere).applyMatrix4(b.matrixWorld),vt(q)}function ct(b){return q.center.set(0,0,0),q.radius=.7071067811865476,q.applyMatrix4(b.matrixWorld),vt(q)}function vt(b){if(!$.intersectsSphere(b))return!1;var P=ie.numPlanes;if(P===0)return!0;var B=d.clippingPlanes,se=b.center,Z=-b.radius,xe=0;do if(B[xe].distanceToPoint(se)<Z)return!1;while(++xe!==P);return!0}function Mt(b,P){if(b.visible!==!1){var B=(b.layers.mask&P.layers.mask)!==0;if(B){if(b.isLight)c.push(b);else if(b.isSprite)(b.frustumCulled===!1||ct(b)===!0)&&g.push(b);else if(b.isLensFlare)m.push(b);else if(b.isImmediateRenderObject)d.sortObjects===!0&&(te.setFromMatrixPosition(b.matrixWorld),te.applyProjection(ae)),Me(b,null,b.material,te.z,null);else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.update(),b.frustumCulled===!1||Le(b)===!0)){var se=b.material;if(se.visible===!0){d.sortObjects===!0&&(te.setFromMatrixPosition(b.matrixWorld),te.applyProjection(ae));var Z=we.update(b);if(se.isMultiMaterial)for(var xe=Z.groups,ke=se.materials,Ee=0,Ze=xe.length;Ee<Ze;Ee++){var Xe=xe[Ee],Se=ke[Xe.materialIndex];Se.visible===!0&&Me(b,Z,Se,te.z,Xe)}else Me(b,Z,se,te.z,null)}}}for(var ve=b.children,Ee=0,Ze=ve.length;Ee<Ze;Ee++)Mt(ve[Ee],P)}}function xn(b,P,B,se){for(var Z=0,xe=b.length;Z<xe;Z++){var ke=b[Z],Ee=ke.object,Ze=ke.geometry,Xe=se===void 0?ke.material:se,Se=ke.group;if(Ee.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,Ee.matrixWorld),Ee.normalMatrix.getNormalMatrix(Ee.modelViewMatrix),Ee.onBeforeRender(d,P,B,Ze,Xe,Se),Ee.isImmediateRenderObject){on(Xe);var ve=Dt(B,P.fog,Xe,Ee);S="",Ee.render(function(mt){d.renderBufferImmediate(mt,ve,Xe)})}else d.renderBufferDirect(B,P.fog,Ze,Xe,Ee,Se);Ee.onAfterRender(d,P,B,Ze,Xe,Se)}}function _t(b,P,B){var se=Fe.get(b),Z=Oe.getParameters(b,le,P,ie.numPlanes,ie.numIntersection,B),xe=Oe.getProgramCode(b,Z),ke=se.program,Ee=!0;if(ke===void 0)b.addEventListener("dispose",be);else if(ke.code!==xe)He(b);else{if(Z.shaderID!==void 0)return;Ee=!1}if(Ee){if(Z.shaderID){var Ze=Xr[Z.shaderID];se.__webglShader={name:b.type,uniforms:en.clone(Ze.uniforms),vertexShader:Ze.vertexShader,fragmentShader:Ze.fragmentShader}}else se.__webglShader={name:b.type,uniforms:b.uniforms,vertexShader:b.vertexShader,fragmentShader:b.fragmentShader};b.__webglShader=se.__webglShader,ke=Oe.acquireProgram(b,Z,xe),se.program=ke,b.program=ke}var Xe=ke.getAttributes();if(b.morphTargets){b.numSupportedMorphTargets=0;for(var Se=0;Se<d.maxMorphTargets;Se++)Xe["morphTarget"+Se]>=0&&b.numSupportedMorphTargets++}if(b.morphNormals){b.numSupportedMorphNormals=0;for(var Se=0;Se<d.maxMorphNormals;Se++)Xe["morphNormal"+Se]>=0&&b.numSupportedMorphNormals++}var ve=se.__webglShader.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(se.numClippingPlanes=ie.numPlanes,se.numIntersection=ie.numIntersection,ve.clippingPlanes=ie.uniform),se.fog=P,se.lightsHash=le.hash,b.lights&&(ve.ambientLightColor.value=le.ambient,ve.directionalLights.value=le.directional,ve.spotLights.value=le.spot,ve.rectAreaLights.value=le.rectArea,ve.pointLights.value=le.point,ve.hemisphereLights.value=le.hemi,ve.directionalShadowMap.value=le.directionalShadowMap,ve.directionalShadowMatrix.value=le.directionalShadowMatrix,ve.spotShadowMap.value=le.spotShadowMap,ve.spotShadowMatrix.value=le.spotShadowMatrix,ve.pointShadowMap.value=le.pointShadowMap,ve.pointShadowMatrix.value=le.pointShadowMatrix);var mt=se.program.getUniforms(),Qe=yi.seqWithValue(mt.seq,ve);se.uniformsList=Qe}function on(b){b.side===Ca?pe.disable(V.CULL_FACE):pe.enable(V.CULL_FACE),pe.setFlipSided(b.side===_i),b.transparent===!0?pe.setBlending(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha):pe.setBlending(es),pe.setDepthFunc(b.depthFunc),pe.setDepthTest(b.depthTest),pe.setDepthWrite(b.depthWrite),pe.setColorWrite(b.colorWrite),pe.setPolygonOffset(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits)}function Dt(b,P,B,se){k=0;var Z=Fe.get(B);if(N&&(O||b!==T)){var xe=b===T&&B.id===M;ie.setState(B.clippingPlanes,B.clipIntersection,B.clipShadows,b,Z,xe)}B.needsUpdate===!1&&(Z.program===void 0||B.fog&&Z.fog!==P||B.lights&&Z.lightsHash!==le.hash||Z.numClippingPlanes!==void 0&&(Z.numClippingPlanes!==ie.numPlanes||Z.numIntersection!==ie.numIntersection))&&(B.needsUpdate=!0),B.needsUpdate&&(_t(B,P,se),B.needsUpdate=!1);var ke=!1,Ee=!1,Ze=!1,Xe=Z.program,Se=Xe.getUniforms(),ve=Z.__webglShader.uniforms;if(Xe.id!==x&&(V.useProgram(Xe.program),x=Xe.id,ke=!0,Ee=!0,Ze=!0),B.id!==M&&(M=B.id,Ee=!0),ke||b!==T){if(Se.set(V,b,"projectionMatrix"),Te.logarithmicDepthBuffer&&Se.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),b!==T&&(T=b,Ee=!0,Ze=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.envMap){var mt=Se.map.cameraPosition;mt!==void 0&&mt.setValue(V,te.setFromMatrixPosition(b.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.skinning)&&Se.setValue(V,"viewMatrix",b.matrixWorldInverse),Se.set(V,d,"toneMappingExposure"),Se.set(V,d,"toneMappingWhitePoint")}if(B.skinning){Se.setOptional(V,se,"bindMatrix"),Se.setOptional(V,se,"bindMatrixInverse");var Qe=se.skeleton;Qe&&(Te.floatVertexTextures&&Qe.useVertexTexture?(Se.set(V,Qe,"boneTexture"),Se.set(V,Qe,"boneTextureWidth"),Se.set(V,Qe,"boneTextureHeight")):Se.setOptional(V,Qe,"boneMatrices"))}return Ee&&(B.lights&&ne(ve,Ze),P&&B.fog&&Qs(ve,P),(B.isMeshBasicMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isMeshNormalMaterial||B.isMeshDepthMaterial)&&Js(ve,B),B.isLineBasicMaterial?Ia(ve,B):B.isLineDashedMaterial?(Ia(ve,B),Mc(ve,B)):B.isPointsMaterial?pr(ve,B):B.isMeshLambertMaterial?mr(ve,B):B.isMeshToonMaterial?Ec(ve,B):B.isMeshPhongMaterial?Fa(ve,B):B.isMeshPhysicalMaterial?bc(ve,B):B.isMeshStandardMaterial?eo(ve,B):B.isMeshDepthMaterial?B.displacementMap&&(ve.displacementMap.value=B.displacementMap,ve.displacementScale.value=B.displacementScale,ve.displacementBias.value=B.displacementBias):B.isMeshNormalMaterial&&U(ve,B),ve.ltcMat!==void 0&&(ve.ltcMat.value=THREE.UniformsLib.LTC_MAT_TEXTURE),ve.ltcMag!==void 0&&(ve.ltcMag.value=THREE.UniformsLib.LTC_MAG_TEXTURE),yi.upload(V,Z.uniformsList,ve,d)),Se.set(V,se,"modelViewMatrix"),Se.set(V,se,"normalMatrix"),Se.setValue(V,"modelMatrix",se.matrixWorld),Xe}function Js(b,P){b.opacity.value=P.opacity,b.diffuse.value=P.color,P.emissive&&b.emissive.value.copy(P.emissive).multiplyScalar(P.emissiveIntensity),b.map.value=P.map,b.specularMap.value=P.specularMap,b.alphaMap.value=P.alphaMap,P.lightMap&&(b.lightMap.value=P.lightMap,b.lightMapIntensity.value=P.lightMapIntensity),P.aoMap&&(b.aoMap.value=P.aoMap,b.aoMapIntensity.value=P.aoMapIntensity);var B;if(P.map?B=P.map:P.specularMap?B=P.specularMap:P.displacementMap?B=P.displacementMap:P.normalMap?B=P.normalMap:P.bumpMap?B=P.bumpMap:P.roughnessMap?B=P.roughnessMap:P.metalnessMap?B=P.metalnessMap:P.alphaMap?B=P.alphaMap:P.emissiveMap&&(B=P.emissiveMap),B!==void 0){B.isWebGLRenderTarget&&(B=B.texture);var se=B.offset,Z=B.repeat;b.offsetRepeat.value.set(se.x,se.y,Z.x,Z.y)}b.envMap.value=P.envMap,b.flipEnvMap.value=P.envMap&&P.envMap.isCubeTexture?-1:1,b.reflectivity.value=P.reflectivity,b.refractionRatio.value=P.refractionRatio}function Ia(b,P){b.diffuse.value=P.color,b.opacity.value=P.opacity}function Mc(b,P){b.dashSize.value=P.dashSize,b.totalSize.value=P.dashSize+P.gapSize,b.scale.value=P.scale}function pr(b,P){if(b.diffuse.value=P.color,b.opacity.value=P.opacity,b.size.value=P.size*G,b.scale.value=D*.5,b.map.value=P.map,P.map!==null){var B=P.map.offset,se=P.map.repeat;b.offsetRepeat.value.set(B.x,B.y,se.x,se.y)}}function Qs(b,P){b.fogColor.value=P.color,P.isFog?(b.fogNear.value=P.near,b.fogFar.value=P.far):P.isFogExp2&&(b.fogDensity.value=P.density)}function mr(b,P){P.emissiveMap&&(b.emissiveMap.value=P.emissiveMap)}function Fa(b,P){b.specular.value=P.specular,b.shininess.value=Math.max(P.shininess,1e-4),P.emissiveMap&&(b.emissiveMap.value=P.emissiveMap),P.bumpMap&&(b.bumpMap.value=P.bumpMap,b.bumpScale.value=P.bumpScale),P.normalMap&&(b.normalMap.value=P.normalMap,b.normalScale.value.copy(P.normalScale)),P.displacementMap&&(b.displacementMap.value=P.displacementMap,b.displacementScale.value=P.displacementScale,b.displacementBias.value=P.displacementBias)}function Ec(b,P){Fa(b,P),P.gradientMap&&(b.gradientMap.value=P.gradientMap)}function eo(b,P){b.roughness.value=P.roughness,b.metalness.value=P.metalness,P.roughnessMap&&(b.roughnessMap.value=P.roughnessMap),P.metalnessMap&&(b.metalnessMap.value=P.metalnessMap),P.emissiveMap&&(b.emissiveMap.value=P.emissiveMap),P.bumpMap&&(b.bumpMap.value=P.bumpMap,b.bumpScale.value=P.bumpScale),P.normalMap&&(b.normalMap.value=P.normalMap,b.normalScale.value.copy(P.normalScale)),P.displacementMap&&(b.displacementMap.value=P.displacementMap,b.displacementScale.value=P.displacementScale,b.displacementBias.value=P.displacementBias),P.envMap&&(b.envMapIntensity.value=P.envMapIntensity)}function bc(b,P){b.clearCoat.value=P.clearCoat,b.clearCoatRoughness.value=P.clearCoatRoughness,eo(b,P)}function U(b,P){P.bumpMap&&(b.bumpMap.value=P.bumpMap,b.bumpScale.value=P.bumpScale),P.normalMap&&(b.normalMap.value=P.normalMap,b.normalScale.value.copy(P.normalScale)),P.displacementMap&&(b.displacementMap.value=P.displacementMap,b.displacementScale.value=P.displacementScale,b.displacementBias.value=P.displacementBias)}function ne(b,P){b.ambientLightColor.needsUpdate=P,b.directionalLights.needsUpdate=P,b.pointLights.needsUpdate=P,b.spotLights.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function ce(b){for(var P=0,B=0,se=b.length;B<se;B++){var Z=b[B];Z.castShadow&&(le.shadows[P++]=Z)}le.shadows.length=P}function J(b,P){var B,se,Z,xe=0,ke=0,Ee=0,Ze,Xe,Se,ve,mt=P.matrixWorldInverse,Qe=0,Et=0,cn=0,xt=0,Nt=0;for(B=0,se=b.length;B<se;B++)if(Z=b[B],Ze=Z.color,Xe=Z.intensity,Se=Z.distance,ve=Z.shadow&&Z.shadow.map?Z.shadow.map.texture:null,Z.isAmbientLight)xe+=Ze.r*Xe,ke+=Ze.g*Xe,Ee+=Ze.b*Xe;else if(Z.isDirectionalLight){var Ue=Ye.get(Z);Ue.color.copy(Z.color).multiplyScalar(Z.intensity),Ue.direction.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(Z.target.matrixWorld),Ue.direction.sub(te),Ue.direction.transformDirection(mt),Ue.shadow=Z.castShadow,Z.castShadow&&(Ue.shadowBias=Z.shadow.bias,Ue.shadowRadius=Z.shadow.radius,Ue.shadowMapSize=Z.shadow.mapSize),le.directionalShadowMap[Qe]=ve,le.directionalShadowMatrix[Qe]=Z.shadow.matrix,le.directional[Qe++]=Ue}else if(Z.isSpotLight){var Ue=Ye.get(Z);Ue.position.setFromMatrixPosition(Z.matrixWorld),Ue.position.applyMatrix4(mt),Ue.color.copy(Ze).multiplyScalar(Xe),Ue.distance=Se,Ue.direction.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(Z.target.matrixWorld),Ue.direction.sub(te),Ue.direction.transformDirection(mt),Ue.coneCos=Math.cos(Z.angle),Ue.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),Ue.decay=Z.distance===0?0:Z.decay,Ue.shadow=Z.castShadow,Z.castShadow&&(Ue.shadowBias=Z.shadow.bias,Ue.shadowRadius=Z.shadow.radius,Ue.shadowMapSize=Z.shadow.mapSize),le.spotShadowMap[cn]=ve,le.spotShadowMatrix[cn]=Z.shadow.matrix,le.spot[cn++]=Ue}else if(Z.isRectAreaLight){var Ue=Ye.get(Z);Ue.color.copy(Ze).multiplyScalar(Xe/(Z.width*Z.height)),Ue.position.setFromMatrixPosition(Z.matrixWorld),Ue.position.applyMatrix4(mt),ge.identity(),he.copy(Z.matrixWorld),he.premultiply(mt),ge.extractRotation(he),Ue.halfWidth.set(Z.width*.5,0,0),Ue.halfHeight.set(0,Z.height*.5,0),Ue.halfWidth.applyMatrix4(ge),Ue.halfHeight.applyMatrix4(ge),le.rectArea[xt++]=Ue}else if(Z.isPointLight){var Ue=Ye.get(Z);Ue.position.setFromMatrixPosition(Z.matrixWorld),Ue.position.applyMatrix4(mt),Ue.color.copy(Z.color).multiplyScalar(Z.intensity),Ue.distance=Z.distance,Ue.decay=Z.distance===0?0:Z.decay,Ue.shadow=Z.castShadow,Z.castShadow&&(Ue.shadowBias=Z.shadow.bias,Ue.shadowRadius=Z.shadow.radius,Ue.shadowMapSize=Z.shadow.mapSize),le.pointShadowMap[Et]=ve,le.pointShadowMatrix[Et]===void 0&&(le.pointShadowMatrix[Et]=new $e),te.setFromMatrixPosition(Z.matrixWorld).negate(),le.pointShadowMatrix[Et].identity().setPosition(te),le.point[Et++]=Ue}else if(Z.isHemisphereLight){var Ue=Ye.get(Z);Ue.direction.setFromMatrixPosition(Z.matrixWorld),Ue.direction.transformDirection(mt),Ue.direction.normalize(),Ue.skyColor.copy(Z.color).multiplyScalar(Xe),Ue.groundColor.copy(Z.groundColor).multiplyScalar(Xe),le.hemi[Nt++]=Ue}le.ambient[0]=xe,le.ambient[1]=ke,le.ambient[2]=Ee,le.directional.length=Qe,le.spot.length=cn,le.rectArea.length=xt,le.point.length=Et,le.hemi.length=Nt,le.hash=Qe+","+Et+","+cn+","+xt+","+Nt+","+le.shadows.length}this.setFaceCulling=function(b,P){pe.setCullFace(b),pe.setFlipSided(P===id)};function ue(){var b=k;return b>=Te.maxTextures&&console.warn("WebGLRenderer: trying to use "+b+" texture units while this GPU supports only "+Te.maxTextures),k+=1,b}this.allocTextureUnit=ue,this.setTexture2D=function(){var b=!1;return function(B,se){B&&B.isWebGLRenderTarget&&(b||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),b=!0),B=B.texture),Ne.setTexture2D(B,se)}}(),this.setTexture=function(){var b=!1;return function(B,se){b||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),b=!0),Ne.setTexture2D(B,se)}}(),this.setTextureCube=function(){var b=!1;return function(B,se){B&&B.isWebGLRenderTargetCube&&(b||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),b=!0),B=B.texture),B&&B.isCubeTexture||Array.isArray(B.image)&&B.image.length===6?Ne.setTextureCube(B,se):Ne.setTextureCubeDynamic(B,se)}}(),this.getCurrentRenderTarget=function(){return _},this.setRenderTarget=function(b){_=b,b&&Fe.get(b).__webglFramebuffer===void 0&&Ne.setupRenderTarget(b);var P=b&&b.isWebGLRenderTargetCube,B;if(b){var se=Fe.get(b);P?B=se.__webglFramebuffer[b.activeCubeFace]:B=se.__webglFramebuffer,L.copy(b.scissor),E=b.scissorTest,R.copy(b.viewport)}else B=null,L.copy(z).multiplyScalar(G),E=H,R.copy(Y).multiplyScalar(G);if(y!==B&&(V.bindFramebuffer(V.FRAMEBUFFER,B),y=B),pe.scissor(L),pe.setScissorTest(E),pe.viewport(R),P){var Z=Fe.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+b.activeCubeFace,Z.__webglTexture,b.activeMipMapLevel)}},this.readRenderTargetPixels=function(b,P,B,se,Z,xe){if((b&&b.isWebGLRenderTarget)===!1){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}var ke=Fe.get(b).__webglFramebuffer;if(ke){var Ee=!1;ke!==y&&(V.bindFramebuffer(V.FRAMEBUFFER,ke),Ee=!0);try{var Ze=b.texture,Xe=Ze.format,Se=Ze.type;if(Xe!==Gn&&ze(Xe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se!==Oo&&ze(Se)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===Hr&&(Be.get("OES_texture_float")||Be.get("WEBGL_color_buffer_float")))&&!(Se===Bo&&Be.get("EXT_color_buffer_half_float"))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(V.FRAMEBUFFER)===V.FRAMEBUFFER_COMPLETE?P>=0&&P<=b.width-se&&B>=0&&B<=b.height-Z&&V.readPixels(P,B,se,Z,ze(Xe),ze(Se),xe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Ee&&V.bindFramebuffer(V.FRAMEBUFFER,y)}}};function ze(b){var P;if(b===ti)return V.REPEAT;if(b===pn)return V.CLAMP_TO_EDGE;if(b===ki)return V.MIRRORED_REPEAT;if(b===mn)return V.NEAREST;if(b===gc)return V.NEAREST_MIPMAP_NEAREST;if(b===_c)return V.NEAREST_MIPMAP_LINEAR;if(b===nn)return V.LINEAR;if(b===fu)return V.LINEAR_MIPMAP_NEAREST;if(b===js)return V.LINEAR_MIPMAP_LINEAR;if(b===Oo)return V.UNSIGNED_BYTE;if(b===Dd)return V.UNSIGNED_SHORT_4_4_4_4;if(b===Id)return V.UNSIGNED_SHORT_5_5_5_1;if(b===Fd)return V.UNSIGNED_SHORT_5_6_5;if(b===Cd)return V.BYTE;if(b===Pd)return V.SHORT;if(b===ts)return V.UNSIGNED_SHORT;if(b===Ud)return V.INT;if(b===du)return V.UNSIGNED_INT;if(b===Hr)return V.FLOAT;if(b===Bo&&(P=Be.get("OES_texture_half_float"),P!==null))return P.HALF_FLOAT_OES;if(b===Nd)return V.ALPHA;if(b===Vr)return V.RGB;if(b===Gn)return V.RGBA;if(b===Od)return V.LUMINANCE;if(b===Bd)return V.LUMINANCE_ALPHA;if(b===Oi)return V.DEPTH_COMPONENT;if(b===kr)return V.DEPTH_STENCIL;if(b===su)return V.FUNC_ADD;if(b===sd)return V.FUNC_SUBTRACT;if(b===od)return V.FUNC_REVERSE_SUBTRACT;if(b===cd)return V.ZERO;if(b===ld)return V.ONE;if(b===ud)return V.SRC_COLOR;if(b===hd)return V.ONE_MINUS_SRC_COLOR;if(b===ou)return V.SRC_ALPHA;if(b===cu)return V.ONE_MINUS_SRC_ALPHA;if(b===fd)return V.DST_ALPHA;if(b===dd)return V.ONE_MINUS_DST_ALPHA;if(b===pd)return V.DST_COLOR;if(b===md)return V.ONE_MINUS_DST_COLOR;if(b===vd)return V.SRC_ALPHA_SATURATE;if((b===Ml||b===El||b===bl||b===Sl)&&(P=Be.get("WEBGL_compressed_texture_s3tc"),P!==null)){if(b===Ml)return P.COMPRESSED_RGB_S3TC_DXT1_EXT;if(b===El)return P.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(b===bl)return P.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(b===Sl)return P.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((b===wl||b===Tl||b===Al||b===Rl)&&(P=Be.get("WEBGL_compressed_texture_pvrtc"),P!==null)){if(b===wl)return P.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(b===Tl)return P.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(b===Al)return P.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(b===Rl)return P.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(b===zd&&(P=Be.get("WEBGL_compressed_texture_etc1"),P!==null))return P.COMPRESSED_RGB_ETC1_WEBGL;if((b===gl||b===_l)&&(P=Be.get("EXT_blend_minmax"),P!==null)){if(b===gl)return P.MIN_EXT;if(b===_l)return P.MAX_EXT}return b===ns&&(P=Be.get("WEBGL_depth_texture"),P!==null)?P.UNSIGNED_INT_24_8_WEBGL:0}}function qr(e,t){this.name="",this.color=new je(e),this.density=t!==void 0?t:25e-5}qr.prototype.isFogExp2=!0;qr.prototype.clone=function(){return new qr(this.color.getHex(),this.density)};qr.prototype.toJSON=function(e){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};function jr(e,t,n){this.name="",this.color=new je(e),this.near=t!==void 0?t:1,this.far=n!==void 0?n:1e3}jr.prototype.isFog=!0;jr.prototype.clone=function(){return new jr(this.color.getHex(),this.near,this.far)};jr.prototype.toJSON=function(e){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};function ji(){Ge.call(this),this.type="Scene",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0}ji.prototype=Object.create(Ge.prototype);ji.prototype.constructor=ji;ji.prototype.copy=function(e,t){return Ge.prototype.copy.call(this,e,t),e.background!==null&&(this.background=e.background.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this};ji.prototype.toJSON=function(e){var t=Ge.prototype.toJSON.call(this,e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t};function Cl(e,t,n,i,r){Ge.call(this),this.lensFlares=[],this.positionScreen=new F,this.customUpdateCallback=void 0,e!==void 0&&this.add(e,t,n,i,r)}Cl.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Cl,isLensFlare:!0,copy:function(e){Ge.prototype.copy.call(this,e),this.positionScreen.copy(e.positionScreen),this.customUpdateCallback=e.customUpdateCallback;for(var t=0,n=e.lensFlares.length;t<n;t++)this.lensFlares.push(e.lensFlares[t]);return this},add:function(e,t,n,i,r,a){t===void 0&&(t=-1),n===void 0&&(n=0),a===void 0&&(a=1),r===void 0&&(r=new je(16777215)),i===void 0&&(i=Pa),n=Math.min(n,Math.max(0,n)),this.lensFlares.push({texture:e,size:t,distance:n,x:0,y:0,z:0,scale:1,rotation:0,opacity:a,color:r,blending:i})},updateLensFlares:function(){var e,t=this.lensFlares.length,n,i=-this.positionScreen.x*2,r=-this.positionScreen.y*2;for(e=0;e<t;e++)n=this.lensFlares[e],n.x=this.positionScreen.x+i*n.distance,n.y=this.positionScreen.y+r*n.distance,n.wantedRotation=n.x*Math.PI*.25,n.rotation+=(n.wantedRotation-n.rotation)*.25}});function $i(e){rt.call(this),this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.rotation=0,this.fog=!1,this.lights=!1,this.setValues(e)}$i.prototype=Object.create(rt.prototype);$i.prototype.constructor=$i;$i.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.rotation=e.rotation,this};function ps(e){Ge.call(this),this.type="Sprite",this.material=e!==void 0?e:new $i}ps.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ps,isSprite:!0,raycast:function(){var e=new F;return function(n,i){e.setFromMatrixPosition(this.matrixWorld);var r=n.ray.distanceSqToPoint(e),a=this.scale.x*this.scale.y/4;r>a||i.push({distance:Math.sqrt(r),point:this.position,face:null,object:this})}}(),clone:function(){return new this.constructor(this.material).copy(this)}});function ms(){Ge.call(this),this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}ms.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ms,copy:function(e){Ge.prototype.copy.call(this,e,!1);for(var t=e.levels,n=0,i=t.length;n<i;n++){var r=t[n];this.addLevel(r.object.clone(),r.distance)}return this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);for(var n=this.levels,i=0;i<n.length&&!(t<n[i].distance);i++);n.splice(i,0,{distance:t,object:e}),this.add(e)},getObjectForDistance:function(e){for(var t=this.levels,n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object},raycast:function(){var e=new F;return function(n,i){e.setFromMatrixPosition(this.matrixWorld);var r=n.ray.origin.distanceTo(e);this.getObjectForDistance(r).raycast(n,i)}}(),update:function(){var e=new F,t=new F;return function(i){var r=this.levels;if(r.length>1){e.setFromMatrixPosition(i.matrixWorld),t.setFromMatrixPosition(this.matrixWorld);var a=e.distanceTo(t);r[0].object.visible=!0;for(var s=1,o=r.length;s<o&&a>=r[s].distance;s++)r[s-1].object.visible=!1,r[s].object.visible=!0;for(;s<o;s++)r[s].object.visible=!1}}}(),toJSON:function(e){var t=Ge.prototype.toJSON.call(this,e);t.object.levels=[];for(var n=this.levels,i=0,r=n.length;i<r;i++){var a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}});function Go(e,t,n){if(this.useVertexTexture=n!==void 0?n:!0,this.identityMatrix=new $e,e=e||[],this.bones=e.slice(0),this.useVertexTexture){var i=Math.sqrt(this.bones.length*4);i=Je.nextPowerOfTwo(Math.ceil(i)),i=Math.max(i,4),this.boneTextureWidth=i,this.boneTextureHeight=i,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new Xi(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,Gn,Hr)}else this.boneMatrices=new Float32Array(16*this.bones.length);if(t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[];for(var r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new $e)}}Object.assign(Go.prototype,{calculateInverses:function(){this.boneInverses=[];for(var e=0,t=this.bones.length;e<t;e++){var n=new $e;this.bones[e]&&n.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(var e,t=0,n=this.bones.length;t<n;t++)e=this.bones[t],e&&e.matrixWorld.getInverse(this.boneInverses[t]);for(var t=0,n=this.bones.length;t<n;t++)e=this.bones[t],e&&(e.parent&&e.parent.isBone?(e.matrix.getInverse(e.parent.matrixWorld),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))},update:function(){var e=new $e;return function(){for(var n=0,i=this.bones.length;n<i;n++){var r=this.bones[n]?this.bones[n].matrixWorld:this.identityMatrix;e.multiplyMatrices(r,this.boneInverses[n]),e.toArray(this.boneMatrices,n*16)}this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),clone:function(){return new Go(this.bones,this.boneInverses,this.useVertexTexture)}});function Ho(){Ge.call(this),this.type="Bone"}Ho.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Ho,isBone:!0});function Vo(e,t,n){Ft.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new $e,this.bindMatrixInverse=new $e;var i=[];if(this.geometry&&this.geometry.bones!==void 0){for(var r,a,s=0,o=this.geometry.bones.length;s<o;++s)a=this.geometry.bones[s],r=new Ho,i.push(r),r.name=a.name,r.position.fromArray(a.pos),r.quaternion.fromArray(a.rotq),a.scl!==void 0&&r.scale.fromArray(a.scl);for(var s=0,o=this.geometry.bones.length;s<o;++s)a=this.geometry.bones[s],a.parent!==-1&&a.parent!==null&&i[a.parent]!==void 0?i[a.parent].add(i[s]):this.add(i[s])}this.normalizeSkinWeights(),this.updateMatrixWorld(!0),this.bind(new Go(i,void 0,n),this.matrixWorld)}Vo.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Vo,isSkinnedMesh:!0,bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){if(this.geometry&&this.geometry.isGeometry)for(var e=0;e<this.geometry.skinWeights.length;e++){var t=this.geometry.skinWeights[e],n=1/t.lengthManhattan();n!==1/0?t.multiplyScalar(n):t.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry)for(var i=new pt,r=this.geometry.attributes.skinWeight,e=0;e<r.count;e++){i.x=r.getX(e),i.y=r.getY(e),i.z=r.getZ(e),i.w=r.getW(e);var n=1/i.lengthManhattan();n!==1/0?i.multiplyScalar(n):i.set(1,0,0,0),r.setXYZW(e,i.x,i.y,i.z,i.w)}},updateMatrixWorld:function(e){Ft.prototype.updateMatrixWorld.call(this,!0),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)},clone:function(){return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this)}});function At(e){rt.call(this),this.type="LineBasicMaterial",this.color=new je(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.lights=!1,this.setValues(e)}At.prototype=Object.create(rt.prototype);At.prototype.constructor=At;At.prototype.isLineBasicMaterial=!0;At.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this};function ai(e,t,n){if(n===1)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new yt(e,t);Ge.call(this),this.type="Line",this.geometry=e!==void 0?e:new qe,this.material=t!==void 0?t:new At({color:Math.random()*16777215})}ai.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ai,isLine:!0,raycast:function(){var e=new $e,t=new Ei,n=new Xt;return function(r,a){var s=r.linePrecision,o=s*s,l=this.geometry,c=this.matrixWorld;if(l.boundingSphere===null&&l.computeBoundingSphere(),n.copy(l.boundingSphere),n.applyMatrix4(c),r.ray.intersectsSphere(n)!==!1){e.getInverse(c),t.copy(r.ray).applyMatrix4(e);var u=new F,h=new F,f=new F,p=new F,v=this&&this.isLineSegments?2:1;if(l.isBufferGeometry){var g=l.index,m=l.attributes,d=m.position.array;if(g!==null)for(var x=g.array,_=0,y=x.length-1;_<y;_+=v){var M=x[_],S=x[_+1];u.fromArray(d,M*3),h.fromArray(d,S*3);var T=t.distanceSqToSegment(u,h,p,f);if(!(T>o)){p.applyMatrix4(this.matrixWorld);var L=r.ray.origin.distanceTo(p);L<r.near||L>r.far||a.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else for(var _=0,y=d.length/3-1;_<y;_+=v){u.fromArray(d,3*_),h.fromArray(d,3*_+3);var T=t.distanceSqToSegment(u,h,p,f);if(!(T>o)){p.applyMatrix4(this.matrixWorld);var L=r.ray.origin.distanceTo(p);L<r.near||L>r.far||a.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}else if(l.isGeometry)for(var E=l.vertices,R=E.length,_=0;_<R-1;_+=v){var T=t.distanceSqToSegment(E[_],E[_+1],p,f);if(!(T>o)){p.applyMatrix4(this.matrixWorld);var L=r.ray.origin.distanceTo(p);L<r.near||L>r.far||a.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function yt(e,t){ai.call(this,e,t),this.type="LineSegments"}yt.prototype=Object.assign(Object.create(ai.prototype),{constructor:yt,isLineSegments:!0});function Fn(e){rt.call(this),this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.lights=!1,this.setValues(e)}Fn.prototype=Object.create(rt.prototype);Fn.prototype.constructor=Fn;Fn.prototype.isPointsMaterial=!0;Fn.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this};function $r(e,t){Ge.call(this),this.type="Points",this.geometry=e!==void 0?e:new qe,this.material=t!==void 0?t:new Fn({color:Math.random()*16777215})}$r.prototype=Object.assign(Object.create(Ge.prototype),{constructor:$r,isPoints:!0,raycast:function(){var e=new $e,t=new Ei,n=new Xt;return function(r,a){var s=this,o=this.geometry,l=this.matrixWorld,c=r.params.Points.threshold;if(o.boundingSphere===null&&o.computeBoundingSphere(),n.copy(o.boundingSphere),n.applyMatrix4(l),r.ray.intersectsSphere(n)===!1)return;e.getInverse(l),t.copy(r.ray).applyMatrix4(e);var u=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=new F;function p(T,L){var E=t.distanceSqToPoint(T);if(E<h){var R=t.closestPointToPoint(T);R.applyMatrix4(l);var k=r.ray.origin.distanceTo(R);if(k<r.near||k>r.far)return;a.push({distance:k,distanceToRay:Math.sqrt(E),point:R.clone(),index:L,face:null,object:s})}}if(o.isBufferGeometry){var v=o.index,g=o.attributes,m=g.position.array;if(v!==null)for(var d=v.array,x=0,_=d.length;x<_;x++){var y=d[x];f.fromArray(m,y*3),p(f,y)}else for(var x=0,M=m.length/3;x<M;x++)f.fromArray(m,x*3),p(f,x)}else for(var S=o.vertices,x=0,M=S.length;x<M;x++)p(S[x],x)}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});function vs(){Ge.call(this),this.type="Group"}vs.prototype=Object.assign(Object.create(Ge.prototype),{constructor:vs});function ko(e,t,n,i,r,a,s,o,l){gt.call(this,e,t,n,i,r,a,s,o,l),this.generateMipmaps=!1;var c=this;function u(){requestAnimationFrame(u),e.readyState>=e.HAVE_CURRENT_DATA&&(c.needsUpdate=!0)}u()}ko.prototype=Object.create(gt.prototype);ko.prototype.constructor=ko;function Zr(e,t,n,i,r,a,s,o,l,c,u,h){gt.call(this,null,a,s,o,l,c,i,r,u,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Zr.prototype=Object.create(gt.prototype);Zr.prototype.constructor=Zr;Zr.prototype.isCompressedTexture=!0;function Wo(e,t,n,i,r,a,s,o,l){gt.call(this,e,t,n,i,r,a,s,o,l),this.needsUpdate=!0}Wo.prototype=Object.create(gt.prototype);Wo.prototype.constructor=Wo;function gs(e,t,n,i,r,a,s,o,l,c){if(c=c!==void 0?c:Oi,c!==Oi&&c!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Oi&&(n=ts),n===void 0&&c===kr&&(n=ns),gt.call(this,null,i,r,a,s,o,c,n,l),this.image={width:e,height:t},this.magFilter=s!==void 0?s:mn,this.minFilter=o!==void 0?o:mn,this.flipY=!1,this.generateMipmaps=!1}gs.prototype=Object.create(gt.prototype);gs.prototype.constructor=gs;gs.prototype.isDepthTexture=!0;function Kr(e){qe.call(this);var t=[0,0],n={};function i(X,w){return X-w}var r=["a","b","c"];if(e&&e.isGeometry){for(var a=e.vertices,s=e.faces,o=0,l=new Uint32Array(6*s.length),c=0,u=s.length;c<u;c++)for(var h=s[c],f=0;f<3;f++){t[0]=h[r[f]],t[1]=h[r[(f+1)%3]],t.sort(i);var p=t.toString();n[p]===void 0&&(l[2*o]=t[0],l[2*o+1]=t[1],n[p]=!0,o++)}for(var v=new Float32Array(o*2*3),c=0,u=o;c<u;c++)for(var f=0;f<2;f++){var g=a[l[2*c+f]],m=6*c+3*f;v[m+0]=g.x,v[m+1]=g.y,v[m+2]=g.z}this.addAttribute("position",new Pe(v,3))}else if(e&&e.isBufferGeometry)if(e.index!==null){var d=e.index.array,a=e.attributes.position,x=e.groups,o=0;x.length===0&&e.addGroup(0,d.length);for(var l=new Uint32Array(2*d.length),_=0,y=x.length;_<y;++_)for(var M=x[_],S=M.start,T=M.count,c=S,L=S+T;c<L;c+=3)for(var f=0;f<3;f++){t[0]=d[c+f],t[1]=d[c+(f+1)%3],t.sort(i);var p=t.toString();n[p]===void 0&&(l[2*o]=t[0],l[2*o+1]=t[1],n[p]=!0,o++)}for(var v=new Float32Array(o*2*3),c=0,u=o;c<u;c++)for(var f=0;f<2;f++){var m=6*c+3*f,E=l[2*c+f];v[m+0]=a.getX(E),v[m+1]=a.getY(E),v[m+2]=a.getZ(E)}this.addAttribute("position",new Pe(v,3))}else{for(var a=e.attributes.position.array,o=a.length/3,R=o/3,v=new Float32Array(o*2*3),c=0,u=R;c<u;c++)for(var f=0;f<3;f++){var m=18*c+6*f,k=9*c+3*f;v[m+0]=a[k],v[m+1]=a[k+1],v[m+2]=a[k+2];var E=9*c+3*((f+1)%3);v[m+3]=a[E],v[m+4]=a[E+1],v[m+5]=a[E+2]}this.addAttribute("position",new Pe(v,3))}}Kr.prototype=Object.create(qe.prototype);Kr.prototype.constructor=Kr;function Jr(e,t,n){qe.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};var i=[],r=[],a,s,o,l,c,u=t+1;for(a=0;a<=n;a++)for(c=a/n,s=0;s<=t;s++)l=s/t,o=e(l,c),i.push(o.x,o.y,o.z),r.push(l,c);var h=[],f,p,v,g;for(a=0;a<n;a++)for(s=0;s<t;s++)f=a*u+s,p=a*u+s+1,v=(a+1)*u+s+1,g=(a+1)*u+s,h.push(f,p,g),h.push(p,v,g);this.setIndex(new(h.length>65535?ri:ii)(h,1)),this.addAttribute("position",new st(i,3)),this.addAttribute("uv",new st(r,2)),this.computeVertexNormals()}Jr.prototype=Object.create(qe.prototype);Jr.prototype.constructor=Jr;function _s(e,t,n){Ke.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new Jr(e,t,n)),this.mergeVertices()}_s.prototype=Object.create(Ke.prototype);_s.prototype.constructor=_s;function sn(e,t,n,i){qe.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},n=n||1,i=i||0;var r=[],a=[];s(i),l(n),c(),this.addAttribute("position",new st(r,3)),this.addAttribute("normal",new st(r.slice(),3)),this.addAttribute("uv",new st(a,2)),this.normalizeNormals(),this.boundingSphere=new Xt(new F,n);function s(d){for(var x=new F,_=new F,y=new F,M=0;M<t.length;M+=3)f(t[M+0],x),f(t[M+1],_),f(t[M+2],y),o(x,_,y,d)}function o(d,x,_,y){var M=Math.pow(2,y),S=[],T,L;for(T=0;T<=M;T++){S[T]=[];var E=d.clone().lerp(_,T/M),R=x.clone().lerp(_,T/M),k=M-T;for(L=0;L<=k;L++)L===0&&T===M?S[T][L]=E:S[T][L]=E.clone().lerp(R,L/k)}for(T=0;T<M;T++)for(L=0;L<2*(M-T)-1;L++){var X=Math.floor(L/2);L%2===0?(h(S[T][X+1]),h(S[T+1][X]),h(S[T][X])):(h(S[T][X+1]),h(S[T+1][X+1]),h(S[T+1][X]))}}function l(d){for(var x=new F,_=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(d),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function c(){for(var d=new F,x=0;x<r.length;x+=3){d.x=r[x+0],d.y=r[x+1],d.z=r[x+2];var _=g(d)/2/Math.PI+.5,y=m(d)/Math.PI+.5;a.push(_,1-y)}p(),u()}function u(){for(var d=0;d<a.length;d+=6){var x=a[d+0],_=a[d+2],y=a[d+4],M=Math.max(x,_,y),S=Math.min(x,_,y);M>.9&&S<.1&&(x<.2&&(a[d+0]+=1),_<.2&&(a[d+2]+=1),y<.2&&(a[d+4]+=1))}}function h(d){r.push(d.x,d.y,d.z)}function f(d,x){var _=d*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function p(){for(var d=new F,x=new F,_=new F,y=new F,M=new Ie,S=new Ie,T=new Ie,L=0,E=0;L<r.length;L+=9,E+=6){d.set(r[L+0],r[L+1],r[L+2]),x.set(r[L+3],r[L+4],r[L+5]),_.set(r[L+6],r[L+7],r[L+8]),M.set(a[E+0],a[E+1]),S.set(a[E+2],a[E+3]),T.set(a[E+4],a[E+5]),y.copy(d).add(x).add(_).divideScalar(3);var R=g(y);v(M,E+0,d,R),v(S,E+2,x,R),v(T,E+4,_,R)}}function v(d,x,_,y){y<0&&d.x===1&&(a[x]=d.x-1),_.x===0&&_.z===0&&(a[x]=y/2/Math.PI+.5)}function g(d){return Math.atan2(d.z,-d.x)}function m(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}sn.prototype=Object.create(qe.prototype);sn.prototype.constructor=sn;function Qr(e,t){var n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];sn.call(this,n,i,e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}Qr.prototype=Object.create(sn.prototype);Qr.prototype.constructor=Qr;function xs(e,t){Ke.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Qr(e,t)),this.mergeVertices()}xs.prototype=Object.create(Ke.prototype);xs.prototype.constructor=xs;function Zi(e,t){var n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];sn.call(this,n,i,e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}Zi.prototype=Object.create(sn.prototype);Zi.prototype.constructor=Zi;function ys(e,t){Ke.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Zi(e,t)),this.mergeVertices()}ys.prototype=Object.create(Ke.prototype);ys.prototype.constructor=ys;function ea(e,t){var n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];sn.call(this,i,r,e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}ea.prototype=Object.create(sn.prototype);ea.prototype.constructor=ea;function Ms(e,t){Ke.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ea(e,t)),this.mergeVertices()}Ms.prototype=Object.create(Ke.prototype);Ms.prototype.constructor=Ms;function ta(e,t){var n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];sn.call(this,r,a,e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}ta.prototype=Object.create(sn.prototype);ta.prototype.constructor=ta;function Es(e,t){Ke.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new ta(e,t)),this.mergeVertices()}Es.prototype=Object.create(Ke.prototype);Es.prototype.constructor=Es;function bs(e,t,n,i){Ke.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},this.fromBufferGeometry(new sn(e,t,n,i)),this.mergeVertices()}bs.prototype=Object.create(Ke.prototype);bs.prototype.constructor=bs;function na(e,t,n,i,r){qe.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},t=t||64,n=n||1,i=i||8,r=r||!1;var a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;var s=new F,o=new F,l=new Ie,c,u,h=[],f=[],p=[],v=[];g(),this.setIndex(new(v.length>65535?ri:ii)(v,1)),this.addAttribute("position",new st(h,3)),this.addAttribute("normal",new st(f,3)),this.addAttribute("uv",new st(p,2));function g(){for(c=0;c<t;c++)m(c);m(r===!1?t:0),x(),d()}function m(_){var y=e.getPointAt(_/t),M=a.normals[_],S=a.binormals[_];for(u=0;u<=i;u++){var T=u/i*Math.PI*2,L=Math.sin(T),E=-Math.cos(T);o.x=E*M.x+L*S.x,o.y=E*M.y+L*S.y,o.z=E*M.z+L*S.z,o.normalize(),f.push(o.x,o.y,o.z),s.x=y.x+n*o.x,s.y=y.y+n*o.y,s.z=y.z+n*o.z,h.push(s.x,s.y,s.z)}}function d(){for(u=1;u<=t;u++)for(c=1;c<=i;c++){var _=(i+1)*(u-1)+(c-1),y=(i+1)*u+(c-1),M=(i+1)*u+c,S=(i+1)*(u-1)+c;v.push(_,y,S),v.push(y,M,S)}}function x(){for(c=0;c<=t;c++)for(u=0;u<=i;u++)l.x=c/t,l.y=u/i,p.push(l.x,l.y)}}na.prototype=Object.create(qe.prototype);na.prototype.constructor=na;function Ss(e,t,n,i,r,a){Ke.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},a!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");var s=new na(e,t,n,i,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals,this.fromBufferGeometry(s),this.mergeVertices()}Ss.prototype=Object.create(Ke.prototype);Ss.prototype.constructor=Ss;function ia(e,t,n,i,r,a){qe.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},e=e||100,t=t||40,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,a=a||3;var s=(i+1)*(n+1),o=i*n*2*3,l=new Pe(new(o>65535?Uint32Array:Uint16Array)(o),1),c=new Pe(new Float32Array(s*3),3),u=new Pe(new Float32Array(s*3),3),h=new Pe(new Float32Array(s*2),2),f,p,v=0,g=0,m=new F,d=new F,x=new Ie,_=new F,y=new F,M=new F,S=new F,T=new F;for(f=0;f<=n;++f){var L=f/n*r*Math.PI*2;for(G(L,r,a,e,_),G(L+.01,r,a,e,y),S.subVectors(y,_),T.addVectors(y,_),M.crossVectors(S,T),T.crossVectors(M,S),M.normalize(),T.normalize(),p=0;p<=i;++p){var E=p/i*Math.PI*2,R=-t*Math.cos(E),k=t*Math.sin(E);m.x=_.x+(R*T.x+k*M.x),m.y=_.y+(R*T.y+k*M.y),m.z=_.z+(R*T.z+k*M.z),c.setXYZ(v,m.x,m.y,m.z),d.subVectors(m,_).normalize(),u.setXYZ(v,d.x,d.y,d.z),x.x=f/n,x.y=p/i,h.setXY(v,x.x,x.y),v++}}for(p=1;p<=n;p++)for(f=1;f<=i;f++){var X=(i+1)*(p-1)+(f-1),w=(i+1)*p+(f-1),A=(i+1)*p+f,D=(i+1)*(p-1)+f;l.setX(g,X),g++,l.setX(g,w),g++,l.setX(g,D),g++,l.setX(g,w),g++,l.setX(g,A),g++,l.setX(g,D),g++}this.setIndex(l),this.addAttribute("position",c),this.addAttribute("normal",u),this.addAttribute("uv",h);function G(z,H,Y,$,ie){var N=Math.cos(z),O=Math.sin(z),q=Y/H*z,ae=Math.cos(q);ie.x=$*(2+ae)*.5*N,ie.y=$*(2+ae)*O*.5,ie.z=$*Math.sin(q)*.5}}ia.prototype=Object.create(qe.prototype);ia.prototype.constructor=ia;function ws(e,t,n,i,r,a,s){Ke.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},s!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new ia(e,t,n,i,r,a)),this.mergeVertices()}ws.prototype=Object.create(Ke.prototype);ws.prototype.constructor=ws;function ra(e,t,n,i,r){qe.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},e=e||100,t=t||40,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||Math.PI*2;var a=(n+1)*(i+1),s=n*i*2*3,o=new(s>65535?Uint32Array:Uint16Array)(s),l=new Float32Array(a*3),c=new Float32Array(a*3),u=new Float32Array(a*2),h=0,f=0,p=0,v=new F,g=new F,m=new F,d,x;for(d=0;d<=n;d++)for(x=0;x<=i;x++){var _=x/i*r,y=d/n*Math.PI*2;g.x=(e+t*Math.cos(y))*Math.cos(_),g.y=(e+t*Math.cos(y))*Math.sin(_),g.z=t*Math.sin(y),l[h]=g.x,l[h+1]=g.y,l[h+2]=g.z,v.x=e*Math.cos(_),v.y=e*Math.sin(_),m.subVectors(g,v).normalize(),c[h]=m.x,c[h+1]=m.y,c[h+2]=m.z,u[f]=x/i,u[f+1]=d/n,h+=3,f+=2}for(d=1;d<=n;d++)for(x=1;x<=i;x++){var M=(i+1)*d+x-1,S=(i+1)*(d-1)+x-1,T=(i+1)*(d-1)+x,L=(i+1)*d+x;o[p]=M,o[p+1]=S,o[p+2]=L,o[p+3]=S,o[p+4]=T,o[p+5]=L,p+=6}this.setIndex(new Pe(o,1)),this.addAttribute("position",new Pe(l,3)),this.addAttribute("normal",new Pe(c,3)),this.addAttribute("uv",new Pe(u,2))}ra.prototype=Object.create(qe.prototype);ra.prototype.constructor=ra;function Ts(e,t,n,i,r){Ke.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new ra(e,t,n,i,r))}Ts.prototype=Object.create(Ke.prototype);Ts.prototype.constructor=Ts;var Bt={area:function(e){for(var t=e.length,n=0,i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},triangulate:function(){function e(t,n,i,r,a,s){var o,l,c,u,h,f,p,v,g;if(l=t[s[n]].x,c=t[s[n]].y,u=t[s[i]].x,h=t[s[i]].y,f=t[s[r]].x,p=t[s[r]].y,(u-l)*(p-c)-(h-c)*(f-l)<=0)return!1;var m,d,x,_,y,M,S,T,L,E,R,k,X,w,A;for(m=f-u,d=p-h,x=l-f,_=c-p,y=u-l,M=h-c,o=0;o<a;o++)if(v=t[s[o]].x,g=t[s[o]].y,!(v===l&&g===c||v===u&&g===h||v===f&&g===p)&&(S=v-l,T=g-c,L=v-u,E=g-h,R=v-f,k=g-p,A=m*E-d*L,X=y*T-M*S,w=x*k-_*R,A>=-Number.EPSILON&&w>=-Number.EPSILON&&X>=-Number.EPSILON))return!1;return!0}return function(n,i){var r=n.length;if(r<3)return null;var a=[],s=[],o=[],l,c,u;if(Bt.area(n)>0)for(c=0;c<r;c++)s[c]=c;else for(c=0;c<r;c++)s[c]=r-1-c;var h=r,f=2*h;for(c=h-1;h>2;){if(f--<=0)return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),i?o:a;if(l=c,h<=l&&(l=0),c=l+1,h<=c&&(c=0),u=c+1,h<=u&&(u=0),e(n,l,c,u,h,s)){var p,v,g,m,d;for(p=s[l],v=s[c],g=s[u],a.push([n[p],n[v],n[g]]),o.push([s[l],s[c],s[u]]),m=c,d=c+1;d<h;m++,d++)s[m]=s[d];h--,f=2*h}}return i?o:a}}(),triangulateShape:function(e,t){function n(_){var y=_.length;y>2&&_[y-1].equals(_[0])&&_.pop()}n(e),t.forEach(n);function i(_,y,M){return _.x!==y.x?_.x<y.x?_.x<=M.x&&M.x<=y.x:y.x<=M.x&&M.x<=_.x:_.y<y.y?_.y<=M.y&&M.y<=y.y:y.y<=M.y&&M.y<=_.y}function r(_,y,M,S,T){var L=y.x-_.x,E=y.y-_.y,R=S.x-M.x,k=S.y-M.y,X=_.x-M.x,w=_.y-M.y,A=E*R-L*k,D=E*X-L*w;if(Math.abs(A)>Number.EPSILON){var G;if(A>0){if(D<0||D>A)return[];if(G=k*X-R*w,G<0||G>A)return[]}else{if(D>0||D<A)return[];if(G=k*X-R*w,G>0||G<A)return[]}if(G===0)return T&&(D===0||D===A)?[]:[_];if(G===A)return T&&(D===0||D===A)?[]:[y];if(D===0)return[M];if(D===A)return[S];var z=G/A;return[{x:_.x+z*L,y:_.y+z*E}]}else{if(D!==0||k*X!==R*w)return[];var H=L===0&&E===0,Y=R===0&&k===0;if(H&&Y)return _.x!==M.x||_.y!==M.y?[]:[_];if(H)return i(M,S,_)?[_]:[];if(Y)return i(_,y,M)?[M]:[];var $,ie,N,O,q,ae,te,he;return L!==0?(_.x<y.x?($=_,N=_.x,ie=y,O=y.x):($=y,N=y.x,ie=_,O=_.x),M.x<S.x?(q=M,te=M.x,ae=S,he=S.x):(q=S,te=S.x,ae=M,he=M.x)):(_.y<y.y?($=_,N=_.y,ie=y,O=y.y):($=y,N=y.y,ie=_,O=_.y),M.y<S.y?(q=M,te=M.y,ae=S,he=S.y):(q=S,te=S.y,ae=M,he=M.y)),N<=te?O<te?[]:O===te?T?[]:[q]:O<=he?[q,ie]:[q,ae]:N>he?[]:N===he?T?[]:[$]:O<=he?[$,ie]:[$,ae]}}function a(_,y,M,S){var T=y.x-_.x,L=y.y-_.y,E=M.x-_.x,R=M.y-_.y,k=S.x-_.x,X=S.y-_.y,w=T*R-L*E,A=T*X-L*k;if(Math.abs(w)>Number.EPSILON){var D=k*R-X*E;return w>0?A>=0&&D>=0:A>=0||D>=0}else return A>0}function s(_,y){var M=_.concat(),S;function T(he,ge){var le=M.length-1,We=he-1;We<0&&(We=le);var V=he+1;V>le&&(V=0);var K=a(M[he],M[We],M[V],S[ge]);if(!K)return!1;var Be=S.length-1,Te=ge-1;Te<0&&(Te=Be);var pe=ge+1;return pe>Be&&(pe=0),K=a(S[ge],S[Te],S[pe],M[he]),!!K}function L(he,ge){var le,We,V;for(le=0;le<M.length;le++)if(We=le+1,We%=M.length,V=r(he,ge,M[le],M[We],!0),V.length>0)return!0;return!1}var E=[];function R(he,ge){var le,We,V,K,Be;for(le=0;le<E.length;le++)for(We=y[E[le]],V=0;V<We.length;V++)if(K=V+1,K%=We.length,Be=r(he,ge,We[V],We[K],!0),Be.length>0)return!0;return!1}for(var k,X,w,A,D,G,z=[],H,Y,$,ie,N=0,O=y.length;N<O;N++)E.push(N);for(var q=0,ae=E.length*2;E.length>0;){if(ae--,ae<0){console.log("Infinite Loop! Holes left:"+E.length+", Probably Hole outside Shape!");break}for(X=q;X<M.length;X++){w=M[X],k=-1;for(var N=0;N<E.length;N++)if(D=E[N],G=w.x+":"+w.y+":"+D,z[G]===void 0){S=y[D];for(var te=0;te<S.length;te++)if(A=S[te],!!T(X,te)&&!L(w,A)&&!R(w,A)){k=te,E.splice(N,1),H=M.slice(0,X+1),Y=M.slice(X),$=S.slice(k),ie=S.slice(0,k+1),M=H.concat($).concat(ie).concat(Y),q=X;break}if(k>=0)break;z[G]=!0}if(k>=0)break}}return M}for(var o,l,c,u,h,f,p={},v=e.concat(),g=0,m=t.length;g<m;g++)Array.prototype.push.apply(v,t[g]);for(o=0,l=v.length;o<l;o++)h=v[o].x+":"+v[o].y,p[h]!==void 0&&console.warn("THREE.ShapeUtils: Duplicate point",h,o),p[h]=o;var d=s(e,t),x=Bt.triangulate(d,!1);for(o=0,l=x.length;o<l;o++)for(u=x[o],c=0;c<3;c++)h=u[c].x+":"+u[c].y,f=p[h],f!==void 0&&(u[c]=f);return x.concat()},isClockWise:function(e){return Bt.area(e)<0},b2:function(){function e(i,r){var a=1-i;return a*a*r}function t(i,r){return 2*(1-i)*i*r}function n(i,r){return i*i*r}return function(r,a,s,o){return e(r,a)+t(r,s)+n(r,o)}}(),b3:function(){function e(r,a){var s=1-r;return s*s*s*a}function t(r,a){var s=1-r;return 3*s*s*r*a}function n(r,a){var s=1-r;return 3*s*r*r*a}function i(r,a){return r*r*r*a}return function(a,s,o,l,c){return e(a,s)+t(a,o)+n(a,l)+i(a,c)}}()};function wn(e,t){if(typeof e>"u"){e=[];return}Ke.call(this),this.type="ExtrudeGeometry",e=Array.isArray(e)?e:[e],this.addShapeList(e,t),this.computeFaceNormals()}wn.prototype=Object.create(Ke.prototype);wn.prototype.constructor=wn;wn.prototype.addShapeList=function(e,t){for(var n=e.length,i=0;i<n;i++){var r=e[i];this.addShape(r,t)}};wn.prototype.addShape=function(e,t){var n=t.amount!==void 0?t.amount:100,i=t.bevelThickness!==void 0?t.bevelThickness:6,r=t.bevelSize!==void 0?t.bevelSize:i-2,a=t.bevelSegments!==void 0?t.bevelSegments:3,s=t.bevelEnabled!==void 0?t.bevelEnabled:!0,o=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,c=t.extrudePath,u,h=!1,f=t.UVGenerator!==void 0?t.UVGenerator:wn.WorldUVGenerator,p,v,g,m;c&&(u=c.getSpacedPoints(l),h=!0,s=!1,p=t.frames!==void 0?t.frames:c.computeFrenetFrames(l,!1),v=new F,g=new F,m=new F),s||(a=0,i=0,r=0);var d,x,_,y=this,M=this.vertices.length,S=e.extractPoints(o),T=S.shape,L=S.holes,E=!Bt.isClockWise(T);if(E){for(T=T.reverse(),x=0,_=L.length;x<_;x++)d=L[x],Bt.isClockWise(d)&&(L[x]=d.reverse());E=!1}var R=Bt.triangulateShape(T,L),k=T;for(x=0,_=L.length;x<_;x++)d=L[x],T=T.concat(d);function X(Ne,we,Oe){return we||console.error("THREE.ExtrudeGeometry: vec does not exist"),we.clone().multiplyScalar(Oe).add(Ne)}var w,A,D,G,z,H=T.length,Y,$=R.length;function ie(Ne,we,Oe){var Ye,nt,lt=1,I=Ne.x-we.x,C=Ne.y-we.y,re=Oe.x-Ne.x,fe=Oe.y-Ne.y,me=I*I+C*C,Ae=I*fe-C*re;if(Math.abs(Ae)>Number.EPSILON){var Ve=Math.sqrt(me),Ce=Math.sqrt(re*re+fe*fe),oe=we.x-C/Ve,j=we.y+I/Ve,_e=Oe.x-fe/Ce,ye=Oe.y+re/Ce,be=((_e-oe)*fe-(ye-j)*re)/(I*fe-C*re);Ye=oe+I*be-Ne.x,nt=j+C*be-Ne.y;var de=Ye*Ye+nt*nt;if(de<=2)return new Ie(Ye,nt);lt=Math.sqrt(de/2)}else{var He=!1;I>Number.EPSILON?re>Number.EPSILON&&(He=!0):I<-Number.EPSILON?re<-Number.EPSILON&&(He=!0):Math.sign(C)===Math.sign(fe)&&(He=!0),He?(Ye=-C,nt=I,lt=Math.sqrt(me)):(Ye=I,nt=C,lt=Math.sqrt(me/2))}return new Ie(Ye/lt,nt/lt)}for(var N=[],O=0,q=k.length,ae=q-1,te=O+1;O<q;O++,ae++,te++)ae===q&&(ae=0),te===q&&(te=0),N[O]=ie(k[O],k[ae],k[te]);var he=[],ge,le=N.concat();for(x=0,_=L.length;x<_;x++){for(d=L[x],ge=[],O=0,q=d.length,ae=q-1,te=O+1;O<q;O++,ae++,te++)ae===q&&(ae=0),te===q&&(te=0),ge[O]=ie(d[O],d[ae],d[te]);he.push(ge),le=le.concat(ge)}for(w=0;w<a;w++){for(D=w/a,G=i*Math.cos(D*Math.PI/2),A=r*Math.sin(D*Math.PI/2),O=0,q=k.length;O<q;O++)z=X(k[O],N[O],A),Te(z.x,z.y,-G);for(x=0,_=L.length;x<_;x++)for(d=L[x],ge=he[x],O=0,q=d.length;O<q;O++)z=X(d[O],ge[O],A),Te(z.x,z.y,-G)}for(A=r,O=0;O<H;O++)z=s?X(T[O],le[O],A):T[O],h?(g.copy(p.normals[0]).multiplyScalar(z.x),v.copy(p.binormals[0]).multiplyScalar(z.y),m.copy(u[0]).add(g).add(v),Te(m.x,m.y,m.z)):Te(z.x,z.y,0);var We;for(We=1;We<=l;We++)for(O=0;O<H;O++)z=s?X(T[O],le[O],A):T[O],h?(g.copy(p.normals[We]).multiplyScalar(z.x),v.copy(p.binormals[We]).multiplyScalar(z.y),m.copy(u[We]).add(g).add(v),Te(m.x,m.y,m.z)):Te(z.x,z.y,n/l*We);for(w=a-1;w>=0;w--){for(D=w/a,G=i*Math.cos(D*Math.PI/2),A=r*Math.sin(D*Math.PI/2),O=0,q=k.length;O<q;O++)z=X(k[O],N[O],A),Te(z.x,z.y,n+G);for(x=0,_=L.length;x<_;x++)for(d=L[x],ge=he[x],O=0,q=d.length;O<q;O++)z=X(d[O],ge[O],A),h?Te(z.x,z.y+u[l-1].y,u[l-1].x+G):Te(z.x,z.y,n+G)}V(),K();function V(){if(s){var Ne=0,we=H*Ne;for(O=0;O<$;O++)Y=R[O],pe(Y[2]+we,Y[1]+we,Y[0]+we);for(Ne=l+a*2,we=H*Ne,O=0;O<$;O++)Y=R[O],pe(Y[0]+we,Y[1]+we,Y[2]+we)}else{for(O=0;O<$;O++)Y=R[O],pe(Y[2],Y[1],Y[0]);for(O=0;O<$;O++)Y=R[O],pe(Y[0]+H*l,Y[1]+H*l,Y[2]+H*l)}}function K(){var Ne=0;for(Be(k,Ne),Ne+=k.length,x=0,_=L.length;x<_;x++)d=L[x],Be(d,Ne),Ne+=d.length}function Be(Ne,we){var Oe,Ye;for(O=Ne.length;--O>=0;){Oe=O,Ye=O-1,Ye<0&&(Ye=Ne.length-1);var nt=0,lt=l+a*2;for(nt=0;nt<lt;nt++){var I=H*nt,C=H*(nt+1),re=we+Oe+I,fe=we+Ye+I,me=we+Ye+C,Ae=we+Oe+C;Fe(re,fe,me,Ae)}}}function Te(Ne,we,Oe){y.vertices.push(new F(Ne,we,Oe))}function pe(Ne,we,Oe){Ne+=M,we+=M,Oe+=M,y.faces.push(new gn(Ne,we,Oe,null,null,0));var Ye=f.generateTopUV(y,Ne,we,Oe);y.faceVertexUvs[0].push(Ye)}function Fe(Ne,we,Oe,Ye,nt,lt,I,C,re){Ne+=M,we+=M,Oe+=M,Ye+=M,y.faces.push(new gn(Ne,we,Ye,null,null,1)),y.faces.push(new gn(we,Oe,Ye,null,null,1));var fe=f.generateSideWallUV(y,Ne,we,Oe,Ye);y.faceVertexUvs[0].push([fe[0],fe[1],fe[3]]),y.faceVertexUvs[0].push([fe[1],fe[2],fe[3]])}};wn.WorldUVGenerator={generateTopUV:function(e,t,n,i){var r=e.vertices,a=r[t],s=r[n],o=r[i];return[new Ie(a.x,a.y),new Ie(s.x,s.y),new Ie(o.x,o.y)]},generateSideWallUV:function(e,t,n,i,r){var a=e.vertices,s=a[t],o=a[n],l=a[i],c=a[r];return Math.abs(s.y-o.y)<.01?[new Ie(s.x,1-s.z),new Ie(o.x,1-o.z),new Ie(l.x,1-l.z),new Ie(c.x,1-c.z)]:[new Ie(s.y,1-s.z),new Ie(o.y,1-o.z),new Ie(l.y,1-l.z),new Ie(c.y,1-c.z)]}};function As(e,t){t=t||{};var n=t.font;if((n&&n.isFont)===!1)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Ke;var i=n.generateShapes(e,t.size,t.curveSegments);t.amount=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),wn.call(this,i,t),this.type="TextGeometry"}As.prototype=Object.create(wn.prototype);As.prototype.constructor=As;function Ki(e,t,n,i,r,a,s){qe.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},e=e||50,t=Math.max(3,Math.floor(t)||8),n=Math.max(2,Math.floor(n)||6),i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2,a=a!==void 0?a:0,s=s!==void 0?s:Math.PI;for(var o=a+s,l=(t+1)*(n+1),c=new Pe(new Float32Array(l*3),3),u=new Pe(new Float32Array(l*3),3),h=new Pe(new Float32Array(l*2),2),f=0,p=[],v=new F,g=0;g<=n;g++){for(var m=[],d=g/n,x=0;x<=t;x++){var _=x/t,y=-e*Math.cos(i+_*r)*Math.sin(a+d*s),M=e*Math.cos(a+d*s),S=e*Math.sin(i+_*r)*Math.sin(a+d*s);v.set(y,M,S).normalize(),c.setXYZ(f,y,M,S),u.setXYZ(f,v.x,v.y,v.z),h.setXY(f,_,1-d),m.push(f),f++}p.push(m)}for(var T=[],g=0;g<n;g++)for(var x=0;x<t;x++){var L=p[g][x+1],E=p[g][x],R=p[g+1][x],k=p[g+1][x+1];(g!==0||a>0)&&T.push(L,E,k),(g!==n-1||o<Math.PI)&&T.push(E,R,k)}this.setIndex(new(c.count>65535?ri:ii)(T,1)),this.addAttribute("position",c),this.addAttribute("normal",u),this.addAttribute("uv",h),this.boundingSphere=new Xt(new F,e)}Ki.prototype=Object.create(qe.prototype);Ki.prototype.constructor=Ki;function Rs(e,t,n,i,r,a,s){Ke.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},this.fromBufferGeometry(new Ki(e,t,n,i,r,a,s))}Rs.prototype=Object.create(Ke.prototype);Rs.prototype.constructor=Rs;function aa(e,t,n,i,r,a){qe.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},e=e||20,t=t||50,r=r!==void 0?r:0,a=a!==void 0?a:Math.PI*2,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?Math.max(1,i):1;var s=(n+1)*(i+1),o=n*i*2*3,l=new Pe(new(o>65535?Uint32Array:Uint16Array)(o),1),c=new Pe(new Float32Array(s*3),3),u=new Pe(new Float32Array(s*3),3),h=new Pe(new Float32Array(s*2),2),f=0,p=0,v,g=e,m=(t-e)/i,d=new F,x=new Ie,_,y;for(_=0;_<=i;_++){for(y=0;y<=n;y++)v=r+y/n*a,d.x=g*Math.cos(v),d.y=g*Math.sin(v),c.setXYZ(f,d.x,d.y,d.z),u.setXYZ(f,0,0,1),x.x=(d.x/t+1)/2,x.y=(d.y/t+1)/2,h.setXY(f,x.x,x.y),f++;g+=m}for(_=0;_<i;_++){var M=_*(n+1);for(y=0;y<n;y++){v=y+M;var S=v,T=v+n+1,L=v+n+2,E=v+1;l.setX(p,S),p++,l.setX(p,T),p++,l.setX(p,L),p++,l.setX(p,S),p++,l.setX(p,L),p++,l.setX(p,E),p++}}this.setIndex(l),this.addAttribute("position",c),this.addAttribute("normal",u),this.addAttribute("uv",h)}aa.prototype=Object.create(qe.prototype);aa.prototype.constructor=aa;function Ls(e,t,n,i,r,a){Ke.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},this.fromBufferGeometry(new aa(e,t,n,i,r,a))}Ls.prototype=Object.create(Ke.prototype);Ls.prototype.constructor=Ls;function Cs(e,t,n,i){Ke.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new qi(e,t,n,i))}Cs.prototype=Object.create(Ke.prototype);Cs.prototype.constructor=Cs;function sa(e,t,n,i){qe.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t)||12,n=n||0,i=i||Math.PI*2,i=Je.clamp(i,0,Math.PI*2);var r=(t+1)*e.length,a=t*e.length*2*3,s=new Pe(new(a>65535?Uint32Array:Uint16Array)(a),1),o=new Pe(new Float32Array(r*3),3),l=new Pe(new Float32Array(r*2),2),c=0,u=0,h,f=1/t,p=new F,v=new Ie,g,m;for(g=0;g<=t;g++){var d=n+g*f*i,x=Math.sin(d),_=Math.cos(d);for(m=0;m<=e.length-1;m++)p.x=e[m].x*x,p.y=e[m].y,p.z=e[m].x*_,o.setXYZ(c,p.x,p.y,p.z),v.x=g/t,v.y=m/(e.length-1),l.setXY(c,v.x,v.y),c++}for(g=0;g<t;g++)for(m=0;m<e.length-1;m++){h=m+g*e.length;var y=h,M=h+e.length,S=h+e.length+1,T=h+1;s.setX(u,y),u++,s.setX(u,M),u++,s.setX(u,T),u++,s.setX(u,M),u++,s.setX(u,S),u++,s.setX(u,T),u++}if(this.setIndex(s),this.addAttribute("position",o),this.addAttribute("uv",l),this.computeVertexNormals(),i===Math.PI*2){var L=this.attributes.normal.array,E=new F,R=new F,k=new F;for(h=t*e.length*3,g=0,m=0;g<e.length;g++,m+=3)E.x=L[m+0],E.y=L[m+1],E.z=L[m+2],R.x=L[h+m+0],R.y=L[h+m+1],R.z=L[h+m+2],k.addVectors(E,R).normalize(),L[m+0]=L[h+m+0]=k.x,L[m+1]=L[h+m+1]=k.y,L[m+2]=L[h+m+2]=k.z}}sa.prototype=Object.create(qe.prototype);sa.prototype.constructor=sa;function Ps(e,t,n,i){Ke.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},this.fromBufferGeometry(new sa(e,t,n,i)),this.mergeVertices()}Ps.prototype=Object.create(Ke.prototype);Ps.prototype.constructor=Ps;function oa(e,t){qe.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;var n=[],i=[],r=[],a=[],s=0,o=0;if(Array.isArray(e)===!1)c(e);else for(var l=0;l<e.length;l++)c(e[l]),this.addGroup(s,o,l),s+=o,o=0;this.setIndex(new(a.length>65535?ri:ii)(a,1)),this.addAttribute("position",new st(n,3)),this.addAttribute("normal",new st(i,3)),this.addAttribute("uv",new st(r,2));function c(u){var h,f,p,v=n.length/3,g=u.extractPoints(t),m=g.shape,d=g.holes;if(Bt.isClockWise(m)===!1)for(m=m.reverse(),h=0,f=d.length;h<f;h++)p=d[h],Bt.isClockWise(p)===!0&&(d[h]=p.reverse());var x=Bt.triangulateShape(m,d);for(h=0,f=d.length;h<f;h++)p=d[h],m=m.concat(p);for(h=0,f=m.length;h<f;h++){var _=m[h];n.push(_.x,_.y,0),i.push(0,0,1),r.push(_.x,_.y)}for(h=0,f=x.length;h<f;h++){var y=x[h],M=y[0]+v,S=y[1]+v,T=y[2]+v;a.push(M,S,T),o+=3}}}oa.prototype=Object.create(qe.prototype);oa.prototype.constructor=oa;function ca(e,t){Ke.call(this),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new oa(e,t)),this.mergeVertices()}ca.prototype=Object.create(Ke.prototype);ca.prototype.constructor=ca;function la(e,t){qe.call(this),t=t!==void 0?t:1;var n=Math.cos(Je.DEG2RAD*t),i=[0,0],r={};function a(x,_){return x-_}var s=["a","b","c"],o;e.isBufferGeometry?(o=new Ke,o.fromBufferGeometry(e)):o=e.clone(),o.mergeVertices(),o.computeFaceNormals();for(var l=o.vertices,c=o.faces,u=0,h=c.length;u<h;u++)for(var f=c[u],p=0;p<3;p++){i[0]=f[s[p]],i[1]=f[s[(p+1)%3]],i.sort(a);var v=i.toString();r[v]===void 0?r[v]={vert1:i[0],vert2:i[1],face1:u,face2:void 0}:r[v].face2=u}var g=[];for(var v in r){var m=r[v];if(m.face2===void 0||c[m.face1].normal.dot(c[m.face2].normal)<=n){var d=l[m.vert1];g.push(d.x),g.push(d.y),g.push(d.z),d=l[m.vert2],g.push(d.x),g.push(d.y),g.push(d.z)}}this.addAttribute("position",new st(g,3))}la.prototype=Object.create(qe.prototype);la.prototype.constructor=la;function si(e,t,n,i,r,a,s,o){qe.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o};var l=this;e=e!==void 0?e:20,t=t!==void 0?t:20,n=n!==void 0?n:100,i=Math.floor(i)||8,r=Math.floor(r)||1,a=a!==void 0?a:!1,s=s!==void 0?s:0,o=o!==void 0?o:2*Math.PI;var c=0;a===!1&&(e>0&&c++,t>0&&c++);var u=M(),h=S(),f=new Pe(new(h>65535?Uint32Array:Uint16Array)(h),1),p=new Pe(new Float32Array(u*3),3),v=new Pe(new Float32Array(u*3),3),g=new Pe(new Float32Array(u*2),2),m=0,d=0,x=[],_=n/2,y=0;T(),a===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(f),this.addAttribute("position",p),this.addAttribute("normal",v),this.addAttribute("uv",g);function M(){var E=(i+1)*(r+1);return a===!1&&(E+=(i+1)*c+i*c),E}function S(){var E=i*r*2*3;return a===!1&&(E+=i*c*3),E}function T(){var E,R,k=new F,X=new F,w=0,A=(t-e)/n;for(R=0;R<=r;R++){var D=[],G=R/r,z=G*(t-e)+e;for(E=0;E<=i;E++){var H=E/i,Y=H*o+s,$=Math.sin(Y),ie=Math.cos(Y);X.x=z*$,X.y=-G*n+_,X.z=z*ie,p.setXYZ(m,X.x,X.y,X.z),k.set($,A,ie).normalize(),v.setXYZ(m,k.x,k.y,k.z),g.setXY(m,H,1-G),D.push(m),m++}x.push(D)}for(E=0;E<i;E++)for(R=0;R<r;R++){var N=x[R][E],O=x[R+1][E],q=x[R+1][E+1],ae=x[R][E+1];f.setX(d,N),d++,f.setX(d,O),d++,f.setX(d,ae),d++,f.setX(d,O),d++,f.setX(d,q),d++,f.setX(d,ae),d++,w+=6}l.addGroup(y,w,0),y+=w}function L(E){var R,k,X,w=new Ie,A=new F,D=0,G=E===!0?e:t,z=E===!0?1:-1;for(k=m,R=1;R<=i;R++)p.setXYZ(m,0,_*z,0),v.setXYZ(m,0,z,0),w.x=.5,w.y=.5,g.setXY(m,w.x,w.y),m++;for(X=m,R=0;R<=i;R++){var H=R/i,Y=H*o+s,$=Math.cos(Y),ie=Math.sin(Y);A.x=G*ie,A.y=_*z,A.z=G*$,p.setXYZ(m,A.x,A.y,A.z),v.setXYZ(m,0,z,0),w.x=$*.5+.5,w.y=ie*.5*z+.5,g.setXY(m,w.x,w.y),m++}for(R=0;R<i;R++){var N=k+R,O=X+R;E===!0?(f.setX(d,O),d++,f.setX(d,O+1),d++,f.setX(d,N),d++):(f.setX(d,O+1),d++,f.setX(d,O),d++,f.setX(d,N),d++),D+=3}l.addGroup(y,D,E===!0?1:2),y+=D}}si.prototype=Object.create(qe.prototype);si.prototype.constructor=si;function Ji(e,t,n,i,r,a,s,o){Ke.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o},this.fromBufferGeometry(new si(e,t,n,i,r,a,s,o)),this.mergeVertices()}Ji.prototype=Object.create(Ke.prototype);Ji.prototype.constructor=Ji;function Us(e,t,n,i,r,a,s){Ji.call(this,0,e,t,n,i,r,a,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:s}}Us.prototype=Object.create(Ji.prototype);Us.prototype.constructor=Us;function Ds(e,t,n,i,r,a,s){si.call(this,0,e,t,n,i,r,a,s),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:s}}Ds.prototype=Object.create(si.prototype);Ds.prototype.constructor=Ds;function ua(e,t,n,i){qe.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},e=e||50,t=t!==void 0?Math.max(3,t):8,n=n!==void 0?n:0,i=i!==void 0?i:Math.PI*2;var r=t+2,a=new Float32Array(r*3),s=new Float32Array(r*3),o=new Float32Array(r*2);s[2]=1,o[0]=.5,o[1]=.5;for(var l=0,c=3,u=2;l<=t;l++,c+=3,u+=2){var h=n+l/t*i;a[c]=e*Math.cos(h),a[c+1]=e*Math.sin(h),s[c+2]=1,o[u]=(a[c]/e+1)/2,o[u+1]=(a[c+1]/e+1)/2}for(var f=[],c=1;c<=t;c++)f.push(c,c+1,0);this.setIndex(new Pe(new Uint16Array(f),1)),this.addAttribute("position",new Pe(a,3)),this.addAttribute("normal",new Pe(s,3)),this.addAttribute("uv",new Pe(o,2)),this.boundingSphere=new Xt(new F,e)}ua.prototype=Object.create(qe.prototype);ua.prototype.constructor=ua;function Is(e,t,n,i){Ke.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new ua(e,t,n,i))}Is.prototype=Object.create(Ke.prototype);Is.prototype.constructor=Is;function ha(e,t,n,i,r,a){Ke.call(this),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a},this.fromBufferGeometry(new Yi(e,t,n,i,r,a)),this.mergeVertices()}ha.prototype=Object.create(Ke.prototype);ha.prototype.constructor=ha;var Pn=Object.freeze({WireframeGeometry:Kr,ParametricGeometry:_s,ParametricBufferGeometry:Jr,TetrahedronGeometry:xs,TetrahedronBufferGeometry:Qr,OctahedronGeometry:ys,OctahedronBufferGeometry:Zi,IcosahedronGeometry:Ms,IcosahedronBufferGeometry:ea,DodecahedronGeometry:Es,DodecahedronBufferGeometry:ta,PolyhedronGeometry:bs,PolyhedronBufferGeometry:sn,TubeGeometry:Ss,TubeBufferGeometry:na,TorusKnotGeometry:ws,TorusKnotBufferGeometry:ia,TorusGeometry:Ts,TorusBufferGeometry:ra,TextGeometry:As,SphereBufferGeometry:Ki,SphereGeometry:Rs,RingGeometry:Ls,RingBufferGeometry:aa,PlaneBufferGeometry:qi,PlaneGeometry:Cs,LatheGeometry:Ps,LatheBufferGeometry:sa,ShapeGeometry:ca,ShapeBufferGeometry:oa,ExtrudeGeometry:wn,EdgesGeometry:la,ConeGeometry:Us,ConeBufferGeometry:Ds,CylinderGeometry:Ji,CylinderBufferGeometry:si,CircleBufferGeometry:ua,CircleGeometry:Is,BoxBufferGeometry:Yi,BoxGeometry:ha});function fa(){Kt.call(this,{uniforms:en.merge([et.lights,{opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}),this.lights=!0,this.transparent=!0,Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}}})}fa.prototype=Object.create(Kt.prototype);fa.prototype.constructor=fa;fa.prototype.isShadowMaterial=!0;function da(e){Kt.call(this,e),this.type="RawShaderMaterial"}da.prototype=Object.create(Kt.prototype);da.prototype.constructor=da;da.prototype.isRawShaderMaterial=!0;function Fs(e){this.uuid=Je.generateUUID(),this.type="MultiMaterial",this.materials=Array.isArray(e)?e:[],this.visible=!0}Fs.prototype={constructor:Fs,isMultiMaterial:!0,toJSON:function(e){for(var t={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},n=this.materials,i=0,r=n.length;i<r;i++){var a=n[i].toJSON(e);delete a.metadata,t.materials.push(a)}return t.visible=this.visible,t},clone:function(){for(var e=new this.constructor,t=0;t<this.materials.length;t++)e.materials.push(this.materials[t].clone());return e.visible=this.visible,e}};function Vn(e){rt.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Vn.prototype=Object.create(rt.prototype);Vn.prototype.constructor=Vn;Vn.prototype.isMeshStandardMaterial=!0;Vn.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Qi(e){Vn.call(this),this.defines={PHYSICAL:""},this.type="MeshPhysicalMaterial",this.reflectivity=.5,this.clearCoat=0,this.clearCoatRoughness=0,this.setValues(e)}Qi.prototype=Object.create(Vn.prototype);Qi.prototype.constructor=Qi;Qi.prototype.isMeshPhysicalMaterial=!0;Qi.prototype.copy=function(e){return Vn.prototype.copy.call(this,e),this.defines={PHYSICAL:""},this.reflectivity=e.reflectivity,this.clearCoat=e.clearCoat,this.clearCoatRoughness=e.clearCoatRoughness,this};function Nn(e){rt.call(this),this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Nn.prototype=Object.create(rt.prototype);Nn.prototype.constructor=Nn;Nn.prototype.isMeshPhongMaterial=!0;Nn.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function er(e){Nn.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.gradientMap=null,this.setValues(e)}er.prototype=Object.create(Nn.prototype);er.prototype.constructor=er;er.prototype.isMeshToonMaterial=!0;er.prototype.copy=function(e){return Nn.prototype.copy.call(this,e),this.gradientMap=e.gradientMap,this};function tr(e){rt.call(this,e),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}tr.prototype=Object.create(rt.prototype);tr.prototype.constructor=tr;tr.prototype.isMeshNormalMaterial=!0;tr.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function nr(e){rt.call(this),this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}nr.prototype=Object.create(rt.prototype);nr.prototype.constructor=nr;nr.prototype.isMeshLambertMaterial=!0;nr.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function ir(e){rt.call(this),this.type="LineDashedMaterial",this.color=new je(16777215),this.linewidth=1,this.scale=1,this.dashSize=3,this.gapSize=1,this.lights=!1,this.setValues(e)}ir.prototype=Object.create(rt.prototype);ir.prototype.constructor=ir;ir.prototype.isLineDashedMaterial=!0;ir.prototype.copy=function(e){return rt.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var YE=Object.freeze({ShadowMaterial:fa,SpriteMaterial:$i,RawShaderMaterial:da,ShaderMaterial:Kt,PointsMaterial:Fn,MultiMaterial:Fs,MeshPhysicalMaterial:Qi,MeshStandardMaterial:Vn,MeshPhongMaterial:Nn,MeshToonMaterial:er,MeshNormalMaterial:tr,MeshLambertMaterial:nr,MeshDepthMaterial:Mi,MeshBasicMaterial:an,LineDashedMaterial:ir,LineBasicMaterial:At,Material:rt}),Pl={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function _u(e,t,n){var i=this,r=!1,a=0,s=0;this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(o){s++,r===!1&&i.onStart!==void 0&&i.onStart(o,a,s),r=!0},this.itemEnd=function(o){a++,i.onProgress!==void 0&&i.onProgress(o,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(o){i.onError!==void 0&&i.onError(o)}}var _n=new _u;function Tn(e){this.manager=e!==void 0?e:_n}Object.assign(Tn.prototype,{load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e);var r=this,a=Pl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;var s=/^data:(.*?)(;base64)?,(.*)$/,o=e.match(s);if(o){var l=o[1],c=!!o[2],u=o[3];u=window.decodeURIComponent(u),c&&(u=window.atob(u));try{var h,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":h=new ArrayBuffer(u.length);for(var p=new Uint8Array(h),v=0;v<u.length;v++)p[v]=u.charCodeAt(v);f==="blob"&&(h=new Blob([h],{type:l}));break;case"document":var g=new DOMParser;h=g.parseFromString(u,l);break;case"json":h=JSON.parse(u);break;default:h=u;break}window.setTimeout(function(){t&&t(h),r.manager.itemEnd(e)},0)}catch(d){window.setTimeout(function(){i&&i(d),r.manager.itemError(e)},0)}}else{var m=new XMLHttpRequest;m.open("GET",e,!0),m.addEventListener("load",function(d){var x=d.target.response;Pl.add(e,x),this.status===200?(t&&t(x),r.manager.itemEnd(e)):this.status===0?(console.warn("THREE.FileLoader: HTTP Status 0 received."),t&&t(x),r.manager.itemEnd(e)):(i&&i(d),r.manager.itemError(e))},!1),n!==void 0&&m.addEventListener("progress",function(d){n(d)},!1),m.addEventListener("error",function(d){i&&i(d),r.manager.itemError(e)},!1),this.responseType!==void 0&&(m.responseType=this.responseType),this.withCredentials!==void 0&&(m.withCredentials=this.withCredentials),m.overrideMimeType&&m.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain"),m.send(null)}return r.manager.itemStart(e),m},setPath:function(e){return this.path=e,this},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this}});function lp(e){this.manager=e!==void 0?e:_n,this._parser=null}Object.assign(lp.prototype,{load:function(e,t,n,i){var r=this,a=[],s=new Zr;s.image=a;var o=new Tn(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer");function l(f){o.load(e[f],function(p){var v=r._parser(p,!0);a[f]={width:v.width,height:v.height,format:v.format,mipmaps:v.mipmaps},c+=1,c===6&&(v.mipmapCount===1&&(s.minFilter=nn),s.format=v.format,s.needsUpdate=!0,t&&t(s))},n,i)}if(Array.isArray(e))for(var c=0,u=0,h=e.length;u<h;++u)l(u);else o.load(e,function(f){var p=r._parser(f,!0);if(p.isCubemap)for(var v=p.mipmaps.length/p.mipmapCount,g=0;g<v;g++){a[g]={mipmaps:[]};for(var m=0;m<p.mipmapCount;m++)a[g].mipmaps.push(p.mipmaps[g*p.mipmapCount+m]),a[g].format=p.format,a[g].width=p.width,a[g].height=p.height}else s.image.width=p.width,s.image.height=p.height,s.mipmaps=p.mipmaps;p.mipmapCount===1&&(s.minFilter=nn),s.format=p.format,s.needsUpdate=!0,t&&t(s)},n,i);return s},setPath:function(e){return this.path=e,this}});var qE=xu;function xu(e){this.manager=e!==void 0?e:_n,this._parser=null}Object.assign(xu.prototype,{load:function(e,t,n,i){var r=this,a=new Xi,s=new Tn(this.manager);return s.setResponseType("arraybuffer"),s.load(e,function(o){var l=r._parser(o);l&&(l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:pn,a.wrapT=l.wrapT!==void 0?l.wrapT:pn,a.magFilter=l.magFilter!==void 0?l.magFilter:nn,a.minFilter=l.minFilter!==void 0?l.minFilter:js,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps),l.mipmapCount===1&&(a.minFilter=nn),a.needsUpdate=!0,t&&t(a,l))},n,i),a}});function $s(e){this.manager=e!==void 0?e:_n}Object.assign($s.prototype,{load:function(e,t,n,i){var r=this,a=document.createElementNS("http://www.w3.org/1999/xhtml","img");if(a.onload=function(){a.onload=null,URL.revokeObjectURL(a.src),t&&t(a),r.manager.itemEnd(e)},a.onerror=i,e.indexOf("data:")===0)a.src=e;else if(this.crossOrigin!==void 0)a.crossOrigin=this.crossOrigin,a.src=e;else{var s=new Tn;s.setPath(this.path),s.setResponseType("blob"),s.setWithCredentials(this.withCredentials),s.load(e,function(o){a.src=URL.createObjectURL(o)},n,i)}return r.manager.itemStart(e),a},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this}});function yu(e){this.manager=e!==void 0?e:_n}Object.assign(yu.prototype,{load:function(e,t,n,i){var r=new xi,a=new $s(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var s=0;function o(c){a.load(e[c],function(u){r.images[c]=u,s++,s===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(var l=0;l<e.length;++l)o(l);return r},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this}});function xc(e){this.manager=e!==void 0?e:_n}Object.assign(xc.prototype,{load:function(e,t,n,i){var r=new gt,a=new $s(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setWithCredentials(this.withCredentials),a.setPath(this.path),a.load(e,function(s){var o=e.search(/\.(jpg|jpeg)$/)>0||e.search(/^data\:image\/jpeg/)===0;r.format=o?Vr:Gn,r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this}});function Rt(e,t){Ge.call(this),this.type="Light",this.color=new je(e),this.intensity=t!==void 0?t:1,this.receiveShadow=void 0}Rt.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Rt,isLight:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){var t=Ge.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function Xo(e,t,n){Rt.call(this,e,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.groundColor=new je(t)}Xo.prototype=Object.assign(Object.create(Rt.prototype),{constructor:Xo,isHemisphereLight:!0,copy:function(e){return Rt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function fr(e){this.camera=e,this.bias=0,this.radius=1,this.mapSize=new Ie(512,512),this.map=null,this.matrix=new $e}Object.assign(fr.prototype,{copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var e={};return this.bias!==0&&(e.bias=this.bias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function Yo(){fr.call(this,new kt(50,1,.5,500))}Yo.prototype=Object.assign(Object.create(fr.prototype),{constructor:Yo,isSpotLightShadow:!0,update:function(e){var t=Je.RAD2DEG*2*e.angle,n=this.mapSize.width/this.mapSize.height,i=e.distance||500,r=this.camera;(t!==r.fov||n!==r.aspect||i!==r.far)&&(r.fov=t,r.aspect=n,r.far=i,r.updateProjectionMatrix())}});function qo(e,t,n,i,r,a){Rt.call(this,e,t),this.type="SpotLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(s){this.intensity=s/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=a!==void 0?a:1,this.shadow=new Yo}qo.prototype=Object.assign(Object.create(Rt.prototype),{constructor:qo,isSpotLight:!0,copy:function(e){return Rt.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function jo(e,t,n,i){Rt.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new fr(new kt(90,1,.5,500))}jo.prototype=Object.assign(Object.create(Rt.prototype),{constructor:jo,isPointLight:!0,copy:function(e){return Rt.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function $o(e){fr.call(this,new Yr(-5,5,5,-5,.5,500))}$o.prototype=Object.assign(Object.create(fr.prototype),{constructor:$o});function Zo(e,t){Rt.call(this,e,t),this.type="DirectionalLight",this.position.copy(Ge.DefaultUp),this.updateMatrix(),this.target=new Ge,this.shadow=new $o}Zo.prototype=Object.assign(Object.create(Rt.prototype),{constructor:Zo,isDirectionalLight:!0,copy:function(e){return Rt.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function Ko(e,t){Rt.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}Ko.prototype=Object.assign(Object.create(Rt.prototype),{constructor:Ko,isAmbientLight:!0});var Wt={arraySlice:function(e,t,n){return Wt.isTypedArray(e)?new e.constructor(e.subarray(t,n)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(a,s){return e[a]-e[s]}for(var n=e.length,i=new Array(n),r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){for(var i=e.length,r=new e.constructor(i),a=0,s=0;s!==i;++a)for(var o=n[a]*t,l=0;l!==t;++l)r[s++]=e[o+l];return r},flattenJSON:function(e,t,n,i){for(var r=1,a=e[0];a!==void 0&&a[i]===void 0;)a=e[r++];if(a!==void 0){var s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(t.push(a.time),n.push.apply(n,s)),a=e[r++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(t.push(a.time),s.toArray(n,n.length)),a=e[r++];while(a!==void 0);else do s=a[i],s!==void 0&&(t.push(a.time),n.push(s)),a=e[r++];while(a!==void 0)}}};function rn(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}rn.prototype={constructor:rn,evaluate:function(e){var t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{var a;n:{i:if(!(e<i)){for(var s=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===s)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){var o=t[1];e<o&&(n=2,r=o);for(var s=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===s)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){var l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(var t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i,a=0;a!==i;++a)t[a]=n[r+a];return t},interpolate_:function(e,t,n,i){throw new Error("call to abstract method")},intervalChanged_:function(e,t,n){}};Object.assign(rn.prototype,{beforeStart_:rn.prototype.copySampleValue_,afterEnd_:rn.prototype.copySampleValue_});function Jo(e,t,n,i){rn.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Jo.prototype=Object.assign(Object.create(rn.prototype),{constructor:Jo,DefaultSettings_:{endingStart:Wi,endingEnd:Wi},intervalChanged_:function(e,t,n){var i=this.parameterPositions,r=e-2,a=e+1,s=i[r],o=i[a];if(s===void 0)switch(this.getSettings_().endingStart){case Ui:r=e,s=2*t-n;break;case rs:r=i.length-2,s=t+i[r]-i[r+1];break;default:r=e,s=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Ui:a=e,o=2*n-t;break;case rs:a=1,o=n+i[1]-i[0];break;default:a=e-1,o=t}var l=(n-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=a*c},interpolate_:function(e,t,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,d=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,x=(-1-f)*g+(1.5+f)*v+.5*p,_=f*g-f*v,y=0;y!==s;++y)r[y]=m*a[c+y]+d*a[l+y]+x*a[o+y]+_*a[u+y];return r}});function Ns(e,t,n,i){rn.call(this,e,t,n,i)}Ns.prototype=Object.assign(Object.create(rn.prototype),{constructor:Ns,interpolate_:function(e,t,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(n-t)/(i-t),u=1-c,h=0;h!==s;++h)r[h]=a[l+h]*u+a[o+h]*c;return r}});function Qo(e,t,n,i){rn.call(this,e,t,n,i)}Qo.prototype=Object.assign(Object.create(rn.prototype),{constructor:Qo,interpolate_:function(e,t,n,i){return this.copySampleValue_(e-1)}});var ci;ci={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:ja,InterpolantFactoryMethodDiscrete:function(e){return new Qo(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new Ns(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new Jo(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){var t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){var n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);console.warn(n);return}this.createInterpolant=t},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Po}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0)for(var t=this.times,n=0,i=t.length;n!==i;++n)t[n]+=e;return this},scale:function(e){if(e!==1)for(var t=this.times,n=0,i=t.length;n!==i;++n)t[n]*=e;return this},trim:function(e,t){for(var n=this.times,i=n.length,r=0,a=i-1;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);var s=this.getValueSize();this.times=Wt.arraySlice(n,r,a),this.values=Wt.arraySlice(this.values,r*s,a*s)}return this},validate:function(){var e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("invalid value size in track",this),e=!1);var n=this.times,i=this.values,r=n.length;r===0&&(console.error("track is empty",this),e=!1);for(var a=null,s=0;s!==r;s++){var o=n[s];if(typeof o=="number"&&isNaN(o)){console.error("time is not a valid number",this,s,o),e=!1;break}if(a!==null&&a>o){console.error("out of order keys",this,s,o,a),e=!1;break}a=o}if(i!==void 0&&Wt.isTypedArray(i))for(var s=0,l=i.length;s!==l;++s){var c=i[s];if(isNaN(c)){console.error("value is not a valid number",this,s,c),e=!1;break}}return e},optimize:function(){for(var e=this.times,t=this.values,n=this.getValueSize(),i=this.getInterpolation()===Po,r=1,a=e.length-1,s=1;s<a;++s){var o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==l[0]))if(i)o=!0;else for(var u=s*n,h=u-n,f=u+n,p=0;p!==n;++p){var v=t[u+p];if(v!==t[h+p]||v!==t[f+p]){o=!0;break}}if(o){if(s!==r){e[r]=e[s];for(var g=s*n,m=r*n,p=0;p!==n;++p)t[m+p]=t[g+p]}++r}}if(a>0){e[r]=e[a];for(var g=a*n,m=r*n,p=0;p!==n;++p)t[m+p]=t[g+p];++r}return r!==e.length&&(this.times=Wt.arraySlice(e,0,r),this.values=Wt.arraySlice(t,0,r*n)),this}};function dr(e,t,n,i){if(e===void 0)throw new Error("track name is undefined");if(t===void 0||t.length===0)throw new Error("no keyframes in track named "+e);this.name=e,this.times=Wt.convertArray(t,this.TimeBufferType),this.values=Wt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation),this.validate(),this.optimize()}function pa(e,t,n,i){dr.call(this,e,t,n,i)}pa.prototype=Object.assign(Object.create(ci),{constructor:pa,ValueTypeName:"vector"});function ec(e,t,n,i){rn.call(this,e,t,n,i)}ec.prototype=Object.assign(Object.create(rn.prototype),{constructor:ec,interpolate_:function(e,t,n,i){for(var r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=(n-t)/(i-t),c=o+s;o!==c;o+=4)Ct.slerpFlat(r,0,a,o-s,a,o,l);return r}});function Os(e,t,n,i){dr.call(this,e,t,n,i)}Os.prototype=Object.assign(Object.create(ci),{constructor:Os,ValueTypeName:"quaternion",DefaultInterpolation:ja,InterpolantFactoryMethodLinear:function(e){return new ec(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function ma(e,t,n,i){dr.call(this,e,t,n,i)}ma.prototype=Object.assign(Object.create(ci),{constructor:ma,ValueTypeName:"number"});function tc(e,t,n,i){dr.call(this,e,t,n,i)}tc.prototype=Object.assign(Object.create(ci),{constructor:tc,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:is,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function nc(e,t,n){dr.call(this,e,t,n)}nc.prototype=Object.assign(Object.create(ci),{constructor:nc,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:is,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function ic(e,t,n,i){dr.call(this,e,t,n,i)}ic.prototype=Object.assign(Object.create(ci),{constructor:ic,ValueTypeName:"color"});function rr(e,t,n,i){dr.apply(this,arguments)}rr.prototype=ci;ci.constructor=rr;Object.assign(rr,{parse:function(e){if(e.type===void 0)throw new Error("track type undefined, can not parse");var t=rr._getTrackTypeForValueTypeName(e.type);if(e.times===void 0){var n=[],i=[];Wt.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)},toJSON:function(e){var t=e.constructor,n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:Wt.convertArray(e.times,Array),values:Wt.convertArray(e.values,Array)};var i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n},_getTrackTypeForValueTypeName:function(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ma;case"vector":case"vector2":case"vector3":case"vector4":return pa;case"color":return ic;case"quaternion":return Os;case"bool":case"boolean":return nc;case"string":return tc}throw new Error("Unsupported typeName: "+e)}});function dn(e,t,n){this.name=e,this.tracks=n,this.duration=t!==void 0?t:-1,this.uuid=Je.generateUUID(),this.duration<0&&this.resetDuration(),this.optimize()}dn.prototype={constructor:dn,resetDuration:function(){for(var e=this.tracks,t=0,n=0,i=e.length;n!==i;++n){var r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}this.duration=t},trim:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},optimize:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}};Object.assign(dn,{parse:function(e){for(var t=[],n=e.tracks,i=1/(e.fps||1),r=0,a=n.length;r!==a;++r)t.push(rr.parse(n[r]).scale(i));return new dn(e.name,e.duration,t)},toJSON:function(e){for(var t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t},r=0,a=n.length;r!==a;++r)t.push(rr.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){for(var r=t.length,a=[],s=0;s<r;s++){var o=[],l=[];o.push((s+r-1)%r,s,(s+1)%r),l.push(0,1,0);var c=Wt.getKeyframeOrder(o);o=Wt.sortedArray(o,1,c),l=Wt.sortedArray(l,1,c),!i&&o[0]===0&&(o.push(r),l.push(l[0])),a.push(new ma(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/n))}return new dn(e,-1,a)},findByName:function(e,t){var n=e;if(!Array.isArray(e)){var i=e;n=i.geometry&&i.geometry.animations||i.animations}for(var r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){for(var i={},r=/^([\w-]*?)([\d]+)$/,a=0,s=e.length;a<s;a++){var o=e[a],l=o.name.match(r);if(l&&l.length>1){var c=l[1],u=i[c];u||(i[c]=u=[]),u.push(o)}}var h=[];for(var c in i)h.push(dn.CreateFromMorphTargetSequence(c,i[c],t,n));return h},parseAnimation:function(e,t){if(!e)return console.error("  no animation in JSONLoader data"),null;for(var n=function(_,y,M,S,T){if(M.length!==0){var L=[],E=[];Wt.flattenJSON(M,L,E,S),L.length!==0&&T.push(new _(y,L,E))}},i=[],r=e.name||"default",a=e.length||-1,s=e.fps||30,o=e.hierarchy||[],l=0;l<o.length;l++){var c=o[l].keys;if(!(!c||c.length===0))if(c[0].morphTargets){for(var u={},h=0;h<c.length;h++)if(c[h].morphTargets)for(var f=0;f<c[h].morphTargets.length;f++)u[c[h].morphTargets[f]]=-1;for(var p in u){for(var v=[],g=[],f=0;f!==c[h].morphTargets.length;++f){var m=c[h];v.push(m.time),g.push(m.morphTarget===p?1:0)}i.push(new ma(".morphTargetInfluence["+p+"]",v,g))}a=u.length*(s||1)}else{var d=".bones["+t[l].name+"]";n(pa,d+".position",c,"pos",i),n(Os,d+".quaternion",c,"rot",i),n(pa,d+".scale",c,"scl",i)}}if(i.length===0)return null;var x=new dn(r,a,i);return x}});function yc(e){this.manager=e!==void 0?e:_n,this.textures={}}Object.assign(yc.prototype,{load:function(e,t,n,i){var r=this,a=new Tn(r.manager);a.load(e,function(s){t(r.parse(JSON.parse(s)))},n,i)},setTextures:function(e){this.textures=e},parse:function(e){var t=this.textures;function n(o){return t[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),t[o]}var i=new YE[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearCoat!==void 0&&(i.clearCoat=e.clearCoat),e.clearCoatRoughness!==void 0&&(i.clearCoatRoughness=e.clearCoatRoughness),e.uniforms!==void 0&&(i.uniforms=e.uniforms),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.vertexColors!==void 0&&(i.vertexColors=e.vertexColors),e.fog!==void 0&&(i.fog=e.fog),e.shading!==void 0&&(i.shading=e.shading),e.blending!==void 0&&(i.blending=e.blending),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap),i.transparent=!0),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalScale!==void 0){var r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Ie().fromArray(r)}if(e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.materials!==void 0)for(var a=0,s=e.materials.length;a<s;a++)i.materials.push(this.parse(e.materials[a]));return i}});function Mu(e){this.manager=e!==void 0?e:_n}Object.assign(Mu.prototype,{load:function(e,t,n,i){var r=this,a=new Tn(r.manager);a.load(e,function(s){t(r.parse(JSON.parse(s)))},n,i)},parse:function(e){var t=new qe,n=e.data.index,i={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};if(n!==void 0){var r=new i[n.type](n.array);t.setIndex(new Pe(r,1))}var a=e.data.attributes;for(var s in a){var o=a[s],r=new i[o.type](o.array);t.addAttribute(s,new Pe(r,o.itemSize,o.normalized))}var l=e.data.groups||e.data.drawcalls||e.data.offsets;if(l!==void 0)for(var c=0,u=l.length;c!==u;++c){var h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}var f=e.data.boundingSphere;if(f!==void 0){var p=new F;f.center!==void 0&&p.fromArray(f.center),t.boundingSphere=new Xt(p,f.radius)}return t}});function zi(){this.onLoadStart=function(){},this.onLoadProgress=function(){},this.onLoadComplete=function(){}}zi.prototype={constructor:zi,crossOrigin:void 0,extractUrlBase:function(e){var t=e.split("/");return t.length===1?"./":(t.pop(),t.join("/")+"/")},initMaterials:function(e,t,n){for(var i=[],r=0;r<e.length;++r)i[r]=this.createMaterial(e[r],t,n);return i},createMaterial:function(){var e,t,n;return function(r,a,s){e===void 0&&(e=new je),t===void 0&&(t=new xc),n===void 0&&(n=new yc);var o={};function l(f,p,v,g,m){var d=a+f,x=zi.Handlers.get(d),_;x!==null?_=x.load(d):(t.setCrossOrigin(s),_=t.load(d)),p!==void 0&&(_.repeat.fromArray(p),p[0]!==1&&(_.wrapS=ti),p[1]!==1&&(_.wrapT=ti)),v!==void 0&&_.offset.fromArray(v),g!==void 0&&(g[0]==="repeat"&&(_.wrapS=ti),g[0]==="mirror"&&(_.wrapS=ki),g[1]==="repeat"&&(_.wrapT=ti),g[1]==="mirror"&&(_.wrapT=ki)),m!==void 0&&(_.anisotropy=m);var y=Je.generateUUID();return o[y]=_,y}var c={uuid:Je.generateUUID(),type:"MeshLambertMaterial"};for(var u in r){var h=r[u];switch(u){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":c.name=h;break;case"blending":c.blending=ad[h];break;case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",u,"is no longer supported.");break;case"colorDiffuse":c.color=e.fromArray(h).getHex();break;case"colorSpecular":c.specular=e.fromArray(h).getHex();break;case"colorEmissive":c.emissive=e.fromArray(h).getHex();break;case"specularCoef":c.shininess=h;break;case"shading":h.toLowerCase()==="basic"&&(c.type="MeshBasicMaterial"),h.toLowerCase()==="phong"&&(c.type="MeshPhongMaterial"),h.toLowerCase()==="standard"&&(c.type="MeshStandardMaterial");break;case"mapDiffuse":c.map=l(h,r.mapDiffuseRepeat,r.mapDiffuseOffset,r.mapDiffuseWrap,r.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapEmissive":c.emissiveMap=l(h,r.mapEmissiveRepeat,r.mapEmissiveOffset,r.mapEmissiveWrap,r.mapEmissiveAnisotropy);break;case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;case"mapLight":c.lightMap=l(h,r.mapLightRepeat,r.mapLightOffset,r.mapLightWrap,r.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":c.aoMap=l(h,r.mapAORepeat,r.mapAOOffset,r.mapAOWrap,r.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":c.bumpMap=l(h,r.mapBumpRepeat,r.mapBumpOffset,r.mapBumpWrap,r.mapBumpAnisotropy);break;case"mapBumpScale":c.bumpScale=h;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":c.normalMap=l(h,r.mapNormalRepeat,r.mapNormalOffset,r.mapNormalWrap,r.mapNormalAnisotropy);break;case"mapNormalFactor":c.normalScale=[h,h];break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":c.specularMap=l(h,r.mapSpecularRepeat,r.mapSpecularOffset,r.mapSpecularWrap,r.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapMetalness":c.metalnessMap=l(h,r.mapMetalnessRepeat,r.mapMetalnessOffset,r.mapMetalnessWrap,r.mapMetalnessAnisotropy);break;case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;case"mapRoughness":c.roughnessMap=l(h,r.mapRoughnessRepeat,r.mapRoughnessOffset,r.mapRoughnessWrap,r.mapRoughnessAnisotropy);break;case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;case"mapAlpha":c.alphaMap=l(h,r.mapAlphaRepeat,r.mapAlphaOffset,r.mapAlphaWrap,r.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":c.side=_i;break;case"doubleSided":c.side=Ca;break;case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),c.opacity=h;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":c[u]=h;break;case"vertexColors":h===!0&&(c.vertexColors=hr),h==="face"&&(c.vertexColors=tu);break;default:console.error("THREE.Loader.createMaterial: Unsupported",u,h);break}}return c.type==="MeshBasicMaterial"&&delete c.emissive,c.type!=="MeshPhongMaterial"&&delete c.specular,c.opacity<1&&(c.transparent=!0),n.setTextures(o),n.parse(c)}}()};zi.Handlers={handlers:[],add:function(e,t){this.handlers.push(e,t)},get:function(e){for(var t=this.handlers,n=0,i=t.length;n<i;n+=2){var r=t[n],a=t[n+1];if(r.test(e))return a}return null}};function Eu(e){typeof e=="boolean"&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),e=void 0),this.manager=e!==void 0?e:_n,this.withCredentials=!1}Object.assign(Eu.prototype,{load:function(e,t,n,i){var r=this,a=this.texturePath&&typeof this.texturePath=="string"?this.texturePath:zi.prototype.extractUrlBase(e),s=new Tn(this.manager);s.setWithCredentials(this.withCredentials),s.load(e,function(o){var l=JSON.parse(o),c=l.metadata;if(c!==void 0){var u=c.type;if(u!==void 0){if(u.toLowerCase()==="object"){console.error("THREE.JSONLoader: "+e+" should be loaded with THREE.ObjectLoader instead.");return}if(u.toLowerCase()==="scene"){console.error("THREE.JSONLoader: "+e+" should be loaded with THREE.SceneLoader instead.");return}}}var h=r.parse(l,a);t(h.geometry,h.materials)},n,i)},setTexturePath:function(e){this.texturePath=e},parse:function(e,t){var n=new Ke,i=e.scale!==void 0?1/e.scale:1;r(i),a(),s(i),o(),n.computeFaceNormals(),n.computeBoundingSphere();function r(c){function u(he,ge){return he&1<<ge}var h,f,p,v,g,m,d,x,_,y,M,S,T,L,E,R,k,X,w,A,D,G,z,H,Y,$,ie,N=e.faces,O=e.vertices,q=e.normals,ae=e.colors,te=0;if(e.uvs!==void 0){for(h=0;h<e.uvs.length;h++)e.uvs[h].length&&te++;for(h=0;h<te;h++)n.faceVertexUvs[h]=[]}for(v=0,g=O.length;v<g;)X=new F,X.x=O[v++]*c,X.y=O[v++]*c,X.z=O[v++]*c,n.vertices.push(X);for(v=0,g=N.length;v<g;)if(y=N[v++],M=u(y,0),S=u(y,1),T=u(y,3),L=u(y,4),E=u(y,5),R=u(y,6),k=u(y,7),M){if(A=new gn,A.a=N[v],A.b=N[v+1],A.c=N[v+3],D=new gn,D.a=N[v+1],D.b=N[v+2],D.c=N[v+3],v+=4,S&&(_=N[v++],A.materialIndex=_,D.materialIndex=_),p=n.faces.length,T)for(h=0;h<te;h++)for(H=e.uvs[h],n.faceVertexUvs[h][p]=[],n.faceVertexUvs[h][p+1]=[],f=0;f<4;f++)x=N[v++],$=H[x*2],ie=H[x*2+1],Y=new Ie($,ie),f!==2&&n.faceVertexUvs[h][p].push(Y),f!==0&&n.faceVertexUvs[h][p+1].push(Y);if(L&&(d=N[v++]*3,A.normal.set(q[d++],q[d++],q[d]),D.normal.copy(A.normal)),E)for(h=0;h<4;h++)d=N[v++]*3,z=new F(q[d++],q[d++],q[d]),h!==2&&A.vertexNormals.push(z),h!==0&&D.vertexNormals.push(z);if(R&&(m=N[v++],G=ae[m],A.color.setHex(G),D.color.setHex(G)),k)for(h=0;h<4;h++)m=N[v++],G=ae[m],h!==2&&A.vertexColors.push(new je(G)),h!==0&&D.vertexColors.push(new je(G));n.faces.push(A),n.faces.push(D)}else{if(w=new gn,w.a=N[v++],w.b=N[v++],w.c=N[v++],S&&(_=N[v++],w.materialIndex=_),p=n.faces.length,T)for(h=0;h<te;h++)for(H=e.uvs[h],n.faceVertexUvs[h][p]=[],f=0;f<3;f++)x=N[v++],$=H[x*2],ie=H[x*2+1],Y=new Ie($,ie),n.faceVertexUvs[h][p].push(Y);if(L&&(d=N[v++]*3,w.normal.set(q[d++],q[d++],q[d])),E)for(h=0;h<3;h++)d=N[v++]*3,z=new F(q[d++],q[d++],q[d]),w.vertexNormals.push(z);if(R&&(m=N[v++],w.color.setHex(ae[m])),k)for(h=0;h<3;h++)m=N[v++],w.vertexColors.push(new je(ae[m]));n.faces.push(w)}}function a(){var c=e.influencesPerVertex!==void 0?e.influencesPerVertex:2;if(e.skinWeights)for(var u=0,h=e.skinWeights.length;u<h;u+=c){var f=e.skinWeights[u],p=c>1?e.skinWeights[u+1]:0,v=c>2?e.skinWeights[u+2]:0,g=c>3?e.skinWeights[u+3]:0;n.skinWeights.push(new pt(f,p,v,g))}if(e.skinIndices)for(var u=0,h=e.skinIndices.length;u<h;u+=c){var m=e.skinIndices[u],d=c>1?e.skinIndices[u+1]:0,x=c>2?e.skinIndices[u+2]:0,_=c>3?e.skinIndices[u+3]:0;n.skinIndices.push(new pt(m,d,x,_))}n.bones=e.bones,n.bones&&n.bones.length>0&&(n.skinWeights.length!==n.skinIndices.length||n.skinIndices.length!==n.vertices.length)&&console.warn("When skinning, number of vertices ("+n.vertices.length+"), skinIndices ("+n.skinIndices.length+"), and skinWeights ("+n.skinWeights.length+") should match.")}function s(c){if(e.morphTargets!==void 0)for(var u=0,h=e.morphTargets.length;u<h;u++){n.morphTargets[u]={},n.morphTargets[u].name=e.morphTargets[u].name,n.morphTargets[u].vertices=[];for(var f=n.morphTargets[u].vertices,p=e.morphTargets[u].vertices,v=0,g=p.length;v<g;v+=3){var m=new F;m.x=p[v]*c,m.y=p[v+1]*c,m.z=p[v+2]*c,f.push(m)}}if(e.morphColors!==void 0&&e.morphColors.length>0){console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');for(var d=n.faces,x=e.morphColors[0].colors,u=0,h=d.length;u<h;u++)d[u].color.fromArray(x,u*3)}}function o(){var c=[],u=[];e.animation!==void 0&&u.push(e.animation),e.animations!==void 0&&(e.animations.length?u=u.concat(e.animations):u.push(e.animations));for(var h=0;h<u.length;h++){var f=dn.parseAnimation(u[h],n.bones);f&&c.push(f)}if(n.morphTargets){var p=dn.CreateClipsFromMorphTargetSequences(n.morphTargets,10);c=c.concat(p)}c.length>0&&(n.animations=c)}if(e.materials===void 0||e.materials.length===0)return{geometry:n};var l=zi.prototype.initMaterials(e.materials,t,this.crossOrigin);return{geometry:n,materials:l}}});function up(e){this.manager=e!==void 0?e:_n,this.texturePath=""}Object.assign(up.prototype,{load:function(e,t,n,i){this.texturePath===""&&(this.texturePath=e.substring(0,e.lastIndexOf("/")+1));var r=this,a=new Tn(r.manager);a.load(e,function(s){var o=null;try{o=JSON.parse(s)}catch(c){console.error("THREE:ObjectLoader: Can't parse "+e+".",c.message);return}var l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e+". Use THREE.JSONLoader instead.");return}r.parse(o,t)},n,i)},setTexturePath:function(e){this.texturePath=e},setCrossOrigin:function(e){this.crossOrigin=e},parse:function(e,t){var n=this.parseGeometries(e.geometries),i=this.parseImages(e.images,function(){t!==void 0&&t(s)}),r=this.parseTextures(e.textures,i),a=this.parseMaterials(e.materials,r),s=this.parseObject(e.object,n,a);return e.animations&&(s.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&t!==void 0&&t(s),s},parseGeometries:function(e){var t={};if(e!==void 0)for(var n=new Eu,i=new Mu,r=0,a=e.length;r<a;r++){var s,o=e[r];switch(o.type){case"PlaneGeometry":case"PlaneBufferGeometry":s=new Pn[o.type](o.width,o.height,o.widthSegments,o.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":s=new Pn[o.type](o.width,o.height,o.depth,o.widthSegments,o.heightSegments,o.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":s=new Pn[o.type](o.radius,o.segments,o.thetaStart,o.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":s=new Pn[o.type](o.radiusTop,o.radiusBottom,o.height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":s=new Pn[o.type](o.radius,o.height,o.radialSegments,o.heightSegments,o.openEnded,o.thetaStart,o.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":s=new Pn[o.type](o.radius,o.widthSegments,o.heightSegments,o.phiStart,o.phiLength,o.thetaStart,o.thetaLength);break;case"DodecahedronGeometry":case"IcosahedronGeometry":case"OctahedronGeometry":case"TetrahedronGeometry":s=new Pn[o.type](o.radius,o.detail);break;case"RingGeometry":case"RingBufferGeometry":s=new Pn[o.type](o.innerRadius,o.outerRadius,o.thetaSegments,o.phiSegments,o.thetaStart,o.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":s=new Pn[o.type](o.radius,o.tube,o.radialSegments,o.tubularSegments,o.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":s=new Pn[o.type](o.radius,o.tube,o.tubularSegments,o.radialSegments,o.p,o.q);break;case"LatheGeometry":case"LatheBufferGeometry":s=new Pn[o.type](o.points,o.segments,o.phiStart,o.phiLength);break;case"BufferGeometry":s=i.parse(o);break;case"Geometry":s=n.parse(o.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+o.type+'"');continue}s.uuid=o.uuid,o.name!==void 0&&(s.name=o.name),t[o.uuid]=s}return t},parseMaterials:function(e,t){var n={};if(e!==void 0){var i=new yc;i.setTextures(t);for(var r=0,a=e.length;r<a;r++){var s=i.parse(e[r]);n[s.uuid]=s}}return n},parseAnimations:function(e){for(var t=[],n=0;n<e.length;n++){var i=dn.parse(e[n]);t.push(i)}return t},parseImages:function(e,t){var n=this,i={};function r(h){return n.manager.itemStart(h),s.load(h,function(){n.manager.itemEnd(h)},void 0,function(){n.manager.itemError(h)})}if(e!==void 0&&e.length>0){var a=new _u(t),s=new $s(a);s.setCrossOrigin(this.crossOrigin);for(var o=0,l=e.length;o<l;o++){var c=e[o],u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url)?c.url:n.texturePath+c.url;i[c.uuid]=r(u)}}return i},parseTextures:function(e,t){function n(l,c){return typeof l=="number"?l:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",l),c[l])}var i={};if(e!==void 0)for(var r=0,a=e.length;r<a;r++){var s=e[r];s.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),t[s.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",s.image);var o=new gt(t[s.image]);o.needsUpdate=!0,o.uuid=s.uuid,s.name!==void 0&&(o.name=s.name),s.mapping!==void 0&&(o.mapping=n(s.mapping,Ld)),s.offset!==void 0&&o.offset.fromArray(s.offset),s.repeat!==void 0&&o.repeat.fromArray(s.repeat),s.wrap!==void 0&&(o.wrapS=n(s.wrap[0],xl),o.wrapT=n(s.wrap[1],xl)),s.minFilter!==void 0&&(o.minFilter=n(s.minFilter,yl)),s.magFilter!==void 0&&(o.magFilter=n(s.magFilter,yl)),s.anisotropy!==void 0&&(o.anisotropy=s.anisotropy),s.flipY!==void 0&&(o.flipY=s.flipY),i[s.uuid]=o}return i},parseObject:function(){var e=new $e;return function(n,i,r){var a;function s(v){return i[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",v),i[v]}function o(v){if(v!==void 0)return r[v]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",v),r[v]}switch(n.type){case"Scene":a=new ji,n.background!==void 0&&Number.isInteger(n.background)&&(a.background=new je(n.background)),n.fog!==void 0&&(n.fog.type==="Fog"?a.fog=new jr(n.fog.color,n.fog.near,n.fog.far):n.fog.type==="FogExp2"&&(a.fog=new qr(n.fog.color,n.fog.density)));break;case"PerspectiveCamera":a=new kt(n.fov,n.aspect,n.near,n.far),n.focus!==void 0&&(a.focus=n.focus),n.zoom!==void 0&&(a.zoom=n.zoom),n.filmGauge!==void 0&&(a.filmGauge=n.filmGauge),n.filmOffset!==void 0&&(a.filmOffset=n.filmOffset),n.view!==void 0&&(a.view=Object.assign({},n.view));break;case"OrthographicCamera":a=new Yr(n.left,n.right,n.top,n.bottom,n.near,n.far);break;case"AmbientLight":a=new Ko(n.color,n.intensity);break;case"DirectionalLight":a=new Zo(n.color,n.intensity);break;case"PointLight":a=new jo(n.color,n.intensity,n.distance,n.decay);break;case"SpotLight":a=new qo(n.color,n.intensity,n.distance,n.angle,n.penumbra,n.decay);break;case"HemisphereLight":a=new Xo(n.color,n.groundColor,n.intensity);break;case"Mesh":var l=s(n.geometry),c=o(n.material);l.bones&&l.bones.length>0?a=new Vo(l,c):a=new Ft(l,c);break;case"LOD":a=new ms;break;case"Line":a=new ai(s(n.geometry),o(n.material),n.mode);break;case"LineSegments":a=new yt(s(n.geometry),o(n.material));break;case"PointCloud":case"Points":a=new $r(s(n.geometry),o(n.material));break;case"Sprite":a=new ps(o(n.material));break;case"Group":a=new vs;break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh type. Instantiates Object3D instead.");default:a=new Ge}if(a.uuid=n.uuid,n.name!==void 0&&(a.name=n.name),n.matrix!==void 0?(e.fromArray(n.matrix),e.decompose(a.position,a.quaternion,a.scale)):(n.position!==void 0&&a.position.fromArray(n.position),n.rotation!==void 0&&a.rotation.fromArray(n.rotation),n.quaternion!==void 0&&a.quaternion.fromArray(n.quaternion),n.scale!==void 0&&a.scale.fromArray(n.scale)),n.castShadow!==void 0&&(a.castShadow=n.castShadow),n.receiveShadow!==void 0&&(a.receiveShadow=n.receiveShadow),n.shadow&&(n.shadow.bias!==void 0&&(a.shadow.bias=n.shadow.bias),n.shadow.radius!==void 0&&(a.shadow.radius=n.shadow.radius),n.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(n.shadow.mapSize),n.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(n.shadow.camera))),n.visible!==void 0&&(a.visible=n.visible),n.userData!==void 0&&(a.userData=n.userData),n.children!==void 0)for(var u in n.children)a.add(this.parseObject(n.children[u],i,r));if(n.type==="LOD")for(var h=n.levels,f=0;f<h.length;f++){var p=h[f],u=a.getObjectByProperty("uuid",p.object);u!==void 0&&a.addLevel(u,p.distance)}return a}}()});function qt(){}qt.prototype={constructor:qt,getPoint:function(e){return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),null},getPointAt:function(e){var t=this.getUtoTmapping(e);return this.getPoint(t)},getPoints:function(e){e||(e=5);for(var t=[],n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e){e||(e=5);for(var t=[],n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){var e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e||(e=this.__arcLengthDivisions?this.__arcLengthDivisions:200),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var t=[],n,i=this.getPoint(0),r,a=0;for(t.push(0),r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){var n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];for(var s=0,o=r-1,l;s<=o;)if(i=Math.floor(s+(o-s)/2),l=n[i]-a,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===a){var p=i/(r-1);return p}var c=n[i],u=n[i+1],h=u-c,f=(a-c)/h,p=(i+f)/(r-1);return p},getTangent:function(e){var t=1e-4,n=e-t,i=e+t;n<0&&(n=0),i>1&&(i=1);var r=this.getPoint(n),a=this.getPoint(i),s=a.clone().sub(r);return s.normalize()},getTangentAt:function(e){var t=this.getUtoTmapping(e);return this.getTangent(t)},computeFrenetFrames:function(e,t){var n=new F,i=[],r=[],a=[],s=new F,o=new $e,l,c,u;for(l=0;l<=e;l++)c=l/e,i[l]=this.getTangentAt(c),i[l].normalize();r[0]=new F,a[0]=new F;var h=Number.MAX_VALUE,f=Math.abs(i[0].x),p=Math.abs(i[0].y),v=Math.abs(i[0].z);for(f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),v<=h&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],s),a[0].crossVectors(i[0],r[0]),l=1;l<=e;l++)r[l]=r[l-1].clone(),a[l]=a[l-1].clone(),s.crossVectors(i[l-1],i[l]),s.length()>Number.EPSILON&&(s.normalize(),u=Math.acos(Je.clamp(i[l-1].dot(i[l]),-1,1)),r[l].applyMatrix4(o.makeRotationAxis(s,u))),a[l].crossVectors(i[l],r[l]);if(t===!0)for(u=Math.acos(Je.clamp(r[0].dot(r[e]),-1,1)),u/=e,i[0].dot(s.crossVectors(r[0],r[e]))>0&&(u=-u),l=1;l<=e;l++)r[l].applyMatrix4(o.makeRotationAxis(i[l],u*l)),a[l].crossVectors(i[l],r[l]);return{tangents:i,normals:r,binormals:a}}};qt.create=function(e,t){return e.prototype=Object.create(qt.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};function kn(e,t){this.v1=e,this.v2=t}kn.prototype=Object.create(qt.prototype);kn.prototype.constructor=kn;kn.prototype.isLineCurve=!0;kn.prototype.getPoint=function(e){if(e===1)return this.v2.clone();var t=this.v2.clone().sub(this.v1);return t.multiplyScalar(e).add(this.v1),t};kn.prototype.getPointAt=function(e){return this.getPoint(e)};kn.prototype.getTangent=function(e){var t=this.v2.clone().sub(this.v1);return t.normalize()};function Bs(){this.curves=[],this.autoClose=!1}Bs.prototype=Object.assign(Object.create(qt.prototype),{constructor:Bs,add:function(e){this.curves.push(e)},closePath:function(){var e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new kn(t,e))},getPoint:function(e){for(var t=e*this.getLength(),n=this.getCurveLengths(),i=0;i<n.length;){if(n[i]>=t){var r=n[i]-t,a=this.curves[i],s=a.getLength(),o=s===0?0:1-r/s;return a.getPointAt(o)}i++}return null},getLength:function(){var e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var e=[],t=0,n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e||(e=40);for(var t=[],n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;for(var t=[],n,i=0,r=this.curves;i<r.length;i++)for(var a=r[i],s=a&&a.isEllipseCurve?e*2:a&&a.isLineCurve?1:a&&a.isSplineCurve?e*a.points.length:e,o=a.getPoints(s),l=0;l<o.length;l++){var c=o[l];n&&n.equals(c)||(t.push(c),n=c)}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},createPointsGeometry:function(e){var t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){var t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){for(var t=new Ke,n=0,i=e.length;n<i;n++){var r=e[n];t.vertices.push(new F(r.x,r.y,r.z||0))}return t}});function oi(e,t,n,i,r,a,s,o){this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o||0}oi.prototype=Object.create(qt.prototype);oi.prototype.constructor=oi;oi.prototype.isEllipseCurve=!0;oi.prototype.getPoint=function(e){for(var t=Math.PI*2,n=this.aEndAngle-this.aStartAngle,i=Math.abs(n)<Number.EPSILON;n<0;)n+=t;for(;n>t;)n-=t;n<Number.EPSILON&&(i?n=0:n=t),this.aClockwise===!0&&!i&&(n===t?n=-t:n=n-t);var r=this.aStartAngle+e*n,a=this.aX+this.xRadius*Math.cos(r),s=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){var o=Math.cos(this.aRotation),l=Math.sin(this.aRotation),c=a-this.aX,u=s-this.aY;a=c*o-u*l+this.aX,s=c*l+u*o+this.aY}return new Ie(a,s)};var Zs={tangentQuadraticBezier:function(e,t,n,i){return 2*(1-e)*(n-t)+2*e*(i-n)},tangentCubicBezier:function(e,t,n,i,r){return-3*t*(1-e)*(1-e)+3*n*(1-e)*(1-e)-6*e*n*(1-e)+6*e*i*(1-e)-3*e*e*i+3*e*e*r},tangentSpline:function(e,t,n,i,r){var a=6*e*e-6*e,s=3*e*e-4*e+1,o=-6*e*e+6*e,l=3*e*e-2*e;return a+s+o+l},interpolate:function(e,t,n,i,r){var a=(n-e)*.5,s=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+a+s)*l+(-3*t+3*n-2*a-s)*o+a*r+t}};function ar(e){this.points=e===void 0?[]:e}ar.prototype=Object.create(qt.prototype);ar.prototype.constructor=ar;ar.prototype.isSplineCurve=!0;ar.prototype.getPoint=function(e){var t=this.points,n=(t.length-1)*e,i=Math.floor(n),r=n-i,a=t[i===0?i:i-1],s=t[i],o=t[i>t.length-2?t.length-1:i+1],l=t[i>t.length-3?t.length-1:i+2],c=Zs.interpolate;return new Ie(c(a.x,s.x,o.x,l.x,r),c(a.y,s.y,o.y,l.y,r))};function sr(e,t,n,i){this.v0=e,this.v1=t,this.v2=n,this.v3=i}sr.prototype=Object.create(qt.prototype);sr.prototype.constructor=sr;sr.prototype.getPoint=function(e){var t=Bt.b3;return new Ie(t(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),t(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y))};sr.prototype.getTangent=function(e){var t=Zs.tangentCubicBezier;return new Ie(t(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),t(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y)).normalize()};function or(e,t,n){this.v0=e,this.v1=t,this.v2=n}or.prototype=Object.create(qt.prototype);or.prototype.constructor=or;or.prototype.getPoint=function(e){var t=Bt.b2;return new Ie(t(e,this.v0.x,this.v1.x,this.v2.x),t(e,this.v0.y,this.v1.y,this.v2.y))};or.prototype.getTangent=function(e){var t=Zs.tangentQuadraticBezier;return new Ie(t(e,this.v0.x,this.v1.x,this.v2.x),t(e,this.v0.y,this.v1.y,this.v2.y)).normalize()};var bu=Object.assign(Object.create(Bs.prototype),{fromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(var t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y)},moveTo:function(e,t){this.currentPoint.set(e,t)},lineTo:function(e,t){var n=new kn(this.currentPoint.clone(),new Ie(e,t));this.curves.push(n),this.currentPoint.set(e,t)},quadraticCurveTo:function(e,t,n,i){var r=new or(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i));this.curves.push(r),this.currentPoint.set(n,i)},bezierCurveTo:function(e,t,n,i,r,a){var s=new sr(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i),new Ie(r,a));this.curves.push(s),this.currentPoint.set(r,a)},splineThru:function(e){var t=[this.currentPoint.clone()].concat(e),n=new ar(t);this.curves.push(n),this.currentPoint.copy(e[e.length-1])},arc:function(e,t,n,i,r,a){var s=this.currentPoint.x,o=this.currentPoint.y;this.absarc(e+s,t+o,n,i,r,a)},absarc:function(e,t,n,i,r,a){this.absellipse(e,t,n,n,i,r,a)},ellipse:function(e,t,n,i,r,a,s,o){var l=this.currentPoint.x,c=this.currentPoint.y;this.absellipse(e+l,t+c,n,i,r,a,s,o)},absellipse:function(e,t,n,i,r,a,s,o){var l=new oi(e,t,n,i,r,a,s,o);if(this.curves.length>0){var c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);var u=l.getPoint(1);this.currentPoint.copy(u)}});function Gi(){Ks.apply(this,arguments),this.holes=[]}Gi.prototype=Object.assign(Object.create(bu),{constructor:Gi,getPointsHoles:function(e){for(var t=[],n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractAllPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},extractPoints:function(e){return this.extractAllPoints(e)}});function Ks(e){Bs.call(this),this.currentPoint=new Ie,e&&this.fromPoints(e)}Ks.prototype=bu;bu.constructor=Ks;function Su(){this.subPaths=[],this.currentPath=null}Su.prototype={moveTo:function(e,t){this.currentPath=new Ks,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t)},lineTo:function(e,t){this.currentPath.lineTo(e,t)},quadraticCurveTo:function(e,t,n,i){this.currentPath.quadraticCurveTo(e,t,n,i)},bezierCurveTo:function(e,t,n,i,r,a){this.currentPath.bezierCurveTo(e,t,n,i,r,a)},splineThru:function(e){this.currentPath.splineThru(e)},toShapes:function(e,t){function n(D){for(var G=[],z=0,H=D.length;z<H;z++){var Y=D[z],$=new Gi;$.curves=Y.curves,G.push($)}return G}function i(D,G){for(var z=G.length,H=!1,Y=z-1,$=0;$<z;Y=$++){var ie=G[Y],N=G[$],O=N.x-ie.x,q=N.y-ie.y;if(Math.abs(q)>Number.EPSILON){if(q<0&&(ie=G[$],O=-O,N=G[Y],q=-q),D.y<ie.y||D.y>N.y)continue;if(D.y===ie.y){if(D.x===ie.x)return!0}else{var ae=q*(D.x-ie.x)-O*(D.y-ie.y);if(ae===0)return!0;if(ae<0)continue;H=!H}}else{if(D.y!==ie.y)continue;if(N.x<=D.x&&D.x<=ie.x||ie.x<=D.x&&D.x<=N.x)return!0}}return H}var r=Bt.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return n(a);var s,o,l,c=[];if(a.length===1)return o=a[0],l=new Gi,l.curves=o.curves,c.push(l),c;var u=!r(a[0].getPoints());u=e?!u:u;var h=[],f=[],p=[],v=0,g;f[v]=void 0,p[v]=[];for(var m=0,d=a.length;m<d;m++)o=a[m],g=o.getPoints(),s=r(g),s=e?!s:s,s?(!u&&f[v]&&v++,f[v]={s:new Gi,p:g},f[v].s.curves=o.curves,u&&v++,p[v]=[]):p[v].push({h:o,p:g[0]});if(!f[0])return n(a);if(f.length>1){for(var x=!1,_=[],y=0,M=f.length;y<M;y++)h[y]=[];for(var y=0,M=f.length;y<M;y++)for(var S=p[y],T=0;T<S.length;T++){for(var L=S[T],E=!0,R=0;R<f.length;R++)i(L.p,f[R].p)&&(y!==R&&_.push({froms:y,tos:R,hole:T}),E?(E=!1,h[R].push(L)):x=!0);E&&h[y].push(L)}_.length>0&&(x||(p=h))}for(var k,m=0,X=f.length;m<X;m++){l=f[m].s,c.push(l),k=p[m];for(var w=0,A=k.length;w<A;w++)l.holes.push(k[w].h)}return c}};function wu(e){this.data=e}Object.assign(wu.prototype,{isFont:!0,generateShapes:function(e,t,n){function i(u){for(var h=String(u).split(""),f=t/a.resolution,p=0,v=[],g=0;g<h.length;g++){var m=r(h[g],f,p);p+=m.offset,v.push(m.path)}return v}function r(u,h,f){var p=a.glyphs[u]||a.glyphs["?"];if(p){var v=new Su,g=[],m=Bt.b2,d=Bt.b3,x,_,y,M,S,T,L,E,R,k,X;if(p.o)for(var w=p._cachedOutline||(p._cachedOutline=p.o.split(" ")),A=0,D=w.length;A<D;){var G=w[A++];switch(G){case"m":x=w[A++]*h+f,_=w[A++]*h,v.moveTo(x,_);break;case"l":x=w[A++]*h+f,_=w[A++]*h,v.lineTo(x,_);break;case"q":if(y=w[A++]*h+f,M=w[A++]*h,L=w[A++]*h+f,E=w[A++]*h,v.quadraticCurveTo(L,E,y,M),X=g[g.length-1],X){S=X.x,T=X.y;for(var z=1;z<=n;z++){var H=z/n;m(H,S,L,y),m(H,T,E,M)}}break;case"b":if(y=w[A++]*h+f,M=w[A++]*h,L=w[A++]*h+f,E=w[A++]*h,R=w[A++]*h+f,k=w[A++]*h,v.bezierCurveTo(L,E,R,k,y,M),X=g[g.length-1],X){S=X.x,T=X.y;for(var z=1;z<=n;z++){var H=z/n;d(H,S,L,R,y),d(H,T,E,k,M)}}break}}return{offset:p.ha*h,path:v}}}t===void 0&&(t=100),n===void 0&&(n=4);for(var a=this.data,s=i(e),o=[],l=0,c=s.length;l<c;l++)Array.prototype.push.apply(o,s[l].toShapes());return o}});function hp(e){this.manager=e!==void 0?e:_n}Object.assign(hp.prototype,{load:function(e,t,n,i){var r=this,a=new Tn(this.manager);a.load(e,function(s){var o;try{o=JSON.parse(s)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),o=JSON.parse(s.substring(65,s.length-2))}var l=r.parse(o);t&&t(l)},n,i)},parse:function(e){return new wu(e)}});var To,Tu={getContext:function(){return To===void 0&&(To=new(window.AudioContext||window.webkitAudioContext)),To},setContext:function(e){To=e}};function Au(e){this.manager=e!==void 0?e:_n}Object.assign(Au.prototype,{load:function(e,t,n,i){var r=new Tn(this.manager);r.setResponseType("arraybuffer"),r.load(e,function(a){var s=Tu.getContext();s.decodeAudioData(a,function(o){t(o)})},n,i)}});function Ul(e,t,n,i){Rt.call(this,e,t),this.type="RectAreaLight",this.position.set(0,1,0),this.updateMatrix(),this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Ul.prototype=Object.assign(Object.create(Rt.prototype),{constructor:Ul,isRectAreaLight:!0,copy:function(e){return Rt.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this}});function fp(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new kt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new kt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1}Object.assign(fp.prototype,{update:function(){var e,t,n,i,r,a,s,o=new $e,l=new $e;return function(u){var h=e!==this||t!==u.focus||n!==u.fov||i!==u.aspect*this.aspect||r!==u.near||a!==u.far||s!==u.zoom;if(h){e=this,t=u.focus,n=u.fov,i=u.aspect*this.aspect,r=u.near,a=u.far,s=u.zoom;var f=u.projectionMatrix.clone(),p=this.eyeSep/2,v=p*r/t,g=r*Math.tan(Je.DEG2RAD*n*.5)/s,m,d;l.elements[12]=-p,o.elements[12]=p,m=-g*i+v,d=g*i+v,f.elements[0]=2*r/(d-m),f.elements[8]=(d+m)/(d-m),this.cameraL.projectionMatrix.copy(f),m=-g*i-v,d=g*i-v,f.elements[0]=2*r/(d-m),f.elements[8]=(d+m)/(d-m),this.cameraR.projectionMatrix.copy(f)}this.cameraL.matrixWorld.copy(u.matrixWorld).multiply(l),this.cameraR.matrixWorld.copy(u.matrixWorld).multiply(o)}}()});function rc(e,t,n){Ge.call(this),this.type="CubeCamera";var i=90,r=1,a=new kt(i,r,e,t);a.up.set(0,-1,0),a.lookAt(new F(1,0,0)),this.add(a);var s=new kt(i,r,e,t);s.up.set(0,-1,0),s.lookAt(new F(-1,0,0)),this.add(s);var o=new kt(i,r,e,t);o.up.set(0,0,1),o.lookAt(new F(0,1,0)),this.add(o);var l=new kt(i,r,e,t);l.up.set(0,0,-1),l.lookAt(new F(0,-1,0)),this.add(l);var c=new kt(i,r,e,t);c.up.set(0,-1,0),c.lookAt(new F(0,0,1)),this.add(c);var u=new kt(i,r,e,t);u.up.set(0,-1,0),u.lookAt(new F(0,0,-1)),this.add(u);var h={format:Vr,magFilter:nn,minFilter:nn};this.renderTarget=new Wr(n,n,h),this.updateCubeMap=function(f,p){this.parent===null&&this.updateMatrixWorld();var v=this.renderTarget,g=v.texture.generateMipmaps;v.texture.generateMipmaps=!1,v.activeCubeFace=0,f.render(p,a,v),v.activeCubeFace=1,f.render(p,s,v),v.activeCubeFace=2,f.render(p,o,v),v.activeCubeFace=3,f.render(p,l,v),v.activeCubeFace=4,f.render(p,c,v),v.texture.generateMipmaps=g,v.activeCubeFace=5,f.render(p,u,v),f.setRenderTarget(null)}}rc.prototype=Object.create(Ge.prototype);rc.prototype.constructor=rc;function Dl(){Ge.call(this),this.type="AudioListener",this.context=Tu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null}Dl.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Dl,getInput:function(){return this.gain},removeFilter:function(){this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(e){this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){this.gain.gain.value=e},updateMatrixWorld:function(){var e=new F,t=new Ct,n=new F,i=new F;return function(a){Ge.prototype.updateMatrixWorld.call(this,a);var s=this.context.listener,o=this.up;this.matrixWorld.decompose(e,t,n),i.set(0,0,-1).applyQuaternion(t),s.positionX?(s.positionX.setValueAtTime(e.x,this.context.currentTime),s.positionY.setValueAtTime(e.y,this.context.currentTime),s.positionZ.setValueAtTime(e.z,this.context.currentTime),s.forwardX.setValueAtTime(i.x,this.context.currentTime),s.forwardY.setValueAtTime(i.y,this.context.currentTime),s.forwardZ.setValueAtTime(i.z,this.context.currentTime),s.upX.setValueAtTime(o.x,this.context.currentTime),s.upY.setValueAtTime(o.y,this.context.currentTime),s.upZ.setValueAtTime(o.z,this.context.currentTime)):(s.setPosition(e.x,e.y,e.z),s.setOrientation(i.x,i.y,i.z,o.x,o.y,o.z))}}()});function va(e){Ge.call(this),this.type="Audio",this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.loop=!1,this.startTime=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filters=[]}va.prototype=Object.assign(Object.create(Ge.prototype),{constructor:va,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}var e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.onended=this.onEnded.bind(this),e.playbackRate.setValueAtTime(this.playbackRate,this.startTime),e.start(0,this.startTime),this.isPlaying=!0,this.source=e,this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),this.isPlaying===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.value=e,this}});function Il(e){va.call(this,e),this.panner=this.context.createPanner(),this.panner.connect(this.gain)}Il.prototype=Object.assign(Object.create(va.prototype),{constructor:Il,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){this.panner.refDistance=e},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){this.panner.rolloffFactor=e},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){this.panner.distanceModel=e},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){this.panner.maxDistance=e},updateMatrixWorld:function(){var e=new F;return function(n){Ge.prototype.updateMatrixWorld.call(this,n),e.setFromMatrixPosition(this.matrixWorld),this.panner.setPosition(e.x,e.y,e.z)}}()});function Ru(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}Object.assign(Ru.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var e=0,t=this.getFrequencyData(),n=0;n<t.length;n++)e+=t[n];return e/t.length}});function ac(e,t,n){this.binding=e,this.valueSize=n;var i=Float64Array,r;switch(t){case"quaternion":r=this._slerp;break;case"string":case"bool":i=Array,r=this._select;break;default:r=this._lerp}this.buffer=new i(n*4),this._mixBufferRegion=r,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}ac.prototype={constructor:ac,accumulate:function(e,t){var n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(var s=0;s!==i;++s)n[r+s]=n[s];a=t}else{a+=t;var o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a},apply:function(e){var t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.binding;if(this.cumulativeWeight=0,r<1){var s=t*3;this._mixBufferRegion(n,i,s,1-r,t)}for(var o=t,l=t+t;o!==l;++o)if(n[o]!==n[o+t]){a.setValue(n,i);break}},saveOriginalState:function(){var e=this.binding,t=this.buffer,n=this.valueSize,i=n*3;e.getValue(t,i);for(var r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this.cumulativeWeight=0},restoreOriginalState:function(){var e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_select:function(e,t,n,i,r){if(i>=.5)for(var a=0;a!==r;++a)e[t+a]=e[n+a]},_slerp:function(e,t,n,i,r){Ct.slerpFlat(e,t,e,t,e,n,i)},_lerp:function(e,t,n,i,r){for(var a=1-i,s=0;s!==r;++s){var o=t+s;e[o]=e[o]*a+e[n+s]*i}}};function Tt(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Tt.prototype={constructor:Tt,getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){var e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("  trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){var a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("  can not bind to material as node does not have a material",this);return}if(!e.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return}e=e.skeleton.bones;for(var s=0;s<e.length;s++)if(e[s].name===a){a=s;break}break;default:if(e[n]===void 0){console.error("  can not bind to objectName of node, undefined",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,e);return}e=e[a]}}var o=e[i];if(o===void 0){var l=t.nodeName;console.error("  trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}var c=this.Versioning.None;e.needsUpdate!==void 0?(c=this.Versioning.NeedsUpdate,this.targetObject=e):e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=e);var u=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);return}if(!e.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",this);return}for(var s=0;s<this.node.geometry.morphTargets.length;s++)if(e.geometry.morphTargets[s].name===r){r=s;break}}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):o.length!==void 0?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Object.assign(Tt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},_getValue_unbound:Tt.prototype.getValue,_setValue_unbound:Tt.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.node[this.propertyName]=t[n]},function(t,n){this.node[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.node[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=t[n++]},function(t,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){for(var i=this.resolvedProperty,r=0,a=i.length;r!==a;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]]});Tt.Composite=function(e,t,n){var i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)};Tt.Composite.prototype={constructor:Tt.Composite,getValue:function(e,t){this.bind();var n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){for(var n=this._bindings,i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};Tt.create=function(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)};Tt.parseTrackName=function(e){var t=/^((?:[\w-]+[\/:])*)([\w-]+)?(?:\.([\w-]+)(?:\[(.+)\])?)?\.([\w-]+)(?:\[(.+)\])?$/,n=t.exec(e);if(!n)throw new Error("cannot parse trackName at all: "+e);var i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]};if(i.propertyName===null||i.propertyName.length===0)throw new Error("can not parse propertyName from trackName: "+e);return i};Tt.findNode=function(e,t){if(!t||t===""||t==="root"||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){var n=function(s){for(var o=0;o<s.bones.length;o++){var l=s.bones[o];if(l.name===t)return l}return null},i=n(e.skeleton);if(i)return i}if(e.children){var r=function(s){for(var o=0;o<s.length;o++){var l=s[o];if(l.name===t||l.uuid===t)return l;var c=r(l.children);if(c)return c}return null},a=r(e.children);if(a)return a}return null};function Fl(e){this.uuid=Je.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var t={};this._indicesByUUID=t;for(var n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var r=this;this.stats={objects:{get total(){return r._objects.length},get inUse(){return this.total-r.nCachedObjects_}},get bindingsPerObject(){return r._bindings.length}}}Fl.prototype={constructor:Fl,isAnimationObjectGroup:!0,add:function(e){for(var t=this._objects,n=t.length,i=this.nCachedObjects_,r=this._indicesByUUID,a=this._paths,s=this._parsedPaths,o=this._bindings,l=o.length,c=0,u=arguments.length;c!==u;++c){var h=arguments[c],f=h.uuid,p=r[f],v=void 0;if(p===void 0){p=n++,r[f]=p,t.push(h);for(var g=0,m=l;g!==m;++g)o[g].push(new Tt(h,a[g],s[g]))}else if(p<i){v=t[p];var d=--i,x=t[d];r[x.uuid]=p,t[p]=x,r[f]=d,t[d]=h;for(var g=0,m=l;g!==m;++g){var _=o[g],y=_[d],M=_[p];_[p]=y,M===void 0&&(M=new Tt(h,a[g],s[g])),_[d]=M}}else t[p]!==v&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}this.nCachedObjects_=i},remove:function(e){for(var t=this._objects,n=this.nCachedObjects_,i=this._indicesByUUID,r=this._bindings,a=r.length,s=0,o=arguments.length;s!==o;++s){var l=arguments[s],c=l.uuid,u=i[c];if(u!==void 0&&u>=n){var h=n++,f=t[h];i[f.uuid]=u,t[u]=f,i[c]=h,t[h]=l;for(var p=0,v=a;p!==v;++p){var g=r[p],m=g[h],d=g[u];g[u]=m,g[h]=d}}}this.nCachedObjects_=n},uncache:function(e){for(var t=this._objects,n=t.length,i=this.nCachedObjects_,r=this._indicesByUUID,a=this._bindings,s=a.length,o=0,l=arguments.length;o!==l;++o){var c=arguments[o],u=c.uuid,h=r[u];if(h!==void 0)if(delete r[u],h<i){var f=--i,p=t[f],v=--n,g=t[v];r[p.uuid]=h,t[h]=p,r[g.uuid]=f,t[f]=g,t.pop();for(var m=0,d=s;m!==d;++m){var x=a[m],_=x[f],y=x[v];x[h]=_,x[f]=y,x.pop()}}else{var v=--n,g=t[v];r[g.uuid]=h,t[h]=g,t.pop();for(var m=0,d=s;m!==d;++m){var x=a[m];x[h]=x[v],x.pop()}}}this.nCachedObjects_=i},subscribe_:function(e,t){var n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];var a=this._paths,s=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,a.push(e),s.push(t),r.push(u);for(var h=c,f=o.length;h!==f;++h){var p=o[h];u[h]=new Tt(p,e,t)}return u},unsubscribe_:function(e){var t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){var i=this._paths,r=this._parsedPaths,a=this._bindings,s=a.length-1,o=a[s],l=e[s];t[l]=n,a[n]=o,a.pop(),r[n]=r[s],r.pop(),i[n]=i[s],i.pop()}}};function Nl(e,t,n){this._mixer=e,this._clip=t,this._localRoot=n||null;for(var i=t.tracks,r=i.length,a=new Array(r),s={endingStart:Wi,endingEnd:Wi},o=0;o!==r;++o){var l=i[o].createInterpolant(null);a[o]=l,l.settings=s}this._interpolantSettings=s,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Nl.prototype={constructor:Nl,play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},setEffectiveWeight:function(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){var i=this._clip.duration,r=e._clip.duration,a=r/i,s=i/r;e.warp(1,a,t),this.warp(s,1,t)}return this},crossFadeTo:function(e,t,n){return e.crossFadeFrom(this,t,n)},stopFading:function(){var e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,n){var i=this._mixer,r=i.time,a=this._timeScaleInterpolant,s=this.timeScale;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);var o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+n,l[0]=e/s,l[1]=t/s,this},stopWarping:function(){var e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(e,t,n,i){var r=this._startTime;if(r!==null){var a=(e-r)*n;if(a<0||n===0)return;this._startTime=null,t=n*a}t*=this._updateTimeScale(e);var s=this._updateTime(t),o=this._updateWeight(e);if(o>0)for(var l=this._interpolants,c=this._propertyBindings,u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulate(i,o)},_updateWeight:function(e){var t=0;if(this.enabled){t=this.weight;var n=this._weightInterpolant;if(n!==null){var i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){var t=0;if(!this.paused){t=this.timeScale;var n=this._timeScaleInterpolant;if(n!==null){var i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t},_updateTime:function(e){var t=this.time+e;if(e===0)return t;var n=this._clip.duration,i=this.loop,r=this._loopCount;if(i===Gd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(t>=n)t=n;else if(t<0)t=0;else break e;this.clampWhenFinished?this.paused=!0:this.enabled=!1,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{var a=i===Vd;if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),t>=n||t<0){var s=Math.floor(t/n);t-=n*s,r+=Math.abs(s);var o=this.repetitions-r;if(o<0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,t=e>0?n:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(o===0){var l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}if(a&&(r&1)===1)return this.time=t,n-t}return this.time=t,t},_setEndings:function(e,t,n){var i=this._interpolantSettings;n?(i.endingStart=Ui,i.endingEnd=Ui):(e?i.endingStart=this.zeroSlopeAtStart?Ui:Wi:i.endingStart=rs,t?i.endingEnd=this.zeroSlopeAtEnd?Ui:Wi:i.endingEnd=rs)},_scheduleFading:function(e,t,n){var i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);var s=a.parameterPositions,o=a.sampleValues;return s[0]=r,o[0]=t,s[1]=r+e,o[1]=n,this}};function Lu(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Object.assign(Lu.prototype,bn.prototype,{clipAction:function(e,t){var n=t||this._root,i=n.uuid,r=typeof e=="string"?dn.findByName(n,e):e,a=r!==null?r.uuid:e,s=this._actionsByClip[a],o=null;if(s!==void 0){var l=s.actionByRoot[i];if(l!==void 0)return l;o=s.knownActions[0],r===null&&(r=o._clip)}if(r===null)return null;var c=new Nl(this,r,t);return this._bindAction(c,o),this._addInactiveAction(c,a,i),c},existingAction:function(e,t){var n=t||this._root,i=n.uuid,r=typeof e=="string"?dn.findByName(n,e):e,a=r?r.uuid:e,s=this._actionsByClip[a];return s!==void 0&&s.actionByRoot[i]||null},stopAllAction:function(){var e=this._actions,t=this._nActiveActions,n=this._bindings,i=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var r=0;r!==t;++r)e[r].reset();for(var r=0;r!==i;++r)n[r].useCount=0;return this},update:function(e){e*=this.timeScale;for(var t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1,s=0;s!==n;++s){var o=t[s];o.enabled&&o._update(i,e,r,a)}for(var l=this._bindings,c=this._nActiveBindings,s=0;s!==c;++s)l[s].apply(a);return this},getRoot:function(){return this._root},uncacheClip:function(e){var t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){for(var a=r.knownActions,s=0,o=a.length;s!==o;++s){var l=a[s];this._deactivateAction(l);var c=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=c,t[c]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}},uncacheRoot:function(e){var t=e.uuid,n=this._actionsByClip;for(var i in n){var r=n[i].actionByRoot,a=r[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}var s=this._bindingsByRootAndName,o=s[t];if(o!==void 0)for(var l in o){var c=o[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}},uncacheAction:function(e,t){var n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});Object.assign(Lu.prototype,{_bindAction:function(e,t){var n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,s=e._interpolants,o=n.uuid,l=this._bindingsByRootAndName,c=l[o];c===void 0&&(c={},l[o]=c);for(var u=0;u!==r;++u){var h=i[u],f=h.name,p=c[f];if(p!==void 0)a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,f));continue}var v=t&&t._propertyBindings[u].binding.parsedPath;p=new ac(Tt.create(n,f,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,f),a[u]=p}s[u].resultBuffer=p.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){var t=(e._localRoot||this._root).uuid,n=e._clip.uuid,i=this._actionsByClip[n];this._bindAction(e,i&&i.knownActions[0]),this._addInactiveAction(e,n,t)}for(var r=e._propertyBindings,a=0,s=r.length;a!==s;++a){var o=r[a];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){for(var t=e._propertyBindings,n=0,i=t.length;n!==i;++n){var r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){var t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){var i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{var s=a.knownActions;e._byClipCacheIndex=s.length,s.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e},_removeInactiveAction:function(e){var t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;var r=e._clip.uuid,a=this._actionsByClip,s=a[r],o=s.knownActions,l=o[o.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),e._byClipCacheIndex=null;var u=s.actionByRoot,h=(t._localRoot||this._root).uuid;delete u[h],o.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){for(var t=e._propertyBindings,n=0,i=t.length;n!==i;++n){var r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(e){var t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){var t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){var i=this._bindingsByRootAndName,r=i[t],a=this._bindings;r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=a.length,a.push(e)},_removeInactiveBinding:function(e){var t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,s=a[i],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete s[r];e:{for(var c in s)break e;delete a[i]}},_lendBinding:function(e){var t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){var t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){var e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ns(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){var t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1)});function sc(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}sc.prototype.clone=function(){return new sc(this.value.clone===void 0?this.value:this.value.clone())};function cr(){qe.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0}cr.prototype=Object.create(qe.prototype);cr.prototype.constructor=cr;cr.prototype.isInstancedBufferGeometry=!0;cr.prototype.addGroup=function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n})};cr.prototype.copy=function(e){var t=e.index;t!==null&&this.setIndex(t.clone());var n=e.attributes;for(var i in n){var r=n[i];this.addAttribute(i,r.clone())}for(var a=e.groups,s=0,o=a.length;s<o;s++){var l=a[s];this.addGroup(l.start,l.count,l.materialIndex)}return this};function Ol(e,t,n,i){this.uuid=Je.generateUUID(),this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}Ol.prototype={constructor:Ol,isInterleavedBufferAttribute:!0,get count(){return this.data.count},get array(){return this.data.array},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}};function ga(e,t){this.uuid=Je.generateUUID(),this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.onUploadCallback=function(){},this.version=0}ga.prototype={constructor:ga,isInterleavedBuffer:!0,set needsUpdate(e){e===!0&&this.version++},setArray:function(e){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=e!==void 0?e.length/this.stride:0,this.array=e},setDynamic:function(e){return this.dynamic=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.dynamic=e.dynamic,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(var i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(){return new this.constructor().copy(this)},onUpload:function(e){return this.onUploadCallback=e,this}};function _a(e,t,n){ga.call(this,e,t),this.meshPerAttribute=n||1}_a.prototype=Object.create(ga.prototype);_a.prototype.constructor=_a;_a.prototype.isInstancedInterleavedBuffer=!0;_a.prototype.copy=function(e){return ga.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this};function xa(e,t,n){Pe.call(this,e,t),this.meshPerAttribute=n||1}xa.prototype=Object.create(Pe.prototype);xa.prototype.constructor=xa;xa.prototype.isInstancedBufferAttribute=!0;xa.prototype.copy=function(e){return Pe.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this};function Bl(e,t,n,i){this.ray=new Ei(e,t),this.near=n||0,this.far=i||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function af(e,t){return e.distance-t.distance}function zl(e,t,n,i){if(e.visible!==!1&&(e.raycast(t,n),i===!0))for(var r=e.children,a=0,s=r.length;a<s;a++)zl(r[a],t,n,!0)}Bl.prototype={constructor:Bl,linePrecision:1,set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize()):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t){var n=[];return zl(e,this,n,t),n.sort(af),n},intersectObjects:function(e,t){var n=[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),n;for(var i=0,r=e.length;i<r;i++)zl(e[i],this,n,t);return n.sort(af),n}};function Gl(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Gl.prototype={constructor:Gl,start:function(){this.startTime=(performance||Date).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var e=0;if(this.autoStart&&!this.running&&this.start(),this.running){var t=(performance||Date).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function jE(e){this.points=e;var t=[],n={x:0,y:0,z:0},i,r,a,s,o,l,c,u,h;this.initFromArray=function(p){this.points=[];for(var v=0;v<p.length;v++)this.points[v]={x:p[v][0],y:p[v][1],z:p[v][2]}},this.getPoint=function(p){return i=(this.points.length-1)*p,r=Math.floor(i),a=i-r,t[0]=r===0?r:r-1,t[1]=r,t[2]=r>this.points.length-2?this.points.length-1:r+1,t[3]=r>this.points.length-3?this.points.length-1:r+2,l=this.points[t[0]],c=this.points[t[1]],u=this.points[t[2]],h=this.points[t[3]],s=a*a,o=a*s,n.x=f(l.x,c.x,u.x,h.x,a,s,o),n.y=f(l.y,c.y,u.y,h.y,a,s,o),n.z=f(l.z,c.z,u.z,h.z,a,s,o),n},this.getControlPointsArray=function(){var p,v,g=this.points.length,m=[];for(p=0;p<g;p++)v=this.points[p],m[p]=[v.x,v.y,v.z];return m},this.getLength=function(p){var v,g,m,d,x=0,_=0,y=0,M=new F,S=new F,T=[],L=0;for(T[0]=0,p||(p=100),m=this.points.length*p,M.copy(this.points[0]),v=1;v<m;v++)g=v/m,d=this.getPoint(g),S.copy(d),L+=S.distanceTo(M),M.copy(d),x=(this.points.length-1)*g,_=Math.floor(x),_!==y&&(T[_]=L,y=_);return T[T.length]=L,{chunks:T,total:L}},this.reparametrizeByArcLength=function(p){var v,g,m,d,x,_,y,M,S=[],T=new F,L=this.getLength();for(S.push(T.copy(this.points[0]).clone()),v=1;v<this.points.length;v++){for(_=L.chunks[v]-L.chunks[v-1],y=Math.ceil(p*_/L.total),d=(v-1)/(this.points.length-1),x=v/(this.points.length-1),g=1;g<y-1;g++)m=d+g*(1/y)*(x-d),M=this.getPoint(m),S.push(T.copy(M).clone());S.push(T.copy(this.points[v]).clone())}this.points=S};function f(p,v,g,m,d,x,_){var y=(g-p)*.5,M=(m-v)*.5;return(2*(v-g)+y+M)*_+(-3*(v-g)-2*y-M)*x+y*d+v}}function Hl(e,t,n){return this.radius=e!==void 0?e:1,this.phi=t!==void 0?t:0,this.theta=n!==void 0?n:0,this}Hl.prototype={constructor:Hl,set:function(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this},makeSafe:function(){var e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this},setFromVector3:function(e){return this.radius=e.length(),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e.x,e.z),this.phi=Math.acos(Je.clamp(e.y/this.radius,-1,1))),this}};function Vl(e,t,n){return this.radius=e!==void 0?e:1,this.theta=t!==void 0?t:0,this.y=n!==void 0?n:0,this}Vl.prototype={constructor:Vl,set:function(e,t,n){return this.radius=e,this.theta=t,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.radius=Math.sqrt(e.x*e.x+e.z*e.z),this.theta=Math.atan2(e.x,e.z),this.y=e.y,this}};function zt(e,t){Ft.call(this,e,t),this.animationsMap={},this.animationsList=[];var n=this.geometry.morphTargets.length,i="__default",r=0,a=n-1,s=n/1;this.createAnimation(i,r,a,s),this.setAnimationWeight(i,1)}zt.prototype=Object.create(Ft.prototype);zt.prototype.constructor=zt;zt.prototype.createAnimation=function(e,t,n,i){var r={start:t,end:n,length:n-t+1,fps:i,duration:(n-t)/i,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[e]=r,this.animationsList.push(r)};zt.prototype.autoCreateAnimations=function(e){for(var t=/([a-z]+)_?(\d+)/i,n,i={},r=this.geometry,a=0,s=r.morphTargets.length;a<s;a++){var o=r.morphTargets[a],l=o.name.match(t);if(l&&l.length>1){var c=l[1];i[c]||(i[c]={start:1/0,end:-1/0});var u=i[c];a<u.start&&(u.start=a),a>u.end&&(u.end=a),n||(n=c)}}for(var c in i){var u=i[c];this.createAnimation(c,u.start,u.end,e)}this.firstAnimation=n};zt.prototype.setAnimationDirectionForward=function(e){var t=this.animationsMap[e];t&&(t.direction=1,t.directionBackwards=!1)};zt.prototype.setAnimationDirectionBackward=function(e){var t=this.animationsMap[e];t&&(t.direction=-1,t.directionBackwards=!0)};zt.prototype.setAnimationFPS=function(e,t){var n=this.animationsMap[e];n&&(n.fps=t,n.duration=(n.end-n.start)/n.fps)};zt.prototype.setAnimationDuration=function(e,t){var n=this.animationsMap[e];n&&(n.duration=t,n.fps=(n.end-n.start)/n.duration)};zt.prototype.setAnimationWeight=function(e,t){var n=this.animationsMap[e];n&&(n.weight=t)};zt.prototype.setAnimationTime=function(e,t){var n=this.animationsMap[e];n&&(n.time=t)};zt.prototype.getAnimationTime=function(e){var t=0,n=this.animationsMap[e];return n&&(t=n.time),t};zt.prototype.getAnimationDuration=function(e){var t=-1,n=this.animationsMap[e];return n&&(t=n.duration),t};zt.prototype.playAnimation=function(e){var t=this.animationsMap[e];t?(t.time=0,t.active=!0):console.warn("THREE.MorphBlendMesh: animation["+e+"] undefined in .playAnimation()")};zt.prototype.stopAnimation=function(e){var t=this.animationsMap[e];t&&(t.active=!1)};zt.prototype.update=function(e){for(var t=0,n=this.animationsList.length;t<n;t++){var i=this.animationsList[t];if(i.active){var r=i.duration/i.length;i.time+=i.direction*e,i.mirroredLoop?(i.time>i.duration||i.time<0)&&(i.direction*=-1,i.time>i.duration&&(i.time=i.duration,i.directionBackwards=!0),i.time<0&&(i.time=0,i.directionBackwards=!1)):(i.time=i.time%i.duration,i.time<0&&(i.time+=i.duration));var a=i.start+Je.clamp(Math.floor(i.time/r),0,i.length-1),s=i.weight;a!==i.currentFrame&&(this.morphTargetInfluences[i.lastFrame]=0,this.morphTargetInfluences[i.currentFrame]=1*s,this.morphTargetInfluences[a]=0,i.lastFrame=i.currentFrame,i.currentFrame=a);var o=i.time%r/r;i.directionBackwards&&(o=1-o),i.currentFrame!==i.lastFrame?(this.morphTargetInfluences[i.currentFrame]=o*s,this.morphTargetInfluences[i.lastFrame]=(1-o)*s):this.morphTargetInfluences[i.currentFrame]=s}}};function zs(e){Ge.call(this),this.material=e,this.render=function(t){}}zs.prototype=Object.create(Ge.prototype);zs.prototype.constructor=zs;zs.prototype.isImmediateRenderObject=!0;function Gs(e,t,n,i){this.object=e,this.size=t!==void 0?t:1;var r=n!==void 0?n:16711680,a=i!==void 0?i:1,s=0,o=this.object.geometry;o&&o.isGeometry?s=o.faces.length*3:o&&o.isBufferGeometry&&(s=o.attributes.normal.count);var l=new qe,c=new st(s*2*3,3);l.addAttribute("position",c),yt.call(this,l,new At({color:r,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}Gs.prototype=Object.create(yt.prototype);Gs.prototype.constructor=Gs;Gs.prototype.update=function(){var e=new F,t=new F,n=new Sn;return function(){var r=["a","b","c"];this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);var a=this.object.matrixWorld,s=this.geometry.attributes.position,o=this.object.geometry;if(o&&o.isGeometry)for(var l=o.vertices,c=o.faces,u=0,h=0,f=c.length;h<f;h++)for(var p=c[h],v=0,g=p.vertexNormals.length;v<g;v++){var m=l[p[r[v]]],d=p.vertexNormals[v];e.copy(m).applyMatrix4(a),t.copy(d).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),s.setXYZ(u,e.x,e.y,e.z),u=u+1,s.setXYZ(u,t.x,t.y,t.z),u=u+1}else if(o&&o.isBufferGeometry)for(var x=o.attributes.position,_=o.attributes.normal,u=0,v=0,g=x.count;v<g;v++)e.set(x.getX(v),x.getY(v),x.getZ(v)).applyMatrix4(a),t.set(_.getX(v),_.getY(v),_.getZ(v)),t.applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),s.setXYZ(u,e.x,e.y,e.z),u=u+1,s.setXYZ(u,t.x,t.y,t.z),u=u+1;return s.needsUpdate=!0,this}}();function ya(e){Ge.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;for(var t=new qe,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],i=0,r=1,a=32;i<a;i++,r++){var s=i/a*Math.PI*2,o=r/a*Math.PI*2;n.push(Math.cos(s),Math.sin(s),1,Math.cos(o),Math.sin(o),1)}t.addAttribute("position",new st(n,3));var l=new At({fog:!1});this.cone=new yt(t,l),this.add(this.cone),this.update()}ya.prototype=Object.create(Ge.prototype);ya.prototype.constructor=ya;ya.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};ya.prototype.update=function(){var e=new F,t=new F;return function(){var i=this.light.distance?this.light.distance:1e3,r=i*Math.tan(this.light.angle);this.cone.scale.set(r,r,i),e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(t.sub(e)),this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();function Ma(e){this.bones=this.getBoneList(e);for(var t=new qe,n=[],i=[],r=new je(0,0,1),a=new je(0,1,0),s=0;s<this.bones.length;s++){var o=this.bones[s];o.parent&&o.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(r.r,r.g,r.b),i.push(a.r,a.g,a.b))}t.addAttribute("position",new st(n,3)),t.addAttribute("color",new st(i,3));var l=new At({vertexColors:hr,depthTest:!1,depthWrite:!1,transparent:!0});yt.call(this,t,l),this.root=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.update()}Ma.prototype=Object.create(yt.prototype);Ma.prototype.constructor=Ma;Ma.prototype.getBoneList=function(e){var t=[];e&&e.isBone&&t.push(e);for(var n=0;n<e.children.length;n++)t.push.apply(t,this.getBoneList(e.children[n]));return t};Ma.prototype.update=function(){var e=new F,t=new $e,n=new $e;return function(){var r=this.geometry,a=r.getAttribute("position");n.getInverse(this.root.matrixWorld);for(var s=0,o=0;s<this.bones.length;s++){var l=this.bones[s];l.parent&&l.parent.isBone&&(t.multiplyMatrices(n,l.matrixWorld),e.setFromMatrixPosition(t),a.setXYZ(o,e.x,e.y,e.z),t.multiplyMatrices(n,l.parent.matrixWorld),e.setFromMatrixPosition(t),a.setXYZ(o+1,e.x,e.y,e.z),o+=2)}r.getAttribute("position").needsUpdate=!0}}();function Ea(e,t){this.light=e,this.light.updateMatrixWorld();var n=new Ki(t,4,2),i=new an({wireframe:!0,fog:!1});i.color.copy(this.light.color).multiplyScalar(this.light.intensity),Ft.call(this,n,i),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1}Ea.prototype=Object.create(Ft.prototype);Ea.prototype.constructor=Ea;Ea.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};Ea.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};function ba(e){Ge.call(this),this.light=e,this.light.updateMatrixWorld();var t=new an({color:e.color,fog:!1}),n=new an({color:e.color,fog:!1,wireframe:!0}),i=new qe;i.addAttribute("position",new Pe(new Float32Array(6*3),3)),this.add(new Ft(i,t)),this.add(new Ft(i,n)),this.update()}ba.prototype=Object.create(Ge.prototype);ba.prototype.constructor=ba;ba.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose(),this.children[1].geometry.dispose(),this.children[1].material.dispose()};ba.prototype.update=function(){var e=new F,t=new F;return function(){var i=this.children[0],r=this.children[1];if(this.light.target){e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld);var a=t.clone().sub(e);i.lookAt(a),r.lookAt(a)}i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var s=this.light.width*.5,o=this.light.height*.5,l=i.geometry.getAttribute("position"),c=l.array;c[0]=s,c[1]=-o,c[2]=0,c[3]=s,c[4]=o,c[5]=0,c[6]=-s,c[7]=o,c[8]=0,c[9]=-s,c[10]=o,c[11]=0,c[12]=-s,c[13]=-o,c[14]=0,c[15]=s,c[16]=-o,c[17]=0,l.needsUpdate=!0}}();function Sa(e,t){Ge.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;var n=new Zi(t);n.rotateY(Math.PI*.5);var i=new an({vertexColors:hr,wireframe:!0}),r=n.getAttribute("position"),a=new Float32Array(r.count*3);n.addAttribute("color",new Pe(a,3)),this.add(new Ft(n,i)),this.update()}Sa.prototype=Object.create(Ge.prototype);Sa.prototype.constructor=Sa;Sa.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};Sa.prototype.update=function(){var e=new F,t=new je,n=new je;return function(){var r=this.children[0],a=r.geometry.getAttribute("color");t.copy(this.light.color).multiplyScalar(this.light.intensity),n.copy(this.light.groundColor).multiplyScalar(this.light.intensity);for(var s=0,o=a.count;s<o;s++){var l=s<o/2?t:n;a.setXYZ(s,l.r,l.g,l.b)}r.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),a.needsUpdate=!0}}();function Hs(e,t,n,i){e=e||10,t=t||10,n=new je(n!==void 0?n:4473924),i=new je(i!==void 0?i:8947848);for(var r=t/2,a=e*2/t,s=[],o=[],l=0,c=0,u=-e;l<=t;l++,u+=a){s.push(-e,0,u,e,0,u),s.push(u,0,-e,u,0,e);var h=l===r?n:i;h.toArray(o,c),c+=3,h.toArray(o,c),c+=3,h.toArray(o,c),c+=3,h.toArray(o,c),c+=3}var f=new qe;f.addAttribute("position",new st(s,3)),f.addAttribute("color",new st(o,3));var p=new At({vertexColors:hr});yt.call(this,f,p)}Hs.prototype=Object.create(yt.prototype);Hs.prototype.constructor=Hs;function oc(e,t,n,i,r,a){e=e||10,t=t||16,n=n||8,i=i||64,r=new je(r!==void 0?r:4473924),a=new je(a!==void 0?a:8947848);var s=[],o=[],l,c,u,h,f,p,v;for(h=0;h<=t;h++)u=h/t*(Math.PI*2),l=Math.sin(u)*e,c=Math.cos(u)*e,s.push(0,0,0),s.push(l,0,c),v=h&1?r:a,o.push(v.r,v.g,v.b),o.push(v.r,v.g,v.b);for(h=0;h<=n;h++)for(v=h&1?r:a,p=e-e/n*h,f=0;f<i;f++)u=f/i*(Math.PI*2),l=Math.sin(u)*p,c=Math.cos(u)*p,s.push(l,0,c),o.push(v.r,v.g,v.b),u=(f+1)/i*(Math.PI*2),l=Math.sin(u)*p,c=Math.cos(u)*p,s.push(l,0,c),o.push(v.r,v.g,v.b);var g=new qe;g.addAttribute("position",new st(s,3)),g.addAttribute("color",new st(o,3));var m=new At({vertexColors:hr});yt.call(this,g,m)}oc.prototype=Object.create(yt.prototype);oc.prototype.constructor=oc;function Vs(e,t,n,i){this.object=e,this.size=t!==void 0?t:1;var r=n!==void 0?n:16776960,a=i!==void 0?i:1,s=0,o=this.object.geometry;o&&o.isGeometry?s=o.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");var l=new qe,c=new st(s*2*3,3);l.addAttribute("position",c),yt.call(this,l,new At({color:r,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}Vs.prototype=Object.create(yt.prototype);Vs.prototype.constructor=Vs;Vs.prototype.update=function(){var e=new F,t=new F,n=new Sn;return function(){this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);for(var r=this.object.matrixWorld,a=this.geometry.attributes.position,s=this.object.geometry,o=s.vertices,l=s.faces,c=0,u=0,h=l.length;u<h;u++){var f=l[u],p=f.normal;e.copy(o[f.a]).add(o[f.b]).add(o[f.c]).divideScalar(3).applyMatrix4(r),t.copy(p).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e),a.setXYZ(c,e.x,e.y,e.z),c=c+1,a.setXYZ(c,t.x,t.y,t.z),c=c+1}return a.needsUpdate=!0,this}}();function wa(e,t){Ge.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,t===void 0&&(t=1);var n=new qe;n.addAttribute("position",new st([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));var i=new At({fog:!1});this.add(new ai(n,i)),n=new qe,n.addAttribute("position",new st([0,0,0,0,0,1],3)),this.add(new ai(n,i)),this.update()}wa.prototype=Object.create(Ge.prototype);wa.prototype.constructor=wa;wa.prototype.dispose=function(){var e=this.children[0],t=this.children[1];e.geometry.dispose(),e.material.dispose(),t.geometry.dispose(),t.material.dispose()};wa.prototype.update=function(){var e=new F,t=new F,n=new F;return function(){e.setFromMatrixPosition(this.light.matrixWorld),t.setFromMatrixPosition(this.light.target.matrixWorld),n.subVectors(t,e);var r=this.children[0],a=this.children[1];r.lookAt(n),r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),a.lookAt(n),a.scale.z=n.length()}}();function ks(e){var t=new qe,n=new At({color:16777215,vertexColors:tu}),i=[],r=[],a={},s=new je(16755200),o=new je(16711680),l=new je(43775),c=new je(16777215),u=new je(3355443);h("n1","n2",s),h("n2","n4",s),h("n4","n3",s),h("n3","n1",s),h("f1","f2",s),h("f2","f4",s),h("f4","f3",s),h("f3","f1",s),h("n1","f1",s),h("n2","f2",s),h("n3","f3",s),h("n4","f4",s),h("p","n1",o),h("p","n2",o),h("p","n3",o),h("p","n4",o),h("u1","u2",l),h("u2","u3",l),h("u3","u1",l),h("c","t",c),h("p","c",u),h("cn1","cn2",u),h("cn3","cn4",u),h("cf1","cf2",u),h("cf3","cf4",u);function h(p,v,g){f(p,g),f(v,g)}function f(p,v){i.push(0,0,0),r.push(v.r,v.g,v.b),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.addAttribute("position",new st(i,3)),t.addAttribute("color",new st(r,3)),yt.call(this,t,n),this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update()}ks.prototype=Object.create(yt.prototype);ks.prototype.constructor=ks;ks.prototype.update=function(){var e,t,n=new F,i=new Yt;function r(a,s,o,l){n.set(s,o,l).unproject(i);var c=t[a];if(c!==void 0)for(var u=e.getAttribute("position"),h=0,f=c.length;h<f;h++)u.setXYZ(c[h],n.x,n.y,n.z)}return function(){e=this.geometry,t=this.pointMap;var s=1,o=1;i.projectionMatrix.copy(this.camera.projectionMatrix),r("c",0,0,-1),r("t",0,0,1),r("n1",-s,-o,-1),r("n2",s,-o,-1),r("n3",-s,o,-1),r("n4",s,o,-1),r("f1",-s,-o,1),r("f2",s,-o,1),r("f3",-s,o,1),r("f4",s,o,1),r("u1",s*.7,o*1.1,-1),r("u2",-s*.7,o*1.1,-1),r("u3",0,o*2,-1),r("cf1",-s,0,1),r("cf2",s,0,1),r("cf3",0,-o,1),r("cf4",0,o,1),r("cn1",-s,0,-1),r("cn2",s,0,-1),r("cn3",0,-o,-1),r("cn4",0,o,-1),e.getAttribute("position").needsUpdate=!0}}();function Ta(e,t){t===void 0&&(t=16776960);var n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new qe;r.setIndex(new Pe(n,1)),r.addAttribute("position",new Pe(i,3)),yt.call(this,r,new At({color:t})),e!==void 0&&this.update(e)}Ta.prototype=Object.create(yt.prototype);Ta.prototype.constructor=Ta;Ta.prototype.update=function(){var e=new Hn;return function(n){if(n&&n.isBox3?e.copy(n):e.setFromObject(n),!e.isEmpty()){var i=e.min,r=e.max,a=this.geometry.attributes.position,s=a.array;s[0]=r.x,s[1]=r.y,s[2]=r.z,s[3]=i.x,s[4]=r.y,s[5]=r.z,s[6]=i.x,s[7]=i.y,s[8]=r.z,s[9]=r.x,s[10]=i.y,s[11]=r.z,s[12]=r.x,s[13]=r.y,s[14]=i.z,s[15]=i.x,s[16]=r.y,s[17]=i.z,s[18]=i.x,s[19]=i.y,s[20]=i.z,s[21]=r.x,s[22]=i.y,s[23]=i.z,a.needsUpdate=!0,this.geometry.computeBoundingSphere()}}}();var dp=new qe;dp.addAttribute("position",new st([0,0,0,0,1,0],3));var pp=new si(0,.5,1,5,1);pp.translate(0,-.5,0);function lr(e,t,n,i,r,a){Ge.call(this),i===void 0&&(i=16776960),n===void 0&&(n=1),r===void 0&&(r=.2*n),a===void 0&&(a=.2*r),this.position.copy(t),this.line=new ai(dp,new At({color:i})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ft(pp,new an({color:i})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}lr.prototype=Object.create(Ge.prototype);lr.prototype.constructor=lr;lr.prototype.setDirection=function(){var e=new F,t;return function(i){i.y>.99999?this.quaternion.set(0,0,0,1):i.y<-.99999?this.quaternion.set(1,0,0,0):(e.set(i.z,0,-i.x).normalize(),t=Math.acos(i.y),this.quaternion.setFromAxisAngle(e,t))}}();lr.prototype.setLength=function(e,t,n){t===void 0&&(t=.2*e),n===void 0&&(n=.2*t),this.line.scale.set(1,Math.max(0,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()};lr.prototype.setColor=function(e){this.line.material.color.copy(e),this.cone.material.color.copy(e)};function cc(e){e=e||1;var t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new qe;i.addAttribute("position",new st(t,3)),i.addAttribute("color",new st(n,3));var r=new At({vertexColors:hr});yt.call(this,i,r)}cc.prototype=Object.create(yt.prototype);cc.prototype.constructor=cc;var Cu=function(){var e=new F,t=new r,n=new r,i=new r;function r(){}return r.prototype.init=function(a,s,o,l){this.c0=a,this.c1=o,this.c2=-3*a+3*s-2*o-l,this.c3=2*a-2*s+o+l},r.prototype.initNonuniformCatmullRom=function(a,s,o,l,c,u,h){var f=(s-a)/c-(o-a)/(c+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+h)+(l-o)/h;f*=u,p*=u,this.init(s,o,f,p)},r.prototype.initCatmullRom=function(a,s,o,l,c){this.init(s,o,c*(o-a),c*(l-s))},r.prototype.calc=function(a){var s=a*a,o=s*a;return this.c0+this.c1*a+this.c2*s+this.c3*o},qt.create(function(a){this.points=a||[],this.closed=!1},function(a){var s=this.points,o,l,c,u;u=s.length,u<2&&console.log("duh, you need at least 2 points"),o=(u-(this.closed?0:1))*a,l=Math.floor(o),c=o-l,this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s.length)+1)*s.length:c===0&&l===u-1&&(l=u-2,c=1);var h,f,p,v;if(this.closed||l>0?h=s[(l-1)%u]:(e.subVectors(s[0],s[1]).add(s[0]),h=e),f=s[l%u],p=s[(l+1)%u],this.closed||l+2<u?v=s[(l+2)%u]:(e.subVectors(s[u-1],s[u-2]).add(s[u-1]),v=e),this.type===void 0||this.type==="centripetal"||this.type==="chordal"){var g=this.type==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(f),g),d=Math.pow(f.distanceToSquared(p),g),x=Math.pow(p.distanceToSquared(v),g);d<1e-4&&(d=1),m<1e-4&&(m=d),x<1e-4&&(x=d),t.initNonuniformCatmullRom(h.x,f.x,p.x,v.x,m,d,x),n.initNonuniformCatmullRom(h.y,f.y,p.y,v.y,m,d,x),i.initNonuniformCatmullRom(h.z,f.z,p.z,v.z,m,d,x)}else if(this.type==="catmullrom"){var _=this.tension!==void 0?this.tension:.5;t.initCatmullRom(h.x,f.x,p.x,v.x,_),n.initCatmullRom(h.y,f.y,p.y,v.y,_),i.initCatmullRom(h.z,f.z,p.z,v.z,_)}var y=new F(t.calc(c),n.calc(c),i.calc(c));return y})}(),$E=qt.create(function(e){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),this.points=e===void 0?[]:e},function(e){var t=this.points,n=(t.length-1)*e,i=Math.floor(n),r=n-i,a=t[i==0?i:i-1],s=t[i],o=t[i>t.length-2?t.length-1:i+1],l=t[i>t.length-3?t.length-1:i+2],c=Zs.interpolate;return new F(c(a.x,s.x,o.x,l.x,r),c(a.y,s.y,o.y,l.y,r),c(a.z,s.z,o.z,l.z,r))}),ZE=qt.create(function(e,t,n,i){this.v0=e,this.v1=t,this.v2=n,this.v3=i},function(e){var t=Bt.b3;return new F(t(e,this.v0.x,this.v1.x,this.v2.x,this.v3.x),t(e,this.v0.y,this.v1.y,this.v2.y,this.v3.y),t(e,this.v0.z,this.v1.z,this.v2.z,this.v3.z))}),KE=qt.create(function(e,t,n){this.v0=e,this.v1=t,this.v2=n},function(e){var t=Bt.b2;return new F(t(e,this.v0.x,this.v1.x,this.v2.x),t(e,this.v0.y,this.v1.y,this.v2.y),t(e,this.v0.z,this.v1.z,this.v2.z))}),JE=qt.create(function(e,t){this.v1=e,this.v2=t},function(e){if(e===1)return this.v2.clone();var t=new F;return t.subVectors(this.v2,this.v1),t.multiplyScalar(e),t.add(this.v1),t});function lc(e,t,n,i,r,a){oi.call(this,e,t,n,n,i,r,a)}lc.prototype=Object.create(oi.prototype);lc.prototype.constructor=lc;var QE={createMultiMaterialObject:function(e,t){for(var n=new vs,i=0,r=t.length;i<r;i++)n.add(new Ft(e,t[i]));return n},detach:function(e,t,n){e.applyMatrix(t.matrixWorld),t.remove(e),n.add(e)},attach:function(e,t,n){var i=new $e;i.getInverse(n.matrixWorld),e.applyMatrix(i),t.remove(e),n.add(e)}};function eb(e,t,n,i,r,a,s){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new gn(e,t,n,r,a,s)}var tb=0,nb=1;function ib(e){return console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial."),new Fs(e)}function rb(e,t){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new $r(e,t)}function ab(e){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new ps(e)}function sb(e,t){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new $r(e,t)}function ob(e){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Fn(e)}function cb(e){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Fn(e)}function lb(e){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Fn(e)}function ub(e,t,n){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new F(e,t,n)}function hb(e,t){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),new Pe(e,t).setDynamic(!0)}function fb(e,t){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new cs(e,t)}function db(e,t){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new ls(e,t)}function pb(e,t){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new us(e,t)}function mb(e,t){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new hs(e,t)}function vb(e,t){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new ii(e,t)}function gb(e,t){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new fs(e,t)}function _b(e,t){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new ri(e,t)}function xb(e,t){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new st(e,t)}function yb(e,t){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new ds(e,t)}function mp(e){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),Cu.call(this,e),this.type="catmullrom",this.closed=!0}mp.prototype=Object.create(Cu.prototype);function Mb(e,t){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Ta(e,t)}function Eb(e,t){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new yt(new la(e.geometry),new At({color:t!==void 0?t:16777215}))}Hs.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};function bb(e,t){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new yt(new Kr(e.geometry),new At({color:t!==void 0?t:16777215}))}function Sb(e){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Tn(e)}Object.assign(ss.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(Hn.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Bi.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Je.random16=function(){return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),Math.random()};Object.assign(Sn.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(e){return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(e)},applyToBuffer:function(e,t,n){return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(e)}});Object.assign($e.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){var e;return function(){return e===void 0&&(e=new F),console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),e.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),e.applyProjection(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(e){return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(e)},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(e,t,n){return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(e)}});fn.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};Ct.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(Ei.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(Gi.prototype,{extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new wn(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ca(this,e)}});Object.assign(F.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)}});Ke.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")};Object.assign(Ge.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)}});Object.defineProperties(Ge.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(ms.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});kt.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(Rt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(Pe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}}});Object.assign(qe.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(qe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(sc.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(rt.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE."+this.type+": .wrapRGB has been removed."),new je}}});Object.defineProperties(Nn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Kt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});bn.prototype=Object.assign(Object.create({constructor:bn,apply:function(e){console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."),Object.assign(e,this)}}),bn.prototype);Object.assign(gu.prototype,{supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});Object.defineProperties(gu.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),this.shadowMap.cullFace=e}}});Object.defineProperties(sp.prototype,{cullFace:{get:function(){return this.renderReverseSided?Kl:Qa},set:function(e){var t=e!==Qa;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+t+"."),this.renderReverseSided=t}}});Object.defineProperties(Ua.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});va.prototype.load=function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var t=this,n=new Au;return n.load(e,function(i){t.setBuffer(i)}),this};Ru.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};var wb={merge:function(e,t,n){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var i;t.isMesh&&(t.matrixAutoUpdate&&t.updateMatrix(),i=t.matrix,t=t.geometry),e.merge(t,i,n)},center:function(e){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),e.center()}},Tb={crossOrigin:void 0,loadTexture:function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var r=new xc;r.setCrossOrigin(this.crossOrigin);var a=r.load(e,n,void 0,i);return t&&(a.mapping=t),a},loadTextureCube:function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var r=new yu;r.setCrossOrigin(this.crossOrigin);var a=r.load(e,n,void 0,i);return t&&(a.mapping=t),a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};function Ab(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),this.projectVector=function(e,t){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(t)},this.unprojectVector=function(e,t){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(t)},this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}}function Rb(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),this.clear=function(){},this.render=function(){},this.setClearColor=function(){},this.setSize=function(){}}const Lb=Object.freeze(Object.defineProperty({__proto__:null,AddEquation:su,AddOperation:wd,AdditiveBlending:nu,AlphaFormat:Nd,AlwaysDepth:_d,AmbientLight:Ko,AnimationClip:dn,AnimationMixer:Lu,AnimationObjectGroup:Fl,AnimationUtils:Wt,ArcCurve:lc,ArrowHelper:lr,Audio:va,AudioAnalyser:Ru,AudioContext:Tu,AudioListener:Dl,AudioLoader:Au,AxisHelper:cc,BackSide:_i,BasicDepthPacking:Zd,BasicShadowMap:qx,BinaryTextureLoader:xu,BlendingMode:ad,Bone:Ho,BooleanKeyframeTrack:nc,BoundingBoxHelper:Mb,Box2:ss,Box3:Hn,BoxBufferGeometry:Yi,BoxGeometry:ha,BoxHelper:Ta,BufferAttribute:Pe,BufferGeometry:qe,BufferGeometryLoader:Mu,ByteType:Cd,Cache:Pl,Camera:Yt,CameraHelper:ks,CanvasRenderer:Rb,CanvasTexture:Wo,CatmullRomCurve3:Cu,CineonToneMapping:Rd,CircleBufferGeometry:ua,CircleGeometry:Is,ClampToEdgeWrapping:pn,Clock:Gl,ClosedSplineCurve3:mp,Color:je,ColorKeyframeTrack:ic,CompressedTexture:Zr,CompressedTextureLoader:lp,ConeBufferGeometry:Ds,ConeGeometry:Us,CubeCamera:rc,CubeGeometry:ha,CubeReflectionMapping:pc,CubeRefractionMapping:Fo,CubeTexture:xi,CubeTextureLoader:yu,CubeUVReflectionMapping:mc,CubeUVRefractionMapping:vc,CubicBezierCurve:sr,CubicBezierCurve3:ZE,CubicInterpolant:Jo,CullFaceBack:Qa,CullFaceFront:Kl,CullFaceFrontBack:Xx,CullFaceNone:nd,Curve:qt,CurvePath:Bs,CurveUtils:Zs,CustomBlending:au,CylinderBufferGeometry:si,CylinderGeometry:Ji,Cylindrical:Vl,DataTexture:Xi,DataTextureLoader:qE,DefaultLoadingManager:_n,DepthFormat:Oi,DepthStencilFormat:kr,DepthTexture:gs,DirectionalLight:Zo,DirectionalLightHelper:wa,DirectionalLightShadow:$o,DiscreteInterpolant:Qo,DodecahedronBufferGeometry:ta,DodecahedronGeometry:Es,DoubleSide:Ca,DstAlphaFactor:fd,DstColorFactor:pd,DynamicBufferAttribute:hb,EdgesGeometry:la,EdgesHelper:Eb,EllipseCurve:oi,EqualDepth:yd,EquirectangularReflectionMapping:uu,EquirectangularRefractionMapping:No,Euler:bi,EventDispatcher:bn,ExtrudeGeometry:wn,Face3:gn,Face4:eb,FaceColors:tu,FaceNormalsHelper:Vs,FileLoader:Tn,FlatShading:Ql,Float32Attribute:xb,Float32BufferAttribute:st,Float64Attribute:yb,Float64BufferAttribute:ds,FloatType:Hr,Fog:jr,FogExp2:qr,Font:wu,FontLoader:hp,FrontFaceDirectionCCW:Yx,FrontFaceDirectionCW:id,FrontSide:Nr,Frustum:os,GammaEncoding:mu,Geometry:Ke,GeometryIdCount:vu,GeometryUtils:wb,GreaterDepth:Ed,GreaterEqualDepth:Md,GridHelper:Hs,Group:vs,HalfFloatType:Bo,HemisphereLight:Xo,HemisphereLightHelper:Sa,IcosahedronBufferGeometry:ea,IcosahedronGeometry:Ms,ImageLoader:$s,ImageUtils:Tb,ImmediateRenderObject:zs,InstancedBufferAttribute:xa,InstancedBufferGeometry:cr,InstancedInterleavedBuffer:_a,Int16Attribute:mb,Int16BufferAttribute:hs,Int32Attribute:gb,Int32BufferAttribute:fs,Int8Attribute:fb,Int8BufferAttribute:cs,IntType:Ud,InterleavedBuffer:ga,InterleavedBufferAttribute:Ol,Interpolant:rn,InterpolateDiscrete:is,InterpolateLinear:ja,InterpolateSmooth:Po,JSONLoader:Eu,KeyframeTrack:rr,LOD:ms,LatheBufferGeometry:sa,LatheGeometry:Ps,Layers:zo,LensFlare:Cl,LessDepth:xd,LessEqualDepth:Io,Light:Rt,LightShadow:fr,Line:ai,Line3:Bi,LineBasicMaterial:At,LineCurve:kn,LineCurve3:JE,LineDashedMaterial:ir,LinePieces:nb,LineSegments:yt,LineStrip:tb,LinearEncoding:as,LinearFilter:nn,LinearInterpolant:Ns,LinearMipMapLinearFilter:js,LinearMipMapNearestFilter:fu,LinearToneMapping:lu,Loader:zi,LoadingManager:_u,LogLuvEncoding:$x,LoopOnce:Gd,LoopPingPong:Vd,LoopRepeat:Hd,LuminanceAlphaFormat:Bd,LuminanceFormat:Od,MOUSE:Wx,Material:rt,MaterialLoader:yc,Math:Je,Matrix3:Sn,Matrix4:$e,MaxEquation:_l,Mesh:Ft,MeshBasicMaterial:an,MeshDepthMaterial:Mi,MeshFaceMaterial:ib,MeshLambertMaterial:nr,MeshNormalMaterial:tr,MeshPhongMaterial:Nn,MeshPhysicalMaterial:Qi,MeshStandardMaterial:Vn,MeshToonMaterial:er,MinEquation:gl,MirroredRepeatWrapping:ki,MixOperation:Sd,MorphBlendMesh:zt,MultiMaterial:Fs,MultiplyBlending:ru,MultiplyOperation:qs,NearestFilter:mn,NearestMipMapLinearFilter:_c,NearestMipMapNearestFilter:gc,NeverDepth:gd,NoBlending:es,NoColors:fc,NoToneMapping:Co,NormalBlending:Pa,NotEqualDepth:bd,NumberKeyframeTrack:ma,Object3D:Ge,ObjectLoader:up,OctahedronBufferGeometry:Zi,OctahedronGeometry:ys,OneFactor:ld,OneMinusDstAlphaFactor:dd,OneMinusDstColorFactor:md,OneMinusSrcAlphaFactor:cu,OneMinusSrcColorFactor:hd,OrthographicCamera:Yr,PCFShadowMap:Jl,PCFSoftShadowMap:rd,ParametricBufferGeometry:Jr,ParametricGeometry:_s,Particle:ab,ParticleBasicMaterial:cb,ParticleSystem:sb,ParticleSystemMaterial:lb,Path:Ks,PerspectiveCamera:kt,Plane:fn,PlaneBufferGeometry:qi,PlaneGeometry:Cs,PointCloud:rb,PointCloudMaterial:ob,PointLight:jo,PointLightHelper:Ea,Points:$r,PointsMaterial:Fn,PolarGridHelper:oc,PolyhedronBufferGeometry:sn,PolyhedronGeometry:bs,PositionalAudio:Il,Projector:Ab,PropertyBinding:Tt,PropertyMixer:ac,QuadraticBezierCurve:or,QuadraticBezierCurve3:KE,Quaternion:Ct,QuaternionKeyframeTrack:Os,QuaternionLinearInterpolant:ec,REVISION:td,RGBADepthPacking:Kd,RGBAFormat:Gn,RGBA_PVRTC_2BPPV1_Format:Rl,RGBA_PVRTC_4BPPV1_Format:Al,RGBA_S3TC_DXT1_Format:El,RGBA_S3TC_DXT3_Format:bl,RGBA_S3TC_DXT5_Format:Sl,RGBDEncoding:$d,RGBEEncoding:Yd,RGBEFormat:jx,RGBFormat:Vr,RGBM16Encoding:jd,RGBM7Encoding:qd,RGB_ETC1_Format:zd,RGB_PVRTC_2BPPV1_Format:Tl,RGB_PVRTC_4BPPV1_Format:wl,RGB_S3TC_DXT1_Format:Ml,RawShaderMaterial:da,Ray:Ei,Raycaster:Bl,RectAreaLight:Ul,RectAreaLightHelper:ba,ReinhardToneMapping:Td,RepeatWrapping:ti,ReverseSubtractEquation:od,RingBufferGeometry:aa,RingGeometry:Ls,Scene:ji,SceneUtils:QE,ShaderChunk:ht,ShaderLib:Xr,ShaderMaterial:Kt,ShadowMaterial:fa,Shape:Gi,ShapeBufferGeometry:oa,ShapeGeometry:ca,ShapePath:Su,ShapeUtils:Bt,ShortType:Pd,Skeleton:Go,SkeletonHelper:Ma,SkinnedMesh:Vo,SmoothShading:eu,Sphere:Xt,SphereBufferGeometry:Ki,SphereGeometry:Rs,Spherical:Hl,SphericalReflectionMapping:hu,Spline:jE,SplineCurve:ar,SplineCurve3:$E,SpotLight:qo,SpotLightHelper:ya,SpotLightShadow:Yo,Sprite:ps,SpriteMaterial:$i,SrcAlphaFactor:ou,SrcAlphaSaturateFactor:vd,SrcColorFactor:ud,StereoCamera:fp,StringKeyframeTrack:tc,SubtractEquation:sd,SubtractiveBlending:iu,TetrahedronBufferGeometry:Qr,TetrahedronGeometry:xs,TextGeometry:As,Texture:gt,TextureFilter:yl,TextureLoader:xc,TextureMapping:Ld,TextureWrapping:xl,TorusBufferGeometry:ra,TorusGeometry:Ts,TorusKnotBufferGeometry:ia,TorusKnotGeometry:ws,Triangle:En,TriangleFanDrawMode:Wd,TriangleStripDrawMode:kd,TrianglesDrawMode:pu,TubeBufferGeometry:na,TubeGeometry:Ss,UVMapping:dc,Uint16Attribute:vb,Uint16BufferAttribute:ii,Uint32Attribute:_b,Uint32BufferAttribute:ri,Uint8Attribute:db,Uint8BufferAttribute:ls,Uint8ClampedAttribute:pb,Uint8ClampedBufferAttribute:us,Uncharted2ToneMapping:Ad,Uniform:sc,UniformsLib:et,UniformsUtils:en,UnsignedByteType:Oo,UnsignedInt248Type:ns,UnsignedIntType:du,UnsignedShort4444Type:Dd,UnsignedShort5551Type:Id,UnsignedShort565Type:Fd,UnsignedShortType:ts,Vector2:Ie,Vector3:F,Vector4:pt,VectorKeyframeTrack:pa,Vertex:ub,VertexColors:hr,VertexNormalsHelper:Gs,VideoTexture:ko,WebGLRenderTarget:Ua,WebGLRenderTargetCube:Wr,WebGLRenderer:gu,WireframeGeometry:Kr,WireframeHelper:bb,WrapAroundEnding:rs,XHRLoader:Sb,ZeroCurvatureEnding:Wi,ZeroFactor:cd,ZeroSlopeEnding:Ui,sRGBEncoding:Xd},Symbol.toStringTag,{value:"Module"})),Cb=kx(Lb);var Pb=Kh&&Kh.__extends||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)},ut=Cb,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},sf={type:"change"},al={type:"start"},sl={type:"end"},of=1e-6,Ub=function(e){Pb(t,e);function t(n,i,r){var a=e.call(this)||this;return a.object=n,a.domElement=i!==void 0?i:document,a.window=r!==void 0?r:window,a.enabled=!0,a.target=new ut.Vector3,a.minDistance=0,a.maxDistance=1/0,a.minZoom=0,a.maxZoom=1/0,a.minPolarAngle=0,a.maxPolarAngle=Math.PI,a.minAzimuthAngle=-1/0,a.maxAzimuthAngle=1/0,a.enableDamping=!1,a.dampingFactor=.25,a.enableZoom=!0,a.zoomSpeed=1,a.enableRotate=!0,a.rotateSpeed=1,a.enablePan=!0,a.keyPanSpeed=7,a.autoRotate=!1,a.autoRotateSpeed=2,a.enableKeys=!0,a.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},a.mouseButtons={ORBIT:ut.MOUSE.LEFT,ZOOM:ut.MOUSE.MIDDLE,PAN:ut.MOUSE.RIGHT},a.target0=a.target.clone(),a.position0=a.object.position.clone(),a.zoom0=a.object.zoom,a.updateOffset=new ut.Vector3,a.updateQuat=new ut.Quaternion().setFromUnitVectors(n.up,new ut.Vector3(0,1,0)),a.updateQuatInverse=a.updateQuat.clone().inverse(),a.updateLastPosition=new ut.Vector3,a.updateLastQuaternion=new ut.Quaternion,a.state=bt.NONE,a.scale=1,a.spherical=new ut.Spherical,a.sphericalDelta=new ut.Spherical,a.panOffset=new ut.Vector3,a.zoomChanged=!1,a.rotateStart=new ut.Vector2,a.rotateEnd=new ut.Vector2,a.rotateDelta=new ut.Vector2,a.panStart=new ut.Vector2,a.panEnd=new ut.Vector2,a.panDelta=new ut.Vector2,a.dollyStart=new ut.Vector2,a.dollyEnd=new ut.Vector2,a.dollyDelta=new ut.Vector2,a.panLeftV=new ut.Vector3,a.panUpV=new ut.Vector3,a.panInternalOffset=new ut.Vector3,a.onMouseDown=function(s){if(a.enabled!==!1){if(s.preventDefault(),s.button===a.mouseButtons.ORBIT){if(a.enableRotate===!1)return;a.rotateStart.set(s.clientX,s.clientY),a.state=bt.ROTATE}else if(s.button===a.mouseButtons.ZOOM){if(a.enableZoom===!1)return;a.dollyStart.set(s.clientX,s.clientY),a.state=bt.DOLLY}else if(s.button===a.mouseButtons.PAN){if(a.enablePan===!1)return;a.panStart.set(s.clientX,s.clientY),a.state=bt.PAN}a.state!==bt.NONE&&(document.addEventListener("mousemove",a.onMouseMove,!1),document.addEventListener("mouseup",a.onMouseUp,!1),a.dispatchEvent(al))}},a.onMouseMove=function(s){if(a.enabled!==!1){if(s.preventDefault(),a.state===bt.ROTATE){if(a.enableRotate===!1)return;a.rotateEnd.set(s.clientX,s.clientY),a.rotateDelta.subVectors(a.rotateEnd,a.rotateStart);var o=a.domElement===document?a.domElement.body:a.domElement;a.rotateLeft(2*Math.PI*a.rotateDelta.x/o.clientWidth*a.rotateSpeed),a.rotateUp(2*Math.PI*a.rotateDelta.y/o.clientHeight*a.rotateSpeed),a.rotateStart.copy(a.rotateEnd),a.update()}else if(a.state===bt.DOLLY){if(a.enableZoom===!1)return;a.dollyEnd.set(s.clientX,s.clientY),a.dollyDelta.subVectors(a.dollyEnd,a.dollyStart),a.dollyDelta.y>0?a.dollyIn(a.getZoomScale()):a.dollyDelta.y<0&&a.dollyOut(a.getZoomScale()),a.dollyStart.copy(a.dollyEnd),a.update()}else if(a.state===bt.PAN){if(a.enablePan===!1)return;a.panEnd.set(s.clientX,s.clientY),a.panDelta.subVectors(a.panEnd,a.panStart),a.pan(a.panDelta.x,a.panDelta.y),a.panStart.copy(a.panEnd),a.update()}}},a.onMouseUp=function(s){a.enabled!==!1&&(document.removeEventListener("mousemove",a.onMouseMove,!1),document.removeEventListener("mouseup",a.onMouseUp,!1),a.dispatchEvent(sl),a.state=bt.NONE)},a.onMouseWheel=function(s){a.enabled===!1||a.enableZoom===!1||a.state!==bt.NONE&&a.state!==bt.ROTATE||(s.preventDefault(),s.stopPropagation(),s.deltaY<0?a.dollyOut(a.getZoomScale()):s.deltaY>0&&a.dollyIn(a.getZoomScale()),a.update(),a.dispatchEvent(al),a.dispatchEvent(sl))},a.onKeyDown=function(s){if(!(a.enabled===!1||a.enableKeys===!1||a.enablePan===!1))switch(s.keyCode){case a.keys.UP:a.pan(0,a.keyPanSpeed),a.update();break;case a.keys.BOTTOM:a.pan(0,-a.keyPanSpeed),a.update();break;case a.keys.LEFT:a.pan(a.keyPanSpeed,0),a.update();break;case a.keys.RIGHT:a.pan(-a.keyPanSpeed,0),a.update();break}},a.onTouchStart=function(s){if(a.enabled!==!1){switch(s.touches.length){case 1:{if(a.enableRotate===!1)return;a.rotateStart.set(s.touches[0].pageX,s.touches[0].pageY),a.state=bt.TOUCH_ROTATE}break;case 2:{if(a.enableZoom===!1)return;var o=s.touches[0].pageX-s.touches[1].pageX,l=s.touches[0].pageY-s.touches[1].pageY,c=Math.sqrt(o*o+l*l);a.dollyStart.set(0,c),a.state=bt.TOUCH_DOLLY}break;case 3:{if(a.enablePan===!1)return;a.panStart.set(s.touches[0].pageX,s.touches[0].pageY),a.state=bt.TOUCH_PAN}break;default:a.state=bt.NONE}a.state!==bt.NONE&&a.dispatchEvent(al)}},a.onTouchMove=function(s){if(a.enabled!==!1)switch(s.preventDefault(),s.stopPropagation(),s.touches.length){case 1:{if(a.enableRotate===!1||a.state!==bt.TOUCH_ROTATE)return;a.rotateEnd.set(s.touches[0].pageX,s.touches[0].pageY),a.rotateDelta.subVectors(a.rotateEnd,a.rotateStart);var o=a.domElement===document?a.domElement.body:a.domElement;a.rotateLeft(2*Math.PI*a.rotateDelta.x/o.clientWidth*a.rotateSpeed),a.rotateUp(2*Math.PI*a.rotateDelta.y/o.clientHeight*a.rotateSpeed),a.rotateStart.copy(a.rotateEnd),a.update()}break;case 2:{if(a.enableZoom===!1||a.state!==bt.TOUCH_DOLLY)return;var l=s.touches[0].pageX-s.touches[1].pageX,c=s.touches[0].pageY-s.touches[1].pageY,u=Math.sqrt(l*l+c*c);a.dollyEnd.set(0,u),a.dollyDelta.subVectors(a.dollyEnd,a.dollyStart),a.dollyDelta.y>0?a.dollyOut(a.getZoomScale()):a.dollyDelta.y<0&&a.dollyIn(a.getZoomScale()),a.dollyStart.copy(a.dollyEnd),a.update()}break;case 3:{if(a.enablePan===!1||a.state!==bt.TOUCH_PAN)return;a.panEnd.set(s.touches[0].pageX,s.touches[0].pageY),a.panDelta.subVectors(a.panEnd,a.panStart),a.pan(a.panDelta.x,a.panDelta.y),a.panStart.copy(a.panEnd),a.update()}break;default:a.state=bt.NONE}},a.onTouchEnd=function(s){a.enabled!==!1&&(a.dispatchEvent(sl),a.state=bt.NONE)},a.onContextMenu=function(s){s.preventDefault()},a.domElement.addEventListener("contextmenu",a.onContextMenu,!1),a.domElement.addEventListener("mousedown",a.onMouseDown,!1),a.domElement.addEventListener("wheel",a.onMouseWheel,!1),a.domElement.addEventListener("touchstart",a.onTouchStart,!1),a.domElement.addEventListener("touchend",a.onTouchEnd,!1),a.domElement.addEventListener("touchmove",a.onTouchMove,!1),a.window.addEventListener("keydown",a.onKeyDown,!1),a.update(),a}return t.prototype.update=function(){var n=this.object.position;return this.updateOffset.copy(n).sub(this.target),this.updateOffset.applyQuaternion(this.updateQuat),this.spherical.setFromVector3(this.updateOffset),this.autoRotate&&this.state===bt.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.target.add(this.panOffset),this.updateOffset.setFromSpherical(this.spherical),this.updateOffset.applyQuaternion(this.updateQuatInverse),n.copy(this.target).add(this.updateOffset),this.object.lookAt(this.target),this.enableDamping===!0?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor):this.sphericalDelta.set(0,0,0),this.scale=1,this.panOffset.set(0,0,0),this.zoomChanged||this.updateLastPosition.distanceToSquared(this.object.position)>of||8*(1-this.updateLastQuaternion.dot(this.object.quaternion))>of?(this.dispatchEvent(sf),this.updateLastPosition.copy(this.object.position),this.updateLastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0):!1},t.prototype.panLeft=function(n,i){this.panLeftV.setFromMatrixColumn(i,0),this.panLeftV.multiplyScalar(-n),this.panOffset.add(this.panLeftV)},t.prototype.panUp=function(n,i){this.panUpV.setFromMatrixColumn(i,1),this.panUpV.multiplyScalar(n),this.panOffset.add(this.panUpV)},t.prototype.pan=function(n,i){var r=this.domElement===document?this.domElement.body:this.domElement;if(this.object instanceof ut.PerspectiveCamera){var a=this.object.position;this.panInternalOffset.copy(a).sub(this.target);var s=this.panInternalOffset.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*n*s/r.clientHeight,this.object.matrix),this.panUp(2*i*s/r.clientHeight,this.object.matrix)}else this.object instanceof ut.OrthographicCamera?(this.panLeft(n*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this.panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)},t.prototype.dollyIn=function(n){this.object instanceof ut.PerspectiveCamera?this.scale/=n:this.object instanceof ut.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*n)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},t.prototype.dollyOut=function(n){this.object instanceof ut.PerspectiveCamera?this.scale*=n:this.object instanceof ut.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/n)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},t.prototype.getAutoRotationAngle=function(){return 2*Math.PI/60/60*this.autoRotateSpeed},t.prototype.getZoomScale=function(){return Math.pow(.95,this.zoomSpeed)},t.prototype.rotateLeft=function(n){this.sphericalDelta.theta-=n},t.prototype.rotateUp=function(n){this.sphericalDelta.phi-=n},t.prototype.getPolarAngle=function(){return this.spherical.phi},t.prototype.getAzimuthalAngle=function(){return this.spherical.theta},t.prototype.dispose=function(){this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),this.domElement.removeEventListener("touchstart",this.onTouchStart,!1),this.domElement.removeEventListener("touchend",this.onTouchEnd,!1),this.domElement.removeEventListener("touchmove",this.onTouchMove,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.window.removeEventListener("keydown",this.onKeyDown,!1)},t.prototype.reset=function(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sf),this.update(),this.state=bt.NONE},Object.defineProperty(t.prototype,"center",{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"noZoom",{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(n){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!n},enumerable:!0,configurable:!0}),t}(ut.EventDispatcher),Db=Ub;function Ib({objectToRender:e,renderer:t,scene:n,camera:i}){const r=()=>{requestAnimationFrame(r),e.rotation.x+=.01,e.rotation.y+=.005,e.rotation.z+=.01,t.render(n,i)};r()}const Fb=({rendererType:e,canvas:t})=>{let n;switch(e){case"webGL":n=new vl({canvas:t});break;case"webGL1Renderer":n=new qf({canvas:t});break;default:n=new vl({canvas:t})}return n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n},Nb=(e,t)=>{t.map(n=>{e.add(n)})},Ob=({geometry:e,material:t})=>new In(e,t);function Bb({cameraType:e,verticalFieldOfView:t,frustum:n}){switch(e){case"Perspective":const i=new hn(t,window.innerWidth/window.innerHeight,n.NEAR,n.FAR);return i.position.setZ(-10),i;default:console.log(`Unknown camera value: ${e}`)}}function zb(e){const t=new jf(.25,2,2),n=new Kf({color:16777215}),i=new In(t,n),[r,a,s]=Array(3).fill(1).map(()=>Rm.randFloatSpread(100));i.position.set(r,a,s),e.add(i)}const Gb=(e,t)=>{const n=new Qf().load(e);t.background=n},Hb="/assets/space-1f50c986.jpg",Vb=({image:e,scene:t,geometry:n,material:i,values:r})=>{const a=new Qf().load(e),[s,o,l]=r,c=new In(new n(s,o,l),new i({map:a}));return t.add(c),c.position.z=30,c.position.setX(-10),c},kb=(e,t)=>{const n=document.body.getBoundingClientRect().top;e.map(i=>{i.objectToZoom.rotation.x+=.05,i.objectToZoom.rotation.y+=.05,i.objectToZoom.rotation.z+=i.objectToZoom.z?.05:0}),t.position.x=n*-2e-4,t.position.y=n*-2e-4,t.position.z=n*-.01};(function(){const t=document.getElementById("bgSrPortfolio")||document.createElement("canvas"),n=Fb({rendererType:"webGL",canvas:t});let i=new Fx(1,.3,16,100);const r=new Kf({color:16737095}),a=new Hx(16777215);a.position.set(.5,.5,.5);let s=[a];const o=new Vx(16777215),l=Ob({geometry:i,material:r});s.push(l,o);const c=new Ix,u=Bb({cameraType:"Perspective",verticalFieldOfView:75,frustum:{FAR:.1,NEAR:1e3}}),h=new Db(u,n.domElement);Array(400).fill(1).forEach(()=>zb(c)),s.push(h),Nb(c,s),Gb(Hb,c);let f=Vb({image:"fullmoon.png",scene:c,geometry:jf,material:ql,values:[4,32,32]});Ib({objectToRender:l,renderer:n,scene:c,camera:u}),document.body.onscroll=()=>{kb([{objectToZoom:l,x:!0,y:!0,z:!0},{objectToZoom:f,x:!0,y:!0,z:!1}],u)}})();
