import React from 'react';
import consultationIMG from '../../../images/about1.jpg';
import TrainingIMg from '../../../images/about2.jpg';
import perfectBodyIMG from '../../../images/about3.jpg';
import AboutPost from '../AboutPost/AboutPost';
const AboutData = [
    {
        title : 'Free Consultation',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        image:consultationIMG
    },
    {
        title : 'Best Training',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        image:TrainingIMg
    },
    {
        title : 'Build Perfect Body',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        image:perfectBodyIMG
    },
]



const About = () => {
    return (
        <section className="about my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 style={{color: 'red',fontWeight:'600',fontSize:'30px'}}>ABOUT</h5>
                    
               </div>
               <div className="card-deck mt-5">
                    {
                        AboutData.map(about => <AboutPost about={about} key={about.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default About;