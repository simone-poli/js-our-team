const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
//console.log(teamMembers)
const rowEl = document.querySelector(".row");








function memberMarkUp(teamMembers){
  const { name, role, email, img } = teamMembers;
    console.log (name, role, email, img)
  
  
  const markUp = `
  <div class="col">
  <div class="card">
      <img src="img/${img}" alt="card-img-top">
      <div class="card-body">
          <h3> ${name}</h3>
          <div> ${role}</div>
              <address> ${email}</address>
      </div>
  </div>
  </div>`
              return markUp
            }
            
            function insertTeam (teamMembers, nodeEl){
              
              nodeEl.innerHTML = ''
              
              for ( let i = 0; i < teamMembers.length; i++){
                let members = teamMembers[i];
                const markUp = memberMarkUp(members) 
                console.log(markUp)
                
                members += markUp
              }
            }
            
insertTeam(teamMembers, rowEl)