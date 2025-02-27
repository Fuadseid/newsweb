import BasicButtons from "../Components/Button";
import Navigation from "../Components/Navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <div className="p-16 space-y-9">
        <h1 className="text-3xl font-bold text-red-600">Home!</h1>

        <BasicButtons choice={1}/>
      </div>
    </div>
  );
}

export default Home;