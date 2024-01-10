import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Link as LinkPage} from 'react-router-dom' ;

import { Link, animateScroll as scroll } from "react-scroll";



class App extends React.Component {
  
  render (){
    return (
    <Router>  
      <Switch>

      <div className="App">
        <section id = "nav-bar">  
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img className = "logoImg" style = {{"padding": "0.3em"}} src = "img/logo.png"/>            
              <img className = "logoImg" style = {{"padding": "0.3em"}} src = "img/logo_new.png"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="about" spy={true} smooth={true} offset={-70} duration={500} > About Us </Link>   
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="services" spy={true} smooth={true} offset={-70} duration={500} > Our Services </Link>                  
                </li>                                              

                <li className="nav-item">
                  <Link className="nav-link" to="real cases" spy={true} smooth={true} offset={-70} duration={500} > Real Cases </Link>                       
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="contact" spy={true} smooth={true} offset={-70} duration={500} > Contact Us </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>


        <div id="slider">

          <div id="headerSlider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/banner.jpg" className="d-block w-100" alt="..." style={{ paddingLeft: "0em", paddingRight: "0em", width: '80vw' }}/>
                  <div className="carousel-caption">              
                  </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>


        <section id = "about">
          <div className="container">
            <div className="row">
              <div className = "col-md-6">
                <h2> About the Doctor</h2>
                <div className = "about-content"> 
                Dr Ellen Zhao is a senior medical practitioner specialised in treating various health issues using Traditional Chinese Medicine. She got her first bachelor degree in Western Medicine in China Medicine University and her second bachelor and Master degree in Chinese Medicine in Western Sydney University. She has worked in the big medical university and hospitals for 15 years in China and in physiotherapy clinic for 5 years in Australia. She is also one of the first registered practitioners of Chinese Medicine Board. After many years’ training and practice in both Western Medicine and Chinese Medicine, Dr Ellen Zhao formed her own unique treatment philosophy and methodology. She can thus make accurate diagnosis and maximise the power of various TCM treatments methods, which is impossible for most of other Chinese medicine practitioners. 
                <ul style={{paddingTop: "1em", paddingLeft: "1em"}}>
                    <li>Accredited Chinese Medicine Practitioner (AHPRA) as Acupuncturist, Chinese herbal medicine practitioner: CMR0001892410</li>
                    <li>Bachelor of Medicine (China Medical University, China)</li> 
                    <li>Bachelor of Health Science / Master of Traditional Chinese Medicine (UWS, Australia)</li> 
                    <li>ATMS (Australian Traditional Medicine Society): 28266</li>                                                                                                                                      
                </ul>                 
                </div>

              </div>
                <div className = "col-md-6 skills-bar">
                 <img src="img/xiufang_zhao.jpg" className="d-block w-100" style = {{paddingTop: "0em"}} alt="..." /> 
              </div>
            </div>

          </div>
        </section>

        <section id="services" style={{backgroundImage: "url(img/our_services_background.jpg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"}}>
          <div className="container">     
            <h1>Our Services</h1>
            <div className="row services">
              <div className="col-md-4 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>            
                </div>
                <LinkPage to= '/aireal'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> Acupuncture </h3> </button></LinkPage>
                <p> Affects whole body and local area, related Qi channel and the organ system </p>

              </div> 

              <div className="col-md-4 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>

                <LinkPage to= '/aieye'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> Blood Letting </h3> </button></LinkPage>
                <p> A quick and effective treatment for heat and toxicing problems
   
                </p>

              </div> 


              <div className="col-md-4 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>
                <LinkPage to= '/aiwriter'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> Herbal Medicine </h3> </button></LinkPage>

                <p> Individualised prescriptions made from traditional herbs. 
                </p>
              </div> 

              <div className="col-md-6 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>
                <LinkPage to= '/'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> Herb Teabag </h3> </button></LinkPage>

                <p> Small dose, fast effect, suitable for any ages.
                </p>

              </div> 


              <div className="col-md-6 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>
                <LinkPage to= '/'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h3> Cupping </h3> </button></LinkPage>

                <p> Helps to promote the circulation and eliminate toxin
                </p>

              </div> 

            </div>
          </div>
        </section>



          <section id="project">

            <div className="container" >

              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                <h2> Acupuncture </h2>
                <div className = "project-content"> 
                Acupuncture is one of the most effective methods in treating various health problems and the key component of traditional Chinese medicine. It normally involves the insertion of fine, sterile acupuncture needles into specific sites/acupuncture points on the body. According to Chinese Medicine theory, human body is a complex system with channel networks linking organs. The ancient classic, Nei Jing states: the function of the channel is to transport the Chi and blood and circulate yin and yang to nourish the body. Acupuncture regulates the flow of Chi and blood through the channels, harmonises the exchanges between the organs and the tissues, expels external pathogens and restores the balance of yin and yang in the body.            
                </div>

              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/acupuncture.jpg" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em", paddingLeft: "0em"}}/>  
                  </div>

