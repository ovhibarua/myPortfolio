import Image from "../Image";
import avater from "../../src/assets/ovhi.jpg";
import bangla from "../../src/assets/bangladesh.png";
import eng from "../../src/assets/united-kingdom.png";
import hindi from "../../src/assets/india.png";
function Aside() {
  return (
    <div className="w-full md:w-84 px-4 py-8 sm:px-8 bgImage">
      <div className="pb-8 border-b-[1px] border-[#393E4E] mb-8 flex flex-col items-center md:items-start">
        <div className="overflow-hidden rounded-full w-30 h-30 mb-6">
          <Image addImg={avater} />
        </div>
        <h1 className="mb-2">Ovhi Barua</h1>
        <h2 className="bg-gradient-to-r mb-6 from-[#A478E8] to-[#516CF7] bg-clip-text text-transparent">
          Front End Developer (React)
        </h2>
        <h3 className="text-[#D9DFE8] text-center md:text-start leading-6">
          "Code is my art, <br /> The web is my canvas."
        </h3>
      </div>
      <div className="pb-8 border-b-[1px] border-[#393E4E] mb-8">
        <div className="flex justify-center md:justify-start items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#2E2E48] md:inline-block overflow-hidden rounded-full hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#E2E6EE"
            >
              <path d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z" />
            </svg>
          </div>
          <div>
            <span className="text-[#ACB1C3] text-center md:text-start w-full block">
              Email
            </span>
            <p>ovhibarua1995@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#2E2E48] hidden md:inline-block overflow-hidden rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#E2E6EE"
            >
              <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
            </svg>
          </div>
          <div>
            <span className="text-[#ACB1C3] text-center md:text-start block">
              Phone
            </span>
            <p>01627377020</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-3">
          <div className="p-2.5 bg-[#2E2E48] hidden md:inline-block overflow-hidden rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#E2E6EE"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
          </div>
          <div>
            <span className="text-[#ACB1C3] block text-center md:text-start">
              Address
            </span>
            <p>Chittagong, Bangladesh</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center md:justify-start items-center gap-3 mb-5">
          <div className="w-10 h-10 hidden md:block">
            <Image addImg={eng} />
          </div>
          <div>
            <p className="text-center md:text-start">English</p>
            <span className="text-[#ACB1C3]">Professional working</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-3 mb-5">
          <div className="w-10 h-10 hidden md:block">
            <Image addImg={bangla} />
          </div>
          <div>
            <p className="text-center md:text-start">Bangla</p>
            <span className="text-[#ACB1C3]">Professional working</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-3">
          <div className="w-10 h-10 hidden md:block">
            <Image addImg={hindi} />
          </div>
          <div>
            <p className="text-center md:text-start">Hindi</p>
            <span className="text-[#ACB1C3]">Professional working</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
