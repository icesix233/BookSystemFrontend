import ReactDOM from 'react-dom'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with dark styles to enable dark mode
 *
 * import './_metronic/assets/sass/style.dark.scss'
 *
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'

import { isManagerContext } from './app/pages/UserContext'
import { useState } from 'react'

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */

/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)

Chart.register(...registerables)

const queryClient = new QueryClient()

const AppContextProvider: React.FC = ({ children, ...props }) => {
  const [isManager, setIsManager] = useState(false);

  return (
    <isManagerContext.Provider value={{isManager, setIsManager}}>
      {children}
    </isManagerContext.Provider>
  );
};

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MetronicI18nProvider>
        <AuthProvider>
          <AppContextProvider>
          <AppRoutes />
          </AppContextProvider>
        </AuthProvider>
    </MetronicI18nProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
)
