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
  "message": "Authentication successful!",
  "refresh_token": "eyJqdGkiOiJlOWNlYTVmZ",
  "access_token": "eyJhbGciOiJSUzI1NiJ9",
  "expires": 43199,
  "userId": "0001"
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>
