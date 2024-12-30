// import AccountForm from "./account-form";
import { createClient } from "@/utils/supabase/server";

export default async function Account() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user", user);

  return (
    <main>
      <h1>hey</h1>
      {user !== null && <p>Welcome, {user.email}</p>}
    </main>
  );
}