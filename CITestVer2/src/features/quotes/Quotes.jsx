import { useEffect, useState } from "react";
import { quoteApi } from "../../api";

function Quotes() {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState();
  const [tags, setTags] = useState([]);
  useEffect(() => {
    quoteApi.getRandom().then((res) => {
      setQuote(res);
      setAuthor(res[0].author);
      setTags(res[0].tags);
    });
  }, []);

  const handleRandom = () => {
    quoteApi.getRandom().then((res) => {
      setQuote(res);
      setAuthor(res[0].author);
      setTags(res[0].tags);
    });
  };

  const handleGetAllQuote = (authSlug) => {
    quoteApi.getAllByAuthSlug(authSlug).then((res) => setQuote(res.results));
  };

  return (
    <div className="wrap">
      <button onClick={handleRandom} className="btn">
        random
      </button>
      {quote?.map((item) => {
        return (
          <p key={item._id} className="text">
            &quot;{item.content}&quot;
          </p>
        );
      })}
      <button
        onClick={() => handleGetAllQuote(quote ? quote[0]?.authorSlug : "")}
        className="btnAuth"
      >
        <div className="wrap-text">
          {author}
          {tags.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <span>&rarr;</span>
      </button>
    </div>
  );
}

Quotes.propTypes = {};
export default Quotes;
