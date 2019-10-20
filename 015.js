(function($){"use strict";var body=$('body');function portfolio_init(){$('.portfolio-content').each(function(){var portfolio_grid_container=$(this),portfolio_grid_container_id=$(this).attr('id'),portfolio_grid=$('#'+portfolio_grid_container_id+' .portfolio-grid'),portfolio_filter=$('#'+portfolio_grid_container_id+' .portfolio-filters'),portfolio_filter_item=$('#'+portfolio_grid_container_id+' .portfolio-filters .filter');if(portfolio_grid){portfolio_grid.shuffle({speed:450,itemSelector:'figure'});$('.site-auto-menu').on("click","a",function(e){portfolio_grid.shuffle('update')});portfolio_filter.on("click",".filter",function(e){portfolio_grid.shuffle('update');e.preventDefault();portfolio_filter_item.parent().removeClass('active');$(this).parent().addClass('active');portfolio_grid.shuffle('shuffle',$(this).attr('data-group'))})}})}
function ajaxLoader(){var ajaxLoadedContent=$('#page-ajax-loaded');function showContent(){ajaxLoadedContent.removeClass('rotateOutDownRight closed');ajaxLoadedContent.show();$('body').addClass('ajax-page-visible')}
function hideContent(){$('#page-ajax-loaded').addClass('rotateOutDownRight closed');$('body').removeClass('ajax-page-visible');setTimeout(function(){$('#page-ajax-loaded.closed').html('');ajaxLoadedContent.hide();$('#page-ajax-loaded').append('<div class="portfolio-preloader"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>')},500)}
$(document).on("click",".site-auto-menu, #portfolio-page-close-button",function(e){e.preventDefault();hideContent()}).on("click",".ajax-page-load",function(){var toLoad=$(this).attr('href')+'?ajax=true';showContent();ajaxLoadedContent.load(toLoad,function(){$('.portfolio-page-carousel').imagesLoaded(function(){$('.portfolio-page-carousel').owlCarousel({smartSpeed:1200,items:1,loop:!0,dots:!0,nav:!0,navText:!1,autoHeight:!0,margin:10})});var $gallery_container=$("#portfolio-gallery-grid");$gallery_container.imagesLoaded(function(){$gallery_container.masonry()});$('.portfolio-page-wrapper .portfolio-grid').each(function(){$(this).magnificPopup({delegate:'a.gallery-lightbox',type:'image',gallery:{enabled:!0}})});lazyVideo()});return!1})}
function lazyVideo(){var youtube=$('.embed-youtube-video'),vimeo=$('.embed-vimeo-video');youtube.each(function(){var video_wrap=$(this),id=$(this).attr('data-embed'),id=id.split('youtube.com/embed/')[1];var thumb_url="//img.youtube.com/vi/"+id+"/0.jpg";$('<img width="100%" src="'+thumb_url+'" />').appendTo($(this));$(this).on("click","div.play-button",function(e){var $video_iframe=$('<iframe class="embed-responsive-item" src="//www.youtube.com/embed/'+id+'?rel=0&showinfo=0&autoplay=1&output=embed" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');$video_iframe.appendTo(video_wrap);$(this).hide()})});vimeo.each(function(){var video_wrap=$(this),id=$(this).attr('data-embed'),id=id.split('vimeo.com/video/')[1];$('<img class="vimeo-thumb" width="100%" src="" />').appendTo($(this));$.getJSON('https://www.vimeo.com/api/v2/video/'+id+'.json?callback=?',{format:"json"},function(data){$(".vimeo-thumb").attr('src',data[0].thumbnail_large)});$(this).on("click","div.play-button",function(e){var $video_iframe=$('<iframe class="embed-responsive-item" src="//player.vimeo.com/video/'+id+'?autoplay=1&loop=1&autopause=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');$video_iframe.appendTo(video_wrap);$(this).hide()})})}
$(function(){$('.contact-form').each(function(){var contact_form_id=$(this).attr('id'),contact_form=$('#'+contact_form_id+'.contact-form');contact_form.validator();contact_form.on('submit',function(e){if(!e.isDefaultPrevented()){$.ajax({type:"POST",url:ajaxurl,data:$(this).serialize()+'&action=aveo_contact_action',success:function(data){var result=JSON.parse(data);var messageAlert='alert-'+result.type;var messageText=result.message;var alertBox='<div class="alert '+messageAlert+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+messageText+'</div>';if(messageAlert&&messageText){contact_form.find('.messages').html(alertBox);if(messageAlert=="alert-success"){$('.contact-form')[0].reset()}}},});return!1}})})});function mobileMenuHide(){var windowWidth=$(window).width(),siteHeader=$('#site_header');if(windowWidth<992){siteHeader.addClass('mobile-menu-hide');setTimeout(function(){siteHeader.addClass('animate')},500)}else{siteHeader.removeClass('animate')}}
function headerHeight(){setTimeout(function(){var windowWidth=$(window).width(),subpages=$('.subpages'),mainContent=$('#main-content');if(windowWidth<992){mainContent.css("padding-top",15);subpages.css("padding-top",15)}else{var header=$('.header'),headerHeight=header.height();if($('.header').hasClass('sticked')){headerHeight=header.height()+40}
mainContent.css("padding-top",headerHeight);subpages.css("padding-top",headerHeight)}},400)}
$(window).on('load',function(){$(".preloader").fadeOut("fast")}).on('resize',function(){mobileMenuHide();headerHeight()}).scroll(function(){var header=$('.header');if($(window).scrollTop()<20){header.removeClass('sticked')}else{header.addClass('sticked')}});$(document).on('ready',function(){var ptPage=$('.subpages');if(ptPage[0]){PageTransitions.init({menu:'ul.site-auto-menu',})}
headerHeight();body.stop().animate({scrollTop:0},500);var $portfolio_container=$(".portfolio-grid"),$gallery_container=$("#portfolio-gallery-grid");$gallery_container.imagesLoaded(function(){$gallery_container.masonry()});$portfolio_container.imagesLoaded(function(){portfolio_init(this)});$('.portfolio-page-carousel').imagesLoaded(function(){$('.portfolio-page-carousel').owlCarousel({smartSpeed:1200,items:1,loop:!0,dots:!0,nav:!0,navText:!1,autoHeight:!0,margin:10})});$(' .portfolio-grid > figure ').each(function(){$(this).hoverdir()});var $container=$(".blog-masonry");$container.imagesLoaded(function(){$container.masonry()});$('.menu-toggle').on("click",function(){$('#site_header').addClass('animate');$('#site_header').toggleClass('mobile-menu-hide')});$('.site-auto-menu').on("click","a",function(e){mobileMenuHide()});$('.text-rotation').owlCarousel({loop:!0,dots:!1,nav:!1,margin:10,items:1,autoplay:!0,autoplayHoverPause:!1,autoplayTimeout:3800,animateOut:'zoomOut',animateIn:'zoomIn'});body.magnificPopup({fixedContentPos:!1,delegate:'a.lightbox',type:'image',removalDelay:300,mainClass:'mfp-fade',image:{titleSrc:'title',gallery:{enabled:!0},},iframe:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'<div class="mfp-title mfp-bottom-iframe-title"></div>'+'</div>',patterns:{youtube:{index:'youtube.com/',id:null,src:'%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}},srcAction:'iframe_src',},callbacks:{markupParse:function(template,values,item){values.title=item.el.attr('title')}},});$('.ajax-page-load-link').magnificPopup({type:'ajax',removalDelay:300,mainClass:'mfp-fade',gallery:{enabled:!0},});$('.portfolio-page-wrapper .portfolio-grid').each(function(){$(this).magnificPopup({delegate:'a.gallery-lightbox',type:'image',gallery:{enabled:!0}})});$('.form-control').val('');$(".form-control").on("focusin",function(){$(this).parent('.form-group').addClass('form-group-focus')});$(".form-control").on("focusout",function(){if($(this).val().length===0){$(this).parent('.form-group').removeClass('form-group-focus')}});$('.pt-page-current').imagesLoaded(function(){$(".preloader").fadeOut()});$('body').append('<div id="page-ajax-loaded" class="page-portfolio-loaded animated rotateInDownRight" style="display: none"><div class="portfolio-preloader"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>');ajaxLoader();lazyVideo()})})(jQuery);var ajaxurl="https://lmpixels.com/wp/aveo/wp-admin/admin-ajax.php";(function(window,document){'use strict';var supportedBrowser=!1,loaded=!1;if(document.querySelector){if(window.addEventListener){supportedBrowser=!0}}
window.wp=window.wp||{};if(!!window.wp.receiveEmbedMessage){return}
window.wp.receiveEmbedMessage=function(e){var data=e.data;if(!data){return}
if(!(data.secret||data.message||data.value)){return}
if(/[^a-zA-Z0-9]/.test(data.secret)){return}
var iframes=document.querySelectorAll('iframe[data-secret="'+data.secret+'"]'),blockquotes=document.querySelectorAll('blockquote[data-secret="'+data.secret+'"]'),i,source,height,sourceURL,targetURL;for(i=0;i<blockquotes.length;i++){blockquotes[i].style.display='none'}
for(i=0;i<iframes.length;i++){source=iframes[i];if(e.source!==source.contentWindow){continue}
source.removeAttribute('style');if('height'===data.message){height=parseInt(data.value,10);if(height>1000){height=1000}else if(~~height<200){height=200}
source.height=height}
if('link'===data.message){sourceURL=document.createElement('a');targetURL=document.createElement('a');sourceURL.href=source.getAttribute('src');targetURL.href=data.value;if(targetURL.host===sourceURL.host){if(document.activeElement===source){window.top.location.href=data.value}}}}};function onLoad(){if(loaded){return}
loaded=!0;var isIE10=-1!==navigator.appVersion.indexOf('MSIE 10'),isIE11=!!navigator.userAgent.match(/Trident.*rv:11\./),iframes=document.querySelectorAll('iframe.wp-embedded-content'),iframeClone,i,source,secret;for(i=0;i<iframes.length;i++){source=iframes[i];if(!source.getAttribute('data-secret')){secret=Math.random().toString(36).substr(2,10);source.src+='#?secret='+secret;source.setAttribute('data-secret',secret)}
if((isIE10||isIE11)){iframeClone=source.cloneNode(!0);iframeClone.removeAttribute('security');source.parentNode.replaceChild(iframeClone,source)}}}
if(supportedBrowser){window.addEventListener('message',window.wp.receiveEmbedMessage,!1);document.addEventListener('DOMContentLoaded',onLoad,!1);window.addEventListener('load',onLoad,!1)}})(window,document);var Formstone=window.Formstone=function(a,b,c){"use strict";function d(a){m.Plugins[a].initialized||(m.Plugins[a].methods._setup.call(c),m.Plugins[a].initialized=!0)}function e(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function f(){var a,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},d=["transition","-webkit-transition"],e={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},f="transitionend",g="",h="",i=c.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in i.style){f=b[a],m.support.transition=!0;break}p.transitionEnd=f+".{ns}";for(a in d)if(d.hasOwnProperty(a)&&d[a]in i.style){g=d[a];break}m.transition=g;for(a in e)if(e.hasOwnProperty(a)&&e[a]in i.style){m.support.transform=!0,h=e[a];break}m.transform=h}function g(){m.windowWidth=m.$window.width(),m.windowHeight=m.$window.height(),q=l.startTimer(q,r,h)}function h(){for(var a in m.ResizeHandlers)m.ResizeHandlers.hasOwnProperty(a)&&m.ResizeHandlers[a].callback.call(b,m.windowWidth,m.windowHeight)}function i(){if(m.support.raf){m.window.requestAnimationFrame(i);for(var a in m.RAFHandlers)m.RAFHandlers.hasOwnProperty(a)&&m.RAFHandlers[a].callback.call(b)}}function j(a,b){return parseInt(a.priority)-parseInt(b.priority)}var k=function(){this.Version="0.8.35",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=b,this.$window=a(b),this.document=c,this.$document=a(c),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=b.navigator.userAgent||b.navigator.vendor||b.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(b.File&&b.FileList&&b.FileReader),history:!!(b.history&&b.history.pushState&&b.history.replaceState),matchMedia:!(!b.matchMedia&&!b.msMatchMedia),pointer:!!b.PointerEvent,raf:!(!b.requestAnimationFrame||!b.cancelAnimationFrame),touch:!!("ontouchstart"in b||b.DocumentTouch&&c instanceof b.DocumentTouch),transition:!1,transform:!1}},l={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(c){}},startTimer:function(a,b,c,d){return l.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(a,10)-parseInt(b,10)},sortDesc:function(a,b){return parseInt(b,10)-parseInt(a,10)},decodeEntities:function(a){var b=m.document.createElement("textarea");return b.innerHTML=a,b.value},parseQueryString:function(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}},m=new k,n=a.Deferred(),o={base:"{ns}",element:"{ns}-element"},p={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"};k.prototype.NoConflict=function(){m.DontConflict=!0;for(var b in m.Plugins)m.Plugins.hasOwnProperty(b)&&(a[b]=m.Conflicts[b],a.fn[b]=m.Conflicts.fn[b])},k.prototype.Plugin=function(c,f){return m.Plugins[c]=function(c,d){function f(b){var e,f,g,i="object"===a.type(b),j=this,k=a();for(b=a.extend(!0,{},d.defaults||{},i?b:{}),f=0,g=j.length;g>f;f++)if(e=j.eq(f),!h(e)){var l="__"+d.guid++,m=d.classes.raw.base+l,n=e.data(c+"-options"),o=a.extend(!0,{$el:e,guid:l,rawGuid:m,dotGuid:"."+m},b,"object"===a.type(n)?n:{});e.addClass(d.classes.raw.element).data(s,o),d.methods._construct.apply(e,[o].concat(Array.prototype.slice.call(arguments,i?1:0))),k=k.add(e)}for(f=0,g=k.length;g>f;f++)e=k.eq(f),d.methods._postConstruct.apply(e,[h(e)]);return j}function g(){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(s)}function h(a){return a.data(s)}function i(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:f.apply(this,arguments)}}function k(c){var e=d.utilities[c]||d.utilities._initialize||!1;return e?e.apply(b,Array.prototype.slice.call(arguments,"object"===a.type(c)?0:1)):void 0}function n(b){d.defaults=a.extend(!0,d.defaults,b||{})}function q(b){for(var c=this,d=0,e=c.length;e>d;d++){var f=c.eq(d),g=h(f)||{};"undefined"!==a.type(g.$el)&&b.apply(f,[g].concat(Array.prototype.slice.call(arguments,1)))}return c}var r="fs-"+c,s="fs"+c.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=e("classes",r,o,d.classes),d.events=e("events",c,p,d.events),d.functions=a.extend({getData:h,iterate:q},l,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_postConstruct:a.noop,_destruct:a.noop,_resize:!1,destroy:g},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:n},d.utilities),d.widget&&(m.Conflicts.fn[c]=a.fn[c],a.fn[s]=i,m.DontConflict||(a.fn[c]=a.fn[s])),m.Conflicts[c]=a[c],a[s]=d.utilities._delegate||k,m.DontConflict||(a[c]=a[s]),d.namespace=c,d.namespaceClean=s,d.guid=0,d.methods._resize&&(m.ResizeHandlers.push({namespace:c,priority:d.priority,callback:d.methods._resize}),m.ResizeHandlers.sort(j)),d.methods._raf&&(m.RAFHandlers.push({namespace:c,priority:d.priority,callback:d.methods._raf}),m.RAFHandlers.sort(j)),d}(c,f),n.then(function(){d(c)}),m.Plugins[c]};var q=null,r=20;return m.$window.on("resize.fs",g),g(),i(),a(function(){m.$body=a("body"),n.resolve(),m.support.nativeMatchMedia=m.support.matchMedia&&!a("html").hasClass("no-matchmedia")}),p.clickTouchStart=p.click+" "+p.touchStart,f(),m}(jQuery,window,document);!function(a,b){"use strict";function c(a,c){if(c){a.$target=this.find(a.target),a.$check=a.target?a.$target:this,a.callback=c,a.styles=h(a.$check),a.timer=null;var d=a.$check.css(b.transition+"-duration"),f=parseFloat(d);b.support.transition&&d&&f?this.on(k.transitionEnd,a,e):a.timer=l.startTimer(a.timer,50,function(){g(a)},!0)}}function d(a){l.clearTimer(a.timer,!0),this.off(k.namespace)}function e(b){b.stopPropagation(),b.preventDefault();var c=b.data,d=b.originalEvent,e=c.target?c.$target:c.$el;c.property&&d.propertyName!==c.property||!a(d.target).is(e)||f(c)}function f(a){a.always||a.$el[j.namespaceClean]("destroy"),a.callback.apply(a.$el)}function g(a){var b=h(a.$check);i(a.styles,b)||f(a),a.styles=b}function h(b){var c,d,e,f={};if(b instanceof a&&(b=b[0]),m.getComputedStyle){c=m.getComputedStyle(b,null);for(var g=0,h=c.length;h>g;g++)d=c[g],e=c.getPropertyValue(d),f[d]=e}else if(b.currentStyle){c=b.currentStyle;for(d in c)c[d]&&(f[d]=c[d])}return f}function i(b,c){if(a.type(b)!==a.type(c))return!1;for(var d in b)if(!b.hasOwnProperty(d)||!c.hasOwnProperty(d)||b[d]!==c[d])return!1;return!0}var j=b.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:c,_destruct:d,resolve:f}}),k=j.events,l=j.functions,m=b.window}(jQuery,Formstone);!function(a,b){"use strict";function c(){y.iterate.call(A,r)}function d(){A=a(v.base)}function e(b){b.youTubeGuid=0,b.$container=a('<div class="'+w.container+'"></div>').appendTo(this),this.addClass([w.base,b.customClass].join(" "));var c=b.source;b.source=null,g(b,c,!0),d()}function f(a){a.$container.remove(),this.removeClass([w.base,a.customClass].join(" ")).off(x.namespace),d()}function g(b,c,d){if(c!==b.source){if(b.source=c,b.responsive=!1,b.isYouTube=!1,"object"===a.type(c)&&"string"===a.type(c.video)){var e=c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);e&&e.length>=1&&(b.isYouTube=!0,b.videoId=e[1])}var f=!b.isYouTube&&"object"===a.type(c)&&(c.hasOwnProperty("mp4")||c.hasOwnProperty("ogg")||c.hasOwnProperty("webm"));if(b.video=b.isYouTube||f,b.playing=!1,b.isYouTube)b.playerReady=!1,b.posterLoaded=!1,k(b,c,d);else if("object"===a.type(c)&&c.hasOwnProperty("poster"))j(b,c,d);else{var g=c;if("object"===a.type(c)){var l,m=[],n=[];for(l in c)c.hasOwnProperty(l)&&n.push(l);n.sort(y.sortAsc);for(l in n)n.hasOwnProperty(l)&&m.push({width:parseInt(n[l]),url:c[n[l]],mq:window.matchMedia("(min-width: "+parseInt(n[l])+"px)")});b.responsive=!0,b.sources=m,g=h(b)}i(b,g,!1,d)}}else b.$el.trigger(x.loaded)}function h(a){var c=a.source;if(a.responsive){c=a.sources[0].url;for(var d in a.sources)a.sources.hasOwnProperty(d)&&(b.support.nativeMatchMedia?a.sources[d].mq.matches&&(c=a.sources[d].url):a.sources[d].width<b.fallbackWidth&&(c=a.sources[d].url))}return c}function i(b,c,d,e){var f=[w.media,w.image,e!==!0?w.animated:""].join(" "),g=a('<div class="'+f+'"><img></div>'),h=g.find("img"),i=c;h.one(x.load,function(){B&&g.addClass(w["native"]).css({backgroundImage:"url('"+i+"')"}),g.fsTransition({property:"opacity"},function(){d||l(b)}).css({opacity:1}),s(b),(!d||e)&&b.$el.trigger(x.loaded)}).attr("src",i),b.responsive&&g.addClass(w.responsive),b.$container.append(g),(h[0].complete||4===h[0].readyState)&&h.trigger(x.load),b.currentSource=i}function j(c,d,e){if(c.source&&c.source.poster&&(i(c,c.source.poster,!0,!0),e=!1),!b.isMobile){var f=[w.media,w.video,e!==!0?w.animated:""].join(" "),g='<div class="'+f+'">';g+="<video",c.loop&&(g+=" loop"),c.mute&&(g+=" muted"),g+=">",c.source.webm&&(g+='<source src="'+c.source.webm+'" type="video/webm" />'),c.source.mp4&&(g+='<source src="'+c.source.mp4+'" type="video/mp4" />'),c.source.ogg&&(g+='<source src="'+c.source.ogg+'" type="video/ogg" />'),g+="</video>",g+="</div>";var h=a(g),j=h.find("video");j.one(x.loadedMetaData,function(){h.fsTransition({property:"opacity"},function(){l(c)}).css({opacity:1}),s(c),c.$el.trigger(x.loaded),c.autoPlay&&o(c)}),c.$container.append(h)}}function k(c,d,e){if(!c.videoId){var f=d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);c.videoId=f[1]}if(c.posterLoaded||(c.source.poster||(c.source.poster="//img.youtube.com/vi/"+c.videoId+"/0.jpg"),c.posterLoaded=!0,i(c,c.source.poster,!0,e),e=!1),!b.isMobile)if(a("script[src*='youtube.com/iframe_api']").length||a("head").append('<script src="//www.youtube.com/iframe_api"></script>'),C){var g=c.guid+"_"+c.youTubeGuid++,h=[w.media,w.embed,e!==!0?w.animated:""].join(" "),j='<div class="'+h+'">';j+='<div id="'+g+'"></div>',j+="</div>";var k=a(j),m=a.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:g,loop:c.loop?1:0,autoplay:1,origin:z.location.protocol+"//"+z.location.host},c.youtubeOptions);c.$container.append(k),c.player&&(c.oldPlayer=c.player,c.player=null),c.player=new z.YT.Player(g,{videoId:c.videoId,playerVars:m,events:{onReady:function(){c.playerReady=!0,c.mute&&c.player.mute(),c.autoPlay&&c.player.playVideo()},onStateChange:function(a){c.playing||a.data!==z.YT.PlayerState.PLAYING?c.loop&&c.playing&&a.data===z.YT.PlayerState.ENDED&&c.player.playVideo():(c.playing=!0,c.autoPlay||c.player.pauseVideo(),k.fsTransition({property:"opacity"},function(){l(c)}).css({opacity:1}),s(c),c.$el.trigger(x.loaded)),c.$el.find(v.embed).addClass(w.ready)},onPlaybackQualityChange:function(){},onPlaybackRateChange:function(){},onError:function(){},onApiChange:function(){}}}),s(c)}else D.push({data:c,source:d})}function l(a){var b=a.$container.find(v.media);b.length>=1&&(b.not(":last").remove(),a.oldPlayer=null)}function m(a){var b=a.$container.find(v.media);b.length>=1&&b.fsTransition({property:"opacity"},function(){b.remove(),delete a.source}).css({opacity:0})}function n(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.pauseVideo();else{var b=a.$container.find("video");b.length&&b[0].pause()}a.playing=!1}}function o(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.playVideo();else{var b=a.$container.find("video");b.length&&b[0].play()}a.playing=!0}}function p(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.mute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!0)}a.playing=!0}a.mute=!0}function q(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.unMute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!1)}a.playing=!0}a.mute=!1}function r(a){if(a.responsive){var b=h(a);b!==a.currentSource?i(a,b,!1,!0):s(a)}else s(a)}function s(a){for(var b=a.$container.find(v.media),c=0,d=b.length;d>c;c++){var e=b.eq(c),f=a.isYouTube?"iframe":e.find("video").length?"video":"img",g=e.find(f);if(g.length&&("img"!==f||!B)){var h=a.$el.outerWidth(),i=a.$el.outerHeight(),j=t(a,g);a.width=j.width,a.height=j.height,a.left=0,a.top=0;var k=a.isYouTube?a.embedRatio:a.width/a.height;a.height=i,a.width=a.height*k,a.width<h&&(a.width=h,a.height=a.width/k),a.left=-(a.width-h)/2,a.top=-(a.height-i)/2,e.css({height:a.height,width:a.width,left:a.left,top:a.top})}}}function t(b,c){if(b.isYouTube)return{height:500,width:500/b.embedRatio};if(c.is("img")){var d=c[0];if("undefined"!==a.type(d.naturalHeight))return{height:d.naturalHeight,width:d.naturalWidth};var e=new Image;return e.src=d.src,{height:e.height,width:e.width}}return{height:c[0].videoHeight,width:c[0].videoWidth}}var u=b.Plugin("background",{widget:!0,defaults:{autoPlay:!0,customClass:"",embedRatio:1.777777,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:e,_destruct:f,_resize:c,play:o,pause:n,mute:p,unmute:q,resize:s,load:g,unload:m}}),v=u.classes,w=v.raw,x=u.events,y=u.functions,z=b.window,A=[],B="backgroundSize"in b.document.documentElement.style,C=!1,D=[];z.onYouTubeIframeAPIReady=function(){C=!0;for(var a in D)D.hasOwnProperty(a)&&k(D[a].data,D[a].source);D=[]}}(jQuery,Formstone);jQuery(document).ready(function($){$('.background-video').background()});jQuery(document).ready(function($){var custom_styles="";function columnStyles(){custom_styles="";$('.fw-col-inner').each(function(){var paddings=$(this).attr('data-paddings');if(typeof paddings!='undefined'||paddings!='0px 0px 0px 0px'){var id=$(this).attr('id'),$custom_style='#'+id+'{ padding: '+paddings+'; } ';custom_styles+=$custom_style}});$('head').append('<style data-styles="aveo-theme-columns-css" type="text/css">'+custom_styles+'</style>')}
columnStyles();$(this).ajaxComplete(function(){$('style[data-styles="aveo-theme-columns-css"]').remove().detach();columnStyles()})});jQuery(document).ready(function($){var custom_styles="";function buttonStyles(){custom_styles="";$('a.btn').each(function(){var margin_top=$(this).attr('data-mtop'),margin_bottom=$(this).attr('data-mbottom');if(typeof margin_top!='undefined'){var id=$(this).attr('id'),$custom_style='#'+id+'.btn { margin-top: '+margin_top+'px; margin-bottom: '+margin_bottom+'px; } ';custom_styles+=$custom_style}});$('head').append('<style data-styles="aveo-theme-button-css" type="text/css">'+custom_styles+'</style>')}
buttonStyles();$(this).ajaxComplete(function(){$('style[data-styles="aveo-theme-button-css"]').remove().detach();buttonStyles()})});(function($){"use strict";$(document).ready(function($){var custom_styles="";function skillsStyles(){$('.skill-container').each(function(){var value=$(this).attr('data-value');if(typeof value!='undefined'){var id=$(this).attr('id'),$custom_style='#'+id+' .skill-percentage { width: '+value+'%; } ';custom_styles+=$custom_style}});$('head').append('<style data-styles="aveo-theme-skills-css" type="text/css">'+custom_styles+'</style>')}
skillsStyles();$(this).ajaxComplete(function(){$('style[data-styles="aveo-theme-skills-css"]').remove().detach();skillsStyles()})})})(jQuery);(function($){"use strict";$(document).ready(function($){var mobile_mode_items="",tablet_mode_items="",items="";$('.testimonials').each(function(){var mobile_mode_items=$(this).attr('data-mobile-items'),tablet_mode_items=$(this).attr('data-tablet-items'),items=$(this).attr('data-items'),id=$(this).attr('id');$("#"+id+".testimonials.owl-carousel").owlCarousel({nav:!0,items:2,loop:!1,navText:!1,margin:10,responsive:{0:{items:mobile_mode_items,},768:{items:tablet_mode_items,},1200:{items:items,}}})})})})(jQuery)