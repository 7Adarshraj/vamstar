let classList = document.querySelectorAll('.lbl-licitacao');

let publicationDate = classList[0].children[1].innerText;

let biddingDate = classList[5].children[1].innerText;

let objectText = classList[1].nextElementSibling.nextElementSibling.children[0].children[0].innerText;


let tenderLinksArr = []

let tenderLinksList = document.querySelectorAll('table a')

tenderLinksList.forEach( e => {
    tenderLinksArr.push( e.getAttribute('href') );
})

console.log( `Publication Date is ${publicationDate}` );
console.log( `Bidding Date is ${biddingDate}` );
console.log( `Object Text is ${objectText}` );
console.log( `Tender Links are ${tenderLinksArr}` );
 