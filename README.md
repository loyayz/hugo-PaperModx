
> PaperModx 基于 [PaperMod](https://adityatelange.github.io/hugo-PaperMod/) 做了个性化定制并加了些新特性

## Features and changes:

可在 [loyayz.com](https://loyayz.com/tags/paper-modx/) 查看这些改动

- [调试时不集成 Google Analytics](https://loyayz.com/website/220530-hugo-papermodx-add-google-analytics/)
- [代码块显示标题](https://loyayz.com/website/220531-hugo-papermodx-codeblock-show-title/)
- [用新标签页打开外部链接](https://loyayz.com/website/220601-hugo-papermodx-open-external-links-in-a-new-tab/)
- [文章元数据前添加图标](https://loyayz.com/website/220602-hugo-papermodx-post-meta/)
- [文章标题后添加标识](https://loyayz.com/website/220603-hugo-papermodx-sign-title-in-list/)
- [拆分页面底部信息，方便自定义](https://loyayz.com/website/220604-hugo-papermodx-separate-footer/)
- [模板：随机显示图片](https://loyayz.com/website/220606-hugo-papermodx-template-for-random-image/)
- [区分列表和文章的导航文字](https://loyayz.com/website/220607-hugo-papermodx-distinguish-nav/)
- [文章页底部添加面包屑导航](https://loyayz.com/website/220608-hugo-papermodx-breadcrumbs-in-post-footer/)
- [搜索页展示标签列表](https://loyayz.com/website/220609-hugo-papermodx-tags-in-search-page/)
- [搜索页展示系列列表](https://loyayz.com/website/220610-hugo-papermodx-series-in-search-page/)
- [模板：统计文章篇数和字数](https://loyayz.com/website/220611-hugo-papermodx-template-for-calculate-word-count/)
- [文章页展示所属系列的文章列表](https://loyayz.com/website/220612-hugo-papermodx-series-in-post-page/)
- [模板：多标签页](https://loyayz.com/website/220613-hugo-papermodx-support-tabs/)
- [允许禁用校验文件完整性](https://loyayz.com/website/220614-hugo-papermodx-allow-disable-integrity/)

## 1. 怎么使用本主题
### 1.1 安装/更新
#### 1.1.1 方式一（推荐）
```shell
# 安装
git submodule add --depth=1 https://github.com/loyayz/hugo-PaperModx.git themes/PaperModx
# 更新
git submodule update --remote --merge
# 假设你已经安装成功并且将你的仓库推送到远程，重新 clone 你的仓库后需执行这句
git submodule update --init --recursive --depth=1
```
#### 1.2.1 方式二
```shell
# 进入你本机中的站点目录
cd blog
# 安装
git clone --depth=1 https://github.com/loyayz/hugo-PaperModx.git themes/PaperModx
# 更新
# 进入主题目录
cd themes/PaperModx
git pull
```
### 1.2 使用
修改站点配置`config.yml`
```yml
theme: "PaperModx"
```
其他详细配置请查看 [PaperMod 示例](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite/)
