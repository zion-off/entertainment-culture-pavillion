"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarDays, MapPin, Clock, Search } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { returnEvents, Event } from "@/data/events";

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function extractCoordinates(mapLink: string): [number, number] | null {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const match = mapLink.match(regex);
  if (match) {
    return [parseFloat(match[1]), parseFloat(match[2])];
  }
  return null;
}

interface MapMarkersProps {
  events: Event[];
  selectedEvent: Event | null;
  onMarkerClick: (event: Event) => void;
}

function MapMarkers({ selectedEvent, onMarkerClick, events }: MapMarkersProps) {
  const map = useMap();
  const markerRefs = useRef<{ [key: string]: L.Marker | null }>({});

  useEffect(() => {
    if (selectedEvent) {
      const coordinates = extractCoordinates(selectedEvent.mapLink);
      if (coordinates) {
        map.setView(coordinates, 14);
        const marker = markerRefs.current[selectedEvent.id];
        if (marker) {
          marker.openPopup();
        }
      }
    }
  }, [selectedEvent, map]);

  return (
    <>
      {events.map((event: Event) => {
        const coordinates = extractCoordinates(event.mapLink);
        if (coordinates) {
          return (
            <Marker
              key={event.id}
              position={coordinates}
              ref={(ref) => {
                if (ref) {
                  markerRefs.current[event.id] = ref;
                }
              }}
              eventHandlers={{
                click: () => onMarkerClick(event),
              }}
            >
              <Popup>
                <div>
                  <h3 className="font-bold">{event.eventName}</h3>
                  {event.start && event.end && (
                    <p>
                      {formatDate(event.start)} | {formatTime(event.start)} -{" "}
                      {formatTime(event.end)}
                    </p>
                  )}
                  <p>{event.host}</p>
                </div>
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function EventDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<"dateAsc" | "dateDesc">(
    "dateAsc"
  );
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await returnEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const filteredAndSortedEvents = useMemo(() => {
    return events
      .filter((event) => {
        if (!searchTerm) return true;
        return (
          event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
      .sort((a, b) => {
        if (sortOption === "dateAsc") {
          return new Date(a.start).getTime() - new Date(b.start).getTime();
        } else {
          return new Date(b.start).getTime() - new Date(a.start).getTime();
        }
      });
  }, [searchTerm, sortOption, events]);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    if (mapRef.current) {
      const coordinates = extractCoordinates(event.mapLink);
      if (coordinates) {
        mapRef.current.setView(coordinates, 14);
      }
    }
  };

  const handleMarkerClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search by name or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <Select
          value={sortOption}
          onValueChange={(value: "dateAsc" | "dateDesc") =>
            setSortOption(value)
          }
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dateAsc">Date (Ascending)</SelectItem>
            <SelectItem value="dateDesc">Date (Descending)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 h-[90%]">
        {events.length === 0 ? (
          <div className="w-full h-full lg:w-1/2 space-y-4 overflow-y-auto p-5 bg-gray-100 animate-pulse rounded-lg"></div>
        ) : (
          <div className="w-full lg:w-1/2 space-y-4 overflow-y-auto p-5 h-full">
            {filteredAndSortedEvents.map((event) => (
              <Card
                key={event.id}
                className={`flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-200 ${
                  selectedEvent && selectedEvent.id === event.id
                    ? "ring-2 ring-[#808FFF]"
                    : ""
                }`}
                onClick={() => handleEventClick(event)}
              >
                <CardHeader>
                  <CardTitle>{event.eventName}</CardTitle>
                  {event.eventType && (
                    <CardDescription>
                      {event.eventType.map((type: string, index: number) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#808FFF] text-primary-foreground shadow hover:bg-[#808FFF]/80 mr-2 mt-2 "
                        >
                          {type.trim()}
                        </span>
                      ))}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  {event.start && event.end && (
                    <>
                      <div className="flex items-center mb-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                        <span>{formatDate(event.start)}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Clock className="mr-2 h-4 w-4 opacity-70" />
                        <span>
                          {formatTime(event.start)} - {formatTime(event.end)}
                        </span>
                      </div>
                    </>
                  )}
                  {event.location && (
                    <div className="flex items-center mb-4">
                      <MapPin className="mr-2 h-4 w-4 min-w-4 opacity-70" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  )}

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(event);
                    }}
                    variant="link"
                  >
                    See details
                  </Button>
                </CardContent>
              </Card>
            ))}
            {filteredAndSortedEvents.length === 0 && (
              <p className="text-center text-gray-500 mt-6">
                No events found matching your search.
              </p>
            )}
          </div>
        )}

        <div className="w-full lg:w-1/2 h-full z-0">
          <MapContainer
            center={[40.7128, -74.006]}
            zoom={12}
            minZoom={3}
            maxZoom={19}
            style={{ height: "100%", width: "100%" }}
            ref={mapRef}
          >
            <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
            <MapMarkers
              events={events}
              selectedEvent={selectedEvent}
              onMarkerClick={handleMarkerClick}
            />
          </MapContainer>
        </div>
      </div>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedEvent.eventName}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-4">
                {selectedEvent.image && (
                  <div>
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.eventName}
                      className="w-1/2 h-auto rounded-lg"
                    />
                  </div>
                )}
                <div>
                  {selectedEvent.host && (
                    <p className="text-sm text-gray-500 mb-2">
                      Hosted by {selectedEvent.host}
                    </p>
                  )}
                  <p className="mb-4">{selectedEvent.eventBlurb}</p>
                  <div className="flex items-center mb-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span>{formatDate(selectedEvent.start)}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 opacity-70" />
                    <span>
                      {formatTime(selectedEvent.start)} -{" "}
                      {formatTime(selectedEvent.end)}
                    </span>
                  </div>
                  {selectedEvent.location && (
                    <div className="flex items-center mb-4">
                      <MapPin className="mr-2 h-4 w-4 opacity-70" />
                      <span className="w-1/2">{selectedEvent.location}</span>
                    </div>
                  )}

                  {selectedEvent.infoLink && (
                    <a
                      href={selectedEvent.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    >
                      More info
                      <Image
                        aria-hidden
                        src="./link.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                      />
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
