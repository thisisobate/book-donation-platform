import { FormEvent, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import happyPride from "./assets/Happy Pride! - Donut.png";
import peepsTogether from "./assets/open-peeps-together.png";
import streetLife from "./assets/Street Life - Couple of Friends.png";
import { BookList } from "./components/BookList";
import Modal from "react-modal";
import axios from "axios";

interface bookType {
  message: string;
  data: any;
  success: boolean;
}

function App() {
  const [modal, setModal] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    name: null,
    donor: null,
    file: null,
  });
  const [bookList, setBookList] = useState<bookType | null>(null);
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const baseURL = "http://localhost:2020/api/books";

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "600px",
    },
  };

  const fetchAllBooks = () =>
    axios.get(baseURL).then((response) => {
      setBookList(response.data);
    });

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const handleInputChange = (event: any) => {
    const target = event.target;
    const name = target.name;
    setBookDetails({
      ...bookDetails,
      [name]: target?.value,
    });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios({
      method: "post",
      url: baseURL,
      headers: { "Content-Type": "multipart/form-data" },
      data: bookDetails,
    }).then((response) => {
      if (response.status) {
        fetchAllBooks();
        closeModal();
      }
    });
  };

  const openModal = () => {
    return setModal(true);
  };

  const closeModal = () => {
    return setModal(false);
  };
  return (
    <>
      <main className="app">
        <section>
          <p>Recently donated:</p>
          <div className="grid">
            {bookList?.data.length === 0 && <p>No books found in the library.</p>}
            {bookList?.data.map((book: { [x: string]: string }) => (
              <BookList
                key={book["_id"]}
                id={book["_id"]}
                title={book["title"]}
                donor={book["donor"]}
              />
            ))}
          </div>
          {/* <button>view more</button> */}
        </section>
        <section className="callToAction">
          <p>Want to support the next gen of leaders with books?</p>
          <button onClick={openModal}>Donate</button>
        </section>
      </main>
      <footer>
        <div className="container">
          <div></div>
          <div></div>
        </div>
        <div>Made with &#10084;&#65039; by Obate</div>
      </footer>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="button-sm button-transparent" onClick={closeModal}>
          &#10006;
        </button>
        <div className="modal-title">Add Book Details</div>
        <form ref={formRef} onSubmit={handleFormSubmit}>
          <div className="flex flex-column modal-input space-between">
            <label>Title</label>
            <input name="title" type="text" onChange={handleInputChange} />
          </div>
          <div className="flex flex-column modal-input">
            <label>Name of Donor</label>
            <input name="donor" type="text" onChange={handleInputChange} />
          </div>
          {/* <div className="flex flex-column modal-input">
              <label>Upload file</label>
              <input name="file" type="file"  accept=".pdf"/>
            </div> */}
          <button className="button button-md">Donate</button>
        </form>
      </Modal>
    </>
  );
}

export default App;
