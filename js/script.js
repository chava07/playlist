/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sigo Chambienado", "Soy Montero", "Radicamos En South Central", "Disculpe Usted"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
var images_links = ["https://i.ytimg.com/vi/C-uICquhs04/maxresdefault.jpg", "https://m.media-amazon.com/images/I/71cvoRR5zzL._SS500_.jpg", "https://i1.sndcdn.com/artworks-000290612871-xer5dw-t500x500.jpg", "https://i.ytimg.com/vi/zoiBaj_cDFA/maxresdefault.jpg"];
var artists = ["Fuerza Regida", "Fuerza Regida", "Fuerza Regida", "Fuerza Regida"];
var song_length = ["03:27", "03:38", "03:54", "03:22"];
var links = ["https://www.youtube.com/watch?v=C-uICquhs04", "https://www.youtube.com/watch?v=0BvVHUTGfdw", "https://www.youtube.com/watch?v=aIzLqOlcX8U", "https://www.youtube.com/watch?v=zoiBaj_cDFA"];
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        
        $("#songs").append("<p>" + song + "</p>")
        
    })
    
    images_links.forEach(function(images_links) {
        
        $("#images").append("<img src='" + images_links + "'>")
        
    })
    
    artists.forEach(function(artists) {
        
        $("#artists").append("<p>" + artists + "</p>")
        
    })
    
    song_length.forEach(function(song_length) {
        
        $("#lengths").append("<p>" + song_length + "</p>")
        
    })
    
    links.forEach(function(links) {
        
        $("#links").append("<a href='" + links + "'>Link</a>")
        
    })
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var newS = $("#song").val();
    var newI = $("#image").val();
    var newA = $("#artist").val();
    var newL = $("#length").val();
    var newLink = $("#link").val();
    
    songs.push(newS);
    images_links.push(newI);
    artists.push(newA);
    song_length.push(newL);
    links.push(newLink);
    

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();