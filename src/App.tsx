import { useState } from "react";
import "./App.css";
import FormOne from "./components/FormOne";

import userData from "./types/formData";

function App() {
  const [formData, setFormData] = useState<userData>({
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

export default App;
