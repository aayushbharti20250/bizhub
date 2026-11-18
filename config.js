/* =========================================================
   YOUR DETAILS: edit this ONE file and every page updates.
   (NRI page, checklist, wedding studio page, demo sites, app)
   Brand names, taglines and text were AI-generated on 2026-11-18.
   ========================================================= */
const CONFIG = {
  // ---- Only YOU can fill these (real contact details) ----
  whatsapp: "",                          // country code + number, digits only, e.g. "919876543210"
  upi: "",                               // e.g. "yourname@okhdfcbank" (used in the app's payment messages)
  email: "",                             // optional public business email

  // ---- AI-generated (change any time) ----
  ownerName: "the SaathCare team",       // replace with your own name for a personal touch
  city: "India",                         // replace with your city once you pick where you start
  areas: "select Indian cities (message us your parents' city and we'll confirm within a day)",
  languages: "English, Hindi and your parents' language",

  // NRI parent care brand
  brand: "SaathCare",
  tagline: "Far from home, never far from care.",

  // Wedding website studio brand
  weddingBrand: "Vivah Pages",
  weddingTagline: "Every ritual, every guest, one beautiful link.",

  // Shown when someone taps a WhatsApp button before your number is added
  comingSoon: "Bookings open very soon! Please check back in a day or two. 🙏",

  // Monthly income goal used by the app dashboard (₹)
  monthlyGoal: 66000
};
/* true once a real WhatsApp number is set */
CONFIG.hasWhatsapp = /^\d{10,15}$/.test(CONFIG.whatsapp) && !/^9?1?0+$/.test(CONFIG.whatsapp);
