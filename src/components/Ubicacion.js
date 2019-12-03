import React from "react";
import { findNodeModule } from "jest-resolve";

const Ubicacion = ({ setCenter, setMarker }) => {
  const findMe = () => {
    if (!navigator.geolocation) {
      alert("El navegador no soporta geolocalización ");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const [latitude, longitude] = position.coords;
        if (setCenter) {
          setCenter(latitude, longitude);
        }
        if (setMarker) {
          setMarker(
            latitude,
            longitude,
            "Mi ubicación",
            `lat: ${latitude}, lng: ${longitude}`
          );
        }
      },
      error => {
        alert("Error al obtener la ubicación");
      }
    );
  };
  return (
    <button type="button" className="btn btn-info" onClick={findMe}>
      Mi Ubicación
    </button>
  );
};

export default Ubicacion;
