(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{219:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"sdk-android"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdk-android"}},[a._v("#")]),a._v(" SDK Android")]),a._v(" "),e("h3",{attrs:{id:"_1-添加aar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加aar"}},[a._v("#")]),a._v(" 1. 添加aar")]),a._v(" "),e("p",[a._v("将一下aar包导入到应用Android工程下libs中。"),e("br"),a._v("\npagsmile-1.0.0.aar"),e("br"),a._v("\nlivechat.aar"),e("br"),a._v("\nreact-native-0.61.2.aar"),e("br"),a._v("\nreact-native-i18n.aar"),e("br"),a._v("\nreact-native-pdf.aar"),e("br"),a._v("\nrn-fetch-blob.aar"),e("br"),a._v("\nreact-native-vector-icons.aar"),e("br"),a._v("\nhermes-debug.aar"),e("br"),a._v("\nhermes-release.aar")]),a._v(" "),e("h3",{attrs:{id:"_2-在project的build-gradle文件添加配置："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-在project的build-gradle文件添加配置："}},[a._v("#")]),a._v(" 2. 在project的build.gradle文件添加配置：")]),a._v(" "),e("p",[a._v("// Top-level build file where you can add configration options common to all sub-projects/modules.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("buildscript {\n  repositories {\n    mavenCentral()\n    ...\n  } ...\n}\nallprojects {\n  repositories {\n    ...\n  }\n}\nmavenCentral()\nmaven { url 'https://jitpack.io' }\n")])])]),e("h3",{attrs:{id:"_3-在app的build-gradle中添加配置："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-在app的build-gradle中添加配置："}},[a._v("#")]),a._v(" 3. 在app的build.gradle中添加配置：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code")])]),e("h3",{attrs:{id:"_4-androidmanifest-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-androidmanifest-xml"}},[a._v("#")]),a._v(" 4. AndroidManifest.xml")]),a._v(" "),e("p",[a._v("如果没有自己的application文件，在AndroidManifest.xml文件的application标签中添加属性：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('android:name="com.pagsmile.sdk.PagsmileApplication"\n')])])]),e("p",[a._v("如果有自己的application文件，添加如下代码：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@Override\nprotected void attachBaseContext(Context base) {\n  super.attachBaseContext(base);\n  MultiDex.install(this);\n}\n")])])]),e("h3",{attrs:{id:"_5-初始化sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-初始化sdk"}},[a._v("#")]),a._v(" 5. 初始化SDK")]),a._v(" "),e("p",[a._v("建议在应用启动时或登录成功后执行")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Pagsmile.getInstance().init(Context, app_id, api_key, Pagsmile.Test);\n")])])]),e("h3",{attrs:{id:"_6-拉起订单页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-拉起订单页面"}},[a._v("#")]),a._v(" 6. 拉起订单页面")]),a._v(" "),e("p",[a._v("拿到Pagsmile后台返回的prepay_id后调用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Pagsmile.getInstance().order(Context, prepayId);\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);