import Image from "../Image";
import react from "../assets/React-logo-vector-01.svg";
import html from "../assets/HTML-5-logo-vector-01.svg";
import Css from "../assets/CSS-3-logo-vector-01.svg";
import js from "../assets/JavaScript-logo-vector-01.svg";
import motion from "../assets/motion.png";
import check from "../assets/check.png";
import figma from "../assets/Figma-icon-vector-04.svg";
import vsCode from "../assets/Visual_Studio_Code_1.35_icon.svg.png";
import tail from "../assets/Tailwind CSS.png";
import boot from "../assets/Bootstrap.png";
import uniLogo from "../assets/premier_logo.png";
import collageLogo from "../assets/collage.png";
import schoolLogo from "../assets/schoolLogo.png";
import thumb1 from "../../src/assets/thumb1.png";
import thumb2 from "../../src/assets/thumb2.png";
import thumb3 from "../../src/assets/thumb3.png";
import thumb4 from "../../src/assets/thumb4.png";

function Container() {
  return (
    <div className="px-4 sm:px-8 py-8 md:py-20">
      <div className="pl-0 sm:pl-8 pb-12 border-0 sm:border-l-[1px] border-[#393E4E] relative">
        <h2 className="mb-4 md:mb-6 text-center sm:text-start">About Me</h2>
        <div>
          <p className="text-center sm:text-start">
            As a passionate front-end developer, I specialize in crafting
            visually appealing and user-friendly web experiences. With a strong
            foundation in HTML, CSS, and JavaScript, I thrive on turning
            creative designs into responsive, interactive, and high-performing
            websites. I am proficient in modern frameworks like React.js, and I
            enjoy staying up-to-date with the latest trends and technologies in
            web development. My goal is to create seamless, intuitive interfaces
            that not only meet user needs but also elevate the overall digital
            experience. Whether it's optimizing performance, ensuring
            cross-browser compatibility, or collaborating with designers and
            back-end developers, I bring a blend of technical expertise and
            creative problem-solving to every project.
          </p>
        </div>
        <div className="hidden p-2 rounded-full bg-[#2E2E48] sm:inline-block absolute top-[-5px] left-[-17px]">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#C696FC"
            className="w-4 h-4"
          >
            <path
              d="m11.262 2.306c.196-.196.461-.306.738-.306s.542.11.738.306c1.917 1.917 7.039 7.039 8.956 8.956.196.196.306.461.306.738s-.11.542-.306.738c-1.917 1.917-7.039 7.039-8.956 8.956-.196.196-.461.306-.738.306s-.542-.11-.738-.306c-1.917-1.917-7.039-7.039-8.956-8.956-.196-.196-.306-.461-.306-.738s.11-.542.306-.738c1.917-1.917 7.039-7.039 8.956-8.956z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className="pl-0 sm:pl-8 pb-12 border-0 sm:border-l-[1px] border-[#393E4E] relative">
        <h2 className="mb-4 md:mb-6 text-center sm:text-start">Skills</h2>
        <div className="flex justify-center sm:justify-start items-center gap-4 flex-wrap">
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={react} />
            </span>
            <p className="text-[#ACB1C3]">React Js</p>
          </div>
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={html} />
            </span>
            <p className="text-[#ACB1C3]">HTML</p>
          </div>
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={Css} />
            </span>
            <p className="text-[#ACB1C3]">CSS</p>
          </div>
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={js} />
            </span>
            <p className="text-[#ACB1C3]">JavaScript</p>
          </div>
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={motion} />
            </span>
            <p className="text-[#ACB1C3]">Motion</p>
          </div>
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={tail} />
            </span>
            <p className="text-[#ACB1C3]">Tailwind</p>
          </div>
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={boot} />
            </span>
            <p className="text-[#ACB1C3]">Bootstrap</p>
          </div>
        </div>
        <div className="hidden p-2 rounded-full bg-[#2E2E48] sm:inline-block absolute top-[-5px] left-[-17px]">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#C696FC"
            className="w-4 h-4"
          >
            <path
              d="m11.262 2.306c.196-.196.461-.306.738-.306s.542.11.738.306c1.917 1.917 7.039 7.039 8.956 8.956.196.196.306.461.306.738s-.11.542-.306.738c-1.917 1.917-7.039 7.039-8.956 8.956-.196.196-.461.306-.738.306s-.542-.11-.738-.306c-1.917-1.917-7.039-7.039-8.956-8.956-.196-.196-.306-.461-.306-.738s.11-.542.306-.738c1.917-1.917 7.039-7.039 8.956-8.956z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
      <div className="pl-0 sm:pl-8 pb-12 border-0 sm:border-l-[1px] border-[#393E4E] relative">
        <h2 className="mb-4 lg:mb-6 text-center sm:text-start">Tools</h2>
        <div
          className="flex items-center gap-4 mb-8 justify-center
         sm:justify-start"
        >
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={vsCode} />
            </span>
            <p className="text-[#ACB1C3]">Vs Code</p>
          </div>
          <div className="bg-[#2E2E48] flex items-center gap-3 rounded-lg px-5 py-4">
            <span className="w-7 h-7 block">
              <Image addImg={figma} />
            </span>
            <p className="text-[#ACB1C3]">Figma</p>
          </div>
        </div>
        <div className="hidden p-2 rounded-full bg-[#2E2E48] sm:inline-block absolute top-[-5px] left-[-17px]">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#C696FC"
            className="w-4 h-4"
          >
            <path
              d="m11.262 2.306c.196-.196.461-.306.738-.306s.542.11.738.306c1.917 1.917 7.039 7.039 8.956 8.956.196.196.306.461.306.738s-.11.542-.306.738c-1.917 1.917-7.039 7.039-8.956 8.956-.196.196-.461.306-.738.306s-.542-.11-.738-.306c-1.917-1.917-7.039-7.039-8.956-8.956-.196-.196-.306-.461-.306-.738s.11-.542.306-.738c1.917-1.917 7.039-7.039 8.956-8.956z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 block">
              <Image addImg={check} />
            </span>
            Convert Figma designs into functional React components.
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <span className="w-6 h-6 block">
              <Image addImg={check} />
            </span>
            Ensure the cross-device and cross-browser compatibility.
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <span className="w-6 h-6 block">
              <Image addImg={check} />
            </span>
            Build responsive web applications using React.
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <span className="w-6 h-6 block">
              <Image addImg={check} />
            </span>
            Experience with responsive and mobile-first web design.
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <span className="w-6 h-6 block">
              <Image addImg={check} />
            </span>
            Strong problem-solving skills and attention to detail.
          </li>
        </ul>
      </div>
      <div className="pl-0 sm:pl-8 pb-12 border-0 sm:border-l-[1px] border-[#393E4E] relative">
        <h2 className="mb-4 md:mb-6 text-center sm:text-start">Projects</h2>
        <div className="p-2 rounded-full bg-[#2E2E48] hidden sm:inline-block absolute top-[-5px] left-[-17px]">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#C696FC"
            className="w-4 h-4"
          >
            <path
              d="m11.262 2.306c.196-.196.461-.306.738-.306s.542.11.738.306c1.917 1.917 7.039 7.039 8.956 8.956.196.196.306.461.306.738s-.11.542-.306.738c-1.917 1.917-7.039 7.039-8.956 8.956-.196.196-.461.306-.738.306s-.542-.11-.738-.306c-1.917-1.917-7.039-7.039-8.956-8.956-.196-.196-.306-.461-.306-.738s.11-.542.306-.738c1.917-1.917 7.039-7.039 8.956-8.956z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-[#2E2E48] overflow-hidden rounded-xl">
            <a href="https://yourbankcompany.netlify.app/" target="blank">
              <div className="w-full h-fit">
                <Image addImg={thumb1} />
              </div>
            </a>

            <div className="p-4">
              <p className="mb-3">Banking Company Website Template</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <label
                  className="py-1 px-3 rounded-full bg-blue-500 font-medium text-[12px]"
                  htmlFor="label"
                >
                  React
                </label>
                <label
                  className="py-1 px-3 rounded-full bg-blue-500 font-medium text-[12px]"
                  htmlFor="label"
                >
                  Tailwind
                </label>
              </div>
            </div>
          </div>
          <div className="bg-[#2E2E48] overflow-hidden rounded-xl">
            <a href="https://teespaceweb.netlify.app/" target="blank">
              <div className="w-full h-fit">
                <Image addImg={thumb2} />
              </div>
            </a>

            <div className="p-4">
              <p className="mb-3">T-shirt Landing Page Template</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <label
                  className="py-1 px-3 rounded-full bg-blue-500 font-medium text-[12px]"
                  htmlFor="label"
                >
                  React
                </label>
                <label
                  className="py-1 px-3 rounded-full bg-blue-500 font-medium text-[12px]"
                  htmlFor="label"
                >
                  Tailwind
                </label>
              </div>
            </div>
          </div>
          <div className="bg-[#2E2E48] overflow-hidden rounded-xl">
            <a href="https://etravels-o.netlify.app/" target="blank">
              <div className="w-full h-fit">
                <Image addImg={thumb3} />
              </div>
            </a>

            <div className="p-4">
              <p className="mb-3">Travels Website Template</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <label
                  className="py-1 px-3 rounded-full bg-blue-500 font-medium text-[12px]"
                  htmlFor="label"
                >
                  Bootstrap
                </label>
              </div>
            </div>
          </div>
          <div className="bg-[#2E2E48] overflow-hidden rounded-xl">
            <a href="https://aonmarto.netlify.app/" target="blank">
              <div className="w-full h-fit">
                <Image addImg={thumb4} />
              </div>
            </a>

            <div className="p-4">
              <p className="mb-3">Aon mart Landing Page template</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <label
                  className="py-1 px-3 rounded-full bg-blue-500 font-medium text-[12px]"
                  htmlFor="label"
                >
                  Bootstrap
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-0 sm:pl-8 border-0 sm:border-l-[1px] border-[#393E4E] relative">
        <h2 className="mb-4 md:mb-6 text-center sm:text-start">Education</h2>
        <div className="p-2 rounded-full bg-[#2E2E48] hidden sm:inline-block absolute top-[-5px] left-[-17px]">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#C696FC"
            className="w-4 h-4"
          >
            <path
              d="m11.262 2.306c.196-.196.461-.306.738-.306s.542.11.738.306c1.917 1.917 7.039 7.039 8.956 8.956.196.196.306.461.306.738s-.11.542-.306.738c-1.917 1.917-7.039 7.039-8.956 8.956-.196.196-.461.306-.738.306s-.542-.11-.738-.306c-1.917-1.917-7.039-7.039-8.956-8.956-.196-.196-.306-.461-.306-.738s.11-.542.306-.738c1.917-1.917 7.039-7.039 8.956-8.956z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="box bg-[#2E2E48] flex gap-3 xl:gap-5">
            <div className="w-16 h-16">
              <Image addImg={uniLogo} />
            </div>
            <div>
              <h3 className="mb-2 xl:mb-3">Premier University</h3>
              <p>Master of Business Administration (MBA)</p>
              <span className="text-[#ACB1C3]">
                Major: Human Resource Management (HRM)
              </span>
            </div>
          </div>
          <div className="box bg-[#2E2E48] flex gap-3 xl:gap-5">
            <div className="w-16 h-16">
              <Image addImg={uniLogo} />
            </div>
            <div>
              <h3 className="mb-2 xl:mb-3">Premier University</h3>
              <p>Bachelor of Business Administration (BBA)</p>
              <span className="text-[#ACB1C3]">Major: Management (MGT)</span>
            </div>
          </div>
          <div className="box bg-[#2E2E48] flex gap-3 xl:gap-5">
            <div className="w-16 h-16">
              <Image addImg={collageLogo} />
            </div>
            <div>
              <h3 className="mb-2 xl:mb-3">
                Dewan Hat City Corporation College
              </h3>
              <p>Higher Secondary Certificate (HSC)</p>
              <span className="text-[#ACB1C3]">Major: Business Study</span>
            </div>
          </div>
          <div className="box bg-[#2E2E48] flex gap-3 xl:gap-5">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image addImg={schoolLogo} />
            </div>
            <div>
              <h3 className="mb-2 xl:mb-3">Khaja Ajmeri KG & High School</h3>
              <p>Secondary School Certificate (SSC)</p>
              <span className="text-[#ACB1C3]">Major: Business Study</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
