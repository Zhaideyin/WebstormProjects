/**
 * Created by tongbu on 2017/3/16 0016.
 */

var SERVER_URL="http://10.190.3.8:8080";
function formatDate(ns){
    var unixTimestamp = new Date(ns) ;
    return  unixTimestamp.getFullYear() + "." + (unixTimestamp.getMonth() + 1) + "." + unixTimestamp.getDate() + "" ;
}
