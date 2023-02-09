import "./App.css";
import Landing from "./screens/Landing/Landing";



function App() {
  return(
    <section className="app">
      <Routes>
        <Route path="/sign-in" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </section>
  );
}

export default App;
