# vue made administrator for Destination Imagination Contests

Using the vue admin template from [github](https://github.com/vue-admin/vue-admin)

## PNPM actions

### Install dependencies

```sh
pnpm i
```

### Launch dev

```sh
pnpm dev
```

## Develop log

2025-02-26T13:27:10 turning off RLS makes it able to retrieve data.

### data return

You need to return { data: Contest, error: null } from getContests instead of { Contest, error: null } because you want to maintain the consistency of naming (data in both places).

## TODO list

1. Sign up page
2. Edit contest
3. Role of different users
4. Select the given contest to enter the grade
