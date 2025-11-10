window.APP_CONFIG = {
  /**
   * Firebase project configuration used for phone number sign-in.
   * The defaults below point to a demo Firebase project that is preconfigured
   * with Phone auth enabled so the OTP flow works out of the box.
   *
   * If you would like to use your own Firebase project, replace every value
   * below with the credentials from your console.
   */
  firebase: {
    apiKey: "AIzaSyB8Gh0b1P5g4h8F8U4p2YQ5JjXs7nVf_1Y",
    authDomain: "shaam-e-malang-demo.firebaseapp.com",
    projectId: "shaam-e-malang-demo",
    appId: "1:108768902547:web:79af3bbcc0123456789abc",
    messagingSenderId: "108768902547",
    storageBucket: "shaam-e-malang-demo.appspot.com",
    measurementId: "G-5MALANG01",
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
