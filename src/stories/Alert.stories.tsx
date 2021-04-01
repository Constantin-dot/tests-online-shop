import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../main/bll/store';
import { Alert } from '../main/ui/common/Alert';

export default {
  title: 'Alert',
  component: Alert,
}

export const AlertSuccessExample = () => {
    return <Provider store={store}>
      <Alert visible={true} alertClass={'success'} alertText={'Product was removed from product list.'} />
    </Provider>
    
}

export const AlertWarningExample = () => {
    return <Provider store={store}>
      <Alert visible={true} alertClass={'warning'} alertText={'You need enter product name!'} />
    </Provider>
    
}
