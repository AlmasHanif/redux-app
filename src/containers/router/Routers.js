
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import MyNavbar from '../../components/MyNavbar';
import AddBook from './AddBook';
import BookList from './BookList';

const Routers = () => {
    return (
        <div>
            <Router>
                {/* <MyNavbar /> */}
                <Routes>
                    <Route path="/" element={<MyNavbar />} />
                    <Route path="/addbooks" element={<AddBook />} />
                    <Route path="/booklist" element={<BookList />} />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default Routers
