---
# title: Alerting
---
# Alerting

![settings_page](/images/settings_page/alerting.png)

<req method="get" path="/alertingchannels" isArrow>

Получение параметров Alerting. Ответ содержит список параметров всех каналов оповещений.

**Пример запроса:**

```json
GET {baseURL}/alertingchannels HTTP/1.1
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "channels": [
    {
      "id": 1,
      "name": "All workers",
      "type": "email",
      "isForAllAlerts": false,
      "emails": ["alex@company.com", "kos@gmail.com"]
    },
  ]
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** 

-->
<req method="post" path="/alertingchannels/new" isArrow>

Данный запрос выполняет создание одного канала оповещений.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
POST {baseURL}/alertingchannels/new HTTP/1.1
Content-Type: application/json

{
  "name": "All workers",
  "type": "email",
  "isForAllAlerts": false,
  "emails": ["alex@company.com", "kos@gmail.com"]
}
```

Тело ответа содержит дублирующий объект с добавлением поля `"id"`, по которому клиентское приложение может обращаться для изменения созданного ресурса.

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
Content-Type: application/json; charset=UTF-8

{
  "id": 2,
  "name": "Other channel",
  "type": "email",
  "isForAllAlerts": false,
  "emails": ["user1@company.com", "user2@company.com"]
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- **********************************************************************************************

-->
<req method="put" path="/alertingchannels/{id}" isArrow>

Данный запрос выполняет обновление параметров одного канала уведомлений по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/alertingchannels/1 HTTP/1.1
Content-Type: application/json

{
  "name": "All workers",
  "type": "email",
  "isForAllAlerts": false,
  "emails": ["alex@company.com", "kos@gmail.com"]
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** 

-->
<req method="delete" path="/alertingchannels/{id}" isArrow>

Данный запрос выполняет удаление одного канала оповещений по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/alertingchannels/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** 

-->
<req method="post" path="/alertingchannels/channeltest" isArrow>

Запрашивает сервер выполнить тестовое оповещение согласно заданным параметрам. При этом сервер не создаёт канал оповещения в БД.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
POST {baseURL}/alertingchannels/channeltest HTTP/1.1
Content-Type: application/json

{
  "name": "All workers",
  "type": "email",
  "isForAllAlerts": false,
  "emails": ["alex@company.com", "kos@email.com"]
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>