---
# title: Factories
---
# Factories

![settings_page](/images/settings_page/factories.png)

<req method="get" path="/settings/factories" isArrow>

Получение параметров меню Factories. Ответ содержит список параметров всех доступных фабрик

**Пример запроса:**

```json
GET {baseURL}/settings/factories HTTP/1.1
Accept: application/json
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
    {
      "id": 2,
      "name": "Factory 2",
      "comment": ""
    }
  ]
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************************************* -->
<req method="put" path="/settings/factories" isArrow>

Данный запрос выполняет обновление параметров фабрик.
В теле запроса должны передаются только те фабрики, у которых были изменены параметры.

**Пример запроса:**

```json
PUT {baseURL}/settings/factories HTTP/1.1
Content-Type: application/json

{
  "factories": [
    {
      "id": 1,
      "name": "Factory 1",
      "comment": ""
    },
    {
      "id": 2,
      "name": "Factory 2",
      "comment": ""
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