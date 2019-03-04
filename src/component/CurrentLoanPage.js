import React, {useState, useEffect} from 'react';
import LoanBook from './LoanBook';
import {deleteLoan} from '../action/action';

const CurrentLoanPage = () => {
    const [listOfBook, setListOfBook] = useState([]);
    const [listUpdate, setListUpdate] = useState(false);
    const bookTotal = Number(localStorage.getItem('nlp-loanNum'));
    const temptArray = [];

    // getting the listOfBook
    useEffect(()=> {
        for (let i = 1; i <= bookTotal; i++) {
            if (localStorage.getItem(`nlp-book-${i}-id`)) {
                const title = localStorage.getItem(`nlp-book-${i}-title`);
                const dueDate = localStorage.getItem(`nlp-book-${i}-date`);
                const note = localStorage.getItem(`nlp-book-${i}-note`);
                const id = localStorage.getItem(`nlp-book-${i}-id`);
                temptArray.push({title, dueDate,note, id});
            }
        }
        setListOfBook(temptArray);
    },[listUpdate])
    

    const onHandleDeleteLoan = (id) => {
        deleteLoan(id);
        setListUpdate(!listUpdate);
    }


    //split listOfBook to array with 4 items
    const array = [], size = 3;
    while (listOfBook.length> 0)
        array.push(listOfBook.splice(0,size));

    return (
        <div className="loan-container">
            <div className="mt-3">
            {array.map((item) => (
                <div className="row">
                    {item.map((book) => (
                        <div className="span-1-of-3">
                            <LoanBook 
                                key={book.id} 
                                {...book}
                                onDelete={onHandleDeleteLoan}    
                                />
                        </div>
                    ))}
                </div>    
            ))}
            </div>
        </div>
    )
}



export default CurrentLoanPage;