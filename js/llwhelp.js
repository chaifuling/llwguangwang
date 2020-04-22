(function (window) {
  var _llwGuide = '<div id="llw-guide" onclick="llw.guide.closeyd()"></div>';
  var _Browsers = {
    QQ: "mqqbrowser",
    WX: "micromessenger",
  };
  var _Init = function (opt) {
    if (opt) {
      Object.keys(opt).forEach((x) => {
        _options[x] = opt[x];
      });
    }

    Object.keys(_Browsers).forEach((x) => {
      this[x] =
        navigator.userAgent.toLowerCase().indexOf(_Browsers[x]) !== -1
          ? true
          : false;
    });
    this.myWebview =
      (window.webkit && window.webkit.GetInitInfo) || window.NativeAPI;
    this.systemType = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
      ? "IOS"
      : "Android";
  };
  var _options = {
    apkurl:
      "http://oss.pgyer.com/21d9bb3c683c257c85d7f749a0f2a332.apk?auth_key=1575531920-e1190a9e4d9a186cea9ae70525a6f67f-0-d5b5ef39ab270439fb43466926cf4ccd&response-content-disposition=attachment;+filename=LaoLaiWangAndroidClient-release.apk",
    iosUrl:
      "https://itunes.apple.com/cn/app/lao-lai-wang/id967110467?l=en&mt=8",
    schemaUrl: "laolaiapp://com.laolaiwangtech",
    iosschemaUrl: "com.laolai.app://cn.a-eye.MyLaoLai",
    commonUrl: "http://www.laolai.com/mobAuthDown.html",
    jumptoken: "&cusfrom",
    wxtoken: "isllwwx",
    guidedata: {},
    initCallback: "start",
  };
  var _llw = function (opt) {
    _Init.call(this, opt);
  };
  _llw.prototype.getApp = function (name) {
    var baseinfo = JSON.parse(localStorage.getItem("baseInfo"));
    var myvalue = baseinfo ? baseinfo[name] : "607672369039";
    return myvalue;
  };
  _llw.prototype.getCookie = function (name) {
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
  };
  _llw.prototype.setCookie = function (name) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  };
  _llw.prototype.delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = _llw.prototype.getCookie(name);
    if (cval != null)
      document.cookie =
        name +
        "=" +
        cval +
        ";expires=" +
        exp.toGMTString() +
        (window.location.host == "www.laolai.show"
          ? "; path=/llh-bspre"
          : "; path=/llh-bs");
    return true;
  };
  _llw.prototype.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
  };
  _llw.prototype.unescape = function (html) {
    return html
      .replace(html ? /&(?!#?\w+;)/g : /&/g, "&amp;")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  };
  _llw.prototype.Init = function (opt) {
    _Init.call(this, opt);
  };
  _llw.prototype.callShare = function (obj) {
    if (this.myWebview) {
      try {
        this.myWebview.messageHandlers.callShare.postMessage(obj);
      } catch (e) {
        var o = JSON.stringify(obj);
        this.myWebview.callShare(o);
      }
    }
  };

  _llw.prototype.toHerf = function (adress) {
    debugger
    var _a = document.createElement("a");
    var backUrl=window.location.href
    var XbackUrl=""
    for(var i=0;i<window.location.href.length;i++){
      if(backUrl[i] == "&"){
        XbackUrl=XbackUrl+ "*"
      }else{
        XbackUrl=XbackUrl+backUrl[i]
      }
    }
    _a.setAttribute(
      "href",
        llw.api.options.articleurl +
        adress +
        `&backUrl=${XbackUrl}`
    );
    _a.setAttribute("id", "startTelMedicine");
    // 防止反复添加
    if (document.getElementById("startTelMedicine")) {
      document.body.removeChild(document.getElementById("startTelMedicine"));
    }
    document.body.appendChild(_a);
    _a.click();
  };
  _llw.prototype.GetInitInfo = function () {
    if (this.myWebview) {
      try {
        this.myWebview.messageHandlers.GetInitInfo.postMessage({ mNull: "空" });
      } catch (e) {
        this.myWebview.GetInitInfo();
      }
    }
  };
  _llw.prototype.setTitle = function (obj) {
    if (this.myWebview) {
      try {
        this.myWebview.messageHandlers.setTitle.postMessage(obj);
      } catch (e) {
        var o = JSON.stringify(obj);
        this.myWebview.setTitle(o);
      }
    }
  };
  _llw.prototype.toPage = function (name, obj) {
    if (this.myWebview) {
      try {
        this.myWebview.messageHandlers.toPage.postMessage(obj);
      } catch (e) {
        var o = JSON.stringify(obj);
        this.myWebview.toPage(name, o);
      }
    }
  };
  _llw.prototype.showLogin = function (element) {
    var loginDome = `
    <div id="mask" class="mask" style="display: none;"></div>
    <div class="mc_wdl" style="display:bolck "><div class="tologin"><span>
      <img src="./images/tishi.png"></span><span>需要登录后才能操作</span> </div><div class="mc_wdl_buttom"><div class="mc_wdl_qx" >
      <button id="qx">取消</button></div><div onclick="llw.toHerf("/common/login.html?type=topWeb")" class="mc_wdl_qdl"><button><a  >登录</a></button></div></div></div>`;
    $(element).append(loginDome);
    $("textarea").blur();
    $("input").blur();
    $("div").blur();
    $(".mc_wdl_qx").on("click", function () {
      closeLogin();
    });
    $(".mc_wdl_qdl").on("click", function () {
      _llw.prototype.toHerf("/common/login.html?type=topWeb");
    });
    function closeLogin() {
      $(".mc_wdl").hide();
      $(".mask").hide();
    }
  };
  _llw.prototype.titleShare = function (obj) {
    if (this.myWebview) {
      try {
        this.myWebview.messageHandlers.titleShare.postMessage(obj);
      } catch (e) {
        var o = JSON.stringify(obj);
        this.myWebview.titleShare(o);
      }
    }
  };
  _llw.prototype.isdate = function (date, istype) {
    var d = new Date(date);
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    var D = d.getDate();
    var h = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    if (istype){
      return y + "-" + m + "-" + D + "  " + (h>9?h:'0'+h) + ":" + (mm>9?mm:'0'+mm) + ":" + (ss>9?ss:'0'+ss);
    }
    return y + "-" + m + "-" + D;
  };

  //提供给终端调用的回调
  _llw.prototype.setItems = function (obj) {
    //清除缓存
    localStorage.removeItem("baseInfo");
    if (typeof obj != "undefined") {
      var jsonobj = {};
      if (typeof obj == "string") {
        try {
          jsonobj = JSON.parse(obj);
        } catch (error) {
          mui.alert(error + "");
        }
      } else {
        jsonobj = obj;
      }
      try {
        var lsdata = {};
        for (var o in jsonobj) {
          lsdata[o] = jsonobj[o];
        }
        window.localStorage.setItem("baseInfo", JSON.stringify(lsdata));
        typeof window[_options.initCallback] == "function"
          ? window[_options.initCallback]()
          : mui.alert("初始化数据失败！");
      } catch (error) {
        mui.alert(error);
      }
    } else {
      mui.alert("初始化异常！");
    }
  };
  //引导下载模块
  _llw.prototype.guide = {
    closeyd: function () {
      $("#llw-guide").hide();
    },
    showyd: function () {
      $("#llw-guide").show();
    },
    checkfrom: function () {
      var from = window.location.href.indexOf(_options.wxtoken);
      if (from > 0) {
        if (!this.QQ) {
          this.dofn();
        }
      }
    },
    changeurl: function () {
      var from = window.location.href.indexOf(_options.wxtoken);

      if (from < 0) {
        window.location.href =
          window.location.href + _options.jumptoken + "=" + _options.wxtoken;
      } else {
        $(".llw-body").css("visibility", "visible");
      }
    },
    dofn: function () {
      if (llw.systemType == "IOS") {
        if (llw.WX) {
          this.showyd();
        } else {
          window.location.href =
            _options.iosschemaUrl +
            "?message=" +
            JSON.stringify(_options.guidedata);
          setTimeout(function () {
            window.location.href = _options.commonUrl;
          }, 1500);
        }
      } else {
        if (llw.WX) {
          this.showyd();
        } else {
          window.location.href =
            _options.schemaUrl +
            "?message=" +
            JSON.stringify(_options.guidedata);
          setTimeout(function () {
            window.location.href = _options.commonUrl;
          }, 1500);
        }
      }
    },
    Init: function () {
      $("body").append(_llwGuide);
      if (llw.WX) {
        this.changeurl();
      } else {
        $(".llw-body").css("visibility", "visible");
        this.checkfrom();
      }
    },
  };

  //微信分享模块
  _llw.prototype.wx = {
    options: {
      title: "下载老来网APP",
      link: window.location.href,
      imgUrl: "http://statics.laolai.com/llw/llw-icon.png",
      desc: "互联网+医康养服务平台用科技重新定义生活",
    },
    signature: function (url, opt) {
      this.options = opt || this.options;
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "http://manager.laolai.com/llw-bsprefor/info/web/wx/token.jspx?url=" +
        url +
        "&callback=llw.wx.setWxShare";
      document.getElementsByTagName("head")[0].appendChild(script);
    },
    setWxShare: function (data) {
      var that = this;
      if (wx) {
        if (typeof wx.config == "function") {
          wx.config({
            appId: data.data.appId,
            debug: false,
            nonceStr: data.data.noncestr,
            signature: data.data.signature,
            timestamp: data.data.timestamp,
            jsApiList: [
              "onMenuShareAppMessage",
              "onMenuShareTimeline",
              "onMenuShareQQ",
              "onMenuShareQZone",
            ], // 必填，需要使用的JS接口列表
          });
          wx.error(function (res) {});
          //处理验证成功的信息
          wx.ready(function () {
            //分享到朋友圈1
            wx.onMenuShareTimeline({
              title: that.options.title, // 分享标题
              link: that.options.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: that.options.imgUrl, // 分享图标
              success: function (res) {},
              cancel: function (res) {},
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
              title: that.options.title, // 分享标题
              desc: that.options.desc, // 分享描述
              link: that.options.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: that.options.imgUrl, // 分享图标
              type: "", // 分享类型,music、video或link，不填默认为link
              dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
              success: function (res) {},
              cancel: function (res) {},
            });
            //分享到QQ
            wx.onMenuShareQQ({
              title: that.options.title, // 分享标题
              desc: that.options.desc, // 分享描述
              link: that.options.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: that.options.imgUrl, // 分享图标
              success: function (res) {},
              cancel: function (res) {},
            });
          });
        }
      } else {
        alert("未引用jweixin-1.0.0.js以上的js！");
      }
    },
  };
  //API地址请求
  _llw.prototype.api = {
    options: {
      wsurl: "",
      bsurl: "",
      articleurl: "",
    },
    wsData: function () {
      return {
        head: {
          imei: "7ccdd60b53f1b2c80a8db8e1e4fe4abc29793ccd",
          deviceType: "OPPO R11",
          clientType: "android",
          teminalVersion: "android_5.0.2",
          sysType: "5.0.2",
          token: "10",
        },
        body: {},
      };
    },
    ws: function (name, data, successCallback, errorCallback) {
      var wsData = new this.wsData();
      wsData.head.token = llw.getCookie("token");
      wsData.head.fnId = name;
      wsData.body = data;
      wsData.head.token = llw.getCookie("token");
      wsData.head.deviceType = "8.1.0";
      wsData.head.sysType = "Android";
      wsData.head.manufacturer = "smartisan";
      wsData.head.os = "8.1.0";
      wsData.head.sign = "";
      wsData.head.operator = null;
      wsData.head.areaId = "";
      wsData.head.invokeTime = "";
      wsData.head.model = "DE106";
      wsData.head.sn = "";

      $.ajax({
        url: this.options.wsurl,
        data: JSON.stringify(wsData),
        dataType: "json",
        contentType: "application/json",
        type: "post",
        success: function (resp) {
          typeof successCallback != "undefined" && successCallback(resp);
        },
        error: function (err) {
          // alert("error:"+err);
          typeof successCallback != "undefined" && successCallback(err);
          // typeof errorCallback!="undefined" &&errorCallback(err);
        },
      });
    },
    ws2: function (name, data, successCallback, errorCallback) {
      var wsData = new this.wsData();
      wsData.head.Token = llw.getCookie("token");
      wsData.head.fnId = name;
      wsData.body = data;
      wsData.head.token = llw.getCookie("token");
      wsData.head.deviceType = "8.1.0";
      wsData.head.sysType = "Android";
      wsData.head.manufacturer = "smartisan";
      wsData.head.os = "8.1.0";
      wsData.head.sign = "";
      wsData.head.operator = null;
      wsData.head.areaId = "";
      wsData.head.invokeTime = "";
      wsData.head.model = "DE106";
      wsData.head.sn = "";

      $.ajax({
        url: this.options.ws2url,
        data: JSON.stringify(wsData),
        dataType: "json",
        contentType: "application/json",
        type: "post",
        success: function (resp) {
          typeof successCallback != "undefined" && successCallback(resp);
        },
        error: function (err) {
          // alert("error:"+err);
          typeof errorCallback != "undefined" && errorCallback(err);
        },
      });
    },
    ws3: function (name, data, successCallback, errorCallback) {
      var wsData = new this.wsData();
      wsData.head.Token = llw.getCookie("token");
      wsData.head.fnId = name;
      wsData.body = data;
      wsData.head.token = llw.getCookie("token");
      wsData.head.deviceType = "8.1.0";
      wsData.head.sysType = "Android";
      wsData.head.manufacturer = "smartisan";
      wsData.head.os = "8.1.0";
      wsData.head.sign = "";
      wsData.head.operator = null;
      wsData.head.areaId = "";
      wsData.head.invokeTime = "";
      wsData.head.model = "DE106";
      wsData.head.sn = "";

      $.ajax({
        url: this.options.ws3url,
        data: JSON.stringify(wsData),
        dataType: "json",
        contentType: "application/json",
        type: "post",
        success: function (resp) {
          typeof successCallback != "undefined" && successCallback(resp);
        },
        error: function (err) {
          // alert("error:"+err);
          typeof errorCallback != "undefined" && errorCallback(err);
        },
      });
    },
    bs: function (name, data, successCallback, errorCallback) {
      $.ajax({
        url: this.options.bsurl + "/info/web/" + name + ".jspx",
        data: data,
        dataType: "json",
        type: "POST",
        success: function (resp) {
          typeof successCallback != "undefined" && successCallback(resp);
        },
        error: function (err) {
          //  alert(err);
          typeof errorCallback != "undefined" && errorCallback(err);
        },
      });
    },
    article: function (name, data, successCallback, errorCallback) {
      $.ajax({
        url: this.options.articleurl + "/llh/article/" + name + ".jspx",
        data: data,
        dataType: "json",
        type: "POST",
        success: function (resp) {
          typeof successCallback != "undefined" && successCallback(resp);
        },
        error: function (err) {
          //  alert(err);
          typeof errorCallback != "undefined" && errorCallback(err);
        },
      });
    },
  };

  window.llw = new _llw();
  window.H5 = {
    setItems: window.llw.setItems,
    callShare: window.llw.callShare,
    titleShare: window.llw.titleShare,
  };
})(window);
// 登录判断
llw.Login = function () {
  if (llw.getCookie("llh") && llw.getCookie("token")) {
    llw.isLogin = true;
  } else llw.isLogin = false;
};
llw.istest = window.location.host === "www.laolai.com" ? true : false;
llw.api.options.articleurl =
  (llw.istest ? "http://www.laolai.com" : "http://dev.laolai.com:85") +
  (!llw.istest ? "/llh-bs" : "/");
llw.api.options.bsurl =
  (llw.istest ? "http://www.laolai.com" : "http://dev.laolai.com:85") +
  (!llw.istest ? "/llw-bs" : "/llw-bs");
llw.api.options.wsurl =
  (llw.istest ? "http://identify.laolai.com" : "http://dev.laolai.com:85") +
  (!llw.istest ? "/llw-ws/services/ws?wsdl" : "/identify-prefor/services/ws?wsdl");
llw.api.options.ws2url =
  (llw.istest ? "http://identify.laolai.com" : "http://dev.laolai.com:85") +
  (!llw.istest ? "/llw-ws/services/ws?wsdl" : "/identify-prefor/services/ws?wsdl");
// llw.api.options.bs2url="http://dev.laolai.com:85/llw-bs-test/llh/article/";
llw.api.options.ws3url =
  (llw.istest
    ? window.location.protocol + "//" + window.location.host
    : "http://dev.laolai.com:85") + "/community-ws/services/ws";
//                     http://dev.laolai.com:85/llw-bs/info/web/collect.jspx
