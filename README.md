# unlTest

to start project make shure that in **vite.config.js line 10** is uncommented,
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

if you wanna build project, then comment in vite.config.js line 10 ( global:{} )

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

