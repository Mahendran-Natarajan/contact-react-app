import React from "react";
import Heading from './Heading';
import List from './List';
import * as calc from "./Calculator";
import Card from './Card';
import contacts from "./contacts";

function createCards(contacts){
    return <Card name={contacts.name} image={contacts.imageUrl}
    phone={contacts.phone} email={contacts.email} />
}

function App() {
    console.log(contacts);
    return <div>
    <Heading />
     <List />
     <h3>ADD : {calc.add(10,2)}</h3>
     <h3>SUB : {calc.sub(10,2)}</h3>
     <h3>MULTIPLY : {calc.multiply(10,2)}</h3>
     <h3>DIVIDE : {calc.divide(10,2)}</h3>

     <h1>My Contacts</h1>
        {contacts.map(createCards)}
    </div>

}

export default App;