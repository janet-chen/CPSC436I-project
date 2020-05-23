# CPSC436I-project

### Teamteam
Janet Chen, Christine Vu, Stevens Qiu, Kevin Yang

## Project Description

Our project will try to facilitate vacation planning by aggregating travel related content from various sources, providing a preview of the experience for people interested in or planning a vacation. Users will be able to save images, videos, and text content for individual destinations, which will be saved as links in the database. We will save login data as well so that any content that the user saves can be associated with that user. They can then revisit, categorize, and organize their saved content.

## Project Task Requirements

### Minimal
 - User Login
	1. Create “Register” and “Login” forms in ReactJS
    2. Integrate User Authentication library (eg. Passport JS) with Node JS backend and MongoDB
    3. Have frontend ReactJS application query NodeJS server for user authentication
 -  Search functionality for vacation destinations
    1. Gather search APIs from media sources (ie. Google Search, Instagram, Pinterest)
    2. Create search bar which sends query string to search APIs
    3. Naively present search results to page (eg. present media from alternating sources side by side)
 - Allow users to save media from their search results
 - Provide scheduling functionality for vacation destinations
### Standard
 - Organize saved content by country to help users narrow down which destination they’re viewing most frequently
 - Organize content using Pinterest layout or folder metaphor
 - Display flight data for desired destination (price, schedule(?))
 - Display additional information on destination displayed in photo/video/article
	 - Via a dropdown menu or hovering over the content 
	 - Additional info may include address, pricing, reviews
 - Allow users to add notes to videos that they’ve saved
 - Provide a vision board/collage area of the content they’ve save that users can interact with
### Stretch
- Drag and drop media into schedule
- Having a price estimator of different portions of the trip (e.g. restaurants, hotels, flights, tickets)
- Save clips of video (trimming functionality)
- Recommendations for places to visit
- Enable users to upload their own content
- Enable users to share their plan or collaborate with others

## Prototypes
### Main search page
**![](https://lh4.googleusercontent.com/RRfc9FHMz9QtffcbATUEh84SBxeqOfARhj_sykS8B_ueJoiedWk1CaFNPvXe6Jct_C2h39I8OOz3Sq8lv9dwTDpBKdVZnLLIkxtWfkcQx0d837secTjCFm8PpYKfkKC0-QwIgf1C)**
### Travel scheduler
**![](https://lh5.googleusercontent.com/qt8ZCdjwkhHGtQdqMu3LYYV9IgeSIibEkVJM1DADwsxB6ID6IYBIgUwCwkxHSrDTn1-X6WTaWJDuoz3raRI-2ei18-VXBu26gg-6JqVNvnE0Xp5dbx-EINdDtC41tLy-W_FOsza4)**
