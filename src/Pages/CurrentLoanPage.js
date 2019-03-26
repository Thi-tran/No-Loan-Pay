import LoanBook from '../component/LoanBook';
import {deleteLoan} from '../action/action';
import { UserContext } from '../App';
import React, { Component } from 'react';
import firebase from '../firebase';

const database = firebase.database();

const CurrectLoanPageContainer = () => (
    <UserContext.Consumer>
        {({user}) => <CurrentLoanPage user={user} />}
    </UserContext.Consumer>
)

class CurrentLoanPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfBook: [],
        }
    }
    

    componentDidMount() {
        this.getBooks(this.props.user.uid);
    }

    getBooks = (id) => {
        database.ref(`loan/${id}`)
        .on('value',(snapshot) => {
            const listOfBook = []
            snapshot.forEach((childSnapshot)=> {
                listOfBook.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            this.setState({listOfBook});
        })
    }


    onHandleDeleteLoan = (id) => {
        deleteLoan(this.props.user.uid,id);
        this.getBooks(this.props.user.uid);
    }

    render() {
        const {listOfBook} = this.state;
        const array = [], size = 3;
        while (listOfBook.length > 0) array.push(listOfBook.splice(0,size));
        return (
            <div className="loan-container">
                <div className="mt-3">
                {array.map((item) => (
                    <div className="row" key={item[0].id}>
                        {item.map((book) => (
                                <div className="span-1-of-3" key={book.id}>
                                    <LoanBook 
                                        key={book.id} 
                                        {...book}
                                        onDelete={this.onHandleDeleteLoan}    
                                        />
                                </div>
                        ))}
                    </div>    
                ))}
                </div>
            </div>
        );
    }
}

export default CurrectLoanPageContainer;

// const CurrentLoanPage = () => {
//     const [listOfBook, setListOfBook] = useState([]);
//     const [listUpdate, setListUpdate] = useState(false);
//     const bookTotal = Number(localStorage.getItem('nlp-loanNum'));
//     const temptArray = [];

//     // getting the listOfBook
//     useEffect(()=> {
//         let user = this.context;
//         for (let i = 1; i <= bookTotal; i++) {
//             if (localStorage.getItem(`nlp-book-${i}-id`)) {
//                 const title = localStorage.getItem(`nlp-book-${i}-title`);
//                 const dueDate = localStorage.getItem(`nlp-book-${i}-date`);
//                 const note = localStorage.getItem(`nlp-book-${i}-note`);
//                 const id = localStorage.getItem(`nlp-book-${i}-id`);
//                 temptArray.push({title, dueDate,note, id});
//             }
//         }
//         setListOfBook(temptArray);
        
//     },[listUpdate])
    

//     const onHandleDeleteLoan = (id) => {
//         deleteLoan(id);
//         setListUpdate(!listUpdate);
//     }


//     //split listOfBook to array with 3 items
//     const array = [], size = 3;
//     while (listOfBook.length> 0)
//         array.push(listOfBook.splice(0,size));
//     console.log(UserContext.Consumer);

//     return (
//         <UserContext.Consumer>
//         {({user}) => 
            // <div className="loan-container">
            //     <div className="mt-3">
            //     {array.map((item) => (
            //         <div className="row" key={item[0].id}>
            //             {item.map((book) => (
            //                     <div className="span-1-of-3" key={book.id}>
            //                         <LoanBook 
            //                             key={book.id} 
            //                             {...book}
            //                             onDelete={onHandleDeleteLoan}    
            //                             />
            //                     </div>
            //             ))}
            //         </div>    
            //     ))}
            //     </div>
            // </div>
//         }  
//         </UserContext.Consumer>    
//     )
// }



// export default CurrentLoanPage;