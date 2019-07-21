$('#subBtn').on('click', function () {
    $('.goDownload').hide();
    $('.goSub').hide();
    $('.goNazar').hide();
    $('.goNaghd').hide();
    $('.goAvamel').hide();
    $('.goJavayez').hide();
    $('.goGallery').hide();
    $('.goSub').show();
})
$('#downloadBtn').on('click', function () {
    $('.goDownload').show();
    $('.goSub').hide();
    $('.goNazar').hide();
    $('.goNaghd').hide();
    $('.goAvamel').hide();
    $('.goJavayez').hide();
    $('.goGallery').hide();
    $('.goSub').hide();
})
$('#nazarBtn').on('click', function () {
    $('.goDownload').hide();
    $('.goSub').hide();
    $('.goNazar').show();
    $('.goNaghd').hide();
    $('.goAvamel').hide();
    $('.goJavayez').hide();
    $('.goGallery').hide();
    $('.goSub').hide();
})
$('#naghdBtn').on('click', function () {
    $('.goDownload').hide();
    $('.goSub').hide();
    $('.goNazar').hide();
    $('.goNaghd').show();
    $('.goAvamel').hide();
    $('.goJavayez').hide();
    $('.goGallery').hide();
    $('.goSub').hide();
})
$('#avamelBtn').on('click', function () {
    $('.goDownload').hide();
    $('.goSub').hide();
    $('.goNazar').hide();
    $('.goNaghd').hide();
    $('.goAvamel').show();
    $('.goJavayez').hide();
    $('.goGallery').hide();
    $('.goSub').hide();
})
$('#javayezBtn').on('click', function () {
    $('.goDownload').hide();
    $('.goSub').hide();
    $('.goNazar').hide();
    $('.goNaghd').hide();
    $('.goAvamel').hide();
    $('.goJavayez').show();
    $('.goGallery').hide();
    $('.goSub').hide();
})
$('#galleryBtn').on('click', function () {
    $('.goDownload').hide();
    $('.goSub').hide();
    $('.goNazar').hide();
    $('.goNaghd').hide();
    $('.goAvamel').hide();
    $('.goJavayez').hide();
    $('.goGallery').show();
    $('.goSub').hide();
})

$(document).ready(function () {
    getImdbData();
})
function getImdbData() {
    var filmInfo = {};
    $.ajax({
        url: "http://www.theimdbapi.org/api/find/movie?title=transformers&year=2007",
        beforeSend: function () {
            $('.filmPage').hide();
            console.log("unsuccessful :(");
        },
        success: function (result) {
            console.log("successful :D");
            $('.filmPage').css('opacity', 0)
                .slideDown('slow')
                .animate(
                    { opacity: 1 },
                    { queue: false, duration: 'slow' }
                );
            filmInfo = result[0];
            updateInfo(filmInfo)
        }
    })
}
function updateInfo(data) {
    $('#row1-1p').append(String(data.rating) + " of 10 with " + String(data.rating_count) + " vote");
    $('#film-name').append(" دانلود فیلم " + data.title);
    $('.row2-1').append(String(data.year));
    $('.row2-2').append(String(data.length) + "دقیقه");
    $('.row2-3').append(String(data.metadata.languages));
    $('.row2-5').append(String(data.metadata.countries));
    $('#row3-p').append(String(data.storyline));
    $('.row4-3').append(String(data.stars));
    $('.row2-4').append(String(data.content_rating));
    $('.row4-1').append(String(data.director));
    $('.row4-2').append(String(data.writers));
    $('.Genre1').append(String(data.genre[0]));
    $('.Genre2').append(String(data.genre[1]));
    $('.Genre3').append(String(data.genre[2]));
    //var x = data.poster.large;
    $('.film-pic').css("background-image", url(data.poster.large));
}
