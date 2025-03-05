# Destination Imagination Scoring Manager Program

## Introduction

Using the vue admin template from [this github repo](https://github.com/vue-admin/vue-admin).

This program uses [supabase](https://supabase.com) as the free database manager, and [github pages](https://immanuel-aristotle.github.io/di_scoring_program/) to publish the website.

It's a program made for [IB](https://ibo.org) Computer Science Internal Assessment.

## PNPM actions

### Install dependencies

```sh
pnpm i
```

### Host

```sh
pnpm dev
```

### Build and host the static files

```sh
pnpm build
cd ./dist
pnpm dev .
```

## Develop log

2025-02-26T13:27:10 turning off RLS makes it able to retrieve data.

### data return

<!-- You need to return { data: Contest, error: null } from getContests instead of { Contest, error: null } because you want to maintain the consistency of naming (data in both places). -->

## TODO list

1. Sign up page
2. Edit contest
3. [ ] Role of different users
4. [x] Select the given contest to enter the grade
