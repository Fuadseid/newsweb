import Navigation from "../Components/Navigation";

function Favorite({ fav, Addfav }) {
  return (
    <div>
      <Navigation />
      <div>
        {" "}
        {fav &&
          <div className="p-16 space-y-9">
            <div className=" bg-gray-100  m-auto  rounded-lg p-6">
              <hr />
              <br />
              <img className="w-[650px] m-auto" src="/image.jpg" alt="" />
              <br />
              <div>
                <span className="font-bold ">Description : </span>
                This is The interprenership request letter from debirebirhan
                universsity Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Quam, beatae ratione fugiat illo voluptas labore ut
                repellendus reprehenderit? Corrupti, autem culpa? Voluptatem
                adipisci, nam sint minus inventore magni porro corporis?
              </div>
              <hr />
              <div className="flex justify-around p-4">
                <button className="text-[27px]">♥️</button>
                <button className="text-[27px]">💬</button>
                <button onClick={Addfav} className="text-[27px]">
                  ⭐
                </button>
              </div>
            </div>
          </div>
        }{" "}
      </div>
    </div>
  );
}

export default Favorite;
