
// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// import axios from "axios";

const posts = document.querySelector('#posts');

function getPosts() {
    axios.get('http://localhost:3000/posts')
        .then(response => {
            console.log(response);
            const result = response.data.map(post => {
                return /*html*/`
                    <tr class="">  
                        <td><p class="">${post.id}</p></td> 
                        <td><img src="${post.image}" width="100px" class="card-img-top"></td>
                        <td><p class="">${post.price}</p></td>
                        <td><p class="">${post.title}</p></td>
                        <td><p class="">${post.description}</p></td>
                        <td><button onclick="removePost('${post.id}')" class="text-green-500">Delete</button>
                            <a href="./edit-product.html?id=${post.id}" class="text-red-500">Edit</a>

                        </td>  
                    </tr>
               
        `
            }).join("");
            posts.innerHTML = result;
        });
}
function removePost(id) {
   axios.delete(`http://localhost:3000/posts/${id}`)
    .then(response =>console.log(response));
    
}
getPosts();

// <div class="col-4">
// <div class="">
//     <img src="${post.image}" alt="">
//     <h5>${post.title}</h5>
//     <h2>Getting started with Tailwind CSS </h2>
//     <a href="./product-detall.html?id=${post.id}" >Submit.</a>
// </div>
// </div>



