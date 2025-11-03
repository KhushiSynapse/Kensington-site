import React from "react"
import Linkedin from '../../assets/linkedin.svg'
import picture1 from '../../assets/picture1.png'
import picture2 from '../../assets/picture2.png'
import picture3 from '../../assets/picture3.png'
import picture4 from '../../assets/picture4.png'
import './team.css'

const Team=()=>{
  const TeamMembers=[{name:"Tim Bealert",
                    role:"Partner",
                    mail:"tbealert@ki-search.com",
                    img:picture1},
                    {name:"MaryJane Schermer",
                    role:"Partner",
                    mail:"mjschermer@ki-search.com",
                    img:picture2},
                    {name:"Steve Goering",
                    role:"Partner",
                    mail:"sgoering@ki-search.com",
                    img:picture3},
                    {name:"Andy Wolkstein",
                    role:"Partner",
                    mail:"awolkstein@ki-search.com",
                    img:picture4},


                   
]
    return(
      <section className="team-section">
        
        <div className="content-box">
            <p className="text1">Our Team</p>
            <p className="text2">Culture derived from hard-work,collaboration, and service</p>
</div>

<div className="cards">
  <div className="row">
      {TeamMembers.map((members,index)=>(
    <div className="person" key={index}>
   <img src={members.img} alt={members.name} className="image"/>
   <div className="overlay">
    <button>See Full Bio</button>
  </div>
   <div className="frame1" >
    <div className="container">
      <p className="name">{members.name}</p>
      <div className="frame2">
        <div className="frame3">
         <p className="p1">{members.role}</p>
         <p className="p2">{members.mail}</p>
        </div>
        <div className="logo">
          <img src={Linkedin} alt={Linkedin}/>
        </div>
      </div>
    </div>

   </div>
        </div>
      ))}

    </div>
     
  </div>

</section>

    )}
export default Team;