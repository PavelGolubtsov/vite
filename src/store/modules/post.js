export default {
    // методы, используемые для запуска мутаций и выполнения асинхронного кода
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            const posts = await res.json()
            ctx.commit('updatePosts', posts)
        }
    },
    // содержит состояние данных приложения
    state: {
        posts: []
    },
    // методы доступа к состоянию и предварительной обработки,
    // если это необходимо (вычисление данных, фильтрация и т.д.)
    getters: {
        allPosts: state => {
            return state.posts
        },
        postsCount(state) {
            return state.posts.length
        }
    },
    // содержат методы, которые влияют на состояние
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
}
