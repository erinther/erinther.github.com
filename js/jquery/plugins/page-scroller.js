/*  ================================================================================
 *
 *  JavaScript -Page Scroller version 3.0.0
 *  (c) 2004-2007 coliss.com
 *
 *  この作品は、クリエイティブ・コモンズの表示 2.1 日本ライセンスの下で
 *  ライセンスされています。
 *  この使用許諾条件を見るには、http://creativecommons.org/licenses/by/2.1/jp/を
 *  チェックするか、クリエイティブ･コモンズに郵便にてお問い合わせください。
 *  住所は：559 Nathan Abbott Way, Stanford, California 94305, USA です。
 *
================================================================================  */


/*  ================================================================================
TOC
============================================================
Set Adjustment
Page Scroller
============================================================
this script requires jQuery 1.1.3.(http://jquery.com/)
use $j not $
================================================================================  */


/*  ================================================================================
Set Adjustment
================================================================================  */
var virtualTopId = "top",
    virtualTop,
    adjTraverser,
    adjPosition;

/* example
======================================================================  */
//    virtualTop = 0;    // virtual top's left position = 0
//    virtualTop = 1;    // virtual top's left position = vertical movement
//    adjTraverser = 0;  // left position = 0
//    adjTraverser = 1;  // horizontal movement.
//    adjPosition = -26;


/*  ================================================================================
Page Scroller
================================================================================  */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('9 $j=10.1v();(d($j){9 r=$j.D.r,B=$j.D.B,E=$j.D.E,z=$j.D.z;$j.D.1y({B:d(){4(!8[0])G();4(8[0]==f)b 1f.1x||$j.1r&&3.v.1i||3.c.1i;4(8[0]==3)b((3.v&&3.1q=="1m")?3.v.1c:3.c.1c);b B.1p(8,X)},r:d(){4(!8[0])G();4(8[0]==f)b 1f.1w||$j.1r&&3.v.1t||3.c.1t;4(8[0]==3)b((3.v&&3.1q=="1m")?3.v.1n:3.c.1n);b r.1p(8,X)},E:d(){4(!8[0])G();9 e=3.H?3.H(8[0].s):3.15(8[0].s);9 g=13 11();g.x=e.Z;12((e=e.19)!=1a){g.x+=e.Z}4((g.x*0)==0)b(g.x);m b(8[0].s)},z:d(){4(!8[0])G();9 e=3.H?3.H(8[0].s):3.15(8[0].s);9 g=13 11();g.y=e.Y;12((e=e.19)!=1a){g.y+=e.Y}4((g.y*0)==0)b(g.y);m b(8[0].s)}})})(10);$j(d(){$j(\'a[@I*="#"]\').1K(d(){9 18=Q.1L+Q.1I;9 17=((8.I).1J(0,(((8.I).14)-((8.N).14)))).1N((8.I).1M("//")+2);4(17==18){i.1b((8.N).1H(1));b 1B}})});9 i={O:d(A){4(A=="x")b(($j(3).B())-($j(f).B()));m 4(A=="y")b(($j(3).r())-($j(f).r()))},T:d(A){4(A=="x")b(f.W||3.c.C||3.c.M.C);m 4(A=="y")b(f.1C||3.c.1o||3.c.M.1o)},K:d(k,h,t,n,o){9 u;4(u)U(u);9 1d=16;9 F=i.T(\'x\');9 J=i.T(\'y\');4(!k||k<0)k=0;4(!h||h<0)h=0;4(!t)t=$j.1l.1z?7:$j.1l.1A?5:6;4(!n)n=0+F;4(!o)o=0+J;n+=(k-F)/t;4(n<0)n=0;o+=(h-J)/t;4(o<0)o=0;9 S=w.1u(n);9 V=w.1u(o);f.1F(S,V);4((w.1s(w.1e(F-k))<1)&&(w.1s(w.1e(J-h))<1)){U(u);f.1G(k,h)}m 4((S!=k)||(V!=h))u=1D("i.K("+k+","+h+","+t+","+n+","+o+")",1d);m U(u)},1b:d(l){9 q,p;4(!!l){4(l==1E){q=(L==0)?0:(L==1)?f.W||3.c.C||3.c.M.C:$j(\'#\'+l).E();p=((L==0)||(L==1))?0:$j(\'#\'+l).z()}m{q=(1j==0)?0:(1j==1)?($j(\'#\'+l).E()):f.W||3.c.C||3.c.M.C;p=1k?($j(\'#\'+l).z())+1k:($j(\'#\'+l).z())}9 P=i.O(\'x\');9 R=i.O(\'y\');4(((q*0)==0)||((p*0)==0)){9 1h=(q<1)?0:(q>P)?P:q;9 1g=(p<1)?0:(p>R)?R:p;i.K(1h,1g)}m Q.N=l}m i.K(0,0)}};',62,112,'|||document|if||||this|var||return|body|function|obj|window|tagCoords|toY|coliss||toX|idName|else|frX|frY|anchorY|anchorX|height|id|frms|pageScrollTimer|documentElement|Math|||top|type|width|scrollLeft|fn|left|actX|error|getElementById|href|actY|pageScroll|virtualTop|parentNode|hash|getScrollRange|dMaxX|location|dMaxY|posX|getWindowOffset|clearTimeout|posY|pageXOffset|arguments|offsetTop|offsetLeft|jQuery|Object|while|new|length|all||anchorPath|usrUrl|offsetParent|null|toAnchor|scrollWidth|spd|abs|self|setY|setX|clientWidth|adjTraverser|adjPosition|browser|CSS1Compat|scrollHeight|scrollTop|apply|compatMode|boxModel|floor|clientHeight|ceil|noConflict|innerHeight|innerWidth|extend|mozilla|opera|false|pageYOffset|setTimeout|virtualTopId|scrollTo|scroll|substr|pathname|substring|click|hostname|indexOf|slice'.split('|'),0,{}))
