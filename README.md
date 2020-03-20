# Stellar-Test-Project

## URL 
stellarCodeTest-env.eba-mzijeggc.us-east-1.elasticbeanstalk.com

## Create User

`POST /users`

### Headers

`{‘content-type’: ‘application/json’}`

### Request Body

```json
{
  "user": {
    "name": "name",
    "email": "email@email.com",
    "password": "password"
  },
  "role": 1
}
```

### Response Body

```json
{
    "apitoken": "959d45ae-3cd0-493d-8583-4492c3a83dd6"
}
```

## List Users

`GET /users`

Use this call to gather API tokens to test different calls.

### Headers

`{‘content-type’: ‘application/json’}`

### Response Body

```json
[
    {
        "id": 1,
        "status": true,
        "name": "bigBoss",
        "email": "bigboss@email.com",
        "password": "86770d59e3a0319d54f0e2412ac71d109625e3a4bff18ae491e4042b88ed8711ae856e8097acb376b9d4200d09a7b4e57054fc031b7244add0e2357eccaf5d09",
        "apiToken": "7e6a2ce8-037e-4923-b754-0e08dedd4f68",
        "createdAt": "2020-03-20T20:54:26.000Z",
        "updatedAt": "2020-03-20T20:54:26.000Z",
        "roles": [
            {
                "id": 1,
                "name": "bigBoss",
                "user_roles": {
                    "createdAt": "2020-03-20T20:54:26.000Z",
                    "updatedAt": "2020-03-20T20:54:26.000Z",
                    "user_id": 1,
                    "role_id": 1
                },
                "permissions": [
                    {
                        "id": 1,
                        "name": "maintenance_records_add",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:01.000Z",
                            "updatedAt": "2020-03-20T20:53:01.000Z",
                            "permission_id": 1,
                            "role_id": 1
                        }
                    },
                    {
                        "id": 2,
                        "name": "maintenance_records_update",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:01.000Z",
                            "updatedAt": "2020-03-20T20:53:01.000Z",
                            "permission_id": 2,
                            "role_id": 1
                        }
                    },
                    {
                        "id": 3,
                        "name": "maintenance_records_delete",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:01.000Z",
                            "updatedAt": "2020-03-20T20:53:01.000Z",
                            "permission_id": 3,
                            "role_id": 1
                        }
                    },
                    {
                        "id": 4,
                        "name": "maintenance_records_view",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:01.000Z",
                            "updatedAt": "2020-03-20T20:53:01.000Z",
                            "permission_id": 4,
                            "role_id": 1
                        }
                    },
                    {
                        "id": 5,
                        "name": "maintenance_records_list",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:01.000Z",
                            "updatedAt": "2020-03-20T20:53:01.000Z",
                            "permission_id": 5,
                            "role_id": 1
                        }
                    },
                    {
                        "id": 6,
                        "name": "maintenance_records_search",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:01.000Z",
                            "updatedAt": "2020-03-20T20:53:01.000Z",
                            "permission_id": 6,
                            "role_id": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "status": true,
        "name": "adder",
        "email": "adder@email.com",
        "password": "86770d59e3a0319d54f0e2412ac71d109625e3a4bff18ae491e4042b88ed8711ae856e8097acb376b9d4200d09a7b4e57054fc031b7244add0e2357eccaf5d09",
        "apiToken": "fb56fc93-0303-456b-92d1-c3675c69a52c",
        "createdAt": "2020-03-20T20:54:39.000Z",
        "updatedAt": "2020-03-20T20:54:39.000Z",
        "roles": [
            {
                "id": 2,
                "name": "adder",
                "user_roles": {
                    "createdAt": "2020-03-20T20:54:39.000Z",
                    "updatedAt": "2020-03-20T20:54:39.000Z",
                    "user_id": 2,
                    "role_id": 2
                },
                "permissions": [
                    {
                        "id": 1,
                        "name": "maintenance_records_add",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:20.000Z",
                            "updatedAt": "2020-03-20T20:53:20.000Z",
                            "permission_id": 1,
                            "role_id": 2
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "status": true,
        "name": "updater",
        "email": "updater@email.com",
        "password": "86770d59e3a0319d54f0e2412ac71d109625e3a4bff18ae491e4042b88ed8711ae856e8097acb376b9d4200d09a7b4e57054fc031b7244add0e2357eccaf5d09",
        "apiToken": "5a1de19b-2068-42ae-8918-ea4ebe3d3a76",
        "createdAt": "2020-03-20T20:54:56.000Z",
        "updatedAt": "2020-03-20T20:54:56.000Z",
        "roles": [
            {
                "id": 3,
                "name": "updater",
                "user_roles": {
                    "createdAt": "2020-03-20T20:54:56.000Z",
                    "updatedAt": "2020-03-20T20:54:56.000Z",
                    "user_id": 3,
                    "role_id": 3
                },
                "permissions": [
                    {
                        "id": 2,
                        "name": "maintenance_records_update",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:32.000Z",
                            "updatedAt": "2020-03-20T20:53:32.000Z",
                            "permission_id": 2,
                            "role_id": 3
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "status": true,
        "name": "deleter",
        "email": "deleter@email.com",
        "password": "86770d59e3a0319d54f0e2412ac71d109625e3a4bff18ae491e4042b88ed8711ae856e8097acb376b9d4200d09a7b4e57054fc031b7244add0e2357eccaf5d09",
        "apiToken": "8c2b7b76-0d2d-4657-ae6c-5d80e9885776",
        "createdAt": "2020-03-20T20:55:11.000Z",
        "updatedAt": "2020-03-20T20:55:11.000Z",
        "roles": [
            {
                "id": 4,
                "name": "deleter",
                "user_roles": {
                    "createdAt": "2020-03-20T20:55:11.000Z",
                    "updatedAt": "2020-03-20T20:55:11.000Z",
                    "user_id": 4,
                    "role_id": 4
                },
                "permissions": [
                    {
                        "id": 3,
                        "name": "maintenance_records_delete",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:41.000Z",
                            "updatedAt": "2020-03-20T20:53:41.000Z",
                            "permission_id": 3,
                            "role_id": 4
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "status": true,
        "name": "viewer",
        "email": "viewer@email.com",
        "password": "86770d59e3a0319d54f0e2412ac71d109625e3a4bff18ae491e4042b88ed8711ae856e8097acb376b9d4200d09a7b4e57054fc031b7244add0e2357eccaf5d09",
        "apiToken": "315621c3-409c-4e46-acb5-e628e38bfe54",
        "createdAt": "2020-03-20T20:55:26.000Z",
        "updatedAt": "2020-03-20T20:55:26.000Z",
        "roles": [
            {
                "id": 5,
                "name": "viewer",
                "user_roles": {
                    "createdAt": "2020-03-20T20:55:26.000Z",
                    "updatedAt": "2020-03-20T20:55:26.000Z",
                    "user_id": 5,
                    "role_id": 5
                },
                "permissions": [
                    {
                        "id": 4,
                        "name": "maintenance_records_view",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:50.000Z",
                            "updatedAt": "2020-03-20T20:53:50.000Z",
                            "permission_id": 4,
                            "role_id": 5
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "status": true,
        "name": "lister",
        "email": "lister@email.com",
        "password": "86770d59e3a0319d54f0e2412ac71d109625e3a4bff18ae491e4042b88ed8711ae856e8097acb376b9d4200d09a7b4e57054fc031b7244add0e2357eccaf5d09",
        "apiToken": "44fa5909-9b45-4ee1-91fb-2a86433a1e50",
        "createdAt": "2020-03-20T20:55:40.000Z",
        "updatedAt": "2020-03-20T20:55:40.000Z",
        "roles": [
            {
                "id": 6,
                "name": "lister",
                "user_roles": {
                    "createdAt": "2020-03-20T20:55:40.000Z",
                    "updatedAt": "2020-03-20T20:55:40.000Z",
                    "user_id": 6,
                    "role_id": 6
                },
                "permissions": [
                    {
                        "id": 5,
                        "name": "maintenance_records_list",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:53:57.000Z",
                            "updatedAt": "2020-03-20T20:53:57.000Z",
                            "permission_id": 5,
                            "role_id": 6
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "status": true,
        "name": "searcher",
        "email": "searcher@email.com",
        "password": "86770d59e3a0319d54f0e2412ac71d109625e3a4bff18ae491e4042b88ed8711ae856e8097acb376b9d4200d09a7b4e57054fc031b7244add0e2357eccaf5d09",
        "apiToken": "959d45ae-3cd0-493d-8583-4492c3a83dd6",
        "createdAt": "2020-03-20T20:55:53.000Z",
        "updatedAt": "2020-03-20T20:55:53.000Z",
        "roles": [
            {
                "id": 7,
                "name": "searcher",
                "user_roles": {
                    "createdAt": "2020-03-20T20:55:53.000Z",
                    "updatedAt": "2020-03-20T20:55:53.000Z",
                    "user_id": 7,
                    "role_id": 7
                },
                "permissions": [
                    {
                        "id": 6,
                        "name": "maintenance_records_search",
                        "role_permissions": {
                            "createdAt": "2020-03-20T20:54:05.000Z",
                            "updatedAt": "2020-03-20T20:54:05.000Z",
                            "permission_id": 6,
                            "role_id": 7
                        }
                    }
                ]
            }
        ]
    }
]
```

