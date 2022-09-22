# Take home assessment
This was my attempt at the problem to create a status monitoring service. 

I was not able to complete this assignment, but I would like to explain my workflow and though process
# The problem/task broken down
1. Create poll function
   - Need to fetch data from API
   - Determine/validate the clinician is inbound
     - if invalid (out-of-bounds): send email alert
2. Create a validation method to compare the coordinates of clinician and the polygon shapes
3. Create job or schedule to poll in real-time

# What I completed
I wrote a poll function that fetches the data from the clinician status API. I found that there are libraries that are able to validate if a point is in a polygon, so I took advantage of `turf.booleanPointInPolygon`. I used this in the poll function. 

# What I didn't complete
I struggled with sending emails with JS. I don't have much experience with this and found smtp.js library, but struggled to get working. I also struggled to make this service run in real-time or for a specific period of time ie run for an hour. 

# My workflow
When I first read the instructions, I was a little confused on the task. I started by playing with http://geojson.io and the clinician status API. When I first called the endpoint, I was very confused on what the response was. I looked into understanding geojson format and after exploring geojson.io it all clicked. 

Next, I prototyped fetching the endpoint and exploring other library methods to decide if a point is inbounds of the shape or not. I explored d3.js and turf.js; ultimately, I went with turf.js.

After prototyping, I implemented a poll function that will fetch from the API and then validate it. At this point, I don't have any email alerts. 

Next, I began prototyping sending emails. This is where I struggled and couldn't send emails. I tried looking into smtp.js and sendgrid but wasn't able to get it to work. 

This is where I stopped, but assuming I got this to work the next step would be to create a run function that would call the poll function multiple times with different clinician ids. 

Currently, my poll will only take a specific id, but we want to be able to iterate through all clinicians. 

# Final thoughts
Since I was not able to complete this assessment, I wanted to give my thoughts and explanation of my work. Before this assignment, I have had 0 experience in API monitoring, email alerting, etc. I spent a lot of my time researching the different components of this task and was able to determine the 3 main parts. First, we need to poll from the clinician status api, then we need some way of validating it and if it's not valid then send an alert. Finally, we should be running this service in real-time. 

I recognize that this task was very straight forward and I firmly believe that it was completely fair. I am disappointed I was not able to complete it, but I believe it's my inexperience in this type of software development. At the very least, I wanted to be thorough in this readme to demonstrate my accountability and honesty. 