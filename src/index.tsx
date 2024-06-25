// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import 'shared/config/i18n'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
