var userName=document.getElementById("searchName");
var button=document.querySelector(".btn");
var card=document.querySelector(".card");
// var URL="https://api.github.com/users/";
button.addEventListener("click",()=>
{
    // console.log(userName.value);
    showGithubUser();

})

const createUserCard=function(user)
{
    const cardHtml=`

    <div class="row g-0">
    <div class="col-md-4">
      <img src="${user.avatar_url}" class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col-md-8 user-info">
      <div class="card-body">

          <h2>${user.name}</h2>
          <p>${user.bio}</p>
          <ul>
              <li>${user.followers}<strong> Following</strong></li>
              <li>${user.following}<strong> Follower</strong></li>
              <li>${user.public_repos}<strong> Repositories</strong></li>
          </ul>
        

      </div>
    </div>
  </div>



    `;
    card.innerHTML=cardHtml
    
}

const showerror=function()
{
    const error=`
    <h1>User Not Found</h1>
    `;
    card.innerHTML=error;
}

var showGithubUser=async function()
{
    try {

        let URL="https://api.github.com/users/"+userName.value;
        var res=await fetch(URL);


        if (res.status !== 200) {
            showerror();
        } else {
            const data = await res.json();
            createUserCard(data);
            
        }




    }
     catch (error) {

        console.log("No profile");
    }
    
}