

const Banner = () => {
    return (
        <div>
           
<div className="bg-white dark:bg-gray-800 dark:text-gray-100">
  <div
    className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-32 xl:max-w-7xl"
  >
    <div className="flex items-center text-center lg:text-left">
      <div className="space-y-8">
        
        <div>
          <div
            className="mb-1 text-xl font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500"
          >
            Hello
          </div>
          <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
            I am Shajada 
            <span className="text-blue-600 dark:text-blue-500">Nirob</span>
          </h2>
          <h3
            className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300"
          >
            Inspiring results from day one without the pain. Get your own custom
            dashboard and start building amazing services.
          </h3>
        </div>
        

        
        <div>
          <a
            href="../../../public/Shajada.pdf"
            download
            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
          >
            <svg
              className="hi-mini hi-plus-circle inline-block h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span>DownLoad My Resume</span>
          </a>
          
        </div>
      
      </div>
    </div>
    <div className="flex items-center text-blue-500 lg:justify-end">
      <img className="w-[70%]" src="https://i.ibb.co/vmcZJc9/pink-gradient-designify.png" alt="" />
    </div>
  </div>
</div>


        </div>
    );
};

export default Banner;