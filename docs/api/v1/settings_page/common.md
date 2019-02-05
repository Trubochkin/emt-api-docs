---
# title: All Settings
---
# All Settings

<req method="get" path="/allsettings" isArrow>

Получение всех параметров всех меню настроек одним запросом. В теле ответа передаётся массив объектов, где каждый объект относится к отдельному пункту меню. Более детальное описание по каждому меню находится в следующих разделах.

**Пример запроса:**

```json
GET {baseURL}/allsettings HTTP/1.1
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

[
  {
    "menuName": "Factories",
    "factories": [
      {
        "id": 1,
        "name": "Factory 1",
        "comment": ""
      },
    ]
  },
  {
    "menuName": "Processes",
    "processes": [
      {
        "id": 1,
        "name": "Process 1",
        "comment": "comment text for Process 1"
      },
    ]
  },
  {
    "menuName": "Units",
    "units": [
      {
        "id": 1,
        "name": "Unit 1",
        "comment": "comment text for Unit 1"
      },
    ]
  },
  {
    "menuName": "Products",
    "categories": [
      {
        "id": 1,
        "name": "Bake"
      },
      {
        "id": 2,
        "name": "Diary"
      },
    ],
    "products": [
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
    ]
  },
  {
    "menuName": "States",
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
    ],
    "states": [
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
    ]
  },
  {
    "menuName": "Users",
    "users": [
      {
        "id": 1,
        "userName": "David Henry",
        "email": "david.henry@email.com",
        "role": "Super user"
      },
    ]
  },
  {
    "menuName": "Alerting",
    "channels": [
      {
        "id": 1,
        "name": "All workers",
        "type": "email",
        "isForAllAlerts": false,
        "emails": ["alex@company.com", "kos@gmail.com"]
      }
    ]
  }
]
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>