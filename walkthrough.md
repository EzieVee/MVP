Display in the posts all the related posts, kinda like the feed


How to make clickable link display catalogue for each specific image without having to hard code each one? Instead an ejs way if possible


    <!--  -->
<!-- 
    <div class="container">
      <div class="row justify-content-center mt-5">
        <ul class="row list-unstyled">
          <li class="col-6 justify-content-between mt-5">
            <span><%=workouts[i].name%></span>
            <span><%=workouts[i].type%></span>
            <span><%=workouts[i].walkthrough%></span>
            
          </li>
          </ul>
      </div>
    </div>   -->


    how to put my code into the post.ejs without causing it to crash(crash happesn cause the code registers the ejs that hasn't been submitted yet but the code is takes in what will be used)/



    why isn't the data being organized and sent to mongodb in order/


       <div class="container">
      <div class="row justify-content-center mt-5">
        <ul class="row list-unstyled">
          <% for(var i=0; i<workout.length; i++) {%>
            <li class="col-6 justify-content-between mt-5">
              <span><%= workouts[i].name%></span>
            
              </a>
            </li>
          <% } %>
          </ul>
      </div>
    </div>  


    Media player that display when a link is clicked, and is able to play a different video if a different link is clicked.

    start a new row after X amount of div's

    <!-- hamburger menu code -->

    /* Menu Wrap */

.menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.menu-wrap .toggler {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
  z-index: 2;
}

.menu-wrap .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hamburger lines */

.menu-wrap .hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background: #fff;
  transition: all 0.4s ease;
  /* align-items: center; */
  /* justify-content: center; */
}

/* Hamburger top and bottom line */

.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}

.menu-wrap .hamburger > div::after {
  top: 10px;
}

/* Toggler Animation */

.menu-wrap .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}


/* Turns line into X */
.menu-wrap .toggler:checked + .hamburger > div:before,
.menu-wrap .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate on hover when checked */
.menu-wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

/* Show Menu */
.menu-wrap .toggler:checked ~ .menu {
  visibility: visible;
}

.menu-wrap .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: var(--menu-speed);
}
.menu-wrap .toggler:checked ~ .menu > div > div {
  opacity: 1;
  transition: opacity 0.4s ease 0.4s;
}

.menu-wrap .menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-wrap .menu > div {
  background: var(--overlay-color);
  width: 225vw;
  height: 225vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
  border-radius: 50%;
}

.menu-wrap .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.menu-wrap .menu > div > div > ul > li {
  list-style: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
}
.menu-wrap .menu > div > div > ul > li > a {
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
}
.menu-wrap .menu > div > div > ul > li > a:hover {
  color: teal;
}

#showcase {
  background: white;
  color: #fff;
  height: 100vh;
  position: relative;
}

#showcase:before {
  content: '';
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#showcase .showcase-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#showcase h1 {
  font-size: 4rem;
}

/* showcase keyframe */
@keyframes heading {
  to {
    transform: translateX(0);
  }
}

#showcase p {
  font-size: 1.3rem;
  padding-top: 15px;
}


auto scroll feed horizontal

