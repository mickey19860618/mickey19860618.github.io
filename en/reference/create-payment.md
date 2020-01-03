---
sidebarDepth: 0
---

# Create Payment

### Request URL

```
  https://gateway.pagsmile.com/trade/create
```


### Request Params

| Parameter | Type | Required | Max Length(or Default Value) | Description |
| :-: | :-: | :-: | :-: | --- |
| app_id | string | yes | 32 | created app's id at dashboard |
| out_trade_no | string | yes | 64 | ID given by the merchant in their system |
| method | string | no | 32 | [Payment Methods](payment-methods) |
| order_currency | string | yes | 3 | BRL for brazil |
| order_amount | decimal | yes | 0.01 ~ 99999999999999.99 | request payment amount |
| subject | string | yes | 128 | payment reason or item title |
| content | string | no | 255 | payment reason detail or item detail |
| trade_type | string | yes | WEB | response content type, WEB will return a checkout URL |
| timeout_express | string | no | 90m | m(minutes), h(hours), d(days), c(always end in currency day) |
| format | string | no | JSON | only JSON supported |
| charset | string | no | UTF-8 | only UTF-8 supported |
| sign_type | string | yes | MD5 | MD5 only for now; RSA, RSA2 will support soon |
| sign | string | yes |  | [Signature Algorithm](signature-algorithm) |
| timestamp | string | yes | 19 | yyyy-MM-dd HH:mm:ss |
| version | string | no | 2.0 | fix to 2.0 |
| notify_url | string | no |  | IPN URL to merchant |


### Request Sample

```
curl --location --request POST 'https://gateway.pagsmile.com/trade/create?app_id=1234567890asdf&format=JSON&charset=UTF-8&sign_type=MD5&sign={{$sign}}&timestamp=2020-01-01%2000:00:00&version=2.0&notify_url=https://gateway.pagsmile.com/ipn&out_trade_no=82d016f5-e5f0-432d-b095-2e289868b670&method=Boleto&order_currency=BRL&order_amount=10&subject=subject&content=content&trade_type=WEB&timeout_express=1d'
```

### Http Response (JSON format)

| Parameter | Type | Description |
| :-: | :-: | --- |
| code | string | return code |
| msg | string | return msg |
| sub_code | string | return sub code(only error) |
| sub_msg | string | return sub msg(only error) |
| out_trade_no | string | request out_trade_no |
| trade_no | string | Pagsmile trade NO. |
| web_url | string | checkout URL |

### Return Code (Success)

```
{
    "code": "10000",
    "msg": "Success",
    "out_trade_no": "{out_trade_no}",
    "trade_no": "{trade_no}",
    "web_url": "http://checkout.pagsmile.com?prepay_id={$prepay_id}"
}
```

### Return Code (Fail)

```
{
    "code": "40002",
    "msg": "Business Failed",
    "sub_code": "invalid-signature",
    "sub_msg": "invalid signature"
}
```
