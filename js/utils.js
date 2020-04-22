(function (window) {
  var _utils = function () {};
  _utils.prototype.loginOut = function () {
    if (llw.delCookie("llh") && llw.delCookie("token")&&llw.delCookie("llw-community-server-session-id")) {
      window.location.reload();
    }
  };
  _utils.prototype.toMyLlh = function (name) {
    var _a = document.createElement("a");
    _a.setAttribute("href", llw.api.options.articleurl + name);
    _a.setAttribute("id", "startTelMedicine");
    // 防止反复添加
    if (document.getElementById("startTelMedicine")) {
      document.body.removeChild(document.getElementById("startTelMedicine"));
    }
    document.body.appendChild(_a);
    _a.click();
  };
  _utils.prototype.indexArticleDetails = function (id, type, tab = "", llh) {
    window.open(
      (llw.istest?"":"/llh-bs/")+"/static/index-pc/index-Article-details.html?id=" +
        id +
        "&&tab=" +
        tab +
        "&&type=" +
        type +
        "&&llh=" +
        llh
    );
  };
  _utils.prototype.rightmue = function () {
    var dom =
      '<div class="company"><p style="margin-bottom:5px" class="J-company-name"> Copyright © 2015 - 2020</p>' +
      '<a href="http://www.beian.miit.gov.cn">老来网版权所有 湘ICP备15002488号-1</a></div>';
    $(".list_rights").append(dom);
  };
  _utils.prototype.showMask = function () {
    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
  };
  // 用于监听粘贴事件
  _utils.prototype._pasteHandle = function () {
    var pasteFilterStyle = true;
    var $textElem = $("#dds");

    // 获取粘贴的html
    function getPasteHtml(e, filterStyle, ignoreImg) {
      var clipboardData =
        e.clipboardData || (e.originalEvent && e.originalEvent.clipboardData);
      var pasteText = void 0,
        pasteHtml = void 0;
      if (clipboardData == null) {
        pasteText =
          window.clipboardData && window.clipboardData.getData("text");
      } else {
        pasteText = clipboardData.getData("text/plain");
        pasteHtml = clipboardData.getData("text/html");
      }
      if (!pasteHtml && pasteText) {
        pasteHtml = "<p>" + replaceHtmlSymbol(pasteText) + "</p>";
      }
      if (!pasteHtml) {
        return;
      }

      // 过滤word中状态过来的无用字符
      var docSplitHtml = pasteHtml.split("</html>");
      if (docSplitHtml.length === 2) {
        pasteHtml = docSplitHtml[0];
      }

      // 过滤无用标签
      pasteHtml = pasteHtml.replace(/<(meta|script|link).+?>/gim, "");
      // 去掉注释
      pasteHtml = pasteHtml.replace(/<!--.*?-->/gm, "");
      // 过滤 data-xxx 属性
      pasteHtml = pasteHtml.replace(/\s?data-.+?=('|").+?('|")/gim, "");

      if (ignoreImg) {
        // 忽略图片
        pasteHtml = pasteHtml.replace(/<img.+?>/gim, "");
      }

      if (filterStyle) {
        // 过滤样式
        pasteHtml = pasteHtml.replace(/\s?(class|style)=('|").*?('|")/gim, "");
      } else {
        // 保留样式
        pasteHtml = pasteHtml.replace(/\s?class=('|").*?('|")/gim, "");
      }

      return pasteHtml;
    }
    $textElem.on('paste', function (e) {
      var pasteHtml = getPasteHtml(e, pasteFilterStyle, false);
      $textElem.html()
      $textElem.html("<p>"+pasteHtml+"<p>")
      $(".contenteditable p").attr("style","height:auto")
    })
  };
  _utils.prototype.letDivCenter = function (divName) {
    var top = ($(window).height() - $(divName).height()) / 2;
    var left = ($(window).width() - $(divName).width()) / 2;
    var scrollTop = $(document).scrollTop();
    var scrollLeft = $(document).scrollLeft();
    $(divName)
      .css({
        position: "absolute",
        top: top + scrollTop,
        left: left + scrollLeft,
      })
      .show();
    _utils.prototype.showMask();
  };
  window.utils = new _utils();
})(window);
