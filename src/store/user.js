const user = {
    namespaced: true,
    state: { 
        name: "Fabian", 
        age: 18 
    },
    getters: { 
        nameState: (state) => state.name,
        ageState: (state) => state.age 
    },
    mutations: { 
        SET_NAME: (state, value) => state.name = value,
        SET_AGE: (state, value) => state.age = value
    },
    actions: { 
        setName: (context, value) => {
            context.commit("SET_NAME", value)
        },
        setAge: async (context, value) => {
            try {
                console.log("paramters: ", value);
                // 模擬 fetch，本地測試用
                console.log("模擬發送API請求....")
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({ ok: true, json: () => ({ number: Math.floor(Math.random() * 100) + 1 }) })
                    }, 1000)
                })
                if (!response.ok) {
                    throw new Error('Fetch failed')
                }
                const data = await response.json()
                console.log(data)
                context.commit("SET_AGE", data.number)
            } catch (err) {
                console.log(err);
            } finally {
            }
        }
    },
}
export default user