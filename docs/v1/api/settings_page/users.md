---
# title: Users
---
# Users

![settings_page](/images/settings_page/users.png)

<req method="get" path="/users" isArrow>

Получение параметров Users. Ответ содержит параметры всех пользователей.

**Пример запроса:**

```json
GET {baseURL}/users HTTP/1.1
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "users": [
    {
      "id": 1,
      "userName": "David Henry",
      "email": "david.henry@email.com",
      "role": "Super user"
    },
    {
      "id": 2,
      "userName": "Lewis Young",
      "email": "lewis.young@email.com",
      "role": "Advanced user"
    },
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

<!-- ********************************************************************************************** 

-->
<req method="post" path="/users/new" isArrow>

Данный запрос выполняет создание одного юзера.
В теле запроса должен передаваться объект с параметрами.
Поле `"id"` должно формироваться на клиентской стороне. Для этого нужно из существующего списка пользователей взять `"id"` с самым высоким номером и, прибавив к нему единицу, вставить в передаваемый объект.

**Пример запроса:**

```json
POST {baseURL}/users/new HTTP/1.1
Content-Type: application/json

{
  "id": 3,
  "userName": "Stive Colins",
  "email": "stive.solins@email.com",
  "role": "User"
}
```

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
```

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1001: "Incorrect data"
1002: "Invalid email format"
1003: "User with this email already exists"
1004: "Resource with this id already exists"
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>

<!-- **********************************************************************************************

-->
<req method="put" path="/users/{id}" isArrow>

Данный запрос выполняет обновление параметров одного юзера по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/users/1 HTTP/1.1
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

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1001: "Incorrect data"
1002: "Invalid email format"
1003: "User with this email already exists"
1005: "Resource with this id is not exists"
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>

<!-- ********************************************************************************************** 

-->
<req method="delete" path="/users/{id}" isArrow>

Данный запрос выполняет удаление одного юзера по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/users/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1005: "Resource with this id is not exists"
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>