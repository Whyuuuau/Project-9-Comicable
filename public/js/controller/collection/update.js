function saveUpdate() {
    //di fe taro key nya input hidden(?)
    let comic = document.getElementById("comicId");
    //di fe taro input hidden key juga(?)
    let comicTitle = document.getElementById("comic-title");
    let userId = document.getElementById("user");
    firebase.database().ref('booking/' + comic).update({
        comic: comicTitle,
        user: userId
    })
};