/*
 * 
 * 函数杂烩（不关联egret）。
 * 
 */
namespace gdeint {

    export function randomNums(maxNum,cnt) //range:[1,maxNum]
    {
        var ret;
        ret = new Array();

        var i;
        for(i = 0;i < cnt;++i) {
            var tmp;
            tmp = Math.round(1 + ((maxNum - 1) * Math.random()));


            var j = 0;


                for(j = 0;j < i;++j) {
                    if(ret[j] == tmp) // 有重复，重新生成 tmp 。
                    {
                        tmp = Math.round(1 + ((maxNum - 1) * Math.random()));
                        j = -1; // 重新查找是否有重复。
                    }
                }
            
            ret.push(tmp);
        }

        return ret;
    }

    export function randomNums_ts(maxNum: number,cnt: number): Array<number> {
        var ret: Array<number>;
        ret = [];

        var tmp = randomNums(maxNum,cnt);

        var i: number;
        for(i = 0;i < tmp.length;++i) {
            ret[i] = tmp[i];
        }

        return ret;
    }

    export function tailContain(str1,str2) {
        if(null == str2) {
            return true;
        }

        if(null == str1) {
            return false;
        }

        if(str1.length < str2.length) {
            return false;
        }

        var strStart = str1.length - str2.length;
        var strLen = str2.length;

        if(str1.substr(strStart,strLen) == str2) {
            return true;
        }

        return false;
    }

    // 对Date的扩展，将 Date 转化为指定格式的String   
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
    // 例子：   
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18

    (<any>(Date.prototype)).Format = function(fmt)
    { //author: meizz   
      var o = {   
        "M+" : this.getMonth()+1,                 //月份   
        "d+" : this.getDate(),                    //日   
        "h+" : this.getHours(),                   //小时   
        "m+" : this.getMinutes(),                 //分   
        "s+" : this.getSeconds(),                 //秒   
        "q+" : Math.floor((this.getMonth()+3)/3), //季度   
        "S"  : this.getMilliseconds()             //毫秒   
      };   
      if(/(y+)/.test(fmt))   
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
      for(var k in o)   
        if(new RegExp("("+ k +")").test(fmt))   
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
      return fmt;   
    }

    /*
    * 函数杂烩（通用函数）。
    */ 

    export function objectSize(the_object) {
        /* function to validate the existence of each key in the object to get the number of valid keys. */ 

        var object_size = 0;
        var key;
        for (key in the_object){ 
            if (the_object.hasOwnProperty(key)) { 
                object_size++; 

            } 
        }

        return object_size;
    }


    export function objectValues(the_object) {
        /* function to validate the existence of each key in the object to get the number of valid keys. */ 
        
        var ret = "";
        var key;
        for (key in the_object){ 
            if (the_object.hasOwnProperty(key)) 
            { 
                ret += "" + key + "=>" + eval("the_object." + key);
                ret += "\n";
                
            } 
        }

        return ret;
    }

    export function seconds2MinSec(secs:number) {
        var ret:string;
        var minPart:number = Math.floor(secs/60);
        var secPart:number = secs%60;

        if(minPart<10) {
            ret = "0"+minPart;
        }
        else {
            ret = ""+minPart;
        }

        ret += ":";

        if(secPart<10) {
            ret += ("0"+secPart);
        }
        else {
            ret += (""+secPart);
        }

        return ret;
    }
}