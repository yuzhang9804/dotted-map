const path = require('path');
const fs = require('fs');

class CleanOutput {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('CleanOutput', () => {
      if (fs.existsSync('./index.js')) {
        fs.rmSync('./index.js');
      }
      if (fs.existsSync('./without-countries.js')) {
        fs.rmSync('./without-countries.js');
      }
    });
  }
}

/**
 * @type {import('@rspack/core').Configuration}
 */
module.exports = {
  entry: {
    index: './src/with-countries.js',
    'without-countries': './src/without-countries.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    library: {
      name: 'dotted-map',
      type: 'umd',
    },
    globalObject: 'this',
    clean: false, // 使用自定义插件来清理
  },
  externals: {
    '@turf/boolean-point-in-polygon': '@turf/boolean-point-in-polygon',
    proj4: 'proj4',
  },
  plugins: [new CleanOutput()],
  // Rspack 特定配置
  optimization: {
    minimize: true,
  },
  // 设置为 web 环境，支持 UMD 格式
  target: 'web',
  // 不生成 source map
  devtool: false,
};
