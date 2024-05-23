(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{416:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("服务器、常用软件的基本命令介绍。")]),a._v(" "),t("h2",{attrs:{id:"linux基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux基本命令"}},[a._v("#")]),a._v(" Linux基本命令")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("// 基本\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/issue   // 查看系统版本\n$ lsb_release "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("   // 查看系统版本\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("df")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hl")]),a._v("           // 查看磁盘信息\n\n// 操作文件\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("               // 查看\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" folderName // 新建文件夹\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" fileName   // 新建文件\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" folderName    // 进入\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fr")]),a._v(" fileName  // 删除\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v("              // 打印当前路径\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" folderName1 folderName2           // 重命名\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("注：folderName2存在则覆盖，文件名是folderName1，否则重命名为folderName2，同时移动所有文件"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" /tmp/a /root/a                 // 复制文件\n\n// 查看系统状况\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-aux")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" name                  // 查看进程\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-apn")]),a._v("                         // 查看所有端口\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-apn")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("             // 查看精确端口\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("32102")]),a._v("                           // 关闭进程"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("进程PID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v("                          // 查看命令绝对路径\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" xxxx "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("                         // 后台运行\n\n// 排查病毒\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),a._v("                                  // 查看使用率最高CPU\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" xmrig                  // 查看病毒进程\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v(" PID                          // 关闭病毒进程\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" /proc/进程ID/exe                // 查看病毒进程路径\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" xmrig                   // 查找病毒文件\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" xmrig                         // 删除病毒文件\n$ chattr "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" /etc/passwd /etc/shadow    // 取消文件只读\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" root                     // 修改root密码\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("df")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v("                                // 查看系统磁盘使用情况\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),a._v(" +50M "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-lh")]),a._v("      // 查找大于50M的文件\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iname")]),a._v(" *.txt                  // 查找以.txt结尾的文件,不许分大小\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iname")]),a._v(" *.txt "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iname")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a*"')]),a._v("   // 查找以a开头和以.txt结尾的文件\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iname")]),a._v(" *.txt "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-iname")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a*"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fprint")]),a._v(" /a.txt   // 查找以a开头和以.txt结尾的文件并输出到a.txt\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /opt/git/error.log   // 清空文件\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /opt/git/error.log            // 清空文件\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sh")]),a._v(" /var/lib/docker/containers/   // 查看文件夹大小\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-aux")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("PID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  // 通过PID查看是哪儿个服务\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 压缩")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cvf")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".tar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("       // 压缩成.tar格式,压缩率最低,速度最快\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".tar "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("    // 解压.tar文件到指定目录,目录必须存在\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zcvf")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".gz "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("       // 压缩成.gz格式,压缩率适中\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zxvf")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".gz "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("    // 解压.gz文件到指定目录,目录必须存在\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jcvf")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".bz2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("      // 压缩成.bz2格式,压缩率最高,速度最慢\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jxvf")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".bz2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("   // 解压.bz2文件到指定目录,目录必须存在\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jcvf")]),a._v(" app.bz2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" /home/ app      // 压缩app文件夹\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jxvf")]),a._v(" app.bz2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" /home/          // 解压app.bz2文件到/home文件夹下\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jxvkf")]),a._v(" app.bz2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" /home/         // 不覆盖解压\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jcvf")]),a._v(" example.bz2 example "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--exclude")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("example/temp // 不包含temp 文件夹\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 传输文件")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" home.bz2 root@1.13.8.160:/home/  // 传输本服务器home.bz2文件到远程服务器的/home文件夹下，-r 参数传输文件夹，-v 参数显示详情\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载ftp文件")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" ftp://root:xxx@47.103.81.123/home/mysql-20220727.tar.gz\n")])])]),t("h2",{attrs:{id:"vi基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vi基本命令"}},[a._v("#")]),a._v(" VI基本命令")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ i              // 编辑模式\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("v")]),a._v("              // visual模式\n$ ZZ             // 保存退出\n$ :q"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("            // 不保存退出\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fg")]),a._v("             // 打开后台\n\n$ j              // 下\n$ k              // 上\n$ h              // 左\n$ l              // 右\n$ d              // 剪切操作\n$ y              // 复制操作\n$ p              // 粘贴操作\n$ ^              // 跳至行首\n$ $              // 跳至行尾\n$ gg             // 跳至文首\n$ G              // 跳至最后\n$ 5gg/5G         // 调至第5行\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dd")]),a._v("             // 删除光标所在行\n$ ggdG           // 清空\n$ ggVG           // 全选\n\n$ :%s/old/new/g   // 搜索整个文件，将所有的old替换为new\n\n// 多行插入\n$ ctrl + "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("v")]),a._v("     // 进入块编辑模式\n$ hjkl         // 选择多行\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("shift")]),a._v(" + i    // 块模式下插入\n\n")])])]),t("h1",{attrs:{id:"更改ubuntu镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改ubuntu镜像源"}},[a._v("#")]),a._v(" 更改Ubuntu镜像源")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/apt/sources.list\n\nggdG\ni\n\ndeb http://mirrors.aliyun.com/ubuntu/ xenial main\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial main\n\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates main\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main\n\ndeb http://mirrors.aliyun.com/ubuntu/ xenial universe\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial universe\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates universe\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates universe\n\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security main\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security universe\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-security universe\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" upgrade\n\n")])])]),t("h2",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://www.nginx.cn/nginx-how-to",target:"_blank",rel:"noopener noreferrer"}},[a._v("中文文档"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动/重启/停止")]),a._v("\n$ nginx           "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动")]),a._v("\n$ nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" reload "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重启")]),a._v("\n$ nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" stop   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#快速停止")]),a._v("\n$ nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" quit   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#正常停止")]),a._v("\n")])])]),t("h2",{attrs:{id:"tensorflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow"}},[a._v("#")]),a._v(" TensorFlow")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://www.tensorfly.cn/tfdoc/get_started/os_setup.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("中文文档"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("$ docker run "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("it "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("rm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("v "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("d"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("docker_data"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("tf"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("notebooks"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("tf"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("notebooks "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8888")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8888")]),a._v(" tensorflow"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("tensorflow"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("latest"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("py3"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("jupyter\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);