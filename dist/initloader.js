!function(){function e(){var e="registry/",r=e+"components/",t=e+"projections/",o=e+"sources/",s=".js",a={"map-make.js":["utils"+s,"mapDef"+s,"ol"+s,"olMap"+s],"rasters.js":[r+"layerswitcher"+s,r+"zoom"+s],"select.js":["vectors"+s],"vectors.js":[r+"layerswitcher"+s,"rasters"+s,"mongo"+s]},n=["be/ign/topo","ch/topo/pixel","cz/zm","de/bkg/atlasde","es/icc/topo","es/ign/mapas","es/ign/mtn","gb/os","nl/ngr/achter","pt/dgt/sc","si/gurs","srtm/laea"],i=["3812","21781","32633","25832","25831","25830","25830","27700","28992","3763","3912","3035"];n.forEach(function(e,r){a[o+e+s]=[t+i[r]+s]});var c="common"+s;a[t+c]=[t+"proj4"+s],i.splice(5,1),i.forEach(function(e){a[t+e+s]=[t+c]}),["addlayer","center","draw","featuredisplay","geolocation","mapdef","cursorposition","layerswitcher","placesearch","popup","toolbar","tooltip","zoom"].forEach(function(e){a[r+e+s]=[r+"component"+s,r+e+".htm"+s]}),a[r+"toolbar"+s].push(r+"slideout.min"+s),["draw","featuredisplay"].forEach(function(e){a[r+e+s].push("select"+s),a[r+e+s].push(r+"popup"+s),a[r+e+s].push("measure"+s)}),a[r+"tooltip"+s].push("measure"+s),a[r+"tooltip"+s].push("vectors"+s),["addlayer","center","draw","geolocation","mapdef","layerswitcher","placesearch"].forEach(function(e){a[r+e+s].push(r+"toolbar"+s)});var l=a[r+"addlayer"+s];return l=l.concat(["awesomplete"+s,"rasters"+s,"vectors"+s]),a}function r(){if(o){var r=new window.SystemRegisterLoader;System.loader=r}else window.System=window.System||{},System.loader={import:function(e){return new Promise(function(r,o){function s(){r(),n()}function a(){n(),o(new Error("Loading "+e))}function n(){t.removeEventListener("load",s,!1),t.removeEventListener("error",a,!1),document.head.removeChild(t)}t=document.createElement("script"),t.type="module",t.src=e,t.addEventListener("load",s,!1),t.addEventListener("error",a,!1),document.head.appendChild(t)})}};var a=e();System.sourceList=c.replace("-register","")+s.sourcesList,System.importModule=function(e){var r=function(e){a[e]&&a[e].forEach(function(e){r(e),System.loader.import(c+e)})};return r(e),System.loader.import(c+e)},System.importModule("map-make.js").catch(function(e){console.log(e),System.error=!0,document.body.innerHTML="Error reading map-make.js"})}var t,o=!0,s={tag:"1.1.1",registerTag:"1.1.2",css:"css/map-make.css",loaderpolyfill:"loaderpolyfill.js",fetchpromise:"https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch,Promise,URL",sourcesList:"../lib/registry/sources/list.json"},a=document.createDocumentFragment(),n=document.getElementsByTagName("script")[0],i=n.getAttribute("src"),c=i.substring(0,i.lastIndexOf("/")+1),l=JSON.parse(n.getAttribute("data-configVars"));for(var d in l)switch(d){case"registerTag":s.registerTag=l[d];break;case"css":s.css=l[d];break;case"baseURL":c=l[d];break;case"loaderpolyfill":s.loaderpolyfill=l[d]}0===c.indexOf(".")&&(c=new URL(c,document.baseURI).href),c.indexOf("master")!==-1&&(c=c.replace("master",s.tag),c=c.replace("rawgit","cdn.rawgit"));var p=document.createElement("link");p.rel="stylesheet",p.href=0==s.css.indexOf("h")?s.css:c+s.css,p.onload=function(){var e=document.createElement("div");e.id="status",e.innerHTML='<i class="fa fa-spinner fa-pulse fa-5x"></i>',document.body.appendChild(e)},a.appendChild(p),window.Promise&&window.fetch||(t=document.createElement("script"),t.src=s.fetchpromise,a.appendChild(t)),document.head.appendChild(a),o&&(c=c.replace("map-make","map-make-register").replace(s.tag,s.registerTag)),window.addEventListener("load",function(){o?(t=document.createElement("script"),t.src=0==s.loaderpolyfill.indexOf("h")?s.loaderpolyfill:c+s.loaderpolyfill,t.onload=r,document.body.appendChild(t)):r()})}();