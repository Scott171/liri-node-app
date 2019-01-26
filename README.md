# liri-node-app
This app uses the APIs for Spotify, OMDB and Bands In Town. Using Node, a command and a search item will pull information from the needed API.

Spotify-This-Song without song
![Image description](https://github.com/Scott171/liri-node-app/blob/master/Assets/spotify-acebase.PNG)
In this example the command was Spotify-this-song without a song being input by the user. When this happend the default song is "the Sign" by Ace of Base.

Spotify-This-Song Hello
![Image description](https://github.com/Scott171/liri-node-app/blob/master/Assets/SpotifyThis.PNG)
This is an example of the Spotify-This-Song commang with the song "Hello" being input by the user. 

Movie-This without movie
![Image description](https://github.com/Scott171/liri-node-app/blob/master/Assets/move-nobody.PNG)
This example uses the Movie-This without a movie being input by the user. It uses the OMDB API to pull data for the movie "Mr. Nobody".

Movie-This Glass
![Image description](https://github.com/Scott171/liri-node-app/blob/master/Assets/Movie.PNG)
This uses the same command Movie-This but with a chosen movie by the user "Glass" and pulls data from the API and displays the requested data.

Concert-This Kiss
![Image description](https://github.com/Scott171/liri-node-app/blob/master/Assets/ConcertThis.PNG)
Concer-This pulls concert information for the input band, in this instanct "Kiss" was the selected band. Data is pulled using the Bands in Town API and MOMENT is being used to display the date form the data.

Do-What-It-Says
![Image description](https://github.com/Scott171/liri-node-app/blob/master/Assets/DoWhat.PNG)
This command uses the FS package to use information on a Random.txt file. The data on the txt file is "spotify-this-song, I want it that way" and it uses this data to determine what command needs to be used and the search term to search.
