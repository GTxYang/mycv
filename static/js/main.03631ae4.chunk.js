(this["webpackJsonpporfolio-src"]=this["webpackJsonpporfolio-src"]||[]).push([[0],{465:function(n,e,t){"use strict";t.r(e);var r,a=t(0),i=t.n(a),o=t(39),c=t.n(o),s=t(9),l=t(41),d=t(10),b=t(32),m=t.p+"static/media/avatar.b3b777c5.jpg",h=t(66),p=t.n(h),j=t(45),g=t.n(j),x=t(68),u=t.n(x),f=t(1);var v,O=d.b.nav(r||(r=Object(s.a)(['\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border-right: 8px solid var(--border-color);\n\n    \n    .avatar{\n        width: 80%;\n        border-bottom: 1px solid var(--border-color);\n        text-align: center;\n        padding: 1rem 0;\n        img{\n            width: 90%;\n            border-radius:50%;\n            border: 8px solid var(--border-color);\n        };\n        .icons{\n            display:flex;\n            justify-content: center;\n            margin-top:1rem;\n            padding-botton:1rem;\n            .icon{\n                border: 2px solid var(--border-color);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                border-radius:50%;\n                transition: all .4s ease-in-out;\n                cursor:pointer;\n                &:hover{\n                    border: 2px solid var(--primary-color);\n                    color: var(--primary-color);\n                }\n                &:not(:last-child){\n                    margin-right:1rem;\n                    \n                }\n                svg{\n                    margin: .5rem;\n\n                }\n            }\n        }\n        \n    }\n\n    .nav-items{\n        width: 100%;\n        text-align: center;\n        .active-class{\n            background-color:var(--primary-color);\n        }\n        li{\n            display: block;\n            a{\n                display:block;\n                padding: .5rem 0;\n                position: relative;\n                z-index: 10;\n                text-transform: uppercase;\n                transition: all .4s ease-in-out;\n                font-weight:600;\n                letter-spacing:1px;\n                &:hover{\n                    cursor: pointer;\n                    color: var(--white-color);\n                }\n                &::before{\n                    content: "";\n                    position: absolute;\n                    bottom: 0;\n                    left: 0;\n                    width:0;\n                    height: 50%;\n                    background-color:var(--primary-color);\n                   // transition: All 0.4s cubic-bezier(1,-0.27,.25,.96);\n                   transition: All 0.4s cubic-bezier(.69,.06,.25,.96);\n                   z-index: 3;\n                   opacity: 0.21;\n                }\n            }\n\n            a:hover::before{\n                width: 100%;\n                height: 100%;\n            }\n        }\n    }\n\n    footer{\n        border-top: 1px solid var(--border-color);\n        width: 100%;\n        p{\n            \n            padding: 1rem 0 ;\n            font-size: 1.1rem;\n            display: block;\n            text-align: center;\n        }\n        \n    }\n']))),k=function(){return Object(f.jsxs)(O,{children:[Object(f.jsxs)("div",{className:"avatar",children:[Object(f.jsx)("img",{src:m,alt:""}),Object(f.jsxs)("div",{className:"icons",children:[Object(f.jsx)("a",{href:"https://www.facebook.com/GtxYang/",target:"_blank",className:"icon i-facebook",children:Object(f.jsx)(p.a,{})}),Object(f.jsx)("a",{href:"https://github.com/GTxYang/",target:"_blank",className:"icon i-github",children:Object(f.jsx)(g.a,{})}),Object(f.jsx)("a",{href:"#",target:"_blank",className:"icon i-linked",children:Object(f.jsx)(u.a,{})})]})]}),Object(f.jsxs)("ul",{className:"nav-items",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(b.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(b.b,{to:"/about",activeClassName:"active-class",exact:!0,children:"About"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(b.b,{to:"/skill",activeClassName:"active-class",exact:!0,children:"Skills"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(b.b,{to:"/projects",activeClassName:"active-class",exact:!0,children:"Projects"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(b.b,{to:"/contact",activeClassName:"active-class",exact:!0,children:"Contact"})})]}),Object(f.jsx)("footer",{className:"footer"})]})};var y=d.b.div(v||(v=Object(s.a)(["\n\n\n\n    width: 16.3rem;\n    position: fixed;\n    height: 100vh;\n    background-color: var(--sidebar-dark-color);\n    overflow: hidden;\n    transition: all.4s ease-in-out;\n\n    @media screen and (max-width: 400px)\n    {\n        width: 14rem;\n        \n    }\n\n    @media screen and (max-width: 1200px)\n    {\n        \n        transform: translateX(-100%);\n        z-index:20;\n    }\n"]))),w=function(n){var e=n.navToggle;return Object(f.jsx)(y,{className:"".concat(e?"nav-toggle":""),children:Object(f.jsx)(k,{})})},N=t(124),z=t.n(N);var S,F=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(z.a,{width:"100%",height:"100vh",params:{particles:{number:{value:109,density:{enable:!0,value_area:1200}},color:{value:"#636e72"},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:6}},line_linked:{enable:!1,distance:150,opacity:.9,width:1,shadow:{enable:!0,color:"#e74c3c",blur:5}},move:{enable:!0,random:!0,speed:.6,attract:{rotateX:600,rotateY:1200}},size:{value:4,random:!0,anim:{speed:40,size_min:.1}},opacity:{value:1.5,anim:{speed:2,opacity_min:.1}}}}})})};var C,I,T,M=d.b.header(S||(S=Object(s.a)(["\n    width: 100%;\n    height: 100vh;\n    position: relative;\n\n    .typography{\n        position: absolute;\n        top:50%;\n        left:50%;\n        transform:translate(-50%, -50%);\n        text-align: center;\n        width:80%;\n\n        .icons{\n            display:flex;\n            justify-content: center;\n            margin-top:1rem;\n            .icon{\n                border: 2px solid var(--border-color);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                border-radius:50%;\n                transition: all .4s ease-in-out;\n                cursor:pointer;\n                &:hover{\n                    border: 2px solid var(--primary-color);\n                    color: var(--primary-color);\n                }\n                &:not(:last-child){\n                    margin-right:1rem;\n                    \n                }\n                svg{\n                    margin: .5rem;\n\n                }\n            }\n        }\n    }\n  \n"]))),A=function(){return Object(f.jsxs)(M,{children:[Object(f.jsx)("div",{className:"particle-con",children:Object(f.jsx)(F,{})}),Object(f.jsxs)("div",{className:"typography",children:[Object(f.jsxs)("h1",{children:["Hi, I'm ",Object(f.jsx)("span",{children:"Duong Gia Tien"})]}),Object(f.jsx)("p",{children:"I'm a final year student at HongBang International University. Currently, I'm studying in-depth about web back-end in general and Spring framework in particular."}),Object(f.jsxs)("div",{className:"icons",children:[Object(f.jsx)("a",{href:"https://www.facebook.com/GtxYang/",target:"_blank",className:"icon i-facebook",children:Object(f.jsx)(p.a,{})}),Object(f.jsx)("a",{href:"https://github.com/GTxYang/",target:"_blank",className:"icon i-github",children:Object(f.jsx)(g.a,{})}),Object(f.jsx)("a",{href:"#",target:"_blank",className:"icon i-linked",children:Object(f.jsx)(u.a,{})})]})]})]})},_=d.b.div(C||(C=Object(s.a)(["\n    padding: 5rem;\n    @media screen and (max-width: 642px){\n        padding: 4rem;\n    }\n    @media screen and (max-width: 571px){\n        padding: 2rem .4rem;\n        padding-left: 1rem;\n    }\n"]))),G=d.b.div(I||(I=Object(s.a)(["\n    padding: 5rem 0;\n    \n"])));var P,Y=d.b.a(T||(T=Object(s.a)(['\n    background-color: var(--primary-color);\n    padding: .8rem 2.5rem;\n    color: white;\n    cursor: pointer;\n    display: inline-block;\n    font-size: inherit;\n    text-transform: uppercase;\n    position: relative;\n    transition: all .4s ease-in-out;\n\n    margin-top:35px;\n    &:after{\n        content:"";\n        position: absolute;\n        width: 0;\n        height: .2rem;\n        transition: all .4s ease-in-out;\n        left:0;\n        bottom:0;\n        opacity: .7;\n    }\n    &:hover::after{\n            width: 100%;\n            background-color : var(--white-color);      \n         \n\n    }\n\n\n']))),E=function(n){var e=n.title;return Object(f.jsx)(Y,{href:"facebook.com",children:e})};var H,W=d.b.div(P||(P=Object(s.a)(["\n    display:flex;\n    margin-top:5rem;\n\n    @media screen and (max-width: 1000px){\n        flex-direction: column;\n        .left-content{\n            margin-bottom: 2rem;\n        }\n    }\n\n    @media screen and (max-width: 1903px){\n        .left-content{\n            width: 100%;\n            img{\n                width: 90% !important;\n                height: 100%; !important;\n                object-fit:cover !important;\n            }\n        }\n    }\n \n    .left-content{\n        width: 100%;\n        img{\n            width: 95%;\n            object-fit:cover;\n        }\n\n        clip-path: polygon(0 0, 0 200%, 100% 100%, 100% 25%, 75% 0);\n    }\n\n    .right-content{\n        //padding-bottom: 1.4rem;\n        width:100%;\n        h4{\n            font-size: 2rem;\n            color: var(--white-color);\n            span{\n                font-size: 2rem;           \n               \n            }\n            \n        }\n        .paragraph{\n            padding: 1rem 0;\n        }\n\n        .java{\n            color: var(--white-color);\n        }\n\n\n        \n    }\n   \n"]))),B=function(){return Object(f.jsxs)(W,{children:[Object(f.jsx)("div",{className:"left-content",children:Object(f.jsx)("img",{src:m})}),Object(f.jsxs)("div",{className:"right-content",children:[Object(f.jsxs)("h4",{children:["Hi there, My name is ",Object(f.jsx)("span",{children:" Duong Gia Tien"})]}),Object(f.jsxs)("p",{className:"paragraph",children:["- I am currently living in Ho Chi Minh City. I am a final year student, I have been studying IT for three years at HongBang International University. My familiar language is",Object(f.jsx)("span",{className:"java",children:" Java "}),"with",Object(f.jsx)("span",{className:"java",children:" Spring framework "}),"for website development."]}),Object(f.jsx)("p",{className:"paragraph",children:"- To describe myself, I can say that I am a hard worker and have gained a lot of skills over the years and Learning new languages and technologies is something I'm passionate about. I'm considered a team player because I love helping others. You can find some projects in my portfolio or Github. I am currently looking for an opportunity to dedicate my skills and enthusiasm. I hope I will have the opportunity to hone my programming skills at the company."}),Object(f.jsx)(E,{title:"Download CV"})]})]})};var D,J=d.b.div(H||(H=Object(s.a)(['\n    position: relative;\n    h2{\n        color: var(--white-color);\n        font-size: 3.5rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        position: relative;\n        padding-bottom: .2rem;\n       \n        @media screen and (max-width: 496px){\n            font-size: 2.8rem;\n        }\n        @media screen and (max-width: 370px){\n            font-size: 2rem;\n        }\n        &::before{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 7.4rem;\n            height: .33rem;\n            background-color: var(--background-light-color2);\n            border-radius: 15px;\n        }\n        &::after{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 3.5rem;\n            height: .33rem;\n            background-color: var(--primary-color);\n            border-radius: 15px;\n            left:0;\n        }\n        span{\n            font-weight: 400;\n            //color: rgba(25,29,43,.44);\n            color: rgba(179,177,175,0.2);\n            font-size: 5rem;\n            position: absolute; \n            padding-left:10px;\n            left:0;\n            top: 40%;\n            z-index:-1;\n            @media screen and (max-width: 620px){\n                font-size: 4rem;\n            }\n            @media screen and (max-width: 496px){\n                font-size: 3rem;\n               \n            }\n            @media screen and (max-width: 370px){\n                font-size: 2rem;\n            }\n        }\n    }\n\n\n']))),U=function(n){var e=n.title,t=n.span;return Object(f.jsx)(J,{children:Object(f.jsxs)("h2",{children:[e,Object(f.jsx)("b",{children:Object(f.jsx)("span",{children:t})})]})})};var L,V=d.b.section(D||(D=Object(s.a)([" "]))),X=function(){return Object(f.jsx)(_,{children:Object(f.jsxs)(V,{children:[Object(f.jsx)(U,{title:"About Me",span:"About Me"}),Object(f.jsx)(B,{})]})})};var Q,K=d.b.div(L||(L=Object(s.a)(['\n    background-color:var(--background-dark-grey);\n    margin: 0 10px;\n    border-left: 1px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    border-top: 8px solid var(--border-color);\n    transition: all .3s ease-in-out;\n    &:hover{\n        border-top: 8px solid var(--primary-color);\n        transform: translateY(4px);\n    }\n\n\n    .container{\n      padding: 1.2rem;\n        h4{\n            color: var(--white-color);\n            font-size: 1.1rem;\n            padding: 1rem 0;\n            position: relative;\n            padding-bottom: 1rem;\n            \n            \n            &::after{\n                content: "";\n                width: 5rem;\n                background-color: var(--border-color);\n                height: 3px;\n                position: absolute;\n                left: 0;\n                bottom: 0;\n                border-radius: 10px;\n            }\n        }\n\n        p{\n            padding: .8rem 0 ;\n        }\n\n        img{\n            margin-left:30%;\n            width:30%;\n        }\n            \n        ul{\n            padding: .8rem 0 ;\n            \n        }\n\n    }\n\n']))),q=function(n){var e=n.image,t=n.title,r=n.props,a=n.props2,i=n.props3,o=n.props4,c=n.props5;return Object(f.jsx)(K,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("img",{src:e}),Object(f.jsx)("h4",{children:t}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:["  ",r," "]}),Object(f.jsxs)("li",{children:["  ",a," "]}),Object(f.jsxs)("li",{children:["  ",i," "]}),Object(f.jsxs)("li",{children:["  ",o," "]}),Object(f.jsxs)("li",{children:["  ",c," "]})]})]})})},R=t.p+"static/media/ai.7069c98a.svg",Z=t.p+"static/media/framwork.a8d64abb.svg",$=t.p+"static/media/control.ff970227.svg",nn=t.p+"static/media/database.6aaa0fc7.svg";var en,tn=d.b.section(Q||(Q=Object(s.a)(["\n        .skills{\n            display:grid;\n            grid-template-columns:repeat(4,1fr);\n            grid-gap: 1rem; \n            //justify-content: space-between;\n            @media screen and (max-width: 1000px){\n                flex-direction:column;  \n            }\n            @media screen and (max-width: 950px){\n                grid-template-columns:repeat(2,1fr);\n            }\n            @media screen and (max-width: 650px){\n                grid-template-columns:repeat(1,1fr);\n            }\n           \n        }\n\n"]))),rn=function(){return Object(f.jsx)(G,{children:Object(f.jsx)(tn,{children:Object(f.jsxs)("div",{className:"skills",children:[Object(f.jsx)(q,{image:R,title:"Programming Languages",props:"Java (based)",props2:"C# ",props3:"Python",props4:"HTML / CSS"}),Object(f.jsx)(q,{image:Z,title:"Framework & Platfroms",props:"Spring",props5:"WebAPI / JSON.",props3:"Django",props4:".NET",props2:"Swing"}),Object(f.jsx)(q,{image:nn,title:"Database Management",props5:"Microsoft SQL Server ",props3:"MySQL"}),Object(f.jsx)(q,{image:$,title:"Version Control",props5:"Git (Github)"})]})})})};var an,on=d.b.div(en||(en=Object(s.a)(["\n\n\n"]))),cn=function(){return Object(f.jsx)(_,{children:Object(f.jsxs)(on,{children:[Object(f.jsx)(U,{title:"Skills",span:"Skills"}),Object(f.jsx)(rn,{})]})})},sn=t(130),ln=(t.p,t.p+"static/media/logoHiuTech.5d24061b.png"),dn=t.p+"static/media/logoBMW.d3186ca9.png",bn=t.p+"static/media/web_index.4da61baa.png",mn=t.p+"static/media/test_index_pharma.cf4b43a9.png",hn=t.p+"static/media/index_baomat.8911bc08.png",pn=t.p+"static/media/index_news.a100ef00.png",jn=[{id:1,category:"Java",image:ln,link:"https://github.com/GTxYang/HiuTech",title:"Manage Gaming Gear App",text:"Use Java Swing framework"},{id:2,category:"Java",image:dn,link:"https://github.com/GTxYang/ShowroomBMW",title:"Manage Showroom BMW App",text:"Use Java Swing framework"},{id:3,category:"Java",image:t.p+"static/media/indexshopwhisky.4830e9d8.png",link:"https://github.com/GTxYang/WhiskyShop-YANGSKULL",title:"Whisky Shop Website",text:"Use Spring MVC framework"},{id:4,category:"C#",image:bn,link:"https://github.com/",title:"Sneaker Shop Website",text:"Use ASP .NET MVC framework "},{id:5,category:"C#",image:mn,link:"https://github.com/",title:"Pharmacy Management App ",text:"Use WinForm .NET"},{id:6,category:"C#",image:hn,link:"https://github.com/GTxYang/HideTextInImage",title:"Hide Text In Pictures App",text:"Use WinForm .NET"},{id:7,category:"Python",image:pn,link:"https://github.com/",title:"News Website",text:"Use Django framework"}];var gn,xn,un,fn=d.b.div(an||(an=Object(s.a)(['\n        display: grid;\n        grid-template-columns: repeat(3,1fr);\n        grid-gap: 2rem;\n        @media screen and (max-width: 920px){\n            grid-template-columns: repeat(2,1fr);\n        }\n        @media screen and (max-width: 620px){\n            grid-template-columns: repeat(2,1fr);\n        }\n        .grid-item{\n           \n            .project-content{\n                p{\n                    font-size: medium !important;\n                }\n                h6{\n                    font-size: 1.2rem;\n                }\n                \n                @media screen and (max-width: 390px){\n                    p{\n                        font-size: small !important;\n                    }\n                    h6{\n                        font-size: .6rem;\n                    }\n                }\n\n                @media screen and (max-width: 1440px){\n                    p{\n                        font-size: 15px !important;\n                    }\n                    h6{\n                        font-size: .9rem;\n                    }\n                }\n\n\n                display: block;\n                position: relative;\n                overflow: hidden;\n               \n                \n                img{\n                    //c\xf3 th\u1ec3 b\u1ecf width n\xe0y \u0111i\n                    width:100%; \n                     height:30vh;\n                    //height:22vh;\n                    object-fit:cover;\n                }\n                ul{\n               \n                    transform: translateY(-600px);\n                    transition: all.4s ease-in-out;\n                    position: absolute;\n                    left: 50%;\n                    top: 40%;\n                    opacity: 0;\n                        li{\n                            background-color: var(--border-color);\n                            display:flex;\n                            align-items: center;\n                            justify-content: center;\n                            padding: 1rem;\n                            border-radius: 50%;\n                            width: 3rem;\n                            height: 3rem;\n                            transition: all.4s ease-in-out;\n\n\n                            \n                            @media screen and (max-width: 390px){\n                                margin-bottom: 50px;\n                                margin-left: 10px;\n                            }\n                           \n\n                            &:hover{\n                                background-color: var(--primary-color);\n                            }\n                            a{\n                                display:flex;\n                                align-items: center;\n                                justify-content: center;\n                            }\n                        }\n                }\n                .project-image{\n                    &::before{\n                        content: "";\n                        position: absolute;\n                        left: 2%;\n                        top: 4%;\n                        height: 0;\n                        width: 0;\n                        transition: all .4s ease-in-out;\n                    }\n                    \n                }\n                .project-image:hover{\n                    ul{\n                        transform: translateY(0);\n                    \n                        transform: translate(-50%, -50%);\n                        display:flex;\n                        align-items: center;\n                        justify-content: center;\n                        transition: all.4s ease-in-out;\n                        opacity:1;\n                        li{\n                           \n                            transition: all.4s ease-in-out;\n                            &:hover{\n                                background-color: var(--primary-color);\n                            }\n                            a{\n                                display:flex;\n                                align-items: center;\n                                justify-content: center;\n                            }\n                        }\n\n                        li:hover{\n                            svg{\n                                color: var(--white-color);\n                            }\n                        }\n                        svg{\n                            font-size: 2rem;\n                        }\n                    }\n                    &::before{\n                        height:calc(100% - 32%);\n                        width:calc(100% - 4%);\n\n                        @media screen and (max-width: 390px){\n                            height:calc(100% - 35%);\n                           \n                        }\n                    \n\n                        background-color: white;\n                        opacity: 0.9;\n                        transform-origin: left;\n                        transition: all .4s ease-in-out;\n                    }  \n                }\n            }\n        }\n ']))),vn=function(n){var e=n.menuItem;return Object(f.jsx)(fn,{children:e.map((function(n){return Object(f.jsx)("div",{className:"grid-item",children:Object(f.jsxs)("div",{className:"project-content",children:[Object(f.jsxs)("div",{className:"project-image",children:[Object(f.jsx)("img",{src:n.image}),Object(f.jsx)("ul",{children:Object(f.jsx)("li",{children:Object(f.jsx)("a",{target:"_blank",href:n.link,children:Object(f.jsx)(g.a,{})})})})]}),Object(f.jsx)("h6",{children:n.title}),Object(f.jsx)("p",{children:n.text})]})},n.id)}))})};d.b.div(gn||(gn=Object(s.a)(["\n    position: relative;\n"])));var On=d.b.button(xn||(xn=Object(s.a)(["\n   \n    \n\n    outline: none;\n    border: none;\n    background-color: var(--background-light-color-2);\n    padding: .4rem 2rem;\n    font-size: inherit;\n    color: var(--white-color);\n    cursor:pointer;\n    transition: all .3s ease-in-out;\n    margin-bottom: .6rem;\n    &:active,&:focus{\n        background-color:var(--primary-color);\n    }\n    &:hover{\n        background-color: var(--primary-color);\n    }\n    &:not(:last-child){\n        margin-right: .6rem;\n    }\n"]))),kn=d.b.div(un||(un=Object(s.a)(["\n    \n\n        \n    position: relative;\n    display:flex;\n   justify-content: center;\n   align-items: center;\n   flex-wrap: wrap;\n   width: 70%;\n   margin: 2.4rem auto;\n\n   @media screen and (max-width: 390px)\n        {\n            \n            display: grid;  \n            grid-template-columns: repeat(2,1fr);\n        }\n"]))),yn=function(n){var e=n.filter,t=n.button;return Object(f.jsx)(kn,{children:t.map((function(n,t){return Object(f.jsx)(On,{onClick:function(){return e(n)},children:n},t)}))})},wn=["All"].concat(Object(sn.a)(new Set(jn.map((function(n){return n.category})))));var Nn,zn=function(){var n=Object(a.useState)(jn),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(wn),o=Object(l.a)(i,2),c=o[0];return o[1],Object(f.jsxs)(_,{children:[Object(f.jsx)(U,{title:"Projects",span:"Projects"}),Object(f.jsxs)(G,{children:[Object(f.jsx)(yn,{filter:function(n){if("All"!==n){var e=jn.filter((function(e){return e.category===n}));r(e)}else r(jn)},button:c}),Object(f.jsx)(vn,{menuItem:t})]})]})};var Sn,Fn=d.b.div(Nn||(Nn=Object(s.a)(["\n    //padding: 1.5rem 2rem;\n    @media screen and (max-width: 390px){\n        padding: 1rem;\n        height: 155px;\n        width: 423px;\n    }\n  \n\n    background: var(--background-dark-grey);\n    display:flex;\n    align-items: center;\n    &:not(:last-child){\n        margin-bottom:2.5rem;\n    }\n\n    .left-conent{\n        padding: 1.4rem;\n        border: 1px solid var(--border-color);\n        font-size: 2rem;\n        display:flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1.5rem;\n        svg{\n            font-size: 2.3rem;\n        }\n    }\n\n    .right-conent{\n        h6{\n            color: var(--white-color);\n            font-size: 1.2rem;\n            padding-bottom: 0.5rem\n        }\n        p{\n            padding: .1rem 0; \n        }\n    }\n\n"]))),Cn=function(n){var e=n.icon,t=n.title,r=n.contact1,a=n.contact2;return Object(f.jsxs)(Fn,{children:[Object(f.jsx)("div",{className:"left-conent",children:Object(f.jsx)("p",{children:e})}),Object(f.jsxs)("div",{className:"right-conent",children:[Object(f.jsx)("h6",{children:t}),Object(f.jsx)("p",{children:r}),Object(f.jsx)("p",{children:a})]})]})},In=t(125),Tn=t.n(In),Mn=t(126),An=t.n(Mn),_n=t(127),Gn=t.n(_n);var Pn,Yn=d.b.section(Sn||(Sn=Object(s.a)(["\n        .contact-section{\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            grid-column-gap: 2rem;\n            .right-content{\n                display: grid;\n                grid-template-columns: repeat(1, 1fr);\n                \n            }\n          \n        }\n       \n\n"]))),En=function(){var n=Object(f.jsx)(Tn.a,{}),e=Object(f.jsx)(An.a,{}),t=Object(f.jsx)(Gn.a,{});return Object(f.jsx)(_,{children:Object(f.jsxs)(Yn,{children:[Object(f.jsx)(U,{title:"Contact",span:"Contact"}),Object(f.jsx)(G,{className:"contact-section",children:Object(f.jsxs)("div",{className:"right-content",children:[Object(f.jsx)(Cn,{icon:e,title:"Email",contact1:"howl1542@gmail.com"}),Object(f.jsx)(Cn,{icon:n,title:"Phone",contact1:"(+84) 908 163 083"}),Object(f.jsx)(Cn,{icon:t,title:"Address",contact1:"Tan Phu, Ho Chi Minh"})]})})]})})},Hn=t(14),Wn=t(128),Bn=t.n(Wn),Dn=t(484),Jn=t(129),Un=t.n(Jn),Ln=t(483);var Vn,Xn=d.b.main(Pn||(Pn=Object(s.a)(["\n            position: relative;\n            margin-left: 16.3rem;\n            min-height:100vh;\n            @media screen and (max-width: 1200px)\n            {\n              margin-left: 0;\n            }\n\n            .lines{\n              position: absolute;\n              min-height: 100vh;\n              width: 100%;\n              height: 100%;\n              display:flex;\n              justify-content: space-evenly;\n                .line-1, .line-2, .line-3, .line-4{\n                  width: 1px;\n                  min-height: 100vh;\n                  background-color: var(--border-color);\n                  z-index : -1;\n                  }\n            }\n\n"]))),Qn=function(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),c=o[0],s=o[1],d=Object(a.useState)("dark-theme"),b=Object(l.a)(d,2),m=b[0],h=b[1];return Object(a.useEffect)((function(){document.documentElement.className=m}),[m]),Object(a.useEffect)((function(){document.title="My CV"}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(w,{navToggle:c}),Object(f.jsx)("div",{className:"theme",children:Object(f.jsxs)("div",{className:"light-dark-mode",children:[Object(f.jsx)("div",{className:"left-content",children:Object(f.jsx)(Bn.a,{})}),Object(f.jsx)("div",{className:"right-content",children:Object(f.jsx)(Dn.a,{value:"",checked:t,inputProps:{"aria-label":""},size:"medium",onClick:function(){"light-theme"===m?(h("dark-theme"),r(!1)):(h("light-theme"),r(!0))}})})]})}),Object(f.jsx)("div",{className:"ham-burger-menu",children:Object(f.jsx)(Ln.a,{onClick:function(){return s(!c)},children:Object(f.jsx)(Un.a,{})})}),Object(f.jsxs)(Xn,{children:[Object(f.jsxs)("div",{className:"lines",children:[Object(f.jsx)("div",{className:"line-1"}),Object(f.jsx)("div",{className:"line-2"}),Object(f.jsx)("div",{className:"line-3"}),Object(f.jsx)("div",{className:"line-4"})]}),Object(f.jsxs)(Hn.c,{children:[Object(f.jsx)(Hn.a,{exact:!0,path:"/",component:A}),Object(f.jsx)(Hn.a,{path:"/about",exact:!0,component:X}),Object(f.jsx)(Hn.a,{path:"/skill",exact:!0,component:cn}),Object(f.jsx)(Hn.a,{path:"/projects",exact:!0,component:zn}),Object(f.jsx)(Hn.a,{path:"/contact",exact:!0,component:En})]})]})]})},Kn=Object(d.a)(Vn||(Vn=Object(s.a)(["\n// :root{\n//     --background-color: #000;\n//     --primary-color: #007bff;\n//     --secondary-color: #6c757;\n//     --background-dark-color: #10121A ;\n//     --background-dark-grey: #191D2B ;\n//     --border-color: #2e344e ;\n//     --background-light-color: #F1F1F1 ;\n//     --background-light-color-2: rgba(3,127,255,.3);\n//     --white-color: #FFF ;\n//     --font-light-color: #a4acc4;\n//     --font-dark-color: #313131;\n//     --font-dark-color-2: #151515;\n//     --sidebar-dark-color: #191D2B;\n//     --scrollbar-bg-color: #383838;\n//     --scrollbar-thump-color: #6b6b6b;\n//     --scrollbar-track-color: #383838;\n// }\n\n.light-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #ff7675;\n    --background-dark-color: #F1F1F1;\n    --background-dark-grey: #e4e4e4;\n    --border-color: #cbced8;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #151515;\n    --font-light-color: #313131;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #E4E4E4;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n.dark-theme{\n    --background-color: #000;\n    --primary-color: #007bff;\n    --secondary-color: #6c757;\n    --background-dark-color: #10121A ;\n    --background-dark-grey: #191D2B ;\n    --border-color: #2e344e ;\n    --background-light-color: #F1F1F1 ;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF ;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style:none;\n    text-decoration:none;\n    font-family: 'Nunito', sans-serif;\n    font-size: 1.2rem;\n}\n\nbody{\n    background-color: var(--background-dark-color);\n    color : var(--font-light-color);\n}\n\n\nbody::-webkit-scrollbar{\n    width: 9px;\n    background-color: #383838;\n}\nbody::-webkit-scrollbar-thumb{\n    border-radius: 10px;\n    background-color: #6b6b6b;\n}\nbody::-webkit-scrollbar-track{\n    border-radius: 10px;\n    background-color: #383838;\n}\n\na{\n    font-family: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-size:1rem;\n    \n}\n\nh1{\n    font-size: 3rem;\n    color: var(--white-color);\n    span{\n        font-size:3rem;\n    }\n}\n\nh6{\n    color: var(--white-color);\n    font-size: 1rem;\n    padding-bottom: .2rem;\n}\n\nspan{\n    color: var(--primary-color);\n}\n\n\n//Floattoggler\n\n\n.light-dark-mode{\n    position: fixed;\n    right: 0;\n    top: 17%;\n    background-color: var(--background-light-color-2);\n    width:4.5rem;\n    height: 2rem;\n    z-index: 15;\n    display:flex;\n    align-items: center;\n    justify-content:center;\n    svg{\n      display:flex;\n      align-items: center;\n      font-size: 1.7rem;\n      color: var(--white-color);\n    }\n}\n\n//nav toggler\n   \n    .ham-burger-menu{\n        position: absolute;\n        right: 0%;\n        top: 3%;\n        display:none;\n        z-index: 15;\n        svg{\n            font-size:3rem;\n        }\n    }\n    .nav-toggle{\n        transform: translateX(0);\n        z-index:20;\n    }\n    @media screen and (max-width: 1200px){\n       .ham-burger-menu{\n           display: block;\n       }\n    }\n\n"])));c.a.render(Object(f.jsxs)(i.a.StrictMode,{children:[Object(f.jsx)(Kn,{}),Object(f.jsx)(b.a,{children:Object(f.jsx)(Qn,{})})]}),document.getElementById("root"))}},[[465,1,2]]]);
//# sourceMappingURL=main.03631ae4.chunk.js.map