import Footer from "@/components/footer/page";
import LandingPage from "@/components/landing_page/page";
import Header from "@/components/navigation/header";
import React from "react";

const loggedIn = false;

console.log("hello");

const Home = () => {
  return (
    <main className="overflow-auto min-h-screen">
      <>
        <Header />
        {/* If user is not logged in then make sure to show initial page. 
      Otherwise show logged in page */}
        {loggedIn ? (
          <div>
            <h2>Logged In</h2>
          </div>
        ) : (
          <LandingPage />
        )}
        <Footer />{" "}
      </>
    </main>
  );
};

export default Home;
