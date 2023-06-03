# FINAL PROYECT: - MYMANGALIST - ANA GUARDADO FLORES
# Introduction
In this proyect I am going to make a web about mangas. 

#  This are the endpoints that I am going to use in this proyect ( API Endpoints )
## AUTH ROUTES
Base routes URL /auth

| HTTP METHOD | URI PATH        | Description          |
|-------------|-----------------|----------------------|
| GET         | `/`               | Index                |
| GET         | `/auth/signup `   | Sign up              |
| POST        | `/auth/signup`    | Sign up              |
| GET         | `/auth/login`     | Log in               |
| POST        | `/auth/login`     | Log in               |
| GET         | `/auth/logout`    | Log out              |
| GET         | `/auth/verify`    | Verify Auth Token    |

---------------------------------------------------

## LIST ROUTES
Base routes URL /list

| HTTP METHOD | URI PATH           | Description          |
|-------------|--------------------|----------------------|
| GET         | `/list/list `        | List all lists        |
| GET         | `/list/create  `     | New list render      |
| POST        | `/list/create`       | New list handler     |
| GET         | `/list/:id `        | List details         |
| GET         | `/list/:id/edit`    | Edit list render     |
| POST        |` /list/:id/edit `   | Edit list handler    |
| POST        | `/list/:id/delete`  | Delete list          |
| GET         | `/api/list  `        | List all lists (API) |
| POST        | `/api/list/:id `    | List details (API)   |

---------------------------------------------------
## CLIENT ROUTES
Base routes URL /list

| URL             | Description          | PROTECTED |
|-----------------|----------------------|-----------|
|` / `              | Index Page           |           |
|` /list `          | Manga list page      |           |
|` /details/:id`   | Manga details page   |           |
| `/login `         | Log in page          |           |
| `/signup `        | Sign up page         |           |
| `/list-create `   | New list page        |     ✓     |
| `/profile `       | User profile page    |     ✓     |
| `* `              | 404 page             |           |
