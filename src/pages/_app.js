import { Provider } from 'react-redux'
import  {store,persistor}  from '../app/store'
import '../styles/globals.scss';
import { SessionProvider } from "next-auth/react"
import { PersistGate } from 'redux-persist/integration/react';
export default function MyApp({   
  Component,
  pageProps: { session, ...pageProps },
}) {

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
      </Provider>
    </SessionProvider>
    
  )
}

