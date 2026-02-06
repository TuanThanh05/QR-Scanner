import React from "react";
import "./About.css";
import { QrCode,Search,Menu } from "lucide-react";

export default function About() {
  return (
    <div className="main">
  <div className="web">
      <div className="panel">
        {/* Header */}
        <header className="topbar">
          <div className="top-left">
            <div className="qr-icon" aria-hidden="true">
              <QrCode className="qr-svg"/>
            </div>
            <div className="top-title">QR CODE</div>
          </div>
          <button className="burger" aria-label="Menu" type="button">
  <Menu className="menu-svg" />
</button>




        </header>

        {/* Search */}
        <div className="search-wrap">
          <div className="search">
           <span className="search-ico" aria-hidden="true">
  <Search className="search-svg" />
</span>

<input type="text" placeholder="Tìm kiếm" />

<button className="search-btn" aria-label="Search" type="button">
  <Search className="search-svg" />
</button>

          </div>
        </div>

        {/* Title */}
        <h1 className="page-title">About</h1>
        <div className="title-divider"></div>

        {/* Card */}
        <section className="card">
          <div className="card-hd">
            <span className="pencil" aria-hidden="true">✎</span>
            <span>Nhập mã thủ công</span>
          </div>

          <div className="input-wrap">
            <input type="text" placeholder="Nhập mã xác thực" />
          </div>

          <button className="primary" type="button">XÁC THỰC</button>
        </section>
      </div>
    </div>
    </div>
  
  );
}
