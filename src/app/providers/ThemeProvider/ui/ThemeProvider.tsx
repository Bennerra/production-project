import React, { type FC, type ReactNode, useMemo, useState } from 'react'
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY
} from '../lib/ThemeContext'

const defaultTheme = localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface Props {
  children: ReactNode
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)
  console.log(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
