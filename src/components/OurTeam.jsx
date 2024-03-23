
const OurTeam = () => {
  return (
    <>
    <section className="our-team">
        <div className="container">
            <div className="row">
              {
                team.map((item)=>(
                    <div className="col-md-4" key={item.id}>
                    <div className="our-team-item">
                        <div className="our-team-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="our-team-content">
                            <h2>{item.name}</h2>
                            <p>{item.designation}</p>
                        </div>
                    </div>
                </div>
                ))
              }
            </div>
        </div>
    </section>
    </>
  )
}

export default OurTeam;

const team=[
    {
        id:1,
        img:'/assets/images/team-1.jpg',
        name:'Kristin Watson',
        designation:'web Designer',

    },
    {
        id:2,
        img:'/assets/images/team-1.jpg',
        name:'Kristin Watson',
        designation:'web Designer',

    },
    {
        id:3,
        img:'/assets/images/team-1.jpg',
        name:'Kristin Watson',
        designation:'web Designer',

    },
]