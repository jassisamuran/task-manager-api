class LiveUpdateService {
    constructor() {
        this.subscribers = [];
    }

    subscribe(client) {
        this.subscribers.push(client);
    }

    unsubscribe(client) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== client);
    }

    notify(data) {
        this.subscribers.forEach(subscriber => subscriber.send(JSON.stringify(data)));
    }
}

module.exports = new LiveUpdateService();