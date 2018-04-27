import RandomCountCard from './RandomCountCard.vue';
export default RandomCountCard;
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('random-count-card', RandomCountCard);
}