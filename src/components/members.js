//import '../components-css/members.css';

export default function Members(){
    return(
        <>
           
<div class="  container-fluid">
  <div class=" border  border-info border-start-0 border-end-0 row row-cols3 p-5 ">

        <div class="  card bg-dark text-white border border-light col-sm-12 col-md-3 col-lg-2  " >
              <img src="https://drive.google.com/uc?id=1kgUen6PFDMiC3jFgBFbvjganQX9nsfEg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Euky Abria</h5>
                <p class="card-text">Project Leader<br></br> Age: 21 <br></br> Birthdate: March 16, 2002 </p>

                {/* Get Link from Database */}
                <a target="_blank" href="https://www.facebook.com/eukstera" class="  btn btn-primary stretched-link">
                <div className="row">
                  <i class="bi bi-facebook col-3" style={{fontSize: "1.5rem", color: "white"}}></i> 
                  <p className="align-middle  pt-1 col-9 ">Facebook</p>
                </div>
              
                 
                </a>
              </div>
        </div>

        

    

  </div>
</div>

          

        
       
        </>
    );
}

