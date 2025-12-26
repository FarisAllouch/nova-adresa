"use client";

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export default function PropertyMap({ location }: {
    location: { lat: number; lng: number }
}) {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}>
            <GoogleMap
                center={location}
                zoom={15}
                mapContainerStyle={{
                width: "100%",
                height: "400px",
                borderRadius: "16px",
                }}
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
}