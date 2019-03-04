import moment from 'moment';

export const addLoan = (title, date, note) => {
    const initialState = localStorage.getItem('nlp-loanNum');
    if (Number(initialState)  < 1) {
        //set inital state
        localStorage.setItem('nlp-loanNum', 1);

        // add book
        localStorage.setItem(`nlp-book-1-title`, title);
        localStorage.setItem('nlp-book-1-date', date);
        localStorage.setItem('nlp-book-1-note', note);
        localStorage.setItem('nlp-book-1-id', 1);

    } else {
        // get the current book num
        const latestNumBook = Number(localStorage.getItem('nlp-loanNum')) + 1 ;

        // add book 
        localStorage.setItem(`nlp-book-${latestNumBook}-title`, title);
        localStorage.setItem(`nlp-book-${latestNumBook}-date`, date);
        localStorage.setItem(`nlp-book-${latestNumBook}-note`, note);
        localStorage.setItem(`nlp-book-${latestNumBook}-id`, latestNumBook);

        console.log(moment(Number(localStorage.getItem(`nlp-book-${latestNumBook}-date`))).format('MMMM Do, YYYY'));

        // increase loan num 1 
        localStorage.setItem('nlp-loanNum', latestNumBook);
    }
}

export const deleteLoan = (id) => {
    localStorage.removeItem(`nlp-book-${id}-title`);
    localStorage.removeItem(`nlp-book-${id}-date`);
    localStorage.removeItem(`nlp-book-${id}-note`);
    localStorage.removeItem(`nlp-book-${id}-id`);
}