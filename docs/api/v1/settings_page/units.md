---
# title: Units
---
# Units

![settings_page](/images/settings_page/units.png)

<req method="get" path="/units" isArrow>

Получение параметров Units. Ответ содержит список параметров всех доступных юнитов.

**Пример запроса:**

```json
GET {baseURL}/units HTTP/1.1
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
<req method="put" path="/units" isArrow>

Данный запрос выполняет обновление параметров всех юнитов.
В теле запроса должны передаваться параметры юнитов.

**Пример запроса:**

```json
PUT {baseURL}/units HTTP/1.1
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

<!-- ********************************************************************************************************************* -->
<req method="put" path="/units/{id}" isArrow>

Данный запрос выполняет обновление параметров одного юнита по заданному id.
В теле запроса должны передаваться параметры изменяемого юнита.

**Пример запроса:**

```json
PUT {baseURL}/units/1 HTTP/1.1
Content-Type: application/json

{
  "name": "Unit 1",
  "comment": "comment text for Unit 1"
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>