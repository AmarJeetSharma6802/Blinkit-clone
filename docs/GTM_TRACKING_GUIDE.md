# Blinkit Clone GTM / Google Ads Tracking Guide

## 1. Short Summary

Is project me Google Tag Manager add kiya gaya hai aur ecommerce events `dataLayer` me push kiye ja rahe hain.

Important events:

- `add_to_cart`
- `view_cart`
- `begin_checkout`
- `purchase`

Ye events Google Ads / GA4 ecommerce tracking ke liye use ho sakte hain, jab GTM container me matching tags aur triggers publish kiye jayenge.

## 2. GTM Script Kahan Add Hai

GTM script root HTML file me add hai:

`index.html`

Head me:

```html
<!-- Google Tag Manager -->
<script>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js"
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-K9DRNHRR");
</script>
<!-- End Google Tag Manager -->
```

Body me:

```html
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-K9DRNHRR"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe>
</noscript>
```

Iska matlab website open hote hi GTM container load hota hai.


## 3. Live Tracking Ka Matlab

Tag Assistant me jo "Connect" button hota hai wo sirf debug/preview ke liye hota hai.

Live user ko kabhi connect karne ki zarurat nahi hoti.

Live tracking tab kaam karti hai jab:

1. Website me GTM script installed ho.
2. GTM container published ho.
3. GTM me Google Ads / GA4 tags configured hon.
4. Tags ke triggers correct events par lage hon, jaise `purchase`.

Is project me code side se events `dataLayer` me ja rahe hain. Ab GTM side par tags/triggers publish karna zaruri hai.

## 4. Tag Assistant Me Undefined Kyun Dikhta Hai

GTM preview me ye fields dikh sakti hain:

```js
allowlist: undefined
blocklist: undefined
whitelist: undefined
blacklist: undefined
tagTypeBlacklist: undefined
```

Ye product tracking ka issue nahi hai. Ye GTM ke internal debug fields hain.

Agar GTM me allowlist/blocklist configure nahi ki gayi, to ye fields `undefined` dikhenge. Isko ignore kar sakte hain.

Important data ye hai:

```js
ecommerce: {
  currency: "INR",
  value: 28,
  items: [
    {
      item_id: 1,
      item_name: "Amul Taaza Toned Fresh Milk",
      price: 28,
      quantity: 1
    }
  ]
}
```

Yahan `item_name`, `price`, `quantity`, `value` sahi aa rahe hain to ecommerce payload correct hai.

Undefined ko manually remove karna usually possible/required nahi hota, kyunki wo GTM preview ke internal state ka part hai. Hamare code se ye fields push nahi ho rahe.

## 6. DataLayer Helper Function

File:

`src/lib/gtm.ts`

Code:

```ts
export const pushToDataLayer = (data: object) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};
```

Ye function ensure karta hai ki `window.dataLayer` available ho aur fir event object push karta hai.

Example:

```js
pushToDataLayer({
  event: "add_to_cart",
  ecommerce: {
    currency: "INR",
    value: 28,
    items: [
      {
        item_id: 1,
        item_name: "Amul Taaza Toned Fresh Milk",
        price: 28,
        quantity: 1
      }
    ]
  }
});
```

## 7. Ecommerce Object Kya Hai

`ecommerce` object Google Ads / GA4 ko shopping data dene ke liye use hota hai.

Common fields:

```js
ecommerce: {
  currency: "INR",
  value: cart.totalPrice,
  items: [...]
}
```

Meaning:

- `currency`: currency code, yahan `INR`
- `value`: total amount
- `items`: products ki list

Item object:

```js
{
  item_id: item.id,
  item_name: item.name || item.FirstP || "Unknown Product",
  price: item.price,
  quantity: item.quantity
}
```

Meaning:

- `item_id`: product id
- `item_name`: product name
- `price`: product price
- `quantity`: quantity

## 8. Item Name Undefined Issue

Pehle kuch products me name `FirstP` field me tha, aur selected product pages me name `name` field me tha.

Isliye `item_name` kabhi undefined aa raha tha.

Fix:

Cart reducer me item name normalize kiya:

```js
const itemName = newItem.name || newItem.FirstP;

name: itemName,
FirstP: itemName,
```

Cart events me fallback add kiya:

```js
item.name || item.FirstP || "Unknown Product"
```

Isse new cart items me name correctly save hota hai.

Note: Browser localStorage me purane cart items already undefined ke saath saved ho sakte hain. Test karte waqt cart clear karke item dobara add karna chahiye.

## 9. Events Added

### add_to_cart

Trigger: User product card ya product page par ADD button click karta hai.

Purpose: Product cart me add hua.

Payload:

```js
{
  event: "add_to_cart",
  ecommerce: {
    currency: "INR",
    value: Number(item.price),
    items: [
      {
        item_id: item.id,
        item_name: item.name || item.FirstP,
        price: Number(item.price),
        quantity: 1
      }
    ]
  }
}
```

