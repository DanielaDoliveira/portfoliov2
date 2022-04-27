import { createGlobalStyle } from "styled-components";
import imgBanner from '../images/not.jpg'
import {shade} from 'polished'
export default createGlobalStyle `

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
  
    
  }


  body{
    margin: 0;
    font-family: 'Open Sans', sans-serif;
   
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
    background: ${props =>props.theme.colors.background};
    color: ${props =>props.theme.colors.text};
    
    
  }

  /*Menus*/
  .navb {
    background: ${props=>props.theme.colors.primary};
    color: ${props=>props.theme.colors.text};
    padding:20px;
   

  }
 
  .link{
    color:${props=>props.theme.colors.plinks};
    font-size:1.5rem;
  }
  .link:selected{
    font-weight: bold;
   
  }
  
  .link:hover{
    text-decoration: underline;
    color:${props=>props.theme.colors.plinksHover};
    font-weight: bold;
  }
  .projectnav{
    color:${props=>props.theme.colors.slinks};
    font-size:1.5rem;
   
  }
  
  .projectnav:hover{
    text-decoration: underline;
    color:${props=>props.theme.colors.slinksHover};
    font-weight: bold;
  }
  .projectnav:selected{
    font-weight: bold;
  }

  .my-switcher-icon{
    margin-left:10px;
    margin-top:2px;
    color:#fff;
  }
  .my-switcher-icon-sun{
    margin-right:10px;
    margin-top:2px;
    color:#fff;
  }
  
  /*About*/
  .banner{

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-image:url(${imgBanner});
   
    background-position:center;
    background-size: cover;
    height:50vh;

  
  }
  .banner-title{
    text-transform:uppercase;
    text-align:center;
    font-size:1.5rem;
    margin-bottom:1rem;
    color:white;
    margin-top:5px;
  }

  .banner-subtitle{
    text-transform:uppercase;
    text-align:center;
    font-size:2rem;
    color:white;
    margin-bottom:1rem;
    
  }
  .img-ban{
    margin-left:10px;
    margin-bottom:15px;
    height:40px;
  }
  .banner-btn{
    min-width:150px;
    border:solid 1px #6883BA;
    color:white;
    display:flex
    align-items:center;
    justify-content:center;
    border-radius:42px;
    background-color: transparent;
    font-size:1rem;
    padding:10px 15px;
    margin:0 auto;
    margin-bottom:1rem;
    margin-top:2rem;
  }
  .banner-btn:hover{
    background:#6883BA;
    color:white;
  }

.banner-img{
  width:100px;
 margin-top:50px;
 border-radius:50px;
}
  #aboutC{
   
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    padding-bottom: 100%;
    margin-top:30px;
  
  }


  
  #aboutC h2{
    color: ${props=>props.theme.colors.h}
    margin:30px;
  }
  
 .list{
   background:${props=>props.theme.colors.background}
 }

  
  .contact{
    background-color:${props=>props.theme.colors.background};
    color: ${props =>props.theme.colors.text};
    border:none;
  }
  .contact:hover{
    background-color:${props=>props.theme.colors.background};
    color: ${props =>props.theme.colors.text};
    border:none;
  }
  .contact:clicked{
    background-color:${props=>props.theme.colors.background};
    color: ${props =>props.theme.colors.text};
    border:none;
  }
  .contact-badge{
    width:30px;
    font-size:30px;
  }
  
  /*Projects*/
  
  
  
  
  .btnMoreInfo{
  
    margin-top:20px;
    padding:15px;
    border: none;
    background-color: #3D3B8E;
    font-weight: bolder;
  }
  .btnMoreInfo:hover{
   
    background-color: #6883BA;
  }
  
  #reactEmbed{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
   
  }
  #reactEmbed iframe{
    width: 50%;
    padding-top:20px;
    height: 50%;
    
  }
  .reactContainer{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }


  
  /*Footer*/


  #footerColor{
    color: #D8DBE2;
    background:#6883BA;
    text-align: center;
    padding: 20px;
   

  }

.social-media{
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: center;
  width:100%;
  margin:10px;
  font-weight:bolder;
}
.social-media-btn{
  background-color: #6883BA;
  border:none;
  padding:10px;
  cursor:pointer;
  
}
.social-media-btn:hover{
  background-color: #6883BA;
  border:none;
}

.social-media-btn:clicked{
  background-color: #6883BA;
  border:none;
}
.social-media-icons{
 
  width:20px;
  height:50px;
  text-decoration:none;
  color:#fff;
 
}

`;