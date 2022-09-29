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