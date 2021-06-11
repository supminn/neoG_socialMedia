import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./Components/Home";
import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { PostDetails } from "./features/post/PostDetails";
import { Followers } from "./features/user/Followers";
import { Following } from "./features/user/Following";
import { UserProfile } from "./features/user/UserProfile";
import { SearchUsers } from "./features/user/SearchUsers";


function App() {
  return (
    <div className="bg-blue-50 text-blue-900 min-h-screen">
      <Navigation />
      <div className="px-2 min-h-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<UserProfile />} />
        <Route path="/:username/following" element={<Following />} />
        <Route path="/:username/followers" element={<Followers />} />
        <Route path="/:username/post/:postId" element={<PostDetails />} />
        <Route path="/search" element={<SearchUsers />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
