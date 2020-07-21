(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{218:function(t,e,_){"use strict";_.r(e);var n=_(0),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"ipn通知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ipn通知"}},[t._v("#")]),t._v(" IPN通知")]),t._v(" "),_("p",[t._v("IPN（即时付款通知）是一种通过HTTP POST请求从一台服务器发送到另一台服务器的通知，用于通知您的交易。")]),t._v(" "),_("p",[t._v("为了接收有关您平台中事件的通知，您必须在进行付款POST时预先配置通知，并在字段notify_url中指示URL。")]),t._v(" "),_("h3",{attrs:{id:"事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),_("p",[t._v("每当发生事件时，我们都会使用HTTP POST到您指定的URL的json格式发送通知给您。")]),t._v(" "),_("p",[t._v("我们将通知以下事件：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("动作")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("TRADE_SUCCESS")]),t._v(" "),_("td",[t._v("支付成功（用户完成付款）")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("TRADE_REFUND")]),t._v(" "),_("td",[t._v("发生退款")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("TRADE_CHARGEBACK")]),t._v(" "),_("td",[t._v("发生拒付")])])])]),t._v(" "),_("p",[t._v('Pagsmile将发送通知，其中包含以下重试时间表和确认等待时间。 您必须在相应时间到期之前返回带有响应数据"success"或"{"result":"success"}"的HTTP STATUS 200（OK）。 否则，将假定您没有正确收到它，并且将再次通知您。')]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("事件")]),t._v(" "),_("th",[t._v("距离第一次通知的时间")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("立即")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1st retry")]),t._v(" "),_("td",[t._v("10 minutes")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2nd retry")]),t._v(" "),_("td",[t._v("30 minutes")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3rd retry")]),t._v(" "),_("td",[t._v("60 minutes")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4th retry")]),t._v(" "),_("td",[t._v("120 minutes")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("5th retry")]),t._v(" "),_("td",[t._v("360 minutes")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("6th retry")]),t._v(" "),_("td",[t._v("840 minutes")])])])]),t._v(" "),_("p",[t._v("发送的通知使用以下格式：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('Content-Type: application/json\nMethod: POST\nBody:\n  {\n  \t"amount":"",\n  \t"out_trade_no":"",\n  \t"method":"",\n  \t"trade_status":"",\n  \t"sign":"",\n  \t"trade_no":"",\n  \t"currency":"",\n  \t"out_request_no":"",\n  \t"app_id":"",\n  \t"sign_type":""\n  }\n')])])]),_("h3",{attrs:{id:"收到通知后该怎么办？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#收到通知后该怎么办？"}},[t._v("#")]),t._v(" 收到通知后该怎么办？")]),t._v(" "),_("p",[t._v("当您在平台上收到通知时，Pagsmile等待响应以验证您是否正确接收了该通知。 为此，您必须返回HTTP状态200（OK），其响应数据为“ success”或“ {” result“：” success“}”。")]),t._v(" "),_("p",[t._v("建议您在执行业务逻辑之前或在访问外部资源之前对通知做出响应，以免超出估计的响应时间。")]),t._v(" "),_("p",[t._v("该通信专门在Pagsmile的服务器与您的服务器之间进行，因此不会有物理用户看到任何类型的结果。")])])}),[],!1,null,null,null);e.default=a.exports}}]);