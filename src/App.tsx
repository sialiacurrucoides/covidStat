import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import './assets/fonts.scss';
import { store } from './store/store';
import { Provider } from 'react-redux'
import Container from './components/Container/Container';

import './App.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App"><Container /></div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
