"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{550:function(n,e,r){r.d(e,{a:function(){return o},B:function(){return a}});var t=r(861),A=r(439),c=r(757),u=r.n(c),s=r(791),E=r(409),a=function(){var n=(0,s.useState)([]),e=(0,A.Z)(n,2),r=e[0],c=e[1],a=(0,s.useState)(!1),i=(0,A.Z)(a,2),o=i[0],R=i[1],I=(0,s.useState)(null),f=(0,A.Z)(I,2),B=f[0],d=f[1];return(0,s.useEffect)((function(){R(!0);var n=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,E.Hg)();case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d(n.t0.message);case 10:return n.prev=10,R(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),{movies:r,isLoading:o,error:B}},i=r(689),o=function(){var n=(0,s.useState)(null),e=(0,A.Z)(n,2),r=e[0],c=e[1],a=(0,s.useState)(!1),o=(0,A.Z)(a,2),R=o[0],I=o[1],f=(0,s.useState)(null),B=(0,A.Z)(f,2),d=B[0],x=B[1],j=(0,i.UO)().movieId;return(0,s.useEffect)((function(){I(!0);var n=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,E.t2)(j);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),x(n.t0.message);case 10:return n.prev=10,I(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[j]),{movie:r,isLoading:R,error:d}}},875:function(n,e,r){r.r(e),r.d(e,{default:function(){return o}});var t=r(414),A=r(550),c=r(217),u=r(87),s=r(184),E=function(n){var e=n.movie,r=e.title,t=e.original_title,A=e.genres,E=e.overview,a=e.poster_path,i=e.release_date,o=e.vote_average,R=A.map((function(n){return n.name})).join(", ");return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):c,alt:r||t}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:r||t}),(0,s.jsx)("p",{children:i}),(0,s.jsxs)("h2",{children:["User score: ",o]}),(0,s.jsxs)("code",{children:["Overview: ",E]}),(0,s.jsxs)("p",{children:["Genres: ",R]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Additional info"}),(0,s.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,s.jsx)(u.rU,{to:"reviews",children:"Reviews"})]})]})},a=r(689),i=r(791),o=function(){var n,e,r=(0,A.a)(),c=r.movie,o=r.isLoading,R=r.error,I=(0,a.TH)(),f=(0,i.useRef)(null!==(n=null===I||void 0===I||null===(e=I.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.rU,{to:f.current,children:(0,s.jsx)("button",{children:"GoBack"})}),o&&(0,s.jsx)(t.Z,{}),R&&(0,s.jsx)("p",{children:"Oops, some error occured..."}),c&&(0,s.jsx)(E,{movie:c}),(0,s.jsxs)(i.Suspense,{fallback:(0,s.jsx)(t.Z,{}),children:[" ",(0,s.jsx)(a.j3,{})]})]})}},409:function(n,e,r){r.d(e,{Hg:function(){return E},Wf:function(){return i},t2:function(){return a}});var t=r(861),A=r(757),c=r.n(A),u=r(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="769572b7424cdd494dc478209682dba1",E=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(e,"&include_adult=true"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},217:function(n){n.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRIXFhYYFRgaHBwdGBwcHBwdHxwZHx8eJBwcGRgeITAzHCM4IR4dJjomKy8xODg1HCU7QDszPy40NTEBDAwMEA8QHxISHj8rJSY0NjQ0NTQ0NDY0ND0xPTE0NjQ0NDQ0NDQ0NDQ0PzQxNDQ0NDQ0NDQ0NDY0NjQ0NDQxNP/AABEIAOQA3QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYDBQcCAf/EADwQAAICAQMCBAMFBQcEAwAAAAECAAMRBBIhBTEGIkFRE2FxBzJCgZEUFVKh0RYjcoKSorEkM8HhYmPw/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB4RAQEBAAIDAQEBAAAAAAAAAAABEQIhAzFBURIi/9oADAMBAAIRAxEAPwDrkREBERAREQEREBESONdXkjemQcEEgc/nLJb6S8pPdSInxWB7EH6T7IpERAREQEREBERAREQEREBERAREQEREBERAREQERIGt6tXWSpJZv4V9PqewlktuRnlynGbbifK/1MacMQEL2E9lLfePvg9/kJuaLt6Kwyu4cZ9JpqemX0ktWUf6jB/n2/WdPHkt25XDzbZMmy/fxI6H01q8u+AWGNo9BkHk+/E3Ej6F3ZM2KEbJ4Ht6epkiY5222118XGceMk9EREy6EREBERAREQEREBERAREQEREBERAREQEREBNV12sCtiqeZyqswHOPr+WPzmx1FpVSQpY+ijuSfr2HzmHQazeOcBhncoOcYYgf8TfHZ3+Ofk/nl/i3uxh6dqHY4+EUQKApbvx24+k2E03iXry6StG2NbZY2yqtSAXfBJyx+6oAyW9JoNL++bVOoW7TrkkLp2QlNo/+37270z247TNu3WuHG8ZlurxEqFHjYVsE19D6JzwHPnpb6WqPL/mH5y10XK6q6Mrq3KspDAj5Ed5GmSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgQ+odUooCm+6ukMcKXZVyfYbjzM+npRclAAGO4kfiJ5zn1lJ8W9K1J1Yvr0/wC1I1IqA3JmtgzFgVcgbWDDzDP3efSV3U+JNT07SHQ30tVYQy0Xq2+sIzkkjjOUVsBRk8LwARNZ11WZ3yuz19blXOv1z2Kc1oWooPptU/31o+rDaPknznz7TPGFugFGn0wVXdCxcgNtQHaoRTwWJB5OcY7c8WPwf0paaVKjA2hUHsg9fqT/AMTXfaJ4POuSp6iovqJ2hjhXQkFkJ/CcjIPbuD3yJM1pQW8c6nT7U1L/ALazYN1TomxVIyVDBQd+D9B7S8abwuuxNV0vUPpPiKrhPvUuGAID1N904447Tlz+Cuo26ixRprFLOx3OAqAMx5L5wRg/hJPtmdk6nevTemAKdzVVJXX7tZgKuB825xNcs3pnjLnbL4P61dqUu+MiI9VhqZkYlHZQNzICMgAnGMnnPMsM514Y6k66euvT2VUInD23VWO9txObWWoMmxd5YZY5OOwxLF0nxAfjNp9S9XxNm+uxCVS1MgMArElHBIyuTwcj1xhpY4gds+kQEREBERAREQEREBERAREQEREBERAREQE5ztXqOudyA1VbGrT5AIwjZtuGfUuuAfZB7yxeOOqNTp/h1nF2ob4VR/h3Dzv/AJV3N9dsh9LNHT9E175VEUKoHLFRgKB7szY/kYFuRAAABgAYA+Qn2cs0f2r2Wu23RL8JeWJuxtX3YldoPynQPD/W6dZSl1LEqSQR2KsO6sPcfzBBHeWyxNm42c5l451TanXaPTIf7qm+sWH0NzhmVfyRGJ/xCXTrXX002lu1LqV2BgFPq+cKoPrk459py77PesHU6rS1FBlLL9TbZuybLGXbkrjjAIA5PERWx+13odVOmqsrLjdeAylsqco5zs7ZyBz85s/DvhajUabSM9iXP8CslbFVygZFOAPT05IycDmVL7QNfZq3CoHsYPuCKrMVTDAEqoOP/M2fhC8u2i2nDIaUYdipQKGDD08oOQfSdZ4/lvxw5ebJLJ7uLJ/YIISagKz7022VH9FKifOnnVabW6Ol9RcyWmzKXMlmQlbEbXI3Z3Y/EfWbP7POtnU6ZyTu+Ha6Kx7tXw1ZPz2MF/yykfa/1Nq9bonQkNSu8e24sCAfrtI+mZyzvHZ2KJC6P1OvUU13VsGV1VuCCVJGdrexHbHymTqN5Sq1xglEdhngFgpIBJ+YkVoeteJXFx0uiqGo1AGXLEiqgHsbWHcn+EYOPUSHZ4g12jZTr66n07EA30bh8Mn1sRicr8x+hkj7NaEGhqsU7nuzZe34ntYktuP8pvOt0I+nvRwCrIwIP0gTlYEAg5B5BHYj3Bn2Vr7Ob2fpujLckIUB91R2Rf8AaollgIiICIiAiIgIiICIiAiIgc/8dA1azSam4n9lKGkuASKHZwS7Y9GGFzj8P67vxX0pddoLa9O6NuCtUVIKlkIKrkehxj5ZljesMCrAMpGCCAQQe4IPcTnfhfwzRZb1HL3U7NRYgpptepFRT5CFQjkrtbvjzdhKOVdcsNSU6YgoUG65SCrfGJOdwPfAHHpggidV+xfQWV6W53BVLXDVg+qqoBcD2J4Hvt+k86/o1j6kU6PUWuaiDc+oKX11ZGVRPiIzNZgg4DAAEfSWD+zLAbrOoavcPxCxa1H0RVC4+WJby1JJJ0i6j/ruorX302hIaz2fVMPKvbkKOT8+D3nt66k6pZZtrqWrRhnY7UXdZY3Ltx6J3M0T6rUdLotXTfB1qFmfc2VtVmOXawLxePoVPA7ict6r1O7Wu92ovrDEKMHcoIXO1VREPAyeW9+8Sarrn2cdX06039g5vtLMvnyNx2AsO427cHsRKz9oXXEXVsdPhXeg13NjzEMw2kY7OV3LnvtY9siY/s48NU6pNSy2WVsrqvDsG27QckrtyC27GRxx68my9S6Voum6np1u3ktaLSUNjMuwkWbQGbcr7Ru5OGOTG5Wc6xM8IUN07Q1G2q1nvuBZK0Lsm8ALuH4QFUE+xbHea86GrV9b1SW4auqqv+7PZnXO3cPUDcxx85u7fGOme3TtV1DTV1qW+OjjazgjygM+NpB//ek5zZp3fWNrVu+Gl2osrVlAOCMhNxPDIzLj64949qvPjjSJo0/adEF0+pGFwijFqthQj1gYc5I2kjOcYlSp8FdX15Day5q1Ppa24/5aE4X89ssXUvDiV0WXdQ1JcKjfDRcIu8ghWAXl2yRt5ODjEqel6J1rVkCzUsmR2s1DKD7+WvP6EZiK3duhv6VdRp9HqDebEd3rswoXaQNysM7ck4AIPIJzzJeq611TUq1K6dVLjBbejBf/AJYRctjvjiavR+GbukWV6x3XUoMrqAgO5EbHn5OWAIweOM5+nUtB1bT21iyuxGQjOQwGPr7SUU/w5Xd03UaXRu7WafUKRXuOTVcqlioP8LYPl5w3b1z0CUNtWOodR0xo8+n0jF7LfwmzaQqIfU5bJ9gPyl8kCIiAiIgIiICIiAiIgIiIHlycHAyccDOMn2z6SjdX6fq11B1OnULYwAsTnZYF4Vtw3bXA8ucEEAAjjMvcQOc+GvEr6RbE1mmupBd3N2N6sXYsTYykhTzjOccenYR+oeLkvc7BZqMHyrSjOo/z8Ln3JM6fmfBxwOBKOW06PXX8BBpkPc/920j5AeVOM8ktietN9k9GBu3n/HYB/JFnUIjRQtF9np07b9Le2mfsWDM6sPZ0buPoQfnNrofCjB2uv1L6i4rt3lQoVM52Vpk7Rnk9ycDmWiI0aazw7U33yW+oU/8AImK/wtQyGvHkIwUKqVx3+6APXmb6JNFQ0/gShGVgSzL9wu1j7P8AAHchT8xzNxX0JMeZ2J+WB/I5m3iBqf3Cn8T/AO3+k0932c6B2LNW3JywVyqsfcomAf0luiBA6b0imgBak2qOABwB/lGB/KT4iAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBSuu+I9RTqLEL16etSnwfi1WGu8EAsW1KnFJzlcFTjAJzmZus+Jrqm1IrT4pS/TVgYRQq2hScNvG4nO0EgAFhnIBMn9S8MC1r/wDqb0rvx8apShR+ADtLoSmQMHaRGr8K1uL8PYhsahwV2+RqAoTYGBBHlGQ2Zek7YV8ZUnUCko65t+BvLV4F+MlNgffjPk3bdu4Yz6zx4n8RWaXUaRdoahksbUcZZUVkXeDnspcEjnjMmaTw4K7msW+0Kzmx68V7GtIwzFtm4AnzFQwGZN1XSUsuS18nZXZXsONrJZt3bv8ASB+Zjo7abSeJ22kMjX2Pqb6qUr2jclZJ3FmYKAF5LE85HvPP9rHe7QpVSxW17UtDbQ6NVw6Y34yp85POVGFyTMuk8G11VVJVbbW1VjvVYNhZN4wykMpV128cj0EzVeFkU6VlssV6XssL+Rmsa3/u/EyuPN28oGB2xxL0naJ4n61bVqKKks+Er1O5Yad9QdysoACIcgYY89uB7zPb4kNYVPh26p1pW65q0WvajZwxrscEMcMdgyfKczbP0xTqU1G5tyVvWF42lXZWJPrnKj9ZC6r4eF1j2LdbQzoK7fh7P7ysEkKd6ttI3MAy4Pmk6xWDUeLaVTVOquy0U1XZGPOloJXZk8HA9feY9b4wSuy5DRcyUvUlti7NqG0IUOC4ZuXAIAOMfTPnqXguqwWKlttCPUlLomwqy15FfLqSMZ9CM+sk6vwvW66sF3H7Q9Lvjb5TTs2heOx2DOfcy9HaD1XxU4bbTU+1dTXp3uYIULF1Fiqu7dkAkBtuMiW2VzU+FEZ2YX2pW166g1DZs+MrBi2Su7BI5G7GTmWOS5gRESKREQEREBERAREQEwX6tEIDMFzjGc85ZVH+5lHyzM8i63QJZt354DAYOOGXa3/g/UA+kD7+8KuPOpyQowcnLcqCB2yORmLNdUrBGdFc7cKSAfNnb+u1se+JEToNIbcNwOVYcjgr2xx29ef5TPf05HYM5YnaF9BnG7zduD5m7S9IzJq0YZDqR5QcHOC+NoYd1zkd/eP2uvarb02twrblwx9lOeex7e0iUdFqRXUbsN8PIJGP7sgrwB7jknJP6Tyeh1FKkJYrW25cleTuDcjGMZAxgDA4HBMdKnPqkBCl1BIJAJHYEA/zIEWapFIDOik5IBZQcDknBPoAc/SQ16HSCpAbK5wS2fvABgc+4Bz/AI2Pc5mK7w9QwUHdgbvxA5LLtJJYHnGe2O5jpGwp1aMWCurlQpbaQ2A2dvb3weP6iYqOp0uQA2Cd2A6shO372A4GcYOcdsH2jTaBUd3Utl+4JGB5nfA4zjdYx7+vsAJjv6RUylWBIO/PP8bMzc492P5QqS2rrCqxdMMCVO4HcAMkpj73HPGZ8q1lbglXRgBuOGHCgkbjzwMg8/IyHb0SpkrQ7sIHAIKgn4n38kL6nnAwPfjieqOjVq7uuSzqyndgrhtucgAZGEUYz2X3yYE39oTdt3pu9RuGe+3tn+Lj68TwuuqOALFyTgDcMk5IAAzznBx744kGroSBUG9ywC+bIybBty/IPmJQZySO/GSTMjdFqPwzhvIVI5H4VVQDkdvIp98iOkSjrKxuBdAVDE5YDAU4YkH0B4z2htdUMkugA7kkAD1ySew+faRruj1sxYlwSwfgjhwSVcZHcEng8c8gzxV0KlcbQwwyNjPdkxtJ49gAfcAewkVLt19SrYzWLisbn8wO1SMgkDkZHb39J6GsrPZ0P3uzAny/e4HPHqPSQdH0VU+Iu4lGVUVcYKqMk5bJ3Ek59PpM1HSa1343HcpQ5I4QgDA49AAPfjnMokNrKwrMbECqcMxZQFb+Fjng/Ix+2V7tm9S3m8oYE5UAsCB2IBBx85Gq6TWquo3YZy5GRgMRjgAYxzn3z3JjTdJRG3KXzgjkj7pLEr27bnZvfJ744gZ019RUMLE2kFgdy8qPvHv2Hr7eszV2q2drK2Dg7SDg+oOOx+U1v7gp3K+GyAo7jHlGF4x7Z7fxGSND05at2zdhiSQcHv29M8c459TnPGHSdpsREikREBERAREQEREDXjqikN5GypQY8ozucLlSTyBnn9O88aTrCuUXYylgO+3Ck5wGYHHpxjOc+mDNjsHPA578d/r7xsGQcDI7cQNcnWqifx9wucDAYkjaee4IYH0BUj2z6bq6BFfa+1t2Dhfw+5zxk8D1J9JNWlQMbRjn09zk/qefrPRQccDjtx2+ko1lXWA4G1HJym4HAxvx90jOSNw9hznIAJkqzXKpIIOMkDHJJBGeMYHfPft9ZKCgdgB+UxtQpJJB578n+sTPrN34wnXqApKtzk+nAGe/PspM8/vJfZ/T0HqCw9f4QT/74kj4C/P/AFN/WP2dfY/q39Zdhl/WC/qCqSNpOCAe2PvY/qe3pPOo6oiAEhzndwAuRtOMfe5544z7nA5kn4C/P/U39Z6WtQAMdu3rj9Y6JusL6xQSCDwcHt327j684Ht+WZh/eieoYDCn0P3iQMgH6f6hJbUqTkjn6n07es+fs6+x/U/1iWFnL4xftgwxKsAGA/Ce4BycHAH5zz+8V9Ax+7/D3bsOW/8AUzDTp7H9T/WfDpE/h9vU+hyPX35jozkxfvFDtwGOSMdhwWVc8n3bt347SZMXwF9j+p/nz8hMslz4TfpERI0REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAROadY6lcuptSx2rdbGNILFVes4+G1ZPDHHlKjnI9cmbfruttW0g3X1ONMjVrUu8PqCz5UpsYNnCjBxx7Td4ZJd9ufHnbysz0ukSpajxDqkR3ehBtsWo43HadgdnfJA27jsGD3I59Di1fi25d+KMstRcqd3lsFaPt3A+ZTuKhgo5HBJBAz/Nb1colH6l17WYZBWqNvKq6F+9WooQ7sqcK6WH3IAY8+nq7r+rpfU70XIfy82NWoWmthWjBASzMTg4wCG78CXKau0Sl9Q8SanFoRVqNdlG4lS4WpnVX3sDwQD5hgEKGIPYy5qeBJYa+xESKREQEREBERAREQEREBERAREQEREBERAT7mfIgfcxmfIgfcxmfIgfcz5EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED//Z"}}]);
//# sourceMappingURL=875.38f372e9.chunk.js.map