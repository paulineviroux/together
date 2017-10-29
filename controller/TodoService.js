// Import my DB 
import Realm from 'realm';
import TodoModel from '../model/TodoModel';
import EventModel from '../model/EventModel';

//Create object in the DB
// let repository = new Realm({ // suprrimer les properties inutile!!
//     schema: [{
//         name: 'Task',
//         primaryKey: 'id',
//         properties: {
//             id: {type: 'string', indexed: true},
//             title: 'string',
//             completed: 'bool',
//             createdAt: 'date',
//             updatedAt: 'date'
//         }
//     },
//     {
//         name: 'Item',
//         primaryKey: 'id',
//         properties: {
//             id: {type: 'string', indexed: true},
//             title: 'string',
//             completed: 'bool',
//             createdAt: 'date',
//             updatedAt: 'date'
//         }
//     },
//     {
//         name: 'Number',
//         primaryKey: 'id',
//         properties: {
//             id: {type: 'string', indexed: true},
//             title: 'string',
//             completed: 'bool',
//             createdAt: 'date',
//             updatedAt: 'date'
//         }
//     },
//     {
//         name: 'Event',
//         primaryKey: 'id',
//         properties: {
//             id: {type: 'string', indexed: true},
//             title: 'string',
//             completed: 'bool',
//             createdAt: 'date',
//             updatedAt: 'date'

//         }
//     }]
// });

const TaskSchema = {
  name: 'Task',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    title: 'string',
    completed: 'bool',
    createdAt: 'date',
    updatedAt: 'date'
  }
};
// un fichier qui permet de retrouver l'utilisateur
// un autre qui permet de le créer
const ItemSchema = {
  name: 'Item',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    title: 'string',
    completed: 'bool',
    createdAt: 'date',
    updatedAt: 'date'
  }
};

const NumberSchema = {
  name: 'Number',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    title: 'string',
    completed: 'bool',
    createdAt: 'date',
    updatedAt: 'date'
  }
};

const CalendarEventsSchema = {
    name: 'CalendarEvents',
    primaryKey: 'id',
    properties: {
        id: {type: 'string', indexed: true},
        title: 'string',
        eventDate: 'date',
        createdAt: 'date',
        updatedAt: 'date'
  }
}


// Initialize a Realm
let repository = new Realm({schema: [TaskSchema, ItemSchema, NumberSchema, CalendarEventsSchema]});

// var realm = new Realm({
//   schema: [EventSchema],
//   schemaVersion: 1,
//   migration: function(oldRealm, newRealm) {
//     // only apply this change if upgrading to schemaVersion 1
//     if (oldRealm.schemaVersion < 1) {
//       var oldObjects = oldRealm.objects('Event');
//       var newObjects = newRealm.objects('Event');

//       // loop through all objects and set the name property in the new schema
//       for (var i = 0; i < oldObjects.length; i++) {
//         newObjects[i].eventDate = oldObjecs[i].completed;
//       }
//     }
//   }
// });

// var eventDate = realm.objects('Event')[0].eventDate;

// let dbObjects = {
//     if () {}
// }


// Actions to do on my DB objects
let TodoService = {
    findAll: function(sortBy) {
        if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
        return repository.objects('Item').sorted(sortBy);
    }, 

    findAllTasks: function(sortBy) {
        if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
        return repository.objects('Task').sorted(sortBy);
    },

    findAllNumber: function(sortBy) {
        if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
        return repository.objects('Number').sorted(sortBy);
    },

    findAllEvent: function(sortBy) {
        if (!sortBy) sortBy = [['updatedAt', true]];
        return repository.objects('CalendarEvents').sorted(sortBy); //afficher seulement l'eenement du jour sélectionné
    },

    saveShopping: function(todo) {
        if (repository.objects('Item').filtered("title = '" + todo.title + "'").length) return; //shouldn't I put the return on the line above ?

        repository.write(() => {
            todo.updatedAt = new Date();
            repository.create('Item', todo);
        })
    },

    saveTasks: function(todo) {
        if (repository.objects('Task').filtered("title = '" + todo.title + "'").length) return; //shouldn't I put the return on the line above ?

        repository.write(() => {
            todo.updatedAt = new Date();
            repository.create('Task', todo);
        })
    },

    saveNumber: function(todo) {
        if (repository.objects('Number').filtered("title = '" + todo.title + "'").length) return; //shouldn't I put the return on the line above ?

        repository.write(() => {
            todo.updatedAt = new Date();
            repository.create('Number', todo);
        })
    },

    saveEvent: function(data) {
        if (repository.objects('CalendarEvents').filtered("title = '" + data.title + "'").length) return; 

        repository.write(() => {
            data.updatedAt = new Date();
            repository.create('CalendarEvents', data);
        })
    },

    update: function(todo, callback) {
        if (!callback) return;
        repository.write(() => {
            callback();
            todo.updatedAt = new Date()
        });
    } 
    // delete: function(todo) {
    //     repository.write( () => {
    //         repository.delete(todo)
    //     } )
    // }
};


module.exports = TodoService;