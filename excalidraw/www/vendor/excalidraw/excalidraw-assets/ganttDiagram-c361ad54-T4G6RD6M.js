import{A as St,B as Et,C as le,Ga as ut,J as Ne,Oa as ue,ab as de,b as Pe,c as ze,d as Qt,db as fe,e as Jt,f as Kt,fb as he,g as $t,gb as me,h as lt,hb as ke,ib as ye,j as te,jb as ge,kb as pe,lb as Te,n as ee,nb as et,o as xt,p as wt,q as _t,r as Dt,s as Ct,t as ie,u as se,v as ne,w as re,x as ae,y as oe,z as ce}from"./chunk-OYEE5BD7.js";import{a as tt}from"./chunk-M2JW2GFW.js";import{d as vt,f as rt}from"./chunk-SXMPUQ6M.js";var be=vt((Mt,At)=>{tt();(function(t,i){typeof Mt=="object"&&typeof At<"u"?At.exports=i():typeof define=="function"&&define.amd?define(i):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_isoWeek=i()})(Mt,function(){"use strict";var t="day";return function(i,r,s){var a=function(b){return b.add(4-b.isoWeekday(),t)},u=r.prototype;u.isoWeekYear=function(){return a(this).year()},u.isoWeek=function(b){if(!this.$utils().u(b))return this.add(7*(b-this.isoWeek()),t);var Y,M,S,F,j=a(this),m=(Y=this.isoWeekYear(),M=this.$u,S=(M?s.utc:s)().year(Y).startOf("year"),F=4-S.isoWeekday(),S.isoWeekday()>4&&(F+=7),S.add(F,t));return j.diff(m,"week")+1},u.isoWeekday=function(b){return this.$utils().u(b)?this.day()||7:this.day(this.day()%7?b:b-7)};var h=u.startOf;u.startOf=function(b,Y){var M=this.$utils(),S=!!M.u(Y)||Y;return M.p(b)==="isoweek"?S?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):h.bind(this)(b,Y)}}})});var ve=vt((It,Yt)=>{tt();(function(t,i){typeof It=="object"&&typeof Yt<"u"?Yt.exports=i():typeof define=="function"&&define.amd?define(i):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_customParseFormat=i()})(It,function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,s=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,u={},h=function(m){return(m=+m)+(m>68?1900:2e3)},b=function(m){return function(w){this[m]=+w}},Y=[/[+-]\d\d:?(\d\d)?|Z/,function(m){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var g=w.match(/([+-]|\d\d)/g),A=60*g[1]+(+g[2]||0);return A===0?0:g[0]==="+"?-A:A}(m)}],M=function(m){var w=u[m];return w&&(w.indexOf?w:w.s.concat(w.f))},S=function(m,w){var g,A=u.meridiem;if(A){for(var z=1;z<=24;z+=1)if(m.indexOf(A(z,0,w))>-1){g=z>12;break}}else g=m===(w?"pm":"PM");return g},F={A:[a,function(m){this.afternoon=S(m,!1)}],a:[a,function(m){this.afternoon=S(m,!0)}],S:[/\d/,function(m){this.milliseconds=100*+m}],SS:[r,function(m){this.milliseconds=10*+m}],SSS:[/\d{3}/,function(m){this.milliseconds=+m}],s:[s,b("seconds")],ss:[s,b("seconds")],m:[s,b("minutes")],mm:[s,b("minutes")],H:[s,b("hours")],h:[s,b("hours")],HH:[s,b("hours")],hh:[s,b("hours")],D:[s,b("day")],DD:[r,b("day")],Do:[a,function(m){var w=u.ordinal,g=m.match(/\d+/);if(this.day=g[0],w)for(var A=1;A<=31;A+=1)w(A).replace(/\[|\]/g,"")===m&&(this.day=A)}],M:[s,b("month")],MM:[r,b("month")],MMM:[a,function(m){var w=M("months"),g=(M("monthsShort")||w.map(function(A){return A.slice(0,3)})).indexOf(m)+1;if(g<1)throw new Error;this.month=g%12||g}],MMMM:[a,function(m){var w=M("months").indexOf(m)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,b("year")],YY:[r,function(m){this.year=h(m)}],YYYY:[/\d{4}/,b("year")],Z:Y,ZZ:Y};function j(m){var w,g;w=m,g=u&&u.formats;for(var A=(m=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,k,x){var T=x&&x.toUpperCase();return k||g[x]||t[x]||g[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(p,n,d){return n||d.slice(1)})})).match(i),z=A.length,N=0;N<z;N+=1){var q=A[N],H=F[q],R=H&&H[0],B=H&&H[1];A[N]=B?{regex:R,parser:B}:q.replace(/^\[|\]$/g,"")}return function(G){for(var k={},x=0,T=0;x<z;x+=1){var p=A[x];if(typeof p=="string")T+=p.length;else{var n=p.regex,d=p.parser,f=G.slice(T),o=n.exec(f)[0];d.call(k,o),G=G.replace(o,"")}}return function(y){var e=y.afternoon;if(e!==void 0){var L=y.hours;e?L<12&&(y.hours+=12):L===12&&(y.hours=0),delete y.afternoon}}(k),k}}return function(m,w,g){g.p.customParseFormat=!0,m&&m.parseTwoDigitYear&&(h=m.parseTwoDigitYear);var A=w.prototype,z=A.parse;A.parse=function(N){var q=N.date,H=N.utc,R=N.args;this.$u=H;var B=R[1];if(typeof B=="string"){var G=R[2]===!0,k=R[3]===!0,x=G||k,T=R[2];k&&(T=R[2]),u=this.$locale(),!G&&T&&(u=g.Ls[T]),this.$d=function(f,o,y){try{if(["x","X"].indexOf(o)>-1)return new Date((o==="X"?1e3:1)*f);var e=j(o)(f),L=e.year,l=e.month,c=e.day,v=e.hours,I=e.minutes,D=e.seconds,E=e.milliseconds,_=e.zone,C=new Date,Z=c||(L||l?1:C.getDate()),Q=L||C.getFullYear(),st=0;L&&!l||(st=l>0?l-1:C.getMonth());var ct=v||0,O=I||0,X=D||0,V=E||0;return _?new Date(Date.UTC(Q,st,Z,ct,O,X,V+60*_.offset*1e3)):y?new Date(Date.UTC(Q,st,Z,ct,O,X,V)):new Date(Q,st,Z,ct,O,X,V)}catch{return new Date("")}}(q,B,H),this.init(),T&&T!==!0&&(this.$L=this.locale(T).$L),x&&q!=this.format(B)&&(this.$d=new Date("")),u={}}else if(B instanceof Array)for(var p=B.length,n=1;n<=p;n+=1){R[1]=B[n-1];var d=g.apply(this,R);if(d.isValid()){this.$d=d.$d,this.$L=d.$L,this.init();break}n===p&&(this.$d=new Date(""))}else z.call(this,N)}}})});var xe=vt((Ft,Wt)=>{tt();(function(t,i){typeof Ft=="object"&&typeof Wt<"u"?Wt.exports=i():typeof define=="function"&&define.amd?define(i):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_advancedFormat=i()})(Ft,function(){"use strict";return function(t,i){var r=i.prototype,s=r.format;r.format=function(a){var u=this,h=this.$locale();if(!this.isValid())return s.bind(this)(a);var b=this.$utils(),Y=(a||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(M){switch(M){case"Q":return Math.ceil((u.$M+1)/3);case"Do":return h.ordinal(u.$D);case"gggg":return u.weekYear();case"GGGG":return u.isoWeekYear();case"wo":return h.ordinal(u.week(),"W");case"w":case"ww":return b.s(u.week(),M==="w"?1:2,"0");case"W":case"WW":return b.s(u.isoWeek(),M==="W"?1:2,"0");case"k":case"kk":return b.s(String(u.$H===0?24:u.$H),M==="k"?1:2,"0");case"X":return Math.floor(u.$d.getTime()/1e3);case"x":return u.$d.getTime();case"z":return"["+u.offsetName()+"]";case"zzz":return"["+u.offsetName("long")+"]";default:return M}});return s.bind(this)(Y)}}})});tt();var De=rt(ze(),1),P=rt(Pe(),1),Ce=rt(be(),1),Se=rt(ve(),1),Ee=rt(xe(),1);var Wi=rt(Ne(),1);var Ot=function(){var t=function(p,n,d,f){for(d=d||{},f=p.length;f--;d[p[f]]=n);return d},i=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],r=[1,25],s=[1,26],a=[1,27],u=[1,28],h=[1,29],b=[1,30],Y=[1,31],M=[1,9],S=[1,10],F=[1,11],j=[1,12],m=[1,13],w=[1,14],g=[1,15],A=[1,16],z=[1,18],N=[1,19],q=[1,20],H=[1,21],R=[1,22],B=[1,24],G=[1,32],k={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(n,d,f,o,y,e,L){var l=e.length-1;switch(y){case 1:return e[l-1];case 2:this.$=[];break;case 3:e[l-1].push(e[l]),this.$=e[l-1];break;case 4:case 5:this.$=e[l];break;case 6:case 7:this.$=[];break;case 8:o.setWeekday("monday");break;case 9:o.setWeekday("tuesday");break;case 10:o.setWeekday("wednesday");break;case 11:o.setWeekday("thursday");break;case 12:o.setWeekday("friday");break;case 13:o.setWeekday("saturday");break;case 14:o.setWeekday("sunday");break;case 15:o.setDateFormat(e[l].substr(11)),this.$=e[l].substr(11);break;case 16:o.enableInclusiveEndDates(),this.$=e[l].substr(18);break;case 17:o.TopAxis(),this.$=e[l].substr(8);break;case 18:o.setAxisFormat(e[l].substr(11)),this.$=e[l].substr(11);break;case 19:o.setTickInterval(e[l].substr(13)),this.$=e[l].substr(13);break;case 20:o.setExcludes(e[l].substr(9)),this.$=e[l].substr(9);break;case 21:o.setIncludes(e[l].substr(9)),this.$=e[l].substr(9);break;case 22:o.setTodayMarker(e[l].substr(12)),this.$=e[l].substr(12);break;case 24:o.setDiagramTitle(e[l].substr(6)),this.$=e[l].substr(6);break;case 25:this.$=e[l].trim(),o.setAccTitle(this.$);break;case 26:case 27:this.$=e[l].trim(),o.setAccDescription(this.$);break;case 28:o.addSection(e[l].substr(8)),this.$=e[l].substr(8);break;case 30:o.addTask(e[l-1],e[l]),this.$="task";break;case 31:this.$=e[l-1],o.setClickEvent(e[l-1],e[l],null);break;case 32:this.$=e[l-2],o.setClickEvent(e[l-2],e[l-1],e[l]);break;case 33:this.$=e[l-2],o.setClickEvent(e[l-2],e[l-1],null),o.setLink(e[l-2],e[l]);break;case 34:this.$=e[l-3],o.setClickEvent(e[l-3],e[l-2],e[l-1]),o.setLink(e[l-3],e[l]);break;case 35:this.$=e[l-2],o.setClickEvent(e[l-2],e[l],null),o.setLink(e[l-2],e[l-1]);break;case 36:this.$=e[l-3],o.setClickEvent(e[l-3],e[l-1],e[l]),o.setLink(e[l-3],e[l-2]);break;case 37:this.$=e[l-1],o.setLink(e[l-1],e[l]);break;case 38:case 44:this.$=e[l-1]+" "+e[l];break;case 39:case 40:case 42:this.$=e[l-2]+" "+e[l-1]+" "+e[l];break;case 41:case 43:this.$=e[l-3]+" "+e[l-2]+" "+e[l-1]+" "+e[l];break}},table:[{3:1,4:[1,2]},{1:[3]},t(i,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:s,14:a,15:u,16:h,17:b,18:Y,19:M,20:S,21:F,22:j,23:m,24:w,25:g,26:A,27:z,28:N,30:q,32:H,33:R,34:23,35:B,37:G},t(i,[2,7],{1:[2,1]}),t(i,[2,3]),{9:33,11:17,12:r,13:s,14:a,15:u,16:h,17:b,18:Y,19:M,20:S,21:F,22:j,23:m,24:w,25:g,26:A,27:z,28:N,30:q,32:H,33:R,34:23,35:B,37:G},t(i,[2,5]),t(i,[2,6]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),{29:[1,34]},{31:[1,35]},t(i,[2,27]),t(i,[2,28]),t(i,[2,29]),{36:[1,36]},t(i,[2,8]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),{38:[1,37],40:[1,38]},t(i,[2,4]),t(i,[2,25]),t(i,[2,26]),t(i,[2,30]),t(i,[2,31],{39:[1,39],40:[1,40]}),t(i,[2,37],{38:[1,41]}),t(i,[2,32],{40:[1,42]}),t(i,[2,33]),t(i,[2,35],{39:[1,43]}),t(i,[2,34]),t(i,[2,36])],defaultActions:{},parseError:function(n,d){if(d.recoverable)this.trace(n);else{var f=new Error(n);throw f.hash=d,f}},parse:function(n){var d=this,f=[0],o=[],y=[null],e=[],L=this.table,l="",c=0,v=0,I=2,D=1,E=e.slice.call(arguments,1),_=Object.create(this.lexer),C={yy:{}};for(var Z in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Z)&&(C.yy[Z]=this.yy[Z]);_.setInput(n,C.yy),C.yy.lexer=_,C.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var Q=_.yylloc;e.push(Q);var st=_.options&&_.options.ranges;typeof C.yy.parseError=="function"?this.parseError=C.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ct(){var K;return K=o.pop()||_.lex()||D,typeof K!="number"&&(K instanceof Array&&(o=K,K=o.pop()),K=d.symbols_[K]||K),K}for(var O,X,V,mt,nt={},kt,J,Zt,yt;;){if(X=f[f.length-1],this.defaultActions[X]?V=this.defaultActions[X]:((O===null||typeof O>"u")&&(O=ct()),V=L[X]&&L[X][O]),typeof V>"u"||!V.length||!V[0]){var bt="";yt=[];for(kt in L[X])this.terminals_[kt]&&kt>I&&yt.push("'"+this.terminals_[kt]+"'");_.showPosition?bt="Parse error on line "+(c+1)+`:
`+_.showPosition()+`
Expecting `+yt.join(", ")+", got '"+(this.terminals_[O]||O)+"'":bt="Parse error on line "+(c+1)+": Unexpected "+(O==D?"end of input":"'"+(this.terminals_[O]||O)+"'"),this.parseError(bt,{text:_.match,token:this.terminals_[O]||O,line:_.yylineno,loc:Q,expected:yt})}if(V[0]instanceof Array&&V.length>1)throw new Error("Parse Error: multiple actions possible at state: "+X+", token: "+O);switch(V[0]){case 1:f.push(O),y.push(_.yytext),e.push(_.yylloc),f.push(V[1]),O=null,v=_.yyleng,l=_.yytext,c=_.yylineno,Q=_.yylloc;break;case 2:if(J=this.productions_[V[1]][1],nt.$=y[y.length-J],nt._$={first_line:e[e.length-(J||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(J||1)].first_column,last_column:e[e.length-1].last_column},st&&(nt._$.range=[e[e.length-(J||1)].range[0],e[e.length-1].range[1]]),mt=this.performAction.apply(nt,[l,v,c,C.yy,V[1],y,e].concat(E)),typeof mt<"u")return mt;J&&(f=f.slice(0,-1*J*2),y=y.slice(0,-1*J),e=e.slice(0,-1*J)),f.push(this.productions_[V[1]][0]),y.push(nt.$),e.push(nt._$),Zt=L[f[f.length-2]][f[f.length-1]],f.push(Zt);break;case 3:return!0}}return!0}},x=function(){var p={EOF:1,parseError:function(d,f){if(this.yy.parser)this.yy.parser.parseError(d,f);else throw new Error(d)},setInput:function(n,d){return this.yy=d||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var d=n.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var d=n.length,f=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===o.length?this.yylloc.first_column:0)+o[o.length-f.length].length-f[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),d=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+d+"^"},test_match:function(n,d){var f,o,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),o=n[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],f=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var e in y)this[e]=y[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,d,f,o;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),e=0;e<y.length;e++)if(f=this._input.match(this.rules[y[e]]),f&&(!d||f[0].length>d[0].length)){if(d=f,o=e,this.options.backtrack_lexer){if(n=this.test_match(f,y[e]),n!==!1)return n;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(n=this.test_match(d,y[o]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var d=this.next();return d||this.lex()},begin:function(d){this.conditionStack.push(d)},popState:function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},pushState:function(d){this.begin(d)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(d,f,o,y){switch(o){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 40;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 21:this.popState();break;case 22:return 39;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}};return p}();k.lexer=x;function T(){this.yy={}}return T.prototype=k,k.Parser=T,new T}();Ot.parser=Ot;var Re=Ot;P.default.extend(Ce.default);P.default.extend(Se.default);P.default.extend(Ee.default);var U="",Nt="",Rt,Bt="",dt=[],ft=[],jt={},Ht=[],Tt=[],ot="",Gt="",Me=["active","done","crit","milestone"],Xt=[],ht=!1,qt=!1,Ut="sunday",Vt=0,Be=function(){Ht=[],Tt=[],ot="",Xt=[],gt=0,zt=void 0,pt=void 0,W=[],U="",Nt="",Gt="",Rt=void 0,Bt="",dt=[],ft=[],ht=!1,qt=!1,Vt=0,jt={},he(),Ut="sunday"},je=function(t){Nt=t},He=function(){return Nt},Ge=function(t){Rt=t},Xe=function(){return Rt},qe=function(t){Bt=t},Ue=function(){return Bt},Ze=function(t){U=t},Qe=function(){ht=!0},Je=function(){return ht},Ke=function(){qt=!0},$e=function(){return qt},ti=function(t){Gt=t},ei=function(){return Gt},ii=function(){return U},si=function(t){dt=t.toLowerCase().split(/[\s,]+/)},ni=function(){return dt},ri=function(t){ft=t.toLowerCase().split(/[\s,]+/)},ai=function(){return ft},oi=function(){return jt},ci=function(t){ot=t,Ht.push(t)},li=function(){return Ht},ui=function(){let t=we(),i=10,r=0;for(;!t&&r<i;)t=we(),r++;return Tt=W,Tt},Ae=function(t,i,r,s){return s.includes(t.format(i.trim()))?!1:t.isoWeekday()>=6&&r.includes("weekends")||r.includes(t.format("dddd").toLowerCase())?!0:r.includes(t.format(i.trim()))},di=function(t){Ut=t},fi=function(){return Ut},Le=function(t,i,r,s){if(!r.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=(0,P.default)(t.startTime):a=(0,P.default)(t.startTime,i,!0),a=a.add(1,"d");let u;t.endTime instanceof Date?u=(0,P.default)(t.endTime):u=(0,P.default)(t.endTime,i,!0);let[h,b]=hi(a,u,i,r,s);t.endTime=h.toDate(),t.renderEndTime=b},hi=function(t,i,r,s,a){let u=!1,h=null;for(;t<=i;)u||(h=i.toDate()),u=Ae(t,r,s,a),u&&(i=i.add(1,"d")),t=t.add(1,"d");return[i,h]},Pt=function(t,i,r){r=r.trim();let a=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(a!==null){let h=null;for(let Y of a.groups.ids.split(" ")){let M=it(Y);M!==void 0&&(!h||M.endTime>h.endTime)&&(h=M)}if(h)return h.endTime;let b=new Date;return b.setHours(0,0,0,0),b}let u=(0,P.default)(r,i.trim(),!0);if(u.isValid())return u.toDate();{ut.debug("Invalid date:"+r),ut.debug("With date format:"+i.trim());let h=new Date(r);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+r);return h}},Ie=function(t){let i=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return i!==null?[Number.parseFloat(i[1]),i[2]]:[NaN,"ms"]},Ye=function(t,i,r,s=!1){r=r.trim();let u=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(u!==null){let S=null;for(let j of u.groups.ids.split(" ")){let m=it(j);m!==void 0&&(!S||m.startTime<S.startTime)&&(S=m)}if(S)return S.startTime;let F=new Date;return F.setHours(0,0,0,0),F}let h=(0,P.default)(r,i.trim(),!0);if(h.isValid())return s&&(h=h.add(1,"d")),h.toDate();let b=(0,P.default)(t),[Y,M]=Ie(r);if(!Number.isNaN(Y)){let S=b.add(Y,M);S.isValid()&&(b=S)}return b.toDate()},gt=0,at=function(t){return t===void 0?(gt=gt+1,"task"+gt):t},mi=function(t,i){let r;i.substr(0,1)===":"?r=i.substr(1,i.length):r=i;let s=r.split(","),a={};Ve(s,a,Me);for(let h=0;h<s.length;h++)s[h]=s[h].trim();let u="";switch(s.length){case 1:a.id=at(),a.startTime=t.endTime,u=s[0];break;case 2:a.id=at(),a.startTime=Pt(void 0,U,s[0]),u=s[1];break;case 3:a.id=at(s[0]),a.startTime=Pt(void 0,U,s[1]),u=s[2];break}return u&&(a.endTime=Ye(a.startTime,U,u,ht),a.manualEndTime=(0,P.default)(u,"YYYY-MM-DD",!0).isValid(),Le(a,U,ft,dt)),a},ki=function(t,i){let r;i.substr(0,1)===":"?r=i.substr(1,i.length):r=i;let s=r.split(","),a={};Ve(s,a,Me);for(let u=0;u<s.length;u++)s[u]=s[u].trim();switch(s.length){case 1:a.id=at(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:s[0]};break;case 2:a.id=at(),a.startTime={type:"getStartDate",startData:s[0]},a.endTime={data:s[1]};break;case 3:a.id=at(s[0]),a.startTime={type:"getStartDate",startData:s[1]},a.endTime={data:s[2]};break}return a},zt,pt,W=[],Fe={},yi=function(t,i){let r={section:ot,type:ot,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:i},task:t,classes:[]},s=ki(pt,i);r.raw.startTime=s.startTime,r.raw.endTime=s.endTime,r.id=s.id,r.prevTaskId=pt,r.active=s.active,r.done=s.done,r.crit=s.crit,r.milestone=s.milestone,r.order=Vt,Vt++;let a=W.push(r);pt=r.id,Fe[r.id]=a-1},it=function(t){let i=Fe[t];return W[i]},gi=function(t,i){let r={section:ot,type:ot,description:t,task:t,classes:[]},s=mi(zt,i);r.startTime=s.startTime,r.endTime=s.endTime,r.id=s.id,r.active=s.active,r.done=s.done,r.crit=s.crit,r.milestone=s.milestone,zt=r,Tt.push(r)},we=function(){let t=function(r){let s=W[r],a="";switch(W[r].raw.startTime.type){case"prevTaskEnd":{let u=it(s.prevTaskId);s.startTime=u.endTime;break}case"getStartDate":a=Pt(void 0,U,W[r].raw.startTime.startData),a&&(W[r].startTime=a);break}return W[r].startTime&&(W[r].endTime=Ye(W[r].startTime,U,W[r].raw.endTime.data,ht),W[r].endTime&&(W[r].processed=!0,W[r].manualEndTime=(0,P.default)(W[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Le(W[r],U,ft,dt))),W[r].processed},i=!0;for(let[r,s]of W.entries())t(r),i=i&&s.processed;return i},pi=function(t,i){let r=i;et().securityLevel!=="loose"&&(r=(0,De.sanitizeUrl)(i)),t.split(",").forEach(function(s){it(s)!==void 0&&(Oe(s,()=>{window.open(r,"_self")}),jt[s]=r)}),We(t,"clickable")},We=function(t,i){t.split(",").forEach(function(r){let s=it(r);s!==void 0&&s.classes.push(i)})},Ti=function(t,i,r){if(et().securityLevel!=="loose"||i===void 0)return;let s=[];if(typeof r=="string"){s=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let u=0;u<s.length;u++){let h=s[u].trim();h.charAt(0)==='"'&&h.charAt(h.length-1)==='"'&&(h=h.substr(1,h.length-2)),s[u]=h}}s.length===0&&s.push(t),it(t)!==void 0&&Oe(t,()=>{de.runFunc(i,...s)})},Oe=function(t,i){Xt.push(function(){let r=document.querySelector(`[id="${t}"]`);r!==null&&r.addEventListener("click",function(){i()})},function(){let r=document.querySelector(`[id="${t}-text"]`);r!==null&&r.addEventListener("click",function(){i()})})},bi=function(t,i,r){t.split(",").forEach(function(s){Ti(s,i,r)}),We(t,"clickable")},vi=function(t){Xt.forEach(function(i){i(t)})},xi={getConfig:()=>et().gantt,clear:Be,setDateFormat:Ze,getDateFormat:ii,enableInclusiveEndDates:Qe,endDatesAreInclusive:Je,enableTopAxis:Ke,topAxisEnabled:$e,setAxisFormat:je,getAxisFormat:He,setTickInterval:Ge,getTickInterval:Xe,setTodayMarker:qe,getTodayMarker:Ue,setAccTitle:me,getAccTitle:ke,setDiagramTitle:pe,getDiagramTitle:Te,setDisplayMode:ti,getDisplayMode:ei,setAccDescription:ye,getAccDescription:ge,addSection:ci,getSections:li,getTasks:ui,addTask:yi,findTaskById:it,addTaskOrg:gi,setIncludes:si,getIncludes:ni,setExcludes:ri,getExcludes:ai,setClickEvent:bi,setLink:pi,getLinks:oi,bindFunctions:vi,parseDuration:Ie,isInvalidDate:Ae,setWeekday:di,getWeekday:fi};function Ve(t,i,r){let s=!0;for(;s;)s=!1,r.forEach(function(a){let u="^\\s*"+a+"\\s*$",h=new RegExp(u);t[0].match(h)&&(i[a]=!0,t.shift(1),s=!0)})}var wi=function(){ut.debug("Something is calling, setConf, remove the call")},_e={monday:se,tuesday:ne,wednesday:re,thursday:ae,friday:oe,saturday:ce,sunday:ie},_i=(t,i)=>{let r=[...t].map(()=>-1/0),s=[...t].sort((u,h)=>u.startTime-h.startTime||u.order-h.order),a=0;for(let u of s)for(let h=0;h<r.length;h++)if(u.startTime>=r[h]){r[h]=u.endTime,u.order=h+i,h>a&&(a=h);break}return a},$,Di=function(t,i,r,s){let a=et().gantt,u=et().securityLevel,h;u==="sandbox"&&(h=lt("#i"+i));let b=u==="sandbox"?lt(h.nodes()[0].contentDocument.body):lt("body"),Y=u==="sandbox"?h.nodes()[0].contentDocument:document,M=Y.getElementById(i);$=M.parentElement.offsetWidth,$===void 0&&($=1200),a.useWidth!==void 0&&($=a.useWidth);let S=s.db.getTasks(),F=[];for(let k of S)F.push(k.type);F=G(F);let j={},m=2*a.topPadding;if(s.db.getDisplayMode()==="compact"||a.displayMode==="compact"){let k={};for(let T of S)k[T.section]===void 0?k[T.section]=[T]:k[T.section].push(T);let x=0;for(let T of Object.keys(k)){let p=_i(k[T],x)+1;x+=p,m+=p*(a.barHeight+a.barGap),j[T]=p}}else{m+=S.length*(a.barHeight+a.barGap);for(let k of F)j[k]=S.filter(x=>x.type===k).length}M.setAttribute("viewBox","0 0 "+$+" "+m);let w=b.select(`[id="${i}"]`),g=le().domain([Jt(S,function(k){return k.startTime}),Qt(S,function(k){return k.endTime})]).rangeRound([0,$-a.leftPadding-a.rightPadding]);function A(k,x){let T=k.startTime,p=x.startTime,n=0;return T>p?n=1:T<p&&(n=-1),n}S.sort(A),z(S,$,m),fe(w,m,$,a.useMaxWidth),w.append("text").text(s.db.getDiagramTitle()).attr("x",$/2).attr("y",a.titleTopMargin).attr("class","titleText");function z(k,x,T){let p=a.barHeight,n=p+a.barGap,d=a.topPadding,f=a.leftPadding,o=ee().domain([0,F.length]).range(["#00B9FA","#F95002"]).interpolate(te);q(n,d,f,x,T,k,s.db.getExcludes(),s.db.getIncludes()),H(f,d,x,T),N(k,n,d,f,p,o,x),R(n,d),B(f,d,x,T)}function N(k,x,T,p,n,d,f){let y=[...new Set(k.map(c=>c.order))].map(c=>k.find(v=>v.order===c));w.append("g").selectAll("rect").data(y).enter().append("rect").attr("x",0).attr("y",function(c,v){return v=c.order,v*x+T-2}).attr("width",function(){return f-a.rightPadding/2}).attr("height",x).attr("class",function(c){for(let[v,I]of F.entries())if(c.type===I)return"section section"+v%a.numberSectionStyles;return"section section0"});let e=w.append("g").selectAll("rect").data(k).enter(),L=s.db.getLinks();if(e.append("rect").attr("id",function(c){return c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?g(c.startTime)+p+.5*(g(c.endTime)-g(c.startTime))-.5*n:g(c.startTime)+p}).attr("y",function(c,v){return v=c.order,v*x+T}).attr("width",function(c){return c.milestone?n:g(c.renderEndTime||c.endTime)-g(c.startTime)}).attr("height",n).attr("transform-origin",function(c,v){return v=c.order,(g(c.startTime)+p+.5*(g(c.endTime)-g(c.startTime))).toString()+"px "+(v*x+T+.5*n).toString()+"px"}).attr("class",function(c){let v="task",I="";c.classes.length>0&&(I=c.classes.join(" "));let D=0;for(let[_,C]of F.entries())c.type===C&&(D=_%a.numberSectionStyles);let E="";return c.active?c.crit?E+=" activeCrit":E=" active":c.done?c.crit?E=" doneCrit":E=" done":c.crit&&(E+=" crit"),E.length===0&&(E=" task"),c.milestone&&(E=" milestone "+E),E+=D,E+=" "+I,v+E}),e.append("text").attr("id",function(c){return c.id+"-text"}).text(function(c){return c.task}).attr("font-size",a.fontSize).attr("x",function(c){let v=g(c.startTime),I=g(c.renderEndTime||c.endTime);c.milestone&&(v+=.5*(g(c.endTime)-g(c.startTime))-.5*n),c.milestone&&(I=v+n);let D=this.getBBox().width;return D>I-v?I+D+1.5*a.leftPadding>f?v+p-5:I+p+5:(I-v)/2+v+p}).attr("y",function(c,v){return v=c.order,v*x+a.barHeight/2+(a.fontSize/2-2)+T}).attr("text-height",n).attr("class",function(c){let v=g(c.startTime),I=g(c.endTime);c.milestone&&(I=v+n);let D=this.getBBox().width,E="";c.classes.length>0&&(E=c.classes.join(" "));let _=0;for(let[Z,Q]of F.entries())c.type===Q&&(_=Z%a.numberSectionStyles);let C="";return c.active&&(c.crit?C="activeCritText"+_:C="activeText"+_),c.done?c.crit?C=C+" doneCritText"+_:C=C+" doneText"+_:c.crit&&(C=C+" critText"+_),c.milestone&&(C+=" milestoneText"),D>I-v?I+D+1.5*a.leftPadding>f?E+" taskTextOutsideLeft taskTextOutside"+_+" "+C:E+" taskTextOutsideRight taskTextOutside"+_+" "+C+" width-"+D:E+" taskText taskText"+_+" "+C+" width-"+D}),et().securityLevel==="sandbox"){let c;c=lt("#i"+i);let v=c.nodes()[0].contentDocument;e.filter(function(I){return L[I.id]!==void 0}).each(function(I){var D=v.querySelector("#"+I.id),E=v.querySelector("#"+I.id+"-text");let _=D.parentNode;var C=v.createElement("a");C.setAttribute("xlink:href",L[I.id]),C.setAttribute("target","_top"),_.appendChild(C),C.appendChild(D),C.appendChild(E)})}}function q(k,x,T,p,n,d,f,o){if(f.length===0&&o.length===0)return;let y,e;for(let{startTime:D,endTime:E}of d)(y===void 0||D<y)&&(y=D),(e===void 0||E>e)&&(e=E);if(!y||!e)return;if((0,P.default)(e).diff((0,P.default)(y),"year")>5){ut.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let L=s.db.getDateFormat(),l=[],c=null,v=(0,P.default)(y);for(;v.valueOf()<=e;)s.db.isInvalidDate(v,L,f,o)?c?c.end=v:c={start:v,end:v}:c&&(l.push(c),c=null),v=v.add(1,"d");w.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",function(D){return"exclude-"+D.start.format("YYYY-MM-DD")}).attr("x",function(D){return g(D.start)+T}).attr("y",a.gridLineStartPadding).attr("width",function(D){let E=D.end.add(1,"day");return g(E)-g(D.start)}).attr("height",n-x-a.gridLineStartPadding).attr("transform-origin",function(D,E){return(g(D.start)+T+.5*(g(D.end)-g(D.start))).toString()+"px "+(E*k+.5*n).toString()+"px"}).attr("class","exclude-range")}function H(k,x,T,p){let n=$t(g).tickSize(-p+x+a.gridLineStartPadding).tickFormat(Et(s.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d")),f=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||a.tickInterval);if(f!==null){let o=f[1],y=f[2],e=s.db.getWeekday()||a.weekday;switch(y){case"millisecond":n.ticks(xt.every(o));break;case"second":n.ticks(wt.every(o));break;case"minute":n.ticks(_t.every(o));break;case"hour":n.ticks(Dt.every(o));break;case"day":n.ticks(Ct.every(o));break;case"week":n.ticks(_e[e].every(o));break;case"month":n.ticks(St.every(o));break}}if(w.append("g").attr("class","grid").attr("transform","translate("+k+", "+(p-50)+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||a.topAxis){let o=Kt(g).tickSize(-p+x+a.gridLineStartPadding).tickFormat(Et(s.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(f!==null){let y=f[1],e=f[2],L=s.db.getWeekday()||a.weekday;switch(e){case"millisecond":o.ticks(xt.every(y));break;case"second":o.ticks(wt.every(y));break;case"minute":o.ticks(_t.every(y));break;case"hour":o.ticks(Dt.every(y));break;case"day":o.ticks(Ct.every(y));break;case"week":o.ticks(_e[L].every(y));break;case"month":o.ticks(St.every(y));break}}w.append("g").attr("class","grid").attr("transform","translate("+k+", "+x+")").call(o).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function R(k,x){let T=0,p=Object.keys(j).map(n=>[n,j[n]]);w.append("g").selectAll("text").data(p).enter().append(function(n){let d=n[0].split(ue.lineBreakRegex),f=-(d.length-1)/2,o=Y.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("dy",f+"em");for(let[y,e]of d.entries()){let L=Y.createElementNS("http://www.w3.org/2000/svg","tspan");L.setAttribute("alignment-baseline","central"),L.setAttribute("x","10"),y>0&&L.setAttribute("dy","1em"),L.textContent=e,o.appendChild(L)}return o}).attr("x",10).attr("y",function(n,d){if(d>0)for(let f=0;f<d;f++)return T+=p[d-1][1],n[1]*k/2+T*k+x;else return n[1]*k/2+x}).attr("font-size",a.sectionFontSize).attr("class",function(n){for(let[d,f]of F.entries())if(n[0]===f)return"sectionTitle sectionTitle"+d%a.numberSectionStyles;return"sectionTitle"})}function B(k,x,T,p){let n=s.db.getTodayMarker();if(n==="off")return;let d=w.append("g").attr("class","today"),f=new Date,o=d.append("line");o.attr("x1",g(f)+k).attr("x2",g(f)+k).attr("y1",a.titleTopMargin).attr("y2",p-a.titleTopMargin).attr("class","today"),n!==""&&o.attr("style",n.replace(/,/g,";"))}function G(k){let x={},T=[];for(let p=0,n=k.length;p<n;++p)Object.prototype.hasOwnProperty.call(x,k[p])||(x[k[p]]=!0,T.push(k[p]));return T}},Ci={setConf:wi,draw:Di},Si=t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,Ei=Si,Oi={parser:Re,db:xi,renderer:Ci,styles:Ei};export{Oi as diagram};
