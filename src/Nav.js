import React from 'react'

const Nav = ({cartCount}) => {
      console.log (cartCount)
  
  return (
 
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Phone-details</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Rating</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Comments</a>
        </li>
      </ul>
    </div>
      <button className='btn btn-outline-dark' type='submit'>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Cart<span className='badge bg-dark text-white ms-1 rounded-pill'>{cartCount }</span>
                </button>
  </div>
</nav>
</div>
  )
}

export default Nav