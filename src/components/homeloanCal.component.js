import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebars from "./sidebar";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";


function DTICal() {
// variable section
  const [birth, setBirth] = useState("");
  const [age, setAge] = useState("");
  const [receipts, setReceipts] = useState("");
  const [expenses, setExpenses] = useState("");
  const [contractPrice, setContractPrice] = useState("");
  const [DTI, setDTI] = useState("");


  // calculate section
  const calAge = () => { //waiting
    const age = parseFloat()
  }
  const calculateDTI = () => {
    const receipts_total = parseFloat(receipts) - parseFloat(expenses);
    const DTI_value = receipts_total / contractPrice * 100
    setDTI(DTI_value);
  };
  return (
    // <div>
    //     <input
    //     type="number"
    //     placeholder="Enter receipt"
    //     value={receipts}
    //     onChange={(e) => setReceipts(e.target.value)}
    //     />
    //     <input
    //     type="number"
    //     placeholder="expenses"
    //     value={expenses}
    //     onChange={(e) => setExpenses(e.target.value)}
    //     />
    //     <input
    //     type="number"
    //     placeholder="contract price"
    //     value={contractPrice}
    //     onChange={(e) => setContractPrice(e.target.value)}
    //     />
    //     <button onClick={calculateDTI}>Calculate</button>
    //     <input
    //     type="number"
    //     placeholder=""
    //     value={DTI}
    //     />
    // </div>
    <div className="calculator-container">
      <Header />
      <Navbar />
      <div className="d-flex">
        <Sidebars />
        {/* <div className="calculator-box">
          <form className="borrower-input">
            <h6>ข้อมูลลูกค้า</h6>
            <div>
              <label>ชื่อ-นามสกุล: </label>
              <input type="text" placeholder="กรุณากรอกข้อมูล" />
            </div>
            <div>
              <label>เพศ: </label>
              <select>
                <option>ชาย</option>
                <option>หญิง</option>
              </select>
            </div>
            <div>
              <label>ปีเกิด: </label>
              <input type="date" placeholder="กรุณากรอกข้อมูล" />
            </div>
            <div>
              <label>อายุ: </label>
              <input type="number" placeholder="" />
            </div>
            <div>
              <label>กู้ได้สูงสุด(ปี): </label>
              <input type="text" placeholder="" />
            </div>
            <div>
              <label>อาชีพ: </label>
              <input type="text" placeholder="กรุณากรอกข้อมูล" />
            </div>
            <div>
              <label>ข้อมูลรายรับรวม: </label>
              <input type="number" placeholder="กรุณากรอกข้อมูล" />
            </div>
            <div>
              <label>ข้อมูลจ่ายรับรวม: </label>
              <input type="number" placeholder="กรุณากรอกข้อมูล" />
            </div>
          </form>
          <form className="project-input">
            <h6>ข้อมูลโครงการ</h6>
            <div>
              <label>โครงการ (ชื่อบริษัท): </label>
              <select>
                <option>โครงการทั่วไป (Non selective)</option>
                <option>โครงการทั่วไป (Top selective)</option>
              </select>
            </div>

          </form>
        </div>
      </div>
      <div className="result-box">
        <div className="buttons"></div>
      </div> */}
        <div className="calculator-box m-3">
          <form className="borrower-input mb-3">
            <h6>ข้อมูลลูกค้า</h6>
            <div className="form-group">
              <label>ชื่อ-นามสกุล: </label>
              <input
                type="text"
                className="form-control"
                placeholder="กรุณากรอกข้อมูล"
              />
            </div>
            <div className="form-group">
              <label>เพศ: </label>
              <select className="form-control">
                <option>ชาย</option>
                <option>หญิง</option>
              </select>
            </div>
            <div className="form-group">
              <label>ปีเกิด: </label>
              <input
                type="date"
                className="form-control"
                placeholder="กรุณากรอกข้อมูล"
              />
            </div>
            <div className="form-group">
              <label>อายุ: </label>
              <input type="number" className="form-control" placeholder="" />
            </div>
            <div className="form-group">
              <label>กู้ได้สูงสุด(ปี): </label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="form-group">
              <label>อาชีพ: </label>
              <input
                type="text"
                className="form-control"
                placeholder="กรุณากรอกข้อมูล"
              />
            </div>
            <div className="form-group">
              <label>ข้อมูลรายรับรวม: </label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกข้อมูล"
              />
            </div>
            <div className="form-group">
              <label>ข้อมูลจ่ายรับรวม: </label>
              <input
                type="number"
                className="form-control"
                placeholder="กรุณากรอกข้อมูล"
              />
            </div>
          </form>
          <form className="project-input">
            <h6>ข้อมูลโครงการ</h6>
            <div className="form-group">
              <label>โครงการ (ชื่อบริษัท): </label>
              <select className="form-control">
                <option>โครงการทั่วไป (Non selective)</option>
                <option>โครงการทั่วไป (Top selective)</option>
              </select>
            </div>
          </form>
        </div>
        <div className="result-box">
          <div className="buttons"></div>
        </div>
      </div>
    </div>
  );
}

export default DTICal;
