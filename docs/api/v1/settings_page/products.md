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
        "parentCategoryId": 1
      },
      {
        "id": 3,
        "name": "Milk",
        "parentCategoryId": 2
      },
      {
        "id": 4,
        "name": "Baguette",
        "parentCategoryId": null
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
      },
      {
        "id": 3,
        "name": "Beer"
      }
    ]
  }
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="post" path="/products/items/new" isArrow>

Данный запрос выполняет создание одного продукта.
В теле запроса должен передаваться объект с параметрами. В поле `"parentCategoryId"` задаётся `id` выбранной категории. Если категория не была выбрана, то поле `"parentCategoryId"` должно быть равно `null`.

**Пример запроса:**

```json
POST {baseURL}/products/items/new HTTP/1.1
Content-Type: application/json

{
  "name": "Bun",
  "parentCategoryId": 1
}
```

Тело ответа содержит дублирующий объект с добавлением поля `"id"`, по которому клиентское приложение может обращаться для изменения созданного ресурса.

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
Content-Type: application/json; charset=UTF-8

{
  "id": 4,
  "name": "Bun",
  "parentCategoryId": 1
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

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

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

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

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="post" path="/products/categories/new" isArrow>

Данный запрос выполняет создание одной категории продуктов.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
POST {baseURL}/products/categories/new HTTP/1.1
Content-Type: application/json

{
  "name": "Beer"
}
```

Тело ответа содержит дублирующий объект с добавлением поля `"id"`, по которому клиентское приложение может обращаться для изменения созданного ресурса.

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
Content-Type: application/json; charset=UTF-8

{
  "id": 2,
  "name": "Beer"
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

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

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

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

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>