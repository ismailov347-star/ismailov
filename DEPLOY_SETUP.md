# Настройка автоматического деплоя

## Что было настроено

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Автоматический деплой при push в main ветку
   - Preview деплой для pull requests
   - Сборка и тестирование проекта

2. **Vercel конфигурация** (`vercel.json`)
   - Включен автоматический деплой с GitHub
   - Настройки для Next.js проекта

3. **Vercel ignore** (`.vercelignore`)
   - Исключение ненужных файлов из деплоя

## Настройка секретов в GitHub

Для работы автоматического деплоя нужно добавить секреты в GitHub репозиторий:

### Шаг 1: Получить токены Vercel

1. Зайдите в [Vercel Dashboard](https://vercel.com/dashboard)
2. Перейдите в Settings → Tokens
3. Создайте новый токен и скопируйте его

### Шаг 2: Получить ID проекта и организации

1. В терминале выполните: `vercel link`
2. Найдите файл `.vercel/project.json`
3. Скопируйте `projectId` и `orgId`

### Шаг 3: Добавить секреты в GitHub

1. Откройте ваш GitHub репозиторий
2. Перейдите в Settings → Secrets and variables → Actions
3. Добавьте следующие секреты:
   - `VERCEL_TOKEN` - токен из шага 1
   - `PROJECT_ID` - projectId из шага 2
   - `ORG_ID` - orgId из шага 2

## Как это работает

- При каждом push в `main` ветку автоматически запускается деплой в production
- При создании pull request создается preview деплой
- Vercel также может делать автоматический деплой напрямую с GitHub (если настроено в панели Vercel)

## Альтернативный способ

Если GitHub Actions не нужен, можно использовать только интеграцию Vercel с GitHub:

1. Зайдите в [Vercel Dashboard](https://vercel.com/dashboard)
2. Импортируйте проект из GitHub
3. Vercel автоматически настроит деплой при каждом push

## Проверка

После настройки:
1. Сделайте commit и push в main ветку
2. Проверьте вкладку Actions в GitHub репозитории
3. Убедитесь что деплой прошел успешно