### view_cart

Trigger: User cart drawer open karta hai.

Purpose: Cart view track karna.

Payload cart items se banta hai.

### begin_checkout

Trigger: Cart me `Proceed Item` button click hota hai.

Purpose: Checkout start track karna.

After event:

```js
navigate("/checkout");
```

### purchase

Trigger: Checkout page me `Fake Pay Now` button click hota hai.

Purpose: Fake payment success / purchase conversion track karna.

Payload:

```js
{
  event: "purchase",
  ecommerce: {
    transaction_id: "ORDER_" + Date.now(),
    currency: "INR",
    value: cart.totalPrice,
    items: cart.items.map((item) => ({
      item_id: item.id,
      item_name: item.name || item.FirstP || "Unknown Product",
      price: item.price,
      quantity: item.quantity
    }))
  }
}
```

After event:

```js
navigate("/success");
```

## 10. Success Page

File:

`src/Pages/Success/Success.jsx`

Route:

```jsx
<Route path="success" element={<Success />} />
```

URL:

`/success`

Purpose: Fake payment ke baad success screen show karna.

## 11. Google Ads / GTM Setup For Marketer

GTM me ye setup chahiye:

1. Container `GTM-K9DRNHRR` publish hona chahiye.
2. Conversion Linker tag add karo.
3. Conversion Linker trigger: All Pages.
4. Google Ads Conversion Tracking tag banao.
5. Trigger: Custom Event `purchase`.
6. Data Layer variables banao:
   - `ecommerce.value`
   - `ecommerce.currency`
   - `ecommerce.transaction_id`
7. Value field me `ecommerce.value` variable use karo.
8. Currency field me `ecommerce.currency` variable use karo.
9. Transaction ID field me `ecommerce.transaction_id` variable use karo.
10. Container publish karo.

Debug ke liye Tag Assistant Connect use hota hai. Live users ke liye Connect required nahi hai.

## 12. UTM Kya Hai

UTM URL parameters hote hain:

```txt
?utm_source=google&utm_medium=cpc&utm_campaign=sale
```

Common UTM fields:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

## 13. Kya Humne UTM Add Kiya Hai?

Nahi. Is project me UTM read/push code add nahi kiya gaya.

Humne GTM + ecommerce dataLayer events add kiye hain.

Difference:

- GTM: tag manager script/container
- dataLayer ecommerce events: cart, checkout, purchase data
- UTM: campaign URL parameters

Google Ads usually `gclid` auto-tagging use karta hai. Isliye ecommerce conversion tracking ke liye UTM manually add karna mandatory nahi hota.

UTM tab useful hota hai jab marketer ko source/medium/campaign ko custom reporting ke liye dataLayer me store/push karna ho.

## 14. UTM Add Kyun Nahi Kiya

UTM add nahi kiya kyunki current requirement ecommerce events thi:

- add to cart
- view cart
- begin checkout
- purchase

UTM tracking ek separate requirement hai. Isme URL se campaign parameters read karne padte hain, session/localStorage me save karne padte hain, aur events ke saath push karne padte hain.

Example future payload:

```js
{
  event: "purchase",
  ecommerce: {...},
  utm: {
    source: "google",
    medium: "cpc",
    campaign: "summer_sale"
  }
}
```

## 15. Testing Steps

1. Browser localStorage/cart clear karo.
2. Website reload karo.
3. Product ADD karo.
4. Tag Assistant me `add_to_cart` check karo.
5. Cart open karo.
6. `view_cart` check karo.
7. Proceed Item click karo.
8. `begin_checkout` check karo.
9. Checkout page par `Fake Pay Now` click karo.
10. `purchase` check karo.
11. `/success` page open hona chahiye.

## 16. Final Explanation For Performance Marketer

Website me GTM container installed hai. Code ecommerce actions ko `dataLayer` me push karta hai. Marketer GTM me custom event triggers use karke Google Ads conversion tags fire kar sakta hai.

Current ecommerce events:

- Product add: `add_to_cart`
- Cart open: `view_cart`
- Checkout start: `begin_checkout`
- Payment success: `purchase`

UTM values abhi code se dataLayer me push nahi ho rahi hain. Google Ads conversion tracking ke liye GTM + Google Ads tag + Conversion Linker enough ho sakta hai, especially agar Google Ads auto-tagging enabled hai.

## 17. Final Explanation For Developer

Developer side flow:

1. `index.html` GTM container load karta hai.
2. `src/lib/gtm.ts` me helper `pushToDataLayer` hai.
3. UI event handlers cart actions ke saath ecommerce event push karte hain.
4. Redux cart state se cart/checkout/purchase payload banta hai.
5. `Cart.jsx` view_cart aur begin_checkout handle karta hai.
6. `Checkout.jsx` purchase event handle karta hai.
7. `Success.jsx` fake payment success page hai.
8. `App.jsx` me `/checkout` aur `/success` routes configured hain.

