import Navigation from "../Components/Navigation";
function Profile() {
  return (
    <div>
      <Navigation />
      <div>
        {" "}
        <div className="flex m-4 space-x-4">
          <img className="w-32 rounded-2xl " src="fuad.jpg" alt="" />
          <div>
            <h1>Name : Fuad Seid</h1>
            <h1> Phone Number : +251907242838 </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
