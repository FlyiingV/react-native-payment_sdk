import * as React from 'react';
import { WebView } from 'react-native-webview';

class PaymentWebView extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
      const { uri, ...restProps } = this.props;

      return (
        <WebView
          {...restProps}
          source={{ uri: uri }}
          onShouldStartLoadWithRequest={ (request) => {
            return request.url.includes(uri)
          }}
        />
      );
    }
}

export default PaymentWebView