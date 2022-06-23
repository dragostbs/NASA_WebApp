const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=46ebdbd17fd846ad99e21e94ae5dc344';

async function getNews() {
    const response = await fetch(url);
    const theData = await response.json();

    const author1 = Object.values(theData.articles[0].author).join("");
    document.getElementById("firstAuthor").innerHTML = author1;

    const title1 = Object.values(theData.articles[0].title).join("");
    document.getElementById("firstTitle").innerHTML = title1;

    const content1 = Object.values(theData.articles[0].content).join("");
    document.getElementById("firstContent").innerHTML = content1.substring(0, 200);

    const publish1 = Object.values(theData.articles[0].publishedAt).join("");
    document.getElementById("firstDate").innerHTML = publish1.substring(11, 19);

    const author2 = Object.values(theData.articles[1].author).join("");
    document.getElementById("secondAuthor").innerHTML = author2;

    const title2 = Object.values(theData.articles[1].title).join("");
    document.getElementById("secondTitle").innerHTML = title2;

    const content2 = Object.values(theData.articles[1].content).join("");
    document.getElementById("secondContent").innerHTML = content2.substring(0, 200);

    const publish2 = Object.values(theData.articles[1].publishedAt).join("");
    document.getElementById("secondDate").innerHTML = publish2.substring(11, 19);

    const author3 = Object.values(theData.articles[2].author).join("");
    document.getElementById("thirdAuthor").innerHTML = author3;

    const title3 = Object.values(theData.articles[2].title).join("");
    document.getElementById("thirdTitle").innerHTML = title3;

    const content3 = Object.values(theData.articles[2].content).join("");
    document.getElementById("thirdContent").innerHTML = content3.substring(0, 200);

    const publish3 = Object.values(theData.articles[2].publishedAt).join("");
    document.getElementById("thirdDate").innerHTML = publish3.substring(11, 19);

    const author4 = Object.values(theData.articles[3].author).join("");
    document.getElementById("fourthAuthor").innerHTML = author4;

    const title4 = Object.values(theData.articles[3].title).join("");
    document.getElementById("fourthTitle").innerHTML = title4;

    const content4 = Object.values(theData.articles[3].content).join("");
    document.getElementById("fourthContent").innerHTML = content4.substring(0, 200);

    const publish4 = Object.values(theData.articles[3].publishedAt).join("");
    document.getElementById("fourthDate").innerHTML = publish4.substring(11, 19);

    const author5 = Object.values(theData.articles[4].author).join("");
    document.getElementById("fifthAuthor").innerHTML = author5;

    const title5 = Object.values(theData.articles[4].title).join("");
    document.getElementById("fifthTitle").innerHTML = title5;

    const content5 = Object.values(theData.articles[3].content).join("");
    document.getElementById("fifthContent").innerHTML = content5.substring(0, 200);

    const publish5 = Object.values(theData.articles[3].publishedAt).join("");
    document.getElementById("fifthDate").innerHTML = publish5.substring(11, 19);

    const image1 = document.querySelector('.firstImage');
    const imageUrl1 = Object.values(theData.articles[0].urlToImage).join("");
    image1.innerHTML = `<img src="${imageUrl1}" alt="Erorr" />`;

    const image2 = document.querySelector('.secondImage');
    const imageUrl2 = Object.values(theData.articles[1].urlToImage).join("");
    image2.innerHTML = `<img src="${imageUrl2}" alt="Erorr" />`;

    const image3 = document.querySelector('.thirdImage');
    const imageUrl3 = Object.values(theData.articles[2].urlToImage).join("");
    image3.innerHTML = `<img src="${imageUrl3}" alt="Erorr" />`;

    const image4 = document.querySelector('.fourthImage');
    const imageUrl4 = Object.values(theData.articles[3].urlToImage).join("");
    image4.innerHTML = `<img src="${imageUrl4}" alt="Erorr" />`;

    const image5 = document.querySelector('.fifthImage');
    const imageUrl5 = Object.values(theData.articles[4].urlToImage).join("");
    image5.innerHTML = `<img src="${imageUrl5}" alt="Erorr" />`;

    setInterval(getIss, 100000);
    console.log(theData);
}

getNews();