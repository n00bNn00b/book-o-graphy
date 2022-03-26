import "./App.css";

import BookStore from "./components/BookStore/BookStore";
import Footer from "./components/Footer/Footer";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <BookStore />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
