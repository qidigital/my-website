---
sidebar_position: 1
---

# Setting up bolt

## Installation.


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pellentesque quam. Nunc tincidunt ullamcorper elementum. Etiam elementum diam at dolor ornare, non dictum erat fermentum. Curabitur placerat arcu ac efficitur condimentum. Ut euismod, quam sit amet posuere vulputate, quam massa posuere odio, a posuere est urna sed nisi.

### Signup as a merchant

First, <a href="https://qidigital.com/setup">create a Merchant</a> account with Qidigital.

### Install package

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="npm" label="npm">

```cmd
npm install --save @sample/package
```
</TabItem>
<TabItem value="yarn" label="Yarn">

```cmd
yarn add @sample/package
```
</TabItem>
<TabItem value="pnpm" label="pnpm">

```cmd
pnpm add @sample/package
```
</TabItem>
</Tabs>

## Send your first API request

Start experimenting with our APIs using the postman, which lets you run directly from the docs site. The Stripe Shell operates exclusively in test mode, so you don’t have to worry about creating any real transactions that move money.

### Code Examples in Different Languages

<Tabs>
<TabItem value="js" label="JavaScript">

```js
const stripe = require('stripe')('sk_test_wsFx86XDJWwmE4dMskBgJYrt');

stripe.products.create({
    name: 'Starter Subscription',
    description: '$12/Month subscription',
}).then(product => {
    stripe.prices.create({
        unit_amount: 1200,
        currency: 'usd',
        recurring: {
            interval: 'month',
        },
        product: product.id,
    }).then(price => {
        console.log('Success! Here is your starter subscription product id: ' + product.id);
        console.log('Success! Here is your premium subscription price id: ' + price.id);
    });
});
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
  "name": "stripe-node-example",
  "version": "1.0.0",
  "description": "A Stripe demo",
  "main": "index.js",
  "scripts": {
    "node ": "node create_price.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "stripe": "^12.0.0"
  }
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
# Multiplication table (from 1 to 10) in Python

num = 12

# To take input from the user
# num = int(input("Display multiplication table of? "))

# Iterate 10 times from i = 1 to 10
for i in range(1, 11):
   print(num, 'x', i, '=', num*i)
```

</TabItem>
</Tabs>

### Folder structure

Here's a folder structure:

```
my-document/     # Root directory.
|- build/        # Folder used to store builded (output) files.
|- src/          # Markdowns files; one for each chapter.
|- images/       # Images folder.
|- metadata.yml  # Metadata content (title, author...).
|- Makefile      # Makefile used for building our documents.
```


