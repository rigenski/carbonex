"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@/styles/map.css";
import indonesiaGeoJSON from "@/data/indonesia-provinces.json";

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface ProvinceData {
  name: string;
  carbonIssued: number;
  coordinates: [number, number];
}

interface IndonesiaMapProps {
  provincesData: ProvinceData[];
}

// Choropleth color scale function with better gradient
function getColor(d: number, maxCarbon: number) {
  const ratio = d / maxCarbon;

  if (ratio === 0) return "#f8fafc"; // No data - very light gray
  if (ratio <= 0.1) return "#dbeafe"; // Very low - light blue
  if (ratio <= 0.2) return "#93c5fd"; // Low - blue
  if (ratio <= 0.3) return "#60a5fa"; // Medium-low - medium blue
  if (ratio <= 0.4) return "#3b82f6"; // Medium - blue
  if (ratio <= 0.5) return "#2563eb"; // Medium-high - dark blue
  if (ratio <= 0.6) return "#1d4ed8"; // High - darker blue
  if (ratio <= 0.7) return "#1e40af"; // Very high - very dark blue
  if (ratio <= 0.8) return "#1e3a8a"; // Extremely high - darkest blue
  return "#172554"; // Maximum - navy
}

// Format number with commas
function formatNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function IndonesiaMap({ provincesData }: IndonesiaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Create map instance with better initial view
    const map = L.map(mapRef.current, {
      center: [-2.0, 120.0],
      zoom: 5,
      zoomControl: true,
      scrollWheelZoom: true,
      dragging: true,
      touchZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: true,
    });
    mapInstanceRef.current = map;

    // Add tile layer with better styling
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 18,
      minZoom: 3,
    }).addTo(map);

    // Create a lookup for province data
    const provinceLookup = provincesData.reduce(
      (acc, province) => {
        acc[province.name] = province;
        return acc;
      },
      {} as Record<string, ProvinceData>,
    );

    // Calculate statistics for better color scaling
    const carbonValues = provincesData.map((p) => p.carbonIssued);
    const maxCarbon = Math.max(...carbonValues);
    const minCarbon = Math.min(...carbonValues);
    const avgCarbon =
      carbonValues.reduce((a, b) => a + b, 0) / carbonValues.length;

    // Add GeoJSON layer with enhanced choropleth styling
    const geojsonLayer = L.geoJSON(indonesiaGeoJSON as any, {
      style: (feature) => {
        const provinceName = feature?.properties?.name;
        const provinceData = provinceLookup[provinceName];

        if (!provinceData) {
          return {
            fillColor: "#f8fafc",
            weight: 1,
            opacity: 0.6,
            color: "#cbd5e1",
            fillOpacity: 0.2,
            dashArray: "3",
          };
        }

        return {
          fillColor: getColor(provinceData.carbonIssued, maxCarbon),
          weight: 2,
          opacity: 1,
          color: "#1e293b",
          fillOpacity: 0.8,
          dashArray: "0",
        };
      },
      onEachFeature: (feature, layer) => {
        const provinceName = feature?.properties?.name;
        const provinceData = provinceLookup[provinceName];

        if (provinceData) {
          // Enhanced popup with more information
          layer.bindPopup(
            `
            <div class="p-4 min-w-[220px]">
              <div class="flex items-center justify-between mb-3">
                <h3 class="font-bold text-lg text-gray-900">${provinceData.name}</h3>
                <div class="w-4 h-4 rounded-full border border-gray-300" style="background-color: ${getColor(provinceData.carbonIssued, maxCarbon)}"></div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Carbon Credits:</span>
                  <span class="font-bold text-lg text-blue-600">${formatNumber(provinceData.carbonIssued)}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Percentage:</span>
                  <span class="font-semibold text-sm text-gray-700">${((provinceData.carbonIssued / maxCarbon) * 100).toFixed(1)}%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Rank:</span>
                  <span class="font-semibold text-sm text-gray-700">#${carbonValues.sort((a, b) => b - a).indexOf(provinceData.carbonIssued) + 1}</span>
                </div>
                <div class="pt-2 border-t border-gray-200">
                  <div class="text-xs text-gray-500">
                    <div>Color: ${getColor(provinceData.carbonIssued, maxCarbon)}</div>
                  </div>
                </div>
              </div>
            </div>
          `,
            {
              maxWidth: 320,
              className: "custom-popup",
            },
          );

          // Enhanced hover effects for choropleth highlighting
          layer.on({
            mouseover: (e) => {
              const layer = e.target;
              layer.setStyle({
                weight: 3,
                color: "#0f172a",
                fillOpacity: 0.9,
                dashArray: "0",
              });
              layer.bringToFront();

              // Add tooltip
              layer.bindTooltip(
                `<div class="font-semibold">${provinceData.name}</div>
                 <div class="text-sm">${formatNumber(provinceData.carbonIssued)} credits</div>`,
                {
                  permanent: false,
                  direction: "top",
                  className: "custom-tooltip",
                },
              );
            },
            mouseout: (e) => {
              const layer = e.target;
              layer.setStyle({
                weight: 2,
                color: "#1e293b",
                fillOpacity: 0.8,
                dashArray: "0",
              });
              layer.closeTooltip();
            },
            click: (e) => {
              map.fitBounds(e.target.getBounds(), { padding: [20, 20] });
            },
          });
        }
      },
    }).addTo(map);

    // Enhanced legend with better styling and information
    const legend = L.control({ position: "bottomright" });
    legend.onAdd = () => {
      const div = L.DomUtil.create(
        "div",
        "info legend bg-white p-4 rounded-lg shadow-xl border border-gray-200",
      );

      const grades = [
        0,
        maxCarbon * 0.1,
        maxCarbon * 0.2,
        maxCarbon * 0.3,
        maxCarbon * 0.4,
        maxCarbon * 0.5,
        maxCarbon * 0.6,
        maxCarbon * 0.7,
        maxCarbon * 0.8,
        maxCarbon,
      ];

      div.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-lg text-gray-900">Carbon Credits Issued</h4>
            <div class="text-xs text-gray-500">Total: ${formatNumber(maxCarbon)}</div>
          </div>
          <div class="space-y-2">
            ${grades
              .map((grade, i) => {
                const color = getColor(grade, maxCarbon);
                const nextGrade = grades[i + 1];
                const label = nextGrade
                  ? `${formatNumber(Math.round(grade))} - ${formatNumber(Math.round(nextGrade))}`
                  : `${formatNumber(Math.round(grade))}+`;

                return `
                  <div class="flex items-center space-x-2">
                    <div class="w-4 h-4 rounded border border-gray-300" style="background-color: ${color}"></div>
                    <span class="text-xs text-gray-700">${label}</span>
                  </div>
                `;
              })
              .join("")}
          </div>
          <div class="pt-2 border-t border-gray-200">
            <div class="text-xs text-gray-500">
              <div>Average: ${formatNumber(Math.round(avgCarbon))}</div>
              <div>Min: ${formatNumber(minCarbon)} | Max: ${formatNumber(maxCarbon)}</div>
            </div>
          </div>
        </div>
      `;
      return div;
    };
    legend.addTo(map);

    // Add info control with statistics
    const info = L.control({ position: "topright" });
    info.onAdd = () => {
      const div = L.DomUtil.create(
        "div",
        "info bg-white p-3 rounded-lg shadow-lg border border-gray-200",
      );
      div.innerHTML = `
        <div class="space-y-2">
          <h4 class="font-bold text-gray-900">Carbon Credit Statistics</h4>
          <div class="text-xs space-y-1">
            <div class="flex justify-between">
              <span>Total Provinces:</span>
              <span class="font-semibold">${provincesData.length}</span>
            </div>
            <div class="flex justify-between">
              <span>Total Credits:</span>
              <span class="font-semibold">${formatNumber(carbonValues.reduce((a, b) => a + b, 0))}</span>
            </div>
            <div class="flex justify-between">
              <span>Average:</span>
              <span class="font-semibold">${formatNumber(Math.round(avgCarbon))}</span>
            </div>
          </div>
        </div>
      `;
      return div;
    };
    info.addTo(map);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [provincesData]);

  return (
    <div className="h-96 w-full overflow-hidden rounded-lg border border-gray-200 shadow-lg">
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
}
