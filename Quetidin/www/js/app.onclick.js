$(function(){

  //=======================================================================================
  //=======================================================================================
  // FORM SUBMIT DISABLE POSST ACTION
  //=======================================================================================
  //=======================================================================================
  
 $('form').submit(function(){ return false; });
  
  //=======================================================================================
  //=======================================================================================
  // INDEX SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================

  $('#submit_goto_qproducto').click(function(){
    SaveLogInfo(INDEX_SCREEN_ID,GO_TO_QPRODUCTO_SCREEN);
    $('#index_div').slideUp();
    $('#qproducto_div').slideDown();
  });

  $('#submit_goto_versatilidad').click(function(){
    SaveLogInfo(INDEX_SCREEN_ID,GO_TO_VERSATILIDAD_SCREEN);
    $('#index_div').slideUp();
    $('#versatilidad_div').slideDown();
  });

  $('#submit_goto_titulacion').click(function(){
    SaveLogInfo(INDEX_SCREEN_ID,GO_TO_VERSATILIDAD_SCREEN);
    $('#index_div').slideUp();
    $('#titulacion_div').slideDown();
  });

  //=======================================================================================
  //=======================================================================================
  // QPRODUCTO SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================

  $('#submit_goto_index_from_qproducto').click(function(){
    SaveLogInfo(QPRODUCTO_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#qproducto_div').slideUp();
    $('#index_div').slideDown();
  });

  //=======================================================================================
  //=======================================================================================
  // VERSATILIDAD SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================

  $('#submit_goto_index_from_versatilidad').click(function(){
    SaveLogInfo(VERSATILIDAD_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#versatilidad_div').slideUp();
    $('#index_div').slideDown();
  });

  $('#submit_goto_versatilidad_a').click(function(){
    SaveLogInfo(VERSATILIDAD_SCREEN_ID,GO_TO_VERSATILIDAD_A_SCREEN);
    $('#versatilidad_div').slideUp();
    $('#versatilidad_a_div').slideDown();
  });

  //=======================================================================================
  //=======================================================================================
  // VERSATILIDAD_A SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================

  $('#submit_goto_versatilidad_from_versatilidad_a').click(function(){
    revertDraggable($("div.draggable"));
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_VERSATILIDAD_SCREEN);
    $('#versatilidad_a_div').slideUp();
    $('#versatilidad_div').slideDown();
  });

  $('#submit_goto_index_from_versatilidad_a').click(function(){
    revertDraggable($("div.draggable"));
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#versatilidad_a_div').slideUp();
    $('#index_div').slideDown();
  });

  $('#submit_goto_versatilidad_b').click(function(){
    revertDraggable($("div.draggable"));
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_VERSATILIDAD_B_SCREEN);
    $('#versatilidad_a_div').slideUp();
    $('#versatilidad_b_div').slideDown();
  });

  //=======================================================================================
  //=======================================================================================
  // VERSATILIDAD_B SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================  

  $('#submit_goto_index_from_versatilidad_b').click(function(){
    SaveLogInfo(VERSATILIDAD_B_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#versatilidad_b_div').slideUp();
    $('#index_div').slideDown();
  });

  //=======================================================================================
  //=======================================================================================
  // TITULACION SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================

  $('#submit_goto_index_from_titulacion').click(function(){
    SaveLogInfo(TITULACION_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#titulacion_div').slideUp();
    $('#index_div').slideDown();
  });

  $('#submit_goto_paciente_1').click(function(){
    SaveLogInfo(TITULACION_SCREEN_ID,GO_TO_PACIENTE_1_SCREEN);
    $('#titulacion_div').slideUp();
    $('#paciente_1_div').slideDown();
  });

  $('#submit_goto_paciente_2').click(function(){
    SaveLogInfo(TITULACION_SCREEN_ID,GO_TO_PACIENTE_2_SCREEN);
    $('#titulacion_div').slideUp();
    $('#paciente_2_div').slideDown();
  });
  
  //=======================================================================================
  //=======================================================================================
  // PACIENTE_1 SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================

  $('#submit_goto_titulacion_from_paciente_1').click(function(){
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_VERSATILIDAD_SCREEN);
    $('#paciente_1_div').slideUp();
    $('#titulacion_div').slideDown();
  });

  $('#submit_goto_index_from_paciente_1').click(function(){
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#paciente_1_div').slideUp();
    $('#index_div').slideDown();
  });

  $('#submit_goto_titulacion_fin_from_paciente_1').click(function(){
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_VERSATILIDAD_B_SCREEN);
    $('#paciente_1_div').slideUp();
    $('#titulacion_fin_div').slideDown();
  });

  //=======================================================================================
  //=======================================================================================
  // PACIENTE_2 SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================

  $('#submit_goto_titulacion_from_paciente_2').click(function(){
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_VERSATILIDAD_SCREEN);
    $('#paciente_2_div').slideUp();
    $('#titulacion_div').slideDown();
  });

  $('#submit_goto_index_from_paciente_2').click(function(){
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#paciente_2_div').slideUp();
    $('#index_div').slideDown();
  });

  $('#submit_goto_titulacion_fin_from_paciente_2').click(function(){
    SaveLogInfo(VERSATILIDAD_A_SCREEN_ID,GO_TO_VERSATILIDAD_B_SCREEN);
    $('#paciente_2_div').slideUp();
    $('#titulacion_fin_div').slideDown();
  });

  //=======================================================================================
  //=======================================================================================
  // TITULACION_FIN SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================

  $('#submit_goto_index_from_titulacion_fin').click(function(){
    revertDraggable($("div.draggable"));
    SaveLogInfo(TITULACION_FIN_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#titulacion_fin_div').slideUp();
    $('#index_div').slideDown();
  });

  $('#submit_goto_si_se_puede').click(function(){
    revertDraggable($("div.draggable"));
    SaveLogInfo(TITULACION_FIN_SCREEN_ID,GO_TO_SI_SE_PUEDE_SCREEN);
    $('#titulacion_fin_div').slideUp();
    $('#si_se_puede_div').slideDown();
  });

  //=======================================================================================
  //=======================================================================================
  // SI_SE_PUEDE SCREEN CLICKS
  //=======================================================================================
  //=======================================================================================
  
  $('#submit_goto_index_from_si_se_puede').click(function(){
    SaveLogInfo(SI_SE_PUEDE_SCREEN_ID,GO_TO_INDEX_SCREEN);
    $('#si_se_puede_div').slideUp();
    $('#index_div').slideDown();
  });
});