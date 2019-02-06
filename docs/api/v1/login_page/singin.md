---
# title: Авторизация
---
# Авторизация пользователя

<req method="post" path="/auth/signin" isArrow>

**Пример запроса:**

```json
POST /auth/signin HTTP/1.1
Content-Type: application/json

{
  "email": "user@mail.com",
  "password": "userPassw0rd"
}
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "userId": 1,
  "message": "Authentication successful!",
  "refresh_token": "eyJqdGkiOiJlOWNlYTVmZ",
  "access_token": "eyJhbGciOiJSUzI1NiJ9",
  "expires": 43199,
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

```json
2001: "Invalid login or password"
1006: "Error access to database"
6001: "Too many requests. Try again later"
```

</req>
