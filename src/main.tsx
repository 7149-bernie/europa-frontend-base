import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {EuropaTest} from "../lib/main.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EuropaTest test={'Hello world'} />
  </StrictMode>,
)
