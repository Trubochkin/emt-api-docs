---
# title: Processes
---
# Processes

![settings_page](/images/settings_page/processes.png)

<req method="get" path="/settings/processes" isArrow>

Получение параметров меню Processes. Ответ содержит список параметров всех доступных процессов

**Пример запроса:**

```json
GET {baseURL}/settings/processes HTTP/1.1
Accept: application/json
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

</req>

<!-- ********************************************************************************************************************* -->
<req method="put" path="/settings/processes" isArrow>

Данный запрос выполняет обновление параметров процессов.
В теле запроса должны передаются только те процессы, у которых были изменены параметры.

**Пример запроса:**

```json
PUT {baseURL}/settings/processes HTTP/1.1
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

</req>