import { AuthLayout } from "./components/ui";
import { Radio } from "./components/form";

const radioOptions = ["Talk with santa", "Donate"];

function App() {
  const onChange = (option: string) => {
    console.log("SELECTED OPTION => ", option);
    window.location.assign("/signin");
  };

  return (
    <AuthLayout>
      <div className="bg-PRIMARY rounded-[20px] py-9 px-10 ">
        <Radio options={radioOptions} onChange={onChange} />
      </div>
    </AuthLayout>
  );
}

export default App;
