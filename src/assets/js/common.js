/**
 * @Project: SupplierAssistant
 * @FileName: common
 * @Author: wayne
 * @Date: 2019/3/21
 */

//获取code的函数
function getQueryString(name) {
  //"i"对大小写不敏感
  //赋值name=code ,则 reg 模式= "(^|&)code=([^&]*)(&|$)"
  //[^&]	匹配除了&以外的任意字符
  //* 零个或多个
  //如&code=sdjsbudf$jdb&sdjksd&sdnsdn  ，则匹配出&code=sdjsbudf$jdb&
  //如code=sdjsbudf$jdb&sdjksd&sdnsdn  ，则匹配出code=sdjsbudf$jdb&
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");//主要是取得code=xxxxx到下一个&之间的值
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

//拼接url传参字符串
function perapara(objvalues, isencode) {
  let parastring = "";
  for (let key in objvalues) {
    isencode = isencode || false;
    if (isencode) {
      parastring += (key + "=" + encodeURIComponent(objvalues[key]) + "&");
    }
    else {
      parastring += (key + "=" + objvalues[key] + "&");
    }
  }
  parastring = parastring.substr(0, parastring.length - 1);
  return parastring;
}

// 设置本地存储
function getLocalStorage(name) {
  var storage = window.localStorage;
  var value = storage.getItem(name);
  return value;
}
function setLocalStorage(name, value) {
  var storage = window.localStorage;
  if (storage.getItem(name) != null && storage.getItem(name) != undefined) {
    window.localStorage.removeItem(name);
  }
  storage.setItem(name, value);
}
function removeStorage(name) {
  var storage = window.localStorage;
  var value = storage.getItem(name);
  if (value != null && value != undefined) {
    storage.removeItem(name);
  }
}

//设置session
function getSessionStorage(name) {
  var storage = window.sessionStorage;
  var value = storage.getItem(name);
  return value;
}
function setSessionStorage(name, value) {
  var storage = window.sessionStorage;
  if (storage.getItem(name) != null && storage.getItem(name) != undefined) {
    window.sessionStorage.removeItem(name);
  }
  storage.setItem(name, value);
}
function removeSessionStorage(name) {
  var value = getSessionStorage(name);
  if (value != null && value != undefined) {
    window.sessionStorage.removeItem(name);
  }
}

function getUser(){
  var loUser = JSON.parse(getSessionStorage("User"));
  if (loUser!=null) loUser=loUser.User;
  return loUser;
}
function getRate(){
  return 	getLocalStorage("Rate_KRW")||0;
}

function getOauth(){
  return JSON.parse(getLocalStorage("Oauth"));
}

var getwxappid = function() {
  return "wx3aaaa986c2ae49eb";
};

export {perapara,getQueryString,getLocalStorage,setLocalStorage,removeStorage,getSessionStorage,setSessionStorage,
  removeSessionStorage,getUser,getRate,getOauth,getwxappid}
