/* =========================================================
   SITE SETTINGS — Dr. N. Vigeesh / Amrita Homeo & Mind Care
   Edit these values only. Everything else reads from here.
   ========================================================= */
window.SITE = {
  doctor: 'Dr. N. Vigeesh',
  clinic: 'Amrita Homeo & Mind Care Clinic',
  phone: '+91 98956 42004',
  whatsapp: '919895642004',          // digits only, with country code
  email: 'drnvigeesh@gmail.com',

  /* UPI payment (shown only after the patient clicks Book) */
  upiId: '',                          // e.g. 'vigeesh@okaxis' — leave '' until the doctor shares it
  upiName: 'Dr N Vigeesh',

  /* Consultation types: fee in rupees, Cal.com event slug */
  consults: {
    'online-video-consultation': { label: 'Online video consultation', mins: 30, fee: 300, cal: 'online-video-consultation' },
    'in-clinic-visit':           { label: 'Clinic visit, Pattambi',    mins: 15, fee: 200, cal: 'in-clinic-visit' },
    'mind-care-consultation':    { label: 'Mind care consultation (online)', mins: 30, fee: 400, cal: 'online-video-consultation' }
  },

  /* Cal.com booking page base (create in the doctor's own Cal.com account) */
  calBase: 'https://cal.com/dr-mohammed-mirshad-7n1ksu/',

  /* Daily.co video room (create in the doctor's own Daily account) */
  roomUrl: 'https://dotcombyarshees.daily.co/vigeesh-consult'
};
