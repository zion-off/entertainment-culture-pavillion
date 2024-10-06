export async function returnEvents(): Promise<Event[]> {
  const response = await fetch('/api/airtable');
  const data = await response.json();
  const events = data.records.map((record: any) => {
    return {
      id: record.id,
      eventName: record.fields["Event Name"] || "",
      start: record.fields["Start"] || "",
      end: record.fields["End"] || "",
      eventBlurb: record.fields["Event Blurb"] || "",
      host: record.fields["Host Organization (form)"] || "",
      image:
        record.fields["Image"][0]?.thumbnails?.large?.url ||
        record.fields["Image"][0]?.url ||
        "",
      location: record.fields["Event Location"] || "",
      eventType: record.fields["Event Type"] || [],
      infoLink: record.fields["For more info:"] || "",
      mapLink: record.fields["Google Map Link"] || "",
    };
  });
  return events;
}

export interface Event {
  id: string;
  eventName: string;
  start: string;
  end: string;
  eventBlurb: string;
  host: string;
  image: string;
  location: string;
  eventType: string[];
  infoLink: string;
  mapLink: string;
}
