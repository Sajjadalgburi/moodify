import Footer from "@/components/footer/page";
import LandingPage from "@/components/landing_page/page";
import Header from "@/components/navigation/header";
import { createClient } from "@/utils/supabase/client";
import React from "react";

const loggedIn = false;

const Home = async () => {
  const supabase = await createClient();

  return (
    <main className="overflow-auto min-h-screen">
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
      <Footer />
    </main>
  );
};

export default Home;
