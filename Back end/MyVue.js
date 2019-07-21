//import Vue from 'vue';
//import VueCarousel from 'vue-carousel';

//Vue.use(VueCarousel);

//const buildSlideMarkup = (count) => {
//    let slideMarkup = '';
//    for (var i = 1; i <= count; i++) {
//        slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
//    }
//    return slideMarkup;
//};

//new Vue({
//    el: '#example',
//    components: {
//        'carousel': VueCarousel.Carousel,
//        'slide': VueCarousel.Slide
//    },
//    template: '<div><carousel paginationActiveColor="#42b983" paginationColor="#b2ebd1" paginationSize="5" easing="linear" speed="300">' + buildSlideMarkup(10) + '</carousel></div>'
//});
//new Vue({
//    el: '#v1',
//    data: {
//        active: false
//    }
//})

new Vue({
    //el: '#v1',
    //data: {
    //    active: false
    //},
    el: '#app',
    data () {
        return {
            items: [
              {
                  src: ''

              }
            ]
        }
    }
})
var vm = new Vue({
    el: '#v1',
    data: {  
    },
    // define methods under the `methods` object
    methods: {
        greet: function (event) {
            // `this` inside methods point to the Vue instance
            alert('Hello ' + this.name + '!')
            // `event` is the native DOM event
            //alert(event.target.tagName)
        }
    }
})
// you can invoke methods in JavaScript too
//vm.greet() // -> 'Hello Vue.js!'



//$(document).ready(function () {
//    getImdbData();
//})
//function getImdbData() {
//    var filmInfo = {};
//    $.ajax({
//        url: "http://www.theimdbapi.org/api/find/movie?title=transformers&year=2007",
//        beforeSend: function () {
//            $('.filmPage').hide();
//            console.log("unsuccessful :(");
//        },
//        success: function (result) {
//            console.log("successful :D");
//            $('.filmPage').css('opacity', 0)
//                .slideDown('slow')
//                .animate(
//                    { opacity: 1 },
//                    { queue: false, duration: 'slow' }
//                );
//            filmInfo = result[0];
//            updateInfo(filmInfo)
//        }
//    })
//}
//function updateInfo(data) {
//    $('#row1-1p').append(String(data.rating) + " of 10 with " + String(data.rating_count) + " vote");
//    $('#film-name').append(" دانلود فیلم " + data.title);
//    $('.row2-1').append(String(data.year));
//    $('.row2-2').append(String(data.length) + "دقیقه");
//    $('.row2-3').append(String(data.metadata.languages));
//    $('.row2-5').append(String(data.metadata.countries));
//    $('#row3-p').append(String(data.storyline));
//    $('.row4-3').append(String(data.stars));
//    $('.row2-4').append(String(data.content_rating));
//    $('.row4-1').append(String(data.director));
//    $('.row4-2').append(String(data.writers));
//    $('.Genre1').append(String(data.genre[0]));
//    $('.Genre2').append(String(data.genre[1]));
//    $('.Genre3').append(String(data.genre[2]));
//    //var x = data.poster.large;
//    $('.film-pic').css("background-image", url(data.poster.large));
//}

