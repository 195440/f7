# 本例基于 Jekyll 搭建

# 简介

 Jekyll  是用 Ruby 开发的静态网站框架，十分流行。本教程详细讲述了在 CentOS 6.x 上安装 Jekyll 的过程。

# Centos环境
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

#win环境
<article id="post-782" class="post-782 post type-post status-publish format-standard hentry category-8" itemscope="" itemtype="http://schema.org/Article" itemprop="mainEntity">
<div class="schema-image">
<div class="entry-meta featured-image-meta"></div>
<span class="edit-link icon-metas"> [Edit](http://www.195440.com/wp-admin/post.php?post=782&amp;action=edit)</span> </div>
<div class="article-inner">
<header>
<div class="entry-meta beforetitle-meta">
</div>

# Windows 安装 Jekyll

# 简介

Jekyll 是用 Ruby 开发的静态网站框架，十分流行。

#### 1，安装Ruby

下载安装exe，地址(可能需要翻墙)：[http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)

根据自己的机型选择对应的安装包(**因后续有需要安装不同的gem，推荐使用2,2,6版本的**)

![](http://www.195440.com/wp-content/uploads/2018/01/20180123124118-1024x712.png)

安装的注意点：

自动帮你配置环境变量，要安装在根目录

![](http://www.195440.com/wp-content/uploads/2018/01/1195023-e5a69bdde0973466.png)

测试是否安装完成：

ruby -v

我的输出结果是

ruby 2.2.6p396 (2016-11-15 revision 56800) [x64-mingw32]

#### 2，安装Devkit

![](http://www.195440.com/wp-content/uploads/2018/01/20180123124731-1024x793.png)

1），运行安装包并解压缩至某文件夹，如 C:\DevKit

2），通过初始化来创建 config.yml 文件。在命令行窗口内，输入下列命令：

cd “C:\DevKit”

ruby dk.rb init

notepad config.yml

3），在打开的记事本窗口中，于末尾添加新的一行- C:\Ruby200-x64，保存文件并退出。

4），回到命令行窗口内，审查（非必须）并安装。

ruby dk.rb review

ruby dk.rb install

#### 3，安装jekyll

先查看你的gem是否安装完毕：

gem -v

gem install jekyll

测试是否安装完毕：

![](http://www.195440.com/wp-content/uploads/2018/01/20180123124852.png)

# 测试

运行下面的命令测试 Jekyll 能否正常工作:

<pre class="">`<code class="hljs livecodeserver has-numbering css"><span class="hljs-selector-tag"><span class="hljs-selector-tag">jekyll</span></span> <span class="hljs-built_in"><span class="hljs-selector-tag"><span class="hljs-selector-tag">new</span></span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">blog</span></span>
<span class="hljs-selector-tag"><span class="hljs-selector-tag">cd</span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">blog</span></span>
<span class="hljs-selector-tag"><span class="hljs-selector-tag">jekyll</span></span> <span class="hljs-selector-tag"><span class="hljs-selector-tag">serve</span></span> <span class="hljs-comment"><span class="hljs-selector-tag"><span class="hljs-selector-tag">--host</span></span> 0<span class="hljs-selector-class"><span class="hljs-selector-class">.0</span></span><span class="hljs-selector-class"><span class="hljs-selector-class">.0</span></span><span class="hljs-selector-class"><span class="hljs-selector-class">.0</span></span></span>`</code></pre>

然后在浏览器中打开 http://IP:4000，即可看到 Jekyll 默认页面。
