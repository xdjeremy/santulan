migrate((db) => {
  const collection = new Collection({
    "id": "dq9xyfnd25xs365",
    "created": "2023-04-19 07:23:33.822Z",
    "updated": "2023-04-19 07:23:33.822Z",
    "name": "tickets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sog8ezjb",
        "name": "subject",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2100osi7",
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
      }
    ],
    "indexes": [],
    "listRule": "user = @request.auth.id || @request.auth.role = \"admin\"",
    "viewRule": "user = @request.auth.id || @request.auth.role = \"admin\"",
    "createRule": "@request.data.user = @request.auth.id",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dq9xyfnd25xs365");

  return dao.deleteCollection(collection);
})
