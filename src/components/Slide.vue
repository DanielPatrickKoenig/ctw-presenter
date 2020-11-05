<template>
    <div>
        <h2>
            {{titleText}}
        </h2>
        <ul>
            <li v-for="(bullet, i) in bulletPoints" :key="'bullet'+i.toString()" :style="{opacity: bullet.alpha}">
                {{bullet.text}}
            </li>
        </ul>
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
        }
    },
    setup(props){
        return {...slideTemplate(props)};
    }
}
</script>

<style scoped>
h2, ul{
    width:1000px;
}
h2{
    font-size:2.5em;    
    margin: 25px auto;
}
ul{
    padding:0;
    margin: 0 auto;
}
ul > li{
    display:block;
    margin:12px;
    padding:0;
    font-size:1.6em;
}
</style>