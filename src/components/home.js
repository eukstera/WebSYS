import {ConvertGoogleDriveLinkToDirectURL as convert}  from "./external_fcuntions.js"

// https://drive.google.com/uc?id=1kgUen6PFDMiC3jFgBFbvjganQX9nsfEg
//https://drive.google.com/file/d/1kgUen6PFDMiC3jFgBFbvjganQX9nsfEg/view?usp=sharing

const get_drive_profile = "https://drive.google.com/file/d/1kgUen6PFDMiC3jFgBFbvjganQX9nsfEg/view?usp=drive_link"
const drive_profile = convert(get_drive_profile);



export default function Home()
{
    return(
        <>
 
                <section>
                    <div className="container pt-5 pb-3  mt-5 border border-start-0 border-end-0 border-primary border-3 text-white ">

                        <div id="Home-mainContent"className="row">
                
                    
                            <div style={{width:"300px"}} className=" col-xl-3   " >
                                <img 
                                className=""
                                style={{   width: "100%", padding: '20px 0px 0px 10px'}}
                                src= {drive_profile}
                                alt="Profile Picture"/>
                            </div>
                            
                    
                    
                    
                    

                            <div className=" col-xl-9 ">
                                <h1
                                style={{fontFamily: "'Monofett', monospace", paddingTop: "2vh"}}>Websystems 3 Group 2 XD</h1>
                            
                                <div className="border border-start-0 border-top-0 border-info  ">
                                    <p
                                     style={{fontSize: "25px", fontFamily: "Arial, Helvetica, sansSerif"}}>
                                        {/* Home Content Text Here */}
                                        We Are The <b>Group 2</b> BSIT 3F Students Currently Sudying in EVSU 
                                        (Eastern Visayas State University)
                                    </p>
                                </div>
                            </div>

                    
                        </div>
                    </div>
                </section>
       
            
        </>
    );
}