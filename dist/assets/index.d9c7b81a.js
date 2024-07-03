var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,i=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&l(e,r,t[r]);return e};import{R as s,C as u,l as c,u as f,a as m,b as p,c as g,d,e as v,f as h,B as E,g as b,h as y,i as x}from"./vendor.c2520cb4.js";function S(e){window.navigator.clipboard.writeText(e).then((()=>{console.log("Copied to clipboard")})).catch((e=>{console.log("Failed to copy")}))}const C=s.createContext();function w(){return u.exports.useContext(C)}function _({children:e}){const[t,r]=u.exports.useState(),[n,o]=u.exports.useState((()=>{let e=localStorage.getItem("username");return e?JSON.parse(e):null}));u.exports.useEffect((()=>{let e=localStorage.getItem("uid");if(e)r(e);else{let e=function(e=10){const t="1234567890qwertyuiopasdfghjklzxcvbnm";return new Array(e).fill("_").map((e=>{let r=t[Math.floor(Math.random()*t.length)];return Math.random()<.5&&(r=r.toUpperCase()),r})).join("")}();localStorage.setItem("uid",e),r(e)}if(!n){let e;for(;null==e||""===e;)e=prompt("Choose a username");localStorage.setItem("username",JSON.stringify(e)),o(e)}}),[]),u.exports.useEffect((()=>{n&&localStorage.setItem("username",JSON.stringify(n))}),[n]);const a={id:t,username:n,updateUsername:function(e){o(e)}};return s.createElement(C.Provider,{value:a},e)}const k=s.createContext();function N(){return u.exports.useContext(k)}function I({children:e}){const{username:t,id:r}=w(),[n,o]=u.exports.useState();return u.exports.useEffect((()=>{if(!r)return;const e=c("https://chess-server.jjroley.repl.co",{query:{id:r}});return o(e),()=>e.close()}),[r]),u.exports.useEffect((()=>{n&&t&&n.emit("username",t)}),[n,t]),u.exports.useEffect((()=>{n&&(n.on("disconnect",(()=>{console.error("socket disconnected"),alert("You have been disconnected from the server. Refresh the page.")})),n.on("connect_error",(e=>{console.log("Connection error due to "+e)})))}),[n]),s.createElement(k.Provider,{value:n},e)}var A=function(e){var t="b",r="w",n=-1,o="p",a="b",l="k",i="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",s=["1-0","0-1","1/2-1/2","*"],u={b:[16,32,17,15],w:[-16,-32,-17,-15]},c={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},f=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],m=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],p={p:0,n:1,b:2,r:3,q:4,k:5},g={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},d={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},v={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},h={w:[{square:v.a1,flag:d.QSIDE_CASTLE},{square:v.h1,flag:d.KSIDE_CASTLE}],b:[{square:v.a8,flag:d.QSIDE_CASTLE},{square:v.h8,flag:d.KSIDE_CASTLE}]},E=new Array(128),b={w:n,b:n},y=r,x={w:0,b:0},S=n,C=0,w=1,_=[],k={},N={};function I(e){void 0===e&&(e=!1),E=new Array(128),b={w:n,b:n},y=r,x={w:0,b:0},S=n,C=0,w=1,_=[],e||(k={}),N={},q(P())}function A(){for(var e=[],t={},r=function(e){e in N&&(t[e]=N[e])};_.length>0;)e.push(Y());for(r(P());e.length>0;)J(e.pop()),r(P());N=t}function R(){O(i)}function O(e,o){void 0===o&&(o=!1);var a=e.split(/\s+/),l=a[0],i=0;if(!T(e).valid)return!1;I(o);for(var s=0;s<l.length;s++){var u=l.charAt(s);if("/"===u)i+=8;else if(-1!=="0123456789".indexOf(u))i+=parseInt(u,10);else{var c=u<"a"?r:t;M({type:u.toLowerCase(),color:c},ee(i)),i++}}return y=a[1],a[2].indexOf("K")>-1&&(x.w|=d.KSIDE_CASTLE),a[2].indexOf("Q")>-1&&(x.w|=d.QSIDE_CASTLE),a[2].indexOf("k")>-1&&(x.b|=d.KSIDE_CASTLE),a[2].indexOf("q")>-1&&(x.b|=d.QSIDE_CASTLE),S="-"===a[3]?n:v[a[3]],C=parseInt(a[4],10),w=parseInt(a[5],10),q(P()),!0}function T(e){var t="No errors.",r="FEN string must contain six space-delimited fields.",n="6th field (move number) must be a positive integer.",o="5th field (half move counter) must be a non-negative integer.",a="4th field (en-passant square) is invalid.",l="3rd field (castling availability) is invalid.",i="2nd field (side to move) is invalid.",s="1st field (piece positions) does not contain 8 '/'-delimited rows.",u="1st field (piece positions) is invalid [consecutive numbers].",c="1st field (piece positions) is invalid [invalid piece].",f="1st field (piece positions) is invalid [row too large].",m="Illegal en-passant square",p=e.split(/\s+/);if(6!==p.length)return{valid:!1,error_number:1,error:r};if(isNaN(p[5])||parseInt(p[5],10)<=0)return{valid:!1,error_number:2,error:n};if(isNaN(p[4])||parseInt(p[4],10)<0)return{valid:!1,error_number:3,error:o};if(!/^(-|[abcdefgh][36])$/.test(p[3]))return{valid:!1,error_number:4,error:a};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(p[2]))return{valid:!1,error_number:5,error:l};if(!/^(w|b)$/.test(p[1]))return{valid:!1,error_number:6,error:i};var g=p[0].split("/");if(8!==g.length)return{valid:!1,error_number:7,error:s};for(var d=0;d<g.length;d++){for(var v=0,h=!1,E=0;E<g[d].length;E++)if(isNaN(g[d][E])){if(!/^[prnbqkPRNBQK]$/.test(g[d][E]))return{valid:!1,error_number:9,error:c};v+=1,h=!1}else{if(h)return{valid:!1,error_number:8,error:u};v+=parseInt(g[d][E],10),h=!0}if(8!==v)return{valid:!1,error_number:10,error:f}}return"3"==p[3][1]&&"w"==p[1]||"6"==p[3][1]&&"b"==p[1]?{valid:!1,error_number:11,error:m}:{valid:!0,error_number:0,error:t}}function P(){for(var e=0,t="",o=v.a8;o<=v.h1;o++){if(null==E[o])e++;else{e>0&&(t+=e,e=0);var a=E[o].color,l=E[o].type;t+=a===r?l.toUpperCase():l.toLowerCase()}o+1&136&&(e>0&&(t+=e),o!==v.h1&&(t+="/"),e=0,o+=8)}var i="";x.w&d.KSIDE_CASTLE&&(i+="K"),x.w&d.QSIDE_CASTLE&&(i+="Q"),x.b&d.KSIDE_CASTLE&&(i+="k"),x.b&d.QSIDE_CASTLE&&(i+="q"),i=i||"-";var s=S===n?"-":ee(S);return[t,y,i,s,C,w].join(" ")}function L(e){for(var t=0;t<e.length;t+=2)"string"==typeof e[t]&&"string"==typeof e[t+1]&&(k[e[t]]=e[t+1]);return k}function q(e){_.length>0||(e!==i?(k.SetUp="1",k.FEN=e):(delete k.SetUp,delete k.FEN))}function D(e){var t=E[v[e]];return t?{type:t.type,color:t.color}:null}function M(e,t){if(!("type"in e)||!("color"in e))return!1;if(-1==="pnbrqkPNBRQK".indexOf(e.type.toLowerCase()))return!1;if(!(t in v))return!1;var r=v[t];return(e.type!=l||b[e.color]==n||b[e.color]==r)&&(E[r]={type:e.type,color:e.color},e.type===l&&(b[e.color]=r),q(P()),!0)}function j(e,t,r,n,a){var l={color:y,from:t,to:r,flags:n,piece:e[t].type};return a&&(l.flags|=d.PROMOTION,l.promotion=a),e[r]?l.captured=e[r].type:n&d.EP_CAPTURE&&(l.captured=o),l}function K(e){function t(e,t,r,n,l){if(e[r].type!==o||0!==Z(n)&&7!==Z(n))t.push(j(e,r,n,l));else for(var i=["q","r",a,"n"],s=0,u=i.length;s<u;s++)t.push(j(e,r,n,l,i[s]))}var r=[],n=y,i=te(n),s={b:1,w:6},f=v.a8,m=v.h1,p=!1,g=void 0===e||!("legal"in e)||e.legal,h=void 0===e||!("piece"in e)||"string"!=typeof e.piece||e.piece.toLowerCase();if(void 0!==e&&"square"in e){if(!(e.square in v))return[];f=m=v[e.square],p=!0}for(var C=f;C<=m;C++)if(136&C)C+=7;else{var w=E[C];if(null!=w&&w.color===n)if(w.type!==o||!0!==h&&h!==o){if(!0===h||h===w.type)for(var _=0,k=c[w.type].length;_<k;_++){var N=c[w.type][_];for(I=C;!(136&(I+=N));){if(null!=E[I]){if(E[I].color===n)break;t(E,r,C,I,d.CAPTURE);break}if(t(E,r,C,I,d.NORMAL),"n"===w.type||"k"===w.type)break}}}else{var I=C+u[n][0];if(null==E[I]){t(E,r,C,I,d.NORMAL);var I=C+u[n][1];s[n]===Z(C)&&null==E[I]&&t(E,r,C,I,d.BIG_PAWN)}for(_=2;_<4;_++){136&(I=C+u[n][_])||(null!=E[I]&&E[I].color===i?t(E,r,C,I,d.CAPTURE):I===S&&t(E,r,C,S,d.EP_CAPTURE))}}}if(!(!0!==h&&h!==l||p&&m!==b[n])){if(x[n]&d.KSIDE_CASTLE){var A=(R=b[n])+2;null!=E[R+1]||null!=E[A]||B(i,b[n])||B(i,R+1)||B(i,A)||t(E,r,b[n],A,d.KSIDE_CASTLE)}if(x[n]&d.QSIDE_CASTLE){var R;A=(R=b[n])-2;null!=E[R-1]||null!=E[R-2]||null!=E[R-3]||B(i,b[n])||B(i,R-1)||B(i,A)||t(E,r,b[n],A,d.QSIDE_CASTLE)}}if(!g)return r;var O=[];for(C=0,k=r.length;C<k;C++)J(r[C]),G(n)||O.push(r[C]),Y();return O}function Q(e,t){var r="";if(e.flags&d.KSIDE_CASTLE)r="O-O";else if(e.flags&d.QSIDE_CASTLE)r="O-O-O";else{if(e.piece!==o){var n=function(e,t){for(var r=e.from,n=e.to,o=e.piece,a=0,l=0,i=0,s=0,u=t.length;s<u;s++){var c=t[s].from,f=t[s].to;o===t[s].piece&&r!==c&&n===f&&(a++,Z(r)===Z(c)&&l++,X(r)===X(c)&&i++)}if(a>0)return l>0&&i>0?ee(r):i>0?ee(r).charAt(1):ee(r).charAt(0);return""}(e,t);r+=e.piece.toUpperCase()+n}e.flags&(d.CAPTURE|d.EP_CAPTURE)&&(e.piece===o&&(r+=ee(e.from)[0]),r+="x"),r+=ee(e.to),e.flags&d.PROMOTION&&(r+="="+e.promotion.toUpperCase())}return J(e),$()&&(W()?r+="#":r+="+"),Y(),r}function U(e){return e.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function B(e,n){for(var a=v.a8;a<=v.h1;a++)if(136&a)a+=7;else if(null!=E[a]&&E[a].color===e){var l=E[a],i=a-n,s=i+119;if(f[s]&1<<p[l.type]){if(l.type===o){if(i>0){if(l.color===r)return!0}else if(l.color===t)return!0;continue}if("n"===l.type||"k"===l.type)return!0;for(var u=m[s],c=a+u,g=!1;c!==n;){if(null!=E[c]){g=!0;break}c+=u}if(!g)return!0}}return!1}function G(e){return B(te(e),b[e])}function $(){return G(y)}function W(){return $()&&0===K().length}function F(){return!$()&&0===K().length}function z(){for(var e={},t=[],r=0,n=0,o=v.a8;o<=v.h1;o++)if(n=(n+1)%2,136&o)o+=7;else{var l=E[o];l&&(e[l.type]=l.type in e?e[l.type]+1:1,l.type===a&&t.push(n),r++)}if(2===r)return!0;if(3===r&&(1===e.b||1===e.n))return!0;if(r===e.b+2){var i=0,s=t.length;for(o=0;o<s;o++)i+=t[o];if(0===i||i===s)return!0}return!1}function H(){for(var e=[],t={},r=!1;;){var n=Y();if(!n)break;e.push(n)}for(;;){var o=P().split(" ").slice(0,4).join(" ");if(t[o]=o in t?t[o]+1:1,t[o]>=3&&(r=!0),!e.length)break;J(e.pop())}return r}function J(e){var r=y,a=te(r);if(function(e){_.push({move:e,kings:{b:b.b,w:b.w},turn:y,castling:{b:x.b,w:x.w},ep_square:S,half_moves:C,move_number:w})}(e),E[e.to]=E[e.from],E[e.from]=null,e.flags&d.EP_CAPTURE&&(y===t?E[e.to-16]=null:E[e.to+16]=null),e.flags&d.PROMOTION&&(E[e.to]={type:e.promotion,color:r}),E[e.to].type===l){if(b[E[e.to].color]=e.to,e.flags&d.KSIDE_CASTLE){var i=e.to-1,s=e.to+1;E[i]=E[s],E[s]=null}else if(e.flags&d.QSIDE_CASTLE){i=e.to+1,s=e.to-2;E[i]=E[s],E[s]=null}x[r]=""}if(x[r])for(var u=0,c=h[r].length;u<c;u++)if(e.from===h[r][u].square&&x[r]&h[r][u].flag){x[r]^=h[r][u].flag;break}if(x[a])for(u=0,c=h[a].length;u<c;u++)if(e.to===h[a][u].square&&x[a]&h[a][u].flag){x[a]^=h[a][u].flag;break}S=e.flags&d.BIG_PAWN?"b"===y?e.to-16:e.to+16:n,e.piece===o||e.flags&(d.CAPTURE|d.EP_CAPTURE)?C=0:C++,y===t&&w++,y=te(y)}function Y(){var e=_.pop();if(null==e)return null;var r=e.move;b=e.kings,y=e.turn,x=e.castling,S=e.ep_square,C=e.half_moves,w=e.move_number;var n,a,l=y,i=te(y);if(E[r.from]=E[r.to],E[r.from].type=r.piece,E[r.to]=null,r.flags&d.CAPTURE)E[r.to]={type:r.captured,color:i};else if(r.flags&d.EP_CAPTURE){var s;s=l===t?r.to-16:r.to+16,E[s]={type:o,color:i}}r.flags&(d.KSIDE_CASTLE|d.QSIDE_CASTLE)&&(r.flags&d.KSIDE_CASTLE?(n=r.to+1,a=r.to-1):r.flags&d.QSIDE_CASTLE&&(n=r.to-2,a=r.to+1),E[n]=E[a],E[a]=null);return r}function V(e,t){var r=U(e),n=!1;if(t)if(c=r.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/)){var a=c[1],i=c[2],s=c[3],u=c[4];1==i.length&&(n=!0)}else{var c;if(c=r.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/)){a=c[1],i=c[2],s=c[3],u=c[4];if(1==i.length)n=!0}}for(var f=function(e){var t=e.charAt(0);if(t>="a"&&t<="h"){if(e.match(/[a-h]\d.*[a-h]\d/))return;return o}return"o"===(t=t.toLowerCase())?l:t}(r),m=K({legal:!0,piece:a||f}),p=0,g=m.length;p<g;p++){if(r===U(Q(m[p],m)))return m[p];if(t&&c){if(!(a&&a.toLowerCase()!=m[p].piece||v[i]!=m[p].from||v[s]!=m[p].to||u&&u.toLowerCase()!=m[p].promotion))return m[p];if(n){var d=ee(m[p].from);if(!(a&&a.toLowerCase()!=m[p].piece||v[s]!=m[p].to||i!=d[0]&&i!=d[1]||u&&u.toLowerCase()!=m[p].promotion))return m[p]}}}return null}function Z(e){return e>>4}function X(e){return 15&e}function ee(e){var t=X(e),r=Z(e);return"abcdefgh".substring(t,t+1)+"87654321".substring(r,r+1)}function te(e){return e===r?t:r}function re(e){var t=ne(e);t.san=Q(t,K({legal:!0})),t.to=ee(t.to),t.from=ee(t.from);var r="";for(var n in d)d[n]&t.flags&&(r+=g[n]);return t.flags=r,t}function ne(e){var t=e instanceof Array?[]:{};for(var r in e)t[r]="object"==typeof r?ne(e[r]):e[r];return t}function oe(e){return e.replace(/^\s+|\s+$/g,"")}function ae(e){for(var t=K({legal:!1}),r=0,n=y,o=0,a=t.length;o<a;o++){if(J(t[o]),!G(n))if(e-1>0)r+=ae(e-1);else r++;Y()}return r}return O(void 0===e?i:e),{WHITE:r,BLACK:t,PAWN:o,KNIGHT:"n",BISHOP:a,ROOK:"r",QUEEN:"q",KING:l,SQUARES:function(){for(var e=[],t=v.a8;t<=v.h1;t++)136&t?t+=7:e.push(ee(t));return e}(),FLAGS:g,load:function(e){return O(e)},reset:function(){return R()},moves:function(e){for(var t=K(e),r=[],n=0,o=t.length;n<o;n++)void 0!==e&&"verbose"in e&&e.verbose?r.push(re(t[n])):r.push(Q(t[n],K({legal:!0})));return r},in_check:function(){return $()},in_checkmate:function(){return W()},in_stalemate:function(){return F()},in_draw:function(){return C>=100||F()||z()||H()},insufficient_material:function(){return z()},in_threefold_repetition:function(){return H()},game_over:function(){return C>=100||W()||F()||z()||H()},validate_fen:function(e){return T(e)},fen:function(){return P()},board:function(){for(var e=[],t=[],r=v.a8;r<=v.h1;r++)null==E[r]?t.push(null):t.push({type:E[r].type,color:E[r].color}),r+1&136&&(e.push(t),t=[],r+=8);return e},pgn:function(e){var t="object"==typeof e&&"string"==typeof e.newline_char?e.newline_char:"\n",r="object"==typeof e&&"number"==typeof e.max_width?e.max_width:0,n=[],o=!1;for(var a in k)n.push("["+a+' "'+k[a]+'"]'+t),o=!0;o&&_.length&&n.push(t);for(var l=function(e){var t=N[P()];void 0!==t&&(e=`${e}${e.length>0?" ":""}{${t}}`);return e},i=[];_.length>0;)i.push(Y());var s=[],u="";for(0===i.length&&s.push(l(""));i.length>0;){u=l(u);var c=i.pop();_.length||"b"!==c.color?"w"===c.color&&(u.length&&s.push(u),u=w+"."):u=w+". ...",u=u+" "+Q(c,K({legal:!0})),J(c)}if(u.length&&s.push(l(u)),void 0!==k.Result&&s.push(k.Result),0===r)return n.join("")+s.join(" ");var f=function(){return n.length>0&&" "===n[n.length-1]&&(n.pop(),!0)},m=function(e,o){for(var a of o.split(" "))if(a){if(e+a.length>r){for(;f();)e--;n.push(t),e=0}n.push(a),e+=a.length,n.push(" "),e++}return f()&&e--,e},p=0;for(a=0;a<s.length;a++)p+s[a].length>r&&s[a].includes("{")?p=m(p,s[a]):(p+s[a].length>r&&0!==a?(" "===n[n.length-1]&&n.pop(),n.push(t),p=0):0!==a&&(n.push(" "),p++),n.push(s[a]),p+=s[a].length);return n.join("")},load_pgn:function(e,t){var r=void 0!==t&&"sloppy"in t&&t.sloppy;function n(e){return e.replace(/\\/g,"\\")}var o="object"==typeof t&&"string"==typeof t.newline_char?t.newline_char:"\r?\n",a=new RegExp("^(\\[((?:"+n(o)+")|.)*\\])(?:"+n(o)+"){2}"),l=a.test(e)?a.exec(e)[1]:"";R();var i=function(e,t){for(var r="object"==typeof t&&"string"==typeof t.newline_char?t.newline_char:"\r?\n",o={},a=e.split(new RegExp(n(r))),l="",i="",s=0;s<a.length;s++)l=a[s].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),i=a[s].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/,"$1"),oe(l).length>0&&(o[l]=i);return o}(l,t);for(var u in i)L([u,i[u]]);if(!("1"!==i.SetUp||"FEN"in i&&O(i.FEN,!0)))return!1;for(var c=function(e){return`{${function(e){return Array.from(e).map((function(e){return e.charCodeAt(0)<128?e.charCodeAt(0).toString(16):encodeURIComponent(e).replace(/\%/g,"").toLowerCase()})).join("")}((e=e.replace(new RegExp(n(o),"g")," ")).slice(1,e.length-1))}}`},f=function(e){if(e.startsWith("{")&&e.endsWith("}"))return function(e){return 0==e.length?"":decodeURIComponent("%"+e.match(/.{1,2}/g).join("%"))}(e.slice(1,e.length-1))},m=e.replace(l,"").replace(new RegExp(`({[^}]*})+?|;([^${n(o)}]*)`,"g"),(function(e,t,r){return void 0!==t?c(t):" "+c(`{${r.slice(1)}}`)})).replace(new RegExp(n(o),"g")," "),p=/(\([^\(\)]+\))+?/g;p.test(m);)m=m.replace(p,"");var g=oe(m=(m=(m=m.replace(/\d+\.(\.\.)?/g,"")).replace(/\.\.\./g,"")).replace(/\$\d+/g,"")).split(new RegExp(/\s+/));g=g.join(",").replace(/,,+/g,",").split(",");for(var d="",v="",h=0;h<g.length;h++){var E=f(g[h]);if(void 0===E)if(null==(d=V(g[h],r))){if(!(s.indexOf(g[h])>-1))return!1;v=g[h]}else v="",J(d);else N[P()]=E}return v&&Object.keys(k).length&&!k.Result&&L(["Result",v]),!0},header:function(){return L(arguments)},ascii:function(){return function(){for(var e="   +------------------------+\n",t=v.a8;t<=v.h1;t++){if(0===X(t)&&(e+=" "+"87654321"[Z(t)]+" |"),null==E[t])e+=" . ";else{var n=E[t].type;e+=" "+(E[t].color===r?n.toUpperCase():n.toLowerCase())+" "}t+1&136&&(e+="|\n",t+=8)}return e+="   +------------------------+\n",e+"     a  b  c  d  e  f  g  h\n"}()},turn:function(){return y},move:function(e,t){var r=void 0!==t&&"sloppy"in t&&t.sloppy,n=null;if("string"==typeof e)n=V(e,r);else if("object"==typeof e)for(var o=K(),a=0,l=o.length;a<l;a++)if(e.from===ee(o[a].from)&&e.to===ee(o[a].to)&&(!("promotion"in o[a])||e.promotion===o[a].promotion)){n=o[a];break}if(!n)return null;var i=re(n);return J(n),i},undo:function(){var e=Y();return e?re(e):null},clear:function(){return I()},put:function(e,t){return M(e,t)},get:function(e){return D(e)},remove:function(e){return function(e){var t=D(e);return E[v[e]]=null,t&&t.type===l&&(b[t.color]=n),q(P()),t}(e)},perft:function(e){return ae(e)},square_color:function(e){if(e in v){var t=v[e];return(Z(t)+X(t))%2==0?"light":"dark"}return null},history:function(e){for(var t=[],r=[],n=(void 0!==e&&"verbose"in e&&e.verbose);_.length>0;)t.push(Y());for(;t.length>0;){var o=t.pop();n?r.push(re(o)):r.push(Q(o,K({legal:!0}))),J(o)}return r},get_comment:function(){return N[P()]},set_comment:function(e){N[P()]=e.replace("{","[").replace("}","]")},delete_comment:function(){var e=N[P()];return delete N[P()],e},get_comments:function(){return A(),Object.keys(N).map((function(e){return{fen:e,comment:N[e]}}))},delete_comments:function(){return A(),Object.keys(N).map((function(e){var t=N[e];return delete N[e],{fen:e,comment:t}}))}}};const R=s.createContext();function O(){return u.exports.useContext(R)}function T({children:e}){const t=N(),[r,n]=u.exports.useState(),[o,a]=u.exports.useState(),[l,c]=u.exports.useState(),[f,m]=u.exports.useState([]),[p,g]=u.exports.useState(!1),[d,v]=u.exports.useState(),[h,E]=u.exports.useState(""),[b,y]=u.exports.useState([]),[x,S]=u.exports.useState(),[C,_]=u.exports.useState(!1),[k,I]=u.exports.useState(),[O,T]=u.exports.useState([1e3,1e3]),P=u.exports.useRef(),L=u.exports.useRef(),q=u.exports.useRef(),{id:D}=w();function M(e){const t=new A,r=[];let o;for(var l=0;l<e.moves.length;l++)o=t.move(e.moves[l]),r.push(t.fen());S(o),y(r),_(e.isPublic);let i=0===e.players.findIndex((e=>e.id===D))?"white":"black";c(i),a(e.moves),g(t.turn()===i[0]),m(e.players),E(t.fen()),n(t),v(e.gameOver),T(e.time)}function j(e){if(!e.game_over())return;let t={};return e.in_checkmate()?(t.reason="checkmate",t.winner="w"===e.turn()?1:0,t.result="white"===t.winner?"1-0":"0-1"):(e.in_threefold_repetition()?t.reason="threefold repetition":e.insufficient_material()&&(t.reason="insufficient material"),t.result="½-½"),t}function K(e){if(!r)return;if(r.game_over())return;const o=i({},r);let l=o.move(e);return l&&(a((e=>[...e,l.san])),n(o),y((e=>[...e,o.fen()])),E(o.fen()),S(l),/x/.test(l.san)?(L.current.currentTime=0,L.current.play()):(P.current.currentTime=0,P.current.play()),o.game_over()&&t.emit("gameover",j(o))),l}u.exports.useEffect((()=>{if(t)return t.on("game",M),t.on("players",(e=>{m(e),q.current.currentTime=0,q.current.play()})),t.on("gameover",(e=>{v(e),console.log("GAME OVER!!!!")})),t.on("time-left",((e,t)=>{let r=Date.now()-t;T(e.map((e=>e-r)))})),()=>{t.off("game"),t.off("players")}}),[t]),u.exports.useEffect((()=>{console.log("time",O)}),[O]),u.exports.useEffect((()=>{if(t)return t.on("move",K),()=>t.off("move")}),[t,r,o]),u.exports.useEffect((()=>{r&&l&&g(r.turn()===l[0])}),[r,l]),u.exports.useEffect((()=>{r&&r.game_over()&&v(j(r))}),[r]);const Q={game:r,createGame:function(e){t.emit("create",e)},makeMove:K,moves:o,players:f,orientation:l,turn:p,gameOver:d,fen:h,setMove:function(e){e<0||e>=b.length||(S(null),E(b[e]))},lastMove:x,publicGame:C,makePublic:function(){_(!0)},initGame:M,opponent:k,timeLeft:O};return s.createElement(R.Provider,{value:Q},s.createElement("audio",{src:"/move.mp3",ref:P}),s.createElement("audio",{src:"/alert.mp3",ref:q}),s.createElement("audio",{src:"/capture.mp3",ref:L}),e)}function P({color:e,size:t}){let r={borderTopColor:e||"#444",borderLeftColor:e||"#444",width:t||"40px",height:t||"40px"};return s.createElement("div",{className:"loader-container"},s.createElement("div",{className:"loader",style:r}))}function L({time:e,running:t}){const[r,n]=u.exports.useState(e),[o,a]=u.exports.useState(100),l=u.exports.useRef();return u.exports.useEffect((()=>{n(e)}),[e]),u.exports.useEffect((()=>{if(!t)return void(l.current&&clearInterval(l.current));l.current&&clearInterval(l.current);let e=Date.now();l.current=setInterval((()=>{n((t=>t-(Date.now()-e))),e=Date.now()}),o)}),[t]),s.createElement("span",{className:"time-left",style:{color:r<3e4?"red":"black"}},function(e,t){let r=Math.floor(e/1e3);var n;return`${Math.floor(r/60)}:${(n=r%60)<10?"0"+n:n}${t?"."+Math.floor(e/100)%10:""}`}(Math.max(r,0),r<11e3))}function q({gameId:e}){const n=u.exports.useRef(),{game:o,fen:a,makeMove:l,orientation:c,players:p,turn:g,gameOver:d,lastMove:v,publicGame:h,timeLeft:E}=O(),[b,y]=u.exports.useState(""),[x,C]=u.exports.useState({}),[_,k]=u.exports.useState({}),[I,A]=u.exports.useState({}),[R,T]=u.exports.useState({}),q=N();f();const{id:D,username:M}=w(),[j,K]=u.exports.useState();return u.exports.useEffect((()=>{function e(){let e=document.getElementsByClassName("board-container")[0].offsetWidth,t=window.innerHeight,r=Math.min(e,t,800);K(r-r/5)}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),u.exports.useEffect((()=>{q&&q.emit("join game",e,M||"Guest")}),[q]),u.exports.useEffect((()=>{if(null==v)return A({});let e={},t="#ff09";e[v.from]={background:t},e[v.to]={background:t},A(e)}),[v]),u.exports.useEffect((()=>{var e;if(o)if(o.in_check()){let t=(e={color:o.turn(),type:"k"},[].concat(...o.board()).map(((t,r)=>{if(null!==t&&t.type===e.type&&t.color===e.color)return r})).filter(Number.isInteger).map((e=>"abcdefgh"[e%8]+Math.ceil((64-e)/8))));T(t.reduce(((e,t)=>(e[t]={background:"radial-gradient(#f00, #f000)"},e)),{}))}else T({})}),[o]),o&&c?2===p.length?s.createElement(s.Fragment,null,s.createElement("div",{className:"player-name"},s.createElement("span",null,p.find((e=>e.id!==D)).username),s.createElement(L,{running:!d&&c&&o.turn()!==c[0],time:"white"===c?E[1]:E[0]})),s.createElement("div",{className:"board"},s.createElement(m,{id:"ClickToMove",animationDuration:200,arePiecesDraggable:!1,position:a,boardWidth:j,onSquareClick:function(e){function t(e){y(e),function(e){if(!g||d)return;const t=o.moves({square:e,verbose:!0});if(0===t.length)return;const r={};t.map((t=>(r[t.to]={background:o.get(t.to)&&o.get(t.to).color!==o.get(e).color?"radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)":"radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",borderRadius:"50%"},t))),r[e]={background:"rgba(255, 255, 0, 0.4)"},k(r)}(e)}if(C({}),!b||o.turn()!==c[0])return void t(e);const r=l({from:b,to:e,promotion:"q"});r?(q.emit("move",r.san,Date.now()),y(""),k({})):t(e)},onSquareRightClick:function(e){const n="rgba(0, 0, 255, 0.4)";var o,a;C((o=i({},x),a={[e]:x[e]&&x[e].backgroundColor===n?void 0:{backgroundColor:n}},t(o,r(a))))},boardOrientation:c,customBoardStyle:{borderRadius:"4px"},customSquareStyles:i(i(i({},I),_),R),ref:n})),s.createElement("div",{className:"player-name"},s.createElement("span",null,M||"Guest"),s.createElement(L,{running:!d&&c&&o.turn()===c[0],time:"white"===c?E[0]:E[1]}))):s.createElement("div",null,s.createElement("h1",{style:{marginBottom:"1em"}},"Waiting for opponent..."),h?s.createElement("span",{style:{fontSize:"16px",fontFamily:"monospace",color:"#aaa"}},"the next person that joins will play against you"):s.createElement("button",{onClick:()=>S(window.location.href)},"Copy URL to clipboard")):s.createElement(P,{color:"#fff",size:"70px"})}function D({gameId:e}){const[t,r]=u.exports.useState((()=>{let t=sessionStorage.getItem("messages-"+e);return t?JSON.parse(t):[]})),[n,o]=u.exports.useState(""),a=N(),l=u.exports.useRef(),i=u.exports.useRef(),{id:c}=w();function f(e){r((t=>[...t,e]))}return u.exports.useEffect((()=>{if(a)return a.on("message",(e=>{e.sender!==c&&(i.current.currentTime=0,i.current.play()),f(e)})),()=>a.off("message")}),[a,t]),u.exports.useEffect((()=>{sessionStorage.setItem("messages-"+e,JSON.stringify(t)),l.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[t]),s.createElement("div",{className:"messages-container sidebar-item"},s.createElement("audio",{src:"/new-message.mp3",ref:i}),s.createElement("h3",{className:"sidebar-item-name",style:{margin:"1em",marginBottom:".5em"}},"Chat"),s.createElement("div",{className:"messages"},t.map(((e,t)=>s.createElement("div",{key:t,className:"message "+(e.sender===c?"message-me":"")},e.text))),s.createElement("div",{ref:l,className:"bottom-message"})),s.createElement("div",{className:"new-message"},s.createElement("textarea",{value:n,placeholder:"Message here",onChange:e=>o(e.target.value),onKeyPress:function(t){"Enter"===t.key&&""!==n&&(t.preventDefault(),function(){let t={text:n,sender:c};a.emit("message",t,e),f(t),o("")}())}})))}function M(e,t){if("string"!=typeof e)return;let r={K:"♚",Q:"♛",R:"♜",B:"♝",N:"♞"},n=r[e[0]]?1:0;return s.createElement("span",null,r[e[0]]&&s.createElement("span",{style:{fontSize:"20px",color:t?"white":"black"}},r[e[0]]),e.slice(n))}function j(){const[e,t]=u.exports.useState(),[r,n]=u.exports.useState(!0),{game:o,moves:a,fen:l,setMove:i,gameOver:c}=O(),f=u.exports.useRef();function m(e,r){null!=a&&c&&(t(Math.min(Math.max(0,e),a.length-1)),n(r))}return u.exports.useEffect((()=>{null!=e&&(i(e),f.current&&r&&f.current.scrollIntoView())}),[e]),u.exports.useEffect((()=>{a&&m(a.length-1,!0)}),[a]),s.createElement("div",{className:"sidebar-item",style:{padding:"1em"}},o?s.createElement(s.Fragment,null,s.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1em"}},s.createElement("h3",{style:{display:"inline"}},"Moves"),a&&a.length>0&&s.createElement("button",{onClick:()=>S(o.pgn())},"copy pgn")),s.createElement("div",{className:"game-pgn"},a&&a.reduce(((e,t,r)=>(r%2==1?e[e.length-1].push(t):e.push([t]),e)),[]).map(((t,r)=>{let n=Math.floor(e/2),o=e%2==0;return s.createElement("div",{className:`game-move ${n===r&&"outlined"}`,key:r,ref:n===r?f:null},s.createElement("span",null,r+1,"."),s.createElement("span",{onClick:()=>m(2*r,!1),className:n===r&&o?"highlighted":""},M(t[0],!0)),s.createElement("span",{onClick:()=>m(2*r+1,!1),className:n!==r||o?"":"highlighted"},M(t[1])))})),s.createElement("div",{ref:null==e?f:null})),c&&s.createElement("div",{className:"pgn-buttons"},s.createElement("div",{onClick:()=>m(0,!0)},s.createElement(p,null)),s.createElement("div",{onClick:()=>m(e-1,!0)},s.createElement(g,null)),s.createElement("div",{onClick:()=>m(e+1,!0)},s.createElement(d,null)),s.createElement("div",{onClick:()=>m(a.length-1,!0)},s.createElement(v,null)))):s.createElement(P,null))}function K({gameId:e}){const t=N();let r=u.exports.useRef();O();let[n,o]=u.exports.useState([]);return u.exports.useEffect((()=>{if(t)return t.on("message",(e=>{o((t=>[...t,e])),r.current.currentTime=0,r.current.play();let t=setTimeout((()=>{o((e=>e.slice(1))),clearTimeout(t)}),1e4)})),()=>t.off("message")}),[t]),s.createElement("div",{style:{padding:"1em"}},s.createElement("audio",{src:"/new-alert.mp3",ref:r}),n.map(((e,t)=>s.createElement("div",{key:t,className:"message-alert"},e))),s.createElement("div",{className:"tap-messages"},["Hello","Still there?","I'm thinking...","Good Move","Thanks","Yes","Oops","Good Game","Noooo","I resign","Gotta go","lol","heyyy","there's a glitch"].map(((r,n)=>s.createElement("div",{key:n,className:"tap-message",onClick:()=>function(r){t.emit("message",r,e),o((e=>[...e,"Sent!"]))}(r)},r)))))}function Q({gameId:e}){const{game:t,gameOver:r,publicGame:n}=O();return s.createElement(s.Fragment,null,s.createElement("div",{className:"sidebar-header"},s.createElement("h3",{style:{textAlign:"center"}},r?"Game Over "+r.result:t&&"w"===t.turn()?"White to move":"Black to move")),s.createElement("div",{className:"game-sidebar"},s.createElement(j,null),n?s.createElement(K,{gameId:e}):s.createElement(D,{gameId:e})))}function U({children:e,onClose:t}){const[r,n]=u.exports.useState(!0);return r&&s.createElement("div",{className:"modal-container"},s.createElement("div",{className:"modal"},e,s.createElement("div",{className:"modal-close",style:{color:"black"},onClick:t},"X")))}function B(){const e=N(),[t,r]=u.exports.useState(),{gameId:n}=h(),o=f(),{gameOver:a,orientation:l,initGame:i,players:c}=O();w();const[m,p]=u.exports.useState(0);return u.exports.useEffect((()=>{if(l)if(null!=a){let t=null!=a.winner?0===a.winner&&"white"===l||1===a.winner&&"black"===l?"You Win!":(0===a.winner?"white":"black")+" wins":"Draw";r({message:t,extra:"by "+a.reason,element:s.createElement("button",{onClick:()=>e.emit("rematch",n)},"Rematch")}),p(0)}else r(null)}),[a,l]),u.exports.useEffect((()=>{if(e)return()=>e.emit("leave")}),[e]),u.exports.useEffect((()=>{e&&(e.on("leave",(()=>{o("/")})),e.on("player left",(()=>{r({message:"Your oppenent left.",extra:"they may return..."})})),e.on("rematch",(()=>{p(1)})))}),[e]),s.createElement("div",{className:"game-container"},s.createElement("div",{className:"board-container"},s.createElement(q,{gameId:n})),s.createElement(Q,{gameId:n}),t&&s.createElement(U,{onClose:()=>{r(null)}},s.createElement(U.Header,null,t.message),s.createElement(U.Body,null,s.createElement("div",{style:{marginBottom:"1em"}},t.extra),t.element)))}function G(){u.exports.useState();const[e,t]=u.exports.useState(!1);u.exports.useState();const[r,n]=u.exports.useState([]),o=f(),a=N(),{username:l,id:i}=w();return u.exports.useEffect((()=>{a&&a.emit("username",l)}),[l,a]),u.exports.useEffect((()=>{if(a)return a.on("game id",(function(e){o("/game/"+e)})),a.emit("get-users"),a.on("get-users",(e=>{n(e)})),()=>{a.off("game id"),a.off("get-users")}}),[a]),s.createElement("div",{className:"menu"},e?s.createElement(P,null):s.createElement(s.Fragment,null,s.createElement("div",{className:"menu-title"},s.createElement("img",{src:"/bP.png"}),s.createElement("h1",null,"Chess")),s.createElement("div",{className:"menu-buttons"},s.createElement("button",{onClick:()=>{t(!0),a.emit("create")}},"Private Game",s.createElement("span",null,"send a link to a friend")),s.createElement("button",{onClick:()=>{t(!0),a.emit("waitlist",l)}},"Random Opponent",s.createElement("span",null,"battle with unknown player"))),s.createElement("div",{style:{position:"fixed",top:"2em",left:"2em"}},"Online: ",r.length),false))}function $(){return s.createElement("main",{className:"main"},s.createElement(_,null,s.createElement(I,null,s.createElement(E,null,s.createElement(b,null,s.createElement(y,{exact:!0,path:"/",element:s.createElement(G,null)}),s.createElement(y,{path:"/game/:gameId",element:s.createElement(T,null,s.createElement(B,null))}),s.createElement(y,{path:"*",element:s.createElement(G,null)}))))))}U.Header=function(e){return s.createElement("div",{className:"modal-header"},e.children)},U.Body=function({children:e}){return s.createElement("div",{className:"modal-body"},e)},x.render(s.createElement(s.StrictMode,null,s.createElement($,null)),document.getElementById("root"));
