/*! For license information please see main.79f9130d.chunk.js.LICENSE.txt */
(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(28),i=a.n(o),c=(a(82),a(74)),l=a(6),s=!0,u={gradientColors:"#8CA4C0, #8CA4C0, #747F8D, #869F96, #B1C7BD, #B1C7BD",firstName:"Sassan",middleName:"",lastName:"Shokoohi",message:" Passionate about changing the world with technology. ",icons:[{image:"fa-envelope",lib:"fa",url:"mailto:sassansh@student.ubc.ca",newTab:!1},{image:"fa-linkedin",lib:"fab",url:"https://www.linkedin.com/in/sassanshokoohi/",newTab:!0},{image:"fa-github",lib:"fab",url:"https://github.com/sassansh",newTab:!0}]},m={show:!0,heading:"About Me",imageLink:a(49),imageSize:250,message:"Hello! My name is Sassan and I recently graduated with a Bachelor of Computer Science degree from the University of British Columbia. I also have a prior Bachelor of Science from UBC in Chemistry, Biology & Environmental Sciences. My love for technology started when I first touched a computer at my dad\u2019s office when I was 7. Fast-forward to today, and I\u2019ve worked on numerous personal projects, developed a healthcare analytics platform for a start-up, and contributed to a student-led mental health web app.",resume:a(83)},h={show:!0,heading:"Recent Projects",gitHubUsername:"sassansh",reposLength:6,specificRepos:[]},f={show:!1,heading:"Leadership",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",images:[{img:a(49),label:"First slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{img:a(49),label:"Second slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."}],imageSize:{width:"615",height:"450"}},d={show:!0,heading:"Skills",hardSkills:[{name:"JavaScript",value:90},{name:"Python",value:80},{name:"SQL",value:75},{name:"Go",value:80},{name:"C/C++",value:65},{name:"PHP",value:75},{name:"MongoDB",value:70},{name:"React",value:80},{name:"HTML/CSS",value:80},{name:"VS Code/PyCharm",value:80}],softSkills:[{name:"Goal-Oriented",value:80},{name:"Collaboration",value:90},{name:"Positivity",value:75},{name:"Adaptability",value:85},{name:"Problem Solving",value:75},{name:"Empathy",value:90},{name:"Organization",value:70},{name:"Creativity",value:90}]},p=!0,g="Get In Touch",v="I recently graduated! If you know of any available positions for new grads, have any questions, or if you just want to say hi, please feel free to email me at",b="sassansh@student.ubc.ca",y={show:!0,heading:"Experiences",data:[{role:"Database and Web Developer",companylogo:a(84),date:"November 2021 \u2013 May 2022"},{role:"Undergraduate Teaching Assistant",companylogo:a(85),date:"September 2019 \u2013 December 2021"},{role:"Healthcare Software Engineer",companylogo:a(86),date:"September 2020 \u2013 August 2021"},{role:"Lead Software Engineer",companylogo:a(87),date:"February 2019 \u2013 Present"},{role:"Technical Teaching Assistant",companylogo:a(88),date:"August 2017 \u2013 April 2020"},{role:"Database & IT Assistant",companylogo:a(89),date:"February 2016 \u2013 August 2017"}]},E={show:!0,heading:"Education",data:[{degree:"Bachelor of Computer Science",major:"Computer Science & Commerce",educationlogo:a(55),date:"September 2019 \u2013 April 2022"},{degree:"Bachelor of Science",major:"Chemistry, Biology & Environmental Sciences",educationlogo:a(55),date:"September 2012 \u2013 April 2017"}]},w=a(24),x=a(38),k=a(67),N=a.n(k),S=n.a.forwardRef((function(e,t){var a=e.gradient,r=e.title,o=e.message,i=e.icons;return n.a.createElement(x.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(a,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},n.a.createElement("div",{id:"stars"}),n.a.createElement(w.a,{className:"text-center"},n.a.createElement("h1",{ref:t,className:"display-1"},r),n.a.createElement(N.a,{className:"lead typist",cursor:{show:!1}}," ",o),n.a.createElement("div",{className:"p-5"},i.map((function(e,t){return n.a.createElement("a",{key:"social-icon-".concat(t),target:e.newTab?"_blank":"",rel:e.newTab?"noopener noreferrer":"",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},n.a.createElement("i",{className:"".concat(e.lib," ").concat(e.image,"  fa-3x socialicons")}))}))),n.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),L=a(8),j=a(19),_=a.n(j),O=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),C=function(e){var t=e.heading,a=e.message,r=e.link,o=e.imgSize,i=e.resume,c=n.a.useState(""),l=Object(L.a)(c,2),s=l[0],u=l[1],m=n.a.useState(Boolean(r)),h=Object(L.a)(m,2),f=h[0],d=h[1];return n.a.useEffect((function(){if(r&&!O.test(r)){try{var e=_.a.get("https://www.instagram.com/"+r+"/?__a=1");u(e.data.graphql.user.profile_pic_url_hd)}catch(t){d(!1),console.error(t.message)}}else u(r)}),[r]),n.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},n.a.createElement("div",{className:"container container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},f&&n.a.createElement("img",{className:"border border-secondary rounded-circle",src:s,alt:"profilepicture",width:o,height:o})),n.a.createElement("div",{className:"col-lg-".concat(f?"7":"12")},n.a.createElement("h2",{className:"display-4 mb-5 text-center"},t),n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{className:"border border-secondary rounded-circle d-lg-none mb-3",src:s,alt:"profilepicture",width:o,height:o})),n.a.createElement("p",{className:"lead text-center"},a),i&&n.a.createElement("p",{className:"lead text-center"},n.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:i,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},P=a(68),T=a(76),A=a(31),F=a(33),I=a(32),G=a(36),R=a(29),z=a.n(R);function B(){B=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new S(n||[]);return r(i,"_invoke",{value:w(e,a,c)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var m={};function h(){}function f(){}function d(){}var p={};l(p,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==t&&a.call(v,o)&&(p=v);var b=d.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(n,i){!function r(n,o,i,c){var l=u(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}})}function w(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return j()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var c=x(i,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=u(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}function x(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=d,r(b,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:f,configurable:!0}),f.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new E(s(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var M=function(e){var t=e.name,a=e.svn_url,o=Object(r.useState)(a+"/archive/master.zip"),i=Object(L.a)(o,2),c=i[0],l=i[1],s=function(){var e=Object(A.a)(B().mark((function e(){return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("https://api.github.com/repos/sassansh/".concat(t,"/branches"));case 3:e.sent.data.some((function(e){return"main"===e.name}))&&l(a+"/archive/main.zip"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()})),n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:"".concat(c),className:"btn btn-outline-secondary mr-3"},n.a.createElement("i",{className:"fab fa-github"})," Clone Project"),n.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},n.a.createElement("i",{className:"fab fa-github"})," Repo"))},D=function(e){var t=e.languages_url,a=e.repo_url,o=Object(r.useState)([]),i=Object(L.a)(o,2),c=i[0],l=i[1],s=Object(r.useCallback)(Object(A.a)(B().mark((function e(){var a;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get(t);case 3:return a=e.sent,e.abrupt("return",l(a.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);Object(r.useEffect)((function(){s()}),[s]);var u=[],m=0;for(var h in c)u.push(h),m+=c[h];return n.a.createElement("div",{className:"pb-3"},"Languages:"," ",u.length?u.map((function(e){return n.a.createElement("a",{key:e,className:"badge badge-light card-link",href:a+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(c[e]/m*1e3)/10," %")})):"code yet to be deployed.")},H=function(e){var t=e.star_count,a=e.repo_url,o=e.pushed_at,i=Object(r.useState)("0 mints"),c=Object(L.a)(i,2),l=c[0],s=c[1],u=Object(r.useCallback)((function(){var e=new Date(o),t=(new Date).getTime()-e.getTime(),a=Math.trunc(t/1e3/60/60);if(a<24){if(a<1)return s("just now");var r=1===a?"hour":"hours";return s("".concat(a.toString()," ").concat(r," ago"))}var n=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return s("on ".concat(n))}),[o]);return Object(r.useEffect)((function(){u()}),[u]),n.a.createElement("p",{className:"card-text"},n.a.createElement("a",{href:a+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},n.a.createElement("span",{className:"text-dark card-link mr-4"},n.a.createElement("i",{className:"fab fa-github"})," Stars"," ",n.a.createElement("span",{className:"badge badge-dark"},t))),n.a.createElement("small",{className:"text-muted"},"Updated ",l))},U=function(e){var t=e.value,a=t.name,r=t.description,o=t.svn_url,i=t.stargazers_count,c=t.languages_url,l=t.pushed_at;return n.a.createElement(I.a,{md:6},n.a.createElement(G.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},n.a.createElement(G.a.Body,null,n.a.createElement(G.a.Title,{as:"h5"},a||n.a.createElement(z.a,null)," "),n.a.createElement(G.a.Text,null,r?r||n.a.createElement(z.a,{count:3}):""," "),o?n.a.createElement(M,{name:a,svn_url:o}):n.a.createElement(z.a,{count:2}),n.a.createElement("hr",null),c?n.a.createElement(D,{languages_url:c,repo_url:o}):n.a.createElement(z.a,{count:3}),t?n.a.createElement(H,{star_count:i,repo_url:o,pushed_at:l}):n.a.createElement(z.a,null))))};function W(){W=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new S(n||[]);return r(i,"_invoke",{value:w(e,a,c)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var m={};function h(){}function f(){}function d(){}var p={};l(p,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==t&&a.call(v,o)&&(p=v);var b=d.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(n,i){!function r(n,o,i,c){var l=u(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}})}function w(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return j()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var c=x(i,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=u(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}function x(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=d,r(b,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:f,configurable:!0}),f.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new E(s(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var q={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},Y="https://api.github.com",J=function(e){var t=e.heading,a=e.username,o=e.length,i=e.specfic,c="".concat(Y,"/users/").concat(a,"/repos?sort=updated&direction=desc"),l="".concat(Y,"/repos/").concat(a),s=new Array(o+i.length).fill(q),u=Object(r.useState)([]),m=Object(L.a)(u,2),h=m[0],f=m[1],d=Object(r.useCallback)(Object(A.a)(W().mark((function e(){var t,a,r,n,s,u;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,_.a.get(c);case 4:a=e.sent,t=Object(T.a)(a.data.slice(0,o)),e.prev=6,r=Object(P.a)(i),e.prev=8,r.s();case 10:if((n=r.n()).done){e.next=18;break}return s=n.value,e.next=14,_.a.get("".concat(l,"/").concat(s));case 14:u=e.sent,t.push(u.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),r.e(e.t0);case 23:return e.prev=23,r.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:f(t),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[c,o,i,l]);return Object(r.useEffect)((function(){d()}),[d]),n.a.createElement(x.a,{fluid:!0,id:"projects",className:"bg-light m-0"},n.a.createElement(w.a,{className:""},n.a.createElement("h2",{className:"display-4 pb-5 text-center"},t),n.a.createElement(F.a,null,h.length?h.map((function(e,t){return n.a.createElement(U,{key:"project-card-".concat(t),id:"project-card-".concat(t),value:e})})):s.map((function(e,t){return n.a.createElement(U,{key:"dummy-".concat(t),id:"dummy-".concat(t),value:e})})))))},K=function(e){return n.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},n.a.createElement(w.a,null,e.children,n.a.createElement("i",{className:"fas fa-code"})," with ",n.a.createElement("i",{className:"fas fa-heart"})," by"," ",n.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/sassansh","aria-label":"My GitHub"},"Sassan Shokoohi")," ","using ",n.a.createElement("i",{className:"fab fa-react"})))},V="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,Z="undefined"!==typeof window;function Q(e){var t=e.element,a=e.useWindow;if(!Z)return{x:0,y:0};var r=(t?t.current:document.body).getBoundingClientRect();return a?{x:window.scrollX,y:window.scrollY}:{x:r.left,y:r.top}}function X(e,t,a,n,o){var i=Object(r.useRef)(Q({useWindow:n})),c=null,l=function(){var t=Q({element:a,useWindow:n});e({prevPos:i.current,currPos:t}),i.current=t,c=null};V((function(){if(Z){var e=function(){o?null===c&&(c=setTimeout(l,o)):l()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),c&&clearTimeout(c)}}}),t)}X.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var $=function(e){var t=n.a.useState(null),a=Object(L.a)(t,2),r=a[0],o=a[1];return n.a.useEffect((function(){var t=e.current,a=new ResizeObserver((function(e){e.forEach((function(e){o(e.contentRect)}))}));return a.observe(t),function(){a.unobserve(t)}}),[e]),r},ee=a(35),te=a(17),ae=n.a.forwardRef((function(e,t){var a=Object(r.useState)(!0),o=Object(L.a)(a,2),i=o[0],c=o[1],l=Object(r.useState)(0),s=Object(L.a)(l,2),f=s[0],p=s[1],g=n.a.useRef(),v=$(g),b=v?v.bottom:0;return X((function(e){e.prevPos;var a=e.currPos;v&&(a.y+t.current.offsetTop-v.bottom>5?c(!0):c(!1),p(a.y))}),[b]),n.a.useEffect((function(){v&&(b-f>=t.current.offsetTop?c(!1):c(!0))}),[b,v,t,f]),n.a.createElement(ee.a,{ref:g,className:" fixed-top  ".concat(i?"navbar-transparent":"navbar-white"),expand:"lg"},n.a.createElement(ee.a.Brand,{className:"brand",href:"/#home"},"<".concat(u.firstName," />")),n.a.createElement(ee.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),n.a.createElement(ee.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(te.a,{className:"mr-auto"},m.show&&n.a.createElement(te.a.Link,{className:"nav-link lead",href:"/#aboutme"},"About"),n.a.createElement(te.a.Link,{className:"nav-link lead",href:m.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),E.show&&n.a.createElement(te.a.Link,{className:"nav-link lead",href:"/#education"},"Education"),E.show&&n.a.createElement(te.a.Link,{className:"nav-link lead",href:"/#experience"},"Experiences"),h.show&&n.a.createElement(te.a.Link,{className:"nav-link lead",href:"/#projects"},"Projects"),d.show&&n.a.createElement(te.a.Link,{className:"nav-link lead",href:"/#skills"},"Skills"))))})),re=a(71);var ne=function(e){var t=e.skill,a=e.value,r=e.isScrolled;return n.a.createElement("div",{style:{width:"95%"}},n.a.createElement("p",{className:"lead mb-1 mt-2"},t),n.a.createElement(re.a,{className:r?" progress-bar-animation":"progress",now:a}))};function oe(e){var t=e.skills,a=e.isScrolled;return n.a.createElement(n.a.Fragment,null,t.map((function(e,t){return n.a.createElement(ne,{key:"".concat(e,"-").concat(t),skill:e.name,value:e.value,isScrolled:a})})))}var ie=function(e){var t=e.skills,a=e.isScrolled;return n.a.createElement(n.a.Fragment,null,n.a.createElement(I.a,{xs:12,md:6},n.a.createElement(oe,{skills:t.slice(0,Math.floor(t.length/2)),isScrolled:a})),n.a.createElement(I.a,{xs:12,md:6},n.a.createElement(oe,{skills:t.slice(Math.floor(t.length/2),t.length),isScrolled:a})))},ce=a(51),le=a(72);var se=function(e){var t=e.heading,a=e.hardSkills,r=e.softSkills,o=n.a.useRef(),i=n.a.useState(!1),c=Object(L.a)(i,2),l=c[0],s=c[1];return X((function(e){e.prevPos;var t=e.currPos;!l&&t.y-400<0&&s(!0)}),[],o),n.a.createElement(x.a,{ref:o,fluid:!0,className:"bg-white m-0",id:"skills"},n.a.createElement(w.a,{className:"p-5 "},n.a.createElement("h2",{ref:o,className:"display-4 pb-5 text-center"},t),n.a.createElement(le.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},n.a.createElement(ce.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},n.a.createElement(F.a,{className:"pt-3 px-1"},n.a.createElement(ie,{skills:a,isScrolled:l}))),n.a.createElement(ce.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},n.a.createElement(F.a,{className:"pt-3 px-1"},n.a.createElement(ie,{skills:r,isScrolled:l}))))))},ue=function(e){var t=e.heading,a=e.message,r=e.email;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"display-4 pb-3 text-center"},t),n.a.createElement("p",{className:"lead text-center pb-3"},a,", ",n.a.createElement("a",{href:"mailto:".concat(r)},r),"."))},me=a(47),he=function(e){var t=e.heading,a=e.message,r=e.img,o=e.imageSize;return n.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},n.a.createElement("div",{className:"container container-fluid"},n.a.createElement("h2",{className:"display-4 pb-5 text-center"},t),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5"},n.a.createElement("p",{className:"lead"},a)),n.a.createElement("div",{className:"col-md-7"},n.a.createElement(me.a,null,r.map((function(e,t){return n.a.createElement(me.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:o.width,height:o.height}),n.a.createElement(me.a.Caption,null,n.a.createElement("h3",null,e.label),n.a.createElement("p",null,e.paragraph)))})))))))},fe=function(e){var t=e.data;return n.a.createElement(I.a,{lg:"6"},n.a.createElement("div",{className:"pb-5 text-center"},n.a.createElement("img",{className:" bg-white mb-3",src:t.companylogo,alt:""}),n.a.createElement("p",{className:"lead"},t.role,n.a.createElement("br",null),t.date)))},de=function(e){var t=e.experiences;return n.a.createElement("section",{id:"experience",className:"section"},n.a.createElement(w.a,null,n.a.createElement(x.a,{fluid:!0,className:"bg-white"},n.a.createElement("h2",{className:"display-4 mb-5 text-center"},t.heading),n.a.createElement(F.a,null,t.data.map((function(e){return n.a.createElement(fe,{key:e.role,data:e})}))))))},pe=function(e){var t=e.data;return n.a.createElement(I.a,{lg:"6"},n.a.createElement("div",{className:"pb-5 text-center"},n.a.createElement("img",{className:" bg-white mb-3",src:t.educationlogo,alt:""}),n.a.createElement("p",{className:"lead"},t.degree,n.a.createElement("br",null),t.date,n.a.createElement("br",null),n.a.createElement("small",{className:"text-muted"},t.major))))},ge=function(e){var t=e.educations;return n.a.createElement("section",{id:"education",className:"bg-light section"},n.a.createElement(w.a,null,n.a.createElement(x.a,{fluid:!0,className:"bg-light"},n.a.createElement("h2",{className:"display-4 mb-5 text-center"},t.heading),n.a.createElement(F.a,null,t.data.map((function(e){return n.a.createElement(pe,{key:e.degree,data:e})}))))))},ve=n.a.forwardRef((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{gradient:u.gradientColors,title:"".concat(u.firstName," ").concat(u.middleName," ").concat(u.lastName),message:u.message,icons:u.icons,ref:t}),m.show&&n.a.createElement(C,{heading:m.heading,message:m.message,link:m.imageLink,imgSize:m.imageSize,resume:m.resume}),E.show&&n.a.createElement(ge,{educations:E}),y.show&&n.a.createElement(de,{experiences:y}),h.show&&n.a.createElement(J,{heading:h.heading,username:h.gitHubUsername,length:h.reposLength,specfic:h.specificRepos}),f.show&&n.a.createElement(he,{heading:f.heading,message:f.message,img:f.images,imageSize:f.imageSize}),d.show&&n.a.createElement(se,{heading:d.heading,hardSkills:d.hardSkills,softSkills:d.softSkills}))})),be=function(){var e=n.a.useRef();return n.a.createElement(c.a,{basename:"/"},s&&n.a.createElement(ae,{ref:e}),n.a.createElement(l.a,{path:"/",exact:!0,component:function(){return n.a.createElement(ve,{ref:e})}}),n.a.createElement(K,null,p&&n.a.createElement(ue,{heading:g,message:v,email:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,a){e.exports=a.p+"static/media/sassansh.a7969e94.png"},55:function(e,t,a){e.exports=a.p+"static/media/ubc-grey.e5bf9cc9.png"},77:function(e,t,a){e.exports=a(119)},82:function(e,t,a){},83:function(e,t,a){e.exports=a.p+"static/media/Sassan Shokoohi - Resume.2a8628c0.pdf"},84:function(e,t,a){e.exports=a.p+"static/media/beaty.516bc458.png"},85:function(e,t,a){e.exports=a.p+"static/media/ubc-cs.bd4b6d18.png"},86:function(e,t,a){e.exports=a.p+"static/media/xerusmedical.235cbe9f.png"},87:function(e,t,a){e.exports=a.p+"static/media/clb.2a998ae4.png"},88:function(e,t,a){e.exports=a.p+"static/media/sauder.e10bf963.png"},89:function(e,t,a){e.exports=a.p+"static/media/ubcpsych.b65605a5.png"}},[[77,1,2]]]);
//# sourceMappingURL=main.79f9130d.chunk.js.map