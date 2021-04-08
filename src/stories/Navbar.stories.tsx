import { Meta, Story } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Navbar, NavbarPropsType } from '../main/ui/common/navbar/Navbar'

export default {
    title: 'Navbar',
    component: Navbar,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as Meta

const Template: Story<NavbarPropsType> = (args) => <Navbar {...args} />

export const NavbarExample = Template.bind({})
NavbarExample.args = {
    purchaseAmount: 9.99
}