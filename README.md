本例使用Jekyll搭建

简介
Jekyll 是用 Ruby 开发的静态网站框架，十分流行。本教程详细讲述了在 CentOS 6.x 上安装 Jekyll 的过程。

安装 Ruby
CentOS  自带的 Ruby 版本太低，因此需要使用 rvm 安装较新版本的 Ruby。
注，自带的ruby版本是1.8.7， 安装Jekyll要求的版本在2.2.5以上，所以要提升ruby的版本。

安装 rvm:
rvm：Ruby Version Manager

gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get.rvm.io | bash -s stable
source /etc/profile.d/rvm.sh
安装 ruby 2.2.6:
sudo yum install libyaml
rvm install 2.2.6
设为默认版本:
rvm use 2.2.6 --default
安装 Nodejs
Jekyll 依赖 JavaScript 运行时库，需要安装 Nodejs:

sudo yum install nodejs
安装 Jekyll
首先修改 gem 源，以加快下载速度:

gem sources --remove https://rubygems.org/
gem sources -a http://mirrors.ustc.edu.cn/rubygems/
然后安装:

gem install jekyll

测试
运行下面的命令测试 Jekyll 能否正常工作:

jekyll new blog
cd blog
jekyll serve --host 0.0.0.0
然后在浏览器中打开 http://IP:4000，即可看到 Jekyll 默认页面。
