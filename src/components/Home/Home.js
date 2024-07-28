import React from 'react'

function Home() {
  return (
    <div className='bg-primary position-relative' style={{height:"540px"}}>
      {/* <!-- Carousel --> */}
      <div id="demo" class="carousel slide  h-100" data-bs-ride="carousel ">

        {/* <!-- Indicators/dots --> */}
        <div class="carousel-indicators ">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div class="carousel-inner h-100  bg-danger" >
          <div class="carousel-item active h-100  ">
            <img src="/images/Schl3.jpg" alt="Los Angeles" class="d-block w-100 h-100  object-fit-cover    bg-primary"  />
            <div className=' carousel-caption rounded  p-2 position-absolute  mb-5 h-auto' style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
            <h1 >Welcome to Springdale Public School, where we nurture young minds for a brighter future."
            </h1>
            </div>
           
          </div>
          <div class="carousel-item h-100">
            <img src="/images/Schl_img2.png" alt="Chicago" class="d-block w-100 h-100   object-fit-cover" />
          </div>
          <div class="carousel-item h-100">
            <img src="/images/events.jpg" alt="New York" class="d-block w-100 h-100  object-fit-cover " />
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  )
}

export default Home
