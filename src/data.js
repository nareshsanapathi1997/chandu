import {
  BatteryCharging, Cable, Camera, Cpu, Headphones, MonitorSmartphone, Smartphone, Wrench,
} from 'lucide-react';

export const products = [
  {
    name: 'Samsung Galaxy phones',
    tag: 'MOBILES',
    group: 'Mobiles',
    icon: Smartphone,
    image: '/images/samsung-style.jpg',
    detail: 'A-series for daily use, M-series for big batteries, and S-series when you want a flagship camera. Tell us the budget and we will match a model that is in hand.',
    examples: [
      { name: 'Galaxy A15 5G', spec: '6 GB + 128 GB · 50 MP · 5000 mAh · Super AMOLED' },
      { name: 'Galaxy A35 5G', spec: '8 GB + 128 GB · 120 Hz · 50 MP OIS · IP67' },
      { name: 'Galaxy A55 5G', spec: '8 GB + 128 / 256 GB · metal frame · 50 MP' },
      { name: 'Galaxy M35 5G', spec: '6 GB + 128 GB · 6000 mAh · 120 Hz' },
      { name: 'Galaxy S24 FE', spec: 'Flagship camera and display · ask which storage is in stock' },
    ],
  },
  {
    name: 'Apple iPhone',
    tag: 'APPLE',
    group: 'Mobiles',
    icon: Smartphone,
    image: '/images/offer-phone.jpg',
    detail: 'New and pre-owned iPhones, subject to what arrived this week. We also fit tempered glass, cases and chargers for the same visit.',
    examples: [
      { name: 'iPhone 11', spec: '128 GB · dual camera · popular pre-owned choice' },
      { name: 'iPhone 13', spec: '128 GB · A15 · dual camera · battery health checked on used sets' },
      { name: 'iPhone 14', spec: '128 GB · crash detection · ask colour availability' },
      { name: 'iPhone 15', spec: '128 / 256 GB · USB-C · 48 MP main camera' },
      { name: 'iPhone 13 / 14 battery', spec: 'Service enquiry if the phone is already yours' },
    ],
  },
  {
    name: 'vivo & OPPO',
    tag: 'ANDROID',
    group: 'Mobiles',
    icon: Smartphone,
    image: '/images/pex-shop.jpg',
    detail: 'The phones most families in this area already use. Good for WhatsApp, camera and all-day charging.',
    examples: [
      { name: 'vivo Y28', spec: '8 GB + 128 GB · 6000 mAh · slim everyday phone' },
      { name: 'vivo T3', spec: '8 GB + 128 GB · 120 Hz · 50 MP' },
      { name: 'vivo V40', spec: '8 GB + 256 GB · curved AMOLED · 50 MP portrait camera' },
      { name: 'OPPO A3 Pro', spec: '8 GB + 128 GB · tough body · 5100 mAh' },
      { name: 'OPPO Reno 12', spec: '8 GB + 256 GB · 120 Hz AMOLED · 50 MP' },
    ],
  },
  {
    name: 'Redmi, realme & OnePlus',
    tag: 'ANDROID',
    group: 'Mobiles',
    icon: Smartphone,
    image: '/images/redmi-style.jpg',
    detail: 'Value 5G phones and Nord-series options. Storage and colour change often, so send the exact name before you travel.',
    examples: [
      { name: 'Redmi 13C', spec: '6 GB + 128 GB · entry phone · 50 MP' },
      { name: 'Redmi Note 14', spec: '8 GB + 128 GB · 108 MP class camera · 120 Hz' },
      { name: 'realme Narzo 70', spec: '8 GB + 128 GB · 50 MP · fast charging' },
      { name: 'realme 13 Pro', spec: '8 GB + 256 GB · portrait telephoto · curved display' },
      { name: 'OnePlus Nord CE4', spec: '8 GB + 128 GB · 100W charging · Snapdragon 7-series' },
    ],
  },
  {
    name: 'Cases, glass & audio',
    tag: 'ACCESSORIES',
    group: 'Accessories',
    icon: Headphones,
    image: '/images/earbuds.jpg',
    detail: 'Fitted in the shop so the glass and case match your exact model, including the camera cutout.',
    examples: [
      { name: '9H tempered glass', spec: 'Samsung A15–A55, vivo Y series, OPPO A series, iPhone 11–15' },
      { name: 'Clear and matte cases', spec: 'Shock corners · camera ring · ask your model name' },
      { name: 'TWS earbuds', spec: 'Touch controls · charging case · about 20–30 hours with the case' },
      { name: 'Wired earphones', spec: 'In-line mic for calls · Type-C or 3.5 mm' },
      { name: 'On-ear headphones', spec: 'Wired, for travel and long calls' },
    ],
  },
  {
    name: 'Chargers, cables & power',
    tag: 'ACCESSORIES',
    group: 'Accessories',
    icon: Cable,
    image: '/images/chargers.jpg',
    detail: 'Use the wattage your phone expects. A weak charger is a common reason a new phone “charges slowly”.',
    examples: [
      { name: '25W Type-C charger', spec: 'Suitable for many Samsung A-series phones' },
      { name: '33W / 45W charger', spec: 'vivo, OPPO and realme fast-charge bricks' },
      { name: '67W charger', spec: 'For supported realme and Redmi models only' },
      { name: 'Braided Type-C cable', spec: '1 m and 1.5 m · data plus charge' },
      { name: 'Power bank', spec: '10,000 mAh for a pocket backup · 20,000 mAh for travel' },
    ],
  },
  {
    name: 'Displays, batteries & flex cables',
    tag: 'SPARE PARTS',
    group: 'Spare parts',
    icon: Cpu,
    image: '/images/phones-row.jpg',
    detail: 'Parts are ordered or picked against the exact model number, not just the brand. A photo of Settings → About phone saves a wrong part.',
    examples: [
      { name: 'Samsung displays', spec: 'A14, A15, A34, A54 and similar — glass-only or full combo' },
      { name: 'Redmi displays', spec: 'Note 12, Note 13, 12C and other Note models' },
      { name: 'vivo & OPPO displays', spec: 'Y16, Y17, Y28, A16, A17, A78 and current Y / A series' },
      { name: 'Model-matched batteries', spec: 'Samsung, vivo, OPPO, Redmi, realme and iPhone enquiries' },
      { name: 'Charging board & speaker', spec: 'Tail flex, loudspeaker, earpiece, camera, power and volume flex' },
    ],
  },
  {
    name: 'Memory, OTG & small add-ons',
    tag: 'ACCESSORIES',
    group: 'Accessories',
    icon: Cable,
    image: '/images/pex-repair.jpg',
    detail: 'Useful when the phone storage is full or you need to move photos without a laptop.',
    examples: [
      { name: 'Memory card', spec: '64 GB, 128 GB and 256 GB · check if your phone has a slot' },
      { name: 'OTG adapter', spec: 'Type-C to USB · pendrive and keyboard' },
      { name: 'Car charger', spec: 'Dual port for two phones on a trip' },
      { name: 'SIM ejector & tray', spec: 'Lost tray replacements for common models' },
      { name: 'Lens guard', spec: 'Individual camera protectors where the case does not cover the bump' },
    ],
  },
];

