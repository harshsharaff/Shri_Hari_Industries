import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Shri Hari Industries</h1>
        <p>Your trusted partner in industrial solutions.</p>
        <a
          className="App-link"
          href="#contact"
        >
          Contact Us
        </a>
      </header>

      <section className="App-about">
        <h2>About Us</h2>
        <p>
          Shri Hari Industries specializes in delivering high-quality industrial components and engineering services. Our mission is to bring precision and reliability to every project we touch.
        </p>
      </section>

      <section className="App-contact" id="contact">
        <h2>Contact</h2>
        <p>Email: info@shrihariindustries.com</p>
        <p>Phone: +91-12345-67890</p>
      </section>
    </div>
  );
}

export default App;
