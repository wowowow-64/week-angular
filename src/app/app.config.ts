import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// TODO: Replace this with your own Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD62bIF24thcg1nd7kRrvF36rRTqEt3MX8",
  authDomain: "week-ang.firebaseapp.com",
  projectId: "week-ang",
  storageBucket: "week-ang.firebasestorage.app",
  messagingSenderId: "847908080908",
  appId: "1:847908080908:web:873cb01cb714e508fb0d29",
  measurementId: "G-V857Q0T8P0"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
