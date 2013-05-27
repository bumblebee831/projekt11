/*jslint white:false, onevar:true, undef:true, nomen:true, eqeqeq:true, plusplus:true, bitwise:true, regexp:true, newcap:true, immed:true, strict:false, browser:true */
/*global jQuery:false, document:false, location:false */

(function ($) {
    $(document).ready(function () {
        if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
            // it's not realistic to think we can deal with all the bugs
            // of IE 6 and lower. Fortunately, all this is just progressive
            // enhancement.
            return;
        }
        var $container = $('#isotope-container');
        $container.isotope({
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            },
            layoutMode : 'masonry',
            resizable: false,
            animationEngine: 'best-available'
        });
        if ($('#isotope-container').length) {
            $container.isotope({filter: '*'});
            var selectionLinks = $('a[data-appui="contentfilter"]');
            var current = '';
            $('a[data-appui="contentfilter"]').click(function (e) {
                e.preventDefault();
                current = $(this);
                selectionLinks.not(current).removeClass('active');
                if ($('#clear-filter').length === 0) {
                    var target = $(this).parents('ul.navTree');
                    var url = $(location).attr('hash');
                    var htmlString = '<li class="navTreeItem visualNoMarker" id="clear-filter">' +
                        '<a data-appui="contentfilter" data-filter=".teppiche" href="' + url +
                        '">Alles anzeigen</a>' +
                        '</li>';
                    target.prepend(htmlString);
                }
                $(this).addClass('active');
                var selector = $(this).data('filter');
                $container.isotope({filter: selector});
            });
        }
    });
}(jQuery));