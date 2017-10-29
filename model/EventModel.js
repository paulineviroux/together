import Utils from '../src/Utils';

class EventModel {
    constructor(title, eventDate) {
        this.id = Utils.guid();
        this.title = title;
        this.eventDate = eventDate || new Date();
        this.createdAt = new Date();
        this.updatedAp = new Date();
    }
}

module.exports = EventModel;