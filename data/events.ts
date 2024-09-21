export interface Event {
  id: string;
  eventName: string;
  start: string;
  end: string;
  eventBlurb: string;
  host: string;
  image: string;
  location: string;
  eventType: string;
  infoLink: string;
  mapLink: string;
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

const originalEevents = [
  {
    "eventName": "Sustainable Storytelling: On and Off Camera",
    "start": "9/27/2024 17:00",
    "end": "9/27/2024 19:00",
    "eventBlurb": "Come join us at The Climate Imaginarium for an exciting event focused on sustainable storytelling! \n\nWhether you're a filmmaker, writer, or just passionate about the environment, this event is for you. Learn what makes an impactful story that inspires change both on and off camera. \n\nThis panel will be MC’d by eco-coordinator, producer, and sfx makeup artist Julie Souza (she/her) and will introduce:\n- Children’s Media Storyteller and Educator Suzie Hicks (they/them)\n- Environmental Production Coordinator and Journalist Gabriella Sotelo (she/her)\n- Sustainable Director, Producer, and Set Designer Aspen Nelson (they/them) \n\nCatch a sneak-peek of the upcoming short film: Micro-Plastination. Get your face painted with biodegradable glitter just like in Micro-Plastination by Art Jam Collective. And end your afternoon with an artist mixer with light snacks and drinks!\n\nConnect with like-minded individuals and explore innovative ways to communicate important messages. Don't miss out on this unique opportunity to dive into the world of storytelling with a focus on sustainability! BYOC (bring your own cup!)\n\nAll proceeds will support the short film Micro-Plastination. No one will be turned away due to funds.",
    "host": "The Climate Imaginarium",
    "image": "Micro Plastination.zip - 86.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/KVqvkBSGdN7qFZM6Tf4NCQ/zadkH9TCmoZdG8JGwYmFvgXXxkdcPzk65BQrO5_X2BtxICJmkZZST6gYQsx8cxZxj5M2HpPOlUkdNXi9Rrc9W2nenAYFmIKn7OdNgC9qTlHX4G3zlLw75GISVuPXgGDTAe1mz4joNoZUMtX1_T6o8CkapX9hAgizVxOav3Fi3LfEfT6YyXXMmeen3eCD4Y7R/XEf8izzN2A5fPVaUNu_ha6lg3jz8gQ6Hq4L6kvQy1tU)",
    "location": "406A Comfort Rd, New York, NY 10004, United States",
    "eventType": "Film Screening,\"Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://partiful.com/e/JrrOkCgPTAvXvLuh8o8t",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    "eventName": "Climate, Comedy, & Cocktails",
    "start": "9/26/2024 1:00",
    "end": "9/26/2024 3:30",
    "eventBlurb": "Join us at the China Institute of America on September 25, 2024, for a groundbreaking event that blends environmental activism with art and entertainment. \"Climate, Comedy, and Cocktails,\" hosted by the Serica Initiative in partnership with the WNET Group, offers an engaging evening designed to spark conversation and inspire action towards a sustainable future.  \n\nThis will be a dynamic evening celebrating the AAPI artists involved in the ALL ARTS/PBS documentary series \"Climate Artists\", featuring well known artivists Maya Lin, sTo Len, and Eddie Ahn, set to be released the week of September 22, coinciding with Climate Week NYC. This event features an insightful panel discussion from climate experts Jeffrey Shaman and Becca Benner, comedy from rising star Jiaoying Summers, climate-conscious food & cocktails, an interactive fair for guests to enjoy other sustainable products, and an exclusive world-premiere screening!",
    "host": "The Serica Initiative",
    "image": "CCC-quote 1080x1080.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/lAwl44HGygm7tTyXxSRVFw/GI1_gkVDMOrXHCSReAPUiYf1X4aTws5MPGK31TYA2X2plJltAdVjNxKmUCaauBWmGmW5OxWU1z35W46uI-Le7itvZv0E0jZRWFFMJyF6Xua8t3O659QWD9VrO6BKTPjsp5F2Ucd2LUlBubeyzmiiafdUeI-PvkEHHhUDByL6U3k/zkAMG-QNGP4Lx3gM-AiuB_AIiDT7RJMamD84ASapqzY)",
    "location": "100 Washington St. 1st Fl, NYC",
    "eventType": "Film Screening,\"Panel Discussion, Keynote or Fireside Chat\",Networking Mixers,Booth Fair",
    "infoLink": "www.sericainitiative.org/climate-comedy-cocktails",
    "mapLink": "https://www.google.com/maps/place/100+Washington+St+1st+Fl,+New+York,+NY+10006,+USA/@40.7084339,-74.01714,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a10efaba5ff:0x9c88a0de8d3f4590!8m2!3d40.7084299!4d-74.0145651?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Street Work Earth",
    "start": "9/22/2024 9:00",
    "end": "9/22/2024 3:00",
    "eventBlurb": "Join Make Justice Normal for Street Work Earth, a free street arts & climate action festival created by artists committed to fostering joyful, community-led action in public spaces. We'll spend the day experiencing and co-creating art alongside incredible artists and learning about concrete environmental & climate action on 34th Avenue's amazing Open Street in Jackson Heights, Queens. RSVP to save the date and stay updated on the agenda. People of all ages welcome!! \n\nVisit https://www.makejusticenormal.org/the-arisen/street-works for a growing list of participating artists. \n\nMJN's inaugural Street Work Earth, is a public arts festival dedicated climate and environmental justice. This in-person event is an opportunity to participate in art collaboration, make new friends involved in the arts, learn about New York climate policies, and get connected to action groups working year-round to make New York City a climate-forward city. See you there! \n\nWhy Street Works, Why Now? \n\nStreet Works are public-space galleries for participatory art, by and for artists dedicated to making justice normal. In a time in which democracy is at risk and collective civic participation is needed more than ever, we hope to support one home by and for these artists who go beyond interactive art to sharing power with audience in 2-way and 20-way conversation that enables the brilliance of passersby to collectively emerge. Over time and scale, we hope this is one way for democracy to become a personal and joyful experience.",
    "host": "Make Justice Normal",
    "image": "Screenshot 2024-08-19 at 10.13.21 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/W44iu10nGgKG6zHYs07uKw/iitcpiyCGSyG_Fw32Rtw9XxQl8rLdL7MZ6cD8Q3Y0n8K_x9wmDf_XS7ZCN_Ro45I2-MjIXR0tmyWOAQmQDXs9wJ8j_T5pc67kuzomq4-3A2_qXqE1AkL_wLXXNbCe9_yQrk17YS04NYA3Fr1sJiHwVHos0SXF7Y_GCjQnB54Uu-ULBnsDQGZU2kTYw99_67v/zvdTq6HIYE3QaEppJuPu8D7psrPz_PSnSftrLv7fqDY)",
    "location": "34th Avenue, 11372, Jackson Heights, New York",
    "eventType": "Art + Photo Gallery,Public Arts Festival",
    "infoLink": "https://www.makejusticenormal.org/",
    "mapLink": "https://www.google.com/maps/place/34th+Ave,+Queens,+NY,+USA/@40.7543751,-73.8820326,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25fa49a2e2aab:0xa1eaf390d7f05233!8m2!3d40.7543711!4d-73.8794577!16s%2Fg%2F1tdyx8n0?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Climate Film Festival",
    "start": "9/20/2024 4:00",
    "end": "9/22/2024 6:00",
    "eventBlurb": "The Climate Film Festival (CFF) is the largest festival of its kind in New York City, supported by the Guardian US and featuring a jury of 15 industry leaders in climate.\n\nCFF aims to rewrite the narrative on climate change by harnessing the power of motion pictures, showcasing new and established voices, classic climate films, and energizing, human stories.\n\nThe Climate Film Festival takes place during the opening weekend of Climate Week NYC, from Friday, September 20th to Sunday, September 22nd.\n\nFilms will be screened in-person in NYC, with the majority shown in two screening rooms at Firehouse: DCTV's Cinema for Documentary Film, located at 87 Lafayette Street in Manhattan, just south of Canal St.\n\nThe festival will feature:\n\n20 film programs over the course of the weekend, including a combination of features and shorts; narrative and documentary.\n6 panels and workshops for filmmakers, climate professionals, and general audiences about the impacts of climate storytelling, ways to develop new climate narratives, sustainable production, and more.\nA Solutions Hub, where attendees can gather for complimentary coffee and snacks and learn from groups doing on-the-ground work to build a better future.\n\nThe Climate Film Festival program will be announced in early August, and tickets will be available for purchase in mid-August.",
    "host": "Climate Film Festival",
    "image": "Screenshot 2024-08-19 at 10.21.08 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/C0OPIhAcM9pSKthpm1xH0Q/xy-7QPy4EBGJzYtFW1CmijnQs3E1ljcVrpztJpkMmwkeIr1Bu2oSeoUwaBmZC9VnEXiv-v4d0Qpt8xu72hUo7jskgixs9XKKxkuot87C9vYg-EHeOpkF1GnybFDj7YMO8M53LtJkpJIDymzRSdqQZC6umNJ_wg3j-8LWEeKQrQM92O_ZZiGl97U7VKtNwP7H/77myclNC2s5C0vKHaeK27CqjicO4Y3L5_HSKudygsNY)",
    "location": "Firehouse: DCTV's Cinema for Documentary Film\n87 Lafayette Street New York, NY 10013 United States",
    "eventType": "Film Screening",
    "infoLink": "http://climatefilmfest.com/",
    "mapLink": "https://www.google.com/maps/place/Firehouse:+DCTV's+Cinema+for+Documentary+Film/@40.7173502,-74.0038109,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a20b0f04253:0xd661fb2b8bcbe9be!8m2!3d40.7173462!4d-74.001236!16s%2Fg%2F1hhc0z4t1?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Arts For the Future",
    "start": "9/13/2024 7:00",
    "end": "8/23/2024 7:00",
    "eventBlurb": "Interested to see how artists lead in creating impactful events for climate action, gender/racial justice and more?  The “Arts for the Future” Festival is an artist-led celebration of arts and cultural expressions in the lead up to and during the UN Summit of the Future. The festival is essential to re-envision and transform the role of arts and culture in sustainable development by creating a more representative, fair, inclusive, and sustainable ecosystem for artists and creative practitioners to lead and be represented. It addresses the urgent need to change outdated systems that currently limit the impact and potential of the arts sector.",
    "host": "Create2030",
    "image": "Screenshot 2024-08-19 at 10.26.40 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/u2qF7EZ_vp0deCFltlsWPw/jBOWhMlKiEmOBwVxpfCZird4o_BM3DI2pCwvzByjmU54Dv06CfWZ6Gyu42M_k6PlaCngtjBX96tZednLockcKP5lmB2p5kuO9TA3X0ev9GeVJ4-Jv1RthnszsUr7IxuzXFbVUd747IyWudPwXbRdd-MJm8e47GAKY_xy9-lnupVDg60vypjTaMIsMxzRyfUu/s2hg8Hku34AvMW23M5d2amQWFZSiKb67dbWpupNRH6A)",
    "location": "",
    "eventType": "Public Arts Festival",
    "infoLink": "https://www.artsforthefuturefest.com/",
    "mapLink": ""
  },
  {
    "eventName": "Stand-up for Humans",
    "start": "9/23/2024 2:00",
    "end": "9/23/2024 4:00",
    "eventBlurb": "Series of events to edu-tain audiences with climate-themed comedy from comedians, experts, and creatives.  Reception to foster connections and strengthen the climate movement.",
    "host": "Save the Humans",
    "image": "Screenshot 2024-08-19 at 10.28.35 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/DvOB4QVN2My8M79mGJWw3w/8VMUMeJn21dWXtunLydNxRqgROUTI37jcJu0e16vog37Q9yiuSsmCh82VlOdlRJohaIfo8Zkr383jrcqeuoPeIRwFgHZfq0hLr_LT5fAVgoebTszSUvNX4Gs9jlwVwNmMRDG8_SP_lzqLzcY07KVqXfluJTQdbdI1mKfstPtrxAZfEc93lVuvjTHSHws7q4N/XEQD9BTU4iPnpaT5r8L2Bl9GxQ_rls0oYA2YA-c-j4k)",
    "location": "Caveat Comedy Club",
    "eventType": "Comedy Show",
    "infoLink": "https://www.savethehumans.org/",
    "mapLink": "https://www.google.com/maps/place/Caveat/@40.7207454,-73.9870089,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25981f54d9667:0x39729f335791cb9c!8m2!3d40.7207414!4d-73.984434!16s%2Fg%2F11fx_5rn3q?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Sustainability Productions 101",
    "start": "9/24/2024 10:00",
    "end": "8/24/2024 10:50",
    "eventBlurb": "Curious about the environmental impact of producing your favorite shows and movies? Ever thought about how cast and crew move around, what powers sets and studios, or what happens to props when filming is done? Learn about the sustainability fundamentals of TV and film production from the experts. They’ll get candid about the industry’s overall impact, the solutions being piloted and scaled, and what’s needed to move faster. Session insights will be relevant for any organization facing challenges and opportunities around cleantech availability, adoption and scalability.",
    "host": "Futerra,Sustainable Entertainment Alliance (SEA)",
    "image": "Screenshot 2024-08-19 at 10.41.18 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/IP73imNkhq2mTC0cD9SWqA/SMeJV8Oh-vDDxvF4Nu0M9VhERe1WrkyKgtevhUFYg1i_TtYuC-knVHvSTFGIL8BOpk8-b3OcBzvCN0YkFSePbOTWSq-YbWk9mkfSYb-MvmOoeQIVfqZHu0-lxN6mQG2w5YRF1C13sokDVXpKVg3u6OBhdHYRAv_r5jG78RGPVnIuj5PO2s8uLsG0ndtGpTbW/P9EM7cgMRgomUEvmFHAh8wO64WIp9UDD-ilVeQR7jI8)",
    "location": "Solutions House, Studio 525",
    "eventType": "Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://www.wearefuterra.com/",
    "mapLink": "https://www.google.com/maps/place/Studio+525/@40.749189,-74.0075979,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2599c7cfc99ab:0x7d2014ba92a456e8!8m2!3d40.749185!4d-74.005023!16s%2Fg%2F11g10pmk9l?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Sustainability Storytelling 101",
    "start": "9/23/2024 23:15",
    "end": "9/24/2024 0:05",
    "eventBlurb": "Ever wondered how Hollywood brings climate to life on screen? We’ll break down the basics—what it is, what it isn’t, who’s doing it and how. From writers to studios to consulting experts, we will cover the key players involved in crafting authentic and creative sustainability stories. What inspires creators? What hurdles do they face? What works and doesn’t work when engaging them? Whether you’re in the entertainment business or not, get a glimpse at the inner workings of film and tv development.",
    "host": "Futerra,Sustainable Entertainment Alliance (SEA)",
    "image": "Screenshot 2024-08-19 at 10.44.06 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/vLack0ZkO9X13A9Mte4V_A/ltFut6CENPRGzmSRyBv2D_49JGYMNxY_EvHyVdwDmqhD3dupjS0_IkSMrHSJC2jrH_fFDxjmYI0WcZaPOAY5_Y7qpnFGvkjxOLD02uCAe9Jkr_oUS0wyZ3lN3NqEaF-kPKRHD_QXKjzdmW83CKFvDgtqvZcVKJzUdvxWampduNTxSJp1EoGBR-qlI0uRCLKc/mhaYJ5c7KNYbCsP4Z0NgvJ-Ksfn5K3Amfd4QO0g_UvI)",
    "location": "Solutions House, Studio 525",
    "eventType": "Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://www.wearefuterra.com/",
    "mapLink": "https://www.google.com/maps/place/Studio+525/@40.749189,-74.0075979,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2599c7cfc99ab:0x7d2014ba92a456e8!8m2!3d40.749185!4d-74.005023!16s%2Fg%2F11g10pmk9l?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Does Sustainability Storytelling Inspire Change?",
    "start": "9/24/2024 0:25",
    "end": "9/24/2024 1:25",
    "eventBlurb": "Remember the documentary that inspired your uncle to buy an EV? Or the scene in that political thriller that convinced your sister to vote? Entertainment is often recognized for its ability to change hearts and minds – but is there solid evidence to back these anecdotal claims? In this session, social scientists and storytellers will synthesize some of the latest research on this topic. They’ll cover major takeaways and play specific scenes that were particularly engaging with audiences. Come and hear what the data has to say.",
    "host": "Futerra,Sustainable Entertainment Alliance (SEA)",
    "image": "Screenshot 2024-08-19 at 10.44.06 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/Zao9QK7rZfgB-x7oSeNxIQ/lkpnvuIQ_LJBi_ZUmqhiBCTJ42iXc9AWwzAU9J_M0TY80sMRfs4_AZ6hlItAnF5yr8IiskpTcHzgqYC0vrhx5ov8cg64Pa8lSX5oSEzd9ZaSpV7secK_iTmVt6dk9lU_9U7NMr5J7feOxzRbV4TZI1k_OiyFVcBmiCB9SpYYqiPMdI1BBA3FdRZA45WBeWnI/qo3blAYT3VOIcXITAMDhJH7k4e8ehQz1hbJV61oq8o0)",
    "location": "Solutions House, Studio 525",
    "eventType": "Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://www.wearefuterra.com/",
    "mapLink": "https://www.google.com/maps/place/Studio+525/@40.749189,-74.0075979,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2599c7cfc99ab:0x7d2014ba92a456e8!8m2!3d40.749185!4d-74.005023!16s%2Fg%2F11g10pmk9l?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Our Oceans",
    "start": "9/24/2024 1:45",
    "end": "9/24/2024 2:35",
    "eventBlurb": "Our Oceans screening and panel discussion with filmmaker James Honeyborne",
    "host": "Futerra,Sustainable Entertainment Alliance (SEA)",
    "image": "Screenshot 2024-08-19 at 10.44.06 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/Ehv_qJ90Keq70t8iGeltZA/Aga7tP-2z36jjwt1SUXPflzOMhyFdyXK400bka8-y_QtLsWTEwLcUyyqNIzJN1dRKNNi-cnqy4GnnoB32wVBLAhb0lgBfHOc0khkqq5zJM7qKqsTxH9TW2eWzXf3rm8TLvlKE9s--ZSfAMgG9LmUlIrd-PIWR2jSnUkWtlG9GC1BW-4_pK8ICIYJ-kYC9c20/u35vaf4ZF5gi7CyI50SCIb9kNbWTp1Yv4asaaWxAIAY)",
    "location": "Solutions House, Studio 525",
    "eventType": "Film Screening,\"Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://www.wearefuterra.com/",
    "mapLink": "https://www.google.com/maps/place/Studio+525/@40.749189,-74.0075979,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2599c7cfc99ab:0x7d2014ba92a456e8!8m2!3d40.749185!4d-74.005023!16s%2Fg%2F11g10pmk9l?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Entertaining Audiences… One Sustainability Scene at a Time",
    "start": "9/24/2024 3:00",
    "end": "9/24/2024 3:55",
    "eventBlurb": "A changing climate is part of today’s reality, and audiences around the world want to see that reflected on screen. Storytellers get this and are weaving sustainability into their shows and films, from subtle moments to central themes. Whether it’s a rom-com or a thriller, they’re finding unique, authentic and entertaining ways to bring sustainability into their art, making audiences feel all the feels along the way. Join some of the writers, producers, and directors behind your favorite shows and movies, as they reveal the thinking and inspiration behind their most iconic sustainability scenes.",
    "host": "Futerra,Sustainable Entertainment Alliance (SEA)",
    "image": "Screenshot 2024-08-19 at 10.44.06 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/uIVVOE1UcF_8ylKOE0E7OQ/_qwog0NU5sR8GKU08S_H4Etjq35w2l--_QqEL2qnj5uOMt2q4w6tlz7fHxPo5NEM3Y7ccv1pWgtX7IQZfI9kaXF0D4tbqUUGaijce7mgp71lCrFNBki5I9eVbpEIqHHlkgEdb6V4BvY4i1NxMJyJnzBHr7fzFsOacJZlM_QYSHctyo1jUyGLjXxGGrStg-bN/ioPt1VOtruMlXuJis1_psH8AhBKMJiuPFfKAaOwvrBQ)",
    "location": "Solutions House, Studio 525",
    "eventType": "Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://www.wearefuterra.com/",
    "mapLink": "https://www.google.com/maps/place/Studio+525/@40.749189,-74.0075979,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2599c7cfc99ab:0x7d2014ba92a456e8!8m2!3d40.749185!4d-74.005023!16s%2Fg%2F11g10pmk9l?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Climate, Comedy and Cocktails",
    "start": "8/25/2024 4:00",
    "end": "9/25/2024 6:30",
    "eventBlurb": "Discover Eco-Innovators: Step into a greener future with our Eco-Fair, where you can meet pioneering businesses dedicated to sustainability. From cutting-edge eco-tech to sustainable lifestyle products, connect with the people redefining our environmental impact. ​\n\nMingle at the Eco-Mixer: Savor the taste of change with our exquisite array of climate-conscious appetizers and signature cocktails. Network with a vibrant community of eco-advocates, thought leaders, and passionate attendees in an informal, dynamic setting.\n\nEngage with Climate Visionaries: Delve into critical discussions led by renowned experts exploring the urgent topics of climate change and sustainable solutions. Our panels promise profound insights and actionable knowledge, sparking dialogue and inspiration. \n\nComedy Night with Jiaoying Summers: Lighten the evening with laughter as Jiaoying Summers takes the stage. Her sharp wit and insightful comedy shed a humorous light on serious environmental issues, proving that change can come with a smile. \n\nPremiere Screening: Climate Artists Season 2: Be the first to watch an exclusive premiere of the latest \"Climate Artists\" episode. Experience firsthand how art and activism merge in the compelling narrative of sTo Len, whose work challenges and inspires environmental responsibility. Meet Artistic \n\nChangemakers: An unprecedented opportunity to meet influential AAPI artists like sTo Len and BD Wong. Engage in intimate discussions about their artistic journeys, their roles as activists, & how they use their platforms to advocate for the planet. \n\nTicket Information: Eco Pass ($35): General entry to the event, allowing full access to panels, performances, and the premiere. \n\nEco+ Ticket ($125): Includes all the benefits of the Eco Pass plus a copy of Christine Wong’s \"The Vibrant Hong Kong Table\" and a donation to The Serica Initiative.",
    "host": "The Serica Initiative",
    "image": "Screenshot 2024-08-19 at 11.07.37 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/nE0j_HF4uN0IktaB022dAg/L43_S5f1OeuurMy8U-9bsdt79NTa2VnOOCE81zz4fsqHQJfOu5zXTZyVhMgW2xx77_BKWmIjkscBtkPBcf0Ler7GLkG9B2xb6WKs6V3YSxuO4b6oVNpfg9c88R53VT5G0kQ77F3E6yZrvlU4-3WDWZ3OV3OqAzrvPGg_S81qT7yLC-zOUb165MiRdxITR6J0/US_9cUu7GlSju-NiNW4x5Ob4-5EZmLh2gKFEQZIjqAY)",
    "location": "40 Rector St, 10006, New York, NY",
    "eventType": "Networking Mixers,\"Panel Discussion, Keynote or Fireside Chat\",Film Screening,Comedy Show",
    "infoLink": "https://www.sericainitiative.org/",
    "mapLink": "https://www.google.com/maps/place/40+Rector+St,+New+York,+NY+10006,+USA/@40.7084315,-74.0173008,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a10f21904c3:0x7958ecb500febeb7!8m2!3d40.7084275!4d-74.0147259!16s%2Fg%2F11c2g18gc4?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "So You Think You Can Science? It",
    "start": "9/25/2024 3:00",
    "end": "9/25/2024 6:00",
    "eventBlurb": "How difficult is all this science stuff? Could a comedian crack the code of “1.5C” or decipher the mystery of the Gulf Stream? Watch comedians tackle mind-bending science challenges, while our expert panel of climate scientists provide insightful commentary and debunk myths. Can our comedians impress our daring scientists and win the coveted right to proclaim, “I Can Science!” Come science around and find out!",
    "host": "Futerra,Sustainable Entertainment Alliance (SEA)",
    "image": "Screenshot 2024-08-19 at 10.44.06 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/Gj1Y49jq-EXFdSwgyh0K3w/zM980fG-WqqXsCYKpYZEb8ppnsVmMTodJcv4M8-X8IzWM2gzLO6z9otcFyRTzxeL4gtyQYxI5Puu346Q2Set5qEezF-P0ri2UjGUjgaX3YcIdWtQ59bhgkHIbykJoCJjzXZycIzvCU9EbQ3kj_rj1dth7D9VgJNchddrRbL2cuoGqPFJwDFglI24au76xrgh/HOYiKGECGtPy_RkUP2GiABnw0hOYavCys5gk71L4J10)",
    "location": "Solutions House, Studio 525",
    "eventType": "Comedy Show",
    "infoLink": "https://www.wearefuterra.com/",
    "mapLink": "https://www.google.com/maps/place/Studio+525/@40.749189,-74.0075979,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2599c7cfc99ab:0x7d2014ba92a456e8!8m2!3d40.749185!4d-74.005023!16s%2Fg%2F11g10pmk9l?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "The Climate Imaginarium",
    "start": "9/27/2024 9:00",
    "end": "9/26/2024 23:00",
    "eventBlurb": "Come join us at The Climate Imaginarium for an exciting event focused on sustainable storytelling!\n\nWhether you're a filmmaker, writer, or just passionate about the environment, this event is for you. Learn what makes an impactful story that inspires change both on and off camera.\n\nThis panel will be MC’d by Eco-Coordinator, Producer, and SFX Makeup Artist Julie Souza (she/her) and introduce Children’s Climate Media Educator, Suzie Hicks (they/them), Environmental Production Coordinator and Journalist, Gabriella Sotelo (she/her), and Sustainable Director, Producer, and Production Designer Aspen Nelson (they/them) along with a sneak-peek of the upcoming short film: Micro-Plastination. The afternoon will end with an artist mixer with light snacks and drinks!\n\nConnect with like-minded individuals and explore innovative ways to communicate important messages. Get your face painted with biodegradable glitter just like in Micro-Plastination. Don't miss out on this unique opportunity to dive into the world of storytelling with a focus on sustainability! BYOC (bring your own cup!)\n\nAll proceeds will support the short film Micro-Plastination. No one will be turned away due to funds.",
    "host": "The Climate Imaginarium",
    "image": "Screenshot 2024-08-19 at 11.16.08 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/806tp7d9bHUVHIOc6TLV0g/P5s8o2pTHp4cj5VWG8v8jNqebKleN9v4NCUpaNT-yAGZrLchllZhZ7FqCshCCHmk1k0DzNIgUwqVFa7wUAu7DXz7cbLhKVD6-QRM6ISzS-CWjZbIrDp09BDvgNtTY4DfDx3RYYPDdfrVn5oZkvQ3MXtczsV_kjRp9LuOrBRS7l4qPcn_uOfaS8IbCV9U44bC/y6yCRSPaq50TZhpQMIEEBQvIyIXyDynu54s6ic8eooI)",
    "location": "406A Comfort Road\nGovernors Island\nNew York, NY 10004",
    "eventType": "Panel Discussion, Keynote or Fireside Chat\",Networking Mixers",
    "infoLink": "https://www.climateimaginations.org/",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Stand-up for Humans",
    "start": "9/28/2024 4:00",
    "end": "9/28/2024 6:00",
    "eventBlurb": "Series of events to edu-tain audiences with climate-themed comedy from comedians, experts, and creatives.  Reception to foster connections and strengthen the climate movement.",
    "host": "Save the Humans",
    "image": "Screenshot 2024-08-19 at 10.28.35 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/_shsyqv6icXtiS4rURG7Qg/H3zMAzMPMyUVCc8wPR6uCiJ31kFymgD_hTy-g4tNGUaVZoNqVpCoKxFZDDpJi1GWmjCe1oCUC7XBivbfZ3MJBV5ohqVJRIC26NeEgjwDepSZDrJKhvOAnzJVA66c95r0xC_vI5QK1MNXbLbZ4UOYQneL19lrpPL1XLlEn2HhKcmmIcdmtonIy-N0RxkSDmet/JwsJtXzTsLsnPYFZl2_N-nCeauZdWpq6zHE1CZsRiu0)",
    "location": "Marketplace of the Future",
    "eventType": "Networking Mixers,Comedy Show",
    "infoLink": "https://www.savethehumans.org/",
    "mapLink": "https://www.google.com/maps/place/Market+Research+Future/@40.719074,-74.0115657,17z/data=!3m2!4b1!5s0x89c2598b67f2f507:0xb75c5d4b65f52b59!4m6!3m5!1s0x89c25befe34e3e01:0xcf5055d9ddf74ee4!8m2!3d40.71907!4d-74.0089908!16s%2Fg%2F11pd2_qb8w?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Harmony for Health",
    "start": "9/24/2024 7:30",
    "end": "9/24/2024 9:00",
    "eventBlurb": "Join the National Environmental Education Foundation (NEEF) at Climate Week 2024 for a dynamic panel discussion on the intersection of arts, music, and public health messaging. Discover how these mediums effectively engage youth and raise awareness about climate change and health issues. We will showcase collaborative efforts using creative arts to deliver impactful messages and drive action. In times of global challenges and heightened tensions, finding common ground and positive pathways forward is crucial. Arts and music break barriers, resonate with youth, and offer empowering, positive messages. Learn how we can inspire environmental awareness and proactive health management through creative collaboration. Explore the real-world impact of driving action, not fear, on important topics.\n\nPanelists:\n\nDr. Olajide Williams, MD, MS, is Vice Dean of Community Health at Columbia University and co-founder of Hip Hop Public Health with Doug E. Fresh. He is a stroke expert at NewYork-Presbyterian Hospital and Columbia University, dedicated to tackling healthcare disparities and enhancing diversity in medicine\nDr. John Whyte serves as the Chief Medical Officer at WebMD, where he drives efforts in public health strategy and digital health solutions, leveraging his diverse experience and earning recognition as a leading health influencer.\nAY Young is a singer, songwriter, entertainer, producer, entrepreneur, and UN Youth Ambassador who is making a global impact daily. As the founder of the Battery Tour, he has powered over 900 concerts with renewable energy since 2012, raising funds for sustainable solutions for underserved villages.\nSara Espinoza is the President and CEO of NEEF, driving strategic leadership and growth with a background in conservation, education, and public engagement.\nModerator:\n\nArielle V. King is an educator and strategist specializing in environmental justice and media, with a background in civil rights law and community engagement.\n\n\nYour registration not only gives you access to NEEF's panel, but to all public programming at The Nest Climate Campus.",
    "host": "National Environmental Education Foundation (NEEF)",
    "image": "Screenshot 2024-08-19 at 1.34.00 PM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/CI0XszUJNnSZx0u6LCs7Zg/2WunF2l3jX3UGPkbbgL-5RUNTsrfkBkJANY6EQYO9AH71X4rd1j87jjxXDV3NgPEOHUe01FkiRCmBYYQpDuf5AWX9U-bXFQOPBByyYqOQyk8DgoK31CeymGrAytZT9RQZxlcqwXcQKqoLrcD2X6C0-y1SZx0WtoitRtCkp3Lb5-K1Yf1Z1_Q42CG8qzYLeTj/QnK2Y0kyxhFL4k6MDNGsJF-Xr9ijD0850l7lwzIpxQQ)",
    "location": "The NEST Climate Campus, Jacob Javits Center North 445 11th Avenue 4th Floor New York, NY 10001 United States",
    "eventType": "Panel Discussion, Keynote or Fireside Chat\",Networking Mixers",
    "infoLink": "https://www.neefusa.org/",
    "mapLink": "https://www.google.com/maps/place/Jacob+Javits+Convention+Center/@40.756884,-74.0042393,17z/data=!3m2!4b1!5s0x89c2584a54a8579d:0xc064d2a3ccac8fb0!4m6!3m5!1s0x89c2596b0b3394a7:0x8461e42130f7d0a6!8m2!3d40.75688!4d-74.0016644!16zL20vMDdmbnJj?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "The Wayfinders Film Series: Indigenous Wisdom Leading in Climate Crisis",
    "start": "9/24/2024 1:00",
    "end": "9/23/2024 15:00",
    "eventBlurb": "Join us for an extension of the Margaret Mead Film Festival with the New York premiere of The Wayfinders film series, a collection of short documentaries brings audiences closer to Indigenous communities worldwide, showcasing their leadership in sustaining our planet during a time of global climate change.  \n \nFrom the lush forests of Borneo to the Blackfoot Confederacy in North América to the Rock Country in Northern in Australia, witness the inspiring stories of Indigenous guardianship and self-governance, as communities work to preserve rich ecosystems,ensure food and water security, and protect cultural diversity for future generations through preservation of language, sacred sites, spirituality and the passing of traditional knowledge. \n\nAfter the screening, join filmmakers and film participants in a moderated talkback.",
    "host": "American Museum of Natural History",
    "image": "Film Series Premiere.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/fXvYdGPe4JDy3hnLoTIf3Q/gcFCI_64WLVF5eaSBngnxp5sygzKJAbMxRnrOONU17BnLS9lEjJINjnBklBuQ_uCFSOjA0fgvEThMArrVTzzlyaGE2AwhWQ4tuKp-d4RuCiZLTgpk1-lFr7CqA_vFvCIbdv0YyIXYIBFkAg1H0P0CSkFYe_ztSQvJV4Lq4aJbcY/nopq7zyC3xq4Gi66TIDm6a133UJb_RJ6zbJC8yaBCyI)",
    "location": "American Museum of Natural History",
    "eventType": "Film Screening,\"Panel Discussion, Keynote or Fireside Chat\",Live Performance + Music",
    "infoLink": "https://www.amnh.org/calendar/climate-week-films",
    "mapLink": "https://www.google.com/maps/place/American+Museum+of+Natural+History/@40.7813281,-73.9765631,17z/data=!3m2!4b1!5s0x89c2588fa99df049:0x2000ec84d02b9000!4m6!3m5!1s0x89c258f4b00f7a09:0xa27d8172624c5db1!8m2!3d40.7813241!4d-73.9739882!16zL20vMDIzcjlq?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "AY Young’s Music for Impact Concert powered by Battery Tour",
    "start": "9/21/2024 5:00",
    "end": "9/21/2024 9:00",
    "eventBlurb": "Experience a powerful, free concert in the heart of Times Square, powered by renewable energy and featuring AY Young's inspiring music.",
    "host": "Battery Tour",
    "image": "NYC.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/3iM0PcYPCJ5gTuhPJjO1QQ/xdmYfzYOGoI3Ug9rekpjf__1eLv_-YVL5aMlwkcaLm1APIIT1xLxI62lbrGTxOtRS0N8rV2hQF2rlb2mGLb9vT7hirEXtx1os9vePT4oGbq3vuytdzir5bWlE4czUX2RPcGcyqNXazS4CRhkT5TqGg/zhcLLZL_71GYadSg5fzboDBfkvklZ-AKJ2GtEsA5IQY)",
    "location": "Duffy Park, Times Square (7th Ave & W 47th St, New York, NY 10036)",
    "eventType": "Live Performance + Music",
    "infoLink": "https://www.eventbrite.com/e/ay-youngs-music-for-impact-concert-powered-by-battery-tour-tickets-991429039947?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
    "mapLink": "https://www.google.com/maps/place/Father+Duffy+Square/@40.7590077,-73.9850222,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25855c1adeb93:0xc0d90fb7848befc7!8m2!3d40.7590077!4d-73.9850222!16s%2Fm%2F0263m88?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "2024 Prose B You Half Marathon, 10k, 5k",
    "start": "9/14/2024 10:00",
    "end": "9/14/2024 14:00",
    "eventBlurb": "The 2024 Prose B You Half Marathon/10k/5k celebrates and supports what makes New York City great, YOU! The many ways in which you...are you, the intersectionality of You, the sustainable ways YOU support the planet and empower others to be themselves. This is an event put on by B Local NYC that aligns with the values of B Corporations and like-minded companies. Take this opportunity to engage with a community that's passionate about running better businesses for Mother Nature and the communities that support her.",
    "host": "B Local NYC",
    "image": "byouhalfmarathon.jpeg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/MVowb-eQU0XaqqahydUgTA/GzHQhgavjdnWHBZUBJv9guRUYtGSXc5DLfh6ZyIFcAx6xAvHQmM7WwNucSVJISZy_pY_VKc6xtGp_5v3nUTcf5kBF0dyxw5t8GaArQFD0_1ILdOnWI8ZQF8zAyA_c2GCOgOhNV6-imSdi1rXyTmvB5SVkae_-XS7olAOxt4uymI/zGvbYtiS2n2xaW4peSUvjiRQXaefgw0zRF5oto33bj0)",
    "location": "Flushing Meadows Corona Park",
    "eventType": "Mindfulness + Wellbeing,Networking Mixers,Sports Event",
    "infoLink": "www.blocalnyc.com",
    "mapLink": "https://www.google.com/maps/place/Flushing+Meadows+Corona+Park/@40.7400665,-73.8432624,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2607fc22166fb:0x133d2c68e8326ce1!8m2!3d40.7400625!4d-73.8406875!16zL20vMG03eDY?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Play is Power: Design Your Own Climate Game",
    "start": "9/21/2024 19:00",
    "end": "9/21/2024 21:00",
    "eventBlurb": "In this hour-long workshop, participants will be guided step-by-step through the process of designing their very own Climate Game: a tabletop, role-playing, or outdoor game that explores a climate issue of their choosing. We’ll begin with a brief introduction to the core elements of game design, then work together on theme ideation, goal setting, rapid prototyping, and playtesting.\n\nWorkshops begin on the hour at 1pm and 2pm, though those arriving at 1pm are welcome to stay for the entire session to continue working on their game. No prior experience in game design is required and materials will be provided.",
    "host": "The Climate Imaginarium",
    "image": "unnamed.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/T6wrv2LwBnGe-pVJ_sGDPQ/97W-feI8JwpY3vm4szO_F55LDjLigzKFF4PnrkZzM5Apxw8EDDA8A9uPSMFnq-BBWQOIzYTGpmc6XvMpmSTDWdZLBK32-lTWtWa8hVHqx7RgYkNYcdviwpDZsz3k2_7X7VbFRJXiJi4VxfZ7CttDK8JzIDHlXx_Bc3I2IzyJYxI/1z1pO4xX0haZDl41oOcz1npD0RsbXscGom11EezJBVc)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Game Workshop",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Sustainable Storytelling: On and Off Camera",
    "start": "9/27/2024 17:00",
    "end": "9/27/2024 19:00",
    "eventBlurb": "Discover how sustainability is affecting storytelling both on and off screen from some of the artists leading the way, including a mixer with other media-makers and a preview of an upcoming horror cli-fi film.\n\nWhether you're a filmmaker, writer, or just passionate about the environment, this event is for you. Learn what makes an impactful story that inspires change both on and off camera. This panel will introduce Suzie Hicks (they/them), Gabriella Sotelo (she/her), and Aspen Nelson (they/them), along with a sneak-peek of the upcoming short film: “Micro-Plastination.” The event will end with an artist mixer and refreshments to round out the night.\n\nConnect with like-minded individuals and explore innovative ways to communicate important messages. Don't miss out on this unique opportunity to dive into the world of storytelling with a focus on sustainability!",
    "host": "The Climate Imaginarium",
    "image": "Screen Shot 2024-08-26 at 1.26.28 AM.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/_VULwftRZ_DR7Pv4s4tUGg/qBKMFsmBgt2sR2yrmWLi2wV1xnpSyCuhZY8ZEuayCCTAM8L2I3jkF60N911Y30eYzMbqhJ9mc8VsFkCL6lljcPQS49YV0_JLNHAsiNYCNgQTAF0-Uiu6IROAnJ0oLZZUGjZOkHjLnEt1CeUa2RCRxN8xqvmMO2_R0U-i1veu39dXqJwJbF3aV6W2-f9Cccax/-x85UwTPiUgjl5GhuTHI4gsNf77OOFtDkWNwUdaS-N0)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Film Screening,\"Panel Discussion, Keynote or Fireside Chat\",Networking Mixers",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Sustainable Stories: Climate, Food, and Culture through Diverse Voices",
    "start": "9/27/2024 19:00",
    "end": "9/27/2024 22:00",
    "eventBlurb": "Join the Uproot Project at Climate Week NYC for \"Sustainable Stories: Climate, Food, and Culture through Diverse Voices.\" This event features a keynote on the intersection of diversity, culture, and food as climate solutions. A panel and workshop will follow, offering storytelling techniques for environmental journalism and insights into highlighting these crucial intersections. Ideal for journalists, storytellers, and climate advocates, this event provides valuable tools to amplify diverse voices in sustainability. Don't miss out!",
    "host": "The Climate Imaginarium",
    "image": "Screen Shot 2024-08-26 at 1.36.30 AM.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/xMCqKwI2P0eVGHQAzM_Jbg/vLalqItsthWH0YOdF9ggW9rBKt8dNr2twUf8vsMiFMKVFBsip6Herzz6LgfTzPR-teMkGVaPkMv395gZpeBWH5jUkMBEDD0nuMWVL64-DUXpHIHkmR4ZoVnBZiJrtjBk7mxbsTwMjArQYORfk-u-wX8zFn4EAKHR5QW3KxUCBoXj4ek4LcjscMQhXK29ZypJ/yvx1aPtxp6sKPz7n3Wd4V6GK9dz0WUHi_qd1-TYgP5I)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Panel Discussion, Keynote or Fireside Chat\",Sectoral Roundtable",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Climate Fiction Workshop with Author Susan Kaye Quinn",
    "start": "9/28/2024 17:00",
    "end": "9/28/2024 19:00",
    "eventBlurb": "Susan Kaye Quinn, a Speculative Fiction author with a PhD in Environmental Engineering, leads this hopepunk climate fiction writing workshop. Come write a story to build a better world! This event is organized by the NYC Climate Writers Collective and will spark creativity in everyone, whatever your fiction writing comfort level!",
    "host": "The Climate Imaginarium",
    "image": "https___cdn.evbuc.com_images_831117529_143574667417_1_original.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/lGEm6zUqjkUd1HUyZzcZUA/R2QsdVNFN-_qSNtSfVNE_jMH3fgi-xx07MBzWx0l5jIvwFoYsnGqaoTlirwiShBtPxrK2jGgAuvEBxxv8IFKZRO8hCgzI4EJ01Zqpt0jLyvJ8qsO3j_xeua1p4rHFcLZ4ANiOCmhSyONm28fwSSO69btfYHCvkRzFyL_tECepLVzZFok2Gu79WEYuTOzQpK6Aua43HHHTs7fW7zvd6Wlh2EeXswKcvOn9sbIvQZwFks/XQY4umlQjyoMw_R6CFNdXlYhCIb9Y9aVU6nzv1c1oRo)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Art + Photo Gallery,\"Panel Discussion, Keynote or Fireside Chat\",Writers Workshop",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Climate Cafe with a Scene from \"Red: A Mark Rothko Story\" and \"Imagined Futures",
    "start": "9/28/2024 19:00",
    "end": "9/28/2024 21:00",
    "eventBlurb": "Join Climate Cafe NYC at the Climate Imaginarium for an uplifting afternoon of refreshments, meditation, and a meaningful conversation on climate emotions! Enjoy coffee and snacks with our climate community as we share our feelings and get to know others in the movement. Positive vibes guaranteed! The Climate Cafe will take place from 1-2pm.\n\nFrom 2-2:30pm, experience a ten minute scene from the play \"Red: A Mark Rothko Story.\" Two actors perform with limited props and staging. This scene captures the frustration Rothko experienced with the new Pop Art movement on the rise. Following the performance and talkback with the actors, stick around for an activity with Holes in the Wall Collective.\n\nOur climate crisis is one of time. Yet how do we face the real pressures of our climate without being in a hyper frantic reactive state all the time? From 2:30-3pm, visit the Climate Imaginarium for three embodied activities to look at how to practice alternative time scales, bear witness to our fear and our collective responsibility to where we go from here. Led by Holes in the Wall Collective as part of their Imagined Futures program.",
    "host": "The Climate Imaginarium",
    "image": "https___cdn.evbuc.com_images_832846119_143574667417_1_original.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/gnEwvAX4rEdrtYawe1SBJg/X14LR0OMO7j8Y64hmrHU7dCuLclGGOXJoBY13XISlDPR0H8aQrQvpvaMlMmXGvQXkzaoTkzHCrVlxls1ockIvEHpf9_ki_08gvUnHdiG3arkcpSyjmo2VWtdxyqzCqrEnlPyYEWynbFkrxDclVPOsHD9gEfFjXaCqtBj1ETuVwWVvyIa3WqHvjnx12DT9OErxiA7OVihfBOD9kGeHRcFPZRrvxpOXwze9yyKVhQrMrc/Q3TGidphIFOuHvAk15h70S9oOczgqKcwn2-4JG59yKI)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Art + Photo Gallery,Live Performance + Music,Mindfulness + Wellbeing,Networking Mixers",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "The Chase (EP) Release Party: A Climate Week Jam",
    "start": "9/28/2024 21:00",
    "end": "9/28/2024 23:00",
    "eventBlurb": "Celebrate the close of Climate Week with the release of CREDLE’s 5th studio project, The Chase (EP), an Afropop, R&B, and House genre-focused project.",
    "host": "The Climate Imaginarium",
    "image": "https___cdn.evbuc.com_images_830081329_143574667417_1_original.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/qkD2hjr-JMybQY_F4o79Rw/-GDM9KMGxJTm7KafVS5olDl4atSpgAiSDPvunry3FXhKIr9QdxusI6rof3E0WoHVkI1NJQk8GZZsEPBBKKfmPBgVS-zxiugebfB2jf-ZDwdjL66SYi752dM7VbcBobxiLHF8NrWnu9TtWQ3Bn2SiGwFyjnQgyWZ3cG7mrODAc8IHxYJahKK_OH6zL6GjBKhNG_rL96-E2Wz9n27KeDTJ7frbdTyjuv_idPucWXjMaZs/sRMaJTsY2yEmbXpqnYBSRHydzScd_jk_EZLaAG-LwMU)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Live Performance + Music",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Climate Fiction Workshop with Author Susan Kaye Quinn",
    "start": "9/29/2024 19:00",
    "end": "9/29/2024 21:00",
    "eventBlurb": "Susan Kaye Quinn, a Speculative Fiction author with a PhD in Environmental Engineering, leads this hopepunk climate fiction writing workshop. Come write a story to build a better world! This event is organized by the NYC Climate Writers Collective and will spark creativity in everyone, whatever your fiction writing comfort level!",
    "host": "The Climate Imaginarium",
    "image": "https___cdn.evbuc.com_images_831117819_143574667417_1_original.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/UMU7p_uXvs9mvGY7nbE3Zg/1XfR1hkT9022hxf__MIvtPmT1rjwvL4pezlzp63PD9c3gYoQa0Hx_zZNPjfvlhFBPG2u8Aa3iwQbNd-vsZh0Vi61HQKC_rcktc1TyElUDQYerWxXqfXtdwru8IUgsxgl3ZQxQcuTFYG17L6UE3VXfwL-4S8StD4logWrQdiOcLXA5uqEaGIVLFWLXcLtUy8R9P9it6fzNWPsREAvECVsyiazWXQLxB7xQSdfQkYzAkM/vWtI8o2fOtKpXH9zMjrIuDXGA1WdyY0_Plw-sCY_4Cw)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Art + Photo Gallery,\"Panel Discussion, Keynote or Fireside Chat\",Writers Workshop",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Grief & Seeds: Honoring the Past – Creating the Future",
    "start": "9/29/2024 21:00",
    "end": "9/29/2024 23:00",
    "eventBlurb": "Join Climate Imaginarium and Holes in the Wall Collective to close out Climate Week with intention as we gather to honor place and possibility, with elder and longtime activist Jk Canepa, youth organizer Anna Tsomo with youth from 6th St Community Climate Action group, and in collaboration with the American Indian Community House. With a special popup seed gathering with Next Epoch Seed Library and joined by Noelle Ghoussaini of Sacred Space to lead us in a closing ritual. All are welcome!",
    "host": "The Climate Imaginarium",
    "image": "Screen Shot 2024-08-26 at 2.11.31 AM.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/CfoutuCbWZeYHtVBzkiiMA/bi0cxkRRa_EAAD0hygbSOFtGiZwSv_U1FzDJI8iS6YzlLGgx2b4X_2F1HhqSM3D_opQNIKjH6vfnE5gW0ySI7soCwprVquN-Bt5T4K-hc8Vqpse9g1rlels91QUDEFT3NRcs22eQPnrWS40n5ePVZ_1am9Tx43yWe1KXvJD5txcrwOMFPjm-SJuxZ8G8wwMm/fSTMem8oB7SgGT329bEELzWWzdRQRXGfjwYe7JSjGzw)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Live Performance + Music,\"Panel Discussion, Keynote or Fireside Chat\",Mindfulness + Wellbeing,Networking Mixers,Art + Photo Gallery",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Symbiocene: Symbio Futures",
    "start": "9/25/2024 3:00",
    "end": "9/25/2024 6:00",
    "eventBlurb": "A world-building event with food, drinks, and a place to make new friends.\n\nDesign can make another world possible. Join us for our next SYMBIOFUTURES event, a chance to dive into adaptive intelligence, AI, and more than human thinking as design tools for a world in transition.\n\nThis event is made to help you understand the biases, ambiguities, and practices of these models, and how they can be used to build a better world.\n\nWho It's For\n\nSYMBIOFUTURES, a symbiocene satellite event, brings together business leaders, designers, innovators, activists, grassroots groups, and environmentalists to foster collaborations, connections, and learnings.\n\nFor its second year, SYMBIOFUTURES is back during NY Climate Week, bringing a whole new culture, taste, and community to the table.\n\n\n\nWhat To Expect\n\n💬 A place to make new friends + connect with leaders across movements.\n\n🌎 Learn how to engage in climate solutions and new subjects\n\n🍎 Bites & Drinks provided",
    "host": "Nowadays On Earth,Queer Brown Vegan (QBV),Symbiocene",
    "image": "https___cdn.evbuc.com_images_833548039_570914022835_1_original.jpeg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/iQeMbTJx1oZzbNUC3zGPUQ/vg55AngC1tlGRdbZCdJu-YApPFbtDktUorRxUYrmQszYPjCS7Wk0FIvX56n8KHcNPbuf6B671ylOeIM5nl9wA_nczgVxrfCxpd14cXG0mY3tytM-gASH2pnX5SfjtCIcO-G1gtSncSEzFCFXdtEiVlMq4Eksw5qwDyZIXOkRmjXLVfNsTcnIwcW7px6FTficzwYm46coZw5H6u1HlCP26P4kLqeeTQUdD9VDg36KUYQ/1XSNfoK4BY6sVbq67eBzAojdwTpGZWMu7vXApd0FJnk)",
    "location": "625 Bergen Street Brooklyn, NY 11238 United States",
    "eventType": "Networking Mixers",
    "infoLink": "https://www.eventbrite.com/e/symbiocene-tickets-999236271587?aff=erelexpmlt",
    "mapLink": "https://www.google.com/maps/place/Farm.One/@24.5170176,54.4374784,12z/data=!4m6!3m5!1s0x89c25a1a5865a093:0x5c514691efa86b31!8m2!3d40.679678!4d-73.9689121!16s%2Fg%2F11c5xsq82j?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    "eventName": "Hope House",
    "start": "9/25/2024 11:00",
    "end": "9/26/2024 19:30",
    "eventBlurb": "Hope House is a transformative side-event series held during major climate gatherings such as Climate Week NYC and the United Nations Framework on Climate Change Convention (UNFCCC) Conference of the Parties (COP). Our mission is to cultivate a space of climate hope and optimism, fostering collaboration among thought leaders and change-makers across sectors. Deeply focused on the human experience, Hope House is designed to nurture wellness, inspire hope, and facilitate meaningful connections that drive positive change for the planet.",
    "host": "Time for Better",
    "image": "fd030cd4-172c-4fd9-a758-2b36579f0344.avif (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/pUVwN6Q8ChO9li58KfqsQA/nM_tlMD-BejoaHoEwoLImArAp-AKuW6r7pYDBB2xRr-n4yJE_yBsj7VzJ1x5wLEDhLsy6GxqlhzYMnZFaq7dYQ3OykZYLyqs0Dz4VzlP13dsAucomWACX51f9lepOh4-3iXrvnV6CVNx7AaIybByyDhiBLKu8of3X6mDzpfi_fiv_NdwrTTrA4-bCFO9--4g/XEf_jgRY4mKiqceXYlzhy4bKWMwWy8pZh0br8xoTnmI)",
    "location": "PENN 2, 2 Pennsylvania Plaza, NYC. The building is located on the West side of 7th Avenue between 31st and 33rd Street.",
    "eventType": "Panel Discussion, Keynote or Fireside Chat\",Networking Mixers,Sectoral Roundtable",
    "infoLink": "https://timeforbetter.org/ourwork/hope-house/",
    "mapLink": "https://www.google.com/maps/place/PENN+2/@40.7500719,-73.9922026,17z/data=!3m2!4b1!5s0x89c2512ce86887a7:0x5c84a595d9747322!4m6!3m5!1s0x89c259ae5a3ea889:0x6d46d8e2f72e11c!8m2!3d40.7500719!4d-73.9922026!16s%2Fg%2F1tfj4270?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "UN Summit of the Future",
    "start": "9/20/2024 0:00",
    "end": "9/23/2024 0:00",
    "eventBlurb": "The Summit is a high-level event, bringing world leaders together to forge a new international consensus on how we deliver a better present and safeguard the future.\n\nEffective global cooperation is increasingly critical to our survival but difficult to achieve in an atmosphere of mistrust, using outdated structures that no longer reflect today’s political and economic realities.",
    "host": "UNFCCC",
    "image": "Screenshot 2024-09-11 at 6.37.59 PM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/97Td2XVezG2OJGInHpy_jg/8eHJtjRN_pcthOg8QiaAcENRhXcEnJkrY7EO2tiuth_mIVz50ic1CW7PEGRaRmNZQkMpCJ7sixLdYMrUxfHBCecn84Bi_cjU46U9qJZNQFJJD8bEEQWnQScA4CVCdwatTJiZjNdqJ6UVe0oYkofGPYMSJCOgnGXKmDwNGw81XK-cGgVkdZogdzZgTOqC4W8b/_PkN8RAv_glTDhASLU_gSeJAGeSjS9HHplsgrGXRHUc)",
    "location": "UN, New York, 405 E 45th St, New York, NY 10017, United States",
    "eventType": "",
    "infoLink": "https://www.un.org/en/summit-of-the-future",
    "mapLink": "https://www.google.com/maps/place/United+Nations+Headquarters/@40.7517446,-73.9738033,17z/data=!4m7!3m6!1s0x89c2591ce0874d11:0xc5fae28bdd3df635!8m2!3d40.7493281!4d-73.9679241!15sCgxVTiwgTmV3IFlvcmsiA4gBAVoNIgt1biBuZXcgeW9ya5IBG2Fzc29jaWF0aW9uX29yX29yZ2FuaXphdGlvbpoBIENoUkRTVWhOTUc5blMwVkpRMEZuU1VOb2NWQnJNeEFC4AEA!16zL20vMDE5dnNk?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Wasted Textiles: A Story About Slow Fashion in Film & Art",
    "start": "9/24/2024 11:00",
    "end": "9/24/2024 17:00",
    "eventBlurb": "Watch short films and art exhibit by filmmaker and Trashion, slow fashion designer Clementina “The Sustainable Latina.",
    "host": "The Climate Imaginarium",
    "image": "Clementina.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/CmbDig8R8GtAdH-zX3U3eg/iuUvygsR7pvig81MK9iys8yr7Cpsbfi1HXZwZxpCCAK_gzXA-Dbtbq5Dp-dsIlf5EtK6ElMwBbHTaeB6xx_mKNeW86TDpIPaFQOaEhxqH5ylXC1XllA-OopgseAnsjHVrgHD5H4LXE-IVEIe0yVdvAVm8beQuq4D1p8EnE2BePM/KcmpRJoFn08Xf2UxVz6_LjpqlTR_YcUiQ-hyOtPMfLc)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Fashion Show,Film Screening,Art + Photo Gallery",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "A Journey Into The Mind of a Trash Talker: Fashion, Film, & Art",
    "start": "9/24/2024 12:00",
    "end": "9/24/2024 14:00",
    "eventBlurb": "Is textile talk a waste? A not so demure, Clementina \"The Sustainable Latina” shares her art, her short films and talks about dumpster diving, thrifting, and upcycling for her runway shows, and art exhibits.",
    "host": "The Climate Imaginarium",
    "image": "Clementina.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/bOOnsnCmIGQuwMHC30UFzw/LYrgfrABO4iH9XIqT8D2cp2L9kaNGUC0xWphCCxXqhamYTlxn8RPb-s4YodQIIrxfThA97t_t-GcmRqChTabQCsJmA2FPrZNWooR1jmClNMhiyHrPBvr6vDYs3VvnKVECCc7iIf0yldAeHURDgVZE7wknTC_omHmkLDHNf3NJc4/2Fwx9q6nM8O-lucy1aOPhw3_f94f1qEeXgLCEH5M6Hg)",
    "location": "Climate Imaginarium, 406A Comfort Road, Governors Island, New York, NY 10004",
    "eventType": "Art + Photo Gallery,Fashion Show,Film Screening,\"Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://linktr.ee/climateimaginarium",
    "mapLink": "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "The Mad Men of Big Oil",
    "start": "9/23/2024 19:30",
    "end": "9/23/2024 22:30",
    "eventBlurb": "A comedic investigative journalism experience. Join us in breaking down how Hollywood, entertainment, and advertising were leveraged to shape the story of big oil and climate change.\n\n6:45pm: Doors Open\n\n7:30pm: Keynote\n\n8:00pm: The Mad Men of Big Oil\n\nTo many of us, climate (and general) disinformation feels untraceable, uncontrollable, and expanding faster than we can counteract it. Did you know that the roots of disinformation tactics tie directly to Big Industry’s playbook? Major corporations have been shaping our concepts of social, political, and environmental issues through marketing and PR since the late 1800s.\n\nHosted by Executive Editor of DRILLED, Amy Westervelt, this program will feature a comedic investigative journalism experience spotlighting the hot takes of leading activists, creatives, and journalists combating climate and fossil fuel disinformation.\n\n9:00pm: Light reception",
    "host": "Hollywood Climate Summit (HCS)",
    "image": "Screenshot 2024-08-28 at 6.05.41 PM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/lVPeAEAxlVXBYyEXkydLgQ/MOoWTLu08fgwkGyNGOADyt3krVos8SGPc4dcUkwIyJIFCcPuxKdgQ1MHq5q21HyJ83_EZv1508r3RoqBsp90C6gvWhwCmygCIlLNoXNe87Z58pVBWGE_uzNndtPePoZL5OqTRRV5ch2TyfiX_5MAmsSFIdbMzC9MkPI14aDKVRIo-1QLNUmpnNOidMje8LTN/NLrBtLoDSVk8GbHOn1uPaVEQ0uCeU8RqCzSU8kRW0X8)",
    "location": "DGA New York Theater",
    "eventType": "Panel Discussion, Keynote or Fireside Chat\",Comedy Show",
    "infoLink": "https://www.eventbrite.com/e/the-mad-men-of-big-oil-hollywoods-role-in-the-story-of-climate-change-tickets-997167142767?aff=oddtdtcreator",
    "mapLink": "https://www.google.com/maps/place/DGA+New+York+Theater/@40.7645064,-73.9807615,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258f7593851cd:0xdc6a3ff66069365c!8m2!3d40.7645024!4d-73.9781866!16s%2Fg%2F11b76tx_qz?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "For ClimateTech Innovation Showcase",
    "start": "9/23/2024 11:00",
    "end": "9/23/2024 18:00",
    "eventBlurb": "We’re kicking off Climate Week NYC with an exciting event featuring the latest climate technology solutions. Join the For ClimateTech team at Newlab for an immersive day of pitches, panels, and networking opportunities, bringing together over 100 innovators, investors, industry leaders, hardware experts, manufacturers, and more to showcase the latest advancements in climate technology. Hear from nearly 40 innovators in both the Scale For ClimateTech (S4C) & Venture For ClimateTech (V4C) cohorts who are developing climate solutions across four key sectors: Buildings, Transportation, the Grid, and Industry.   \n\n​We invite you to come learn and connect!\n\n​Agenda\n\n​11:00 – 11:30 am: For ClimateTech Reception & Networking\n\n​11:30 – 12:00 pm: Event Kickoff and Welcome Remarks\n\n​12:00 – 3:00 pm: Venture For ClimateTech Pitches, Presentations, and Networking\n\n​3:00 – 6:00 pm: Scale For ClimateTech Pitches, Presentations, and Networking\n\n​**SPEAKERS TO BE ANNOUNCED**",
    "host": "ClimateTech",
    "image": "7b389a61-ed45-4325-b679-a835a71cf361.avif (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/YwhQOv7Fyw2-Jec_iCaDOQ/b9oFutynuqIrUhyxKWNUO2W4-y1jhfHpmHUAmu2wZq1nyPuJP9cOayAScQExikdJdOmj6p_wevkKOYO3PrIAyeNb7s3yvqxBqbBYSI01RQx3ZwN9sriAPbTOVGosPn2UojnekgqybjoAPmSRdQD7q3nAm4uuh3q852Hjt02sai5hYwwar7gYYW4l2cgmFlP2/0ERHAqo4vgRN7f20j4cwrXDOYoV_IqlRMnnntaxGxk0)",
    "location": "Newlab\n19 Morris Ave, Brooklyn, NY 11205, USA",
    "eventType": "Panel Discussion, Keynote or Fireside Chat\",Networking Mixers",
    "infoLink": "https://lu.ma/FCTShowcase",
    "mapLink": "https://www.google.com/maps/place/Newlab/@40.6988632,-73.977302,17z/data=!3m2!4b1!5s0x89c25bc8d55d1aa9:0x680d059f6193095c!4m6!3m5!1s0x89c25bc8d538176d:0x90a44fb90f44d351!8m2!3d40.6988592!4d-73.9747271!16s%2Fg%2F11b7l5qxzw?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Climate Tech Demo Night - NY Climate Week Edition - AWS, NYU, Streetlife Ventures",
    "start": "9/23/2024 18:00",
    "end": "8/23/2024 20:30",
    "eventBlurb": "Come see the freshest climate tech demos at NY Climate Week.\n\n​This 4th edition of the quarterly Climate Tech Demo Night series will feature demos from startups building solutions at the intersection of cities x climate. Come see the latest and greatest from:\n\n​🧱 Orbital Material - Generative AI platform to quickly discover and design more effective sustainable materials\n\n​🏢 Infogrid- Buildings intelligence and analytics platform for portfolio managers\n\n​🔌 Rhizome - AI-powered platform that helps utilities identify climate threats, quantify risk, and measure the economic and social benefits of resiliency investments\n\n​🏘️ Daisychain - Offers 'decarbonization as a service' to building owners across the residential and commercial sectors\n\n​⚡️ Stepwise - Enables electrification technologies to be added to any home with smarter electric panels to manage loads\n\n​This is not a pitch night, but a chance to go deeper into the climate solutions that can make tangible differences to the livability of our cities and planet. Demos will start at 6:30pm.\n\n​Please also join us for great people, festive food and drinks, and great conversation after the demos in the SOSV Indiebio space! ​",
    "host": "NYU",
    "image": "cd906085-af8c-445a-9160-379766eef36c.avif (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/qCSekSQuWvJZk8XGX5jaaw/cAOqs_1NDUwv77PWmlWvQgBMsBGugGOdYuPndYL1qij6qssN2P5N6Xj5AXxuQj-3_rPOGdB3rjElY0vU5-2zDeR2y2ATRXCo4BxXFU8gCrQbkImjKNJS5X6BES2OwOzo6rM8HDcZpLk2EJ399iWdJIGVDbzlvTlxF6A8ZhBe5gWINFC3p8wQCpnO1PvPpMqC/FIQa2KymMFusjy2v97yRv7lWHGJorcY_yBM-mfwdKQI)",
    "location": "NYU",
    "eventType": "Networking Mixers",
    "infoLink": "https://lu.ma/1ttipqps",
    "mapLink": ""
  },
  {
    "eventName": "Climate Tech Cocktails NYCW '24 Kickoff Party!",
    "start": "8/23/2024 20:00",
    "end": "9/24/2024 0:00",
    "eventBlurb": "🛳️ Weee're baaack with an EVEN BIGGER boat! We bought out all of the brand spankin' new Brooklyn Paramount on 9/23 for the 3rd annual Climate Tech Cocktails NYCW KICKOFF PARTY!",
    "host": "",
    "image": "Screenshot 2024-09-21 at 9.41.54 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/ioP6HWp_O_niSrjFqmincA/1UFaf9HSz7fv9uzA7Ldy_3IP-x86uz2qgKtF4JuGG5wOzLxVQzyDY0x_rFiOKd44ex29gSWj_5gr1qmpzaOuvbph_lyeeicvkMyDsoH3c3f76oA3Vi7R3JwOd8yujtW_fThKym1M76rjMRpvlH-sGtrt3LLgGW9GKWb4Ctwg7cBUIwZSVLytSgmhJ40UsBEm/6gjQ2hsrjnoFguG0hS_RTKSqAMClmYrykFJKJOd2Zqc)",
    "location": "385 Flatbush Ave Ext, Brooklyn, NY 11201, USA",
    "eventType": "Live Performance + Music",
    "infoLink": "https://www.universe.com/events/climate-tech-cocktails-nycw-24-kickoff-party-tickets-DZMLQ6",
    "mapLink": "https://www.google.com/maps/place/385+Flatbush+Ave+Ext,+Brooklyn,+NY+11201,+USA/@40.6903768,-73.9838653,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25bb361164837:0x7dd65c8ac9bae413!8m2!3d40.6903728!4d-73.9812904!16s%2Fg%2F11vx1c54g6?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "AIANY Climate Change and Architecture Tour",
    "start": "",
    "end": "",
    "eventBlurb": "The best way to understand the many facets of climate change in New York City is by traveling along its waterways on an architecture boat tour. Join us aboard Yacht Manhattan or Manhattan II for the AIANY Climate Change Tour: Resiliency, Sustainable Architecture, and the Future of NYC! Learn about how climate change is affecting our city and people, and the actions NYC is taking to mitigate pending threats and reduce its carbon footprint. This fully narrated NYC climate change boat tour will address the pressing need for sustainable design and greater resiliency. We’ll delve into how New York City is reducing fossil fuel consumption, strengthening its natural habitats, and reimagining its transportation infrastructure. This is an NYC architecture tour that focuses on climate change in NYC and will also explore the importance of the environmental justice movement in New York City.",
    "host": "Sail - NYC",
    "image": "SailNYC_Climate-Tour-Change_Slider-3.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/u-tCw1fZxac8n0FtjmjWhQ/yORIns2OAYgTrEX5F4AeJmE6aaDEYl6PMxsvFrv42wgr_DPzv7nZhA_Ctqhq1ehE8cjCWpOiC5fOxxpmfMwAJDLu9SEJCnMJWlGLNGYrFhwyLKZNlS7Shkk3DzoemrkBomqtE8alis0nHkaczTXGK9j4uy6C70rtFB18DxiWwfvNzabJrlOHnuDat2nUQt23/dS37N_Qq1YhAv1LoCX-qjRkPiSevImi2F1ovWS4Sm6g)",
    "location": "Chelsea Piers, Pier 62 (W. 22nd St.) New York, NY 10011",
    "eventType": "Boat Tour",
    "infoLink": "https://sail-nyc.com/public-cruises/nyc-climate-change-boat-tour-on-manhattan/",
    "mapLink": "https://www.google.com/maps/place/The+Pier+62+Carousel/@40.7487295,-74.012809,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259c62921778d:0x4d32b4d1b351f317!8m2!3d40.7487255!4d-74.0102341!16s%2Fg%2F1tncttqw?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Climate Science Fair",
    "start": "9/21/2024 0:00",
    "end": "9/23/2024 0:00",
    "eventBlurb": "Welcome scientists, farmers, foodies, artists, thinkers, nature lovers, and the curious of all ages to Emerson Collective’s 2024 Climate Science Fair. We’re coming together to show that big, bold, optimistic climate ideas are not just possible, but already making a difference.\n\nBring your sense of wonder to the High Line September 21-23, for a fair that promises to inform and inspire all of us to discover our inner citizen* scientist.\n\n*…and if you’re human, you’re a citizen OF EARTH",
    "host": "Emerson Collective Presents",
    "image": "Card-About_2024-07-11-113154_wprd.webp (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/VmWcBtxw1SdKLMrLaylb8w/3R3nJW-w7hK-LZ8wtUWqLOwbEGgMHDZCdaXnD6uzL-dj4EUCV-jEhkrnkgYLNaFGsDdgHH-CpxlUqxdHTgfdHBdMAh7pHarPK8LAocSsOgbytrTxJFWBWXALX_1WRav_LKRBefO01hCwCLa3W7ir86Nme5wFyLsEKdxHdWhXplwM-tydFrTvtOY4BPiDXMPc/_omjp6fcJbst8leoN9gpZqCT4GFAlhkzrtfMegYiCDc)",
    "location": "NYC- The Highline",
    "eventType": "Networking Mixers,Career Fair",
    "infoLink": "https://climatesciencefair.emersoncollective.com/about-the-fair",
    "mapLink": "https://www.google.com/maps/place/The+High+Line/@40.7479925,-74.0047649,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259c7840fb4e5:0x583f615c850a3c91!8m2!3d40.7479925!4d-74.0047649!16zL20vMDdqd3dm?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "2024 InnSure Climate Forum",
    "start": "9/23/2024 8:00",
    "end": "9/24/2024 17:00",
    "eventBlurb": "The 2024 InnSure Climate Week Forum is a premier event bringing together leaders from the insurance, finance, and climate sectors to explore innovative strategies for mitigating climate risk and promoting sustainability. This forum will feature thought-provoking discussions, expert panels, and networking opportunities aimed at driving actionable solutions for a resilient future. Join us as we unite industry experts and innovators to shape the path toward a more sustainable world.",
    "host": "InnSure",
    "image": "Screenshot 2024-09-21 at 9.50.31 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/Kd-YhxtTkZq09sLI2o9E_Q/2XbScXUEaRtQfEe4DIik7L1AJQl4V07pjh8Y0XoHaiZydVtyzvj2wE-ETqnOiYoar7Bk-CfzUoR7f5yJIGhSZ_keUUhFtXubF2iUgC15HCwjsVlj3PzASnqFz3oOWHrjUI6FNX8qpCc6LUOIbv-zrnEDv75kBXlXg9yuG7EJiRpY_qPov5u0AG9dtf89YelF/UyHlDP2mBtxPiTckgZymygdtNwbFnn1OGn4-UCOoz-k)",
    "location": "7 West 34th Street, New York, NY",
    "eventType": "Sectoral Roundtable,\"Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://2024innsureclimateforum.my.canva.site/innsure",
    "mapLink": "https://www.google.com/maps/place/7+W+34th+St.,+New+York,+NY+10001,+USA/@40.7490211,-73.9853046,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259a99fcd53bb:0x1bf8efa679bf1d1f!8m2!3d40.7490211!4d-73.9853046!16s%2Fg%2F11b8v4h17p?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Earth Sessions NYC: Climate Week Kickoff",
    "start": "9/21/2024 12:00",
    "end": "9/21/2024 16:00",
    "eventBlurb": "Earth Sessions is Coming back to New York City to kickoff Climate Week! Join us for an incredible day of immersive activities, musical performances, and so much more!\n\nMusical Performers\nEarthGang, Dianna Lopez, Gaia Music Collective\n\nSpeakers\nKinsale Drake, Kofi Thomas, Wawa Gatheru, Jerome Foster II, Charitie Ropati, Isaias Hernandez, Aditi Mayer, Leah Thomas, Kiana Kazemi, Kalpana Arias + more.\n\nTabling Activations + Artist Exhibits:\nFree book giveaway\nCustomized poetry\nPendant making\nCrafts corner\nUpcycling station\n\nSponsored by our friends Wavereley Street Foundation + Pinterest. \n\nPlease note: Doors open at 12, programing begins at 1:00 pm doors will close at 12:45pm.",
    "host": "Earth Sessions Project,Intersectional Environmentalist",
    "image": "Earth Sessions NYC Climate Week.JPG (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/O6Nh1XgxwFfBbCoLpaMZ1w/JWo9iH1NxecPe1iLlnH8SYpNYJbkL0IwUcsiXwZ9p_uFm-s5kQ7xa93PM635aManABvg9-FMVr1Gx4n6JIYT6OkltkurCjvJHPqMJOgD0OvY8a-35Ti5A9dod7pBilIJ5dWJtaj3obhJjAe4ByhzajYd7Ov9yU4QrnT_-2Q6EEL20eyfMPQX6_kbStH5dzz7/rXiHoFTtAMQf8DZ-qhnwi2ohFwaJfilhIT33BDqGtBw)",
    "location": "100 Sutton St #2fl, Brooklyn, NY 11222",
    "eventType": "Live Performance + Music,\"Panel Discussion, Keynote or Fireside Chat\",Art + Photo Gallery",
    "infoLink": "https://earthsessions.com/events/climateweek",
    "mapLink": "https://www.google.com/maps/place/100+Sutton+Event+Space/@40.7265607,-73.9431045,17z/data=!4m6!3m5!1s0x89c2590afecd22ef:0x104e2ece8345c900!8m2!3d40.7265554!4d-73.9405471!16s%2Fg%2F11fpmcnp52?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Art Build",
    "start": "9/17/2024 3:00",
    "end": "9/19/2024 8:00",
    "eventBlurb": "We are having an ART BUILD for the Climate Strike!  This is especially geared towards artist-friends, & students who might participate in the city-wide Climate Strike on 9/20.",
    "host": "Borough-Based Liberation Project,Chinatown Art Brigade,W.O.W. Project,Dandelions NYC,Black Indigenous Liberation Movement (BILM)",
    "image": "art build.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/ONsw4HHv2EJA292ctPvQbg/RQA62KK4qrO_SxnZ-yTYpEwG0HM-Lva4IR6iDlpXRvYDcUcg26GKO1dzXhqac4X0SeMpg4cMfk1SPe8Ra69Fg8YzFZHo-LQMlAqIqY83FMySurMt0TLqVBf-HQHBN8SOLWgFbShoqPk0jqll_B30bYKhW6Z3qVErOFAaKT4DN4Y/UoAXxYlOWOWOu-UqNtkxeugN8NvJaTrVLhku8kGfMc4)",
    "location": "BBLP, 127 Walker Street in Chinatown",
    "eventType": "",
    "infoLink": "https://lu.ma/1u02ij1i",
    "mapLink": "https://www.google.com/maps/place/127+Walker+St,+New+York,+NY+10013,+USA/@40.7173439,-74.0024569,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a275abcb953:0xed4c65edb16d10a6!8m2!3d40.7173399!4d-73.999882!16s%2Fg%2F11c26kgc44?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "TEACH-IN on Indigenous & Queer Justice practices",
    "start": "9/28/2024 12:00",
    "end": "9/28/2024 4:00",
    "eventBlurb": "This will be a public-facing event to share learnings from our visiting indigenous elders, plus learnings from our month of conflict resolution in the space. It is also the final event for the Borough-Based Liberation Project, and will be followed by a Closing Party til 9pm with DJ Chicklet!",
    "host": "Borough-Based Liberation Project,Chinatown Art Brigade,W.O.W. Project,Dandelions NYC,Black Indigenous Liberation Movement (BILM)",
    "image": "teach in.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/RE3RLeFJkUXHnG_YVHj0nw/ucZbNoaF5AXKbTE3fJCOuMk84Sz0OxPxynehdb2cux6pYT32GPTvSX3f48NMuC1O043XjLmcAMet0TDHFe8_udg9ZBnfODdVH0iK6GqP7JivW-eum_Iz3LpgmJrI-n1wzJ_gT2-kcS_LaFM8WyM5h8HhGSMftvPp2q8oI2xOSSU/_ztjStctH1YZrN28-FF6xXRQRqftr7c2ITPIWyB_SMo)",
    "location": "BBLP, 127 Walker Street in Chinatown",
    "eventType": "",
    "infoLink": "https://lu.ma/3gw9seue",
    "mapLink": "https://www.google.com/maps/place/127+Walker+St,+New+York,+NY+10013,+USA/@40.7173439,-74.0024569,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a275abcb953:0xed4c65edb16d10a6!8m2!3d40.7173399!4d-73.999882!16s%2Fg%2F11c26kgc44?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Pause: A Space to Heal and Reconnect during Climate Week",
    "start": "9/26/2024 12:00",
    "end": "9/26/2024 17:00",
    "eventBlurb": "Join Mothers Out Front NY for a rejuvenating afternoon dedicated to moms, caregivers, and stewards of our planet navigating the stresses of climate anxiety.  At this special event, we invite you to take a moment to \"pause\" and connect to yourself at the newly renovated DOM New York Space. \n\nJoin us for an afternoon of curated and sustainable selfcare plus some thoughtful conversations around transmuting climate anxiety in Community. \n\nThe event will feature:\n\nA Breathwork from Othership\nA Workshop from the Climate Mental Health Network\nNail products from Dear Sundays\nTED Speaker Amanda Argot Efthimiou\nSkincare Station by BYKIND\nSnacks, sips and comfortable places to sit!\n\nJoin us for this free event dedicated to filling your cup back up this Climate Week!",
    "host": "Mothers Out Front",
    "image": "invite-1.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/mHEdpzuM4m9oVbod5dmebw/v5kMxAI3q-PjErvuPWgEjYPcfkvUWt0zOAEsCTbWj2MfMOtmR18PxPg3eWEyY0-BLToqJpBcJcxWkTtfdv9i54pcfCKT1CMVcepS9gvEQgaka5wUNjovBDXyjg4JIA5x-Lpi7fGehntS2ZFSvo-1gPCHuiGrK-u7wZVffIjtpa8/VZxmZWkYGGjwwkHcVVjansyTgMOI66wfkrTzbh6MtMI)",
    "location": "DOM NYC, 287 Park Ave S, New York, NY 10010",
    "eventType": "Mindfulness + Wellbeing,Networking Mixers",
    "infoLink": "www.mothersoutfront.org",
    "mapLink": "https://www.google.com/maps/place/DOM/@40.7395,-73.9863,17z/data=!3m2!4b1!5s0x89c259a0e4041f55:0xec29b6ec34d6441f!4m6!3m5!1s0x89c259a42e6a8dcb:0x153add8847d574a0!8m2!3d40.7395!4d-73.9863!16s%2Fg%2F11pzyyk3_6?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Art at the Edge",
    "start": "9/22/2024 9:44",
    "end": "10/5/2024 9:45",
    "eventBlurb": "Art at the Edge is a free, outdoor climate-art installation held annually in the Seaport and Pier 16. This year’s exhibit is on display Sept. 22 – Oct. 5. The program is generously supported by The Seaport and the South Street Seaport Museum. Art at the Edge captures New York and New Jersey artists whose work is thematically tied to climate change and will inspire, inform, and engage the public about the urgency of the climate crisis. The exhibit gives visitors an opportunity to absorb art focused on the climate crisis, including the intersecting themes of coastal resilience, waterfront access, and the region’s maritime culture and history.",
    "host": "Street Seaport Museum,Waterfront Alliance",
    "image": "WFA_AATE_DigitalGraphics_General_IGpost.jpg (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/5DNxJ-wVzArzpowdq1AhWg/-CmFa6ZhQkFkuwmYy4SFixKT8XjgY2v6agjhODLWpqxQk9zgkj050o7XB1aC3vQER_HMyW6tVVUlk6cQ6tLGA0X90Xl_LmQU5S6G1UilrsZYr8-yucbVEdSZNDMsSh4-O4xVGTTsrYFDjDMRRjVcWdHOosh5n1Z_a88mFryzQEMk2bjrkf5HIb9aOmqfFaJw4DTkFEVdq3iAFUJcoe4MAw/tHSbFCfY6ZCDBkJY5T5Lh5t5hBprCzMOeO63nHJ22_E)",
    "location": "Pier 16, the Seaport",
    "eventType": "Art + Photo Gallery",
    "infoLink": "https://waterfrontalliance.org/art-at-the-edge/",
    "mapLink": "https://www.google.com/maps/place/Pier+16/@40.7057091,-74.0030858,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a3cfaba4211:0x26a29278aadb91db!8m2!3d40.7057091!4d-74.0030858!16s%2Fg%2F11c1b09y14?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Art at the Edge Panel",
    "start": "9/26/2024 18:00",
    "end": "9/12/2024 19:00",
    "eventBlurb": "Artistic expression serves as a guiding light in challenging times, providing solace, building connections, and fostering meaningful dialogue. Through the lens of the climate crisis, this year's Art at the Edge exhibit at Pier 16 in the Seaport does exactly that!\n\nJoin Waterfront Alliance and South Street Seaport Museum for a thought-provoking Climate Week NYC panel aboard the historic Wavertree ship where this year's Art at the Edge cohort will discuss their climate-related work, from overarching themes to their inspirations to the impact of the climate crisis on the artistic culture of today.",
    "host": "Street Seaport Museum,Waterfront Alliance",
    "image": "Art at the Edge Panel.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/u49Dv7xmri9u6ChFhVQYPQ/QKYlUXy9ByaF8Vv_RecsQHGttUr4CnDoSxszXQKSbDcZp-bbJb0N6PWGASqDCO8BKHmMEhqpOgdZDK42wbvldz1hPiu5_do0EPhKK9zs7Ayxj4p9at7WXmmgMQIz-Bf3CrSZdpzzntZR_N0JxEOghByKPXJZecK06LY5IreoRcY/68xynZpSAZGdBG5gdBMMi37JZTpl1MO7lyEZG2JB0Ps)",
    "location": "Pier 16, Wavertree Ship",
    "eventType": "Panel Discussion, Keynote or Fireside Chat",
    "infoLink": "https://waterfrontalliance.org/art-at-the-edge/",
    "mapLink": "https://www.google.com/maps/place/Pier+16/@40.7056786,-74.0048479,17z/data=!4m6!3m5!1s0x89c25a3cfaba4211:0x26a29278aadb91db!8m2!3d40.7057091!4d-74.0030858!16s%2Fg%2F11c1b09y14?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  },
  {
    "eventName": "Waterfront Alliance and Climate Film Festival Present a Screening of WindShipped",
    "start": "9/25/2024 18:30",
    "end": "9/25/2024 20:00",
    "eventBlurb": "Join for this special climate week screening of the 39-minute documentary film WindShipped, presented in partnership with Waterfront Alliance and Climate Film Festival. \n\nWindShipped tells the story of how one man’s quixotic dream turned into reality. For the past five years, the schooner Apollonia has been delivering goods up and down the Hudson River by sail, including deliveries to South Street, reminiscent of a time when numerous boats sailed the river daily. We will learn how their buyers have shown a preference for this non-polluting method of delivery. \n \nA thought-provoking panel discussion with the filmmakers will follow the screening. Advance registration for this free event is suggested but walk-ups will be accommodated as possible.",
    "host": "Waterfront Alliance,Climate Film Festival",
    "image": "Screening of WindShipped.png (https://v5.airtableusercontent.com/v3/u/33/33/1726912800000/pIlk8zTrypga_jJKPc6HWQ/tqJJ4pQQ37IdaOhakU4dIrqgkVqumz_g6kvHi7lwMRNi5FRxqQgWZqJruxj7ts1aRVyCOZz_XQhESAOeHNi1xNnxe-9N95DgJ1eKhjBEJed6LvKyhk_BSLNROPwcXuBUf9e4RTZeihTuNlgteLYKpj9xzd8quph6Tryppc0KKZLo_UVspwASkmvyphNuaBMc/Ui-CUvZiqGD_BHJLUUKwaAXbyrlSYKke6e6HIsYuqXw)",
    "location": "207 Water St, New York, NY 10038, South Street Seaport Museum",
    "eventType": "Film Screening",
    "infoLink": "https://southstreetseaportmuseum.org/film-screenings-connections-to-the-waterfront/",
    "mapLink": "https://www.google.com/maps/place/207+Water+St,+Brooklyn,+NY+11201,+USA/@40.7073376,-74.0061496,17z/data=!3m1!4b1!4m7!3m6!1s0x89c25a3d1ffd93bb:0x4c4850a324e29c52!8m2!3d40.7073336!4d-74.0035747!15sCj0yMDcgV2F0ZXIgU3QsIE5ldyBZb3JrLCBOWSAxMDAzOCwgU291dGggU3RyZWV0IFNlYXBvcnQgTXVzZXVtkgEQZ2VvY29kZWRfYWRkcmVzc-ABAA!16s%2Fg%2F11c2h7fh_7?entry=tts&g_ep=EgoyMDI0MDkxOC4xKgBIAVAD"
  }
]

function extractUrl(imageString: string): string {
  const urlMatch = imageString.match(/\((https?:\/\/[^\)]+)\)/);
  return urlMatch ? urlMatch[1] : "";
}

export const events: Event[] = originalEevents.map((event) => {
  return {
    id: generateId(),
    ...event,
    image: extractUrl(event.image),
  };
});