export const services = [
  {
    icon: MonitorSmartphone,
    title: 'Display & touch repair',
    desc: 'We separate a cracked outer glass from a dead or lined display, then quote only the part you actually need.',
    examples: ['Spider cracks, picture still visible', 'Black screen after a fall', 'Touch dead on the lower half', 'Green or white lines on OLED'],
  },
  {
    icon: BatteryCharging,
    title: 'Battery replacement',
    desc: 'A tired cell usually shows up as sudden shutdowns, a swelling back cover, or heat while it sits on the charger.',
    examples: ['Dies around 20–30%', 'Needs two charges a day', 'Back panel lifting', 'Gets hot on the bedside charger'],
  },
  {
    icon: Cable,
    title: 'Charging & audio',
    desc: 'Charging ports collect dust and get loose. Speakers and mics are tested separately so we do not replace the wrong part.',
    examples: ['Charges only if the cable is held', 'Moisture warning that will not clear', 'Loudspeaker silent, earpiece fine', 'Other person cannot hear you'],
  },
  {
    icon: Cpu,
    title: 'Software support',
    desc: 'Slow phones, stuck logos and full storage. Account locks stay with the original owner — we do not bypass them.',
    examples: ['Stuck on the brand logo', 'Storage full, camera will not save', 'Apps crashing after an update', 'Help moving WhatsApp to a new phone'],
  },
  {
    icon: Camera,
    title: 'Camera & hardware',
    desc: 'Blur after a drop is often a shifted lens. A black preview can be the camera module or a software crash.',
    examples: ['Rear camera black', 'Photos blurry only on 2x', 'Flash will not fire', 'Power or volume key sunk in'],
  },
  {
    icon: Wrench,
    title: 'Water damage & general service',
    desc: 'If the phone went into water, switch it off and do not put it on a charger. Bring it in so we can open and inspect.',
    examples: ['Fell in a bucket or rain', 'SIM not detected', 'Phone restarts in a loop', 'Overheating in the pocket'],
  },
];

