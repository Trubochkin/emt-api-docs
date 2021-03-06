---
# title: Password
---
# Password

![settings_page](/images/settings_page/password.png)

<req method="put" path="/account/{userId}/password" isArrow>

Данный запрос выполняет изменение пароля для текущего авторизованного пользователя. Параметр `userId`, который входит в URL запроса, должен соответствовать id пользователя, который сервер вернул клиенту после аутентификации (см. [Авторизация пользователя](/v1/api/login_page/singin.html)).
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/account/{userId}/password HTTP/1.1
Content-Type: application/json

{
  "currentPassword": "current_passw0rd",
  "newPassword": "new_passw0rd"
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

---
DELETE /api/v1/account/password    - To reset the current password (in case user forget the password)

POST   /api/v1/account/password    - To create new password (if user has reset the password)

PUT    /api/v1/account/{userId}/password    - To update the password (if user knows is old password and new password)

</req>