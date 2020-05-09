const {
	override,
	fixBabelImports,
	addLessLoader,
	addWebpackAlias
} = require('customize-cra');
const path = require('path');
const rewiredMap = () => config => {
	config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
	return config;
};

module.exports = override(
	fixBabelImports('import', {
		//libraryName: 'antd',
		//libraryDirectory: 'es',
		//style: true,
		libraryName: 'antd-mobile',
		style: 'css',
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#1DA57A',
			'@link-color': '#1DA57A',
			'@border-radius-base': '2px',
		}
	}),
	// addWebpackExternals({ //不做打包处理配置，如直接以cdn引入的
	// 	echarts: "window.echarts",
	// 	// highcharts:"window.highcharts"
	// }),
	addWebpackAlias({ //路径别名
		'@': path.resolve(__dirname, 'src'),
	}),
	rewiredMap()
);