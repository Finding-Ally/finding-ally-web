export default function Explore() {
  return (
    <div className="w-full pl-[91px] h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="w-full bg-gray-900">
        <div class="px-10 py-3">
          <h1 class="text-2xl font-bold text-white">Find your Ally</h1>
        </div>
    </div>
        <div class="grid grid-cols-2 gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://cdn5.vectorstock.com/i/1000x1000/52/89/colorful-circle-logo-template-abstract-vector-22775289.jpg" alt=""/>
        </div>
        <div class="grid grid-rows-3 gap-4">


        <div class="bg-white rounded-lg shadow-xl border border-black p-8 w-full mt-4">
                <div class="mb-4">
                  <h1 class="font-semibold text-gray-800">Your Allies</h1>
                </div>
                <div class="flex justify-start items-start mb-2">
                  <div class="w-1/5">
                    <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
                  </div>
                  <div class="w-4/5 flex justify-between">
                      <span class="font-semibold text-gray-800">Ezio Dani</span>
                      <div>
                      <a href="" class="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg">Accept</a>
                      <a href="" class="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg">Decline</a></div>
                  </div>
                </div>
                <div class="flex justify-start items-start mb-2">
                  <div class="w-1/5">
                    <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
                  </div>
                  <div class="w-4/5 flex justify-between">
                      <span class="font-semibold text-gray-800">Ezio Dani</span>
                      <div>
                      <a href="" class="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg">Accept</a>
                      <a href="" class="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg">Decline</a></div>
                  </div>
                </div>
                <div class="flex justify-start items-start mb-2">
                  <div class="w-1/5">
                    <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
                  </div>
                  <div class="w-4/5 flex justify-between">
                      <span class="font-semibold text-gray-800">Ezio Dani</span>
                      <div>
                      <a href="" class="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg">Accept</a>
                      <a href="" class="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg">Decline</a></div>
                  </div>
                </div>
                <div class="flex justify-start items-start mb-2">
                  <div class="w-1/5">
                    <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
                  </div>
                  <div class="w-4/5 flex justify-between">
                      <span class="font-semibold text-gray-800">Ezio Dani</span>
                      <div>
                      <a href="" class="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg">Accept</a>
                      <a href="" class="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg">Decline</a></div>
                  </div>
                </div>
                
              </div>


              <div class="bg-white  rounded-lg shadow-xl border border-black p-8 w-full">
                
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Waiting List:</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li class="flex items-center">
                        <svg class="w-4 h-4 mr-1.5 text-blue-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        At least 10 characters
                    </li>
                    <li class="flex items-center">
                        <svg class="w-4 h-4 mr-1.5 text-blue-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        At least one lowercase character
                    </li>
                    <li class="flex items-center">
                        <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        At least one lowercase character
                    </li>
                    <li class="flex items-center">
                        <svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        At least one lowercase character
                    </li>
                </ul>

              </div>

             


            <img class="h-auto max-w-full rounded-lg" src="/3.jpeg" alt=""/>
        </div>
      </div>
    </div>
  );
}
