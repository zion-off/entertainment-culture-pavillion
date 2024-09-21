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
  DialogDescription,
} from "@/components/ui/dialog";
import { CalendarDays, MapPin, Clock, Search } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { events, Event } from "@/data/events";

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
  selectedEvent: Event | null;
  onMarkerClick: (event: Event) => void;
}

function MapMarkers({ selectedEvent, onMarkerClick }: MapMarkersProps) {
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
                  <p>
                    {formatDate(event.start)} | {formatTime(event.start)} -{" "}
                    {formatTime(event.end)}
                  </p>
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

  const filteredAndSortedEvents = useMemo(() => {
    return events
      .filter(
        (event) =>
          (event &&
            event.eventName.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (event &&
            event.location.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortOption === "dateAsc") {
          return new Date(a.start).getTime() - new Date(b.start).getTime();
        } else {
          return new Date(b.start).getTime() - new Date(a.start).getTime();
        }
      });
  }, [searchTerm, sortOption]);

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
    <div className="container mx-auto p-4">
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
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2 space-y-4 overflow-y-auto max-h-[600px] p-5">
          {filteredAndSortedEvents.map((event) => (
            <Card
              key={event.id}
              className={`flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-200 ${
                selectedEvent && selectedEvent.id === event.id
                  ? "ring-2 ring-primary"
                  : ""
              }`}
              onClick={() => handleEventClick(event)}
            >
              <CardHeader>
                <CardTitle>{event.eventName}</CardTitle>
                {event.eventType && (
                  <CardDescription>
                    {event.eventType.split(",").map((type, index) => (
                      <Badge key={index} className="mr-2 mt-2">
                        {type.trim()}
                      </Badge>
                    ))}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
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
                <div className="flex items-center mb-4">
                  <MapPin className="mr-2 h-4 w-4 opacity-70" />
                  <span>{event.location}</span>
                </div>
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
        <div className="w-full lg:w-1/2 h-[600px] z-0">
          <MapContainer
            center={[40.7128, -74.006]}
            zoom={12}
            minZoom={3}
            maxZoom={19}
            style={{ height: "100%", width: "100%" }}
            ref={mapRef}
          >
            <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
            <MapMarkers
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
                  <div className="flex items-center mb-4">
                    <MapPin className="mr-2 h-4 w-4 opacity-70" />
                    <span>{selectedEvent.location}</span>
                  </div>
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
