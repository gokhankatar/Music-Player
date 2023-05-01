class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    };

    getName() {
        return this.title + " - " + this.singer
    };
};

const musicList = [
    new Music("Goosebumps", "Travis Scott", "travis2.jpg", "goosebumps.mp3"),
    new Music("Many Men", "50 Cent", "50cent.jpg", "many-men.mp3"),
    new Music("Lust", "Kendrick Lamar", "kendrick1.jpg", "lust.mp3"),
    new Music("Stop trying to be God", "Travis Scott", "travis1.jpg", "stop-trying-to-be-god.mp3"),
    new Music("Rich Niggaz", "J.Cole", "jcole-2.jpg", "rich-niggaz.mp3"),
    new Music("Rap God", "Eminem", "eminem1.jpg", "rap-god.mp3"),
    new Music("She Knows", "J.Cole", "jcole1.jpg", "she-knows.mp3")
];
