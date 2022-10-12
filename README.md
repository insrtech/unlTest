# unlTest

to start project make sure that in **vite.config.js line 10** is uncommented,
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  define: {
    global: {}, // check this
  },
  plugins: [react()]
})
```

if you wanna build project, then comment line 10 in vite.config.js

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  define: {
//    global: {}, // comment this line
  },
  plugins: [react()]
})
```

