

## Overview of Process
### Stage 0 - Planning (All)
Established the goal of creating an app to showcase technical projects in a social media environment. We developed a wireframe, outlined component swap on the front-end, agreed on the overall data flow of the project, set data structure with clear models, determined what we needed at a minimum to be released from the back-end to begin testing, set timelines for when we hoped to achieve each state, and reviewed general Git workflow.

### Stage 1 - Initial Set-Up
Back End (Ron, Nick, Ryan, Vasilis)

- Initialized backend repo
- Project scaffolding and file structure

Front End (Anna, Jose, Ari)

- Initialized frontend repo
- Project scaffolding and file structure
- Created dummy data to run tests
- Develop UI concept

Goal: Working on these items allowed us to get to a point where we could divide work and pair program

### Stage 2 - Get Back End Running, Front End Development
Back End (Ron, Nick, Ryan, Vasilis)

- Review and build models
- Register models, set up serializers, build views
- Set up back end routes with rest_framework and paths
- Added some dummy data to back end
- Research Cloudinary media hosting
- Lots of Heroku deployment debugging

Front End (Anna, Ari, Jose)

- Built Components and rendered outlines to page
- Built Screens and set up front end routes
- Refined home page design
- Built likes component

Goal: Get some basic functionality on the page, identify unforseen problems and adjust timeline.

### Stage 3 - Connect Front and Back Ends, Front End Logic
Back End (Ron, Nick, Ryan, Vasilis)

- Researched and worked on JWT User Auth (can return tokens)
- Deployed site and tested creation of posts from front end create panel
- Refactored User models
- Set up Cloudinary API and presets

Front End (Anna, Jose, Ari, Ron)

- Unified the CSS practices throughout
- Started build out of profile page
- Create post, delete button logic built
- Added responsive mobile design
- Route testing

Goal: We worked to ensure the site was in working order with the basic features we wanted to achieve.

### Stage 4 - Enhance Backend Data and Finalize Front End
Back End (Ron, Ryan, Nick, Vasilis)

- Resolved deployment issues after front end was deployed
- Prioritized key features and refined backend data
- Replaced all dummy data (cat photos) with real project posts
- Created users for all team members
- Added comments throughout code, de-briefed front end team on back end code, added README

Front-End (All)

- Finalized logo
- Reviewed and finalized CSS design across pages for consistency
- Finished profile page, filtered delete buttons based on users
- Added cropping to Cloudinary upload widget
- Deployed on Netlify

Goal: Finalized project and prepared for presenting

API Data
API Endpoints
Home: https://shop-express.herokuapp.com/products
Snippet of object output:
API Screenshot

Future Features
Full user authentication
Have Cart tied to each individual user (so it can be maintained on login and logout)
Orders Page
Track Order History
Add admin account that can add/delete products from inventory (full CRUD)
Add payment page
Add user profiles with payment information, address, etc.
Wire Frame
Wire Frame

Team
Anna Druzhinina
LinkedIn: https://www.linkedin.com/in/anna-druzhinina/

GitHub: https://github.com/annadruzhinina

Angela Kwon
LinkedIn: https://www.linkedin.com/in/angelakwon2/

GitHub: https://github.com/kwonangela

Bryant Perez
LinkedIn: https://www.linkedin.com/in/bryxntperez

GitHub: https://github.com/bryxnt1

Muhammad Warrad
LinkedIn: https://www.linkedin.com/in/muhammadwarrad/

GitHub: https://github.com/muhammadwarrad

Ryan Ehrlich
LinkedIn: https://www.linkedin.com/in/ryanehrlich/

GitHub: https://github.com/Jagerziel