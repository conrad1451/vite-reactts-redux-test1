import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import store from './redux/store';
import { Provider } from 'react-redux';
// Cannot find module './redux' or its corresponding type declarations.ts(2307)
// import { Provider } from './redux';

import AppRedux from './AppRedux.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
			<AppRedux />
		</Provider>
    {/* <App /> */}
  </StrictMode>,
)
