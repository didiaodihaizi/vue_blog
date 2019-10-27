export default {
    "id": 3,
    "title": "性能优化-缓存篇之ServiceWorker",
    "desc": "简单介绍下，并且如何使用",
    "create_time": "2019-10-27",
    content: `<h1 class="ql-align-center">性能优化-缓存篇之ServiceWorker</h1><p class="ql-align-center"><br></p><h2>什么是ServiceWorker?</h2><p>		</p><p>		随着互联网时代的进步，大家也会慢慢解决一些痛处，而ServiceWorder就是为了解决离线状态下无法访问web网站的痛处，在好几年前，为了解决这个问题，推出了<span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);">AppCache这个API，但是这个API是假定你使用时会遵循诸多规则，否则会把你的web项目弄的团团遭，后来则推出了Service worker这个API，代替AppCache。</span></p><p>		ServiceWorker是独立于页面的进程，也就是说页面关了它也会存在，并且会拦截当前域名下请求的API或者资源请求等，可以说它就是网站的中间服务器，也正因为它可以拦截资源请求，所以能做到网站的离线化，具体网站：taobao.com 也是引入了serviceWorker，而浏览器读取缓存的顺序是：sw -&gt; 内存缓存 -&gt; 磁盘缓存 -&gt; 服务器，而且它不仅仅只是拦截资源请求，还可以主动对页面发送消息，做到页面间的通信，可以说很强了。</p><p>		更详细的介绍可以看：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers" rel="noopener noreferrer" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers</a></p><p><br></p><p><br></p><h2>如何使用？</h2><p>		上面的链接也会介绍了serviceWorker的具体使用方法、生命周期等，这就不说了</p><p>		这里主要介绍一款webpack插件，配合webpack和项目使用的：offline-plugin，具体使用方法如下</p><pre class="ql-syntax" spellcheck="false">// webpack.config.js

    var&nbsp;OfflinePlugin&nbsp;=&nbsp;require('offline-plugin');
    &nbsp;
    module.exports&nbsp;=&nbsp;{
    &nbsp;&nbsp;plugins:&nbsp;[
    &nbsp;&nbsp;&nbsp;&nbsp;new&nbsp;OfflinePlugin()
    &nbsp;&nbsp;]
    &nbsp;&nbsp;//&nbsp;...
    }
    </pre><p><br></p><pre class="ql-syntax" spellcheck="false">// entry.js
    
    import&nbsp;*&nbsp;as&nbsp;OfflinePluginRuntime&nbsp;from&nbsp;'offline-plugin/runtime';
    OfflinePluginRuntime.install();
    </pre><p>这是最简单的使用方法，这里会webpack会自动帮你生成sw.js文件，并且自动帮你为生成的js css文件进行缓存，当然插件中还有很多配置的，可以在入口.js配置相应的生命周期等要做什么，消息发送接收之类的，如下</p><pre class="ql-syntax" spellcheck="false">import&nbsp;*&nbsp;as&nbsp;OfflinePluginRuntime&nbsp;from&nbsp;'offline-plugin/runtime';
    OfflinePluginRuntime.install({
      onUpdating: () =&gt; {
        console.log('SW Event:', 'onUpdating');
      },
      onUpdateReady: () =&gt; {
        console.log('SW Event:', 'onUpdateReady');
        // Tells to new SW to take control immediately
        runtime.applyUpdate();
      },
      onUpdated: () =&gt; {
        console.log('SW Event:', 'onUpdated');
        // Reload the webpage to load into the new version
        window.location.reload();
      },
    
      onUpdateFailed: () =&gt; {
        console.log('SW Event:', 'onUpdateFailed');
      }
    });
    </pre><h2><br></h2><h2>注意事项</h2><p>		sw.js对于浏览器来说也是静态资源，所以对于它的缓存策略也要做好，最好是设置为协商缓存（可以看看缓存篇），切记更新的时候不能靠改名字来进行</p>`
}