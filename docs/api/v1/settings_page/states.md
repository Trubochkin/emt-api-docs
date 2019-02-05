---
# title: States
---
# States

![settings_page](/images/settings_page/states.png)

<req method="get" path="/states" isArrow>

Получение параметров States. Ответ содержит список параметров всех доступных состояний и категорий. В теле ответа, в объекте `"states"`, поле `"parentCategoryId"` говорит о том, к какой категории привязано состояние. Если состояние не привязано к категории, то `"parentCategoryId": null`

**Пример запроса:**

```json
GET {baseURL}/states HTTP/1.1
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
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
      {
        "id": 3,
        "name": "Setup",
        "parentCategoryId": null
      },
      {
        "id": 3,
        "name": "Poor electrical connections",
        "parentCategoryId": 3
      }
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
      {
        "id": 3,
        "name": "Unplanned downtime",
        "color": "#FF4F4F"
      }
    ]
  }
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="post" path="/states/items/new" isArrow>

Данный запрос выполняет создание одного состояния.
В теле запроса должен передаваться объект с параметрами. В поле `"parentCategoryId"` задаётся `id` выбранной категории состояния. Если категория не была выбрана, то поле `"parentCategoryId"` должно быть равно `null`.

**Пример запроса:**

```json
POST {baseURL}/states/items/new HTTP/1.1
Content-Type: application/json

{
  "name": "Poor electrical connections",
  "parentCategoryId": 1
}
```

Тело ответа содержит дублирующий объект с добавлением поля `"id"`, по которому клиентское приложение может обращаться для изменения созданного ресурса.

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
Content-Type: application/json; charset=UTF-8

{
  "id": 5,
  "name": "Poor electrical connections",
  "parentCategoryId": 1
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="put" path="/states/items/{id}" isArrow>

Данный запрос выполняет обновление параметров одного состояния по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/states/items/1 HTTP/1.1
Content-Type: application/json

{
  "name": "Normal work",
  "parentCategoryId": 1
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="delete" path="/states/items/{id}" isArrow>

Данный запрос выполняет удаление одного состояния по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/states/items/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="post" path="/states/categories/new" isArrow>

Данный запрос выполняет создание одной категории состояния.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
POST {baseURL}/states/categories/new HTTP/1.1
Content-Type: application/json

{
  "name": "Unplaned downtime",
  "color": "#A0C94E"
}
```

Тело ответа содержит дублирующий объект с добавлением поля `"id"`, по которому клиентское приложение может обращаться для изменения созданного ресурса.

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
Content-Type: application/json; charset=UTF-8

{
  "id": 3,
  "name": "Unplaned downtime",
  "color": "#A0C94E"
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="put" path="/states/categories/{id}" isArrow>

Данный запрос выполняет обновление параметров одной категории состояния по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/states/categories/1 HTTP/1.1
Content-Type: application/json

{
  "name": "Work",
  "color": "#00C94E"
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="delete" path="/states/categories/{id}" isArrow>

Данный запрос выполняет удаление одной категории состояния по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/states/categories/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>