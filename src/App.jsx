import song from "./songs/Echoes of the Tempest.mp3";
const App = () => {
  const handleGetArticle = () => {
    var searchterm = document.getElementById("SearchTerms").value;

    var url = "https://en.wikipedia.org/w/api.php";
    var myResponse; //prompt text for udio

    var params = {
      //https://en.wikipedia.org/w/api.php?action=parse&page=soup&format=json
      //action=query&format=json&titles=soup&prop=extracts&exintro&explaintext
      action: "query",
      format: "json",
      titles: searchterm,
      prop: "extracts",
      exintro: "",
      explaintext: "",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) {
      url += "&" + key + "=" + params[key];
    });
    console.log(url);
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        myResponse = response; //.query.text["*"];
        console.log(
          response["query"]["pages"][
            Object.keys(response["query"]["pages"])[0]
          ]["extract"]
        ); //.query.text["*"]);
        /*let labelElement = document
                    .getElementById("result1");
                labelElement.innerHTML =
                    "<em>WikiPedia</em> <br/>" + myResponse;*/
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //script to arrange links

  return (
    <div>
      <div id="HeaderBar">
        <h1>
          WikiPlaydia: <span id="ArticleName">1999 Sydney hailstorm</span>
        </h1>
        <div id="Search">
          <input type="text" id="SearchTerms"></input>{" "}
          <button id="SearchButton" onClick={handleGetArticle}>
            Search
          </button>
        </div>
      </div>
      <div id="SongArea">
        <audio controls src={song}></audio>
      </div>
      <div id="MoreLinks">
        <ul id="LinkList">
          <li>
            <a href="">Australian</a>
          </li>
          <li>
            <a href="">New South Wales</a>
          </li>
          <li>
            <a href="">Sydney</a>
          </li>
          <li>
            <a href="">eastern suburbs</a>
          </li>
          <li>
            <a href="">tonnes</a>
          </li>
          <li>
            <a href="">hailstones</a>
          </li>
          <li>
            <a href="">A$</a>
          </li>
          <li>
            <a href="">1989 Newcastle earthquake</a>
          </li>
          <li>
            <a href="">supercell</a>
          </li>
          <li>
            <a href="">Bureau of Meteorology</a>
          </li>
          <li>
            <a href="">storm cell</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
