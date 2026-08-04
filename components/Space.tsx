import React, { useEffect, useRef, useCallback } from 'react';
import Section from './Section';
import { SPACE_DATA, PROFILE_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Space: React.FC = () => {
  const { language } = useLanguage();
  const data = SPACE_DATA[language];
  const profile = PROFILE_DATA[language];
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const initializedRef = useRef(false);

  const getTileUrl = useCallback(() => {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark 
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
  }, []);

  const getMarkerStyles = useCallback(() => {
    const isDark = document.documentElement.classList.contains('dark');
    return {
      visitedFill: isDark ? '#a78bfa' : '#8b5cf6',
      visitedColor: isDark ? '#1e293b' : '#fff',
      visitedOpacity: isDark ? 0.6 : 0.4,
      avatarBg: isDark ? '#1e293b' : '#ffffff'
    };
  }, []);

  const addMarkers = useCallback(() => {
    if (!mapRef.current) return;
    
    const map = mapRef.current;
    const styles = getMarkerStyles();

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
        map.removeLayer(layer);
      }
    });

    data.locations.forEach(loc => {
      if (loc.type === 'visited') {
        L.circleMarker([loc.lat, loc.lng], {
          radius: 6, // Smaller radius (mobile-friendly)
          fillColor: styles.visitedFill,
          color: styles.visitedColor,
          weight: 1,
          opacity: 1,
          fillOpacity: styles.visitedOpacity
        }).addTo(map).bindPopup(loc.name, { closeButton: false });
      } else if (loc.type === 'current') {
        const iconHtml = `
          <div class="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
             <div class="absolute inset-0 pulse-ring"></div>
             <div class="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-orange-500 overflow-hidden shadow-lg z-10" style="background: ${styles.avatarBg};">
               <img src="${profile.avatarUrl}" alt="${loc.name}" class="w-full h-full object-cover" />
             </div>
             <div class="absolute -bottom-1 -right-1 bg-orange-500 text-white p-0.5 rounded-full z-20 border border-white">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
             </div>
          </div>
        `;

        const customIcon = L.divIcon({
          html: iconHtml,
          className: 'custom-div-icon',
          iconSize: [40, 40], // Smaller icon size base
          iconAnchor: [20, 20]
        });

        L.marker([loc.lat, loc.lng], { icon: customIcon, zIndexOffset: 1000 }).addTo(map);
      }
    });
  }, [data, profile, getMarkerStyles]);

  // Initialize map and tile layer
  useEffect(() => {
    if (!mapContainerRef.current || initializedRef.current) return;

    // Detect mobile by screen width for simple heuristic
    const isMobile = window.innerWidth < 768;

    const map = L.map(mapContainerRef.current, {
      center: [34.0, 115.0],
      zoom: isMobile ? 3 : 4, // Zoom out slightly more on mobile
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false, // Disable scroll zoom
      dragging: !isMobile, // CRITICAL: Disable dragging on mobile to prevent scroll trapping
      tap: !isMobile, // Help with mobile touch events
    });

    mapRef.current = map;
    initializedRef.current = true;

    // Add initial tile layer (theme-aware)
    tileLayerRef.current = L.tileLayer(getTileUrl(), {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Add markers
    addMarkers();

    return () => {
      map.remove();
      mapRef.current = null;
      tileLayerRef.current = null;
      initializedRef.current = false;
    };
  }, [getTileUrl, addMarkers]);

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (!mapRef.current || !tileLayerRef.current) return;
      
      const map = mapRef.current;
      
      // Update tile layer
      map.removeLayer(tileLayerRef.current);
      tileLayerRef.current = L.tileLayer(getTileUrl(), {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Update markers
      addMarkers();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [getTileUrl, addMarkers]);

  return (
    <Section 
      id="space" 
      title={data.title}
      subtitle={data.subtitle}
    >
      {/* 
        Mobile: Height 350px (enough to see but not block whole scroll)
        Desktop: Height 500px 
      */}
      <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-700">
        {/* Map Container */}
        <div ref={mapContainerRef} className="w-full h-full z-0 bg-slate-100" />
        
        {/* Overlay Card for Current Location - Smaller on mobile */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-[400] bg-white/95 dark:bg-slate-800/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg border border-white/50 dark:border-slate-700/50 flex items-center gap-3 md:gap-4 animate-card-in">
           <div className="bg-orange-100 dark:bg-orange-900/30 p-2 md:p-3 rounded-full text-orange-600 dark:text-orange-400">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" fillOpacity={0.2} />
           </div>
           <div>
             <p className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
              {language === 'en' ? 'Current Location' : '当前位置'}
             </p>
             <h3 className="text-sm md:text-xl font-bold text-slate-800 dark:text-slate-100">{data.currentLocationText}</h3>
           </div>
        </div>

        {/* Decorative Overlay Gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/10 to-transparent rounded-3xl" />
      </div>
    </Section>
  );
};

export default Space;
