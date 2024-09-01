export function createTestimonial(parent, obj){
  parent.innerHTML = `
    <article class="container testimonial">
      <figure class="testimonial-img-box">
        <img class="img" src=${obj.img} alt="${obj.name}'s image" />
        <caption>
          <div class="stars">
          ${`<img
            src="../images/icons/star.svg"
            alt="a golden star"
            class="icon"
          /> `.repeat(obj.starts)}
          </div>
          <span class="reviews">(${obj.reviews}) reviews</span>
        </caption>
      </figure>
          <div class="testimonial-text-box">
            <blockquote class="testimonial-text">
              ${obj.testimonial}
            </blockquote>
             <div class="name-arrows">
              <div class="testimonial-names">
                <p class="testimonial-name">${obj.name}</p>
                <p class="testimonial-job">${obj.jobTitle}</p>
              </div>
            </div>
          </div>
    </article>
    `
}