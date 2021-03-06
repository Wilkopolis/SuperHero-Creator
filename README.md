# SuperHero-Creator
create your own super hero and upload it to super hero server thing

 * [How to run](#how-to-run)
 * [Development Notes](#development-notes)
 * [Implementation Start](#implementation-start)
 * [Possible Features](#possible-features)
 * [After Thoughts](#after-thoughts)

# How to run

When you first launch the app (index.html) you should be taken to the Super Heroes screen that displays all the super heroes that belong to your api key (you may have to edit the apiKey variable in the script if the current api key has expired). From this page you can choose to create a new hero or merge two existing heroes. To create a new hero click on the 'new' button. To merge two heroes, first select 2 heroes and then the 'merge' button should become available. From either the New Hero or Merge Heroes screen, you can click the 'cancel' button to be taken back to the Super Heroes screen at any time. 

On the New Heroes screen, you can fill out the attributes and qualities of your new super hero. To add a power or a weakness, type the power/weakness into the 'Super Characteristic' box and click either the 'Power' or 'Weakness' button. After you fill out all the fields, click submit to add a new hero to your account(apikey). To see your new hero after you have added him or her, click the cancel to be taken back to the Super Heroes screen or simply refresh.

The Merge Heroes screen was not finished. This screen would function similarly to the New Hero screen. The attributes and powers however would operate differently. The attributes and powers would each be divs/buttons inside of the purple boxes that would highlight when selected (1 of each attribute, no more than 5 powers total, etc.). Then according to the rules of the data types, I would take the selected attributes, powers, name, gender and weaknesses and create a new hero much like the process in the onNewHeroSubmitClick().

# Development Notes

Its a client side app. My biggest question is "who is the end user?". I think that question would heavily affect many of the design choices. Along with that, "what is the deployment environment?". I would choose my software strategy differently if this were to run on say arcade machines compared to workstations.

Data types aside it looks like there will need to be a way for the user to interface with the software. I'm going to spring for a gui because I like highly interactive software. I predict the breadth of the work is going to be the flow of combining and creating these data types (heros). It looks like the second part of the application will be getting/posting heroes with the api. I'm planning on testing the two systems independently, designing and testing the get/post api interaction part first then the ui that handles all the data type/user interface stuff. I'm tempted to do this in C# or use some graphics libraries to make it look really nice. However given time constraints and the small scale of things I'm leaning towards scripts.

Plan of Attack:

Step 1

HTTP API Interface

Make the GET work.

Make the POST work.

Does PATCH need to work?

After spending a few minutes reading up on technologies that would fill in the gaps for this program, I've started writing some basic scripts. Hopefully something a bit more tangible will help me identify some of the nuances of this project. 

Doing some research it looks like the requests module is popular. I'll grab that down and set up my environment. 

After some fiddling with the package set up I was able to get a GET from the url/api key. I'm predicting spending about 3-4 hours settling on an implementation and getting the api interaction fleshed out, then 4-5 hours creating and finishing up the gui.

Step 2
GUI
I've used pygame before but I think there is probably a more appropriate package. I read tkinter is a popular choice. I will look into that.

Step 3
Data: structures, algorithms, and storage
This seems pretty straight forward, the superhero structure will have some plaintext attributes ("hero_name") and some lists ("powers"). It doesn't look like there will need to be any type of local storage or complex data structure interaction. 

Step 4
Combining them all/Testing

--- 
A few hours later

This is going to be fun. After some thought I've come to the follow choices:

Python/Some Python GUI Package 
I didn't see any great looking python gui packages. I feel this would be an excellent choice for a console level application, however I've decided to make an interactive user interface. I like python for tools and scripts but I didn't feel this would be my choice for this project given the other available options.

Compiled Graphics
I like C# for this. I like compiled work, its robust and consistent. My decision came down to the scale and constraints of the project.

If this was a superhero application to be used company wide or even provided to a customer as a tool for managing their superheros, I would probably have chosen this or a similar option. I could also more securely hide the api key in the compiled program compared to bare script. 

However the target platform is not specified. If this was an end-user client that was supposed to have as broad an audience as possible, I would be cornering myself by using certain graphics libraries (WPF doesn't like non-windows environments).

Given no specified scale or environment and the advantages of other options-I'm not going to pick compiled graphics either.

HTML/JS
I think for effort spent I will get the most out of this choice. Additionally HTML/JS is excellent for simple ui's. The tools available for making buttons and interactive pages far surpass ease of development for the other two options. And I want this thing to look good. Not as reliable as the compiled graphics option. Each browser does their own interpretation of JS and I've had varying results. Additionally they update often. On top of which the user experience may vary wildly with the extensions or security options that block js entirely. Without a specified audience I am going to have fun and make it interactive.

Plan of Attack:
My plan hasn't changed much since earlier. Through a thin html page use javascript to get/post/patch heros with the api. After each of the api pieces works, start working on the ui elements. After the ui elements are laid out, start linking the basic functionality to them. After the basic functionality is in, finish the whole thing out. Then test/polish. Platforms I have readily available are Windows/Chrome, Windows/Firefox, Ubuntu/Firefox, and Android/Chrome.

#Implementation Start

---

I've now started with some basic HTML/JS to get the api interaction down.

I decided to use jquery/jquery easings for some easy HTTP messaging and visual effects. 

Looks like I got all the HTTP messaging down. Going to work on ui now. I already doodled the layout during some downtime I had today. Im going to follow that structure and lay everything out before polishing

---

I realize the HTTP/Patch functionality in the api is provided but not required. For the sake of completeness, I'll test the functionality-it should only take a few minutes-but leave the code out of the final product. If the functionality was required down the road, it would be easy to include.

The revelation I had about the UI is that while I really like a sidebar visually, it doesn't provide any extra functionality and actually becomes less clear when on certain parts of the page. I think I'll scrap it and make the client simpler. However, depending on how educated the user is about the process, the sidebar may be useful as a contextual help/faq. If this was an interface at like an amusement park kiosk where there were new users every day, then a sidebar with contextual help would be very valuable. If this was a superhero production application that a superhero company used every day, then the less explanatory text would probably suffice. If I had more time I would probably add tool tips for first time users and/or hover-able tooltips for certain buttons or page elements. 

What also comes to my attention is what type of devices are going to be used to view this client. Having opted not to make a compiled client or a mobile app, this page could be viewed from a workstation, tablet, e-reader, phone-you name it. While I think these are important to know I am just going to produce the workstation formatted page/app. If I had more time I might add a separate mobile page.

---

I am spending a lot of time placing/spacing the ui elements. More than I anticipated. I'm considering scrapping a few features as to avoid going overboard on this.

For ease of use and security I'm going to limit all the forms on the page to 50 character alphanumerics.

A conflict due to the nature of the data types are duplicate powers/weaknesses when merging heroes. The weaknesses should be easy enough, just don't show duplicates. For powers, this may be an issue I would revisit if I had more time-for now I'll just show duplicates.

#Possible Features

---

At this point the project is about 40% done, I've got the ability to go to the different screens within the application to make a new hero or merge two heroes. The ui elements are still basic html and I haven't added the JS backbone to take the data from the page and submit it to the server.

New features
During the development I had a few ideas of features I would add to this type of application that might suit the user given their needs.

Edit a hero - this seems obvious to me. There is the HTTP/patch ability for the api and the feature sounds essential. The feature would mimic the 'Create a Hero' functionality and may even be able to be rolled into the same page/interface.

a cannon to add a hero from json - this seems like the simplest tool for somebody who had to do sequential uploads. In this HTML/JS implementation this would look like to me is a text box to paste raw test that would be parsed into JSON and then posted as a new hero if valid.

a cannon to add a hero from a txt file - much like the previous feature but just dropping a file into the window. A good library for this is dropzone.js.

bulk hero upload - on top of the ability to upload a hero from source, depending on the nature of the tool the user may be required to upload many heroes at a time. This would be pointless from the ui standpoint but makes sense for some users who had to upload many heroes simultaneously. This would require parsing multiple objects out of a raw text field or multiple files, either doesn't sound too bad.

change your api key - I considered adding a small box that you could put your api key in to basically change your account/heroes. This would be helpful given that the api keys seem to expire. Also given there is no user account system, each user would have to change the script with their key just to use this client to access their own bank of heroes.

user accounts - this is a feature that would make sense in some applications. Right now there is just a single api key and if this client was to be deployed to many users, then each user would share the same collection of heroes. 

remove a hero? - this feature would be a bit tricky to implement given the api does not claim to support this functionality. I could imagine hacking this in by patching a hero's hero_name to some coded value like 'HERO_NONE' then not parsing that hero when grabbing all the rest. 

loading animation - given the asynchronous nature of the specific http requests I am using, the client is capable of handling user interaction while fetching data. Given more time, between the updating of hero elements I would throw in a spinning wheel or something to indicate the application is fetching/parsing information.

user feedback - given more time I would also put in a little bar that pops up to tell the user when a merge/new hero successfully goes through. Right now I just scroll up to the hero list when things go through successfully.

console client - another way I could have gone about this process was developing a simple console client that would rely on user parameters/input. I briefly considered this at the beginning of the process but opted to make something a bit flashier. I'm glad I stuck with the HTML/JS gui but when considering new features the idea of a console application started to sound pretty advantageous. Again much like the end user and the running environment, the lifecycle of this client would also impact the value of a console application over a web client. Adding new features is pretty easy when its just another command line parameter or state in a simple console application. 

	✓ Works in Chrome
	✓ Works in Firefox
	✓ Actually Works pretty well on Mobile
	? Ubuntu Firefox - My Ubuntu installation got corrupted, ended up not testing

#After Thoughts

--- 
I included some development screenshots in the screenshot directory

I decided to implement the "Create a new Hero" and just describe the rest as to not spend too much time. Speaking of time I spent about 3 hours getting up to the point of creating the html page. So that includes researching libraries, writing some functionality to test the get/post api interaction, and also messing around in some early scripts to the same effort. After a few hours of placing html elements and wiring them to script I found the working "add a new hero" to be a fair stopping point.

Afterwards I feel I made a realistic assessment of the prompt and created a sufficient solution. I wish I had considered a console application a bit more. As for choice of implementation, I am pretty happy with HTML/JS overall. Without knowing any target environment/end user I kind of just chose my own. I learned a bit about javascript, doing things I haven't done before. I hadn't used javascript before to send or receive http messages, so this was a bit of a learning experience. As for the UI I think a multi-paged approach would have been a good idea. On some resolutions the vertical flow of information can become a bit dense. I like not trying to fill the page with as much information as possible (try to keep all the elements towards the center). Using multiple pages I wouldn't have had to deal with the vertical space concerns. However I feel the current implementation is natural enough. Total runtime was about 5 hours (note taking not included) and I enjoyed working on it.
