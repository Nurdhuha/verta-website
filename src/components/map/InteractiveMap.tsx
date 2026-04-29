import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { InteractiveMapProps } from '../../types';
import { mockTrees, MAP_CENTER, MAP_ZOOM } from '../../data/mockData';
import './InteractiveMap.css';

// Fix for default marker icons in Leaflet with React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Icons for Tree Health Status
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-tree-marker',
    html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
};

const iconHealthy = createCustomIcon('#10b981');
const iconAttention = createCustomIcon('#f59e0b');
const iconDead = createCustomIcon('#ef4444');

const InteractiveMap: React.FC<InteractiveMapProps> = ({ onTreeClick }) => {
  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={MAP_ZOOM}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      
      {mockTrees.map((tree) => (
        <Marker
          key={tree.id}
          position={[tree.lat, tree.lng]}
          icon={tree.status === 'healthy' ? iconHealthy : tree.status === 'attention' ? iconAttention : iconDead}
          eventHandlers={{
            click: () => onTreeClick(tree.id),
          }}
        >
          <Popup>
            <strong>Tree ID: {tree.id}</strong><br/>
            Status: <span style={{ textTransform: 'capitalize' }}>{tree.status}</span><br/>
            <em>Click for full details</em>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;
