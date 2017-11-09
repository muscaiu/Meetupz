## Installing client steps
This is the place for your application front-end files.

1. create-react-app .    //to generate it in the client_src folder

2. in package.json set PORT= 3001 && react-scripts start //to start on port 3001

3. clean up the client by removing logo, css, etc

4. Changed App to a simple function, Added React Router V4, React-Router-Dom

5. Added Router, Created Main, About, Meetups Components

6. Index runs App, App runs Main, Main runs the routes 

7. Adding MaterializeCSS, Jquery, and Font-Awesome

8. Creating and twaeking Navbar and adding it in App above Main

9. Initializing MaterializeCss Navbar

10. Added the + button

11. Added the About page

12. Added axios to get meetups from /api/meetups and displaying them

13. Separated each meetup into MeetupItem Component

14. Added plain MeetupDetails Components and Route

15. Added a Back button(redirect to home)

16. Fetching api/meetups/${meetupId} and displaying it in MeetupDetails

17. Adding plain Edit and Delete buttons in MeetupDetails

18. Created the AddMeetup Form Component with submit action

19. Posting new meetup to the DB