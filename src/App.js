import "./App.css";

import BookStore from "./components/BookStore/BookStore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <Header />
      <BookStore />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
