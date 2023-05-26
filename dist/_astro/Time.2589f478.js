import{r as et}from"./index.ed373d49.js";import{j as nt}from"./jsx-runtime.391947bd.js";var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function q(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var it={exports:{}};(function(_,V){(function(U,g){_.exports=g()})(Q,function(){var U=1e3,g=6e4,k=36e5,L="millisecond",p="second",a="minute",l="hour",m="day",C="week",y="month",D="quarter",Y="year",w="date",t="Invalid Date",i=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var n=["th","st","nd","rd"],e=o%100;return"["+o+(n[(e-20)%10]||n[e]||n[0])+"]"}},M=function(o,n,e){var f=String(o);return!f||f.length>=n?o:""+Array(n+1-f.length).join(e)+o},H={s:M,z:function(o){var n=-o.utcOffset(),e=Math.abs(n),f=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+M(f,2,"0")+":"+M(r,2,"0")},m:function o(n,e){if(n.date()<e.date())return-o(e,n);var f=12*(e.year()-n.year())+(e.month()-n.month()),r=n.clone().add(f,y),u=e-r<0,s=n.clone().add(f+(u?-1:1),y);return+(-(f+(e-r)/(u?r-s:s-r))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:y,y:Y,w:C,d:m,D:w,h:l,m:a,s:p,ms:L,Q:D}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},x="en",z={};z[x]=c;var O=function(o){return o instanceof W},b=function o(n,e,f){var r;if(!n)return x;if(typeof n=="string"){var u=n.toLowerCase();z[u]&&(r=u),e&&(z[u]=e,r=u);var s=n.split("-");if(!r&&s.length>1)return o(s[0])}else{var v=n.name;z[v]=n,r=v}return!f&&r&&(x=r),r||!f&&x},$=function(o,n){if(O(o))return o.clone();var e=typeof n=="object"?n:{};return e.date=o,e.args=arguments,new W(e)},h=H;h.l=b,h.i=O,h.w=function(o,n){return $(o,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var W=function(){function o(e){this.$L=b(e.locale,null,!0),this.parse(e)}var n=o.prototype;return n.parse=function(e){this.$d=function(f){var r=f.date,u=f.utc;if(r===null)return new Date(NaN);if(h.u(r))return new Date;if(r instanceof Date)return new Date(r);if(typeof r=="string"&&!/Z$/i.test(r)){var s=r.match(i);if(s){var v=s[2]-1||0,S=(s[7]||"0").substring(0,3);return u?new Date(Date.UTC(s[1],v,s[3]||1,s[4]||0,s[5]||0,s[6]||0,S)):new Date(s[1],v,s[3]||1,s[4]||0,s[5]||0,s[6]||0,S)}}return new Date(r)}(e),this.$x=e.x||{},this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return h},n.isValid=function(){return this.$d.toString()!==t},n.isSame=function(e,f){var r=$(e);return this.startOf(f)<=r&&r<=this.endOf(f)},n.isAfter=function(e,f){return $(e)<this.startOf(f)},n.isBefore=function(e,f){return this.endOf(f)<$(e)},n.$g=function(e,f,r){return h.u(e)?this[f]:this.set(r,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,f){var r=this,u=!!h.u(f)||f,s=h.p(e),v=function(I,Z){var j=h.w(r.$u?Date.UTC(r.$y,Z,I):new Date(r.$y,Z,I),r);return u?j:j.endOf(m)},S=function(I,Z){return h.w(r.toDate()[I].apply(r.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(Z)),r)},T=this.$W,A=this.$M,N=this.$D,E="set"+(this.$u?"UTC":"");switch(s){case Y:return u?v(1,0):v(31,11);case y:return u?v(1,A):v(0,A+1);case C:var J=this.$locale().weekStart||0,B=(T<J?T+7:T)-J;return v(u?N-B:N+(6-B),A);case m:case w:return S(E+"Hours",0);case l:return S(E+"Minutes",1);case a:return S(E+"Seconds",2);case p:return S(E+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,f){var r,u=h.p(e),s="set"+(this.$u?"UTC":""),v=(r={},r[m]=s+"Date",r[w]=s+"Date",r[y]=s+"Month",r[Y]=s+"FullYear",r[l]=s+"Hours",r[a]=s+"Minutes",r[p]=s+"Seconds",r[L]=s+"Milliseconds",r)[u],S=u===m?this.$D+(f-this.$W):f;if(u===y||u===Y){var T=this.clone().set(w,1);T.$d[v](S),T.init(),this.$d=T.set(w,Math.min(this.$D,T.daysInMonth())).$d}else v&&this.$d[v](S);return this.init(),this},n.set=function(e,f){return this.clone().$set(e,f)},n.get=function(e){return this[h.p(e)]()},n.add=function(e,f){var r,u=this;e=Number(e);var s=h.p(f),v=function(A){var N=$(u);return h.w(N.date(N.date()+Math.round(A*e)),u)};if(s===y)return this.set(y,this.$M+e);if(s===Y)return this.set(Y,this.$y+e);if(s===m)return v(1);if(s===C)return v(7);var S=(r={},r[a]=g,r[l]=k,r[p]=U,r)[s]||1,T=this.$d.getTime()+e*S;return h.w(T,this)},n.subtract=function(e,f){return this.add(-1*e,f)},n.format=function(e){var f=this,r=this.$locale();if(!this.isValid())return r.invalidDate||t;var u=e||"YYYY-MM-DDTHH:mm:ssZ",s=h.z(this),v=this.$H,S=this.$m,T=this.$M,A=r.weekdays,N=r.months,E=function(Z,j,G,P){return Z&&(Z[j]||Z(f,u))||G[j].slice(0,P)},J=function(Z){return h.s(v%12||12,Z,"0")},B=r.meridiem||function(Z,j,G){var P=Z<12?"AM":"PM";return G?P.toLowerCase():P},I={YY:String(this.$y).slice(-2),YYYY:this.$y,M:T+1,MM:h.s(T+1,2,"0"),MMM:E(r.monthsShort,T,N,3),MMMM:E(N,T),D:this.$D,DD:h.s(this.$D,2,"0"),d:String(this.$W),dd:E(r.weekdaysMin,this.$W,A,2),ddd:E(r.weekdaysShort,this.$W,A,3),dddd:A[this.$W],H:String(v),HH:h.s(v,2,"0"),h:J(1),hh:J(2),a:B(v,S,!0),A:B(v,S,!1),m:String(S),mm:h.s(S,2,"0"),s:String(this.$s),ss:h.s(this.$s,2,"0"),SSS:h.s(this.$ms,3,"0"),Z:s};return u.replace(d,function(Z,j){return j||I[Z]||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,f,r){var u,s=h.p(f),v=$(e),S=(v.utcOffset()-this.utcOffset())*g,T=this-v,A=h.m(this,v);return A=(u={},u[Y]=A/12,u[y]=A,u[D]=A/3,u[C]=(T-S)/6048e5,u[m]=(T-S)/864e5,u[l]=T/k,u[a]=T/g,u[p]=T/U,u)[s]||T,r?A:h.a(A)},n.daysInMonth=function(){return this.endOf(y).$D},n.$locale=function(){return z[this.$L]},n.locale=function(e,f){if(!e)return this.$L;var r=this.clone(),u=b(e,f,!0);return u&&(r.$L=u),r},n.clone=function(){return h.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},o}(),F=W.prototype;return $.prototype=F,[["$ms",L],["$s",p],["$m",a],["$H",l],["$W",m],["$M",y],["$y",Y],["$D",w]].forEach(function(o){F[o[1]]=function(n){return this.$g(n,o[0],o[1])}}),$.extend=function(o,n){return o.$i||(o(n,W,$),o.$i=!0),$},$.locale=b,$.isDayjs=O,$.unix=function(o){return $(1e3*o)},$.en=z[x],$.Ls=z,$.p={},$})})(it);var ct=it.exports;const X=q(ct);var st={exports:{}};(function(_,V){(function(U,g){_.exports=g()})(Q,function(){var U="minute",g=/[+-]\d\d(?::?\d\d)?/g,k=/([+-]|\d\d)/g;return function(L,p,a){var l=p.prototype;a.utc=function(t){var i={date:t,utc:!0,args:arguments};return new p(i)},l.utc=function(t){var i=a(this.toDate(),{locale:this.$L,utc:!0});return t?i.add(this.utcOffset(),U):i},l.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var m=l.parse;l.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),m.call(this,t)};var C=l.init;l.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else C.call(this)};var y=l.utcOffset;l.utcOffset=function(t,i){var d=this.$utils().u;if(d(t))return this.$u?0:d(this.$offset)?y.call(this):this.$offset;if(typeof t=="string"&&(t=function(x){x===void 0&&(x="");var z=x.match(g);if(!z)return null;var O=(""+z[0]).match(k)||["-",0,0],b=O[0],$=60*+O[1]+ +O[2];return $===0?0:b==="+"?$:-$}(t),t===null))return this;var c=Math.abs(t)<=16?60*t:t,M=this;if(i)return M.$offset=c,M.$u=t===0,M;if(t!==0){var H=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(M=this.local().add(c+H,U)).$offset=c,M.$x.$localOffset=H}else M=this.utc();return M};var D=l.format;l.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return D.call(this,i)},l.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var Y=l.toDate;l.toDate=function(t){return t==="s"&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():Y.call(this)};var w=l.diff;l.diff=function(t,i,d){if(t&&this.$u===t.$u)return w.call(this,t,i,d);var c=this.local(),M=a(t).local();return w.call(c,M,i,d)}}})})(st);var ht=st.exports;const dt=q(ht);var ot={exports:{}};(function(_,V){(function(U,g){_.exports=g()})(Q,function(){return function(U,g,k){g.prototype.isBetween=function(L,p,a,l){var m=k(L),C=k(p),y=(l=l||"()")[0]==="(",D=l[1]===")";return(y?this.isAfter(m,a):!this.isBefore(m,a))&&(D?this.isBefore(C,a):!this.isAfter(C,a))||(y?this.isBefore(m,a):!this.isAfter(m,a))&&(D?this.isAfter(C,a):!this.isBefore(C,a))}}})})(ot);var lt=ot.exports;const mt=q(lt);var at={exports:{}};(function(_,V){(function(U,g){_.exports=g()})(Q,function(){return function(U,g){var k=g.prototype,L=k.format;k.format=function(p){var a=this,l=this.$locale();if(!this.isValid())return L.bind(this)(p);var m=this.$utils(),C=(p||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(y){switch(y){case"Q":return Math.ceil((a.$M+1)/3);case"Do":return l.ordinal(a.$D);case"gggg":return a.weekYear();case"GGGG":return a.isoWeekYear();case"wo":return l.ordinal(a.week(),"W");case"w":case"ww":return m.s(a.week(),y==="w"?1:2,"0");case"W":case"WW":return m.s(a.isoWeek(),y==="W"?1:2,"0");case"k":case"kk":return m.s(String(a.$H===0?24:a.$H),y==="k"?1:2,"0");case"X":return Math.floor(a.$d.getTime()/1e3);case"x":return a.$d.getTime();case"z":return"["+a.offsetName()+"]";case"zzz":return"["+a.offsetName("long")+"]";default:return y}});return L.bind(this)(C)}}})})(at);var $t=at.exports;const vt=q($t);var ut={exports:{}};(function(_,V){(function(U,g){_.exports=g()})(Q,function(){var U={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},g=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,k=/\d\d/,L=/\d\d?/,p=/\d*[^-_:/,()\s\d]+/,a={},l=function(t){return(t=+t)+(t>68?1900:2e3)},m=function(t){return function(i){this[t]=+i}},C=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(i){if(!i||i==="Z")return 0;var d=i.match(/([+-]|\d\d)/g),c=60*d[1]+(+d[2]||0);return c===0?0:d[0]==="+"?-c:c}(t)}],y=function(t){var i=a[t];return i&&(i.indexOf?i:i.s.concat(i.f))},D=function(t,i){var d,c=a.meridiem;if(c){for(var M=1;M<=24;M+=1)if(t.indexOf(c(M,0,i))>-1){d=M>12;break}}else d=t===(i?"pm":"PM");return d},Y={A:[p,function(t){this.afternoon=D(t,!1)}],a:[p,function(t){this.afternoon=D(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[k,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[L,m("seconds")],ss:[L,m("seconds")],m:[L,m("minutes")],mm:[L,m("minutes")],H:[L,m("hours")],h:[L,m("hours")],HH:[L,m("hours")],hh:[L,m("hours")],D:[L,m("day")],DD:[k,m("day")],Do:[p,function(t){var i=a.ordinal,d=t.match(/\d+/);if(this.day=d[0],i)for(var c=1;c<=31;c+=1)i(c).replace(/\[|\]/g,"")===t&&(this.day=c)}],M:[L,m("month")],MM:[k,m("month")],MMM:[p,function(t){var i=y("months"),d=(y("monthsShort")||i.map(function(c){return c.slice(0,3)})).indexOf(t)+1;if(d<1)throw new Error;this.month=d%12||d}],MMMM:[p,function(t){var i=y("months").indexOf(t)+1;if(i<1)throw new Error;this.month=i%12||i}],Y:[/[+-]?\d+/,m("year")],YY:[k,function(t){this.year=l(t)}],YYYY:[/\d{4}/,m("year")],Z:C,ZZ:C};function w(t){var i,d;i=t,d=a&&a.formats;for(var c=(t=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function($,h,W){var F=W&&W.toUpperCase();return h||d[W]||U[W]||d[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(o,n,e){return n||e.slice(1)})})).match(g),M=c.length,H=0;H<M;H+=1){var x=c[H],z=Y[x],O=z&&z[0],b=z&&z[1];c[H]=b?{regex:O,parser:b}:x.replace(/^\[|\]$/g,"")}return function($){for(var h={},W=0,F=0;W<M;W+=1){var o=c[W];if(typeof o=="string")F+=o.length;else{var n=o.regex,e=o.parser,f=$.slice(F),r=n.exec(f)[0];e.call(h,r),$=$.replace(r,"")}}return function(u){var s=u.afternoon;if(s!==void 0){var v=u.hours;s?v<12&&(u.hours+=12):v===12&&(u.hours=0),delete u.afternoon}}(h),h}}return function(t,i,d){d.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(l=t.parseTwoDigitYear);var c=i.prototype,M=c.parse;c.parse=function(H){var x=H.date,z=H.utc,O=H.args;this.$u=z;var b=O[1];if(typeof b=="string"){var $=O[2]===!0,h=O[3]===!0,W=$||h,F=O[2];h&&(F=O[2]),a=this.$locale(),!$&&F&&(a=d.Ls[F]),this.$d=function(f,r,u){try{if(["x","X"].indexOf(r)>-1)return new Date((r==="X"?1e3:1)*f);var s=w(r)(f),v=s.year,S=s.month,T=s.day,A=s.hours,N=s.minutes,E=s.seconds,J=s.milliseconds,B=s.zone,I=new Date,Z=T||(v||S?1:I.getDate()),j=v||I.getFullYear(),G=0;v&&!S||(G=S>0?S-1:I.getMonth());var P=A||0,R=N||0,K=E||0,tt=J||0;return B?new Date(Date.UTC(j,G,Z,P,R,K,tt+60*B.offset*1e3)):u?new Date(Date.UTC(j,G,Z,P,R,K,tt)):new Date(j,G,Z,P,R,K,tt)}catch{return new Date("")}}(x,b,z),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),W&&x!=this.format(b)&&(this.$d=new Date("")),a={}}else if(b instanceof Array)for(var o=b.length,n=1;n<=o;n+=1){O[1]=b[n-1];var e=d.apply(this,O);if(e.isValid()){this.$d=e.$d,this.$L=e.$L,this.init();break}n===o&&(this.$d=new Date(""))}else M.call(this,H)}}})})(ut);var pt=ut.exports;const Mt=q(pt);var ft={exports:{}};(function(_,V){(function(U,g){_.exports=g()})(Q,function(){var U={year:0,month:1,day:2,hour:3,minute:4,second:5},g={};return function(k,L,p){var a,l=function(D,Y,w){w===void 0&&(w={});var t=new Date(D),i=function(d,c){c===void 0&&(c={});var M=c.timeZoneName||"short",H=d+"|"+M,x=g[H];return x||(x=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:d,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:M}),g[H]=x),x}(Y,w);return i.formatToParts(t)},m=function(D,Y){for(var w=l(D,Y),t=[],i=0;i<w.length;i+=1){var d=w[i],c=d.type,M=d.value,H=U[c];H>=0&&(t[H]=parseInt(M,10))}var x=t[3],z=x===24?0:x,O=t[0]+"-"+t[1]+"-"+t[2]+" "+z+":"+t[4]+":"+t[5]+":000",b=+D;return(p.utc(O).valueOf()-(b-=b%1e3))/6e4},C=L.prototype;C.tz=function(D,Y){D===void 0&&(D=a);var w=this.utcOffset(),t=this.toDate(),i=t.toLocaleString("en-US",{timeZone:D}),d=Math.round((t-new Date(i))/1e3/60),c=p(i).$set("millisecond",this.$ms).utcOffset(15*-Math.round(t.getTimezoneOffset()/15)-d,!0);if(Y){var M=c.utcOffset();c=c.add(w-M,"minute")}return c.$x.$timezone=D,c},C.offsetName=function(D){var Y=this.$x.$timezone||p.tz.guess(),w=l(this.valueOf(),Y,{timeZoneName:D}).find(function(t){return t.type.toLowerCase()==="timezonename"});return w&&w.value};var y=C.startOf;C.startOf=function(D,Y){if(!this.$x||!this.$x.$timezone)return y.call(this,D,Y);var w=p(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return y.call(w,D,Y).tz(this.$x.$timezone,!0)},p.tz=function(D,Y,w){var t=w&&Y,i=w||Y||a,d=m(+p(),i);if(typeof D!="string")return p(D).tz(i);var c=function(z,O,b){var $=z-60*O*1e3,h=m($,b);if(O===h)return[$,O];var W=m($-=60*(h-O)*1e3,b);return h===W?[$,h]:[z-60*Math.min(h,W)*1e3,Math.max(h,W)]}(p.utc(D,t).valueOf(),d,i),M=c[0],H=c[1],x=p(M).utcOffset(H);return x.$x.$timezone=i,x},p.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},p.tz.setDefault=function(D){a=D}}})})(ft);var gt=ft.exports;const Dt=q(gt);X.extend(dt);X.extend(mt);X.extend(vt);X.extend(Mt);X.extend(Dt);X.tz.setDefault("australia/brisbane");const rt=()=>X().tz(),yt={christmas:[25,12],newYear:[1,1],birthday:[12,29]},St=()=>{const[_,V]=et.useState(rt()),U=Object.entries(yt).filter(g=>g[1][0]===_.date()&&g[1][1]===_.month()+1).flat()[0];return et.useEffect(()=>{const g=setInterval(()=>V(rt()),1e3);return()=>clearInterval(g)},[]),nt.jsxs("p",{className:"inline",children:[_.format("dddd, MMMM Do, YYYY • hh:mm:ss A")," ",U&&nt.jsxs("span",{className:"font-bold",children:["—"," ",{christmas:"Merry Christmas!",newYear:"Happy New Year!",birthday:"Happy Birthday to me!"}[U]]})]})};export{St as default};