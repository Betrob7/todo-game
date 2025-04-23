import React, { useState } from "react";
import Header from "../components/Header";
import usePointsStore from "../stores/usePointsStore";
import useHistoryStore from "../stores/useHistoryStore";

const rewards = [
  { id: 1, name: "Massage", cost: 20, desc: "30 minuter massage från din partner 💆‍♀️" },
  { id: 2, name: "Egentid", cost: 15, desc: "1 timme egen tid – du väljer vad! 🧘‍♂️" },
  { id: 3, name: "Sovmorgon", cost: 10, desc: "Sov ut medan den andra fixar morgonen 😴" },
  { id: 4, name: "Golfrunda", cost: 25, desc: "En eftermiddag på banan 🏌️" },
];

function ShopPage() {
  const points = usePointsStore((state) => state.points);
  const spendPoints = usePointsStore((state) => state.spendPoints);

  const history = useHistoryStore((state) => state.history);
  const addHistory = useHistoryStore((state) => state.addHistory);

  const removeHistoryItem = useHistoryStore((state) => state.removeHistoryItem);

  const [modalItem, setModalItem] = useState(null);

  const handlePurchase = (item) => {
    if (points["Poäng"] >= item.cost) {
      spendPoints("Poäng", item.cost);
      addHistory({
        name: item.name,
        time: new Date().toISOString(),
      });
      setModalItem(item);
    } else {
      alert("Inte tillräckligt med poäng!");
    }
  };

  return (
    <section className="shop-page">
      <Header />
      <h1 className="shop-page__title">Shop</h1>

      <ul className="shop-page__card-list">
        {rewards.map((item) => (
          <li key={item.id} className="shop-page__card">
            <h3>{item.name}</h3>
            <p className="shop-page__desc">{item.desc}</p>
            <div className="shop-page__footer">
              <span>{item.cost}g</span>
              <button onClick={() => handlePurchase(item)}>Köp</button>
            </div>
          </li>
        ))}
      </ul>

      {/* MODAL */}
      {modalItem && (
        <div className="shop-modal-backdrop" onClick={() => setModalItem(null)}>
          <div className="shop-modal" onClick={(e) => e.stopPropagation()}>
            <h2>✅ Belöning köpt!</h2>
            <p>
              Du har köpt: <strong>{modalItem.name}</strong>
            </p>
            <button onClick={() => setModalItem(null)}>Stäng</button>
          </div>
        </div>
      )}

      {/* KÖPHISTORIK */}
      <h2 style={{ marginTop: "3rem" }}>📜 Köphistorik</h2>
      {history.map((entry, i) => (
        <li key={i} className="shop-history__item">
          <span>
            {entry.name} – <span className="shop-history__time">{new Date(entry.time).toLocaleString("sv-SE")}</span>
          </span>
          <button onClick={() => removeHistoryItem(i)}>🗑️</button>
        </li>
      ))}
    </section>
  );
}

export default ShopPage;
