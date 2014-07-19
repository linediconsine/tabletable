/**
 * Created by Marco Amato on 19/07/14.
 */

$.fn.tabletable = function() {

    var titles = [];

    this.find('tr').eq(0).find('th').each(function(i){
        titles[i] = $(this).html();
    });

    this.find('tr').each(function(_i){

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
    $(this).addClass('tabletable')
    return this;
}