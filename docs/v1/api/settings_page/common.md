---
# title: All Settings
---
# All Settings

<req method="get" path="/allsettings" isArrow>

Получение всех параметров всех меню настроек одним запросом. Тело ответа содержит объект с параметрами всех настроек. Более детальное описание по каждому меню находится в следующих разделах.

**Пример запроса:**

```json
GET {baseURL}/allsettings HTTP/1.1
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8


{
  "factories": [
    {
      "id": 1,
      "name": "Factory 1",
      "comment": ""
    },
  ],

  "processes": [
    {
      "id": 1,
      "name": "Process 1",
      "comment": "comment text for Process 1"
    },
  ],

  "units": [
    {
      "id": 1,
      "name": "Unit 1",
      "comment": "comment text for Unit 1"
    },
  ],

  "products": {
    "items": [
      {
        "id": 1,
        "name": "Bread",
        "parentCategoryId": 1
      },
      {
        "id": 3,
        "name": "Milk",
        "parentCategoryId": 2
      },
    ],
    "categories": [
      {
        "id": 1,
        "name": "Bake"
      },
      {
        "id": 2,
        "name": "Diary"
      },
    ]
  },

  "states": {
    "items": [
      {
        "id": 1,
        "name": "Normal work",
        "parentCategoryId": 1
      },
      {
        "id": 2,
        "name": "Cleaning",
        "parentCategoryId": 2
      },
    ],
    "categories": [
      {
        "id": 1,
        "name": "Work",
        "color": "#00C94E"
      },
      {
        "id": 2,
        "name": "Planed downtime",
        "color": "#DDC65F"
      },
    ]
  },

  "users": [
    {
      "id": 1,
      "userName": "David Henry",
      "email": "david.henry@email.com",
      "role": "Super user"
    },
  ],

  "alertingchannels": [
    {
      "id": 1,
      "name": "All workers",
      "type": "email",
      "isForAllAlerts": false,
      "emails": ["alex@company.com", "kos@gmail.com"]
    }
  ]
}
```

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>