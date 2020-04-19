(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{zh4S:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return O})),t.d(a,"default",(function(){return f}));t("1c7q"),t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("2mQt");var n=t("/FXl"),r=t("TjRS"),s=t("ZFoC"),i=t("AdhA"),o=t("5Jen"),c=t("fAuu"),l=t("atnT"),b=t("bAZo"),d=t("mJJN"),h=t("ON82"),p=t("U0+i"),y=t("W10L"),u=t("//Ww");t("aD51");function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var O={};void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/AnalyticsDashboard.mdx"}});var g={_frontmatter:O},j=r.a;function f(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(n.b)(j,m({},g,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(i.a,{trackingId:o.a,mdxType:"GoogleAnalytics"}),Object(n.b)("h1",null,"AnalyticsDashboard"),Object(n.b)("p",null,"See the ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",m({parentName:"strong"},{href:"#example"}),"live demo example"))," below."),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"This component allows you to drop in an analytics dashboard that automatically handles loading the ",Object(n.b)("a",m({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API"),", ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/AuthorizeButton"}),"sign in")," and ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/SignOutButton"}),"sign out"),", and ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/ViewSelector"}),"view selection"),"."),Object(n.b)("p",null,"All you need to do is provide your ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/google-oauth-client-id"}),"Client ID")," and a render prop that renders all the ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/charts"}),"charts")," you'd like to see."),Object(n.b)("p",null,"Refer to the ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/charts"}),"Charts Overview")," for a list of all charts available."),Object(n.b)("p",null,"If you need more flexibility, you can create your own ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/custom-dashboards-standalone-charts"}),"custom dashboard")," if you'd like."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("p",null,"AnalyticsDashboard takes a ",Object(n.b)("inlineCode",{parentName:"p"},"clientId")," and a ",Object(n.b)("inlineCode",{parentName:"p"},"renderCharts")," render prop."),Object(n.b)("p",null,"Just use the ",Object(n.b)("inlineCode",{parentName:"p"},"renderCharts")," prop to render the charts you'd like to view and the dashboard will handle everything else, including loading the ",Object(n.b)("a",m({parentName:"p"},{href:"https://devboldly.github.io/react-use-analytics-api/"}),"Google Analytics Embed API"),", handling auth, and showing a view selector."),Object(n.b)("pre",null,Object(n.b)("code",m({parentName:"pre"},{className:"language-jsx"}),"import { AnalyticsDashboard } from 'react-analytics-charts';\n// Over ten different commonly used charts are available\nimport { SessionsByDateChart, SessionsGeoChart } from 'react-analytics-charts';\n")),Object(n.b)("pre",null,Object(n.b)("code",m({parentName:"pre"},{className:"language-jsx"}),'<AnalyticsDashboard\n  authOptions={{ clientId: "123456789012-abc123def456ghi789jkl012mno345p.apps.googleusercontent.com" }}\n  renderCharts={(gapi, viewId) => {\n    return (\n      <div>\n        <SessionsByDateChart\n          gapi={gapi}\n          viewId={viewId}\n          showPageViews\n          showUsers\n        />\n        <SessionsGeoChart \n          gapi={gapi} \n          viewId={viewId} \n          showPageViews \n        />\n        ... More charts here ...\n      </div>\n    );\n  }}\n/>\n')),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)(s.d,{of:b.a,mdxType:"Props"}),Object(n.b)("small",null,"Note: Expand each prop for more information."),Object(n.b)("br",null),Object(n.b)("br",null),Object(n.b)("p",null,"If you have more than one dashboard on the page, be sure to specify a unique ",Object(n.b)("inlineCode",{parentName:"p"},"dashId"),"."),Object(n.b)("h2",{id:"styling"},"Styling"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The analytics dashboard is rendered as a ",Object(n.b)("inlineCode",{parentName:"li"},"div")," with the class name ",Object(n.b)("inlineCode",{parentName:"li"},"analytics-dashboard"),". "),Object(n.b)("li",{parentName:"ul"},"The authorize and sign-out buttons are in a ",Object(n.b)("inlineCode",{parentName:"li"},"div")," with the class name ",Object(n.b)("inlineCode",{parentName:"li"},"analytics-auth-widgets"),".")),Object(n.b)("pre",null,Object(n.b)("code",m({parentName:"pre"},{className:"language-css"}),".analytics-dashboard {\n  /* Custom styles */\n}\n\n.analytics-auth-widgets {\n  /* Custom styles */\n}\n")),Object(n.b)("p",null,"See the styling docs for ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/AuthorizeButton#styling"}),"AuthorizeButton"),", ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/DataChart#styling"}),"DataChart"),",\n",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/SignOutButton#styling"}),"SignOutButton"),", and ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/ViewSelector#styling"}),"ViewSelector")," to style the different components\nused in the analytics dashboard. "),Object(n.b)("p",null,"Charts can be styled individually as you see fit (give them a ",Object(n.b)("inlineCode",{parentName:"p"},"className"),", ",Object(n.b)("inlineCode",{parentName:"p"},"style"),", wrap in a styled component, etc)."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("p",null,"The following example renders a few common charts for the past 28 days, and adds some basic layout styles to them."),Object(n.b)("p",null,'Click the "Access Google Analytics" button to get started.'),Object(n.b)(s.c,{__position:5,__code:"<AnalyticsDashboard\n  authOptions={{ clientId }}\n  renderCharts={(gapi, viewId) => {\n    const chartStyles = {\n      margin: '15px',\n      maxWidth: 400,\n    }\n    return (\n      <div style={{ display: 'flex', flexWrap: 'wrap' }}>\n        <SessionsByDateChart\n          gapi={gapi}\n          viewId={viewId}\n          style={chartStyles}\n          showPageViews\n          showUsers\n        />\n        <SessionsGeoChart\n          gapi={gapi}\n          viewId={viewId}\n          style={chartStyles}\n          showPageViews\n          options={{ width: 400 }}\n        />\n        <SessionsBySourceChart\n          gapi={gapi}\n          viewId={viewId}\n          style={chartStyles}\n        />\n        <SessionsByHourChart\n          gapi={gapi}\n          viewId={viewId}\n          style={chartStyles}\n        />\n        <PageViewsPerPathChart\n          gapi={gapi}\n          viewId={viewId}\n          style={{ margin: '15px' }}\n        />\n      </div>\n    )\n  }}\n/>",__scope:{props:t,DefaultLayout:r.a,Playground:s.c,Props:s.d,GoogleAnalytics:i.a,TRACKING_ID:o.a,CreatedBy:c.a,clientId:l.a,AnalyticsDashboard:b.a,SessionsByDateChart:d.a,SessionsGeoChart:h.a,SessionsByHourChart:p.a,SessionsBySourceChart:y.a,PageViewsPerPathChart:u.a},mdxType:"Playground"},Object(n.b)(b.a,{authOptions:{clientId:l.a},renderCharts:function(e,a){var t={margin:"15px",maxWidth:400};return Object(n.b)("div",{style:{display:"flex",flexWrap:"wrap"}},Object(n.b)(d.a,{gapi:e,viewId:a,style:t,showPageViews:!0,showUsers:!0,mdxType:"SessionsByDateChart"}),Object(n.b)(h.a,{gapi:e,viewId:a,style:t,showPageViews:!0,options:{width:400},mdxType:"SessionsGeoChart"}),Object(n.b)(y.a,{gapi:e,viewId:a,style:t,mdxType:"SessionsBySourceChart"}),Object(n.b)(p.a,{gapi:e,viewId:a,style:t,mdxType:"SessionsByHourChart"}),Object(n.b)(u.a,{gapi:e,viewId:a,style:{margin:"15px"},mdxType:"PageViewsPerPathChart"}))},mdxType:"AnalyticsDashboard"})),Object(n.b)("small",null,"Note: You can edit the source above. Your changes will be rendered immediately."),Object(n.b)("br",null),Object(n.b)("br",null),Object(n.b)("p",null,"Many more ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/charts#common-charts"}),"ready-made charts")," are available, and you can ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/charts#custom-charts"}),"create your own charts")," if you'd like."),Object(n.b)("p",null,"See the ",Object(n.b)("a",m({parentName:"p"},{href:"/react-analytics-charts/charts"}),"Charts Overview")," for more information."),Object(n.b)(c.a,{author:"DevBoldly",url:"https://devboldly.com/",emoji:"🍺",emojiLabel:"Beer",mdxType:"CreatedBy"}))}f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/AnalyticsDashboard.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-analytics-dashboard-mdx-be0bca2eef8dabd3bcb8.js.map