// "build-prod": "webpack --mode=production",
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack')

const plugins = [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Формат имени файла
    }), // Добавляем в список плагинов
];

module.exports = {
  mode: 'production',
  target: 'browserslist',
  // Указываем входную точку
  entry: './src/index.js',
  plugins,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    historyApiFallback: true,

	// Здесь указывается вся статика, которая будет на нашем сервере
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    hot: true,

	// Сжимать ли бандл при компиляции📦
    compress: true,

	// Порт на котором будет наш сервер
    port: 8080,
  },
  // Указываем точку выхода
  output: {

    // Тут мы указываем полный путь к директории, где будет храниться конечный файл
    path: path.resolve(__dirname, 'dist'),

	// Указываем имя этого файла
    filename: 'main.bundle.js',
  },
  cache: {  
    type: 'filesystem', // По умолчанию 'memory'

	// Устанавливаем диреторию для кэша
	cacheDirectory: path.resolve(__dirname, '.temporary_cache')
  },

  module: {

	// Указываем правила для данных модулей
	rules: [

		// Указываем правило для каждого лоадера
		{ test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, // Добавляем загрузчики стилей
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset', // В продакшен режиме
        // изображения размером до 8кб будут инлайнится в код
        // В режиме разработки все изображения будут помещаться в dist/assets
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // не обрабатываем файлы из node_modules
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Использование кэша для избежания рекомпиляции
            // при каждом запуске
          },
        },
      },
      {
        test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
	],
  },
};



