---
# title: Users
---
# Users

![settings_page](/images/settings_page/users.png)

<req method="get" path="/settings/users" isArrow>

Получение параметров меню Users. Ответ содержит параметры всех пользователей.

**Пример запроса:**

```json
GET {baseURL}/settings/users HTTP/1.1
Accept: application/json
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "users": [
    {
      "userId": 1,
      "userName": "David Henry",
      "email": "david.henry@email.com",
      "role": "Super user"
    },
    {
      "userId": 2,
      "userName": "Lewis Young",
      "email": "lewis.young@email.com",
      "role": "Advanced user"
    },
  ]
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** 

-->
<req method="post" path="/settings/users/new" isArrow>

Данный запрос выполняет создание одного юзера.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
POST {baseURL}/settings/users/new HTTP/1.1
Content-Type: application/json

{
  "userName": "Lewis Young",
  "email": "lewis.young@email.com",
  "role": "Advanced user"
}
```

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- **********************************************************************************************

-->
<req method="put" path="/settings/users/{userId}" isArrow>

Данный запрос выполняет обновление параметров одного юзера по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/settings/users/1 HTTP/1.1
Content-Type: application/json

{
  "userName": "Lewis Young",
  "email": "lewis.young@email.com",
  "role": "Advanced user"
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
<req method="delete" path="/settings/users/{userId}" isArrow>

Данный запрос выполняет удаление одного юзера по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/settings/users/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>