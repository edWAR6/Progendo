
//to prevent dragging, uncomment this section
function preventBehavior(e)
{
    e.preventDefault();
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function alertDismissed() {
    console.log("alertDismissed..");
}

function iPadAlert(title, message, buttonText)
{
	navigator.notification.alert(
                                 message,  // message
                                 alertDismissed,         // callback
                                 title,            // title
                                 buttonText                  // buttonName
                                 );
}

function GET_IPAD_UUID() {
    var uuid = device.uuid;
    console.log("GET_IPAD_UUID -> "+uuid);
    return uuid;
}

function init(){
    document.addEventListener("deviceready", onDeviceReady, false);
    console.log('Init');
}
//
// PhoneGap is ready
//
function onDeviceReady() {
    InitializeLoadingAnimation();
    
    // initFastButtons();
    
    //onLocalStorageDeleteAll();
    
    //console.log("IPAD_UUID()  -> "+GET_IPAD_UUID());
    
    //console.log("onDeviceReady");
    //navigator.geolocation.getCurrentPosition(Geolocation, onError);
    
    //
    //Video ended adding listeners
    //
    $("#video_apariencia_cierre").bind("ended", function() {
                                       
                                       $('#submit_goto_inicio_from_apariencia_cierre').fadeIn("slow");
                                       $('#submit_goto_apariencia_3_from_apariencia_cierre').fadeIn("slow");
                                       $('#submit_play_video_apariencia_cierre').fadeIn("slow");
	});
    
    $("#video1").bind("ended", function() {
        $('#submit_inicio_video').fadeIn("slow");
        $('#submit_play_video').fadeIn("slow");
    });

    $( "div.draggable.t" ).draggable( { 
        revert: function (event, ui) {
            var newOriginalPosition = {};
            if ($(this).hasClass('a')) {
                newOriginalPosition = {
                    top: '3.4em',
                    left: '7.3em'
                };
            } else if ($(this).hasClass('b')) {
                newOriginalPosition = {
                    top: '-3.3em',
                    left: '19.2em'
                };
            } else if ($(this).hasClass('c')) {
                newOriginalPosition = {
                    top: '-10.5em',
                    left: '28.2em'
                };
            } else if ($(this).hasClass('d')) {
                newOriginalPosition = {
                    top: '-18.5em',
                    left: '38.6em'
                };
            };
            //overwrite original position
            $(this).data("draggable").originalPosition = newOriginalPosition;
            //return boolean
            return !event;
        } 
    });
    $( "div.drop_row").droppable({
        disabled: true,
        drop: function(event, ui) {
            if (!ui.draggable.data("originalPosition")) {
                ui.draggable.data("originalPosition",
                    ui.draggable.data("draggable").originalPosition);
            }
        }
    });
    flipAction();
    enableCalendar();
}

function flipAction(){
    $( "div.flip" ).bind('click.flip', function() {
        $this = $(this);
        if ($this.hasClass('off')) {
            revertAllFlip();
            resetPosition();
            $this = $(this);
            var img = '<img class="flipped" src="images/h1_b.png"/>';
            if ($this.hasClass('a')) {
                img = '<img class="flipped" src="images/h1_b.png"/>';
                $('div.drop_row.a').droppable( "option", "disabled", false );
            }else if ($this.hasClass('b')) {
                img = '<img class="flipped" src="images/5ht2a_b.png"/>';
                $('div.drop_row.b').droppable( "option", "disabled", false );
            }else if ($this.hasClass('c')) {
                img = '<img class="flipped" src="images/d2_b.png"/>';
                $('div.drop_row.c').droppable( "option", "disabled", false );
            };
            $this.flip({
                color: "#F6803E",
                content: img,
                direction:"lr",
                speed: 150
            });
            $this.removeClass('off');
            $this.addClass('on');
        }else if ($this.hasClass('on')) {
            $this.revertFlip();
            $this.removeClass('on');
            $this.addClass('off');
            resetPosition();
        };
    });
}

function revertAllFlip(){
    $( "div.flip.on" ).each(function(){
        $this = $(this);
        $this.revertFlip();
        $this.removeClass('on');
        $this.addClass('off');
    });
    $('div.drop_row').droppable( "option", "disabled", true );
}

function resetPosition(){
    $( 'div.drop_row' ).droppable( "option", "disabled", true );
    var newOriginalPosition = {};
    $( "div.draggable.t" ).each(function(){
        $this = $(this);
        if ($this.hasClass('a')) {
            newOriginalPosition = {
                top: '3.4em',
                left: '7.3em'
            };
        } else if ($this.hasClass('b')) {
            newOriginalPosition = {
                top: '-3.3em',
                left: '19.2em'
            };
        } else if ($this.hasClass('c')) {
            newOriginalPosition = {
                top: '-10.5em',
                left: '28.2em'
            };
        } else if ($this.hasClass('d')) {
            newOriginalPosition = {
                top: '-18.5em',
                left: '38.6em'
            };
        };
        $this.animate( newOriginalPosition );
    });
}

var cloneCont = 0;

function enableCalendar(){
    $( '#calendar' ).droppable({ 
        disabled: false,
        drop: function(event, ui) {
        if (!ui.draggable.data("originalPosition")) {
            ui.draggable.data("originalPosition",
                ui.draggable.data("draggable").originalPosition);
        }
    }
    });
    $( "div.draggable.cc" ).draggable( { 
        connectToSortable: '#calendar',
        // helper: 'clone',
        revert: function (event, ui) {
            var newOriginalPosition = {};
            if ($(this).hasClass('e')) {
                newOriginalPosition = {
                    top: '46.3em',
                    left: '28.8em'
                };
            } else if ($(this).hasClass('f')) {
                newOriginalPosition = {
                    top: '45.2em',
                    left: '36.9em'
                };
            } else if ($(this).hasClass('g')) {
                newOriginalPosition = {
                    top: '45.2em',
                    left: '43.2em'
                };
            } else if ($(this).hasClass('h')) {
                newOriginalPosition = {
                    top: '44.5em',
                    left: '50.1em'
                };
            };
            //overwrite original position
            $(this).data("draggable").originalPosition = newOriginalPosition;
            //return boolean
            return !event;
        } 
    });
}

function revertDraggable($selector) {
    $selector.each(function() {
        var $this = $(this),
            position = $this.data("originalPosition");

        if (position) {
            $this.animate({
                left: position.left,
                top: position.top
            }, 500, function() {
                $this.data("originalPosition", null);
            });
        }
    });
}

function onDeviceMinimized() {
    
    //
    //console.log("onDeviceMinimized() -> $('#container #####').is(':visible) -> "+$('#container input.submit#submit_play_video').is(":visible"));
    //
    
    if($('#container #video_div').is(":visible"))
    {
        if(!$('#container input.submit#submit_play_video').is(":visible"))
        {
            SaveLogInfo(VIDEO_SCREEN_ID,PAUSE_VIDEO);
        }
    }
    
    //console.log("onDeviceMinimized() -> div "+$('#container #apariencia_cierre_div').is(":visible"));
    //console.log("onDeviceMinimized() -> butt "+$('#container input.submit#submit_play_video_apariencia_cierre').is(":visible"));
    
    if($('#container #apariencia_cierre_div').is(":visible"))
    {
        if(!$('#container input.submit#submit_play_video_apariencia_cierre').is(":visible"))
        {
            SaveLogInfo(APARIENCIA_CIERRE_SCREEN_ID,PAUSE_VIDEO_2);
        }
    }
    
}

function onDeviceResumed() {
    //
    console.log("onDeviceResumed()");
    if($('#container #video_div').is(":visible"))
    {
        if(!$('#container input.submit#submit_play_video').is(":visible"))
        {
            //PLAY VIDEO AGAIN
            var myVideo=document.getElementById("video1");
            myVideo.play();
            SaveLogInfo(VIDEO_SCREEN_ID,PLAY_VIDEO);
        }
    }
    //
    //
    //
    if($('#container #apariencia_cierre_div').is(":visible"))
    {
        if(!$('#container input.submit#submit_play_video_apariencia_cierre').is(":visible"))
        {
            //PLAY VIDEO AGAIN
            var myVideo=document.getElementById("video_apariencia_cierre");
            myVideo.play();
            SaveLogInfo(APARIENCIA_CIERRE_SCREEN_ID,PLAY_VIDEO_2);
        }
    }
    
    //navigator.geolocation.getCurrentPosition(LogAppMin, onError);
    
}

// onSuccess Geolocation
//
function Geolocation(position) {
    console.log("Geolocation");
    
    //var timestamp = new Date(position.timestamp);
    var timestamp = new Date("DD/MM/YY hh:mm:ss");
    
    var element = document.getElementById('geolocation');
    element.innerHTML = '<h3>Open Event</h3>Latitude: '           + position.coords.latitude              + '<br />' +
    'Longitude: '          + position.coords.longitude             + '<br />' +
    'Altitude: '           + position.coords.altitude              + '<br />' +
    'Accuracy: '           + position.coords.accuracy              + '<br />' +
    'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
    'Heading: '            + position.coords.heading               + '<br />' +
    'Speed: '              + position.coords.speed                 + '<br />' +
    'Timestamp: '          + timestamp         + '<br />';
    
    //var screenId = document.getElementById('screenId').value;
    
    //SaveLogInfo(screenId,"Pantalla Abierta", timestamp);
}

function InitializeLoadingAnimation()
{
    var cl = new CanvasLoader('canvasloader-container');
    cl.setColor('#ffffff'); // default is '#000000'
    cl.setDiameter(200); // default is 40
    cl.setDensity(160); // default is 40
    cl.setRange(0.5); // default is 1.3
    cl.setSpeed(10); // default is 2
    cl.setFPS(11); // default is 24
    cl.show(); // Hidden by default
}