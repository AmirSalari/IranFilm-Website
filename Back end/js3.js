import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

const buildSlideMarkup = (count) => {
    let slideMarkup = '';
    for (var i = 1; i <= count; i++) {
        slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
    }
    return slideMarkup;
};

new Vue({
    el: '#example',
    components: {
        'carousel': VueCarousel.Carousel,
        'slide': VueCarousel.Slide
    },
    template: '<div><carousel>' + buildSlideMarkup(10) + '</carousel></div>'
});