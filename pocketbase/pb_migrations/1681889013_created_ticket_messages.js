migrate((db) => {
  const collection = new Collection({
    "id": "u5qfd4yyx7fhpex",
    "created": "2023-04-19 07:23:33.822Z",
    "updated": "2023-04-19 07:23:33.822Z",
    "name": "ticket_messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tw47txju",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "deewu8wb",
        "name": "ticket_id",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "dq9xyfnd25xs365",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "darfcdru",
        "name": "message",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 500,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.role = \"admin\" || @request.auth.id = ticket_id.user",
    "viewRule": null,
    "createRule": "@request.auth.id = @request.data.user || @request.auth.role = \"admin\"",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u5qfd4yyx7fhpex");

  return dao.deleteCollection(collection);
})
