/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * dynmap.js - Dynamic Image Mapping Script
 *     This script allows dynamic html image mapping for images with variable
 *     size. Dynamic mapping can be used in conjunction with static mapping.
 *     Requires JQuery. Compatible with all major browsers, and IE 8 and up.
 *
 *     To make an <area> tag dynamic, add the 'dynmap' css class. When this 
 *     class is used, coordinates are calculated using percentages. Valid 
 *     values are between 0 and 1. Therefore, the bottom right hand corner of
 *     an image would be (1, 1) and the center would be (0.5, 0.5).
 *
 *     For circular dynamic mapping, the radius length can be calculated
 *     based on a percentage of either the image's height or width. To specify
 *     which of these is desired, add either the 'rad-ht' or 'rad-wd' CSS
 *     classes.
 *
 * Ex: Rectangular area mapped to the upper-left quadrant of an image.
 *
 *   <area shape='rect' class='dynmap' coords='0,0, 0.5,0.5' href='#'>
 *
 * Ex: Circular area mapped with radius of 1/4 the width of the image,
 *     centered at 30% width, 70% height.
 *
 *   <area shape='circle' class='dynmap rad-wd' coords='0.3,0.7, 0.25' href='#'>
 *
 * Author: Caitlyn Finn
 * Date Revised: 11 Aug 2014
 * Language: Javascript/JQuery
 * Requirements: JQuery
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
 
$( window ).load(function() {
    $('area.dynmap').each(function(){
   
    var imheight = $('img[usemap="#' + $(this).parent().attr('name') + '"]').height(),
        imwidth = $('img[usemap="#' + $(this).parent().attr('name') + '"]').width(),
        ca = $(this).attr('coords').split(","),
        newcoords = '';
   
        for(var i = 0; i < ca.length; i++){ ca[i] /= 1000; }
   
        switch($(this).attr('shape')){
            case 'rect':
                newcoords = (imwidth * ca[0]) + ',' + (imheight * ca[1]) + ',' + (imwidth * ca[2]) + ',' + (imheight * ca[3]);
                break;
            case 'circle':
                var raddim = ($(this).hasClass('rad-ht') ? imheight :
                $(this).hasClass('rad-wd') ? imwidth : 0);
                newcoords = (imwidth * ca[0]) + ',' + (imheight * ca[1]) + ',' + (raddim * ca[2]);
                break;
            case 'poly':
                jQuery.each(ca, function(index, value){
                    newcoords += (value * (index % 2 == 0 ? imwidth : imheight)) + ',';
                });
                break;
        }
        $(this).attr('coords', newcoords);
    });
});
