(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),r=n.n(s),o=(n(17),n(6)),c=n.n(o),l=n(9),u=n(1),p=n(2),m=n(4),h=n(3),v=n(5),f=(n(20),n(10)),d=n.n(f),g=(n(23),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"movie"},i.a.createElement("div",{className:"movie_column"},i.a.createElement(b,{poster:this.props.poster,alt:this.props.title})),i.a.createElement("div",{className:"movie_column"},i.a.createElement("h1",null,"Title : ",this.props.title),i.a.createElement("div",{className:"movie_genres"},this.props.genres.map(function(e,t){return i.a.createElement("span",{className:"movie_genre",key:t},e)})),i.a.createElement("p",{className:"movie_synopsis"},i.a.createElement(d.a,{text:this.props.synopsis,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}),"g")))}}]),t}(a.Component)),b=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("img",{src:this.props.poster,alt:this.props.alt,title:this.props.title,className:"movie_poster"})}}]),t}(a.Component),j=g,y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={},n._getMovie=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("https://yts.lt/api/v2/list_movies.json").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n._renderMovies=function(){return n.state.movies.map(function(e){return i.a.createElement(j,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._getMovie()}},{key:"render",value:function(){return i.a.createElement("div",{className:this.state.movies?"App":"App-loading"},this.state.movies?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.6f89274d.chunk.js.map