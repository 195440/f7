# 本例基于 Jekyll 搭建

# 简介

 Jekyll  是用 Ruby 开发的静态网站框架，十分流行。本教程详细讲述了在 CentOS 6.x 上安装 Jekyll 的过程。

# 安装 Ruby

CentOS&nbsp; 自带的 Ruby 版本太低，因此需要使用 rvm 安装较新版本的 Ruby。

注，自带的ruby版本是1.8.7， 安装Jekyll要求的版本在2.2.5以上，所以要提升ruby的版本。

# 安装 rvm:

rvm：Ruby Version Manager

<pre class="">`<code class="hljs avrasm has-numbering nginx"><span class="hljs-attribute"><span class="hljs-attribute">gpg</span></span> --keyserver hkp://keys<span class="hljs-preprocessor">.gnupg</span><span class="hljs-preprocessor">.net</span> --recv-keys <span class="hljs-number">409</span>B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get<span class="hljs-preprocessor">.rvm</span><span class="hljs-preprocessor">.io</span> | bash -s stable
source /etc/profile<span class="hljs-preprocessor">.d</span>/rvm<span class="hljs-preprocessor">.sh</span>`</code></pre>

# 安装 ruby 2.2.6:

<pre class="">`<code class="hljs fsharp has-numbering css"><span class="hljs-selector-tag"><span class="hljs-selector-tag">sudo</span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">yum</span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">install</span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">libyaml</span></span>
<span class="hljs-selector-tag"><span class="hljs-selector-tag">rvm</span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">install</span></span> <span class="hljs-number">2<span class="hljs-selector-class"><span class="hljs-selector-class">.2</span></span></span><span class="hljs-number"><span class="hljs-selector-class"><span class="hljs-selector-class">.6</span></span></span>
设为默认版本:
<span class="hljs-selector-tag"><span class="hljs-selector-tag">rvm</span></span> <span class="hljs-keyword"><span class="hljs-selector-tag"><span class="hljs-selector-tag">use</span></span></span> <span class="hljs-number">2<span class="hljs-selector-class"><span class="hljs-selector-class">.2</span></span></span><span class="hljs-number"><span class="hljs-selector-class"><span class="hljs-selector-class">.6</span></span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">--</span></span><span class="hljs-keyword"><span class="hljs-selector-tag"><span class="hljs-selector-tag">default</span></span></span>`</code></pre>

# 安装 Nodejs

Jekyll 依赖 JavaScript 运行时库，需要安装 Nodejs:

<pre class="">`<code class="hljs avrasm has-numbering nginx"><span class="hljs-attribute"><span class="hljs-attribute">sudo</span></span> yum install nodejs`</code></pre>

# 安装 Jekyll

首先修改 gem 源，以加快下载速度:

<pre class="">`<code class="hljs avrasm has-numbering cs">gem sources --<span class="hljs-keyword"><span class="hljs-keyword">remove</span></span> https:<span class="hljs-comment"><span class="hljs-comment">//rubygems</span></span><span class="hljs-preprocessor"><span class="hljs-comment"><span class="hljs-comment">.org</span></span></span><span class="hljs-comment"><span class="hljs-comment">/</span></span>
gem sources -a http:<span class="hljs-comment"><span class="hljs-comment">//mirrors</span></span><span class="hljs-preprocessor"><span class="hljs-comment"><span class="hljs-comment">.ustc</span></span></span><span class="hljs-preprocessor"><span class="hljs-comment"><span class="hljs-comment">.edu</span></span></span><span class="hljs-preprocessor"><span class="hljs-comment"><span class="hljs-comment">.cn</span></span></span><span class="hljs-comment"><span class="hljs-comment">/rubygems/</span></span>`</code></pre>

然后安装:

`gem install jekyll`

# 测试

运行下面的命令测试 Jekyll 能否正常工作:

<pre class="">`<code class="hljs livecodeserver has-numbering css"><span class="hljs-selector-tag"><span class="hljs-selector-tag">jekyll</span></span> <span class="hljs-built_in"><span class="hljs-selector-tag"><span class="hljs-selector-tag">new</span></span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">blog</span></span>
<span class="hljs-selector-tag"><span class="hljs-selector-tag">cd</span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">blog</span></span>
<span class="hljs-selector-tag"><span class="hljs-selector-tag">jekyll</span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">serve</span></span> <span class="hljs-comment"><span class="hljs-selector-tag"><span class="hljs-selector-tag">--host</span></span> 0<span class="hljs-selector-class"><span class="hljs-selector-class">.0</span></span><span class="hljs-selector-class"><span class="hljs-selector-class">.0</span></span><span class="hljs-selector-class"><span class="hljs-selector-class">.0</span></span></span>`</code></pre>

然后在浏览器中打开 http://IP:4000，即可看到 Jekyll 默认页面。


