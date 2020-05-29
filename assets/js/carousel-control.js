jQuery(document).ready(function(){
    jQuery('#question-carousel').carousel({
        interval:false,
        wrap:false
    });

    jQuery('#question-carousel').on('slide.bs.carousel', function (e) {
        if (jQuery(this).find(".active :checked").length<=0) {
            $('#msgModal').find('.modal-body p').text(jQuery(this).find(".active .quote-title").attr('msg'));
            $('#msgModal').modal('show');
            jQuery('#question-carousel').carousel('pause');
            return false;
        }
        jQuery('#question-carousel').carousel('cycle');
    });
});