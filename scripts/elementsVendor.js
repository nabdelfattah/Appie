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
{/* <div class="">
          <figure class="testimonial-img-box">
            <img class="img" src="images/people/customer-4.jpg" />
            <caption>
              <div class="stars">
                <img
                  src="images/icons/star.svg"
                  alt="a golden star"
                  class="icon"
                />
                <img
                  src="images/icons/star.svg"
                  alt="a golden star"
                  class="icon"
                />
                <img
                  src="images/icons/star.svg"
                  alt="a golden star"
                  class="icon"
                />
                <img
                  src="images/icons/star.svg"
                  alt="a golden star"
                  class="icon"
                />
                <img
                  src="images/icons/star.svg"
                  alt="a golden star"
                  class="icon"
                />
              </div>
              <span class="reviews">(4.7) reviews</span>
            </caption>
          </figure>
          <div class="testimonial-text-box">
            <blockquote class="testimonial-text">
              Why I say old chap that is spiffing chip shop such a fibber the
              bee's knees, the wireless Richard fantastic do one cracking goal
              pukka backing cake starkers much don't get shirty with me argy
              bargy, I snaff chimney pot blimey he lost his bottle cup.
            </blockquote>
            <div class="name-arrows">
              <div class="testimonial-names">
                <p class="testimonial-name">Hanson Deck</p>
                <p class="testimonial-job">Web developer</p>
              </div>
              <div class="arrows-box">
                <button
                  class="btn-arrows btn-testimonial"
                  aria-label="previous testimonial"
                >
                  <svg
                    class="icon-arrows icon-testimonial md hydrated"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                    />
                  </svg>
                </button>
                <button
                  class="btn-arrows btn-testimonial"
                  aria-label="next testimonial"
                >
                  <svg
                    class="icon-arrows icon-testimonial"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    width="16"
                    height="16"
                  >
                    <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div> */}