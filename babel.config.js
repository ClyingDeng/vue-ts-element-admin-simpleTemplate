module.exports = {
  presets: [
    '@vue/app',
    // 兼容配置
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry',
        "corejs": "2"
      }
    ]
  ],
  // 按需加载配置
  plugins: [
    "@babel/plugin-proposal-optional-chaining"
  ]
}
