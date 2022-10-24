<template>
    <div>
        <h2>Это Components AboutComponents</h2>
        <ul>
            <li v-for="(person, index) in peopls" :key="person.index">
                {{ index }}: {{ person }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        peopls: {
            type: Array,
            required: false,
            default: [],
        }
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
</style>