              </div>
                

              </div>

              <div className="row  project-showcase">
                <div className = "col-md-6">
                <h2> Blood Letting </h2>
                <div className = "project-content"> 
                Blood letting is a specific treatment technique of acupuncture. It involves  piercing a vein or small artery at the tip of the body-finger tips, toes, or top of the ears. According to TCM theory, a few drops of blood let out from one or more peripheral points by quickly stabbing the skin with a lance can significantly dredge the channels and collaterals. It can be very effective for curing heart diseases, hypertension and all hot conditions. To some patients, the treatment process of bleeding needling may seem strange and a little bit scary. We will thoroughly explain the procedure to the patient before the treatment and conduct it in the most professional and safe way.             
                </div>


              </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                  <img src="img/bleeding_needling.jpg" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em", paddingLeft: "0em"}} />  
                  </div>

              </div>
                

              </div>

              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                  <h2> Herbal Medicine </h2>
                  <div className = "project-content"> 
                    Herbal medicine prescriptions are individualised and cater for all diseases and illnesses. A typical formula or prescription is made up of 8 or more herbs that are specifically matched to treat the patient’s individual health problems. Formulas are prescribed in such a way to eliminate any toxicity that many occur and to maximise treatment outcomes for patients. Traditionally prescriptions are given to patients as raw herbs; this service is available to you if you would like to experience the “traditional” way of taking herbs. You may also take the herbs in the forms of pearl, capsule, powder and teabag, which are particularly helpful for those who are busy or dislike the taste of herbs.                               
                  </div>

                </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                    <img src="img/chinese_medicine.jpg" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em", paddingLeft: "0em"}}/>  
                  </div>

                </div>
                
              </div>

              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                  <h2> Herb Teabag </h2>
                  <div className = "project-content"> 
                    Recently we developed a new form of herb medicine treatment - Herb Teabag. It normally consists of four or five  traditional Chinese medicine herbs and the total amount of each dose is about 2-3 grams. You can simply put the herb teabag into a cup of water and take it as tea or coffee. The treatment mechanism behind the herb teabag medicine is to focus on the overall body condition, to restore the physiological functions of the human body, to balance the pathological regulation, and thus finally to cure the diseases. The herb teabag is suitable for various of illnesses from common cold to serious cancers. It can also be used for the purpose of heath care and preventing potential illness.                              
                  </div>

                </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                    <img src="img/teabag.jpg" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em", paddingLeft: "0em"}}/>  
                  </div>

                </div>
                
              </div>

              <div className="row  project-showcase">
                <div className = "col-md-6 project-showcase">
                  <h2> Cupping </h2>
                  <div className = "project-content"> 
                    Cupping is a classic Chinese Medicine treatment method which can help to promote the circulation and eliminate toxins from the body. During the treatment, Air is drawn out of the glass cups to create a vacuum when placed on the skin. The cups can be placed over dedicated acupuncture points, and/or on painful areas or knots. It is particularly usefully when the Chi is blocked at certain points or when it needs to be drawn out to the surface from deeper muscles. Cupping is commonly used in conjunction with an acupuncture treatment, although may be used alone for those with an aversion to needles. The cupping is effective, particularly in the musculoskeletal pain.                            
                  </div>

                </div>

                <div className = "col-md-6">
                  <div className = "project-img"> 
                    <img src="img/cupping.jpg" className="img-responsive" style = {{paddingRight: "10em", paddingBottom: "2em", paddingLeft: "0em"}}/>  
                  </div>

                </div>
                
              </div>

            </div>
          </section>

          <section id="services" style={{backgroundImage: "url(img/our_services_background.jpg), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))"}}>
          <div className="container">     
            <h1>What we can treat</h1>
            <div className="row services">
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>            
                </div>
                <LinkPage to= '/data-scraping'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Internal medicine </h4> </button></LinkPage>
                <p> Common cold, asthma, IBS, diarrhoea, diseases of liver, gallbladder, heart and kidney, myasthenia syndrome, fibromyalgia syndrome. </p>

              </div> 


              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>

