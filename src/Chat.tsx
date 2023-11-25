import santa from "./assets/Ellipse 7-chat.png";
import { Button, DashboardLayout, PhoneIcon } from "./components/ui/";

function Chat() {
  return (
    <DashboardLayout>
      {" "}
      <div className={`my-4`}>
        <div
          className={`bg-white p-4 rounded-[10px] md:px-8 lg:px-[4rem] flex flex-col items-center my-[8%]`}
        >
          <h1 className="font-montserrat text-PRIMARY md:text-[40px] font-semibold text-center">
            Santa Calling...
          </h1>

          <div className="flex justify-center my-[8%]">
            <img
              src={santa}
              alt=""
              className="object-contain h-[296.768px] w-auto "
            />
          </div>

          <Button className="bg-red-600 max-w-[304.499px] rounded-[45px] p-[5px] text-white flex items-center justify-center gap-3 md:gap-10 font-montserrat">
            End
            <span>
              <PhoneIcon className="w-auto h-10 md:h-16 lg:w-auto" />
            </span>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Chat;
