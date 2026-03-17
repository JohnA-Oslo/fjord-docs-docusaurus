export default function webpackPatchPlugin(context, options) {
  return {
    name: 'webpack-patch-plugin',
    configureWebpack(config) {
      return {
        resolve: {
          fallback: {
            path: false,
          },
        },
      };
    },
  };
}