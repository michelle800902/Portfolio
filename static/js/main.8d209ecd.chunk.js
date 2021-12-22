(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(n,e,t){},22:function(n,e,t){},23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i,o,a,c,r=t(1),s=t.n(r),l=t(10),d=t.n(l),p=(t(19),t(2)),f=t(3),h=t(4),j=[{id:"about",name:"ABOUT",href:"#about"},{id:"experience",name:"EXPERIENCE",href:"#experience"},{id:"projects",name:"PROJECTS",href:"#projects"},{id:"contact",name:"CONTACT",href:"#contact"}],m=[{id:"",name:"",desc:"",type:"",role:"",tech:[],link:""},{id:"01",name:"CovMo",desc:"A large-scale telecom data analytics platform to provide geo-location, network optimization solutions, and mobility insights.",type:"WEB APP",role:"Front-end Engineer @ Groundhog Technologies",tech:["TypeScript","React Hooks","Redux","Styled-Components","MapBox"],link:""},{id:"02",name:"ETL Scheduling",desc:"A prototype dashboard to overview the data flow of ETL jobs with timeline charts and dynamic graphs.",type:"WEB APP",role:"Data Engineer @ Cathay Financial Holdings",tech:["JavaScript","D3","Bootstrap"],link:""},{id:"03",name:"Intention Mining",desc:"A visual tool for viewing the online intentions that mining from website URL tags using clustering methods.",type:"WEB APP",role:"Data Engineer @ Cathay Financial Holdings",tech:["JavaScript","D3","Bootstrap"],link:""},{id:"04",name:"Medical Knowledge",desc:"An innovative data visualization platform to control the mining association rules from the massive medical dataset.",type:"WEB APP",role:"Web Developer Intern @ Delta Electronics",tech:["JavaScript","D3"],link:""},{id:"05",name:"Healthcare Map",desc:"An information retrieval system based on the map for searching millions of Taiwan healthcare data.",type:"WEB APP",role:"Web Developer Intern @ Delta Electronics",tech:["JavaScript","D3","jQuery","PHP","SQL","LeafLet"],link:""},{id:"06",name:"Epidemic Map",desc:"A map visualization system to analyze disease trends and forecast epidemics from crawled PTT public opinion articles.",type:"WEB APP",role:"Postgraduate @ NCCU CS",tech:["JavaScript","Python","Django","D3"],link:""},{id:"07",name:"Fashion Style",desc:"A clothing recommendation system that recommends products using styles and popularity learned from online fashion data.",type:"WEB APP",role:"Postgraduate @ NCCU CS",tech:["JavaScript","Python","Django","PostgresDB"],link:""},{id:"08",name:"Space Shooter",desc:"A first-person shooter game with space animation materials.",type:"3D Game",role:"Postgraduate @ NCCU CS",tech:["C#","Unity"],link:""}],u=t(0),b=f.a.div(i||(i=Object(p.a)(["\n    position: fixed;\n    top: ","px;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: rgba(255, 255, 255, 0.9);\n    transition: top .3s ease-in-out;\n"])),(function(n){return n.top})),x=f.a.div(o||(o=Object(p.a)(["\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 3px solid #000;\n    transition: transform .5s ease-in-out;\n    &:hover {\n        transform: rotate(90deg);\n    }\n"]))),g=f.a.div(a||(a=Object(p.a)(["\n    display: flex;\n    justify-content: flex-end;\n"]))),O=f.a.div(c||(c=Object(p.a)(['\n    height: 100%;\n    padding: 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    a {\n        text-decoration: none;\n        color: #363636;\n        &::after {\n            content: "";\n            display: block;\n            width: 0;\n            height: 4px;\n            margin-top: 8px;\n        }\n        &:hover::after {\n            width: 100%;\n            background: #ffe65f;\n            transition: width .3s ease-out 0s;\n        }\n    }\n'])));var v,w,y,E,k,z=function(){var n=Object(r.useState)(0),e=Object(h.a)(n,2),t=e[0],i=e[1];return Object(r.useEffect)((function(){var n=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;i(n>e?0:-50),n=e}}),[]),Object(u.jsxs)(b,{top:t,children:[Object(u.jsx)(x,{onClick:function(){window.location.assign(window.location.origin)},children:"M"}),Object(u.jsx)(g,{id:"navbar",children:j.map((function(n){return Object(u.jsx)(O,{children:Object(u.jsx)("a",{href:n.href,children:n.name})},n.id)}))})]})},P="375px",H="425px",S="768px",A="1024px",C="1440px",L="2560px",T={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(P,")"),mobileL:"(min-width: ".concat(H,")"),tablet:"(min-width: ".concat(S,")"),laptop:"(min-width: ".concat(A,")"),laptopL:"(min-width: ".concat(C,")"),desktop:"(min-width: ".concat(L,")"),desktopL:"(min-width: ".concat(L,")")},D=f.a.div(v||(v=Object(p.a)(["\n    position: relative;\n    z-index: 1;\n    width: 100%;\n"]))),M=function(n){return Object(f.b)(w||(w=Object(p.a)(["\n    0% {\n        transform: translateY(","px);\n    }\n    100% {\n        transform: translateY(0px);\n    }\n"])),n)},B=f.a.div(E||(E=Object(p.a)(["\n    font-family: ",";\n    text-align: center;\n    @media "," {\n        font-size: 100px;\n        animation: "," 1s cubic-bezier(0, 0.1, .12, .99) forwards;\n        transform: translateY(","px);\n    }\n    @media "," {\n        font-size: 140px;\n        animation: "," 1s cubic-bezier(0, 0.1, .12, .99) forwards;\n        transform: translateY(","px);\n    }\n    @media "," {\n        font-size: 150px;\n        animation: "," 1s cubic-bezier(0, 0.1, .12, .99) forwards;\n        transform: translateY(","px);\n    }\n    @media "," {\n        font-size: 200px;\n        animation: "," 1s cubic-bezier(0, 0.1, .12, .99) forwards;\n        transform: translateY(","px);\n    }\n"])),(function(n){return n.fontFam}),T.tablet,(function(n){return n.show?M(100):"none"}),140,T.laptop,(function(n){return n.show?M(140):"none"}),196,T.laptopL,(function(n){return n.show?M(150):"none"}),210,T.desktop,(function(n){return n.show?M(200):"none"}),280),F=f.a.div(k||(k=Object(p.a)(["\n    position: absolute;\n    background-color: white;\n    margin-right: 100%;\n    width: 120%;\n    height: 35vh;\n    animation: "," 0.5s linear forwards;\n    animation-delay: 2s;\n"])),(function(){return Object(f.b)(y||(y=Object(p.a)(["\n    0% {\n        opacity: 1;\n        height: 35vh;\n    }\n    100% {\n        opacity: 0;\n        height: 0vh;\n    }\n"])))}));function Y(n){var e=n.text,t=n.fontFam,i=n.timeDelay,o=Object(r.useState)(!1),a=Object(h.a)(o,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){setTimeout((function(){s(!0)}),i)}),[i]),Object(u.jsxs)(D,{children:[Object(u.jsx)(B,{show:c,fontFam:t,children:e}),Object(u.jsx)(F,{})]})}Y.defaultProps={fontFam:"Avenir Helvetica Ariel"};var W=Y,I=t(14),J=t.n(I);var U,N,R=function(n){var e=n.strings;return Object(u.jsx)(J.a,{options:{strings:e,autoStart:!0,loop:!0,deleteSpeed:50}})},G=f.a.div(U||(U=Object(p.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    pointer-events: none;\n"]))),Q=f.a.div(N||(N=Object(p.a)(["\n    font-size: 32px;\n    font-weight: bold;\n    color: #aaa;\n"])));var X,K,V,q=function(){return Object(u.jsxs)(G,{id:"home",children:[Object(u.jsx)(W,{text:"Michelle Chen",fontFam:"Valencia",timeDelay:500}),Object(u.jsx)(Q,{children:Object(u.jsx)(R,{strings:["Web Developer","Front-end Engineer"]})})]})},Z=f.a.div(X||(X=Object(p.a)(["\n    width: 100%;\n    height: 40vh;\n    position: relative;\n    overflow: hidden;\n"]))),$=f.a.div(K||(K=Object(p.a)(["\n    position: absolute;\n    top: 10%;\n    left: -30%;\n    transform: translateX(","%);\n    transition: transform 0.5s ease-out;\n    font-family: 'AvenirHeavy';\n    color: #eee;\n    @media "," {\n        font-size: 180px;\n    }\n    @media "," {\n        font-size: 200px;\n    }\n    @media "," {\n        font-size: 350px;\n    }\n"])),(function(n){return 5*n.scrollPercent}),T.laptop,T.laptopL,T.desktop),_=f.a.div(V||(V=Object(p.a)(["\n    align-items: center;\n    font-family: 'AvenirLight';\n    text-align: left;\n    margin-left: 30%;\n    margin-right: 5%;\n    @media "," {\n        transform: translateY(90%);\n        font-size: 30px;\n    }\n    @media "," {\n        transform: translateY(87%);\n        font-size: 38px;\n    }\n    @media "," {\n        transform: translateY(80%);\n        font-size: 70px;\n    }\n"])),T.laptop,T.laptopL,T.desktop);var nn,en=function(){var n=Object(r.useState)(0),e=Object(h.a)(n,2),t=e[0],i=e[1],o=function(n){var e=n.srcElement,t=e.body,o=e.documentElement,a=Math.max(t.scrollTop,o.scrollTop)/(o.scrollHeight-o.clientHeight)*100,c=150*o.clientHeight/o.scrollHeight;a>=0&&a<=c&&i(a)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),Object(u.jsxs)(Z,{id:"about",children:[Object(u.jsx)($,{scrollPercent:t,children:"ABOUT ME"}),Object(u.jsx)(_,{children:"Front-end developer who cares deeply about user experience. Serious passion for UI design and new technologies."})]})},tn=f.a.div(nn||(nn=Object(p.a)(["\n    width: calc(100% - 100px);\n    height: calc(100vh - 100px);\n    padding: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));var on,an,cn,rn,sn,ln,dn,pn,fn,hn,jn,mn,un,bn=function(){return Object(u.jsx)(tn,{id:"experience",children:Object(u.jsx)("h1",{children:"Experience"})})},xn=f.a.section(on||(on=Object(p.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 60%;\n    height: 100vh;\n    display: flex;\n    flex-flow: column nowrap;\n"]))),gn=f.a.div(an||(an=Object(p.a)(["\n    padding: 10%;\n    font-family: 'AvenirHeavy';\n    @media "," {\n        font-size: 24px;\n    }\n    @media "," {\n        font-size: 32px;\n    }\n    @media "," {\n        font-size: 48px;\n    }\n"])),T.laptop,T.laptopL,T.desktop),On=f.a.div(cn||(cn=Object(p.a)(["\n    height: 100%;\n    padding: 0 10%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"]))),vn=f.a.div(rn||(rn=Object(p.a)(["\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n"]))),wn=f.a.div(sn||(sn=Object(p.a)(["\n    font-family: 'AvenirHeavy';\n    @media "," {\n        font-size: 60px;\n    }\n    @media "," {\n        font-size: 80px;\n    }\n    @media "," {\n        font-size: 100px;\n    }\n"])),T.laptop,T.laptopL,T.desktop),yn=f.a.div(ln||(ln=Object(p.a)(["\n    padding-top: 5%;\n    font-family: 'AvenirMedium';\n    @media "," {\n        font-size: 24px;\n    }\n    @media "," {\n        font-size: 28px;\n    }\n    @media "," {\n        font-size: 32px;\n    }\n"])),T.laptop,T.laptopL,T.desktop),En=f.a.div(dn||(dn=Object(p.a)(["\n    padding-top: 2%;\n    font-family: 'AvenirBook';\n    @media "," {\n        font-size: 24px;\n    }\n    @media "," {\n        font-size: 28px;\n    }\n    @media "," {\n        font-size: 32px;\n    }\n"])),T.laptop,T.laptopL,T.desktop),kn=f.a.div(pn||(pn=Object(p.a)(["\n    padding: 5% 10%;\n    font-family: 'AvenirHeavy';\n    @media "," {\n        font-size: 24px;\n    }\n    @media "," {\n        font-size: 32px;\n    }\n    @media "," {\n        font-size: 48px;\n    }\n"])),T.laptop,T.laptopL,T.desktop),zn=f.a.span(jn||(jn=Object(p.a)([""]))),Pn=f.a.span(mn||(mn=Object(p.a)([""]))),Hn=f.a.span(un||(un=Object(p.a)(["\n    position: relative;\n    display: ",";\n    animation: "," 0.5s linear forwards;\n    animation-delay: 0.5s;\n    color: #fff;\n    &::after {\n        content: '';\n        top: 0;\n        left: 0;\n        position: absolute;\n        width: 0%;\n        height: 100%;\n        background: #222;\n        animation: "," 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;\n        animation-delay: 0s;\n    }\n"])),(function(n){return n.inline?"inline":"block"}),(function(){return Object(f.b)(fn||(fn=Object(p.a)(["\n    0% {\n        color: #fff;\n    }\n    100% {\n        color: #333;\n    }\n"])))}),(function(){return Object(f.b)(hn||(hn=Object(p.a)(["\n    0% {\n        left: 0;\n        width: 0%\n    }\n    50% {\n        left: 0%;\n        width: 100%\n    }\n    100% {\n        left: 100%;\n        width: 0%\n    }\n"])))}));var Sn,An,Cn=function(n){var e=Object(r.useState)(!1),t=Object(h.a)(e,2),i=t[0],o=t[1];return Object(r.useEffect)((function(){n.id&&o(!0)}),[n.id]),i&&(zn=Pn,setTimeout((function(){zn=Hn,o(!1)}))),Object(u.jsxs)(xn,{children:[Object(u.jsx)(gn,{children:Object(u.jsx)(zn,{inline:!0,children:n.id})}),Object(u.jsx)(On,{children:Object(u.jsxs)(vn,{children:[Object(u.jsx)(wn,{children:Object(u.jsx)(zn,{inline:!0,children:n.name})}),Object(u.jsx)(yn,{children:Object(u.jsx)(zn,{inline:!0,children:n.role})}),Object(u.jsx)(En,{children:Object(u.jsx)(zn,{inline:!1,children:n.desc})})]})}),Object(u.jsx)(kn,{children:Object(u.jsx)(zn,{inline:!0,children:n.type})})]})},Ln=t.p+"static/media/Tablet.d32d886e.png",Tn=t.p+"static/media/Iphone.26bfe896.png",Dn=f.a.img(Sn||(Sn=Object(p.a)(["\n    right: 0vw;\n    bottom: -40vh;\n    height: 80vh; \n    position: absolute;\n    filter: blur(0.6px);\n    transform: translate(0px,-","%);\n    transition: transform 0.2s ease-out;\n"])),(function(n){return 4*n.scroll})),Mn=f.a.img(An||(An=Object(p.a)(["\n    left: 0vw;\n    bottom: -70vh;\n    height: 80vh;\n    position: absolute;\n    transform: translate(0px,-","%) scale(0.94);\n    transition: transform 0.2s ease-out;\n"])),(function(n){return 2*n.scroll}));var Bn,Fn,Yn=function(n){var e=n.scrollPercent,t=1*n.boxHeight-100;return e-=100*(n.screenHeight*t/100)/n.scrollHeight+1-1,Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Dn,{src:Ln,scroll:e,alt:"cmgOrNotTablet"}),Object(u.jsx)(Mn,{src:Tn,scroll:e,alt:"cmgOrNotIphone"})]})},Wn=f.a.div(Bn||(Bn=Object(p.a)(["\n    width: 50%;\n    margin-left: 60%;\n    display: flex;\n    flex-flow: column nowrap;\n"]))),In=f.a.div(Fn||(Fn=Object(p.a)(["\n    height: 100vh;\n    margin-top: 40vh;\n    position: relative;\n"])));var Jn,Un=function(){var n=Object(r.useState)(0),e=Object(h.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(0),a=Object(h.a)(o,2),c=a[0],s=a[1],l=Object(r.useState)(0),d=Object(h.a)(l,2),p=d[0],f=d[1],j=function(){var n=window.document,e=n.body,t=n.documentElement,i=Math.max(e.scrollTop,t.scrollTop)/(t.scrollHeight-t.clientHeight)*100,o=100*t.clientHeight/t.scrollHeight,a=1040*t.clientHeight/t.scrollHeight;i>=o&&i<=a&&f(i)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",j),function(){s(Math.round(window.document.documentElement.scrollHeight)),i(Math.round(window.document.documentElement.clientHeight)),window.removeEventListener("scroll",j)}})),Object(u.jsx)(Wn,{children:Object(u.jsx)(In,{children:Object(u.jsx)(Yn,{boxHeight:140,screenHeight:t,scrollHeight:c,scrollPercent:p})})})},Nn=f.a.div(Jn||(Jn=Object(p.a)(["\n    width: 100%;\n    height: ","px;\n    display: flex;\n    flex-flow: row nowrap;\n    background-color: #ece;\n"])),(function(n){return n.totalHeight}));var Rn,Gn=function(){var n=1500,e=window.innerHeight,t=e*(m.length-1),i=Object(r.useState)(0),o=Object(h.a)(i,2),a=o[0],c=o[1],s=function(i){var o=i.srcElement.documentElement.scrollTop;if(o>n){var a=Math.floor((o-n)/e)+1;c(a>=m.length||o>n+t?0:a)}else c(0)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]),Object(u.jsxs)(Nn,{id:"projects",totalHeight:t,children:[Object(u.jsx)(Cn,{id:m[a].id,name:m[a].name,desc:m[a].desc,type:m[a].type,role:m[a].role,tech:m[a].tech,link:m[a].link}),Object(u.jsx)(Un,{})]})},Qn=f.a.div(Rn||(Rn=Object(p.a)(["\n    width: calc(100% - 100px);\n    height: calc(100vh - 100px);\n    padding: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));var Xn,Kn=function(){return Object(u.jsx)(Qn,{id:"contact",children:Object(u.jsx)("h1",{children:"Contact"})})},Vn=f.a.div(Xn||(Xn=Object(p.a)(["\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #f2f2f2;\n"])));var qn,Zn=function(){return Object(u.jsx)(Vn,{children:Object(u.jsx)("span",{children:"Copyright \xa9 Michelle Chen 2021"})})},$n=(t(22),t(23),f.a.div(qn||(qn=Object(p.a)(["\n    background-color: #fff;\n"]))));var _n=function(){return Object(r.useEffect)((function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")})),Object(u.jsxs)($n,{children:[Object(u.jsx)(z,{}),Object(u.jsx)(q,{}),Object(u.jsx)(en,{}),Object(u.jsx)(bn,{}),Object(u.jsx)(Gn,{}),Object(u.jsx)(Kn,{}),Object(u.jsx)(Zn,{})]})},ne=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),i(n),o(n),a(n),c(n)}))};d.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(_n,{})}),document.getElementById("root")),ne()}},[[24,1,2]]]);
//# sourceMappingURL=main.8d209ecd.chunk.js.map