import { createStore } from "vuex";
import user from "./user";

const store = createStore({
    state: { 
        count: 0,
    },
    getters: { 
        countState: (state) => state.count 
    },
    mutations: {  
        SET_COUNT(state, value) {
            state.count = value;
        },
        INCREMENT_COUNT(state, value) {
            state.count += value;
        },
        DECREMENT_COUNT(state, value) {
            state.count -= value;
        }, 
    },
    actions: { 
        async setCount(context, value) {
            try {
                console.log("paramters: ", value);
                // 模擬 fetch，本地測試用
                console.log("模擬發送API請求....")
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({ ok: true, json: () => ({ number: Math.floor(Math.random() * 1000) + 1 }) })
                    }, 1000)
                })
                if (!response.ok) {
                    throw new Error('Fetch failed')
                }
                const data = await response.json()
                context.commit("SET_COUNT", data.number)
            } catch (err) {
                console.log(err);
            } finally {
            }
        },
    },
    modules: {
        user: user
    },
});

export default store;
