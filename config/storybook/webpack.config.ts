import type * as webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import * as path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  if (config) {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src')
    }

    if (config.resolve?.modules) {
      config.resolve.modules.push(paths.src)
    }
    if (config.resolve?.extensions) {
      config.resolve.extensions.push('.ts', '.tsx')
    }
    if (config.module?.rules) {
      config.module.rules.push(buildCssLoader(true))
      config.module.rules = config.module.rules.map((rule: any) => {
        if (/svg/.test(rule.test)) {
          return { ...rule, exclude: /\.svg$/i }
        }
        return rule
      })
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
    }
  }

  return config
}
