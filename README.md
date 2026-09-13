# 🚀 DevStack

DevStack is a modern React-based web application where users can explore different web technologies and build their own technology stack by selecting the technologies they want to use.

## 🌐 Live Demo

🔗 **Live Website:** Add your live website link here

🔗 **GitHub Repository:** Add your GitHub repository link here

---

## 🛠️ Technologies Used

* ⚛️ React.js
* 📘 TypeScript
* 🎨 Tailwind CSS
* 📦 React Toastify
* ⚡ Vite
* 🗂️ JSON Data
* 🧩 React Hooks (`useState`, `useEffect`)

---

## ✨ Features

### 1. 🔍 Explore Technologies

Users can explore different technologies with information such as category, level, rating, description, and other details.

### 2. ➕ Build Your Stack

Users can select technologies and add them to their personal technology stack.

### 3. 🗑️ Manage Selected Technologies

Users can remove individual technologies or remove all selected technologies at once. Toast notifications are also shown when actions are performed.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**. It allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes UI code easier to read, write, and understand.

Example:

```jsx
<h1>Hello React</h1>
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component that can change over time.

### Simple example:

```text
Props → Parent → Child

State → Data managed inside a component
```

Props are generally read-only, while state can be updated.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component.

In this project, I used `useState` to store the technologies selected by the user.

Example:

```tsx
const [toslecte, settoslecte] = useState<DataType[]>([]);
```

When a user selects or removes a technology, this state is updated.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component.

I used `useEffect` to load the technology data from the JSON file when the component loads.

For example:

```tsx
useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => setSkillsData(data));
}, []);
```

The empty dependency array `[]` means the effect runs when the component loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed, so React can update the UI efficiently.

Example:

```tsx
{toslecte.map((selectedIcon) => (
  <SelectedCard
    key={selectedIcon.id}
    selectedIcon={selectedIcon}
  />
))}
```

Here, `selectedIcon.id` is used as the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used conditional rendering to show an empty-stack message when no technology is selected.

Example:

```tsx
if (toslecte.length === 0) {
  return (
    <p>Your stack is empty.</p>
  );
}
```

If there are no selected technologies, the empty stack message is displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child component using **props**.

Example:

```tsx
<SelectedCard
  selectedIcon={selectedIcon}
  toslecte={toslecte}
  settoslecte={settoslecte}
/>
```

Here, the parent sends data to `SelectedCard` through props.

A child can send something back to the parent by using a **function passed through props**.

For example, the parent can pass a state setter function:

```tsx
settoslecte={settoslecte}
```

Then the child can call that function to update the parent's state.

---

## 👨‍💻 Developer

**Siyam Rahman**

Built with ❤️ using React, TypeScript and Tailwind CSS.
