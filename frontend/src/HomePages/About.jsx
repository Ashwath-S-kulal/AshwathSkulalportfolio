import Image from "../Images/1-removebg-preview.png"
export default function About() {
  return (
    <section id="about" className="bg-gray-800 px-6 py-12  text-white mt-5 mx-5 pt-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block pb-1">
          About
        </h2>
        <p className="mt-4 text-white text-justify">
          Hi, I am Ashwath S, currently studying in Computer science Engineering at S D M Institute
          of technology ujire.I am intrested in frontend development. Proactive and versatile professional
          with a dedication to quickly adapting to new challenges. Strong problem-solving abilities and a
          proven track record of fostering strong relationship with clients and team members. Focused on
          supporting team success and achieving positive results. Hardworking employee with customer
          service,multitasking and time management abilities. Devoted to giving every customer a positive
          and memorable experience.My goal is to continuously learn, grow, and contribute to projects that make a difference.
        </p>
      </div>

      <div className="flex flex-col gap-20 md:flex-row">
        <div className="flex justify-center">
          <img
            src={Image}
            className="rounded-lg shadow-lg max-w-64 md:max-w-xs"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Computer Science Engineer
          </h3>
          <p className=" text-white mb-6">
            To contribute my skills and expertise for organizational success, while continuously expanding my abilities and pursuing personal growth within a collaborative and dynamic work environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-white mb-6">
            <p>
              <span className="font-bold">Birthday:</span> 18 sep 2004
            </p>
            <p>
              <span className="font-bold">Age:</span> 21
            </p>
            <p>
              <span className="font-bold">Website:</span>
            </p>
            <p>
              <span className="font-bold">Degree:</span> Engineering
            </p>
            <p>
              <span className="font-bold">Phone:</span> +91 8431294514
            </p>
            <p>
              <span className="font-bold">Email:</span> ashwathkulal2004@gmail.com
            </p>
            <p>
              <span className="font-bold">City:</span> udupi, karnataka
            </p>
            <p>
              <span className="font-bold">Mother tongue:</span> Kannada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
