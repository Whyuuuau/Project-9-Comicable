function deleteTransaction() {
    //di fe taro key nya input hidden(?)
    let comic = document.getElementById("comicId");
    firebase.database().ref("collections" + comic).remove()
        .then(function() {
            alert('Removed from Collections');
            location.reload();
        })
        .catch(function(error) {
            console.log('Something Wrong : ' + error.message);
        });
};