import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      {/* <div>gg</div> */}

      <p>Home</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
