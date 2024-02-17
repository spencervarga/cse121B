const apiUrl = 'https://api.quotable.io';
const quoteList = document.getElementById('quotes');

const displayQuotes = (quotes) => {
    quoteList.innerHTML = '';
    quotes.forEach(quote => {
        const articleElement = document.createElement('article');
        const pElement = document.createElement('p');
        const footerElement = document.createElement('footer');

        pElement.textContent = `"${quote.content}"`;
        footerElement.textContent = `- ${quote.author}`;

        articleElement.appendChild(pElement);
        articleElement.appendChild(footerElement);
        quoteList.appendChild(articleElement);
    });
};

const getRandomQuotes = async (numQuotes) => {
    const response = await fetch(`${apiUrl}/quotes/random?limit=${numQuotes}`);
    displayQuotes(await response.json());
};

const quoteFilter = () => {
    const filter = document.getElementById('filter').value;
    switch (filter) {
        case '1':
            getRandomQuotes(1);
            break;
        case '5':
            getRandomQuotes(3);
            break;
        case '10':
            getRandomQuotes(5);
            break;
    }
};

document.getElementById('filter').addEventListener('change', quoteFilter);

getRandomQuotes(1);
