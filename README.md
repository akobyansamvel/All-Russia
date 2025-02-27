# Начальный гайд по работе со всем этим

Для начала вам нужен доступ, получить его можно у меня *@Xelacis*

Далее вы жмете на "Code" -> "HTTPS" -> Копируете ссылку и вставляете в консоль VScode (или другое приложение для работы с кодом) 

Команда для клонирования репозитрия
```
git clone {ссылка скопированная ранее}
```

Далее нажимаете "Файл" и открываете скачанный файл

После открытия вам нужно создать свою ветку **ЭТО ОЧЕНЬ ВАЖНО!**
```
git branch {название ветки}
```
Используйте адекватные названия, которые подходят по смыслу, либо же свое имя

Далее вам нужно перейти на эту ветку
```
git checkout {название ветки}
```
Далее прописываем 
```
npm install
```

А для запуска всего этого
```
npm run dev
```

Не забывайте, что у вас все хранится локально и во избежание конфликтов или работы со старым кодом(если видите, что в github был обновлен какой-то файл)

**Примечание:** *Данную команду прописываем исключительно после сохранения изменений(фиксации и Commit)*

```
git pull
```
Добавьте файлы, которые хотите загрузить на GitHub
```
git add .
```
Создайте коммит с описанием изменений
```
git commit -m "Ваше сообщение коммита"
```
Загрузите изменения
```
git push -u origin main
```
ЕСЛИ
Если вы впервые используете Git, возможно, потребуется настроить имя пользователя и email:
```
git config --global user.name "Ваше Имя"
git config --global user.email "ваш.email@example.com"
```


Если вы хотите обновить свою ветку с учетом изменений из main
Скачать последнее изменение 
```
git fetch origin
```
Объединить изменения из main в вашу ветку
```     
git merge origin/main 
```


