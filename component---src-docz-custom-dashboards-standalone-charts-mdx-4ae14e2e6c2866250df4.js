(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{YQQK:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return p}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt");var n=t("/FXl"),i=t("TjRS"),o=t("AdhA"),r=t("5Jen"),c=t("T5we"),s=t("atnT");t("aD51");function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/__docz__/custom-dashboards-standalone-charts.mdx"}});var d={_frontmatter:b},h=i.a;function p(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(h,l({},d,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(o.a,{trackingId:r.a,mdxType:"GoogleAnalytics"}),Object(n.b)("h1",{id:"custom-dashboards-and-standalone-charts"},"Custom Dashboards and Standalone Charts"),Object(n.b)("p",null,"The ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/AnalyticsDashboard"}),"AnalyticsDashboard")," component makes it easy to embed charts onto your site without having to deal with loading and readying the ",Object(n.b)("a",l({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API"),", checking authorization, and adding a view selector. The ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/AnalyticsDashboard"}),"AnalyticsDashboard")," will handle all of that overhead for you."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"See ",Object(n.b)("a",l({parentName:"strong"},{href:"/react-analytics-charts/AnalyticsDashboard"}),"AnalyticsDashboard")," for the easiest way to embed charts on your site.")),Object(n.b)("p",null,"However, you may want to completely customize how your dashboard looks."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You might want more freedom over placement of the ViewSelector, auth buttons, and charts on the page. "),Object(n.b)("li",{parentName:"ul"},"You might want to handle authorization yourself."),Object(n.b)("li",{parentName:"ul"},"You might want to use a ",Object(n.b)("a",l({parentName:"li"},{href:"https://reactjs.org/docs/context.html"}),"React Context")," to manage ",Object(n.b)("inlineCode",{parentName:"li"},"gapi")," (",Object(n.b)("a",l({parentName:"li"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API"),") state."),Object(n.b)("li",{parentName:"ul"},"You might just want to use only the chart components from this library and ignore everything else!")),Object(n.b)("p",null,"Read on to see how you can use the included components, and optionally the ",Object(n.b)("a",l({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API")," hook, to build a completely custom dashboard."),Object(n.b)("h2",{id:"custom-dashboard-example"},"Custom Dashboard Example"),Object(n.b)("p",null,"To build your own dashboard, you'll need to handle a few things:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Load and ready the ",Object(n.b)("a",l({parentName:"li"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API")),Object(n.b)("li",{parentName:"ul"},"Sign the user in and out of Google Analytics"),Object(n.b)("li",{parentName:"ul"},"Show a view selector (optional—not needed if you know the ",Object(n.b)("a",l({parentName:"li"},{href:"/react-analytics-charts/ViewSelector#example"}),"view ID"),")")),Object(n.b)("p",null,"In addition to ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/AuthorizeButton"}),"AuthorizeButton"),", ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/SignOutButton"}),"SignOutButton"),", and ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/ViewSelector"}),"ViewSelector"),", hooks are available for API access via ",Object(n.b)("a",l({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"react-use-analytics-api"),", which this library uses internally."),Object(n.b)("p",null,"Using these, you can build a custom dashboard fairly easily:"),Object(n.b)("div",{style:{border:"solid 2px #67788a",padding:"20px"}},Object(n.b)(c.a,{authOptions:{clientId:s.a},mdxType:"CustomDashboardExample"})),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"import { useAnalyticsApi } from 'react-use-analytics-api';\nimport * as React from 'react';\nimport { AuthorizeButton, SessionsByDateChart, SessionsBySourceChart, SignOutButton, ViewSelector } from 'react-analytics-charts';\n\nexport function CustomDashboardExample(props) {\n  const [viewId, setViewId] = React.useState();\n  const { ready, gapi, authorized } = useAnalyticsApi();\n  return (\n    <div>\n      {!ready && 'Please wait...'}\n      {ready && (\n        <div>\n          {!authorized && <AuthorizeButton gapi={gapi} authOptions={props.authOptions} />}\n          {authorized && (\n            <div>\n              <ViewSelector gapi={gapi} onChange={viewId => setViewId(viewId)} />\n              <div>\n                <SessionsByDateChart gapi={gapi} viewId={viewId} />\n                <SessionsBySourceChart gapi={gapi} viewId={viewId} />\n              </div>\n              <div>\n                <SignOutButton gapi={gapi} />\n              </div>\n            </div>\n          )}\n        </div>\n      )}\n    </div>\n  );\n}\n")),Object(n.b)("h2",{id:"standalone-charts"},"Standalone Charts"),Object(n.b)("h3",{id:"using-analytics-dashboard"},"Using Analytics Dashboard"),Object(n.b)("p",null,"If you're already authorized and want to render a chart by itself, you can use an ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/AnalyticsDashboard"}),"AnalyticsDashboard")," with a particular ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/ViewSelector#example"}),"view ID")," and no ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/ViewSelector"}),"ViewSelector")," visible, and no auth buttons. Give each dashboard a unique ",Object(n.b)("inlineCode",{parentName:"p"},"dashId")," if there is more than one."),Object(n.b)("p",null,"This effectively renders charts as standalone."),Object(n.b)("p",null,"See the ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/AnalyticsDashboard#props"}),"AnalyticsDashboard props")," ",Object(n.b)("inlineCode",{parentName:"p"},"viewId"),", ",Object(n.b)("inlineCode",{parentName:"p"},"hideViewSelector"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"hideAuth")," for more info."),Object(n.b)("h3",{id:"using-google-analytics-embed-api"},"Using ",Object(n.b)("a",l({parentName:"h3"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API")),Object(n.b)("p",null,"If you load and ready the API with ",Object(n.b)("a",l({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"react-use-analytics-api"),", or already have ",Object(n.b)("inlineCode",{parentName:"p"},"gapi")," loaded and readied via your own means, you can add any of the charts by themselves."),Object(n.b)("p",null,"You will need to be authorized, and need to know the view ID (see the ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/ViewSelector#example"}),"view selector example"),"). Using the view ID and ",Object(n.b)("inlineCode",{parentName:"p"},"gapi"),", you can render any chart on the page by itself. "),Object(n.b)("p",null,"Just ",Object(n.b)("a",l({parentName:"p"},{href:"/react-analytics-charts/charts"}),"choose a chart"),", then pass it the ready and authorized ",Object(n.b)("a",l({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API")," (",Object(n.b)("inlineCode",{parentName:"p"},"gapi"),"), and the view ID (",Object(n.b)("inlineCode",{parentName:"p"},"viewId"),"), and it'll render on the page for you."),Object(n.b)("p",null,"Be sure to provide each chart with a ",Object(n.b)("inlineCode",{parentName:"p"},"container")," ID if you are rendering the same chart type multiple times on the page."))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/__docz__/custom-dashboards-standalone-charts.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docz-custom-dashboards-standalone-charts-mdx-4ae14e2e6c2866250df4.js.map