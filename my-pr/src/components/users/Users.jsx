import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  const searchUsers = (arr, inputValue) =>
    arr.filter((user) =>
      user.name.toLowerCase().includes(inputValue.toLowerCase()),
    );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setSearchResults(searchUsers(users, searchTerm));
  }, [users, searchTerm]);

  return (
    <div className="grid h-screen w-full gap-y-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="rounded-md border-4 border-indigo-700 px-2 py-6">
        <h2 className="my-6 text-center text-3xl font-bold ">Users:</h2>
        <div className="grid place-items-center">
          <input
            className="rounded-md border-none p-2 focus:outline-cyan-400"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-md border-4 border-indigo-700 p-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error :{error}</p>}
        {!loading &&
          !error &&
          searchResults.map(({ id, name, username, email }) => (
            <div
              className="white rounded-md border-2 border-blue-500 p-4 shadow-lg"
              key={id}
            >
              <h2 className="">
                <span className="text-lg font-bold tracking-wide">{name} </span>
                <i>as </i>({username})
              </h2>
              <a href={`emailto: ${email}`}>
                <span className="text-lg font-bold tracking-wide">Email: </span>
                {email}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users;
