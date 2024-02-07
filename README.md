# online-store-fullstack

Страницы:

- Главная - /
- Авторизация - /login
- Регистрация - /register
- Избранное - /favoirites/:id
- Корзина - /basket/:id
- Страница для добавления товара - /product
- Карточка товара - /product/:id
- Страница для изменения товара - /product/:id/edit
- ЛК

## Сущности:

Таблицы БД:
пользователи - users: id / login / password / role_id / avatarUrl / registered_at
роли - roles: id / name
товары - products: id / image / name / price / quantity
категории - categories: id / name
отзывы - comments: id / user_id / product_id / content / published_at
избранное - favorites: id / user_id
корзины - baskets: id / user_id

---

Схема для Redux Store:
user: id / login / roleId / avatarUrl / favorites: массив product / basket: массив product
product: id / imageUrl / name / categoryId / price / quantity / favorite(bool) / comments: массив comment: id / userId / content / publishedAt
products: массив product

---

Обязательно реализовать в проекте:
1.Поиск товара по его названию;
2.Категории товаров;
3.Сортировка товаров (по стоимости);
4.Отдельная страница товара;
5.Корзина:
Итоговая стоимость;
Возможность удаления товара из корзины;
Возможность изменения количества товаров;
6.Админ-панель с возможностью добавления товаров на сайт (форма добавления / редактирования товара; таблица всех товаров);
7.Страница регистрации и входа;

## Содержание:

Front:

- Вывести минимум 1 список элементов от сервера через GET-запрос.
- Добавить Loader при любом ожидании пользователя.
- React Router минимум на 3 страницы.
- Создать страницу Карточка товара.
- Вынести базовые компоненты, которые используются много раз(input)
- Реализовать минимум 2 формы для отправки данных на сервер.
- По возможности вынести логику в отдельные пользовательские хуки.
- Реализовать защищенную Админ-панель для добавления товара.
- Реализовать Редактирование товара.
- Реализовать Удаление товара.
- Использовать Redux для хранения объекта текущего пользователя.
  Back:
- Настроить Express.js
- Обработка GET-запросов.
- Обработка POST-запросов.
- Обработка PUT/PATCH-запросов.
- Обработка DELETE-запросов.
- Создание моделей Mongoose для сущностей.
- Вход и регистрация с использованием JWT.
- Использование middleware для проверки токена.
