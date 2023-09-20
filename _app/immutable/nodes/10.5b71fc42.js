import{S as Ve,i as Be,s as Pe,k as f,l as h,n as u,b as j,I as K,P as se,h as i,N as lt,q as w,a as k,m as v,r as C,c as I,C as it,H as t,R as be,T as tt,v as ot,d as q,f as st,g as W,U as rt,M as ct,y as ve,z as pe,A as _e,B as ye}from"../chunks/index.7163ae9f.js";import{C as ut}from"../chunks/Content.ccc0635d.js";import{P as dt}from"../chunks/PageHeader.4dc60a24.js";function ft(c){let e,n,a;return{c(){e=f("input"),this.h()},l(d){e=h(d,"INPUT",{type:!0,name:!0}),this.h()},h(){u(e,"type","checkbox"),u(e,"name",c[0]),e.__value=c[1],e.value=e.__value},m(d,b){j(d,e,b),e.checked=c[3],n||(a=[K(e,"change",c[4]),K(e,"change",c[5])],n=!0)},p(d,[b]){b&1&&u(e,"name",d[0]),b&2&&(e.__value=d[1],e.value=e.__value),b&8&&(e.checked=d[3])},i:se,o:se,d(d){d&&i(e),n=!1,lt(a)}}}function ht(c,e,n){let a=!1,{name:d=""}=e,{value:b="on"}=e,{onChange:r}=e;function o(){a=this.checked,n(3,a)}const E=()=>r(a);return c.$$set=l=>{"name"in l&&n(0,d=l.name),"value"in l&&n(1,b=l.value),"onChange"in l&&n(2,r=l.onChange)},[d,b,r,a,o,E]}class mt extends Ve{constructor(e){super(),Be(this,e,ht,ft,Pe,{name:0,value:1,onChange:2})}}function at(c,e,n){const a=c.slice();return a[13]=e[n],a}function bt(c){let e,n,a,d,b,r,o,E;return{c(){e=f("div"),n=f("label"),a=w("Sensitive (optional)"),d=k(),b=f("div"),r=f("label"),o=f("input"),E=w(`
                    This message could constitute a direct complaint about the behaviour
                    of a Committee member (and not just a comment on a specific policy),
                    and so should be shared only with the Exec so that it can be
                    passed on discretely.`),this.h()},l(l){e=h(l,"DIV",{class:!0});var s=v(e);n=h(s,"LABEL",{class:!0});var m=v(n);a=C(m,"Sensitive (optional)"),m.forEach(i),d=I(s),b=h(s,"DIV",{class:!0});var _=v(b);r=h(_,"LABEL",{class:!0});var L=v(r);o=h(L,"INPUT",{type:!0,name:!0}),E=C(L,`
                    This message could constitute a direct complaint about the behaviour
                    of a Committee member (and not just a comment on a specific policy),
                    and so should be shared only with the Exec so that it can be
                    passed on discretely.`),L.forEach(i),_.forEach(i),s.forEach(i),this.h()},h(){u(n,"class","label"),u(o,"type","checkbox"),u(o,"name","exec"),u(r,"class","checkbox"),u(b,"class","control"),u(e,"class","field")},m(l,s){j(l,e,s),t(e,n),t(n,a),t(e,d),t(e,b),t(b,r),t(r,o),t(r,E)},p:se,i:se,o:se,d(l){l&&i(e)}}}function vt(c){let e,n,a,d,b,r=c[6],o=[];for(let l=0;l<r.length;l+=1)o[l]=nt(at(c,r,l));const E=l=>q(o[l],1,1,()=>{o[l]=null});return{c(){e=f("div"),n=f("label"),a=w("Share With"),d=k();for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){e=h(l,"DIV",{class:!0});var s=v(e);n=h(s,"LABEL",{class:!0});var m=v(n);a=C(m,"Share With"),m.forEach(i),d=I(s);for(let _=0;_<o.length;_+=1)o[_].l(s);s.forEach(i),this.h()},h(){u(n,"class","label"),u(e,"class","field")},m(l,s){j(l,e,s),t(e,n),t(n,a),t(e,d);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(e,null);b=!0},p(l,s){if(s&112){r=l[6];let m;for(m=0;m<r.length;m+=1){const _=at(l,r,m);o[m]?(o[m].p(_,s),W(o[m],1)):(o[m]=nt(_),o[m].c(),W(o[m],1),o[m].m(e,null))}for(ot(),m=r.length;m<o.length;m+=1)E(m);st()}},i(l){if(!b){for(let s=0;s<r.length;s+=1)W(o[s]);b=!0}},o(l){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)q(o[s]);b=!1},d(l){l&&i(e),ct(o,l)}}}function nt(c){let e,n,a,d,b=c[5][c[13]]+"",r,o,E;function l(...s){return c[11](c[13],...s)}return a=new mt({props:{name:"share-with",value:c[13],onChange:l}}),{c(){e=f("div"),n=f("label"),ve(a.$$.fragment),d=k(),r=w(b),o=k(),this.h()},l(s){e=h(s,"DIV",{class:!0});var m=v(e);n=h(m,"LABEL",{class:!0});var _=v(n);pe(a.$$.fragment,_),d=I(_),r=C(_,b),_.forEach(i),o=I(m),m.forEach(i),this.h()},h(){u(n,"class","checkbox"),u(e,"class","control")},m(s,m){j(s,e,m),t(e,n),_e(a,n,null),t(n,d),t(n,r),t(e,o),E=!0},p(s,m){c=s;const _={};m&16&&(_.onChange=l),a.$set(_)},i(s){E||(W(a.$$.fragment,s),E=!0)},o(s){q(a.$$.fragment,s),E=!1},d(s){s&&i(e),ye(a)}}}function pt(c){let e,n,a,d,b,r,o,E,l,s,m,_,L,D,U,$,V,G,R,N,B,p,T,O,P,Z,x,S,A,ce,F,ee,ge,Ee,te,Q,ie,ke,Ie,H,ae,we,Ce,ne,X,M,Le,$e,le,oe,Y,Te,ue,re,De,Ne;const Ue=[vt,bt],z=[];function Re(g,y){return g[2]=="specified"?0:1}return S=Re(c),A=z[S]=Ue[S](c),{c(){e=f("form"),n=f("div"),a=f("label"),d=w("Subject"),b=k(),r=f("div"),o=f("input"),E=k(),l=f("div"),s=f("label"),m=w("Message"),_=k(),L=f("div"),D=f("textarea"),U=k(),$=f("div"),V=f("label"),G=w("Share With"),R=k(),N=f("div"),B=f("div"),p=f("select"),T=f("option"),O=w("Committee"),P=f("option"),Z=w("Specific officers only"),x=k(),A.c(),ce=k(),F=f("div"),ee=f("label"),ge=w("Anonymity (optional)"),Ee=k(),te=f("div"),Q=f("label"),ie=f("input"),ke=w(`
                I wish to remain anonymous, but accept that my email may be accessed
                under the exceptional circumstances outlined in the terms and conditions
                (below). I accept that the JCR Committee may be limited in the action
                they can take, for example due to concerns about the authenticity
                of the information provided.`),Ie=k(),H=f("div"),ae=f("label"),we=w("Terms and Conditions"),Ce=k(),ne=f("div"),X=f("label"),M=f("input"),Le=w(`
                I agree to the terms and conditions (see below)`),$e=k(),le=f("div"),oe=f("div"),Y=f("button"),Te=w("Login & Submit"),this.h()},l(g){e=h(g,"FORM",{action:!0,method:!0});var y=v(e);n=h(y,"DIV",{class:!0});var J=v(n);a=h(J,"LABEL",{class:!0});var je=v(a);d=C(je,"Subject"),je.forEach(i),b=I(J),r=h(J,"DIV",{class:!0});var We=v(r);o=h(We,"INPUT",{name:!0,class:!0,type:!0,placeholder:!0}),We.forEach(i),J.forEach(i),E=I(y),l=h(y,"DIV",{class:!0});var de=v(l);s=h(de,"LABEL",{class:!0});var Fe=v(s);m=C(Fe,"Message"),Fe.forEach(i),_=I(de),L=h(de,"DIV",{class:!0});var He=v(L);D=h(He,"TEXTAREA",{name:!0,class:!0,placeholder:!0}),v(D).forEach(i),He.forEach(i),de.forEach(i),U=I(y),$=h(y,"DIV",{class:!0});var fe=v($);V=h(fe,"LABEL",{class:!0});var Me=v(V);G=C(Me,"Share With"),Me.forEach(i),R=I(fe),N=h(fe,"DIV",{class:!0});var Ye=v(N);B=h(Ye,"DIV",{class:!0});var ze=v(B);p=h(ze,"SELECT",{name:!0});var Se=v(p);T=h(Se,"OPTION",{});var Je=v(T);O=C(Je,"Committee"),Je.forEach(i),P=h(Se,"OPTION",{});var qe=v(P);Z=C(qe,"Specific officers only"),qe.forEach(i),Se.forEach(i),ze.forEach(i),Ye.forEach(i),fe.forEach(i),x=I(y),A.l(y),ce=I(y),F=h(y,"DIV",{class:!0});var he=v(F);ee=h(he,"LABEL",{class:!0});var Ge=v(ee);ge=C(Ge,"Anonymity (optional)"),Ge.forEach(i),Ee=I(he),te=h(he,"DIV",{class:!0});var Qe=v(te);Q=h(Qe,"LABEL",{class:!0});var Ae=v(Q);ie=h(Ae,"INPUT",{type:!0,name:!0}),ke=C(Ae,`
                I wish to remain anonymous, but accept that my email may be accessed
                under the exceptional circumstances outlined in the terms and conditions
                (below). I accept that the JCR Committee may be limited in the action
                they can take, for example due to concerns about the authenticity
                of the information provided.`),Ae.forEach(i),Qe.forEach(i),he.forEach(i),Ie=I(y),H=h(y,"DIV",{class:!0});var me=v(H);ae=h(me,"LABEL",{class:!0});var Xe=v(ae);we=C(Xe,"Terms and Conditions"),Xe.forEach(i),Ce=I(me),ne=h(me,"DIV",{class:!0});var Ke=v(ne);X=h(Ke,"LABEL",{class:!0});var Oe=v(X);M=h(Oe,"INPUT",{name:!0,type:!0}),Le=C(Oe,`
                I agree to the terms and conditions (see below)`),Oe.forEach(i),Ke.forEach(i),me.forEach(i),$e=I(y),le=h(y,"DIV",{class:!0});var Ze=v(le);oe=h(Ze,"DIV",{class:!0});var xe=v(oe);Y=h(xe,"BUTTON",{class:!0});var et=v(Y);Te=C(et,"Login & Submit"),et.forEach(i),xe.forEach(i),Ze.forEach(i),y.forEach(i),this.h()},h(){u(a,"class","label"),u(o,"name","subject"),u(o,"class","input"),u(o,"type","text"),u(o,"placeholder","e.g. Upper Hall Prices"),u(r,"class","control"),u(n,"class","field"),u(s,"class","label"),u(D,"name","message"),u(D,"class","textarea"),u(D,"placeholder","e.g. Hi, just wanted to let you know that..."),u(L,"class","control"),u(l,"class","field"),u(V,"class","label"),T.__value="committee",T.value=T.__value,P.__value="specified",P.value=P.__value,u(p,"name","type"),c[2]===void 0&&it(()=>c[9].call(p)),u(B,"class","select"),u(N,"class","control"),u($,"class","field"),u(ee,"class","label"),u(ie,"type","checkbox"),u(ie,"name","anonymous"),u(Q,"class","checkbox"),u(te,"class","control"),u(F,"class","field"),u(ae,"class","label"),u(M,"name","agreed"),u(M,"type","checkbox"),u(X,"class","checkbox"),u(ne,"class","control"),u(H,"class","field"),u(Y,"class","button is-link"),Y.disabled=ue=!c[3]||c[2]=="specified"&&c[4].size==0||c[0].length==0||c[1].length==0,u(oe,"class","control"),u(le,"class","field mt-5"),u(e,"action","https://members.thejcr.co.uk/api/feedback"),u(e,"method","POST")},m(g,y){j(g,e,y),t(e,n),t(n,a),t(a,d),t(n,b),t(n,r),t(r,o),be(o,c[0]),t(e,E),t(e,l),t(l,s),t(s,m),t(l,_),t(l,L),t(L,D),be(D,c[1]),t(e,U),t(e,$),t($,V),t(V,G),t($,R),t($,N),t(N,B),t(B,p),t(p,T),t(T,O),t(p,P),t(P,Z),tt(p,c[2],!0),t(e,x),z[S].m(e,null),t(e,ce),t(e,F),t(F,ee),t(ee,ge),t(F,Ee),t(F,te),t(te,Q),t(Q,ie),t(Q,ke),t(e,Ie),t(e,H),t(H,ae),t(ae,we),t(H,Ce),t(H,ne),t(ne,X),t(X,M),M.checked=c[3],t(X,Le),t(e,$e),t(e,le),t(le,oe),t(oe,Y),t(Y,Te),re=!0,De||(Ne=[K(o,"input",c[7]),K(D,"input",c[8]),K(p,"change",c[9]),K(p,"change",c[10]),K(M,"change",c[12])],De=!0)},p(g,[y]){y&1&&o.value!==g[0]&&be(o,g[0]),y&2&&be(D,g[1]),y&4&&tt(p,g[2]);let J=S;S=Re(g),S===J?z[S].p(g,y):(ot(),q(z[J],1,1,()=>{z[J]=null}),st(),A=z[S],A?A.p(g,y):(A=z[S]=Ue[S](g),A.c()),W(A,1),A.m(e,ce)),y&8&&(M.checked=g[3]),(!re||y&31&&ue!==(ue=!g[3]||g[2]=="specified"&&g[4].size==0||g[0].length==0||g[1].length==0))&&(Y.disabled=ue)},i(g){re||(W(A),re=!0)},o(g){q(A),re=!1},d(g){g&&i(e),z[S].d(),De=!1,lt(Ne)}}}function _t(c,e,n){let a="",d="",b="committee",r=!1;const o={president:"President",vicepresident:"Vice President",treasurer:"Treasurer",secretary:"Secretary","welfare-m":"Male & NB Welfare Officer","welfare-f":"Female & NB Welfare Officer",ents:"Entertainment Officer",firstyearrep:"First Year Rep",classact:"Class Act",edo:"Ethnic Diversity Officer",womens:"Womens' Officer",intl:"Internationals' Officer",lgbt:"LGBTQ+ Officer",access:"Access Officer",facilities:"Facilities Officer",green:"Green Officer",webmaster:"Webmaster"},E=Object.keys(o);let l=new Set;function s(){a=this.value,n(0,a)}function m(){d=this.value,n(1,d)}function _(){b=rt(this),n(2,b)}const L=()=>{b=="specified"&&n(4,l=new Set)},D=($,V)=>{V?l.add($):l.delete($),n(4,l)};function U(){r=this.checked,n(3,r)}return[a,d,b,r,l,o,E,s,m,_,L,D,U]}class yt extends Ve{constructor(e){super(),Be(this,e,_t,pt,Pe,{})}}function gt(c){let e,n,a,d,b,r,o,E,l,s,m,_,L,D,U,$,V,G,R,N,B;return e=new yt({}),{c(){ve(e.$$.fragment),n=k(),a=f("h1"),d=w("Terms and Conditions"),b=k(),r=f("ul"),o=f("li"),E=w(`You agree that the information you provide on this form may be
                emailed to members of the JCR Committee (any member if you have
                selected "Committee", or only the ticked members if you have
                selected "Specific officers only").`),l=k(),s=f("li"),m=w(`You agree that the feedback you have provided is professional
                and unoffensive. Criticism of policies is welcome, verbal abuse
                or vitriol aimed at any student will result in future responses
                being blocked.`),_=k(),L=f("li"),D=w(`If you choose to share your email address, then it will be
                included alongside the form information and shared with the
                aforementioned Committee members.`),U=k(),$=f("li"),V=w(`If you choose to remain anonymous, then an encrypted
                (unreadable) form of your email address will be included in the
                emails, so that Committee members can use the anonymous response
                system to reply to your message without revealing your identity.`),G=k(),R=f("li"),N=w(`Under exceptional circumstances, the Committee may decide to
                access the email address attached to an anonymous form
                submission. Reasons for doing this may include (but are not
                limited to) to respond to an immediate risk of harm, or to
                prevent verbal abuse / vitriol. Decrypting an email in this way
                will trigger a notification to members of the Exec and the
                webmaster, to prevent abuse of this system.`)},l(p){pe(e.$$.fragment,p),n=I(p),a=h(p,"H1",{});var T=v(a);d=C(T,"Terms and Conditions"),T.forEach(i),b=I(p),r=h(p,"UL",{});var O=v(r);o=h(O,"LI",{});var P=v(o);E=C(P,`You agree that the information you provide on this form may be
                emailed to members of the JCR Committee (any member if you have
                selected "Committee", or only the ticked members if you have
                selected "Specific officers only").`),P.forEach(i),l=I(O),s=h(O,"LI",{});var Z=v(s);m=C(Z,`You agree that the feedback you have provided is professional
                and unoffensive. Criticism of policies is welcome, verbal abuse
                or vitriol aimed at any student will result in future responses
                being blocked.`),Z.forEach(i),_=I(O),L=h(O,"LI",{});var x=v(L);D=C(x,`If you choose to share your email address, then it will be
                included alongside the form information and shared with the
                aforementioned Committee members.`),x.forEach(i),U=I(O),$=h(O,"LI",{});var S=v($);V=C(S,`If you choose to remain anonymous, then an encrypted
                (unreadable) form of your email address will be included in the
                emails, so that Committee members can use the anonymous response
                system to reply to your message without revealing your identity.`),S.forEach(i),G=I(O),R=h(O,"LI",{});var A=v(R);N=C(A,`Under exceptional circumstances, the Committee may decide to
                access the email address attached to an anonymous form
                submission. Reasons for doing this may include (but are not
                limited to) to respond to an immediate risk of harm, or to
                prevent verbal abuse / vitriol. Decrypting an email in this way
                will trigger a notification to members of the Exec and the
                webmaster, to prevent abuse of this system.`),A.forEach(i),O.forEach(i)},m(p,T){_e(e,p,T),j(p,n,T),j(p,a,T),t(a,d),j(p,b,T),j(p,r,T),t(r,o),t(o,E),t(r,l),t(r,s),t(s,m),t(r,_),t(r,L),t(L,D),t(r,U),t(r,$),t($,V),t(r,G),t(r,R),t(R,N),B=!0},p:se,i(p){B||(W(e.$$.fragment,p),B=!0)},o(p){q(e.$$.fragment,p),B=!1},d(p){ye(e,p),p&&i(n),p&&i(a),p&&i(b),p&&i(r)}}}function Et(c){let e,n;return e=new ut({props:{$$slots:{default:[gt]},$$scope:{ctx:c}}}),{c(){ve(e.$$.fragment)},l(a){pe(e.$$.fragment,a)},m(a,d){_e(e,a,d),n=!0},p(a,d){const b={};d&1&&(b.$$scope={dirty:d,ctx:a}),e.$set(b)},i(a){n||(W(e.$$.fragment,a),n=!0)},o(a){q(e.$$.fragment,a),n=!1},d(a){ye(e,a)}}}function kt(c){let e,n;return e=new dt({props:{current:"/get-involved/feedback",title:"Feedback",size:"small",metaDescription:"",$$slots:{default:[Et]},$$scope:{ctx:c}}}),{c(){ve(e.$$.fragment)},l(a){pe(e.$$.fragment,a)},m(a,d){_e(e,a,d),n=!0},p(a,[d]){const b={};d&1&&(b.$$scope={dirty:d,ctx:a}),e.$set(b)},i(a){n||(W(e.$$.fragment,a),n=!0)},o(a){q(e.$$.fragment,a),n=!1},d(a){ye(e,a)}}}class Lt extends Ve{constructor(e){super(),Be(this,e,null,kt,Pe,{})}}export{Lt as component};