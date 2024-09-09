
import Card2 from '../cards/Card2'

const description1 = "Travel with peace of mind knowing we're always here";
const description2 = "Explore our curated of must-visit destinations around the globe";
const description3 = "Wheter it's the pristine beaches of Bali, the historic streets";

const Content5 = () => {


  return (
    <div className="container-content5">
      <div></div>
      <div></div>
      <div><Card2 description = {description1}/></div>
      <div><Card2 description = {description2}/></div>
      <div></div>
      <div><Card2 description = {description3}/></div>
      <div></div> 
    </div>
  )
}

export default Content5
