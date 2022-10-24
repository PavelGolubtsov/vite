<template>
    <div>
        <h2>Количество: {{ COUNT }}</h2>
        <button @click="DECRIMENT">-</button>
        <button @click="INCREMENT">+</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'VuexView',
    computed:
        mapGetters([
            'COUNT',
        ]),
    methods:
        mapActions([
            'DECRIMENT',
            'INCREMENT',
        ]),
}
</script>
