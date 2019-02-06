---
# title: Processes
---
# Processes

![settings_page](/images/settings_page/processes.png)

<req method="get" path="/processes" isArrow>

Получение параметров Processes. Ответ содержит список параметров всех доступных процессов

**Пример запроса:**

```json
GET {baseURL}/processes HTTP/1.1
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "processes": [
    {
      "id": 1,
      "name": "Process 1",
      "comment": "comment text for Process 1"
    },
    {
      "id": 2,
      "name": "Process 2",
      "comment": "comment text for Process 2"
    },
  ]
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

```json
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>

<!-- ********************************************************************************************************************* -->
<req method="put" path="/processes" isArrow>

Данный запрос выполняет обновление параметров всех процессов.
В теле запроса должны передаваться параметры процессов.

**Пример запроса:**

```json
PUT {baseURL}/processes HTTP/1.1
Content-Type: application/json

{
  "processes": [
    {
      "id": 1,
      "name": "Process 1",
      "comment": "comment text for Process 1"
    },
    {
      "id": 2,
      "name": "Process 2",
      "comment": "comment text for Process 2"
    }
  ]
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

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
<req method="put" path="/processes/{id}" isArrow>

Данный запрос выполняет обновление параметров одного процесса по заданному id.
В теле запроса должны передаваться параметры изменяемого процесса.

**Пример запроса:**

```json
PUT {baseURL}/processes/1 HTTP/1.1
Content-Type: application/json

{
  "name": "Process 1",
  "comment": "comment text for Process 1"
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

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