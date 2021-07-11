import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

window.renderReduxapp = (containerId, history) => {
  ReactDOM.render(
    <Provider store={store}>
    <App  history={history}/>
  </Provider>,
    document.getElementById(containerId)
  );
};

// unmount micro frontend function
window.unmountReduxapp = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById("Reduxapp-container")) {
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));
}

registerServiceWorker();
