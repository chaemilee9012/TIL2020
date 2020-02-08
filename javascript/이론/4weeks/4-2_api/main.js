(function () {


    // fetch("https://jsonplaceholder.typicode.com/todos") // 서버 요청
    //     .then(res => res.json()) // 서버 응답
    //     .then(data => console.log(data)); // 데이터를 푼다.
    //     .catch(e => console.log(e));
    



    // NY API : https://developer.nytimes.com/

    var api = "poulkUxAbhMmJPCpgjSDdt10fRGR72Pl";

    var cityStr;
    var nytElem = document.getElementById("nytimes-articles");


    var form = document.getElementById("form-container");
    form.addEventListener("submit", function (e) {

        e.preventDefault();
        cityStr = document.getElementById("city").value;

        var nytimesUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${cityStr}&sort=newest&api-key=${api}`;
        
        fetch(nytimesUrl)
            .then(res => console.log(res.json()))
            .then(data => data.response.docs)
            .catch(e => console.log(e));

        document.getElementById("city").value = "";

        // fetch(nytimesUrl)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data.response.docs);
        //         var data = data.response.docs;
        //         data.forEach(function (item) {
        //             nytElem.insertAdjacentHTML('beforeend', `
        //                 <li class="article">
        //                     <a href="${item.web_url}">${item.headline.main}</a>
        //                     <p>${item.snippet}</p>
        //                 </li>
                        
        //             `);
        //         })
        //     })
        //     .catch(err => console.error(err)); // 픽사베이 api로 수정해보기


        

    });
    



})();