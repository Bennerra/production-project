import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/Button'

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      {t('ГЛАВНАЯ СТРАНИЦА')}
      <BugButton />
      <Button theme={ThemeButton.OUTLINE}>button</Button>
    </div>
  )
}

export default MainPage
