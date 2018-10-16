# Moltin Algolia Order Sync

> 🔄 Sync Moltin orders with Algolia via a [Serverless](https://serverless.com/) function

## Setup

You'll need a Moltin, Algolia and Serverless account to successfully configure this example.

### Create an Order integration

```js
{
  "data": {
    "type": "integration",
    "name": "Order sync with Algolia",
    "description": "Sync order data with Algolia",
    "enabled": true,
    "observes": [
      "order.created",
      "order.updated",
      "order.fulfilled",
      "order.authorized",
      "order.paid",
      "order.refunded"
    ],
    "integration_type": "webhook",
    "configuration": {
      "url": "SERVERLESS_URI_HERE/orders"
    }
  }
}
```

### Create an Transaction integration

```js
{
  "data": {
    "type": "integration",
    "name": "Order transaction sync with Algolia",
    "description": "Sync order transaction data with Algolia",
    "enabled": true,
    "observes": [
      "transaction.created",
      "transaction.updated"
    ],
    "integration_type": "webhook",
    "configuration": {
      "url": "SERVERLESS_URI_HERE/transactions"
    }
  }
}
```