                <LinkPage to= '/data-visualization'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Surgery </h4> </button></LinkPage>
                <p> Various musculoskeletal pain, sciatica pain, frozen shoulder, diabetic foot, varicose veins, arthritis and osteoarthritis.  
                </p>
              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Pediatrics </h4> </button></LinkPage>
                <p> ADHA, ADD, constipation, diarrhoae, asthma, bed-wetting, child drooling, food intolerance, abdomenal parasite.   
                </p>

              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>      
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Gynaecology </h4> </button></LinkPage>
                <p> Menstrual disorders, endometriosis, PCOS, PID, low libido, menopause, morning sickness,Infertility and recurrent miscarriage, IVF support.  
                </p>

              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Immunology </h4> </button></LinkPage>
                <p> Chronic fatigue and tiredness, hayfever, gout, pheumatoid arthritis.  
                </p>

              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Endocrinology </h4> </button></LinkPage>
                <p> Diabetes, obesity, hyper and hypo-throid, high cholesterol.Dermatology: Eczema, rashes, allergies, psoriasis,shingles,dermatophytosis, onychomycosis,and subcutaneous lipoma 
                </p>

              </div> 


              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Emotional disorders </h4> </button></LinkPage>
                <p> Stress, anxiety, depression, addiction, smoking.  
                </p>

              </div> 

              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user-md"></i>          
                </div>

                <LinkPage to= '/machine-learning'><button type="button" className = "btn btn-primary" style = {{'backgroundColor': 'Transparent', 'outline':'none', 'border': 'none'}}> <h4> Neurology </h4> </button></LinkPage>
                <p> Headache, migraine, dizziness, insomnia, toothache, bell’s palsy, facial paralysis, trigeminal neuralgia.
                </p>

              </div>                             

            </div>
          </div>
        </section>


          <section id="real cases">

            <div className="container">
              <h1 style = {{paddingBottom: "1em", paddingTop: "3em"}}>Real Cases</h1>
              <div className="row  project-showcase" style = {{paddingBottom: "5em"}}>
                <div className = "col-md-12 project-showcase">
                  <h2> Case one (Initial consultation at 2/12/2016) </h2>
                  <div className = "project-content"> 
                    The patient (female, 13 years old) has severe facial acne and the situation has worsened significantly over the past six months. Other symptoms and signs were menstrual pain, cold hands and feet, and easy to irritate. After eating our herb tea bags for only two weeks, her mother returned to our clinic to let us know that all the acne had been solved. After continually  taking another 2 weeks of herbs, her hands and feet become warm and her period are not painful anymore. Her mother said she could concentrate on her school work and become much happier. After hearing her story, many of her same school's boys and girls who suffer from acne come to see us and accept satisfied treatments.            
                  </div>
                </div>
                

              </div>

              <div className="row  project-showcase" style = {{paddingBottom: "5em"}}>
                <div className = "col-md-12">
                <h2> Case two (Initial consultation at 25/2/2017) </h2>
                <div className = "project-content"> 
                  The patient (male, 59 years old) has suffered from dizziness, tonsil pain, and more than 10 years' trigerinal pain. In the last 3 months, his trigeminal neuralgia seriously affect his sleep and normal work. He lost  two tooths and has to take 5 medicines per day. Furthermore, he has to sleep on the bed with 30-degree angle more than 20 years, otherwise the food will flow back into the mouth in the morning because stomach reflux. After 2 months treatment, the symptoms of dizziness, tonsil pain, trigerinal pain disappeared, and his complexion had improved significantly. After 6 months treatment, the problem of stomach reflux was resolved.             
                </div>

              </div>

              </div>

              <div className="row  project-showcase" style = {{paddingBottom: "5em"}}>
                <div className = "col-md-12 project-showcase">
                  <h2> Case three (Initial consultation at 28/10/2017) </h2>
                  <div className = "project-content"> 
                    The patient (female, 49 years old) had been diagnosed with liver cancer. Her liver ultrasound report showed showed a solid hyperechoic lesion in 2 segments with a size of 6 x 3.4 x 5.4 cm, which seems like a cancer scar. After 7 months' treatments of acupuncture and herbs teabag, she haematology and urine results were all normal and tumor did not growth anymore. Now she comes to see us every week and takes herb every day to consolidate the conditions.                             
                  </div>

                </div>
                
              </div>

              <div className="row  project-showcase" style = {{paddingBottom: "5em"}}>
                <div className = "col-md-12 project-showcase">
                  <h2> Case four (Initial consultation at 29/9/2018) </h2>
                  <div className = "project-content"> 
                    The patient (female, 29 years old) has hypothyroidism problem. In the past six months, she developed the following symptoms: severe fatigue, cold tolerance, and severe sleepiness. Her blood tests showed TSH: 76 mTU / L (normal range 0.5-4.0), FT4: 5.2 pmol / L (normal range: 10-20), FT3: 3.0 pmol / L (normal range 3.5-6.0). After 11 weeks' treatment, the patient felt that her energy returned to normal; her skin color and spirit was was good;  and all signs of blood loss disappeared. The latest medical report showed TSH: 2.3mTU / L, FT4: 14 pmol / L, FT3: 4.8pmol / L. Even her general practitioner is very happy with these results.                              
                  </div>

