(this["webpackJsonpvg-lists"]=this["webpackJsonpvg-lists"]||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Delete_icon_modal.ed50bad7.svg"},function(e,t,a){e.exports=a.p+"static/media/gear.dc461297.svg"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Delete_icon_rating.cbf5b388.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Delete_icon.6a12383b.svg"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Up_arrow.3494b1fd.svg"},function(e,t,a){e.exports=a.p+"static/media/Down_arrow.08cc8dc1.svg"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Hamburger_icon.54ebc46a.svg"},function(e,t,a){e.exports=a.p+"static/media/magnifying-glass.f8366a62.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),o=a.n(c),i=(a(27),a(13)),r=a(3),s=a(1),m=(a(28),a(6)),u=(a(29),function(e){return Object(n.useEffect)((function(){e.changeHighlight("")}),[e]),l.a.createElement("div",{id:"home-container"},l.a.createElement("h2",null,"Add video games to lists!"),l.a.createElement("h3",null,"Your Lists:"),l.a.createElement("ul",null,e.lists.map((function(e){return l.a.createElement(m.b,{to:"/".concat(e.linkRoute),key:e.name},l.a.createElement("li",null,e.name))}))),l.a.createElement("hr",null),l.a.createElement("p",{id:"image-note"},l.a.createElement("strong",null,"Note: "),"Due to the size of images generated by RAWG.io for list tile backgrounds, it is suggested that you turn images off if you're on a mobile device. This option is found in the sidebar menu."))}),d=(a(35),a(36),function(e){return l.a.createElement("div",{className:"modal ".concat(e.showModal?"visible":null),onClick:e.hideModal},l.a.createElement("div",{className:"modal-container ".concat(e.modalClass),onClick:function(e){return e.stopPropagation()}},e.children))}),g=a(8),f=(a(37),a(38),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,e.message),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:function(){e.hide(),e.func(e.funcArgs)}},"Yes"),l.a.createElement("button",{onClick:e.hide},"No")))}),h=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(void 0!==e.standardInput?e.standardInput:""),r=Object(s.a)(i,2),m=r[0],u=r[1],d=Object(n.useState)(!0),g=Object(s.a)(d,2),f=g[0],h=g[1],p=l.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),a=e.args,f&&(o(!1),u(""),void 0!==a?e.inputFunction(m,a):e.inputFunction(m))}},l.a.createElement("input",{className:!f&&"invalid",id:e.id,type:"text",value:m,onChange:function(e){u(e.target.value),-1!==e.target.value.indexOf("/")||-1!==e.target.value.indexOf("\\")?h(!1):h(!0)},autoFocus:!0}),l.a.createElement("input",{type:"submit",value:"Submit"}),f?null:l.a.createElement("p",{class:"invalid-text"},"Invalid Input: Cannot use / or \\ in list name!"));return l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){o(!c)}},c?"Cancel":e.text),c?p:null)},p=Object(g.f)((function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),m=Object(s.a)(i,2),u=m[0],g=m[1],p=Object(n.useState)(""),b=Object(s.a)(p,2),E=b[0],v=b[1],w=Object(n.useState)(!1),O=Object(s.a)(w,2),S=O[0],j=O[1],y=function(){o(!c)};Object(n.useEffect)((function(){var t=Object(r.a)(e.lists).filter((function(t){return t.name!==e.name}));g(t.map((function(e){return l.a.createElement("option",{key:e.name,value:e.name},e.name)}))),v("---")}),[e.lists,e.name]);var k=function(){j(!1)},I=l.a.createElement(l.a.Fragment,null,l.a.createElement("select",{onChange:function(e){v(e.target.value)}},l.a.createElement("option",null,"---"),u),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){j("---"!==E),y()}},"Merge"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{key:e.name,className:"modal-list-item"},l.a.createElement("h2",null,e.name),l.a.createElement("div",{className:"list-button-container"},l.a.createElement("button",{onClick:function(){e.deleteIndex(e.index),e.showDelete()}},"Delete List"),l.a.createElement("button",{onClick:function(){return e.moveList("up",e.index)}},"Move Up"),l.a.createElement("button",{onClick:function(){return e.moveList("down",e.index)}},"Move Down"),l.a.createElement(h,{id:"list-copy-input",text:"Copy List",inputFunction:e.copy,args:e.contents}),l.a.createElement(h,{id:"list-rename-input",text:"Rename List",inputFunction:function(t,a){String(document.URL.match(/[^/]+(?=\/$|$)/))===e.lists[a].linkRoute&&e.history.push("/"),e.rename(t,a)},args:e.index,standardInput:e.name}),l.a.createElement("div",null,l.a.createElement("button",{onClick:y},c?"Cancel":"Merge Into"),l.a.createElement("br",null),c?I:null))),l.a.createElement(d,{modalClass:"merge-list",showModal:S,hideModal:k},l.a.createElement(f,{message:"Are you sure you want to merge ".concat(e.name," into ").concat(E,"?"),func:e.merge,funcArgs:[e.index,E],hide:k})))})),b=Object(g.f)((function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),o=c[0],i=c[1],r=Object(n.useState)(0),m=Object(s.a)(r,2),u=m[0],g=m[1],b=function(e){g(e)},E=function(){i(!0)},v=function(){i(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"List Manager"),l.a.createElement("p",null,"Add, delete, copy, reorganize, and even rename lists here! Your one stop shop for video game list management!"),l.a.createElement("button",{id:"close-modal",onClick:e.hideModal},l.a.createElement("img",{src:a(39),alt:"Close modal"})),l.a.createElement(h,{id:"add-list",text:"Add List",inputFunction:e.add}),l.a.createElement("ul",{id:"modal-list-container"},e.lists.map((function(t){return l.a.createElement(p,{key:t.name,name:t.name,index:t.index,contents:t.contents,moveList:e.moveList,deleteIndex:b,showDelete:E,copy:e.copy,merge:e.merge,rename:e.rename,lists:e.lists})}))),o?l.a.createElement(d,{modalClass:"delete-list",showModal:o,hideModal:v},l.a.createElement(f,{message:"Are you sure you want to delete this list?",func:function(t){String(document.URL.match(/[^/]+(?=\/$|$)/))===e.lists[t].linkRoute&&e.history.push("/"),e.delete(t),v()},funcArgs:u,hide:v})):null)})),E=function(e){var t=Object(n.useState)([]),c=Object(s.a)(t,2),o=c[0],i=c[1],r=Object(n.useState)(!1),u=Object(s.a)(r,2),g=u[0],f=u[1],h=function(){f(!1)};return Object(n.useEffect)((function(){i(e.lists.map((function(t){var a=t.linkRoute;return l.a.createElement(m.b,{to:"/".concat(a),key:t.name,onClick:function(){e.hide(),e.changeHighlight(a)}},l.a.createElement("li",{className:e.currentPage===a?"active":null},"".concat(t.name," [").concat(t.contents.length,"]")))})))}),[e.lists,e.hide,e.currentPage,e]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"sidebar",className:e.showSidebar?"visible":null},l.a.createElement("div",{id:"manage-lists",onClick:function(){f(!0)}},l.a.createElement("img",{src:a(40),alt:""}),l.a.createElement("p",null,"Manage Lists")),l.a.createElement("h2",null,"Your Lists:"),0===e.lists.length?l.a.createElement("p",null,"Add a list to see it here!"):l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("ul",null,o))),l.a.createElement("div",{id:"show-images"},l.a.createElement("p",null,"Toggle Tile Images:"),l.a.createElement("div",{id:"toggle",onClick:function(){return e.setShowImages(!e.showImages)},className:e.showImages?"on":"off"},l.a.createElement("button",{id:"toggle-button"})))),g?l.a.createElement(d,{modalClass:"list-modal",showModal:g,hideModal:h},l.a.createElement(b,{lists:e.lists,add:e.add,delete:e.delete,copy:e.copy,rename:e.rename,merge:e.merge,moveList:e.moveList,hideModal:h})):null)},v=(a(41),function(e){var t=Object(n.useState)("-"),c=Object(s.a)(t,2),o=c[0],i=c[1],r=Object(n.useState)(o||0),m=Object(s.a)(r,2),u=m[0],d=m[1];Object(n.useEffect)((function(){i((function(){if(e.games.hasOwnProperty(e.name))return e.games[e.name].rating})),d((function(){if(e.games.hasOwnProperty(e.name))return e.games[e.name].rating}))}),[e.games,e.name]);var g=function(t){if(e.games.hasOwnProperty(e.name)){var a=JSON.parse(JSON.stringify(e.games));a[e.name].rating=t,e.setGames(a),i((function(){if(e.games.hasOwnProperty(e.name))return e.games[e.name].rating}))}else e.addGameInfo(e.name,e.title,e.date,t,e.consoles,e.image)};return l.a.createElement("div",{className:"overall-rating-container"},l.a.createElement("div",{className:"rating-container"},[.5,1,1.5,2,2.5,3,3.5,4,4.5,5].map((function(e){return l.a.createElement("div",{key:e,className:e%1===0?"full":"half",onMouseEnter:function(){return d(e)},onMouseLeave:function(){return d(o)},onClick:function(){return g(e)}},l.a.createElement("div",{className:"rating ".concat(u>=e&&"rating-hover")}))}))),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){g(0)}},l.a.createElement("img",{src:a(42),alt:"Remove Rating"})))}),w=(a(43),function(e){var t=Object(n.useState)(e.games.hasOwnProperty(e.name)),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(null!==e.consoles&&e.consoles.length<=5),m=Object(s.a)(i,2),u=m[0],d=m[1],g=Object(n.useState)(null!==e.consoles&&e.consoles.length>5);Object(n.useEffect)((function(){o(e.games.hasOwnProperty(e.name))}),[e]);var f=function(t){console.log(e.consoles);var a=JSON.parse(JSON.stringify(e.games));if(c)a[e.name].consoles[t].owned=!a[e.name].consoles[t].owned,e.setGames(a);else{var n=Object(r.a)(e.consoles).map((function(e,a){return{name:e.platform.name,owned:t===a}}));e.addGameInfo(e.name,e.title,e.date,null,n,e.image),o(!0)}};return l.a.createElement("div",null,l.a.createElement("ul",{className:"consoles-list"},null===e.consoles?null:!g||g&&u?e.consoles.map((function(e,t){var a=e.hasOwnProperty("platform")?e.platform.name:e.name;return l.a.createElement("li",{className:c&&e.owned?"owned":null,onClick:function(){return f(t)},key:a},a)})):Object(r.a)(e.consoles).splice(0,5).map((function(e,t){var a=e.hasOwnProperty("platform")?e.platform.name:e.name;return l.a.createElement("li",{className:c&&e.owned?"owned":null,onClick:function(){return f(t)},key:a},a)})),g[0]?l.a.createElement("li",{onClick:function(){d(!u)}},u?"-":"+"):null))}),O=(a(44),function(e){var t=[void 0,"January","February","March","April","May","June","July","August","September","October","November","December"],c=e.date.split("-"),o=Object(s.a)(c,3),i=o[0],r=o[1],m=o[2],u=Object(n.useState)(e.showImage?"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4)), url(".concat(e.image,")"):"linear-gradient(#8b91ae, #45456c)"),d=Object(s.a)(u,2),g=d[0],f=d[1];Object(n.useEffect)((function(){e.showImages?f("linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4)), url(".concat(e.image,")")):f("linear-gradient(#8b91ae, #45456c)")}),[e.showImages,e.image]);var h={backgroundImage:g,backgroundSize:"cover",backgroundPosition:"center 0px"};return l.a.createElement("li",{style:h},l.a.createElement("div",{className:"list-item-header"},l.a.createElement("div",null,l.a.createElement("h2",null,e.title),l.a.createElement("p",null,"Released: ".concat(t[Number(r)]," ").concat(m,", ").concat(i))),e.hasOwnProperty("delete")?l.a.createElement("button",{onClick:e.delete},l.a.createElement("img",{alt:"Delete game from list",src:a(45)})):null),l.a.createElement(v,{games:e.games,setGames:e.setGames,name:e.name,title:e.title,date:e.date,consoles:e.consoles,addGameInfo:e.addGameInfo,image:e.image}),l.a.createElement(w,{games:e.games,setGames:e.setGames,name:e.name,title:e.title,date:e.date,consoles:e.consoles,addGameInfo:e.addGameInfo,image:e.image}),e.children)}),S=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)("---"),r=Object(s.a)(i,2),m=r[0],u=r[1];return Object(n.useEffect)((function(){o(e.lists.map((function(e){return l.a.createElement("option",{key:e.name,value:e.name},e.name)})))}),[e.lists]),l.a.createElement(O,e,l.a.createElement("div",{className:"add-container"},l.a.createElement("div",{className:"add"},l.a.createElement("select",{onChange:function(e){u(e.target.value)}},l.a.createElement("option",null,"---"),c),l.a.createElement("button",{onClick:function(){e.add(e.name,m),e.addGameInfo(e.name,e.title,e.date,e.rating,e.consoles,e.image)}},"Add")),l.a.createElement("button",{onClick:function(){e.add(e.name,e.quickAdd),e.addGameInfo(e.name,e.title,e.date,e.rating,e.consoles,e.image)}},"Quick Add")))},j=(a(46),function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)("---"),r=Object(s.a)(i,2),m=r[0],u=r[1];return Object(n.useEffect)((function(){e.changeHighlight("")}),[e]),Object(n.useEffect)((function(){o(e.lists.map((function(e){return l.a.createElement("option",{key:e.name,value:e.name},e.name)})))}),[e.lists]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Search"),l.a.createElement("label",{htmlFor:"quick-add"},"Quick Add:"),l.a.createElement("select",{id:"quick-add",onChange:function(e){u(e.target.value)}},l.a.createElement("option",null,"---"),c),0===e.data.length?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{id:"search-results"},e.data.map((function(t){var a=e.games.hasOwnProperty(t.slug)?e.games[t.slug].consoles:t.platforms;return l.a.createElement(S,{key:t.id,name:t.slug,title:t.name,date:t.released,consoles:a,add:e.add,lists:e.lists,games:e.games,setGames:e.setGames,addGameInfo:e.addGameInfo,image:t.background_image,quickAdd:m,showImages:e.showImages})})))))}),y=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),o=c[0],i=c[1],m=Object(n.useState)([]),u=Object(s.a)(m,2),d=u[0],g=u[1],f=Object(n.useState)(""),h=Object(s.a)(f,2),p=h[0],b=h[1],E=[e.listIndex,e.index],v=e.games[e.name],w=function(){i(!o)};Object(n.useEffect)((function(){var t=Object(r.a)(e.lists).filter((function(t){return t.name!==e.listName}));g(t.map((function(e){return l.a.createElement("option",{key:e.name,value:e.name},e.name)}))),b("---")}),[e.lists,e.listName]);var S=l.a.createElement("div",null,l.a.createElement("select",{onChange:function(e){b(e.target.value)}},l.a.createElement("option",null,"---"),d),l.a.createElement("button",{className:"add-button",onClick:function(){e.add(e.name,p),w()}},"Add"));return l.a.createElement(O,{games:e.games,setGames:e.setGames,name:e.name,title:e.title,date:e.date,rating:e.rating,consoles:e.games[e.name].consoles,image:v.image,delete:function(){e.changeItem.apply(e,["delete"].concat(E))},showImages:e.showImages},l.a.createElement("div",{className:"alteration-container"},l.a.createElement("div",{className:"copy"},l.a.createElement("button",{onClick:w},o?"Cancel":"Copy To Other List"),l.a.createElement("br",null),o?S:null),l.a.createElement("div",{className:"move"},l.a.createElement("button",{onClick:function(){e.changeItem.apply(e,["up"].concat(E))}},l.a.createElement("img",{src:a(47),alt:"Move List Up"})),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.changeItem.apply(e,["down"].concat(E))}},l.a.createElement("img",{src:a(48),alt:"Move List Down"})))))},k=function(e){var t=Object(n.useState)(e.lists.filter((function(t){return t.linkRoute===e.match.params.name}))[0]),a=Object(s.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){o(e.lists.filter((function(t){return t.linkRoute===e.match.params.name}))[0])}),[e.match,e.lists]),l.a.createElement("div",null,l.a.createElement("h1",null,c.name),0===c.contents.length?l.a.createElement("p",null,"There are no games here! Search for games to start filling this list out!"):null,l.a.createElement("ul",{id:"game-list"},Object(r.a)(c.contents).map((function(t){return l.a.createElement(y,{key:t.name,name:t.name,title:e.games[t.name].name,index:t.index,image:t["background-image"],lists:e.lists,date:e.games[t.name].date,games:e.games,listName:c.name,listIndex:c.index,changeItem:e.changeItem,add:e.add,setGames:e.setGames,showImages:e.showImages})}))))},I=(a(49),Object(g.f)((function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1];return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),fetch("https://api.rawg.io/api/games?search=".concat(c.split(" ").join("-")),{method:"GET",headers:{"User-Agent":"https://github.com/Flakari/vg-lists/"}}).then((function(e){return e})).then((function(e){return e.json()})).then((function(t){e.setData(t.results),e.hasOwnProperty("toggleSearch")&&e.toggleSearch()})).catch((function(e){console.log(e)})),e.history.push("/search")}},l.a.createElement("input",{type:"text",onChange:function(e){o(e.target.value)},value:c,placeholder:"Search"}))}))),N=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),o=c[0],i=c[1],r=function(){i(!o)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("button",{onClick:e.setSidebar},l.a.createElement("img",{src:a(50),alt:"Toggle Lists"})),l.a.createElement(m.b,{to:"/"},"VG Lists"),l.a.createElement("div",{id:"search-container"},l.a.createElement(I,{setData:e.setData})),l.a.createElement("button",{onClick:r},l.a.createElement("img",{src:a(51),alt:"Search"}))),l.a.createElement("div",{id:"mobile-search-container",className:o?"visible":null},l.a.createElement(I,{setData:e.setData,toggleSearch:r})))},x=function(){var e=Object(n.useState)(!window.localStorage||!window.localStorage.getItem("showImages")||JSON.parse(window.localStorage.getItem("showImages"))),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(String(document.URL.match(/[^/]+(?=\/$|$)/))),d=Object(s.a)(o,2),f=d[0],h=d[1],p=Object(n.useState)(""),b=Object(s.a)(p,2),v=b[0],w=b[1],O=Object(n.useState)(""),S=Object(s.a)(O,2),y=S[0],I=S[1],x=Object(n.useState)(window.localStorage&&window.localStorage.getItem("lists")?JSON.parse(window.localStorage.getItem("lists")):[{name:"Owned",linkRoute:"owned",contents:[],index:0},{name:"Completed",linkRoute:"completed",contents:[],index:1},{name:"Currently Playing",linkRoute:"currently-playing",contents:[],index:2},{name:"Wishlist",linkRoute:"wishlist",contents:[],index:3},{name:"Backlog",linkRoute:"backlog",contents:[],index:4}]),C=Object(s.a)(x,2),J=C[0],G=C[1],L=Object(n.useState)(window.localStorage&&window.localStorage.getItem("games")?JSON.parse(window.localStorage.getItem("games")):{}),R=Object(s.a)(L,2),A=R[0],M=R[1],D=Object(n.useState)(!1),P=Object(s.a)(D,2),F=P[0],_=P[1];Object(n.useEffect)((function(){window.localStorage&&!window.localStorage.getItem("lists")&&window.localStorage.setItem("lists",JSON.stringify([{name:"Owned",linkRoute:"owned",contents:[],index:0},{name:"Completed",linkRoute:"completed",contents:[],index:1},{name:"Currently Playing",linkRoute:"currently-playing",contents:[],index:2},{name:"Wishlist",linkRoute:"wishlist",contents:[],index:3},{name:"Backlog",linkRoute:"backlog",contents:[],index:4}])),window.localStorage&&!window.localStorage.getItem("games")&&window.localStorage.setItem("games",JSON.stringify([])),window.localStorage&&!window.localStorage.getItem("showImages")&&window.localStorage.setItem("showImages",JSON.stringify(!0))}),[]);var H=function(e){h(e)},T=function(e){window.localStorage&&window.localStorage.getItem("lists")?(window.localStorage.setItem("lists",JSON.stringify(e)),G(JSON.parse(window.localStorage.getItem("lists")))):G(e)},U=function(e){w(e)},$=function(e){window.localStorage&&window.localStorage.getItem("games")?(window.localStorage.setItem("games",JSON.stringify(e)),M(JSON.parse(window.localStorage.getItem("games")))):M(e)},W=function(e,t){for(var a=JSON.parse(JSON.stringify(J)),n=0;n<a.length;n++)a[n].name===t&&function(){var t=[];a[n].contents.forEach((function(e){t.push(e.name)})),-1===t.indexOf(e)&&(a[n].contents.push({name:e,index:a[n].contents.length}),T(a))}()},q=function(e,t,a){if(!("up"===e&&0===a||"down"===e&&a===J.length-1)){var n=JSON.parse(JSON.stringify(J)),l=n[t],c=l.contents.splice(a,1)[0];if("up"===e||"down"===e){var o=Y(e,l.contents,c,a);l.contents=o}for(var i=0;i<l.contents.length;i++)l.contents[i].index=i;n[t].contents=l.contents,T(n)}},Y=function(e,t,a,n){return"up"===e&&n>0?t.splice(n-1,0,a):"down"===e&&n<t.length?t.splice(n+1,0,a):t.splice(n,0,a),t},z=function(e,t){var a=e.trim();if(""!==a){var n=[];if(J.forEach((function(e){n.push(e.name.toLowerCase())})),-1===n.indexOf(a.toLowerCase())){var l=Object(r.a)(J);l.push(function(e,t){var a=e.trim();return{name:a,linkRoute:a.toLowerCase().split(" ").join("-"),contents:t||[],index:J.length}}(e,t)),T(l)}}};return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{basename:"/vg-lists"},l.a.createElement(N,{setData:U,setSidebar:function(){_(!F)}}),l.a.createElement(E,{lists:J,add:z,delete:function(e){var t=Object(r.a)(J);t.splice(e,1);for(var a=0;a<t.length;a++)t[a].index=a;T(t)},copy:function(e,t){z(e,t)},rename:function(e,t){var a=e.trim();if(""!==a){var n=Object(r.a)(J);n[t].name=a,n[t].linkRoute=a.toLowerCase().split(" ").join("-"),T(n)}},merge:function(e){var t,a=Object(s.a)(e,2),n=a[0],l=a[1],c=0,o=JSON.parse(JSON.stringify(J)),m=new Set,u=Object(i.a)(o);try{for(u.s();!(t=u.n()).done;){var d=t.value;d.name===l&&(c=d.index)}}catch(v){u.e(v)}finally{u.f()}var g,f=Object(i.a)(o[c].contents);try{for(f.s();!(g=f.n()).done;){var h=g.value;m.add(h.name)}}catch(v){f.e(v)}finally{f.f()}var p,b=Object(i.a)(o[n].contents);try{for(b.s();!(p=b.n()).done;){var E=p.value;m.add(E.name)}}catch(v){b.e(v)}finally{b.f()}o[c].contents=Object(r.a)(m).map((function(e,t){return{name:e,index:t}})),T(o)},showSidebar:F,hide:function(){_(!1)},moveList:function(e,t){if(!("up"===e&&0===t||"down"===e&&t===J.length-1)){var a=JSON.parse(JSON.stringify(J)),n=a.splice(t,1)[0];a=Y(e,a,n,t);for(var l=0;l<a.length;l++)a[l].index=l;T(a)}},currentPage:f,changeHighlight:H,showImages:a,setShowImages:function(e){window.localStorage&&window.localStorage.getItem("showImages")?(window.localStorage.setItem("showImages",JSON.stringify(e)),c(JSON.parse(window.localStorage.getItem("showImages")))):c(e)}}),l.a.createElement("div",{id:"main-container"},l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/"},l.a.createElement(u,{lists:J,changeHighlight:H})),l.a.createElement(g.a,{path:"/search"},l.a.createElement(j,{lists:J,games:A,add:W,data:v,setData:U,searchInput:y,setInput:function(e){I(e)},setGames:$,addGameInfo:function(e,t,a,n,l,c){var o=JSON.parse(JSON.stringify(A)),i=[];l.forEach((function(e){var t=e.hasOwnProperty("platform")?e.platform.name:e.name;i.push({name:t,owned:!!e.hasOwnProperty("owned")&&e.owned})})),void 0===o[e]&&(o[e]={name:t,date:a,consoles:i,rating:n||null,image:c},$(o))},changeHighlight:H,showImages:a})),l.a.createElement(g.a,{path:"/:name",render:function(e){return l.a.createElement(k,Object.assign({changeItem:q,lists:J,add:W,games:A,setGames:$,showImages:a},e))}}))),l.a.createElement("footer",null,"All data gathered from RAWG - ",l.a.createElement("a",{href:"https://www.rawg.io",target:"_blank",rel:"noopener noreferrer"},"RAWG.io"))))};o.a.render(l.a.createElement(x,null),document.getElementById("root"))}]),[[22,1,2]]]);
//# sourceMappingURL=main.53ace30c.chunk.js.map