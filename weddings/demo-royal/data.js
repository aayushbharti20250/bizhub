// DEMO: fictional couple and venues. For a client, copy this folder and edit only this file.
window.WEDDING = {
  theme: "royal",                       // "royal" (maroon & gold) or "coastal" (teal & gold)
  bride: "Aanya",
  groom: "Vihaan",
  tagline: "Together with their families",
  dateText: "12 – 14 February 2027",
  place: "Udaipur, Rajasthan",
  mainDateISO: "2027-02-14T19:00:00+05:30",   // drives the countdown
  hashtag: "#AanyaWedsVihaan",
  storyEmoji: "🪷",
  story: [
    "We met in a crowded college library in Pune, both reaching for the last copy of the same book. Neither of us let go, and we've been arguing about books happily ever since.",
    "Seven years, two cities and one very patient set of parents later, we're getting married in the city of lakes, and it wouldn't be complete without you."
  ],
  events: [
    { emoji:"🌼", name:"Haldi", when:"Fri, 12 Feb · 10:00 am", venue:"Courtyard Garden, Hotel Rajvilas (demo venue), Udaipur",
      startISO:"2027-02-12T10:00:00", endISO:"2027-02-12T13:00:00", dress:"Shades of yellow, and clothes you don't mind getting messy!",
      mapUrl:"https://maps.google.com/?q=Udaipur", note:"Brunch served." },
    { emoji:"🌿", name:"Mehendi", when:"Fri, 12 Feb · 4:00 pm", venue:"Poolside Lawns, Hotel Rajvilas (demo venue)",
      startISO:"2027-02-12T16:00:00", endISO:"2027-02-12T20:00:00", dress:"Greens & florals, Indo-western welcome",
      mapUrl:"https://maps.google.com/?q=Udaipur", note:"Mehendi artists for all the ladies (and brave gents)." },
    { emoji:"🎶", name:"Sangeet", when:"Sat, 13 Feb · 7:30 pm", venue:"Durbar Hall, Hotel Rajvilas (demo venue)",
      startISO:"2027-02-13T19:30:00", endISO:"2027-02-13T23:59:00", dress:"Glam: sequins, sherwanis, anything that sparkles",
      mapUrl:"https://maps.google.com/?q=Udaipur", note:"Family performances from 8 pm. Dinner and DJ to follow." },
    { emoji:"🐎", name:"Baraat & Pheras", when:"Sun, 14 Feb · 5:00 pm", venue:"Lakeside Lawns, Hotel Rajvilas (demo venue)",
      startISO:"2027-02-14T17:00:00", endISO:"2027-02-14T21:00:00", dress:"Traditional: pastels and jewel tones",
      mapUrl:"https://maps.google.com/?q=Udaipur", note:"Baraat leaves the hotel gate at 5 pm sharp. Pheras at 7:30 pm." },
    { emoji:"✨", name:"Reception", when:"Sun, 14 Feb · 9:00 pm", venue:"Lakeside Lawns, Hotel Rajvilas (demo venue)",
      startISO:"2027-02-14T21:00:00", endISO:"2027-02-14T23:59:00", dress:"Formal: gowns, suits, bandhgalas",
      mapUrl:"https://maps.google.com/?q=Udaipur" }
  ],
  travel: [
    { emoji:"✈️", title:"Getting there", lines:["Nearest airport: Udaipur (UDR), 25 min from the venue.","Pickups run every hour on 11 & 12 Feb. Tell us your flight in the RSVP."] },
    { emoji:"🏨", title:"Where you'll stay", lines:["Rooms are booked for all outstation guests at Hotel Rajvilas (demo).","Check-in 12 Feb from 12 noon · Check-out 15 Feb by 11 am."] },
    { emoji:"🌤️", title:"Weather", lines:["Days are around 25°C and evenings around 10°C. Bring a shawl or jacket for the outdoor evening events."] },
    { emoji:"📞", title:"Need help?", lines:["Guest desk (Rahul, Vihaan's cousin): +91 00000 00000","WhatsApp any time from 8 am to 11 pm."] }
  ],
  rsvpBy: "15 January 2027",
  rsvpContactName: "the guest desk",
  rsvpWhatsapp: (typeof CONFIG !== "undefined" ? CONFIG.whatsapp : "910000000000"), // demo: RSVPs come to you, so prospects see it work
  googleFormUrl: "",                      // optional: paste a Google Form link to offer it as well
  faq: [
    ["Can I bring my kids?", "Of course! There's a supervised kids' corner at the Sangeet and Reception."],
    ["What about gifts?", "Your presence is our present. If you'd still like to bless us, there will be a shagun box at every event."],
    ["Is there parking?", "Yes. Free valet parking at the venue for all events."],
    ["Will there be alcohol?", "Only at the Sangeet and Reception. All other events are dry."],
    ["I have a dietary restriction.", "Tell us in the RSVP. Jain, vegan and allergy-friendly meals are available."]
  ],
  credit: { name: (typeof CONFIG !== "undefined" ? CONFIG.weddingBrand : "Vivah Pages"), url: "../" }   // links back to your studio page
};
