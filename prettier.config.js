module.exports = {
  printWidth: 180,
  tabWidth: 2,
  useTabs: false,
  vueIndentScriptAndStyle: true,
  singleQuote: true, //字符串是否使用单引号，默认为 false，使用双引号
  semi: false, //行位是否使用分号，默认为true
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  jsxBracketSameLine: false,
  jsxSingleQuote: true, // jsx语法中使用单引号
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
  rangeStart: 0
  // parser: 'babylon', //代码的解析引擎，默认为babylon，与babel相同。
}
