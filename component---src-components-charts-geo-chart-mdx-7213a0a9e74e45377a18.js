(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"09fr":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return u}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),r=a("TjRS"),l=a("ZFoC"),b=a("AdhA"),i=a("5Jen"),o=a("fAuu"),c=a("atnT"),d=a("bAZo"),p=a("AhhZ");a("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/charts/GeoChart.mdx"}});var O={_frontmatter:m},j=r.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(j,s({},O,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b.a,{trackingId:i.a,mdxType:"GoogleAnalytics"}),Object(n.b)("h1",null,"GeoChart"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"A geo chart shows data on a geographical map. You can specify either the entire world or a specific region."),Object(n.b)("p",null,"You can use this to create a custom chart by providing your own data query (see ",Object(n.b)("a",s({parentName:"p"},{href:"/react-analytics-charts/DataChart"}),"DataChart")," for more info on queries) and,\noptionally, ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options"}),"geo chart options")," for the chart."),Object(n.b)("p",null,"Refer to the ",Object(n.b)("a",s({parentName:"p"},{href:"/react-analytics-charts/charts"}),"Charts Overview")," for a list of all charts available."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)(l.c,{__position:2,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  renderCharts={(gapi, viewId) => {\n    return (\n      <GeoChart\n        gapi={gapi}\n        query={{\n          metrics: 'ga:sessions,ga:pageviews',\n          dimensions: 'ga:country',\n          'start-date': `28daysAgo`,\n          'end-date': 'today',\n          ids: viewId,\n        }}\n        container=\"traffic-geo-chart\"\n      />\n    )\n  }}\n/>",__scope:{props:a,DefaultLayout:r.a,Playground:l.c,Props:l.d,GoogleAnalytics:b.a,TRACKING_ID:i.a,CreatedBy:o.a,clientId:c.a,AnalyticsDashboard:d.a,GeoChart:p.a},mdxType:"Playground"},Object(n.b)(d.a,{authOptions:{clientId:c.a},renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,query:{metrics:"ga:sessions,ga:pageviews",dimensions:"ga:country","start-date":"28daysAgo","end-date":"today",ids:t},container:"traffic-geo-chart",mdxType:"GeoChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)("br",null),Object(n.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Prop"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"gapi"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"GoogleAnalyticsEmbedAPI")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," The ready and authorized ",Object(n.b)("a",s({parentName:"td"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"container"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," Provide an ID for the ",Object(n.b)("inlineCode",{parentName:"td"},"div")," that will contain the chart.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"query"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("a",s({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),Object(n.b)("inlineCode",{parentName:"a"},"Query"))),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Required.")," The ",Object(n.b)("a",s({parentName:"td"},{href:"/react-analytics-charts/DataChart#query-prop"}),Object(n.b)("inlineCode",{parentName:"a"},"Query"))," for the Analytics data. See the Query Prop section of ",Object(n.b)("a",s({parentName:"td"},{href:"/react-analytics-charts/DataChart"}),"DataChart"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"options"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("a",s({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options"}),Object(n.b)("inlineCode",{parentName:"a"},"GeoChartOptions"))),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Optional. Options for the chart. To determine what to use here, refer to the Configuration Options section for ",Object(n.b)("a",s({parentName:"td"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options"}),"geo charts"),".")))),Object(n.b)("p",null,"This component also supports ",Object(n.b)("strong",{parentName:"p"},"all ",Object(n.b)("inlineCode",{parentName:"strong"},"div")," props"),", such as ",Object(n.b)("inlineCode",{parentName:"p"},"className"),", ",Object(n.b)("inlineCode",{parentName:"p"},"style"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"onClick"),"."),Object(n.b)("p",null,"If you have more than one of this chart on the page, be sure to specify a unique ",Object(n.b)("inlineCode",{parentName:"p"},"container")," ID."),Object(n.b)("h3",{id:"query"},"Query"),Object(n.b)("p",null,"Refer to ",Object(n.b)("a",s({parentName:"p"},{href:"/react-analytics-charts/DataChart#query-prop"}),"DataChart Query Prop")," to build your own data ",Object(n.b)("inlineCode",{parentName:"p"},"query"),"."),Object(n.b)("h3",{id:"chart-options"},"Chart Options"),Object(n.b)("p",null,"There are numerous ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options"}),"chart options")," available for\ngeo charts, allowing you to customize the appearance. Provide these via the ",Object(n.b)("inlineCode",{parentName:"p"},"options")," prop."),Object(n.b)("p",null,"Below are a few of the notable ones:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Option"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"region"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"The area to display on the geochart. (Surrounding areas will be displayed as well.)",Object(n.b)("br",null),"Can be one of the following: ",Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)("inlineCode",{parentName:"td"},"world")," - A geochart of the entire world."),Object(n.b)("li",null,"A continent or a sub-continent, specified by its ",Object(n.b)("a",s({parentName:"td"},{href:"https://en.wikipedia.org/wiki/UN_M49"}),"3-digit code"),", e.g., ",Object(n.b)("inlineCode",{parentName:"td"},"011")," for Western Africa, or a ",Object(n.b)("a",s({parentName:"td"},{href:"#region-aliases"}),"region alias")," such as ",Object(n.b)("inlineCode",{parentName:"td"},"europe"),"."),Object(n.b)("li",null,"A country, specified by its ",Object(n.b)("a",s({parentName:"td"},{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"}),"ISO 3166-1 alpha-2 code"),", e.g., ",Object(n.b)("inlineCode",{parentName:"td"},"AU")," for Australia."),Object(n.b)("li",null,"A state in the United States, specified by its ",Object(n.b)("a",s({parentName:"td"},{href:"https://en.wikipedia.org/wiki/ISO_3166-2:US"}),"ISO 3166-2:US")," code, e.g., ",Object(n.b)("inlineCode",{parentName:"td"},"US-AL")," for Alabama. Note that the resolution option must be set to either ",Object(n.b)("inlineCode",{parentName:"td"},"provinces")," or ",Object(n.b)("inlineCode",{parentName:"td"},"metros"),"."))," Default: ",Object(n.b)("inlineCode",{parentName:"td"},"world"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"resolution"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"The resolution of the geochart borders.",Object(n.b)("br",null),"Choose one of the following values: ",Object(n.b)("ul",null,Object(n.b)("li",null,Object(n.b)("inlineCode",{parentName:"td"},"countries")," - Supported for all regions, except for US state regions."),Object(n.b)("li",null,Object(n.b)("inlineCode",{parentName:"td"},"provinces")," - Supported only for country regions and US state regions. Not supported for all countries; please test a country to see whether this option is supported."),Object(n.b)("li",null,Object(n.b)("inlineCode",{parentName:"td"},"metros")," - Supported for the US country region and US state regions only."))," Default: ",Object(n.b)("inlineCode",{parentName:"td"},"countries"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"width"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Width of the visualization, in pixels. The default width is ",Object(n.b)("inlineCode",{parentName:"td"},"556")," pixels, unless the height option is specified and keepAspectRatio is set to true - in which case the width is calculated accordingly.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"height"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"number")," ","|"," ",Object(n.b)("inlineCode",{parentName:"td"},"string")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Height of the chart, in pixels.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"keepAspectRatio"),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"boolean")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"If ",Object(n.b)("inlineCode",{parentName:"td"},"true"),", the geochart will be drawn at the largest size that can fit inside the chart area at its natural aspect ratio. If only one of the ",Object(n.b)("inlineCode",{parentName:"td"},"width")," and ",Object(n.b)("inlineCode",{parentName:"td"},"height")," options is specified, the other one will be calculated according to the aspect ratio. If ",Object(n.b)("inlineCode",{parentName:"td"},"false"),", the geochart will be stretched to the exact size of the chart as specified by the ",Object(n.b)("inlineCode",{parentName:"td"},"width")," and ",Object(n.b)("inlineCode",{parentName:"td"},"height")," options. Default ",Object(n.b)("inlineCode",{parentName:"td"},"true"),".")))),Object(n.b)("p",null,"The containing element is rendered as a ",Object(n.b)("inlineCode",{parentName:"p"},"div")," and you can size and style it as you see fit using CSS."),Object(n.b)("p",null,"Geo charts do not support titles. You'll have to add your own above the chart."),Object(n.b)("p",null,"See all ",Object(n.b)("a",s({parentName:"p"},{href:"https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options"}),"chart options"),"."),Object(n.b)("h4",{id:"region-codes"},"Region Codes"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"region")," prop can take a variety of values, allowing you to chart different parts of the globe. You can use ",Object(n.b)("inlineCode",{parentName:"p"},"world")," to show the whole world, or choose a code below:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Use a ",Object(n.b)("a",s({parentName:"li"},{href:"#region-aliases"}),"region alias"),", or see the ",Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/UN_M49"}),"UN M49 Standard Country or Area Codes for Statistical Use")," for a list of region codes, such as ",Object(n.b)("inlineCode",{parentName:"li"},"011")," for Western Africa."),Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"}),"ISO 3166-1 alpha-2 code")," for a list of country codes such as ",Object(n.b)("inlineCode",{parentName:"li"},"AU")," for Australia."),Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ISO_3166-2:US"}),"ISO 3166-2:US")," for a list of codes for US States, such as ",Object(n.b)("inlineCode",{parentName:"li"},"US-AL")," for Alabama.")),Object(n.b)("h5",{id:"region-aliases"},"Region Aliases"),Object(n.b)("p",null,"Aliases are available for all ",Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/UN_M49"}),"UN M49")," region codes. You can use an alias to make things a little more human readable. "),Object(n.b)("p",null,"Some codes are not supported by Google, but feel free to try them in case they've been added."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Alias"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Code"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Area"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Supported"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"world")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"001")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"World"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️ (",Object(n.b)("inlineCode",{parentName:"td"},"world")," only)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"africa")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"002")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Africa"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"northern-africa")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"015")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Northern Africa"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"sub-saharan-africa")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"202")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Sub-Saharan Africa"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"❌")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"eastern-africa")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"014")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Eastern Africa"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"middle-africa")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"017")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Middle Africa"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"southern-africa")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"018")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Southern Africa"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"western-africa")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"011")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Western Africa"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"americas")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"019")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Americas"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"latin-america-caribbean")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"419")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Latin America and the Caribbean"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"❌")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"caribbean")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"029")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Caribbean"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"central-america")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"013")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Central America"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"south-america")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"005")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"South America"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"north-america")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"003")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"North America"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"❌")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"northern-america")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"021")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Northern America"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"asia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"142")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Asia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"central-asia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"143")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Central Asia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"eastern-asia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"030")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Eastern Asia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"south-eastern-asia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"035")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"South-eastern Asia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"southern-asia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"034")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Southern Asia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"western-asia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"145")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Western Asia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"europe")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"150")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Europe"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"eastern-europe-northern-asia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"151")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Eastern Europe (including Northern Asia)"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"northern-europe")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"154")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Northern Europe"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"southern-europe")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"039")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Southern Europe"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"western-europe")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"155")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Western Europe"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"oceania")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"009")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Oceania"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"australia-and-new-zealand")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"053")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Australia and New Zealand"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"melanesia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"054")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Melanesia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"micronesia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"057")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Micronesia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"polynesia")),Object(n.b)("td",s({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"061")),Object(n.b)("td",s({parentName:"tr"},{align:null}),"Polynesia"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"✔️")))),Object(n.b)("h2",{id:"europe-example"},"Europe Example"),Object(n.b)("p",null,"The following uses the ",Object(n.b)("inlineCode",{parentName:"p"},"europe")," alias for ",Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/UN_M49"}),"UN M49 code")," ",Object(n.b)("inlineCode",{parentName:"p"},"150"),":"),Object(n.b)(l.c,{__position:5,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  dashId=\"europe\"\n  renderCharts={(gapi, viewId) => {\n    return (\n      <GeoChart\n        gapi={gapi}\n        query={{\n          metrics: 'ga:sessions,ga:pageviews',\n          dimensions: 'ga:country',\n          'start-date': `28daysAgo`,\n          'end-date': 'today',\n          ids: viewId,\n        }}\n        container=\"europe-traffic-geo-chart\"\n        options={{\n          region: 'europe',\n          resolution: 'countries',\n        }}\n      />\n    )\n  }}\n/>",__scope:{props:a,DefaultLayout:r.a,Playground:l.c,Props:l.d,GoogleAnalytics:b.a,TRACKING_ID:i.a,CreatedBy:o.a,clientId:c.a,AnalyticsDashboard:d.a,GeoChart:p.a},mdxType:"Playground"},Object(n.b)(d.a,{authOptions:{clientId:c.a},dashId:"europe",renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,query:{metrics:"ga:sessions,ga:pageviews",dimensions:"ga:country","start-date":"28daysAgo","end-date":"today",ids:t},container:"europe-traffic-geo-chart",options:{region:"europe",resolution:"countries"},mdxType:"GeoChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)("h2",{id:"united-states-example"},"United States Example"),Object(n.b)("p",null,"The following uses the ",Object(n.b)("inlineCode",{parentName:"p"},"ga:region")," ",Object(n.b)("a",s({parentName:"p"},{href:"/react-analytics-charts/DataChart#query-prop"}),"dimension"),", the ",Object(n.b)("inlineCode",{parentName:"p"},"US")," ",Object(n.b)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"}),"country code")," region, and the ",Object(n.b)("inlineCode",{parentName:"p"},"provinces")," resolution to show traffic from individual states in the United States:"),Object(n.b)(l.c,{__position:6,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  dashId=\"usa\"\n  renderCharts={(gapi, viewId) => {\n    return (\n      <GeoChart\n        gapi={gapi}\n        query={{\n          metrics: 'ga:sessions,ga:pageviews',\n          dimensions: 'ga:region',\n          'start-date': `28daysAgo`,\n          'end-date': 'today',\n          ids: viewId,\n        }}\n        container=\"usa-traffic-geo-chart\"\n        options={{\n          region: 'US',\n          resolution: 'provinces',\n        }}\n      />\n    )\n  }}\n/>",__scope:{props:a,DefaultLayout:r.a,Playground:l.c,Props:l.d,GoogleAnalytics:b.a,TRACKING_ID:i.a,CreatedBy:o.a,clientId:c.a,AnalyticsDashboard:d.a,GeoChart:p.a},mdxType:"Playground"},Object(n.b)(d.a,{authOptions:{clientId:c.a},dashId:"usa",renderCharts:function(e,t){return Object(n.b)(p.a,{gapi:e,query:{metrics:"ga:sessions,ga:pageviews",dimensions:"ga:region","start-date":"28daysAgo","end-date":"today",ids:t},container:"usa-traffic-geo-chart",options:{region:"US",resolution:"provinces"},mdxType:"GeoChart"})},mdxType:"AnalyticsDashboard"})),Object(n.b)(o.a,{author:"DevBoldly",url:"https://devboldly.com/",emoji:"🍺",emojiLabel:"Beer",mdxType:"CreatedBy"}))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/charts/GeoChart.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-charts-geo-chart-mdx-7213a0a9e74e45377a18.js.map