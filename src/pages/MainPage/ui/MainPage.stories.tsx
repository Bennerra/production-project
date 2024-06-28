import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { MainPage } from 'pages/MainPage'

const meta = {
  title: 'pages/MainPage',
  component: MainPage
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const MainPageLight: Story = {
  args: {}
}

export const MainPageDark: Story = {
  args: {}
}
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)]
