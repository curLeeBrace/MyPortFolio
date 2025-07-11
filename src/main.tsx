import {lazy, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from "react-router";

const LazyApp = lazy(()=>import('./App.tsx'));
import LoadingScreen from './components/LoadingScreen/LoadingScreen.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  

      <Suspense fallback = {<LoadingScreen/>}>
        <LazyApp/>
      </Suspense>
  

  </BrowserRouter>


)
