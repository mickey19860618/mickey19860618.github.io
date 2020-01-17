(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{205:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-payment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-payment"}},[t._v("#")]),t._v(" Create Payment")]),t._v(" "),a("h3",{attrs:{id:"request-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-url"}},[t._v("#")]),t._v(" Request URL")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  https://gateway.pagsmile.com/trade/create\n")])])]),a("h3",{attrs:{id:"request-params-json-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-params-json-format"}},[t._v("#")]),t._v(" Request Params (JSON format)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Max Length(or Default Value)")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("app_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[t._v("created app's id at dashboard")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("out_trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("64")]),t._v(" "),a("td",[t._v("ID given by the merchant in their system")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("method")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32")]),t._v(" "),a("td",[a("a",{attrs:{href:"payment-methods"}},[t._v("Payment Methods")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("order_currency")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",[t._v("BRL for brazil")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("order_amount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("decimal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0.01 ~ 99999999999999.99")]),t._v(" "),a("td",[t._v("request payment amount")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("subject")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("128")]),t._v(" "),a("td",[t._v("payment reason or item title")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("255")]),t._v(" "),a("td",[t._v("payment reason detail or item detail")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("trade_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("WEB")]),t._v(" "),a("td",[t._v("response content type, WEB will return a checkout URL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timeout_express")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("90m")]),t._v(" "),a("td",[t._v("m(minutes), h(hours), d(days), c(always end in currency day)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("format")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JSON")]),t._v(" "),a("td",[t._v("only JSON supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("charset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("UTF-8")]),t._v(" "),a("td",[t._v("only UTF-8 supported")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sign_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("MD5")]),t._v(" "),a("td",[t._v("MD5 only for now; RSA, RSA2 will support soon")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sign")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("a",{attrs:{href:"signature-algorithm"}},[t._v("Signature Algorithm")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19")]),t._v(" "),a("td",[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2.0")]),t._v(" "),a("td",[t._v("fix to 2.0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("notify_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("IPN URL to merchant")])])])]),t._v(" "),a("h3",{attrs:{id:"request-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sample"}},[t._v("#")]),t._v(" Request Sample")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location --request POST \'https://gateway.pagsmile.com/trade/create\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "app_id": ":app_id",\n    "out_trade_no": ":out_trade_no",\n    "method": ":method",\n    "order_currency": "BRL",\n    "order_amount": 10.00,\n    "subject": ":subject",\n    "content": ":content",\n    "trade_type": "WEB",\n    "timeout_express": "1d",\n    "format": "JSON",\n    "charset": "UTF-8",\n    "sign_type": "MD5",\n    "sign": ":sign",\n    "timestamp": "yyyy-MM-dd HH:mm:ss",\n    "version": "2.0",\n    "notify_url": ":notify_url",\n}\'\n')])])]),a("h3",{attrs:{id:"http-response-json-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-response-json-format"}},[t._v("#")]),t._v(" Http Response (JSON format)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return code")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return msg")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sub_code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return sub code(only error)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sub_msg")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("return sub msg(only error)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("out_trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("request out_trade_no")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("trade_no")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("Pagsmile trade NO.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("web_url")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",[t._v("checkout URL")])])])]),t._v(" "),a("h3",{attrs:{id:"return-code-success"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-code-success"}},[t._v("#")]),t._v(" Return Code (Success)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "10000",\n    "msg": "Success",\n    "out_trade_no": "{out_trade_no}",\n    "trade_no": "{trade_no}",\n    "web_url": "http://checkout.pagsmile.com?prepay_id={$prepay_id}"\n}\n')])])]),a("h3",{attrs:{id:"return-code-fail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-code-fail"}},[t._v("#")]),t._v(" Return Code (Fail)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "code": "40002",\n    "msg": "Business Failed",\n    "sub_code": "invalid-signature",\n    "sub_msg": "invalid signature"\n}\n')])])]),a("h3",{attrs:{id:"attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attention"}},[t._v("#")]),t._v(" !!!Attention!!!")]),t._v(" "),a("p",[t._v("return_url is not in the request parameters, if needed, just append the return_url after the web_url when redirect:")]),t._v(" "),a("p",[t._v("http://checkout.pagsmile.com?prepay_id={$prepay_id}")]),t._v(" "),a("p",[t._v("↓↓↓")]),t._v(" "),a("p",[t._v("http://checkout.pagsmile.com?prepay_id={$prepay_id}&return_url={$return_url}")])])}),[],!1,null,null,null);e.default=r.exports}}]);