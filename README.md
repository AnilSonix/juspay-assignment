# JUSPAY Assignment - Anil Kumar Soni

This SPA uses

1. **shadcn** - for ui
2. **tailwind** - for styling
3. **tanstack-query** - for api calls and async data managment
4. **zod** - for validation
5. **constate** - for creating react contexts easily
6. **recharts** - for charts plotting
7. **lucide-icons** - for icons
8. **react-router** - for routing
9. **fakerjs** - for generating dummy data
10. **zustand** - for some global state mgmt

You may view live at [https://jp-poc.netlifya.app](https://jp-poc.netlify.app)

## To run locally , simply install and run dev server

Make sure you have **node** and **pnpm** installed

```
pnpm install
pnpm dev
```

## This is also a PWA ,so you can install on capable browsers

Click on **add to home screen** or i**nstall when browser prompts**

## Design decisions

### Folder structures

```
📂module
    📂feature
        📂components
        📂hooks
        📂utils
    📂pages

📂shared // for common project specific
    📂components
    📂hooks
    📂utils

📂components // for shadcn and related registry components

```

For example

```cmd
📂notications
    📂notifications-list
        📂components
            notifications-list.tsx // presentational component
            notifications-list-panel // fetches data and pass to notifications-list to render
            notifications-list-sheet.tsx // just render panel in sheet
        📂hooks
            use-notifications.ts  // tanstack-query to fetch api
        📂utils
            get-notifications.ts // actual api call with validation
    📂pages
        notification-page.tsx // a dedicated page to show all notification etc

```

Reason : one modules can have lots of pages
