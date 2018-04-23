import './style';
import { Provider } from 'preact-redux';
import store from './reducers/store';
import App from './components/app';

export default () => (
		<Provider store={store}>
			<App />
		</Provider>
);