                </div>
                
              </div>

              <div className="row  project-showcase" style = {{paddingBottom: "1em"}}>
                <div className = "col-md-12 project-showcase">
                  <h2> Case five (Initial consultation at 26/6/2019) </h2>
                  <div className = "project-content"> 
                    The patient (female, 69 years old)  had left chest pain from a rib fracture caused by bone osteogenesis 9 months ago. She came to see us following her colleague's recommendation. She couldn't fall asleep because of left chest pain. She felt extremely drowsy, headache, sleepy during the day, and was difficult to concentrate. Therefore, her energy is extremely low and can not work. She cannot take Western Medicine , so she decided to try TCM. After taking only two weeks of powdered herbs and three times acupuncture treatments, her chest pain completely disappeared. Further treatments are still going on to completely solve her osteophoreses problem.                             
                  </div>

                </div>
                
              </div>

            </div>

          </section>


          <section id="testimonials" >
            <div className="container">
              <h1  style = {{paddingBottom: "1em"}}> What does customers say about us? </h1>
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="img/testimonial.jpg" className="user" />
                    <p> As an adult with ADHD, I was suffering from the side effects of prescribed medication. Ellen instead treated me with herbs and acupuncture and by 5 months, I began experiencing for the first time, prolonged focus over long periods while reading and writing. I also did not experience any side effects. Amazing!  </p>        

                  </div>
                  
                </div>

              <div className="col-md-4 text-center">
                <div className="profile">
                    <img src="img/testimonial.jpg" className="user" />
                    <p> As an adult with ADHD, I was suffering from the side effects of prescribed medication. Ellen instead treated me with herbs and acupuncture and by 5 months, I began experiencing for the first time, prolonged focus over long periods while reading and writing. I also did not experience any side effects. Amazing!  </p>        

                  </div>
                  
                </div>

              <div className="col-md-4 text-center">
                  <div className="profile">
                    <img src="img/testimonial.jpg" className="user" />
                    <p> As an adult with ADHD, I was suffering from the side effects of prescribed medication. Ellen instead treated me with herbs and acupuncture and by 5 months, I began experiencing for the first time, prolonged focus over long periods while reading and writing. I also did not experience any side effects. Amazing!  </p>        
                  </div>
                  
                </div>                  
              </div>
            </div>
          </section>


          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4">
                  <h5> Chinese Herbs and Acupuncture </h5>
                  <p>80 Cecil Avenue, Castle Hill, NSW 2154</p>     
                  <p>Phone:(02)8677 7884</p>
                  <p>Mobile: 0434195770</p> 
                  <p>Email: ellenzhaom@gmail.com</p>                     
                </div>
                
                <div className="col-12 col-sm-12 col-md-4">
                  <h5> Opening Hours </h5>
                  <table>
                    <tbody>
                      <tr>
                        <td>MON</td>
                        <td> </td>
                        <td>  11am - 8pm</td>
                      </tr>
                      <tr>
                        <td>TUE  </td>
                        <td> </td>                        
                        <td>  11am - 8pm</td>
                      </tr>
                      <tr>
                        <td>WED</td>
                        <td> </td>                        
                        <td>  11am - 8pm</td>
                      </tr>
                      <tr>
                        <td>THUR</td>
                        <td></td>                        
                        <td>  11am - 8pm</td>
                      </tr>
                      <tr>
                        <td>FRI</td>
                        <td></td>                        
                        <td>  11am - 8pm</td>
                      </tr>
                      <tr>
                        <td>SAT</td>
                        <td></td>                        
                        <td>  11am - 8pm</td>
                      </tr>
                      <tr>
                        <td>SUN</td>
                        <td> </td>                        
                        <td>  Closed</td>
                      </tr>
                    </tbody>
                  </table>                   
                </div>


                <div className="col-12 col-sm-12 col-md-4">
                  <h5> Fees & Payments </h5>
                  <p>Initial consultation fee: $100</p>                  
                </div>

        </div>

        
      </div>
      <div className="text-center">
        <p>Developed by Dr Aha Data and AI Technology PTY LTD. Copyright@2024</p>
      </div>
      
    </section>


      </div>

      </Switch>
    </Router>


    );    
  }
}

export default App;
