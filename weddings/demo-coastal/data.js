// DEMO: fictional couple and venues. For a client, copy this folder and edit only this file.
window.WEDDING = {
  theme: "coastal",
  bride: "Meera",
  groom: "Karthik",
  tagline: "Join us by the backwaters",
  dateText: "22 – 24 January 2027",
  place: "Alleppey, Kerala",
  mainDateISO: "2027-01-24T09:30:00+05:30",
  hashtag: "#MeeraKarthikForever",
  storyEmoji: "🌴",
  story: [
    "Karthik moved to Bengaluru for work and Meera was the colleague assigned to 'show him around'. The tour never really ended.",
    "We're celebrating the way we've always dreamt: by the water, with good food and the people we love most. Come for the wedding, stay for the sunsets."
  ],
  events: [
    { emoji:"🛶", name:"Welcome Lunch", when:"Fri, 22 Jan · 1:00 pm", venue:"Lake Deck, Palm Lagoon Resort (demo venue), Alleppey",
      startISO:"2027-01-22T13:00:00", endISO:"2027-01-22T16:00:00", dress:"Breezy & casual: linens and cottons",
      mapUrl:"https://maps.google.com/?q=Alleppey", note:"A traditional sadya on banana leaves to welcome you." },
    { emoji:"🌺", name:"Mehendi & Music", when:"Fri, 22 Jan · 6:00 pm", venue:"Coconut Grove, Palm Lagoon Resort (demo venue)",
      startISO:"2027-01-22T18:00:00", endISO:"2027-01-22T22:00:00", dress:"Bright colours & florals",
      mapUrl:"https://maps.google.com/?q=Alleppey" },
    { emoji:"🎉", name:"Sangeet Night", when:"Sat, 23 Jan · 7:00 pm", venue:"Beach Lawns, Palm Lagoon Resort (demo venue)",
      startISO:"2027-01-23T19:00:00", endISO:"2027-01-23T23:59:00", dress:"Festive: something that dances well",
      mapUrl:"https://maps.google.com/?q=Alleppey", note:"Houseboat sunset cruise for guests at 4 pm (optional)." },
    { emoji:"🪔", name:"Muhurtham", when:"Sun, 24 Jan · 9:30 am", venue:"Temple Courtyard Hall (demo venue), Alleppey",
      startISO:"2027-01-24T09:30:00", endISO:"2027-01-24T12:30:00", dress:"Traditional: kasavu sarees, silk, mundu & veshti",
      mapUrl:"https://maps.google.com/?q=Alleppey", note:"Please be seated by 9:15 am. The muhurtham is at 10:05 am." },
    { emoji:"🌅", name:"Reception", when:"Sun, 24 Jan · 7:00 pm", venue:"Beach Lawns, Palm Lagoon Resort (demo venue)",
      startISO:"2027-01-24T19:00:00", endISO:"2027-01-24T23:00:00", dress:"Evening formal",
      mapUrl:"https://maps.google.com/?q=Alleppey" }
  ],
  travel: [
    { emoji:"✈️", title:"Getting there", lines:["Fly into Kochi (COK), about 1 hr 45 min by road.","Resort shuttles leave the airport at 10 am, 1 pm and 4 pm on 21 & 22 Jan."] },
    { emoji:"🚆", title:"By train", lines:["Alappuzha station is 20 min from the resort. Tell us your train and we'll pick you up."] },
    { emoji:"🏝️", title:"Your stay", lines:["Lake-view cottages are reserved for all outstation guests.","Check-in 22 Jan, 11 am · Check-out 25 Jan, 11 am."] },
    { emoji:"🧴", title:"Pack this", lines:["Sunscreen, mosquito repellent, comfortable sandals, and a light shawl for the boat."] }
  ],
  rsvpBy: "30 December 2026",
  rsvpContactName: "Meera's brother Arjun",
  rsvpWhatsapp: (typeof CONFIG !== "undefined" ? CONFIG.whatsapp : "910000000000"), // demo: RSVPs come to you, so prospects see it work
  googleFormUrl: "",
  faq: [
    ["Is the temple ceremony open to all guests?", "Yes, everyone is welcome. Please remove footwear before entering the hall."],
    ["What's the weather like?", "Warm and humid, around 30°C in the day. Evenings by the water are pleasant."],
    ["Can I extend my stay?", "Yes! Tell us in the RSVP and we'll share the resort's special rate."],
    ["Gifts?", "No boxed gifts please. Your blessings are more than enough."],
    ["Language?", "Ceremonies are in Malayalam and Tamil. We'll have a printed guide explaining each ritual in English."]
  ],
  credit: { name: (typeof CONFIG !== "undefined" ? CONFIG.weddingBrand : "Vivah Pages"), url: "../" }   // links back to your studio page
};
