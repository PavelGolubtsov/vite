export default {
    // содержит состояние данных приложения
    // синтаксис объекта, повторно объект не используется
    /*
    state: {
        name: 'Pavel',
    },
    */
    // синтаксис функции, можно использовать повторно
    state() {
        return {
            count: 0,
        }
    },
    // методы доступа к состоянию и предварительной обработки,
    // если это необходимо (вычисление данных, фильтрация и т.д.)
    getters: {
        COUNT: state => {
            return state.count
        },
        SUM: state => {
            return state.sum
        },
    },
    // содержат методы, которые влияют на состояние state
    mutations: {
        INCREMENT (state) {
            state.count++
        },
        DECRIMENT (state) {
            state.count--
        },
    },
    // методы, используемые для запуска мутаций и если надо выполнения асинхронного кода
    actions: {
        INCREMENT ({ commit }) {
            commit('INCREMENT')
        },
        DECRIMENT ({ commit }) {
            commit('DECRIMENT')
        },
    },
}
