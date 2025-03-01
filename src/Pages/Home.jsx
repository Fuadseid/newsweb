import { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";
import BasicButtons from "../Components/Button";

function Home({ Addfav }) {
  const [Like, setLike] = useState(0);
  const [CommentCount, setCommentCount] = useState(0);
  const [CommentText, setCommentText] = useState("");
  const [Comments, setComments] = useState([]);
  const [ShowCommentInput, setShowCommentInput] = useState(false);
  const [Showcomment, setShowcomment] = useState(false);

  const handleCommentSubmit = () => {
    if (CommentText.trim() !== "") {
      setComments((prevComments) => [...prevComments, CommentText]);
      setCommentCount((prevCount) => prevCount + 1);
      setCommentText("");
      setShowCommentInput(false);
    }
  };

  const showstattus = () => {
    setShowcomment(!Showcomment); // Toggle the comment visibility
  };

  // Detect Enter key press
  useEffect(() => {
    const handleEnter = (event) => {
      if (event.key === "Enter" && ShowCommentInput) {
        handleCommentSubmit();
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleEnter);

    // Cleanup event listener
    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [CommentText, ShowCommentInput]); // Dependencies

  return (
    <div>
      <Navigation />
      <div className="p-16 space-y-9">
        <div className="bg-gray-100 m-auto rounded-lg p-6">
          <hr />
          <br />
          <img className="w-[650px] m-auto" src="/image.jpg" alt="" />
          <br />
          <div>
            <span className="font-bold">Description : </span>
            This is The interprenership request letter from debirebirhan
            universsity Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Quam, beatae ratione fugiat illo voluptas labore ut
            repellendus reprehenderit? Corrupti, autem culpa? Voluptatem
            adipisci, nam sint minus inventore magni porro corporis?
          </div>
          <hr />
          <div className="flex justify-around p-4">
            <button
              onClick={() => setLike((prevLike) => prevLike + 1)}
              className="text-[27px] flex"
            >
              ♥️ <h2>{Like}</h2>
            </button>
            <button
              onClick={() => setShowCommentInput(!ShowCommentInput)}
              className="text-[27px] flex"
            >
              💬 <h2>{CommentCount}</h2>
            </button>
            <button onClick={Addfav} className="text-[27px]">
              ⭐
            </button>
          </div>

          {/* Comment Input Section */}
          {ShowCommentInput && (
            <div className="mt-4">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Write your comment..."
                value={CommentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button
                onClick={handleCommentSubmit}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Submit Comment
              </button>
            </div>
          )}

          {/* Button to Toggle Comments Visibility */}
          <BasicButtons choice={'text'} handleclick={showstattus}>
            {Showcomment ? "Hide Comments" : "Show Comments"}
          </BasicButtons>

          {/* Display Submitted Comments */}
          {Showcomment && (
            <div className="mt-4 space-y-2">
              {Comments.map((comment, index) => (
                <div key={index} className="p-2 bg-gray-200 rounded-lg">
                  {comment}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;