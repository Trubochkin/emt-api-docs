---
# title: States
---
# States

![settings_page](/images/settings_page/states.png)

<req method="get" path="/settings/states" isArrow>

Получение параметров меню States. Ответ содержит список параметров всех доступных категорий состояний (categories) и причин (reasons). В теле ответа, в объекте `"reasons"`, поле `"parentCategoryId"` говорит о том, к какой категории привязана причина.

**Пример запроса:**

```json
GET {baseURL}/settings/states HTTP/1.1
Accept: application/json
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
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
  "reasons": [
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
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="post" path="/settings/states/categories/new" isArrow>

Данный запрос выполняет создание одной категории состояния.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
POST {baseURL}/settings/states/categories/new HTTP/1.1
Content-Type: application/json

{
  "name": "Work",
  "color": "#00C94E"
}
```

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="put" path="/settings/states/categories/{id}" isArrow>

Данный запрос выполняет обновление параметров одной категории состояния по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/settings/states/categories/1 HTTP/1.1
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
<req method="delete" path="/settings/states/categories/{id}" isArrow>

Данный запрос выполняет удаление одной категории состояния по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/settings/states/categories/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="post" path="/settings/states/reasons/new" isArrow>

Данный запрос выполняет создание одной причины (reason).
В теле запроса должен передаваться объект с параметрами. В поле `"parentCategoryId"` задаётся `id` выбранной категории состояния. Если категория не была выбрана, то поле `"parentCategoryId"` должно быть равно `null`.

**Пример запроса:**

```json
POST {baseURL}/settings/states/reasons/new HTTP/1.1
Content-Type: application/json

{
  "name": "Normal work",
  "parentCategoryId": 1
}
```

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="put" path="/settings/states/reasons/{id}" isArrow>

Данный запрос выполняет обновление параметров одной причины по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/settings/states/reasons/1 HTTP/1.1
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
<req method="delete" path="/settings/states/reasons/{id}" isArrow>

Данный запрос выполняет удаление одной причины по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/settings/states/reasons/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>