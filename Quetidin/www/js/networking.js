function getJSONData($type, $url, $param) {
    var $objJSON;
    //console.log("type "+$type+"...url "+$url+"...param "+$param);
    
    $.ajax({
           
           type: $type,
           url: $url,
           data: ($param) ? $param : '',
           contentType: "application/json; charset=utf-8",
           //contentType: "application/x-www-form-urlencoded",
           dataType: "json",
           async: false,
           success: function (response) {
           //console.log("getJSONData response --> success");
           $objJSON = response;
           },
           error: function (jqXHR, textStatus, errorThrown) {
            //showErrorMsg(jqXHR.status);
           console.log("url -> "+$url);
           
            console.log("getJSONData response --> error : getJSONData ( " + jqXHR.status + " textStatus: " + textStatus + " errorThrown : " + errorThrown+")");
            //showAlert("Network Problems","No action could be perfomed");
            $objJSON = null;
            
           }
           });
    
    return $objJSON;
}

function iPadSynchronization()
{
    $('#loading_animation_div').slideUp();
    $('#index_div').slideDown();
    //
    var serverErrors = 0;
    
    serverErrors += SynchronizeLogInfo(INDEX_SCREEN_ID, RetrieveLogInfo(INDEX_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(CIERRE_SCREEN_ID, RetrieveLogInfo(CIERRE_SCREEN_ID));
    
    serverErrors += SynchronizeLogInfo(EMBARAZO_1_SCREEN_ID, RetrieveLogInfo(EMBARAZO_1_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(EMBARAZO_2_SCREEN_ID, RetrieveLogInfo(EMBARAZO_2_SCREEN_ID));
    
    serverErrors += SynchronizeLogInfo(ADOLECENTE_1_SCREEN_ID, RetrieveLogInfo(ADOLECENTE_1_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(ADOLECENTE_2_SCREEN_ID, RetrieveLogInfo(ADOLECENTE_2_SCREEN_ID));
    
    serverErrors += SynchronizeLogInfo(FERTIL_1_SCREEN_ID, RetrieveLogInfo(FERTIL_1_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(FERTIL_2_SCREEN_ID, RetrieveLogInfo(FERTIL_2_SCREEN_ID));
    
    serverErrors += SynchronizeLogInfo(MENOPAUSIA_1_SCREEN_ID, RetrieveLogInfo(MENOPAUSIA_1_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(MENOPAUSIA_2_SCREEN_ID, RetrieveLogInfo(MENOPAUSIA_2_SCREEN_ID));
    
    serverErrors += SynchronizeLogInfo(ETAPAS_1_SCREEN_ID, RetrieveLogInfo(ETAPAS_1_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(ETAPAS_2_SCREEN_ID, RetrieveLogInfo(ETAPAS_2_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(ETAPAS_3_SCREEN_ID, RetrieveLogInfo(ETAPAS_3_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(ETAPAS_4_SCREEN_ID, RetrieveLogInfo(ETAPAS_4_SCREEN_ID));
    serverErrors += SynchronizeLogInfo(ETAPAS_5_SCREEN_ID, RetrieveLogInfo(ETAPAS_5_SCREEN_ID));
    
    $('#loading_animation_div').slideUp();
    $('#index_div').slideDown();
    //
    if(serverErrors == 0 )
    
        iPadAlert('Notification', 'iPad Synchronized','Ok');
    else
        iPadAlert('Notification', 'iPad Synchronized Feedback('+serverErrors+')','Ok');
}

function SynchronizeLogInfo(screenId, data) {
    
    //console.log("(SynchronizeLogInfo) screenId:"+screenId+" --> data:"+data);
    
    var serverErrors = 0;
    
    if (data == null)
    {
        console.log("screenId:"+screenId+" --> Empty");
        return serverErrors;

    }
    else
    {
    
        
        var CSVLog = data.split(',');
        
        var unprocessed = '';
        
        //console.log("CSVLog.length -> "+CSVLog.length);
        
        for(var i = 0; i < CSVLog.length; i++) {
            
            smallBuffer = CSVLog[i];
            
            //console.log("smallBuffer -> "+smallBuffer);
            
            //
            //BREAK IF BUFFER IS EMPTY
            //NO REASON TO SYNCHRONIZE WITH SERVER
            //
            if(smallBuffer == "")
                continue;
            
                //console.log("alert -> ");
            var config_url = SYNC_SERVER_URL+"/"+GET_IPAD_UUID()+"/"+APP_ID;
            
            var finalURL = config_url + "/" +smallBuffer;
    
            ///console.log('Trying to connect webservice --> '+finalURL);
    
            var $type = 'GET',
            $url = finalURL,
            $data = "",
            $objJSON;
    
            //console.log('getJSONData --> '+i);
            $objJSON = getJSONData($type, $url, $data);
            
            //console.log('END getJSONData.');

            if (!$objJSON) {
                
                if(unprocessed == '')
                    unprocessed = smallBuffer;
                else
                    unprocessed +=  "," + smallBuffer;
                
                console.log("Network Problems -> No action could be perfomed->Record no."+i+":SCREEN_ID."+ screenId);
                console.log("unprocessed -> "+unprocessed);
                serverErrors++;

            } else {
        
                //console.log($objJSON);
                //console.log('Server Response --> '+$objJSON);
                //
                if($objJSON == false)
                {

                    if(unprocessed == '')
                        unprocessed = smallBuffer;
                    else
                        unprocessed +=  "," + smallBuffer;
                    
                    console.log("$objJSON","$objJSON == 'False' -> Record no."+i+":SCREEN_ID."+ screenId);
                    serverErrors++;

                }
                else if($objJSON == true)
                {
                    //LocalStorageDeleteKey(screenId);
                    console.log("Processed- > Record no."+i+" -> screenId:"+ screenId);
                    //document.getElementById("synchServerResponseSection").innerHTML=document.getElementById("synchServerResponseSection").innerHTML + ".";
                }
                else
                {
                    if(unprocessed == '')
                        unprocessed = smallBuffer;
                    else
                        unprocessed +=  "," + smallBuffer;
                    
                    console.log("Server Response Error! Record no."+i+" -> screenId:"+ screenId);
                    serverErrors++;
            
                    //document.getElementById("synchServerResponseSection").innerHTML = $objJSON;
                }
        
            }
            
            
        }
        
        console.log("Total Unprocessed Records for screenId:"+screenId+" -> '"+unprocessed+"'");
        LocalStorageUpdateValue(screenId, unprocessed);
        
        if(serverErrors == 0)
        {
            //iPadAlert('Notification', 'iPad Synchronized!','Go Back');
            //document.getElementById("synchServerResponseSection").innerHTML = "screen synched!";
        }
        else
        {
            var details = "Overview ScreenId:"+ screenId +  "Synced records: "+(CSVLog.length-serverErrors) + " Total of records: "+CSVLog.length;

            console.log("Errors on synchronization -> " + details);

            //iPadAlert('Synchronization Error', details, 'Go Back');
        }
        
        
        
        return  serverErrors;
    }
}
