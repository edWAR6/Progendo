
// RETURN TIMESTAMP --> DAYMONTHYEARHOURMINSEC
function TIMESTAMP_NOW()
{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;//getMonth() -> 0-11
    var year = date.getFullYear();
    //console.log(day+"/"+month+"/"+year);
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var timestamp = "";
    
    if(day - 10 < 0)
        timestamp += "0"+day+"";
    else
        timestamp += day+"";
    
    if(month - 10 < 0)
        timestamp += "0"+month+"";
    else
        timestamp += month+"";
    
    if(year - 10 < 0)
        timestamp += "0"+year+"";
    else
        timestamp += year+"";
    
    if(hour - 10 < 0)
        timestamp += "0"+hour+"";
    else
        timestamp += hour+"";
    if(min - 10 < 0)
        timestamp += "0"+min+"";
    else
        timestamp += min+"";
    if(sec - 10 < 0)
        timestamp += "0"+sec;
    else
        timestamp += sec;
    
    return timestamp;
}

function SaveLogInfo(screenId, action)
{
    
    var previousInfo = RetrieveLogInfo(screenId);
    var CSVItem = screenId + "-" + action + "-" + TIMESTAMP_NOW();
    //console.log("CSVExist(screenId,value) => "+CSVExist(CSVItem,previousInfo));
    
    if(!CSVExist(CSVItem,previousInfo))
    {

        var value = "";
        //console.log("previousInfo => "+previousInfo);
    
        if(previousInfo == null)
            value = CSVItem;
        else
            value = CSVItem + "," + previousInfo;
    
        console.log("SaveLogInfo() ==> screenId:"+ screenId + " --> " + CSVItem);
        
        LocalStorageCreateKey(screenId, value);
    }
    else
    {
        console.log("already exist => "+CSVItem);
    }
}

function CSVExist(CSVItem, CSV)
{
    if(CSV != null)
    {
    var logs = CSV.split(',');
    
    for (i = 0; i < logs.length; ++i) {
        //console.log(logs[i].split('-') + " == "  + CSVItem);
        if(logs[i] == CSVItem)
            return true;
    }
    }
    return false;
}

function CreateULForLog(log)
{
    var i;
    var html = "<ul>";
    for (i = 0; i < log.length; ++i) {
        html += "<li>";
        // do something with `substr[i]`
        html += log[i];
        html += "</li>";
    }
    html += "</ul>";
    return html;
}

function DisplayAllLogs()
{
    console.log("DisplayAllLogs()");
    
    var html = "";
    
    var log = RetrieveLogInfo(INDEX_SCREEN_ID).split(',');
    html += CreateULForLog(log);
    
     log = RetrieveLogInfo(ACTIVAS_SCREEN_ID).split(',');
    html += CreateULForLog(log);
    
     log = RetrieveLogInfo(APARIENCIA_SCREEN_ID).split(',');
    html += CreateULForLog(log);
    
     log = RetrieveLogInfo(BIENESTAR_SCREEN_ID).split(',');
    html += CreateULForLog(log);
    
     log = RetrieveLogInfo(VIDEO_SCREEN_ID).split(',');
    html += CreateULForLog(log);
    
     log = RetrieveLogInfo(CALIDAD_SCREEN_ID).split(',');
    html += CreateULForLog(log);
    
    document.getElementById("serverResponseSection").innerHTML = html;
    
}

function RetrieveLogInfo(screenId)
{
    //console.log("RetrieveLogInfo() --> screenId:"+screenId);
    var value = LocalStorageGetValue(screenId);
    //console.log("value --> "+value);
    return value;
}

function ClearLogInfo(screenId)
{
    //console.log("ClearLogInfo for screenId --> "+screenId);
    LocalStorageDeleteKey(screenId);
    //console.log("clear value --> "+value);
    return true;
}

// onSuccess Geolocation
//
function LogScreenOpen(position) {
    var timestamp = TIMESTAMP_NOW();//new Date(position.timestamp);
    document.getElementById('geolocation').innerHTML = '<h3>Open Event</h3>Latitude: '           + position.coords.latitude              + '<br />' +
    'Longitude: '          + position.coords.longitude             + '<br />' +
    'Altitude: '           + position.coords.altitude              + '<br />' +
    'Accuracy: '           + position.coords.accuracy              + '<br />' +
    'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
    'Heading: '            + position.coords.heading               + '<br />' +
    'Speed: '              + position.coords.speed                 + '<br />' +
    'Timestamp: '          + timestamp         + '<br />';
    
    //var screenId = document.getElementById('screenId').value;
    
    SaveLogInfo(INDEX_SCREEN_ID,APP_CONFIG_ACTION_SCREEN_OPEN);
}

function LogAppMin(position) {
    var timestamp = TIMESTAMP_NOW();//new Date(position.timestamp);
    document.getElementById('geolocation').innerHTML = '<h3>App Minimized Event</h3>Latitude: '           + position.coords.latitude              + '<br />' +
    'Longitude: '          + position.coords.longitude             + '<br />' +
    'Altitude: '           + position.coords.altitude              + '<br />' +
    'Accuracy: '           + position.coords.accuracy              + '<br />' +
    'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
    'Heading: '            + position.coords.heading               + '<br />' +
    'Speed: '              + position.coords.speed                 + '<br />' +
    'Timestamp: '          + timestamp         + '<br />';
    
    //var screenId = document.getElementById('screenId').value;
    
    SaveLogInfo(INDEX_SCREEN_ID,APP_CONFIG_ACTION_APP_MINIMIZED);
}