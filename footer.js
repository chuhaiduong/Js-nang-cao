// const { default: axios } = require("axios");

const footer = document.querySelector('#footer');

function getPosts() {
    axios.get('http://localhost:3000/posts')
    .then(response =>{
        console.log(response);
        const result = response.data.map(post =>{
            return /*html*/`
            <footer class="container mx-auto bg-white py-8 border-t border-gray-400">
                    <div class="container flex px-3 py-8 ">
                        <div class="w-full mx-auto flex flex-wrap">
                            <div class="flex w-full lg:w-1/2 ">
                                <div class="px-3 md:px-0">
                                    <h3 class="font-bold text-gray-900">About</h3>
                                    <p class="py-4">
                                    </p>
                                </div>
                            </div>
                            <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                                <div class="px-3 md:px-0">
                                    <h3 class="font-bold text-gray-900">Social</h3>
                                    <ul class="list-reset items-center pt-3">
                                        <li>
                                            <a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">Add social links</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            `
        }).join("");
        footer.innerHTML = result;
    });
}
getPosts();