## Create Maintenance Record

`POST /maintenanceRecords`

### Headers

```
{
    ‘content-type’: ‘application/json’,
    'apitoken': '[APITOKEN]'
}
```

### Request Body

```json
{
	"type": 3,
	"dueAt": "2020-03-20T20:57:01.619Z",
	"systemEngineHours": 11.45,
	"actualEngineHours": 22.15,
	"engineHoursNextDue": 75.20
}
```

### Response Body

```json
{
    "id": 3,
    "type": 3,
    "dueAt": "2020-03-20T20:57:01.619Z",
    "systemEngineHours": 11.45,
    "actualEngineHours": 22.15,
    "engineHoursNextDue": 75.2,
    "createdBy": 1,
    "updatedAt": "2020-03-20T20:58:52.000Z",
    "createdAt": "2020-03-20T20:58:52.000Z"
}
```

## Get Maintenance Record By ID

`GET /maintenanceRecords/:id`

### Headers

```
{
    ‘content-type’: ‘application/json’,
    'apitoken': '[APITOKEN]'
}
```

### Response Body

```json
{
    "id": 1,
    "completedOn": null,
    "type": 1,
    "customType": null,
    "dueAt": "2020-03-20T19:15:48.000Z",
    "systemEngineHours": 3.3,
    "actualEngineHours": 3.3,
    "engineHoursNextDue": 3.3,
    "createdBy": 1,
    "updatedBy": null,
    "createdAt": "2020-03-20T19:34:55.000Z",
    "updatedAt": "2020-03-20T19:34:55.000Z",
    "maintenanceTypes": [
        {
            "id": 1,
            "name": "Oil Change",
            "position": 1,
            "maintenance_record_types": {
                "createdAt": "2020-03-20T19:34:55.000Z",
                "updatedAt": "2020-03-20T19:34:55.000Z",
                "maintenance_record_id": 1,
                "maintenance_type_id": 1
            }
        }
    ],
    "maintenanceRecordPictures": [],
    "maintenanceRecordNotes": [],
    "units": [
        {
            "id": 2,
            "status": true,
            "name": "Some Other Unit",
            "engineHours": 2.6,
            "position": 1,
            "createdAt": "2020-03-20T19:37:28.000Z",
            "updatedAt": "2020-03-20T19:37:28.000Z",
            "maintenanceRecordId": 1
        },
        {
            "id": 1,
            "status": true,
            "name": "Another Unit",
            "engineHours": 2.55,
            "position": 2,
            "createdAt": "2020-03-20T19:35:47.000Z",
            "updatedAt": "2020-03-20T19:35:47.000Z",
            "maintenanceRecordId": 1
        },
        {
            "id": 3,
            "status": true,
            "name": "Yet Another Unit",
            "engineHours": 3.6,
            "position": 3,
            "createdAt": "2020-03-20T19:39:08.000Z",
            "updatedAt": "2020-03-20T19:39:08.000Z",
            "maintenanceRecordId": 1
        },
        {
            "id": 4,
            "status": true,
            "name": "Yet Another Nother Unit",
            "engineHours": 3.6,
            "position": 4,
            "createdAt": "2020-03-20T20:11:30.000Z",
            "updatedAt": "2020-03-20T20:11:30.000Z",
            "maintenanceRecordId": 1
        }
    ]
}
```

