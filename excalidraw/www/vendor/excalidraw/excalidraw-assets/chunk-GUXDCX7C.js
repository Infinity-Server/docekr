import{Ga as k,Oa as F,Va as At,fb as Lt,gb as It,hb as Ot,ib as Nt,jb as Rt,kb as wt,lb as $t,nb as R}from"./chunk-OYEE5BD7.js";import{a as vt}from"./chunk-M2JW2GFW.js";vt();var gt=function(){var t=function(C,r,n,i){for(n=n||{},i=C.length;i--;n[C[i]]=r);return n},s=[1,2],a=[1,3],h=[1,4],f=[2,4],d=[1,9],y=[1,11],E=[1,15],u=[1,16],b=[1,17],T=[1,18],w=[1,30],j=[1,19],U=[1,20],z=[1,21],M=[1,22],H=[1,23],X=[1,25],K=[1,26],W=[1,27],J=[1,28],q=[1,29],Q=[1,32],Z=[1,33],tt=[1,34],et=[1,35],$=[1,31],c=[1,4,5,15,16,18,20,21,23,24,25,26,27,28,32,34,36,37,41,44,45,46,47,50],st=[1,4,5,13,14,15,16,18,20,21,23,24,25,26,27,28,32,34,36,37,41,44,45,46,47,50],Dt=[4,5,15,16,18,20,21,23,24,25,26,27,28,32,34,36,37,41,44,45,46,47,50],ht={trace:function(){},yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,cssClassStatement:11,idStatement:12,DESCR:13,"-->":14,HIDE_EMPTY:15,scale:16,WIDTH:17,COMPOSIT_STATE:18,STRUCT_START:19,STRUCT_STOP:20,STATE_DESCR:21,AS:22,ID:23,FORK:24,JOIN:25,CHOICE:26,CONCURRENT:27,note:28,notePosition:29,NOTE_TEXT:30,direction:31,acc_title:32,acc_title_value:33,acc_descr:34,acc_descr_value:35,acc_descr_multiline_value:36,classDef:37,CLASSDEF_ID:38,CLASSDEF_STYLEOPTS:39,DEFAULT:40,class:41,CLASSENTITY_IDS:42,STYLECLASS:43,direction_tb:44,direction_bt:45,direction_rl:46,direction_lr:47,eol:48,";":49,EDGE_STATE:50,STYLE_SEPARATOR:51,left_of:52,right_of:53,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",13:"DESCR",14:"-->",15:"HIDE_EMPTY",16:"scale",17:"WIDTH",18:"COMPOSIT_STATE",19:"STRUCT_START",20:"STRUCT_STOP",21:"STATE_DESCR",22:"AS",23:"ID",24:"FORK",25:"JOIN",26:"CHOICE",27:"CONCURRENT",28:"note",30:"NOTE_TEXT",32:"acc_title",33:"acc_title_value",34:"acc_descr",35:"acc_descr_value",36:"acc_descr_multiline_value",37:"classDef",38:"CLASSDEF_ID",39:"CLASSDEF_STYLEOPTS",40:"DEFAULT",41:"class",42:"CLASSENTITY_IDS",43:"STYLECLASS",44:"direction_tb",45:"direction_bt",46:"direction_rl",47:"direction_lr",49:";",50:"EDGE_STATE",51:"STYLE_SEPARATOR",52:"left_of",53:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[31,1],[31,1],[31,1],[31,1],[48,1],[48,1],[12,1],[12,1],[12,3],[12,3],[29,1],[29,1]],performAction:function(r,n,i,o,p,e,B){var l=e.length-1;switch(p){case 3:return o.setRootDoc(e[l]),e[l];case 4:this.$=[];break;case 5:e[l]!="nl"&&(e[l-1].push(e[l]),this.$=e[l-1]);break;case 6:case 7:this.$=e[l];break;case 8:this.$="nl";break;case 11:this.$=e[l];break;case 12:let P=e[l-1];P.description=o.trimColon(e[l]),this.$=P;break;case 13:this.$={stmt:"relation",state1:e[l-2],state2:e[l]};break;case 14:let ft=o.trimColon(e[l]);this.$={stmt:"relation",state1:e[l-3],state2:e[l-1],description:ft};break;case 18:this.$={stmt:"state",id:e[l-3],type:"default",description:"",doc:e[l-1]};break;case 19:var v=e[l],O=e[l-2].trim();if(e[l].match(":")){var it=e[l].split(":");v=it[0],O=[O,it[1]]}this.$={stmt:"state",id:v,type:"default",description:O};break;case 20:this.$={stmt:"state",id:e[l-3],type:"default",description:e[l-5],doc:e[l-1]};break;case 21:this.$={stmt:"state",id:e[l],type:"fork"};break;case 22:this.$={stmt:"state",id:e[l],type:"join"};break;case 23:this.$={stmt:"state",id:e[l],type:"choice"};break;case 24:this.$={stmt:"state",id:o.getDividerId(),type:"divider"};break;case 25:this.$={stmt:"state",id:e[l-1].trim(),note:{position:e[l-2].trim(),text:e[l].trim()}};break;case 28:this.$=e[l].trim(),o.setAccTitle(this.$);break;case 29:case 30:this.$=e[l].trim(),o.setAccDescription(this.$);break;case 31:case 32:this.$={stmt:"classDef",id:e[l-1].trim(),classes:e[l].trim()};break;case 33:this.$={stmt:"applyClass",id:e[l-1].trim(),styleClass:e[l].trim()};break;case 34:o.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 35:o.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 36:o.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 37:o.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 40:case 41:this.$={stmt:"state",id:e[l].trim(),type:"default",description:""};break;case 42:this.$={stmt:"state",id:e[l-2].trim(),classes:[e[l].trim()],type:"default",description:""};break;case 43:this.$={stmt:"state",id:e[l-2].trim(),classes:[e[l].trim()],type:"default",description:""};break}},table:[{3:1,4:s,5:a,6:h},{1:[3]},{3:5,4:s,5:a,6:h},{3:6,4:s,5:a,6:h},t([1,4,5,15,16,18,21,23,24,25,26,27,28,32,34,36,37,41,44,45,46,47,50],f,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:d,5:y,8:8,9:10,10:12,11:13,12:14,15:E,16:u,18:b,21:T,23:w,24:j,25:U,26:z,27:M,28:H,31:24,32:X,34:K,36:W,37:J,41:q,44:Q,45:Z,46:tt,47:et,50:$},t(c,[2,5]),{9:36,10:12,11:13,12:14,15:E,16:u,18:b,21:T,23:w,24:j,25:U,26:z,27:M,28:H,31:24,32:X,34:K,36:W,37:J,41:q,44:Q,45:Z,46:tt,47:et,50:$},t(c,[2,7]),t(c,[2,8]),t(c,[2,9]),t(c,[2,10]),t(c,[2,11],{13:[1,37],14:[1,38]}),t(c,[2,15]),{17:[1,39]},t(c,[2,17],{19:[1,40]}),{22:[1,41]},t(c,[2,21]),t(c,[2,22]),t(c,[2,23]),t(c,[2,24]),{29:42,30:[1,43],52:[1,44],53:[1,45]},t(c,[2,27]),{33:[1,46]},{35:[1,47]},t(c,[2,30]),{38:[1,48],40:[1,49]},{42:[1,50]},t(st,[2,40],{51:[1,51]}),t(st,[2,41],{51:[1,52]}),t(c,[2,34]),t(c,[2,35]),t(c,[2,36]),t(c,[2,37]),t(c,[2,6]),t(c,[2,12]),{12:53,23:w,50:$},t(c,[2,16]),t(Dt,f,{7:54}),{23:[1,55]},{23:[1,56]},{22:[1,57]},{23:[2,44]},{23:[2,45]},t(c,[2,28]),t(c,[2,29]),{39:[1,58]},{39:[1,59]},{43:[1,60]},{23:[1,61]},{23:[1,62]},t(c,[2,13],{13:[1,63]}),{4:d,5:y,8:8,9:10,10:12,11:13,12:14,15:E,16:u,18:b,20:[1,64],21:T,23:w,24:j,25:U,26:z,27:M,28:H,31:24,32:X,34:K,36:W,37:J,41:q,44:Q,45:Z,46:tt,47:et,50:$},t(c,[2,19],{19:[1,65]}),{30:[1,66]},{23:[1,67]},t(c,[2,31]),t(c,[2,32]),t(c,[2,33]),t(st,[2,42]),t(st,[2,43]),t(c,[2,14]),t(c,[2,18]),t(Dt,f,{7:68}),t(c,[2,25]),t(c,[2,26]),{4:d,5:y,8:8,9:10,10:12,11:13,12:14,15:E,16:u,18:b,20:[1,69],21:T,23:w,24:j,25:U,26:z,27:M,28:H,31:24,32:X,34:K,36:W,37:J,41:q,44:Q,45:Z,46:tt,47:et,50:$},t(c,[2,20])],defaultActions:{5:[2,1],6:[2,2],44:[2,44],45:[2,45]},parseError:function(r,n){if(n.recoverable)this.trace(r);else{var i=new Error(r);throw i.hash=n,i}},parse:function(r){var n=this,i=[0],o=[],p=[null],e=[],B=this.table,l="",v=0,O=0,it=2,P=1,ft=e.slice.call(arguments,1),S=Object.create(this.lexer),A={yy:{}};for(var dt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,dt)&&(A.yy[dt]=this.yy[dt]);S.setInput(r,A.yy),A.yy.lexer=S,A.yy.parser=this,typeof S.yylloc>"u"&&(S.yylloc={});var yt=S.yylloc;e.push(yt);var Jt=S.options&&S.options.ranges;typeof A.yy.parseError=="function"?this.parseError=A.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function qt(){var D;return D=o.pop()||S.lex()||P,typeof D!="number"&&(D instanceof Array&&(o=D,D=o.pop()),D=n.symbols_[D]||D),D}for(var _,L,m,pt,N={},rt,x,Ct,nt;;){if(L=i[i.length-1],this.defaultActions[L]?m=this.defaultActions[L]:((_===null||typeof _>"u")&&(_=qt()),m=B[L]&&B[L][_]),typeof m>"u"||!m.length||!m[0]){var St="";nt=[];for(rt in B[L])this.terminals_[rt]&&rt>it&&nt.push("'"+this.terminals_[rt]+"'");S.showPosition?St="Parse error on line "+(v+1)+`:
`+S.showPosition()+`
Expecting `+nt.join(", ")+", got '"+(this.terminals_[_]||_)+"'":St="Parse error on line "+(v+1)+": Unexpected "+(_==P?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(St,{text:S.match,token:this.terminals_[_]||_,line:S.yylineno,loc:yt,expected:nt})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+L+", token: "+_);switch(m[0]){case 1:i.push(_),p.push(S.yytext),e.push(S.yylloc),i.push(m[1]),_=null,O=S.yyleng,l=S.yytext,v=S.yylineno,yt=S.yylloc;break;case 2:if(x=this.productions_[m[1]][1],N.$=p[p.length-x],N._$={first_line:e[e.length-(x||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(x||1)].first_column,last_column:e[e.length-1].last_column},Jt&&(N._$.range=[e[e.length-(x||1)].range[0],e[e.length-1].range[1]]),pt=this.performAction.apply(N,[l,O,v,A.yy,m[1],p,e].concat(ft)),typeof pt<"u")return pt;x&&(i=i.slice(0,-1*x*2),p=p.slice(0,-1*x),e=e.slice(0,-1*x)),i.push(this.productions_[m[1]][0]),p.push(N.$),e.push(N._$),Ct=B[i[i.length-2]][i[i.length-1]],i.push(Ct);break;case 3:return!0}}return!0}},Wt=function(){var C={EOF:1,parseError:function(n,i){if(this.yy.parser)this.yy.parser.parseError(n,i);else throw new Error(n)},setInput:function(r,n){return this.yy=n||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var n=r.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var n=r.length,i=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===o.length?this.yylloc.first_column:0)+o[o.length-i.length].length-i[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),n=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+n+"^"},test_match:function(r,n){var i,o,p;if(this.options.backtrack_lexer&&(p={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(p.yylloc.range=this.yylloc.range.slice(0))),o=r[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],i=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var e in p)this[e]=p[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,n,i,o;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),e=0;e<p.length;e++)if(i=this._input.match(this.rules[p[e]]),i&&(!n||i[0].length>n[0].length)){if(n=i,o=e,this.options.backtrack_lexer){if(r=this.test_match(i,p[e]),r!==!1)return r;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(r=this.test_match(n,p[o]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var n=this.next();return n||this.lex()},begin:function(n){this.conditionStack.push(n)},popState:function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},pushState:function(n){this.begin(n)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(n,i,o,p){switch(o){case 0:return 40;case 1:return 44;case 2:return 45;case 3:return 46;case 4:return 47;case 5:break;case 6:break;case 7:return 5;case 8:break;case 9:break;case 10:break;case 11:break;case 12:return this.pushState("SCALE"),16;case 13:return 17;case 14:this.popState();break;case 15:return this.begin("acc_title"),32;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),34;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 20:this.popState();break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),37;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),38;case 25:return this.popState(),39;case 26:return this.pushState("CLASS"),41;case 27:return this.popState(),this.pushState("CLASS_STYLE"),42;case 28:return this.popState(),43;case 29:return this.pushState("SCALE"),16;case 30:return 17;case 31:this.popState();break;case 32:this.pushState("STATE");break;case 33:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),24;case 34:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),25;case 35:return this.popState(),i.yytext=i.yytext.slice(0,-10).trim(),26;case 36:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),24;case 37:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),25;case 38:return this.popState(),i.yytext=i.yytext.slice(0,-10).trim(),26;case 39:return 44;case 40:return 45;case 41:return 46;case 42:return 47;case 43:this.pushState("STATE_STRING");break;case 44:return this.pushState("STATE_ID"),"AS";case 45:return this.popState(),"ID";case 46:this.popState();break;case 47:return"STATE_DESCR";case 48:return 18;case 49:this.popState();break;case 50:return this.popState(),this.pushState("struct"),19;case 51:break;case 52:return this.popState(),20;case 53:break;case 54:return this.begin("NOTE"),28;case 55:return this.popState(),this.pushState("NOTE_ID"),52;case 56:return this.popState(),this.pushState("NOTE_ID"),53;case 57:this.popState(),this.pushState("FLOATING_NOTE");break;case 58:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 59:break;case 60:return"NOTE_TEXT";case 61:return this.popState(),"ID";case 62:return this.popState(),this.pushState("NOTE_TEXT"),23;case 63:return this.popState(),i.yytext=i.yytext.substr(2).trim(),30;case 64:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),30;case 65:return 6;case 66:return 6;case 67:return 15;case 68:return 50;case 69:return 23;case 70:return i.yytext=i.yytext.trim(),13;case 71:return 14;case 72:return 27;case 73:return 51;case 74:return 5;case 75:return"INVALID"}},rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,32,39,40,41,42,51,52,53,54,68,69,70,71,72],inclusive:!1},FLOATING_NOTE_ID:{rules:[61],inclusive:!1},FLOATING_NOTE:{rules:[58,59,60],inclusive:!1},NOTE_TEXT:{rules:[63,64],inclusive:!1},NOTE_ID:{rules:[62],inclusive:!1},NOTE:{rules:[55,56,57],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,30,31],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[45],inclusive:!1},STATE_STRING:{rules:[46,47],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,33,34,35,36,37,38,43,44,48,49,50],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,50,54,65,66,67,68,69,70,71,73,74,75],inclusive:!0}}};return C}();ht.lexer=Wt;function ut(){this.yy={}}return ut.prototype=ht,ht.Parser=ut,new ut}();gt.parser=gt;var ve=gt,Qt="LR",Ae="TB",_t="state",Vt="relation",Zt="classDef",te="applyClass",Et="default",ee="divider",bt="[*]",Yt="start",Gt=bt,jt="end",Bt="color",Pt="fill",se="bgFill",ie=",";function Ut(){return{}}var zt=Qt,ct=[],V=Ut(),Mt=()=>({relations:[],states:{},documents:{}}),ot={root:Mt()},g=ot.root,Y=0,Ft=0,re={LINE:0,DOTTED_LINE:1},ne={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},at=t=>JSON.parse(JSON.stringify(t)),ae=t=>{k.info("Setting root doc",t),ct=t},le=()=>ct,lt=(t,s,a)=>{if(s.stmt===Vt)lt(t,s.state1,!0),lt(t,s.state2,!1);else if(s.stmt===_t&&(s.id==="[*]"?(s.id=a?t.id+"_start":t.id+"_end",s.start=a):s.id=s.id.trim()),s.doc){let h=[],f=[],d;for(d=0;d<s.doc.length;d++)if(s.doc[d].type===ee){let y=at(s.doc[d]);y.doc=at(f),h.push(y),f=[]}else f.push(s.doc[d]);if(h.length>0&&f.length>0){let y={stmt:_t,id:At(),type:"divider",doc:at(f)};h.push(at(y)),s.doc=h}s.doc.forEach(y=>lt(s,y,!0))}},ce=()=>(lt({id:"root"},{id:"root",doc:ct},!0),{id:"root",doc:ct}),oe=t=>{let s;t.doc?s=t.doc:s=t,k.info(s),Ht(!0),k.info("Extract",s),s.forEach(a=>{switch(a.stmt){case _t:I(a.id.trim(),a.type,a.doc,a.description,a.note,a.classes,a.styles,a.textStyles);break;case Vt:Xt(a.state1,a.state2,a.description);break;case Zt:Kt(a.id.trim(),a.classes);break;case te:xt(a.id.trim(),a.styleClass);break}})},I=function(t,s=Et,a=null,h=null,f=null,d=null,y=null,E=null){let u=t?.trim();g.states[u]===void 0?(k.info("Adding state ",u,h),g.states[u]={id:u,descriptions:[],type:s,doc:a,note:f,classes:[],styles:[],textStyles:[]}):(g.states[u].doc||(g.states[u].doc=a),g.states[u].type||(g.states[u].type=s)),h&&(k.info("Setting state description",u,h),typeof h=="string"&&kt(u,h.trim()),typeof h=="object"&&h.forEach(b=>kt(u,b.trim()))),f&&(g.states[u].note=f,g.states[u].note.text=F.sanitizeText(g.states[u].note.text,R())),d&&(k.info("Setting state classes",u,d),(typeof d=="string"?[d]:d).forEach(T=>xt(u,T.trim()))),y&&(k.info("Setting state styles",u,y),(typeof y=="string"?[y]:y).forEach(T=>me(u,T.trim()))),E&&(k.info("Setting state styles",u,y),(typeof E=="string"?[E]:E).forEach(T=>Te(u,T.trim())))},Ht=function(t){ot={root:Mt()},g=ot.root,Y=0,V=Ut(),t||Lt()},G=function(t){return g.states[t]},he=function(){return g.states},ue=function(){k.info("Documents = ",ot)},fe=function(){return g.relations};function mt(t=""){let s=t;return t===bt&&(Y++,s=`${Yt}${Y}`),s}function Tt(t="",s=Et){return t===bt?Yt:s}function de(t=""){let s=t;return t===Gt&&(Y++,s=`${jt}${Y}`),s}function ye(t="",s=Et){return t===Gt?jt:s}function pe(t,s,a){let h=mt(t.id.trim()),f=Tt(t.id.trim(),t.type),d=mt(s.id.trim()),y=Tt(s.id.trim(),s.type);I(h,f,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),I(d,y,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),g.relations.push({id1:h,id2:d,relationTitle:F.sanitizeText(a,R())})}var Xt=function(t,s,a){if(typeof t=="object")pe(t,s,a);else{let h=mt(t.trim()),f=Tt(t),d=de(s.trim()),y=ye(s);I(h,f),I(d,y),g.relations.push({id1:h,id2:d,title:F.sanitizeText(a,R())})}},kt=function(t,s){let a=g.states[t],h=s.startsWith(":")?s.replace(":","").trim():s;a.descriptions.push(F.sanitizeText(h,R()))},Se=function(t){return t.substring(0,1)===":"?t.substr(2).trim():t.trim()},ge=()=>(Ft++,"divider-id-"+Ft),Kt=function(t,s=""){V[t]===void 0&&(V[t]={id:t,styles:[],textStyles:[]});let a=V[t];s?.split(ie).forEach(h=>{let f=h.replace(/([^;]*);/,"$1").trim();if(h.match(Bt)){let y=f.replace(Pt,se).replace(Bt,Pt);a.textStyles.push(y)}a.styles.push(f)})},_e=function(){return V},xt=function(t,s){t.split(",").forEach(function(a){let h=G(a);if(h===void 0){let f=a.trim();I(f),h=G(f)}h.classes.push(s)})},me=function(t,s){let a=G(t);a!==void 0&&a.textStyles.push(s)},Te=function(t,s){let a=G(t);a!==void 0&&a.textStyles.push(s)},ke=()=>zt,Ee=t=>{zt=t},be=t=>t&&t[0]===":"?t.substr(1).trim():t.trim(),Le={getConfig:()=>R().state,addState:I,clear:Ht,getState:G,getStates:he,getRelations:fe,getClasses:_e,getDirection:ke,addRelation:Xt,getDividerId:ge,setDirection:Ee,cleanupLabel:Se,lineType:re,relationType:ne,logDocuments:ue,getRootDoc:le,setRootDoc:ae,getRootDocV2:ce,extract:oe,trimColon:be,getAccTitle:Ot,setAccTitle:It,getAccDescription:Rt,setAccDescription:Nt,addStyleClass:Kt,setCssClass:xt,addDescription:kt,setDiagramTitle:wt,getDiagramTitle:$t},xe=t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,Ie=xe;export{ve as a,Ae as b,_t as c,Vt as d,Et as e,ee as f,Le as g,Ie as h};
