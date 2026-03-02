import Products from "./components/Products";


// Topics of Phase 2:
// -----------------
// -> useState — primitives, objects, arrays 
// -> Event handling
// -> Form validation & Submission
// -> Lifting state up

// Hands-on:
// ---------
// 🛍️ Project — Task Manager App
// What You're Building : A fully interactive **Task Manager** where users can add, complete, and delete tasks — with proper form validation. No backend, no routing. Pure state management focus.


// Component Structure to Follow:
// ------------------------------
// App
// └── TaskManager          (Parent — owns tasks state)
//   ├── AddTaskForm   (Child — handles form + validation)
//   └── TaskList      (Child — receives tasks as prop)
//          └── TaskItem  (Child — single task card)


// Features to Build
// -----------------
// ✅ Add a new task via form (title + priority field)
// ✅ Validate form — title required, minimum 3 characters
// ✅ Show validation error messages under fields
// ✅ Clear form after successful submission
// ✅ Mark task as complete / incomplete
// ✅ Delete a task
// ✅ Show total tasks count and completed count


// What to Display on Each Card
// ----------------------------            
// ✅ Product image
// ✅ Product name
// ✅ Brand
// ✅ Description
// ✅ Price

function App() {
  return (
    <div className="bg-blue-500 min-h-screen p-8">
      <Products/>

    </div>
  );
}

export default App;