import one from "../asset/images/t1.jpg"
import two from "../asset/images/t2.jpg"
import three from "../asset/images/t4.jpg"




//product
function Product() {
    return (
      <div class="product">
        <div class="box">
          <img src={one}></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorum illum ipsam quae facere quidem sunt totam aut aliquam mollitia rem, commodi numquam minus neque animi dolores sapiente facilis ipsum!</p>
        </div>
  
        <div class="box">
          <img src={two}></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorum illum ipsam quae facere quidem sunt totam aut aliquam mollitia rem, commodi numquam minus neque animi dolores sapiente facilis ipsum!</p>
        </div>
  
        <div class="box">
          <img src={three}></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorum illum ipsam quae facere quidem sunt totam aut aliquam mollitia rem, commodi numquam minus neque animi dolores sapiente facilis ipsum!</p>
        </div>
      </div>
    )
  }
export default Product  