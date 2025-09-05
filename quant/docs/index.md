# Welcome

This is Soresen's Quant Knowledge Pages.

## 简介

据说现在 Quant 有两套主流的方法论，一套是多因子线性模型，一套是机器学习，还有很多未成熟的方法论。

二者有一些共同需求，如高效的回测&交易执行系统。

除了方法论貌似还有一些分类方法，如 趋势追踪/时序/截面 策略，也有按交易次数划分的。

把方法论应用到其他分类维度上也不能一以贯之。

目前仅仅记录一些我掌握的东西，[更权威的知识链接](https://quant-wiki.com/)。

## 多因子线性模型

目前理解感觉也不权威，大概可以分成 

1. 从数据提取特征
2. 产生因子
3. 因子组合成信号
4. 根据信号制定交易策略
5. 把交易策略执行出来。

## 机器学习

暂且不知

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs gh-deploy` - deploy `/site` on GitHub Pages.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files, maybe never updated ~.~
