import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'url-polyfill';
import dva from 'dva';
import { createBrowserHistory } from 'history';
import createLoading from 'dva-loading';
import { I18n } from 'react-i18nify';
import enUS from './locales/en-US.js';
import zhCN from './locales/zh-CN.js';
import * as serviceWorker from './serviceWorker';
import './index.css';

I18n.setTranslations({
  enUS,
  zhCN
});

I18n.setLocale('enUS');

// 1. Initialize
const app = dva({
  history: createBrowserHistory()
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global').default);
app.model(require('./models/messageCenter').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store;  // eslint-disable-line
export { app };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
