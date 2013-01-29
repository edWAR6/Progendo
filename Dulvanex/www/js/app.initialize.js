
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
    //console.log("GET_IPAD_UUID -> "+uuid);
    return uuid;
}

//
// PhoneGap is ready
//
function onDeviceReady() {
    
    InitializeLoadingAnimation();
    
    initFastButtons();
    
    //onLocalStorageDeleteAll();
    
    $("#video1").bind("ended", function() {
        $('#video1').hide();
        $('.atrasInicioVideos_buttons').fadeIn();
        $('#submit_play_video1').fadeIn();
    });    

    $("#video2").bind("ended", function() {  
        $('#video2').hide();                                     
        $('.atrasInicioVideos_buttons').fadeIn();
        $('#submit_play_video2').fadeIn();
    });
    initDragAndDrop();
}

function initDragAndDrop(){

    $( "div.draggable" ).draggable({
        appendTo: "div.droppable",
        revert: 'invalid',
        stop: function() {
            if (!$(this).hasClass('reverted')) {
                if ($(this).hasClass('pills1')) {
                    $(this).width(450);
                    $(this).css('left', 140);
                } else{
                    $(this).width(405);
                    $(this).css('left', 160);
                };    
            };
        },
        start: function() {
            $(this).removeClass('reverted');
            if ($(this).hasClass('pills1')) {
                $(this).width(85);
            } else{
                $(this).width(105);
            };
        },
        revert: function (event, ui) {
            if (event === false) {
                $(this).addClass('reverted');
            }
            var newOriginalPosition = {};
            if ($(this).hasClass('pills1')) {
                newOriginalPosition = {
                    top: '-24.5em',
                    left: '60em'
                };
            } else {
                newOriginalPosition = {
                    top: '-13em',
                    left: '60em'
                };
            };
            $(this).data("draggable").originalPosition = newOriginalPosition;
            return !event;
        } 
    });
    $( "div.droppable" ).droppable({
        accept: "div.draggable",
        drop: function(event, ui) {
            if (!ui.draggable.data("originalPosition")) {
                ui.draggable.data("originalPosition",
                    ui.draggable.data("draggable").originalPosition);
            }
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
            $(this).removeClass('reverted');
            if ($(this).hasClass('pills1')) {
                $(this).width(85);
            } else{
                $(this).width(105);
            };
        }
    });
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