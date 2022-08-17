
const vanGogh = document.getElementById("vanGogh-heart");
const vanGoghLikes = document.getElementById("vanGogh-likes");
let vanGoghCount = 21;

const courbet = document.getElementById("courbet-heart");
const courbetLikes = document.getElementById("courbet-likes");
let courbetCount = 4;

const ducreux = document.getElementById("ducreux-heart");
const ducreuxLikes = document.getElementById("ducreux-likes");
let ducreuxCount = 152;

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

vanGoghLikes.innerHTML = ` ${vanGoghCount} likes`

vanGogh.addEventListener("click", function() {
    
    vanGoghCount += 1;

    posts[0].likes = vanGoghCount;

    vanGoghLikes.innerHTML = ` ${vanGoghCount} likes`
})


courbetLikes.innerHTML = ` ${courbetCount} likes`

courbet.addEventListener("click", function() {
    
    courbetCount += 1;

    posts[1].likes = courbetCount;

    courbetLikes.innerHTML = ` ${courbetCount} likes`
})


ducreuxLikes.innerHTML = ` ${ducreuxCount} likes`

ducreux.addEventListener("click", function() {
    
    ducreuxCount += 1;

    posts[2].likes = ducreuxCount;

    ducreuxLikes.innerHTML = ` ${ducreuxCount} likes`
})
