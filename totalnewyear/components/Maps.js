"use client";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 47.90393307267399, // Replace with the latitude of your location
  lng: 106.91702586820973, // Replace with the longitude of your location
};

export default function GoogleMapComponent() {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const customPinImage = "/king2.png"; // Replace with the path to your custom image

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Marker */}
        <Marker
          icon={{
            url: customPinImage, // Path to custom image
            scaledSize: { width: 40, height: 40 }, // Resize the image
          }}
          position={center}
          onClick={() => setIsInfoWindowOpen(true)} // Open InfoWindow when the marker is clicked
        />
      </GoogleMap>
    </LoadScript>
  );
}
