(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{252:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("code",[t._v("Github Actions")]),t._v("是"),e("code",[t._v("GitHub")]),t._v("推出的持续集成服务（CI/CD），可以放弃"),e("code",[t._v("Jenkins")]),t._v("了，节省一台服务器。")]),t._v(" "),e("h2",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),e("ul",[e("li",[t._v("workflow：工作流程")]),t._v(" "),e("li",[t._v("job：任务")]),t._v(" "),e("li",[t._v("step：步骤")]),t._v(" "),e("li",[t._v("action：动作/命令")])]),t._v(" "),e("p",[t._v("文件存放于项目根目录下的"),e("code",[t._v(".github/workflows/**.yml")])]),t._v(" "),e("h2",{attrs:{id:"基本语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test.yml")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 名称：未设置取文件名")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发事件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送事件")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分支")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定时任务")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schedule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 国际标准时间21点，北京时间5点")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 21 * * *'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务ID")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务说明")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 第一个任务\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 虚拟机环境：windows-latest、ubuntu-latest、macOS-latest")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤说明")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 步骤\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 条件判断：总是运行always、上一步成功success、上一步失败failure")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always()\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境变量")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("evn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HOME_PATH")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ../home\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用action")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v1\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用Docker")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("alpine\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行命令")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          npm install\n          npm run build")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 第二个任务\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 前任务的依赖关系")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("needs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" job1\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("📢 触发事件见"),e("a",{attrs:{href:"https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1),t._v("、工作流程语法见"),e("a",{attrs:{href:"https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"常用action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用action"}},[t._v("#")]),t._v(" 常用Action")]),t._v(" "),e("p",[t._v("我们可以在"),e("a",{attrs:{href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方市场"),e("OutboundLink")],1),t._v("里搜索所有"),e("code",[t._v("action")]),t._v("，比较常用的有：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/marketplace/actions/checkout",target:"_blank",rel:"noopener noreferrer"}},[t._v("actions/checkout"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("更新代码")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/marketplace/actions/setup-node-js-for-use-with-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("actions/setup-node"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("安装Nodejs")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/marketplace/actions/github-pages-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("peaceiris/actions-gh-pages"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("提交生成代码到某个分支")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/marketplace/actions/setup-ossutil",target:"_blank",rel:"noopener noreferrer"}},[t._v("manyuanrong/setup-ossutil"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("提交生成代码到阿里云OSS")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/marketplace/actions/send-nodemailer",target:"_blank",rel:"noopener noreferrer"}},[t._v("bingblue/send-nodemailer"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("发送邮件")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/marketplace/actions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("稍后更新"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("发送短信")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/marketplace/actions/publish-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("elgohr/Publish-Docker-Github-Action"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("发布Docker到私有库")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);