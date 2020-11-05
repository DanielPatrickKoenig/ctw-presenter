import {ref} from 'vue';
import {TweenLite} from 'gsap';
export default function slideTemplate(props){
    const titleText = ref(props.title);
    const pics = ref(props.images);
    const bulletPoints = ref(prepBullets());
    animateInSubtitles();
    function prepBullets(){
        let bps = [];
        for(let i = 0; i < props.bullets.length; i++){
            bps.push({text: props.bullets[i], alpha: i * -1});
        }
        return bps;
    }
    function animateInSubtitles(){
        for(let i = 0; i < bulletPoints.value.length; i++){
            TweenLite.to(bulletPoints.value, 1 + i, {alpha: 1});
        }
    }
    return {titleText, pics, bulletPoints};
}