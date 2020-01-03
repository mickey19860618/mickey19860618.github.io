---
sidebarDepth: 0
---

# IPN Notifications

IPN (Instant Payment Notification) is a notification sent from one server to another through an HTTP POST request informing your transactions.

In order to receive notifications about the events in your platform, you have to previously configure the notification when you do the POST of the payment, indicating the URL in the field notify_url.


### Events

Whenever an event occurs, we will send you a notification in json format using HTTP POST to the URL that you specified.

We will notify the following events:

| Action | Description |
| :-: | --- |
| TRADE_SUCCESS | Success(Buyer Paid) |
| TRADE_REFUND | Refunded |
| TRADE_CHARGEBACK | Chargebacked |

Pagsmile will send notifications with the following schedule of retries and confirmation awaiting times. You must return an HTTP STATUS 200 (OK) with reponse data "success" or "{"result":"success"}" before the corresponding time expires. If not, it will be assumed that you did not receive it correctly and you will be notified again.

| Event | Time after the first dispatch |
| :-: | --- |
| Dispatch | - |
| 1st retry | 10 minutes |
| 2nd retry | 30 minutes |
| 3rd retry | 60 minutes |
| 4th retry | 120 minutes |
| 5th retry | 360 minutes |
| 6th retry | 840 minutes |

The notification sent has the following format:

```
Content-Type: application/json
Method: POST
Body:
  {
  	"amount":"",
  	"out_trade_no":"",
  	"method":"",
  	"trade_status":"",
  	"sign":"",
  	"trade_no":"",
  	"currency":"",
  	"out_request_no":"",
  	"app_id":"",
  	"sign_type":""
  }
```


### What should I do when I receive a notification?

When you receive a notification on your platform, Pagsmile waits for a response to validate that you received it correctly. For this, you must return an HTTP STATUS 200 (OK) with reponse data "success" or "{"result":"success"}".

It is recommended that you respond to the notification before executing business logic or prior to accessing external resources so as not to exceed the estimated response times.

This communication is exclusively between the servers of Pagsmile and your server, so there will not be a physical user seeing any type of result.
