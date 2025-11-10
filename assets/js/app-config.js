window.APP_CONFIG = {
  /**
   * Firebase project configuration used for phone number sign-in.
   * Update all of the keys below with the details from your Firebase console.
   */
  firebase: {
    /**
     * Demo Firebase project created for local development and QA.
     * You can replace these with your own production credentials at any time.
     */
    apiKey: "AIzaSyC4cUgt2XUT-demo-shaamEMalang",
    authDomain: "shaam-e-malang-demo.firebaseapp.com",
    projectId: "shaam-e-malang-demo",
    appId: "1:901357924650:web:demo0b8d1c6d6e7f43",
    messagingSenderId: "901357924650",
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