export const jobs = [
  {
    device: 'Samsung Galaxy A35',
    issue: 'Cracked glass, touch still works',
    story: 'Dropped on floor tiles. The picture is clear, but the glass is sharp at the corner.',
    steps: ['Confirm the model in Settings → About phone', 'Test touch across all four corners', 'Quote glass-only if the panel is healthy, or a full display if lines appear'],
  },
  {
    device: 'Redmi Note 12',
    issue: 'Battery empty by afternoon',
    story: 'The phone is two years old and now shuts down on WhatsApp video calls.',
    steps: ['Check charging current and heat', 'Look for a swollen cell before it bends the frame', 'Fit a model-matched battery and test a full cycle'],
  },
  {
    device: 'vivo Y28',
    issue: 'Charges only at an angle',
    story: 'The cable falls out unless it is propped against a book. Sometimes it shows charging, then stops.',
    steps: ['Clean the port under a lamp', 'Test with a known-good cable and brick', 'Replace the charging board if the pins are loose'],
  },
  {
    device: 'OPPO A78',
    issue: 'No speaker sound',
    story: 'Ringtones are silent. Call audio in the earpiece still works, so the whole phone is not “mute”.',
    steps: ['Play a test tone from the loudspeaker', 'Rule out a software mute or water in the mesh', 'Replace the loudspeaker if the mesh and software are fine'],
  },
  {
    device: 'realme Narzo',
    issue: 'Camera opens to a black screen',
    story: 'The camera app loads, then stays black. Gallery photos from last week are still there.',
    steps: ['Try safe mode to rule out a bad camera app', 'Inspect the lens for a crack', 'Quote a rear camera module if the hardware has failed'],
  },
  {
    device: 'iPhone 13',
    issue: 'Battery health is low',
    story: 'The phone says service battery, and it drops from 40% to off during maps.',
    steps: ['Read the battery health screen with you', 'Explain original-style versus compatible cell options', 'Replace, then check face unlock and charging before handover'],
  },
];

export const gallery = [
  { src: '/images/shop-front.jpg', title: 'The shop on Sabbavaram Road', caption: 'Chandu Mobile Care, 8-82, Lankelapalem — look for the blue and red board.' },
  { src: '/images/phones-row.jpg', title: 'Flagship cameras', caption: 'We compare camera bumps, storage and budget before you pick.' },
  { src: '/images/samsung-style.jpg', title: 'Samsung Galaxy', caption: 'A, M and S series — ask which colour is on the shelf today.' },
  { src: '/images/uns-crack.jpg', title: 'Redmi & similar Android', caption: 'Gradient backs like these are common on Redmi and realme.' },
  { src: '/images/iphone-style.jpg', title: 'iPhone in hand', caption: 'New and pre-owned sets. Used phones are checked before sale.' },
  { src: '/images/earbuds.jpg', title: 'TWS earbuds', caption: 'Charging case included. We pair them with your phone in the shop.' },
  { src: '/images/chargers.jpg', title: 'Chargers & cables', caption: 'Match the wattage. Do not run a 15W brick on a 67W phone.' },
  { src: '/images/accessories.jpg', title: 'Headphones', caption: 'Wired headphones for calls, classes and travel.' },
  { src: '/images/phone-yellow.jpg', title: 'Older models too', caption: 'We still service and accessorise phones from a few years ago.' },
];

export const bringList = [
  ['Exact model', 'Settings → About phone. “Samsung” alone is not enough for a display or battery.'],
  ['What happened', 'Drop, water, slow drain, or it failed after an update. When it started matters.'],
  ['Lock you know', 'Pattern, PIN or passcode so we can test touch, sound and cameras after the work.'],
  ['A photo helps', 'Send a picture of the damage and the About screen on WhatsApp before you come.'],
];
