# Тестовое задание Aviasales ([frontend](https://aviasales.recruitee.com/o/frontend-developer-js-coffeescript-react%C2%A0redux--aviasalesru))

Основной frontend проект нашей команды — это страница выдачи билетов со множеством фильтров, настроек и, собственно, билетов.
Проект написан на React, поэтому тестовое задание приближено к ежедневным задачам.

Перед тобой упрощенный макет нашего проекта — список билетов, фильтры и сортировка. Также у нас есть небольшой сервер для тестового задания, который работает схоже с нашим основным backend движком и реализует технику long polling для передачи пачек билетов. Тебе необходимо реализовать клиент, который будет получать случайно сгенерированные билеты от сервера и отрисует интерфейс согласно макету в Figma. Достаточно будет отрендерить 5 первых билетов соотвествующих выбранным фильрам и сортировки.

## Условия

- Используй React
- Используй TS или JS
- Работоспособность в актуальной версии Google Chrome
- Остальное на твоё усмотрение

## Документация по работе с сервером: [Здесь](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales_frontend/server.md)

## Макет (Figma)
https://github.com/KosyanMedia/test-tasks/raw/f0f60244b045928746188a86ba4f76ddb5515111/aviasales_frontend/Aviasales%20Test%20Task.fig

Figma 

![](search_preview.png?raw=true)

Удачи! Если будут какие-то вопросы, пиши – добавим уточнения в репу.

P.S.: Картинки авиакомпаний можешь брать с нашего CDN: `//pics.avs.io/99/36/{IATA_CODE_HERE}.png`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.