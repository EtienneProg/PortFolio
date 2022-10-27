/* typing animation */
var typed = new Typed(".typing",{
      strings:["Autonome","Créatif","Logique","Curieux","Rigoureux","Dynamique","Motivé"],
      typeSpeed:100,
      BackSpeed:60,
      loop:true
})
/** aside responsive */
/*navbar select*/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

      for(let i=0; i<totalNavList; i++)
      {
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function()
            {     
                  var valid = false
                  removeBackSection();
                  for(let j=0; j<totalNavList; j++)
                  {
                        
                        if(navList[j].querySelector("a").classList.contains("active"))
                        {
                              addBackSection(j);
                              valid = true;
                              
                              //allSection[j].classList.add("back-section")
                        }                        
                        navList[j].querySelector("a").classList.remove("active")
                  }
                  
                  if(!valid){
                        for(let o=5; o<totalSection; o++){
                              if(allSection[o].classList.contains("active"))
                              {
                                    addBackSection(o);
                                          
                              } 
                        }
                  }
                  
                  this.classList.add("active") ;
                  showSection(this);
                  if(window.innerWidth < 1200)
                  {
                        asideSectionTogglerBtn();
                  }
            });
      }


      function removeBackSection()
      {
            for(let i=0;  i<totalSection; i++)
            {
                  allSection[i].classList.remove("back-section")
            }
      }
      function addBackSection(num)
      {
            allSection[num].classList.add("back-section")
      }
      function showSection(element)
      {
            for(let i=0;  i<totalSection; i++)
            {
                  allSection[i].classList.remove("active")
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector('#' + target).classList.add("active")
      }

      function updateNav(element)
      {
            
            for(let i=0; i<totalNavList; i++)
            {
                  navList[i].querySelector("a").classList.remove("active");
                  const target = element.getAttribute("href").split("#")[1];
                  if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                  {
                        navList[i].querySelector("a").classList.add("active");
                  }
            }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
            const sectionIndex = this.getAttribute("data-section-index");
            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
      });
      document.querySelector(".suite").addEventListener("click", function()
      {
            const sectionIndex = this.getAttribute("data-section-index");
            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
      });

      /* portfolio item page start */
      const portfolioItem = document.querySelectorAll(".itemport")

      for(let i=0; i<portfolioItem.length; i++)
      {
            portfolioItem[i].addEventListener("click", function()
            {
                  const sectionIndex = this.getAttribute("data-section-index");
                  showSection(this);      
                  updateNav(this);
                  removeBackSection();
                  addBackSection(sectionIndex);
            });
      }



      const buttonBack = document.querySelectorAll(".btn-back")
      for(let i=0; i<buttonBack.length; i++)
      {
            buttonBack[i].addEventListener("click", function()
            {
                  const sectionIndex = this.getAttribute("data-section-index");
                  showSection(this);      
                  updateNav(this);
                  removeBackSection();
                  addBackSection(sectionIndex);
            }); 
      }

      /* portfolio item page end */

      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () =>
            {
                  asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                  aside.classList.toggle("open");
                  navTogglerBtn.classList.toggle("open");
                  for(let i=0; i<totalSection; i++)
                  {
                        allSection[i].classList.toggle("open");
                  }
            }

      /* Message Send */

      function sendEmail()
      {
            var params = {
                  object_id : document.getElementById('objet').value,
                  from_name : document.getElementById('name').value,
                  email_id : document.getElementById('email').value,
                  message : document.getElementById('msg').value
            }
            emailjs.send("service_ddcx6qf", "template_76j9eb7", params).then(function(res)
            {
                  alert("Success ! Message envoyé");
            });
      }
