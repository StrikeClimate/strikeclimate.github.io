(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4692:function(e,i,t){Promise.resolve().then(t.bind(t,4794)),Promise.resolve().then(t.bind(t,4988)),Promise.resolve().then(t.bind(t,4626)),Promise.resolve().then(t.bind(t,9221)),Promise.resolve().then(t.t.bind(t,5878,23)),Promise.resolve().then(t.t.bind(t,2972,23))},4794:function(e,i,t){"use strict";var s=t(7437);t(2265);var a=t(9501),n=t(1229),r=t(3590),l=t(520);let d=n.z.object({fullName:n.z.string().min(1,"Full Name is required"),email:n.z.string().email("Invalid email address").min(1,"Email is required"),message:n.z.string().min(1,"Message is required")});i.default=()=>{let{register:e,handleSubmit:i,formState:{errors:t}}=(0,a.cI)({resolver:(0,r.F)(d)});return(0,s.jsx)("div",{className:"dark:bg-[#E9E9E9]/10 bg-[#E9E9E9]/30 mx-auto border border-border-2 dark:border-secondary px-6 py-8 md:px-12 md:py-12",children:(0,s.jsxs)("form",{onSubmit:i(e=>{console.log(e)}),className:"space-y-4",id:"message-form",method:"post",action:"#contact",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{...e("fullName"),placeholder:"Enter Your Name*",className:"inputStyle-3"}),t.fullName&&(0,s.jsx)("span",{className:"inputSpan-2",children:t.fullName.message})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{...e("email"),placeholder:"Email Address*",className:"inputStyle-3"}),t.email&&(0,s.jsx)("span",{className:"inputSpan-2",children:t.email.message})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("textarea",{...e("message"),placeholder:"Your Message*",className:"inputStyle-3 h-32"}),t.message&&(0,s.jsx)("span",{className:"inputSpan-2",children:t.message.message})]}),(0,s.jsx)(l.z,{type:"submit",className:"mt-4 button-dark",children:"Submit"})]})})}},4988:function(e,i,t){"use strict";var s=t(7437),a=t(2405),n=t(8614),r=t(521);t(2265),i.default=()=>(0,s.jsx)("section",{className:"py-12 lg:py-24",children:(0,s.jsx)("div",{className:"container mx-auto md:max-w-[1280px]",children:(0,s.jsx)(n.M,{mode:"wait",children:(0,s.jsxs)(r.E.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:1},className:"relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[(0,s.jsxs)("div",{className:"absolute inset-0 w-full h-full pointer-events-none",children:[(0,s.jsx)("div",{className:"hidden md:block absolute inset-y-0 left-1/3 border-l border-primary"}),(0,s.jsx)("div",{className:"hidden md:block absolute inset-y-0 left-2/3 border-l border-primary"}),(0,s.jsx)("div",{className:"absolute inset-x-0 top-1/3 md:hidden border-t border-primary"}),(0,s.jsx)("div",{className:"absolute inset-x-0 top-2/3 md:hidden border-t border-primary"})]}),null===a.SC||void 0===a.SC?void 0:a.SC.map((e,i)=>(0,s.jsxs)(r.E.div,{className:"p-6 rounded-lg flex flex-col items-center",whileHover:{scale:1.05},children:[(0,s.jsx)("div",{className:"mb-3 rounded-full p-3 bg-gradient-to-b from-primary to-black/40",children:(0,s.jsx)(e.icon,{className:"text-4xl text-white"})}),(0,s.jsx)("h3",{className:"text-center text-lg font-semibold mb-2 w-64 leading-tight text-primary",children:e.text}),(0,s.jsx)("p",{className:"text-sm font-light text-center ",children:e.description})]},i))]})})})})},9221:function(e,i,t){"use strict";t.d(i,{default:function(){return g}});var s=t(7437),a=t(2405),n=t(3145),r=t(7648),l=t(2265),d=t(2744),o=t(520),c=t(5130),m=t(7996),u=t(5922);function h(){let[e,i]=(0,l.useState)(!1),{setTheme:t,resolvedTheme:a}=(0,u.F)();return((0,l.useEffect)(()=>i(!0),[]),e)?"dark"===a?(0,s.jsx)(o.z,{onClick:()=>t("light"),className:"lg:button-main shadow-none bg-transparent",children:(0,s.jsx)(m.kXG,{className:"text-2xl"})}):"light"===a?(0,s.jsx)(o.z,{onClick:()=>t("dark"),className:"lg:button-main shadow-none bg-transparent",children:(0,s.jsx)(m.wOW,{className:"text-2xl"})}):void 0:(0,s.jsx)(n.default,{src:"data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg==",width:36,height:36,sizes:"36x36",alt:"Loading Light/Dark Toggle",priority:!1,title:"Loading Light/Dark Toggle"})}var g=()=>{let[e,i]=(0,l.useState)(!1),t=()=>i(!e),{theme:m}=(0,u.F)();return(0,s.jsxs)("header",{className:"sticky inset-x-0 top-0 z-50",children:[(0,s.jsxs)("nav",{className:"dark:bg-primary bg-white flex items-center justify-between p-5 xl:px-36 border-b border-b-white/10",children:[(0,s.jsx)("div",{className:"flex lg:flex-1",children:(0,s.jsx)(r.default,{href:"/",className:"",children:"dark"===m?(0,s.jsx)(n.default,{src:"/images/mstile-new-white.png",alt:"Logo",width:180,height:100,className:""}):(0,s.jsx)(n.default,{src:"/images/mstile-new.png",alt:"Logo",width:180,height:100,className:""})})}),(0,s.jsxs)("div",{className:"flex lg:hidden",children:[(0,s.jsx)("div",{className:"mr-1",children:(0,s.jsx)(h,{})}),(0,s.jsxs)("button",{type:"button",onClick:()=>i(!0),className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,s.jsx)(d.xXU,{"aria-hidden":"true",className:"h-6 w-6 text-secondary"})]})]}),(0,s.jsx)("div",{className:"hidden lg:flex lg:gap-x-12",children:a.G.map(e=>(0,s.jsx)(r.default,{href:e.href,className:" font-light  leading-6 ",children:e.name},e.name))}),(0,s.jsxs)("div",{className:"items-center hidden lg:flex lg:flex-1 lg:justify-end",children:[(0,s.jsx)("div",{className:"mr-3",children:(0,s.jsx)(h,{})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(o.z,{asChild:!0,className:"button-main",children:(0,s.jsxs)(r.default,{href:"#contact",children:[(0,s.jsx)("span",{className:"blinking-dot inline-block bg-primary rounded-full w-2 h-2 mr-1"}),"Contact Us",(0,s.jsx)(c.Ig3,{})]})})})]})]}),(0,s.jsxs)("div",{className:"",children:[e&&(0,s.jsx)("div",{className:"fixed inset-0 bg-secondary bg-opacity-70 z-40",onClick:t}),(0,s.jsxs)("ul",{className:"fixed inset-y-0 right-0 bg-white dark:bg-primary text-secondary dark:text-white flex flex-col w-[75%] space-y-16 h-screen items-center z-50 transition-transform duration-700 ease-in-out\n                    ".concat(e?"-translate-x-0":"translate-x-full"," md:hidden py-32 px-12"),children:[(0,s.jsx)("button",{onClick:t,className:"absolute top-5 left-4 focus:outline-none",children:(0,s.jsx)(d.lTq,{className:"text-xl"})}),a.G.map((e,i)=>(0,s.jsx)("li",{className:"group",onClick:t,children:(0,s.jsx)(r.default,{href:e.href,className:"",children:e.name})},i)),(0,s.jsx)(o.z,{asChild:!0,className:"button-main",children:(0,s.jsxs)(r.default,{href:"#contact",children:[(0,s.jsx)("span",{className:"blinking-dot inline-block bg-primary rounded-full w-2 h-2 mr-1"}),"Contact Us",(0,s.jsx)(c.Ig3,{})]})})]})]})]})}},4626:function(e,i,t){"use strict";t.r(i);var s=t(7437);t(2265);var a=t(521),n=t(8819);i.default=e=>{let{children:i,direction:t="left",duration:r=.5}=e,{ref:l,inView:d}=(0,n.YD)({triggerOnce:!0,threshold:.1});return(0,s.jsx)(a.E.div,{ref:l,initial:"hidden",animate:d?"visible":"hidden",variants:{hidden:{opacity:0,x:"left"===t?-100:"right"===t?100:0,y:"top"===t?-100:"bottom"===t?100:0},visible:{opacity:1,x:0,y:0}},transition:{duration:r},children:i})}},520:function(e,i,t){"use strict";t.d(i,{z:function(){return c}});var s=t(7437),a=t(2265),n=t(5293),r=t(535),l=t(1994),d=t(3335);let o=(0,r.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,i)=>{let{className:t,variant:a,size:r,asChild:c=!1,...m}=e,u=c?n.g7:"button";return(0,s.jsx)(u,{className:function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return(0,d.m6)((0,l.W)(i))}(o({variant:a,size:r,className:t})),ref:i,...m})});c.displayName="Button"},2405:function(e,i,t){"use strict";t.d(i,{G:function(){return d},SC:function(){return o}});var s=t(1140),a=t(2744),n=t(9089),r=t(8637),l=t(1273);let d=[{name:"Home",href:"/"},{name:"About",href:"#about"},{name:"Case Studies",href:"#case-study"}],o=[{id:1,icon:l.DyV,text:"Disaster Prediction & Prevention Applications",description:"StrikeClimate develops cutting-edge applications leveraging extensive data on disaster prediction and prevention. These applications utilize advanced algorithms and real-time data to forecast and mitigate environmental hazards, empowering communities to proactively respond to potential disasters."},{id:2,icon:r.lON,text:"Environmental Monitoring Devices",description:"StrikeClimate designs and manufactures innovative environmental monitoring devices that enable real-time tracking of key environmental indicators. These devices provide valuable insights into air quality, water pollution, and other environmental factors, facilitating informed decision-making for individuals, organizations, and governments."},{id:3,icon:a.kBe,text:"Net Zero-Carbon Technology Solutions",description:"Through pioneering technological advancements, StrikeClimate facilitates the transition to a net zero-carbon environment. By developing and implementing sustainable energy solutions, carbon capture technologies, and eco-friendly practices, StrikeClimate helps reduce carbon emissions and combat climate change on a global scale."}];n.D6j,a.h6V,n.nkz,s.Vs6,s.meP,s.NQh,s.W6T}},function(e){e.O(0,[51,212,305,956,699,240,779,343,971,117,744],function(){return e(e.s=4692)}),_N_E=e.O()}]);