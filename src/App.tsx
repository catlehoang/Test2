import './App.css';
import { AppProvider } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import { Routers } from './routers';

function App() {
  return (
		<AppProvider i18n={en}>
			<Routers />
		</AppProvider>
  );
}

export default App;
