import axios from "axios";
import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import ThemeToggle from "./Layout/ThemeToggle";

const App = () => {
  const BOT_TOKEN = "7808485169:AAGYT5-H74T35jPFR24U37CfZQsxcnCJBQM";
  const MY_ID = "6348045547";
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const sapshenia = `
    Name : ${name} 
Tel : ${tel} 
    `;
  const sent_mesj = () => {
    if (!name || !tel) {
      alert("Iltimos barcha maydonlarni to'ldiring");
    } else {
      axios
        .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: MY_ID,
          text: sapshenia,
        })
        .then((response) => {
          console.log("Message sent:", response.data);
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        })
        .then(() => {
          window.location.reload();
        });
      alert("Rahmat, sizning ma'lumotlaringiz qabul qilindi");
    }
  };
  return (
    <div className="bg-sadia dark:bg-dark-sadia  duration-500">
      <div className=" container  h-full  text-black dark:text-white duration-300 flex justify-center items-center  m-auto   gap-4  ">
        <form className="mt-8 mb-2   w-full flex flex-col justify-center items-center">
          <div className="flex gap-3 flex-col justify-center items-center   w-full rounded-full  mb-5">
            <img
              className=" rounded-full  w-60"
              src="https://raw.githubusercontent.com/kinddevs2024/Sadia-Contact/refs/heads/main/src/image.png"
              alt="sadia logo"
            />
            <h1 className=" text-2xl text-balance">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolore beatae suscipit ex non accusamus excepturi, cumque aperiam, perspiciatis vel totam, corrupti in quidem ab labore dolores hic? Id, aliquid!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corrupti ex deserunt nulla, maxime doloribus adipisci nisi facilis magnam impedit ut inventore numquam dignissimos dolore! Consectetur possimus natus omnis! Impedit.
              Quis quod ullam dignissimos ilon enim, assumenda veritatis animi dolor officiis deserunt quas. Accusantium aperiam, maiores vitae sit ad aliquid rem iusto in deserunt cupiditate quisquam nostrum? Consequuntur?
              Illo consequatur eos aperiam ea id voluptates qui odio, voluptatum ipsa consectetur earum libero placeat nesciunt quaerat error nemo delectus repellat veniam ad aliquid ducimus commodi ex hic! Adipisci, animi.
              </p>
          </div>
          <div className=" flex  w-full sm:flex-nowrap flex-wrap  gap-3  ">
            <div className="flex flex-col  w-full">
              <Typography
                variant="h6"
                className="dark:text-white"
              >
                Ismingiz :
              </Typography>
              <Input
                size="lg"
                type="name"
                placeholder="Muslima"
                className=" !border-sadia-text   focus:!border-sadia-text-fucus"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col  w-full">
              <Typography
                variant="h6"
                className="dark:text-white"
              >
                Sizningiz no'mringiz :
              </Typography>
              <Input
                size="lg"
                type="number"
                placeholder="+998903464546"
                className=" !border-sadia-text  focus:!border-sadia-text-fucus"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </div>
          <Button
            onClick={sent_mesj}
            className="mt-5  mb-10  bg-sadia-text xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm dark:text-white"
            fullWidth
          >
            Jonatish
          </Button>
        </form>
      </div>
      <div className=" absolute  top-[5%]  z-50 right-[5%]">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
