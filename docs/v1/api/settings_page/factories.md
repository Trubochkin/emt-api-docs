---
# title: Factories
---
# Factories

![settings_page](/images/settings_page/factories.png)

<req method="get" path="/factories" isArrow>

Получение параметров Factories. Ответ содержит список параметров всех доступных фабрик

**Пример запроса:**

```json
GET {baseURL}/factories HTTP/1.1
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

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>

<!-- ********************************************************************************************************************* -->
<req method="put" path="/factories" isArrow>

Данный запрос выполняет обновление параметров всех фабрик.
В теле запроса должны передаваться параметры фабрик.

**Пример запроса:**

```json
PUT {baseURL}/factories HTTP/1.1
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

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1001: "Incorrect data"
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>

<!-- ********************************************************************************************************************* -->
<req method="put" path="/factories/{id}" isArrow>

Данный запрос выполняет обновление параметров одной фабрики по заданному id.
В теле запроса должны передаваться параметры изменяемой фабрики.

**Пример запроса:**

```json
PUT {baseURL}/factories/1 HTTP/1.1
Content-Type: application/json

{
  "name": "Factory 1",
  "comment": ""
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1001: "Incorrect data"
1005: "Resource with this id is not exists"
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>