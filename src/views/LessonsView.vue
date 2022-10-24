<template>
    <div class="home">
        <h1>Уроки</h1>
        <table class="table" style="width: 100%;">
            <thead class="table-secondary">
                <tr>
                    <th style="width: 15%">№</th>
                    <th style="width: 15%">ID</th>
                    <th style="width: auto">Описание урока</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(lesson, index) in GET_LESSONS.data" :key="lesson.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ lesson.id }}</td>
                    <td>{{ lesson.discriptions }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'LessonsView',
    data() {
        return {

        }
    },
    components: {

    },
    computed:
        mapGetters([
            'GET_LESSONS',
        ]),
    methods:
        mapActions([
            'GET_LESSONS_API',
        ]),
    mounted() {
        this.GET_LESSONS_API()
            // .then((response) => {
            //     this.GET_LESSONS_API = response.data
            // })
    }
}
</script>

<style scoped>
.table{
    width: 100%;
}
.table thead tr th{
    text-align: left;
}
</style>
