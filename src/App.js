import { Component } from "react";
import "./App.css";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addContact = (data) => {
    console.log(data);
    const contact = {
      ...data,
      id: shortid.generate(),
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
