import type { Meta, StoryObj } from '@storybook/react'
import {
  ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const NavbarLight: Story = {
  args: {}
}

export const NavbarDark: Story = {
  args: {}
}
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)]
