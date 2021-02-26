
let quoteArr = [
    {
        name: 'Martin Luther King Jr.',
        quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but what ever you do you've to move forward."
    },
    {
        name: 'Victor Hugo',
        quote: "But listen, there will be more joy in heaven over the tears of a repentant sinner than over the white robes of a hundred just men."
    },
    {
        name: 'Muhammad Ali',
        quote: "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe."
    }
];

document.getElementById('quoteBt').onclick = generateQuote = ()  =>{
    let random = Math.floor(Math.random() * 3);
    document.getElementById('quotesBox').innerHTML = quoteArr[random].quote;
    document.getElementById('quoteAuthor').innerHTML = quoteArr[random].name;
}