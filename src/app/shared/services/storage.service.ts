import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setLocalItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
    return null;
  }
  removeLocalItem(key: string) {
    localStorage.removeItem(key);
  }
  clearLocalStorage() {
    localStorage.clear();
  }
  //#endregion Local Storage
  //#region Session Storage
  setSessionItem<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  getSessionItem<T>(key: string): T | null {
    const data: string | null = sessionStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
    return null;
  }
  removeSessionItem(key: string) {
    sessionStorage.removeItem(key);
  }
  clearSessionStorage() {
    sessionStorage.clear();
  }
}
