import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import usePointsStore from "../stores/usePointsStore";
import Confetti from "../utils/Confetti";
import { FcLock, FcUnlock } from "react-icons/fc";

function TodoPage() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [chores, setChores] = useState([
    { id: 1, text: "Diska", done: false },
    { id: 2, text: "Ta ut soporna", done: false },
    { id: 3, text: "Laga mat", done: false },
  ]);

  const toggleChore = (id, e) => {
    const clickedChore = chores.find((chore) => chore.id === id);
    if (!clickedChore) return;

    if (!clickedChore.done) {
      addPoints("Poäng", 5);
      Confetti(e.currentTarget);
    }

    setChores((prev) => prev.map((chore) => (chore.id === id ? { ...chore, done: !chore.done } : chore)));
  };

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const addPoints = usePointsStore((state) => state.addPoints);

  const toggleTodo = (id, e) => {
    const clickedTodo = todos.find((todo) => todo.id === id);
    if (!clickedTodo) return;

    if (!clickedTodo.done) {
      addPoints("Poäng", 5);
      Confetti(e.currentTarget);
    }

    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  return (
    <section className="todo-page">
      <Header />
      <h1 className="todo-page__title">Uppdrag</h1>

      <div className="todo-page__content">
        {/* Vänster kolumn */}
        <div className="todo-page__left">
          <h2 className="text-lg font-semibold">Stående sysslor</h2>
          <ul className="todo-page__list">
            {chores.map((chore) => (
              <li key={chore.id} className={`todo-page__item ${chore.done ? "todo-done" : ""}`}>
                {chore.text}
                <button onClick={(e) => toggleChore(chore.id, e)} className="todo-page__toggle-button">
                  {chore.done ? (
                    <FcLock className="lock-icon lock-icon--locked icon-pop" />
                  ) : (
                    <FcUnlock className="lock-icon lock-icon--unlocked icon-pop" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Höger kolumn */}
        <div className="todo-page__right">
          <div className="todo-page__input-wrapper">
            <input
              type="text"
              value={input}
              placeholder="Lägg till ett uppdrag..."
              onChange={(e) => setInput(e.target.value)}
              className="todo-page__input"
            />
            <button onClick={addTodo} className="todo-page__button">
              Lägg till
            </button>
          </div>

          <ul className="todo-page__list">
            {todos.map((todo) => (
              <li key={todo.id} className={`todo-page__item ${todo.done ? "todo-done" : ""}`}>
                {todo.text}
                <button onClick={(e) => toggleTodo(todo.id, e)} className="todo-page__toggle-button">
                  {todo.done ? (
                    <FcLock className="lock-icon lock-icon--locked icon-pop" />
                  ) : (
                    <FcUnlock className="lock-icon lock-icon--unlocked icon-pop" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default TodoPage;
