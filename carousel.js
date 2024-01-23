api.on('revolution.slide.onloaded', function () {
    jQuery(document).trigger('post-load');
    jQuery(this).find('li').each(function () {
        var title = jQuery(this).find('div.Photography-Textblock').text();
        jQuery(this).find('div.slidelink a').attr('title', title);
    });
});