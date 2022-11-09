import { EventBus } from './EventBus';

export class LocalStorageService {
  constructor() {
    this.eventBus = new EventBus();
    this.handleStorage = this.handleStorage.bind(this);
    window.addEventListener('storage', this.handleStorage);
  }

  handleStorage(event) {
    console.log(event);
    this.eventBus.notify(event.key, event.newValue);
  }

  getItem(key) {
    return window.localStorage.getItem(key);
  }

  setItem(key, value) {
    const oldValue = this.getItem(key, value);
    if (oldValue === value) return;

    window.localStorage.setItem(key, value);
    this.eventBus.notify(key, value);
  }

  subscribe(key, cb) {
    this.eventBus.subscribe(key, cb);
    return () => this.eventBus.unsubscribe(key, cb);
  }
}

export const localStorageService = new LocalStorageService();