## List Maintenance Record

`GET /maintenanceRecords`

### Headers

```
{
    ‘content-type’: ‘application/json’,
    'apitoken': '[APITOKEN]'
}
```

### Response Body

```json
[
    {
        "id": 1,
        "completedOn": null,
        "type": 1,
        "customType": null,
        "dueAt": "2020-03-20T19:15:48.000Z",
        "systemEngineHours": 3.3,
        "actualEngineHours": 3.3,
        "engineHoursNextDue": 3.3,
        "createdBy": 1,
        "updatedBy": null,
        "createdAt": "2020-03-20T20:56:48.000Z",
        "updatedAt": "2020-03-20T20:56:48.000Z",
        "maintenanceTypes": [
            {
                "id": 1,
                "name": "Oil Change",
                "position": 1,
                "maintenance_record_types": {
                    "createdAt": "2020-03-20T20:56:48.000Z",
                    "updatedAt": "2020-03-20T20:56:48.000Z",
                    "maintenance_record_id": 1,
                    "maintenance_type_id": 1
                }
            }
        ],
        "maintenanceRecordPictures": [
            {
                "id": 1,
                "url": "something.com",
                "caption": "this is a picture"
            }
        ],
        "maintenanceRecordNotes": [
            {
                "id": 1,
                "note": "this is a note"
            }
        ],
        "units": [
            {
                "id": 1,
                "status": true,
                "name": "United",
                "engineHours": 3.6,
                "position": 1,
                "createdAt": "2020-03-20T21:00:08.000Z",
                "updatedAt": "2020-03-20T21:00:08.000Z",
                "maintenanceRecordId": 1
            },
            {
                "id": 2,
                "status": true,
                "name": "Unity",
                "engineHours": 7.3,
                "position": 2,
                "createdAt": "2020-03-20T21:00:26.000Z",
                "updatedAt": "2020-03-20T21:00:26.000Z",
                "maintenanceRecordId": 1
            }
        ]
    },
    {
        "id": 3,
        "completedOn": "2020-03-20T21:04:12.000Z",
        "type": 3,
        "customType": "Apologizing to Customer",
        "dueAt": "2020-03-20T20:57:01.000Z",
        "systemEngineHours": 11.45,
        "actualEngineHours": 22.15,
        "engineHoursNextDue": 75.2,
        "createdBy": 1,
        "updatedBy": 1,
        "createdAt": "2020-03-20T20:58:52.000Z",
        "updatedAt": "2020-03-20T21:06:57.000Z",
        "maintenanceTypes": [
            {
                "id": 3,
                "name": "Custom",
                "position": 2,
                "maintenance_record_types": {
                    "createdAt": "2020-03-20T20:58:52.000Z",
                    "updatedAt": "2020-03-20T20:58:52.000Z",
                    "maintenance_record_id": 3,
                    "maintenance_type_id": 3
                }
            }
        ],
        "maintenanceRecordPictures": [],
        "maintenanceRecordNotes": [
            {
                "id": 2,
                "note": "nothing unusual here"
            }
        ],
        "units": []
    },
    {
        "id": 2,
        "completedOn": null,
        "type": 2,
        "customType": null,
        "dueAt": "2020-03-20T20:57:01.000Z",
        "systemEngineHours": 5.45,
        "actualEngineHours": 17.15,
        "engineHoursNextDue": 9.3,
        "createdBy": 1,
        "updatedBy": null,
        "createdAt": "2020-03-20T20:57:39.000Z",
        "updatedAt": "2020-03-20T20:57:39.000Z",
        "maintenanceTypes": [
            {
                "id": 2,
                "name": "Scheduled",
                "position": 2,
                "maintenance_record_types": {
                    "createdAt": "2020-03-20T20:57:39.000Z",
                    "updatedAt": "2020-03-20T20:57:39.000Z",
                    "maintenance_record_id": 2,
                    "maintenance_type_id": 2
                }
            }
        ],
        "maintenanceRecordPictures": [
            {
                "id": 2,
                "url": "url.com",
                "caption": "here is something to look at"
            }
        ],
        "maintenanceRecordNotes": [],
        "units": [
            {
                "id": 4,
                "status": true,
                "name": "Untie",
                "engineHours": 18.5,
                "position": 1,
                "createdAt": "2020-03-20T21:01:12.000Z",
                "updatedAt": "2020-03-20T21:01:12.000Z",
                "maintenanceRecordId": 2
            },
            {
                "id": 5,
                "status": true,
                "name": "Untidy",
                "engineHours": 14.1,
                "position": 2,
                "createdAt": "2020-03-20T21:01:25.000Z",
                "updatedAt": "2020-03-20T21:01:25.000Z",
                "maintenanceRecordId": 2
            }
        ]
    }
]
```

