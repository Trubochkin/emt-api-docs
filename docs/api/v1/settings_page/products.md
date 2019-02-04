---
# title: Products
---
# Products

![settings_page](/images/settings_page/products.png)

<req method="get" path="/settings/products" isArrow>

Получение параметров меню Products. Ответ содержит список параметров всех доступных продуктов и категорий. В теле ответа, в параметрах продуктов, поле `"parentCategoryId"` говорит о том, к какой категории привязан продукт.

**Пример запроса:**

```json
GET {baseURL}/settings/products HTTP/1.1
Accept: application/json
```

**Пример ответа (STATUS 200):**

```json
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8

{
  "categories": [
    {
      "id": 1,
      "name": "Bake"
    },
    {
      "id": 2,
      "name": "Diary"
    },
  ],
  "products": [
    {
      "id": 1,
      "name": "Bread",
      "parentCategoryId": 1
    },
    {
      "id": 3,
      "name": "Milk",
      "parentCategoryId": 2
    },
  ]
}
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="post" path="/settings/products/categories/new" isArrow>

Данный запрос выполняет создание одной категории продуктов.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
POST {baseURL}/settings/products/categories/new HTTP/1.1
Content-Type: application/json

{
  "name": "Bake"
}
```

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="put" path="/settings/products/categories/{id}" isArrow>

Данный запрос выполняет обновление параметров одной категории по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/settings/products/categories/1 HTTP/1.1
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
<req method="delete" path="/settings/products/categories/{id}" isArrow>

Данный запрос выполняет удаление одной категории по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/settings/products/categories/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="post" path="/settings/products/products/new" isArrow>

Данный запрос выполняет создание одного продукта.
В теле запроса должен передаваться объект с параметрами. В поле `"parentCategoryId"` задаётся `id` выбранной категории. Если категория не была выбрана, то поле `"parentCategoryId"` должно быть равно `null`.

**Пример запроса:**

```json
POST {baseURL}/settings/products/products/new HTTP/1.1
Content-Type: application/json

{
  "name": "Bread",
  "parentCategoryId": 1
}
```

**Пример ответа (STATUS 201):**

```json
HTTP/1.1 201 Created
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>

<!-- ********************************************************************************************** -->
<req method="put" path="/settings/products/products/{id}" isArrow>

Данный запрос выполняет обновление параметров одного продукта по заданному id.
В теле запроса должен передаваться объект с параметрами.

**Пример запроса:**

```json
PUT {baseURL}/settings/products/products/1 HTTP/1.1
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
<req method="delete" path="/settings/products/products/{id}" isArrow>

Данный запрос выполняет удаление одного продукта по заданному id.

**Пример запроса:**

```json
DELETE {baseURL}/settings/products/products/1 HTTP/1.1
```

**Пример ответа (STATUS 204):**

```json
HTTP/1.1 204 No Content
```

**Возможные ответы ошибок (см. [коды ошибок](/api/v1/errors.html)):**

</req>