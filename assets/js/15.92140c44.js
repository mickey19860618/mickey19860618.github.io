(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{212:function(t,e,a){"use strict";a.r(e);var _=a(0),n=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"创建订单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建订单"}},[t._v("#")]),t._v(" 创建订单")]),t._v(" "),a("h3",{attrs:{id:"请求接口root地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求接口root地址"}},[t._v("#")]),t._v(" 请求接口ROOT地址")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  https://gateway.pagsmile.com\n")])])]),a("h3",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  /trade/create\n")])])]),a("h3",{attrs:{id:"request-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-header"}},[t._v("#")]),t._v(" Request Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Content-Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("推荐")]),t._v(" "),a("td",[t._v("application/json")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Authorization")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",[t._v("Basic Base64(app_id:secret_key)")])])])]),t._v(" "),a("h3",{attrs:{id:"请求参数（json格式）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求参数（json格式）"}},[t._v("#")]),t._v(" 请求参数（JSON格式）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("最大长度/默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("app_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[t._v("商户后台创建并获得")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("out_trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),t._v(" "),a("td",[t._v("商户订单号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("method")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[a("a",{attrs:{href:"payment-methods"}},[t._v("支付方式")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("order_currency")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",[t._v("巴西（BRL）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("order_amount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("decimal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.01 ~ 99999999999999.99")]),t._v(" "),a("td",[t._v("订单金额")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("subject")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("128")]),t._v(" "),a("td",[t._v("订单标题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("255")]),t._v(" "),a("td",[t._v("订单内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("trade_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("WEB")]),t._v(" "),a("td",[t._v("响应方式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timeout_express")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90m")]),t._v(" "),a("td",[t._v("m(分), h(小时), d(日), c(当日)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("format")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JSON")]),t._v(" "),a("td",[t._v("只支持JSON")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("charset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("UTF-8")]),t._v(" "),a("td",[t._v("只支持UTF-8")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),a("td",[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.0")]),t._v(" "),a("td",[t._v("固定为2.0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("notify_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("回调地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("buyer_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("商户的用户ID（如果有）")])])])]),t._v(" "),a("h3",{attrs:{id:"请求样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求样例"}},[t._v("#")]),t._v(" 请求样例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location --request POST \'https://gateway.gemini-tiger.cn/trade/create\' \\\n--header \'Authorization: Basic Base64(appid:secret_key)\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "app_id": "app_id",\n    "content": "content",\n    "method": "Boleto",\n    "notify_url": "notify_url",\n    "order_amount": 10,\n    "order_currency": "BRL",\n    "out_trade_no": "{{$randomUUID}}",\n    "subject": "subject",\n    "timeout_express": "1h",\n    "timestamp": "{{datetime}}",\n    "trade_type": "WEB",\n    "version": "2.0"\n}\'\n')])])]),a("h3",{attrs:{id:"响应（json格式）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应（json格式）"}},[t._v("#")]),t._v(" 响应（JSON格式）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("返回码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("返回消息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sub_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("子码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sub_msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("子消息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("out_trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("商户订单号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("Pagsmile创建的订单号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("web_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("支付页面URL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("prepay_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("预支付ID")])])])]),t._v(" "),a("h3",{attrs:{id:"返回样例（成功）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回样例（成功）"}},[t._v("#")]),t._v(" 返回样例（成功）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "10000",\n    "msg": "Success",\n    "out_trade_no": "{out_trade_no}",\n    "trade_no": "{trade_no}",\n    "web_url": "http://checkout.pagsmile.com?prepay_id={$prepay_id}",\n    "prepay_id": "{$prepay_id}"\n}\n')])])]),a("h3",{attrs:{id:"返回样例（失败）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回样例（失败）"}},[t._v("#")]),t._v(" 返回样例（失败）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "40002",\n    "msg": "Business Failed",\n    "sub_code": "invalid-signature",\n    "sub_msg": "invalid signature"\n}\n')])])]),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" !!!注意!!!")]),t._v(" "),a("p",[t._v("return_url不作为下单参数传递，不过如果需要，可在重定向到web_url的同时追加在web_url的url路径参数内：")]),t._v(" "),a("p",[t._v("http://checkout.pagsmile.com?prepay_id={$prepay_id}")]),t._v(" "),a("p",[t._v("↓↓↓")]),t._v(" "),a("p",[t._v("http://checkout.pagsmile.com?prepay_id={$prepay_id}&return_url={$return_url}")])])}),[],!1,null,null,null);e.default=n.exports}}]);