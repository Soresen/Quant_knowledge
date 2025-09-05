window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],  // 行内公式分隔符：$...$ 和 \(...\)
      displayMath: [['$$', '$$'], ['\\[', '\\]']], // 块级公式分隔符：$$...$$ 和 \[...\]
      processEscapes: true,          // 处理转义字符
      processEnvironments: true      // 处理环境
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };