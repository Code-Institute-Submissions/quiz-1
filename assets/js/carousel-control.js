jQuery(document).ready(function(){
    jQuery('#question-carousel').carousel({
        interval:false,
        wrap:false
    });

    jQuery('#question-carousel').on('slide.bs.carousel', function (e) {
        if (jQuery(this).find(".active :checked").length<=0) {
            jQuery('#question-carousel').carousel('pause');
            return false;
        }
        jQuery('#carousel-personal-loan').carousel('cycle');
    });
});