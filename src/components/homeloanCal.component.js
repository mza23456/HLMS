import React, { useState } from "react";

function DTICal() {
  const [receipts, setReceipts] = useState("");
  const [expenses, setExpenses] = useState("");
  const [contractPrice, setContractPrice] = useState("");
  const [DTI, setDTI] = useState("");

  const calculateDTI = () => {
    const receipts_total = parseFloat(receipts) - parseFloat(expenses);
    const DTI_value = receipts_total / contractPrice * 100
    setDTI(DTI_value);
  };
  return (
    <div>
        <input 
        type="number" 
        placeholder="Enter receipt" 
        value={receipts} 
        onChange={(e) => setReceipts(e.target.value)} 
        />
        <input 
        type="number" 
        placeholder="expenses" 
        value={expenses} 
        onChange={(e) => setExpenses(e.target.value)} 
        />
        <input 
        type="number" 
        placeholder="contract price" 
        value={contractPrice}
        onChange={(e) => setContractPrice(e.target.value)} 
        />
        <button onClick={calculateDTI}>Calculate</button>
        <input 
        type="number" 
        placeholder="" 
        value={DTI}
        />
    </div>
  )
}

export default DTICal;
