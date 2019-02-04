---
# title: Units
---
# Units

![settings_page](/images/settings_page/units.png)

<req method="get" path="/settings/units" isArrow>

Получение параметров меню Units. Ответ содержит список параметров всех доступных юнитов.

**Пример запроса:**

```json
GET {baseURL}/settings/units HTTP/1.1
Accept: application/json
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "units": [
    {
      "id": 1,
      "name": "Unit 1",
      "comment": "comment text for Unit 1"
    },
    {
      "id": 2,
      "name": "Unit 2",
      "comment": "comment text for Unit 2"
    },
  ]
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************************************* -->
<req method="put" path="/settings/units" isArrow>

Данный запрос выполняет обновление параметров юнитов.
В теле запроса должны передаются только те юниты, у которых были изменены параметры.

**Пример запроса:**

```json
PUT {baseURL}/settings/units HTTP/1.1
Content-Type: application/json

{
  "units": [
    {
      "id": 1,
      "name": "Unit 1",
      "comment": "comment text for Unit 1"
    },
    {
      "id": 2,
      "name": "Unit 2",
      "comment": "comment text for Unit 2"
    }
  ]
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>