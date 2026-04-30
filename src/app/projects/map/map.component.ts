import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

import { environment } from '../../../environments/environment';

interface ProjectLocation {
  label: string;
  title: string;
  description: string;
  position: google.maps.LatLngLiteral;
  preview: {
    left: number;
    top: number;
  };
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('mapDemo') mapDemoRef!: ElementRef<HTMLElement>;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  center: google.maps.LatLngLiteral = { lat: 28.4595, lng: 77.0266 };
  zoom = 10;
  mapReady = false;
  mapLoadFailed = false;
  demoHighlighted = false;
  selectedLocation: ProjectLocation | null = null;

  private readonly googleMapsApiKey = environment.googleMapsApiKey;

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false
  };

  locations: ProjectLocation[] = [
    {
      label: 'G',
      title: 'Gurugram Office',
      description: 'Primary portfolio location and frontend delivery hub.',
      position: { lat: 28.4595, lng: 77.0266 },
      preview: { left: 36, top: 48 }
    },
    {
      label: 'D',
      title: 'Delhi Client Zone',
      description: 'Example client marker with clickable info window content.',
      position: { lat: 28.6139, lng: 77.2090 },
      preview: { left: 56, top: 30 }
    },
    {
      label: 'N',
      title: 'Noida Product Team',
      description: 'Static coordinate showing a second project collaboration area.',
      position: { lat: 28.5355, lng: 77.3910 },
      preview: { left: 66, top: 58 }
    }
  ];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.selectedLocation = this.locations[0];

    if (!this.hasGoogleMapsApiKey()) {
      return;
    }

    this.loadGoogleMapsScript();
  }

  selectPreviewLocation(location: ProjectLocation): void {
    this.selectedLocation = location;
  }

  scrollToDemo(): void {
    const demoElement = this.mapDemoRef.nativeElement;

    demoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    demoElement.focus({ preventScroll: true });
    this.demoHighlighted = true;

    window.setTimeout(() => this.demoHighlighted = false, 1400);
  }

  openInfo(location: ProjectLocation, marker: MapMarker): void {
    // Store the selected marker data before opening the shared info window.
    this.selectedLocation = location;
    this.infoWindow.open(marker);
  }

  private hasGoogleMapsApiKey(): boolean {
    return this.googleMapsApiKey.trim().length > 0;
  }

  private loadGoogleMapsScript(): void {
    if (typeof google !== 'undefined' && google.maps) {
      this.mapReady = true;
      return;
    }

    const existingScript = document.getElementById('google-maps-api');

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-api';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}`;
    script.onload = (): void => {
      this.ngZone.run(() => this.mapReady = true);
    };
    script.onerror = (): void => {
      this.ngZone.run(() => this.mapLoadFailed = true);
    };

    // The Google Maps demo is loaded only when a real key is configured.
    document.head.appendChild(script);
  }
}
