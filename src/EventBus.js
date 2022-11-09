export class EventBus {
  constructor() {
    this.topics = {};
  }

  notify(key, value) {
    this.topics[key]?.forEach((cb) => {
      cb(value);
    });
  }

  subscribe(key, cb) {
    if (!this.topics[key]) {
      this.topics[key] = [];
    }
    this.topics[key].push(cb);
  }

  unsubscribe(key, cb) {
    this.topics = this.topics[key]?.filter((_cb) => _cb !== cb);
  }
}
