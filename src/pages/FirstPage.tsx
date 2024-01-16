import { useState } from "react";
import FormOne from "../components/FormOne";
import { UserData } from "../types/types";

function FirstPage() {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  return (
    <main className="w-full h-screen mx-auto text-center bg-emerald-500 font-mono">
      <h1 className="text-6xl bg-orange-600">Welcome</h1>
      <h2 className="mt-10 text-3xl">Please fill up the form below</h2>
      <FormOne formData={formData} setFormData={setFormData} />
    </main>
  );
}

export default FirstPage;
