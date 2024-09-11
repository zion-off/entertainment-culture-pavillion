export interface Event {
  id?: string;
  eventName: string;
  start: string;
  end: string;
  eventBlurb: string;
  host: string;
  image: string;
  location: string;
  eventType: string;
  registrationType: string;
  registrationLink: string;
  mapLink: string;
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

const originalEevents: Event[] = [
  {
    eventName: "Sustainable Storytelling: On and Off Camera",
    start: "9/27/2024 17:00",
    end: "9/27/2024 19:00",
    eventBlurb:
      "Come join us at The Climate Imaginarium for an exciting event focused on sustainable storytelling! \n\nWhether you're a filmmaker, writer, or just passionate about the environment, this event is for you. Learn what makes an impactful story that inspires change both on and off camera. \n\nThis panel will be MC’d by eco-coordinator, producer, and sfx makeup artist Julie Souza (she/her) and will introduce:\n- Children’s Media Storyteller and Educator Suzie Hicks (they/them)\n- Environmental Production Coordinator and Journalist Gabriella Sotelo (she/her)\n- Sustainable Director, Producer, and Set Designer Aspen Nelson (they/them) \n\nCatch a sneak-peek of the upcoming short film: Micro-Plastination. Get your face painted with biodegradable glitter just like in Micro-Plastination by Art Jam Collective. And end your afternoon with an artist mixer with light snacks and drinks!\n\nConnect with like-minded individuals and explore innovative ways to communicate important messages. Don't miss out on this unique opportunity to dive into the world of storytelling with a focus on sustainability! BYOC (bring your own cup!)\n\nAll proceeds will support the short film Micro-Plastination. No one will be turned away due to funds.",
    host: "The Climate Imaginarium",
    image:
      "https://v5.airtableusercontent.com/v3/u/33/33/1726099200000/hEJWP77nTiHvNELZWCVvZQ/aVkUlF6hTZ2nti4sxlKUA4ibPyodk-maEMXcONDZAdQAFZPZehugnfh4jJmPrzazpQzAeh6ZW_OPocIZ2ayAxdClKLZxFtpvruqgN7NNPsxc22-oTPxlWgcNdLmqC-d_7D1i5nS5sp7j8pvXolVf2TX8tRwmNiBVleJJ8HYHlF2xZCDgS-UAuyahRuh79aog/A9dUy3y7_TjHu1pPxuo6YRlaOuWNL6Z9x8jrjCvTBNs",
    location: "The Climate Imaginarium",
    eventType: "Film Screening, Panel Discussion, Keynote, Fireside Chat",
    registrationType: "",
    registrationLink: "",
    mapLink:
      "https://www.google.com/maps/place/The+Climate+Imaginarium/@40.6900272,-74.0174897,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25b0012954859:0xb063a7dbfd161e06!8m2!3d40.6900272!4d-74.0174897!16s%2Fg%2F11v_2hdcf8?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    eventName: "Climate, Comedy, & Cocktails",
    start: "9/26/2024 1:00",
    end: "9/26/2024 3:30",
    eventBlurb:
      'Join us at the China Institute of America on September 25, 2024, for a groundbreaking event that blends environmental activism with art and entertainment. "Climate, Comedy, and Cocktails," hosted by the Serica Initiative in partnership with the WNET Group, offers an engaging evening designed to spark conversation and inspire action towards a sustainable future. This will be a dynamic evening celebrating the AAPI artists involved in the ALL ARTS/PBS documentary series "Climate Artists", featuring well known artivists Maya Lin, sTo Len, and Eddie Ahn, set to be released the week of September 22, coinciding with Climate Week NYC. This event features an insightful panel discussion from climate experts Jeffrey Shaman and Becca Benner, comedy from rising star Jiaoying Summers, climate-conscious food & cocktails, an interactive fair for guests to enjoy other sustainable products, and an exclusive world-premiere screening!',
    host: "The Serica Initiative",
    image:
      "Main Banner-16x9.png (https://v5.airtableusercontent.com/v3/u/33/33/1726099200000/14H5GBL17XgmdH4OTuMfKA/eDWMw8CBxoo9BPwENZaUQUzlWjAU1RfAaughElrltbp3V07hXj-o3wvYweuXGUurEOscQzMsfpV7Ix6CRkhcjdtXtrHjmlMowM36dANQWL5EBif-AiWSwrjLIrZbKM4h05ear0BkDMu1GyTyLmJCMq5dQ41802qcNWxLDDTULJo/21qhUJQij3YcfTx_nMQQ9frMlXlagq4AyfvDLYLS2d8),CCC-QR-Ticket 1080x1080.png (https://v5.airtableusercontent.com/v3/u/33/33/1726099200000/wHuAYy_vNS9dE760-PL9og/LTVkl2YJIv-h2EWPrjA4r1Im6V7cOugRvrhqq_mW8VLcKXkYO00djfrrNO3F630g7glxXAgZb1xehaK8jcigPS_BJ_mCciuTkfksIgoqVHDE0KVH6Z1hIb9e02bKMi6734rTboqQ833a5BEV0TUJn_Lj73wAcQbvd-TemKl8yeSjl1OkzM-KZ7Ny7agEAH1P/ytQDLSO8dQwWGw2-ZbkIXfoVHfJaS7w5enZAP9xVSVA),CCC-quote 1080x1080.png (https://v5.airtableusercontent.com/v3/u/33/33/1726099200000/Lg3gFuePzVqnAE0LReQX_A/Y7E5HJEmqGkQU0Jx1vbFekTX3fftRlbzHOsXQUmbN3CbazZsxSzFqHixtMvrZA3yD9K1m7NtNr2I83dY71IlORzZOidgnXTH0RKVVg4qzuIVdpJ5HZzybTnvqeQ60Z0TtPbSnJeBbN-RkCRVmmdBQWjfmd32H5TMfyPVCKvCL0M/AaBd8Yt5UGyjZJJnfE_AETTFGUDILbA29ZhySTlTJ14)",
    location: "100 Washington Street",
    eventType:
      "Film Screening, Panel Discussion, Keynote, Fireside Chat, Networking Mixers, Other",
    registrationType: "",
    registrationLink: "",
    mapLink:
      "https://www.google.com/maps/place/100+Washington+St,+New+York,+NY+10006,+USA/@40.7084299,-74.0145651,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a10efaba5ff:0x279c84159dc0d4c9!8m2!3d40.7084299!4d-74.0145651!16s%2Fg%2F11c2g3vc9b?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    eventName: "Street Work Earth",
    start: "9/22/2024 9:00",
    end: "9/22/2024 3:00",
    eventBlurb:
      "Join Make Justice Normal for Street Work Earth, a free street arts & climate action festival created by artists committed to fostering joyful, community-led action in public spaces. We'll spend the day experiencing and co-creating art alongside incredible artists and learning about concrete environmental & climate action on 34th Avenue's amazing Open Street in Jackson Heights, Queens. RSVP to save the date and stay updated on the agenda. People of all ages welcome!! \n\nVisit https://www.makejusticenormal.org/the-arisen/street-works for a growing list of participating artists. \n\nMJN's inaugural Street Work Earth, is a public arts festival dedicated climate and environmental justice. This in-person event is an opportunity to participate in art collaboration, make new friends involved in the arts, learn about New York climate policies, and get connected to action groups working year-round to make New York City a climate-forward city. See you there! \n\nWhy Street Works, Why Now? \n\nStreet Works are public-space galleries for participatory art, by and for artists dedicated to making justice normal. In a time in which democracy is at risk and collective civic participation is needed more than ever, we hope to support one home by and for these artists who go beyond interactive art to sharing power with audience in 2-way and 20-way conversation that enables the brilliance of passersby to collectively emerge. Over time and scale, we hope this is one way for democracy to become a personal and joyful experience.",
    host: "Make Justice Normal",
    image:
      "Screenshot 2024-08-19 at 10.13.21 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726099200000/NMItODJrvD0V1HYoZcdkLg/LU4ZCgL7pCAz999pQNFnpeOLxQ7rPwEGuqa-aWxXsmQR20SFtqykEjsfNG28tyOiphAManRSdFK-ohm_tXIpj0V6I6UeV620y-ceGhz7ehLyN0XxPKiXu9LOj5EV5z8_SknDt2g9c4cHJ0M2OKipwILqZms2PsTqlXAv-lZ4RDoN8wex0DNYYNYmDa6W52VA/DArCGOqHxnptfh-ZZjbH8psdpAQpVfPlttjK8LUz2Os)",
    location: "34th Avenue, 11372, Jackson Heights, New York",
    eventType: "Art + Photo Gallery, Other",
    registrationType: "",
    registrationLink: "",
    mapLink:
      "https://www.google.com/maps/place/34th+Ave,+Queens,+NY,+USA/@40.7543723,-73.8820488,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25fa49a2e2aab:0xa1eaf390d7f05233!8m2!3d40.7543683!4d-73.8794685!16s%2Fg%2F1tdyx8n0?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    eventName: "Climate Film Festival",
    start: "9/20/2024 4:00",
    end: "9/22/2024 6:00",
    eventBlurb:
      "The Climate Film Festival (CFF) is the largest festival of its kind in New York City, supported by the Guardian US and featuring a jury of 15 industry leaders in climate.\n\nCFF aims to rewrite the narrative on climate change by harnessing the power of motion pictures, showcasing new and established voices, classic climate films, and energizing, human stories.\n\nThe Climate Film Festival takes place during the opening weekend of Climate Week NYC, from Friday, September 20th to Sunday, September 22nd.\n\nFilms will be screened in-person in NYC, with the majority shown in two screening rooms at Firehouse: DCTV's Cinema for Documentary Film, located at 87 Lafayette Street in Manhattan, just south of Canal St.\n\nThe festival will feature:\n\n20 film programs over the course of the weekend, including a combination of features and shorts; narrative and documentary.\n6 panels and workshops for filmmakers, climate professionals, and general audiences about the impacts of climate storytelling, ways to develop new climate narratives, sustainable production, and more.\nA Solutions Hub, where attendees can gather for complimentary coffee and snacks and learn from groups doing on-the-ground work to build a better future.\n\nThe Climate Film Festival program will be announced in early August, and tickets will be available for purchase in mid-August.",
    host: "Climate Film Festival",
    image:
      "Screenshot 2024-08-19 at 10.21.08 AM.png (https://v5.airtableusercontent.com/v3/u/33/33/1726099200000/qNXLqn_TLWjXuIydiVz5WQ/lqeH_dhwc23CWr1Q8k-JFHD_Q7-z4dTASw1m-BT2VY_vecRtyABkFfJoD7Hd08nkP_dASQ4KIqG2uNhyChxwAaKlE_j9OgZfDxCh9_OTSqn2ymgYCzE9W9HII34WcD0063SuszCB8unUvEtGb_IbvlgysiM6_mcNQSLNTIImg2uSmkCwBovc5yAQUvPVrSHT/T8vbEb8AfDy1wcX2WiIsBCXYGSVy6aWwWkNvuiddP1I)",
    location:
      "Firehouse: DCTV's Cinema for Documentary Film\n87 Lafayette Street New York, NY 10013 United States",
    eventType: "Film Screening",
    registrationType: "",
    registrationLink: "",
    mapLink:
      "https://www.google.com/maps/place/Firehouse:+DCTV's+Cinema+for+Documentary+Film/@40.7173502,-74.0038163,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25a20b0f04253:0xd661fb2b8bcbe9be!8m2!3d40.7173462!4d-74.001236!16s%2Fg%2F1hhc0z4t1?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const events: Event[] = originalEevents.map((event) => {
  return {
    id: generateId(),
    ...event,
  };
});
