import Utils from '../src/Utils';

class TodoModel {
    constructor(title, completed) {
        this.id = Utils.guid();
        this.title = title;
        this.completed = completed || false;
        this.createdAt = new Date();
        this.updatedAp = new Date();
    }
}

module.exports = TodoModel;