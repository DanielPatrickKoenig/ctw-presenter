<template>
    <div>
        <h2>
            {{titleText}}
        </h2>
        <ul>
            <li v-for="(bullet, i) in bulletPoints" :key="'bullet'+i.toString()" :style="{opacity: bullet.alpha}" v-html="bullet.text">
            </li>
        </ul>
        <div v-if="markup != ''" class="markup" v-html="markup" />
        <div class="cover"></div>
    </div>
</template>

<script>
import slideTemplate from '../setups/slideTemplate.js';
export default {
    props: {
        title: {
            type: String,
            default: 'TITLE'
        },
        images:{
            type: Array,
            default: () => {return []}
        },
        bullets:{
            type: Array,
            default: () => {return []}
        },
        markup:{
            type: String,
            default: ''
        }
    },
    setup(props){
        return {...slideTemplate(props)};
    }
}
</script>

<style scoped>
h2, ul, div.markup{
    width:1000px;
}
h2{
    font-size:2.5em;    
    margin: 25px auto;
}
ul, div.markup{
    padding:0;
    margin: 0 auto;
}
ul > li{
    display:block;
    margin:12px;
    padding:0;
    font-size:1.6em;
}
div.cover{
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
}
</style>