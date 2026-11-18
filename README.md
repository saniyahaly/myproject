
# Olive & Ember — Restaurant Menu Management Website

Olive & Ember is a responsive, database-powered restaurant
website built using Next.js, React, TypeScript, Tailwind CSS,
and NeonDB PostgreSQL.

The website displays restaurant menu items dynamically from
the database. Users can add, edit, and delete dishes through
a simple interface. All changes are saved permanently in
NeonDB and remain available after refreshing the page.

This project was developed as part of a classroom assignment
to demonstrate database integration, React state management,
API route handlers, and SQL operations.

## Live Website

https://oliveamber.vercel.app

## Features

- Dynamic restaurant menu loaded from NeonDB
- Add new menu items with name, price, and description
- Edit existing menu items
- Delete menu items with a confirmation dialog
- Persistent database storage after page refresh
- Responsive user interface using Tailwind CSS
- Loading, success, and error messages
- REST-style API routes for CRUD operations

## Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js App Router | Application framework |
| React | User interface and state management |
| TypeScript | Type-safe application code |
| Tailwind CSS | Responsive website styling |
| NeonDB PostgreSQL | Database storage |
| Neon Serverless Driver | Database connection |
| Vercel | Website deployment |

## Project Structure

```text
oliveamber/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── menu/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── lib/
│       └── db.ts
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

Note: `.env.local` is a private local file and must not be
committed to GitHub.

## Database Setup

The project uses NeonDB PostgreSQL to store restaurant menu
items.

### Step 1: Create a NeonDB Project

1. Visit https://console.neon.tech
2. Sign in or create a free account.
3. Create a new PostgreSQL project.
4. Open the SQL Editor.
5. Run the SQL code below.

### Step 2: Create the Menu Table

```sql
CREATE TABLE IF NOT EXISTS menu_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    description TEXT NOT NULL
);
```

### Database Fields

| Field | Data Type | Description |
|-------|-----------|-------------|
| id | SERIAL | Unique menu item identifier |
| name | VARCHAR(150) | Dish name |
| price | NUMERIC(10,2) | Dish price |
| description | TEXT | Dish description |

### Step 3: Insert Sample Data

```sql
INSERT INTO menu_items (name, price, description)
VALUES
('Classic Beef Burger', 1499,
 'Juicy beef patty with cheddar cheese and special sauce.'),
('Chicken Alfredo Pasta', 1699,
 'Creamy pasta with grilled chicken and parmesan.'),
('Margherita Pizza', 1799,
 'Fresh mozzarella, basil and tomato sauce.'),
('Grilled Chicken Steak', 2299,
 'Grilled chicken served with vegetables and mashed potatoes.'),
('Chocolate Lava Cake', 899,
 'Warm chocolate cake with a rich molten center.');
```

To verify the records:

```sql
SELECT * FROM menu_items;
```

## Installation and Setup

### Requirements

- Node.js and npm
- A NeonDB PostgreSQL database
- VS Code or another code editor

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

Replace the placeholder with your GitHub repository URL.

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a file named `.env.local` in the root directory.

Add:

```env
DATABASE_URL="YOUR_NEON_DATABASE_CONNECTION_STRING"
```

Replace the placeholder with your actual NeonDB connection
string.

Never commit `.env.local` to GitHub.

### Step 4: Run the Development Server

```bash
npm run dev
```

Open the application at:

http://localhost:3000

## API Routes

The application uses Next.js API route handlers in:

`src/app/api/menu/route.ts`

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /api/menu | Fetch all menu items |
| POST | /api/menu | Add a menu item |
| PUT | /api/menu | Update a menu item |
| DELETE | /api/menu | Delete a menu item |

### GET — Fetch Menu Items

Retrieves all menu items from NeonDB and displays them
on the restaurant homepage.

### POST — Add a Menu Item

Accepts a dish name, price, and description, then
inserts the new record into NeonDB.

### PUT — Edit a Menu Item

Updates an existing menu item using its unique ID.

### DELETE — Remove a Menu Item

Deletes an existing menu item using its unique ID.

## CRUD Functionality

| Operation | Feature | Database Query |
|-----------|---------|----------------|
| Create | Add a new dish | INSERT |
| Read | View menu items | SELECT |
| Update | Edit an existing dish | UPDATE |
| Delete | Remove a dish | DELETE |

React `useState` manages form values, menu records,
loading states, and user feedback.

React `useEffect` loads menu records when the homepage
is opened.

The `fetch()` API communicates with the Next.js backend.

## Screenshots

Screenshots demonstrating the working application
are stored in the `screenshots` directory.

### 1. Restaurant Homepage

![Restaurant Homepage](screenshots/homepage.png)

### 2. Dynamic Restaurant Menu

![Restaurant Menu](screenshots/menu.png)

### 3. Add Menu Item

![Add Menu Item](screenshots/add-item.png)

### 4. Edit Menu Item

![Edit Menu Item](screenshots/edit-item.png)

### 5. Delete Menu Item

![Delete Menu Item](screenshots/delete-item.png)

## Testing

The application should pass the following tests:

1. Start the Next.js development server.
2. Open the restaurant homepage.
3. Confirm that menu items load from NeonDB.
4. Add a new menu item using the form.
5. Refresh the page and confirm the item remains.
6. Edit the new menu item.
7. Refresh the page and verify the updated values.
8. Delete the menu item.
9. Refresh again and confirm it remains deleted.
10. Verify the changes in the NeonDB SQL Editor.

## Deployment

The application is deployed using Vercel.

To deploy:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add `DATABASE_URL` under Project Settings
   > Environment Variables.
4. Deploy or redeploy the application.
5. Open the live website and test the menu operations.

## Security Note

Database credentials are stored in environment variables
and are accessed only through server-side API routes.

This is a classroom demonstration project.
Authentication is not implemented, so the public API
allows visitors to modify menu items.

A production restaurant website would require
authentication and access controls for management actions.

## Assignment Requirements

- [x] Next.js App Router
- [x] React useState and useEffect
- [x] Forms and fetch()
- [x] API route handlers
- [x] NeonDB PostgreSQL
- [x] Dynamic menu items
- [x] Add new menu items
- [x] Delete existing menu items
- [x] Edit existing menu items
- [x] Database persistence after refresh
- [x] Tailwind CSS styling
- [ ] Add screenshots to the repository
- [ ] Verify live deployment functionality

## Conclusion

Olive & Ember demonstrates how a Next.js application
can interact with a PostgreSQL database through API
route handlers.

The project provides a responsive restaurant interface
with complete CRUD functionality and persistent
database storage.
