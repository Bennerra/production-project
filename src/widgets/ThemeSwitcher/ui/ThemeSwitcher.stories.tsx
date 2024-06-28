import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const ThemeSwitcherLight: Story = {
  args: {}
}

export const ThemeSwitcherDark: Story = {
  args: {}
}
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]
