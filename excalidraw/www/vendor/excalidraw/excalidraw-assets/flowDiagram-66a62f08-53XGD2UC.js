import{a as F,b as q,c as T,d as Q,e as S,f as K,g as _t,h as Lt}from"./chunk-Z4I3LXIE.js";import"./chunk-UFIBX7QP.js";import{a as vt,b as X}from"./chunk-DORO2AZZ.js";import"./chunk-66ULMTWW.js";import"./chunk-LA3PGSPR.js";import{a as St}from"./chunk-LA5IGN2Q.js";import{A as kt,e as U,g as ct,m as k,t as xt,u as wt,y as bt}from"./chunk-4IXHFASB.js";import{F as G,G as gt,Ga as W,J as ne,Ja as dt,Na as pt,Oa as ut,Ta as J,Ua as Z,b as re,c as ae,eb as Tt,h as g,i as mt,k as yt,nb as V}from"./chunk-OYEE5BD7.js";import{a as d}from"./chunk-M2JW2GFW.js";import{f as lt}from"./chunk-SXMPUQ6M.js";d();d();d();d();var O={normal:se,vee:ie,undirected:oe};function Et(r){O=r}function se(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");T(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function ie(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");T(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function oe(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");T(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}d();d();d();function Nt(r,e){var t=r;return t.node().appendChild(e.label),T(t,e.labelStyle),t}d();function Ct(r,e){for(var t=r.append("text"),n=le(e.label).split(`
`),a=0;a<n.length;a++)t.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(n[a]);return T(t,e.labelStyle),t}function le(r){for(var e="",t=!1,n,a=0;a<r.length;++a)if(n=r[a],t){switch(n){case"n":e+=`
`;break;default:e+=n}t=!1}else n==="\\"?t=!0:e+=n;return e}function $(r,e,t){var n=e.label,a=r.append("g");e.labelType==="svg"?Nt(a,e):typeof n!="string"||e.labelType==="html"?K(a,e):Ct(a,e);var s=a.node().getBBox(),i;switch(t){case"top":i=-e.height/2;break;case"bottom":i=e.height/2-s.height;break;default:i=-s.height/2}return a.attr("transform","translate("+-s.width/2+","+i+")"),a}var j=function(r,e){var t=e.nodes().filter(function(s){return F(e,s)}),n=r.selectAll("g.cluster").data(t,function(s){return s});S(n.exit(),e).style("opacity",0).remove();var a=n.enter().append("g").attr("class","cluster").attr("id",function(s){var i=e.node(s);return i.id}).style("opacity",0).each(function(s){var i=e.node(s),o=g(this);g(this).append("rect");var c=o.append("g").attr("class","label");$(c,i,i.clusterLabelPos)});return n=n.merge(a),n=S(n,e).style("opacity",1),n.selectAll("rect").each(function(s){var i=e.node(s),o=g(this);T(o,i.style)}),n};function At(r){j=r}d();var et=function(r,e){var t=r.selectAll("g.edgeLabel").data(e.edges(),function(a){return q(a)}).classed("update",!0);t.exit().remove(),t.enter().append("g").classed("edgeLabel",!0).style("opacity",0),t=r.selectAll("g.edgeLabel"),t.each(function(a){var s=g(this);s.select(".label").remove();var i=e.edge(a),o=$(s,e.edge(a),0).classed("label",!0),c=o.node().getBBox();i.labelId&&o.attr("id",i.labelId),k(i,"width")||(i.width=c.width),k(i,"height")||(i.height=c.height)});var n;return t.exit?n=t.exit():n=t.selectAll(null),S(n,e).style("opacity",0).remove(),t};function It(r){et=r}d();d();function ht(r,e){return r.intersect(e)}var rt=function(r,e,t){var n=r.selectAll("g.edgePath").data(e.edges(),function(i){return q(i)}).classed("update",!0),a=he(n,e);fe(n,e);var s=n.merge!==void 0?n.merge(a):n;return S(s,e).style("opacity",1),s.each(function(i){var o=g(this),c=e.edge(i);c.elem=this,c.id&&o.attr("id",c.id),Q(o,c.class,(o.classed("update")?"update ":"")+"edgePath")}),s.selectAll("path.path").each(function(i){var o=e.edge(i);o.arrowheadId=bt("arrowhead");var c=g(this).attr("marker-end",function(){return"url("+de(location.href,o.arrowheadId)+")"}).style("fill","none");S(c,e).attr("d",function(p){return pe(e,p)}),T(c,o.style)}),s.selectAll("defs *").remove(),s.selectAll("defs").each(function(i){var o=e.edge(i),c=t[o.arrowhead];c(g(this),o.arrowheadId,o,"arrowhead")}),s};function Bt(r){rt=r}function de(r,e){var t=r.split("#")[0];return t+"#"+e}function pe(r,e){var t=r.edge(e),n=r.node(e.v),a=r.node(e.w),s=t.points.slice(1,t.points.length-1);return s.unshift(ht(n,s[0])),s.push(ht(a,s[s.length-1])),Mt(t,s)}function Mt(r,e){var t=(gt||yt.line)().x(function(n){return n.x}).y(function(n){return n.y});return(t.curve||t.interpolate)(r.curve),t(e)}function ue(r){var e=r.getBBox(),t=r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(e.width/2,e.height/2);return{x:t.e,y:t.f}}function he(r,e){var t=r.enter().append("g").attr("class","edgePath").style("opacity",0);return t.append("path").attr("class","path").attr("d",function(n){var a=e.edge(n),s=e.node(n.v).elem,i=wt(a.points.length).map(function(){return ue(s)});return Mt(a,i)}),t.append("defs"),t}function fe(r,e){var t=r.exit();S(t,e).style("opacity",0).remove()}d();var at=function(r,e,t){var n=e.nodes().filter(function(i){return!F(e,i)}),a=r.selectAll("g.node").data(n,function(i){return i}).classed("update",!0);a.exit().remove(),a.enter().append("g").attr("class","node").style("opacity",0),a=r.selectAll("g.node"),a.each(function(i){var o=e.node(i),c=g(this);Q(c,o.class,(c.classed("update")?"update ":"")+"node"),c.select("g.label").remove();var p=c.append("g").attr("class","label"),l=$(p,o),y=t[o.shape],u=xt(l.node().getBBox(),"width","height");o.elem=this,o.id&&c.attr("id",o.id),o.labelId&&p.attr("id",o.labelId),k(o,"width")&&(u.width=o.width),k(o,"height")&&(u.height=o.height),u.width+=o.paddingLeft+o.paddingRight,u.height+=o.paddingTop+o.paddingBottom,p.attr("transform","translate("+(o.paddingLeft-o.paddingRight)/2+","+(o.paddingTop-o.paddingBottom)/2+")");var h=g(this);h.select(".label-container").remove();var m=y(h,u,o).classed("label-container",!0);T(m,o.style);var w=m.node().getBBox();o.width=w.width,o.height=w.height});var s;return a.exit?s=a.exit():s=a.selectAll(null),S(s,e).style("opacity",0).remove(),a};function Dt(r){at=r}d();function Pt(r,e){var t=r.filter(function(){return!g(this).classed("update")});function n(a){var s=e.node(a);return"translate("+s.x+","+s.y+")"}t.attr("transform",n),S(r,e).style("opacity",1).attr("transform",n),S(t.selectAll("rect"),e).attr("width",function(a){return e.node(a).width}).attr("height",function(a){return e.node(a).height}).attr("x",function(a){var s=e.node(a);return-s.width/2}).attr("y",function(a){var s=e.node(a);return-s.height/2})}d();function Rt(r,e){var t=r.filter(function(){return!g(this).classed("update")});function n(a){var s=e.edge(a);return k(s,"x")?"translate("+s.x+","+s.y+")":""}t.attr("transform",n),S(r,e).style("opacity",1).attr("transform",n)}d();function Gt(r,e){var t=r.filter(function(){return!g(this).classed("update")});function n(a){var s=e.node(a);return"translate("+s.x+","+s.y+")"}t.attr("transform",n),S(r,e).style("opacity",1).attr("transform",n)}d();d();d();function nt(r,e,t,n){var a=r.x,s=r.y,i=a-n.x,o=s-n.y,c=Math.sqrt(e*e*o*o+t*t*i*i),p=Math.abs(e*t*i/c);n.x<a&&(p=-p);var l=Math.abs(e*t*o/c);return n.y<s&&(l=-l),{x:a+p,y:s+l}}function Ut(r,e,t){return nt(r,e,e,t)}d();d();function Vt(r,e,t,n){var a,s,i,o,c,p,l,y,u,h,m,w,f,v,E;if(a=e.y-r.y,i=r.x-e.x,c=e.x*r.y-r.x*e.y,u=a*t.x+i*t.y+c,h=a*n.x+i*n.y+c,!(u!==0&&h!==0&&Wt(u,h))&&(s=n.y-t.y,o=t.x-n.x,p=n.x*t.y-t.x*n.y,l=s*r.x+o*r.y+p,y=s*e.x+o*e.y+p,!(l!==0&&y!==0&&Wt(l,y))&&(m=a*o-s*i,m!==0)))return w=Math.abs(m/2),f=i*p-o*c,v=f<0?(f-w)/m:(f+w)/m,f=s*c-a*p,E=f<0?(f-w)/m:(f+w)/m,{x:v,y:E}}function Wt(r,e){return r*e>0}function C(r,e,t){var n=r.x,a=r.y,s=[],i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;e.forEach(function(m){i=Math.min(i,m.x),o=Math.min(o,m.y)});for(var c=n-r.width/2-i,p=a-r.height/2-o,l=0;l<e.length;l++){var y=e[l],u=e[l<e.length-1?l+1:0],h=Vt(r,t,{x:c+y.x,y:p+y.y},{x:c+u.x,y:p+u.y});h&&s.push(h)}return s.length?(s.length>1&&s.sort(function(m,w){var f=m.x-t.x,v=m.y-t.y,E=Math.sqrt(f*f+v*v),P=w.x-t.x,A=w.y-t.y,it=Math.sqrt(P*P+A*A);return E<it?-1:E===it?0:1}),s[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",r),r)}d();function z(r,e){var t=r.x,n=r.y,a=e.x-t,s=e.y-n,i=r.width/2,o=r.height/2,c,p;return Math.abs(s)*i>Math.abs(a)*o?(s<0&&(o=-o),c=s===0?0:o*a/s,p=o):(a<0&&(i=-i),c=i,p=a===0?0:i*s/a),{x:t+c,y:n+p}}var st={rect:xe,ellipse:we,circle:be,diamond:ke};function $t(r){st=r}function xe(r,e,t){var n=r.insert("rect",":first-child").attr("rx",t.rx).attr("ry",t.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return t.intersect=function(a){return z(t,a)},n}function we(r,e,t){var n=e.width/2,a=e.height/2,s=r.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",n).attr("ry",a);return t.intersect=function(i){return nt(t,n,a,i)},s}function be(r,e,t){var n=Math.max(e.width,e.height)/2,a=r.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",n);return t.intersect=function(s){return Ut(t,n,s)},a}function ke(r,e,t){var n=e.width*Math.SQRT2/2,a=e.height*Math.SQRT2/2,s=[{x:0,y:-a},{x:-n,y:0},{x:0,y:a},{x:n,y:0}],i=r.insert("polygon",":first-child").attr("points",s.map(function(o){return o.x+","+o.y}).join(" "));return t.intersect=function(o){return C(t,s,o)},i}function ft(){var r=function(e,t){Le(t);var n=H(e,"output"),a=H(n,"clusters"),s=H(n,"edgePaths"),i=et(H(n,"edgeLabels"),t),o=at(H(n,"nodes"),t,st);St(t),Gt(o,t),Rt(i,t),rt(s,t,O);var c=j(a,t);Pt(c,t),Te(t)};return r.createNodes=function(e){return arguments.length?(Dt(e),r):at},r.createClusters=function(e){return arguments.length?(At(e),r):j},r.createEdgeLabels=function(e){return arguments.length?(It(e),r):et},r.createEdgePaths=function(e){return arguments.length?(Bt(e),r):rt},r.shapes=function(e){return arguments.length?($t(e),r):st},r.arrows=function(e){return arguments.length?(Et(e),r):O},r}var Se={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},_e={arrowhead:"normal",curve:G};function Le(r){r.nodes().forEach(function(e){var t=r.node(e);!k(t,"label")&&!r.children(e).length&&(t.label=e),k(t,"paddingX")&&U(t,{paddingLeft:t.paddingX,paddingRight:t.paddingX}),k(t,"paddingY")&&U(t,{paddingTop:t.paddingY,paddingBottom:t.paddingY}),k(t,"padding")&&U(t,{paddingLeft:t.padding,paddingRight:t.padding,paddingTop:t.padding,paddingBottom:t.padding}),U(t,Se),ct(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(n){t[n]=Number(t[n])}),k(t,"width")&&(t._prevWidth=t.width),k(t,"height")&&(t._prevHeight=t.height)}),r.edges().forEach(function(e){var t=r.edge(e);k(t,"label")||(t.label=""),U(t,_e)})}function Te(r){ct(r.nodes(),function(e){var t=r.node(e);k(t,"_prevWidth")?t.width=t._prevWidth:delete t.width,k(t,"_prevHeight")?t.height=t._prevHeight:delete t.height,delete t._prevWidth,delete t._prevHeight})}function H(r,e){var t=r.select("g."+e);return t.empty()&&(t=r.append("g").attr("class",e)),t}d();var Or=lt(re(),1),jr=lt(ae(),1),ta=lt(ne(),1);function zt(r,e,t){let n=e.width,a=e.height,s=(n+a)*.9,i=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}],o=B(r,s,s,i);return t.intersect=function(c){return C(t,i,c)},o}function Ht(r,e,t){let a=e.height,s=a/4,i=e.width+2*s,o=[{x:s,y:0},{x:i-s,y:0},{x:i,y:-a/2},{x:i-s,y:-a},{x:s,y:-a},{x:0,y:-a/2}],c=B(r,i,a,o);return t.intersect=function(p){return C(t,o,p)},c}function Yt(r,e,t){let n=e.width,a=e.height,s=[{x:-a/2,y:0},{x:n,y:0},{x:n,y:-a},{x:-a/2,y:-a},{x:0,y:-a/2}],i=B(r,n,a,s);return t.intersect=function(o){return C(t,s,o)},i}function Xt(r,e,t){let n=e.width,a=e.height,s=[{x:-2*a/6,y:0},{x:n-a/6,y:0},{x:n+2*a/6,y:-a},{x:a/6,y:-a}],i=B(r,n,a,s);return t.intersect=function(o){return C(t,s,o)},i}function Ft(r,e,t){let n=e.width,a=e.height,s=[{x:2*a/6,y:0},{x:n+a/6,y:0},{x:n-2*a/6,y:-a},{x:-a/6,y:-a}],i=B(r,n,a,s);return t.intersect=function(o){return C(t,s,o)},i}function qt(r,e,t){let n=e.width,a=e.height,s=[{x:-2*a/6,y:0},{x:n+2*a/6,y:0},{x:n-a/6,y:-a},{x:a/6,y:-a}],i=B(r,n,a,s);return t.intersect=function(o){return C(t,s,o)},i}function Qt(r,e,t){let n=e.width,a=e.height,s=[{x:a/6,y:0},{x:n-a/6,y:0},{x:n+2*a/6,y:-a},{x:-2*a/6,y:-a}],i=B(r,n,a,s);return t.intersect=function(o){return C(t,s,o)},i}function Kt(r,e,t){let n=e.width,a=e.height,s=[{x:0,y:0},{x:n+a/2,y:0},{x:n,y:-a/2},{x:n+a/2,y:-a},{x:0,y:-a}],i=B(r,n,a,s);return t.intersect=function(o){return C(t,s,o)},i}function Jt(r,e,t){let n=e.height,a=e.width+n/4,s=r.insert("rect",":first-child").attr("rx",n/2).attr("ry",n/2).attr("x",-a/2).attr("y",-n/2).attr("width",a).attr("height",n);return t.intersect=function(i){return z(t,i)},s}function Zt(r,e,t){let n=e.width,a=e.height,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-a},{x:0,y:-a},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-a},{x:-8,y:-a},{x:-8,y:0}],i=B(r,n,a,s);return t.intersect=function(o){return C(t,s,o)},i}function Ot(r,e,t){let n=e.width,a=n/2,s=a/(2.5+n/50),i=e.height+s,o="M 0,"+s+" a "+a+","+s+" 0,0,0 "+n+" 0 a "+a+","+s+" 0,0,0 "+-n+" 0 l 0,"+i+" a "+a+","+s+" 0,0,0 "+n+" 0 l 0,"+-i,c=r.attr("label-offset-y",s).insert("path",":first-child").attr("d",o).attr("transform","translate("+-n/2+","+-(i/2+s)+")");return t.intersect=function(p){let l=z(t,p),y=l.x-t.x;if(a!=0&&(Math.abs(y)<t.width/2||Math.abs(y)==t.width/2&&Math.abs(l.y-t.y)>t.height/2-s)){let u=s*s*(1-y*y/(a*a));u!=0&&(u=Math.sqrt(u)),u=s-u,p.y-t.y>0&&(u=-u),l.y+=u}return l},c}function Ce(r){r.shapes().question=zt,r.shapes().hexagon=Ht,r.shapes().stadium=Jt,r.shapes().subroutine=Zt,r.shapes().cylinder=Ot,r.shapes().rect_left_inv_arrow=Yt,r.shapes().lean_right=Xt,r.shapes().lean_left=Ft,r.shapes().trapezoid=qt,r.shapes().inv_trapezoid=Qt,r.shapes().rect_right_inv_arrow=Kt}function Ae(r){r({question:zt}),r({hexagon:Ht}),r({stadium:Jt}),r({subroutine:Zt}),r({cylinder:Ot}),r({rect_left_inv_arrow:Yt}),r({lean_right:Xt}),r({lean_left:Ft}),r({trapezoid:qt}),r({inv_trapezoid:Qt}),r({rect_right_inv_arrow:Kt})}function B(r,e,t,n){return r.insert("polygon",":first-child").attr("points",n.map(function(a){return a.x+","+a.y}).join(" ")).attr("transform","translate("+-e/2+","+t/2+")")}var Ie={addToRender:Ce,addToRenderV2:Ae},jt={},Be=function(r){let e=Object.keys(r);for(let t of e)jt[t]=r[t]},te=async function(r,e,t,n,a,s){let i=n?n.select(`[id="${t}"]`):g(`[id="${t}"]`),o=a||document,c=Object.keys(r);for(let p of c){let l=r[p],y="default";l.classes.length>0&&(y=l.classes.join(" "));let u=Z(l.styles),h=l.text!==void 0?l.text:l.id,m;if(dt(V().flowchart.htmlLabels)){let v={label:await pt(h.replace(/fa[blrs]?:fa-[\w-]+/g,E=>`<i class='${E.replace(":"," ")}'></i>`),V())};m=K(i,v).node(),m.parentNode.removeChild(m)}else{let v=o.createElementNS("http://www.w3.org/2000/svg","text");v.setAttribute("style",u.labelStyle.replace("color:","fill:"));let E=h.split(ut.lineBreakRegex);for(let P of E){let A=o.createElementNS("http://www.w3.org/2000/svg","tspan");A.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),A.setAttribute("dy","1em"),A.setAttribute("x","1"),A.textContent=P,v.appendChild(A)}m=v}let w=0,f="";switch(l.type){case"round":w=5,f="rect";break;case"square":f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"odd_right":f="rect_left_inv_arrow";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"group":f="rect";break;default:f="rect"}W.warn("Adding node",l.id,l.domId),e.setNode(s.db.lookUpDomId(l.id),{labelType:"svg",labelStyle:u.labelStyle,shape:f,label:m,rx:w,ry:w,class:y,style:u.style,id:s.db.lookUpDomId(l.id)})}},ee=async function(r,e,t){let n=0,a,s;if(r.defaultStyle!==void 0){let i=Z(r.defaultStyle);a=i.style,s=i.labelStyle}for(let i of r){n++;let o="L-"+i.start+"-"+i.end,c="LS-"+i.start,p="LE-"+i.end,l={};i.type==="arrow_open"?l.arrowhead="none":l.arrowhead="normal";let y="",u="";if(i.style!==void 0){let h=Z(i.style);y=h.style,u=h.labelStyle}else switch(i.stroke){case"normal":y="fill:none",a!==void 0&&(y=a),s!==void 0&&(u=s);break;case"dotted":y="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":y=" stroke-width: 3.5px;fill:none";break}l.style=y,l.labelStyle=u,i.interpolate!==void 0?l.curve=J(i.interpolate,G):r.defaultInterpolate!==void 0?l.curve=J(r.defaultInterpolate,G):l.curve=J(jt.curve,G),i.text===void 0?i.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",dt(V().flowchart.htmlLabels)?(l.labelType="html",l.label=`<span id="L-${o}" class="edgeLabel L-${c}' L-${p}" style="${l.labelStyle}">${await pt(i.text.replace(/fa[blrs]?:fa-[\w-]+/g,h=>`<i class='${h.replace(":"," ")}'></i>`),V())}</span>`):(l.labelType="text",l.label=i.text.replace(ut.lineBreakRegex,`
`),i.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),l.id=o,l.class=c+" "+p,l.minlen=i.length||1,e.setEdge(t.db.lookUpDomId(i.start),t.db.lookUpDomId(i.end),l,n)}},Me=function(r,e){return W.info("Extracting classes"),e.db.getClasses()},De=async function(r,e,t,n){W.info("Drawing flowchart");let{securityLevel:a,flowchart:s}=V(),i;a==="sandbox"&&(i=g("#i"+e));let o=a==="sandbox"?g(i.nodes()[0].contentDocument.body):g("body"),c=a==="sandbox"?i.nodes()[0].contentDocument:document,p=n.db.getDirection();p===void 0&&(p="TD");let l=s.nodeSpacing||50,y=s.rankSpacing||50,u=new kt({multigraph:!0,compound:!0}).setGraph({rankdir:p,nodesep:l,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),h,m=n.db.getSubGraphs();for(let b=m.length-1;b>=0;b--)h=m[b],n.db.addVertex(h.id,h.title,"group",void 0,h.classes);let w=n.db.getVertices();W.warn("Get vertices",w);let f=n.db.getEdges(),v=0;for(v=m.length-1;v>=0;v--){h=m[v],mt("cluster").append("text");for(let b=0;b<h.nodes.length;b++)W.warn("Setting subgraph",h.nodes[b],n.db.lookUpDomId(h.nodes[b]),n.db.lookUpDomId(h.id)),u.setParent(n.db.lookUpDomId(h.nodes[b]),n.db.lookUpDomId(h.id))}await te(w,u,e,o,c,n),await ee(f,u,n);let E=new ft;Ie.addToRender(E),E.arrows().none=function(L,N,_,R){let M=L.append("marker").attr("id",N).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 0 0 L 0 0 z");T(M,_[R+"Style"])},E.arrows().normal=function(L,N){L.append("marker").attr("id",N).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowheadPath").style("stroke-width",1).style("stroke-dasharray","1,0")};let P=o.select(`[id="${e}"]`),A=o.select("#"+e+" g");for(E(A,u),A.selectAll("g.node").attr("title",function(){return n.db.getTooltip(this.id)}),n.db.indexNodes("subGraph"+v),v=0;v<m.length;v++)if(h=m[v],h.title!=="undefined"){let b=c.querySelectorAll("#"+e+' [id="'+n.db.lookUpDomId(h.id)+'"] rect'),L=c.querySelectorAll("#"+e+' [id="'+n.db.lookUpDomId(h.id)+'"]'),N=b[0].x.baseVal.value,_=b[0].y.baseVal.value,R=b[0].width.baseVal.value,M=g(L[0]).select(".label");M.attr("transform",`translate(${N+R/2}, ${_+14})`),M.attr("id",e+"Text");for(let ot=0;ot<h.classes.length;ot++)L[0].classList.add(h.classes[ot])}if(!s.htmlLabels){let b=c.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(let L of b){let N=L.getBBox(),_=c.createElementNS("http://www.w3.org/2000/svg","rect");_.setAttribute("rx",0),_.setAttribute("ry",0),_.setAttribute("width",N.width),_.setAttribute("height",N.height),L.insertBefore(_,L.firstChild)}}Tt(u,P,s.diagramPadding,s.useMaxWidth),Object.keys(w).forEach(function(b){let L=w[b];if(L.link){let N=o.select("#"+e+' [id="'+n.db.lookUpDomId(b)+'"]');if(N){let _=c.createElementNS("http://www.w3.org/2000/svg","a");_.setAttributeNS("http://www.w3.org/2000/svg","class",L.classes.join(" ")),_.setAttributeNS("http://www.w3.org/2000/svg","href",L.link),_.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),a==="sandbox"?_.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):L.linkTarget&&_.setAttributeNS("http://www.w3.org/2000/svg","target",L.linkTarget);let R=N.insert(function(){return _},":first-child"),Y=N.select(".label-container");Y&&R.append(function(){return Y.node()});let M=N.select(".label");M&&R.append(function(){return M.node()})}}})},Pe={setConf:Be,addVertices:te,addEdges:ee,getClasses:Me,draw:De},aa={parser:vt,db:X,renderer:_t,styles:Lt,init:r=>{r.flowchart||(r.flowchart={}),r.flowchart.arrowMarkerAbsolute=r.arrowMarkerAbsolute,Pe.setConf(r.flowchart),X.clear(),X.setGen("gen-1")}};export{aa as diagram};
