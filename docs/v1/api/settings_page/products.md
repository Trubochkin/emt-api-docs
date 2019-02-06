---
# title: Products
---
# Products

![settings_page](/images/settings_page/products.png)

<req method="get" path="/products" isArrow>

Получение параметров Products. Ответ содержит список параметров всех доступных продуктов и категорий. В теле ответа, в параметрах продуктов, поле `"parentCategoryId"` говорит о том, к какой категории привязан продукт. Если продукт не привязан к категории, то `"parentCategoryId": null`

**Пример запроса:**

```json
GET {baseURL}/products HTTP/1.1
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "products": {
    "items": [
      {
        "id": 1,
        "name": "Bread",
        "parentCategoryId": 1
      },
      {
        "id": 2,
        "name": "Bun",
        "parentCategoryId": null
      },
      {
        "id": 3,
        "name": "Milk",
        "parentCategoryId": 2
      }
    ],
    "categories": [
      {
        "id": 1,
        "name": "Bake"
      },
      {
        "id": 2,
        "name": "Diary"
      }
    ]
  }
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

<!-- ********************************************************************************************** -->
<req method="post" path="/products/items/new" isArrow>

Данный запрос выполняет создание одного продукта. 
В теле запроса должен передаваться объект с параметрами. 
Поле `"id"` должно формироваться на клиентской стороне. Для этого нужно из существующего списка продуктов взять `"id"` с самым высоким номером и, прибавив к нему единицу, вставить в передаваемый объект. Если список пустой, то в поле `"id"` записывается `1`. В поле `"parentCategoryId"` задаётся `id` выбранной категории. Если категория не была выбрана, то поле `"parentCategoryId"` должно быть равно `null`.

**Пример запроса:**

```json
POST {baseURL}/products/items/new HTTP/1.1
Content-Type: application/json

{
  "id": 4,
  "name": "Baguette",
  "parentCategoryId": null
}
```

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
```

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1001: "Incorrect data"
1004: "Resource with this id already exists"
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>

<!-- ********************************************************************************************** -->
<req method="put" path="/products/items/{id}" isArrow>

Данный запрос выполняет обновление параметров одного продукта по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/products/items/1 HTTP/1.1
Content-Type: application/json

{
  "name": "Bread",
  "parentCategoryId": 1
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

<!-- ********************************************************************************************** -->
<req method="delete" path="/products/items/{id}" isArrow>

Данный запрос выполняет удаление одного продукта по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/products/items/1 HTTP/1.1
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

<!-- ********************************************************************************************** -->
<req method="post" path="/products/categories/new" isArrow>

Данный запрос выполняет создание одной категории продуктов. В теле запроса должен передаваться объект с параметрами.
Поле `"id"` должно формироваться на клиентской стороне. Для этого нужно из существующего списка категорий продуктов взять `"id"` с самым высоким номером и, прибавив к нему единицу, вставить в передаваемый объект. Если список пустой, то в поле `"id"` записывается `1`.

**Пример запроса:**

```json
POST {baseURL}/products/categories/new HTTP/1.1
Content-Type: application/json

{
  "id": 3,
  "name": "Beer"
}
```

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
```

**Возможные ответы ошибок (см. [коды ошибок](/v1/api/errors.html)):**

```json
1001: "Incorrect data"
1004: "Resource with this id already exists"
1006: "Error access to database"
2002: "Access token expired"
2004: "No access token"
3001: "Access to this resource is denied"
6001: "Too many requests. Try again later"
```

</req>

<!-- ********************************************************************************************** -->
<req method="put" path="/products/categories/{id}" isArrow>

Данный запрос выполняет обновление параметров одной категории по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/products/categories/1 HTTP/1.1
Content-Type: application/json

{
  "name": "Bake"
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

<!-- ********************************************************************************************** -->
<req method="delete" path="/products/categories/{id}" isArrow>

Данный запрос выполняет удаление одной категории по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/products/categories/1 HTTP/1.1
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