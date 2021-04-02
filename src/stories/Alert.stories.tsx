import { Alert, AlertPropsType } from '../main/ui/common/alert/Alert';
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Alert',
  component: Alert,
}as Meta

const Template: Story<AlertPropsType> = (args) => <Alert {...args} />

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
  visible: true,
  alertClass: 'success',
  alertText: 'Product was removed from product list.'
}

export const AlertWarning = Template.bind({});
AlertWarning.args = {
  visible: true,
  alertClass: 'warning',
  alertText: 'You need enter product name!'
}
