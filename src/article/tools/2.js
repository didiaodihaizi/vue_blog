export default {
    id: 1,
    title: 'webpack-loader如何编写',
    desc: '为何，有啥用，怎么写',
    create_time: '2019-11-04',
    content: `<h1 class="ql-align-center">如何编写自己用的项目webpack-loader</h1><p><br></p><p>		大部分人可能会觉得loader我们应该很难，要什么ast啊之类的，像babel-loader之类的，而且我们会写也没什么用处，用到的地方也不多，其实，这种想法也是不对的，webpack的loader并没有多难，而且有时候对于我们项目的开发会有些效率的提升等。下面先介绍下loader的一些基本知识吧</p><p><br></p><pre class="ql-syntax" spellcheck="false">{
        &nbsp;&nbsp;test:&nbsp;/\.js$/,
        &nbsp;&nbsp;loader:&nbsp;'babel-loader',
        &nbsp;&nbsp;include:&nbsp;[resolve('src'),&nbsp;resolve('test'),&nbsp;resolve('node_modules/webpack-dev-server/client')]
        }
        </pre><p><br></p><p>		如上所示，test代表着要处理什么文件，上面则是.js结尾的文件，loader则是使用解析这个文件的loader，include则是代表要解析编译的文件的目录，这是一个只有一个loader的情况</p><p><br></p><pre class="ql-syntax" spellcheck="false">{
        &nbsp;&nbsp;test:&nbsp;/\.less$/,
        &nbsp;&nbsp;loader:&nbsp;['css-loader', 'postcss-loader', 'img2x-loader'， 'less-loader' ],
        }
        </pre><p><br></p><p>		上面则是有多个loader的例子，多个loader的时候，loader的使用顺序是由后往前，所以是：less -&gt; img2x -&gt; postcss -&gt; css 这样的处理顺序，img2x-loader则是我自己写的一个loader，作用是可以在处理样式文件时，若发现?__2x的时候，自动添加background-image:image-set(url 1x, url@2x 2x)的样式，这样在开发、打包、编译的时候就能自动引入二倍图了（有作用了吧）</p><p><br></p><h2><br></h2><h2>如何编写一个loader</h2><p><br></p><p>首先我们来编写一个最简单的loader例子</p><pre class="ql-syntax" spellcheck="false">module.exports = function (source) {
          return source
        }
        
        </pre><p>这个例子里，source则是传入当前loader的代码，我们直接return 的话说明我们这里没对当前代码做任何处理，所以就直接给回webpack，让它继续处理下一步</p><p>看到这里，就会觉得loader原来也就是这样，没有太大的难度，这里开发loader的时候推荐一个插件：<span style="color: rgb(230, 0, 0);">loader-runner,</span> 可以自行了解一下，对于复杂的loader，我们可能还要获取一些相应的options，这时候我们就需要用到<span style="color: rgb(230, 0, 0);">loader-utils</span>了，具体用法有兴趣可以自己了解，所谓的options就是</p><p><br></p><pre class="ql-syntax" spellcheck="false">{
        &nbsp;&nbsp;test:&nbsp;/\.css$/,
        &nbsp;&nbsp;loader:&nbsp;'img2x-loader',
        &nbsp;&nbsp;options: {
            fix: '@2x'
          }
        }
        </pre><p><br></p><p>像上面的options就是loader-utils能帮我们获取的内容了</p><p><br></p><p>好了，晚上2点多了，该睡了，明天还要上班，上周九九六，周日看比赛，导致周末没写出一篇文章，现在就先写一下8，后面有空回来再补一下</p><p><br></p>`
}