$(function(){

  $('form').submit(function(){ return false; });   
  
  //-- Index
  $('#submit_goto_dolor_from_index').click(function(){
    SaveLogInfo(INDEX_SCREEN_ID,GO_TO_DOLOR_SCREEN);
    $('#index_div').fadeOut();
    $('#dolor_div').fadeIn();
  });

  $('#submit_goto_psiquiatra_from_index').click(function(){
    SaveLogInfo(INDEX_SCREEN_ID,GO_TO_PSIQUIATRIA_SCREEN);
    $('#index_div').fadeOut();
    $('#psiquiatria_div').fadeIn();
  });
  //--

  //-- Siguiente
  $('#submit_goto_dolorCronico1_from_dolor').click(function(){
     SaveLogInfo(DOLOR_SCREEN_ID,GO_TO_DOLORCRONICO1_SCREEN);
    $('#dolor_div').fadeOut();
    $('#dolorCronico1_div').fadeIn();
  });

  $('#submit_goto_dolorCronico2_from_dolorCronico1').click(function(){
     SaveLogInfo(DOLORCRONICO1_SCREEN_ID,GO_TO_DOLORCRONICO2_SCREEN);
    $('#dolor_div').fadeOut();
    $('#dolorCronico1_div').fadeOut();
    $('#dolorCronico2_div').fadeIn(function(){
    });
  });

  $('#submit_goto_dolorCronico3_from_dolorCronico2').click(function(){
     SaveLogInfo(DOLORCRONICO2_SCREEN_ID,GO_TO_DOLORCRONICO3_SCREEN);
    $('#dolor_div').fadeOut();
    $('#dolorCronico2_div').fadeOut();   
    $('#dolorCronico3_div').fadeIn();
    $('#imagen_dolorCronico1').hide(); 
    $('#imagen_dolorCronico2').hide(); 
  });
  //--

  //-- Anterior
  $('#submit_goto_dolor_from_dolorCronico1').click(function(){
     SaveLogInfo(DOLORCRONICO1_SCREEN_ID,GO_TO_DOLOR_SCREEN);
    $('#dolorCronico1_div').fadeOut();
    $('#dolor_div').fadeIn();
  });

  $('#submit_goto_dolorCronico1_from_dolorCronico2').click(function(){
     SaveLogInfo(DOLORCRONICO2_SCREEN_ID,GO_TO_DOLORCRONICO1_SCREEN);
    $('#dolorCronico2_div').fadeOut();
    $('#dolorCronico1_div').fadeIn();
    $('#imagen_dolorCronico1').hide();  
    $('#imagen_dolorCronico2').hide();  
  });

  $('#submit_goto_dolorCronico2_from_dolorCronico3').click(function(){
     SaveLogInfo(DOLORCRONICO3_SCREEN_ID,GO_TO_DOLORCRONICO2_SCREEN);
    $('#dolorCronico3_div').fadeOut();
    $('#dolorCronico2_div').fadeIn(function(){
    });
  });
  
  $('#submit_goto_psiquiatriaVideos_from_video1').click(function(){
     SaveLogInfo(VIDEO1_SCREEN_ID,GO_TO_PSIQUIATRIAVIDEOS_SCREEN);
    $('#video1_div').fadeOut();
    $('#psiquiatriaVideos_div').fadeIn();
  });
  
  $('#submit_goto_psiquiatriaVideos_from_video2').click(function(){
     SaveLogInfo(VIDEO2_SCREEN_ID,GO_TO_PSIQUIATRIAVIDEOS_SCREEN);
    $('#video2_div').fadeOut();
    $('#psiquiatriaVideos_div').fadeIn();
  });
  //--

  //-- a index
  $('#submit_goto_inicio_from_esquemaTitulacion').click(function(){
     SaveLogInfo(ESQUEMATITULACION_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#esquemaTitulacion_div').fadeOut();
     $('#index_div').fadeIn();
   });

  $('#submit_goto_inicio_from_titulacion1').click(function(){
    revertDraggable($("div.draggable"));
     SaveLogInfo(TITULACION1_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#titulacion1_div').fadeOut();
     $('#index_div').fadeIn();
   });

  $('#submit_goto_inicio_from_titulacion2').click(function(){
    revertDraggable($("div.draggable"));
     SaveLogInfo(TITULACION2_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#titulacion2_div').fadeOut();
     $('#index_div').fadeIn();
   });

  $('#submit_goto_inicio_from_dolor').click(function(){
     SaveLogInfo(DOLOR_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#dolor_div').fadeOut();
     $('#index_div').fadeIn();
   });

  $('#submit_goto_inicio_from_psiquiatria').click(function(){
     SaveLogInfo(PSIQUIATRIA_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#psiquiatria_div').fadeOut();
     $('#index_div').fadeIn();
   });

  $('#submit_goto_inicio_from_dolorCronico1').click(function(){
     SaveLogInfo(DOLORCRONICO1_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#dolorCronico1_div').fadeOut();
     $('#index_div').fadeIn();
   });

  $('#submit_goto_inicio_from_dolorCronico2').click(function(){
     SaveLogInfo(DOLORCRONICO2_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#dolorCronico3_div').fadeOut();
     $('#index_div').fadeIn();
   });

  $('#submit_goto_inicio_from_dolorCronico3').click(function(){
     SaveLogInfo(DOLORCRONICO3_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#dolorCronico3_div').fadeOut();
     $('#index_div').fadeIn();
   });

  $('#submit_goto_inicio_from_psiquiatriaVideos').click(function(){
     SaveLogInfo(PSIQUIATRIAVIDEOS_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#psiquiatriaVideos_div').fadeOut();
     $('#index_div').fadeIn();
   });    

  $('#submit_goto_inicio_from_video1').click(function(){
     SaveLogInfo(VIDEO1_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#video1_div').fadeOut();
     $('#index_div').fadeIn();
   });    

  $('#submit_goto_inicio_from_video2').click(function(){
     SaveLogInfo(VIDEO2_SCREEN_ID,GO_TO_INDEX_SCREEN);
     $('#video2_div').fadeOut();
     $('#index_div').fadeIn();
   });    
  //----

  $('#submit_goto_psiquiatriaVideos_from_psiquiatria').click(function(){
     SaveLogInfo(PSIQUIATRIA_SCREEN_ID,PSIQUIATRIAVIDEOS_SCREEN_ID);
     $('#psiquiatria_div').fadeOut();
     $('#psiquiatriaVideos_div').fadeIn();
   });  

  $('#submit_goto_video1_from_psiquiatriaVideos').click(function(){
     SaveLogInfo(PSIQUIATRIAVIDEOS_SCREEN_ID,GO_TO_VIDEO1_SCREEN);
     $('#psiquiatriaVideos_div').fadeOut();
     $('#video1_div').fadeIn();
   });  

  $('#submit_goto_video2_from_psiquiatriaVideos').click(function(){
     SaveLogInfo(PSIQUIATRIAVIDEOS_SCREEN_ID,GO_TO_VIDEO2_SCREEN);
     $('#psiquiatriaVideos_div').fadeOut();
     $('#video2_div').fadeIn();
   });

  $('#submit_play_video1').click(function(){
     SaveLogInfo(VIDEO1_SCREEN_ID,'PLAY_VIDEO1');
    $('.atrasInicioVideos_buttons').fadeOut();
    $('#submit_play_video1').fadeOut(function(){
      $('#video1').fadeIn(function(){
            $('#video1').get(0).play();
      });
    });
   });

  $('#submit_play_video2').click(function(){
     SaveLogInfo(VIDEO2_SCREEN_ID,'PLAY_VIDEO2');
    $('.atrasInicioVideos_buttons').fadeOut();
    $('#submit_play_video2').fadeOut(function(){
      $('#video2').fadeIn(function(){
            $('#video2').get(0).play();
      });
    });
   });   


  $('#submit_mostrar_imagen_dolorCronico1').click(function(){
     SaveLogInfo(DOLORCRONICO2_SCREEN_ID,'SHOW_IMAGE_1');
    $('#imagen_dolorCronico2').fadeOut(function(){
      $('#imagen_dolorCronico1').fadeIn();
    });
  });


  $('#submit_mostrar_imagen_dolorCronico2').click(function(){
     SaveLogInfo(DOLORCRONICO2_SCREEN_ID,'SHOW_IMAGE_2');
    $('#imagen_dolorCronico1').fadeOut(function(){
      $('#imagen_dolorCronico2').fadeIn();
    });
  });

  $('#submit_goto_esquemaTitulacion_from_dolor').click(function(){
     SaveLogInfo(DOLOR_SCREEN_ID,GO_TO_ESQUEMATITULACION_SCREEN);
     $('#dolor_div').fadeOut();
     $('#esquemaTitulacion_div').fadeIn();
   });  

  $('#submit_goto_titulacion1_from_esquemaTitulacion').click(function(){
     SaveLogInfo(ESQUEMATITULACION_SCREEN_ID,GO_TO_TITULACION1_SCREEN);
     $('#esquemaTitulacion_div').fadeOut();
     $('#titulacion1_div').fadeIn();
   });  

  $('#submit_goto_titulacion2_from_esquemaTitulacion').click(function(){
     SaveLogInfo(ESQUEMATITULACION_SCREEN_ID,GO_TO_TITULACION2_SCREEN);
     $('#esquemaTitulacion_div').fadeOut();
     $('#titulacion2_div').fadeIn();
   });
  
  //=======================================================
  // LOG SYNCHRONIZATION METHODS
  //=======================================================
  
  $('#submit_goto_log').click(function(){
    SaveLogInfo(INDEX_SCREEN_ID,GO_TO_SYNC_SCREEN);
    $('#index_div').slideUp();
    $('#log_div').slideDown();
  });
  
  $('#submit_synchronize').click(function(){
     SaveLogInfo(SYNC_SCREEN_ID,APP_CONFIG_ACTION_SYNC_CLICK);
     $('#log_div').slideUp();
     $('#loading_animation_div').slideDown();
     console.log("onSynchronizeClick()");
     setTimeout(function() { iPadSynchronization(); }, 888);
   });
  
  $('#submit_synchronize2').click(function(){                 
    SaveLogInfo(SYNC_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#log_div').slideUp();
    $('#index_div').slideDown();
  });
});