## Search Maintenance Record

`GET /maintenanceRecords/search`

### Headers

```
{
    ‘content-type’: ‘application/json’,
    'apitoken': '[APITOKEN]'
}
```

### Request Body

```json
{
	"id": 1
}
```

Can be any searchable field in Maintenance Record.

### Response Body

```json
[
    {
        "id": 1,
        "completedOn": null,
        "type": 1,
        "customType": null,
        "dueAt": "2020-03-20T19:15:48.000Z",
        "systemEngineHours": 3.3,
        "actualEngineHours": 3.3,
        "engineHoursNextDue": 3.3,
        "createdBy": 1,
        "updatedBy": null,
        "createdAt": "2020-03-20T20:56:48.000Z",
        "updatedAt": "2020-03-20T20:56:48.000Z",
        "maintenanceTypes": [
            {
                "id": 1,
                "name": "Oil Change",
                "position": 1,
                "maintenance_record_types": {
                    "createdAt": "2020-03-20T20:56:48.000Z",
                    "updatedAt": "2020-03-20T20:56:48.000Z",
                    "maintenance_record_id": 1,
                    "maintenance_type_id": 1
                }
            }
        ],
        "maintenanceRecordPictures": [
            {
                "id": 1,
                "url": "something.com",
                "caption": "this is a picture"
            }
        ],
        "maintenanceRecordNotes": [
            {
                "id": 1,
                "note": "this is a note"
            }
        ],
        "units": [
            {
                "id": 1,
                "status": true,
                "name": "United",
                "engineHours": 3.6,
                "position": 1,
                "createdAt": "2020-03-20T21:00:08.000Z",
                "updatedAt": "2020-03-20T21:00:08.000Z",
                "maintenanceRecordId": 1
            },
            {
                "id": 2,
                "status": true,
                "name": "Unity",
                "engineHours": 7.3,
                "position": 2,
                "createdAt": "2020-03-20T21:00:26.000Z",
                "updatedAt": "2020-03-20T21:00:26.000Z",
                "maintenanceRecordId": 1
            }
        ]
    }
]
```

## Update Maintenance Record

`PUT /maintenanceRecords`

### Headers

```
{
    ‘content-type’: ‘application/json’,
    'apitoken': '[APITOKEN]'
}
```

### Request Body

```json
{
	"completedOn": "2020-03-20T21:04:12.074Z"
}
```

Can be any updatable field in Maintenance Record.

### Response Body
HTTP Status 204

## Delete Maintenance Record

`DELETE /maintenanceRecords/:id`

### Headers

```
{
    ‘content-type’: ‘application/json’,
    'apitoken': '[APITOKEN]'
}
```

### Response Body
HTTP Status 204
