# Shaam-E-Malang Café Ordering Experience

This repository contains the static ordering experience for Shaam-E-Malang Café. It powers the public landing page, the direct ordering flow, OTP based authentication and Razorpay checkout integration.

## Quick start

1. Install a simple static server (for example `npm install -g serve`).
2. Configure the integration credentials in [`assets/js/app-config.js`](assets/js/app-config.js).
   - Supply your Firebase project credentials so OTP sign-in can run. Placeholder values intentionally disable login until you enter real keys.
   - Update the Razorpay keys, webhook URL and WhatsApp number as required.
3. Run `serve .` (or any static server) from the repository root and open the reported URL in your browser.

## Phone OTP login

The login modal uses Firebase Phone Authentication to deliver OTP codes. To hook it up to your own Firebase project:

1. Create a Firebase project and enable **Phone** as a Sign-in method.
2. In the Firebase console, add your domain to the authorised domains list (including `localhost` for local development).
3. Copy the project credentials and overwrite the placeholder values in `window.APP_CONFIG.firebase` inside `assets/js/app-config.js`.
4. (Optional) Create test phone numbers in Firebase for QA without incurring SMS costs.

Once your credentials are saved, customers will receive SMS OTP codes from Firebase and can authenticate before creating an order.

## Razorpay checkout

Payments are handled by the Razorpay Checkout JavaScript SDK.

1. Replace `window.APP_CONFIG.razorpay.keyId` with your **live** or **test** Razorpay publishable key.
2. Expose a backend endpoint that creates Razorpay orders and returns the JSON payload from Razorpay. Set its URL as `window.APP_CONFIG.razorpay.createOrderUrl`. The frontend sends `{ amount, currency, notes }` where `amount` is expressed in paise.
3. The handler automatically forwards customer, address and cart details as `notes` so they appear in your Razorpay dashboard.
4. When the payment succeeds the customer sees a confirmation banner, the cart is cleared and a WhatsApp summary opens for the café team.

If you prefer to capture payments without creating an order server-side, leave `createOrderUrl` blank. The checkout will still open with the calculated amount, but Razorpay strongly recommends using orders in production.

## Order notifications

Set `window.APP_CONFIG.notifications.orderWebhookUrl` to forward successful orders to a custom webhook (for example, a Google Apps Script or Zapier integration). The payload includes the customer profile, delivery instructions, amount (in INR), Razorpay identifiers and a `provider` flag.

The WhatsApp notification uses `window.APP_CONFIG.contact.whatsappNumber`. Update it if the café’s coordination number changes.

## Development notes

- Menu items are loaded from `menu.csv` / `assets/js/menu-data.js`.
- All scripts are plain ES2015+ and live in `index.html` or `assets/js`.
- Use a modern browser; the OTP flow requires support for the Firebase SDK and invisible reCAPTCHA.

Feel free to customise the styling or copy to a different hosting provider.
