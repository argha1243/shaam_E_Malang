window.APP_CONFIG = {
  /**
   * Firebase project configuration used for phone number sign-in.
   * Update all of the keys below with the details from your Firebase console.
   *
   * Leaving the placeholder values in place will disable OTP login and surface
   * a clear message in the UI instructing you to supply valid credentials.
   */
  firebase: {
    apiKey: "AIzaSyCria0XkWZf8qX3prUipN5Pljz09iqdmRg",
    authDomain: "127.0.0.1:5000",
    projectId: "shaam-e-malang",
    appId: "1:756333007367:web:3f3cce9430f0cf269710a2",
    messagingSenderId: "756333007367",
  },

  /**
   * Razorpay configuration. Replace the keyId with your publishable key and
   * set createOrderUrl to an endpoint that returns a Razorpay order response.
   */
  razorpay: {
    keyId: "YOUR_RAZORPAY_KEY_ID",
    /**
     * Optional: URL of a backend endpoint that creates Razorpay orders.
     * The endpoint should accept a POST request with { amount, currency, notes }
     * and return { id, amount, currency } from Razorpay.
     */
    createOrderUrl: "",
  },

  /**
   * Optional webhook that receives order notifications (e.g. for Google Sheets).
   * Leave blank to disable.
   */
  notifications: {
    orderWebhookUrl: "",
  },

  /**
   * Contact details used for WhatsApp notifications.
   */
  contact: {
    whatsappNumber: "917980104112",
  },
};
