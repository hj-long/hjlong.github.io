import{_ as l,o as e,c as i,O as p,z as a}from"./chunks/framework.95b9d657.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"others/uniapp.md","filePath":"others/uniapp.md"}'),n={name:"others/uniapp.md"},s=p(`<h2 id="uniapp" tabindex="-1">Uniapp <a class="header-anchor" href="#uniapp" aria-label="Permalink to &quot;Uniapp&quot;">​</a></h2><p>适合中小公司、一套代码可以多端发布、节省人力、时间</p><p>但是，不同端的代码个性化展示需要进行条件编译</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><ul><li><p>pages 页面</p></li><li><p>components 组件</p></li><li><p>static 静态资源(图片、css文件)</p></li><li><p>App.vue 整个uniapp项目的第一个组件</p></li><li><p>index.html 入口html</p></li><li><p>main.js 第一个运行的js文件(全局js文件)(和vue-cli的main.js差不多)</p></li><li><p>manifest.json 全局文件 --&gt; 应用的配置</p></li><li><p>pages.json 全局文件 --&gt; 页面的配置</p></li><li><p>uni.scss 全局样式文件</p></li></ul><h2 id="什么是条件编译" tabindex="-1">什么是条件编译？ <a class="header-anchor" href="#什么是条件编译" aria-label="Permalink to &quot;什么是条件编译？&quot;">​</a></h2><p>在不同端，展示不同代码</p><h2 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h2><ul><li><p>问题一：如果某一段代码想在某一端展示该怎么办？</p><p>答：条件编译，</p></li></ul><h2 id="结构" tabindex="-1">结构 <a class="header-anchor" href="#结构" aria-label="Permalink to &quot;结构&quot;">​</a></h2><h3 id="一、template-布局盒子-视图" tabindex="-1">一、template: 布局盒子（视图） <a class="header-anchor" href="#一、template-布局盒子-视图" aria-label="Permalink to &quot;一、template: 布局盒子（视图）&quot;">​</a></h3><ol><li><p>view： 类似于 div ,块级容器</p></li><li><p>text： 放入文字的（可以添加属性让它长按选中等特性），行内元素</p></li><li><p>表单组件: button、form、input、label</p></li></ol><h3 id="二、css" tabindex="-1">二、CSS <a class="header-anchor" href="#二、css" aria-label="Permalink to &quot;二、CSS&quot;">​</a></h3><ol><li><p>尺寸单位： rpx --&gt; 响应式px</p><p>ui的设计图如果宽度是750, 但是测量出来的元素宽度是300px,那么就在uniapp中的style部分写300rpx就可以了</p></li></ol><h3 id="三、js" tabindex="-1">三、js <a class="header-anchor" href="#三、js" aria-label="Permalink to &quot;三、js&quot;">​</a></h3><ol><li><p>语法跟 vue 基本一样</p></li><li><p>生命周期：分为 页面生命周期、组件生命周期</p></li></ol><h4 id="页面生命周期" tabindex="-1">页面生命周期 <a class="header-anchor" href="#页面生命周期" aria-label="Permalink to &quot;页面生命周期&quot;">​</a></h4><ul><li><p>uniapp 中的页面：指的是 pages 目录下的 .vue 文件</p><ul><li><p>流程：先在 pages 目录下新建 .vue 或者 .nvue 文件，并且在 pages.json 中进行配置即可</p></li><li><p>pages目录下.vue文件 拥有页面生命周期，同时 也拥有 组件生命周期</p></li><li><p>onLoad：第一次进入页面所执行的生命周期</p><ul><li><p>会接收 页面传递过来的 参数</p></li><li><p>请求接口</p></li></ul></li><li><p>onShow： 每一次进入页面所执行的生命周期</p></li><li><p>onShow： 每一次进入页面所执行的生命周期</p></li><li><p>onReady 页面渲染完成</p><pre><code>  场景:可以获取dom
</code></pre></li><li><p>onHide 页面隐藏时触发</p></li><li><p>onUnload 页面卸载时触发</p></li></ul></li></ul><h4 id="组件生命周期" tabindex="-1">组件生命周期 <a class="header-anchor" href="#组件生命周期" aria-label="Permalink to &quot;组件生命周期&quot;">​</a></h4><ul><li><p>uniapp 中的组件：不是在pages目录下新建的.vue文件</p><ul><li><p>如果在组件vue文件中写了 页面的生命周期，则不会生效</p></li><li><p>组件生命周期：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">beforeCreate</span></span>
<span class="line"><span style="color:#A6ACCD;">created</span></span>
<span class="line"><span style="color:#A6ACCD;">beforeMount</span></span>
<span class="line"><span style="color:#A6ACCD;">mounted</span></span>
<span class="line"><span style="color:#A6ACCD;">beforeUpdate</span></span>
<span class="line"><span style="color:#A6ACCD;">updated</span></span>
<span class="line"><span style="color:#A6ACCD;">beforeDestroy</span></span>
<span class="line"><span style="color:#A6ACCD;">destroyed</span></span></code></pre></div></li></ul></li></ul><h4 id="路由页面跳转" tabindex="-1">路由页面跳转 <a class="header-anchor" href="#路由页面跳转" aria-label="Permalink to &quot;路由页面跳转&quot;">​</a></h4><ol><li><p>api方法</p><ul><li><p>uni.navigateTo(OBJECT) 保留当前页面，跳转到应用内的某个页面</p></li><li><p>uni.redirectTo(OBJECT) 关闭当前页面，跳转到应用内的某个页面</p></li><li><p>uni.reLaunch(OBJECT) 关闭所有页面，打开到应用内的某个页面</p></li><li><p>uni.switchTab(OBJECT) 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p></li><li><p>uni.navigateBack(OBJECT) 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。</p></li></ul></li></ol><p>注意: 如果跳转到的是tabbar页面请用<code>switchTab</code>否则请用 <code>navigateTo、redirectTo...</code></p><ol start="2"><li><p>组件:</p><ul><li>navigator 标签</li></ul><p><code>&lt; navigator open-type=&#39;navigate&#39; url=&#39;/xx/xx&#39;&gt;点击跳转&lt;/ navigator&gt;</code></p></li></ol><h4 id="组件间传值" tabindex="-1">组件间传值 <a class="header-anchor" href="#组件间传值" aria-label="Permalink to &quot;组件间传值&quot;">​</a></h4>`,25),t=a("ol",null,[a("li",{"this.keyName":"",class:"optionskey;"},[a("p",null,"页面传值，通过 url 拼接传值"),a("ul",null,[a("li",null,[a("p",null,"A页面:传"),a("p",null,"uni.navigateTo({url:/pages/search/search?key=${this.key}&id=111})")]),a("li",null,[a("p",null,"B页面:接"),a("p",null,"onLoad( options )")])])]),a("li",null,[a("p",null,"其他传值方式"),a("ul",null,[a("li",null,[a("p",null,"组件：父传子 （和vue中一样）")]),a("li",null,[a("p",null,"其他："),a("p",null,"A 组件 传：uniapp.$emit('方法1', A参数1);"),a("p",null,"B 组件 收：uniapp.$on('方法1', ( 参数1 ) => { ..... })")])])])],-1),o=[s,t];function r(u,c,h,d,b,m){return e(),i("div",null,o)}const g=l(n,[["render",r]]);export{_ as __pageData,g as default};