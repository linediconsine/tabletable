/**
 * Created by Marco Amato on 19/07/14.
 */

$.fn.tabletable = function() {

    _tabletable = this;

    function getWindowDim() {
        var dim = {
            width: 0, height: 0
        };
        if (document.body && document.body.offsetWidth) {
            dim.width = document.body.offsetWidth;
            dim.height = document.body.offsetHeight;

        }
        if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
            dim.width = document.documentElement.offsetWidth;
            dim.height = document.documentElement.offsetHeight;

        }
        if (window.innerWidth && window.innerHeight) {
            dim.width = window.innerWidth;
            dim.height = window.innerHeight;

        }
        return dim;
    }


    var titles = [];

    _tabletable.find('tr').eq(0).find('th').each(function(i){
          titles[i] = $(this).html();
    });

    _tabletable.find('tr').each(function(_i){

        if(_i == 0){
            $(this).find('th').each(function(i){
                titles[i] = $(this).html();
            });
        }else{
            $(this).find('td').each(function(i){
                $(this).attr('data-title',titles[i]);
            });
        }
    });

    if (_tabletable.width() > (getWindowDim().width -20) && (!_tabletable.hasClass('linearize'))){
        _tabletable.addClass('linearize');
    }else{
        _tabletable.removeClass('linearize');
    }

    /*
    if(!_tabletable.hasClass('tabletable')){
        $( window ).on( "orientationchange", function( event ) {

            _tabletable.tabletable();
        });
        _tabletable.addClass('tabletable');
    }
    */


    return this;
}