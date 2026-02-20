import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false); // ⭐ NEW

  const handleReservation = (e) => {
    e.preventDefault();

    // simple validation
    if (!firstName || !lastName || !email) {
      alert("Please fill all required fields");
      return;
    }

    // 👉 yaha data localStorage me save ho sakta h (optional)
    const data = {
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    };

    let old = JSON.parse(localStorage.getItem("reservations")) || [];
    old.push(data);
    localStorage.setItem("reservations", JSON.stringify(old));

    // reset
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");

    // ⭐ success show
    setSubmitted(true);
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>

        <div className="banner">
          <div className="reservation_form_box">

            {submitted ? (
              // ✅ SUCCESS UI
              <>
                <h1>🎉 Reservation Successful!</h1>
                <p>Your booking request has been received.</p>
                <p>We will contact you shortly.</p>
              </>
            ) : (
              // ❌ FORM UI
              <>
                <h1>MAKE A RESERVATION</h1>
                <p>For Further Questions, Please Call</p>

                <form onSubmit={handleReservation}>
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="email_tag"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <button type="submit">
                    RESERVE NOW
                    <span>
                      <HiOutlineArrowNarrowRight />
                    </span>
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;