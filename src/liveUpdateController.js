const liveUpdateService = require('./liveUpdateService');

class LiveUpdateController {
    static subscribe(req, res) {
        const client = res.socket;
        liveUpdateService.subscribe(client);
        req.on('close', () => liveUpdateService.unsubscribe(client));
    }

    static notifyUpdate(data) {
        liveUpdateService.notify(data);
    }
}

module.exports = LiveUpdateController;