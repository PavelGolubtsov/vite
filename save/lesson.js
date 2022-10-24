import axios from "axios"
export default {
    actions: {
        async GET_LESSONS_API({commit}) {
            try {
                const lessons = await axios('http://departament/api/v1', {
                    method: 'GET'
                })
                // 'SET_LESSONS' для мутации
                commit('SET_LESSONS', lessons.data)
                return lessons
            } catch (error) {
                console.log(error)
                return error
            }
        },
    },
    // содержит состояние данных приложения
    state: {
        lessons: []
    },
    // методы доступа к состоянию и предварительной обработки,
    // если это необходимо (вычисление данных, фильтрация и т.д.)
    getters: {
        GET_LESSONS: state => {
            return state.lessons
        },
        GET_LESSONS_COUNT(state) {
            return state.lessons.length
        }
    },
    // содержат методы, которые влияют на состояние
    mutations: {
        SET_LESSONS: (state, lessons) => {
            state.lessons = lessons
        },
    },
}
