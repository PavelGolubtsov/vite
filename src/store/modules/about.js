export default {
    // содержит состояние данных приложения
    state: {
        name: 'Pavel',
    },
    // методы доступа к состоянию и предварительной обработки,
    // если это необходимо (вычисление данных, фильтрация и т.д.)
    getters: {
        NAME: state => {
            return state.name
        }
        //allName(state) {
            //return state.name
        //},
    },
    // содержат методы, которые влияют на состояние
    mutations: {
        SET_NAME: (state, payload) => {
            state.name = payload
        },
        //updateName(state, name) {
            //state.name = name
        //},
    },
    // методы, используемые для запуска мутаций и выполнения асинхронного кода
    actions: {
        SET_NAME: (context, payload) => {
            context.commit('SET_NAME', payload)
        },
    },
}
