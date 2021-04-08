import { Meta, Story } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../main/bll/store'
import { ChosenProducts, ChosenProductsPropsType } from '../main/ui/common/ChosenProducts'

export default {
    title: 'ChosenProducts',
    component: ChosenProducts
}as Meta

const Template: Story<ChosenProductsPropsType> = (args) => (
    <Provider store={store}>
        <ChosenProducts {...args} />
    </Provider>
)

export const ChosenProductsExample = Template.bind({})
ChosenProductsExample.args = {
    chosenProducts: [
    {id: "1", name: "apple", price: "0.3", count: 1},
    {id: "2", name: "orange", price: "0.4", count: 2},
    {id: "3", name: "banana", price: "0.5", count: 3},
    {id: "4", name: "cucumber", price: "0.6", count: 4},
    {id: "5", name: "tomato", price: "1", count: 1}
]}