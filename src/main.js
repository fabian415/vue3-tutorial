import { createApp } from "vue";
// import App from './App.vue'
// import App from './App-1.vue'

// import App from './App-2-ref.vue'
// import App from './App-2-reactive.vue'
// import App from './App-2-comparison.vue'
// import App from "./App-2-reactive-2.vue";

// import App from './App-3-v-text.vue'
// import App from './App-3-v-html.vue'
// import App from './App-3-v-if.vue'
// import App from './App-3-v-show.vue'
// import App from './App-3-v-bind.vue'
// import App from './App-3-v-on.vue'
// import App from "./App-3-v-for.vue";
// import App from './App-3-v-model.vue'
// import App from './App-3-v-model-2.vue'
// import App from './App-3-v-once.vue'
// import App from './App-3-practice-1.vue'
// import App from './App-3-practice-2.vue'
// import App from './App-3-practice-3.vue'

// import App from "./App-3-computed.vue";
// import App from "./App-3-computed-writable.vue";
// import App from "./App-3-watch.vue";
// import App from "./App-3-watch-2.vue";
// import App from "./App-3-watch-deep.vue";
// import App from './App-3-practice-4.vue'
// import App from './App-3-practice-5.vue'
// import App from './App-3-practice-6.vue'

// import App from "./App-4-components.vue";
// import App from "./App-4-components-2-prop-in-event-out.vue";
// import App from "./App-4-components-3-prop-v-model.vue";
// import App from "./App-4-components-4-prop-computed.vue";
// import App from "./App-4-components-5-provide-inject.vue";

// import App from "./App-4-components-slot.vue";
// import App from "./App-4-components-slot-2.vue";
// import App from "./App-4-components-slot-3.vue";

// import App from "./App-5-life-cycle.vue";
// import App from "./App-5-practice-1.vue";
// import App from "./App-5-practice-2.vue";
// import App from "./App-5-practice-3.vue";

// import App from "./App-6-vuex.vue";

import App from "./App-7-vue-router.vue";

import store from "./store";
import router from "./router";

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
